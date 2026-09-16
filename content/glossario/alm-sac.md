---
title: "ALM SAC"
description: "Ciclo de vida no SAC entre tenants DEV, QA e PROD: transporte pelo Analytics Content Network (padrão) ou arquivo .tgz, dependências automáticas, mapeamento de conexões, itens manuais (roles, usuários, agendamentos), segregação de funções e troublesh…"
tags: ["glossario","sap-sac"]
---
**Também conhecido como:** `Analytics Content Network` · `ACN` · `Transporte SAC` · `Exportação tgz SAC` · `Mapeamento de Conexões SAC` · `Content Package SAC` · `DEV QA PROD SAC`

> **Definição**
> Ciclo de vida no SAC entre tenants DEV, QA e PROD: transporte pelo Analytics Content Network (padrão) ou arquivo .tgz, dependências automáticas, mapeamento de conexões, itens manuais (roles, usuários, agendamentos), segregação de funções e troubleshooting.
{.is-info}

**Riscos sem processo:** conteúdo não homologado em produção, permissões erradas e — o pior — desenvolvimento direto em produção.

| Analytics Content Network (ACN) — padrão | Export/import `.tgz` — clássico |
|---|---|
| Repositório central na BTP; integrado a permissões; auditoria de quem exportou o quê; conteúdo privado ou público (Business Content) | Backup físico de versão, landscapes sem ACN, casos específicos (bookmarks pessoais — mesmo User ID nos dois lados); exportar → mover arquivo → importar |

**Empacotar (DEV):** área de exportação → pacote com nome/descrição padronizados (`PROJETO_RELEASE_CONTEUDO_YYYYMMDD`) → adicionar stories, modelos etc. → revisar **dependências sugeridas** (modelos, conexões live/acquired, imagens, dimensões públicas e hierarquias, variáveis e cálculos) → exportar para o Content Network.

**Importar (QA/PROD):** **mapeamento de conexões** (`SAP_HANA_DEV` → `SAP_HANA_PROD`, `Google_BigQuery_QA` → `..._PROD`) — as conexões de destino precisam existir e funcionar **antes**.

**Configuração manual por tenant:** roles (mesmos nomes e permissões), usuários e teams, configurações do sistema e **agendamentos de publicação** — documente num **runbook**.

**Business Content:** instale no DEV (nunca em PROD), estude, copie o útil, ligue aos seus modelos/conexões e transporte a versão adaptada — o padrão é template, não solução final.

**Checklist pré-transporte:** nomenclatura (`WIP_Vendas_2024`, `FINAL_FIN_Balanco_V1.2`), backup `.tgz` da versão atual de produção, pacote sem rascunhos, log de mudanças.

**Segregação de funções:** exportação por devs sênior/arquitetos (*Export/Publish Content*); importação em produção só por admins (*Import Content* + *Manage*), nunca pelos próprios devs.

**Troubleshooting:** *objeto dependente não encontrado* → novo pacote com a dependência · importou mas story quebrou → mapeamento de conexão ou autorização do usuário técnico da conexão de produção · erro genérico → *Show More* e **Correlation ID** no chamado.

**Regra de ouro:** ⛔ **não desenvolva em produção**; sincronize DEV com PROD periodicamente e transporte em unidades lógicas por demanda.

## 🔗 Relacionados
- [Administração SAC](/glossario/administracao-sac)
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [ALM Datasphere](/glossario/alm-datasphere)

## 📚 Fontes
- Apostila - SAP Analytics Cloud

---
🧭 [SAP Analytics Cloud](/glossario/temas/sap-analytics-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
