---
title: "Warehouse Task"
description: "WT é a menor unidade de trabalho (mover produto de A para B); WOs agrupam WTs e são atribuídas a filas e recursos."
tags: ["glossario","sap-modulos"]
---
**Também conhecido como:** `WT` · `Warehouse Order` · `WO` · `Tarefa de Armazém` · `Ordem de Armazém` · `Fila` · `Queue` · `Interleaving` · `Resource Management`

> **Definição**
> WT é a menor unidade de trabalho (mover produto de A para B); WOs agrupam WTs e são atribuídas a filas e recursos.
{.is-info}

1. **Warehouse Task (WT):** movimentação de um ponto A para B.
2. **Warehouse Order (WO):** pacote executável de WTs agrupadas por percurso.
3. **Fila (Queue):** WOs atribuídas por área/tipo de tarefa (ex.: `Fila_Picking_Blocado`).
4. **Recurso** = operador + equipamento, logado via RF; recebe a próxima WO por prioridade.

**Interleaving:** intercala tarefas de processos diferentes (após um picking, um putaway próximo) eliminando *deadheading* (viagens vazias). Rotas calculadas por redes de percurso.

## 🔗 Relacionados
- [EWM](/glossario/ewm)
- [Handling Unit](/glossario/handling-unit)
- [Wave Management](/glossario/wave-management)

## 📚 Fontes
- Apostila - Conhecendo todos os Módulos do SAP
- Apostila - Consultor SAP (Dia 4) - Suprimentos MM e EWM

---
🧭 [Módulos Funcionais SAP](/glossario/temas/modulos-funcionais-sap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
