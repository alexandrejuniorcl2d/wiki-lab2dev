---
title: "Transações SAP (T-codes)"
description: "Transações SAP citadas no glossário, com link para o conceito"
tags: ["glossario"]
---
> **Como usar**
> Na barra de comandos do SAP GUI: `/n<tcode>` abre na mesma janela, `/o<tcode>` em nova sessão. A coluna **Nota** leva ao conceito no glossário; **Fonte** indica a apostila onde a transação aparece.
{.is-success}

## 🛒 Vendas, Suprimentos e Produção

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `MD01N` | MRP Live | PP | [MRP Live](/glossario/mrp-live) | consultor5, modulos |
| `MIGO` | Movimentação de Mercadorias (entrada, saída, transferência) | MM | [MIGO](/glossario/migo) | consultor4, modulos |
| `MIRO` | Verificação de Fatura de Fornecedor | MM | [MIRO](/glossario/miro) | consultor4 |
| `VA01` | Criar Ordem de Venda | SD | [Ordem de Venda](/glossario/ordem-de-venda) | consultor1, modulos |
| `VF01` | Criar Documento de Faturamento | SD | [Faturamento](/glossario/faturamento) | modulos |
| `VL01N` | Criar Remessa de Saída (Outbound Delivery) | SD | [Outbound Delivery](/glossario/outbound-delivery) | consultorfinal, modulos |
| `XD01` | Criar Cliente (obsoleta no S/4 → BP) | SD | [Business Partner](/glossario/business-partner) | consultorfinal |
| `XK01` | Criar Fornecedor (obsoleta no S/4 → BP) | MM | [Business Partner](/glossario/business-partner) | consultorfinal, modulos |

## 💰 Finanças, Controladoria e Fiscal

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `AFAB` | Executar Depreciação | FI-AA | [Asset Accounting](/glossario/asset-accounting) | modulos |
| `CAT2` | Folha de Horas (CATS) | HCM/PS | [PS](/glossario/ps) | modulos |
| `CK11N` | Criar Estimativa de Custo do Produto | CO-PC | [Product Costing](/glossario/product-costing) | modulos |
| `F110` | Programa de Pagamento Automático | FI | [Contas a Pagar e a Receber](/glossario/contas-a-pagar-e-a-receber) | modulos |
| `FAGLL03H` | Partidas individuais do razão (com hierarquia) | FI | [Integração S4HANA com Datasphere](/glossario/integracao-s4hana-com-datasphere) | ds2 |
| `FB50` | Lançamento contábil de razão (G/L) | FI | [General Ledger](/glossario/general-ledger) | rpa |
| `FB60` | Lançar Fatura de Fornecedor (FI) | FI | [Contas a Pagar e a Receber](/glossario/contas-a-pagar-e-a-receber) | modulos |
| `FK01 / FD01` | Criar Fornecedor/Cliente contábil (obsoletas no S/4 → BP) | FI | [Business Partner](/glossario/business-partner) | modulos |
| `GS01` | Criar set (ex.: hierarquia de contas) | FI | [Integração S4HANA com Datasphere](/glossario/integracao-s4hana-com-datasphere) | ds2 |
| `J1BTAX` | Cockpit de tabelas fiscais Brasil | Fiscal | [J1BTAX](/glossario/j1btax) | consultor3, consultorfinal |
| `KP06` | Planejamento de Custos por Centro de Custo (legado) | CO | [Planejamento e Orçamento](/glossario/planejamento-e-orcamento) | modulos |
| `KP26` | Planejar Tarifas de Atividade | CO | [Planejamento e Orçamento](/glossario/planejamento-e-orcamento) | modulos |
| `KSH3` | Hierarquia padrão de centros de custo | CO | [Centro de Custo](/glossario/centro-de-custo) | ds2 |
| `OB13` | Plano de Contas | FI | [General Ledger](/glossario/general-ledger) | modulos |

## 👥 Dados mestres

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `BP` | Business Partner (cliente, fornecedor, contato) | Dados mestres | [Business Partner](/glossario/business-partner) | modulos |

