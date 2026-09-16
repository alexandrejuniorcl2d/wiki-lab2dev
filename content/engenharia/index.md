---
title: "Engenharia"
description: "Padrões de desenvolvimento e decisões de arquitetura da Lab2dev"
tags: ["engenharia"]
---
Esta seção reúne o que vale **para todos os projetos e práticas**: como escrevemos código, como organizamos ambientes e por que tomamos as decisões de arquitetura que tomamos. O que é específico de um cliente fica em [Projetos](/projetos).

- [📐 Padrões de engenharia *Convenções de código, landscape, CI/CD e revisão por prática*](/engenharia/padroes)
- [🧭 Decisões de arquitetura (ADRs) *O registro do porquê das nossas escolhas técnicas*](/engenharia/adrs)
{.links-list}

# Princípios
- **Clean Core primeiro:** extensões fora do core sempre que possível ([Clean Core](/glossario/clean-core), [ABAP Cloud](/glossario/abap-cloud), [Extensibilidade Side-by-Side](/glossario/extensibilidade-side-by-side)).
- **Decisão importante tem registro:** se muda arquitetura, custo ou risco, vira um [ADR](/engenharia/adrs).
- **Documentação perto de quem usa:** padrões aqui, detalhes do cliente no projeto, código no repositório.
