---
title: "Spaces Datasphere"
description: "Space é a área de trabalho segura e isolada do Datasphere, com storage, computação, membros, conexões e schemas próprios — base da governança federada (TI controla o tenant, áreas de negócio operam seus spaces)."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Space Datasphere` · `Spaces` · `Scoped Roles` · `DW Space Administrator` · `DW Modeler` · `DW Viewer` · `Open SQL Schema` · `Workload Management Datasphere` · `Elastic Compute Node` · `ECN` · `System Monitor` · `Cross-Space Sharing`

> **Definição**
> Space é a área de trabalho segura e isolada do Datasphere, com storage, computação, membros, conexões e schemas próprios — base da governança federada (TI controla o tenant, áreas de negócio operam seus spaces).
{.is-info}

> "Toda aquisição, preparação e modelagem de dados acontece dentro de spaces. Os dados do space não podem ser acessados fora dele, a menos que sejam compartilhados."

**Características:** isolamento (dados, metadados, objetos), recursos dedicados (disk + in-memory), governança autônoma (membros, conexões, schemas).

**Workload Management (por space):**
| Parâmetro | Função | Padrão |
|---|---|---|
| Disk / In-Memory Storage | Cota rígida de armazenamento | Definida pelo admin |
| Priority | Ordem de execução em concorrência (1 baixa – 8 alta) | — |
| Total Statement Thread Limit | % máx. de threads do tenant | 70% |
| Total Statement Memory Limit | Memória máx. para queries | 80% |

**Membros e scoped roles:** usuários precisam ser adicionados como membros; o **scoped role** vale no escopo de um ou mais spaces (ex.: DW Space Administrator em Marketing_Analytics e só DW Viewer em Financas_Consolidado) — menor privilégio granular.

**Compartilhamento cross-space:** o dono compartilha tabela/view/analytic model com outro space → aparece como objeto referenciado; a query roda no contexto do space de origem e só o resultado volta — zero duplicação, governança com o dono (ex.: RH compartilha `V_Funcionarios_Ativos` com Finanças).

**Open SQL Schema:** schema HANA do space com usuário de banco próprio (ex.: `VENDAS_LATAM#DB_USER`) para clientes JDBC/ODBC (DBeaver), Python (`hdbcli`, pandas), R e ETLs de terceiros — auditável.

**Conexões pertencem ao space:** alinha propriedade de negócio, *need-to-know* das credenciais e autonomia do admin do space.

**Monitoramento — System Monitor:** disk storage used, memory usage e SAP HANA peak memory, **Task Logs** e **Statement Logs** (duração, CPU, memória, status), top tasks, expensive statements.

**Elastic Compute Nodes (ECN):** nó de computação separado para cargas pesadas/esporádicas (fechamento de mês): admin cria com 4/8/12/16 compute blocks e atribui spaces/objetos → *Start* replica os dados → *Running* isola a carga da instância principal → *Stop* remove réplicas e para a cobrança (**block-hours**).

**Blueprints de organização:**
| Modelo | Exemplos | Prós | Contras |
|---|---|---|---|
| Por departamento | FINANCAS, VENDAS, RH | Propriedade intuitiva | Silos se não compartilhar |
| Por projeto/caso de uso | PROJETO_FUSAO_ACME, ANALISE_CLIENTE_360 | Ágil, colaboração focada | Exige política de desativação |
| Em camadas (LSA++) | INGESTAO_RAW → DADOS_MESTRES_CURADOS → DATAMART_VENDAS | Escalável, reuso | Exige governança central forte |

**Space do BW Bridge:** criado no provisionamento, com storage próprio — "zona de pouso" para ativos BW, não é de uso geral (ver [SAP BW Bridge](/glossario/sap-bw-bridge)).

**Exemplo Vendas_Latam:** admin do tenant cria o space (100 GB disco, 50 GB memória, prioridade 6) → admin do space adiciona `ana.silva` (DW Modeler) e `bruno.costa` (DW Viewer) → cria conexões `CON_S4H_VENDAS` e `CON_ORACLE_LEGADO`.

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [Integração de Dados Datasphere](/glossario/integracao-de-dados-datasphere)
- [Data Builder](/glossario/data-builder)
- [SAP BW Bridge](/glossario/sap-bw-bridge)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 1)
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
