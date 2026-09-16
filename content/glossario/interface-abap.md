---
title: "Interface ABAP"
description: "Contrato de assinaturas de métodos (sem implementação, sempre público) que desacopla consumidor e implementação."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Interface` · `INTERFACES` · `ZIF` · `Til` · `Contrato` · `Dependency Inversion`

> **Definição**
> Contrato de assinaturas de métodos (sem implementação, sempre público) que desacopla consumidor e implementação.
{.is-info}

Analogia: a tomada não sabe o que está ligado nela — só exige o formato do plugue.

```abap
INTERFACE zif_check.
  METHODS validate IMPORTING iv_data TYPE any
                   RETURNING VALUE(rv_ok) TYPE abap_bool.
ENDINTERFACE.

CLASS zcl_invoice DEFINITION.
  PUBLIC SECTION.
    INTERFACES zif_check.
ENDCLASS.
CLASS zcl_invoice IMPLEMENTATION.
  METHOD zif_check~validate.   " ~ separa interface e método
    ...
  ENDMETHOD.
ENDCLASS.

" Polimorfismo: tabela tipada pela interface
DATA it_objects TYPE TABLE OF REF TO zif_check.
LOOP AT it_objects INTO DATA(lo_item).
  lo_item->validate( ... ).    " sem ~, a referência já é da interface
ENDLOOP.
```
Princípio SOLID (**Dependency Inversion**): "dependa de abstrações, não de implementações concretas".

## 🔗 Relacionados
- [Herança e Polimorfismo](/glossario/heranca-e-polimorfismo)
- [BAdI](/glossario/badi)
- [ABAP Unit](/glossario/abap-unit)

## 📚 Fontes
- Apostila - ABAP Orientado a Objetos

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
