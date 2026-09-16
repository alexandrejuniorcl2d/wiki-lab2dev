---
title: "Catálogo e Governança Datasphere"
description: "Catálogo de dados do Datasphere que transforma o \"pântano de dados\" em biblioteca: busca inteligente, glossário de negócio vinculado a objetos físicos, linhagem e análise de impacto, profiling, enriquecimento por IA e certificação colaborativa."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Data Catalog Datasphere` · `SAP Datasphere Catalog` · `Business Glossary Datasphere` · `Glossário de Negócios` · `Data Lineage` · `Linhagem de Dados` · `Análise de Impacto` · `Data Profiling` · `Data Steward` · `Crawling Datasphere` · `AI-Assisted Natural Language Search` · `Data Products`

> **Definição**
> Catálogo de dados do Datasphere que transforma o "pântano de dados" em biblioteca: busca inteligente, glossário de negócio vinculado a objetos físicos, linhagem e análise de impacto, profiling, enriquecimento por IA e certificação colaborativa.
{.is-info}

**Problema do data swamp:** analistas perdem tempo procurando dados, esforços duplicados, incerteza sobre origem e falta de idioma comum ("Receita Líquida" implementada como `0NET_VALUE` ou `0NET_VAL_HD`).

**Três pilares:** **busca** (estilo Google, *AI-Assisted Natural Language Search* — "vendas por região") · **glossário** (o *quê* ligado ao *onde*) · **linhagem** (da origem ao dashboard).

- **Crawling:** varredura automática de metadados do Datasphere e do **SAC** (stories, modelos — via Tenant Links) e de fontes externas (S/4HANA CDS, BW/4HANA InfoProviders, ECC, BigQuery, Azure, Oracle, SQL Server).
- **Glossário de negócios:** termos, definições aprovadas, sinônimos ("Faturamento", "Vendas Totais" → "Receita Bruta"), **Data Steward** responsável; privilégios *Catalog Glossary* e *Catalog Glossary Object*.
- **Organização:** tags (#Certificado, #PII, #GDPR) e hierarquias de termos — privilégio *Catalog Tag Hierarchy*.
- **Vínculo termo-objeto:** "Receita Líquida" ↔ coluna `0NET_VALUE` de `/IMO/D_SD40` (privilégios *Catalog Asset*).
- **Linhagem ("mapa do metrô"):** S/4HANA → DataSource `0C_SERVICEORDERITEMDEX` → ADSO `/IMO/D_SRV410` → InfoSource → CompositeProvider `/IMO/V_SRV410` → story SAC — causa raiz e auditoria.
- **Análise de impacto:** alterar `/IMO/D_SD41.0NET_VALUE` afeta 2 CompositeProviders (ex.: `/IMO/V_SD50`), 1 modelo analítico e 5 stories — planeje e comunique.
- **Data profiling:** distribuição de valores, min/máx/média/desvio, % nulos, cardinalidade.
- **Enriquecimento:** descrições, donos e classificação manuais + *AI-Enhanced Metadata Enrichment* (resumos, tags e termos sugeridos).
- **Governança colaborativa:** avaliações (1–5), comentários/discussões e **certificação** pelo Data Steward.

**KPIs de governança:** cobertura do catálogo (% ativos críticos), enriquecimento (% com descrição e steward), adoção do glossário, confiança (% relatórios sobre ativos certificados), eficiência (tempo para encontrar dados).

**Data Mesh com Datasphere:** spaces = domínios de negócio · analytic models/views = **data products** · Data/Business Builder = plataforma self-service · roles e DACs = governança computacional federada.

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [Business Builder](/glossario/business-builder)
- [Segurança Datasphere](/glossario/seguranca-datasphere)
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 2)
- Apostila - SAP Datasphere (Parte 1)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
