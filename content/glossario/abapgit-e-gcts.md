---
title: "abapGit e gCTS"
description: "Clientes Git para ABAP: abapGit (open-source, por pacote, suporta pull requests) e gCTS (SAP, atrelado à liberação de transporte)."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `abapGit` · `gCTS` · `Git-enabled CTS` · `Git ABAP` · `Versionamento ABAP`

> **Definição**
> Clientes Git para ABAP: abapGit (open-source, por pacote, suporta pull requests) e gCTS (SAP, atrelado à liberação de transporte).
{.is-info}

**Conceitos Git:** repositório (histórico auditável), branch (contexto paralelo), commit (versão consolidada).

| Ferramenta | Desde | Escopo | Gatilho |
|---|---|---|---|
| SE80/SE09 versões | 2007 | Objeto | Liberação do transporte |
| ADT | 2012 | Objeto | Salvar/ativar |
| **abapGit** | 2018 | **Pacote** | Manual ou background |
| **gCTS** | S/4HANA 1909 | Camada de transporte | Liberação do transporte |

**Veredito DSAG:** abapGit é hoje a única solução prática para revisão baseada em Git (branches + pull requests). gCTS commita tarde, registra quem liberou (não o autor real) e gera JSON ilegível.

**Cenários:** ponto central de verdade na paisagem de 3 sistemas, troca de código com fornecedores, sincronização de paisagens, recovery e migração enxuta. Pipelines CI/CD com **Jenkins** e **Azure Pipelines**.

**Commit padrão ouro:** `[AZURE-892] Fix: ajuste no cálculo de frete da filial sul. Depende do transporte TR90001.`

## 🔗 Relacionados
- [Sistema de Transportes](/glossario/sistema-de-transportes)
- [Revisão de Código ABAP](/glossario/revisao-de-codigo-abap)
- [Open Source no SAP](/glossario/open-source-no-sap)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
