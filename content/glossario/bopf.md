---
title: "BOPF"
description: "Framework ABAP orientado a metadados para modelar objetos de negócio como árvore de nós com ações, determinações e validações — antecessor do RAP."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Business Object Processing Framework` · `/BOBF/`

> **Definição**
> Framework ABAP orientado a metadados para modelar objetos de negócio como árvore de nós com ações, determinações e validações — antecessor do RAP.
{.is-info}

**Jornada:** ABAP clássico procedural → ABAP 7.4+ (HANA, CDS + BOPF) → ABAP 7.5+ (BOPF como base do [RAP](/glossario/rap), Fiori e S/4HANA).

**Anatomia de um Business Object:**

| Componente | O que é |
|---|---|
| **Nós (Nodes)** | Estrutura de dados; exatamente **um ROOT** + N subnós (ex.: ROOT → ITEM → NOTE). Atributos **persistentes** (tabela) ou **transientes** (runtime) |
| **Associações** | Relação unidirecional entre nós — **composição** (pai-filho) ou **geral** (chave estrangeira, cross-BO); cardinalidade (ex.: 1..N) |
| **Ações (Actions)** | Comportamento executado ativamente (APROVAR_PEDIDO, COPIAR_FATURA); cardinalidade single, multiple ou static |
| **Determinações** | Lógica automática disparada por gatilhos (create, update, delete, load) — ex.: recalcular VALOR_TOTAL ao mudar QUANTIDADE |
| **Validações** | Nunca modificam dados; retornam mensagens e chaves falhas. *Action validation* (antes da ação) e *consistency validation* (antes do save) |
| **Queries e Alternative Keys** | SELECT_ALL, SELECT_BY_ELEMENTS, custom; chaves legíveis (FATURA-4711) em vez do UUID, inclusive na imagem transacional |
| **Autorização** | Checagem estática (pode a atividade?) e por instância (pode neste dado?) |

**API:**
- Consumo externo: `/BOBF/IF_TRA_SERVICE_MANAGER`.
- Consumo interno (dentro de ações/determinações): `IO_READ->RETRIEVE` e `IO_MODIFY->CREATE/UPDATE/DELETE/DO_ACTION` usando *combined table types* e interface de constantes do BO (sem *magic strings*).
- Mensagens: classes herdando de `/BOBF/CM_FRW` adicionadas a `EO_MESSAGE`; chaves com erro em `ET_FAILED_KEY`.

**Transação:** UI MODIFY → determinação automática → SAVE → validação de consistência → erro interrompe ou framework faz COMMIT.

> **"Defina primeiro, codifique depois."**
> Separação UI × lógica × persistência; buffer transacional, locking e ciclo SAVE/COMMIT gerenciados pelo framework.
{.is-success}

## 🔗 Relacionados
- [RAP](/glossario/rap)
- [CDS View](/glossario/cds-view)
- [ABAP Orientado a Objetos](/glossario/abap-orientado-a-objetos)

## 📚 Fontes
- Apostila - Desmistificando o BOPF
- Apostila - ABAP Orientado a Objetos

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
