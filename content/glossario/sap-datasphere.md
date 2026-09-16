---
title: "SAP Datasphere"
description: "Plataforma SaaS de dados da BTP (evolução do SAP Data Warehouse Cloud) que materializa o Business Data Fabric: integra, cataloga, modela semanticamente e entrega dados SAP e não-SAP para analytics, planejamento e IA."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Datasphere` · `DSP` · `SAP Data Warehouse Cloud` · `DWC` · `Business Data Fabric` · `Data Fabric` · `Capacity Units` · `Tenant Datasphere`

> **Definição**
> Plataforma SaaS de dados da BTP (evolução do SAP Data Warehouse Cloud) que materializa o Business Data Fabric: integra, cataloga, modela semanticamente e entrega dados SAP e não-SAP para analytics, planejamento e IA.
{.is-info}

**Problema:** silos de dados, planilhas e o limite do DW tradicional (BW) — rigidez, dependência de TI e latência de lotes.

**Business Data Fabric:** não é produto, é arquitetura — malha sobre toda a paisagem de dados com **acesso unificado** (sem mover dados à toa), **governança centralizada** (metadados, linhagem, políticas), **semântica de negócio** e **self-service**.

**Pilares do Datasphere:**
1. **Acesso universal:** virtualização/federação (remote tables) quando possível, replicação quando necessário — ver [Integração de Dados Datasphere](/glossario/integracao-de-dados-datasphere).
2. **Catálogo unificado:** descoberta em linguagem natural, linhagem completa, glossário de negócio e KPIs, tags e descrições assistidas por IA — ver [Catálogo e Governança Datasphere](/glossario/catalogo-e-governanca-datasphere).
3. **Modelagem semântica:** [Business Builder](/glossario/business-builder) e Analytic Models; reaproveita semântica SAP via [SAP BW Bridge](/glossario/sap-bw-bridge) e BW/4HANA Model Transfer.
4. **Ecossistema aberto:** S/4HANA, ECC, BW, SuccessFactors, AWS (S3, Redshift), Azure (ADLS Gen2, SQL), GCP (BigQuery), Oracle, SQL Server, Databricks, Collibra, Confluent, Salesforce, DataRobot.

**Base técnica:** construído sobre a BTP e o [SAP HANA Cloud](/glossario/sap-hana-cloud) (in-memory para dados quentes + **NSE — Native Storage Extension** para dados mornos em disco, ainda online via SQL; data lake para dados frios) em AWS, Azure e GCP.

**Arquitetura em camadas:** semântica (Business Builder, Analytic Models) → virtualização (federação de múltiplas fontes) → dados (HANA Database e File Storage/data lake).

**Tenant:** instância dedicada e isolada provisionada no BTP Cockpit (plano Free ou Standard; Standard começa com 128 GB de storage e 32 GB de memória = 2 blocos de computação; upscaling a qualquer momento; System Owner avisado por e-mail). Metáfora: tenant = prédio; [Spaces Datasphere](/glossario/spaces-datasphere) = andares.

| Critério | SAP BW/4HANA | SAP Datasphere |
|---|---|---|
| Arquitetura | On-premise, replicação (ETL) | Cloud-native SaaS, virtualização primeiro |
| Escopo | Principalmente SAP | SAP e não-SAP |
| Modelagem | InfoCubes, ADSOs | Entidades flexíveis no Business Builder |
| Agilidade | TI controla | Self-service negócio + TI |
| Governança | Dentro do silo BW | Catálogo para toda a empresa |

**Papéis:** TI deixa de ser *gatekeeper* e vira habilitadora (conexões, IP allowlist, usuários, spaces, curadoria de *data products*); negócio faz self-service (catálogo, Business Builder, consumo em [SAP Analytics Cloud](/glossario/sap-analytics-cloud) e Excel).

**Na BTP:** pilar de Data & Analytics junto com HANA Cloud, SAC, AI Core e [SAP Integration Suite](/glossario/sap-integration-suite).

**Casos de uso:** consolidação financeira e xP&A (conteúdo BW Bridge `_GLACCOUNTLINEITEMRAWDATA` + SAC) e visão 360° do cliente (conteúdo SD `/IMO/SDDLV` + Salesforce + marketing).

**Valor:** menor TCO (menos replicação, serviço gerenciado, preço por consumo em **Capacity Units — CUs**), agilidade (insights de meses para dias) e confiança (catálogo, linhagem, segurança).

> "Não é sobre construir um data warehouse maior. É sobre tecer uma malha de dados mais inteligente."

**Carreira e maestria (Parte 2, módulo 20):**
- **Futuro (Road Map Explorer):** governança aprimorada (linhagem, metadados, Data Mesh), novos conectores e **Joule** (enriquecimento de metadados, busca em linguagem natural, modelagem assistida).
- **Certificação:** C_DS_43 (ou a mais atual) — provisionamento e conectividade (DP Agent, Cloud Connector, fontes SAP e não-SAP), administração e segurança (tenants, usuários, roles, spaces, IP allowlist, monitoramento) e modelagem/integração (Data Builder, Business Builder, views, DACs, replication e transformation flows). Estude pela SAP Learning Journey e pratique em developers.sap.com; participe da SAP Community.
- **Perfil "Full Stack Data Engineer" SAP:** arquiteto de soluções (landscape, Data Mesh/Lakehouse, sizing) + engenheiro de dados (integração, flows, qualidade) + modelador de negócios (Business Builder, camada semântica) + guardião da governança (spaces, DACs, custos).
- **Primeiro projeto:** comece pequeno (um caso de alto impacto e baixa complexidade), entregue uma PoC em semanas e escale.
- **Armadilha:** evitar o *lift & shift* do BW — replicar PSA e camadas de ADSO aumenta custo e complexidade; priorize virtualização e use o BW Bridge como ponte, não destino.
- **Para consultores BW/ABAP:** ODP, CDS, InfoObjects/ADSOs e regras ABAP viram views gráficas/SQL, remote tables, Business Builder e governança em spaces.
- **PoC sugerida:** conectar o S/4HANA (Cloud Connector + ABAP SQL Services) → view de "Faturamento por Linha de Produto" → expor e visualizar no SAC.

## 🔗 Relacionados
- [Spaces Datasphere](/glossario/spaces-datasphere)
- [Data Builder](/glossario/data-builder)
- [Business Builder](/glossario/business-builder)
- [SAP BW Bridge](/glossario/sap-bw-bridge)
- [SAP HANA Cloud](/glossario/sap-hana-cloud)
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [SAP BW4HANA](/glossario/sap-bw-4hana)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 1)
- Apostila - SAP Datasphere (Parte 2)
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
