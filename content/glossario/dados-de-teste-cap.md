---
title: "Dados de Teste CAP"
description: "Estratégia de dados de amostra no CAP: arquivos CSV por entidade carregados automaticamente pelo cds watch, separação db/data × test/data, IDs fixos para testes determinísticos e carga deliberada em HANA."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `CSV CAP` · `db/data` · `test/data` · `Mock Data CAP` · `namespace-Entity.csv` · `Dados como Código` · `Data as Code` · `hdbtabledata` · `UUIDs determinísticos`

> **Definição**
> Estratégia de dados de amostra no CAP: arquivos CSV por entidade carregados automaticamente pelo cds watch, separação db/data × test/data, IDs fixos para testes determinísticos e carga deliberada em HANA.
{.is-info}

**Por que importa:** dados de teste são mitigação de risco — testes de UI resilientes (casos de borda, paginação), performance (N+1, índices, volume representativo) e lógica de negócio complexa.

**Convenção:** `db/data/<namespace>-<Entidade>.csv` (ex.: `sap.capire.techbooks-Books.csv`) mapeia automaticamente para a entidade. Associações viram coluna **`<assoc>_ID`**:
```csv
ID,title,stock,author_ID
b00k-c47-p037-r1ck-1,Advanced CAP Data Strategies,50,auth-d4n-131-j0hns-0n
```

| `db/data` | `test/data` |
|---|---|
| Dados iniciais, configuração, mestres (países, moedas, categorias) | Amostras para dev local e testes (pedidos, usuários fictícios) |
| Incluído no `cds build` (deploy HANA exige configuração explícita) | Carregado pelo `cds watch`, ignorado por `cds build --production` |

- **UUIDs fixos e legíveis** (`entidade-desc-id`) → testes repetíveis e depuração simples.
- **Ordem de criação:** entidades pai primeiro (Authors, Categories → Books → Reviews); valide com `GET /catalog/Books('...')?$expand=reviews` (curl).
- **Perfis de dados:** `cds watch` usa SQLite `:memory:`; `cds watch --profile test` pode usar `test-db.sqlite` persistente com outro dataset.
- **Larga escala:** scripts (Faker.js, Pandas) ou ferramentas (Mockaroo) — versione o gerador (`test/datagen/generate.js`).
- **Testes automatizados (Jest):** não mocke o serviço — consuma-o; a camada de dados é que está "mockada" via CSV (`await CatalogService.read('Books', id)` e `expect(avg).toBe(4.5)`).
- **Produção (HANA):** CSVs **não** são carregados por padrão (salvaguarda contra sobrescrever dados). Para configuração, gere `.hdbtabledata` e ajuste o `mta.yaml`; dados transacionais só em não-produção.
- **Troubleshooting CSV:** delimitador `;` em vez de `,` (tudo numa coluna), datas fora do ISO `YYYY-MM-DD`, encoding diferente de UTF-8 (acentos), aspas/quebras de linha (envolva em `"` e duplique aspas internas).

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [Projeto CAP](/glossario/projeto-cap)
- [CDS no CAP](/glossario/cds-no-cap)
- [Event Handlers CAP](/glossario/event-handlers-cap)

## 📚 Fontes
- Apostila - SAP CAP (Completa)

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
