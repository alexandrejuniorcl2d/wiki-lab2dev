---
title: "Joule no ABAP Cloud"
description: "Capacidades do Joule for Developers no ABAP Development Tools, praticadas no SAP Developer Challenge de 4 semanas: gerar app RAP com Joule Chat, entender código com Explain, gerar validações com RAP Business Logic Prediction e completar determinatio…"
tags: ["glossario","sap-ia"]
---
**Também conhecido como:** `Joule Chat ABAP` · `Joule Explain` · `RAP Business Logic Prediction` · `RAP Predict` · `Joule Predictive Code Completion` · `Predictive Code Completion ABAP` · `ABAP Developer Challenge Joule` · `SAP Build Basic Trial` · `Fusion Development with ABAP Cloud in SAP Build` · `ZAC_`

> **Definição**
> Capacidades do Joule for Developers no ABAP Development Tools, praticadas no SAP Developer Challenge de 4 semanas: gerar app RAP com Joule Chat, entender código com Explain, gerar validações com RAP Business Logic Prediction e completar determinations com Predictive Code Completion.
{.is-info}

**Capacidades:**
| Capacidade | O que faz |
|---|---|
| **Joule Chat** | Cria aplicações RAP a partir de prompts (no assistente *Generate ABAP Repository Objects*) |
| **Joule Explain** | Explica em detalhe blocos de código ABAP/CDS selecionados |
| **RAP Business Logic Prediction** | Sugere a implementação de lógica de negócio (validations) |
| **Predictive Code Completion** | Completa código a partir de prompts em comentários, passo a passo (toggle na toolbar) |

Base: LLM SAP treinado em código ABAP corporativo — geração de modelos de dados, lógica e testes unitários, e modernização/refatoração de ABAP legado com chat.

**Semana 1 — ambiente:** SAP Build **Basic Trial** de 30 dias (`sap.com/products/technology-platform/build/trial.html` → *Try Now*) com BTP ABAP Environment e Joule (ativação até 30 min) → workbook **"Fusion Development with ABAP Cloud in SAP Build"** (criar projeto ABAP Cloud no lobby e abrir no ADT — use a versão mais recente) → pacote **`ZAC_<community ID>`** (ID em community.sap.com > My Content, número após `user-id` na URL).

**Semana 2 — app RAP com Joule Chat:**
1. Planejar entidade com campo de **valor** (desconto) e de **data** (anos), mais três campos (ex.: livraria — ID, Title, Author, Price, Published Date, Stock, Discounted Price, BookAge).
2. Pacote > *Generate ABAP Repository Objects* > **OData UI Service from Scratch** → painel Joule "Ask Joule to update the fields" com o prompt (peça objetos terminando com o community ID).
3. Joule propõe entidade e campos → *Accept* → garantir **Transactional with Draft** (Joule às vezes muda para "without draft"; sem draft some o botão Create) → *Next* → *Finish*.
4. Publicar o service binding, abrir o preview Fiori Elements e criar 4–5 registros.
5. Lógica na CDS (ex.: `DiscountedPrice` = preço com 2% de desconto); se necessário, **recriar a draft table** (`_D###`) pelo quick fix na behavior definition.
6. Selecionar um trecho (ex.: `CASE`) e usar **Joule → Explain**.

**Semana 3 — validation com RAP Predict:**
```abap
field ( mandatory ) Title;
validation validateTitle on save { create; update; }
draft determine action Prepare { validation validateTitle; }   // valida drafts antes de ativar
```
Quick fix (ícone à esquerda ou botão direito > Quick Fix) cria o método na *local handler class* (`lhc_`) do behavior pool (`zbp_`) → **RAP Predict Business Logic** gera a checagem do campo vazio com mensagem de erro no estado da transação. Referência: BDEF `/DMO/R_Travel_D` e `SAP-samples/abap-platform-rap100` (ex05).

**Semana 4 — determination com Predictive Code Completion:**
```abap
determination calculateBookAge on save { create; update; }
```
Quick fix cria o método → prompts simples por etapa com **Predictive Code Completion** para calcular os anos desde a data (desabilite o toggle ao escrever novos prompts ou ao terminar). Referência: rap100 ex04.

**Regras do challenge:** tarefas semanais (02/03 a 23/03/2026), nome exato do pacote no tópico de cada semana, revisão remota e badge oficial da SAP Community. "Happy Jouling!"

Ver também [Determinations e Validations](/glossario/determinations-e-validations) e [Draft RAP](/glossario/draft-rap).

## 🔗 Relacionados
- [SAP Joule](/glossario/sap-joule)
- [IA Generativa no Desenvolvimento ABAP](/glossario/ia-generativa-no-desenvolvimento-abap)
- [RAP](/glossario/rap)
- [Behavior Definition](/glossario/behavior-definition)
- [Determinations e Validations](/glossario/determinations-e-validations)
- [Draft RAP](/glossario/draft-rap)
- [SAP Build](/glossario/sap-build)

## 📚 Fontes
- Apostila - Developer Challenge ABAP e SAP Joule

---
🧭 [IA, Joule e Prompts](/glossario/temas/ia-joule-e-prompts) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
