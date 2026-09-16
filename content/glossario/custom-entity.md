---
title: "Custom Entity"
description: "Entidade CDS com assinatura em CDS e busca de dados implementada em classe ABAP (IF_RAP_QUERY_PROVIDER) — para APIs externas, BAPIs ou fontes não relacionais."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `CDS Custom Entity` · `DEFINE CUSTOM ENTITY` · `IF_RAP_QUERY_PROVIDER` · `query implemented by` · `Unmanaged Query`

> **Definição**
> Entidade CDS com assinatura em CDS e busca de dados implementada em classe ABAP (IF_RAP_QUERY_PROVIDER) — para APIs externas, BAPIs ou fontes não relacionais.
{.is-info}

```sql
@ObjectModel.query.implementedBy: 'ABAP:ZCL_MY_QUERY'
define custom entity ZCE_ExternalOrders {
  key OrderId : abap.char(10);
      Amount  : abap.dec(15,2);
}
```
Quando usar: dados de API REST/web service, lógica complexa demais para SQL/AMDP, BLOBs/LiveCache, ou autorização que exige checagem manual em ABAP. A lógica roda no **servidor de aplicação** (não no banco).

**Unmanaged Query (RAP):** a custom entity é o contrato; a classe implementa `IF_RAP_QUERY_PROVIDER~SELECT` recebendo `io_request` com as opções OData (`$filter`, `$orderby`, `$top`, `$skip`) e devolvendo via `io_response`:
```abap
METHOD if_rap_query_provider~select.
  DATA(lo_filter) = io_request->get_filter( ).
  DATA(lo_paging) = io_request->get_paging( ).
  DATA(lt_sort)   = io_request->get_sort_elements( ).
  " ... ABAP SQL / chamadas de API preenchendo lt_data ...
  IF io_request->is_data_requested( ).
    io_response->set_data( lt_data ).
  ENDIF.
  IF io_request->is_total_numb_of_rec_requested( ).
    io_response->set_total_number_of_records( lines( lt_data ) ).
  ENDIF.
ENDMETHOD.
```
Cenários: UNIONs e subqueries complexas, fontes não tabulares, transformações dinâmicas por parâmetro.

## 🔗 Relacionados
- [Abstract Entity](/glossario/abstract-entity)
- [RAP](/glossario/rap)
- [OData](/glossario/odata)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - ABAP RAP

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
