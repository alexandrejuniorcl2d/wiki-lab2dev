---
title: "Business Builder"
description: "Camada semântica de negócio do Datasphere que traduz o Data Layer técnico em entidades, medidas, atributos, fact models, consumption models e perspectivas com segurança por linha na linguagem do decisor."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Business Layer` · `Camada de Negócio Datasphere` · `Business Entity` · `Business Entities` · `Fact Model` · `Consumption Model` · `Perspectives` · `Perspectivas Datasphere` · `Authorization Scenario` · `Global Dimensions` · `Key Figures Calculados`

> **Definição**
> Camada semântica de negócio do Datasphere que traduz o Data Layer técnico em entidades, medidas, atributos, fact models, consumption models e perspectivas com segurança por linha na linguagem do decisor.
{.is-info}

**Por que separar Data Layer × Business Layer:** o técnico (`TBL_SLS_DTL_2023`, joins crípticos) é poderoso mas inacessível; o de negócio fala "Receita Bruta", "Margem de Lucro", "Cliente por Região". O Business Builder é o **tradutor**.

**Blocos:**
1. **Business Entities** — *fatos de negócio* (eventos e métricas: vendas, entregas, despesas → "quanto") e *dimensões* (contexto: cliente, produto, tempo, centro de custo → quem/o quê/onde/quando). Nome técnico até **30** caracteres.
2. **Mapeamento** — liga views do [Data Builder](/glossario/data-builder) às entidades (`CUST_ID` → "ID do Cliente", `SALE_AMT` → "Valor da Venda").
3. **Medidas (key figures)** agregáveis (soma, média, contagem) e **atributos** descritivos — "humanização" do dado.
4. **Associações de negócio** — Vendas N:1 Cliente, N:1 Produto; joins gerenciados nos bastidores.
5. **Fact Model** — combina fatos que compartilham dimensões (vendas × entregas por produto e tempo).
6. **Consumption Model** — artefato final que o SAC enxerga: "contrato de dados" com medidas, atributos e associações expostos.
7. **Perspectives** — máscaras sobre o consumption model por público (CFO: margem, custo, receita; gerente de vendas: volume, descontos, quantidade), sem duplicar.
8. **Authorization Scenarios** — segurança em linha em termos de negócio ("só a região do perfil"); abstração dos **Data Access Controls**, exige privilégio *Data Warehouse Authorization Scenario*.
9. **Hierarquias de negócio** (continente → país → estado; até shapefiles customizados) e **Global Dimensions** (calendário, geografia reutilizados — "Ano Fiscal" igual para todos).
10. **Key figures calculados** sem código (margem %, YoY, MoM) definidos uma vez no modelo.

**Ciclo de vida:** *Preview de consumo* (simula o relatório no SAC) e **versionamento** (V1.0 em produção → V1.1 em desenvolvimento → ativação; V1.0 arquivada) com transporte entre ambientes.

> **Business Builder × Analytic Model**
> O Business Builder é a camada semântica clássica; a SAP tem priorizado o **[Analytic Model](/glossario/analytic-model)** (Data Builder) como objeto de consumo analítico para o SAC.
{.is-success}

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [Data Builder](/glossario/data-builder)
- [Analytic Model](/glossario/analytic-model)
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [Catálogo e Governança Datasphere](/glossario/catalogo-e-governanca-datasphere)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 1)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
