---
title: "Níveis de Clean Core"
description: "Classificação A (APIs liberadas/ABAP Cloud) a D (sem API, proibido) do grau de conformidade de um objeto customizado com o Clean Core."
tags: ["glossario","sap-clean-core"]
---
**Também conhecido como:** `Clean Core Levels` · `Nível A` · `Nível B` · `Nível C` · `Nível D` · `Nota 3578329`

> **Definição**
> Classificação A (APIs liberadas/ABAP Cloud) a D (sem API, proibido) do grau de conformidade de um objeto customizado com o Clean Core.
{.is-info}

| Nível | Critério (DSAG) | Resultado ATC (Cloud ALM) |
|---|---|---|
| **A — Padrão ouro** | ABAP Cloud, apenas APIs **C1** liberadas e extension points liberados. Cloud-ready | Sem mensagens |
| **B — Tolerado** | Tecnologias/APIs clássicas (IDoc, ALV, BAPIs clássicas) validadas pela **nota SAP 3578329** | Prioridade 3 — info |
| **C — Risco** | Objetos internos SAP — funcionam, mas podem mudar/sumir sem aviso | Prioridade 2 — aviso |
| **D — Proibido** | Sem API, objetos não recomendados, modificações | Prioridade 1 — erro |

> **Recomendação DSAG**
> Mesmo o nível B sendo tolerado, exija **nível A** para todo novo desenvolvimento — senão você cria "legado novo" que terá de ser reescrito.
{.is-success}

## 🔗 Relacionados
- [Clean Core](/glossario/clean-core)
- [Customer Objects (Cloud ALM)](/glossario/customer-objects-cloud-alm)
- [ABAP Test Cockpit](/glossario/abap-test-cockpit)
- [API Liberada](/glossario/api-liberada)
- [Dívida Técnica](/glossario/divida-tecnica)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - SAP Customer Objects
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [Clean Core e ABAP Cloud](/glossario/temas/clean-core-e-abap-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
