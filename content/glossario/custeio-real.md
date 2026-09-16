---
title: "Custeio Real"
description: "Cálculo do custo real do estoque e CPV rolando variações de preço e produção via Material Ledger; ordens liquidam suas variâncias."
tags: ["glossario","sap-modulos"]
---
**Também conhecido como:** `Actual Costing` · `Estimativa de Custo` · `Cost Estimate` · `CK11N` · `Liquidação de Ordem` · `Settlement` · `Variância de Produção`

> **Definição**
> Cálculo do custo real do estoque e CPV rolando variações de preço e produção via Material Ledger; ordens liquidam suas variâncias.
{.is-info}

**Estimativa de custo (`CK11N`):** explode a BOM (material), lê o roteiro × tarifas planejadas (`KP26`) e aplica overheads por *costing sheet* → custo padrão estratificado.

**Ordem de produção como objeto de custo (Versão 0):** débitos = material consumido + atividades apontadas; crédito = entrada do produto ao custo padrão. Diferença = **variância**, transferida na **liquidação (settlement)**.

**Actual Costing:** no fim do período o ML coleta variações de preço e de produção e as "rola" para estoque e CPV.

## 🔗 Relacionados
- [Product Costing](/glossario/product-costing)
- [Material Ledger](/glossario/material-ledger)
- [Ordem de Produção](/glossario/ordem-de-producao)

## 📚 Fontes
- Apostila - Conhecendo todos os Módulos do SAP

---
🧭 [Módulos Funcionais SAP](/glossario/temas/modulos-funcionais-sap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
