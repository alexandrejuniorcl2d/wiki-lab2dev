---
title: "SAC Planning"
description: "Planejamento integrado no SAC (fim das planilhas): modelos com tempo, versão e contas, versões públicas e privadas, tabelas com input, desagregação top-down, regras de validação, data locking, input tasks, moedas e comentários."
tags: ["glossario","sap-sac"]
---
**Também conhecido como:** `Planejamento SAC` · `Planning Model SAC` · `Public Version` · `Private Version` · `Versão Pública` · `Versão Privada` · `Input-ready Cells` · `Fluid Data Entry` · `Disaggregation SAC` · `Validation Rules SAC` · `Data Locking` · `Input Task` · `Rolling Forecast` · `Planning Area`

> **Definição**
> Planejamento integrado no SAC (fim das planilhas): modelos com tempo, versão e contas, versões públicas e privadas, tabelas com input, desagregação top-down, regras de validação, data locking, input tasks, moedas e comentários.
{.is-info}

**Uma bússola para toda a empresa:** Finanças, RH e Vendas planejando na mesma fonte da verdade, sem reconciliar versões de arquivos.

**Arquitetura do modelo de planejamento:** dimensão de **tempo** (ano, trimestre, mês) · **Version/Category** (no mínimo *Actual*, *Budget*, *Forecast*) · **Account** (métricas financeiras e operacionais, ex.: despesas, headcount) — ver [Modelagem SAC](/glossario/modelagem-sac).

| Public version | Private version |
|---|---|
| Oficial ("Orçamento Aprovado 2024"), fonte dos relatórios, acesso por permissão | Cópia pessoal isolada para simular; só o criador vê até compartilhar ou publicar |

**Tabela de planejamento:** células *input-ready* (leitura e escrita) e agregados calculados automaticamente (somente leitura) — tabela de BI é só leitura.

**Lançamento ágil (fluid data entry):** digitação direta, copiar/colar do Excel e atalhos em massa — `+10%`, `*2`, `=500`.

**Top-down (disaggregation):** digite R\$ 1.200.000 no total do ano → distribui igualmente (R\$ 100.000/mês) ou **proporcionalmente** ao que já existe (trimestre com 30% recebe 30%).

**Governança:**
- **Validation rules:** combinações válidas de membros e limites (viagens do CC Vendas ≤ R\$ 50.000; novas contratações não negativas no Forecast) — input bloqueado com mensagem customizada.
- **Data locking:** trava combinações (ex.: *Budget, Q1 2024*) após aprovação → células somente leitura.
- **Calendar + input tasks:** atribuir tarefas de input a responsáveis e acompanhar o progresso — ver [Colaboração SAC](/glossario/colaboracao-sac).
- **Moedas:** input em moeda local (BRL, EUR) e análise consolidada (USD) com tabela central de taxas (*Average*, *Closing*).
- **Comentários em células:** explicam o "porquê" ("aumento de 20% pelo lançamento no Q3"), com threads e histórico auditável.

**Cenário — orçamento de viagens:** modelo com Conta, Centro de Custo, Tempo e Categoria → input tasks para os gestores numa versão pública Budget → gestor de Vendas simula uma feira numa versão privada → validation rule limita o total → data locking após aprovação.

**Exercício:** copiar "Budget Oficial" para "[Seu Nome] – Simulação" (privada), filtrar seu centro de custo, selecionar o ano, digitar `+10%` e comentar o motivo no total.

**Integrações:** planejamento sobre *actuals* do Datasphere com write-back via OData ([Datasphere e SAC](/glossario/datasphere-e-sac)); cenários híbridos com BPC e retração para o S/4HANA ([Data Actions SAC](/glossario/data-actions-sac)).

> Planejamento **contínuo** (rolling forecasts, versões privadas), **colaborativo** (input tasks, comentários) e **auditável** (versões, data locking, validation rules).

## 🔗 Relacionados
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [Data Actions SAC](/glossario/data-actions-sac)
- [Modelagem SAC](/glossario/modelagem-sac)
- [Augmented Analytics SAC](/glossario/augmented-analytics-sac)
- [Colaboração SAC](/glossario/colaboracao-sac)

## 📚 Fontes
- Apostila - SAP Analytics Cloud
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Analytics Cloud](/glossario/temas/sap-analytics-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
