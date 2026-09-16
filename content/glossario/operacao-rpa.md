---
title: "Operação RPA"
description: "Operação diária do SAP RPA pelo controller: triggers agendados (cron, janelas, fuso), API (payload e irpa-api-key) e attended, notifiers, dashboard, monitoramento de jobs e traces, filas com prioridade e expiração, alert handlers, retenção de dados…"
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `Scheduled Trigger` · `API Trigger RPA` · `Attended Trigger` · `Cron Expression RPA` · `invocationContext` · `Notifiers RPA` · `Alert Handlers RPA` · `Monitoring Jobs RPA` · `Traces RPA` · `Job Priority RPA` · `Job Expiration RPA` · `Run now RPA` · `RPA Controller`

> **Definição**
> Operação diária do SAP RPA pelo controller: triggers agendados (cron, janelas, fuso), API (payload e irpa-api-key) e attended, notifiers, dashboard, monitoramento de jobs e traces, filas com prioridade e expiração, alert handlers, retenção de dados e reexecução.
{.is-info}

**Triggers:**
| Tipo | Como | Uso |
|---|---|---|
| **Attended** | Automação aparece no Desktop Agent dos usuários do environment; inputs por formulário | Assistente digital |
| **Scheduled** | Agenda com **cron**, janela start/end date, **time zone** | Lotes, relatórios, conciliações |
| **API** | `POST .../v1/apiTriggers/{triggerId}/runs` com header `irpa-api-key` | Evento em ERP/CRM/e-commerce |

**Cron (com segundos):** `0 30 18 ? * FRI` (sexta 18:30) · `0 0 8 1 * ?` (dia 1 às 8h) · `0 0 18 ? * 6L` (última sexta do mês às 18h). **Feriados:** não há calendário nativo — verifique no início da automação e encerre de forma controlada.

**Payload de API trigger:**
```json
{ "invocationContext": { "correlationId": "PO-12345" },
  "input": { "numeroNotaFiscal": "NF-9876", "valor": 1500.50 } }
```

**Notifiers:** eventos Success, Failure, Start, Cancel ou todas as mudanças → **e-mail** ou **webhook** (Teams, Slack, Jira) com variáveis `${output}`, `${error.details.message}`, `${job.monitoringURL}`.

**Dashboard:** jobs executados por status (picos de *Failed* = problema sistêmico: sistema fora, UI mudou, credencial expirada), agents conectados × desconectados, jobs *Ready* aguardando (fila crescente = falta capacidade).

**Monitoring > Jobs:** 95 dias / até 100.000 jobs; filtros por status, data, automação, pacote, environment; visão hierárquica (pai/filho) ou plana. **Traces** precisam estar ativos no trigger **antes** da execução → timeline com o passo que falhou; mensagens típicas: *Element not found* (UI mudou), *Login failed* (credencial), *Timeout exception* (sistema lento); aba *Input* para reproduzir.

**Filas:** jobs sem agent ficam *Ready* ("no unattended agent is available" em *Distribution Information*); **prioridade** no trigger (Very High para fechamento/pagamentos, Low para relatórios) e **expiração** em API triggers (cancela job que esperou demais, ex.: cotação).

**Alert handlers:** ex.: *Agent Disconnected* por mais de 10 min → e-mail com `${context.agentNames}` e `${context.environmentName}` (constraints evitam falsos positivos).

**Retenção:** jobs 95 dias/100.000; Business Activity Data até 90 dias/50.000 registros — exporte periodicamente se a auditoria exigir mais.

**Reexecução:** só se a causa foi resolvida (transitória → reexecutar; permanente/bug → escalar ao desenvolvimento) — *Run now* no trigger com inputs copiados da aba *Input*, ou reenviar a chamada de API (retry da origem). Sempre cria novo job.

**Cenário — fechamento contábil mensal:** scheduled `0 0 18 ? * 6L` com prioridade Very High · notifier on success e-mail à Controladoria com `${output}` · notifier on failure webhook ao Teams do suporte com erro e link · alert *Agent Disconnected* > 5 min em produção.

## 🔗 Relacionados
- [Factory RPA](/glossario/factory-rpa)
- [Desktop Agent](/glossario/desktop-agent)
- [Segurança RPA](/glossario/seguranca-rpa)
- [ALM RPA](/glossario/alm-rpa)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
