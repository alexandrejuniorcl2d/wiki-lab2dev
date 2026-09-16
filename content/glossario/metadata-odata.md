---
title: "Metadata OData"
description: "Documento XML (EDMX) acessado por /$metadata que descreve entidades, propriedades, tipos, chaves e relacionamentos do serviço — sempre o primeiro passo."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `$metadata` · `EDMX` · `EntitySet` · `EntityType` · `Service Document` · `Metadata Caching`

> **Definição**
> Documento XML (EDMX) acessado por /\$metadata que descreve entidades, propriedades, tipos, chaves e relacionamentos do serviço — sempre o primeiro passo.
{.is-info}

```xml
<EntitySet Name="AccountCollection" EntityType="c4codata.Account"/>
<EntityType Name="Account">
  <Key><PropertyRef Name="ObjectID"/></Key>
  <Property Name="ObjectID" Type="Edm.String" Nullable="false" MaxLength="70"/>
  <Property Name="AccountName" Type="Edm.String" MaxLength="240"/>
  <NavigationProperty Name="AccountAddress" .../>
</EntityType>
```
- `<EntitySet>` → nome usado na URL · `<EntityType>` → estrutura · `<Property>` → campo · `<NavigationProperty>` → relação.
- **Regra de ouro:** nunca presuma nomes de campos (inclusive de extensão) — consulte o `$metadata`.
- **Metadata caching:** o servidor guarda o `$metadata` em cache; após alterar um serviço (ex.: novo campo) pode levar alguns minutos para refletir — "não entre em pânico".

## 🔗 Relacionados
- [OData](/glossario/odata)
- [Query Options OData](/glossario/query-options-odata)
- [Service Consumption Model](/glossario/service-consumption-model)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
