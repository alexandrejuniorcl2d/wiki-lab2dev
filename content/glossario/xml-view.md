---
title: "XML View"
description: "Definição declarativa da tela em XML (o quê exibir), com namespaces de bibliotecas, controles, layouts (VBox/HBox/Grid) e fragmentos reutilizáveis."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `View XML` · `mvc:View` · `xmlns` · `App e Page` · `VBox` · `HBox` · `Grid Layout` · `Fragment` · `Fragmento` · `Controles de Input`

> **Definição**
> Definição declarativa da tela em XML (o quê exibir), com namespaces de bibliotecas, controles, layouts (VBox/HBox/Grid) e fragmentos reutilizáveis.
{.is-info}

**Declarativo × imperativo:** `<Button text="Salvar" press=".onSave"/>` em vez de `document.createElement(...)` — legível, manutenível, com ferramentas visuais (≈ separação layout Dynpro × PBO/PAI).

```xml
<mvc:View controllerName="meu.app.controller.Main"
          xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m"
          xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core">
  <App>
    <pages>
      <Page title="Cadastro de Usuário">
        <content>
          <VBox gap="0.5rem">
            <Label text="Nome"/>       <Input id="inpNome" placeholder="Digite seu nome..."/>
            <Label text="País"/>       <Select><core:Item key="BR" text="Brasil"/></Select>
            <Label text="Nascimento"/> <DatePicker displayFormat="dd/MM/yyyy"/>
            <CheckBox text="Ativo"/>
            <Button text="Cadastrar" type="Emphasized" icon="sap-icon://save" press=".onCadastrar"/>
          </VBox>
        </content>
      </Page>
    </pages>
  </App>
</mvc:View>
```
- `xmlns` = alias de biblioteca; `controllerName` = "cola" com o controller.
- **App** (container raiz, gerencia navegação) e **Page** (tela: `title`, `showNavButton`, agregação `content`).
- **Button `type`:** Default, Emphasized, Accept, Reject, Transparent.
- **Propriedades universais:** `text`, `enabled`, `visible` (podem ser ligadas a dados), `width` (prefira layouts flexíveis).
- **Layouts:** `VBox` (empilha) / `HBox` (alinha) com `gap` (1.134+); `sap.ui.layout.Grid` de **12 colunas** com `GridData span="L6 M4 S12"` (L > 1024px, M > 600px, S < 600px).
- **Fragmentos:** XML sem controller próprio (≈ INCLUDE) para diálogos, cabeçalhos e seções reutilizáveis — `<core:FragmentDefinition>` + `this.loadFragment({ name: "..." })`.

## 🔗 Relacionados
- [MVC SAPUI5](/glossario/mvc-sapui5)
- [SAPUI5](/glossario/sapui5)
- [Data Binding SAPUI5](/glossario/data-binding-sapui5)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
