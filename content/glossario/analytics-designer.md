---
title: "Analytics Designer"
description: "Camada pro-code do SAC para aplicações analíticas guiadas: scripting em subconjunto de TypeScript/JavaScript orientado a eventos, popups, CSS, custom widgets (JSON + JS), chamadas OData, APIs de data actions, versões e navegação."
tags: ["glossario","sap-sac"]
---
**Também conhecido como:** `Analytic Application` · `Analytic Applications` · `Unified Story Scripting` · `Scripting SAC` · `onInitialization` · `onClick SAC` · `onSelect` · `onResultChanged` · `Script Variables` · `Script Objects` · `Custom Widgets SAC` · `SAC Widget SDK` · `NavigationUtils` · `Planning.Versions` · `DataAction.execute` · `Timer SAC`

> **Definição**
> Camada pro-code do SAC para aplicações analíticas guiadas: scripting em subconjunto de TypeScript/JavaScript orientado a eventos, popups, CSS, custom widgets (JSON + JS), chamadas OData, APIs de data actions, versões e navegação.
{.is-info}

**Quando a story não basta:** fluxos guiados passo a passo, lógica de UI dinâmica (visibilidade, estado), ações programáticas (data actions, sistemas externos). "Uma Story mostra os dados. Uma Application permite atuar sobre eles."

**Linguagem e IDE:** subconjunto de **TypeScript/JavaScript** com tipagem, IntelliSense, validação em tempo real e acesso a widgets, modelos e variáveis; roda em **sandbox** no browser (sem DOM nem APIs JS arbitrárias).

**Eventos:**
| Evento | Quando | Uso |
|---|---|---|
| `onInitialization` | Uma vez, ao carregar | Estado inicial, filtros padrão, dropdowns, perfil do usuário (Data Change Insights só após ele terminar) |
| `onClick` / `onSelect` | Interação do usuário | Filtros, popups, trocar medida/dimensão, navegar |
| `onResultChanged` | Dados do widget mudaram | Recalcular totais e KPIs |

```javascript
// onClick de um botão: alterna a medida do gráfico
var measures = Chart_1.getMeasures("default");
if (measures[0] === "Faturamento") {
  Chart_1.removeMeasure("Faturamento", "default"); Chart_1.addMeasure("Quantidade", "default");
} else {
  Chart_1.removeMeasure("Quantidade", "default");   Chart_1.addMeasure("Faturamento", "default");
}
```

**Estado e reuso:** *script variables* globais (o **quê** — usuárioLogado, produtoSelecionado) e *script objects* com funções (o **como** — `UtilsFormatacao`, `UtilsAPI`).

**APIs principais:**
```javascript
var sim = DataAction.get("DA_PRICE_SIMULATION");
sim.setParameterValue("p_PriceIncrease", Slider_Increase.getValue());
sim.execute();                                   // também MultiAction, com callbacks de sucesso/falha
// Planning.Versions: publish() de versão privada, revert() para descartar
NavigationUtils.openStory(storyId, pageId, parameters);   // drill-through mantendo contexto
NavigationUtils.openUrl(url, newTab);             // ex.: app Fiori no S/4HANA com o ID do pedido
Timer.start({ func: checkStatus, delay: 10000, periodic: true });
Table_Vendas.getDataSource().setDimensionFilter("Produto", "Notebooks");
```

**UI dinâmica:** `Panel.setVisible(true/false)`, widget **Popup** com `.open()` (confirmações, formulários, detalhes), `setWidth()`/`setHeight()`.

**Custom widgets:** criados com o SDK (arquivo **JSON** + **JavaScript**, HTML/CSS) para integrar D3.js, ECharts, Highcharts, Chart.js, Leaflet.js; comunicação bidirecional com a aplicação.

**CSS:** classes no painel de estilo ou `addCssClass()`/`removeCssClass()` + editor de CSS da aplicação (*scoped*).

**OData:** `OData.read()` (preencher dropdown com materiais do ERP) e `OData.callAction()` (aprovar item de workflow no S/4HANA) — chamada segura pelo backend via Destination Service/Cloud Connector, não pelo browser.

**Performance:** evite loops sobre result sets no front-end (filtre no backend), agrupe mudanças de UI, **lazy loading** (desligar carga automática de widgets ocultos e buscar ao exibir), funções reutilizáveis, processamento pesado em modelos/data actions.

**Debug:** `console.log()` + DevTools (F12) — abas Console, Network (chamadas de dados/OData) e Sources (breakpoints).

**Cenário — cockpit de simulação de preços:** sliders → `DataAction.execute()` com parâmetros → `onResultChanged` atualiza KPIs com CSS de melhora/piora → painel de detalhe por produto → popup de confirmação → `Planning.Versions.publish()`.

> Low-code **e** pro-code: a escolha segue o requisito, não um limite da ferramenta.

## 🔗 Relacionados
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [Stories SAC](/glossario/stories-sac)
- [Data Actions SAC](/glossario/data-actions-sac)
- [SAC Planning](/glossario/sac-planning)

## 📚 Fontes
- Apostila - SAP Analytics Cloud

---
🧭 [SAP Analytics Cloud](/glossario/temas/sap-analytics-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
