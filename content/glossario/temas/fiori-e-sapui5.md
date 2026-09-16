---
title: "Fiori e SAPUI5 (tema)"
description: "Design SAP Fiori, SAPUI5, MVC, Fiori Elements, Launchpad e ferramentas."
tags: ["glossario","sap-fiori"]
---
> **Sobre esta área**
> Design SAP Fiori, SAPUI5, MVC, Fiori Elements, Launchpad e ferramentas.
> Tag: [#sap-fiori](/t/sap-fiori) · 21 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - Fiori e SAPUI5 — SAP Fiori, SAPUI5, Fiori Elements e Launchpad.

## 📖 Termos

### Deploy e Launchpad
- [Deploy de Apps Fiori](/glossario/deploy-de-apps-fiori) *(ui5 build, dist, Component-preload.js)* — Publicação de apps UI5 on-premise (BSP no repositório ABAP via /UI5/UI5_REPOSITORY_LOAD) ou na BTP (HTML5 Application Repository + AppRouter), sempre a partir do build otimizado.
- [Fiori Launchpad](/glossario/fiori-launchpad) *(FLP, SAP Fiori Launchpad, Tile)* — Ponto de entrada único dos apps Fiori, baseado em roles: tiles disparam intents (#SemanticObject-action) resolvidos por target mappings; acesso organizado em catálogos, grupos e roles PFCG.

### Desenvolvimento
- [Branding e Temas Fiori](/glossario/branding-e-temas-fiori) *(UI Theme Designer, Theme Designer, style.css)* — Personalizar a aparência sem quebrar o design system: UI Theme Designer para o tema global, classes semânticas com variáveis CSS de tema para exceções — nunca IDs ou classes internas.
- [Component.js e manifest.json](/glossario/component-js-e-manifest-json) *(Component.js, manifest.json, App Descriptor)* — Component.js é o "programa principal" do app (inicializa router, modelos e view raiz); manifest.json é o descritor com fontes de dados, modelos, rotas e configurações.
- [Data Binding SAPUI5](/glossario/data-binding-sapui5) *(Data Binding, JSONModel, JSON Model)* — Sincronização declarativa entre Model (fonte da verdade) e View — altere os dados e a UI reage; substitui o MOVE manual de dados para a tela.
- [Debug e Qualidade SAPUI5](/glossario/debug-e-qualidade-sapui5) *(Chrome DevTools, F12, UI5 Inspector)* — Ferramentas de diagnóstico e qualidade do frontend: DevTools (console, network, sources, performance), UI5 Inspector, Diagnostics, Support Assistant, Mock Server, ESLint, QUnit e OPA5.
- [Internacionalização i18n](/glossario/internacionalizacao-i18n) *(i18n, i18n.properties, ResourceModel)* — Textos da UI centralizados em i18n.properties (chave=valor) por idioma, carregados por um ResourceModel e usados com {i18n>chave} — o "text symbols" da web.
- [MVC SAPUI5](/glossario/mvc-sapui5) *(Model View Controller, Controller SAPUI5, onInit)* — Arquitetura do UI5: View (XML — o quê), Controller (JS — o como, 1:1 com a view, com hooks de ciclo de vida) e Model (dados), equivalente a tela Dynpro + PBO/PAI + tabelas internas.
- [OData Model SAPUI5](/glossario/odata-model-sapui5) *(ODataModel, sap.ui.model.odata.v2.ODataModel, sap.ui.model.odata.v4.ODataModel)* — Model server-side do UI5 que conecta a UI ao serviço OData (Gateway/RAP): binding absoluto e relativo, CRUD por API, function imports, \$batch e tratamento de erros.
- [Roteamento SAPUI5](/glossario/roteamento-sapui5) *(Router, sap.m.routing.Router, routing)* — Navegação SPA configurada no manifest (routes + targets) e acionada com navTo; a URL (hash) vira o estado da aplicação, com deep links e histórico do navegador.
- [Tabelas e Listas SAPUI5](/glossario/tabelas-e-listas-sapui5) *(sap.m.Table, sap.m.List, ColumnListItem)* — O "novo ALV": sap.m.Table (dados tabulares) e sap.m.List (mobile) com aggregation binding, colunas responsivas, filtros, ordenação, agrupamento, growing e contexto de linha.
- [XML View](/glossario/xml-view) *(View XML, mvc:View, xmlns)* — Definição declarativa da tela em XML (o quê exibir), com namespaces de bibliotecas, controles, layouts (VBox/HBox/Grid) e fragmentos reutilizáveis.

### Extensibilidade
- [Extensibilidade Fiori](/glossario/extensibilidade-fiori) *(Adaptation Project, Extension Point, Controller Extension)* — Estender apps Fiori standard sem copiá-los: extension points e controller hooks via Adaptation Project (dev) ou adaptação em runtime pelo key user — gerando variantes armazenadas no UI Flexibility.

### Fiori Elements
- [Fiori Elements](/glossario/fiori-elements) *(SAP Fiori Elements, Floorplans, List Report)* — Framework que gera a UI Fiori em runtime a partir de metadados e anotações OData (floorplans List Report, Object Page, OVP, ALP) — o frontend obedece ao backend.
- [SAP Fiori Tools](/glossario/sap-fiori-tools) *(Fiori Tools, Application Generator, Service Modeler)* — Extensões para VS Code e SAP Business Application Studio que aceleram apps Fiori: gerador de apps, modelador de serviço, Page Map visual e desenvolvimento guiado.

### Fundamentos
- [Fiori](/glossario/fiori) *(SAP Fiori, Fiori UX, Fiori Design System)* — Design system e paradigma de UX da SAP — apps focados em tarefas, por papel, responsivos e consistentes — construídos com SAPUI5 sobre dados OData.
- [JavaScript para ABAPers](/glossario/javascript-para-abapers) *(JavaScript, let, const)* — Tradução dos fundamentos de JavaScript moderno para quem vem do ABAP: variáveis, objetos, arrays, loops declarativos, funções, this, assincronismo e igualdade estrita.
- [SAP Fiori Apps Reference Library](/glossario/sap-fiori-apps-reference-library) *(Fiori Apps Library, Fiori Apps Reference Library, App ID)* — Catálogo oficial da SAP com todos os apps Fiori, seus IDs, papéis, requisitos de implementação e informações de extensibilidade — "a bíblia do consultor".
- [SAPUI5](/glossario/sapui5) *(UI5, OpenUI5, sap.m)* — Framework JavaScript da SAP com 500+ controles de UI prontos (sap.m etc.) para construir apps web Fiori responsivos e consistentes — "as classes standard da web".

### UI Legado e Alternativas
- [SAP GUI](/glossario/sap-gui) *(SAP GUI, Dynpro, Web Dynpro)* — Interfaces clássicas do SAP (SAP GUI com Dynpro, Web Dynpro, BSP) — stateful e renderizadas no servidor; legado a ser substituído por Fiori/SAPUI5 em novos desenvolvimentos.
- [SAP Screen Personas](/glossario/sap-screen-personas) *(Screen Personas, Personas 3.0, Flavors)* — Add-on que cria "flavors" simplificados sobre transações clássicas do SAP GUI (via SAP GUI for HTML) sem alterar as transações base.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
