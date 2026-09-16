---
title: "SAP Forms (tema)"
description: "SAPscript, Smart Forms, Adobe Forms e Forms Service by Adobe."
tags: ["glossario","sap-forms"]
---
> **Sobre esta área**
> SAPscript, Smart Forms, Adobe Forms e Forms Service by Adobe.
> Tag: [#sap-forms](/t/sap-forms) · 11 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - SAP Forms — "From Paper to Pixel" em 11 módulos: migração do ADS on-premise para o SAP Forms Service by Adobe (BTP) — conectividade, OAuth, Template Store, REST API, ABAP, troubleshooting e go-live.

## 📖 Termos

### Desenvolvimento
- [Programação ABAP de Formulários](/glossario/programacao-abap-de-formularios) *(FP_JOB_OPEN, FP_FUNCTION_MODULE_NAME, FP_JOB_CLOSE)* — Como chamar formulários Adobe no ABAP: fluxo clássico FP_JOB_OPEN → FP_FUNCTION_MODULE_NAME → módulo gerado → FP_JOB_CLOSE, a abordagem OO com CL_FP_ADS_UTIL=>CALL_ADS, obtenção do PDF (GETPDF), parâmetros de saída, tratamento de erros e debug do XML.

### Fundamentos
- [SAP Forms](/glossario/sap-forms) *(Formulários SAP, SAP Output Forms, Tecnologias de Formulário SAP)* — Visão geral das tecnologias de formulário SAP — SAPscript, Smart Forms, Interactive Forms by Adobe e S/4HANA Forms — com linha do tempo, matriz de escolha, gestão de saída e a migração do ADS on-premise para o SAP Forms Service by Adobe na BTP.

### Integração
- [API REST SAP Forms Service](/glossario/api-rest-sap-forms-service) *(adsRender, /v1/adsRender/pdf, /v1/adsRender/zpl)* — Uso da REST API do SAP Forms Service: POST /v1/adsRender/pdf com template XDP e dados XML em Base64, formType print/interactive, resposta em Base64, e endpoints para ZPL/PCL, assinatura, anexos, extração de dados e proteção por senha.
- [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service) *(FP_ICF_DATA, ADS_AGENT, /sap/bc/fp)* — Passo a passo para ligar S/4HANA/ECC ao SAP Forms Service: Cloud Connector (/sap/bc/fp, /sap/bc/fpads), destination FP_ICF_DATA_&lt;SID&gt; na BTP, destino HTTP ADS na SM59, certificados na STRUST, cliente OAuth na OA2C_CONFIG, porta lógica na SOAMANAGER e teste FP_CHECK_DESTINATION_SERVICE.

### Motor
- [Adobe Document Services](/glossario/adobe-document-services) *(ADS, Adobe Document Services on-premise, FP_TEST_00)* — Motor Java da Adobe que renderiza formulários SAP em PDF, PDF/A, PCL, ZPL e PostScript, com fontes, XDC/XCI, credenciais e montagem de documentos; on-premise (suporte até 2027/2030) ou como serviço gerenciado na BTP.
- [SAP Forms Service by Adobe](/glossario/sap-forms-service-by-adobe) *(Forms Service by Adobe, SAP Forms Service, Forms Service by Adobe API)* — Serviço gerenciado da BTP baseado no ADS para renderizar e manipular formulários Adobe via REST API ou a partir de sistemas ABAP, com Configuration Tool, Template Store, OAuth 2.0 (XSUAA), planos free/standard e cobrança por requisição.
- [Template Store Forms](/glossario/template-store-forms) *(Template Store, Forms Service Template Store, Form Template Store)* — Repositório central de layouts do SAP Forms Service: cada Form agrupa vários templates XDP (idiomas/variações) e um único XSD, com versionamento automático, versão ativa para rollback, metadados, API REST e validações de upload.

### Operação
- [Troubleshooting Forms Service](/glossario/troubleshooting-forms-service) *(error.pdf, errorPDF, traceString)* — Diagnóstico e performance do SAP Forms Service: onde estão os logs (SLG1, ST22, Cloud Connector, audit logs, Trust Center), o error.pdf com template, dados e trace, TraceLevel=2, fonte ausente, timeouts/429, chamado SAP, contingência e cache.

### Saída
- [Output Management SAP](/glossario/output-management-sap) *(NAST, NACE, TNAPR)* — Frameworks que disparam a emissão de formulários: NAST (condition technique via NACE/TNAPR em SD/MM), PPF (SPPFCADM em EWM/TM) e o S/4HANA Output Control, novo padrão com BRF+ como motor de regras.

### Tecnologias
- [Adobe Forms](/glossario/adobe-forms) *(Interactive Forms by Adobe, SAP Interactive Forms by Adobe, IFbA)* — Padrão ouro de formulários SAP: interface e contexto na transação SFP, layout XDP no Adobe LiveCycle Designer, dados em XML validados por XSD, renderizados pelo ADS/Forms Service como PDF de impressão ou interativo; no S/4HANA Cloud, gestão pelos apps S/4HANA Forms.
- [SAPscript e Smart Forms](/glossario/sapscript-e-smart-forms) *(SAPscript, Smart Forms, SmartForms)* — Tecnologias legadas de formulário do SAP GUI — SAPscript (1992, editor SE71, textos SO10) e Smart Forms (2001, interface gráfica, SSF_FUNCTION_MODULE_NAME) — com suporte até 2040 e recomendação de não criar novos.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
