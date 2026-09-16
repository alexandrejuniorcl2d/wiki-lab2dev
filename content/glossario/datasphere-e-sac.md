---
title: "Datasphere e SAC"
description: "Integração nativa em que o Datasphere é a camada de dados governada e o SAC a de visualização, planejamento e IA, via live connection (dados não saem do Datasphere), com hierarquias, variáveis, SSO e write-back por OData."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Live Connection Datasphere` · `Tunnel Connection` · `Direct Connection` · `Tenant Links` · `Product Switch` · `Write-back SAC Datasphere` · `Data Change Insights`

> **Definição**
> Integração nativa em que o Datasphere é a camada de dados governada e o SAC a de visualização, planejamento e IA, via live connection (dados não saem do Datasphere), com hierarquias, variáveis, SSO e write-back por OData.
{.is-info}

**Live connection:** o SAC envia a query em tempo real; só o resultado agregado volta — tempo real, segurança (dado fica na camada governada) e zero redundância.

| Tunnel connection | Direct connection |
|---|---|
| Híbrido: Datasphere consome fontes on-premise (S/4HANA, BW) ou redes privadas | Nuvem-a-nuvem com fontes públicas |
| Peça-chave: [SAP Cloud Connector](/glossario/sap-cloud-connector) | Peça-chave: **IP Allowlist** com os IPs do SAC |

**O que consumir:**
| Analytical datasets / views / Analytic Models (Data Builder) | Consumption Models (Business Builder) |
|---|---|
| Exploração ad-hoc, validação, camada semântica ainda inexistente | Padrão para analytics corporativo e self-service |
| ⚠️ Nomes técnicos (`TBL_FIN_REV_NET_AMT`) | Termos de negócio, KPIs e hierarquias centralizados |

**Recursos no SAC:**
- **Hierarquias** (nível ou pai-filho) → drill-down/up e filtro hierárquico.
- **Input parameters** → prompts antes de renderizar; filtro (`WHERE`) processado no HANA.
- **Geo Map:** dimensões geoenriquecidas (shapefiles, lat/long, conteúdo choropleth; SRID **3857**) → choropleth, bolhas, heat.
- **SAC Planning:** modelos de plano baseados em *actuals* do Datasphere; write-back robusto via **serviço OData** no Datasphere (live connection tem limites para planejamento complexo).
- **SSO:** IdP corporativo SAML 2.0 (Azure AD, SAP Cloud Identity Services) comum às duas plataformas, com MFA.
- **Smart Insights** (explica contribuidores), **Search to Insight** (linguagem natural) e **Data Change Insights** (alertas por limiar via app, mobile ou e-mail).
- Ligação entre tenants em *System > Administration > Tenant Links* (Product Switch).

**Performance:** empurre joins/agregações para o Datasphere; use Elastic Compute Nodes para cargas analíticas; Workload Management para priorizar dashboards executivos; Statement Logs para queries lentas.

**Troubleshooting de widget com erro:** mensagem no SAC → *System Monitor > Statement Logs* → modelo deployed e Data Preview OK? → conexão/Cloud Connector ativos? → permissões do usuário no space e objeto → para casos profundos, **Database Analysis User**.

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [Analytic Model](/glossario/analytic-model)
- [Business Builder](/glossario/business-builder)
- [Performance Datasphere](/glossario/performance-datasphere)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
