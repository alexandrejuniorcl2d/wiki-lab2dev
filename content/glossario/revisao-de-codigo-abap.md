---
title: "Revisão de Código ABAP"
description: "Práticas de ALM da DSAG: autoverificação no ADT (ABAP Cleaner), revisão de código em ciclos curtos e quality gates automáticos."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Code Review` · `Quality Gate` · `ABAP Cleaner` · `SM21` · `Hot Spots` · `Teamscale` · `ABAP2CodeCharta` · `Cockpit de Descomissionamento`

> **Definição**
> Práticas de ALM da DSAG: autoverificação no ADT (ABAP Cleaner), revisão de código em ciclos curtos e quality gates automáticos.
{.is-info}

- **ALM:** requisitos → dev → implementação → teste → disponibilização → operação → desativação. Ferramentas: Solution Manager (até 2027, estendido 2030) → **Cloud ALM**; Focused Run/Build/Insights. Rastreabilidade para auditoria é o melhor argumento de negócio.
- **Autoverificação:** ADT + quick fixes do ATC + plugin **ABAP Cleaner** (formata para Clean ABAP ao digitar).
- **Revisão de código:** espera máx. 2 dias; mudanças pequenas; autor revisa antes e documenta intenção; revisor foca em arquitetura, testabilidade e algoritmos; feedback ao código, nunca à pessoa; só revise após ATC e ABAP Unit passarem.
- **Quality gates:** bloqueiam falhas críticas de segurança; *baselines* para ocultar achados antigos; transportes de parceiros escaneados em sandbox; tolerância zero para falhas de segurança.
- **Manipulação de filtros:** monitore no log `SM21`; trate a causa (conhecimento, ciclos lentos); reincidência = incidente de segurança.
- **Análise evolutiva:** hot spots de complexidade/custo, Cockpit de Descomissionamento (código morto), ABAP2CodeCharta, Teamscale.
- "A ferramenta não conserta um processo que não existe": defina regras antes de escolher o versionamento.

## 🔗 Relacionados
- [ABAP Test Cockpit](/glossario/abap-test-cockpit)
- [abapGit e gCTS](/glossario/abapgit-e-gcts)
- [Clean ABAP](/glossario/clean-abap)
- [SAP Cloud ALM](/glossario/sap-cloud-alm)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
