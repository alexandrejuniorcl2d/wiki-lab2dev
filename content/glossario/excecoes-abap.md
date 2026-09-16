---
title: "Exceções ABAP"
description: "Erros como objetos ricos (texto, atributos, call stack) que propagam automaticamente — substituem o SY-SUBRC numérico."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Exceções Baseadas em Classe` · `TRY CATCH` · `RAISE EXCEPTION` · `CX_ROOT` · `CX_STATIC_CHECK` · `CX_DYNAMIC_CHECK` · `CX_NO_CHECK` · `ZCX` · `SY-SUBRC`

> **Definição**
> Erros como objetos ricos (texto, atributos, call stack) que propagam automaticamente — substituem o SY-SUBRC numérico.
{.is-info}

**Hierarquia:** `CX_ROOT` → `CX_STATIC_CHECK` (compilador obriga `CATCH` ou `RAISING` — regras de negócio previsíveis) · `CX_DYNAMIC_CHECK` · `CX_NO_CHECK`.

```abap
TRY.
    lo_customer->calculate_price( ).
  CATCH zcx_pricing_error INTO DATA(lo_error).
    lv_msg = lo_error->get_text( ).
ENDTRY.

RAISE EXCEPTION TYPE zcx_bp
  EXPORTING textid = zcx_bp=>co_partner_id_initial
            partner_id = '100045'.
```
- Criação na SE24 (ou ADT) como *Exception Class*; desmarque **Final** para permitir subclasses.
- **Bubbling up:** camadas intermediárias não precisam de `IF sy-subrc <> 0`.
- **Polimorfismo no erro:** `CATCH zcx_common` captura também `zcx_bp` (filha).

## 🔗 Relacionados
- [Casting e RTTI](/glossario/casting-e-rtti)
- [ABAP Orientado a Objetos](/glossario/abap-orientado-a-objetos)

## 📚 Fontes
- Apostila - ABAP Orientado a Objetos

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
