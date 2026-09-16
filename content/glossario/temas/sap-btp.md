---
title: "SAP BTP (tema)"
description: "Business Technology Platform: arquitetura, contas, runtimes, serviços e segurança."
tags: ["glossario","sap-btp"]
---
> **Sobre esta área**
> Business Technology Platform: arquitetura, contas, runtimes, serviços e segurança.
> Tag: [#sap-btp](/t/sap-btp) · 18 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira — Dias 6 e 7: SD/O2C, pricing, NF-e, CX; tecnologia (Clean Core, BTP, RAP, Fiori, SAC, Joule, Activate) e plano de carreira.
- Apostila - Arquitetura do SAP BTP — Arquitetura da Business Technology Platform.

## 📖 Termos

### Conectividade e Segurança
- [Destination Service](/glossario/destination-service) *(Destination, Destinations BTP, Proxy Type)* — Serviço do BTP que guarda URL, tipo de proxy e autenticação de sistemas remotos para que apps chamem destinos por nome — "o contato salvo na agenda".
- [IAS e IPS](/glossario/ias-e-ips) *(IAS, IPS, SAP Identity Authentication Service)* — IAS é o provedor de identidade central (SSO, MFA); IPS automatiza o provisionamento de usuários entre sistemas (ex.: SuccessFactors → S/4HANA/BTP).
- [SAP Cloud Connector](/glossario/sap-cloud-connector) *(Cloud Connector, SCC, Túnel VPN Reverso)* — Software leve instalado na rede on-premise que cria um túnel reverso seguro até a subconta BTP, sem abrir portas de entrada.
- [Segurança BTP](/glossario/seguranca-btp) *(XSUAA, SAP Authorization and Trust Management Service, xs-security.json)* — Modelo de segurança do BTP: autenticação delegada a IdPs (SAP ID Service, IAS federado ao IdP corporativo), autorização OAuth 2.0 com XSUAA (scopes → roles → role collections), principal propagation, audit log e credential store.

### Contas e Governança
- [Contas BTP](/glossario/contas-btp) *(Global Account, Directory, Subaccount)* — Hierarquia de governança do BTP: Global Account (contrato e pool de direitos) → Directories (pastas lógicas) → Subaccounts (unidade técnica por região e ambiente), com entitlements, quotas e labels.

### Dados
- [SAP HANA Cloud](/glossario/sap-hana-cloud) *(HANA Cloud, SAP HANA Cloud Data Lake, HDI)* — Banco de dados HANA como serviço no BTP, com alta disponibilidade multi-AZ (replicação síncrona, RPO zero), DR entre regiões e data lake para petabytes.

### DevOps
- [DevOps no BTP](/glossario/devops-no-btp) *(SAP Cloud Transport Management, cTMS, SAP Continuous Integration and Delivery)* — ALM moderno na nuvem: CI/CD Service (pipelines Piper), Cloud Transport Management (promoção governada entre subcontas), alertas, automação operacional, blue-green e observabilidade.
- [MTA](/glossario/mta) *(Multi-Target Application, mta.yaml, mtar)* — Modelo que descreve e empacota todos os módulos (app, db, UI) e recursos (XSUAA, destination, HANA) de uma aplicação cloud em um único .mtar para deploy consistente.

### Fundamentos
- [Resiliência BTP](/glossario/resiliencia-btp) *(High Availability, Alta Disponibilidade, Availability Zones)* — Construir sistemas indestrutíveis no BTP: múltiplas instâncias distribuídas em AZs, DR entre regiões, autoscaling por políticas e padrões de código como circuit breaker e bulkhead.
- [SAP BTP](/glossario/sap-btp) *(BTP, SAP Business Technology Platform, Business Technology Platform)* — Plataforma PaaS multi-cloud da SAP que unifica desenvolvimento de apps, automação, integração, dados/analytics e IA — a "garagem de inovação" para estender o ERP mantendo o core limpo.
- [SAP Discovery Center](/glossario/sap-discovery-center) *(Discovery Center, discovery-center.cloud.sap, Service Catalog BTP)* — Portal oficial (discovery-center.cloud.sap) com o catálogo de serviços BTP (planos, Free Tier, regiões, preços) e "missions" guiadas para cenários completos.
- [SAP Road Map Explorer](/glossario/sap-road-map-explorer) *(Road Map Explorer, roadmap.sap.com)* — Fonte oficial (roadmap.sap.com) das inovações planejadas por produto e trimestre — hábito do arquiteto para alinhar soluções à direção da SAP.

### Integração
- [SAP Business Accelerator Hub](/glossario/sap-business-accelerator-hub) *(API Business Hub, api.sap.com, SAP API Business Hub)* — Portal da SAP (api.sap.com) que documenta APIs, eventos e pacotes de integração padrão — ponto de partida de qualquer integração.
- [SAP Event Mesh](/glossario/sap-event-mesh) *(Event Mesh, Advanced Event Mesh, Eventos de Negócio)* — Message broker gerenciado do BTP para arquitetura orientada a eventos: o S/4HANA publica eventos (ex.: SalesOrderCreated) e extensões assinantes reagem de forma assíncrona.
- [SAP Integration Suite](/glossario/sap-integration-suite) *(Integration Suite, CPI, SAP Cloud Integration)* — iPaaS estratégico da SAP no BTP (sucessor do PI/PO) para integrações A2A, B2B, B2G, APIs e eventos: Cloud Integration (iFlows), API Management, Open Connectors, Integration Advisor e TPM.
- [Tecnologias de Integração SAP](/glossario/tecnologias-de-integracao-sap) *(IDoc, RFC, SOAP)* — Protocolos de integração do SAP (IDoc, RFC, SOAP, OData/REST, eventos) e quais manter ou evitar no Clean Core.

### Runtimes
- [Ambientes BTP](/glossario/ambientes-btp) *(Runtimes BTP, Cloud Foundry, CF)* — Ambientes de execução do BTP: Cloud Foundry (PaaS orientado a apps), Kyma (Kubernetes gerenciado para microserviços/containers) e ABAP Environment "Steampunk" (ABAP Cloud na nuvem).
- [Serviços e Bindings BTP](/glossario/servicos-e-bindings-btp) *(Service Instance, Service Binding BTP, Service Plan)* — Como apps consomem serviços no BTP (marketplace → plano → instância → binding com credenciais em VCAP_SERVICES) e como escalam, se recuperam e registram logs.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
