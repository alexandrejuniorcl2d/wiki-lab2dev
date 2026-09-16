#!/usr/bin/env bash
# Copia o banco do ambiente local (docker compose) para o Supabase.
#
# Rode UMA vez, com o projeto Supabase vazio e ANTES do primeiro deploy no Render.
# Se o Wiki.js subir primeiro com o banco vazio, ele cria as próprias tabelas
# e abre o assistente de instalação para quem acessar a URL.
#
# Uso: scripts/migrate-to-supabase.sh

source "$(dirname "$0")/lib/supabase.sh"
cd "$ROOT"

LOCAL_DB="$(env_value DB_NAME wiki)"
LOCAL_USER="$(env_value DB_USER wikijs)"

echo "→ Conectando em $PGHOST:$PGPORT/$PGDATABASE (sslmode=$PGSSLMODE)"
major="$(server_major)"
echo "  Postgres $major no destino"
require_empty_public

if ! docker compose ps --status running --services | grep -qx db; then
  echo "Erro: o banco local não está rodando. Suba com: docker compose up -d db" >&2
  exit 1
fi

mkdir -p backups
dump="backups/migracao-supabase-$(date +%Y%m%d-%H%M%S).sql"
echo "→ Exportando o banco local para $dump"
docker compose exec -T db pg_dump -U "$LOCAL_USER" --no-owner --no-privileges --no-comments "$LOCAL_DB" > "$dump"
if [ "$major" -lt 17 ]; then
  # Parâmetro que só existe a partir do Postgres 17
  sed -i.bak '/^SET transaction_timeout/d' "$dump" && rm -f "$dump.bak"
fi

echo "→ Restaurando no destino (transação única: ou entra tudo ou nada)"
pg_client 17 psql -q -v ON_ERROR_STOP=1 --single-transaction < "$dump" > /dev/null

echo "→ Protegendo as tabelas"
lock_down_public_api

echo "→ Conferindo"
local_pages="$(docker compose exec -T db psql -U "$LOCAL_USER" -d "$LOCAL_DB" -tAc 'select count(*) from pages' | tr -d '[:space:]')"
remote_pages="$(pg_client 17 psql -tAc 'select count(*) from pages' | tr -d '[:space:]')"
echo "  Páginas: local $local_pages · Supabase $remote_pages"
if [ "$local_pages" != "$remote_pages" ]; then
  echo "Erro: a quantidade de páginas não confere." >&2
  exit 1
fi
echo "Migração concluída. O dump usado ficou em $dump (fora do Git; apague quando não precisar mais)."
