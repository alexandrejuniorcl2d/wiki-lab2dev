---
title: "Component.js e manifest.json"
description: "Component.js é o \"programa principal\" do app (inicializa router, modelos e view raiz); manifest.json é o descritor com fontes de dados, modelos, rotas e configurações."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `Component.js` · `manifest.json` · `App Descriptor` · `sap.app` · `dataSources` · `Bootstrap` · `index.html` · `sap.ui` · `rootView` · `dependencies` · `minUI5Version` · `lazy` · `supportedLocales`

> **Definição**
> Component.js é o "programa principal" do app (inicializa router, modelos e view raiz); manifest.json é o descritor com fontes de dados, modelos, rotas e configurações.
{.is-info}

- **`Component.js`** (≈ programa principal de um module pool): no `init` inicializa o **router**, cria/configura **modelos**, lê o **manifest** e define a **view raiz**.
- **`manifest.json`** (app descriptor): seções `sap.app` (id, `dataSources` com URL do serviço OData), `sap.ui5` (`models` — OData, i18n —, `routing`, dependências), `sap.fiori` etc.
```json
"sap.ui5": {
  "models": {
    "i18n": { "type": "sap.ui.model.resource.ResourceModel",
              "settings": { "bundleName": "meu.app.i18n.i18n" } },
    "": { "dataSource": "mainService", "preload": true }
  }
}
```

**Detalhe do manifest (módulo 9 — "o Top Include do programa"):** o Fiori Launchpad lê o manifest **sem** iniciar o app (performance, catálogo de apps).
- **`sap.app` (a identidade/RG):** `id` (namespace único, igual à estrutura de pastas), `type`, `i18n` (com `supportedLocales` desde 1.77), `title` (`{{appTitle}}`), `applicationVersion` (crítico para cache), `dataSources`.
- **`sap.ui` (requisitos visuais):** `technology: "UI5"`, `icons` (ícone do tile via `sap-icon://`), `deviceTypes` (desktop/tablet/phone).
- **`sap.ui5` (manual de montagem):** `rootView` (primeira view, XML, async), `dependencies` (`minUI5Version`, `libs` com `"lazy": true` para carregar sob demanda), `models` (instanciados automaticamente no componente antes de qualquer controller; `preload: true`), `routing`, `contentDensities`, `resources.css`.
- **Lançamento:** clique no tile → FLP resolve o intent para o `sap.app.id` → `ComponentFactory` instancia o `Component.js` → `init` monta o app.
- **Editores:** *Descriptor Editor* visual (guiado) × editor de código (rápido). Erros comuns: vírgula faltando/sobrando, `viewName`/`bundleName` com caminho errado.
- "Sem manifest, não há Fiori app."

## 🔗 Relacionados
- [SAPUI5](/glossario/sapui5)
- [Roteamento SAPUI5](/glossario/roteamento-sapui5)
- [Data Binding SAPUI5](/glossario/data-binding-sapui5)
- [Internacionalização i18n](/glossario/internacionalizacao-i18n)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
