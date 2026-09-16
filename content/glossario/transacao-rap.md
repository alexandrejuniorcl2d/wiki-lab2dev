---
title: "Transação RAP"
description: "Ciclo de vida transacional do RAP em duas fases: interação (mudanças reversíveis no buffer) e save sequence (ponto de não retorno que persiste no banco)."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `RAP LUW` · `Interaction Phase` · `Fase de Interação` · `Save Sequence` · `Sequência de Save` · `finalize` · `check_before_save` · `adjust_numbers` · `Late Numbering` · `Stateless`

> **Definição**
> Ciclo de vida transacional do RAP em duas fases: interação (mudanças reversíveis no buffer) e save sequence (ponto de não retorno que persiste no banco).
{.is-info}

| 1. Interaction Phase | 2. Save Sequence |
|---|---|
| Usuário interage; CREATE/UPDATE/DELETE, ações, determinations e validations *on modify* | Disparada por `COMMIT ENTITIES` |
| Opera no buffer transacional (ou no draft) | `finalize` → `check_before_save` → `adjust_numbers` (late numbering) → `save` |
| Reversível (rollback) | Ponto de não retorno: sucesso (commit) ou falha (rollback), sem voltar à interação |

- **Web é stateless:** o servidor "processa e esquece" a cada requisição — o [draft](/glossario/draft-rap) resolve a perda de estado.
- ⚠️ No RAP o controle da LUW é **exclusivo do framework**: proibido `COMMIT WORK`/`ROLLBACK WORK` e modificações diretas no banco na fase de interação (ver [Padrão Wrapper](/glossario/padrao-wrapper)).

## 🔗 Relacionados
- [Draft RAP](/glossario/draft-rap)
- [Unmanaged Save](/glossario/unmanaged-save)
- [EML](/glossario/eml)
- [Robustez ABAP](/glossario/robustez-abap)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - Padrão Wrapper para BAPIs
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
