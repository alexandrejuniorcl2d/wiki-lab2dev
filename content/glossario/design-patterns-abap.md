---
title: "Design Patterns ABAP"
description: "Soluções comprovadas: Singleton (instância única), Factory (a fábrica decide a classe concreta), Persistence Service e MVC."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Singleton` · `Factory` · `Factory Pattern` · `MVC` · `Persistence Service` · `Agente de Persistência` · `CREATE PRIVATE`

> **Definição**
> Soluções comprovadas: Singleton (instância única), Factory (a fábrica decide a classe concreta), Persistence Service e MVC.
{.is-info}

**Singleton** — `CREATE PRIVATE` + `get_instance` com *lazy initialization*:
```abap
CLASS lcl_app_context DEFINITION CREATE PRIVATE.
  PUBLIC SECTION.
    CLASS-METHODS get_instance RETURNING VALUE(ro) TYPE REF TO lcl_app_context.
  PRIVATE SECTION.
    CLASS-DATA go_instance TYPE REF TO lcl_app_context.
ENDCLASS.
METHOD get_instance.
  IF go_instance IS NOT BOUND.
    go_instance = NEW #( ).
  ENDIF.
  ro = go_instance.
ENDMETHOD.
```
Usos: log centralizado, buffer de configuração (ex.: TVARVC), recursos limitados.

**Factory** — desacopla criação do uso; o cliente chama `calculateWage( )` sem saber se é Hourly, Commission ou Salaried.

**Persistence Service** — agentes `ZCA_...` mapeiam linhas de tabela para objetos (identity map, GUIDs) sem `SELECT` manual.

**MVC** — Model (dados e regras) · View (interface) · Controller (orquestração, binding). Evolução: Web Dynpro (persistent class / component controller / view) → **RAP** (CDS entities / behavior definition / service projection).

## 🔗 Relacionados
- [Classe Abstrata e Final](/glossario/classe-abstrata-e-final)
- [ABAP Unit](/glossario/abap-unit)
- [RAP](/glossario/rap)

## 📚 Fontes
- Apostila - ABAP Orientado a Objetos

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
