---
title: "SAP Forms Service by Adobe"
description: "Serviço gerenciado da BTP baseado no ADS para renderizar e manipular formulários Adobe via REST API ou a partir de sistemas ABAP, com Configuration Tool, Template Store, OAuth 2.0 (XSUAA), planos free/standard e cobrança por requisição."
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `Forms Service by Adobe` · `SAP Forms Service` · `Forms Service by Adobe API` · `Configuration Tool Forms` · `ADSAdmin` · `ADSCaller` · `ADS.Caller` · `TemplateStore.Caller` · `TemplateStoreAdmin` · `BC-SRV-FP-CF` · `Form Requests`

> **Definição**
> Serviço gerenciado da BTP baseado no ADS para renderizar e manipular formulários Adobe via REST API ou a partir de sistemas ABAP, com Configuration Tool, Template Store, OAuth 2.0 (XSUAA), planos free/standard e cobrança por requisição.
{.is-info}

> "O SAP Forms service é um serviço de nuvem baseado no Adobe Document Services (ADS). Ele é hospedado na SAP BTP."

**Neo × Multi-Cloud:**
| Característica | Neo | Multi-Cloud (Cloud Foundry/Kyma) |
|---|---|---|
| Estratégia SAP | Legado com fim de vida | Estratégico |
| Infraestrutura | Data centers SAP | AWS, Azure, GCP |
| ABAP on-premise | Via Cloud Connector (endpoint SOAP) | S/4HANA ≥ 1809 via Cloud Connector |
| ABAP Environment na BTP | — | Nativo (communication arrangement) |
| **WebDynpro Java** | ✅ | ❌ **não suportado** (exige refatoração) |
| REST API | Básica, autenticação básica | Robusta, **OAuth 2.0 (XSUAA)** |
| IdP | SAP ID Service | IdP customizado |
| Paralelização de jobs, assinatura HSM/MS-CAPI | ❌ | ❌ |

**Árvore de decisão:** novo projeto greenfield → Multi-Cloud · migração com WebDynpro Java → manter Neo e planejar refatoração · backend S/4HANA ≥ 1809 ou NW ≥ 7.50 SP24 → Multi-Cloud · senão → upgrade do backend ou manter on-premise.

**Estrutura na BTP:** global account (contrato, entitlements) → subaccount (região, ex.: AWS São Paulo; Cloud Foundry) → space/namespace — ver [Contas BTP](/glossario/contas-btp).

**Provisionamento (lab):**
1. Service Marketplace → *Forms Service by Adobe* → **subscription** (habilita as UIs: Configuration Tool e Template Store).
2. Service instance: **Forms Service by Adobe API** (consumo REST) ou **Forms Service by Adobe** (conexão ABAP).
3. *Create Service Key* → `clientid`, `clientsecret`, `url` (UAA) e `uri` do serviço.

| Plano | Uso | Limites |
|---|---|---|
| **free** | Testes/PoC | 100 requisições/mês, marca d'água, 6 meses (instância pode ser deletada), sem SLA |
| **standard** | Produção | Sem marca d'água, quotas maiores, SLA |

**Cobrança por requisição:** conta toda chamada **bem-sucedida** que gera ou manipula documento (render, assinatura, anexo); **não** contam erros nem chamadas à API do Template Store. CPEA/Pay-As-You-Go ou subscription por bloco (ex.: 100.000/ano). Regiões (ex.): AWS Frankfurt, Virginia, São Paulo, Tóquio, Sydney, Singapura, Montreal; Azure Holanda e Suíça.

**Segurança:**
- **OAuth 2.0 client credentials:** app envia `clientid` + `clientsecret` a `https://<url>/oauth/token` (`grant_type=client_credentials`, Basic auth, `x-www-form-urlencoded`) → recebe access token com validade → chama o serviço com `Authorization: Bearer <token>`. ⚠️ Trate a service key como senha.
- **Roles:** **ADSAdmin** (humanos: Configuration Tool — fontes, XDC/XCI, credenciais P12, certificados, CRLs, recycle bin, logs; alto privilégio) × **ADSCaller** (aplicações: token com scopes `ADS.Caller` e `TemplateStore.Caller` — renderizar, assinar com credencial pré-configurada). *TemplateStoreAdmin* para gerir templates.
- **mTLS:** autenticação por certificado X.509 (subdomínio `.cert`) para requisitos de compliance e mitigação de man-in-the-middle.
- **Audit logs:** upload/remoção de credenciais, certificados e fontes, senhas e aliases, exclusão de forms/templates/schemas e "Virus Found. File Upload has been rejected".
- **Rotação de segredos:** nova service key → atualizar app → testar → excluir a antiga (automatize em CI/CD).
- **401 × 403:** 401 = "não sei quem você é" (token ausente, inválido ou expirado); 403 = "sei quem é, mas não pode" (faltam scopes como `ADS.Caller`).

**Operação:** *Used Quotas* na Configuration Tool e **alertas** em Global Account > Usage Analytics (métrica *Form Requests*, ex.: 80%); limpeza de templates de teste (Template Store até 1 GB), `error.pdf` em Support Files (até 10 MB, podem ter dados sensíveis), versões antigas, Recycle Bin (itens somem após **14 dias**); cache — ver [Troubleshooting Forms Service](/glossario/troubleshooting-forms-service).

**Migração Neo → Multi-Cloud:** endpoints REST iguais, mas mude o base endpoint (credenciais em `VCAP_SERVICES`), adapte a autenticação ao XSUAA com refresh de token, e transfira templates do Template Store por download/upload manual.

**Checklist de go-live (10 pontos):** plano standard · fontes/XDC/XCI/job profiles migrados e testados em QAS · role collections (ADSAdmin, TemplateStoreAdmin) · conectividade produtiva testada · ambiente limpo · teste de carga realista · alertas de quota · UAT com sign-off · plano de rollback · documentação e handover.

**Roadmap:** SAP Road Map Explorer, Discovery Center (regiões e preços) e Release Notes no Help Portal.

## 🔗 Relacionados
- [Adobe Document Services](/glossario/adobe-document-services)
- [API REST SAP Forms Service](/glossario/api-rest-sap-forms-service)
- [Template Store Forms](/glossario/template-store-forms)
- [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service)
- [Troubleshooting Forms Service](/glossario/troubleshooting-forms-service)
- [SAP BTP](/glossario/sap-btp)

## 📚 Fontes
- Apostila - SAP Forms

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
