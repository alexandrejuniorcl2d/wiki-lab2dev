---
title: "Deploy de Apps Fiori"
description: "Publicação de apps UI5 on-premise (BSP no repositório ABAP via /UI5/UI5_REPOSITORY_LOAD) ou na BTP (HTML5 Application Repository + AppRouter), sempre a partir do build otimizado."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `ui5 build` · `dist` · `Component-preload.js` · `/UI5/UI5_REPOSITORY_LOAD` · `BSP Application` · `HTML5 Application Repository` · `AppRouter` · `Managed Approuter` · `Cache Buster` · `applicationVersion` · `/IWFND/ERROR_LOG` · `/IWFND/TRACES`

> **Definição**
> Publicação de apps UI5 on-premise (BSP no repositório ABAP via /UI5/UI5_REPOSITORY_LOAD) ou na BTP (HTML5 Application Repository + AppRouter), sempre a partir do build otimizado.
{.is-info}

**`ui5 build`** (UI5 Tooling) gera a pasta **`dist`**: **minificação** (JS/CSS menores) + **bundling** em `Component-preload.js` (poucas requisições). Sempre faça deploy da `dist`, nunca da `webapp`.

| On-premise (sistema ABAP) | Cloud (SAP BTP) |
|---|---|
| App vira **BSP Application** no repositório ABAP (objeto de workbench transportável) | Arquivos no **HTML5 Application Repository** ("o repositório BSP da nuvem") |
| Upload com o report `/UI5/UI5_REPOSITORY_LOAD` (SE38): nome da BSP, diretório `dist`, descrição/transporte | Deploy via CLI orquestrado pelo `mta.yaml` |
| URL `/sap/bc/ui5_ui5/sap/<app>` | **AppRouter** (Node.js): autenticação + roteamento para HTML5 repo e backends via destinations; ou **Managed Approuter** do Launchpad/Work Zone |
| Forte acoplamento ao backend, políticas de dados restritas | Extensões, múltiplos backends, ciclo de vida independente |

**Cache:**
- Incremente `sap.app.applicationVersion` a cada deploy — o Launchpad invalida o cache.
- **Cache buster** do UI5: URLs com `sap-ui-cachebuster-token` forçam o navegador a baixar a versão nova.

**Checklist de go-live:** roles PFCG com catálogos/grupos corretos (`/UI2/FLC`) e autorização aos serviços OData · deploy da `dist` · F12 Network para tempos · traces `/IWFND/TRACES` e `ST05` ("app rápido com OData lento continua lento") · logs: console (front), `/IWFND/ERROR_LOG` (Gateway), `ST22` (dumps no provider OData).

## 🔗 Relacionados
- [Fiori Launchpad](/glossario/fiori-launchpad)
- [SAP BTP](/glossario/sap-btp)
- [Component.js e manifest.json](/glossario/component-js-e-manifest-json)
- [MTA](/glossario/mta)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
