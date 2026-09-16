---
title: "Clean Core"
description: "Disciplina de arquitetura que mantém o S/4HANA próximo do padrão: extensões isoladas via APIs liberadas para que upgrades nunca quebrem customizações."
tags: ["glossario","sap-clean-core"]
---
**Também conhecido como:** `Núcleo Limpo` · `Core Limpo` · `Keep the Core Clean` · `Make the Core Clean`

> **Definição**
> Disciplina de arquitetura que mantém o S/4HANA próximo do padrão: extensões isoladas via APIs liberadas para que upgrades nunca quebrem customizações.
{.is-info}

> **A regra**
> Upgrades de sistema não podem quebrar extensões customizadas; o núcleo é intocável. "Clean Core não é produto, é disciplina de arquitetura."

- **Keep the core clean** — novos desenvolvimentos nascem com separação rígida e uso exclusivo de APIs.
- **Make the core clean** — transformação iterativa de sistemas legados para reduzir dívida técnica.

**Princípios:**
- Código customizado **jamais** altera objetos SAP; comunicação só por [APIs liberadas](/glossario/api-liberada).
- Tecnologias legadas (RFC direta, SAP GUI, IDocs) não devem ser usadas em novos projetos — ex.: em vez do IDoc `MATMAS`, use a *Product Master API*.
- Ferramentas: [ABAP Cloud](/glossario/abap-cloud) (developer e key user) ou [SAP BTP](/glossario/sap-btp).

**Aplicabilidade por modelo de implantação** — ver [Modelos de Implantação S4HANA](/glossario/modelos-de-implantacao-s4hana):
| Public Cloud (GROW) | Private Cloud (RISE) | On-Premise |
|---|---|---|
| Imposição total — "clean by default" | Alvo recomendado; modificações toleradas mas atritam em upgrades | Escolha opcional, depende de governança interna |

**Hierarquia de extensibilidade (regra de decisão):**
1. Adote o standard ([Standard First](/glossario/standard-first))
2. [Extensibilidade Key User](/glossario/extensibilidade-key-user) (Fiori, in-app)
3. [Developer Extensibility](/glossario/developer-extensibility) (on-stack, RAP/ABAP Cloud)
4. [Extensibilidade Side-by-Side](/glossario/extensibilidade-side-by-side) (off-stack, BTP)
5. Extensibilidade clássica (legado)
6. [Modificação](/glossario/modificacao-do-standard) — último recurso

**Valor:** upgrades como "não-eventos", menor TCO, inovação contínua, agilidade para o negócio. Venda como **estratégia de negócio**, não refatoração técnica.

**O preço (DSAG é honesta):** licenças BTP, requalificação massiva (ABAP full-stack, Basis), consultoria, **manutenção dupla** (RICEFW antigos + novas tecnologias), Compatibility Views sem otimização, add-ons de parceiros não compatíveis (SAP não certifica mais os que violam).

> **Clean ABAP ≠ Clean Core**
> [Clean ABAP](/glossario/clean-abap) é **como** você escreve (legibilidade). Clean Core é **onde** você escreve (fronteiras de arquitetura). Código lindo que altera tabela standard ou chama RFC não documentada continua tóxico.
{.is-warning}

Métricas: [Customer Objects (Cloud ALM)](/glossario/customer-objects-cloud-alm) e [Dívida Técnica](/glossario/divida-tecnica).

## 🔗 Relacionados
- [Níveis de Clean Core](/glossario/niveis-de-clean-core)
- [ABAP Cloud](/glossario/abap-cloud)
- [API Liberada](/glossario/api-liberada)
- [Extensibilidade Key User](/glossario/extensibilidade-key-user)
- [Developer Extensibility](/glossario/developer-extensibility)
- [Extensibilidade Side-by-Side](/glossario/extensibilidade-side-by-side)
- [Modificação do Standard](/glossario/modificacao-do-standard)
- [Standard First](/glossario/standard-first)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira
- Apostila - Conhecendo todos os Módulos do SAP
- Apostila - SAP Customer Objects
- Apostila - Padrão Wrapper para BAPIs

---
🧭 [Clean Core e ABAP Cloud](/glossario/temas/clean-core-e-abap-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
