---
title: "Batch OData"
description: "Agrupa várias operações em um único POST /$batch (multipart/mixed); escritas dentro de um change set são atômicas (tudo ou nada)."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `$batch` · `Batch` · `Change Set` · `multipart/mixed` · `boundary` · `Content-ID` · `Processamento em Lote`

> **Definição**
> Agrupa várias operações em um único POST /\$batch (multipart/mixed); escritas dentro de um change set são atômicas (tudo ou nada).
{.is-info}

**Problema:** 100 contatos × \~150 ms = 15 s de latência + falhas parciais difíceis de tratar.

```http
POST .../c4codataapi/$batch
Content-Type: multipart/mixed; boundary=batch_123
x-csrf-token: <token>

--batch_123
Content-Type: multipart/mixed; boundary=changeset_abc

--changeset_abc
Content-Type: application/http
Content-Transfer-Encoding: binary

POST AccountCollection HTTP/1.1
Content-ID: 1
Content-Type: application/json

{ "AccountName": "Global Innovations Ltda.", "RoleCode": "CRM000" }
--changeset_abc
Content-Type: application/http
Content-Transfer-Encoding: binary

POST $1/AccountContacts HTTP/1.1
Content-Type: application/json

{ "FirstName": "Carlos", "LastName": "Mendes" }
--changeset_abc--
--batch_123--
```
- **GETs** ficam fora de change sets e são independentes (falha de um não afeta outros) — ótimo para inicializar UIs.
- **Change set:** POST/PATCH/DELETE atômicos (ACID) — commit de tudo ou rollback de tudo.
- **`Content-ID` + `$1`:** referencia uma entidade criada antes no mesmo lote (pai ainda sem ObjectID).
- **Resposta:** geralmente `202 Accepted`, multipart na mesma ordem — cada parte com seu status (`201`, `400`…). Para depurar, isole a parte com erro e rode-a sozinha.
- **Limites:** 100–500 operações por lote (payload, timeout, memória); divida cargas massivas; monitore no OData API Monitor.
- **Não use** para uma operação só, lógica condicional entre operações ou operações muito demoradas.

## 🔗 Relacionados
- [Operações CRUD OData](/glossario/operacoes-crud-odata)
- [Deep Insert OData](/glossario/deep-insert-odata)
- [CSRF Token](/glossario/csrf-token)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
