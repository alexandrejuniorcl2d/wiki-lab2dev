---
title: "Custos Datasphere"
description: "Gestão de custos no Datasphere: Capacity Units como moeda (compute × storage), tiers hot/warm/cold, sizing com o Capacity Unit Estimator, Elastic Compute Nodes, data lake relacional, monitoramento de CUs, chargeback e higiene."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Capacity Unit Estimator` · `SAP Quick Sizer Datasphere` · `Data Tiering` · `Hot Warm Cold` · `Native Storage Extension` · `NSE` · `SAP HANA Data Lake Relational` · `HDL` · `Block-hours` · `FinOps Datasphere` · `Chargeback` · `Free Tier Datasphere`

> **Definição**
> Gestão de custos no Datasphere: Capacity Units como moeda (compute × storage), tiers hot/warm/cold, sizing com o Capacity Unit Estimator, Elastic Compute Nodes, data lake relacional, monitoramento de CUs, chargeback e higiene.
{.is-info}

**Capacity Units (CUs):** créditos que medem tudo (queries, storage, BW Bridge, serviços), reportados **por hora** à conta BTP.

| Compute (CPU + RAM) | Storage (disco) |
|---|---|
| Queries, analytic models, data/transformation flows, cargas e replicação — dinâmico | Tabelas, views persistidas, arquivos, logs — mais estático |

**Tiers de dados:**
| Tier | Tecnologia | Uso | Custo |
|---|---|---|---|
| **Hot** | In-memory HANA | Dashboards, análise interativa em tempo real | Maior por GB |
| **Warm** | **NSE** (Native Storage Extension, disco gerenciado pelo HANA) | Dados operacionais frequentes sem latência de RAM | Médio — padrão |
| **Cold** | **HANA Data Lake Relational (HDL)** | Histórico, logs, IoT, staging bruto — até \~90 TB+ por tenant, acessível de forma transparente | Menor |

Ciclo de vida típico: atual (hot) → após 18 meses (warm) → após 5 anos (cold); no BW Bridge, processo *Adjust Data Tiering*.

**Sizing:** *SAP Datasphere Capacity Unit Estimator* (no SAP Quick Sizer) com volume, complexidade de transformações, fontes, usuários e picos → estimativa de CUs e configuração inicial; revalide com o uso real.

**Elasticidade:** **Elastic Compute Nodes** agendáveis para picos (Black Friday, fechamento) — *Starting → Running → Stopping*; parado não consome CUs de compute.

**BW Bridge:** serviço dedicado com consumo próprio (medida `THRESHOLD_BW_BRIDGE`), guiado pelo storage alocado.

**Monitoramento:** *System Monitor > Capacities* (consumo diário, medidas `THRESHOLD_STORAGE`, `THRESHOLD_MEMORY`, `THRESHOLD_BW_BRIDGE`, `PREMIUM_OUTBOUND`) + export CSV detalhado.

**FinOps:**
- **Chargeback** por space (ex.: Vendas 40%, Finanças 35%, Marketing 25%).
- **Alertas de orçamento:** não há *budget alert* nativo — exporte o CSV regularmente, processe fora e dispare avisos em 50/75/90%.
- **Desligue o que não usa:** ECNs parados, DEV/QA fora do horário, revisão de agendamentos.
- **Higiene trimestral:** objetos órfãos (sem acesso há 90 dias), task logs antigos (*Configuration > Tasks*), arquivar no data lake ou deletar.

**Free Tier × Standard:** Free = \~90 dias, 128 GB/32 GB fixos, sem upscale, ideal para PoC; se não fizer upgrade em 90 dias o tenant é suspenso e, após 5 dias, **deletado sem recuperação**. Standard = uso produtivo, upscale e SLAs.

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [Spaces Datasphere](/glossario/spaces-datasphere)
- [Performance Datasphere](/glossario/performance-datasphere)
- [SAP BW Bridge](/glossario/sap-bw-bridge)
- [SAP HANA Cloud](/glossario/sap-hana-cloud)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 2)
- Apostila - SAP Datasphere (Parte 1)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
