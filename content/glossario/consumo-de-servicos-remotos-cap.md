---
title: "Consumo de Serviços Remotos CAP"
description: "Integração no CAP: importar EDMX/OpenAPI com cds import, conectar via cds.connect.to e consultar remotos com a mesma CQL — padrões delegation (proxy), mashup (associação local→remota) e remote projection, com mocks locais e Destinations em produção."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `cds import` · `srv/external` · `cds.connect.to` · `Service Delegation` · `Mashup CAP` · `Mix-in CAP` · `Remote Projection` · `cds mock` · `odata-v2 kind` · `API_BUSINESS_PARTNER` · `bupa.tx`

> **Definição**
> Integração no CAP: importar EDMX/OpenAPI com cds import, conectar via cds.connect.to e consultar remotos com a mesma CQL — padrões delegation (proxy), mashup (associação local→remota) e remote projection, com mocks locais e Destinations em produção.
{.is-info}

**CAP como orquestrador:** serviços locais e remotos (S/4HANA, APIs de terceiros) são "cidadãos de primeira classe"; o CAP abstrai OData V2/V4 e REST.

**1. Importar:** `cds import API_BUSINESS_PARTNER.edmx` → gera `srv/external/API_BUSINESS_PARTNER.cds` e adiciona em `package.json`:
```json
"cds": { "requires": { "API_BUSINESS_PARTNER": {
  "kind": "odata-v2", "model": "srv/external/API_BUSINESS_PARTNER",
  "[production]": { "credentials": { "destination": "S4HANA_Cloud",
                    "path": "/sap/opu/odata/sap/API_BUSINESS_PARTNER" } } } } }
```
(Especificações EDMX em [SAP Business Accelerator Hub](/glossario/sap-business-accelerator-hub).)

**2. Padrões:**
| Padrão | Como | Quando |
|---|---|---|
| **Delegation (proxy)** | `entity BusinessPartners as projection on bupa.A_BusinessPartner;` + `this.on('READ','BusinessPartners', req => bupa.run(req.query))` | Fachada segura e controlada |
| **Mashup (mix-in)** | Entidade local `Risks { supplier : Association to Suppliers; }` com `Suppliers` projeção remota → `GET /Risks?$expand=supplier` junta banco local + S/4HANA | Enriquecer dados locais com remotos |
| **Remote projection** | `entity Products as projection on s4product.A_Product { Product as ID, ... }` + `@UI.LineItem` | UI acoplada ao seu serviço, não ao S/4HANA |

**3. Consumir em JS:**
```js
const bupa = await cds.connect.to('API_BUSINESS_PARTNER')
const tx = bupa.tx(req)          // propaga tenant e JWT do usuário
const bp = await tx.run(SELECT.one.from(bupa.entities.A_BusinessPartner, ['BusinessPartnerFullName'])
                          .where({ BusinessPartner: supplierId }))   // → GET ...?$select=...&$filter=...
if (!bp) req.error(400, `Business Partner ${supplierId} não encontrado no S/4HANA`)
```
Cenário TechBooks: `before('CREATE','Authors')` só aceita autor que exista como BP no S/4HANA.

**Mocking remoto:** CSV em `srv/external/data/<SERVICO>-<Entidade>.csv`; sem destination, `cds watch` sobe mock (`mocking API_BUSINESS_PARTNER at /api-business-partner`). Mais realista: `cds mock API_BUSINESS_PARTNER` em um terminal e `cds watch` em outro (chamada HTTP real).

**Conectividade:** [Destination Service](/glossario/destination-service) guarda URL, tipo de auth (Basic, OAuth2, principal propagation) e credenciais fora do código — trocar Dev/QAS/Prod sem redeploy; S/4HANA on-premise via [SAP Cloud Connector](/glossario/sap-cloud-connector) (Proxy Type `OnPremise`), transparente para o código.

**Performance:** `$select` (projete campos), `$filter` no servidor (nunca filtre em memória), paginação `$top`/`$skip` (repassada na delegação). **Resiliência:** retries com exponential backoff, circuit breaker (ex.: lib `opossum` envolvendo `tx.run`), fallbacks com cache — ver [Resiliência BTP](/glossario/resiliencia-btp).

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [Destination Service](/glossario/destination-service)
- [SAP Cloud Connector](/glossario/sap-cloud-connector)
- [SAP Business Accelerator Hub](/glossario/sap-business-accelerator-hub)
- [Resiliência BTP](/glossario/resiliencia-btp)
- [Extensibilidade Side-by-Side](/glossario/extensibilidade-side-by-side)

## 📚 Fontes
- Apostila - SAP CAP (Completa)
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
