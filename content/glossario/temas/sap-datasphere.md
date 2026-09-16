---
title: "SAP Datasphere (tema)"
description: "Data warehouse na nuvem: spaces, modelagem, integração e camadas semânticas."
tags: ["glossario","sap-datasphere"]
---
> **Sobre esta área**
> Data warehouse na nuvem: spaces, modelagem, integração e camadas semânticas.
> Tag: [#sap-datasphere](/t/sap-datasphere) · 18 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - SAP Datasphere (Parte 1) — Parte 1 (módulos 1–10): Business Data Fabric, arquitetura e spaces, integração de dados, Data Builder, Business Builder, BW Bridge, Shell/Remote Conversion e Business Content.
- Apostila - SAP Datasphere (Parte 2) — Parte 2 (módulos 11–20): SAC e ferramentas externas, segurança, ALM, catálogo, IA, performance, custos, integração com S/4HANA e carreira.

## 📖 Termos

### Aceleração
- [Business Content Datasphere](/glossario/business-content-datasphere) *(Content Network, SAP Business Content Datasphere, Finance Foundation)* — Pacotes prontos da SAP e parceiros (Content Network) com modelos, views, fluxos BW Bridge e stories SAC por indústria e LoB, que reduzem projetos analíticos de meses para semanas.

### Administração
- [ALM Datasphere](/glossario/alm-datasphere) *(Transporte Datasphere, Export Import Datasphere, CSN JSON Datasphere)* — Ciclo de vida de aplicações no Datasphere: tenants DEV/QA/PROD, transporte por export/import CSN/JSON ou Content Network, CTS+/gCTS no BW Bridge, CLI para CI/CD com Git e governança de releases.
- [Segurança Datasphere](/glossario/seguranca-datasphere) *(DW Administrator, DW Consumer, Data Access Controls)* — Segurança em 4 níveis (tenant, space, objeto, linha) com IdP SAML, roles padrão e scoped roles, Data Access Controls para row-level security, auditoria, gestão de usuários em massa e responsabilidade compartilhada de backup.

### Arquitetura
- [Spaces Datasphere](/glossario/spaces-datasphere) *(Space Datasphere, Spaces, Scoped Roles)* — Space é a área de trabalho segura e isolada do Datasphere, com storage, computação, membros, conexões e schemas próprios — base da governança federada (TI controla o tenant, áreas de negócio operam seus spaces).

### BW
- [Migração BW para Datasphere](/glossario/migracao-bw-para-datasphere) *(Shell Conversion, Remote Conversion, Transfer Cockpit)* — Caminhos para levar um BW on-premise ao BW Bridge: Shell Conversion (só metadados, recarga do zero) ou Remote Conversion (metadados + dados históricos via ODP, com downtime e sincronização de delta).
- [SAP BW Bridge](/glossario/sap-bw-bridge) *(BW Bridge, SAP Datasphere BW Bridge, BW Bridge Cockpit)* — Serviço PaaS gerenciado dentro do tenant Datasphere, compatível com BW/4HANA, que preserva a camada de extração e staging do BW (ODP, ADSOs, transformações ABAP, DTPs, process chains) e a expõe aos spaces nativos.

### Consumo
- [Consumo Externo Datasphere](/glossario/consumo-externo-datasphere) *(OData Datasphere, OAuth Client Datasphere, Interactive Usage)* — Como abrir os dados do Datasphere para Power BI, Tableau, Excel, Python e apps: OData com OAuth 2.0 (governado) ou SQL direto via Open SQL Schema e IP Allowlist (performático), com governança de saída.
- [Datasphere e SAC](/glossario/datasphere-e-sac) *(Live Connection Datasphere, Tunnel Connection, Direct Connection)* — Integração nativa em que o Datasphere é a camada de dados governada e o SAC a de visualização, planejamento e IA, via live connection (dados não saem do Datasphere), com hierarquias, variáveis, SSO e write-back por OData.

### Fundamentos
- [SAP Datasphere](/glossario/sap-datasphere) *(Datasphere, DSP, SAP Data Warehouse Cloud)* — Plataforma SaaS de dados da BTP (evolução do SAP Data Warehouse Cloud) que materializa o Business Data Fabric: integra, cataloga, modela semanticamente e entrega dados SAP e não-SAP para analytics, planejamento e IA.

### Governança
- [Catálogo e Governança Datasphere](/glossario/catalogo-e-governanca-datasphere) *(Data Catalog Datasphere, SAP Datasphere Catalog, Business Glossary Datasphere)* — Catálogo de dados do Datasphere que transforma o "pântano de dados" em biblioteca: busca inteligente, glossário de negócio vinculado a objetos físicos, linhagem e análise de impacto, profiling, enriquecimento por IA e certificação colaborativa.

### IA
- [Datasphere para IA](/glossario/datasphere-para-ia) *(hana_ml, HANA ML, Predictive Analysis Library)* — Datasphere como base governada para data science e IA: Python/Jupyter conectados, machine learning dentro do HANA (PAL, APL via hana_ml com pushdown), write-back de previsões, federação e recursos de Joule/SAP Business AI.

### Integração
- [Integração de Dados Datasphere](/glossario/integracao-de-dados-datasphere) *(Remote Tables, Federação de Dados, Smart Data Access)* — Como os dados entram no Datasphere: conexões (Cloud Connector, DP Agent, conectores SAP/genéricos/hyperscalers) e as estratégias federação (remote tables), replicação (replication flows), view persistence, data flows (ETL) e transformation flows (ELT), monitoradas no Data Integration Monitor.
- [Integração S4HANA com Datasphere](/glossario/integracao-s4hana-com-datasphere) *(@Analytics.dataExtraction.enabled, @Analytics.dataExtraction.delta.byElement.name, VDM_CDS_ANALYZER)* — Como extrair o S/4HANA para o Datasphere: CDS views extratoras (@Analytics.dataExtraction) via ODP com delta pela fila ODQ, Cloud Connector ou communication arrangement, hierarquias, virtual × replicado, campos Z, SLT e reconciliação.

### Modelagem
- [Analytic Model](/glossario/analytic-model) *(Analytic Models, Modelo Analítico Datasphere, Expose for Consumption)* — Objeto analítico do Datasphere, criado sobre fatos e dimensões do Data Builder, que empacota medidas, hierarquias, variáveis e semântica prontas para consumo no SAP Analytics Cloud, Excel e APIs.
- [Business Builder](/glossario/business-builder) *(Business Layer, Camada de Negócio Datasphere, Business Entity)* — Camada semântica de negócio do Datasphere que traduz o Data Layer técnico em entidades, medidas, atributos, fact models, consumption models e perspectivas com segurança por linha na linguagem do decisor.
- [Data Builder](/glossario/data-builder) *(Data Builder Datasphere, Tabelas Locais, Local Table)* — Workbench técnico do Datasphere para criar tabelas locais, views gráficas e SQL, fluxos, E-R models e semântica (chaves, associações, fato/dimensão, hierarquias, parâmetros, moeda) sobre os dados de um space.

### Operação
- [Custos Datasphere](/glossario/custos-datasphere) *(Capacity Unit Estimator, SAP Quick Sizer Datasphere, Data Tiering)* — Gestão de custos no Datasphere: Capacity Units como moeda (compute × storage), tiers hot/warm/cold, sizing com o Capacity Unit Estimator, Elastic Compute Nodes, data lake relacional, monitoramento de CUs, chargeback e higiene.
- [Performance Datasphere](/glossario/performance-datasphere) *(Push-down Datasphere, EXPLAIN PLAN, SQL Analyzer Datasphere)* — Técnicas de performance no Datasphere: push-down para o HANA, análise de plano de execução, particionamento, índices, joins e cardinalidade corretos, persistência e delta, filtros precoces, star schema, prevenção de OOM e monitoramento de statements caros.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
