---
title: "Draft RAP"
description: "Rascunho persistente que permite editar, interromper e continuar depois (até em outro dispositivo), com validação imediata e sem bloquear o registro ativo."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `Draft` · `Rascunho` · `with draft` · `draft table` · `Edit Activate Discard` · `Collaborative Draft` · `Draft Scope`

> **Definição**
> Rascunho persistente que permite editar, interromper e continuar depois (até em outro dispositivo), com validação imediata e sem bloquear o registro ativo.
{.is-info}

> **DSAG**
> Use draft em **todo** novo desenvolvimento transacional; abra mão só por motivos técnicos graves.
{.is-warning}

- Resolve o problema **stateless** da web: dados em edição ficam numa **tabela draft** paralela à **tabela ativa**.
- **Resiliência** (fechar navegador, perder conexão), **feedback imediato** (validations no rascunho) e **não bloqueante** (ativo continua legível; fim do *enqueue lock* prolongado do SAP GUI).
- Sincronização draft × ativo pelo **total ETag**.
- BDEF: `with draft;`, `draft table`, `total etag`, ações `Edit`, `Activate`, `Discard`, `Resume`, `Prepare`; associações `{ create; with draft; }`.
- **Collaborative draft:** vários usuários no mesmo rascunho. **Draft scope:** transação draft cobrindo vários BOs.

## 🔗 Relacionados
- [Transação RAP](/glossario/transacao-rap)
- [Controle de Concorrência RAP](/glossario/controle-de-concorrencia-rap)
- [Behavior Definition](/glossario/behavior-definition)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
