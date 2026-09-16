---
title: "Bots Best Practice S4HANA"
description: "Pacotes de automação pré-configurados da SAP (scope items como 48M, 49L e 53D) para lançamentos contábeis, pedidos de venda, requisições de compra e business partners no S/4HANA, com engenharia padrão, variáveis de ambiente, test scripts, extensão c…"
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `Scope Item 48M` · `Scope Item 49L` · `Scope Item 53D` · `Journal Entry Upload RPA` · `Sales Order Mass Creation RPA` · `Purchase Requisition RPA` · `Business Partner Maintenance RPA` · `Test Script RPA` · `ProcessingStatus` · `ProcessingMessage` · `S_WEBGUI`

> **Definição**
> Pacotes de automação pré-configurados da SAP (scope items como 48M, 49L e 53D) para lançamentos contábeis, pedidos de venda, requisições de compra e business partners no S/4HANA, com engenharia padrão, variáveis de ambiente, test scripts, extensão com campos Z e relatórios de execução.
{.is-info}

**Scope items de automação:** pacotes `.pkg` identificados por código (ex.: 48M, 49L, 53D), geridos na Factory, com guias funcionais, de configuração e de teste no **SAP Best Practices Explorer** — "blocos de LEGO" robustos.

| Cenário | Scope item | Processo | API |
|---|---|---|---|
| Finanças | **48M** | Upload de journal entries de planilha (substitui digitação na `FB50`) com validação estrutural e log por linha | *Journal Entry – Post* (síncrona) |
| Vendas | **49L** | Criação massiva de pedidos a partir de templates Excel (B2B, portais) | `API_SALES_ORDER_SRV` |
| Compras | **53D** | Requisições de compra por planilha de demanda ou estoque mínimo (trigger API ou agendado) | `API_PURCHASEREQ_PROCESS_SRV` |
| Dados mestres | — | Carga inicial, atualização em massa e governança de business partners | `API_BUSINESS_PARTNER` |

**Engenharia padrão:** modularização (conectar ao S/4HANA, ler planilha, gravar log) · configuração externa por variáveis de ambiente · logs padronizados (*Log Message* Info/Warning/Error + traces).

**Variáveis = painel do consultor funcional:** destinations, `DocumentType: SA`, `CompanyCode: 1000`, `SalesOrg: 1000`, `InputSheetName: Sheet1`, valores default e variáveis *Credential* — trocar a empresa é mudar um valor, não um projeto.

**Validação:** test script (pré-requisitos de dados, template Excel de exemplo, resultado esperado) + *Test* no Cloud Studio com console e breakpoints.

**Estender com campo Z:** *Packages* > *Save As… New Project* → nova coluna (ex.: `Z_REFERENCIA`) no template e nas estruturas → incluir o campo na chamada da API (seção *Extension/CustomFields*) → testar e gerar novo `.pkg`.

**Erros de negócio:** chamada no *Try*; no *Catch* extrai a mensagem da API ("Centro de custo 1234 bloqueado") → grava na linha → segue para a próxima.

**Relatório de execução:** mesmo Excel de entrada + colunas **ProcessingStatus** (Success/Error) e **ProcessingMessage** (nº do documento ou mensagem funcional) — o negócio corrige só o que falhou.

**Pré-requisitos funcionais:** APIs OData ativas no Gateway · usuário técnico com autorizações (nota **2853198**: objeto `S_WEBGUI` para automação de tela) · tipos de documento configurados · **intervalos de numeração** · dados mestres existentes e desbloqueados.

**Valor:** liberação de FTEs e ROI rápido; zero erro de digitação, compliance e trilha de auditoria. "Estender, não substituir": o padrão cobre \~80%, foque nos 20% diferenciais.

## 🔗 Relacionados
- [Integração RPA com S4HANA](/glossario/integracao-rpa-com-s4hana)
- [Store RPA](/glossario/store-rpa)
- [SAP Best Practices Explorer](/glossario/sap-best-practices-explorer)
- [Factory RPA](/glossario/factory-rpa)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
