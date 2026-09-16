#!/usr/bin/env bash
# Gera um backup criptografado do banco do Supabase em backups/.
# O plano gratuito do Supabase não faz backup. Este script roda todo dia pelo
# GitHub Actions (.github/workflows/backup.yml) e também pode rodar localmente.
#
# Uso: scripts/backup-supabase.sh
# Requer BACKUP_PASSPHRASE (ambiente ou .env) além das variáveis SUPABASE_DB_*.
# Para restaurar: scripts/restore-supabase.sh ARQUIVO

source "$(dirname "$0")/lib/supabase.sh"
cd "$ROOT"

BACKUP_PASSPHRASE="$(require BACKUP_PASSPHRASE)"
export BACKUP_PASSPHRASE

major="$(server_major)"
mkdir -p backups
out="backups/supabase-$(date -u +%Y%m%d-%H%M%S).sql.gz.enc"

echo "→ pg_dump (Postgres $major) de $PGHOST/$PGDATABASE"
# Só o schema public (tabelas do wiki). Os schemas internos do Supabase
# (auth, storage...) já existem em qualquer projeto e conflitariam na restauração.
pg_client "$major" pg_dump --schema=public --no-owner --no-privileges --no-comments \
  | gzip \
  | openssl enc "${OPENSSL_ENC_ARGS[@]}" -salt -pass env:BACKUP_PASSPHRASE -out "$out"

# Um backup só vale se abre: descriptografa o arquivo inteiro, testa o gzip e
# confere o cabeçalho do dump. (Sem "head | grep -q" direto no pipe: com
# pipefail, o encerramento antecipado da leitura seria tratado como falha.)
fail () {
  echo "Erro: o backup gerado não pôde ser verificado ($1)." >&2
  exit 1
}
openssl enc -d "${OPENSSL_ENC_ARGS[@]}" -pass env:BACKUP_PASSPHRASE -in "$out" | gunzip -t || fail "descriptografia ou gzip"
header="$(openssl enc -d "${OPENSSL_ENC_ARGS[@]}" -pass env:BACKUP_PASSPHRASE -in "$out" 2>/dev/null | gunzip 2>/dev/null | head -c 2000 || true)"
case "$header" in
  *'PostgreSQL database dump'*) ;;
  *) fail "cabeçalho do pg_dump ausente" ;;
esac

echo "Backup verificado: $out ($(wc -c < "$out" | tr -d ' ') bytes)"
if [ -n "${GITHUB_OUTPUT:-}" ]; then
  echo "file=$out" >> "$GITHUB_OUTPUT"
fi
