---
title: "Deep Insert OData"
description: "Criar entidade pai e filhos (ex.: conta + endereço) num único POST, aninhando os filhos pela navigation property — atômico e com menos chamadas."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `Deep Insert` · `Deep Create`

> **Definição**
> Criar entidade pai e filhos (ex.: conta + endereço) num único POST, aninhando os filhos pela navigation property — atômico e com menos chamadas.
{.is-info}

```json
POST .../AccountCollection
{
  "AccountName": "Global Tech e Filiais",
  "RoleCode": "CRM000",
  "AccountAddress": [ { "Street": "Rua da Tecnologia, 789", "City": "Campinas",
                        "CountryCode": "BR", "PostalCode": "13083-852" } ]
}
```

## 🔗 Relacionados
- [Operações CRUD OData](/glossario/operacoes-crud-odata)
- [Navigation Property OData](/glossario/navigation-property-odata)
- [Batch OData](/glossario/batch-odata)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
