---
title: "View Entity"
description: "Sucessora das views DDIC-based: `define view entity` gera só a entidade CDS (sem SQL view na SE11), ativa mais rápido e é obrigatória para RAP/ABAP Cloud."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `DEFINE VIEW ENTITY` · `CDS View Entity` · `DDIC-based View` · `DEFINE VIEW` · `@AbapCatalog.sqlViewName`

> **Definição**
> Sucessora das views DDIC-based: `define view entity` gera só a entidade CDS (sem SQL view na SE11), ativa mais rápido e é obrigatória para RAP/ABAP Cloud.
{.is-info}

| | DDIC-based view (legado) | View Entity (padrão) |
|---|---|---|
| Sintaxe | `define view` + `@AbapCatalog.sqlViewName` | `define view entity` |
| Objetos gerados | 2 (entidade CDS + SQL view DDIC) | 1 (entidade CDS; view no DB direto) |
| Client handling | Manual (`@ClientHandling.type/algorithm`) | Automático (anotações proibidas) |
| Ativação | Mais lenta (cascata) | Muito mais rápida |
| Sintaxe/checagens | Menos restrita | Mais rigorosa |
| Futuro | Sem novas funcionalidades; obsoleta desde 7.55 | Recebe todas as inovações (desde 7.54) |

```sql
-- ❌ obsoleto
@AbapCatalog.sqlViewName: 'ZCDS_DB_VIEW'
define view ZDDIC_BASED_VIEW as select from ... { ... }

-- ✅ padrão ouro
define view entity ZI_MyViewEntity as select from ... { ... }
```

## 🔗 Relacionados
- [CDS View](/glossario/cds-view)
- [Projection View](/glossario/projection-view)
- [RAP](/glossario/rap)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - CDS Views para Funcionais (Parte 2)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
