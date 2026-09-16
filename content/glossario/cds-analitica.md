---
title: "CDS Analítica"
description: "CDS anotadas para análise: cubo composite (@Analytics.dataCategory: #CUBE) + query de consumo (@Analytics.query: true) para SAC, Fiori e extração ODP."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `Analytical CDS` · `Cube View` · `Analytical Query` · `@Analytics.dataCategory` · `@Analytics.query` · `ODP` · `Extração BW` · `S_RS_COMP` · `Query Browser`

> **Definição**
> CDS anotadas para análise: cubo composite (@Analytics.dataCategory: #CUBE) + query de consumo (@Analytics.query: true) para SAC, Fiori e extração ODP.
{.is-info}

- **Embedded Analytics / SAC:** topologia obrigatória em **2 camadas** — *Composite Cube* (`@Analytics.dataCategory: #CUBE`) + *Consumption Query* (`@Analytics.query: true`). A query deve ter contrato **C1** e o usuário precisa do objeto de autorização **`S_RS_COMP`**.
- **Extração para BW/4HANA (ODP):** `@Analytics.dataCategory` + `@Analytics.dataExtraction.enabled: true` (filas delta).
- Consumo: SAP Analytics Cloud (live), Fiori Query Browser, Analysis for Office.
- **Para funcionais:** o ALV estático ("dados de ontem para perguntas de ontem") vira overview pages Fiori com KPIs em tempo real ("insights hoje para decisões imediatas").

## 🔗 Relacionados
- [Embedded Analytics](/glossario/embedded-analytics)
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [SAP BW-4HANA](/glossario/sap-bw-4hana)
- [Anotações CDS](/glossario/anotacoes-cds)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - CDS Views para Funcionais (Parte 1)
- Apostila - CDS Views para Funcionais (Parte 2)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
