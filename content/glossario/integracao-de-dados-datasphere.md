---
title: "Integração de Dados Datasphere"
description: "Como os dados entram no Datasphere: conexões (Cloud Connector, DP Agent, conectores SAP/genéricos/hyperscalers) e as estratégias federação (remote tables), replicação (replication flows), view persistence, data flows (ETL) e transformation flows (EL…"
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Remote Tables` · `Federação de Dados` · `Smart Data Access` · `Replication Flow` · `Replication Flows` · `Data Flow Datasphere` · `Transformation Flow` · `View Persistence` · `Persistência de Views` · `Data Integration Monitor` · `Data Provisioning Agent` · `DP Agent` · `Smart Data Integration` · `IP Allowlist` · `Generic JDBC` · `Task Chains`

> **Definição**
> Como os dados entram no Datasphere: conexões (Cloud Connector, DP Agent, conectores SAP/genéricos/hyperscalers) e as estratégias federação (remote tables), replicação (replication flows), view persistence, data flows (ETL) e transformation flows (ELT), monitoradas no Data Integration Monitor.
{.is-info}

**Conectividade híbrida:**
| Componente | Papel | Pontos-chave |
|---|---|---|
| [SAP Cloud Connector](/glossario/sap-cloud-connector) | Túnel TLS reverso para on-premise (RFC/HTTP) | Mapear host virtual e expor só recursos necessários (`RFC_FUNCTION_SEARCH`, `/SAPDS/`, `RODPS_REPL_`) — Data Flows e Replication Flows |
| **DP Agent** (HANA Smart Data Integration) | Remote tables (federação e replicação real-time/CDC) de SAP e não-SAP | Adaptadores (ABAPAdapter, HanaAdapter, OracleLogReaderAdapter, CamelJdbcAdapter…); versão atual; IP público na **IP Allowlist**; log em `<DPAgent_root>/log/framework.trc` |

**Tipos de conexão:** nativos SAP (S/4HANA on-prem/cloud — CDS via ABAP/ODP e import de modelos; HANA Cloud/on-prem; BW e BW/4HANA — InfoProviders, queries, Model Transfer; ECC — extratores ODP e tabelas) · genéricos (JDBC com driver no DP Agent, OData, SFTP) · hyperscalers (S3, Redshift com driver ODBC; BigQuery com Simba ODBC + certificados GTS Root R1/R4; ADLS Gen2, Azure SQL).

**Segurança:** *System > Configuration > IP Allowlist* (Trusted IPs para DP Agent/BI/JDBC; Trusted Cloud Connector IPs) e *System > Configuration > Security > Certificates* (upload `.pem`/`.crt`). Falhas comuns: rede/allowlist, credenciais (`authentication failed`), host desconhecido (mapeamento virtual errado no Cloud Connector, `-709`).

**Estratégias de acesso:**
| Estratégia | Como | Quando | Trade-off |
|---|---|---|---|
| **Remote Table (federação)** | Ponteiro; query roda na origem (Smart Data Access) | Tempo real, prototipagem, data residency, volumes que não justificam cópia | Performance depende da origem e rede; carga no transacional |
| **Replication Flow** | Cópia snapshot (inicial) + delta (CDC) | Tabelas grandes, desacoplar da origem, histórico, BI clássico | Consome storage; latência pela frequência |
| **View Persistence** | Materializa o resultado de uma view (agendado) | Views remotas complexas, near real-time basta | Storage; atualização por agenda |
| **Data Flow (ETL)** | Transformação gráfica *durante* a carga: joins, agregações, filtros, projeções, **scripts Python** | Transformações complexas na ingestão — cobre a maioria dos casos do Data Services | Fontes não-SAP podem exigir drivers |
| **Transformation Flow (ELT)** | Transforma dados *já carregados* com a força do HANA | Staging → reporting, limpeza, agregação | — |

**Data Integration Monitor** (em System Monitor): execuções de replication/data/transformation flows e view persistency com status, duração, SAP HANA peak memory e CPU time; link direto para log e editor. Erros de lógica no **Task Logs** (filtrar *Failed*, coluna Substatus: violação de chave, tipo incompatível).

**Orquestração:** SQL procedures e cargas agendadas via **Task Chains**.

> "O dado pode estar em qualquer lugar, o acesso é único."

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [SAP Cloud Connector](/glossario/sap-cloud-connector)
- [Spaces Datasphere](/glossario/spaces-datasphere)
- [Data Builder](/glossario/data-builder)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 1)
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
