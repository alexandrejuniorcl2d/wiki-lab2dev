---
title: "Roteamento SAPUI5"
description: "Navegação SPA configurada no manifest (routes + targets) e acionada com navTo; a URL (hash) vira o estado da aplicação, com deep links e histórico do navegador."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `Router` · `sap.m.routing.Router` · `routing` · `routes` · `targets` · `pattern` · `navTo` · `patternMatched` · `Hash` · `Deep Link` · `bypassed` · `NotFound` · `History` · `onNavBack`

> **Definição**
> Navegação SPA configurada no manifest (routes + targets) e acionada com navTo; a URL (hash) vira o estado da aplicação, com deep links e histórico do navegador.
{.is-info}

**SPA e o hash:** tudo após `#` (`index.html#/products/HT-1001`) é gerenciado pelo UI5; mudar o hash **não** recarrega a página — o navegador dispara `hashchange` e o Router troca a view. "Adeus `CALL SCREEN`."

```json
"routing": {
  "config": { "routerClass": "sap.m.routing.Router", "type": "View", "viewType": "XML",
              "path": "minhaApp.view", "controlId": "app", "controlAggregation": "pages",
              "async": true, "bypassed": { "target": "notFound" } },
  "routes": [
    { "pattern": "", "name": "list", "target": "list" },
    { "pattern": "products/{productId}", "name": "detail", "target": "detail" }
  ],
  "targets": {
    "list":     { "viewName": "List" },
    "detail":   { "viewName": "Detail" },
    "notFound": { "viewName": "NotFound" }
  }
}
```
- **routes** = estradas (pattern → nome → target); **targets** = destinos (views). A **ordem importa**: a primeira rota que casar vence.
- **Palco:** `<App id="app"/>` (`sap.m.App`, pilha de páginas) ou `sap.m.SplitApp` (master-detail); `controlId`/`controlAggregation` dizem onde inserir.
- **Navegar (≈ CALL TRANSACTION):** `this.getOwnerComponent().getRouter().navTo("detail", { productId: sId })` — navega para a **rota**, não para a view.
- **Receber (o novo PBO):**
```javascript
onInit() {
  this.getOwnerComponent().getRouter().getRoute("detail")
      .attachPatternMatched(this._onObjectMatched, this);
},
_onObjectMatched(oEvent) {
  const sId = oEvent.getParameter("arguments").productId;
  this.getView().bindElement({ path: `/Products('${sId}')` });   // toda a view se atualiza
}
```
- **Voltar (BaseController):** `History.getInstance().getPreviousHash()` → se existe, `window.history.go(-1)`; senão (deep link), `navTo("list", {}, true)`.
- **Not found:** `bypassed` aponta para um target `NotFound`.
- Targets dinâmicos em runtime desde 1.84. "URLs são a nova API da sua UI."

## 🔗 Relacionados
- [Component.js e manifest.json](/glossario/component-js-e-manifest-json)
- [MVC SAPUI5](/glossario/mvc-sapui5)
- [OData Model SAPUI5](/glossario/odata-model-sapui5)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
