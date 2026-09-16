---
title: "Extensibilidade Side-by-Side"
description: "Aplicações que rodam fora do S/4HANA (na SAP BTP) e se integram ao core por APIs públicas — zero impacto no código do ERP."
tags: ["glossario","sap-clean-core"]
---
**Também conhecido como:** `Side-by-Side` · `Off-Stack` · `Extensibilidade na BTP` · `Side-by-Side Extensibility`

> **Definição**
> Aplicações que rodam fora do S/4HANA (na SAP BTP) e se integram ao core por APIs públicas — zero impacto no código do ERP.
{.is-info}

**Quando usar:** outras tecnologias (Java, Node.js, Python), UIs para públicos externos, ciclo de vida desacoplado, serviços de plataforma (IA, IoT, Integration Suite).

Opções: pro-code com [CAP](/glossario/sap-cap)/SAP Build Code; low-code com SAP Build Apps e Process Automation; ABAP Cloud na BTP (Steampunk).

Analogia: *side-by-side* é "construir um anexo no terreno ao lado".

**Decisões críticas (DSAG):** CAP (Java/JS, exige Git) × RAP (ABAP Cloud)? Estritamente acoplado (on-stack) × frouxamente acoplado (BTP)? Faça inventário das apps mais usadas antes da primeira linha de código.

**Na prática (apostila BTP, módulo 7):**
- **S/4HANA** continua sistema de registro (source of truth) e expõe **APIs e eventos**; **BTP** hospeda a lógica (microserviços, funções) e guarda só os dados necessários à extensão.
- **Blocos:** [SAP Event Mesh](/glossario/sap-event-mesh) (eventos) · APIs OData/SOAP/RFC do catálogo · **Kyma serverless** (ex.: função disparada por `BusinessPartnerCreated` que busca o CEP numa API externa e atualiza o BP) · apps Fiori no HTML5 repository via AppRouter aparecendo como tiles no Launchpad do S/4HANA · **SAP Build Apps** para MVPs low-code.
- **Migração de código legado:** ATC (inclusive remoto a partir do BTP) + **Custom Code Migration app** (via Cloud Connector) classificam o código em manter, refatorar (side-by-side) ou aposentar.
- **Vantagens:** escalabilidade independente do ERP, agilidade (Java/Node.js/Python, CI/CD), segurança (XSUAA, APIs), resiliência (AZs, DR).
- **Desafios e mitigação:** latência (APIs granulares, eventos, subconta na mesma região do ERP) e consistência (S/4HANA como fonte única, consistência eventual, compensação/SAGA, retentativas).
- **Cenário:** app mobile de aprovação de despesas — evento `ExpenseReportSubmitted` → função Kyma envia push → backend CAP consome OData do S/4HANA → UI (Build Apps ou Fiori) via AppRouter.

## 🔗 Relacionados
- [SAP BTP](/glossario/sap-btp)
- [SAP CAP](/glossario/sap-cap)
- [SAP Build](/glossario/sap-build)
- [Developer Extensibility](/glossario/developer-extensibility)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - Conhecendo todos os Módulos do SAP
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira
- Apostila - Arquitetura do SAP BTP

---
🧭 [Clean Core e ABAP Cloud](/glossario/temas/clean-core-e-abap-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
