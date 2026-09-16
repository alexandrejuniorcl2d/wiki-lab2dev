---
title: "Actions RAP"
description: "Operações de negócio não-padrão (além do CRUD) declaradas na BDEF e implementadas em métodos FOR MODIFY — aparecem como botões no Fiori."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `Action` · `Ação RAP` · `action result [1] $self` · `internal action` · `Instance Factory Action` · `static action` · `FOR ACTION`

> **Definição**
> Operações de negócio não-padrão (além do CRUD) declaradas na BDEF e implementadas em métodos FOR MODIFY — aparecem como botões no Fiori.
{.is-info}

```abap
" BDEF
action acceptTravel result [1] $self;                     " retorna a instância atualizada (UI sem refresh)
action rejectTravel;
internal action reCalcTotalPrice;                          " só chamada de dentro do BO
action deductDiscount parameter ZA_DiscountParam result [1] $self;
factory action copyTravel [1];                             " instance factory: cria nova instância
```
```abap
METHOD acceptTravel.
  MODIFY ENTITIES OF zi_travel IN LOCAL MODE
    ENTITY Travel UPDATE FIELDS ( OverallStatus )
    WITH VALUE #( FOR key IN keys ( %tky = key-%tky  OverallStatus = 'A' ) )
    FAILED failed REPORTED reported.

  READ ENTITIES OF zi_travel IN LOCAL MODE
    ENTITY Travel ALL FIELDS WITH CORRESPONDING #( keys ) RESULT DATA(travels).
  result = VALUE #( FOR t IN travels ( %tky = t-%tky  %param = t ) ).
ENDMETHOD.
```
Na UI: `@UI.lineItem: [{ type: #FOR_ACTION, dataAction: 'acceptTravel', label: 'Aceitar' }]`. Parâmetros tipados por [Abstract Entity](/glossario/abstract-entity).

## 🔗 Relacionados
- [Feature Control RAP](/glossario/feature-control-rap)
- [Behavior Definition](/glossario/behavior-definition)
- [Abstract Entity](/glossario/abstract-entity)
- [EML](/glossario/eml)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - Padrão Wrapper para BAPIs

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
