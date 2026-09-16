---
title: "Branding e Temas Fiori"
description: "Personalizar a aparência sem quebrar o design system: UI Theme Designer para o tema global, classes semânticas com variáveis CSS de tema para exceções — nunca IDs ou classes internas."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `UI Theme Designer` · `Theme Designer` · `style.css` · `addStyleClass` · `sapBrandColor` · `CSS Variables SAP` · `sapUiSmallMargin` · `sap-icon` · `Icon Explorer` · `CSSGrid` · `sap_horizon_dark` · `Dark Theme` · `contentDensities` · `sapUiSizeCompact` · `sapUiSizeCozy`

> **Definição**
> Personalizar a aparência sem quebrar o design system: UI Theme Designer para o tema global, classes semânticas com variáveis CSS de tema para exceções — nunca IDs ou classes internas.
{.is-info}

> **Regra de ouro**
> "Não transforme o Fiori em um carnaval." Branding = adaptar identidade (cores, logo), não reinventar estrutura e comportamento.
{.is-warning}

- **CSS customizado:** `webapp/css/style.css` declarado em `sap.ui5 > resources > css`; aplicado depois do tema.
- **Aplique classes semânticas** (`statusEmAtraso`, não `textoVermelhoNegrito`) via `class="..."` no XML ou `this.byId("x").addStyleClass("...")`.
- ❌ **Nunca** use IDs gerados (`#__input0-inner`) nem classes internas do framework (`.sapMInputBaseContentWrapper`) — um patch do UI5 quebra tudo.
- **UI Theme Designer:** ferramenta web low-code — escolhe tema base (ex.: Morning Horizon), altera parâmetros (cores, fontes, logo), pré-visualiza e exporta; publicado no BTP (theme service) e aplicado no Launchpad (apps standalone precisam de configuração).
- **Variáveis LESS/CSS:** `@sapBrandColor` recompila centenas de regras; no CSS próprio use `var(--sapBackgroundColor)`, `var(--sapTextColor)`, `var(--sapErrorColor)` — assim o estilo funciona no **tema escuro** (`sap_horizon_dark`); cores fixas quebram.
- **Classes utilitárias:** `sapUiSmallMargin`, `sapUiMediumMargin`, `sapUiLargeMargin`, `sapUiResponsiveMargin`, direcionais (`sapUiSmallMarginTop`, `...Begin`, `...End`) — não crie `.minhaMargem10px`.
- **Ícones:** `icon="sap-icon://save"` (fontes vetoriais que seguem o tema) — catálogo no *Icon Explorer* do Demo Kit.
- **Layouts:** `sap.ui.layout.cssgrid.CSSGrid` (`gridTemplateColumns="1fr 2fr 1fr"`, `gridGap`) para dashboards; media queries *mobile first* com moderação.
- **Densidade:** `contentDensities` no manifest — **compact** (desktop, `sapUiSizeCompact`) × **cozy** (touch, `sapUiSizeCozy`).

## 🔗 Relacionados
- [Fiori](/glossario/fiori)
- [SAPUI5](/glossario/sapui5)
- [Fiori Launchpad](/glossario/fiori-launchpad)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
