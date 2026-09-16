---
title: "Navigation Property OData"
description: "Propriedades que ligam entidades (pai-filho); acessadas por URL (/Entidade('id')/Filho) ou trazidas juntas com $expand (análogo a LEFT JOIN)."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `Navigation Property` · `$expand` · `Navegação OData` · `Deep Expand` · `Navegação Reversa`

> **Definição**
> Propriedades que ligam entidades (pai-filho); acessadas por URL (/Entidade('id')/Filho) ou trazidas juntas com \$expand (análogo a LEFT JOIN).
{.is-info}

```
GET .../AccountCollection('00163E08BF...')/AccountAddress            ← só os filhos
GET .../OpportunityCollection('ID')?$expand=OpportunityProduct        ← pai + filhos numa chamada
GET .../OpportunityCollection('ID')?$select=Name,ExpectedValue
      &$expand=OpportunityProduct($select=ProductID,Quantity)          ← expand + select aninhado
GET .../AccountCollection('ID')?$expand=AccountContactRelationship($filter=Main eq true)
GET .../AccountAddressCollection('ID')/Account                        ← navegação reversa (filho → pai)
```
> **Riscos do \$expand**
> Cada nível aumenta a carga no servidor e o payload; *deep expand* (`Nav1/Nav2`) é causa comum de timeout. Expanda 1–2 níveis, sempre com `$select`.
{.is-warning}

| `$expand` (1 chamada) | Chamadas separadas |
|---|---|
| Menor latência de rede | Mais round-trips |
| Mais carga por chamada no servidor | Carga distribuída |
| Código cliente mais simples | Cliente orquestra |
| Ideal para "pai e poucos filhos" (UI) | Ideal para "pai e muitos filhos" (paginação, backend, sync) |

Quando não há navegação direta (ex.: Account → Opportunity), use `$filter` pelo ID relacionado em outra coleção.

## 🔗 Relacionados
- [OData](/glossario/odata)
- [Query Options OData](/glossario/query-options-odata)
- [Associação CDS](/glossario/associacao-cds)
- [Deep Insert OData](/glossario/deep-insert-odata)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
