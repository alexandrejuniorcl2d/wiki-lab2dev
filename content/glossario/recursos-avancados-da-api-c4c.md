---
title: "Recursos Avançados da API C4C"
description: "Extensibilidade (PSM, KUT), IDs amigáveis, modo de compatibilidade, transporte, change documents, serviços customizados e monitoramento na API OData do C4C."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `PSM` · `Public Solution Model` · `KUT` · `Key User Tools` · `Extension Fields` · `User-Friendly IDs` · `odata-v2-strict-json-format` · `Compatibility Mode` · `changedoclist` · `Web Service Message Monitoring` · `OData Service Explorer` · `Serviço OData Customizado`

> **Definição**
> Extensibilidade (PSM, KUT), IDs amigáveis, modo de compatibilidade, transporte, change documents, serviços customizados e monitoramento na API OData do C4C.
{.is-info}

- **PSM (Public Solution Model):** key users expõem campos standard ocultos em serviços OData standard via modo de adaptação (7 passos: Start Adaptation → tela → seção → campos → editar → adicionar → salvar). Não vale para campos PSM do Cloud Applications Studio.
- **KUT (Extension Fields):** campos customizados criados pelo key user e expostos na API (ex.: `LegacyContractID_KUT`). ⚠️ Tipagem estrita (número ≠ string), code lists exigem o **código** (`'01'`), validações de UI não são honradas.
- **User-Friendly IDs:** `/uid/v1/c4codataapi/AccountCollection('MC12345')` em vez do UUID — dispensa lookup.
- **Compatibility mode:** header `odata-v2-strict-json-format: true` congela o formato JSON (ex.: sempre `"results": [...]` em expands de cardinalidade muitos) — use em integrações críticas.
- **Transport Management:** leva serviços OData customizados entre tenants (DEV → QAS → PRD); campos PSM como dependências opcionais.
- **Change Documents API** (`/changedoclist/`): `ChangeDocumentCollection` filtrando `BusinessObject`, `ObjectUUID`, `ChangeDateTime`; retorna quem, quando, campo, de/para — auditoria e **sincronização delta**.
- **SAP Business Application Studio:** consumo dos serviços C4C via SAP System Provider para apps Fiori/extensões na BTP.
- **Standard × custom:** use o `c4codataapi` + KUT como regra; crie serviço customizado (OData Service Explorer) para objetos customizados, visões mínimas de alta performance/segurança (menor privilégio) ou function imports.
- **Monitoramento:** *Administrador > Geral > Web Service Message Monitoring* (status, erros, filtros) + **log de payload** por usuário de integração (ative só temporariamente).
- **Performance:** cuidado com campos calculados em integrações de alto volume.

## 🔗 Relacionados
- [SAP C4C](/glossario/sap-c4c)
- [Resiliência de Integrações](/glossario/resiliencia-de-integracoes)
- [Metadata OData](/glossario/metadata-odata)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
