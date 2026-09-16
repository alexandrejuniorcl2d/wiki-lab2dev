---
title: "Determinations e Validations"
description: "Determinations calculam/preenchem campos automaticamente (o assistente); validations verificam consistência e bloqueiam o save (o guardião). Executadas pela DVM."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `Determination` · `Validation` · `Determinação` · `Validação` · `on modify` · `on save` · `FOR DETERMINE` · `FOR VALIDATE` · `DVM`

> **Definição**
> Determinations calculam/preenchem campos automaticamente (o assistente); validations verificam consistência e bloqueiam o save (o guardião). Executadas pela DVM.
{.is-info}

| | **Determinations** (assistente proativo) | **Validations** (guardião reativo) |
|---|---|---|
| Propósito | Calcular, derivar, valores padrão, campos administrativos | Verificar, proteger, rejeitar |
| Gatilho | `on modify` (reflete na UI) ou `on save` (finalize) | Quase sempre `on save` |
| Altera dados? | Sim — é o objetivo | **Não!** Proibido `MODIFY` em validation |
| Método | `FOR DETERMINE` | `FOR VALIDATE ON SAVE` |
| Saída | Buffer atualizado | `failed` + `reported` |
| Exemplos | `TotalPrice = BookingFee + FlightPrice`; status inicial 'O'; `setTravelID on save` | EndDate ≥ BeginDate; cliente existe; transição de status válida; data não no passado |

**Condições de disparo:** `{ create; update; delete; field Campo1, Campo2; }`.

```abap
METHOD validateBeginDate.
  DATA(today) = cl_abap_context_info=>get_system_date( ).
  READ ENTITIES OF zi_travel IN LOCAL MODE
    ENTITY Travel FIELDS ( BeginDate ) WITH CORRESPONDING #( keys )
    RESULT DATA(travels).
  LOOP AT travels INTO DATA(travel) WHERE BeginDate IS NOT INITIAL.
    IF travel-BeginDate < today.
      APPEND VALUE #( %tky = travel-%tky ) TO failed-travel.
      APPEND VALUE #( %tky = travel-%tky
                      %msg = new_message_with_text(
                               severity = if_abap_behv_message=>severity-error
                               text     = 'A data de início não pode ser no passado.' )
                      %element-BeginDate = if_abap_behv=>mk-on ) TO reported-travel.
    ENDIF.
  ENDLOOP.
ENDMETHOD.
```
`%element-Campo = mk-on` destaca o campo (borda vermelha) na UI. São inerentes ao BO: valem para qualquer consumidor (UI, API, EML).

## 🔗 Relacionados
- [Behavior Definition](/glossario/behavior-definition)
- [Behavior Pool](/glossario/behavior-pool)
- [EML](/glossario/eml)
- [BOPF](/glossario/bopf)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - Desmistificando o BOPF

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
