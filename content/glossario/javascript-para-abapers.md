---
title: "JavaScript para ABAPers"
description: "Tradução dos fundamentos de JavaScript moderno para quem vem do ABAP: variáveis, objetos, arrays, loops declarativos, funções, this, assincronismo e igualdade estrita."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `JavaScript` · `let` · `const` · `Arrow Function` · `this JavaScript` · `Promise` · `async await` · `Template Literals` · `===` · `filter map forEach` · `Callback`

> **Definição**
> Tradução dos fundamentos de JavaScript moderno para quem vem do ABAP: variáveis, objetos, arrays, loops declarativos, funções, this, assincronismo e igualdade estrita.
{.is-info}

| ABAP | JavaScript moderno |
|---|---|
| `DATA` / `CONSTANTS` (tipagem forte) | `let` / `const` (tipagem fraca — tipo pode mudar); **evite `var`** |
| Structure | Objeto `{ matnr: '001', maktx: 'Produto A' }` (base do JSON; campos dinâmicos) |
| Tabela interna | Array `[{...}, {...}]`; índice começa em **0**; `push`, `splice`, `sort` |
| `LOOP AT ... WHERE` + `APPEND` | `arr.filter(m => m.estoque > 0)` |
| `MOVE-CORRESPONDING` em loop | `arr.map(m => ({ connid: m.connid }))` |
| `LOOP AT` só para processar | `arr.forEach(m => ...)` |
| `METHOD`/`FORM` | `function f(x) {}` ou arrow `const f = x => ...` |
| `me->` (sempre previsível) | `this` depende de **como** a função é chamada |
| `CONCATENATE ... SEPARATED BY` | Template literal: `` `Material \${matnr} - \${maktx}` `` |
| `IF a = b` (seguro quanto a tipo) | Use sempre `===` / `!==` (`1 == '1'` é true!) |
| `WRITE` / debugger `/h` | `console.log`, `console.table`, `debugger;` |
| `INCLUDE` | Módulos `sap.ui.define([...deps], function(...) {...})` (AMD assíncrono) |

**`this` e arrow functions:** dentro de callbacks (ex.: `attachPress(function(){...})`) o `this` deixa de ser o controller; com **arrow function** o `this` é herdado — regra de ouro nos controllers.

**Assincronismo — a maior quebra de paradigma:** ABAP é síncrono (CALL FUNCTION espera); na web, chamadas de rede não travam a UI. **Callbacks** → **Promises** → **`async/await`**:
```javascript
async onReadProducts() {
  try {
    const oData = await this.getView().getModel().readPromise("/Products");
    console.log(oData.results);        // só executa após a resposta
  } catch (oError) {                   // equivalente a EXCEPTIONS / sy-subrc <> 0
    console.error("Falha na leitura OData");
  }
}
```
"É a diferença entre `WAIT UP TO` e `SUBMIT ... AND RETURN` com verificação posterior."

**DOM:** a view XML é a planta baixa (SE51); o DOM é o prédio construído em memória que o código manipula em tempo real.

## 🔗 Relacionados
- [SAPUI5](/glossario/sapui5)
- [MVC SAPUI5](/glossario/mvc-sapui5)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
