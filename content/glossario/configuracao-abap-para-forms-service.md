---
title: "Configuração ABAP para Forms Service"
description: "Passo a passo para ligar S/4HANA/ECC ao SAP Forms Service: Cloud Connector (/sap/bc/fp, /sap/bc/fpads), destination FP_ICF_DATA_<SID> na BTP, destino HTTP ADS na SM59, certificados na STRUST, cliente OAuth na OA2C_CONFIG, porta lógica na SOAMANAGER…"
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `FP_ICF_DATA` · `ADS_AGENT` · `/sap/bc/fp` · `/sap/bc/fpads` · `SM59 ADS` · `/AdobeDocumentServicesSec/Config` · `STRUST` · `SSL Client Standard` · `OA2C_CONFIG` · `SOAMANAGER` · `CO_FP_ADS_CONNECT` · `FP_CHECK_DESTINATION_SERVICE` · `SMICM` · `SSSLERR_PEER_CERT_UNTRUSTED`

> **Definição**
> Passo a passo para ligar S/4HANA/ECC ao SAP Forms Service: Cloud Connector (/sap/bc/fp, /sap/bc/fpads), destination FP_ICF_DATA_&lt;SID&gt; na BTP, destino HTTP ADS na SM59, certificados na STRUST, cliente OAuth na OA2C_CONFIG, porta lógica na SOAMANAGER e teste FP_CHECK_DESTINATION_SERVICE.
{.is-info}

**Pré-requisitos:** S/4HANA 1809 SP8+, 1909 SP6+, 2020 SP4+, 2021+ ou NetWeaver 7.50 SP24+ (ECC); kernel com TLS 1.2+ (`SM51` > release notes); SAP_BASIS/SAP_ABA atualizados (OAuth 2.0, STRUST); serviços ICF base ativos (`SICF`, `/sap/public/bc`).

**Direção BTP → ABAP (callbacks do serviço):**
1. **[SAP Cloud Connector](/glossario/sap-cloud-connector):** *Add System Mapping* tipo **ABAP System**, host interno `s4h-erp.globaltech.local:8000` → host virtual `s4h-virtual.globaltech.com:8080`; recursos liberados **só** `/sap/bc/fp/` e `/sap/bc/fpads/` (bundling) com *Path And All Sub-Paths*.
2. **Destination na BTP** ([Destination Service](/glossario/destination-service)): nome **`FP_ICF_DATA_<SID>`**, tipo HTTP, URL = host virtual, **Proxy Type `OnPremise`**, BasicAuthentication com usuário técnico do tipo System (ex.: `ADS_AGENT`), propriedade adicional `sap-client` (senão usa `login/system_client`).
3. **Check Connection:** sucesso = rede/túnel OK (camadas 3–4); **não** valida senha nem se o path ICF está ativo.

**"Backend not reachable":** Cloud Connector offline/sem subconta · firewall interno entre SCC e o ICM · typo no host virtual/porta ou Proxy Type `Internet` em vez de `OnPremise` · recurso `/sap/bc/fp/` fora da allowlist.

**Direção ABAP → BTP:**
4. **`SM59`:** destino **`ADS`**, tipo **G** (HTTP externo), host do serviço (virtual/URL), porta 443, *path prefix* `/AdobeDocumentServicesSec/Config`; logon *sem usuário* (delegado ao OAuth), SSL ativo com *SSL Client (Standard)*, OAuth settings com perfil `ADS_OAUTH2_PROFILE`.
5. **`STRUST`:** PSE *SSL client SSL Client (Standard)* → importar a cadeia raiz (ex.: *DigiCert Global Root G2*) → *Add to Certificate List* → salvar (ícone verde) → distribuir para todos os servidores de aplicação. Sem isso: `SSSLERR_PEER_CERT_UNTRUSTED` (handshake SSL falha).
6. **`OA2C_CONFIG`:** cliente OAuth 2.0 com client ID/secret da service key, endpoints `.../oauth/authorize` e `.../oauth/token`, *client authentication* Basic, grant **Client Credentials**.
7. **`SOAMANAGER`:** porta lógica do proxy **`CO_FP_ADS_CONNECT`** com segurança OAuth 2.0 (`ADS_OAUTH2_PROFILE`), URL da `uri` da service key + `/AdobeDocumentServicesSec/Config`, protocolo SOAP *SAP Message ID*.
8. **Teste de fogo:** `SE38` → `FP_CHECK_DESTINATION_SERVICE` (destino ADS) → "The service is operating correctly. Version: …".

**Trace:** `SMICM` → *Goto > Trace Level > Set* (2 ou 3) → reexecutar → *Trace File > Display All* → procurar host da BTP, `ERROR`, `SSL`, `handshake`, `UNTRUSTED`.

**Checklist Basis da STRUST:** PSE correto (o da SM59)? · cadeia completa (raiz e intermediários)? · adicionado à lista? · salvo (ícone verde)? · distribuído a todos os app servers?

## 🔗 Relacionados
- [SAP Forms Service by Adobe](/glossario/sap-forms-service-by-adobe)
- [SAP Cloud Connector](/glossario/sap-cloud-connector)
- [Destination Service](/glossario/destination-service)
- [Programação ABAP de Formulários](/glossario/programacao-abap-de-formularios)
- [Troubleshooting Forms Service](/glossario/troubleshooting-forms-service)

## 📚 Fontes
- Apostila - SAP Forms

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
