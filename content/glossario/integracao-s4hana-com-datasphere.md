---
title: "Integração S4HANA com Datasphere"
description: "Como extrair o S/4HANA para o Datasphere: CDS views extratoras (@Analytics.dataExtraction) via ODP com delta pela fila ODQ, Cloud Connector ou communication arrangement, hierarquias, virtual × replicado, campos Z, SLT e reconciliação."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `@Analytics.dataExtraction.enabled` · `@Analytics.dataExtraction.delta.byElement.name` · `VDM_CDS_ANALYZER` · `SAP_COM_0531` · `ODQMON` · `Operational Delta Queue` · `I_GLAccountHierarchyNode` · `SLT Datasphere`

> **Definição**
> Como extrair o S/4HANA para o Datasphere: CDS views extratoras (@Analytics.dataExtraction) via ODP com delta pela fila ODQ, Cloud Connector ou communication arrangement, hierarquias, virtual × replicado, campos Z, SLT e reconciliação.
{.is-info}

> "O ERP opera o negócio. O Datasphere explica o negócio."

**Por que o S/4HANA é a fonte dourada:** Universal Journal (**ACDOCA**) como fonte única, modelo simplificado (sem tabelas de totais como FAGLFLEXT) e semântica embutida nas **CDS views** (VDM) — reutilizáveis, versionadas, com code pushdown e autorizações nativas. Ver [CDS Analítica](/glossario/cds-analitica).

**Identificando views extratoras:**
```abap
@Analytics.dataCategory: #CUBE                        // #DIMENSION | #FACT | #CUBE
@Analytics.dataExtraction.enabled: true               // "selo" para extração via ODP
@Analytics.dataExtraction.delta.byElement.name: 'LastChangedDateTime'   // campo de delta (CDC)
define view ZV_SalesOrderAnalytics as select from ...
```
Pesquise com a transação **`VDM_CDS_ANALYZER`** ou ADT no Eclipse.

**Conectividade:**
| S/4HANA on-premise / Private Cloud | S/4HANA Cloud Public Edition |
|---|---|
| [SAP Cloud Connector](/glossario/sap-cloud-connector) obrigatório (túnel TLS de saída) | Direto via **communication arrangement** (ex.: `SAP_COM_0531`), OAuth 2.0 ou certificado |
| Trust com a subconta, certificado HTTPS no Datasphere, usuário técnico mínimo (ex.: base `SAP_BR_ANALYTICS_SPECIALIST`) | Sem Cloud Connector |

**Delta (CDC) via ODP:** alterações entram na **ODQ** (Operational Delta Queue — monitorar em `ODQMON`), "caixa de saída" resiliente: menos carga, near real-time (minutos) e nada se perde se o Datasphere cair.

**Hierarquias:** sets de contas (`GS01`), hierarquias de centro de custo (`KSH3`) → CDS com sufixo `_HIER`/`_HIERARCHY` (ex.: `I_GLAccountHierarchyNode`) → objeto *Hierarchy* no Datasphere → drill-down no SAC.

| Virtual (remote tables) | Replicado (snapshot/delta) |
|---|---|
| Tempo real absoluto; performance depende da view, rede e carga do S/4; cada query pesa na origem | Near real-time; alta performance local; carga só na replicação |
| Operacional volátil, baixo volume, "último segundo" | Dashboards, histórico, modelos complexos — maioria dos cenários de BI/DW |

**Aceleradores:** geração automática de modelo a partir da CDS (fato, dimensões pelas associações, medidas por `@DefaultAggregation`) e [Business Content Datasphere](/glossario/business-content-datasphere) (finanças, vendas, materiais, custos).

**Campos Z:** app Fiori *Custom Fields and Logic* → habilitar na aba *UIs and APIs* para a CDS extratora → publicar → atualizar o objeto remoto no Datasphere (ver [Extensibilidade Key User](/glossario/extensibilidade-key-user)).

**Plano B — SLT (SAP Landscape Transformation Replication Server):** triggers de banco para tabelas brutas sem CDS (`CDHDR`/`CDPOS`, tabelas técnicas, ECC antigo) e altíssima velocidade — sem semântica, toda modelagem no Datasphere.

**Moedas e unidades:** replique diariamente `TCURR` (taxas), `TCURV`/`TCURX`/`TCURF` (fatores, casas decimais) e `T006`/`T006A` (unidades) — base da conversão nativa.

**Validação:** saldo de conta no `FAGLL03H` × relatório sobre ACDOCA replicada com os mesmos filtros; divergências → filtros da extração, transformação ou registros pendentes na `ODQMON`.

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [CDS Analítica](/glossario/cds-analitica)
- [Integração de Dados Datasphere](/glossario/integracao-de-dados-datasphere)
- [Extensibilidade Key User](/glossario/extensibilidade-key-user)
- [Business Content Datasphere](/glossario/business-content-datasphere)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
