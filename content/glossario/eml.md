---
title: "EML"
description: "Extensão da linguagem ABAP para ler e modificar Business Objects RAP pelo buffer transacional — o \"ABAP SQL para o buffer\"."
tags: ["glossario","sap-rap"]
---
**Também conhecido como:** `Entity Manipulation Language` · `READ ENTITIES` · `MODIFY ENTITIES` · `COMMIT ENTITIES` · `IN LOCAL MODE` · `%tky` · `%cid` · `%key` · `%control` · `failed reported mapped`

> **Definição**
> Extensão da linguagem ABAP para ler e modificar Business Objects RAP pelo buffer transacional — o "ABAP SQL para o buffer".
{.is-info}

```abap
" Ler do buffer (dentro do próprio BO: IN LOCAL MODE ignora feature control/autorização)
READ ENTITIES OF zi_travel IN LOCAL MODE
  ENTITY Travel FIELDS ( BeginDate EndDate ) WITH CORRESPONDING #( keys )
  RESULT DATA(travels).

" Modificar o buffer
MODIFY ENTITIES OF zi_travel IN LOCAL MODE
  ENTITY Travel UPDATE FIELDS ( OverallStatus )
  WITH VALUE #( FOR t IN travels ( %tky = t-%tky  OverallStatus = 'A' ) )
  FAILED DATA(failed_upd) REPORTED DATA(reported_upd).

" Criar (ex.: em testes ou de fora do BO)
MODIFY ENTITIES OF zi_travel
  ENTITY Travel CREATE FIELDS ( AgencyID CustomerID BeginDate EndDate )
  WITH VALUE #( ( %cid = 'cid_1' AgencyID = '070007' CustomerID = '000095'
                  BeginDate = '20240801' EndDate = '20240815' ) )
  MAPPED DATA(mapped) FAILED DATA(failed) REPORTED DATA(reported).

COMMIT ENTITIES.   " somente fora da implementação do BO (ex.: programas, testes)
```
- **`%tky`** (transactional key — inclui indicador de draft), **`%cid`** (content ID temporário para instâncias novas), **`%control`** (flags de campos informados, `if_abap_behv=>mk-on`).
- **`failed`** (instâncias com erro), **`reported`** (mensagens), **`mapped`** (mapeamento %cid → chave).
- Padrão das implementações: **Ler → Processar → Modificar** (determinations/actions) ou **Ler → Verificar → Reportar** (validations).

## 🔗 Relacionados
- [Behavior Pool](/glossario/behavior-pool)
- [Determinations e Validations](/glossario/determinations-e-validations)
- [Actions RAP](/glossario/actions-rap)

## 📚 Fontes
- Apostila - ABAP RAP
- Apostila - Padrão Wrapper para BAPIs
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP RAP](/glossario/temas/abap-rap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
