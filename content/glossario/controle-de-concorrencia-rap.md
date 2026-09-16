---
title: "Controle de Concorrência RAP"
description: "Integridade com dois mecanismos: lock master (bloqueio pessimista durante a edição) e etag master (controle otimista de versão, ex.: LastChangedAt)."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `Locking RAP` · `Lock Master` · `ETag` · `ETag Master` · `Total ETag` · `Bloqueio Pessimista` · `Controle Otimista`

> **Definição**
> Integridade com dois mecanismos: lock master (bloqueio pessimista durante a edição) e etag master (controle otimista de versão, ex.: LastChangedAt).
{.is-info}

- **Locking (pessimista):** o primeiro usuário a editar "tranca" a instância; outros recebem acesso negado até a liberação. `lock master` no root; filhos `lock dependent by _Travel`.
- **ETag (otimista):** cada registro tem uma "etiqueta de versão" (`etag master LastChangedAt`). Ao salvar, se a versão mudou desde a leitura, o sistema rejeita: "os dados foram alterados por outro usuário".
- **Total ETag:** sincroniza draft × ativo (ver [Draft RAP](/glossario/draft-rap)).
- O campo `last_changed_at` (com determinação ou `@Semantics.systemDateTime.localInstanceLastChangedAt`) é essencial.

## 🔗 Relacionados
- [Behavior Definition](/glossario/behavior-definition)
- [Draft RAP](/glossario/draft-rap)
- [Robustez ABAP](/glossario/robustez-abap)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
