---
title: "Operações CRUD OData"
description: "Escrita via HTTP: POST cria (201), PATCH atualiza parcialmente (204), PUT substitui tudo, DELETE remove (204) — sempre com CSRF token."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `POST` · `PUT` · `PATCH` · `MERGE` · `DELETE` · `201 Created` · `204 No Content` · `Content-Type` · `Accept`

> **Definição**
> Escrita via HTTP: POST cria (201), PATCH atualiza parcialmente (204), PUT substitui tudo, DELETE remove (204) — sempre com CSRF token.
{.is-info}

| Verbo | Endpoint | Corpo | Sucesso |
|---|---|---|---|
| **POST** | coleção (`/AccountCollection`) | JSON da nova entidade | `201 Created` + entidade com `ObjectID`/`UUID` (guarde!) |
| **PATCH** (ou MERGE, legado) | entidade (`/AccountCollection('ID')`) | só os campos alterados | `204 No Content` |
| **PUT** | entidade | entidade completa | `204` — ⚠️ campos omitidos são apagados |
| **DELETE** | entidade | — | `204 No Content` |

**Prefira PATCH:** menos payload, não sobrescreve campos que você não pretendia (inclusive campos novos adicionados no futuro), código mais simples.

**Headers de escrita:** `Content-Type: application/json` · `Accept: application/json` · `x-csrf-token: <token>` (ver [CSRF Token](/glossario/csrf-token)) · `If-Match` (ver [ETag OData](/glossario/etag-odata)).

```json
POST .../AccountCollection
{ "AccountName": "Nexus Soluções Inovadoras", "RoleCode": "CRM000",
  "CountryCode": "BR", "CityName": "São Paulo" }
```

## 🔗 Relacionados
- [CSRF Token](/glossario/csrf-token)
- [ETag OData](/glossario/etag-odata)
- [Deep Insert OData](/glossario/deep-insert-odata)
- [Batch OData](/glossario/batch-odata)
- [Códigos de Erro OData](/glossario/codigos-de-erro-odata)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
