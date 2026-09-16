---
title: "ABAP CDS (tema)"
description: "Core Data Services: views, associações, anotações, VDM e CDS para funcionais."
tags: ["glossario","sap-cds"]
---
> **Sobre esta área**
> Core Data Services: views, associações, anotações, VDM e CDS para funcionais.
> Tag: [#sap-cds](/t/sap-cds) · 17 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - ABAP CDS — Core Data Services: sintaxe, associações, anotações e tipos de views.
- Apostila - CDS Views para Funcionais (Parte 1) — CDS Views explicadas para consultores funcionais.
- Apostila - CDS Views para Funcionais (Parte 2) — CDS Views para funcionais — continuação.

## 📖 Termos

### Extensibilidade
- [Extend View](/glossario/extend-view) *(EXTEND VIEW, extend view entity, CDS View Extension)* — Extensão estrutural que adiciona campos e associações a uma CDS standard sem modificar o código-fonte original (Clean Core).

### Fundamentos
- [CDS View](/glossario/cds-view) *(ABAP CDS, Core Data Services, CDS)* — Infraestrutura de linguagens (DDL, DCL) para definir modelos de dados semânticos no ABAP, executados no HANA — base de Fiori, Analytics, OData e RAP no S/4HANA.
- [Virtual Data Model](/glossario/virtual-data-model) *(VDM, Basic View, Composite View)* — Arquitetura em camadas das CDS standard do S/4HANA (Basic → Composite → Consumption) que traduz tabelas técnicas em entidades de negócio reutilizáveis.

### Metadados
- [Anotações CDS](/glossario/anotacoes-cds) *(Annotations, @UI, @Semantics)* — Metadados (@) que descrevem semântica e comportamento do modelo para o runtime ABAP e frameworks (Fiori, OData, Analytics) — "o DNA do modelo".
- [Metadata Extension](/glossario/metadata-extension) *(MDE, DDLX, ANNOTATE VIEW)* — Objeto separado (ANNOTATE VIEW) que adiciona ou sobrescreve anotações de uma CDS sem alterá-la, organizado em camadas de prioridade.

### Modelagem
- [Associação CDS](/glossario/associacao-cds) *(Association, Associações, Composition)* — Relacionamento declarado entre entidades CDS que só gera JOIN quando o consumidor pede campos do alvo ("join-on-demand" / lazy loading).
- [CDS Analítica](/glossario/cds-analitica) *(Analytical CDS, Cube View, Analytical Query)* — CDS anotadas para análise: cubo composite (@Analytics.dataCategory: #CUBE) + query de consumo (@Analytics.query: true) para SAC, Fiori e extração ODP.
- [Views Parametrizadas e Funções CDS](/glossario/views-parametrizadas-e-funcoes-cds) *(WITH PARAMETERS, \$session, \$session.user)* — Parâmetros de entrada (filtro aplicado no nível mais baixo do banco) e funções nativas (CASE, CAST, conversão de moeda, datas, strings, variáveis de sessão).

### Para Funcionais
- [View Browser e Customer Data Browser](/glossario/view-browser-e-customer-data-browser) *(View Browser, Customer Data Browser, SE16 do S/4HANA)* — Apps Fiori para funcionais: View Browser (catálogo para encontrar CDS por termo de negócio ou tabela) e Customer Data Browser (sucessor da SE16 para ver dados).

### Segurança e Testes
- [DCL - Access Control](/glossario/dcl-access-control) *(DCL, Data Control Language, Access Control)* — Linguagem de controle de acesso das CDS: roles que filtram linhas no banco conforme autorizações PFCG do usuário (AND implícito na query).
- [Ferramentas CDS no ADT](/glossario/ferramentas-cds-no-adt) *(Content Assist, Quick Fix, Ctrl+1)* — Recursos do Eclipse ADT para escrever, navegar, corrigir, formatar, testar e diagnosticar CDS — de Ctrl+Espaço ao Dependency Analyzer.

### Tipos de Entidade
- [Abstract Entity](/glossario/abstract-entity) *(CDS Abstract Entity, DEFINE ABSTRACT ENTITY, Parâmetro de Ação)* — Definição de estrutura/tipo em CDS sem objeto no banco — o "TYPES BEGIN OF" do CDS, usada para tipar parâmetros de ações e funções OData.
- [CDS Hierarchy](/glossario/cds-hierarchy) *(DEFINE HIERARCHY, Hierarquia CDS, CHILD TO PARENT ASSOCIATION)* — Entidade para modelar e consultar estruturas pai-filho (organogramas, BOMs) de forma nativa e performática, via auto-associação.
- [Custom Entity](/glossario/custom-entity) *(CDS Custom Entity, DEFINE CUSTOM ENTITY, IF_RAP_QUERY_PROVIDER)* — Entidade CDS com assinatura em CDS e busca de dados implementada em classe ABAP (IF_RAP_QUERY_PROVIDER) — para APIs externas, BAPIs ou fontes não relacionais.
- [Projection View](/glossario/projection-view) *(CDS Projection View, as projection on, Projeção)* — View entity especial que expõe um subconjunto de campos/associações de outra entidade como "fachada" para consumo (OData/RAP), sem duplicar lógica.
- [Table Function](/glossario/table-function) *(CDS Table Function, DEFINE TABLE FUNCTION, AMDP)* — Entidade CDS cuja lógica é implementada em SQLScript nativo do HANA via método AMDP — para algoritmos que o SQL declarativo não resolve.
- [View Entity](/glossario/view-entity) *(DEFINE VIEW ENTITY, CDS View Entity, DDIC-based View)* — Sucessora das views DDIC-based: `define view entity` gera só a entidade CDS (sem SQL view na SE11), ativa mais rápido e é obrigatória para RAP/ABAP Cloud.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
