---
title: "Anotações CDS"
description: "Metadados (@) que descrevem semântica e comportamento do modelo para o runtime ABAP e frameworks (Fiori, OData, Analytics) — \"o DNA do modelo\"."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `Annotations` · `@UI` · `@Semantics` · `@Analytics` · `@OData.publish` · `@EndUserText` · `@ObjectModel` · `@AbapCatalog` · `@Metadata.allowExtensions` · `Propagação de Anotações`

> **Definição**
> Metadados (@) que descrevem semântica e comportamento do modelo para o runtime ABAP e frameworks (Fiori, OData, Analytics) — "o DNA do modelo".
{.is-info}

**Dois mundos:**

| Anotações ABAP (`@AbapCatalog`, `@AccessControl`, `@ClientHandling`) | Anotações de componente/framework (`@UI`, `@OData`, `@EndUserText`, `@Analytics`) |
|---|---|
| Avaliadas pelo runtime ABAP na ativação | Avaliadas pelos frameworks consumidores |
| Erro impede a ativação | Erro não impede a criação do objeto |

**Posição define o escopo:** antes de `define` (view) · antes de um parâmetro · antes de um campo. Sintaxe `@Familia.sub: valor` ou arrays `[ { ... } ]`.

**Famílias mais usadas:**
| Anotação | Efeito |
|---|---|
| `@EndUserText.label` | Texto/label na UI |
| `@UI.lineItem`, `@UI.selectionField`, `@UI.headerInfo`, `@UI.identification` | Colunas, filtros e cabeçalho no Fiori Elements |
| `@Semantics.amount.currencyCode`, `@Semantics.quantity.unitOfMeasure` | Liga valor à moeda/unidade (formatação e cálculos) |
| `@OData.publish: true` | Gera serviço OData (legado; no RAP use service binding) |
| `@Analytics.dataCategory: #CUBE`, `@Analytics.query: true` | Cubo e query para SAC/Query Browser |
| `@AccessControl.authorizationCheck: #CHECK` | Liga o DCL |
| `@VDM.viewType`, `@ObjectModel.*` | Camada VDM, capacidades, textos, value helps |
| `@Metadata.allowExtensions: true` | Permite [Metadata Extension](/glossario/metadata-extension) |

**Propagação:** anotações de elementos fluem da view base para a consumidora (herdadas se não redefinidas, sobrescritas se redefinidas). Precedência final: camada `#CUSTOMER` de metadata extension > view consumidora > view base.

**Perspectiva funcional:** "exibir código, nome e valor nessa ordem" → `@UI.lineItem` com `position`; "filtrar por organização de vendas" → `@UI.selectionField`; "valor sempre com moeda" → `@Semantics.amount.currencyCode`; "disponível no SAC" → `@Analytics.query: true`.

## 🔗 Relacionados
- [Metadata Extension](/glossario/metadata-extension)
- [Fiori Elements](/glossario/fiori-elements)
- [CDS Analítica](/glossario/cds-analitica)
- [CDS View](/glossario/cds-view)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - CDS Views para Funcionais (Parte 2)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
