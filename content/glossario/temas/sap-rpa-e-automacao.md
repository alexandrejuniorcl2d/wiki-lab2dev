---
title: "SAP RPA e Automação (tema)"
description: "Automação robótica de processos, bots, workflows e SAP Build Process Automation."
tags: ["glossario","sap-rpa"]
---
> **Sobre esta área**
> Automação robótica de processos, bots, workflows e SAP Build Process Automation.
> Tag: [#sap-rpa](/t/sap-rpa) · 13 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - SAP RPA — SAP Intelligent RPA / Build Process Automation em 13 módulos: arquitetura, segurança, Store, Cloud Studio (web, SAP GUI, Excel, JavaScript), Factory e operação, integração S/4HANA, bots best practice e ALM.

## 📖 Termos

### Desenvolvimento
- [Automação SAP GUI RPA](/glossario/automacao-sap-gui-rpa) *(SAP GUI Scripting API, sapgui/user_scripting, RZ11 scripting)* — Automação nativa do SAP GUI e de apps Windows no SAP RPA: scripting habilitado (RZ11 e cliente), gravador vs captura manual por ID, gestão de sessões, navegação por transação e teclas, grids como coleções, validação pela status bar, UIAutomation, OCR/imagem, arquivos e pop-ups.
- [Cloud Studio RPA](/glossario/cloud-studio-rpa) *(Cloud Studio, SAP Build Cloud Studio, Capture Application)* — Desenvolvimento de automações no Cloud Studio: capturar aplicações (web via DOM, UIAutomation), organizar telas e elementos, definir critérios estáveis e coleções, montar fluxos com atividades e esperas, parametrizar input/output e testar/depurar.
- [Excel SDK RPA](/glossario/excel-sdk-rpa) *(Excel SDK, Excel Cloud Link, Open Excel Instance)* — Manipulação profissional de planilhas no SAP RPA com o Excel SDK (API do Excel, não mapeamento de tela): instância e workbook, leitura em bloco com Get Range, data types, loops, escrita, abas, filtros, fórmulas, liberação de recursos no Finally e alternativas CSV/JSON.
- [JavaScript no RPA](/glossario/javascript-no-rpa) *(Custom Script RPA, function step(input), irpa_core)* — Pro-code dentro do low-code no SAP Build Process Automation: atividade Custom Script com input/output, funções de array, regex, try/catch, global error handler, datas, logs com irpa_core, chamadas REST com fetch, automações helper e depuração.

### Fundamentos
- [SAP RPA](/glossario/sap-rpa) *(SAP Intelligent RPA, iRPA, SAP iRPA)* — Automação robótica de processos da SAP (SAP Intelligent RPA, hoje parte do SAP Build Process Automation): bots desenhados no Cloud Studio, orquestrados na Cloud Factory da BTP e executados localmente pelo Desktop Agent, com dados de negócio sempre dentro do perímetro do cliente.

### Governança
- [ALM RPA](/glossario/alm-rpa) *(Ciclo de Vida RPA, Versionamento Semântico RPA, Package Preview)* — Governança e ciclo de vida de um programa de RPA: fases do requisito à otimização, versionamento semântico com status Preview/Released, promoção DEV→QAS→PRD com gates, PDD e SDD, checklist de qualidade, componentes reutilizáveis, gestão de mudanças, CoE, KPIs, higiene, segurança contínua e escala.

### Infraestrutura
- [Desktop Agent](/glossario/desktop-agent) *(SAP Desktop Agent, Agente RPA, Machine Agent)* — Executor local das automações SAP RPA em Windows: requisitos, instalação (.msi para o usuário ou para todos), registro no tenant da Factory, modos attended/unattended, extensão de navegador, proxy, componentes machine/user agent, atualização e diagnóstico.

### Integração
- [Bots Best Practice S4HANA](/glossario/bots-best-practice-s4hana) *(Scope Item 48M, Scope Item 49L, Scope Item 53D)* — Pacotes de automação pré-configurados da SAP (scope items como 48M, 49L e 53D) para lançamentos contábeis, pedidos de venda, requisições de compra e business partners no S/4HANA, com engenharia padrão, variáveis de ambiente, test scripts, extensão com campos Z e relatórios de execução.
- [Integração RPA com S4HANA](/glossario/integracao-rpa-com-s4hana) *(Communication User, Communication System, SAP_COM_0086)* — Integração segura do SAP Build Process Automation com o S/4HANA priorizando APIs OData: communication user/system/arrangement no Cloud, Cloud Connector no on-premise, Destinations com sap.processautomation.enabled, dependências de API no Cloud Studio, menor privilégio, monitoramento, \$batch e erros HTTP.

### Orquestração
- [Factory RPA](/glossario/factory-rpa) *(Environments RPA, Environment Dev Test Prod RPA, Packages RPA)* — Topologia de orquestração na Cloud Factory: environments Dev/Test/Prod, pacotes versionados, deploy e triggers, agents e seus status, agent groups para alta disponibilidade, atributos para roteamento, variáveis de ambiente, versões de agent e compartilhamento.
- [Operação RPA](/glossario/operacao-rpa) *(Scheduled Trigger, API Trigger RPA, Attended Trigger)* — Operação diária do SAP RPA pelo controller: triggers agendados (cron, janelas, fuso), API (payload e irpa-api-key) e attended, notifiers, dashboard, monitoramento de jobs e traces, filas com prioridade e expiração, alert handlers, retenção de dados e reexecução.

### Reuso
- [Store RPA](/glossario/store-rpa) *(SAP Build Process Automation Store, Store SAP Intelligent RPA, Process Bots)* — Marketplace integrado à Factory com bots de processo, SDKs e skills de IA prontos da SAP e parceiros: filtrar, adquirir, criar cópia editável, gerenciar dependências e versões, configurar por variáveis de ambiente e maximizar o ROI da licença.

### Segurança
- [Segurança RPA](/glossario/seguranca-rpa) *(IRPAOfficer, IRPADeveloper, IRPAProjectMember)* — Segurança enterprise no SAP RPA: XSUAA/OAuth, federação IAS com IdP corporativo, role collections IRPA*, API keys e service keys, registro e aprovação de agents, IP safelist, credenciais (não protegidas na máquina cliente), LGPD/GDPR, riscos de eval e auditoria.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
