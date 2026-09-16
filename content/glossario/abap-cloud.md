---
title: "ABAP Cloud"
description: "Modelo de desenvolvimento ABAP restrito a APIs liberadas e tecnologias cloud-ready (CDS, RAP), obrigatório na Public Cloud e recomendado em todas as edições."
tags: ["glossario","sap-clean-core"]
---
**Também conhecido como:** `ABAP Cloud Development Model` · `Cloud-Ready ABAP` · `ABAP for Cloud Development` · `ABAP Language Version 5`

> **Definição**
> Modelo de desenvolvimento ABAP restrito a APIs liberadas e tecnologias cloud-ready (CDS, RAP), obrigatório na Public Cloud e recomendado em todas as edições.
{.is-info}

**O que muda no seu código hoje:**

| Mundo antigo (níveis B–D) | Novo padrão (nível A) |
|---|---|
| Application Log `SLG1` clássico | Classe `CL_BALI_LOG` / `CL_BALI_OBJECT_HANDLER` |
| Jobs `SM36` + reports | **Application Jobs** baseados em classes |
| E-mail `CL_BCS` | `CL_BCS_MAIL_MESSAGE` |
| BOPF | **[RAP](/glossario/rap)** |
| Acesso a tabelas | [CDS views](/glossario/cds-view) liberadas do VDM |
| Dynpro / SAP GUI | Fiori Elements / UI5 |

- O compilador rejeita objetos não liberados (language version "ABAP for Cloud Development").
- A fronteira real passa a ser o **Software Component** (não o pacote) — ver [Arquitetura de Aplicação ABAP](/glossario/arquitetura-de-aplicacao-abap).
- Falta uma API? Crie um [wrapper](/glossario/padrao-wrapper) autorizado e abra um *Influence Request* na SAP.

## 🔗 Relacionados
- [Clean Core](/glossario/clean-core)
- [API Liberada](/glossario/api-liberada)
- [RAP](/glossario/rap)
- [CDS View](/glossario/cds-view)
- [Developer Extensibility](/glossario/developer-extensibility)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira
- Apostila - Padrão Wrapper para BAPIs

---
🧭 [Clean Core e ABAP Cloud](/glossario/temas/clean-core-e-abap-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
