---
title: "IAS e IPS"
description: "IAS é o provedor de identidade central (SSO, MFA); IPS automatiza o provisionamento de usuários entre sistemas (ex.: SuccessFactors → S/4HANA/BTP)."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `IAS` · `IPS` · `SAP Identity Authentication Service` · `SAP Identity Provisioning Service` · `SAP Cloud Identity Services` · `SSO` · `Single Sign-On` · `MFA`

> **Definição**
> IAS é o provedor de identidade central (SSO, MFA); IPS automatiza o provisionamento de usuários entre sistemas (ex.: SuccessFactors → S/4HANA/BTP).
{.is-info}

- **IAS (Identity Authentication):** login único (SSO) em S/4HANA, BTP, SuccessFactors, Ariba; políticas de autenticação (senha, MFA, certificados).
- **IPS (Identity Provisioning):** ciclo de vida do usuário — ex.: admissão no SuccessFactors cria automaticamente o usuário no S/4HANA e BTP com permissões iniciais.
- Benefícios: segurança, fim da fadiga de senhas, menos esforço administrativo.

**Na BTP:** o IAS atua como **proxy de identidade** entre as aplicações SAP e IdPs corporativos (Azure AD, Okta), com autenticação condicional (ex.: MFA para acesso externo), branding da tela de login e propagação de identidade. Detalhes do modelo de autorização em [Segurança BTP](/glossario/seguranca-btp).

## 🔗 Relacionados
- [SAP BTP](/glossario/sap-btp)
- [Autorizações SAP](/glossario/autorizacoes-sap)

## 📚 Fontes
- Apostila - Conhecendo todos os Módulos do SAP
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
