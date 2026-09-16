---
title: "Template: Projeto"
description: "Modelo de documentação de um projeto de cliente"
tags: ["template"]
---
> **Confidencial.** Confirme que esta página está sob `projetos/<cliente>` e que o acesso está restrito à equipe. Nunca registre senhas, tokens ou dados pessoais.
{.is-danger}

# Visão geral
| | |
|---|---|
| **Cliente** | [nome] |
| **Objetivo** | [o problema de negócio em uma frase] |
| **Soluções** | [ex.: Migração PI/PO com Iris, AMS] |
| **Período** | [início – fim previsto] |
| **Status** | [planejamento / em andamento / sustentação / encerrado] |

# Pessoas
| Papel | Lab2dev | Cliente |
|---|---|---|
| Gerente do projeto | [nome] | [nome] |
| Arquitetura | [nome] | [nome] |
| Time | [nomes] | |

# Escopo
- **Dentro do escopo:** [itens]
- **Fora do escopo:** [itens]

# Arquitetura
[Visão geral da solução. Use um bloco `mermaid` para o diagrama.]

# Ambientes e landscape
| Ambiente | Sistema / subaccount | Observações |
|---|---|---|
| Desenvolvimento | [id] | |
| Qualidade | [id] | |
| Produção | [id] | |

> Credenciais ficam no cofre de senhas. Indique aqui **onde** encontrá-las, nunca os valores.
{.is-warning}

# Integrações
| Origem | Destino | Tecnologia | Observações |
|---|---|---|---|
| [sistema] | [sistema] | [ex.: Integration Suite, OData] | |

# Decisões de arquitetura
[Links para os ADRs do projeto em `projetos/<cliente>/<projeto>/adrs`.]

# Operação
- **Runbooks:** [links]
- **Monitoramento e alertas:** [onde e quem recebe]
- **Suporte pós-go-live:** [modelo de AMS, SLA]

# Links
- **Board do projeto:** [link]
- **Repositórios:** [links]
- **Documentos do cliente:** [links]

# Lições aprendidas
[O que faríamos diferente? Atualize no encerramento de cada fase.]
