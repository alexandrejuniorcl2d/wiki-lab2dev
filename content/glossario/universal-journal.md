---
title: "Universal Journal"
description: "Tabela única ACDOCA do S/4HANA que unifica lançamentos de FI, CO, AA e ML, eliminando reconciliações."
tags: ["glossario","sap-modulos"]
---
**Também conhecido como:** `ACDOCA` · `Diário Universal` · `Single Source of Truth`

> **Definição**
> Tabela única ACDOCA do S/4HANA que unifica lançamentos de FI, CO, AA e ML, eliminando reconciliações.
{.is-info}

**Antes (ECC):** dados espalhados em várias tabelas que exigiam reconciliação manual — `FAGLFLEXA` (GL), `COEP` (CO), `BSID`/`BSAD` (AR), `BSIK`/`BSAK` (AP)…

**Depois (S/4HANA):** tudo em **`ACDOCA`** — "One Single Source of Truth".

Consequências:
- Fim da reconciliação FI × CO.
- **Fast Close:** fechamento contábil de semanas para dias.
- Relatórios em tempo real (análise *on-the-fly*, sem batch noturno).
- Cada evento operacional (MIGO, faturamento, apontamento de produção) gera o lançamento contábil automaticamente.

## 🔗 Relacionados
- [S4HANA](/glossario/s4hana)
- [General Ledger](/glossario/general-ledger)
- [FI](/glossario/fi)
- [CO](/glossario/co)
- [Material Ledger](/glossario/material-ledger)

## 📚 Fontes
- Apostila - Consultor SAP (Dia 3) - FI e CO
- Apostila - Consultor SAP (Dia 4) - Suprimentos MM e EWM
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira

---
🧭 [Módulos Funcionais SAP](/glossario/temas/modulos-funcionais-sap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
