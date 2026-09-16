---
title: "Troubleshooting Forms Service"
description: "Diagnóstico e performance do SAP Forms Service: onde estão os logs (SLG1, ST22, Cloud Connector, audit logs, Trust Center), o error.pdf com template, dados e trace, TraceLevel=2, fonte ausente, timeouts/429, chamado SAP, contingência e cache."
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `error.pdf` · `errorPDF` · `traceString` · `Support Files Forms` · `Payload Tracing` · `Font could not be found` · `ljs_trace.log` · `HTTP 429 Forms` · `Destination Cache Forms` · `SAP Trust Center`

> **Definição**
> Diagnóstico e performance do SAP Forms Service: onde estão os logs (SLG1, ST22, Cloud Connector, audit logs, Trust Center), o error.pdf com template, dados e trace, TraceLevel=2, fonte ausente, timeouts/429, chamado SAP, contingência e cache.
{.is-info}

**Onde procurar ("cena do crime"):**
| Camada | Evidências |
|---|---|
| Backend ABAP | `SLG1` (logs de aplicação, autorização, dados), `ST22` (dumps de timeout/comunicação), monitores CIG, `SMICM` |
| Cloud Connector | Dashboard (conexão verde?) e `ljs_trace.log` (handshake, firewall, mapeamento virtual) |
| BTP | Audit logs do serviço ("alguém mudou algo?") e **SAP Trust Center** (indisponibilidade global/regional) |

**`error.pdf` — a caixa-preta:**
- Gerado em falha de renderização (**HTTP 500** — XDP corrompido, XML incompatível, fonte/imagem ausente, configuração).
- Obtenção: campo `errorPDF` (Base64) no JSON de erro, junto de `message`, `traceString`, `errorLevel`; ou em *Configuration Tool > Support Files* (ative definindo tamanho de pasta > 0 MB — padrão 0).
- Anexos: **`form.xdp`**, **`data.xml`** e **`trace.log`** → abrir o XDP no LiveCycle Designer e fazer preview com o XML reproduz o erro localmente.

**PDF errado mas HTTP 200:** `POST /v1/adsRender/pdf?TraceLevel=2` devolve `traceString` e um PDF de diagnóstico com XDP e XML exatos (`TraceLevel=1` só tempos).

**Casos comuns:**
- **Fonte ausente:** "A font with the name 'Arial-BoldMT' could not be found" → confirmar no trace, fazer upload em *Configuration Tool > Fonts* (limite 25 MB por arquivo) e padronizar fontes suportadas nos templates.
- **Timeout/lentidão:** coleta de dados ABAP lenta, rede interna, máquina do Cloud Connector sobrecarregada, latência até a região da BTP, template complexo ou payload gigante.
- **HTTP 429 Too Many Requests:** limite de requisições → retry com **backoff**.

**Chamado SAP:** componente **BC-SRV-FP** (on-premise) ou **BC-SRV-FP-CF** (Cloud Foundry) com `error.pdf` (ou PDF de TraceLevel=2), `.xdp`, `.xml`, `trace.log` e comportamento esperado × observado.

**Contingência:** diagnosticar (local ou SAP? Trust Center) → mitigar com fila de requisições e retry exponencial no ABAP → comunicar o negócio e acionar processos manuais → fallback extremo só com ADS on-premise pré-configurado para processos críticos.

**Performance:** templates no Template Store referenciados por nome; *Configuration Tool > Caching* — tamanho do destination cache (até 15 MB; comece com 5–10 MB) e *Clear Cache* em DEV/QAS após mudanças (evite em produção); XDPs leves (ver [Adobe Forms](/glossario/adobe-forms)).

## 🔗 Relacionados
- [SAP Forms Service by Adobe](/glossario/sap-forms-service-by-adobe)
- [API REST SAP Forms Service](/glossario/api-rest-sap-forms-service)
- [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service)
- [Adobe Forms](/glossario/adobe-forms)

## 📚 Fontes
- Apostila - SAP Forms

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
