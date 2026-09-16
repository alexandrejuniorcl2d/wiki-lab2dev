---
title: "Virtual Data Model"
description: "Arquitetura em camadas das CDS standard do S/4HANA (Basic → Composite → Consumption) que traduz tabelas técnicas em entidades de negócio reutilizáveis."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `VDM` · `Basic View` · `Composite View` · `Consumption View` · `Interface View` · `I_` · `C_` · `P_` · `R_` · `E_` · `@VDM.viewType`

> **Definição**
> Arquitetura em camadas das CDS standard do S/4HANA (Basic → Composite → Consumption) que traduz tabelas técnicas em entidades de negócio reutilizáveis.
{.is-info}

**Camadas (`@VDM.viewType`):**

| Camada | Papel | Analogia funcional |
|---|---|---|
| **#BASIC** (Interface `I_`) | Lê tabelas físicas e traduz nomes técnicos (`MATNR` → `Material`); associações primárias | A matéria-prima |
| **#COMPOSITE** (`I_`) | Combina basics, aplica regras de negócio, cálculos, agregações (ex.: cubos) | A inteligência de negócio / a fábrica |
| **#CONSUMPTION** (`C_`) | Otimizada para um caso de uso (app, query); anotações de UI/OData; baixo reuso | A vitrine |

**Nomenclatura:** `Prefixo_NomeSemântico[Sufixo][Versão]` — ex.: `C_GoodsMovementQuery_2`.
- `I_` interface (basic/composite) · `C_` consumption · `R_` restricted/reuso transacional do RAP (recebe o behavior) · `E_` extension include views (únicos pontos para adicionar campos) · `A_` APIs remotas · `D_` abstract/parâmetros.
- ⚠️ `P_` **Private views: proibidas** para uso customizado — mudam a qualquer upgrade.
- Sufixos: `Query`/`Q` (query analítica), `Cube`, `VH` (value help), `TP` (transacional — DSAG diz que pode ser omitido).
- `@ObjectModel.supportedCapabilities: [...]` (múltiplos papéis que a view suporta) × `@ObjectModel.modelingPattern: ...` (propósito único).

> **Regra de ouro (DSAG)**
> Use e estenda as views **liberadas** do VDM; nunca recrie o que a SAP já modelou. VDM evita dezenas de relatórios Z inconsistentes — todos partem da mesma fonte da verdade.
{.is-warning}

**Encontrar views:** app Fiori **View Browser** (filtre *Released*), SAP Help Portal e a ferramenta open-source **ZSCV_SEARCH_CDS_VIEWS**.

## 🔗 Relacionados
- [CDS View](/glossario/cds-view)
- [API Liberada](/glossario/api-liberada)
- [RAP](/glossario/rap)
- [Anotações CDS](/glossario/anotacoes-cds)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - CDS Views para Funcionais (Parte 1)
- Apostila - CDS Views para Funcionais (Parte 2)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
