---
title: "SAP Integration Suite"
description: "iPaaS estratégico da SAP no BTP (sucessor do PI/PO) para integrações A2A, B2B, B2G, APIs e eventos: Cloud Integration (iFlows), API Management, Open Connectors, Integration Advisor e TPM."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `Integration Suite` · `CPI` · `SAP Cloud Integration` · `Cloud Integration` · `iFlow` · `Integration Flow` · `API Management` · `Open Connectors` · `Integration Advisor` · `MIG` · `MAG` · `Trading Partner Management` · `TPM` · `PI/PO` · `SAP Process Orchestration` · `Groovy Script` · `XSLT`

> **Definição**
> iPaaS estratégico da SAP no BTP (sucessor do PI/PO) para integrações A2A, B2B, B2G, APIs e eventos: Cloud Integration (iFlows), API Management, Open Connectors, Integration Advisor e TPM.
{.is-info}

**Componentes:**
| Componente | Função |
|---|---|
| **Cloud Integration (CI/CPI)** | Motor de mensagens: **iFlows** gráficos (sender → processamento/roteamento/transformação → receiver); stateful ou stateless; QoS *Exactly Once* e *Exactly Once In Order* |
| **Adaptadores** | SOAP, OData/HTTP, SFTP, JDBC, IDoc, RFC…; ADK para adaptadores customizados |
| **API Management** | Ciclo de vida de APIs e **gateway** central: segurança (OAuth 2.0, API keys, threat protection), **throttling**, analytics |
| **Open Connectors** | 170+ conectores SaaS não-SAP com autenticação e dados normalizados em APIs REST canônicas |
| **Integration Advisor** | IA/ML para B2B (EDIFACT, ANSI X12): **MIGs** (guias de implementação de mensagem) e **MAGs** (propostas de mapeamento — até 60% menos esforço) |
| **Trading Partner Management (TPM)** | Perfis e acordos B2B com parceiros (EDI 850 pedido, 855 confirmação, 810 fatura, 856 aviso de expedição) |
| **Monitoramento** | Status de mensagens ponta a ponta, logs, payloads (com autorização), alertas |

- **Mapeamentos:** gráfico, XSLT ou Groovy script.
- **Segurança:** TLS moderno (sem TLS ≤ 1.1), autenticação por certificado (mTLS), OAuth 2.0 ou basic; **keystore** e **security material** separados da lógica do iFlow.
- **Business Accelerator Hub:** pacotes de integração prontos (ex.: S/4HANA ↔ SuccessFactors, SAP ↔ Salesforce) — descubra, copie, configure.
- **Migração do PI/PO:** Migration Assessment (estima esforço) + Migration Tool (converte ICOs/mapeamentos em iFlows); estratégia lift-and-shift ou reavaliar/redesenhar com conteúdo padrão.
- **No Brasil:** CPI como middleware para SEFAZ/NF-e, bancos, e-commerce, Ariba, SuccessFactors.
- **Cenário:** webhook Shopify (Open Connector) → iFlow → mapeamento JSON → API OData *Sales Order (A2X)* do S/4HANA Cloud, protegida por API Management e monitorada.

## 🔗 Relacionados
- [Tecnologias de Integração SAP](/glossario/tecnologias-de-integracao-sap)
- [SAP Business Accelerator Hub](/glossario/sap-business-accelerator-hub)
- [SAP Event Mesh](/glossario/sap-event-mesh)
- [OData](/glossario/odata)
- [NF-e](/glossario/nf-e)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira
- Apostila - Conhecendo todos os Módulos do SAP

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
