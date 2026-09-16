---
title: "Stories SAC"
description: "Criação de dashboards no SAC com a Optimized Story Experience: páginas canvas ou responsivas, escolha de gráficos e tabelas, filtros em 3 níveis, input controls, linked analysis, Data Analyzer, bookmarks, cálculos na story e boas práticas de perform…"
tags: ["glossario","sap-sac"]
---
**Também conhecido como:** `Optimized Story Experience` · `Canvas Page` · `Responsive Page` · `Story Filters` · `Page Filters` · `Widget Filters` · `Input Controls` · `Linked Analysis` · `Data Analyzer` · `Bookmarks SAC` · `Calculated Measure` · `Restricted Measure` · `Cross Calculations` · `Variance Analysis SAC` · `Temas SAC`

> **Definição**
> Criação de dashboards no SAC com a Optimized Story Experience: páginas canvas ou responsivas, escolha de gráficos e tabelas, filtros em 3 níveis, input controls, linked analysis, Data Analyzer, bookmarks, cálculos na story e boas práticas de performance.
{.is-info}

**Optimized Story Experience:** unificou *Classic Story* e *Analytic Application* num único ambiente — mais performance e recursos novos (bookmarks antigos precisam ser recriados para incluir drill, rank e sort).

| Canvas (tamanho fixo) | Responsiva (adaptável) |
|---|---|
| Posicionamento pixel-perfect; dashboards operacionais, Digital Boardroom | Grade em blocos que se reorganiza do desktop ao celular — escolha moderna para a maioria |

**Gráfico certo para a pergunta certa:** barras/colunas (comparação) · linha (tendência) · pizza/donut (composição, poucas categorias). **Tabelas** para detalhes e múltiplas unidades: hierarquias com drill-down, **thresholds** (formatação condicional) e cálculos (⚠️ exportar para CSV/Excel achata hierarquias).

**Filtros:** **Story filters/prompts** (todas as páginas) → **Page filters** (widgets da página; aceita colar valores) → **Widget filters** (um gráfico). Painel horizontal ou vertical, fixável.

**Interatividade sem código:**
- **Input controls:** usuário troca dimensão ("Vendas por Região" ↔ "por Categoria") ou medida (valor, quantidade, margem).
- **Linked analysis:** clicar em "Nordeste" filtra os demais widgets da página.
- **Data Analyzer:** exploração segura sem editar a story (trocar tipo de gráfico, adicionar/remover dimensões e medidas), em nova aba ou na mesma.
- **Bookmarks:** salvam o estado (filtros, input controls, prompts, drill) — **pessoal** ou **global** (criado pelo designer); gestão na aba *Bookmarks* da página de Stories.

**Cálculos na story:**
| Tipo | Exemplo |
|---|---|
| **Calculated measure** | Preço Médio = `[Faturamento] / [Quantidade Vendida]` |
| **Restricted measure** | Vendas YTD (restringe a medida a membros/períodos; funções de tempo como YTD) |
| **Aggregation** | Preço com agregação NONE para não somar na hierarquia |
| **Cross calculations** | Versão nas colunas (Real, Orçado, Forecast) + coluna calculada `[Real] - [Orçado]` sem dezenas de medidas restritas |
| **Variance (gráfico)** | *+ Add Variance* compara Realizado × Orçado com delta absoluto/% e verde/vermelho automáticos |

Funções como **RESULTLOOKUP** operam no contexto da grade (dados visíveis).

**Design:** imagens (logo, ícones), formas (cards, cabeçalho, agrupar filtros), paleta consistente; **temas** centralizam cores, fontes, estilos de widget e logo.

**Mobile:** navegação por toque, "tocar para filtrar", "tocar e segurar" para detalhes, tabelas truncadas que expandem; simule a visualização em vários dispositivos.

**Performance:** limite widgets por página (cada um é uma query), use story filters cedo, lembre que live busca na fonte em tempo real, e otimize o modelo.

**Exercício — dashboard de vendas:** story otimizada responsiva → barras "Vendas por Gerente", linha "Vendas Mensais (12 meses)", tabela "Top 10 Produtos" → page filter Região + linked analysis por gerente → bookmark global "Visão Anual Padrão".

> "Design importa. A adoção de BI é consequência de beleza, funcionalidade e performance."

## 🔗 Relacionados
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [Modelagem SAC](/glossario/modelagem-sac)
- [Analytics Designer](/glossario/analytics-designer)
- [Colaboração SAC](/glossario/colaboracao-sac)

## 📚 Fontes
- Apostila - SAP Analytics Cloud

---
🧭 [SAP Analytics Cloud](/glossario/temas/sap-analytics-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
