---
title: "Adobe Forms"
description: "Padrão ouro de formulários SAP: interface e contexto na transação SFP, layout XDP no Adobe LiveCycle Designer, dados em XML validados por XSD, renderizados pelo ADS/Forms Service como PDF de impressão ou interativo; no S/4HANA Cloud, gestão pelos ap…"
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `Interactive Forms by Adobe` · `SAP Interactive Forms by Adobe` · `IFbA` · `SFP` · `Adobe LiveCycle Designer` · `LiveCycle Designer` · `Form Interface` · `Form Context` · `XDP` · `xdpTemplate` · `XSD Forms` · `Master Page` · `Content Area` · `formType interactive` · `S/4HANA Forms` · `F1434` · `F2894` · `F2761` · `F1589` · `SOMU_FORM_MASTER_A4`

> **Definição**
> Padrão ouro de formulários SAP: interface e contexto na transação SFP, layout XDP no Adobe LiveCycle Designer, dados em XML validados por XSD, renderizados pelo ADS/Forms Service como PDF de impressão ou interativo; no S/4HANA Cloud, gestão pelos apps S/4HANA Forms.
{.is-info}

**On-premise (transação `SFP`):**
- **Interface:** parâmetros de *import*/*export*, *global definitions* e *initialization*.
- **Contexto:** o que da interface vai para o layout.
- **Layout:** Adobe LiveCycle Designer (integrado ao SAP GUI) — *master page*, *content area*, *content page*, códigos de barras, fontes TrueType; teste na Design View com XML de dados (`XFD.xml`); modo exibição não salva.
- **Chamada:** `FP_FUNCTION_MODULE_NAME` retorna o módulo gerado — ver [Programação ABAP de Formulários](/glossario/programacao-abap-de-formularios).
- **DSAG:** extraia 100% da lógica para uma classe ABAP; o formulário só apresenta.

**Anatomia de um formulário na nuvem:**
| Arquivo | Papel | Analogia |
|---|---|---|
| `.xdp` (XML Data Package) | Layout visual, textos estáticos, validações simples, máscaras, *data binding* | A "tela" |
| `.xsd` (XML Schema Definition) | Estrutura hierárquica e tipos (`xs:string`, `xs:decimal`, `xs:date`) — contrato de dados | A "planta" |
| `.xml` | Dados de runtime que casam com o XDP | O conteúdo |

Separar layout e dados permite reusar o mesmo XDP com dados diferentes e o mesmo XSD em vários layouts (ex.: `Fatura_PT.xdp` e `Fatura_EN.xdp` com um único schema) — ver [Template Store Forms](/glossario/template-store-forms).

**Tipos de PDF (`formType`):** `print` (padrão, campos mesclados e não editáveis) × `interactive` (campos editáveis no Adobe Reader; com a credencial **ReaderRights** o usuário salva os dados, e um botão "Enviar" devolve o XML ao SAP — ex.: relatório de visita offline).

**S/4HANA Forms (cloud):** apps **F1434** (manter modelos de formulário), **F2894** (textos), **F2761** (logos), **F1589** (transportes); gateway OData em vez de programa de impressão; LiveCycle Designer stand-alone; sem bloqueio automático de edição (coordene e transporte via F1589); catálogo `SAP_BASIS_TCR_T`. **Fragmentos** Adobe (ex.: `SOMU_FORM_MASTER_A4`) para layouts reutilizáveis no Output Control.

**Performance by design (LiveCycle):**
- Scripts: evite lógica pesada em `initialize`, `form:ready`, `layout:ready`; regras de negócio, buscas e cálculos em cascata vão para o backend (pré-calcule totais no XML). No XDP só validações de campo, somas simples e visibilidade.
- Imagens com resolução adequada (PNG para logos, JPG comprimido para fotos); prefira layouts *flowed* e pouco aninhamento de subformulários.
- Hierarquia limpa e bindings explícitos na *Data View*; teste em *Preview PDF* com XML realista (1000 linhas, não 10); *Save Options* otimizadas.

## 🔗 Relacionados
- [SAP Forms](/glossario/sap-forms)
- [Adobe Document Services](/glossario/adobe-document-services)
- [Programação ABAP de Formulários](/glossario/programacao-abap-de-formularios)
- [Template Store Forms](/glossario/template-store-forms)
- [Output Management SAP](/glossario/output-management-sap)

## 📚 Fontes
- Apostila - SAP Forms
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
