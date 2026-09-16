---
title: "Padrão Wrapper"
description: "Classe ABAP que encapsula uma BAPI/objeto não liberado e é liberada como API local para consumo seguro em ABAP Cloud/RAP."
tags: ["glossario","sap-clean-core"]
---
**Também conhecido como:** `Wrapper` · `Wrapper de BAPI` · `Classe Wrapper` · `Tier 2 Wrapper`

> **Definição**
> Classe ABAP que encapsula uma BAPI/objeto não liberado e é liberada como API local para consumo seguro em ABAP Cloud/RAP.
{.is-info}

**Problema:** `BAPI_HU_DELETE_FROM_DEL` não é liberada para ABAP Cloud, e o RAP proíbe `COMMIT WORK`/`ROLLBACK WORK` e modificações diretas na fase de interação.

**Solução em passos:**
1. **Interface** (`ZIF_WRAP_BAPI_HU_DEL`) com tipos próprios e assinatura moderna — o contrato.
2. **Classe de implementação** (`ZCL_WRAP_DEL_HU`) — único ponto com o `CALL FUNCTION` legado.
3. **Factory** (`ZCL_WRAP_DEL_HU_FAC`) — centraliza a criação (injeção de dependência e testes).
4. **Liberar** o wrapper (C1) para uso em ABAP Cloud.
5. **RAP BO:** root view entity + BDEF `managed with unmanaged save` + ação `unassign` que só altera o buffer via [EML](/glossario/eml).
6. **Saver (`save_modified`):** único lugar onde o wrapper (e a BAPI) é chamado.
7. Anotação `@UI.lineItem` `#FOR_ACTION` → botão no Fiori Elements.

```abap
METHOD save_modified.
  LOOP AT update-zi_deliv_hu INTO DATA(ls_update).
    DATA(lt_ret) = zcl_wrap_del_hu_fac=>create_instance( )->delete(
                     iv_number = ls_update-DeliveryDocument
                     iv_hu     = ls_hu-HandlingUnitExternalID ).
  ENDLOOP.
ENDMETHOD.
```

**Benefícios:** conformidade Clean Core · isolamento e baixo risco · manutenção em um só lugar (se a SAP liberar um sucessor, só o wrapper muda) · reuso.

## 🔗 Relacionados
- [BAPI](/glossario/bapi)
- [API Liberada](/glossario/api-liberada)
- [RAP](/glossario/rap)
- [Unmanaged Save](/glossario/unmanaged-save)
- [Managed x Unmanaged](/glossario/managed-x-unmanaged)
- [EML](/glossario/eml)

## 📚 Fontes
- Apostila - Padrão Wrapper para BAPIs
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)

---
🧭 [Clean Core e ABAP Cloud](/glossario/temas/clean-core-e-abap-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
