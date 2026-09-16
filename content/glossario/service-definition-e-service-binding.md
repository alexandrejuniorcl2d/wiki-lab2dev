---
title: "Service Definition e Service Binding"
description: "Service Definition declara quais entidades expor (o quê — agnóstica de protocolo); Service Binding liga a um protocolo OData V2/V4 como UI ou Web API (como)."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `SRVD` · `SRVB` · `define service` · `expose` · `Service Binding OData V4` · `UI Service` · `Web API` · `WEB_API` · `Fiori Elements Preview` · `OData UI Service Generator`

> **Definição**
> Service Definition declara quais entidades expor (o quê — agnóstica de protocolo); Service Binding liga a um protocolo OData V2/V4 como UI ou Web API (como).
{.is-info}

```abap
@EndUserText.label: 'Travel Service'
define service ZUI_TRAVEL {
  expose ZC_Travel  as Travel;     " alias = nome do entity set
  expose ZC_Booking as Booking;
}
```
**Service Binding:** tipo `OData V4 - UI`, `OData V2 - UI`, `OData V4 - Web API` ou `OData V2 - Web API` → **Publish** → endpoint ativo → **Preview** Fiori Elements direto no ADT (só para UI).

| UI Service | Web API |
|---|---|
| Apps Fiori Elements | Integração A2A/B2B |
| `$metadata` com anotações `@UI`, value helps, side effects | Só dados e operações (metadados "limpos") |
| Fiori Preview disponível | Sem preview |

**Mesmo BO, dois consumidores:** reutilize a mesma service definition e crie outro binding.

**Convenções (cenário /DMO/):** `I_` interface, `C_` projeção, service definition sem sufixo (`/DMO/FLIGHT_R`), binding `UI_` ou `API_` (`/DMO/UI_FLIGHT_R_V4`); sufixos `_R` read-only, `_M` managed, `_U` unmanaged, `_D` draft.

**Atalho:** botão direito na tabela → *New > ABAP Repository Object > Business Services > OData UI Service* gera CDS, BDEF, projeções, SRVD e SRVB de uma vez. Pré-requisitos: AS ABAP 7.55+, Gateway ativo e roles `/IWFND/RT_DEVELOPER`, `/IWFND/RT_ADMIN`, `/IWFND/RT_GW_USER`.

## 🔗 Relacionados
- [RAP](/glossario/rap)
- [OData](/glossario/odata)
- [Fiori Elements](/glossario/fiori-elements)
- [Projection View](/glossario/projection-view)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
