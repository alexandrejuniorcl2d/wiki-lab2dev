---
title: "Extensibilidade Fiori"
description: "Estender apps Fiori standard sem copiá-los: extension points e controller hooks via Adaptation Project (dev) ou adaptação em runtime pelo key user — gerando variantes armazenadas no UI Flexibility."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `Adaptation Project` · `Extension Point` · `Controller Extension` · `Controller Hook` · `View Extension` · `Key User Adaptation` · `RTA` · `Runtime Adaptation` · `App Variant` · `Variante de Aplicação` · `UI Flexibility` · `SAPUI5 Flexibility` · `LRep` · `Layered Repository` · `SAP_UI_FLEX_KEY_USER`

> **Definição**
> Estender apps Fiori standard sem copiá-los: extension points e controller hooks via Adaptation Project (dev) ou adaptação em runtime pelo key user — gerando variantes armazenadas no UI Flexibility.
{.is-info}

**O paradigma "Z" é um risco:** copiar `MM_PR_APV` para `ZMM_PR_APV` = perda de suporte, cherry-picking manual de correções, upgrades dolorosos e dívida técnica. Clean Core: customizações em camadas separadas.

**"User exits" do frontend:**
- **Extension points** (ganchos na view ≈ screen exits): áreas reservadas (`afterFacet`, `beforeSection`, `replaceHeader`, `HeaderExtensionPoint`…) onde se injeta um **fragmento** XML declarado no manifest da extensão.
- **Controller hooks/extensions** (≈ BAdIs): lógica `onBefore...`/`onAfter...` em métodos preparados pela SAP (preferível) ou *override* de métodos públicos (com `this.base.metodo(...)` para chamar o original — usar com cuidado).

**Ferramentas:**
| Adaptation Project (desenvolvedor, BAS) | Key User Adaptation / RTA (sem código) |
|---|---|
| Projeto "delta": só views/fragments/controller extensions/i18n alterados | Modo "Adapt UI" no Launchpad com drag-and-drop |
| Seleciona o app standard do S/4HANA/BTP, desenvolve com Page Editor ou código, deploy do delta | Adicionar/ocultar/mover campos e seções, renomear labels, salvar visões por grupo de usuários |
| | Role `SAP_UI_FLEX_KEY_USER` |

- **Resultado — variante de aplicação:** não é cópia, é metadado de diferenças aplicado em runtime por cima do standard; pode ganhar tile próprio no Launchpad.
- **Extensão i18n:** o `i18n.properties` da extensão sobrescreve chaves do standard (ex.: "Cliente" → "Parceiro de Negócios").
- **UI Flexibility / LRep (Layered Repository):** guarda as mudanças como *changes* em camadas aplicadas por precedência: SAP standard (base) → Partner → Customer (developer) → Key User → personalização do usuário final.
- **Como saber se é extensível:** [SAP Fiori Apps Reference Library](/glossario/sap-fiori-apps-reference-library) → app (ex.: *Manage Purchase Orders* F0842A) → *Implementation Information* → *Extensibility*: UI extension points, controller hooks, business contexts (Custom Fields and Logic) e suporte a key user adaptation.

**Cenário:** ocultar "Rejeitar Tudo" para analistas júnior (key user adaptation, sem código) + nova coluna "Prioridade do Cliente" de campo customizado (adaptation project estendendo view e controller).

**Limitações por design:** não é possível alterar o serviço OData principal (só estender), quebrar a lógica de negócio fundamental (preço, crédito), mudar a estrutura de navegação ou estender apps não preparados (verifique na Apps Library). **Boas práticas:** hooks em vez de override, extensão mínima e focada, documentar no `manifest.appdescr_variant`. Estrutura de um adaptation project: `manifest.appdescr_variant` + `webapp/ext`. "Não copie o standard. Estenda com inteligência."

## 🔗 Relacionados
- [Clean Core](/glossario/clean-core)
- [Fiori Elements](/glossario/fiori-elements)
- [Extensibilidade Key User](/glossario/extensibilidade-key-user)
- [SAP Fiori Apps Reference Library](/glossario/sap-fiori-apps-reference-library)

## 📚 Fontes
- Apostila - Fiori e SAPUI5

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
