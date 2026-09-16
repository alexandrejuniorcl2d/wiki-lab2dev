---
title: "ABAP Moderno"
description: "Elementos de linguagem do ABAP 7.4+ (declarações inline, construtores VALUE/COND/REDUCE, expressões de tabela, NEW) que substituem comandos obsoletos."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `ABAP 7.4` · `ABAP 7.40` · `Sintaxe Moderna` · `Inline Declaration` · `VALUE` · `REDUCE` · `COND` · `SWITCH` · `CORRESPONDING` · `FIELD-SYMBOL` · `Table Expression`

> **Definição**
> Elementos de linguagem do ABAP 7.4+ (declarações inline, construtores VALUE/COND/REDUCE, expressões de tabela, NEW) que substituem comandos obsoletos.
{.is-info}

| ❌ Legado | ✅ Moderno |
|---|---|
| `DATA lv TYPE string.` no topo + atribuição | `DATA(lv) = ...` / `FINAL(lv) = 'ola'.` (imutável) |
| `CALL METHOD obj->calcular.` | `obj->calcular( ).` |
| `CREATE OBJECT obj TYPE zcl_x.` | `DATA(obj) = NEW zcl_x( ).` |
| Work area + `INSERT ... INTO TABLE` | `DATA(lt) = VALUE tt_pessoas( ( idade = 30 nome = 'Maria' ) ).` |
| `READ TABLE ... WITH KEY` + `IF sy-subrc` | `lt[ nome = 'x' ]` com `OPTIONAL` / `DEFAULT` ou `CATCH cx_sy_itab_line_not_found` |
| `LOOP AT ... INTO wa` + `MODIFY ... INDEX sy-tabix` | `LOOP AT lt ASSIGNING FIELD-SYMBOL(<ls>).` (sem cópia) |
| `MOVE-CORRESPONDING` | `CORRESPONDING #( ls_src MAPPING ... )` |
| `IF/ELSE` para atribuir | `COND #( WHEN ... THEN ... ELSE ... )` / `SWITCH #( )` |
| Loop acumulador | `REDUCE #( INIT ... FOR ... NEXT ... )` |
| `CALL TRANSACTION 'IW21'.` | `CALL TRANSACTION 'IW21' WITH AUTHORITY-CHECK.` |
| `EXCEPTIONS erro = 1` + `sy-subrc` | Exceções baseadas em classe |

- `#` infere o tipo do contexto.
- ⚠️ Expressões aninhadas demais viram enigma — legibilidade > brevidade.
- Tipo de tabela (standard, sorted, hashed) dita o custo de acesso em loops.

## 🔗 Relacionados
- [Clean ABAP](/glossario/clean-abap)
- [ABAP Orientado a Objetos](/glossario/abap-orientado-a-objetos)
- [Exceções ABAP](/glossario/excecoes-abap)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
