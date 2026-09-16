---
title: "Data Binding SAPUI5"
description: "Sincronização declarativa entre Model (fonte da verdade) e View — altere os dados e a UI reage; substitui o MOVE manual de dados para a tela."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `Data Binding` · `JSONModel` · `JSON Model` · `Property Binding` · `Aggregation Binding` · `Expression Binding` · `Context Binding` · `Element Binding` · `One-Way` · `Two-Way` · `bindElement`

> **Definição**
> Sincronização declarativa entre Model (fonte da verdade) e View — altere os dados e a UI reage; substitui o MOVE manual de dados para a tela.
{.is-info}

> **Princípio de ouro**
> O model é a única fonte da verdade. "Pare de tocar na UI diretamente. Altere os dados e a UI reagirá."
{.is-warning}

**Tipos de model:**
| Model | Lado | Uso |
|---|---|---|
| **JSONModel** | Cliente | Estado de UI, formulários, combos, mock data — rápido, flexível, **two-way por padrão** |
| **ODataModel** (V2/V4) | Servidor (Gateway) | Dados de negócio; paginação/filtro/ordenação no servidor — padrão absoluto em Fiori |
| **ResourceModel** | Cliente | Textos i18n |

**Criando no controller:**
```javascript
onInit: function () {
  const oModel = new JSONModel({ usuario: { nome: "João", cargo: "Dev ABAP", ativo: true } });
  this.getView().setModel(oModel);            // default; ou setModel(oModel, "nomeado")
}
```

**Tipos de binding:**
| Tipo | Sintaxe | Exemplo |
|---|---|---|
| **Property** | `{/caminho}` | `<Input value="{/produto/preco}"/>` · `<Switch state="{/produto/emEstoque}"/>` |
| **Aggregation** (o fim do LOOP AT no controller) | `items="{/pedidos}"` + template com caminhos relativos | `<Table items="{/pedidos}"> ... <Text text="{cliente}"/>` |
| **Expression** | `{= ...}` com `${caminho}` | `visible="{= ${isAdmin} === true }"` · `state="{= ${/estoque} < 10 ? 'Error' : 'Success' }"` |
| **Context / Element** | `binding="{/produtos/0}"` | Container inteiro relativo a um objeto; `oPanel.bindElement("/produtos/1")` troca tudo |
| **Named model** | `{nomeModel>/caminho}` | `{i18n>btnSave}`, `{device>/system/phone}` |

**Modos:** One-way (model → view; exibição; padrão do OData) × Two-way (model ↔ view; edição; padrão do JSONModel).

**Depurar:** UI5 Inspector / *Ctrl+Shift+Alt+S* → Binding Information (path correto? model certo? value `undefined` = path não encontrado); `console.log(this.getView().getModel().getData())`.

## 🔗 Relacionados
- [MVC SAPUI5](/glossario/mvc-sapui5)
- [Tabelas e Listas SAPUI5](/glossario/tabelas-e-listas-sapui5)
- [Anotações CDS](/glossario/anotacoes-cds)
- [OData](/glossario/odata)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
