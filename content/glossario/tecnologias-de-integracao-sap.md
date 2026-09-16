---
title: "Tecnologias de Integração SAP"
description: "Protocolos de integração do SAP (IDoc, RFC, SOAP, OData/REST, eventos) e quais manter ou evitar no Clean Core."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `IDoc` · `RFC` · `SOAP` · `REST` · `Eventos` · `Event-Driven` · `Integração SAP`

> **Definição**
> Protocolos de integração do SAP (IDoc, RFC, SOAP, OData/REST, eventos) e quais manter ou evitar no Clean Core.
{.is-info}

| Protocolo | Característica | Clean Core |
|---|---|---|
| **IDoc** | Blocos de dados em lote (EDI) | Evitar em novos cenários, **mas manter para EDI de grande volume** |
| **RFC** | Chamadas síncronas de funções (legado) | Evitar |
| **SOAP** | Web services XML | Aceitável quando disponível |
| **OData / REST** | HTTP moderno; padrão para UI e APIs | ✅ Manter |
| **Eventos** | Mensageria assíncrona desacoplada | ✅ Manter |

- Conexões síncronas exigem tratamento de retentativas.
- APIs web falham com cargas diárias massivas — IDoc ainda é o caminho para EDI.
- Evite clientes HTTP manuais se OData/SOAP estiverem disponíveis.
- Antes de construir qualquer interface, pesquise no [SAP Business Accelerator Hub](/glossario/sap-business-accelerator-hub).

## 🔗 Relacionados
- [OData](/glossario/odata)
- [SAP Business Accelerator Hub](/glossario/sap-business-accelerator-hub)
- [SAP Cloud Connector](/glossario/sap-cloud-connector)
- [SAP Integration Suite](/glossario/sap-integration-suite)
- [Clean Core](/glossario/clean-core)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
