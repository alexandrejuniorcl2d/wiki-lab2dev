---
title: "Fiori"
description: "Design system e paradigma de UX da SAP — apps focados em tarefas, por papel, responsivos e consistentes — construídos com SAPUI5 sobre dados OData."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `SAP Fiori` · `Fiori UX` · `Fiori Design System` · `Fiori Design Guidelines` · `Fiori Horizon` · `sap_horizon`

> **Definição**
> Design system e paradigma de UX da SAP — apps focados em tarefas, por papel, responsivos e consistentes — construídos com SAPUI5 sobre dados OData.
{.is-info}

**Princípios de design:** role-based (mostra só o que é relevante ao papel) · adaptive (desktop, tablet, smartphone) · simple (mínimo de cliques) · coherent (mesma experiência em todos os apps) · delightful (interface agradável).

**Tipos de apps Fiori:**
- **Transacionais** — executar tarefas (criar pedido de compra).
- **Analíticos** — dashboards e KPIs em tempo real.
- **Factsheets** — visão 360° de um objeto (cliente, produto, fornecedor).

**Consistência é o rei:** no mundo Dynpro cada "tela Z" era diferente; no Fiori o design system dita aparência e comportamento — o usuário que aprende um app sabe usar os outros, e o desenvolvedor não precisa decidir design (os controles já implementam as boas práticas). "É como usar o CL_SALV_TABLE."

**Mudança de paradigma técnica:**
| SAP GUI / Dynpro | Fiori / SAPUI5 |
|---|---|
| Server-side rendering, *stateful* | Client-side rendering, *stateless* |
| Servidor monta a tela pixel a pixel (PBO/PAI) | Servidor devolve só **dados** (OData/JSON); o navegador renderiza |
| Cada ENTER = roundtrip e tela "pisca" | **SPA** (single page application): sem recarregar, sem flicker |
| SE80 + CTS | VS Code / BAS + Git |

> **"O ABAP fornece o dado, o UI5 conta a história."**

**Recomendações DSAG:** Fiori/SAPUI5 é a fundação e o padrão definitivo; separação frontend/backend obrigatória; protótipos no **Figma** com Fiori Design Stencils antes do código; tecnologias legadas (Dynpro, Web Dynpro, BSP) não fazem sentido em novos desenvolvimentos.

**Dica de ouro:** "não procure o T-code, procure o app" na [SAP Fiori Apps Reference Library](/glossario/sap-fiori-apps-reference-library).

## 🔗 Relacionados
- [SAPUI5](/glossario/sapui5)
- [Fiori Elements](/glossario/fiori-elements)
- [Fiori Launchpad](/glossario/fiori-launchpad)
- [SAP Fiori Apps Reference Library](/glossario/sap-fiori-apps-reference-library)
- [OData](/glossario/odata)

## 📚 Fontes
- Apostila - Fiori e SAPUI5
- Apostila - Conhecendo todos os Módulos do SAP
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira
- Apostila - Consultor SAP (Dia 1) - Ecossistema e Soft Skills
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
