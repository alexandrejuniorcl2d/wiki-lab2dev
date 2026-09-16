---
title: "SAP CAP (tema)"
description: "Cloud Application Programming Model: CDS, serviços, handlers, deploy."
tags: ["glossario","sap-cap"]
---
> **Sobre esta área**
> Cloud Application Programming Model: CDS, serviços, handlers, deploy.
> Tag: [#sap-cap](/t/sap-cap) · 11 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - SAP CAP (Completa) — Curso completo de SAP CAP (Node.js) em 10 módulos: setup, modelagem CDS, serviços, Fiori Elements, dados mock, event handlers, validação/i18n, segurança XSUAA, integração S/4HANA e deploy no BTP.

## 📖 Termos

### Dados
- [Dados de Teste CAP](/glossario/dados-de-teste-cap) *(CSV CAP, db/data, test/data)* — Estratégia de dados de amostra no CAP: arquivos CSV por entidade carregados automaticamente pelo cds watch, separação db/data × test/data, IDs fixos para testes determinísticos e carga deliberada em HANA.

### Fundamentos
- [Projeto CAP](/glossario/projeto-cap) *(cds init, cds add, cds watch)* — Estrutura e ferramental de um projeto CAP: CLI (cds init/add/watch), pastas db/srv/app, configuração em package.json/.cdsrc.json com perfis e a separação @sap/cds (runtime) × @sap/cds-dk (dev kit).
- [SAP CAP](/glossario/sap-cap) *(CAP, Cloud Application Programming Model, SAP Cloud Application Programming Model)* — Framework "opinativo" da SAP (Node.js ou Java) para construir serviços e apps enterprise na BTP: modelagem declarativa em CDS, serviços OData gerados, handlers para lógica e integração nativa com XSUAA, HANA e mensageria.

### Integração
- [Consumo de Serviços Remotos CAP](/glossario/consumo-de-servicos-remotos-cap) *(cds import, srv/external, cds.connect.to)* — Integração no CAP: importar EDMX/OpenAPI com cds import, conectar via cds.connect.to e consultar remotos com a mesma CQL — padrões delegation (proxy), mashup (associação local→remota) e remote projection, com mocks locais e Destinations em produção.

### Lógica
- [Event Handlers CAP](/glossario/event-handlers-cap) *(service.js, cds.service.impl, srv.before)* — Lógica de negócio no CAP Node.js: handlers before (validar), on (implementar/substituir) e after (enriquecer) registrados em srv/*.js, com cds.ql, transações automáticas e mensagens req.error/reject/info/warn.
- [Validação e i18n CAP](/glossario/validacao-e-i18n-cap) *(@mandatory, Validação Declarativa CAP, Validação Imperativa CAP)* — Blindagem de dados no CAP em camadas (declarativa no CDS com @mandatory/@assert, imperativa em srv.before) e internacionalização completa de labels, mensagens de erro e do próprio conteúdo (localized).

### Modelagem
- [CDS no CAP](/glossario/cds-no-cap) *(CDL, schema.cds, entity)* — Modelagem de domínio declarativa no CAP com CDS (CDL): entidades, aspectos reutilizáveis (cuid, managed), composições × associações, tipos com validação, namespaces e geração automática de DDL e constraints.

### Produção
- [Deploy CAP](/glossario/deploy-cap) *(cds build, cds deploy, cds bind)* — Levar um app CAP à produção no BTP: perfis SQLite→HANA, mta.yaml com módulos (db-deployer, srv, app) e recursos (HDI, XSUAA, destination), mbt build + cf deploy, testes híbridos com cds bind, CI/CD e observabilidade.

### Segurança
- [Segurança CAP](/glossario/seguranca-cap) *(@restrict CAP, grant, \$user)* — Segurança declarativa no CAP: @requires (autenticação/papel) e @restrict (privilégios por evento, com where por instância via \$user), ligadas a scopes/role templates do xs-security.json, auth mockada localmente e XSUAA em produção.

### Serviços
- [Serviços CAP](/glossario/servicos-cap) *(service, projection on, excluding)* — Serviços CAP são "lentes" orientadas a casos de uso sobre o domínio: projeções que renomeiam, achatam e excluem campos, com anotações de segurança, draft, actions/functions e CRUD genérico OData V4 sem código.

### UI
- [Anotações Fiori no CAP](/glossario/anotacoes-fiori-no-cap) *(annotations.cds, annotate service, @UI.LineItem)* — UI Fiori Elements dirigida pelo modelo: anotações CDS (em app/annotations.cds) definem List Report, Object Page, value helps, textos, side effects e botões CRUD sem escrever código de UI.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
