---
title: "SAPUI5"
description: "Framework JavaScript da SAP com 500+ controles de UI prontos (sap.m etc.) para construir apps web Fiori responsivos e consistentes — \"as classes standard da web\"."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `UI5` · `OpenUI5` · `sap.m` · `sap.ui.core` · `sap.f` · `sap.ui.layout` · `sap.ui.table` · `sap.ui.comp`

> **Definição**
> Framework JavaScript da SAP com 500+ controles de UI prontos (sap.m etc.) para construir apps web Fiori responsivos e consistentes — "as classes standard da web".
{.is-info}

**Analogia:** usar SAPUI5 em vez de HTML puro é como usar BAPIs e classes standard (CL_SALV_TABLE) em vez de programar tudo com WRITE — produtividade, acessibilidade, responsividade e conformidade Fiori garantidas.

**Bibliotecas (namespaces):**
| Biblioteca | Conteúdo |
|---|---|
| **`sap.m`** | Fundação "mobile first": Button, Input, List, Table, Page, Dialog… — **sempre comece por ela** |
| `sap.ui.layout` | Grid, VBox/HBox avançados, SimpleForm |
| `sap.ui.table` | Tabelas de alta performance para milhares de linhas |
| `sap.f` | Layouts Fiori modernos: DynamicPage, FlexibleColumnLayout |
| `sap.ui.comp` | Smart controls (SmartTable, SmartFilterBar) guiados por anotações OData |
| `sap.ui.core` | Núcleo: MVC, Component, Item, Fragment |

⚠️ Evite bibliotecas obsoletas como `sap.ui.commons` (DSAG BP).

**Estrutura de um app:**
```
webapp/
├── index.html            ← bootstrap (o "START-OF-SELECTION")
├── Component.js          ← programa principal
├── manifest.json         ← metadados: modelos, rotas, fontes de dados
├── view/Main.view.xml    ← telas
├── controller/Main.controller.js
├── model/formatter.js
└── i18n/i18n.properties
```
**`index.html`:** carrega o core UI5, define o tema (ex.: `sap_horizon`) e instancia o `Component.js`.

**Glossário de tradução ABAP → UI5:**
| ABAP / SAP GUI | UI5 / Web |
|---|---|
| Transação (T-code) | Rota / hash de URL (`#/produto/123`) |
| `SY-UCOMM` / OK_CODE | Objeto de evento `oEvent` |
| Tabela interna | JSON Model (array de objetos) |
| Módulo de função / BAPI | Serviço OData |
| `SET PF-STATUS` | Botões na view XML |
| `MESSAGE E001` | `sap.m.MessageBox.error()` |
| `CALL SCREEN 100` | `this.getOwnerComponent().getRouter().navTo(...)` |
| `WAIT UP TO 2 SECONDS` | `setTimeout()` / Promises |
| SE80 | VS Code / BAS |
| Transport request (CTS) | Git commit/push |

**Debug:** F12 (console, `console.log/table`, `debugger;`), **UI5 Inspector** (Chrome/Edge) e *Ctrl+Shift+Alt+S* (diagnóstico: control tree, binding information).

## 🔗 Relacionados
- [Fiori](/glossario/fiori)
- [MVC SAPUI5](/glossario/mvc-sapui5)
- [Component.js e manifest.json](/glossario/component-js-e-manifest-json)
- [XML View](/glossario/xml-view)
- [Data Binding SAPUI5](/glossario/data-binding-sapui5)
- [JavaScript para ABAPers](/glossario/javascript-para-abapers)

## 📚 Fontes
- Apostila - Fiori e SAPUI5
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
