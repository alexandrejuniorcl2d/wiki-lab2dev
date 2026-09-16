---
title: "SAP Screen Personas"
description: "Add-on que cria \"flavors\" simplificados sobre transações clássicas do SAP GUI (via SAP GUI for HTML) sem alterar as transações base."
tags: ["glossario","sap-fiori"]
---
**Também conhecido como:** `Screen Personas` · `Personas 3.0` · `Flavors`

> **Definição**
> Add-on que cria "flavors" simplificados sobre transações clássicas do SAP GUI (via SAP GUI for HTML) sem alterar as transações base.
{.is-info}

- Base técnica: serviço SICF `/sap/bc/personas` (SAP GUI for HTML/ITS).
- **Segurança:** SSL obrigatório; `~XSRFCHECK = 1`; página de logoff `/sap/public/bc/icf/logoff`; roles separadas (admin, editor `/PERSONAS/EDITOR_ROLE`, consumo); usuário ainda precisa do `S_TCODE` da transação original; `~no_domain_relaxing = 1` se houver erros de domínio.
- DSAG: ferramenta **cirúrgica** para telas legadas existentes — não para novos desenvolvimentos.

## 🔗 Relacionados
- [Fiori](/glossario/fiori)
- [SAP GUI](/glossario/sap-gui)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [Fiori e SAPUI5](/glossario/temas/fiori-e-sapui5) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
