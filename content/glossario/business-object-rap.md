---
title: "Business Object RAP"
description: "Representação transacional completa de uma entidade de negócio: estrutura (CDS), comportamento (BDEF) e implementação (behavior pool), organizada em árvore de composição."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `BO` · `Business Object` · `Composition Tree` · `Árvore de Composição` · `Root Entity` · `Child Entity` · `define root view entity`

> **Definição**
> Representação transacional completa de uma entidade de negócio: estrutura (CDS), comportamento (BDEF) e implementação (behavior pool), organizada em árvore de composição.
{.is-info}

- **Root:** nó do topo, unidade transacional; pode existir sozinho (ex.: *Travel*). Declarado com `define root view entity`.
- **Child:** depende do pai (*Booking* não existe sem *Travel*); **parent** é qualquer nó com filhos.
- **Composição:** associação especializada todo-parte (losango preenchido); apagar o pai apaga os filhos. Cardinalidade típica: Travel `[0..*]` Booking; Booking pertence a exatamente 1 Travel.

```sql
define root view entity ZI_Travel as select from ztravel
  composition [0..*] of ZI_Booking as _Booking
  association [0..1] to /DMO/I_Agency as _Agency on $projection.AgencyID = _Agency.AgencyID
{
  key travel_uuid     as TravelUUID,
      travel_id       as TravelID,
      agency_id       as AgencyID,
      last_changed_at as LastChangedAt,   -- ETag
      _Booking, _Agency
}
-- no filho: association to parent ZI_Travel as _Travel on ...
```
**DSAG:** a chave de toda entidade filha deve incluir o UUID de todos os nós superiores.

## 🔗 Relacionados
- [RAP](/glossario/rap)
- [Behavior Definition](/glossario/behavior-definition)
- [Associação CDS](/glossario/associacao-cds)
- [BOPF](/glossario/bopf)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
