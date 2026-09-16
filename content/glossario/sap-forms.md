---
title: "SAP Forms"
description: "Visão geral das tecnologias de formulário SAP — SAPscript, Smart Forms, Interactive Forms by Adobe e S/4HANA Forms — com linha do tempo, matriz de escolha, gestão de saída e a migração do ADS on-premise para o SAP Forms Service by Adobe na BTP."
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `Formulários SAP` · `SAP Output Forms` · `Tecnologias de Formulário SAP` · `Fim do suporte SAPscript e Smart Forms 2040`

> **Definição**
> Visão geral das tecnologias de formulário SAP — SAPscript, Smart Forms, Interactive Forms by Adobe e S/4HANA Forms — com linha do tempo, matriz de escolha, gestão de saída e a migração do ADS on-premise para o SAP Forms Service by Adobe na BTP.
{.is-info}

**Linha do tempo (DSAG):**
| Ano | Tecnologia | Situação |
|---|---|---|
| 1992 | **SAPscript** (R/3) | Legado — suporte até **2040** |
| 2001 | **Smart Forms** | Legado — suporte até **2040** (notas 2791338 e 2900377) |
| 2005 | **Interactive Forms by Adobe** (SFP + LiveCycle Designer) | Padrão ouro |
| 2015 | **S/4HANA Forms** (cloud) | Padrão na nuvem |

> **Sem conversão automática**
> A SAP não converte SAPscript/Smart Forms em Adobe. Mantenha os legados, mas desenvolva **novos formulários só em Adobe**.
{.is-warning}

**Matriz de escolha:**
| Cenário | Tecnologia |
|---|---|
| ECC ou S/4HANA on-premise | [Adobe Forms](/glossario/adobe-forms) |
| S/4HANA Cloud | Adobe Forms ou S/4HANA Forms (apps de gestão de modelos) |
| Formulários legados | Manter [SAPscript e Smart Forms](/glossario/sapscript-e-smart-forms); novos só Adobe |

**Peças do ecossistema:**
- **Layout e interface:** [Adobe Forms](/glossario/adobe-forms) (XDP + contexto/XSD).
- **Motor de renderização:** [Adobe Document Services](/glossario/adobe-document-services) (on-premise Java) ou [SAP Forms Service by Adobe](/glossario/sap-forms-service-by-adobe) (BTP).
- **Disparo da saída:** [Output Management SAP](/glossario/output-management-sap) (NAST, PPF, S/4HANA Output Control com BRF+).
- **Programa de impressão:** [Programação ABAP de Formulários](/glossario/programacao-abap-de-formularios).

**Cenário do curso — GlobalTech S.A. (fictícia):** ADS on-premise no NetWeaver com hardware dedicado, patches de Java, fontes/XDC/certificados geridos à mão em `/usr/sap/<SID>/SYS/global/AdobeDocumentServices/` — risco de segurança, sem escalabilidade e downtime. Na Black Friday um update de Java quebrou uma biblioteca do ADS e parou a impressão de etiquetas: "não foi falha de hardware, foi falha de arquitetura". Solução: migrar para o SAP Forms Service by Adobe no ambiente multi-cloud.

**Valor da migração:** TCO menor (manutenção e infraestrutura zero), agilidade (novas features da SAP), mitigação de riscos (SLA, escalabilidade automática).

## 🔗 Relacionados
- [SAPscript e Smart Forms](/glossario/sapscript-e-smart-forms)
- [Adobe Forms](/glossario/adobe-forms)
- [Output Management SAP](/glossario/output-management-sap)
- [Adobe Document Services](/glossario/adobe-document-services)
- [SAP Forms Service by Adobe](/glossario/sap-forms-service-by-adobe)
- [RICEFW](/glossario/ricefw)

## 📚 Fontes
- Apostila - SAP Forms
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
