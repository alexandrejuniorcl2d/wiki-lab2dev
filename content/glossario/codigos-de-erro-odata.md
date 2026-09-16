---
title: "Códigos de Erro OData"
description: "Status HTTP e payload de erro SAP (code, message, innererror com transactionid e propertyref) para tratar falhas de integração."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `HTTP Status OData` · `400 Bad Request` · `401 Unauthorized` · `404 Not Found` · `429 Too Many Requests` · `500 Internal Server Error` · `innererror` · `errordetails` · `propertyref`

> **Definição**
> Status HTTP e payload de erro SAP (code, message, innererror com transactionid e propertyref) para tratar falhas de integração.
{.is-info}

| Código | Significado típico |
|---|---|
| `400 Bad Request` | Sintaxe, campo inexistente, tipo errado (ex.: string em campo numérico), navigation property digitada errado |
| `401 Unauthorized` | Falha de autenticação |
| `403 Forbidden` | CSRF inválido ou falta de permissão |
| `404 Not Found` | ObjectID inexistente |
| `412 Precondition Failed` | Conflito de ETag |
| `429 Too Many Requests` | Rate limiting (não é erro do sistema) |
| `500 Internal Server Error` | Falha inesperada no backend (expand complexo etc.) |

```json
{ "error": { "code": "COD_ABC/001",
    "message": { "lang": "pt", "value": "A propriedade 'StatusPreferencial' não é válida." },
    "innererror": { "transactionid": "A1B2...", "timestamp": "...",
      "errordetails": [ { "code": "...", "message": "...",
                          "propertyref": "StatusPreferencial", "severity": "error" } ] } } }
```

## 🔗 Relacionados
- [CSRF Token](/glossario/csrf-token)
- [ETag OData](/glossario/etag-odata)
- [Resiliência de Integrações](/glossario/resiliencia-de-integracoes)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
