---
title: "SAP BW Bridge"
description: "Serviço PaaS gerenciado dentro do tenant Datasphere, compatível com BW/4HANA, que preserva a camada de extração e staging do BW (ODP, ADSOs, transformações ABAP, DTPs, process chains) e a expõe aos spaces nativos."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `BW Bridge` · `SAP Datasphere BW Bridge` · `BW Bridge Cockpit` · `BW Modeling Tools` · `BWMT` · `BW-MT` · `InfoArea` · `InfoObjects` · `CompositeProvider` · `Open ODS View` · `DataSource BW` · `Data Transfer Process` · `Transformação BW` · `Start Routine` · `End Routine` · `Expert Routine` · `External SAP HANA View`

> **Definição**
> Serviço PaaS gerenciado dentro do tenant Datasphere, compatível com BW/4HANA, que preserva a camada de extração e staging do BW (ODP, ADSOs, transformações ABAP, DTPs, process chains) e a expõe aos spaces nativos.
{.is-info}

**Dilema do cliente BW:** anos de extratores, transformações e ABAP customizado × inovação na nuvem. O Bridge é a ponte: mesma stack do [SAP BW4HANA](/glossario/sap-bw-4hana), em ambiente ABAP PaaS operado pela SAP.

**Arquitetura:**
- Sem acesso a SO/banco (gerenciado); modelagem só via **BW Modeling Tools** no Eclipse (+ **ADT** para rotinas e debug; repositório `https://tools.hana.ondemand.com/`).
- Administração web no **SAP BW Bridge Cockpit** (process chains, source systems, usuários, transportes, app *Source Systems – Maintain IDs*).
- Space dedicado com **SAP BW Bridge Storage**.

**O que fica × o que sai:**
| Fica no Bridge (back-end) | Moderniza no Datasphere/SAC (front-end) |
|---|---|
| Source systems ODP, DataSources, InfoSources, ADSOs (staging/corporate memory), transformações com ABAP, DTPs, process chains | BEx Query Designer, WAD, Analysis for Office direto, BPC/IP → Analytic Models, Business Builder, SAC, planejamento |

**Integração com spaces nativos:** objetos (ADSOs, CompositeProviders) marcados como **External SAP HANA View** geram calculation views que aparecem como **remote tables** no space nativo — sem replicação física.

**Provisionamento:** DW Administrator em *System > Administration > Tenant Configuration* define o SAP BW Bridge Storage (256 GB, 512 GB, 1 TB) — ⚠️ downsizing não é simples. Custo em **Capacity Units**, guiado pelo storage alocado.

**Segurança:** usuários de **comunicação** (técnicos, RFC/ODP a partir das fontes) × usuários de **diálogo** (devs/admins via Eclipse ou Cockpit), identidade pelo IdP da BTP.

**Diferenças para o BW/4HANA on-premise:** sem acesso a SO/banco; sem SAP GUI; **sem camada de queries BEx**; sem NLS (use data lake do Datasphere); escopo focado em integração/staging; ABAP restrito a transformações (sem arquivos externos, chamadas de sistema).

**Guia do desenvolvedor:**
1. **Projeto:** Eclipse *File > New > BW Bridge Project* com **Service Key** (JSON gerado na instância do Datasphere no BTP Cockpit).
2. **InfoAreas** hierárquicas (ex.: `Z_PROJETO_VENDAS` → `Z_EXT`, `Z_DWH`, `Z_REP`).
3. **InfoObjects:** características e key figures (ex.: `0MATERIAL` agora `CHAR 40` para o número de material estendido do S/4HANA).
4. **ADSO** com templates: *Data Mart* (sem change log, tipo InfoCube), *Staging DataStore* (inbound table + change log, tipo DSO), *Staging com compressão* (grandes volumes). Substitui InfoCube, DSO clássico e PSA.
5. **CompositeProvider:** UNION/JOIN virtual em tempo real no HANA (virtual data mart layer). **Open ODS View:** modelo BW virtual sobre fontes externas (tabelas, CDS remotas).
6. **Source system** tipo *ODP – SAP (ABAP)* no Cockpit; on-premise exige [SAP Cloud Connector](/glossario/sap-cloud-connector).
7. **DataSources:** replicar metadados do extrator (ex.: `2LIS_11_VAITM`).
8. **Transformações:** mapeamento, fórmulas e **start / end / expert routines** ABAP no ADT (ex.: `LOOP AT RESULT_PACKAGE ... DELETE`).
9. **DTP:** modo **Full** ou **Delta**, filtros, semantic keys, package size.
10. **Process chains:** modelagem gráfica no Eclipse; monitoramento no Cockpit (substitui RSPC).
11. **Debug:** breakpoint no ADT + DTP em *Serially in the Dialog Process (for Debugging)*.

**Cenários:** *conversion* (clientes BW 7.x/BW/4HANA — ver [Migração BW para Datasphere](/glossario/migracao-bw-para-datasphere)) ou *greenfield* (novos fluxos ODP para S/4HANA).

> "Para o consultor BW, é o conforto de casa com a potência da nuvem."

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [SAP BW4HANA](/glossario/sap-bw-4hana)
- [Migração BW para Datasphere](/glossario/migracao-bw-para-datasphere)
- [Spaces Datasphere](/glossario/spaces-datasphere)
- [ABAP Development Tools](/glossario/abap-development-tools)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 1)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
