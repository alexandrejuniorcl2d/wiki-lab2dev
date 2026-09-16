---
title: "MTA"
description: "Modelo que descreve e empacota todos os módulos (app, db, UI) e recursos (XSUAA, destination, HANA) de uma aplicação cloud em um único .mtar para deploy consistente."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `Multi-Target Application` · `mta.yaml` · `mtar` · `mbt build` · `cf deploy` · `MultiApps` · `Cloud MTA Build Tool`

> **Definição**
> Modelo que descreve e empacota todos os módulos (app, db, UI) e recursos (XSUAA, destination, HANA) de uma aplicação cloud em um único .mtar para deploy consistente.
{.is-info}

```yaml
_schema-version: '3.1'
ID: com.acme.bookshop
version: 1.2.0
modules:
  - name: bookshop-srv        # Node.js/Java (CAP)
    type: nodejs
    requires: [ { name: bookshop-db }, { name: bookshop-uaa } ]
  - name: bookshop-db-deployer
    type: hdb
  - name: bookshop-app-content # UI5 → HTML5 repo
    type: com.sap.application.content
resources:
  - name: bookshop-uaa
    type: org.cloudfoundry.managed-service
    parameters: { service: xsuaa, service-plan: application, path: ./xs-security.json }
  - name: bookshop-db
    type: com.sap.xs.hdi-container
  - name: bookshop-destination
    type: org.cloudfoundry.managed-service
    parameters: { service: destination, service-plan: lite }
```
- **Build:** `mbt build -p=cf` → `mta_archives/MeuApp_1.0.0.mtar`.
- **Deploy:** `cf deploy mta_archives/MeuApp_1.0.0.mtar` (plugin *multiapps*) — provisiona recursos e implanta módulos.
- Versão semântica (`version`) do pacote; no CF, MTA não suporta *sidecars* nem *route services*.

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [DevOps no BTP](/glossario/devops-no-btp)
- [Deploy de Apps Fiori](/glossario/deploy-de-apps-fiori)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP
- Apostila - Fiori e SAPUI5
- Apostila - SAP CAP (Completa)

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
