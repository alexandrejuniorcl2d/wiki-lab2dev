---
title: "Service Consumption Model"
description: "Artefato do ADT que gera um proxy cliente tipado (a partir do EDMX) para consumir serviços OData V2/V4 remotos em ABAP Cloud."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `SCM` · `Consumo de Serviços Externos` · `Proxy OData` · `Communication Arrangement` · `cl_http_destination_provider`

> **Definição**
> Artefato do ADT que gera um proxy cliente tipado (a partir do EDMX) para consumir serviços OData V2/V4 remotos em ABAP Cloud.
{.is-info}

1. Forneça o `$metadata` (EDMX) do serviço (outro S/4HANA, Business Accelerator Hub, API pública).
2. O ADT gera service definition, **classe proxy** e **abstract entities** para as entidades remotas.
3. Consuma:
```abap
DATA(lo_dest) = cl_http_destination_provider=>create_by_comm_arrangement(
                  comm_scenario = 'Z_MY_SCENARIO_CS' ).
DATA(lo_client) = /iwbep/cl_cp_factory_remote=>create_v2_remote_proxy( ... ).
DATA(lo_request) = lo_client->create_resource_for_entity_set( 'PRODUCTS' )->create_request_for_read( ).
DATA(lo_response) = lo_request->execute( ).
lo_response->get_business_data( IMPORTING et_business_data = DATA(lt_products) ).
```
Exercício clássico: API OData V2 Northwind (`services.odata.org/V2/Northwind/Northwind.svc/`) com uma classe `IF_OO_ADT_CLASSRUN`.

## 🔗 Relacionados
- [OData](/glossario/odata)
- [Tecnologias de Integração SAP](/glossario/tecnologias-de-integracao-sap)
- [SAP Cloud Connector](/glossario/sap-cloud-connector)

## 📚 Fontes
- Apostila - ABAP RAP

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
