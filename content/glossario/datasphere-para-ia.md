---
title: "Datasphere para IA"
description: "Datasphere como base governada para data science e IA: Python/Jupyter conectados, machine learning dentro do HANA (PAL, APL via hana_ml com pushdown), write-back de previsões, federação e recursos de Joule/SAP Business AI."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `hana_ml` · `HANA ML` · `Predictive Analysis Library` · `Automated Predictive Library` · `SAP HANA Cloud Script Server` · `In-Database Machine Learning` · `ABAP SQL Service` · `SAP Business AI Datasphere` · `AI Units`

> **Definição**
> Datasphere como base governada para data science e IA: Python/Jupyter conectados, machine learning dentro do HANA (PAL, APL via hana_ml com pushdown), write-back de previsões, federação e recursos de Joule/SAP Business AI.
{.is-info}

**Plataforma unificada:** dados de negócio com semântica (S/4HANA, BW, ECC + não-SAP) em spaces seguros e com a força do HANA Cloud (AWS, Azure, GCP, inclusive região Brasil).

**Python conectado:** Pandas, scikit-learn, TensorFlow com OAuth client (*Interactive Usage*/API access) ou database user.

**ML dentro do banco** (habilite o **SAP HANA Cloud Script Server** no tenant):
| Biblioteca | Para quem | O que oferece |
|---|---|---|
| **APL** (Automated Predictive Library) | Democratizar IA | Automação de features, treino e seleção de modelos |
| **PAL** (Predictive Analysis Library) | Cientista de dados | 100+ algoritmos: clustering, classificação, séries temporais (ARIMA, suavização exponencial) |

**`hana_ml`:** API estilo Pandas cujas operações viram SQL executado no HANA (**pushdown**):
```python
from hana_ml import ConnectionContext
from hana_ml.dataframe import DataFrame
cc = ConnectionContext(address='SEU-TENANT.hanacloud.ondemand.com', port=443,
                       user='SEU_SPACE#DBUSER', password='***')
hdf = DataFrame(cc, 'SELECT * FROM "SEU_SPACE#DBUSER"."TABELA_VENDAS"')
print(hdf.count()); print(hdf.head(5).collect())   # collect() traz o resultado ao cliente
# predictions.save('PREVISOES_CHURN')  → write-back como tabela governada no space
cc.close()
```

**Client-side × server-side:** `pd.read_sql` puxa tudo para a RAM local (flexível, ruim para big data); `hana_ml` envia 1 KB de comando e recebe só o resultado. Use server-side para \~80% (ETL, agregação, treino em escala) e client-side para amostras, visualização e algoritmos de nicho.

**Casos:** previsão de demanda com histórico do S/4HANA (PAL, séries temporais) e **churn** (classificação com score 0–100%) → previsões salvas no space → modelos de "Receita em Risco" → dashboards no SAC.

**Federação para IA:** remote tables via Cloud Connector/DP Agent; **ABAP SQL Service** expõe CDS views do S/4HANA em tempo real sem replicação.

**Qualidade com IA:** Intelligent Lookup (fuzzy matching) harmoniza dados mestres antes de treinar.

**Joule e SAP Business AI:** perguntas em linguagem natural ("liste as visões de vendas com dados do Brasil"), *AI-Assisted Catalog Content Generation* e busca em linguagem natural; DW Administrator habilita *SAP Business AI* (pode exigir **AI units**).

**MLOps:** Git para scripts, catálogo e linhagem para modelos, database user dedicado com menor privilégio e System Monitor.

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [SAP AI Core](/glossario/sap-ai-core)
- [SAP Joule](/glossario/sap-joule)
- [Consumo Externo Datasphere](/glossario/consumo-externo-datasphere)
- [Catálogo e Governança Datasphere](/glossario/catalogo-e-governanca-datasphere)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
