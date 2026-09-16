---
title: "Documentação de Desenvolvimento ABAP"
description: "Diretrizes DSAG: documentar durante o desenvolvimento (antes de PRD), priorizar KTD > ABAP Doc > textos curtos, código em inglês e explicar o porquê."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `KTD` · `Knowledge Transfer Document` · `arc42` · `Documentação Técnica`

> **Definição**
> Diretrizes DSAG: documentar durante o desenvolvimento (antes de PRD), priorizar KTD > ABAP Doc > textos curtos, código em inglês e explicar o porquê.
{.is-info}

- Sem documentação técnica concluída, não há ida para produção; prefira diagramas **arc42** versionados a manuais de 50 páginas.
- **Prioridade para objetos:** (1) **KTD** — Knowledge Transfer Document em Markdown, SAP_BASIS 7.55+, morre junto com o objeto; (2) **ABAP Doc** (`"!` antes de classes/métodos); (3) textos curtos. Documente o estado atual (as-is).
- **Idioma:** empresa deve definir; recomendação DSAG = **inglês** no código e comentários.
- **Comentários:** o código diz *o que*; comentários dizem *por que*; "o mínimo possível, o máximo necessário"; histórico fica no Git/transporte.
- Textos fáceis de entender e usar (voz ativa, tabelas, links), segregados por público e com valor maior que o custo de manutenção.

**DSAG v2.0:** a documentação é "a metade oculta do desenvolvimento" — sem manual pronto, a funcionalidade não sobe para produção. Arquitetura fora do código (template **arc42**, Solution Manager, wikis); objetos sem código (tabelas DDIC, transações) documentados no ABAP Workbench (multi-idioma, transportado); **cabeçalho de programa** (autor, data, chamado, descrição) concentra o histórico; comentários só em inglês; "comentário papagaio" (o quê) × "comentário de intenção" (porquê). Qualidade precisa de processo: automatize o possível, amostragem manual para o resto, code review/pair programming em objetos críticos.

## 🔗 Relacionados
- [Clean ABAP](/glossario/clean-abap)
- [abapGit e gCTS](/glossario/abapgit-e-gcts)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
