---
title: "Behavior Pool"
description: "Classe ABAP global (ZBP_...) que implementa o comportamento do BO via classes locais handler (lhc_) e saver (lsc_)."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `Behavior Implementation` · `ZBP_` · `lhc_` · `lsc_` · `Local Handler Class` · `Saver Class` · `FOR BEHAVIOR OF` · `cl_abap_behavior_handler` · `cl_abap_behavior_saver`

> **Definição**
> Classe ABAP global (ZBP_...) que implementa o comportamento do BO via classes locais handler (lhc_) e saver (lsc_).
{.is-info}

```abap
CLASS zbp_i_travel DEFINITION PUBLIC ABSTRACT FINAL FOR BEHAVIOR OF zi_travel.
ENDCLASS.

" Handler: fase de interação
CLASS lhc_travel INHERITING FROM cl_abap_behavior_handler.
  PRIVATE SECTION.
    METHODS setStatusToOpen FOR DETERMINE ON MODIFY IMPORTING keys FOR Travel~setStatusToOpen.
    METHODS validateDates   FOR VALIDATE ON SAVE   IMPORTING keys FOR Travel~validateDates.
    METHODS acceptTravel    FOR MODIFY IMPORTING keys FOR ACTION Travel~acceptTravel RESULT result.
    METHODS get_instance_features FOR INSTANCE FEATURES
      IMPORTING keys REQUEST requested_features FOR Travel RESULT result.
ENDCLASS.

" Saver: sequência de save (unmanaged/additional save, eventos)
CLASS lsc_zi_travel INHERITING FROM cl_abap_behavior_saver.
  PROTECTED SECTION.
    METHODS save_modified REDEFINITION.
ENDCLASS.
```
Parâmetros implícitos: `keys` (entrada), `result`, e as estruturas de resposta `failed`, `reported`, `mapped`.

## 🔗 Relacionados
- [Behavior Definition](/glossario/behavior-definition)
- [EML](/glossario/eml)
- [Determinations e Validations](/glossario/determinations-e-validations)
- [Actions RAP](/glossario/actions-rap)
- [Unmanaged Save](/glossario/unmanaged-save)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - Padrão Wrapper para BAPIs

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
