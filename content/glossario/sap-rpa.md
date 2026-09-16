---
title: "SAP RPA"
description: "Automação robótica de processos da SAP (SAP Intelligent RPA, hoje parte do SAP Build Process Automation): bots desenhados no Cloud Studio, orquestrados na Cloud Factory da BTP e executados localmente pelo Desktop Agent, com dados de negócio sempre d…"
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `SAP Intelligent RPA` · `iRPA` · `SAP iRPA` · `RPA SAP` · `Automação Robótica de Processos` · `Cloud Factory` · `SAP Build Process Automation Factory` · `CoE de RPA` · `Recursos Beta RPA` · `Enhanced Recorder`

> **Definição**
> Automação robótica de processos da SAP (SAP Intelligent RPA, hoje parte do SAP Build Process Automation): bots desenhados no Cloud Studio, orquestrados na Cloud Factory da BTP e executados localmente pelo Desktop Agent, com dados de negócio sempre dentro do perímetro do cliente.
{.is-info}

**Os 3 pilares:**
| Pilar | O quê | Onde | Função |
|---|---|---|---|
| **Cloud Studio** (design) | IDE web low/no-code | Navegador, na BTP | Capturar telas (web, SAP GUI), definir lógica, gerenciar artefatos — ver [Cloud Studio RPA](/glossario/cloud-studio-rpa) |
| **Cloud Factory** (orquestração) | Centro de controle e governança | App web na BTP | Environments, packages, agents, triggers, jobs — ver [Factory RPA](/glossario/factory-rpa) |
| **Desktop Agent** (execução) | "Worker" local | Estações ou servidores Windows | Executa os jobs nas aplicações-alvo — ver [Desktop Agent](/glossario/desktop-agent) |

**Arquitetura híbrida:** a Factory (cérebro) envia instruções e recebe status via **WebSocket seguro (WSS)**; o Agent (braços e pernas) processa os dados de negócio **localmente** — na nuvem ficam só metadados (status, logs, instruções).

**Attended × Unattended:**
| | Attended ("assistente digital") | Unattended ("força de trabalho digital") |
|---|---|---|
| Disparo | Manual pelo usuário | Agendado, API ou evento |
| Sessão Windows | Sessão ativa do usuário | Sessão própria (pode estar bloqueada/RDP) |
| Caso de uso | Produtividade pontual ("copiar dados para o SAP") | Back-office ponta a ponta (faturas em lote) |
| Licença | Por usuário | Por robô/sessão concorrente |

**Por onde começar:** ver se já existe acelerador na [Store RPA](/glossario/store-rpa) ("adotar antes de adaptar"); para S/4HANA, prefira **APIs** a automação de UI ([Integração RPA com S4HANA](/glossario/integracao-rpa-com-s4hana)) e use os [Bots Best Practice S4HANA](/glossario/bots-best-practice-s4hana).

**Mapa dos tópicos:** [Desktop Agent](/glossario/desktop-agent) · [Segurança RPA](/glossario/seguranca-rpa) · [Store RPA](/glossario/store-rpa) · [Cloud Studio RPA](/glossario/cloud-studio-rpa) · [Automação SAP GUI RPA](/glossario/automacao-sap-gui-rpa) · [Excel SDK RPA](/glossario/excel-sdk-rpa) · [JavaScript no RPA](/glossario/javascript-no-rpa) · [Factory RPA](/glossario/factory-rpa) · [Operação RPA](/glossario/operacao-rpa) · [Integração RPA com S4HANA](/glossario/integracao-rpa-com-s4hana) · [Bots Best Practice S4HANA](/glossario/bots-best-practice-s4hana) · [ALM RPA](/glossario/alm-rpa).

**Recursos Beta (módulo 8):**
- Ativação por tenant: Factory > Configuration > Tenant Configuration > switch **Beta Features** (banner "You are using an SAP Intelligent RPA version with new BETA features").
- ⚠️ **Nunca em produção** — sem SLA, suporte *best-effort*; pacotes "Preview" com a mesma cautela; política de quem pode ativar e onde.
- Destaques: **Enhanced Recorder** (captura mais limpa, botão *Give Feedback*), **Document Information Extraction SDK** (`Open Document (Online OCR)`, `Extract Data (Pre-trained Model)` com `documentType` Invoice/PaymentAdvice/PurchaseOrder), melhorias de UX (quick fix, expression editor), SDKs Google Cloud Storage e Microsoft 365 Cloud, migração de pacotes `.pkg` do Desktop Studio legado (pode exigir ajustes; compatibilidade de versão do agent).
- Teste num environment sandbox (tipo Dev/Test, só agents de desenvolvimento); rollback desligando o switch ou com *Change Package Version*. Documentação: What's New, SAP Help Portal, notas (ex.: 2853198 — `S_WEBGUI`).

**Evolução:** do SAP Intelligent RPA (automação de tarefas) para o [SAP Build Process Automation](/glossario/sap-build-process-automation) (plataforma unificada low-code com RPA, workflows, IA e decisões) — governança e ALM continuam a base.

## 🔗 Relacionados
- [Desktop Agent](/glossario/desktop-agent)
- [Cloud Studio RPA](/glossario/cloud-studio-rpa)
- [Factory RPA](/glossario/factory-rpa)
- [Segurança RPA](/glossario/seguranca-rpa)
- [SAP Build Process Automation](/glossario/sap-build-process-automation)
- [ALM RPA](/glossario/alm-rpa)

## 📚 Fontes
- Apostila - SAP RPA
- Apostila - SAP Build Low e Pro Code

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
