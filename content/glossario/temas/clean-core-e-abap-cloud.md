---
title: "Clean Core e ABAP Cloud (tema)"
description: "Diretrizes DSAG, ABAP Cloud, APIs liberadas, níveis de extensibilidade e boas práticas."
tags: ["glossario","sap-clean-core"]
---
> **Sobre esta área**
> Diretrizes DSAG, ABAP Cloud, APIs liberadas, níveis de extensibilidade e boas práticas.
> Tag: [#sap-clean-core](/t/sap-clean-core) · 14 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira — Dias 6 e 7: SD/O2C, pricing, NF-e, CX; tecnologia (Clean Core, BTP, RAP, Fiori, SAC, Joule, Activate) e plano de carreira.
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1) — Guia DSAG de desenvolvimento ABAP 2026 — parte 1.
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2) — Guia DSAG de desenvolvimento ABAP 2026 — parte 2.
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP — Boas práticas de desenvolvimento ABAP segundo a DSAG.
- Apostila - SAP Customer Objects — Objetos de cliente (Z/Y), namespaces e convenções.
- Apostila - Padrão Wrapper para BAPIs — Como encapsular BAPIs não liberadas para uso em ABAP Cloud/RAP.

## 📖 Termos

### Conceitos
- [ABAP Cloud](/glossario/abap-cloud) *(ABAP Cloud Development Model, Cloud-Ready ABAP, ABAP for Cloud Development)* — Modelo de desenvolvimento ABAP restrito a APIs liberadas e tecnologias cloud-ready (CDS, RAP), obrigatório na Public Cloud e recomendado em todas as edições.
- [API Liberada](/glossario/api-liberada) *(Released API, Released Object, Release Contract)* — Objeto SAP (CDS, classe, BAdI, API) com contrato de estabilidade: C0 extensão, C1 uso interno no sistema (ABAP Cloud), C2 uso remoto.
- [Clean Core](/glossario/clean-core) *(Núcleo Limpo, Core Limpo, Keep the Core Clean)* — Disciplina de arquitetura que mantém o S/4HANA próximo do padrão: extensões isoladas via APIs liberadas para que upgrades nunca quebrem customizações.
- [Modelos de Implantação S4HANA](/glossario/modelos-de-implantacao-s4hana) *(GROW with SAP, GROW, On-Premise)* — Public Cloud (GROW, restrição máxima, só ABAP Cloud), Private Cloud (RISE, transição monitorada) e On-Premise (liberdade total e todo o ônus).
- [Níveis de Clean Core](/glossario/niveis-de-clean-core) *(Clean Core Levels, Nível A, Nível B)* — Classificação A (APIs liberadas/ABAP Cloud) a D (sem API, proibido) do grau de conformidade de um objeto customizado com o Clean Core.

### Extensibilidade
- [Developer Extensibility](/glossario/developer-extensibility) *(On-Stack Extensibility, Extensibilidade On-Stack, On-Stack Developer Extensibility)* — Desenvolvimento pro-code em ABAP Cloud dentro do próprio S/4HANA (on-stack), usando RAP, CDS e somente APIs liberadas.
- [Extensibilidade Key User](/glossario/extensibilidade-key-user) *(Key User Extensibility, In-App Extensibility, Extensibilidade In-App)* — Extensões low-code/no-code feitas pelo key user no Fiori (campos, lógica, UI, CDS e BOs customizados), estáveis a upgrades.
- [Extensibilidade Side-by-Side](/glossario/extensibilidade-side-by-side) *(Side-by-Side, Off-Stack, Extensibilidade na BTP)* — Aplicações que rodam fora do S/4HANA (na SAP BTP) e se integram ao core por APIs públicas — zero impacto no código do ERP.

### Governança e Métricas
- [ABAP Test Cockpit](/glossario/abap-test-cockpit) *(ATC, Code Inspector, SCI)* — Ferramenta de verificação estática do código ABAP (performance, segurança, Clean Core, estilo) — deve ser etapa bloqueante no transporte.
- [Customer Objects Cloud ALM](/glossario/customer-objects-cloud-alm) *(Customer Objects, Objetos do Cliente, Painel de Objetos do Cliente)* — Painel do SAP Cloud ALM que faz um "raio-X" dos objetos Z, classificando cada um em níveis de Clean Core e medindo a dívida técnica.
- [Dívida Técnica](/glossario/divida-tecnica) *(Technical Debt, Technical Debt Score, Technical Debt Share)* — Pontuação de risco de um objeto customizado calculada pelas constatações do ATC: erro = 10, aviso = 5, info = 1.
- [Estratégia de Código Próprio](/glossario/estrategia-de-codigo-proprio) *(Make or Buy, Core Domain, Funil de Prevenção de Código)* — Decisão explícita de onde investir em código Z (só no que dá vantagem competitiva) e governança organizacional para sustentá-lo.

### Técnicas
- [Modificação do Standard](/glossario/modificacao-do-standard) *(Modificação, SPAU, Chave de Desenvolvedor)* — Alteração direta de código SAP — último recurso; antes esgote ABAP Cloud/BTP, BAdIs e enhancements. Nunca copie código SAP.
- [Padrão Wrapper](/glossario/padrao-wrapper) *(Wrapper, Wrapper de BAPI, Classe Wrapper)* — Classe ABAP que encapsula uma BAPI/objeto não liberado e é liberada como API local para consumo seguro em ABAP Cloud/RAP.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
