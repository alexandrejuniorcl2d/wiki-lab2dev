---
title: "JavaScript no RPA"
description: "Pro-code dentro do low-code no SAP Build Process Automation: atividade Custom Script com input/output, funções de array, regex, try/catch, global error handler, datas, logs com irpa_core, chamadas REST com fetch, automações helper e depuração."
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `Custom Script RPA` · `function step(input)` · `irpa_core` · `irpa_core.core.log` · `Global Error Handler RPA` · `fetch RPA` · `Automação Helper RPA` · `debugger RPA` · `Regex RPA`

> **Definição**
> Pro-code dentro do low-code no SAP Build Process Automation: atividade Custom Script com input/output, funções de array, regex, try/catch, global error handler, datas, logs com irpa_core, chamadas REST com fetch, automações helper e depuração.
{.is-info}

**Quando usar (os 20% pro-code):** cálculos complexos, regex (CPF, CNPJ, nº de pedido, extração de e-mails/PDFs), transformação de JSON/arrays de APIs, datas e fusos entre sistemas.

**Estrutura:**
```javascript
function step(input) {            // executada quando o fluxo chega no passo
  const a = input.valorA;          // Input Parameters definidos em Step Details
  const b = input.valorB;
  return { resultado: a + b };     // chaves = Output Parameters
}
```

**Arrays modernos:** `.map()` (transformar: e-mails de usuários) · `.filter()` (faturas > R\$ 10.000) · `.find()` (produto pelo SKU).

**Regex:**
```javascript
const match = input.corpoEmail.match(/(\d{3})\.(\d{3})\.(\d{3})/);   // "NF-e número 000.054.321"
return { numeroNotaFiscal: match ? match[1] + match[2] + match[3] : null };   // "000054321"
```

**Resiliência:** `try/catch` por item (um valor inválido não derruba a soma) + **Global Error Handler** do workflow: *Take Screenshot* → *Log Message* → *Send Email* → *Raise Alert* na Factory.

**Datas SAP GUI → API:**
```javascript
const [dia, mes, ano] = input.dataSap.split('.');                  // "28.05.2024"
const d = new Date(ano, mes - 1, dia);                              // mês 0-indexado
return { dataFormatada: `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` };
```
(para fusos e cálculos complexos, dependências como date-fns/moment.js).

**Logs na Factory (não `console.log`):**
```javascript
const irpa_core = require('irpa_core');
irpa_core.core.log({ message: `Pedido ${pedido.id} com valor alto requer aprovação`,
                     type: irpa_core.enums.log.type.Warning,     // Info | Warning | Error
                     label: 'AprovacaoNecessaria' });
```

**REST com fetch:**
```javascript
async function step(input) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${input.cep}/json/`);
    const data = await response.json();
    return { logradouro: data.logradouro, cidade: data.localidade, uf: data.uf };
  } catch (error) {
    throw new Error(`API de CEP indisponível ou CEP inválido: ${input.cep}`);   // cai no Global Error Handler
  }
}
```

**Helpers (DRY):** encapsule lógicas repetidas em automações próprias (ex.: `Utils_FormatarDataSapParaApi`).

**Depurar:** modo Debug (ícone de inseto) + `debugger;` no código → DevTools (F12) abre em *Sources* pausado → painel *Scope*, Step Over (F10).

**Desafio "R\$ 1.200,50" → 1200.50:** `parseFloat(valor.replace('R$','').trim().replace(/\./g,'').replace(',','.'))`.

## 🔗 Relacionados
- [Cloud Studio RPA](/glossario/cloud-studio-rpa)
- [Excel SDK RPA](/glossario/excel-sdk-rpa)
- [Operação RPA](/glossario/operacao-rpa)
- [JavaScript para ABAPers](/glossario/javascript-para-abapers)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
