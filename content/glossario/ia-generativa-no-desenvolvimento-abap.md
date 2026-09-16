---
title: "IA Generativa no Desenvolvimento ABAP"
description: "Uso de assistentes de IA (Joule for Developers, GitHub Copilot) no ABAP — acelera a escrita, mas a responsabilidade pelo código continua humana."
tags: ["glossario","sap-ia"]
---
**Também conhecido como:** `GenAI ABAP` · `GitHub Copilot ABAP` · `Vibe Coding` · `MCP` · `Joule for Developers` · `ISLM`

> **Definição**
> Uso de assistentes de IA (Joule for Developers, GitHub Copilot) no ABAP — acelera a escrita, mas a responsabilidade pelo código continua humana.
{.is-info}

**Diretrizes DSAG:**
- IA acelera, mas não substitui arquitetura: estude engenharia de software e Clean Architecture para validar o que é gerado.
- **Responsabilidade humana:** falhas de lógica, performance ou segurança do código gerado são do desenvolvedor.
- Não imponha metas percentuais de uso de IA; cada dev decide escopo e momento.
- **Riscos:** viés e alucinação; \~39% dos erros de código gerado passam despercebidos em revisões quando a resposta "soa" correta → revise com frieza.
- **Compliance:** soberania de dados (espaço privado × público), desativar histórico de prompts (prompts contêm esquemas e segredos), direitos autorais, EU AI Act, GDPR, KI-Ethik-Handbuch da SAP.

**SAP Joule for Developers (roadmap):**
- **Accelerate:** gerar testes unitários, objetos RAP, explicar código legado.
- **Transform:** migrações sugerindo adaptações para ABAP Cloud/Clean Core.
- **Empower:** SDK + ISLM para chamar o **SAP AI Core** a partir da aplicação.
- Roda no SAP Build e no ADT; **não** foi projetado para on-premise puro (exige BTP/Private Cloud).

**GitHub Copilot:** alternativa sem infraestrutura SAP cloud; suporte a ABAP no Eclipse; use *Custom Instructions* para injetar regras padrão; bom para comentários, refatorar IFs em TRY-CATCH, explicar checagens.

**Casos avançados:** depurar requisitos desestruturados, gerar documentação a partir de ABAP Doc (quanto mais limpo o código, melhor o texto), prompting iterativo. Futuro: ABAP no VS Code, Joule Studio (agentes) na BTP, servidores MCP.

## 🔗 Relacionados
- [SAP Joule](/glossario/sap-joule)
- [Engenharia de Prompts](/glossario/engenharia-de-prompts)
- [Clean ABAP](/glossario/clean-abap)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - Developer Challenge ABAP e SAP Joule

---
🧭 [IA, Joule e Prompts](/glossario/temas/ia-joule-e-prompts) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
