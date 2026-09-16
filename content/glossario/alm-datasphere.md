---
title: "ALM Datasphere"
description: "Ciclo de vida de aplicações no Datasphere: tenants DEV/QA/PROD, transporte por export/import CSN/JSON ou Content Network, CTS+/gCTS no BW Bridge, CLI para CI/CD com Git e governança de releases."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Transporte Datasphere` · `Export Import Datasphere` · `CSN JSON Datasphere` · `Private Content Network` · `datasphere login` · `datasphere content import` · `Git Flow Datasphere` · `DEV QA PROD Datasphere`

> **Definição**
> Ciclo de vida de aplicações no Datasphere: tenants DEV/QA/PROD, transporte por export/import CSN/JSON ou Content Network, CTS+/gCTS no BW Bridge, CLI para CI/CD com Git e governança de releases.
{.is-info}

**Paisagem:** tenants dedicados DEV → QA → PROD, isolados e com fluxo controlado (Free tem configuração fixa de 128 GB/32 GB; Standard redimensiona).

**Mecanismos de transporte:**
| Mecanismo | Como | Uso |
|---|---|---|
| **Export/Import** | Pacote JSON no formato **CSN** (Core Schema Notation) | Transportes manuais, backups de versão, base para CLI e Git |
| **Content Network** (privada) | *Push* do DEV → *Discover/Import* no QA/PROD | Transporte padronizado entre tenants da mesma organização |
| **CTS+ / gCTS** | Transporte ABAP clássico ou com Git | Objetos do [SAP BW Bridge](/glossario/sap-bw-bridge) (ADSOs, CompositeProviders, InfoObjects) |

**O que viaja:** Data Builder (tabelas, views, data/transformation flows, task chains, definições de conexão, intelligent lookups) e Business Builder (dimensões, fatos, consumption models, authorization scenarios, hierarquias). **Não viajam:** usuários e atribuições de roles — recrie em cada tenant ou automatize com SCIM 2.0 (definições de roles viajam).

**Dependências:** analise antes de exportar, empacote objeto + dependências (tabelas base, views, conexões) juntos; a importação resolve a ordem de ativação.

**CLI (base do CI/CD):**
```bash
# OAuth client "Interactive Usage" com Redirect URI http://localhost:8080/
datasphere login -h <host> -c <client_id> -s <secret>
datasphere content import -p /path/to/your_package.json
datasphere content export -o <object_id_1>,<object_id_2> -f package_backup.json
```
Integra com Jenkins, Azure DevOps e GitHub Actions; exports agendados (cron) + commits no Git = pontos de restauração auditáveis (checkout da versão anterior e re-import).

**Git Flow:** `main` (= produção, sem commit direto) · `develop` (= QA) · `feature/*` · `hotfix/*` (sai de main, volta para main e develop).

**Erros comuns:** dependência não encontrada (inclua no pacote) · nome já existe (Overwrite com cautela; nomes técnicos únicos, até 50 caracteres) · falta de autorização do usuário/OAuth client no destino (ex.: privilégios `User (--M)`, `Role (CRUD---)`).

**Governança:** cadência de releases, **CAB** para go/no-go, release notes, validação pós-deploy (System Monitor, audit logs) e testes em QA (unitário, integração, regressão, **UAT**; *Database Analysis Users* só-leitura para o time de testes).

## 🔗 Relacionados
- [SAP Datasphere](/glossario/sap-datasphere)
- [Segurança Datasphere](/glossario/seguranca-datasphere)
- [SAP BW Bridge](/glossario/sap-bw-bridge)
- [DevOps no BTP](/glossario/devops-no-btp)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 2)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
