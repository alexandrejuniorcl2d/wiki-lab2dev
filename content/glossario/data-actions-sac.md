---
title: "Data Actions SAC"
description: "Motor de cálculo do planejamento no SAC: data actions (cópia, alocação por drivers, advanced formulas), multi actions que orquestram passos, value driver trees para what-if, calendário/workflow, IA, integração com BPC e retração do orçamento para o…"
tags: ["glossario","sap-sac"]
---
**Também conhecido como:** `Data Actions` · `Data Action` · `Copy Step` · `Allocation Step` · `Advanced Formulas` · `RESULTLOOKUP` · `MEMBERSET` · `Multi Actions` · `Multi Action` · `Value Driver Tree` · `Value Driver Trees` · `VDT` · `Retraction SAC` · `ACDOCP` · `BPC SAC` · `Automatic Data Action Task`

> **Definição**
> Motor de cálculo do planejamento no SAC: data actions (cópia, alocação por drivers, advanced formulas), multi actions que orquestram passos, value driver trees para what-if, calendário/workflow, IA, integração com BPC e retração do orçamento para o S/4HANA (ACDOCP).
{.is-info}

**Data actions:** "sequência de ações de dados para fazer mudanças estruturadas nos dados do modelo" — scripts visuais, execução em massa, auditáveis e **parametrizáveis** (versão, período, centro de custo).

**Passos:**
| Passo | Uso | Exemplo |
|---|---|---|
| **Copy** | "Seed the budget": origem → destino com transformação opcional | Actual 2023 → Budget 2024 +X% |
| **Allocation** | Rateio baseado em **driver**: fonte, destino e peso | R\$ 500.000 de despesas corporativas por headcount → CC A R\$ 200.000, B e C R\$ 150.000 |
| **Advanced formulas** | Scripting estilo BPC: depreciação, juros, impostos, IF/THEN/ELSE, preço × volume | ver abaixo |

```text
DATA([d/Account] = "Revenue", [d/Date] = "2024") =
    RESULTLOOKUP([d/Account] = "SalesQuantity", [d/Date] = "2024")
  * RESULTLOOKUP([d/Account] = "UnitPrice",     [d/Date] = "2024")
```
`RESULTLOOKUP` usa valores pós-agregação e só dados disponíveis — é custoso em laços `MEMBERSET`.

**Multi actions:** encadeiam data actions, passos de gerenciamento de versão e passos preditivos num único gatilho. Exemplo de fechamento: copiar realizado → passo preditivo (forecast ML) → alocar custos corporativos → fórmula de KPIs → publicar versão.

**Value Driver Trees (VDT):** decompõem KPIs em drivers (lucratividade → receita e custos → preço unitário e volume); sliders simulam e recalculam a árvore em tempo real; cenários promissores viram versões privadas.

**Orquestração:** **Calendar** com visão Gantt, milestones, dependências, *automatic data action task* e *automatic multi action task* (horário ou condição) e workflow **processo (pai) → tarefas (filhas)** — general task, input form, aprovação — com assignees, revisores, status e notificações (analista → gerente → diretor, aprovar/rejeitar).

**IA no planejamento:** cenário preditivo (série temporal) → previsões → *predictive step* numa multi action → ajuste humano sobre a linha de base estatística.

**BPC híbrido:** importar dados do BPC (actuals, dimensões) para planejar no SAC e **exportar (writeback)** a versão final para o BPC standard. ⚠️ Modelos com múltiplas medidas só suportam exportação para BPC standard, não importação.

**Retração para o S/4HANA:** versão aprovada e travada → exportação (normalmente via APIs OData) → gravação na tabela universal de planejamento **ACDOCP**, base do *availability control* e do Plano × Real no ERP.

**Performance:** limite o escopo com filtros/parâmetros, evite `RESULTLOOKUP` em laços, otimize a desagregação nas preferências do modelo e não repita cálculos intermediários entre passos.

**Exercício — acelerador de orçamento:** data action com parâmetros `SourceVersion`, `TargetVersion`, `Year` → copy step → advanced formula `DATA([d/Version]=%TargetVersion%) = RESULTLOOKUP([d/Version]=%TargetVersion%) * 1.15` → executar a partir de uma tabela e validar (receita 100.000 → 115.000).

## 🔗 Relacionados
- [SAC Planning](/glossario/sac-planning)
- [Analytics Designer](/glossario/analytics-designer)
- [Augmented Analytics SAC](/glossario/augmented-analytics-sac)
- [Colaboração SAC](/glossario/colaboracao-sac)

## 📚 Fontes
- Apostila - SAP Analytics Cloud

---
🧭 [SAP Analytics Cloud](/glossario/temas/sap-analytics-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
