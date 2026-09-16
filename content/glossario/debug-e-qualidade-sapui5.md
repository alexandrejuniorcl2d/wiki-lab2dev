---
title: "Debug e Qualidade SAPUI5"
description: "Ferramentas de diagnóstico e qualidade do frontend: DevTools (console, network, sources, performance), UI5 Inspector, Diagnostics, Support Assistant, Mock Server, ESLint, QUnit e OPA5."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `Chrome DevTools` · `F12` · `UI5 Inspector` · `UI5 Diagnostics` · `Ctrl+Alt+Shift+S` · `Support Assistant` · `Mock Server` · `sap.ui.core.util.MockServer` · `ESLint` · `QUnit` · `OPA5` · `Istanbul` · `Network Tab`

> **Definição**
> Ferramentas de diagnóstico e qualidade do frontend: DevTools (console, network, sources, performance), UI5 Inspector, Diagnostics, Support Assistant, Mock Server, ESLint, QUnit e OPA5.
{.is-info}

| Ferramenta | "Equivalente ABAP" | Uso |
|---|---|---|
| **Chrome DevTools (F12)** — Console | `WRITE` | Logs, executar JS, inspecionar variáveis |
| — Network | ST05 / Gateway error log | Requisições OData: URL, método, `x-csrf-token`, **payload** e **response** (a mensagem do Gateway está lá em 99% dos casos) |
| — Sources | Debugger ABAP | Breakpoints, call stack |
| — Performance | Runtime analysis | Flame chart, *long tasks* de CPU |
| **UI5 Inspector** (extensão) | — | Árvore de controles UI5, propriedades e **bindings** (model, path, valor) |
| **UI5 Diagnostics** (*Ctrl+Alt+Shift+S*) | — | Versão exata do UI5, libs, control tree, breakpoints de framework, performance |
| **Support Assistant** | Code Inspector | 100+ regras Fiori em runtime: performance, acessibilidade (WCAG 2.2), APIs depreciadas; regras exportáveis em JSON |
| **Mock Server** | — | Simula OData com `metadata.xml` + JSON locais: desenvolvimento paralelo, offline, testes estáveis |
| **ESLint** | `Ctrl+F2` | Análise estática JS (variáveis não usadas, `===`, estilo) |
| **QUnit** | ABAP Unit | Testes unitários de formatters, cálculos, helpers; cobertura com **Istanbul** |
| **OPA5** | Testes de integração | Robô que simula usuário (Given/When/Then), espera a UI ficar pronta |

**Troubleshooting de binding ("por que meu dado não aparece?"):** inspecione o controle → confira o *binding path* (maiúsculas!) → abra o model e veja se o dado existe no caminho → confira o *binding context* em itens de lista.

**Exercício 400 Bad Request:** Network → POST vermelho → Payload (campo obrigatório faltando? número como string?) → Response (`Invalid value 'Two' for property 'Quantity' which has type 'Edm.Decimal'`) → corrigir a montagem do payload no controller.

## 🔗 Relacionados
- [SAPUI5](/glossario/sapui5)
- [Data Binding SAPUI5](/glossario/data-binding-sapui5)
- [OData Model SAPUI5](/glossario/odata-model-sapui5)
- [ABAP Unit](/glossario/abap-unit)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
