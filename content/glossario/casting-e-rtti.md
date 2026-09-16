---
title: "Casting e RTTI"
description: "Upcast (subclasse → superclasse) é automático; downcast (?= / CAST) é arriscado e exige TRY...CATCH; RTTI inspeciona tipos em runtime."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Upcast` · `Downcast` · `Narrowing Cast` · `Widening Cast` · `?=` · `CX_SY_MOVE_CAST_ERROR` · `RTTI` · `CL_ABAP_TYPEDESCR` · `RTTS`

> **Definição**
> Upcast (subclasse → superclasse) é automático; downcast (?= / CAST) é arriscado e exige TRY...CATCH; RTTI inspeciona tipos em runtime.
{.is-info}

```abap
lo_vehicle = lo_car.                      " Upcast (narrowing): sempre seguro
TRY.
    lo_car ?= lo_vehicle.                 " Downcast (widening): verificado em runtime
    DATA(lo_car2) = CAST lcl_car( lo_vehicle ).   " inline 7.40+
  CATCH cx_sy_move_cast_error.
    " o objeto não era um carro
ENDTRY.

" RTTI
DATA(lo_type)   = cl_abap_typedescr=>describe_by_data( ls_any ).
DATA(lo_class)  = cl_abap_typedescr=>describe_by_object_ref( lo_obj ).
DATA lo_struct TYPE REF TO cl_abap_structdescr.
lo_struct ?= cl_abap_typedescr=>describe_by_data( ls_dynamic ).
LOOP AT lo_struct->components INTO DATA(ls_comp). ... ENDLOOP.
```
Hierarquia: `CL_ABAP_TYPEDESCR` → `STRUCTDESCR`, `TABLEDESCR`, `CLASSDESCR`… Usos: serialização JSON/XML, ALV genérico, frameworks de validação, BOPF/Web Dynpro.

## 🔗 Relacionados
- [Herança e Polimorfismo](/glossario/heranca-e-polimorfismo)
- [Exceções ABAP](/glossario/excecoes-abap)

## 📚 Fontes
- Apostila - ABAP Orientado a Objetos

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
