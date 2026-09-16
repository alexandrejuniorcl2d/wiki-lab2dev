---
title: "Clean ABAP"
description: "Guia de estilo (derivado do Clean Code) para escrever ABAP legível e manutenível — foco no próximo humano que vai ler o código."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Código Limpo ABAP` · `Clean ABAP Style Guide` · `ABAP Doc`

> **Definição**
> Guia de estilo (derivado do Clean Code) para escrever ABAP legível e manutenível — foco no próximo humano que vai ler o código.
{.is-info}

- **Nomes que falam:** `active_status` em vez de `tj02_list`; evite `ZCL_DATA`, `it`, `wa`; prefixos de módulo nas classes.
- **Métodos pequenos:** se precisa de comentário para separar blocos, o método já está grande demais — "um método faz uma coisa".
- **Comentários:** explique o *porquê*, não o *o quê*; documentação de classes/métodos públicos com **ABAP Doc** (`"!`).
- **Não guarde código comentado** "por precaução".
- Declare variáveis onde nascem, não todas no topo.
- Não é evento de um dia: prática, pair programming, code review; o padrão escolhido pelo time vira lei; valide com **Code Pal no ATC**.

> Lembre: [Clean ABAP não é Clean Core](/glossario/clean-core).

**Recomendações DSAG v2.0 (Boas Práticas):**
- Use as diretrizes oficiais SAP (transação `ABAPDOCU` / F1) como referência.
- Abandone abreviações crípticas (`vkorg` → `sales_organisation`) e **notação húngara** que codifica o tipo no nome; prefixos só para escopo/visibilidade.
- Evite **variáveis globais**; siga **DRY** (Don't Repeat Yourself); uma instrução por linha; *Pretty Printer* padronizado (keywords em maiúsculas, identificadores em minúsculas).
- **Textos:** nunca chumbe literais na tela — use *text elements*, OTR ou *message classes*; reserve 1,5× o tamanho do texto para tradução; inglês como idioma do código.
- **Magic numbers:** substitua por constantes com nomes de negócio em uma interface dedicada ou classe abstrata FINAL (`zif_sales_constants=>type_active`) — nunca includes de constantes; `CONSTANTS quatro VALUE 4` é inútil.
- Regras de UI separadas: validações de entrada independentes da tecnologia de tela.
- `FORM`/`PERFORM` são **obsoletos** — novos projetos exclusivamente OO.

## 🔗 Relacionados
- [ABAP Moderno](/glossario/abap-moderno)
- [Clean Core](/glossario/clean-core)
- [ABAP Test Cockpit](/glossario/abap-test-cockpit)
- [Arquitetura de Aplicação ABAP](/glossario/arquitetura-de-aplicacao-abap)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
