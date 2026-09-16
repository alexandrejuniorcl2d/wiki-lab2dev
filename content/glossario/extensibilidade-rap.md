---
title: "Extensibilidade RAP"
description: "Estender um BO RAP sem modificá-lo: EXTEND VIEW (campos), EXTEND BEHAVIOR (lógica) e Metadata Extension (UI), no namespace Z."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `Behavior Extension` · `extend behavior` · `extend view entity RAP` · `RAP Extensibility` · `In-App Extensibility RAP`

> **Definição**
> Estender um BO RAP sem modificá-lo: EXTEND VIEW (campos), EXTEND BEHAVIOR (lógica) e Metadata Extension (UI), no namespace Z.
{.is-info}

Exercício "campo Observações" em `/DMO/I_Travel_M` sem tocar em `/DMO/`:
1. **Dados:** `extend view entity /DMO/I_Travel_M with { @EndUserText.label: 'Remarks' cast( '' as abap.char(255) ) as Remarks }` (campo transiente; para persistir, *append structure* na tabela).
2. **UI:** metadata extension `@Metadata.layer: #CUSTOMER annotate view /DMO/C_Travel_Processor_M with { @UI.lineItem/@UI.identification/@UI.fieldGroup ... Remarks; }`.
3. **Lógica (opcional):** `extend behavior for ...` com validações/determinações para os campos.

**In-app** (mesmo stack; pequenas adaptações) × **side-by-side** (app nova na BTP via APIs; processos novos). Mantra: "estender, não modificar". DSAG: libere explicitamente os artefatos RAP (C0) para permitir extensões de terceiros.

## 🔗 Relacionados
- [Extend View](/glossario/extend-view)
- [Metadata Extension](/glossario/metadata-extension)
- [Clean Core](/glossario/clean-core)
- [Extensibilidade Side-by-Side](/glossario/extensibilidade-side-by-side)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
