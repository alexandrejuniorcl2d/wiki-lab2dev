---
title: "Business Events RAP"
description: "Eventos declarados na BDEF e disparados com RAISE ENTITY EVENT na save sequence para notificar consumidores de forma assíncrona (publish/subscribe)."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `RAP Business Events` · `event` · `RAISE ENTITY EVENT` · `Eventos RAP`

> **Definição**
> Eventos declarados na BDEF e disparados com RAISE ENTITY EVENT na save sequence para notificar consumidores de forma assíncrona (publish/subscribe).
{.is-info}

```abap
" BDEF
event TravelCreated parameter ZD_TravelEventData;   " payload via abstract entity

" Classe saver (após persistência, antes do commit)
METHOD save_modified.
  IF create-travel IS NOT INITIAL.
    RAISE ENTITY EVENT zi_travel~TravelCreated
      FROM VALUE #( FOR t IN create-travel ( %key = t-%key  %param = VALUE #( ... ) ) ).
  ENDIF.
ENDMETHOD.
```
O BO publica e segue; notificações, financeiro e analytics assinam e reagem — arquitetura desacoplada e resiliente. Eventos só devem sair quando a transação for concluída com sucesso.

## 🔗 Relacionados
- [Unmanaged Save](/glossario/unmanaged-save)
- [Tecnologias de Integração SAP](/glossario/tecnologias-de-integracao-sap)
- [Workflow e Change Documents RAP](/glossario/workflow-e-change-documents-rap)

## 📚 Fontes
- Apostila - ABAP RAP

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
