---
title: "Estratégia de Código Próprio"
description: "Decisão explícita de onde investir em código Z (só no que dá vantagem competitiva) e governança organizacional para sustentá-lo."
tags: ["glossario","sap-clean-core"]
---
**Também conhecido como:** `Make or Buy` · `Core Domain` · `Funil de Prevenção de Código` · `Lead Developer` · `Community of Practice` · `Development Factory`

> **Definição**
> Decisão explícita de onde investir em código Z (só no que dá vantagem competitiva) e governança organizacional para sustentá-lo.
{.is-info}

**Funil de prevenção** antes de cada linha de código: Customizing & extensões standard → workaround organizacional → solução de terceiros / app standard → só então desenvolvimento individual. "Cada linha em seu namespace consome recursos perenes de leitura, debug e manutenção."

**Organização (DSAG):**
- Matriz *make × buy*: invista em **Core Domain** (vantagem competitiva); terceirize/compre commodities.
- Times com domínio restrito (um módulo) para evitar troca de contexto; não ocupe 100% — reserve espaço para a **Community of Practice**.
- **Product Owner** dita a prioridade; **Lead Developer** (arquiteto de produto) tem autoridade técnica para vetar soluções sujas.
- Agilidade exige base técnica automatizada — Scrum sobre processos manuais vira burocracia.
- Paisagens que cresceram sem regra caem no "ciclo de manutenção de lixo"; qualidade é premissa, não luxo.
- **Cost of Delay:** aprovações arrastadas (CAB de 2 meses) travam código pronto.

**Relato brownfield:** Ano 1 — estratégia Clean Core, checks ATC iniciais (segurança, HANA readiness), treinamento, CoP com coaches seniores. Ano 2 — train-the-trainer, code reviews obrigatórios, Lead Developer formal, ABAP Unit, QA bloqueante.

## 🔗 Relacionados
- [Clean Core](/glossario/clean-core)
- [Standard First](/glossario/standard-first)
- [ABAP Test Cockpit](/glossario/abap-test-cockpit)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [Clean Core e ABAP Cloud](/glossario/temas/clean-core-e-abap-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
