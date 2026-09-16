---
title: "Administração SAC"
description: "Governança do tenant SAC: provisionamento de usuários (manual, CSV, SCIM com IdP), teams, roles padrão e customizadas, licenças, System Monitor e Correlation ID, DAC, segurança de conexões, configurações globais, performance, lixeira e troca de prop…"
tags: ["glossario","sap-sac"]
---
**Também conhecido como:** `Users SAC` · `Teams SAC` · `Roles SAC` · `Custom Roles SAC` · `BI Admin` · `System Owner` · `BI Content Viewer` · `Data Access Control SAC` · `Correlation ID` · `Redeploy Model` · `Change Owner` · `Deleted Files SAC` · `System Monitor SAC` · `Z_POWER_VIEWER`

> **Definição**
> Governança do tenant SAC: provisionamento de usuários (manual, CSV, SCIM com IdP), teams, roles padrão e customizadas, licenças, System Monitor e Correlation ID, DAC, segurança de conexões, configurações globais, performance, lixeira e troca de proprietário.
{.is-info}

**Usuários:** criação manual (User ID, first/last name) · importação **CSV** em massa com roles e teams · **SCIM** integrado ao IdP (melhor prática — ciclo de vida automatizado).

**Teams:** grupos que espelham a empresa; compartilhe pastas, stories, bookmarks e agendamentos com o team, não com indivíduos — entrar/sair do team atualiza o acesso. "O acesso é concedido à legião, não aos soldados."

**Roles (o que o usuário pode fazer):**
- **Padrão:** *Admin*, *BI Admin*, *System Owner*; *Digital Boardroom Creator/Viewer*; *Predictive Content Creator/Admin*; *Translator*; *BI Content Viewer*.
- **Customizadas:** do zero ou copiando uma padrão — menor privilégio (ex.: analista de marketing cria stories mas não modelos).

**Licenças:** BI × Planning Professional; alinhe licença, role e uso — um *BI Viewer* com licença Planning sem login há 95–120 dias é candidato a realocação (TCO).

**Monitoramento:** *System > Monitor* (CPU, memória, disco) e **Correlation ID** ("Something unexpected happened…") para rastrear logs e abrir chamado na SAP. *System > Performance* mostra tempo de carga das stories; **Redeploy Model** regenera artefatos de runtime (dados incorretos, exceções, pós-upgrade).

**Segurança de dados:** **DAC** por membro de dimensão com Read/Write para usuários ou teams (gerente Sul vê só Sul; diretoria vê tudo no mesmo relatório). **Conexões:** SAML SSO, OAuth 2.0 (access/refresh token) para nuvem, usuário e senha salvos para todos, certificados SSL confiáveis (autoassinados podem falhar).

**Rastreabilidade:** histórico de discussões, assignees/owners no calendário e dono de cada arquivo (**Change Owner** quando alguém sai da empresa).

**Configuração global** (*System > Administration > System Configuration*): logo e fundo, formatos de número/data, idioma, **aplicação padrão** (story corporativa ou catálogo) e **timeout de sessão**.

**Content Network:** importar pacotes de stories, dashboards e modelos (aceleração, melhores práticas, prova de valor).

**Higiene:** *Deleted Files* retém por **30 dias** (quem tem *Manage rights on the Deleted Files* restaura de outros) e *Change Owner* para continuidade.

**Exercício — role `Z_POWER_VIEWER`:** *Security > Roles* → copiar *BI Content Viewer* → *Execute* em *Publish Content* (exportação), *Read* em Analytic e Planning Models, *Execute* em *Data Analyzer* → sem Create/Update/Delete em stories e modelos.

## 🔗 Relacionados
- [SAP Analytics Cloud](/glossario/sap-analytics-cloud)
- [Modelagem SAC](/glossario/modelagem-sac)
- [ALM SAC](/glossario/alm-sac)
- [Colaboração SAC](/glossario/colaboracao-sac)

## 📚 Fontes
- Apostila - SAP Analytics Cloud

---
🧭 [SAP Analytics Cloud](/glossario/temas/sap-analytics-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
