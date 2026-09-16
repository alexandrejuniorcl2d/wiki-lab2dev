---
title: "Metadata Extension"
description: "Objeto separado (ANNOTATE VIEW) que adiciona ou sobrescreve anotações de uma CDS sem alterá-la, organizado em camadas de prioridade."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `MDE` · `DDLX` · `ANNOTATE VIEW` · `@Metadata.layer` · `Camadas de Metadados`

> **Definição**
> Objeto separado (ANNOTATE VIEW) que adiciona ou sobrescreve anotações de uma CDS sem alterá-la, organizado em camadas de prioridade.
{.is-info}

- **Pré-requisito:** `@Metadata.allowExtensions: true` na view base.
- **Camadas (`@Metadata.layer`, menor → maior prioridade):** `#CORE` (SAP) → `#LOCALIZATION` (país) → `#INDUSTRY` → `#PARTNER` → `#CUSTOMER`.

```sql
@Metadata.layer: #CUSTOMER
annotate view ZC_SalesOrder with {
  @UI.lineItem: [{ position: 10, label: 'Pedido' }]
  SalesOrder;
}
```

**Vantagens:** separação de responsabilidades (backend na DDL, UI na DDLX), ativação rápida (ignora ativação em massa no dicionário), adaptar UIs Fiori standard sem tocar no objeto. No ADT: *Source Code > Extract Metadata Extension* move as anotações automaticamente.

## 🔗 Relacionados
- [Anotações CDS](/glossario/anotacoes-cds)
- [Extend View](/glossario/extend-view)
- [Fiori Elements](/glossario/fiori-elements)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
