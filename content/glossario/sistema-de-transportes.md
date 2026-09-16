---
title: "Sistema de Transportes"
description: "Mecanismo que move customizing e desenvolvimentos entre ambientes (DEV → QAS → PRD) com rastreabilidade e auditoria."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `TMS` · `Transport Management System` · `Request` · `Ordem de Transporte` · `DEV QAS PRD` · `Landscape` · `Transport of Copies` · `ToC` · `Sandbox` · `ChaRM` · `SAP Coordinator` · `Paisagem de Três Sistemas` · `&SAP_EDIT`

> **Definição**
> Mecanismo que move customizing e desenvolvimentos entre ambientes (DEV → QAS → PRD) com rastreabilidade e auditoria.
{.is-info}

- **DEV:** criação e teste unitário.
- **QAS:** SIT e UAT.
- **PRD:** go-live da solução validada.

**Paisagens (DSAG v2.0):**
- **3 sistemas (D → Q → P):** padrão para ciclos curtos. Q bloqueado para edição (só transportes) e copiado regularmente de P; usuários de teste com autorizações idênticas às de produção; em P, mudanças emergenciais (`&SAP_EDIT`) rigorosamente rastreadas.
- **5–6 sistemas:** release longa em D → T (teste) → Q enquanto correções urgentes seguem M (manutenção) → C (consolidação) → P; após o go-live, M é realinhado importando os transportes da release.
- **Sandbox:** exploração livre; **nenhum** transporte sai dela para a esteira oficial.
- **Transport of Copies (ToC):** entregas preliminares para T/Q mantendo o request original bloqueado no DEV — evita inversão de sequência no go-live.
- **Rollback:** encapsule projetos em um único request; desative por *switches*; rejeitar no TMS QA não remove o código do destino.
- **Change management (ITIL):** requisitante → SAP Coordinator (valida viabilidade e checklist: ATC sem erros/avisos) → gerente de TI; ChaRM no Solution Manager.
- **Princípio da identidade:** mesmo nome de objeto = mesmo código e atributos em todos os ambientes.

## 🔗 Relacionados
- [ABAP](/glossario/abap)
- [Testes em Projetos SAP](/glossario/testes-em-projetos-sap)

## 📚 Fontes
- Apostila - Conhecendo todos os Módulos do SAP
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
