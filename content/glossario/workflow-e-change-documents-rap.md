---
title: "Workflow e Change Documents RAP"
description: "Integração do BO RAP com serviços de reuso: workflow (aprovações via eventos e EML) e change documents (auditoria quem-mudou-o-quê-quando)."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `Business Workflow RAP` · `Change Documents` · `SCDO` · `Trilha de Auditoria`

> **Definição**
> Integração do BO RAP com serviços de reuso: workflow (aprovações via eventos e EML) e change documents (auditoria quem-mudou-o-quê-quando).
{.is-info}

- **Workflow:** ação `submitForApproval` levanta um business event → inicia workflow (BTP ou S/4HANA) → aprovações e tarefas → callback via EML/API executa a ação `approve`. Separa lógica transacional da orquestração.
- **Change Documents:** configuração em grande parte declarativa na BDEF; o framework registra CREATE/UPDATE/DELETE nos objetos de change document padrão; consulta com relatórios standard (objetos em `SCDO`). Auditoria "out-of-the-box".

## 🔗 Relacionados
- [Business Events RAP](/glossario/business-events-rap)
- [Actions RAP](/glossario/actions-rap)

## 📚 Fontes
- Apostila - ABAP RAP

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
