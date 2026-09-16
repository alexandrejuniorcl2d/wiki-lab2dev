---
title: "Unmanaged Save"
description: "Opção do cenário managed em que o framework gerencia a fase de interação (buffer) mas o desenvolvedor assume a gravação no método save_modified da classe saver."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `with unmanaged save` · `with additional save` · `save_modified` · `Additional Save`

> **Definição**
> Opção do cenário managed em que o framework gerencia a fase de interação (buffer) mas o desenvolvedor assume a gravação no método save_modified da classe saver.
{.is-info}

- `managed with unmanaged save implementation in class ... unique;` → o framework **não** grava na tabela; você persiste (ex.: chamando uma BAPI via [wrapper](/glossario/padrao-wrapper)).
- `with additional save` → o framework grava normalmente **e** chama seu código extra (logs, change documents, eventos).
- O método `save_modified` recebe as estruturas `create`, `update` e `delete` com tudo que mudou no buffer — "é aqui, e somente aqui" que se chama código de persistência.

## 🔗 Relacionados
- [Managed x Unmanaged](/glossario/managed-x-unmanaged)
- [Padrão Wrapper](/glossario/padrao-wrapper)
- [Transação RAP](/glossario/transacao-rap)
- [Business Events RAP](/glossario/business-events-rap)

## 📚 Fontes
- Apostila - Padrão Wrapper para BAPIs
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - ABAP RAP

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
