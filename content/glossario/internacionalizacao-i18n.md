---
title: "Internacionalização i18n"
description: "Textos da UI centralizados em i18n.properties (chave=valor) por idioma, carregados por um ResourceModel e usados com {i18n>chave} — o \"text symbols\" da web."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `i18n` · `i18n.properties` · `ResourceModel` · `ResourceBundle` · `getText` · `Fallback de Idioma` · `I18n Editor`

> **Definição**
> Textos da UI centralizados em i18n.properties (chave=valor) por idioma, carregados por um ResourceModel e usados com {i18n>chave} — o "text symbols" da web.
{.is-info}

- **Hardcode é erro de arquitetura** (multi-idioma impossível, manutenção cara, quebra DRY) ≈ `WRITE 'Relatório'` ignorando text symbols.
- **Arquivos:** `webapp/i18n/i18n.properties` (padrão/fallback — obrigatório, geralmente inglês), `i18n_pt.properties`, `i18n_pt_BR.properties`, `i18n_de.properties`…
- **Fallback:** navegador `pt-BR` → procura `_pt_BR` → `_pt` → padrão.
- **Na view:** `<Button text="{i18n>btnSave}"/>`.
- **Parâmetros:** `orderConfirmation=Pedido {0} criado para o cliente {1}.` + `oBundle.getText("orderConfirmation", [sOrderId, sUserName])`.
- **No controller:** `this.getView().getModel("i18n").getResourceBundle().getText("msgSuccess")`.
- **Nomenclatura das chaves:** `appTitle`, `btnSave`, `labelCustomerName`, `titleProducts`, `msgErrorRequiredField`, `tableColPrice` (camelCase com prefixo de tipo); comentários com `#` para seções.
- **Codificação:** salve em **UTF-8** (escapes `ã` são desnecessários). BAS oferece o **I18n Editor** (idiomas lado a lado, chaves sem tradução).
- "Um aplicativo global nasce preparado para tradução; nunca é adaptado depois."

## 🔗 Relacionados
- [Data Binding SAPUI5](/glossario/data-binding-sapui5)
- [Component.js e manifest.json](/glossario/component-js-e-manifest-json)
- [Clean ABAP](/glossario/clean-abap)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
