---
title: "Resiliência de Integrações"
description: "Padrões para integrações robustas: idempotência com chave externa, timeouts de 30–60 s e retentativas com backoff exponencial (especialmente em 429)."
tags: ["glossario","sap-odata"]
---
**Também conhecido como:** `Idempotência` · `Retry` · `Exponential Backoff` · `Throttling` · `Rate Limiting` · `Timeout`

> **Definição**
> Padrões para integrações robustas: idempotência com chave externa, timeouts de 30–60 s e retentativas com backoff exponencial (especialmente em 429).
{.is-info}

- **Idempotência:** redes falham e clientes fazem retry → sem cuidado, POST duplica registros. Estratégia: gerar um ID externo (UUID) antes da chamada, gravá-lo num campo de extensão e seguir o fluxo **verificar (GET com `$filter`) → criar só se não existir**.
- **Timeouts:** otimize a chamada primeiro (`$filter`, `$select`); configure 30–60 s no cliente.
- **Throttling:** `429 Too Many Requests` é proteção deliberada. **Nunca** faça retry imediato em loop — use **backoff exponencial** (1 s, 2 s, 4 s…).
- Evite chamadas desnecessárias em loop; use `$batch` para volume.

## 🔗 Relacionados
- [Códigos de Erro OData](/glossario/codigos-de-erro-odata)
- [Batch OData](/glossario/batch-odata)

## 📚 Fontes
- Apostila - OData

---
🧭 [OData](/glossario/temas/odata) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
