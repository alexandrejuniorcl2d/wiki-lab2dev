---
title: "Table Function"
description: "Entidade CDS cuja lógica é implementada em SQLScript nativo do HANA via método AMDP — para algoritmos que o SQL declarativo não resolve."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `CDS Table Function` · `DEFINE TABLE FUNCTION` · `AMDP` · `ABAP Managed Database Procedure` · `SQLScript` · `if_amdp_marker_hdb`

> **Definição**
> Entidade CDS cuja lógica é implementada em SQLScript nativo do HANA via método AMDP — para algoritmos que o SQL declarativo não resolve.
{.is-info}

```sql
@ClientDependent: true
define table function Z_TF_GetFlights
  with parameters @Environment.systemField: #CLIENT clnt: abap.clnt,
                  carrid: s_carr_id
  returns { client: s_mandt; carrname: s_carrname; connid: s_conn_id; }
  implemented by method Z_CL_AMDP_FLIGHTS=>GET_FLIGHTS;
```
```abap
CLASS z_cl_amdp_flights DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_amdp_marker_hdb.
    CLASS-METHODS get_flights FOR TABLE FUNCTION z_tf_getflights.
ENDCLASS.
CLASS z_cl_amdp_flights IMPLEMENTATION.
  METHOD get_flights BY DATABASE FUNCTION FOR HDB LANGUAGE SQLSCRIPT
                     OPTIONS READ-ONLY USING scarr spfli.
    RETURN SELECT sc.mandt AS client, sc.carrname, sp.connid
             FROM scarr AS sc INNER JOIN spfli AS sp ON ...
            WHERE sp.mandt = :clnt AND sp.carrid = :carrid;
  ENDMETHOD.
ENDCLASS.
```
- Relação 1:1 definição ↔ método AMDP.
- Usos: lógica procedural, bibliotecas HANA (ex.: PAL — Predictive Analysis Library), algoritmos financeiros/simulações.
- São a **exceção**: use CDS views sempre que possível. ⚠️ DSAG: AMDP em tabelas com > 1 milhão de registros — filtre cedo.

## 🔗 Relacionados
- [CDS View](/glossario/cds-view)
- [Performance ABAP no HANA](/glossario/performance-abap-no-hana)
- [SAP HANA](/glossario/sap-hana)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - CDS Views para Funcionais (Parte 2)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
