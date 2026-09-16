---
title: "OData"
description: "Protocolo REST padronizado (OASIS) para expor e consumir dados via HTTP com metadados, consultas por URL e operações CRUD — padrão de UI e APIs no mundo SAP."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `Open Data Protocol` · `OData V2` · `OData V4` · `Serviço OData` · `REST OData`

> **Definição**
> Protocolo REST padronizado (OASIS) para expor e consumir dados via HTTP com metadados, consultas por URL e operações CRUD — padrão de UI e APIs no mundo SAP.
{.is-info}

**Anatomia de uma URI OData:**
```
https://<host>/sap/c4c/odata/v1/c4codataapi   /AccountCollection   ?$filter=CountryCode eq 'BR'&$select=AccountID
└──────────── Service Root ─────────────┘   └── Resource Path ─┘  └────────────── Query Options ─────────────┘
```

**Conceitos:**
- **Service Document** (raiz do serviço): lista as coleções disponíveis.
- **[\$metadata](/glossario/metadata-odata)** (EDMX): a "documentação viva" — EntitySets, EntityTypes, Properties, NavigationProperties.
- **EntitySet / Collection:** recurso consultado (`AccountCollection`); entidade individual por chave: `AccountCollection('ObjectID')`.
- **[Navigation Properties](/glossario/navigation-property-odata):** "pontes" entre entidades (em vez de JOIN manual).
- **Formatos:** JSON (preferido) e XML/Atom.
- **Verbos:** GET, POST, PUT/PATCH/MERGE, DELETE — ver [Operações CRUD OData](/glossario/operacoes-crud-odata).

**V2 × V4 no mundo SAP:** V2 é o legado amplamente usado (SEGW, C4C `c4codataapi`); V4 é o padrão moderno do RAP/Fiori Elements (necessário para Flexible Programming Model). O service binding do RAP gera ambos.

**No ecossistema SAP:** exposto pelo [SAP Gateway](/glossario/sap-gateway) (on-premise) ou pelo RAP (service binding); consumido por Fiori/UI5, integrações e o [Service Consumption Model](/glossario/service-consumption-model).

**Checklist do arquiteto:** filtre primeiro (`$filter`) · selecione o mínimo (`$select`) · pagine sempre · conte de forma inteligente · `$expand` com cautela · prefira JSON · `PATCH` > `PUT` · CSRF sempre · ETags · `$batch` para volume · teste no **Postman** antes de codificar.

## 🔗 Relacionados
- [Metadata OData](/glossario/metadata-odata)
- [Query Options OData](/glossario/query-options-odata)
- [Operações CRUD OData](/glossario/operacoes-crud-odata)
- [Batch OData](/glossario/batch-odata)
- [SAP Gateway](/glossario/sap-gateway)
- [Service Definition e Service Binding](/glossario/service-definition-e-service-binding)
- [Tecnologias de Integração SAP](/glossario/tecnologias-de-integracao-sap)

## 📚 Fontes
- Apostila - OData
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira
- Apostila - CDS Views para Funcionais (Parte 2)

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
