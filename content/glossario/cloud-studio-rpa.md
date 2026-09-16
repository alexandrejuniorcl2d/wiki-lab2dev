---
title: "Cloud Studio RPA"
description: "Desenvolvimento de automações no Cloud Studio: capturar aplicações (web via DOM, UIAutomation), organizar telas e elementos, definir critérios estáveis e coleções, montar fluxos com atividades e esperas, parametrizar input/output e testar/depurar."
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `Cloud Studio` · `SAP Build Cloud Studio` · `Capture Application` · `Screen RPA` · `Declared Element` · `Criteria RPA` · `Is a collection` · `Web Driver RPA` · `UIAutomation` · `Start Web Page` · `Wait Element` · `Get Element Content` · `Set Element Text` · `Input Parameters RPA` · `Tree View RPA` · `Spy Mode`

> **Definição**
> Desenvolvimento de automações no Cloud Studio: capturar aplicações (web via DOM, UIAutomation), organizar telas e elementos, definir critérios estáveis e coleções, montar fluxos com atividades e esperas, parametrizar input/output e testar/depurar.
{.is-info}

**Layout:** *Explorer* (applications, automations, data types) · editor central (captura, fluxo, critérios) · *Properties* (critérios, parâmetros) · console (*Test Console*, *Errors*, variáveis).

**Capturar aplicação:** *Create* > *Application* → o Studio detecta janelas/abas abertas → escolher a aba → *Capture* cria a primeira *Screen*.

**Tecnologias:** **Web** (padrão para navegadores — lê o DOM: ID, class, name, tag; rápido e estável) × **UIAutomation** (fallback baseado na UI do Windows, ex.: pop-ups do SO).

**Hierarquia:** aplicação (`meuecommerce.com`) → *screen* (`PaginaLogin`) → *element* (`CampoUsuario`, `BotaoEntrar`). Renomeie tudo com nomes funcionais — `Screen1` não diz nada.

**Critérios (o "RG" do elemento), em ordem de preferência:** **ID** → name → class → tag. IDs dinâmicos (`dyn_btn_9a8b7c`)? use **`contains`** na parte fixa ou **`*`** (`equals 'button-xyz-*'`). "Se ocorrer um erro, verifique a declaração e os critérios."

**Coleções:** capture um item repetido (linha de tabela), generalize os critérios (remova índices como `tr[1]`) e marque **Is a collection** → itere com *For Each*.

**Fluxo:** *Create* > *Automation* → arrastar a screen para o canvas adiciona **Start Web Page** e **Close Web Page** automaticamente (evita processos zumbis).

**Atividades básicas:** *Click* · *Set Element Text* (input = texto) · *Get Element Content* (resultado em output).

> **Sincronização é soberana**
> O erro nº 1 em RPA web é agir antes do elemento carregar. Nada de *wait fixo*: use **Wait Element** antes de cada Click/Set em elemento que depende de ação anterior; *Wait (Appear)* / *Wait (Disappear)* (ex.: spinner sumir).
{.is-success}

**Input/Output parameters:** transformam a automação em "função" reutilizável (ex.: input `termoBusca`, output `precoProduto`).

**Testar e depurar:** *Test* → escolher environment (Dev/Test/Prod, define o agent) → informar inputs → debugger com passo a passo, variáveis/watches e breakpoints. **Tree view / Spy** destaca na árvore o elemento sob o mouse para achar atributos mais estáveis sem recapturar.

**Exercício — robô de e-commerce:** input `nomeProduto`, output `precoResultado` → Start Web Page → Wait Element campo de busca → Set Element Text → Click buscar → Wait Element resultados → Get Element Content do preço → Test.

**Princípios:** seletores são a fundação · sincronização é soberana · clareza é manutenibilidade · modularize com I/O · antecipe falhas (Try/Catch, *Log Message*).

## 🔗 Relacionados
- [SAP RPA](/glossario/sap-rpa)
- [Automação SAP GUI RPA](/glossario/automacao-sap-gui-rpa)
- [Excel SDK RPA](/glossario/excel-sdk-rpa)
- [JavaScript no RPA](/glossario/javascript-no-rpa)
- [Factory RPA](/glossario/factory-rpa)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
