---
title: "Modificação do Standard"
description: "Alteração direta de código SAP — último recurso; antes esgote ABAP Cloud/BTP, BAdIs e enhancements. Nunca copie código SAP."
tags: ["glossario","sap-clean-core"]
---
**Também conhecido como:** `Modificação` · `SPAU` · `Chave de Desenvolvedor` · `Cópia de Código SAP`

> **Definição**
> Alteração direta de código SAP — último recurso; antes esgote ABAP Cloud/BTP, BAdIs e enhancements. Nunca copie código SAP.
{.is-info}

**Ordem de tentativa:** ABAP Cloud / BTP → BAdIs e user exits → Enhancement Framework (isolado, com Switch Framework) → modificação direta.

- **Custo:** reconciliação dolorosa na **SPAU** a cada upgrade/pacote — "você assume a posse do código alheio".
- **Checklist:** análise de impacto documentada; código Z isolado no pacote; lógica pesada em classes OO testáveis (não dentro do enhancement).

> **Regra vitalícia: NUNCA COPIAR CÓDIGO SAP**
> Clonar programa standard para um "Z" desvincula de correções de segurança/performance e destrói a rastreabilidade. Exceções: exigências de auditoria fiscal/contábil, notas OSS, incompatibilidade de add-on — sempre comentado, isolado e justificado.
{.is-danger}

**Escala DSAG v2.0:** (1) enhancements explícitos — BAdIs, user/customer exits e **ABAP CDS extensions** (campos e associações sem modificação) → (2) enhancement sections e implícitos (cuidado: um support package pode desativá-los silenciosamente) → (3) modificação direta → (4) **cópia Z** (último recurso: herda bugs, perde notas SAP e evolução do standard). Restrinja chaves de modificação ao menor número de desenvolvedores. A decisão por Z-copy deve considerar os custos **subsequentes**, não só o inicial.

## 🔗 Relacionados
- [Clean Core](/glossario/clean-core)
- [BAdI](/glossario/badi)
- [Enhancement Framework](/glossario/enhancement-framework)
- [User Exit](/glossario/user-exit)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [Clean Core e ABAP Cloud](/glossario/temas/clean-core-e-abap-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
