---
title: "Arquitetura de Aplicação ABAP"
description: "Princípios DSAG para desenhar aplicações ABAP manuteníveis: camadas, pacotes por domínio, responsabilidade única, injeção de dependência e isolamento do standard."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Separation of Concerns` · `Camadas da Aplicação` · `Single Responsibility` · `SOLID` · `Injeção de Dependência ABAP` · `Lei de Demeter` · `Facade` · `Pacotes ABAP` · `Software Component`

> **Definição**
> Princípios DSAG para desenhar aplicações ABAP manuteníveis: camadas, pacotes por domínio, responsabilidade única, injeção de dependência e isolamento do standard.
{.is-info}

- **Camadas:** apresentação/controlador (orquestra, não calcula) · lógica de negócio (validações, transformações) · acesso a dados (tabelas, integrações) — nunca misture regra com `SELECT`.
- **Pacotes:** organize por **domínio funcional** (não por equipe ou tipo de objeto); pacote principal = solução transportável; **interface de pacote** como contrato; evite "pacotes coletores"; ative a verificação de pacotes.
- **Software Component (ABAP Cloud):** a fronteira real de visibilidade; liberação só via contratos (C1). Estruture hoje como se o pacote principal fosse um SWC.
- **Responsabilidade única:** classe "faz-tudo" é anti-padrão; métodos com dezenas de parâmetros acumulam responsabilidades; passe objetos/estruturas.
- **Injeção de dependência:** proíba `NEW`/`CREATE OBJECT` no meio da lógica; use factories/construtores e interfaces → mocks em [ABAP Unit](/glossario/abap-unit).
- **Padrões:** Factory, Singleton, MVC, **Facade** (esconde subsistemas atrás de uma interface simples; exponha só interfaces e facades fora do pacote).
- **Lei de Demeter:** encapsule BAPIs e classes standard em classes privadas de acesso — se a SAP mudar, você ajusta um lugar só.
- **Desenho antes do código:** agrupar tarefas → listar atores → nomear objetos (configuração, validação, lógica, acesso a dados, controlador) → definir contratos.
- **Exceções:** converta `BAPIRET2`/`sy-subrc` em classes de exceção na primeira camada; nunca use exceção para sucesso.
- **Performance nasce na arquitetura:** acesso a banco concentrado numa camada otimizável (CDS).
- **Checklist do arquiteto:** OO + SOLID · pacotes estratégicos · isolamento defensivo · injeção e testabilidade · refatoração contínua · Clean ABAP como política.

## 🔗 Relacionados
- [Design Patterns ABAP](/glossario/design-patterns-abap)
- [ABAP Unit](/glossario/abap-unit)
- [Interface ABAP](/glossario/interface-abap)
- [ABAP Cloud](/glossario/abap-cloud)
- [Padrão Wrapper](/glossario/padrao-wrapper)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
