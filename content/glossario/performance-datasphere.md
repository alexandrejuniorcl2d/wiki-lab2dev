---
title: "Performance Datasphere"
description: "Técnicas de performance no Datasphere: push-down para o HANA, análise de plano de execução, particionamento, índices, joins e cardinalidade corretos, persistência e delta, filtros precoces, star schema, prevenção de OOM e monitoramento de statements…"
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Push-down Datasphere` · `EXPLAIN PLAN` · `SQL Analyzer Datasphere` · `Partition Pruning` · `Particionamento de Tabelas` · `Índices Secundários Datasphere` · `Cardinalidade de Associação` · `Delta Caching` · `Out of Memory` · `OOM` · `Star Schema` · `Schema Estrela` · `Snowflake Schema` · `Expensive Statements` · `Housekeeping Datasphere`

> **Definição**
> Técnicas de performance no Datasphere: push-down para o HANA, análise de plano de execução, particionamento, índices, joins e cardinalidade corretos, persistência e delta, filtros precoces, star schema, prevenção de OOM e monitoramento de statements caros.
{.is-info}

> "Performance é design, não sorte." — e na nuvem, cada consulta ineficiente é custo (Capacity Units medidas por hora).

| Técnica | Regra |
|---|---|
| **Push-down** | Filtros, joins e agregações no HANA (nós gráficos ou `WHERE`/`JOIN`/`GROUP BY`); só o resultado trafega |
| **Plano de execução** | Crie um **Database Analysis User** (temporário), pegue o SQL da view/SAC, `EXPLAIN PLAN FOR ...` no HANA Cockpit/Database Explorer: índices, tipo de join, full table scans, custo |
| **Particionamento** | Tabelas com bilhões de linhas por tempo ou categoria → **partition pruning** (`WHERE ANO = 2023` lê só a fatia). No BW Bridge, particionamento dinâmico só para baixa cardinalidade |
| **Índices secundários** | Chaves primárias já indexadas; secundários (nível HANA/HDI, sem opção no Data Builder) só em colunas seletivas muito filtradas — escrita fica mais lenta |
| **Joins** | Prefira INNER; OUTER com cautela; informe a **cardinalidade** correta (1:1, 1:N, N:1) — orienta o otimizador |
| **Persistência** | Materialize views lentas, com fontes estáveis e muitos consumidores (troca storage por velocidade; base dos ECNs) |
| **Delta** | Para grandes volumes, projete em delta (timestamp, ODP change log, replication flows), não full load |
| **Filtros precoces** | "Funil": filtre 10 bi de vendas para 1 mi *antes* do join com clientes |
| **SAC** | Evite widgets que geram MDX gigante (Geo Map com milhões de pontos); pré-agregue em views dedicadas por dashboard |
| **OOM** | Workload Management (limites por space/grupo) é rede de segurança; causa real: cross joins, falta de filtro — "Top 5 Out-of-Memory Errors" no System Monitor |
| **Modelagem** | **Estrela** > snowflake no HANA Cloud: menos joins; desnormalize atributos de baixa cardinalidade |
| **Monitoramento** | *Enable Expensive Statement Tracing*; rotina semanal nos Statement Logs ordenando por duração, peak memory e CPU time |
| **Housekeeping** | Apague task logs e audit logs antigos; política de retenção e data tiering (warm no HANA, cold no data lake) |

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [Spaces Datasphere](/glossario/spaces-datasphere)
- [Data Builder](/glossario/data-builder)
- [Datasphere e SAC](/glossario/datasphere-e-sac)
- [Custos Datasphere](/glossario/custos-datasphere)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
