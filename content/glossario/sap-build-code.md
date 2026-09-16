---
title: "SAP Build Code"
description: "Ambiente pro-code do SAP Build, evolução do Business Application Studio com IA generativa (Joule): dev spaces prontos para CAP, Fiori/UI5 e MDK, com Storyboard, Service Center, Git, testes e integração a CI/CD."
tags: ["glossario","sap-build"]
---
**Também conhecido como:** `Build Code` · `Storyboard` · `Service Center` · `Dev Space` · `Full-Stack Cloud Application` · `Editor Gráfico CDS` · `Live Loader` · `wdi5` · `requests.http` · `Joule no Build Code`

> **Definição**
> Ambiente pro-code do SAP Build, evolução do Business Application Studio com IA generativa (Joule): dev spaces prontos para CAP, Fiori/UI5 e MDK, com Storyboard, Service Center, Git, testes e integração a CI/CD.
{.is-info}

**O que é:** evolução direta do **SAP Business Application Studio** (baseado em VS Code) redesenhado para a era da IA — BAS + Joule + serviços integrados (CAP, HANA Cloud, DevOps). Licenciamento via CPEA/PAYG ou assinatura (detalhes no [SAP Discovery Center](/glossario/sap-discovery-center)).

**Ambiente turnkey:** cada **Dev Space** vem com Java e Node.js, Git, debuggers, terminais, frameworks SAP (CAP, Fiori, UI5) e conectividade com a BTP. Primeiro projeto: BTP Cockpit → SAP Build Code → Lobby > Criar → template *Full-Stack Application*.

**Stack:** SAP Mobile Services · SAPUI5/Fiori · [SAP CAP](/glossario/sap-cap) · [SAP HANA Cloud](/glossario/sap-hana-cloud) · SAP BTP.

**Ferramentas-chave:**
- **Storyboard:** visão gráfica do projeto CAP — entidades, relações, serviços OData e páginas Fiori, com clique para navegar ao arquivo.
- **Editor gráfico de CDS:** ERD vivo e bidirecional (código ↔ diagrama).
- **Service Center:** catálogo de APIs (S/4HANA Cloud, SuccessFactors, Destinations, Business Accelerator Hub) → *Adicionar ao projeto* gera EDMX/CSN e configuração (equivalente a `cds import`).
- **Git nativo:** branches, commits, pull requests, GitHub/GitLab/Bitbucket/Azure Repos; colaboração por dev spaces isolados + repositório central.
- **[SAP Fiori Tools](/glossario/sap-fiori-tools):** Application Generator, Page Map, Annotation Modeler, Guided Development, Service Modeler, XML Annotation Language Server; **Live Loader** (atualiza ao salvar).

**Joule no Build Code** (ver [SAP Joule](/glossario/sap-joule)):
- Gera modelo de dados CDS por linguagem natural (Orders, OrderItems com composição, Customers).
- Gera dados de teste CSV realistas ("10 customers and 50 orders").
- Gera handlers (ex.: `@Before(event = CdsService.EVENT_CREATE, entity = "Orders")` em Java validando data no passado).
- Gera app Fiori Elements (List Report + Object Page, `app/`, `xs-app.json`, anotações, `mta.yaml`).
- Explica/refatora código e gera testes unitários (Jest/JUnit).
- Segue o **golden path** do CAP; seu código e prompts **não** treinam modelos (isolamento de tenant, efêmeros).
- Ganho citado: 30–50% menos tempo de setup/desenvolvimento inicial. Ciclo **intenção → geração → refinamento**: "você é o piloto, a IA é o copiloto" — revise sempre (IA entrega \~80%).

**Escolha de UI:**
| Fiori Elements | SAPUI5 freestyle | MDK |
|---|---|---|
| Metadados OData geram List Report/Object Page — CRUD e analítico, "pré-fabricado" | Controle total de pixel — dashboards, UIs fora dos floorplans, "sob medida" | Metadados JSON → app nativo iOS/Android offline-first — força de campo |

**Qualidade (módulo 9):**
- **Testes unitários:** Jest (`npm test`) para Node.js, JUnit 5 (`mvn test`) para Java; cobertura com `npm test -- --coverage` (meta: lógica crítica coberta, não 100%).
- **Integração/E2E:** **wdi5** (WebdriverIO para UI5) — clica, preenche e verifica tela e API.
- **Mock data:** CSVs em `db/data` — ver [Dados de Teste CAP](/glossario/dados-de-teste-cap).
- **Debug:** breakpoints + `cds watch --profile hybrid`; logs no terminal ou `cf logs <app> --recent` (use `console.info/warn/error`).
- **Arquivos `.http`:** REST client integrado com *Send Request*.
- **Performance:** N+1 (use deep expand), índices, `$select`, logs SQL, BTP Monitoring.
- **Segurança (shift left):** `npm audit`, SAST (SQL injection, XSS), Credential Store.
- **Fluxo de bug:** reproduzir (.http) → isolar (unit test) → inspecionar (debug) → corrigir → validar (pipeline).

**Governança (módulo 10):** Git como fonte única da verdade → SAP Continuous Integration and Delivery (build, testes, `.mtar`) → **cTMS** (fila DEV → QAS → PRD com aprovações) → `cf deploy app.mtar` → tile no [SAP Build Work Zone](/glossario/sap-build-work-zone) → monitoramento com [SAP Cloud ALM](/glossario/sap-cloud-alm), Alert Notification e Dynatrace; segurança com XSUAA, role collections e scopes. Ver [DevOps no BTP](/glossario/devops-no-btp).

## 🔗 Relacionados
- [SAP Build](/glossario/sap-build)
- [SAP CAP](/glossario/sap-cap)
- [SAP Fiori Tools](/glossario/sap-fiori-tools)
- [SAP Joule](/glossario/sap-joule)
- [SAP HANA Cloud](/glossario/sap-hana-cloud)
- [DevOps no BTP](/glossario/devops-no-btp)
- [MDK](/glossario/mdk)

## 📚 Fontes
- Apostila - SAP Build Low e Pro Code

---
🧭 [SAP Build](/glossario/temas/sap-build) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
