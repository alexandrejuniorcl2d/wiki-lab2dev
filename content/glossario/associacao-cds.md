---
title: "Associação CDS"
description: "Relacionamento declarado entre entidades CDS que só gera JOIN quando o consumidor pede campos do alvo (\"join-on-demand\" / lazy loading)."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `Association` · `Associações` · `Composition` · `Cardinalidade` · `$projection` · `Lazy Loading` · `Exposed Association` · `Ad-hoc Association` · `JOIN x Association`

> **Definição**
> Relacionamento declarado entre entidades CDS que só gera JOIN quando o consumidor pede campos do alvo ("join-on-demand" / lazy loading).
{.is-info}

| JOIN (força bruta / eager) | Associação (inteligência sob demanda / lazy) |
|---|---|
| Executa sempre, traz dados de todas as tabelas | Só executa se um campo associado for solicitado |
| Relatórios *flat* e extrações massivas | Padrão para VDM, Fiori e APIs |
| Pesado para UI | Lista inicial rápida; detalhes carregados ao navegar |

```sql
association [0..1] to I_Customer as _Customer
  on $projection.SoldToParty = _Customer.Customer
{
  ...,
  _Customer.CustomerName as SoldToPartyName,  -- ad-hoc: usa campo (gera join)
  _Customer                                   -- exposed: consumidor navega se quiser
}
```
- **Cardinalidade** `[min..max]` (`[0..1]`, `[1..*]`): documenta a semântica e ajuda Fiori Elements/otimizador (não validada em runtime).
- Convenção: nome com `_` (`_Customer`, `_Item`); `$projection` referencia campos da própria lista.
- **Composition:** variação para pai-filho no RAP (`composition [0..*] of ... as _Item` / `association to parent`).
- Desde o release 2023 o compilador é mais rígido com associações.

## 🔗 Relacionados
- [CDS View](/glossario/cds-view)
- [Virtual Data Model](/glossario/virtual-data-model)
- [RAP](/glossario/rap)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - CDS Views para Funcionais (Parte 1)
- Apostila - CDS Views para Funcionais (Parte 2)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
