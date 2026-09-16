---
title: "Tabelas e Listas SAPUI5"
description: "O \"novo ALV\": sap.m.Table (dados tabulares) e sap.m.List (mobile) com aggregation binding, colunas responsivas, filtros, ordenação, agrupamento, growing e contexto de linha."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `sap.m.Table` · `sap.m.List` · `ColumnListItem` · `demandPopin` · `minScreenWidth` · `Factory Function` · `FilterOperator` · `Sorter` · `Growing` · `getBindingContext` · `SearchField` · `Web ALV`

> **Definição**
> O "novo ALV": sap.m.Table (dados tabulares) e sap.m.List (mobile) com aggregation binding, colunas responsivas, filtros, ordenação, agrupamento, growing e contexto de linha.
{.is-info}

- **`sap.m.List`** (mobile, itens livres) × **`sap.m.Table`** (sucessora do ALV, colunas/linhas) × `sap.ui.table.Table` (milhares de linhas).
- **Template de linha:** `ColumnListItem` dentro de `items` é clonado para cada objeto (≈ não há mais `SET_TABLE_FOR_FIRST_DISPLAY`).
- **`<columns>` = field catalog:** `header`, `hAlign`, **`minScreenWidth`** (Tablet/Desktop) e **`demandPopin="true"`** (a coluna "salta" para baixo da linha em telas pequenas em vez de sumir).
- **Factory function:** `items="{path: '/Produtos', factory: '.minhaFactory'}"` retorna templates diferentes por linha (ex.: produto VIP).
- **Eventos:** `press` no item (`type="Navigation"`, ≈ hotspot/USER_COMMAND) e `selectionChange`; **`mode`:** None, SingleSelect, SingleSelectLeft, MultiSelect, Delete.
- **Filtro client-side:**
```javascript
onFilterProdutos(oEvent) {
  const sQuery = oEvent.getSource().getValue();
  const aFilters = sQuery ? [new Filter("Nome", FilterOperator.Contains, sQuery)] : [];
  this.byId("idProdutosTable").getBinding("items").filter(aFilters);
}
```
- **Ordenar/agrupar:** `getBinding("items").sort(new Sorter("Preco", true))`; agrupar com `new Sorter("Categoria", false, true)`.
- **Growing:** `growing="true" growingThreshold="20" growingScrollToLoad="true"` — carrega lotes sob demanda (substitui paginação).
- **Linha clicada** (≈ `READ TABLE ... INDEX sy-tabix`): `oEvent.getSource().getBindingContext()` → `.getPath()` (`/Produtos/1`) ou `.getObject()`.
- **Formatter + `ObjectStatus`/`ObjectNumber`** para cores e moedas (≈ EMPHASIZE do ALV); tipo `sap.ui.model.type.Currency`.

## 🔗 Relacionados
- [Data Binding SAPUI5](/glossario/data-binding-sapui5)
- [Fiori Elements](/glossario/fiori-elements)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
