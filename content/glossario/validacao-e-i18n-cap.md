---
title: "Validação e i18n CAP"
description: "Blindagem de dados no CAP em camadas (declarativa no CDS com @mandatory/@assert, imperativa em srv.before) e internacionalização completa de labels, mensagens de erro e do próprio conteúdo (localized)."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `@mandatory` · `Validação Declarativa CAP` · `Validação Imperativa CAP` · `i18n no CAP` · `i18n_pt_BR.properties` · `Accept-Language` · `sap-language` · `Books_texts` · `Tradução de Dados` · `Tradução de Modelo` · `srv.on('error')`

> **Definição**
> Blindagem de dados no CAP em camadas (declarativa no CDS com @mandatory/@assert, imperativa em srv.before) e internacionalização completa de labels, mensagens de erro e do próprio conteúdo (localized).
{.is-info}

**1ª linha de defesa — declarativa no modelo** (processada pelo core, consistente em OData, Fiori e lógica interna):
```cds
entity Books : cuid, managed {
  title : localized String(111) @mandatory;
  ISBN  : String(13) @assert.format: '^(\d{10}|\d{13})$';
  stock : Integer @assert.range: [0, null];      // null = intervalo aberto
}
```

**2ª linha — imperativa** (`srv.before`): unicidade no banco (ISBN, CPF/CNPJ), dependência de status ("só altera pedido em aberto"), validação via API externa. Falha com `req.error` → rollback.
```js
srv.before('CREATE', 'Books', async req => {
  const { ISBN } = req.data; if (!ISBN) return
  const exists = await SELECT.one.from('Books').where({ ISBN })
  if (exists) req.error(409, 'ISBN_EXISTS')      // 409 Conflict = duplicidade
})
```

**Responsabilidade compartilhada:** o framework garante SQL injection (CQN parametrizado) e type checking; você garante a **semântica** (formato, faixa, regras de domínio). "Garbage in, garbage out" — cada `@assert` é investimento em analytics e IA confiáveis.

**i18n (convenção):**
- Arquivos `_i18n/i18n.properties` (padrão) e `i18n_pt_BR.properties`; runtime resolve pelo header **`Accept-Language`**.
- **Mensagens de erro:** nunca hard-coded — `req.error(409, 'ISBN_EXISTS')` com `ISBN_EXISTS=O ISBN informado já está cadastrado.`
- **Tradução de modelo (labels):** `annotate Books with { title @title: '{i18n>BookTitle}'; }`.
- **Tradução de dados (conteúdo):** `title : localized String` → tabela sombra `Books_texts` (locale, ID, title) com JOIN automático pelo idioma da requisição.
- **Testar:** idioma do navegador, DevTools > Sensors, ou `?sap-language=pt-BR` na URL.

**Exceções:** `try/catch` local para erros esperados e recuperáveis (fallback/retry de serviço externo) + handler global `srv.on('error', ...)` como rede de segurança (log padronizado, resposta 500 sem vazar detalhes).

**Feedback no Fiori:** o erro OData com `message` e `target: "stock"` é exibido automaticamente junto ao campo, no idioma do usuário — zero código de frontend.

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [CDS no CAP](/glossario/cds-no-cap)
- [Event Handlers CAP](/glossario/event-handlers-cap)
- [Internacionalização i18n](/glossario/internacionalizacao-i18n)
- [Anotações Fiori no CAP](/glossario/anotacoes-fiori-no-cap)

## 📚 Fontes
- Apostila - SAP CAP (Completa)

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
