---
title: "Entidades C4C de Vendas"
description: "Funil de vendas na API C4C: Lead → Opportunity (fase, probabilidade, valor, produtos) e atividades (appointments, tasks, phone calls) com participantes por RoleCode."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `LeadCollection` · `OpportunityCollection` · `OpportunityProduct` · `AppointmentCollection` · `TaskCollection` · `PhoneCallCollection` · `InvolvedParties` · `SalesPhaseCode`

> **Definição**
> Funil de vendas na API C4C: Lead → Opportunity (fase, probabilidade, valor, produtos) e atividades (appointments, tasks, phone calls) com participantes por RoleCode.
{.is-info}

- **Lead** (`LeadCollection`, objeto LeanLead): `QualificationLevelCode` (frio/morno/quente), `OriginTypeCode` (feira, campanha, web), `ApprovalStatusCode` (1 não iniciado, 3 em aprovação, 4 aprovado…). Porta de entrada de formulários web e marketing.
- **Opportunity:** `SalesPhaseCode` (pipeline), `ProbabilityPercent`, `ExpectedValue` (Amount com moeda). Avançar fase = `PATCH` com `SalesPhaseCode`/`ProbabilityPercent`.
- **OpportunityProduct:** itens (`ProductID`, `Quantity`, `ProposedValue`) ligados por `ParentObjectID`.
- **Atividades:** `AppointmentCollection` (`StartDateTime`/`EndDateTime` DateTimeOffset, `Subject`, `AllDayEvent`, sync com Outlook/Google) · `TaskCollection` (`DueDateTime`, `PriorityCode`, `StatusCode`) · `PhoneCallCollection` (`DirectionCode` 1 entrada/2 saída — integração CTI).
- **Ligação atividade ↔ oportunidade:** coleções de referência como `OpportunityAppointmentSalesActivity`.
- **Participantes:** `OpportunityInvolvedParties`, `AppointmentInvolvedParties` com `RoleCode` (15 contato principal, 31 funcionário responsável, 142 tomador de decisão).
- **Converter lead em oportunidade:** PATCH lead (aprovado) → GET dados → POST opportunity → POST referência (opcional).

## 🔗 Relacionados
- [SAP C4C](/glossario/sap-c4c)
- [Entidades C4C de Clientes](/glossario/entidades-c4c-de-clientes)
- [CX](/glossario/cx)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
