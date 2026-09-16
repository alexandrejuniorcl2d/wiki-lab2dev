---
title: "ABAP RAP (tema)"
description: "RESTful Application Programming Model: BO, behavior, draft, ações e serviços."
tags: ["glossario","sap-rap"]
---
> **Sobre esta área**
> RESTful Application Programming Model: BO, behavior, draft, ações e serviços.
> Tag: [#sap-rap](/t/sap-rap) · 19 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - Desmistificando o BOPF — Business Object Processing Framework: estrutura, nós, determinações e validações.
- Apostila - Padrão Wrapper para BAPIs — Como encapsular BAPIs não liberadas para uso em ABAP Cloud/RAP.
- Apostila - ABAP RAP — RESTful Application Programming Model de ponta a ponta.
- Apostila - Developer Challenge ABAP e SAP Joule — SAP Developer Challenge de 4 semanas: Joule for Developers no ADT — app RAP com Joule Chat, Explain, RAP Business Logic Prediction e Predictive Code Completion.

## 📖 Termos

### Comportamento
- [Behavior Definition](/glossario/behavior-definition) *(BDEF, BDL, Behavior Definition Language)* — Objeto de repositório (em BDL) que declara o comportamento transacional do BO: operações CRUD, locks, ETag, autorização, ações, validações, determinações e draft.
- [Behavior Pool](/glossario/behavior-pool) *(Behavior Implementation, ZBP_, lhc_)* — Classe ABAP global (ZBP_...) que implementa o comportamento do BO via classes locais handler (lhc_) e saver (lsc_).
- [Controle de Concorrência RAP](/glossario/controle-de-concorrencia-rap) *(Locking RAP, Lock Master, ETag)* — Integridade com dois mecanismos: lock master (bloqueio pessimista durante a edição) e etag master (controle otimista de versão, ex.: LastChangedAt).
- [EML](/glossario/eml) *(Entity Manipulation Language, READ ENTITIES, MODIFY ENTITIES)* — Extensão da linguagem ABAP para ler e modificar Business Objects RAP pelo buffer transacional — o "ABAP SQL para o buffer".
- [Transação RAP](/glossario/transacao-rap) *(RAP LUW, Interaction Phase, Fase de Interação)* — Ciclo de vida transacional do RAP em duas fases: interação (mudanças reversíveis no buffer) e save sequence (ponto de não retorno que persiste no banco).
- [Unmanaged Save](/glossario/unmanaged-save) *(with unmanaged save, with additional save, save_modified)* — Opção do cenário managed em que o framework gerencia a fase de interação (buffer) mas o desenvolvedor assume a gravação no método save_modified da classe saver.

### Exposição
- [Service Definition e Service Binding](/glossario/service-definition-e-service-binding) *(SRVD, SRVB, define service)* — Service Definition declara quais entidades expor (o quê — agnóstica de protocolo); Service Binding liga a um protocolo OData V2/V4 como UI ou Web API (como).

### Extensibilidade
- [Extensibilidade RAP](/glossario/extensibilidade-rap) *(Behavior Extension, extend behavior, extend view entity RAP)* — Estender um BO RAP sem modificá-lo: EXTEND VIEW (campos), EXTEND BEHAVIOR (lógica) e Metadata Extension (UI), no namespace Z.

### Fundamentos
- [ABAP Flight Reference Scenario](/glossario/abap-flight-reference-scenario) *(/DMO/, Flight Reference Scenario, abap-platform-refscen-flight)* — Modelo de dados de referência da SAP (namespace /DMO/) usado em tutoriais RAP: agências, clientes, companhias, conexões, voos, viagens, reservas e suplementos.
- [Business Object RAP](/glossario/business-object-rap) *(BO, Business Object, Composition Tree)* — Representação transacional completa de uma entidade de negócio: estrutura (CDS), comportamento (BDEF) e implementação (behavior pool), organizada em árvore de composição.
- [Managed x Unmanaged](/glossario/managed-x-unmanaged) *(Managed, Unmanaged, Cenário Managed)* — Managed = framework implementa CRUD, locks e persistência (greenfield); Unmanaged = desenvolvedor implementa tudo, tipicamente encapsulando BAPIs legadas (brownfield).
- [RAP](/glossario/rap) *(ABAP RAP, RESTful Application Programming Model, ABAP RESTful Application Programming Model)* — Modelo de programação estratégico da SAP para construir serviços OData transacionais e apps Fiori cloud-ready no S/4HANA e na BTP, com CDS + behavior + serviço.

### Integração
- [Business Events RAP](/glossario/business-events-rap) *(RAP Business Events, event, RAISE ENTITY EVENT)* — Eventos declarados na BDEF e disparados com RAISE ENTITY EVENT na save sequence para notificar consumidores de forma assíncrona (publish/subscribe).
- [Service Consumption Model](/glossario/service-consumption-model) *(SCM, Consumo de Serviços Externos, Proxy OData)* — Artefato do ADT que gera um proxy cliente tipado (a partir do EDMX) para consumir serviços OData V2/V4 remotos em ABAP Cloud.
- [Workflow e Change Documents RAP](/glossario/workflow-e-change-documents-rap) *(Business Workflow RAP, Change Documents, SCDO)* — Integração do BO RAP com serviços de reuso: workflow (aprovações via eventos e EML) e change documents (auditoria quem-mudou-o-quê-quando).

### Lógica de Negócio
- [Actions RAP](/glossario/actions-rap) *(Action, Ação RAP, action result [1] \$self)* — Operações de negócio não-padrão (além do CRUD) declaradas na BDEF e implementadas em métodos FOR MODIFY — aparecem como botões no Fiori.
- [Determinations e Validations](/glossario/determinations-e-validations) *(Determination, Validation, Determinação)* — Determinations calculam/preenchem campos automaticamente (o assistente); validations verificam consistência e bloqueiam o save (o guardião). Executadas pela DVM.
- [Draft RAP](/glossario/draft-rap) *(Draft, Rascunho, with draft)* — Rascunho persistente que permite editar, interromper e continuar depois (até em outro dispositivo), com validação imediata e sem bloquear o registro ativo.
- [Feature Control RAP](/glossario/feature-control-rap) *(Feature Control, features: instance, get_instance_features)* — Mecanismo que habilita/desabilita operações e ações ou torna campos read-only/obrigatórios conforme o estado de cada instância — UI consciente do contexto.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