## 🧑‍💻 Desenvolvimento ABAP e CDS

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `ABAPDOCU` | Documentação/exemplos ABAP | ABAP | [ABAP](/glossario/abap) | dsagbp |
| `SAAB` | Checkpoints ativáveis (LOG-POINT, ASSERT) | ABAP | [Robustez ABAP](/glossario/robustez-abap) | dsagbp |
| `SAT` | Runtime Analysis ABAP (sucessora da SE30) | ABAP | [Performance ABAP no HANA](/glossario/performance-abap-no-hana) | dsagbp |
| `SCDO` | Objetos de Change Document | ABAP | [Workflow e Change Documents RAP](/glossario/workflow-e-change-documents-rap) | rap |
| `SE11` | ABAP Dictionary (tabelas, views, tipos) | ABAP | [Dicionário de Dados ABAP](/glossario/dicionario-de-dados-abap) | modulos |
| `SE16` | Data Browser (consultar tabelas) | ABAP | [View Browser e Customer Data Browser](/glossario/view-browser-e-customer-data-browser) | modulos |
| `SE24` | Class Builder | ABAP | [Classe e Objeto](/glossario/classe-e-objeto) | abapoo |
| `SE30` | Runtime Analysis (legado) | ABAP | [Performance ABAP no HANA](/glossario/performance-abap-no-hana) | dsagbp |
| `SE37` | Function Builder | ABAP | [BAPI](/glossario/bapi) | dsag2 |
| `SE38` | ABAP Editor | ABAP | [ABAP](/glossario/abap) | fiori |
| `SE51` | Screen Painter | ABAP | [SAP GUI](/glossario/sap-gui) | fiori |
| `SE80` | ABAP Workbench (Object Navigator) | ABAP | [ABAP](/glossario/abap) | modulos |
| `SHDB` | Gravador de Batch Input | ABAP | [Batch Input](/glossario/batch-input) | modulos |
| `SLG1` | Exibir Application Log | ABAP | [Robustez ABAP](/glossario/robustez-abap) | dsagbp, dsag1 |
| `SLG2` | Eliminar Application Logs expirados | ABAP | [Robustez ABAP](/glossario/robustez-abap) | dsagbp |
| `ST05` | SQL Trace / Performance Trace | ABAP | [Performance ABAP no HANA](/glossario/performance-abap-no-hana) | modulos |
| `VDM_CDS_ANALYZER` | Analisar CDS views do VDM e suas anotações | CDS | [Virtual Data Model](/glossario/virtual-data-model) | ds2 |

## ⚡ Performance, logs e monitoramento

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `RZ11` | Parâmetros de perfil (ex.: sapgui/user_scripting) | Basis | [Automação SAP GUI RPA](/glossario/automacao-sap-gui-rpa) | rpa |
| `SE09` | Transport Organizer | Basis | [Sistema de Transportes](/glossario/sistema-de-transportes) | dsag2 |
| `SM21` | System Log | Basis | [Transações de Monitoramento](/glossario/transacoes-de-monitoramento) | dsag2 |
| `SM36` | Agendar Job em Background (legado; em ABAP Cloud: Application Jobs) | Basis | [Transações de Monitoramento](/glossario/transacoes-de-monitoramento) | dsag1 |
| `SM37` | Monitor de Jobs em Background | Basis | [Transações de Monitoramento](/glossario/transacoes-de-monitoramento) | modulos |
| `SM50` | Visão de Work Processes (instância) | Basis | [Transações de Monitoramento](/glossario/transacoes-de-monitoramento) | modulos |
| `SM51` | Servidores de aplicação (release do kernel) | Basis | [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service) | forms |
| `SM66` | Visão Global de Work Processes | Basis | [Transações de Monitoramento](/glossario/transacoes-de-monitoramento) | modulos |
| `SP01` | Spool requests | Basis | [Programação ABAP de Formulários](/glossario/programacao-abap-de-formularios) | forms |
| `SPAU` | Ajuste de modificações após upgrade | ABAP/Basis | [Modificação do Standard](/glossario/modificacao-do-standard) | dsag1 |
| `SQLM` | SQL Monitor | ABAP/Performance | [Performance ABAP no HANA](/glossario/performance-abap-no-hana) | dsagbp |
| `ST22` | Dumps ABAP (Runtime Errors) | ABAP/Basis | [Transações de Monitoramento](/glossario/transacoes-de-monitoramento) | modulos |
| `SWLT` | SQL Performance Tuning Worklist | ABAP/Performance | [Performance ABAP no HANA](/glossario/performance-abap-no-hana) | dsagbp |
| `TAANA` | Análise de distribuição de tabela | Basis | [Output Management SAP](/glossario/output-management-sap) | dsag2 |

## 🔐 Segurança

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `PFCG` | Manutenção de Roles (autorização) | Security | [Autorizações SAP](/glossario/autorizacoes-sap) | modulos |
| `ST01` | System Trace (autorizações) | Security | [Autorizações SAP](/glossario/autorizacoes-sap) | dsag2 |
| `SU01` | Manutenção de Usuários | Security | [Autorizações SAP](/glossario/autorizacoes-sap) | modulos |
| `SU53` | Análise da última checagem de autorização falha | Security | [Autorizações SAP](/glossario/autorizacoes-sap) | dsag2 |

