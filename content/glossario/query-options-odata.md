---
title: "Query Options OData"
description: "Parâmetros de URL para extração cirúrgica: $filter (linhas), $select (colunas), $orderby, $top/$skip (paginação), $inlinecount, $format, $search."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `System Query Options` · `$filter` · `$select` · `$orderby` · `$top` · `$skip` · `$inlinecount` · `$count` · `$format` · `$search` · `substringof` · `startswith` · `datetime`

> **Definição**
> Parâmetros de URL para extração cirúrgica: \$filter (linhas), \$select (colunas), \$orderby, \$top/\$skip (paginação), \$inlinecount, \$format, \$search.
{.is-info}

| Opção | Função | Exemplo |
|---|---|---|
| `$filter` | Filtra linhas no servidor — maior alavanca de performance | `$filter=CountryCode eq 'BR' and StatusCode eq '2'` |
| `$select` | Escolhe colunas — reduz payload (obrigatório em produção) | `$select=AccountID,AccountName` |
| `$orderby` | Ordena no servidor | `$orderby=CountryCode,AccountName desc` |
| `$top` / `$skip` | Paginação client-side | `$top=10&$skip=20` |
| `$inlinecount=allpages` (V2) / `$count=true` (V4) | Total de registros junto com a página | `"__count": "1498"` |
| `$format` | JSON ou XML | `$format=json` |
| `$search` | Busca textual livre em campos "search relevant" | `$search=SAP` |
| `$expand` | Traz entidades relacionadas | ver [Navigation Property OData](/glossario/navigation-property-odata) |

**Operadores:** `eq`, `ne`, `gt`, `lt`, `ge`, `le`, `and`, `or`, `not`.
**Funções (V2):** `substringof('texto', Campo)`, `startswith(Campo,'x')`, `endswith`, `tolower`, `toupper`, `length`.
**Datas:** `$filter=ChangeDateTime ge datetime'2022-10-07T00:00:00'` — padrão para **sincronização incremental** (delta desde a última execução).

**Impacto (exemplo da apostila):** `GET AccountCollection` sem filtros ≈ 250 KB e 1,2 s × com `$filter`+`$select`+`$top=20` ≈ 5 KB e 0,1 s (98% menos payload, 12× mais rápido).

`$filter` (bisturi: exato e estruturado) × `$search` (rede de busca: caixa de busca global).

## 🔗 Relacionados
- [OData](/glossario/odata)
- [Paginação OData](/glossario/paginacao-odata)
- [Navigation Property OData](/glossario/navigation-property-odata)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
