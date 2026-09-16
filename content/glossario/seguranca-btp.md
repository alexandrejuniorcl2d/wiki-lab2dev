---
title: "Segurança BTP"
description: "Modelo de segurança do BTP: autenticação delegada a IdPs (SAP ID Service, IAS federado ao IdP corporativo), autorização OAuth 2.0 com XSUAA (scopes → roles → role collections), principal propagation, audit log e credential store."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `XSUAA` · `SAP Authorization and Trust Management Service` · `xs-security.json` · `Scope` · `Role Collection` · `Trust Configuration` · `JWT` · `OAuth 2.0 BTP` · `Shadow User` · `Principal Propagation` · `Identity Provider` · `IdP` · `SAP ID Service` · `Audit Log Service` · `Credential Store` · `Zero Trust`

> **Definição**
> Modelo de segurança do BTP: autenticação delegada a IdPs (SAP ID Service, IAS federado ao IdP corporativo), autorização OAuth 2.0 com XSUAA (scopes → roles → role collections), principal propagation, audit log e credential store.
{.is-info}

**Identity Provider (IdP)** = fonte da verdade da identidade.
- **SAP ID Service** (padrão; S-users, trial, administradores).
- **Custom IdP** corporativo (Azure AD/Entra ID, Okta) — recomendado para usuários de negócio: SSO real, MFA e políticas centralizadas.
- **SAP Cloud Identity Services – IAS** como **hub/proxy**: BTP ↔ IAS ↔ IdPs corporativos; autenticação condicional, branding da tela de login, base para principal propagation (ver [IAS e IPS](/glossario/ias-e-ips)).

**XSUAA — não é IdP:** não guarda usuários/senhas; é o **servidor OAuth 2.0** que emite/valida **JWT**, gerencia autorizações do `xs-security.json` e faz *token exchange* entre microserviços.

**Fluxo OAuth (authorization code):** usuário acessa app (AppRouter) → redireciona ao XSUAA → delega ao IdP → login → código de autorização (front-channel) → troca por access token JWT (back-channel) → `Authorization: Bearer <JWT>` na API.

**Gramática da autorização:** **Usuário → Role Collection → Roles → Scopes**
| Scope | Role | Role Collection |
|---|---|---|
| Permissão técnica granular (`$XSAPPNAME.ReadProducts`) definida pelo **desenvolvedor** no `xs-security.json`; o código verifica no JWT | Agrupamento de scopes com significado de negócio, configurado pelo **administrador** no cockpit | Agrupa roles (inclusive de apps diferentes); **único artefato atribuído a usuários/grupos** |

```json
{ "xsappname": "myapp", "tenant-mode": "dedicated",
  "scopes": [ { "name": "$XSAPPNAME.ReadProducts" }, { "name": "$XSAPPNAME.WriteOrders" } ],
  "role-templates": [ { "name": "SalesManager",
      "scope-references": [ "$XSAPPNAME.ReadProducts", "$XSAPPNAME.WriteOrders" ] } ] }
```

- **Trust configuration:** troca de metadados SAML 2.0/OIDC entre subaccount (service provider) e IdP.
- **Shadow users:** espelho (sem senha) criado no primeiro login de usuário de IdP customizado; boa prática: mapear **grupos do IdP → role collections**, não usuários individuais.
- **Principal propagation:** SSO do Fiori na nuvem até o on-premise — o JWT do usuário vira certificado X.509 de curta duração no **Cloud Connector**, e o backend mapeia para o usuário local (IAS + Cloud Connector + Destination service).
- **SAP Audit Log Service:** "quem fez o quê, quando e onde" (falhas de token, mudanças em role collections, deleção de instâncias) — logs invioláveis, via cockpit ou API para SIEM (Splunk, QRadar); SOX, LGPD.
- **SAP Credential Store:** cofre de segredos; nunca hard-code de chaves; credential types `binding-secret`/`x509` permitem rotacionar segredos por binding.
- **Menor privilégio:** scopes granulares (nada de "SuperAdmin"), grupos, subcontas separadas por estágio, rotação de credenciais, revisão periódica, backend valida o JWT em toda chamada (não confie só no AppRouter).
- **Responsabilidade compartilhada:** SAP = segurança **da** nuvem (infra, serviços, isolamento de tenants); cliente = segurança **na** nuvem (trust, usuários, apps seguras, monitorar audit log).

## 🔗 Relacionados
- [IAS e IPS](/glossario/ias-e-ips)
- [SAP Cloud Connector](/glossario/sap-cloud-connector)
- [Destination Service](/glossario/destination-service)
- [Autenticação OData](/glossario/autenticacao-odata)
- [Contas BTP](/glossario/contas-btp)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP
- Apostila - Conhecendo todos os Módulos do SAP

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
