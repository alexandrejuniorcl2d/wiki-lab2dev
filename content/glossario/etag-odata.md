---
title: "ETag OData"
description: "Controle otimista de concorrência: envie o ETag lido no header If-Match; se outro usuário alterou antes, o servidor responde 412 Precondition Failed."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `If-Match` · `412 Precondition Failed` · `Optimistic Locking` · `Lost Update`

> **Definição**
> Controle otimista de concorrência: envie o ETag lido no header If-Match; se outro usuário alterou antes, o servidor responde 412 Precondition Failed.
{.is-info}

Problema (*lost update*): A e B leem v1; A salva (v2); B salva baseado em v1 e sobrescreve A.
Solução: `PATCH ... If-Match: "v1"` → se o servidor está em `"v2"` → **`412 Precondition Failed`** → recarregar e tentar de novo. Use em PATCH e DELETE.

## 🔗 Relacionados
- [Controle de Concorrência RAP](/glossario/controle-de-concorrencia-rap)
- [Operações CRUD OData](/glossario/operacoes-crud-odata)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
