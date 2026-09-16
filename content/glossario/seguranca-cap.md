---
title: "Segurança CAP"
description: "Segurança declarativa no CAP: @requires (autenticação/papel) e @restrict (privilégios por evento, com where por instância via $user), ligadas a scopes/role templates do xs-security.json, auth mockada localmente e XSUAA em produção."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `@restrict CAP` · `grant` · `$user` · `Instance-Based Authorization` · `authenticated-user` · `Mock Auth` · `auth mocked` · `req.user` · `req.user.is` · `@PersonalData.IsPotentiallyPersonal` · `cds-plugin-audit-log` · `forwardAuthToken`

> **Definição**
> Segurança declarativa no CAP: @requires (autenticação/papel) e @restrict (privilégios por evento, com where por instância via \$user), ligadas a scopes/role templates do xs-security.json, auth mockada localmente e XSUAA em produção.
{.is-info}

**Fluxo no BTP (OAuth 2.0):** usuário → **AppRouter** (gatekeeper) → sem sessão, redireciona ao **XSUAA** → login → **JWT** com identidade e scopes → AppRouter encaminha com `Authorization: Bearer` → serviço CAP (resource server) valida assinatura, cria `req.user` e aplica regras. Detalhes em [Segurança BTP](/glossario/seguranca-btp).

| `@requires` | `@restrict` |
|---|---|
| "Você está logado e tem o papel X?" | "O que você pode **fazer** com estes dados?" |
| `@requires: 'authenticated-user'` / `'Admin'` → 401/403 | Lista de `grant` (eventos) `to` (papéis), com `where` opcional |

```cds
using { User } from '@sap/cds/common';
service TicketService {
  entity Tickets @(restrict: [
    { grant: '*',      to: 'Admin' },                                     // tudo
    { grant: 'READ',   to: 'User' },                                      // lê todos
    { grant: 'UPDATE', to: 'User', where: 'createdBy = $user and status.code = ''OPEN''' },  // instância + estado
    { grant: 'CREATE', to: 'User' }                                       // DELETE negado (sem grant)
  ]) { key ID : UUID; title : String; createdBy : User; status : Association to Statuses; }
}
```
- **Instance-based:** `$user` (ID) e `$user.<attr>` (atributos do JWT, ex.: `department = $user.department`) viram `WHERE` injetado na query.

**`xs-security.json` → BTP → CAP:** scopes (`$XSAPPNAME.Admin`, `$XSAPPNAME.Reader`) → role templates (Admin, Reader) → **role collections** criadas no Cockpit e atribuídas a usuários → `@requires`/`@restrict` referenciam os papéis. ⚠️ Divergência entre `xs-security.json` e role collections é a causa nº 1 de erros de autorização em produção.

**Mock auth (dev):**
```json
"auth": { "kind": "mocked", "users": {
  "alice": { "roles": ["Admin", "User"] },
  "bob":   { "roles": ["User"], "attr": { "department": "Sales" } },
  "carol": { "roles": [] } } }
```
Teste negativo: `curl -X DELETE http://localhost:4004/catalog/Books(<id>) -u bob:` → **403 Forbidden**.

**Em JavaScript:** `req.user.id`, `req.user.attr.department`, `req.user.is('Admin')` — ex.: só Admin reabre ticket fechado (`req.reject(403, ...)`).

**Audit log:** `@PersonalData.IsPotentiallyPersonal` em entidades/campos + `cds-plugin-audit-log` + binding do SAP Audit Log Service → CREATE/UPDATE/DELETE registrados (GDPR/LGPD).

**Principal propagation:** em `cds.requires.<Serviço>.credentials` use `"destination": "...", "forwardAuthToken": true` — o JWT de entrada segue na chamada de saída (autorização e auditoria end-to-end, sem usuário técnico superprivilegiado).

**Produção:** mock só no perfil `[development]`; `mta.yaml` com `requires: - name: <xsuaa-instance>`; teste híbrido com `cds bind`.

**Troubleshooting de JWT:** capture o token (Network/logs do AppRouter), decodifique (jwt.io só com tokens não produtivos), confira `scope`, `user_name`/`email`, `exp`, `iss`/`aud`; logs do CAP mostram "Insufficient scope".

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [Segurança BTP](/glossario/seguranca-btp)
- [Serviços CAP](/glossario/servicos-cap)
- [Event Handlers CAP](/glossario/event-handlers-cap)
- [MTA](/glossario/mta)

## 📚 Fontes
- Apostila - SAP CAP (Completa)
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
