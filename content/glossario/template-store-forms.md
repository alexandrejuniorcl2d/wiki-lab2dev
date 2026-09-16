---
title: "Template Store Forms"
description: "Repositório central de layouts do SAP Forms Service: cada Form agrupa vários templates XDP (idiomas/variações) e um único XSD, com versionamento automático, versão ativa para rollback, metadados, API REST e validações de upload."
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `Template Store` · `Forms Service Template Store` · `Form Template Store` · `templateSource=storageName` · `businessArea` · `businessDepartment` · `isLatestVersion`

> **Definição**
> Repositório central de layouts do SAP Forms Service: cada Form agrupa vários templates XDP (idiomas/variações) e um único XSD, com versionamento automático, versão ativa para rollback, metadados, API REST e validações de upload.
{.is-info}

**Estrutura:** 1 **Form** (ex.: `Fatura_GlobalTech`) → 1..n **templates** `.xdp` (ex.: PT-BR, EN-US) + **1 schema** `.xsd` ("A form can have several template files, but contains only one schema file at a time").

**Ciclo de vida:**
1. **Upload:** *Create Form* → aba *Templates* → *Upload* com *Template Name* (ex.: `Invoice_Layout_BR`), arquivo `.xdp`, *Language* e dados opcionais → cria a v1.
2. **Versionamento:** cada atualização cria nova *major version* (nada é sobrescrito); a mais nova tem `isLatestVersion = true`.
3. **Versão ativa:** a que o render usa por padrão — trocar a ativa faz rollback imediato.

**Metadados padronizados:** `businessArea` (Vendas, Finanças, Logística) e `businessDepartment` (Contas a Pagar, RH, Estoque) para filtrar e governar.

**API REST:**
```http
GET  /v1/forms                                   # listar forms
GET  /v1/forms/{formName}                        # detalhes
POST /v1/forms/{formName}/templates              # novo template
PUT  /v1/forms/{formName}/templates/{template}   # atualizar (nova versão)
```

**Upload falha quando:** arquivo acima do limite (ex.: 20 MB por template), nome com espaços/caracteres especiais (só letras e números unicode), arquivo que não é XDP válido, nome+idioma já existente no Form, ou **vírus detectado**.

**Migração:** exportar `.xdp`/`.xsd` do on-premise ou baixar do Template Store Neo → criar os Forms na nuvem → upload pela UI ou em massa via API (aproveite para limpar o acervo).

**Performance:** referencie o template armazenado em vez de mandar o XDP em Base64 a cada chamada — `"xdpTemplate": "nomeDoForm/nomeDoTemplate"` com `?templateSource=storageName`.

## 🔗 Relacionados
- [SAP Forms Service by Adobe](/glossario/sap-forms-service-by-adobe)
- [Adobe Forms](/glossario/adobe-forms)
- [API REST SAP Forms Service](/glossario/api-rest-sap-forms-service)

## 📚 Fontes
- Apostila - SAP Forms

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
