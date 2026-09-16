---
title: "Store RPA"
description: "Marketplace integrado à Factory com bots de processo, SDKs e skills de IA prontos da SAP e parceiros: filtrar, adquirir, criar cópia editável, gerenciar dependências e versões, configurar por variáveis de ambiente e maximizar o ROI da licença."
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `SAP Build Process Automation Store` · `Store SAP Intelligent RPA` · `Process Bots` · `SDK RPA` · `AI Skills RPA` · `Save As New Project` · `Change Package Version` · `Mass Creation of Business Partners` · `Submit a Package to the Store`

> **Definição**
> Marketplace integrado à Factory com bots de processo, SDKs e skills de IA prontos da SAP e parceiros: filtrar, adquirir, criar cópia editável, gerenciar dependências e versões, configurar por variáveis de ambiente e maximizar o ROI da licença.
{.is-info}

**Filtros:** *Line of Business* (Finance, Supply Chain, HR) · *Industry* (Retail, Utilities, Public Sector) · **Type**:
| Tipo | O quê | Exemplo | Valor |
|---|---|---|---|
| **Bot** | Automação de processo ponta a ponta | "Sales Order Creation from Excel" | Aceleração máxima |
| **SDK** | Pacote de atividades reutilizáveis | Microsoft 365 Cloud SDK, Google Cloud Storage SDK, Document Information Extraction SDK, Excel SDK | Extensibilidade |
| **Skill** | Capacidade de IA pré-treinada | Document Information Extraction (faturas, pedidos) | Inteligência |

**Adquirir:** encontrar → *Get* → aceitar termos → escolher versão → aparece em *Packages* da Factory (com projeto, **setup guide**, release notes e scripts/templates auxiliares).

**Adaptar sem estragar o original:** *Packages* > **Save As… New Project** cria cópia editável em *Projects* (o pacote da Store fica intacto para updates). Aba *Dependencies* lista SDKs (adicionados automaticamente) — mantenha-os atualizados.

**Atualizar:** Environment > *Packages* > **Change Package Version** → análise de impacto nas variáveis (adição, remoção, mudança de tipo) → valide em Test antes de Prod.

**Aceleradores S/4HANA:** Sales Order Creation from Excel (SD, order-to-cash), Journal Entry Upload (FI, fechamento), Mass Creation of Business Partners (MDG, qualidade de dados mestres).

**Configurar sem código:** ao adicionar o pacote ao environment, a aba *Variables* traz os parâmetros (`s4hana_url`, `credential_name`) — mesmo pacote em Test e Prod só trocando valores; consultor funcional configura sem desenvolvedor.

**Parceiros:** desenvolver solução documentada e parametrizável → gerar pacote no Cloud Studio → *Submit a Package to the Store* → curadoria da SAP → publicação.

**Licenciamento:** baixar conteúdo não custa licença extra; **executar** consome como qualquer bot (unattended ocupa licença enquanto roda) — a Store aumenta o ROI da mesma licença.

**Cenário — Business Partners:** Store "Business Partner" → *Get* → conferir pacote e dependências → *Save As… New Project* (`PROJ_BP_Custom`) → adicionar pacote ao environment de Test → preencher variáveis → revisar documentação, preparar planilha e disparar pelo trigger.

> "Adotar → Adaptar → Acelerar": a primeira pergunta é "já existe um acelerador na Store?".

## 🔗 Relacionados
- [SAP RPA](/glossario/sap-rpa)
- [Factory RPA](/glossario/factory-rpa)
- [Bots Best Practice S4HANA](/glossario/bots-best-practice-s4hana)
- [Cloud Studio RPA](/glossario/cloud-studio-rpa)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
