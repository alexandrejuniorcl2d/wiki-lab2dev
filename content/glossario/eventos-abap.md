---
title: "Eventos ABAP"
description: "Mecanismo publish/subscribe: o publicador anuncia um fato e os assinantes registrados reagem — \"Não chame, avise!\"."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `EVENTS` · `RAISE EVENT` · `SET HANDLER` · `FOR EVENT` · `CLASS-EVENTS` · `Publisher Subscriber`

> **Definição**
> Mecanismo publish/subscribe: o publicador anuncia um fato e os assinantes registrados reagem — "Não chame, avise!".
{.is-info}

Ciclo: **definição** (`EVENTS`) → **handler** (`METHODS ... FOR EVENT ... OF ...`) → **registro** (`SET HANDLER`) → **disparo** (`RAISE EVENT`).

```abap
" Publisher
EVENTS data_saved EXPORTING VALUE(ev_user) TYPE sy-uname.
RAISE EVENT data_saved EXPORTING ev_user = sy-uname.
" Subscriber
METHODS on_save FOR EVENT data_saved OF lcl_publisher IMPORTING ev_user.
" Registro em runtime
SET HANDLER lo_sub->on_save FOR lo_pub.        " recomendado
SET HANDLER lo_sub->on_save FOR ALL INSTANCES. " cuidado: overhead
```
⚠️ **Síncronos:** um handler que dispara o mesmo evento causa *stack overflow*. ⚠️ `SET HANDLER` cria referência forte (memory leak) → `SET HANDLER ... ACTIVATION space` para desativar. Uso típico: separar UI da regra de negócio.

## 🔗 Relacionados
- [ABAP Orientado a Objetos](/glossario/abap-orientado-a-objetos)
- [Interface ABAP](/glossario/interface-abap)

## 📚 Fontes
- Apostila - ABAP Orientado a Objetos

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
