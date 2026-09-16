---
title: "Extend View"
description: "Extensão estrutural que adiciona campos e associações a uma CDS standard sem modificar o código-fonte original (Clean Core)."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `EXTEND VIEW` · `extend view entity` · `CDS View Extension` · `Append View` · `@AbapCatalog.sqlViewAppendName` · `Extension Include View`

> **Definição**
> Extensão estrutural que adiciona campos e associações a uma CDS standard sem modificar o código-fonte original (Clean Core).
{.is-info}

```sql
@AbapCatalog.sqlViewAppendName: 'ZDEMO_EXT_VIEW'   -- só p/ views DDIC-based
extend view Demo_Data_Model_Base with ZDemo_Extend_View {
  spfli.countryfr as CountryFrom,
  spfli.countryto as CountryTo
}
-- para view entities: extend view entity <view> with { ... }
```

| `EXTEND VIEW` | `ANNOTATE VIEW` ([Metadata Extension](/glossario/metadata-extension)) |
|---|---|
| Estrutura: novos campos e associações | Metadados: anotações de UI/comportamento |

- Na ativação de views DDIC-based gera uma *append view* no dicionário; o F2 mostra a estrutura consolidada.
- **DSAG:** estenda apenas views de extensão liberadas (`E_*`, contrato C0) — nunca injete campos em views genéricas.
- **Para funcionais:** um "post-it oficial da SAP" — o campo customizado (ex.: *Região de Entrega*) aparece no relatório standard e sobrevive a upgrades, em vez de copiar o programa para Z.

## 🔗 Relacionados
- [Metadata Extension](/glossario/metadata-extension)
- [Clean Core](/glossario/clean-core)
- [Virtual Data Model](/glossario/virtual-data-model)
- [Extensibilidade Key User](/glossario/extensibilidade-key-user)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - CDS Views para Funcionais (Parte 2)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
