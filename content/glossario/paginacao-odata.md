---
title: "Paginação OData"
description: "Leitura em fatias com $top/$skip (cliente) ou seguindo o link __next/@odata.nextLink quando o servidor corta a resposta (ex.: 1.000 registros)."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `__next` · `@odata.nextLink` · `$skiptoken` · `Server-Side Paging` · `Client-Side Paging`

> **Definição**
> Leitura em fatias com \$top/\$skip (cliente) ou seguindo o link __next/@odata.nextLink quando o servidor corta a resposta (ex.: 1.000 registros).
{.is-info}

- **Client-side:** `$top=10` (página 1) → `$top=10&$skip=10` (página 2)…
- **Server-side:** mesmo pedindo 5.000, o servidor pode devolver 1.000 e incluir `"__next": ".../AccountCollection?$skiptoken=..."` (V2) ou `@odata.nextLink` (V4). **Sempre** verifique e siga o link em loop.
- Use `$inlinecount`/`$count` para montar a UI ("11–20 de 1.498") sem buscar tudo.

## 🔗 Relacionados
- [Query Options OData](/glossario/query-options-odata)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
