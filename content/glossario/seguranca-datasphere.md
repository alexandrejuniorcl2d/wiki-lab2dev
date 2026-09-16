---
title: "Segurança Datasphere"
description: "Segurança em 4 níveis (tenant, space, objeto, linha) com IdP SAML, roles padrão e scoped roles, Data Access Controls para row-level security, auditoria, gestão de usuários em massa e responsabilidade compartilhada de backup."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `DW Administrator` · `DW Consumer` · `Data Access Controls` · `DAC` · `Row-Level Security Datasphere` · `Audit Policies Datasphere` · `API SCIM 2.0` · `Database Analysis User` · `Support User Datasphere`

> **Definição**
> Segurança em 4 níveis (tenant, space, objeto, linha) com IdP SAML, roles padrão e scoped roles, Data Access Controls para row-level security, auditoria, gestão de usuários em massa e responsabilidade compartilhada de backup.
{.is-info}

| Nível | Controle |
|---|---|
| 1. **Tenant** | Autenticação via IdP, IP Allowlist, configurações globais |
| 2. **Space** | Container isolado, recursos e membros com papéis |
| 3. **Objeto** | Quem vê/modifica tabelas, views, modelos |
| 4. **Dado (linha)** | **Data Access Controls** (row-level security) |

**Identidade:** padrão SAP Cloud Identity Services; IdP customizado (Azure AD) via **SAML 2.0** — troca de metadados, mapeamento de atributos (UserID, Email, LastName; asserção grande demais causa erro de login) e SSO.

**Roles padrão:**
| Role | Pode | Não pode |
|---|---|---|
| **DW Administrator** | Usuários, roles, spaces, administração | Acessar apps de modelagem (Data Builder) |
| **DW Modeler** | Data Builder (CRUD), Business Builder (leitura) nos spaces atribuídos | — |
| **DW Consumer** | Ver dados expostos, conectar BI | Criar/modificar objetos |

**Scoped roles:** role (ex.: template *DW Space Administrator*) vinculada a spaces específicos — "admin só do Financeiro" gerencia membros e conexões apenas no space FINANCE (ex. pré-definido: *DW Scoped Space Administrator*).

**Data Access Controls (DAC):**
1. No Data Builder, criar objeto DAC apontando uma **tabela de critérios** (mapeia usuário → clientes/regiões) e as colunas de filtro.
2. Na view a proteger, seção *Data Access Control*, selecionar o DAC e mapear colunas (`DAC.Vendedor` → `View.Vendedor`).
3. Deploy → toda query recebe `WHERE` dinâmico pela identidade (ex.: vendedor vê só suas vendas). Authorization Scenarios do [Business Builder](/glossario/business-builder) são abstrações sobre DACs.

**Auditoria:** *System > Configuration > Audit* habilita políticas por space (leituras SELECT e alterações INSERT/UPDATE/DELETE/ALTER); logs expostos como views num space de auditoria (LGPD, SOX); apagados junto com o space.

**Operação:**
- **System Monitor:** storage, top tasks por duração/memória, Task e Statement Logs (exige *Enable Expensive Statement Tracing*).
- **Notificações** (*System > Administration > Notifications*), inclusive tarefa recorrente para status do DP Agent.
- **Usuários em massa:** import CSV (*Security > Users*) ou **API SCIM 2.0** (OAuth client Technical User).
- **Linhagem e impacto:** upstream (de onde vem) e downstream (o que quebra) — ver [Catálogo e Governança Datasphere](/glossario/catalogo-e-governanca-datasphere).
- **Configurações globais:** IP allowlist (IPv4/CIDR), Workload Management, DP Agents, Cloud Connector, certificados, expensive statements trace.
- **Suporte SAP:** incidente no SAP for Me (nota 2854764: tenant ID, passos, logs) + *Allow SAP support user creation* (recomendado) ou *Create Support User* (não consome licença) — apague depois.
- **Backup (SaaS):** SAP cuida de infraestrutura, banco e DR; cliente cuida do conteúdo (transportes/exports). Deleção de space/objeto é **permanente** ("This action cannot be undone").

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [Spaces Datasphere](/glossario/spaces-datasphere)
- [Business Builder](/glossario/business-builder)
- [Consumo Externo Datasphere](/glossario/consumo-externo-datasphere)
- [Segurança BTP](/glossario/seguranca-btp)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 2)
- Apostila - SAP Datasphere (Parte 1)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
