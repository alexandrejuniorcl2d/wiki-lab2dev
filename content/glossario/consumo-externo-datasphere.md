---
title: "Consumo Externo Datasphere"
description: "Como abrir os dados do Datasphere para Power BI, Tableau, Excel, Python e apps: OData com OAuth 2.0 (governado) ou SQL direto via Open SQL Schema e IP Allowlist (performático), com governança de saída."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `OData Datasphere` · `OAuth Client Datasphere` · `Interactive Usage` · `Technical User OAuth` · `Power BI Datasphere` · `Tableau Datasphere` · `SAC for Office` · `SAP Analytics Cloud for Office` · `hdbcli` · `Database User Datasphere` · `Datasphere CLI`

> **Definição**
> Como abrir os dados do Datasphere para Power BI, Tableau, Excel, Python e apps: OData com OAuth 2.0 (governado) ou SQL direto via Open SQL Schema e IP Allowlist (performático), com governança de saída.
{.is-info}

**Estratégia:** potencializar, não substituir — o Datasphere é o ponto único da verdade, consumido na ferramenta que cada equipe domina.

**OData em 3 passos:** modelar a view/Analytic Model → ativar *Expose for Consumption* → criar **OAuth client** em *System > Administration > App Integration* (Purpose **Interactive Usage**, grant *Authorization Code*, Redirect URI da ferramenta; guarde client ID e secret). Para máquina-a-máquina (orquestradores como Airflow disparando **Task Chains**, **API SCIM 2.0**, APIs de transporte): purpose **Technical User**.

| Ferramenta | Opção governada | Opção performática |
|---|---|---|
| **Power BI** | Conector *Feed OData* + conta organizacional (OAuth) — respeita semântica | Conector *Banco de dados SAP HANA* com database user + IP allowlist — DirectQuery rápido, perde hierarquias/formatação |
| **Tableau** | — | Conector nativo SAP HANA, database user só-leitura do space, IP na allowlist; *live* (tempo real) ou *extract* (agendado) |
| **Excel** | **SAC for Office** (sucessor do Analysis for Office) via SAC ↔ Datasphere (*Tenant Links*) — hierarquias, moedas, cálculos e planejamento read/write | — |
| **Python / DBeaver** | — | Database user (host, porta **443**, SSL), `hdbcli`/SQLAlchemy + `pd.read_sql('SELECT * FROM "SPACE#USER"."VIEW"')` |

**Otimizando OData:** `$filter` (a mais importante), `$select`, `$top`/`$skip`, `$orderby` — empurre lógica ao servidor. Para extrações massivas e recorrentes, SQL direto costuma ser mais rápido que OData.

**Segurança:** IP Allowlist específica (gateways de BI, servidores, VPN — sem ranges amplos); database users por space com SELECT por padrão e escrita só explícita; revogue e audite.

**Governança de saída:** *System Monitor > Statement Logs* (usuário, duração, SAP HANA Peak Memory e CPU Time — filtre usuários externos) e **audit policies** por space (*System > Configuration > Audit*) para leituras e alterações.

**Trade-off da camada semântica:** SQL direto entrega dados "crus" — ótimo para operacional e data science; para self-service de negócio, prefira SAC/OData sobre o [Analytic Model](/glossario/analytic-model).

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [Analytic Model](/glossario/analytic-model)
- [Spaces Datasphere](/glossario/spaces-datasphere)
- [Segurança Datasphere](/glossario/seguranca-datasphere)
- [Datasphere para IA](/glossario/datasphere-para-ia)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
