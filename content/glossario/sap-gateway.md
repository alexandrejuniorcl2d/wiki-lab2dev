---
title: "SAP Gateway"
description: "Componente ABAP que expõe e roteia serviços OData (tradutor entre HTTP/OData e objetos ABAP); SEGW é o construtor clássico de serviços, substituído pelo RAP."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `Gateway` · `SAP NetWeaver Gateway` · `SEGW` · `Gateway Service Builder` · `/IWFND/MAINT_SERVICE` · `Central Hub Deployment` · `Embedded Deployment` · `/IWFND/` · `/IWBEP/`

> **Definição**
> Componente ABAP que expõe e roteia serviços OData (tradutor entre HTTP/OData e objetos ABAP); SEGW é o construtor clássico de serviços, substituído pelo RAP.
{.is-info}

- **No runtime RAP:** o Gateway "traduz" a requisição OData em objetos ABAP que o RAP runtime processa.
- **`/IWFND/MAINT_SERVICE`:** ativar/registrar serviços OData (ex.: após `@OData.publish: true` em CDS legadas).
- **SEGW (Gateway Service Builder):** modelagem clássica de serviços OData V2 (entidades, DPC/MPC). DSAG: "o fim do SEGW" — use RAP.
- **Implantação:** *embedded* (no próprio backend) ou *central hub* (servidor dedicado, DMZ). DSAG BP recomenda central hub com desenvolvimento no backend.
- Roles de desenvolvimento/uso: `/IWFND/RT_DEVELOPER`, `/IWFND/RT_ADMIN`, `/IWFND/RT_GW_USER`.
- Fiori é **stateless** via Gateway: não use lógicas antigas de bloqueio pessimista.

## 🔗 Relacionados
- [OData](/glossario/odata)
- [RAP](/glossario/rap)
- [Fiori](/glossario/fiori)
- [Service Definition e Service Binding](/glossario/service-definition-e-service-binding)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP
- Apostila - CDS Views para Funcionais (Parte 2)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
