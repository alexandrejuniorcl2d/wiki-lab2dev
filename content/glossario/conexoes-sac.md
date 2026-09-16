---
title: "Conexões SAC"
description: "A decisão arquitetural crítica do SAC: conexão live (dado fica na fonte, tempo real, segurança máxima, menos smart features) × import (dado replicado in-memory, performance e IA completa), com Cloud Connector, agendamento, wrangling e blending."
tags: ["glossario","sap-sac"]
---
**Também conhecido como:** `Live Connection SAC` · `Import Connection SAC` · `Acquired Data` · `Dados Adquiridos SAC` · `Data Wrangling SAC` · `Wrangling Expression Language` · `Blending SAC` · `CORS SAC` · `Location ID SAC` · `Carga Incremental SAC`

> **Definição**
> A decisão arquitetural crítica do SAC: conexão live (dado fica na fonte, tempo real, segurança máxima, menos smart features) × import (dado replicado in-memory, performance e IA completa), com Cloud Connector, agendamento, wrangling e blending.
{.is-info}

| Critério | Live Connection | Import (Acquired) |
|---|---|---|
| Latência | Tempo real | Agendada (snapshot) |
| Onde fica o dado | Na fonte (on-prem/cloud) | Replicado no SAC (in-memory) |
| Segurança | Máxima — dado bruto não trafega; autorizações da fonte em tempo real | Robusta (criptografia em trânsito e repouso) |
| Smart features | Limitadas | Extensivas |
| Transformação | Na fonte | Wrangling no SAC |

**Live:** SAC como camada de visualização e semântica; query delegada à fonte (S/4HANA, BW, HANA) e só o resultado agregado volta. Ideal quando dados "can't be moved into the cloud due to security and privacy reasons".

**Import:** cópia extraída, transformada e carregada num modelo in-memory — interações rápidas e pré-requisito das **smart features**.

**Conectividade e segurança:**
- [SAP Cloud Connector](/glossario/sap-cloud-connector) — túnel TLS de saída para on-premise; no SAC informe o **Location ID**.
- **SSO** (identidade propagada às fontes live), **CORS** (conexões live diretas, ex.: HANA — só seu tenant pode pedir dados pelo browser; Smart Insights funciona com HANA live via Direct/CORS) e **tunneling**.

**Fontes:**
- **S/4HANA:** live via **ABAP CDS views** (análise operacional, autorizações do ERP) ou import de CDS/extratores/APIs (dashboards gerenciais, planejamento, forecasts e what-if).
- **Datasphere:** live nos Analytic Models ("fonte da verdade" harmonizada) — ver [Datasphere e SAC](/glossario/datasphere-e-sac).
- **Import genérico:** SQL Server, Oracle, Redshift, BigQuery e JDBC; Google Drive/Sheets, Salesforce; OData.

**Agendamento (import):** recorrência horária/diária/semanal com fim ou nº de ocorrências; **carga incremental** por campo de data/hora ou numérico; status *Successful / Partially Successful / Failed* em *Data Management*.

**Data wrangling:** limpar e corrigir mapeamento/qualidade antes da carga (formatos de data, textos, maiúsculas) com a **Wrangling Expression Language** — `Concatenate("Mr","Brown")`, `Replace("hyperthermia","ert","ot")`, `UpperCase("Little Boy")`.

**O que o live não faz:** wrangling (faça na CDS/calculation view), **Smart Predict** (exige import), blending complexo de dois modelos live (faça no Datasphere/HANA); performance depende da fonte e da rede.

**Blending:** a mesma página combina modelos — ex.: vendas faturadas **live** do S/4HANA on-premise (via Cloud Connector) × pipeline **import** diário do Salesforce.

**Regras do arquiteto:** live é para o *agora* (operacional, soberania do dado); import é para a *análise profunda* (estratégico, planejamento, IA); híbrido é a realidade.

## 🔗 Relacionados
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [Modelagem SAC](/glossario/modelagem-sac)
- [SAP Cloud Connector](/glossario/sap-cloud-connector)
- [Datasphere e SAC](/glossario/datasphere-e-sac)
- [CDS Analítica](/glossario/cds-analitica)

## 📚 Fontes
- Apostila - SAP Analytics Cloud

---
🧭 [SAP Analytics Cloud](/glossario/temas/sap-analytics-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
