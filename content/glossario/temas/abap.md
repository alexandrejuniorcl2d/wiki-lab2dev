---
title: "ABAP (tema)"
description: "Linguagem ABAP, orientação a objetos, BAPIs, BOPF, enhancements e objetos Z."
tags: ["glossario","sap-abap"]
---
> **Sobre esta área**
> Linguagem ABAP, orientação a objetos, BAPIs, BOPF, enhancements e objetos Z.
> Tag: [#sap-abap](/t/sap-abap) · 36 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - ABAP Orientado a Objetos — Classes, objetos, herança, interfaces, polimorfismo e exceções em ABAP OO.
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1) — Guia DSAG de desenvolvimento ABAP 2026 — parte 1.
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2) — Guia DSAG de desenvolvimento ABAP 2026 — parte 2.
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP — Boas práticas de desenvolvimento ABAP segundo a DSAG.
- Apostila - SAP Customer Objects — Objetos de cliente (Z/Y), namespaces e convenções.
- Apostila - Desmistificando o BOPF — Business Object Processing Framework: estrutura, nós, determinações e validações.
- Apostila - Padrão Wrapper para BAPIs — Como encapsular BAPIs não liberadas para uso em ABAP Cloud/RAP.
- Apostila - Developer Challenge ABAP e SAP Joule — SAP Developer Challenge de 4 semanas: Joule for Developers no ADT — app RAP com Joule Chat, Explain, RAP Business Logic Prediction e Predictive Code Completion.

## 📖 Termos

### Boas Práticas
- [ABAP Moderno](/glossario/abap-moderno) *(ABAP 7.4, ABAP 7.40, Sintaxe Moderna)* — Elementos de linguagem do ABAP 7.4+ (declarações inline, construtores VALUE/COND/REDUCE, expressões de tabela, NEW) que substituem comandos obsoletos.
- [Arquitetura de Aplicação ABAP](/glossario/arquitetura-de-aplicacao-abap) *(Separation of Concerns, Camadas da Aplicação, Single Responsibility)* — Princípios DSAG para desenhar aplicações ABAP manuteníveis: camadas, pacotes por domínio, responsabilidade única, injeção de dependência e isolamento do standard.
- [Clean ABAP](/glossario/clean-abap) *(Código Limpo ABAP, Clean ABAP Style Guide, ABAP Doc)* — Guia de estilo (derivado do Clean Code) para escrever ABAP legível e manutenível — foco no próximo humano que vai ler o código.
- [Documentação de Desenvolvimento ABAP](/glossario/documentacao-de-desenvolvimento-abap) *(KTD, Knowledge Transfer Document, arc42)* — Diretrizes DSAG: documentar durante o desenvolvimento (antes de PRD), priorizar KTD > ABAP Doc > textos curtos, código em inglês e explicar o porquê.
- [Performance ABAP no HANA](/glossario/performance-abap-no-hana) *(ST05, SQL Trace, Code Pushdown)* — Regras de performance no HANA: selecionar só campos necessários, evitar SELECT em loop, usar joins e code pushdown; analisar com ST05.
- [Robustez ABAP](/glossario/robustez-abap) *(Lock Object, Objeto de Bloqueio, ENQUEUE)* — Práticas para código que não quebra e não corrompe dados: checar SY-SUBRC, exceções em classe, bloqueios ENQUEUE, LUW/update task e Application Log.

### Enhancements
- [BAdI](/glossario/badi) *(Business Add-In, BAdIs, Enhancement Spot)* — Evolução orientada a objetos das user exits: interface + classes de implementação, com múltiplas implementações controladas por filtros.
- [Enhancement Framework](/glossario/enhancement-framework) *(Implicit Enhancement, Explicit Enhancement, Enhancement Point)* — Estrutura unificada de todas as técnicas de enhancement (BAdIs, pontos explícitos e implícitos).
- [User Exit](/glossario/user-exit) *(Customer Exit, CALL CUSTOMER-FUNCTION, Include de Cliente)* — Primeira geração de pontos de extensão SAP (CALL CUSTOMER-FUNCTION, includes Z) — procedural, alto acoplamento, uma implementação.

### Ferramentas e Diagnóstico
- [Autorizações SAP](/glossario/autorizacoes-sap) *(PFCG, SU01, Role)* — Framework de segurança baseado em roles (PFCG) atribuídas a usuários (SU01); siga o princípio do menor privilégio.
- [Debugging ABAP](/glossario/debugging-abap) *(Debug, Debugger, Breakpoint)* — Análise do programa em execução (breakpoints, watchpoints, variáveis) para entender o standard e achar a causa raiz de erros.
- [SAP Notes](/glossario/sap-notes) *(Notas OSS, OSS, SAP ONE Support Launchpad)* — Documentos oficiais da SAP com correções, workarounds e novidades; pesquisados no Support Launchpad.
- [Transações de Monitoramento](/glossario/transacoes-de-monitoramento) *(SM50, SM66, ST22)* — Painel de diagnóstico: SM50/SM66 (work processes), ST22 (dumps ABAP) e SM37 (jobs em background).

### Frameworks
- [BOPF](/glossario/bopf) *(Business Object Processing Framework, /BOBF/)* — Framework ABAP orientado a metadados para modelar objetos de negócio como árvore de nós com ações, determinações e validações — antecessor do RAP.

