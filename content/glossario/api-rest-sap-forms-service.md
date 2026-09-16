---
title: "API REST SAP Forms Service"
description: "Uso da REST API do SAP Forms Service: POST /v1/adsRender/pdf com template XDP e dados XML em Base64, formType print/interactive, resposta em Base64, e endpoints para ZPL/PCL, assinatura, anexos, extração de dados e proteção por senha."
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `adsRender` · `/v1/adsRender/pdf` · `/v1/adsRender/zpl` · `/v1/adsRender/pcl` · `/v1/pdf/adsSet/signature` · `/v1/pdf/adsSet/attachment` · `/v1/pdf/adsGet/data` · `xmlData` · `fileContent` · `credentialAlias` · `signatureFieldName` · `openPassword` · `printNotAllowed` · `changeNotAllowed` · `TraceLevel`

> **Definição**
> Uso da REST API do SAP Forms Service: POST /v1/adsRender/pdf com template XDP e dados XML em Base64, formType print/interactive, resposta em Base64, e endpoints para ZPL/PCL, assinatura, anexos, extração de dados e proteção por senha.
{.is-info}

**Renderização:**
```http
POST https://adsrestapi-formsprocessing.cfapps.<region>.hana.ondemand.com/v1/adsRender/pdf
Authorization: Bearer <token>
Content-Type: application/json

{
  "xdpTemplate": "[CONTEÚDO DO XDP EM BASE64]",   // ou "Form/Template" com ?templateSource=storageName
  "xmlData":     "[CONTEÚDO DO XML EM BASE64]",   // tags espelham os campos do XDP
  "formType":    "print"                          // ou "interactive"
}
```
- `POST` porque cria um recurso (o PDF).
- **Base64** porque JSON só transporta texto: Node.js `Buffer.from(xml).toString('base64')`, Python `base64.b64encode(xml_bytes)`, ferramentas online só para testes.
- **Resposta (HTTP 200):** `{ "fileName": "output.pdf", "fileContent": "JVBERi0x...", "mimeType": "application/pdf" }` → decodificar `fileContent` e salvar.
- **Postman:** POST na URL da service key, Authorization OAuth 2.0 (client ID, secret, access token URL), header `Content-Type: application/json`, body raw JSON.
- **HTTP 400:** JSON malformado (vírgula sobrando, aspas simples, chaves não fechadas) — "The JSON send to the API is corrupted…".

**Outros endpoints:**
| Endpoint | Uso | Campos-chave |
|---|---|---|
| `/v1/adsRender/zpl`, `/v1/adsRender/pcl` | Etiquetas Zebra / impressoras laser | — |
| `/v1/pdf/adsSet/signature` | Assinatura server-side | `pdf`, `credentialAlias` (ex.: `GlobalTechLegalDept`, cadastrado por ADSAdmin em Document Security), `signatureFieldName`, `reasonInfo`, `locationInfo`, `contactInfo` |
| `/v1/pdf/adsSet/attachment` | Embutir arquivo no PDF (XML da fatura, CSV) | `pdf`, `fileName`, `mimeType`, `description`, `fileContent` |
| `/v1/pdf/adsGet/data` | Extrair dados de PDF interativo preenchido | — |

**Proteção no render:** `"openPassword": "..."`, `"printNotAllowed": true`, `"changeNotAllowed": true`.

**Diagnóstico:** `?TraceLevel=1` (tempos) ou `?TraceLevel=2` (PDF de diagnóstico com `form.xdp` e `data.xml` mesmo em HTTP 200) — ver [Troubleshooting Forms Service](/glossario/troubleshooting-forms-service). **HTTP 429** (too many requests) → retry com backoff.

**Desafio "contrato perfeito":** unir capa + contrato XDP com dados + termos (Assembler/DDX) → proteger com `changeNotAllowed` → assinar com alias corporativo no campo `SignatureFinal`.

## 🔗 Relacionados
- [SAP Forms Service by Adobe](/glossario/sap-forms-service-by-adobe)
- [Template Store Forms](/glossario/template-store-forms)
- [Adobe Document Services](/glossario/adobe-document-services)
- [Troubleshooting Forms Service](/glossario/troubleshooting-forms-service)

## 📚 Fontes
- Apostila - SAP Forms

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
