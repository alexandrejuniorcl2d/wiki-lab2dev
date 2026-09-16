---
title: "Destination Service"
description: "Serviço do BTP que guarda URL, tipo de proxy e autenticação de sistemas remotos para que apps chamem destinos por nome — \"o contato salvo na agenda\"."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `Destination` · `Destinations BTP` · `Proxy Type` · `Internet` · `Location ID` · `BTP Destination`

> **Definição**
> Serviço do BTP que guarda URL, tipo de proxy e autenticação de sistemas remotos para que apps chamem destinos por nome — "o contato salvo na agenda".
{.is-info}

- A app referencia `myS4System`; o destination guarda **URL** (virtual, do Cloud Connector), **Proxy Type** e **Authentication**.
- **Proxy Type `OnPremise`:** rota pelo túnel do Cloud Connector até o sistema interno. **`Internet`:** saída pelo proxy padrão para APIs públicas (SuccessFactors, terceiros).
- **Autenticação:** `BasicAuthentication` (usuário técnico — simples, perde o contexto do usuário) · **`PrincipalPropagation`** (recomendado para UI; SSO até o backend) · `ClientCertificateAuthentication` (X.509 server-to-server) · OAuth2 (SAMLBearer, ClientCredentials…).

## 🔗 Relacionados
- [SAP Cloud Connector](/glossario/sap-cloud-connector)
- [Segurança BTP](/glossario/seguranca-btp)
- [SAP CAP](/glossario/sap-cap)
- [Deploy de Apps Fiori](/glossario/deploy-de-apps-fiori)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP
- Apostila - Fiori e SAPUI5

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
