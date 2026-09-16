---
title: "Business Content Datasphere"
description: "Pacotes prontos da SAP e parceiros (Content Network) com modelos, views, fluxos BW Bridge e stories SAC por indústria e LoB, que reduzem projetos analíticos de meses para semanas."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Content Network` · `SAP Business Content Datasphere` · `Finance Foundation` · `Sales Analysis SD Datasphere` · `/IMO/` · `Pacotes de Conteúdo Datasphere`

> **Definição**
> Pacotes prontos da SAP e parceiros (Content Network) com modelos, views, fluxos BW Bridge e stories SAC por indústria e LoB, que reduzem projetos analíticos de meses para semanas.
{.is-info}

**Filosofia:** encapsular melhores práticas, processos e KPIs validados por milhares de clientes — "kit de construção avançado".

**Content Network:** "app store" dentro do Datasphere para buscar, descobrir e importar pacotes por indústria (manufatura — ordens de manutenção `0ORD_...`; varejo — cesta de compras; serviços financeiros — risco e GL; utilities — faturamento e consumo), por LoB (finanças `0FI_GL_4`, PSM-FM; vendas `0DLVIONTM`; compras; serviços) e de parceiros (Adverity, Precog).

| Para BW Bridge | Para Datasphere nativo |
|---|---|
| InfoObjects (`0MATERIAL` 40 caracteres), ADSOs LSA++, CompositeProviders, transformações, DataSources | Views, tabelas, E-R models, Analytic Models com hierarquias e cálculos **+ stories SAC prontas** |

**Importação em 3 passos:** selecionar → configurar (lista de objetos, mapeamento de conexões) → importar (mantém dependências).

**Atualizações:** *Overwrite* (recebe melhorias, perde customizações) × *Keep* (protege customizações, perde melhorias). **Boa prática:** nunca edite o padrão — copie para seu space/namespace e customize a cópia.

**Exemplos:**
- **Finance Foundation (S/4HANA):** CDS `I_GLACCOUNTLINEITEMRAWDATA`, InfoObjects `I_LEDGER`, `I_CHARTOFACCOUNTS`, `I_GLACCOUNT`, DataSources, ADSOs e transformações pré-mapeadas.
- **Sales Analysis (SD):** ADSOs de ordens, entregas e faturamento; CompositeProvider `/IMO/V_SD50` (SD-DLV: Service Level); KPIs `0DLVIONTM` (entregue no prazo), `0ICOASREQ` (confirmado como solicitado), `0DLV_VAL` (valor entregue).

**Documentação:** Content Network, SAP Help Portal e SAP Notes (ex.: 535016, delta FI-AA).

> "O padrão acelera. A customização diferencia." — Business Content cobre \~80%; os 20% são seu diferencial.

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [SAP BW Bridge](/glossario/sap-bw-bridge)
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [Data Builder](/glossario/data-builder)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 1)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
