---
title: "Modelagem SAC"
description: "Construção de modelos no SAC: modelo × dataset, New Model baseado em medidas × modelo clássico por contas, tipos de dimensão, medidas e agregações, hierarquias, wrangling, geo-enrichment, DAC, qualidade, moedas e habilitação para planejamento."
tags: ["glossario","sap-sac"]
---
**Também conhecido como:** `Modeler SAC` · `New Model` · `Measure-based Model` · `Classic Model` · `Account-based Model` · `Account Model` · `Dimensão Account` · `Dimensão Version` · `Dimensão Organization` · `Exception Aggregation` · `Geo-Enrichment SAC` · `Choropleth Layer` · `Bubble Layer` · `Rate Type SAC` · `Disaggregation Behavior`

> **Definição**
> Construção de modelos no SAC: modelo × dataset, New Model baseado em medidas × modelo clássico por contas, tipos de dimensão, medidas e agregações, hierarquias, wrangling, geo-enrichment, DAC, qualidade, moedas e habilitação para planejamento.
{.is-info}

| Modelo (governança) | Dataset (agilidade) |
|---|---|
| TI, arquitetos, devs de BI | Negócio e analistas |
| Fontes corporativas, relatórios recorrentes, planejamento, segurança granular | Exploração ad-hoc, protótipos a partir de Excel/CSV |
| DAC, conversão de moeda, hierarquias complexas, *single source of truth* | Wrangling no dataset, menor overhead |

| Classic Model (account-based) | New Model (measure-based) |
|---|---|
| Dimensão **Account** obrigatória e uma única medida padrão | Múltiplas medidas explícitas, cada uma com tipo, agregação e formatação |
| Rígido para tipos e agregações distintas | Tipos corretos, agregação flexível, queries mais diretas |

**Tipos de dimensão:** **Account** (receitas, despesas, drivers — financeiro) · **Organization** (centros de custo, entidades; uma por modelo) · **Date** (menor período: ano, trimestre, mês, dia; criada automaticamente) · **Version** (Real, Orçado, Forecast) · **Generic** (produto, cliente, canal).

**Medidas:** *data type* (Decimal até 7 casas e 31 dígitos; Integer) · *decimal places, scale, unit* (92.624.530 → 92.62M) · *aggregation type* (SUM, COUNT, AVG, MAX, MIN) · **exception aggregation** (ex.: saldo de estoque usa `LAST` no tempo, não soma).

**Hierarquias:** parent-child (desbalanceadas, organogramas) × level-based (continente → país → região) — habilitam drill-down.

**Wrangling no modelador:** colunas calculadas (`DaysBetween([Hire_Date], now())/365`, `Concatenate([FirstName], " ", [LastName])`), split/merge de colunas, `ABS()`, `Replace()`, `UpperCase()`.

**Geo-enrichment:** por **coordenadas** (lat/long → dimensão de localização → *bubble layer* para lojas/CDs) ou por **nomes de área** (países, estados, cidades → polígonos → *choropleth layer*).

**Data Access Control (DAC):** restringe leitura e escrita por membro de dimensão (ex.: João vê só Região Norte) — um único modelo e dashboard para vários perfis; *write* é crucial em planejamento. Detalhes em [Administração SAC](/glossario/administracao-sac).

**Qualidade:** painel de qualidade detecta membros inválidos (caracteres proibidos em IDs), números inválidos e **membros não mapeados** (linhas omitidas); aba de validação de query exige corrigir erros após mudança de metadados.

**Cálculo no modelo × na story:** no modelo = performance, reuso e governança (ex.: `[Receita Bruta] - [Devoluções]`); na story = agilidade e ad-hoc. Regra: KPIs centrais no modelo, exploratórios na story.

**Moedas:** ativar conversão nas preferências → tabela de taxas (*Source Currency, Target Currency, Date, Rate*, opcional *Category* Real/Budget) → **rate type** por conta (*Average* para INC/EXP, *Closing* para AST/LEQ) → usuário escolhe a moeda de exibição.

**Habilitar planejamento:** opção *Planning* (write-back), dimensão Version com versões privadas/públicas, **data locking**, **disaggregation behavior** → libera input em tabelas, data actions, VDTs e alocações (ver [SAC Planning](/glossario/sac-planning)).

**Exercício — modelo de vendas (New Model):** medidas Faturamento (Decimal, milhares, BRL), Unidades (Integer, SUM), Preço Médio (calculada `[Faturamento]/[Unidades]`), Margem (%); dimensões Produto (Generic: categoria → SKU), Geografia (Organization: país → cidade, geo-enrichment), Tempo (Date, dia), Versão (Real/Orçado), Canal (Generic); DAC na Geografia por gerente regional.

> "Um modelo ruim gera dashboards lentos e errados."

## 🔗 Relacionados
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [Conexões SAC](/glossario/conexoes-sac)
- [Stories SAC](/glossario/stories-sac)
- [SAC Planning](/glossario/sac-planning)
- [Administração SAC](/glossario/administracao-sac)

## 📚 Fontes
- Apostila - SAP Analytics Cloud

---
🧭 [SAP Analytics Cloud](/glossario/temas/sap-analytics-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
