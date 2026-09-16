---
title: "CSRF Token"
description: "Token anti-CSRF exigido pelo SAP em toda requisição modificadora: faça GET com x-csrf-token: fetch, guarde o token e os cookies e reenvie nas escritas."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `x-csrf-token` · `x-csrf-token fetch` · `Cross-Site Request Forgery` · `403 Forbidden` · `Cookies de Sessão` · `MYSAPSSO2` · `SAP_SESSIONID`

> **Definição**
> Token anti-CSRF exigido pelo SAP em toda requisição modificadora: faça GET com x-csrf-token: fetch, guarde o token e os cookies e reenvie nas escritas.
{.is-info}

**Fluxo Fetch → Store → Use:**
1. `GET .../$metadata` (ou qualquer coleção) com header `x-csrf-token: fetch`.
2. Resposta `200 OK` traz `x-csrf-token: AbCdEf...` + `Set-Cookie` (sessão).
3. `POST/PATCH/DELETE/$batch` com `x-csrf-token: AbCdEf...` **e** os cookies da mesma sessão.

- Token é único por sessão; GETs não precisam dele (só para obtê-lo).
- **`403 Forbidden` ("CSRF token validation failed")** = autenticado, mas token ausente/inválido/expirado — o erro mais comum. (`401` seria falha de autenticação.)
- Postman e bibliotecas HTTP gerenciam o *cookie jar* automaticamente.

## 🔗 Relacionados
- [Operações CRUD OData](/glossario/operacoes-crud-odata)
- [Autenticação OData](/glossario/autenticacao-odata)
- [Segurança ABAP](/glossario/seguranca-abap)

## 📚 Fontes
- Apostila - OData
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
