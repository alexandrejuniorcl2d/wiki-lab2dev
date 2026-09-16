---
title: "Function Import"
description: "Endpoint OData que expõe lógica de negócio do backend: queries complexas (GET) ou ações que modificam dados (POST), encapsulando regras e validações."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `Function Imports` · `Action OData` · `Query Function Import` · `Valores Constantes em Function Import`

> **Definição**
> Endpoint OData que expõe lógica de negócio do backend: queries complexas (GET) ou ações que modificam dados (POST), encapsulando regras e validações.
{.is-info}

- **Query (GET):** buscas que não cabem no `$filter` — ex.: `.../GetOpportunitiesWithHighProbability`.
- **Action (POST):** executa ações do BO — ex.: `.../ApproveQuote`.
- Vantagens: encapsulamento, menos round-trips, mesmas validações da UI.
- **Constantes (C4C v2.6+):** pré-fixar parâmetros de uma query genérica (ex.: `QueryByElements` com `TypeCode EQ '12'` e `GroupCode NE '0027'`) criando um endpoint especializado `GetAppointments`.
- Equivalente moderno no RAP: [actions](/glossario/actions-rap) e functions na BDEF.

## 🔗 Relacionados
- [Actions RAP](/glossario/actions-rap)
- [OData](/glossario/odata)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
