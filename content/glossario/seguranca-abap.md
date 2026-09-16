---
title: "Segurança ABAP"
description: "Ameaças reais ao código ABAP (SQL injection, falta de autorização, XSS, code injection, directory traversal) e as práticas para evitá-las."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Código Seguro ABAP` · `SQL Injection` · `XSS` · `Cross-Site Scripting` · `Directory Traversal` · `Code Injection` · `AUTHORITY-CHECK` · `CVA` · `Custom Code Vulnerability Analyzer` · `SAST` · `CL_ABAP_DYN_PRG` · `Sete Regras de Programação Segura`

> **Definição**
> Ameaças reais ao código ABAP (SQL injection, falta de autorização, XSS, code injection, directory traversal) e as práticas para evitá-las.
{.is-info}

> **Mentalidade**
> Corrigir falhas após a entrega custa **10 a 100×** mais. "Confiança zero": nunca confie em nenhuma entrada, nem do seu próprio banco. Defesa em profundidade (validação + autorização + logs).
{.is-warning}

**Mapa de ameaças e defesas:**

| Ameaça | ❌ Vulnerável | ✅ Seguro |
|---|---|---|
| **SQL Injection** | `WHERE (lv_where)` montado com `p_kunnr` concatenado; Native SQL concatenado | Host variables: `WHERE kunnr = @p_kunnr` |
| **Falta de autorização** | `AUTHORITY-CHECK` sem tratar `sy-subrc`; RFC sem checagem | `AUTHORITY-CHECK OBJECT ... ` + `CASE sy-subrc` (0 ok, 4 sem autorização, 12 objeto não configurado); checar atividade **e** jurisdição (org.) |
| **XSS** (Fiori/UI5/Web Dynpro/JSON) | Devolver dado cru ao front | `cl_http_utility=>escape_html( )` no momento da exibição |
| **Code Injection** | `GENERATE SUBROUTINE POOL` com input; chamadas dinâmicas livres | Whitelist (`CASE` de métodos permitidos) |
| **Directory Traversal** | `OPEN DATASET p_filename` direto | Rejeitar `..` e caracteres `/:*?"<>|`, prefixar caminho seguro fixo |

**Comandos a expurgar:** `CALL 'SYSTEM'` (shell do SO), `INSERT REPORT` / `GENERATE` (programas sem transporte), `EDITOR-CALL FOR REPORT`, `CALL TRANSACTION` dinâmico sem `WITH AUTHORITY-CHECK`.

**Princípios:** responsabilidade do dev pelo código · menor privilégio (jobs batch) · minimize escopo de dados sensíveis na memória · validação implacável de entrada (tamanho, regex, whitelist).

**Processo:** SAST na IDE + ATC bloqueando transporte · **CVA** (Custom Code Vulnerability Analyzer — licença on-prem, incluso no BTP ABAP Environment; variantes fechadas) · revisão com "4 olhos" focada em entradas, interações (RFC) e banco · cultura de expor falhas.

**Checklist:** (1) modelar ameaças e dados LGPD, autorizações (SU53/ST01) combinadas · (2) parâmetros de banco, escape, caminhos absolutos, whitelist · (3) `AUTHORITY-CHECK` em todo dado sensível com `sy-subrc` tratado · (4) SAST sem críticos + revisão por par treinado.

**Sete regras universais (DSAG v2.0):**
1. Restrinja o acesso via autorizações.
2. Nunca presuma validação prévia — cheque localmente.
3. Evite programação genérica.
4. Não contorne mecanismos de segurança do padrão SAP.
5. Verifique todos os valores de entrada (ex.: telefone só dígitos e `()+-`).
6. Use tipos de variáveis curtos.
7. Use bibliotecas centrais de segurança — nunca escreva suas próprias checagens.

**Programação dinâmica:** quebra checagem de sintaxe e *where-used list* e abre SQL injection → use com parcimônia e `CL_ABAP_DYN_PRG` para whitelists; macros e ofuscação são proibidas.

Nunca escreva código que se comporta diferente por mandante/sistema (`MANDT` hard-coded) — impede testes e viola ITGC (COSO/COBIT). Referências: guia BSI e BIZEC APP/11.

## 🔗 Relacionados
- [Autorizações SAP](/glossario/autorizacoes-sap)
- [ABAP Test Cockpit](/glossario/abap-test-cockpit)
- [DCL - Access Control](/glossario/dcl-access-control)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
