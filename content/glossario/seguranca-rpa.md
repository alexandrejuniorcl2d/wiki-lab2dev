---
title: "Segurança RPA"
description: "Segurança enterprise no SAP RPA: XSUAA/OAuth, federação IAS com IdP corporativo, role collections IRPA*, API keys e service keys, registro e aprovação de agents, IP safelist, credenciais (não protegidas na máquina cliente), LGPD/GDPR, riscos de eval…"
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `IRPAOfficer` · `IRPADeveloper` · `IRPAProjectMember` · `IRPASupervisor` · `IRPART` · `IRPAPersonalDataAccess` · `irpa-api-key` · `API Keys RPA` · `Mass Agent Registration` · `Agent auto approval` · `External IP Safelist` · `Credential Variables` · `View jobs data`

> **Definição**
> Segurança enterprise no SAP RPA: XSUAA/OAuth, federação IAS com IdP corporativo, role collections IRPA*, API keys e service keys, registro e aprovação de agents, IP safelist, credenciais (não protegidas na máquina cliente), LGPD/GDPR, riscos de eval e auditoria.
{.is-info}

**Autenticação programática:** service key da instância RPA no Cockpit (`clientid`, `clientsecret`, `url`) → token OAuth 2.0 client credentials no XSUAA → `Authorization: Bearer <token>` na API da Factory.

**Usuários:** SAP IAS federado com o IdP corporativo (ex.: Azure AD) via SAML 2.0 — SSO, ciclo de vida no diretório (sem contas órfãs) e MFA corporativo. Ver [IAS e IPS](/glossario/ias-e-ips).

**Role collections:**
| Role | Persona | Capacidades |
|---|---|---|
| **IRPAOfficer** | Admin / Security Officer | API keys, aprovação de agents (mass registration), exclusão de dados pessoais, destinations, Cloud ALM |
| **IRPADeveloper** | Desenvolvedor | Projetos, automações e pacotes no Cloud Studio |
| **IRPAProjectMember / IRPASupervisor** | Operações | Deploy de pacotes, triggers, monitoramento de jobs |
| **IRPART** | Técnico | Autorização da instância de runtime (não é de usuário) |
| **IRPAPersonalDataAccess** | Crítico | Ver input/output nos logs — atribuir com extrema cautela |

**API triggers:** header `irpa-api-key` (chave por environment, exibida **só uma vez** — guarde em cofre como Azure Key Vault/HashiCorp Vault, revogue as sem uso; escopo mínimo) ou OAuth 2.0 via service key (tokens que expiram, recomendado em integrações BTP).

**Controle de agents:** *Agent Groups* restringem logins/máquinas; **Mass Agent Registration** com *registration token* → agent entra em "To review" → IRPAOfficer aprova/rejeita. *Agent auto approval* "is less secure than the default behavior" — se usar, **ative a External IP Safelist** (Configuration > External IP Safelist: IPs, ranges, wildcards + toggle).

> **Credenciais no cliente**
> "Information contained in password fields is protected in the cloud and in transit to the agent. However, it is **not protected on the client machine**." Use variáveis do tipo *Credential* (nunca hard-code) e rode bots com dados sensíveis em modo **unattended em servidores dedicados** com acesso restrito.
{.is-danger}

**Criptografia:** TLS em trânsito (confidencialidade, integridade, autenticidade); em repouso na máquina depende do hardening do SO e do controle de acesso à sessão Windows.

**LGPD/GDPR:** dados pessoais possíveis (e-mail, login, máquina, input/output); IRPAOfficer executa o "direito ao esquecimento"; *Monitoring > Jobs* (com IRPAPersonalDataAccess) e *Monitoring > Data* (export CSV de Business Activity Data) atendem direito de acesso — política para exports.

**Code injection:** *Custom Script* roda com os privilégios do Agent — proíba `eval()`, sanitize inputs com allow lists e faça code review.

**Rede e on-premise:** [SAP Cloud Connector](/glossario/sap-cloud-connector) para sistemas internos (sem portas de entrada).

**Auditoria:** *Monitoring > Jobs* (95 dias: automação, status, pacote, environment, trigger, máquina) e *Logs & Data* (alerts, export CSV); mudanças de plataforma (roles) no Audit Log da BTP.

**Sharing granular** (projeto, pacote, environment com usuário/grupo/anyone): *Read*, *Edit*, *Manage* e **View jobs data** (separada, para input/output).

**Checklist de go-live seguro:** (1) IAM com menor privilégio e IdP federado com MFA · (2) IP safelist ativa, aprovação manual, sem auto approval em produção, agent groups restritos · (3) só *Credential variables* e agents produtivos em servidores seguros · (4) Cloud Connector para on-premise, auditoria e procedimentos LGPD definidos · (5) alert handlers (ex.: *Agent Disconnected*) e code review contra `eval()`.

## 🔗 Relacionados
- [SAP RPA](/glossario/sap-rpa)
- [Factory RPA](/glossario/factory-rpa)
- [Desktop Agent](/glossario/desktop-agent)
- [Segurança BTP](/glossario/seguranca-btp)
- [IAS e IPS](/glossario/ias-e-ips)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
