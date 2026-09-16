---
title: "Autenticação OData"
description: "Três formas de autenticar em APIs OData SAP: Basic (usuário/senha em Base64, só testes), certificado X.509 (produção server-to-server) e OAuth 2.0/SAML (tokens Bearer via IdP)."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `Basic Auth` · `Basic Authentication` · `Certificado X.509` · `OAuth 2.0` · `SAML` · `Bearer Token` · `Usuário de Comunicação`

> **Definição**
> Três formas de autenticar em APIs OData SAP: Basic (usuário/senha em Base64, só testes), certificado X.509 (produção server-to-server) e OAuth 2.0/SAML (tokens Bearer via IdP).
{.is-info}

| Método | Como | Uso |
|---|---|---|
| **Basic** | `Authorization: Basic base64(user:password)` | Desenvolvimento/testes — baixa segurança |
| **X.509** | Certificado cliente validado no handshake TLS contra a *Certificate Trust List*; mapeado a um usuário de comunicação | Produção, middleware (ex.: Integration Suite) — sem senhas |
| **OAuth 2.0 / SAML** | Token do Identity Provider: `Authorization: Bearer <token>` | SSO, app agindo em nome do usuário |

**Menor privilégio:** um usuário de comunicação dedicado por sistema externo, com role restrita — nunca um usuário "admin para garantir que funcione".

## 🔗 Relacionados
- [CSRF Token](/glossario/csrf-token)
- [IAS e IPS](/glossario/ias-e-ips)
- [SAP Cloud Connector](/glossario/sap-cloud-connector)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
