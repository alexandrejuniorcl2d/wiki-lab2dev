---
title: "Desktop Agent"
description: "Executor local das automações SAP RPA em Windows: requisitos, instalação (.msi para o usuário ou para todos), registro no tenant da Factory, modos attended/unattended, extensão de navegador, proxy, componentes machine/user agent, atualização e diagn…"
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `SAP Desktop Agent` · `Agente RPA` · `Machine Agent` · `User Agent RPA` · `sap-irpa-agent-service.exe` · `sap-irpa-agent.exe` · `Tenant Registration` · `System Health Check RPA` · `proxy.json` · `Extensão SAP Build Process Automation` · `Booster Get Started with SAP Build Process Automation`

> **Definição**
> Executor local das automações SAP RPA em Windows: requisitos, instalação (.msi para o usuário ou para todos), registro no tenant da Factory, modos attended/unattended, extensão de navegador, proxy, componentes machine/user agent, atualização e diagnóstico.
{.is-info}

**Preparar a nuvem:** BTP Cockpit > Global Account > *Boosters* > **"Get Started with SAP Build Process Automation"** — cria subaccount, subscription, service instance, destinations e role collections.

**Requisitos da máquina:** Windows 10 Pro/Enterprise ou Windows Server 2016/2019/2022 (64-bit) · RAM 8 GB (16 GB para dev) · 2 cores @ 2.0 GHz (4 recomendados) · .NET Framework 4.8+ · Visual C++ 2013 e 2015-2022 Redistributable · Chrome ou Edge atualizados (confira sempre o Installation Guide).

**Instalação (.msi baixado da Factory):**
| Opção | Local | Uso |
|---|---|---|
| *Install just for you* | `%localappdata%` | Attended; sem admin completo |
| *Install for all users of this machine* | `Program Files` | **Obrigatório para unattended** (roda como serviço sem usuário logado); exige admin |

**Registro (handshake):** Factory > *Agents* > *Register new agent…* → copiar URL `https://[tenant_id].app.irpa.cfapps.[region].hana.ondemand.com` → ícone do Agent na bandeja > *Tenant Registration* → colar URL e autenticar no IdP com usuário que tem as role collections → agent aparece *Idle/Ready*.

**Componentes:**
- **Machine Agent** (`sap-irpa-agent-service.exe`): serviço Windows que sobe no boot, ouve a Factory e gerencia sessões — essencial para unattended (`services.msc`).
- **User Agent** (`sap-irpa-agent.exe`): app da bandeja que sobe no login — interface do attended e diagnósticos.

**Extensão de navegador "SAP Build Process Automation"** (Chrome Web Store / Edge Add-ons): obrigatória para web — acesso ao DOM, injeção de scripts e eventos (ex.: página carregada).

**Proxy corporativo:** o Agent usa o proxy do Windows; se não bastar, edite `proxy.json` (host, porta, credenciais ou PAC). Peça allowlist de `*.hana.ondemand.com` para WSS **sem inspeção SSL**.

**Problemas comuns:**
| Sintoma | Causa | Solução |
|---|---|---|
| Erro de WebSocket / não conecta | Firewall/proxy, inspeção SSL | Proxy + allowlist sem inspeção |
| Falha no login SSO | Faltam role collections (ProcessAutomation…) ou IdP mal configurado | Validar roles no Cockpit e IdP |
| Instalado mas não aparece na Factory | Handshake incompleto ou URL errada | Refazer *Tenant Registration* com a URL exata |

**Atualizações:** Factory > *Agents* mostra a versão de cada agent; defina versão mínima/política de update; versões *decommissioned* deixam de conectar — distribua com SCCM/GPO nos ciclos de manutenção.

**System Health Check:** conexão com a Factory, extensões Chrome/Edge, conector SAP GUI Scripting, dependências (.NET), outros conectores — tudo verde antes de desenvolver.

**Status na Factory:** *Starting* (carregando projeto) · *Idle/Ready* (livre) · *Busy/Running* (executando) · *Disconnected/Offline* (sem comunicação). Offline? máquina ligada → serviço *SAP Intelligent RPA Agent* rodando → firewall/proxy → token de `mass_registration.json` expirado → logs em `C:\ProgramData\SAP\Intelligent RPA\` → aba *Activity* do agent na Factory.

## 🔗 Relacionados
- [SAP RPA](/glossario/sap-rpa)
- [Factory RPA](/glossario/factory-rpa)
- [Segurança RPA](/glossario/seguranca-rpa)
- [Operação RPA](/glossario/operacao-rpa)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
