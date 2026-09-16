---
title: "SAPscript e Smart Forms"
description: "Tecnologias legadas de formulário do SAP GUI — SAPscript (1992, editor SE71, textos SO10) e Smart Forms (2001, interface gráfica, SSF_FUNCTION_MODULE_NAME) — com suporte até 2040 e recomendação de não criar novos."
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `SAPscript` · `Smart Forms` · `SmartForms` · `SE71` · `SE72` · `SE78` · `SO10` · `OPEN_FORM` · `SSF_FUNCTION_MODULE_NAME` · `SMARTFORMS` · `SE63 Smart Forms`

> **Definição**
> Tecnologias legadas de formulário do SAP GUI — SAPscript (1992, editor SE71, textos SO10) e Smart Forms (2001, interface gráfica, SSF_FUNCTION_MODULE_NAME) — com suporte até 2040 e recomendação de não criar novos.
{.is-info}

| | **SAPscript** | **Smart Forms** |
|---|---|---|
| Ferramentas | `SE71` (editor), `SE72` (estilos), `SE78` (gráficos), `SO10` (textos standard) | Transação `SMARTFORMS`, interface gráfica |
| Dados | Variáveis globais do programa de impressão | Interface de parâmetros |
| Chamada | `OPEN_FORM` / `WRITE_FORM` / `CLOSE_FORM` | Módulo de função gerado |
| Tradução | Cópia do formulário por idioma | `SE63`, sem duplicar |
| Debug | Ativado nos utilitários da SE71 | Debug do módulo gerado |

**Boas práticas (DSAG):**
- Em Smart Forms, **nunca** chame o módulo gerado pelo nome fixo — ele muda por ambiente. Use `SSF_FUNCTION_MODULE_NAME` para obtê-lo.
- Smart Forms não tem versionamento nativo: copie para um pacote local com data antes de alterar.
- Ambos têm suporte até **2040**; sem conversão automática para Adobe. Novos formulários → [Adobe Forms](/glossario/adobe-forms).

## 🔗 Relacionados
- [SAP Forms](/glossario/sap-forms)
- [Adobe Forms](/glossario/adobe-forms)
- [Output Management SAP](/glossario/output-management-sap)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
