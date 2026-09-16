---
title: "Behavior Definition"
description: "Objeto de repositório (em BDL) que declara o comportamento transacional do BO: operações CRUD, locks, ETag, autorização, ações, validações, determinações e draft."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `BDEF` · `BDL` · `Behavior Definition Language` · `define behavior for` · `strict` · `alias` · `persistent table` · `authorization master` · `Behavior Projection`

> **Definição**
> Objeto de repositório (em BDL) que declara o comportamento transacional do BO: operações CRUD, locks, ETag, autorização, ações, validações, determinações e draft.
{.is-info}

```abap
managed implementation in class zbp_i_travel unique;
strict ( 2 );
with draft;

define behavior for ZI_Travel alias Travel
persistent table ztravel
draft table ztravel_d
lock master
total etag LastChangedAt
authorization master ( instance )
etag master LastChangedAt
{
  create; update; delete;
  field ( readonly ) TravelID;
  field ( mandatory ) AgencyID, CustomerID;

  determination setStatusToOpen on modify { create; }
  determination calculateTotalPrice on modify { create; field BookingFee, CurrencyCode; }
  validation validateDates on save { create; field BeginDate, EndDate; }

  action ( features : instance ) acceptTravel result [1] $self;
  internal action reCalcTotalPrice;

  draft action Edit; draft action Activate; draft action Discard; draft action Resume;
  draft determine action Prepare;

  association _Booking { create; with draft; }
  mapping for ztravel corresponding;
}
```
- **Uma BDEF por composition tree**; cada nó declarado explicitamente, sempre com `alias` (nome usado via [EML](/glossario/eml)).
- `lock master` (filhos herdam o lock), `authorization master`, `etag master` — ver [Controle de Concorrência RAP](/glossario/controle-de-concorrencia-rap).
- `strict ( 2 )`: checagens mais rígidas recomendadas.
- **Behavior projection** (na camada `C_`): `projection; use create; use action acceptTravel;` — ações podem ser omitidas se o usuário não puder executá-las.

## 🔗 Relacionados
- [RAP](/glossario/rap)
- [Behavior Pool](/glossario/behavior-pool)
- [Managed x Unmanaged](/glossario/managed-x-unmanaged)
- [Determinations e Validations](/glossario/determinations-e-validations)
- [Actions RAP](/glossario/actions-rap)
- [Draft RAP](/glossario/draft-rap)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - Padrão Wrapper para BAPIs

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
