---
title: "Deploy CAP"
description: "Levar um app CAP à produção no BTP: perfis SQLite→HANA, mta.yaml com módulos (db-deployer, srv, app) e recursos (HDI, XSUAA, destination), mbt build + cf deploy, testes híbridos com cds bind, CI/CD e observabilidade."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `cds build` · `cds deploy` · `cds bind` · `cds watch --profile hybrid` · `default-env.json` · `.cdsrc-private.json` · `hdi-shared` · `techbooks-db-deployer` · `cf logs` · `SAP Application Logging Service` · `CI/CD CAP`

> **Definição**
> Levar um app CAP à produção no BTP: perfis SQLite→HANA, mta.yaml com módulos (db-deployer, srv, app) e recursos (HDI, XSUAA, destination), mbt build + cf deploy, testes híbridos com cds bind, CI/CD e observabilidade.
{.is-info}

**Perfis:** `[development]` → `sqlite` `:memory:`; `[production]` → `hana` (ativado automaticamente no deploy).

**`mta.yaml` — o que construímos × o que consumimos:**
| Módulos (`modules`) | Recursos (`resources`) |
|---|---|
| `techbooks-db-deployer` — aplica `.hdbtable`/`.hdbview` no container HDI | `techbooks-db` — `com.sap.xs.hdi-container` (plano `hdi-shared`) no HANA Cloud |
| `techbooks-srv` — Node.js (`gen/srv`), expõe OData, `provides: srv-api` | `techbooks-uaa` — XSUAA plano `application`, `path: ./xs-security.json` |
| `techbooks-app` — UI5/Fiori servida pelo AppRouter | `techbooks-destination` — opcional, serviços externos |

```yaml
modules:
  - name: techbooks-srv
    type: nodejs
    path: gen/srv
    parameters: { buildpack: nodejs_buildpack }
    provides: [ { name: srv-api, properties: { srv-url: ${default-url} } } ]
    requires: [ { name: techbooks-db }, { name: techbooks-uaa } ]   # bindings injetam credenciais
resources:
  - name: techbooks-db
    type: com.sap.xs.hdi-container
    parameters: { service: hana, service-plan: hdi-shared }
  - name: techbooks-uaa
    type: org.cloudfoundry.managed-service
    parameters: { service: xsuaa, service-plan: application, path: ./xs-security.json,
                  config: { xsappname: techbooks-${org}-${space}, tenant-mode: dedicated } }
```

**Build e deploy:**
```bash
mbt build -p=cf -t ./mta_archives          # lê mta.yaml, builda módulos, gera techbooks_1.0.0.mtar
cf deploy mta_archives/techbooks_1.0.0.mtar -f   # cria serviços, implanta módulos, faz bindings, inicia apps
```

**Killer feature — teste híbrido:** `cds bind` busca credenciais reais do BTP (HANA, XSUAA, Destination) e salva em `.cdsrc-private.json`/`default-env.json` (⚠️ segredos — sempre no `.gitignore`); `cds watch --profile hybrid` roda local com serviços reais — feedback instantâneo e debug no editor, sem o ciclo lento build → deploy.

**CI/CD:** commit → trigger → `mbt build` → testes automatizados → deploy staging → aprovação (opcional) → produção (ver [DevOps no BTP](/glossario/devops-no-btp)).

**Observabilidade:** `cf logs techbooks-srv` (tempo real) e `--recent` (histórico); **SAP Application Logging Service** (Kibana) para persistência central, busca e alertas.

**Arquitetura final:** navegador → AppRouter (`techbooks-app`) ↔ XSUAA (JWT) → `techbooks-srv` (lógica, valida token) → container HDI no SAP HANA Cloud.

**Onde aprender mais:** Capire (`cap.cloud.sap`), SAP Community, tutoriais em developers.sap.com, exemplos `SAP-samples` no GitHub.

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [MTA](/glossario/mta)
- [Projeto CAP](/glossario/projeto-cap)
- [SAP HANA Cloud](/glossario/sap-hana-cloud)
- [DevOps no BTP](/glossario/devops-no-btp)
- [Segurança CAP](/glossario/seguranca-cap)

## 📚 Fontes
- Apostila - SAP CAP (Completa)
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
