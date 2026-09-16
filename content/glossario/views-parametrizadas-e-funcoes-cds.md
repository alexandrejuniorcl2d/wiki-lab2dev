---
title: "Views Parametrizadas e Funções CDS"
description: "Parâmetros de entrada (filtro aplicado no nível mais baixo do banco) e funções nativas (CASE, CAST, conversão de moeda, datas, strings, variáveis de sessão)."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `WITH PARAMETERS` · `$session` · `$session.user` · `$session.system_language` · `CASE` · `CAST` · `CURRENCY_CONVERSION` · `UNIT_CONVERSION` · `CONCAT` · `DATS_ADD_DAYS` · `Funções SQL CDS`

> **Definição**
> Parâmetros de entrada (filtro aplicado no nível mais baixo do banco) e funções nativas (CASE, CAST, conversão de moeda, datas, strings, variáveis de sessão).
{.is-info}

```sql
define view entity ZI_JournalByCompany
  with parameters p_company_code : bukrs,
                  p_target_currency : waers
  as select from I_JournalEntryItem
{
  key AccountingDocument,
  case BillingStatus
    when 'A' then 'Não Faturado'
    when 'B' then 'Parcialmente'
    else 'Faturado'
  end as StatusFaturamento,
  cast( AmountInCompanyCodeCurrency as abap.dec(15,2) ) as FormattedAmount,
  currency_conversion( amount => AmountInCompanyCodeCurrency,
                       source_currency => CompanyCodeCurrency,
                       target_currency => $parameters.p_target_currency,
                       exchange_rate_date => $session.system_date ) as AmountInTarget,
  concat( FirstName, LastName ) as FullName,
  dats_add_days( PostingDate, 30, 'FAIL' ) as DueDate,
  $session.user as CurrentUser
}
where CompanyCode = $parameters.p_company_code
```
- **Parâmetros:** o filtro é aplicado **antes** da busca (seleções obrigatórias de empresa, data, idioma) — essencial em tabelas massivas como a ACDOCA. Consumo: `SELECT * FROM ZCDS_MAT( p_langu = 'PT' )`.
- **Benefício de negócio:** KPIs em tempo real sem batch nem ABAP complexo.

## 🔗 Relacionados
- [CDS View](/glossario/cds-view)
- [Performance ABAP no HANA](/glossario/performance-abap-no-hana)

## 📚 Fontes
- Apostila - CDS Views para Funcionais (Parte 1)
- Apostila - CDS Views para Funcionais (Parte 2)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
