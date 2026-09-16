---
title: "Anotações Fiori no CAP"
description: "UI Fiori Elements dirigida pelo modelo: anotações CDS (em app/annotations.cds) definem List Report, Object Page, value helps, textos, side effects e botões CRUD sem escrever código de UI."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `annotations.cds` · `annotate service` · `@UI.LineItem` · `@UI.SelectionFields` · `@UI.HeaderInfo` · `@UI.Facets` · `CollectionFacet` · `ReferenceFacet` · `@UI.FieldGroup` · `@Common.ValueList` · `Value Help CAP` · `@Common.Text` · `@Common.TextArrangement` · `@Common.SideEffects` · `@Capabilities` · `Criticality CAP`

> **Definição**
> UI Fiori Elements dirigida pelo modelo: anotações CDS (em app/annotations.cds) definem List Report, Object Page, value helps, textos, side effects e botões CRUD sem escrever código de UI.
{.is-info}

**Princípio:** separe as anotações do serviço em `app/annotations.cds` — o serviço fica limpo e a UI evolui independente. "Model-driven UI": o domínio dirige a UI; anotações cobrem 80–90% do trabalho.

**List Report:**
```cds
annotate CatalogService.Books with @(
  UI: {
    SelectionFields: [ author_ID, stock, genre_ID ],          // barra de filtros
    LineItem: [
      { Value: title },
      { Value: author.name, Label: '{i18n>author}' },
      { Value: stock, Label: '{i18n>stock}', Criticality: stockLevel },   // cor condicional
      { Value: price }
    ]
  }
);
```
Busca: `@Search.defaultSearchElement` nos campos pesquisáveis.

**Object Page:**
```cds
annotate CatalogService.Books with @(
  UI.HeaderInfo: { TypeName: 'Livro', TypeNamePlural: 'Livros',
                   Title: { Value: title }, Description: { Value: author.name } },
  UI.FieldGroup #MainInfo:  { Data: [ { Value: title }, { Value: author_ID }, { Value: genre_ID } ] },
  UI.FieldGroup #StockInfo: { Label: 'Estoque e Preços',
                              Data: [ { Value: stock }, { Value: price }, { Value: currency_code } ] },
  UI.Facets: [ { $Type: 'UI.CollectionFacet', ID: 'BookDetails', Label: 'Detalhes', Facets: [
      { $Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#MainInfo' },
      { $Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#StockInfo' } ] } ]
);
```
- **CollectionFacet** agrupa (seção/formulário); **ReferenceFacet** aponta para um FieldGroup ou tabela de entidade associada.

**Value Help (F4):**
```cds
annotate CatalogService.Books with { supplier @Common.ValueList: {
  CollectionPath: 'Suppliers',
  Parameters: [
    { $Type: 'Common.ValueListParameterInOut',      LocalDataProperty: supplier_ID, ValueListProperty: 'ID' },
    { $Type: 'Common.ValueListParameterDisplayOnly', ValueListProperty: 'name' } ] } };
```

**Outras anotações úteis:**
| Anotação | Efeito |
|---|---|
| `@Common.Text: author.name` + `@Common.TextArrangement: #TextFirst` | "Emily Brontë (101)" em vez do ID (`#TextLast`, `#TextOnly`) |
| `@Common.SideEffects: { SourceProperties: [country_code], TargetProperties: ['region_code'] }` | Recarrega campos dependentes quando outro muda, sem JS |
| `@Capabilities: { Insertable: false, Updatable: false, Deletable: false }` | Esconde Create/Edit/Delete (ex.: AuditLog) |
| `Label: '{i18n>chave}'` | Textos traduzidos de `app/i18n/i18n_<lang>.properties` |

> **Capabilities é só UI**
> `@Capabilities` controla botões; a segurança real fica no backend com `@restrict` ou handlers — ver [Segurança CAP](/glossario/seguranca-cap).
{.is-warning}

**Limites do Fiori Elements:** layouts fora dos floorplans, UI imperativa complexa (wizards, drag & drop), manipulação de DOM, gráficos não padrão (D3.js) → estenda com controllers **UI5 extensions** só onde necessário.

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [Fiori Elements](/glossario/fiori-elements)
- [Anotações CDS](/glossario/anotacoes-cds)
- [Serviços CAP](/glossario/servicos-cap)
- [Internacionalização i18n](/glossario/internacionalizacao-i18n)

## 📚 Fontes
- Apostila - SAP CAP (Completa)

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
