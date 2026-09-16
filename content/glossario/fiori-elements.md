---
title: "Fiori Elements"
description: "Framework que gera a UI Fiori em runtime a partir de metadados e anotações OData (floorplans List Report, Object Page, OVP, ALP) — o frontend obedece ao backend."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `SAP Fiori Elements` · `Floorplans` · `List Report` · `Object Page` · `Overview Page` · `OVP` · `Analytical List Page` · `ALP` · `Worklist` · `Smart Controls` · `SmartTable` · `SmartFilterBar` · `Flexible Programming Model` · `FPM` · `Building Blocks` · `Local Annotations`

> **Definição**
> Framework que gera a UI Fiori em runtime a partir de metadados e anotações OData (floorplans List Report, Object Page, OVP, ALP) — o frontend obedece ao backend.
{.is-info}

**Paradigma:** a UI não é codificada; é renderizada a partir do `$metadata` + anotações (`@UI`, `@ObjectModel`…) definidas nas CDS — a CDS vira a fonte da verdade da UI.

**Floorplans:**
| Floorplan | Uso |
|---|---|
| **List Report** | Busca, filtros e lista de objetos — porta de entrada dos apps transacionais |
| **Object Page** | Detalhe de um objeto em seções/facets e tabelas |
| **Overview Page (OVP)** | Dashboard de cards agregando várias fontes |
| **Analytical List Page (ALP)** | KPIs + gráficos interativos + tabela para análise |
| Worklist | Lista de itens de trabalho |

**Smart controls** (leem metadados e se configuram sozinhos): `SmartTable` (colunas, formatação, variantes, export Excel, personalização; `enableAutoColumnWidth` desde 1.87) e `SmartFilterBar` (campos de filtro, value helps F4, variantes; anotações fiscais desde 1.74).

**Anotações-chave:** `@UI.headerInfo`, `@UI.lineItem`, `@UI.selectionField`, `@UI.facet` (`#IDENTIFICATION_REFERENCE`, `#LINEITEM_REFERENCE`, `#FIELDGROUP_REFERENCE`), `@UI.identification`, `@UI.fieldGroup`, `@UI.hidden`, `@ObjectModel.text.element`, `@Consumption.valueHelpDefinition`; ação: `@UI.lineItem: [{ type: #FOR_ACTION, dataAction: 'accept', label: 'Aceitar' }]`; analítico: `@OData.applySupportedForAggregation: #FULL`, `@Aggregation.default: #SUM`; hierarquia: `@OData.hierarchy.recursiveHierarchy`.

**Backend intocável?** Use **anotações locais** (`annotation.xml` no projeto — têm precedência sobre as do backend).

| | Freestyle (pro-code) | Fiori Elements (low-code) |
|---|---|---|
| Flexibilidade | Máxima (cada pixel) | Limitada a floorplans + extensões |
| Velocidade | Menor | Apps em minutos |
| Padronização | Depende do time | Garantida (Horizon incluso) |
| Manutenção | Mudança no backend exige ajuste no front | UI se adapta sozinha |
| Uso ideal | UX única, processos não lineares | CRUD-Q transacional e analítico |

**Extensões:** custom sections/facets (view XML freestyle numa Object Page), custom columns/actions, controller extensions com hooks. **Flexible Programming Model (FPM)** — SAPUI5 ≥ 1.94, só OData V4 — building blocks e extension points misturam freestyle e elements nos dois sentidos (DSAG: use-o antes de partir para freestyle).

**Limites:** pouco controle pixel-perfect, lógicas de UI muito dinâmicas são difíceis, curva de aprendizado do vocabulário de anotações.

> **Regra de ouro arquitetural**
> **80% padrão / 20% exceção:** Fiori Elements para tudo que cabe nos floorplans; freestyle para os apps "joia da coroa". DSAG: "sempre que possível, Fiori Elements".
{.is-success}

## 🔗 Relacionados
- [Anotações CDS](/glossario/anotacoes-cds)
- [RAP](/glossario/rap)
- [Metadata Extension](/glossario/metadata-extension)
- [SAP Fiori Tools](/glossario/sap-fiori-tools)
- [Extensibilidade Fiori](/glossario/extensibilidade-fiori)
- [SAPUI5](/glossario/sapui5)

## 📚 Fontes
- Apostila - Fiori e SAPUI5
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - ABAP RAP
- Apostila - CDS Views para Funcionais (Parte 2)
- Apostila - Padrão Wrapper para BAPIs

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
