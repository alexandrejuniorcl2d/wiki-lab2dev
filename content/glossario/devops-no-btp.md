---
title: "DevOps no BTP"
description: "ALM moderno na nuvem: CI/CD Service (pipelines Piper), Cloud Transport Management (promoção governada entre subcontas), alertas, automação operacional, blue-green e observabilidade."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `SAP Cloud Transport Management` · `cTMS` · `SAP Continuous Integration and Delivery` · `CI/CD Service` · `Project Piper` · `SAP Alert Notification Service` · `SAP Automation Pilot` · `Blue-Green Deployment` · `SemVer` · `Observabilidade` · `Dynatrace` · `12-Factor`

> **Definição**
> ALM moderno na nuvem: CI/CD Service (pipelines Piper), Cloud Transport Management (promoção governada entre subcontas), alertas, automação operacional, blue-green e observabilidade.
{.is-info}

**Do STMS ao cloud:** transportes sequenciais manuais de pacotes ABAP → entrega contínua automatizada de artefatos (MTA, iFlows, conteúdo Work Zone) em paisagens dinâmicas.

| Serviço | Função |
|---|---|
| **SAP CI/CD Service** | Pipelines gerenciados (baseados no open-source **Piper**) para CAP, SAPUI5/Fiori e integration content; integra GitHub/GitLab/Bitbucket; build MTA, testes, deploy |
| **Cloud Transport Management (cTMS)** | Nós (DEV → QAS → PRD) com filas de importação e **aprovação manual**; transporta MTAs, iFlows, conteúdo Work Zone; via Cloud Connector controla o STMS on-premise |
| **Alert Notification Service** | Recebe eventos (build falhou, transporte, apps, logging) e envia a Slack, Teams, e-mail, webhooks |
| **Automation Pilot** | Automação low-code de operações (reiniciar HANA Cloud, limpar logs, onboarding de devs em spaces) |

**Testes no pipeline (quality gate):** lint, unitários (Jest/Mocha no CAP; QUnit/OPA5 no UI5), integração; pipeline falha se cobertura < 80% ou vulnerabilidade crítica.

**Observabilidade — 3 pilares:** logs (Application Logging), métricas (Cloud ALM, Dynatrace), traces (Dynatrace/OpenTelemetry).

**Configuração 12-factor:** mesmo artefato em todos os ambientes; variáveis de ambiente por space (`API_URL`, `LOG_LEVEL`) — nunca hard-code.

**Blue-green:** nova versão (green) sobe em paralelo, testa por rota interna, troca instantânea do roteamento; rollback = voltar para blue.

**SemVer:** `MAJOR.MINOR.PATCH` (breaking · feature retrocompatível · correção) no `mta.yaml` e no `manifest.json`.

**Governança:** pull requests com code review → quality gates → aprovação do *release manager* (role collection) na fila de produção do cTMS.

## 🔗 Relacionados
- [MTA](/glossario/mta)
- [abapGit e gCTS](/glossario/abapgit-e-gcts)
- [SAP Cloud ALM](/glossario/sap-cloud-alm)
- [Revisão de Código ABAP](/glossario/revisao-de-codigo-abap)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
