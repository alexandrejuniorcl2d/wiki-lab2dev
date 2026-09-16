---
title: "Feature Control RAP"
description: "Mecanismo que habilita/desabilita operações e ações ou torna campos read-only/obrigatórios conforme o estado de cada instância — UI consciente do contexto."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `Feature Control` · `features: instance` · `get_instance_features` · `get_features` · `fc-o-disabled` · `fc-o-enabled` · `fc-f-read_only` · `Dynamic Feature Control` · `Static Feature Control`

> **Definição**
> Mecanismo que habilita/desabilita operações e ações ou torna campos read-only/obrigatórios conforme o estado de cada instância — UI consciente do contexto.
{.is-info}

- **Estático (BDEF):** `field ( readonly ) TravelID; field ( mandatory ) CustomerID;`
- **Dinâmico:** `action ( features : instance ) acceptTravel ...;` / `update ( features : instance );` / `field ( features : instance ) Description;` + método de features.

```abap
METHOD get_instance_features.
  READ ENTITIES OF zi_travel IN LOCAL MODE
    ENTITY Travel FIELDS ( OverallStatus ) WITH CORRESPONDING #( keys )
    RESULT DATA(travels).
  result = VALUE #( FOR t IN travels
    ( %tky = t-%tky
      %action-acceptTravel = COND #( WHEN t-OverallStatus = 'A'
                                     THEN if_abap_behv=>fc-o-disabled
                                     ELSE if_abap_behv=>fc-o-enabled )
      %field-Description   = if_abap_behv=>fc-f-read_only ) ).
ENDMETHOD.
```
Controla: operações (update, delete, ações), campos (read-only, mandatory) e associações (create-by-association). Pergunta-chave: "sob quais condições esta funcionalidade deve estar disponível?"

## 🔗 Relacionados
- [Actions RAP](/glossario/actions-rap)
- [Behavior Definition](/glossario/behavior-definition)

## 📚 Fontes
- Apostila - ABAP RAP

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
