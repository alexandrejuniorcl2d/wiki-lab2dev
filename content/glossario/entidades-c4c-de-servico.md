---
title: "Entidades C4C de Serviço"
description: "Gestão de tickets na API C4C: ServiceRequest com prioridade, categorias, SLAs, interações por TypeCode, status do ciclo de vida, sub-tickets, anexos Base64 e apontamento de horas."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `ServiceRequestCollection` · `ServiceRequest` · `Ticket C4C` · `ServiceRequestDescription` · `ServiceRequestAttachmentFolder` · `TimeEntry` · `ServiceRequestLifeCycleStatusCode`

> **Definição**
> Gestão de tickets na API C4C: ServiceRequest com prioridade, categorias, SLAs, interações por TypeCode, status do ciclo de vida, sub-tickets, anexos Base64 e apontamento de horas.
{.is-info}

- **Identificação:** `ObjectID` (GUID), `ID` (amigável), `Name` (assunto), `CustomerID` (conta), `ReporterPartyID` / `ReportedForPartyID` (contatos).
- **Classificação:** `ServicePriorityCode` (1 imediato, 2 urgente, 3 normal, 7 baixo); `ServiceIssueCategoryID`, `IncidentServiceIssueCategoryID`, `CauseServiceIssueCategoryID`.
- **SLA e responsabilidade:** `RequestedEnd`, `CompletionDueDate`, `InitialResponseDate`, `NextResponseDueDate`; `AssignedTo`, `ServiceAndSupportTeam`, `ServiceTechnician`.
- **Interações:** `ServiceRequestDescription` (`Text`, `AuthorName`, `CreatedOn`, `TypeCode` → nota interna × resposta ao cliente × descrição inicial) — portais devem filtrar por TypeCode.
- **Status:** `PATCH` em `ServiceRequestLifeCycleStatusCode` (aberto → em processo → aguardando cliente → concluído → fechado).
- **Hierarquia:** sub-tickets com `ParentServiceRequest` (ex.: onboarding com TI, infra, facilities).
- **Produtos/ativos:** `ProductID`, `SerialID`, `InstalledBaseID`, `InstallationPointID`; garantia `WarrantyFrom`/`WarrantyTo`.
- **Anexos:** `POST .../ServiceRequestAttachmentFolder` com `Name`, `MimeType`, `Binary` (Base64 — cliente codifica/decodifica).
- **Horas:** `TimeEntry` com `HeaderReferenceUUID` (UUID do ticket), `Duration` (`PT2H30M`), `Date`, `EmployeeUUID`.

## 🔗 Relacionados
- [SAP C4C](/glossario/sap-c4c)
- [Entidades C4C de Clientes](/glossario/entidades-c4c-de-clientes)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
