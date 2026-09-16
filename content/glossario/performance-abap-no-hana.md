---
title: "Performance ABAP no HANA"
description: "Regras de performance no HANA: selecionar só campos necessários, evitar SELECT em loop, usar joins e code pushdown; analisar com ST05."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `ST05` · `SQL Trace` · `Code Pushdown` · `Code-to-Data` · `SAT` · `SE30` · `SQLM` · `SWLT` · `FOR ALL ENTRIES` · `Sorted Table` · `Hashed Table`

> **Definição**
> Regras de performance no HANA: selecionar só campos necessários, evitar SELECT em loop, usar joins e code pushdown; analisar com ST05.
{.is-info}

| ❌ Evitar | ✅ Preferir |
|---|---|
| `SELECT *` | Selecionar só os campos necessários |
| `SELECT` dentro de `LOOP` | Joins / `FOR ALL ENTRIES` / CDS |
| Processamento pesado no servidor ABAP | **Code pushdown** para o HANA (*code-to-data*) |

**Data-to-code** (clássico: traz dados para o ABAP) × **Code-to-data** (moderno: leva a lógica ao banco via [CDS](/glossario/cds-view)/AMDP).

**Recomendações DSAG v2.0:**
- **Princípio da evitação:** "o componente mais rápido, barato e confiável é aquele que não existe" (Gordon Bell) — questione a necessidade da funcionalidade.
- **Otimize só o ponto quente**, com volume real de dados. **Regra dos 50%:** se o banco consome mais da metade do tempo, foque no SQL; senão, no servidor ABAP.

| Ferramenta | Uso |
|---|---|
| ATC / SCI | Análise estática antes da execução |
| `SAT` (antiga `SE30`) | Runtime ABAP: memória, loops, tabelas internas |
| `ST05` | Trace SQL exato |
| `SQLM` / `SWLT` | SQL Monitor em produção + worklist de otimização para HANA |

- **Banco:** use índices por completo (ou ao menos os primeiros campos da chave); `WHERE` restritivo; `INTO TABLE` / `FROM TABLE` para agrupar viagens; evite `MODIFY` em massa; não traga colunas desnecessárias (LOBs).
- **SELECT em LOOP** → `FOR ALL ENTRIES` ou `JOIN`. ⚠️ Se a tabela do `FOR ALL ENTRIES` estiver vazia, **todo o banco é lido** — cheque `IS NOT INITIAL` antes.
- **Tabelas internas:** escolha STANDARD, SORTED ou HASHED (hash = tempo constante) e acesse pela chave; existência com `line_exists( )` ou `TRANSPORTING NO FIELDS`.
- **Cópias:** `ASSIGNING FIELD-SYMBOL` em vez de `INTO`; passagem por referência; elimine variáveis inúteis com o Extended Program Check.
- **Code pushdown:** agregações e cálculos no HANA (colunas já funcionam como índice); tráfego de rede continua sendo gargalo; evite Native SQL.

## 🔗 Relacionados
- [CDS View](/glossario/cds-view)
- [SAP HANA](/glossario/sap-hana)

## 📚 Fontes
- Apostila - Conhecendo todos os Módulos do SAP
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
