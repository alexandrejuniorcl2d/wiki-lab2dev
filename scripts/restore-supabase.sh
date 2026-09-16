#!/usr/bin/env bash
# Restaura um backup gerado por scripts/backup-supabase.sh num projeto Supabase VAZIO.
#
# Caminho recomendado em caso de desastre: crie um projeto Supabase novo, restaure
# nele e troque DB_HOST/DB_USER/DB_PASS no Render. O banco antigo fica intacto
# até você ter certeza de que está tudo certo.
#
# Uso: scripts/restore-supabase.sh backups/supabase-AAAAMMDD-HHMMSS.sql.gz.enc
# Requer BACKUP_PASSPHRASE e as variáveis SUPABASE_DB_* do projeto de DESTINO.

source "$(dirname "$0")/lib/supabase.sh"
cd "$ROOT"

file="${1:-}"
if [ -z "$file" ] || [ ! -f "$file" ]; then
  echo "Uso: scripts/restore-supabase.sh ARQUIVO.sql.gz.enc" >&2
  exit 1
fi
BACKUP_PASSPHRASE="$(require BACKUP_PASSPHRASE)"
export BACKUP_PASSPHRASE

echo "→ Destino: $PGHOST:$PGPORT/$PGDATABASE (sslmode=$PGSSLMODE)"
require_empty_public

echo "→ Restaurando $file (transação única: ou entra tudo ou nada)"
{
  # O índice de busca do wiki usa operadores do pg_trgm, que não entra num dump só do schema
  echo 'CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;'
  # O schema public já existe em qualquer banco, e comentar nele exige ser o dono (no Supabase, não somos)
  openssl enc -d "${OPENSSL_ENC_ARGS[@]}" -pass env:BACKUP_PASSPHRASE -in "$file" | gunzip \
    | sed -e '/^CREATE SCHEMA public;$/d' -e '/^COMMENT ON SCHEMA public /d'
} | pg_client 17 psql -q -v ON_ERROR_STOP=1 --single-transaction > /dev/null

echo "→ Protegendo as tabelas"
lock_down_public_api

pages="$(pg_client 17 psql -tAc 'select count(*) from pages' | tr -d '[:space:]')"
echo "Restauração concluída: $pages páginas. Atualize DB_HOST, DB_USER e DB_PASS no Render se o projeto mudou."
