---
title: "Factory RPA"
description: "Topologia de orquestração na Cloud Factory: environments Dev/Test/Prod, pacotes versionados, deploy e triggers, agents e seus status, agent groups para alta disponibilidade, atributos para roteamento, variáveis de ambiente, versões de agent e compar…"
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `Environments RPA` · `Environment Dev Test Prod RPA` · `Packages RPA` · `Deploy RPA` · `Agent Groups` · `Agent Attributes` · `Environment Variables RPA` · `Sharing RPA` · `Distribution Rules RPA`

> **Definição**
> Topologia de orquestração na Cloud Factory: environments Dev/Test/Prod, pacotes versionados, deploy e triggers, agents e seus status, agent groups para alta disponibilidade, atributos para roteamento, variáveis de ambiente, versões de agent e compartilhamento.
{.is-info}

**Environment** = contêiner lógico (não servidor) com **pacotes** (deployments), **agents**, **triggers** e **variáveis**. Tipos: **Dev** (iteração, instabilidade esperada) → **Test** (QA/negócio, espelha produção) → **Prod** (só pacotes testados e aprovados).

**Package:** unidade gerada no Cloud Studio e importada na Factory, com versionamento semântico — PATCH (bug fix compatível), MINOR (nova função compatível), MAJOR (quebra compatibilidade).

**Deploy e triggers:** deploy liga uma versão de pacote a um environment; triggers iniciam execução — **Attended** (distribuído ao Desktop Agent do usuário), **Scheduled** (agenda) e **API** (sistema externo). Um pacote pode ter vários triggers. Detalhes em [Operação RPA](/glossario/operacao-rpa).

**Agent groups:** agrupam agents (por *login* ou *machine*) como uma capacidade única — **alta disponibilidade** (agent offline → job vai para outro Idle), **balanceamento de carga** e gestão simples (atribui ao grupo "Financeiro", não a 20 agents).

**Lógica de distribuição:** (1) agents do **environment** → (2) **grupos/agents** do trigger → (3) **atributos** exigidos (ex.: `SAP_GUI=True`) → (4) agent **disponível** (Idle/Ready).

**Atributos:** definidos em *Configuration > Agent Attributes* → atribuídos a cada agent (`Software=SAP_GUI`, `Region=BR`) → exigidos no trigger. Exemplos: `Software=Excel_2019`, `Region=EMEA` (GDPR), `SAP_System=S4HANA_PROD`.

**Variáveis de ambiente:** nada de hard-code — `getVariable("System_URL")` resolve para `sistema.dev.com`, `sistema.test.com` ou `sistema.prod.com` conforme o environment; senhas mudam num único lugar (variáveis *Credential*).

**Versões de agent:** a Factory não faz *push* de update — mostra versões e alerta *decommissioned*; atualize via SCCM/GPO.

**Sharing:** *Manage* (modificar, compartilhar, excluir — Factory admins), *Edit* (conteúdo), *Read* (visualizar), *View jobs data* (inputs/outputs para troubleshooting); também em agents e projetos.

**Exemplo — PROD_FINANCE:** grupo `AG_FINANCE_UNATTENDED` com VM-FIN-01 e 02 (`SAP_GUI=True`, Office 365) e VM-FIN-03 (`SAP_GUI=False`, `PowerBI=True`) → job de lançamento de faturas vai só para 01/02; relatórios Power BI só para 03.

## 🔗 Relacionados
- [SAP RPA](/glossario/sap-rpa)
- [Desktop Agent](/glossario/desktop-agent)
- [Operação RPA](/glossario/operacao-rpa)
- [Segurança RPA](/glossario/seguranca-rpa)
- [ALM RPA](/glossario/alm-rpa)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
