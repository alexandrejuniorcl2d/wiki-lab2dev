---
title: "Serviços CAP"
description: "Serviços CAP são \"lentes\" orientadas a casos de uso sobre o domínio: projeções que renomeiam, achatam e excluem campos, com anotações de segurança, draft, actions/functions e CRUD genérico OData V4 sem código."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `service` · `projection on` · `excluding` · `@requires` · `@restrict` · `@path` · `action CAP` · `function CAP` · `@odata.draft.enabled` · `Generic Handlers` · `Auto-Exposure` · `CatalogService` · `AdminService`

> **Definição**
> Serviços CAP são "lentes" orientadas a casos de uso sobre o domínio: projeções que renomeiam, achatam e excluem campos, com anotações de segurança, draft, actions/functions e CRUD genérico OData V4 sem código.
{.is-info}

**Por que separar `AdminService` de `CatalogService`:** segurança (admin com `@requires`, catálogo `@readonly`, menor superfície de ataque), performance (payloads sob medida) e propósito (contrato claro por consumidor).

```cds
using { com.sap.techbooks.domain as db } from '../db/schema';

@path: '/api/v1/catalog'
@readonly
service CatalogService {
  entity PublicBooks as projection on db.Books {
    ID as bookId,
    title,
    author.name as authorName,           // achata associação (path expression)
    stock > 10 as isAvailable : Boolean, // campo computado
    price,
    currency.symbol as currencySymbol
  } excluding { stock, cost, createdBy, modifiedAt };
}

@path: '/admin'
@requires: 'BookAdmin'
@odata.draft.enabled
service AdminService {
  @readonly entity Authors as projection on db.Authors;
  entity ActiveBooks as projection on db.Books where isAvailable = true;   // filtro fixo
  action   promoteBook(bookId : db.Books:ID, discount : Decimal) returns db.Books;   // POST
  function getBestsellers() returns array of db.Books;                              // GET
}
```

- **Projeção** (`as projection on`) desacopla API de banco — mude `db.Books` sem quebrar consumidores. ⚠️ Evite projeções 1:1 em APIs públicas: liste campos explicitamente para não vazar campos novos sensíveis.
- **Auto-exposure:** alvos de composição são expostos automaticamente (`/Orders(123)/Items`); para esconder, use projeção que omite a composição.
- **Generic handlers:** para projeções simples o runtime implementa READ (com `$filter`, `$select`, `$expand`, `$orderby`, `$top`, `$skip`), CREATE, UPDATE (PATCH) e DELETE — escreva JS só para validações, lógica e actions/functions.
- **Draft:** `@odata.draft.enabled` — tabelas `_drafts` e ativação gerenciadas pelo framework (auto-save, edição em várias sessões).
- **Segurança declarativa:** `@requires: 'Role'` (ou `authenticated-user`) no serviço; `@restrict` por entidade/evento (CREATE, UPDATE…).
- **`$metadata`:** contrato formal EDMX (entity sets, tipos, navegações, actions, anotações) usado por UIs e geração de clientes.
- **Testes:** browser/Fiori preview do `cds watch` para GETs; REST Client/Postman (arquivos `.http`) para CRUD, actions, tokens JWT e automação.
- **Convenções:** serviços por caso de uso (`OrderProcessingService`), entidades no plural capitalizadas, elementos em camelCase, arquivos separados (`db/schema.cds`, `srv/catalog-service.cds`, `srv/admin-service.cds`, `app/annotations.cds`).

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [CDS no CAP](/glossario/cds-no-cap)
- [Event Handlers CAP](/glossario/event-handlers-cap)
- [OData](/glossario/odata)
- [Draft RAP](/glossario/draft-rap)

## 📚 Fontes
- Apostila - SAP CAP (Completa)
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
