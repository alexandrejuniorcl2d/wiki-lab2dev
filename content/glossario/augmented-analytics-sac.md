---
title: "Augmented Analytics SAC"
description: "IA embutida no SAC: perguntas em linguagem natural (Search to Insight, Just Ask), explicação de variações (Smart Insights), dashboards automáticos (Smart Discovery), modelos preditivos (Smart Predict), previsão em séries temporais, planejamento pred…"
tags: ["glossario","sap-sac"]
---
**Também conhecido como:** `Smart Features` · `Search to Insight` · `Smart Insights` · `Smart Discovery` · `Smart Predict` · `Predictive Scenario` · `Time Series Forecasting SAC` · `Just Ask` · `Key Influencers` · `Predictive Planning` · `R Visualization` · `Predictive Power KI` · `Prediction Confidence KR` · `Joule no SAC`

> **Definição**
> IA embutida no SAC: perguntas em linguagem natural (Search to Insight, Just Ask), explicação de variações (Smart Insights), dashboards automáticos (Smart Discovery), modelos preditivos (Smart Predict), previsão em séries temporais, planejamento preditivo, R e Joule.
{.is-info}

| Recurso | O que faz | Como usar |
|---|---|---|
| **Search to Insight** | Pergunta em linguagem natural → visualização ("Show me Gross Margin by Sales Manager last quarter in a bar chart") | Barra de busca |
| **Just Ask** (GenAI) | Evolução com LLMs: entende intenção, análise multi-etapas, gera narrativa ("compare os 3 principais produtos na Europa com o ano passado e diga o porquê") | Conversa |
| **Smart Insights** | Explica os *top contributors* de um valor ("−R\$2,5M por desconto de produto") | Selecionar ponto → ícone de lâmpada |
| **Smart Discovery** | Gera story com visão geral do KPI, **key influencers**, outliers e simulação | Dataset → escolher KPI alvo |
| **Smart Predict** | Cenários preditivos: **classificação** (cliente vai cancelar?), **regressão** (receita do novo produto), **séries temporais** (demanda dos próximos 6 meses) | Exige dados importados |
| **Time series forecast** | Previsão com intervalo de confiança num gráfico de linha (linear, triplo exponencial) | Menu do gráfico → *Adicionar previsão* |
| **Predictive planning** | Preenche versões de forecast com base no histórico | *Predictive step* (também em multi actions) |
| **R visualization** | Scripts R na story (clusterização, correlação, gráficos não nativos) executados em servidor R | Widget R |

**Qualidade do modelo preditivo:** **Predictive Power (KI)** — quanto os influenciadores explicam o KPI no histórico; **Prediction Confidence (KR)** — confiabilidade em dados novos. KI alto com KR baixo sugere *overfitting*.

**Joule no SAC:** criar dashboards por comando ("vendas do último trimestre no Nordeste"), adicionar medidas calculadas (margem) e resumir insights com rascunho de e-mail para a liderança — ver [SAP Joule](/glossario/sap-joule).

**Cenário — churn em telecom:** dataset de clientes → Smart Discovery com KPI "Churn" → contrato mensal e baixo tempo de permanência são os maiores preditores → campanha para migrar clientes a contratos anuais.

> "Inteligência aumentada não é sobre o que a máquina faz; é sobre o que você faz quando a máquina trabalha para você."

## 🔗 Relacionados
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [SAP Joule](/glossario/sap-joule)
- [SAC Planning](/glossario/sac-planning)
- [Conexões SAC](/glossario/conexoes-sac)
- [Datasphere para IA](/glossario/datasphere-para-ia)

## 📚 Fontes
- Apostila - SAP Analytics Cloud

---
🧭 [SAP Analytics Cloud](/glossario/temas/sap-analytics-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