## 🌐 Gateway, OData e Fiori

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `/IWFND/ERROR_LOG` | Log de erros do SAP Gateway | Gateway | [Códigos de Erro OData](/glossario/codigos-de-erro-odata) | fiori |
| `/IWFND/MAINT_SERVICE` | Ativar e manter serviços OData no SAP Gateway | Gateway/OData | [SAP Gateway](/glossario/sap-gateway) | cdsfunc2 |
| `/IWFND/TRACES` | Traces do SAP Gateway | Gateway | [Códigos de Erro OData](/glossario/codigos-de-erro-odata) | fiori |
| `SEGW` | Gateway Service Builder (OData V2 clássico) | Gateway | [SAP Gateway](/glossario/sap-gateway) | dsag2 |
| `SWFVISU` | Visualização de tarefas de workflow (intent para My Inbox) | Workflow | [Fiori Launchpad](/glossario/fiori-launchpad) | fiori |
| `/UI2/FLC` | Fiori Launchpad Checks | Fiori | [Fiori Launchpad](/glossario/fiori-launchpad) | fiori |
| `/UI2/FLPD_CUST` | Fiori Launchpad Designer (catálogos, target mappings, tiles) — cross-client | Fiori | [Fiori Launchpad](/glossario/fiori-launchpad) | fiori |
| `/UI5/UI5_REPOSITORY_LOAD` | Upload de app UI5 (BSP) para o repositório ABAP (via SE38) | Fiori | [Deploy de Apps Fiori](/glossario/deploy-de-apps-fiori) | fiori |

## 🔌 Integração e conectividade

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `OA2C_CONFIG` | Clientes OAuth 2.0 | Integração | [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service) | forms |
| `SICF` | Serviços HTTP do Internet Communication Framework | Integração | [SAP Gateway](/glossario/sap-gateway) | forms, dsag2 |
| `SM59` | Destinos RFC/HTTP | Integração | [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service) | forms |
| `SMICM` | Monitor do ICM e traces HTTP/SSL | Integração | [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service) | forms |
| `SOAMANAGER` | Web services e portas lógicas | Integração | [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service) | forms |
| `STRUST` | Trust Manager (PSE e certificados SSL) | Integração | [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service) | forms |

## 🖨️ Formulários e saída

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `NACE` | Condições de mensagem (NAST) | Output | [Output Management SAP](/glossario/output-management-sap) | dsag2 |
| `SE71` | SAPscript Form Painter | Forms | [SAPscript e Smart Forms](/glossario/sapscript-e-smart-forms) | dsag2 |
| `SE72` | SAPscript Estilos | Forms | [SAPscript e Smart Forms](/glossario/sapscript-e-smart-forms) | dsag2 |
| `SE78` | Gráficos SAPscript | Forms | [SAPscript e Smart Forms](/glossario/sapscript-e-smart-forms) | dsag2 |
| `SFP` | Form Builder (Adobe Forms) | Forms | [Adobe Forms](/glossario/adobe-forms) | dsag2 |
| `SMARTFORMS` | Smart Forms | Forms | [SAPscript e Smart Forms](/glossario/sapscript-e-smart-forms) | dsag2 |
| `SO10` | Textos standard | Forms | [SAPscript e Smart Forms](/glossario/sapscript-e-smart-forms) | dsag2 |
| `SPPFCADM` | Administração do PPF | Output | [Output Management SAP](/glossario/output-management-sap) | dsag2 |

## 📊 BW e Datasphere

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `ODQMON` | Monitor das delta queues ODP | BW/Datasphere | [Integração S4HANA com Datasphere](/glossario/integracao-s4hana-com-datasphere) | ds2 |
| `RSA1` | Data Warehousing Workbench | BW/Datasphere | [Migração BW para Datasphere](/glossario/migracao-bw-para-datasphere) | ds1 |
| `RSB4HCONV` | Transfer Cockpit (Shell/Remote Conversion para o BW Bridge) | BW/Datasphere | [Migração BW para Datasphere](/glossario/migracao-bw-para-datasphere) | ds1 |
| `RSPC` | Process chains (no BW Bridge o monitoramento vai para o Cockpit) | BW/Datasphere | [SAP BW Bridge](/glossario/sap-bw-bridge) | ds1 |
| `RSRV` | Verificações de consistência de objetos BW | BW/Datasphere | [Migração BW para Datasphere](/glossario/migracao-bw-para-datasphere) | ds1 |

## ⚙️ Geral e navegação

| T-code | Descrição | Área | Nota | Fonte |
|---|---|---|---|---|
| `SE63` | Tradução | Geral | [SAPscript e Smart Forms](/glossario/sapscript-e-smart-forms) | dsag2 |
| `SPRO` | Customizing (IMG) | Geral | [Implementação SAP](/glossario/implementacao-sap) | modulos |
| `/n<tcode>` | Encerra transação atual e abre outra | GUI | [SAP GUI](/glossario/sap-gui) | modulos |
| `/o<tcode>` | Abre transação em nova sessão/janela | GUI | [SAP GUI](/glossario/sap-gui) | modulos |


> Programas úteis via `SE38`: `FP_CHECK_DESTINATION_SERVICE` (testa conexão com o Forms Service), `/UI5/UI5_REPOSITORY_LOAD` (upload de app UI5).

---
🧭 [Glossário SAP](/glossario) · [Siglas SAP](/glossario/siglas) · [Glossário SAP A-Z](/glossario/a-z)
