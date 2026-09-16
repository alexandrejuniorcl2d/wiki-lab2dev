---
title: "CDS Hierarchy"
description: "Entidade para modelar e consultar estruturas pai-filho (organogramas, BOMs) de forma nativa e performática, via auto-associação."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `DEFINE HIERARCHY` · `Hierarquia CDS` · `CHILD TO PARENT ASSOCIATION`

> **Definição**
> Entidade para modelar e consultar estruturas pai-filho (organogramas, BOMs) de forma nativa e performática, via auto-associação.
{.is-info}

```sql
define hierarchy Z_HIER_EXAMPLE
  as parent child hierarchy( source Z_DATA_SOURCE
     child to parent association _Parent
     start where parent_id is initial )
{ key node_id, parent_id }
```
Permite funções hierárquicas no ABAP SQL (subordinados diretos e indiretos). Suportado apenas em SAP HANA.

## 🔗 Relacionados
- [Associação CDS](/glossario/associacao-cds)
- [CDS View](/glossario/cds-view)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
