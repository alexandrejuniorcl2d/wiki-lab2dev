---
title: "Analytic Model"
description: "Objeto analítico do Datasphere, criado sobre fatos e dimensões do Data Builder, que empacota medidas, hierarquias, variáveis e semântica prontas para consumo no SAP Analytics Cloud, Excel e APIs."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Analytic Models` · `Modelo Analítico Datasphere` · `Expose for Consumption`

> **Definição**
> Objeto analítico do Datasphere, criado sobre fatos e dimensões do Data Builder, que empacota medidas, hierarquias, variáveis e semântica prontas para consumo no SAP Analytics Cloud, Excel e APIs.
{.is-info}

- **Base:** fato (*analytical dataset*) com associações a dimensões, hierarquias e textos definidos no [Data Builder](/glossario/data-builder).
- **Consumo:** marcado com **Expose for Consumption**, fica visível ao SAC (live), ao **SAC for Office** (Excel) e a APIs OData — ver [Consumo Externo Datasphere](/glossario/consumo-externo-datasphere).
- **O que preserva (e o SQL direto perde):** hierarquias complexas, formatação e semântica de medidas, cálculos e medidas restritas, variáveis/prompts (input parameters) e metadados de negócio.
- **Boas práticas:** um modelo analítico dedicado por dashboard, já no nível de granularidade certo, com agregações empurradas para o Datasphere (ver [Performance Datasphere](/glossario/performance-datasphere)).
- **Relação com o Business Builder:** ambos formam a camada semântica; o Business Builder oferece consumption models e perspectivas, o Analytic Model é o objeto analítico nativo do Data Builder.

## 🔗 Relacionados
- [Data Builder](/glossario/data-builder)
- [Business Builder](/glossario/business-builder)
- [Datasphere e SAC](/glossario/datasphere-e-sac)
- [Consumo Externo Datasphere](/glossario/consumo-externo-datasphere)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 1)
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
