# Funções compartilhadas pelos scripts que acessam o banco do Supabase.
# Uso: source "$(dirname "$0")/lib/supabase.sh"
#
# Variáveis (do ambiente ou, se ausentes, do .env na raiz do projeto):
#   SUPABASE_DB_HOST       session pooler, ex.: aws-0-us-east-1.pooler.supabase.com
#   SUPABASE_DB_USER       ex.: postgres.abcdefghijklmnop
#   SUPABASE_DB_PASSWORD
#   SUPABASE_DB_PORT       padrão 5432 (session pooler)
#   SUPABASE_DB_NAME       padrão postgres
#   SUPABASE_SSLMODE       padrão verify-full (valida o certificado com supabase/prod-ca-2021.crt)

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

# Lê KEY do ambiente; se não houver, do .env (sem executar o arquivo, então senhas com $ ou & são seguras)
env_value () {
  local key="$1" default="${2:-}"
  if [ -n "${!key:-}" ]; then
    printf '%s' "${!key}"
  elif [ -f "$ROOT/.env" ] && grep -q "^${key}=" "$ROOT/.env"; then
    grep "^${key}=" "$ROOT/.env" | tail -1 | cut -d= -f2- | sed -e 's/^"\(.*\)"$/\1/' -e "s/^'\(.*\)'$/\1/"
  else
    printf '%s' "$default"
  fi
}

require () {
  local key="$1" value
  value="$(env_value "$key")"
  if [ -z "$value" ]; then
    echo "Erro: defina $key no .env ou no ambiente." >&2
    exit 1
  fi
  printf '%s' "$value"
}

export PGHOST PGUSER PGPASSWORD PGPORT PGDATABASE PGSSLMODE
PGHOST="$(require SUPABASE_DB_HOST)"
PGUSER="$(require SUPABASE_DB_USER)"
PGPASSWORD="$(require SUPABASE_DB_PASSWORD)"
PGPORT="$(env_value SUPABASE_DB_PORT 5432)"
PGDATABASE="$(env_value SUPABASE_DB_NAME postgres)"
PGSSLMODE="$(env_value SUPABASE_SSLMODE verify-full)"

# Roda um cliente do Postgres (psql, pg_dump) num container da versão pedida
# Ex.: pg_client 17 psql -c 'select 1'
pg_client () {
  local major="$1"
  shift
  docker run --rm -i \
    -v "$ROOT/supabase:/ca:ro" \
    -e PGHOST -e PGUSER -e PGPASSWORD -e PGPORT -e PGDATABASE -e PGSSLMODE \
    -e PGSSLROOTCERT=/ca/prod-ca-2021.crt \
    -e PGCONNECT_TIMEOUT=20 \
    "postgres:${major}-alpine" "$@"
}

# Versão major do servidor (ex.: 17), para usar um pg_dump compatível
server_major () {
  pg_client 17 psql -tAc 'show server_version_num' | tr -d '[:space:]' | cut -c1-2
}

# Garante que o destino não tem tabelas no schema public (migração e restauração só rodam em banco vazio)
require_empty_public () {
  local tables
  tables="$(pg_client 17 psql -tAc "select count(*) from pg_tables where schemaname = 'public'" | tr -d '[:space:]')"
  if [ "$tables" != "0" ]; then
    echo "Erro: o schema public do destino já tem $tables tabela(s). Use um projeto Supabase vazio." >&2
    exit 1
  fi
}

# Tira dos papéis da API pública do Supabase (anon, authenticated) o acesso às
# tabelas do wiki, inclusive às criadas no futuro (ex.: migrações do Wiki.js).
# Sem isso, hashes de senha e segredos de sessão ficariam acessíveis pela Data API.
lock_down_public_api () {
  pg_client 17 psql -q -v ON_ERROR_STOP=1 <<'SQL'
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
    REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon, authenticated;
    REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM anon, authenticated;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM anon, authenticated;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON SEQUENCES FROM anon, authenticated;
  END IF;
END $$;
SQL
  local exposed
  exposed="$(pg_client 17 psql -tAc "select count(*) from information_schema.role_table_grants where table_schema = 'public' and grantee in ('anon', 'authenticated')" | tr -d '[:space:]')"
  if [ "$exposed" != "0" ]; then
    echo "Erro: ainda há $exposed permissão(ões) de anon/authenticated em tabelas do wiki." >&2
    exit 1
  fi
  echo "  Acesso de anon/authenticated às tabelas do wiki: bloqueado"
}

# Criptografia dos backups: parâmetros explícitos para o arquivo gerado no
# GitHub Actions (OpenSSL) abrir no macOS (LibreSSL) e vice-versa
OPENSSL_ENC_ARGS=(-aes-256-cbc -pbkdf2 -iter 200000 -md sha256)
