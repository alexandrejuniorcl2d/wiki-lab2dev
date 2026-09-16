---
title: "SAP BTP"
description: "Plataforma PaaS multi-cloud da SAP que unifica desenvolvimento de apps, automação, integração, dados/analytics e IA — a \"garagem de inovação\" para estender o ERP mantendo o core limpo."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `BTP` · `SAP Business Technology Platform` · `Business Technology Platform` · `SAP Cloud Platform` · `SCP` · `Neo` · `Multi-Cloud`

> **Definição**
> Plataforma PaaS multi-cloud da SAP que unifica desenvolvimento de apps, automação, integração, dados/analytics e IA — a "garagem de inovação" para estender o ERP mantendo o core limpo.
{.is-info}

**Evolução:** SAP Cloud Platform (**Neo**, 2013 — data centers próprios, fechado) → **SAP BTP multi-cloud** (Cloud Foundry, Kyma/Kubernetes sobre hyperscalers AWS, Azure, GCP, Alibaba).

> **Neo está congelado**
> Portfólio sem novidades, infraestrutura proprietária, padrões fechados. **Todo novo projeto deve nascer no multi-cloud**; planeje a migração do legado.
{.is-warning}

**Os 4 pilares:**
| Pilar | Exemplos |
|---|---|
| **Application Development** | ABAP Cloud, Kyma, Cloud Foundry, CAP, SAP Build |
| **Automation (com IA)** | SAP Build Process Automation (RPA + workflow) |
| **Integration** | SAP Integration Suite (APIs, dados, eventos) |
| **Data & Analytics** | SAP HANA Cloud, SAP Analytics Cloud, SAP Datasphere, SAP AI Core |

**PaaS × SaaS × IaaS:** o BTP é o **PaaS** oficial para **construir, estender e integrar** os **SaaS** da SAP (S/4HANA Cloud, SuccessFactors, Ariba) sobre o **IaaS** dos hyperscalers — você gerencia app e dados, não infraestrutura.

**Multi-cloud:** escolha de provedor e região (latência, soberania de dados — LGPD/GDPR), aproveitamento de contratos com hyperscalers, fim do *vendor lock-in*.

**Regiões e alta disponibilidade:** cada subconta pertence a **uma região** (ex.: `br10` São Paulo, `eu10` Frankfurt, `us10`); cada região tem várias **availability zones** isoladas (HA/DR; *In-Metro DR* com replicação síncrona).

**Tipos de serviço:**
- **Business services** — aceleram processos de negócio (SAP Tax Service, Master Data Integration, Workflow Management).
- **Technical services** — "backing services" independentes de domínio: persistência (HANA, PostgreSQL, Redis), runtimes, segurança (XSUAA), observabilidade (Application Logging, Audit Log).

**Cenários:** **estender** (apps Fiori, portais, mobile sem tocar no core) · **integrar** (SAP e não-SAP, camada de APIs) · **inovar** (produtos digitais, ML). **Benefícios:** agilidade (serviços prontos, CI/CD), escalabilidade elástica e, sobretudo, **Clean Core**.

**Modelos comerciais:**
| CPEA (Cloud Platform Enterprise Agreement) | Pay-As-You-Go (PAYG) |
|---|---|
| Pré-pago em créditos consumidos por qualquer serviço elegível | Pós-pago pelo consumo real |
| Uso estratégico/planejado, descontos, previsibilidade | Início, experimentos, uso imprevisível, sem compromisso |

**Free Tier** (em contas enterprise, não expira, pode virar plano pago) × **Trial** (expira — ex.: 90 dias; Kyma 14 —, sem migração de dados).

## 🔗 Relacionados
- [Contas BTP](/glossario/contas-btp)
- [Ambientes BTP](/glossario/ambientes-btp)
- [Clean Core](/glossario/clean-core)
- [Extensibilidade Side-by-Side](/glossario/extensibilidade-side-by-side)
- [SAP Integration Suite](/glossario/sap-integration-suite)
- [SAP CAP](/glossario/sap-cap)
- [SAP Build](/glossario/sap-build)
- [SAP Discovery Center](/glossario/sap-discovery-center)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira
- Apostila - Conhecendo todos os Módulos do SAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