### Fundamentos
- [ABAP](/glossario/abap) *(Advanced Business Application Programming, ABAP Clássico)* — Linguagem de programação de alto nível da SAP, otimizada para aplicações de negócio, que roda no SAP NetWeaver ABAP Application Server.
- [ABAP Development Tools](/glossario/abap-development-tools) *(ADT, Eclipse ADT, SE80)* — Plugin do Eclipse que é o ambiente padrão de desenvolvimento ABAP moderno (CDS, RAP, classes); substitui a SE80 do SAP GUI.
- [Dicionário de Dados ABAP](/glossario/dicionario-de-dados-abap) *(DDIC, ABAP Dictionary, SE11)* — Repositório central de metadados (tabelas, views, tipos, domínios); SE11 mantém e SE16 consulta dados.
- [Objeto Z](/glossario/objeto-z) *(Objetos Z, Customer Namespace, Namespace de Cliente)* — Objeto customizado pelo cliente, criado no namespace reservado (prefixos Z ou Y, ou um namespace registrado /XYZ/) para não colidir com objetos SAP.

### Governança
- [abapGit e gCTS](/glossario/abapgit-e-gcts) *(abapGit, gCTS, Git-enabled CTS)* — Clientes Git para ABAP: abapGit (open-source, por pacote, suporta pull requests) e gCTS (SAP, atrelado à liberação de transporte).
- [Open Source no SAP](/glossario/open-source-no-sap) *(Open Source, Licenças Open Source, MIT)* — Uso, contribuição e publicação de projetos open-source no mundo ABAP, com governança de licenças e avaliação de riscos.
- [Revisão de Código ABAP](/glossario/revisao-de-codigo-abap) *(Code Review, Quality Gate, ABAP Cleaner)* — Práticas de ALM da DSAG: autoverificação no ADT (ABAP Cleaner), revisão de código em ciclos curtos e quality gates automáticos.
- [Sistema de Transportes](/glossario/sistema-de-transportes) *(TMS, Transport Management System, Request)* — Mecanismo que move customizing e desenvolvimentos entre ambientes (DEV → QAS → PRD) com rastreabilidade e auditoria.

### Integração
- [BAPI](/glossario/bapi) *(Business Application Programming Interface, BAPIs, Módulo de Função RFC)* — Interface estável e padronizada (módulo de função RFC) para executar processos de negócio em Business Objects SAP com todas as validações standard.
- [Batch Input](/glossario/batch-input) *(BDC, SHDB, Call Transaction)* — Técnica clássica de carga em massa que simula a digitação do usuário em transações gravadas (SHDB).

### Orientação a Objetos
- [ABAP Orientado a Objetos](/glossario/abap-orientado-a-objetos) *(ABAP OO, ABAP Objects, OOP ABAP)* — Paradigma de programação com classes e objetos no ABAP — pré-requisito para RAP, BOPF, BAdIs e Clean Core.
- [Casting e RTTI](/glossario/casting-e-rtti) *(Upcast, Downcast, Narrowing Cast)* — Upcast (subclasse → superclasse) é automático; downcast (?= / CAST) é arriscado e exige TRY...CATCH; RTTI inspeciona tipos em runtime.
- [Classe Abstrata e Final](/glossario/classe-abstrata-e-final) *(ABSTRACT, FINAL, Template Pattern)* — ABSTRACT define o molde (não instanciável, obriga redefinição); FINAL é o cadeado (impede herança/redefinição).
- [Classe e Objeto](/glossario/classe-e-objeto) *(Classe, Objeto, Instância)* — Classe é o modelo (a planta); objeto é a instância na memória em runtime (a casa construída). Atributos = estado; métodos = comportamento.
- [Design Patterns ABAP](/glossario/design-patterns-abap) *(Singleton, Factory, Factory Pattern)* — Soluções comprovadas: Singleton (instância única), Factory (a fábrica decide a classe concreta), Persistence Service e MVC.
- [Encapsulamento](/glossario/encapsulamento) *(PUBLIC SECTION, PROTECTED SECTION, PRIVATE SECTION)* — Controle de visibilidade (PUBLIC, PROTECTED, PRIVATE) que protege o estado do objeto; atributos públicos são "bugs silenciosos".
- [Eventos ABAP](/glossario/eventos-abap) *(EVENTS, RAISE EVENT, SET HANDLER)* — Mecanismo publish/subscribe: o publicador anuncia um fato e os assinantes registrados reagem — "Não chame, avise!".
- [Exceções ABAP](/glossario/excecoes-abap) *(Exceções Baseadas em Classe, TRY CATCH, RAISE EXCEPTION)* — Erros como objetos ricos (texto, atributos, call stack) que propagam automaticamente — substituem o SY-SUBRC numérico.
- [Herança e Polimorfismo](/glossario/heranca-e-polimorfismo) *(Herança, Polimorfismo, INHERITING FROM)* — Herança reutiliza a classe pai (relação "É UM"); polimorfismo faz o mesmo método ter comportamentos diferentes decididos em runtime.
- [Interface ABAP](/glossario/interface-abap) *(Interface, INTERFACES, ZIF)* — Contrato de assinaturas de métodos (sem implementação, sempre público) que desacopla consumidor e implementação.

### Qualidade
- [ABAP Unit](/glossario/abap-unit) *(Teste Unitário ABAP, FOR TESTING, CL_ABAP_UNIT_ASSERT)* — Framework de testes unitários automatizados do ABAP (classes FOR TESTING, asserts, mocks) — "código sem teste é legado instantâneo".

### Segurança
- [Segurança ABAP](/glossario/seguranca-abap) *(Código Seguro ABAP, SQL Injection, XSS)* — Ameaças reais ao código ABAP (SQL injection, falta de autorização, XSS, code injection, directory traversal) e as práticas para evitá-las.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
