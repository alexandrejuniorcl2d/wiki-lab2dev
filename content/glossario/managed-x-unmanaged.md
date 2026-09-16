---
title: "Managed x Unmanaged"
description: "Managed = framework implementa CRUD, locks e persistência (greenfield); Unmanaged = desenvolvedor implementa tudo, tipicamente encapsulando BAPIs legadas (brownfield)."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `Managed` · `Unmanaged` · `Cenário Managed` · `Cenário Unmanaged` · `Greenfield RAP` · `Brownfield RAP`

> **Definição**
> Managed = framework implementa CRUD, locks e persistência (greenfield); Unmanaged = desenvolvedor implementa tudo, tipicamente encapsulando BAPIs legadas (brownfield).
{.is-info}

| Dimensão | **Managed** | **Unmanaged** |
|---|---|---|
| Caso de uso | Greenfield (apps novas) | Brownfield (lógica legada: BAPIs, módulos de função) |
| CRUD | Automático (`create; update; delete;`) | 100% manual no behavior pool |
| Gravação | Transparente (`persistent table`) | Implementada na classe saver (`cl_abap_behavior_saver`) |
| Buffer | Oculto, gerido pela SAP | Gerido e exposto ao desenvolvedor |
| Chaves | UUID/numeração automáticos | Manual |
| Draft | Nativo e imediato | Complexo |
| Vantagem | Produtividade, menos código | Flexibilidade total |

> **DSAG**
> Só abandone o managed se reescrever a lógica legada for proibitivo para o cronograma. Não misture abordagens no mesmo BO de forma leviana. Alternativa intermediária: managed com [unmanaged save/additional save](/glossario/unmanaged-save).
{.is-success}

## 🔗 Relacionados
- [RAP](/glossario/rap)
- [Unmanaged Save](/glossario/unmanaged-save)
- [Padrão Wrapper](/glossario/padrao-wrapper)
- [Behavior Definition](/glossario/behavior-definition)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
