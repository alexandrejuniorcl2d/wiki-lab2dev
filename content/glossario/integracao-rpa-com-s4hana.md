---
title: "Integração RPA com S4HANA"
description: "Integração segura do SAP Build Process Automation com o S/4HANA priorizando APIs OData: communication user/system/arrangement no Cloud, Cloud Connector no on-premise, Destinations com sap.processautomation.enabled, dependências de API no Cloud Studi…"
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `Communication User` · `Communication System` · `SAP_COM_0086` · `Maintain Communication Users` · `sap.processautomation.enabled` · `API Dependency RPA` · `API_PURCHASEREQ_PROCESS_SRV` · `Service User RPA` · `API-First RPA`

> **Definição**
> Integração segura do SAP Build Process Automation com o S/4HANA priorizando APIs OData: communication user/system/arrangement no Cloud, Cloud Connector no on-premise, Destinations com sap.processautomation.enabled, dependências de API no Cloud Studio, menor privilégio, monitoramento, \$batch e erros HTTP.
{.is-info}

| UI automation (GUI/Fiori) | **API (OData)** — recomendado |
|---|---|
| Protótipo rápido, legados sem API | Robusta (contrato estável), rápida, respostas estruturadas, escalável |
| Frágil, lenta, instável com pop-ups, só vê o que está na tela | Configuração inicial maior |

| S/4HANA Cloud (public) | S/4HANA on-premise / private cloud |
|---|---|
| Só APIs publicadas no [SAP Business Accelerator Hub](/glossario/sap-business-accelerator-hub) | Acesso completo ao backend, via [SAP Cloud Connector](/glossario/sap-cloud-connector) |
| **Communication User** (técnico, inbound) | **Service User** (técnico, sem diálogo) |
| Apps *Communication Management* | `SU01`, `SICF`, Gateway |

**S/4HANA Cloud passo a passo:**
1. App **Maintain Communication Users** → novo usuário (ex.: `RPA_USER_PROCUREMENT`), usuário e senha (exibida uma vez); ainda sem permissões.
2. App **Communication Systems** → sistema `SAP_BTP_BUILD` com o communication user em *inbound*.
3. App **Communication Arrangements** → cenário (ex.: **SAP_COM_0086**, requisições de compra) + sistema → gera a *Service URL* OData.
4. No Business Accelerator Hub: produto S/4HANA Cloud, tipo API OData V2/V4, busca por termo de negócio → confira o **communication scenario** e as entidades (ex.: `A_PurchaseRequisitionHeader`). Sem cenário no Hub = API não liberada, sem suporte em produção.

**On-premise:** Cloud Connector com backend = host/porta do Gateway, host virtual (ex.: `s4onprem.internal`) e **só** os recursos necessários (ex.: `/sap/opu/odata/sap/API_PURCHASEREQ_PROCESS_SRV`).

**Autenticação no destination:** Basic (só dev/teste) × **OAuth2ClientCredentials** (padrão produtivo).

**Destination:** alias central (URL, proxy type, auth) — sem hard-code; propriedade adicional **`sap.processautomation.enabled = true`** para aparecer no SAP Build. Ver [Destination Service](/glossario/destination-service).

**Consumir no Cloud Studio:** projeto > *Dependencies* > **API Dependency** → escolher o destination → importa `$metadata` → gera atividades tipadas *Get/Create/Update/Delete Entity*.

**Menor privilégio:** cenários específicos (evite genéricos como `SAP_CORE_BC_COM`); on-premise com `S_SERVICE` só para o serviço e objetos necessários; Cloud Connector sem expor `/sap/opu/odata/*`; credenciais só no destination.

**Monitoramento:** Factory *Monitoring > Jobs* ("chamada ao destination falhou com 500") → timestamp → **`/IWFND/ERROR_LOG`** no S/4HANA (causa raiz, dumps em `ST22`).

**Volume:** use **OData `$batch`** (várias operações num POST) em vez de 100 chamadas em loop, se a API suportar.

**Erros HTTP:**
| Código | Significado | Causas |
|---|---|---|
| **401** | Credenciais inválidas | Senha errada no destination, expirada, usuário bloqueado (`SU01`) |
| **403** | Autenticado sem permissão | Role sem `S_SERVICE`/objetos, serviço inativo (`/IWFND/MAINT_SERVICE`), arrangement errado, restrição no Cloud Connector |
| **500** | Erro no backend | Dump ABAP (`ST22`), lógica da API, dados inválidos — veja `/IWFND/ERROR_LOG` |

## 🔗 Relacionados
- [SAP RPA](/glossario/sap-rpa)
- [Destination Service](/glossario/destination-service)
- [SAP Cloud Connector](/glossario/sap-cloud-connector)
- [SAP Business Accelerator Hub](/glossario/sap-business-accelerator-hub)
- [Automação SAP GUI RPA](/glossario/automacao-sap-gui-rpa)
- [Bots Best Practice S4HANA](/glossario/bots-best-practice-s4hana)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
