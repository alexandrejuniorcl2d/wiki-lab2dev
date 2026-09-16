---
title: "Engenharia de Prompts"
description: "Arte e ciência de formular instruções claras e estruturadas para modelos de IA — anatomia do prompt, delimitadores, zero-shot, few-shot, chain-of-thought, persona, controle de tom e formato, combate a alucinações e iteração."
tags: ["glossario","sap-ia"]
---
**Também conhecido como:** `Prompt Engineering` · `Engenharia de Prompt` · `Prompt` · `Zero-Shot` · `Zero-Shot Prompting` · `Few-Shot` · `Few-Shot Prompting` · `Chain-of-Thought` · `CoT` · `Role Prompting` · `Persona Prompt` · `Delimitadores de Prompt` · `Alucinação IA` · `Hallucination` · `Tokens LLM` · `Prompting Iterativo`

> **Definição**
> Arte e ciência de formular instruções claras e estruturadas para modelos de IA — anatomia do prompt, delimitadores, zero-shot, few-shot, chain-of-thought, persona, controle de tom e formato, combate a alucinações e iteração.
{.is-info}

> Não é apenas perguntar, é **como** perguntar. Modelos são literais: ambiguidade gera mediocridade.

**Pilares:** compreensão linguística (vocabulário preciso, sem ambiguidade) · pensamento lógico (decompor tarefas, técnicas) · conhecimento do domínio (contexto, terminologia, papel da IA).

**Como os LLMs "pensam":** veem **tokens** (≈ 4 caracteres ou ¾ de palavra, ex.: "Engen" + "har" + "ia") e calculam a **próxima palavra mais provável** com todo o contexto anterior ("O gato subiu no… telhado 75%, sofá 15%, avião 0,1%") — "máquinas de completar texto" sofisticadas.

**Anatomia do prompt:**
| Parte | Pergunta | Exemplo |
|---|---|---|
| **Instrução** (ação) | O que fazer | "Resuma", "Classifique", "Crie um roteiro de vídeo sobre…" |
| **Contexto** | Quem e onde | "Você é especialista em marketing…", público "executivos C-level", cenário "crise de imagem" |
| **Dados de entrada** | Com o que trabalhar | Texto do cliente entre delimitadores |
| **Formato de saída** | Como entregar | "Tabela markdown com colunas Item e Descrição, tom profissional" |

**Amador × estruturado:**
- ❌ "Escreva um texto sobre marketing."
- ✅ "Escreva um **post para LinkedIn** sobre **tendências de marketing digital em 2024** para **profissionais B2B**, em **tom provocativo**, com **3 hashtags**."

**Delimitadores:** `"""triple quotes"""` (textos longos, código), `### seções ###`, `<tags>` XML (altamente eficazes):
```text
# Instrução: Analise o sentimento da avaliação delimitada por <review>.
# Dados:
<review>O produto é excelente… No entanto, a entrega atrasou dois dias.</review>
# Formato: classifique como "Positivo", "Negativo" ou "Misto".
```

**Técnicas:**
| Técnica | Como | Quando |
|---|---|---|
| **Zero-shot** | Só a tarefa, sem exemplos ("Traduza para o francês: …") | Conhecimento geral, formato não crítico |
| **Few-shot** | Exemplos input → output antes da tarefa ("Projeto de Energia Solar → Inovação"; "Redução de Custos → Eficiência"; "Treinamento de Equipe → ?") | Formato ou estilo específico |
| **Chain-of-thought** | Pedir raciocínio passo a passo | Problemas complexos, matemática |
| **Role-playing / persona** | "Aja como um advogado sênior em Direito Civil…" com experiência, público e objetivo | Respostas técnicas e contextuais |

**Tom, estilo e formato:** formal/corporativo (relatório, jurídico) · equilibrado/informativo (blog, tutorial) · criativo (roteiro, storytelling); formatos tabela, lista, passos, JSON/CSV. Dica: especifique o público para calibrar complexidade e tom.

**Alucinações** (a IA prevê palavras, não fatos, com alta confiança) — restrinja:
1. "Responda **apenas** com base no texto fornecido."
2. "Cite a **página ou parágrafo** de cada afirmação."
3. "Se a informação não estiver no texto, responda **'Não sei'**."

**Iteração:** prompt inicial → gerar e analisar (precisão, completude, estilo) → identificar lacunas (alucinações, instruções ignoradas, respostas genéricas) → refinar (mais contexto, restrições, pedir raciocínio) → repetir.

**Casos corporativos:** resumo executivo (reunião de 2 h em e-mail de 5 pontos) · comunicação (reescrever e-mail de reclamação focado na solução) · análise de sentimento (3 principais dores em 50 avaliações) · ideação (10 ideias para reduzir papel em 20%).

**O que não fazer:** ambiguidade ("breve", "legal") · contradições ("relatório detalhado em uma frase") · suposições (a IA não conhece sua empresa sem contexto) · sobrecarga (10 tarefas num prompt — divida em etapas).

**Em SAP:** os mesmos princípios valem para [SAP Joule](/glossario/sap-joule) no Build Code, SAC e ADT.

## 🔗 Relacionados
- [SAP Joule](/glossario/sap-joule)
- [IA Generativa no Desenvolvimento ABAP](/glossario/ia-generativa-no-desenvolvimento-abap)
- [SAP AI Core](/glossario/sap-ai-core)

## 📚 Fontes
- Apostila - Engenharia de Prompts

---
🧭 [IA, Joule e Prompts](/glossario/temas/ia-joule-e-prompts) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
