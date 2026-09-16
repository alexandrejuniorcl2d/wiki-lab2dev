---
title: "DCL - Access Control"
description: "Linguagem de controle de acesso das CDS: roles que filtram linhas no banco conforme autorizações PFCG do usuário (AND implícito na query)."
tags: ["glossario","sap-cds"]
---
**Também conhecido como:** `DCL` · `Data Control Language` · `Access Control` · `DEFINE ROLE` · `grant select on` · `aspect pfcg_auth` · `@AccessControl.authorizationCheck` · `Row-Level Security` · `inheriting conditions`

> **Definição**
> Linguagem de controle de acesso das CDS: roles que filtram linhas no banco conforme autorizações PFCG do usuário (AND implícito na query).
{.is-info}

```sql
@EndUserText.label: 'Ordens por Org. Vendas'
@MappingRole: true
define role Z_SalesOrder_By_SalesOrg {
  grant select on C_SalesOrder
    where ( SalesOrganization ) =
      aspect pfcg_auth ( V_VBAK_VKO, VKORG, ACTVT = '03' );
}
```
1. Na view: `@AccessControl.authorizationCheck: #CHECK`.
2. Criar objeto *Access Control* (ADT: New > Core Data Services > Access Control, informando a *Protected Entity*).
3. Definir a role com condições estáticas ou objetos PFCG.

- Sem access control, o usuário vê **todos** os dados da entidade.
- **Row-level security:** usuários diferentes executando a mesma view recebem dados diferentes.
- **DSAG:** use `where inheriting conditions from entity <view SAP base>` para herdar restrições já codificadas pela SAP.
- Valide com o **Data Preview (F8)**, que já aplica o DCL do seu usuário. "Uma regra de segurança não testada é apenas uma suposição." Se vierem menos registros do que o esperado, suspeite de um DCL.

## 🔗 Relacionados
- [CDS View](/glossario/cds-view)
- [Autorizações SAP](/glossario/autorizacoes-sap)
- [Segurança ABAP](/glossario/seguranca-abap)

## 📚 Fontes
- Apostila - ABAP CDS
- Apostila - CDS Views para Funcionais (Parte 2)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP CDS](/glossario/temas/abap-cds) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
