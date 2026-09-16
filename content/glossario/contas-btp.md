---
title: "Contas BTP"
description: "Hierarquia de governança do BTP: Global Account (contrato e pool de direitos) → Directories (pastas lógicas) → Subaccounts (unidade técnica por região e ambiente), com entitlements, quotas e labels."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `Global Account` · `Directory` · `Subaccount` · `Subconta` · `Entitlements` · `Quotas` · `Labels BTP` · `BTP Cockpit` · `Member Management` · `Billing BTP`

> **Definição**
> Hierarquia de governança do BTP: Global Account (contrato e pool de direitos) → Directories (pastas lógicas) → Subaccounts (unidade técnica por região e ambiente), com entitlements, quotas e labels.
{.is-info}

| Nível | Papel |
|---|---|
| **Global Account** | Relação comercial com a SAP (contrato, fatura, e-mail de boas-vindas); agrega todos os entitlements — "banco de recursos central" |
| **Directory** | "Pastas" para agrupar subcontas por geografia (EMEA, LATAM), unidade de negócio ou projeto; entitlements e usuários em massa; roles *Directory Administrator/Viewer* |
| **Subaccount** | Unidade técnica isolada: região + ambiente (CF, Kyma, ABAP) + apps, serviços e subscriptions — tipicamente uma por estágio (DEV, QAS, PRD) |

- **Entitlements (duas etapas):** a Global Account **compra** o pool (ex.: 100 unidades HANA Cloud) e o administrador **atribui** porções a directories/subaccounts.
- **Quotas:** teto numérico de consumo na subconta (ex.: 64 GB de memória CF; ABAP compute unit = 16 GB) — evita que um bug em DEV exploda a fatura.
- **Membros:** *Global Account Administrator* → *Directory Administrator* → *Subaccount Administrator* → *Cloud Foundry Space Developer* (também membro do space). Menor privilégio via role collections.
- **Nomenclatura:** `<empresa>-<bu/projeto>-<paisagem>-<região>` → `acme-financas-dev-eu10`, `acme-logistica-prd-br10`.
- **Labels:** pares chave-valor (ex.: `Cost Object: 000001134789`, `Landscape: Production`) para filtrar no cockpit e em relatórios.
- **Billing:** modelo de consumo por métrica (GB de memória no CF, capacity units no Kyma); *Usage Analytics* e *Consumption Monitoring* no BTP Cockpit filtráveis por directory, subaccount ou label.
- A região da subconta não precisa coincidir com a localização do time.

## 🔗 Relacionados
- [SAP BTP](/glossario/sap-btp)
- [Ambientes BTP](/glossario/ambientes-btp)
- [Segurança BTP](/glossario/seguranca-btp)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
