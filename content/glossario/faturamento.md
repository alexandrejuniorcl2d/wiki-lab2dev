---
title: "Faturamento"
description: "Transforma a entrega física em obrigação financeira: gera fatura, NF-e e lançamento em Contas a Receber."
tags: ["glossario","sap-modulos"]
---
**Também conhecido como:** `Billing` · `Fatura` · `Nota de Crédito` · `Credit Memo` · `Document Flow`

> **Definição**
> Transforma a entrega física em obrigação financeira: gera fatura, NF-e e lançamento em Contas a Receber.
{.is-info}

- Disparado pela saída de mercadoria ([PGI](/glossario/pgi)); herda preços/Incoterms do pedido e pagador/condições do cliente.
- Contabilização automática no [ACDOCA](/glossario/universal-journal): D — Cliente (AR) / C — Receita de Vendas / C — Impostos a recolher.
- **Document Flow:** rastreabilidade Pedido → Remessa → Saída → Fatura → Documento contábil.
- **Devolução:** solicitação → aprovação → entrada física → **nota de crédito** (reverte receita e impostos).
- Cenários especiais: venda triangular (remessa por conta e ordem), venda para entrega futura, venda de serviços com **plano de faturamento** (marcos ou periodicidade).

## 🔗 Relacionados
- [PGI](/glossario/pgi)
- [NF-e](/glossario/nf-e)
- [Contas a Pagar e a Receber](/glossario/contas-a-pagar-e-a-receber)
- [Order-to-Cash](/glossario/order-to-cash)

## 📚 Fontes
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira

---
🧭 [Módulos Funcionais SAP](/glossario/temas/modulos-funcionais-sap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
