---
title: "OData (tema)"
description: "Protocolo OData V2/V4, Gateway, SEGW, operações e query options."
tags: ["glossario","sap-odata"]
---
> **Sobre esta área**
> Protocolo OData V2/V4, Gateway, SEGW, operações e query options.
> Tag: [#sap-odata](/t/sap-odata) · 20 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - OData — Protocolo OData, SAP Gateway, SEGW, CDS/RAP e consumo de APIs (ex.: C4C).

## 📖 Termos

### Escrita
- [Batch OData](/glossario/batch-odata) *(\$batch, Batch, Change Set)* — Agrupa várias operações em um único POST /\$batch (multipart/mixed); escritas dentro de um change set são atômicas (tudo ou nada).
- [Deep Insert OData](/glossario/deep-insert-odata) *(Deep Insert, Deep Create)* — Criar entidade pai e filhos (ex.: conta + endereço) num único POST, aninhando os filhos pela navigation property — atômico e com menos chamadas.
- [ETag OData](/glossario/etag-odata) *(If-Match, 412 Precondition Failed, Optimistic Locking)* — Controle otimista de concorrência: envie o ETag lido no header If-Match; se outro usuário alterou antes, o servidor responde 412 Precondition Failed.
- [Function Import](/glossario/function-import) *(Function Imports, Action OData, Query Function Import)* — Endpoint OData que expõe lógica de negócio do backend: queries complexas (GET) ou ações que modificam dados (POST), encapsulando regras e validações.
- [Operações CRUD OData](/glossario/operacoes-crud-odata) *(POST, PUT, PATCH)* — Escrita via HTTP: POST cria (201), PATCH atualiza parcialmente (204), PUT substitui tudo, DELETE remove (204) — sempre com CSRF token.

### Fundamentos
- [Metadata OData](/glossario/metadata-odata) *(\$metadata, EDMX, EntitySet)* — Documento XML (EDMX) acessado por /\$metadata que descreve entidades, propriedades, tipos, chaves e relacionamentos do serviço — sempre o primeiro passo.
- [OData](/glossario/odata) *(Open Data Protocol, OData V2, OData V4)* — Protocolo REST padronizado (OASIS) para expor e consumir dados via HTTP com metadados, consultas por URL e operações CRUD — padrão de UI e APIs no mundo SAP.
- [SAP Gateway](/glossario/sap-gateway) *(Gateway, SAP NetWeaver Gateway, SEGW)* — Componente ABAP que expõe e roteia serviços OData (tradutor entre HTTP/OData e objetos ABAP); SEGW é o construtor clássico de serviços, substituído pelo RAP.

### Leitura
- [Navigation Property OData](/glossario/navigation-property-odata) *(Navigation Property, \$expand, Navegação OData)* — Propriedades que ligam entidades (pai-filho); acessadas por URL (/Entidade('id')/Filho) ou trazidas juntas com \$expand (análogo a LEFT JOIN).
- [Paginação OData](/glossario/paginacao-odata) *(__next, @odata.nextLink, \$skiptoken)* — Leitura em fatias com \$top/\$skip (cliente) ou seguindo o link __next/@odata.nextLink quando o servidor corta a resposta (ex.: 1.000 registros).
- [Query Options OData](/glossario/query-options-odata) *(System Query Options, \$filter, \$select)* — Parâmetros de URL para extração cirúrgica: \$filter (linhas), \$select (colunas), \$orderby, \$top/\$skip (paginação), \$inlinecount, \$format, \$search.

### Resiliência
- [Códigos de Erro OData](/glossario/codigos-de-erro-odata) *(HTTP Status OData, 400 Bad Request, 401 Unauthorized)* — Status HTTP e payload de erro SAP (code, message, innererror com transactionid e propertyref) para tratar falhas de integração.
- [Resiliência de Integrações](/glossario/resiliencia-de-integracoes) *(Idempotência, Retry, Exponential Backoff)* — Padrões para integrações robustas: idempotência com chave externa, timeouts de 30–60 s e retentativas com backoff exponencial (especialmente em 429).

### SAP C4C
- [Entidades C4C de Clientes](/glossario/entidades-c4c-de-clientes) *(AccountCollection, IndividualCustomerCollection, ContactCollection)* — Modelo de clientes da API C4C: Account (PJ), IndividualCustomer (PF), Contact via AccountContactRelationship, endereços, equipe, dados de vendas e mapeamento de IDs externos.
- [Entidades C4C de Serviço](/glossario/entidades-c4c-de-servico) *(ServiceRequestCollection, ServiceRequest, Ticket C4C)* — Gestão de tickets na API C4C: ServiceRequest com prioridade, categorias, SLAs, interações por TypeCode, status do ciclo de vida, sub-tickets, anexos Base64 e apontamento de horas.
- [Entidades C4C de Vendas](/glossario/entidades-c4c-de-vendas) *(LeadCollection, OpportunityCollection, OpportunityProduct)* — Funil de vendas na API C4C: Lead → Opportunity (fase, probabilidade, valor, produtos) e atividades (appointments, tasks, phone calls) com participantes por RoleCode.
- [Recursos Avançados da API C4C](/glossario/recursos-avancados-da-api-c4c) *(PSM, Public Solution Model, KUT)* — Extensibilidade (PSM, KUT), IDs amigáveis, modo de compatibilidade, transporte, change documents, serviços customizados e monitoramento na API OData do C4C.
- [SAP C4C](/glossario/sap-c4c) *(C4C, SAP Cloud for Customer, SAP Sales Cloud)* — CRM em nuvem da SAP (Sales/Service Cloud) cuja API OData v2 c4codataapi expõe 40+ objetos de negócio e 1.000+ coleções para integrações.

### Segurança
- [Autenticação OData](/glossario/autenticacao-odata) *(Basic Auth, Basic Authentication, Certificado X.509)* — Três formas de autenticar em APIs OData SAP: Basic (usuário/senha em Base64, só testes), certificado X.509 (produção server-to-server) e OAuth 2.0/SAML (tokens Bearer via IdP).
- [CSRF Token](/glossario/csrf-token) *(x-csrf-token, x-csrf-token fetch, Cross-Site Request Forgery)* — Token anti-CSRF exigido pelo SAP em toda requisição modificadora: faça GET com x-csrf-token: fetch, guarde o token e os cookies e reenvie nas escritas.

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
