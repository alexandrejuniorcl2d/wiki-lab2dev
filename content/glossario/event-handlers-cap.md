---
title: "Event Handlers CAP"
description: "Lógica de negócio no CAP Node.js: handlers before (validar), on (implementar/substituir) e after (enriquecer) registrados em srv/*.js, com cds.ql, transações automáticas e mensagens req.error/reject/info/warn."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `service.js` · `cds.service.impl` · `srv.before` · `srv.on` · `srv.after` · `await next()` · `req.error` · `req.reject` · `req.info` · `req.warn` · `srv.emit` · `cds.ql` · `SELECT.from` · `cds.tx` · `req.data` · `req.results` · `Promise.all CAP` · `Handlers CAP`

> **Definição**
> Lógica de negócio no CAP Node.js: handlers before (validar), on (implementar/substituir) e after (enriquecer) registrados em srv/*.js, com cds.ql, transações automáticas e mensagens req.error/reject/info/warn.
{.is-info}

**Convenção sobre configuração:** `srv/admin-service.cds` é ligado automaticamente a `srv/admin-service.js` no mesmo diretório. O serviço herda de `cds.Service` (`ApplicationService`); handlers são registrados **uma vez** na inicialização e executados a cada requisição.

```js
const cds = require('@sap/cds')
module.exports = cds.service.impl(async function (srv) {
  const { Books } = srv.entities

  srv.before('CREATE', Books, req => {                    // BEFORE: validar/enriquecer
    if (req.data.stock < 0) req.error(400, 'STOCK_NEGATIVE')
  })

  srv.after('READ', Books, each => {                      // AFTER: 1 parâmetro = itera cada registro
    each.stockStatus = each.stock > 10 ? 'Disponível' : each.stock > 0 ? 'Estoque Baixo' : 'Indisponível'
  })

  srv.on('promoteBook', async req => {                    // ON: obrigatório para actions/functions
    const { bookId } = req.data
    const book = await SELECT.one.from(Books, bookId)
    if (!book) return req.error(404, `Livro ${bookId} não encontrado`)
    if (book.price > 500) return req.error(400, 'Livros acima de 500 não podem ser promovidos')
    await UPDATE(Books, bookId).with({ price: book.price * 1.1 })
    return { ID: bookId, newPrice: book.price * 1.1 }
  })
})
```

| Fase | Uso | Observação |
|---|---|---|
| `before` | Validação complexa, enriquecimento de `req.data`, autorização dinâmica | Erro aborta antes do `on` e faz rollback |
| `on` | Actions/functions, READ complexo, substituir CRUD por API externa | **Substitui** o handler genérico; use `await next()` para delegar ao padrão |
| `after` | Campos transientes, formatação, sanitização, fire-and-forget | Manipula `req.results` antes da resposta |

**cds.ql:** `SELECT.from('Books').where({...})`, `INSERT.into('Authors').entries({...})`, `UPDATE('Books', id).with({ stock: {'-=': 1} })`, `DELETE.from('Books').where({ ID })` — traduzido para o SQL do banco (portável) e **parametrizado** (sem SQL injection).

**Performance:** evite `await` em loop — crie as promises e use `await Promise.all(items.map(i => UPDATE(...)))`. Evite **N+1 queries**: colete IDs e faça uma query `WHERE ... IN (...)`.

**Transações:** cada requisição de escrita/action roda numa transação automática (commit/rollback pelo CAP — basta em \~95% dos casos). `cds.tx(req)` anexa-se à transação atual para passar a funções utilitárias, agrupar `srv.run()` ou padrões retry/Saga.

**Mensagens:**
| Método | Comportamento |
|---|---|
| `req.error(code, msg)` | Erro "leve": acumula e continua; falha no final — ideal para validar vários campos |
| `req.reject(code, msg)` | Erro "grave": interrompe imediatamente (≈ `throw`) — falhas críticas |
| `req.info(msg)` / `req.warn(msg)` | Toast informativo/aviso no Fiori sem interromper |

**Eventos internos (pub/sub):** `srv.emit('OrderCreatedForAudit', {...})` (assíncrono, fire-and-forget) + `srv.on('OrderCreatedForAudit', msg => ...)` em outro serviço — desacopla auditoria/notificação.

**Contexto do usuário:** `req.user.is('vip_customer')` para regras como desconto VIP de 15%.

**Debug no VS Code:** `.vscode/launch.json` com `"runtimeExecutable": "npm", "runtimeArgs": ["run","start"]`, breakpoints, F5, dispare a requisição e inspecione variáveis e call stack.

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [Serviços CAP](/glossario/servicos-cap)
- [Validação e i18n CAP](/glossario/validacao-e-i18n-cap)
- [Consumo de Serviços Remotos CAP](/glossario/consumo-de-servicos-remotos-cap)

## 📚 Fontes
- Apostila - SAP CAP (Completa)

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
