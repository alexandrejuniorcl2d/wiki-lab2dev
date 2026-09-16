---
title: "Entidades C4C de Clientes"
description: "Modelo de clientes da API C4C: Account (PJ), IndividualCustomer (PF), Contact via AccountContactRelationship, endereços, equipe, dados de vendas e mapeamento de IDs externos."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `AccountCollection` · `IndividualCustomerCollection` · `ContactCollection` · `AccountContactRelationship` · `AccountAddress` · `AccountTeam` · `AccountSalesData` · `ExternalIDMapping` · `ObjectID` · `RoleCode` · `CategoryCode`

> **Definição**
> Modelo de clientes da API C4C: Account (PJ), IndividualCustomer (PF), Contact via AccountContactRelationship, endereços, equipe, dados de vendas e mapeamento de IDs externos.
{.is-info}

| Entidade | Papel | Campos-chave |
|---|---|---|
| `Account` | Pessoa jurídica (cliente/prospect) | `ObjectID`, `AccountName` (240), `RoleCode` (CRM000 cliente, CRM001 prospect, CRM002 concorrente), `StatusCode` (2 ativo, 3 bloqueado, 4 obsoleto), `CategoryCode` (1 prospect, 2 customer), `OwnerID` |
| `IndividualCustomer` | Pessoa física (B2C) | `FirstName`, `LastName` (obrigatório), `ContactPermissionCode` (LGPD/GDPR) |
| `AccountAddress` | Endereços (filho, N por conta) | `Street`, `City`, `PostalCode`, `CountryCode` |
| `Contact` | Pessoas das empresas | `ContactID`; comunicação em `ContactCommunicationData` |
| `AccountContactRelationship` | Liga contatos ↔ contas (N:N) | `AccountUUID`, `ContactUUID`, `Main`, `DepartmentCode`, `FunctionCode` |
| `AccountRole` / `AccountTeam` | Papéis e equipe/funções de parceiro | `RoleCode`, `PartyRoleCode`, `EmployeeUUID` |
| `AccountSalesData` | Dados por área de vendas | `SalesOrganisationID`, `DistributionChannelCode`, `DivisionCode`, `IncotermsCode`, `PaymentTermsCode`, bloqueios |
| `ExternalIDMapping` | Mapeia IDs de sistemas externos (ERP) | `ExternalID`, `ExternalSystemID`, `ObjectTypeCode` |

**Identificadores:** `ObjectID` (chave técnica da API, `Edm.String` 70) · **UID** (ID amigável da UI, ex.: `MC9785`, via endpoint `/odata/uid/v1/`) · **ExternalID** (ID no sistema de origem).

## 🔗 Relacionados
- [SAP C4C](/glossario/sap-c4c)
- [Business Partner](/glossario/business-partner)
- [Navigation Property OData](/glossario/navigation-property-odata)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
