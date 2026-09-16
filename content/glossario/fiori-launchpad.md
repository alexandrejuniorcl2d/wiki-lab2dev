---
title: "Fiori Launchpad"
description: "Ponto de entrada único dos apps Fiori, baseado em roles: tiles disparam intents (#SemanticObject-action) resolvidos por target mappings; acesso organizado em catálogos, grupos e roles PFCG."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `FLP` · `SAP Fiori Launchpad` · `Tile` · `Intent` · `Semantic Object` · `Target Mapping` · `Catálogo Fiori` · `Grupo Fiori` · `Cross-App Navigation` · `CrossApplicationNavigation` · `My Inbox` · `/UI2/FLPD_CUST` · `/UI2/FLC` · `Spaces and Pages`

> **Definição**
> Ponto de entrada único dos apps Fiori, baseado em roles: tiles disparam intents (#SemanticObject-action) resolvidos por target mappings; acesso organizado em catálogos, grupos e roles PFCG.
{.is-info}

**Características:** por papel (usuário vê só seus tiles), personalizável, responsivo, serviços centrais (busca, notificações, configurações, navegação). O usuário nunca acessa a URL técnica do app.

**A tríade do intent:**
- **Semantic Object** — o quê (`SalesOrder`, `Customer`).
- **Action** — como (`create`, `display`, `manage`).
- **Target Mapping** — resolve `#SalesOrder-create` para a aplicação técnica (UI5, Web Dynpro…; URL `/sap/bc/ui5_ui5/sap/zapp`, component ID).
Vantagem: trocar a aplicação no target mapping sem mexer em nenhum tile.

**Tiles:** estático (título, subtítulo, ícone) × dinâmico (contador via OData `$count`, ex.: "Pedidos a aprovar").

**Acesso:**
| Objeto | Papel | Analogia |
|---|---|---|
| **Catálogo** | Tudo que o usuário **pode** usar (tiles + target mappings) | A App Store |
| **Grupo** | O que aparece **por padrão** na home | A tela inicial do celular |
| **Role PFCG** | Liga usuários a catálogos/grupos **e** às autorizações de backend (serviços OData) | — |

**Navegação entre apps:** sempre por intent, nunca URL fixa:
```javascript
sap.ushell.Container.getService("CrossApplicationNavigation").toExternal({
  target: { semanticObject: "SalesOrder", action: "display" },
  params: { SalesOrderID: "4500012345" } });
```

**My Inbox:** app padrão que centraliza work items do SAP Business Workflow/BPM; ao clicar, dispara um intent configurado na `SWFVISU` para o app da tarefa, que conclui o work item via APIs de workflow.

**Passo a passo (on-premise):** `/UI2/FLPD_CUST` → semantic object `ZProduct` → catálogo técnico → target mapping `ZProduct-list` (URL da BSP + component ID) → tile → PFCG com catálogo e grupo → atribuir role → testar. Diagnóstico: `/UI2/FLC` (Fiori Launchpad Checks).

## 🔗 Relacionados
- [Fiori](/glossario/fiori)
- [Deploy de Apps Fiori](/glossario/deploy-de-apps-fiori)
- [Autorizações SAP](/glossario/autorizacoes-sap)
- [SAP Build Work Zone](/glossario/sap-build-work-zone)

## 📚 Fontes
- Apostila - Fiori e SAPUI5
- Apostila - Conhecendo todos os Módulos do SAP

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
