---
title: "Projeto CAP"
description: "Estrutura e ferramental de um projeto CAP: CLI (cds init/add/watch), pastas db/srv/app, configuração em package.json/.cdsrc.json com perfis e a separação @sap/cds (runtime) × @sap/cds-dk (dev kit)."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `cds init` · `cds add` · `cds watch` · `cdsw` · `db/ srv/ app/` · `package.json CAP` · `.cdsrc.json` · `@sap/cds` · `@sap/cds-dk` · `Perfis CAP` · `cds.requires` · `profile hybrid`

> **Definição**
> Estrutura e ferramental de um projeto CAP: CLI (cds init/add/watch), pastas db/srv/app, configuração em package.json/.cdsrc.json com perfis e a separação @sap/cds (runtime) × @sap/cds-dk (dev kit).
{.is-info}

```bash
cds init techbooks-enterprise   # estrutura base db/ srv/ app/
cd techbooks-enterprise
cds add hana        # adaptador HANA
cds add mta         # descritor mta.yaml
cds add pipeline    # CI/CD
cds add helm        # Kyma
cds add linter      # ESLint com regras CAP
cds add samples     # dados de exemplo
cds watch           # loop de desenvolvimento
```

| Pasta | Camada | Conteúdo |
|---|---|---|
| `db/` | Domínio e persistência | `schema.cds`, tipos, aspectos, dados `.csv` |
| `srv/` | Aplicação e serviços | `*-service.cds` (APIs) + `*.js` (handlers) |
| `app/` | Apresentação | Fiori Elements/UI5, `annotations.cds` |

**`@sap/cds` × `@sap/cds-dk`:** `@sap/cds` é o runtime (`cds.Service`, `cds.ql`, servidor) — `dependency`, necessário em produção. `@sap/cds-dk` é o kit (CLI, compilador, `cds watch`, `cds build`) — `devDependency`, trava versões no CI e não vai para produção.

**Configuração:** `package.json` (dependências, scripts, `cds.requires` versionados) × `.cdsrc.json` (overrides e perfis mais legíveis; local > usuário `~/.cdsrc.json` > global).

```json
"cds": {
  "requires": {
    "db":   { "kind": "sqlite", "[production]": { "kind": "hana" } },
    "auth": { "[development]": { "kind": "mocked",
                "users": { "alice": { "roles": ["admin"] } } },
              "[production]": { "kind": "xsuaa" } }
  }
},
"scripts": { "start": "cds-serve", "watch": "cds watch --profile hybrid",
             "build": "cds build --production", "deploy": "cds deploy --to hana" }
```

**`cds watch` por dentro:** monitora `db/ srv/ app/` → compila `.cds` para CSN → gera DDL e recria o SQLite em memória carregando `.csv` (deploy implícito) → reinicia o servidor na porta **4004** → abre o browser; cria **mocks** automáticos para serviços remotos em `cds.requires`; `--profile hybrid` usa auth mockada/SQLite localmente com serviços reais da nuvem.

**Troubleshooting de setup:** padronize a versão do Node (`.nvmrc`/`engines`) e versione `package-lock.json`; evite `cds` global divergente do `@sap/cds-dk` local (use `npm run watch`); "reset nuclear": `npm cache clean --force`, apagar `node_modules` e lock, `npm install`.

## 🔗 Relacionados
- [SAP CAP](/glossario/sap-cap)
- [CDS no CAP](/glossario/cds-no-cap)
- [MTA](/glossario/mta)

## 📚 Fontes
- Apostila - SAP CAP (Completa)
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
