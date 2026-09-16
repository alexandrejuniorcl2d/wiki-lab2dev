---
title: "CDS View"
description: "Infraestrutura de linguagens (DDL, DCL) para definir modelos de dados semânticos no ABAP, executados no HANA — base de Fiori, Analytics, OData e RAP no S/4HANA."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `ABAP CDS` · `Core Data Services` · `CDS` · `CDS Views` · `Core Data Services View`

> **Definição**
> Infraestrutura de linguagens (DDL, DCL) para definir modelos de dados semânticos no ABAP, executados no HANA — base de Fiori, Analytics, OData e RAP no S/4HANA.
{.is-info}

**Arquitetura em 3 camadas:**
1. **SAP HANA** — computação pesada, joins e agregações (*code pushdown*).
2. **ABAP CDS** (camada de virtualização) — view entities, table functions, access controls, metadata.
3. **Consumo** — apps Fiori, APIs OData, Analytics, programas ABAP.

**Linguagens:** **DDL** (Data Definition Language — estrutura e semântica) e **DCL** (Data Control Language — segurança e acesso).

> **Para funcionais: "deixe a SE16 para trás"**
> No S/4HANA (sobretudo cloud) o acesso direto a tabelas foi removido. CDS são "visões inteligentes" com nomes de negócio (`VBELN` → `SalesOrder`), associações, cálculos e autorizações. Use o app **View Browser** para achar e o **Customer Data Browser** para ver dados — ver [View Browser e Customer Data Browser](/glossario/view-browser-e-customer-data-browser).
{.is-success}

**Analogia do chef (code-to-data):** antes você comprava todos os ingredientes (dados brutos) e cozinhava em casa (servidor de aplicação); agora entrega a receita ao chef que já está no mercado (HANA) e recebe só o prato pronto.

**Ecossistema de entidades:** [View Entity](/glossario/view-entity) · [Projection View](/glossario/projection-view) · [Table Function](/glossario/table-function) · [CDS Hierarchy](/glossario/cds-hierarchy) · [Custom Entity](/glossario/custom-entity) · [Abstract Entity](/glossario/abstract-entity).

**Os 5 mandamentos do mestre em CDS:**
1. Usarás `DEFINE VIEW ENTITY` (abandone `DEFINE VIEW`).
2. Construirás em camadas ([VDM](/glossario/virtual-data-model)).
3. Preferirás [associações](/glossario/associacao-cds) a joins.
4. Estenderás, não modificarás ([Extend View](/glossario/extend-view)).
5. Protegerás com [DCL](/glossario/dcl-access-control).

**Onde as CDS brilham:** Fiori Elements (apps com pouco/nenhum código de UI) · SAC e Query Browser (analytics self-service) · APIs OData · ALV com IDA · `SELECT` direto em programas ABAP · extração para BW.

**Exemplo mínimo (leitura para funcionais):**
```sql
define view entity I_SalesOrderBasic
  as select from vbak                         -- de onde
  association [0..1] to I_Customer as _Customer
    on $projection.SoldToParty = _Customer.Customer
{
  key vbeln as SalesOrder,                    -- alias de negócio
      erdat as CreationDate,
      vkorg as SalesOrganization,
      kunnr as SoldToParty,
      _Customer                               -- associação exposta
}
where vbtyp = 'C'                             -- filtro fixo
```

**Boas práticas / armadilhas:** views gigantes com centenas de linhas e muitos UNIONs; aninhamento exagerado (view sobre view sobre view); falta de documentação; joins de 7–14 tabelas → quebre com associações. Ferramentas de diagnóstico: [Ferramentas CDS no ADT](/glossario/ferramentas-cds-no-adt).

## 🔗 Relacionados
- [Virtual Data Model](/glossario/virtual-data-model)
- [View Entity](/glossario/view-entity)
- [Anotações CDS](/glossario/anotacoes-cds)
- [Associação CDS](/glossario/associacao-cds)
- [DCL - Access Control](/glossario/dcl-access-control)
- [Performance ABAP no HANA](/glossario/performance-abap-no-hana)
- [RAP](/glossario/rap)
- [Embedded Analytics](/glossario/embedded-analytics)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - CDS Views para Funcionais (Parte 1)
- Apostila - CDS Views para Funcionais (Parte 2)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP
- Apostila - Conhecendo todos os Módulos do SAP

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
