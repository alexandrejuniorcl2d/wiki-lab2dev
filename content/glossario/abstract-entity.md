---
title: "Abstract Entity"
description: "Definição de estrutura/tipo em CDS sem objeto no banco — o \"TYPES BEGIN OF\" do CDS, usada para tipar parâmetros de ações e funções OData."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `CDS Abstract Entity` · `DEFINE ABSTRACT ENTITY` · `Parâmetro de Ação`

> **Definição**
> Definição de estrutura/tipo em CDS sem objeto no banco — o "TYPES BEGIN OF" do CDS, usada para tipar parâmetros de ações e funções OData.
{.is-info}

```sql
define abstract entity Z_A_DISCOUNT_PARAM {
  discount_percent : abap.int1;
}
-- BDEF: action deductDiscount parameter Z_A_DISCOUNT_PARAM result [1] $self;
```

**Matriz de decisão do arquiteto CDS:**
| Cenário | Entidade | Onde a lógica reside |
|---|---|---|
| Projeção, filtro, join padrão | View Entity | Banco (SQL) |
| Cálculos complexos, libs HANA | Table Function | Banco (SQLScript/AMDP) |
| Pai-filho (organograma, BOM) | Hierarchy | Banco |
| API externa, lógica em ABAP | Custom Entity | Servidor de aplicação |
| Estrutura para ações/funções | Abstract Entity | Só metadados |

## 🔗 Relacionados
- [Custom Entity](/glossario/custom-entity)
- [Actions RAP](/glossario/actions-rap)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
