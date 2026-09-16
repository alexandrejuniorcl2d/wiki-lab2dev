---
title: "MVC SAPUI5"
description: "Arquitetura do UI5: View (XML — o quê), Controller (JS — o como, 1:1 com a view, com hooks de ciclo de vida) e Model (dados), equivalente a tela Dynpro + PBO/PAI + tabelas internas."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `Model View Controller` · `Controller SAPUI5` · `onInit` · `onBeforeRendering` · `onAfterRendering` · `onExit` · `Lifecycle Hooks` · `BaseController` · `this.byId`

> **Definição**
> Arquitetura do UI5: View (XML — o quê), Controller (JS — o como, 1:1 com a view, com hooks de ciclo de vida) e Model (dados), equivalente a tela Dynpro + PBO/PAI + tabelas internas.
{.is-info}

| MVC | ABAP | SAPUI5 |
|---|---|---|
| View | Screen Painter (SE51) | `*.view.xml` declarativo |
| Controller | Módulos PBO/PAI | `*.controller.js` com event handlers |
| Model | Tabelas internas / estruturas globais | JSON Model, OData Model, Resource Model |

**Ciclo de vida (hooks):**
1. `onInit()` — uma vez, na criação: modelos iniciais, chamadas de dados, roteamento (≈ `INITIALIZATION` + primeiro PBO).
2. `onBeforeRendering()` — antes de (re)desenhar.
3. `onAfterRendering()` — após desenhar no DOM (≈ `LOOP AT SCREEN`; use com extremo cuidado — prefira data binding).
4. `onExit()` — antes de destruir: limpar handlers, timers, objetos pesados (evitar memory leaks).

**Event handlers (≈ PAI/USER_COMMAND):**
```xml
<Button text="Salvar" press=".onSave"/>
<Input change=".onNameChange" liveChange=".onTyping"/>
```
```javascript
onSave: function (oEvent) {
  const sValor = this.byId("inpFirstName").getValue();   // ≈ ler campo no PAI
  if (!sValor) { MessageBox.error("Por favor, preencha o campo!"); return; }
  MessageToast.show("Valor preenchido: " + sValor);
}
```
- **IDs estáveis** (`id="inpFirstName"`) são vitais para acesso no controller e para testes OPA5; use sempre `this.byId(...)`.
- **Mensagens:** `MessageToast` (curta, não intrusiva ≈ `MESSAGE TYPE 'S'`) × `MessageBox.error/confirm` (modal ≈ `TYPE 'E' DISPLAY LIKE 'A'` / `POPUP_TO_CONFIRM`).
- **Formatters** (`model/formatter.js`): formatam valores para a UI (datas, status → cores `Success/Warning/Error`) ≈ `WRITE ... USING EDIT MASK`.
- **BaseController:** classe base com utilitários (`getModel`, `getResourceBundle`, navegação) herdada por todos os controllers (≈ `ZCL_BASE_CONTROLLER`).
- **Device model:** `{device>/system/phone}` para adaptar a UI (≈ consultar `SY-BATCH`).
- **Controller magro:** orquestra (eventos → models/services → estado da view); nunca cálculos complexos, validações de 10 passos ou manipulação de dados em massa — isso vai para serviços/backend ("o PAI não deve ter 500 linhas de SELECT").

## 🔗 Relacionados
- [XML View](/glossario/xml-view)
- [Data Binding SAPUI5](/glossario/data-binding-sapui5)
- [Component.js e manifest.json](/glossario/component-js-e-manifest-json)
- [Design Patterns ABAP](/glossario/design-patterns-abap)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
