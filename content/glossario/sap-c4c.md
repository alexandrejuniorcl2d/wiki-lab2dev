---
title: "SAP C4C"
description: "CRM em nuvem da SAP (Sales/Service Cloud) cuja API OData v2 c4codataapi expõe 40+ objetos de negócio e 1.000+ coleções para integrações."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `C4C` · `SAP Cloud for Customer` · `SAP Sales Cloud` · `SAP Service Cloud` · `c4codataapi`

> **Definição**
> CRM em nuvem da SAP (Sales/Service Cloud) cuja API OData v2 c4codataapi expõe 40+ objetos de negócio e 1.000+ coleções para integrações.
{.is-info}

- **Endpoint:** `https://<tenant>.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi` — apesar do `/v1/` no caminho, implementa a especificação **OData v2** (o `/v1/` é legado de nomenclatura).
- **API v1 × v2:** a v1 (serviços por objeto, ex.: `SalesLead`) está **depreciada** (API Strategy, fev/2020) — só correções. Toda nova integração e migração deve usar `c4codataapi` (ex.: `LeadCollection`).
- **Limitações importantes:** restrições de campo/ação da UI, adaptações KUT e UI switches **não** são honradas pela API; a autorização por instância (RBAM) é respeitada. A aplicação cliente deve reimplementar regras de UI e garantir qualidade dos dados.
- **Ferramentas:** Postman (padrão para REST/OData) e SOAPUI; OData Service Explorer; Web Service Message Monitoring.

## 🔗 Relacionados
- [OData](/glossario/odata)
- [CX](/glossario/cx)
- [Entidades C4C de Clientes](/glossario/entidades-c4c-de-clientes)
- [Entidades C4C de Vendas](/glossario/entidades-c4c-de-vendas)
- [Entidades C4C de Serviço](/glossario/entidades-c4c-de-servico)
- [Recursos Avançados da API C4C](/glossario/recursos-avancados-da-api-c4c)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
