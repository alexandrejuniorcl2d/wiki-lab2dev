---
title: "Robustez ABAP"
description: "Práticas para código que não quebra e não corrompe dados: checar SY-SUBRC, exceções em classe, bloqueios ENQUEUE, LUW/update task e Application Log."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Lock Object` · `Objeto de Bloqueio` · `ENQUEUE` · `DEQUEUE` · `Update Task` · `LUW` · `Logical Unit of Work` · `Application Log` · `SLG1` · `SBAL` · `SLG2` · `LOG-POINT` · `MESSAGE`

> **Definição**
> Práticas para código que não quebra e não corrompe dados: checar SY-SUBRC, exceções em classe, bloqueios ENQUEUE, LUW/update task e Application Log.
{.is-info}

> **"Erro engolido é pior que dump, porque o dump avisa."**

- **SY-SUBRC:** verifique imediatamente após todo comando que o altera; em `CALL FUNCTION ... EXCEPTIONS` sempre inclua `OTHERS` (a lista de exceções pode mudar). `ASSERT sy-subrc = 0` é preferível a esconder o erro; em processamento em massa, registre o erro e siga.
- **MESSAGE:** comportamento varia por tipo e ambiente — em dynpros pode disparar **COMMIT implícito**; em RFC derruba a conexão. No núcleo da aplicação use exceções; exceção tolerada: `MESSAGE ... INTO` para preencher campos SY.
- **Exceções:** nunca deixe `CATCH` vazio (propague); encadeie com `PREVIOUS`; `CX_STATIC_CHECK` (padrão, obrigatório tratar) · `CX_DYNAMIC_CHECK` (quando o chamador pode prevenir via parâmetros) · `CX_NO_CHECK` (erros sistêmicos). Exceções não tratáveis (ex.: permissão no SO) → cheque pré-condições (`AUTHORITY_CHECK_DATASET` antes de `OPEN DATASET`).
- **Bloqueios:** leitura + atualização sem lock = *race condition*. Use **lock objects** (`ENQUEUE_*` / `DEQUEUE_*`), bloqueio pessimista o mais específico e curto possível; libere em `CLEANUP`.
- **LUW e update task:** cada troca de tela/RFC troca o work process e gera COMMIT implícito → empacote gravações no **update task** (`CALL FUNCTION ... IN UPDATE TASK` + `COMMIT WORK`) para gravar tudo ou nada. Avalie frameworks (BOPF/RAP) antes de fazer isso à mão.
- **Log:** Business Application Log (`SLG1`, funções `SBAL`) encapsulado numa classe wrapper; defina data de expiração e limpe com `SLG2`; tabelas Z de log só para estatísticas; `LOG-POINT` (`SAAB`) é temporário. Em ABAP Cloud use `CL_BALI_LOG`.

## 🔗 Relacionados
- [Exceções ABAP](/glossario/excecoes-abap)
- [Segurança ABAP](/glossario/seguranca-abap)
- [BOPF](/glossario/bopf)
- [RAP](/glossario/rap)

## 📚 Fontes
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
