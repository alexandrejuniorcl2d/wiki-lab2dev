---
title: "OData Model SAPUI5"
description: "Model server-side do UI5 que conecta a UI ao serviço OData (Gateway/RAP): binding absoluto e relativo, CRUD por API, function imports, $batch e tratamento de erros."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `ODataModel` · `sap.ui.model.odata.v2.ODataModel` · `sap.ui.model.odata.v4.ODataModel` · `oModel.create` · `oModel.read` · `oModel.update` · `oModel.remove` · `callFunction` · `useBatch` · `Binding Relativo` · `Binding Absoluto`

> **Definição**
> Model server-side do UI5 que conecta a UI ao serviço OData (Gateway/RAP): binding absoluto e relativo, CRUD por API, function imports, \$batch e tratamento de erros.
{.is-info}

**JSON × OData model:** no JSONModel todo o dataset vai para o navegador (inviável para grandes volumes; paginação/filtros em JS). No ODataModel o **servidor trabalha** (`$top/$skip`, `$filter`, `$orderby`) e só os dados visíveis trafegam — padrão absoluto do Fiori.

**V2 × V4:** V2 é o padrão na maioria dos S/4HANA (metadados XML, function imports, tipos limitados); V4 ganha tração em novos cenários (JSON mais leve, batch robusto, actions/functions, `Edm.Date`). Conceitos 95% iguais — dominar V2 facilita o V4.

**Configuração (`manifest.json`):**
```json
"sap.app": { "dataSources": { "mainService": {
    "uri": "/sap/opu/odata/SAP/Z_SALES_SRV/", "type": "OData",
    "settings": { "odataVersion": "2.0" } } } },
"sap.ui5": { "models": { "": { "dataSource": "mainService", "preload": true,
    "settings": { "defaultBindingMode": "TwoWay", "useBatch": true } } } }
```
`dataSources` = **onde** está o serviço (≈ destino RFC); `models` = **como** o app usa; `""` = modelo default.

**Binding:**
- **Absoluto:** `<Table items="{/SalesOrderSet}">` → UI5 gera `GET .../SalesOrderSet?$top=...&$skip=...`.
- **Relativo (o "JOIN" automático):** `oView.bindElement("/SalesOrderSet('12345')")` + `<Table items="{ToItems}">` (sem `/`) → `GET .../SalesOrderSet('12345')/ToItems`.

**CRUD programático** (90% das leituras devem ser por binding declarativo):
```javascript
const oModel = this.getView().getModel();
oModel.create("/SalesOrderSet", oNewOrder, { success: (o) => MessageToast.show(`Pedido ${o.Vbeln} criado`), error: this._onError });
oModel.read("/SalesOrderSet('12345')", { urlParameters: { "$expand": "ToItems" }, success: (o) => {...} });
oModel.update("/SalesOrderSet('12345')", { Status: "Concluido" }, { success: ... });
oModel.remove("/SalesOrderSet('12345')", { success: ... });
oModel.callFunction("/ApproveOrder", { method: "POST", urlParameters: { OrderID: "12345" },
  success: () => { MessageToast.show("Aprovado!"); oModel.refresh(); } });
```
**Erros:** extraia a mensagem do backend com `JSON.parse(oError.responseText).error.message.value` dentro de `try...catch` (não mostre "Ocorreu um erro" genérico).

**`useBatch: true`:** o modelo agrupa CREATE/UPDATE/DELETE em um único `POST /$batch`.

**Metadata-driven:** o UI5 lê o `$metadata` uma vez — tipos (`Edm.String`, `Edm.DateTime`) para controles e validação, `sap:label` para rótulos, navigation properties para binding relativo e **anotações** (`Common.ValueList` para F4, `UI.Hidden`…).

Exercício clássico: tabela ligada a `{/Products}` do serviço público Northwind V2.

## 🔗 Relacionados
- [OData](/glossario/odata)
- [Data Binding SAPUI5](/glossario/data-binding-sapui5)
- [Component.js e manifest.json](/glossario/component-js-e-manifest-json)
- [Batch OData](/glossario/batch-odata)
- [Function Import](/glossario/function-import)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
