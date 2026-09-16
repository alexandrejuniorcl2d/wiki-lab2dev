---
title: "CDS no CAP"
description: "Modelagem de domínio declarativa no CAP com CDS (CDL): entidades, aspectos reutilizáveis (cuid, managed), composições × associações, tipos com validação, namespaces e geração automática de DDL e constraints."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `CDL` · `schema.cds` · `entity` · `aspect` · `cuid` · `aspect managed` · `localized` · `Composition of many` · `Association to` · `namespace` · `using` · `@sap/cds/common` · `Tipos Customizados CAP` · `@assert.format` · `@assert.range` · `@assert.unique` · `enum` · `Elementos Calculados` · `Tipos Estruturados`

> **Definição**
> Modelagem de domínio declarativa no CAP com CDS (CDL): entidades, aspectos reutilizáveis (cuid, managed), composições × associações, tipos com validação, namespaces e geração automática de DDL e constraints.
{.is-info}

> **CDS do CAP × ABAP CDS**
> Mesma família de linguagem, runtimes diferentes: no CAP o CDS gera tabelas/views (SQLite, HANA, PostgreSQL) e serviços Node/Java; no ABAP ([CDS View](/glossario/cds-view)) define views sobre tabelas existentes para RAP/Fiori.
{.is-info}

```cds
namespace com.sap.techbooks.domain;               // domínio reverso, evita colisões
using { cuid, managed, Currency, Country } from '@sap/cds/common';
using { techbooks.types as types } from './types';

entity Books : cuid, managed {                      // cuid = key ID : UUID; managed = createdAt/By, modifiedAt/By
  title    : localized String(111) @title: '{i18n>Title}';   // localized → tabela _texts por idioma
  isbn     : types.ISBN;
  stock    : Integer;
  price    : Decimal(9,2);
  currency : Currency;
  author   : Association to Authors;                // N:1 — gera author_ID + FOREIGN KEY
  reviews  : Composition of many Reviews on reviews.book = $self;   // 1:N contido
}
entity Authors : cuid, managed {
  name  : String(111);
  books : Association to many Books on books.author = $self;       // backlink
}
entity Reviews : cuid {
  book   : Association to Books;
  rating : types.Rating;
  text   : String;
}
```

**Tipos customizados (validação declarativa aplicada em CREATE/UPDATE):**
```cds
type ISBN   : String(13);
type Email  : String(255) @assert.format: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}';
type Rating : Integer @assert.range: [1, 5];
type Genre  : String enum { Technology; Science; Business; };
```

**Aspectos de domínio (reuso):** crie seu léxico — `aspect TechnicalData : managed {}`, `aspect Address { street; city; postalCode; country : Country; }` — e aplique `entity Customers : cuid, common.TechnicalData { billingAddress : common.Address; }`.

| **Composition** (contido em) | **Association** (relacionado a) |
|---|---|
| Parte-todo, ciclo de vida compartilhado (Order → OrderItems, Book → Reviews) | Entidades independentes (Books ↔ Authors, dados mestres) |
| Deleção em cascata, deep insert/update, unidade transacional | Sem cascata; integridade por foreign key |
| Alvos expostos automaticamente no serviço | Exposição manual |

**Composição com aspecto anônimo:** `Items : Composition of many { key book : Association to Books; quantity : Integer; }`.

**Mais recursos:**
- **Elementos calculados em views** (`select avg(rating) ... as averageRating`) — delegados ao banco; não indexáveis, evite em `where`/ordenação de grandes volumes.
- **Tipos estruturados** (`price : { amount; currency; discount; }` → colunas `price_amount`…) — use com moderação; prefira modelos planos ou aspects.
- **Constraints geradas:** `key` → PRIMARY KEY; associação to-one → FOREIGN KEY; `@assert.unique: { isbn: [isbn] }` → UNIQUE.
- **Ferramentas:** Graphical Modeler do BAS (workshops, visualizar relações) + editor de texto (implementar e manter) — complementares.

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [CDS View](/glossario/cds-view)
- [Associação CDS](/glossario/associacao-cds)
- [Serviços CAP](/glossario/servicos-cap)

## 📚 Fontes
- Apostila - SAP CAP (Completa)
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
