---
title: "Order-to-Cash"
description: "Ciclo de receita: pedido do cliente → ordem de venda → entrega → faturamento → recebimento."
tags: ["glossario","sap-modulos"]
---
**Também conhecido como:** `O2C` · `OTC` · `Pedido ao Recebimento`

> **Definição**
> Ciclo de receita: pedido do cliente → ordem de venda → entrega → faturamento → recebimento.
{.is-info}

```mermaid
flowchart LR
  SO[Ordem de Venda] --> DL[Remessa - VL01N]
  DL --> PK[Picking / Packing]
  PK --> PGI[Saída de Mercadoria - PGI]
  PGI --> BL[Faturamento + NF-e]
  BL --> AR[Contas a Receber - FI]
  AR --> CASH[Recebimento]
```
Integra SD com MM (estoque), PP (produção), LE (logística) e FI/CO (finanças).

## 🔗 Relacionados
- [SD](/glossario/sd)
- [Ordem de Venda](/glossario/ordem-de-venda)
- [Outbound Delivery](/glossario/outbound-delivery)
- [PGI](/glossario/pgi)
- [Faturamento](/glossario/faturamento)
- [Procure-to-Pay](/glossario/procure-to-pay)

## 📚 Fontes
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira
- Apostila - Consultor SAP (Dia 1) - Ecossistema e Soft Skills

---
🧭 [Módulos Funcionais SAP](/glossario/temas/modulos-funcionais-sap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
