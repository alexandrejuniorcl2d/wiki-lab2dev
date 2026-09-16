---
title: "SAP Joule"
description: "Copiloto de IA generativa da SAP integrado ao portfólio cloud, \"grounded\" em dados, processos e boas práticas SAP, que responde em linguagem natural, gera artefatos (código, modelos, dashboards) e explica conteúdo em S/4HANA, SAP Build, SAC, Datasph…"
tags: ["glossario","sap-ia"]
---
**Também conhecido como:** `Joule` · `Joule Copilot` · `Copiloto SAP` · `SAP Business AI` · `SAP Joule Copilot`

> **Definição**
> Copiloto de IA generativa da SAP integrado ao portfólio cloud, "grounded" em dados, processos e boas práticas SAP, que responde em linguagem natural, gera artefatos (código, modelos, dashboards) e explica conteúdo em S/4HANA, SAP Build, SAC, Datasphere e ABAP.
{.is-info}

> Joule não é um chatbot genérico: é fundamentado (*grounded*) nos modelos, processos e melhores práticas do universo SAP.

**Onde o Joule aparece:**
| Produto | O que faz | Nota |
|---|---|---|
| **S/4HANA / processos** | Perguntas de negócio ("por que este pedido foi bloqueado?"), sucessor do SAP Conversational AI | [Situation Handling](/glossario/situation-handling) |
| **SAP Build Code** | Gera modelo CDS, dados CSV, handlers Java/Node.js, app Fiori Elements, testes; explica e refatora código | [SAP Build Code](/glossario/sap-build-code) |
| **ABAP Cloud (ADT)** | Joule Chat, Explain, RAP Business Logic Prediction, Predictive Code Completion | [Joule no ABAP Cloud](/glossario/joule-no-abap-cloud) |
| **SAP Analytics Cloud** | Cria dashboards e medidas calculadas por comando, resume insights e rascunha e-mails | [Augmented Analytics SAC](/glossario/augmented-analytics-sac) |
| **SAP Datasphere** | Busca em linguagem natural, geração de descrições/tags do catálogo, modelagem assistida (*SAP Business AI*, pode exigir AI units) | [Datasphere para IA](/glossario/datasphere-para-ia) |
| **SAP Build Apps** | *Generate Pages Using AI* e lógica a partir de linguagem natural | [SAP Build Apps](/glossario/sap-build-apps) |

**Base técnica:** LLMs acessados pela BTP ([SAP AI Core](/glossario/sap-ai-core) / Generative AI Hub) com contexto SAP; no ABAP, modelo treinado especificamente em código ABAP corporativo.

**Privacidade (SAP):** isolamento por tenant, prompts e código efêmeros, **não** usados para treinar modelos fundamentais.

**Postura correta:** "você é o piloto, a IA é o copiloto" — a IA entrega \~80%; revise, valide e assuma a responsabilidade (ver [IA Generativa no Desenvolvimento ABAP](/glossario/ia-generativa-no-desenvolvimento-abap)). Escrever bons prompts virou competência-chave — ver [Engenharia de Prompts](/glossario/engenharia-de-prompts).

## 🔗 Relacionados
- [Joule no ABAP Cloud](/glossario/joule-no-abap-cloud)
- [IA Generativa no Desenvolvimento ABAP](/glossario/ia-generativa-no-desenvolvimento-abap)
- [SAP Build Code](/glossario/sap-build-code)
- [Augmented Analytics SAC](/glossario/augmented-analytics-sac)
- [Datasphere para IA](/glossario/datasphere-para-ia)
- [SAP AI Core](/glossario/sap-ai-core)
- [Engenharia de Prompts](/glossario/engenharia-de-prompts)

## 📚 Fontes
- Apostila - Developer Challenge ABAP e SAP Joule
- Apostila - SAP Build Low e Pro Code
- Apostila - SAP Analytics Cloud
- Apostila - SAP Datasphere (Parte 2)
- Apostila - Arquitetura do SAP BTP
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira
- Apostila - Conhecendo todos os Módulos do SAP

---
🧭 [IA, Joule e Prompts](/glossario/temas/ia-joule-e-prompts) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
