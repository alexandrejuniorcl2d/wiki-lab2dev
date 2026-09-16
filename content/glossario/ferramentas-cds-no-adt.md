---
title: "Ferramentas CDS no ADT"
description: "Recursos do Eclipse ADT para escrever, navegar, corrigir, formatar, testar e diagnosticar CDS — de Ctrl+Espaço ao Dependency Analyzer."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `Content Assist` · `Quick Fix` · `Ctrl+1` · `DDL Formatter` · `Shift+F1` · `Data Preview` · `F8` · `Element Information` · `F2` · `Dependency Analyzer` · `SQL Dependency Tree` · `Complexity Metrics` · `Active Annotations` · `Annotation Propagation` · `Dynamic Cache`

> **Definição**
> Recursos do Eclipse ADT para escrever, navegar, corrigir, formatar, testar e diagnosticar CDS — de Ctrl+Espaço ao Dependency Analyzer.
{.is-info}

**Guia de bolso (atalhos):**
| Atalho | Função |
|---|---|
| `Ctrl+Espaço` | Content assist (keywords, campos, anotações; *insert all elements*; aliases CamelCase automáticos) |
| `F1` | ABAP Keyword Documentation da palavra-chave/anotação |
| `F2` | Element Information (tipo, chaves, parâmetros, associações, extensões) — fixe na view *ABAP Element Info* |
| `F3` / `Ctrl+Click` | Navegar para origem/alvo de associações |
| `Ctrl+1` | Quick fix (ex.: adicionar `GROUP BY`, alias, anotação faltante; wizard *Define ON conditions* de joins) |
| `Shift+F1` | DDL Formatter (perfis SAP, local ou de time exportado em XML por pacote) |
| `Ctrl+Shift+F2` | Verificar sintaxe |
| `Ctrl+F3` | Ativar |
| `Ctrl+7` | Comentar/descomentar |
| `F8` | **Data Preview** — executa a view de verdade, aplica o DCL, pede parâmetros, *Follow Association* |

**Templates:** New > Data Definition ou Preferences > ABAP Development > Templates (padronize os do time).

**Diagnóstico e performance (fluxo Visualize → Meça → Investigue → Otimize):**
- **Dependency Analyzer** — *SQL Dependency Tree* (hierarquia: SQL name, relação, tipo, entidade, access control) e *SQL Dependency Graph* (mapa visual de hubs).
- **Complexity Metrics** — data sources usadas, SQL operations (joins, unions, agregações), chamadas de função.
- **Active Annotations View** — valor final de cada anotação e sua origem.
- **Annotation Propagation View** — cadeia de herança; valores sobrescritos em cinza, ativo em preto.
- **Dynamic Caches (HANA)** — cache de agregações pesadas (SUM, COUNT, AVG) para consultas repetidas.
- Glossário de testes: **CUT** (CDS entity under test) e **DOC** (depended-on component, substituível por dublê).

## 🔗 Relacionados
- [ABAP Development Tools](/glossario/abap-development-tools)
- [CDS View](/glossario/cds-view)
- [DCL - Access Control](/glossario/dcl-access-control)

## 📚 Fontes
- Apostila - ABAP CDS

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
