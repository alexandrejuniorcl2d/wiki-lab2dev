---
title: "Data Builder"
description: "Workbench técnico do Datasphere para criar tabelas locais, views gráficas e SQL, fluxos, E-R models e semântica (chaves, associações, fato/dimensão, hierarquias, parâmetros, moeda) sobre os dados de um space."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Data Builder Datasphere` · `Tabelas Locais` · `Local Table` · `Graphical View` · `SQL View Datasphere` · `Table Function Datasphere` · `Intelligent Lookup` · `E-R Model` · `Entity-Relationship Model` · `Input Parameters Datasphere` · `Currency Conversion Datasphere` · `Data Preview Datasphere` · `Analytical Dataset` · `Semantic Usage`

> **Definição**
> Workbench técnico do Datasphere para criar tabelas locais, views gráficas e SQL, fluxos, E-R models e semântica (chaves, associações, fato/dimensão, hierarquias, parâmetros, moeda) sobre os dados de um space.
{.is-info}

**Layout:** repositório de artefatos (esquerda) · canvas gráfico ou de código (centro) · painel de propriedades — tipos, semântica, associações (direita).

**Artefatos:**
- **Tabelas locais:** físicas no HANA Cloud do space — staging, resultados intermediários, configuração. Nome técnico: alfanumérico + `_`, até **50** caracteres.
- **Graphical Views:** operadores **Join** (inner, left/right/full outer), **Union**, **Projection**, **Aggregation** — fluxo autodocumentado.
- **SQL Views:** SQLScript completo (CASE, window functions `RANK() OVER (PARTITION BY ... ORDER BY ...)`, média móvel); **Table Functions** com parâmetros para reuso. Algoritmos preditivos podem exigir **HANA Cloud Script Server**.
- **SQL Procedures:** scripts imperativos multi-etapa (TRUNCATE → INSERT → UPDATE → checks → MERGE), agendáveis em Task Chains.
- **E-R Model:** diagrama de design e documentação (não processa dados).
- **Intelligent Lookup:** *fuzzy matching* com regras e *threshold* ("SAP Brasil" ↔ "SAP do Brasil Ltda." 92%) — harmonização de dados mestres e enriquecimento.

**Semântica:**
- **Chave primária** e **associações** (relações lógicas resolvidas sob demanda; nome até 20 caracteres, permite `.`) — mais flexíveis que joins fixos.
- **Semantic usage:** **Dimension** (quem/o quê/quando — clientes, produtos, calendário) × **Fact/Analytical Dataset** (quantos — valor, quantidade). Determina drill-down no SAC (integração via *Tenant Links*).
- **Hierarquias:** **parent-child** (desbalanceadas, organogramas: EmployeeID/ManagerID) × **level-based** (níveis fixos: país → estado → cidade); conteúdo Choropleth para mapas.
- **Input parameters:** `P_TARGET_CURRENCY`, `P_START_DATE`, `P_PLAN_VERSION` — maiúsculas/números/`_`, até 30 caracteres; viram prompt no BI.
- **Colunas calculadas:** `"PRECO_UNITARIO" * "QUANTIDADE"`, `YEAR("DATA_PEDIDO")`, `CASE WHEN ... THEN 'Premium' ELSE 'Standard' END` (ex.: `0DLV_VAL`).
- **Conversão de moeda:** configurada no space com tabelas de taxas (padrão SAP `TCURR`) e mapeamento de valor, moeda origem/destino e data.

**Data Preview:** valide joins, cálculos, qualidade e parâmetros a cada passo; preview lento → revisar Workload Management e *expensive statements*.

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [Business Builder](/glossario/business-builder)
- [Analytic Model](/glossario/analytic-model)
- [Spaces Datasphere](/glossario/spaces-datasphere)
- [Integração de Dados Datasphere](/glossario/integracao-de-dados-datasphere)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 1)
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
