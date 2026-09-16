---
title: "Excel SDK RPA"
description: "Manipulação profissional de planilhas no SAP RPA com o Excel SDK (API do Excel, não mapeamento de tela): instância e workbook, leitura em bloco com Get Range, data types, loops, escrita, abas, filtros, fórmulas, liberação de recursos no Finally e al…"
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `Excel SDK` · `Excel Cloud Link` · `Open Excel Instance` · `Open Workbook` · `Get Range` · `Get Cell Value` · `Set Cell Value` · `Release Excel Instance` · `Close Workbook` · `Data Type RPA` · `Array de Arrays` · `Filter Range` · `Read CSV File` · `Deserialize JSON`

> **Definição**
> Manipulação profissional de planilhas no SAP RPA com o Excel SDK (API do Excel, não mapeamento de tela): instância e workbook, leitura em bloco com Get Range, data types, loops, escrita, abas, filtros, fórmulas, liberação de recursos no Finally e alternativas CSV/JSON.
{.is-info}

| Excel Cloud Link / mapeamento de tela | **Excel SDK** |
|---|---|
| Simula cliques; depende de resolução, Excel visível e células fixas | Objetos Workbook/Worksheet/Range via API; roda invisível em servidor |
| Frágil e lento | Robusto e ordens de magnitude mais rápido — requisito para nível enterprise |

**Inicialização:** **Open Excel Instance** (`EXCEL.EXE` na memória; `Visible: false` para unattended, `true` para depurar) → **Open Workbook** (`excelInstance` + `workbookPath`) → objeto `workbook`.

**Leitura:** *Get Cell Value* (célula conhecida) × **Get Range** (`A1:D50`) → **array de arrays** (`dados[1][0]` = 1º item da 2ª linha). ⚠️ Nunca *Get Cell* em loop — leia tudo de uma vez.

**Data Types:** *Create > Data Type* (ex.: `TipoPedido` com `material: String`, `quantidade: Number`, `status: String`) — trocar `linha[0]` por `PedidoAtual.material`; opção *Strict* impede propriedades não definidas (geralmente desmarcada para Excel).

**Loop:** *For Each* sobre o array; mapear `currentMember` num script:
```javascript
var PedidoAtual = new Tipos.TipoPedido();
PedidoAtual.material   = currentMember[0];
PedidoAtual.quantidade = currentMember[1];
PedidoAtual.status     = currentMember[2];
```

**Escrita:** *Set Cell Value* com referência dinâmica (`cellReference = "D" + (contador + 2)` — cabeçalho na linha 1); gravar "Processado com Sucesso", mensagem de erro do SAP ou ID gerado.

**Abas:** *Add Worksheet* ("Resultados", "Logs de Erro"), *Rename Worksheet* ("Pedidos_2023-10-27"), *Activate Worksheet* antes de operar.

**Filtrar:** *If/Else* dentro do loop (lógicas complexas) ou **Filter Range** antes do loop (mais performático para filtro simples).

**Enriquecer:** fórmulas via *Set Cell Value* (`=SUM(E2:E100)`, `=VLOOKUP(A2,'OutraAba'!A:B,2,FALSE)`) e formatação (*Set Cell Color*, negrito em cabeçalhos).

> **Try / Catch / Finally**
> Erro no meio do fluxo deixa `EXCEL.EXE` preso na memória (leak). No **Finally** (sempre executado): *Close Workbook* (com `saveChanges`) e **Release Excel Instance**.
{.is-warning}

**Performance:** acumule resultados em coleções (`listaSucessos`, `listaErros` com *Add to Collection*) e escreva em bloco no fim.

**Sem Excel no servidor:** *Read/Write CSV File* (array de arrays, sem software instalado) ou *Deserialize/Serialize JSON* (data types, APIs) — a lógica central não muda.

**Exercício:** Try/Catch/Finally → Excel invisível → Get Range sem cabeçalho → data type `Pedido` → For Each com contador → processar só `Status == "Pendente"` e gravar "Processado"/"Erro" → Finally fecha e libera.

## 🔗 Relacionados
- [Cloud Studio RPA](/glossario/cloud-studio-rpa)
- [JavaScript no RPA](/glossario/javascript-no-rpa)
- [Automação SAP GUI RPA](/glossario/automacao-sap-gui-rpa)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
