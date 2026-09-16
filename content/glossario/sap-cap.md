---
title: "SAP CAP"
description: "Framework \"opinativo\" da SAP (Node.js ou Java) para construir serviços e apps enterprise na BTP: modelagem declarativa em CDS, serviços OData gerados, handlers para lógica e integração nativa com XSUAA, HANA e mensageria."
tags: ["glossario","sap-cap"]
---
**Também conhecido como:** `CAP` · `Cloud Application Programming Model` · `SAP Cloud Application Programming Model` · `cap.cloud.sap` · `CAP Node.js` · `CAP Java`

> **Definição**
> Framework "opinativo" da SAP (Node.js ou Java) para construir serviços e apps enterprise na BTP: modelagem declarativa em CDS, serviços OData gerados, handlers para lógica e integração nativa com XSUAA, HANA e mensageria.
{.is-info}

> **"What, not How!"**
> Capture a intenção no CDS; deixe o framework cuidar da implementação otimizada.

**Por que CAP:** acelera (mínimo de boilerplate), foco no domínio (começa pela modelagem CDS), padrão aberto (Node.js ou Java), pronto para nuvem (XSUAA, conectividade, HANA) — "o padrão ouro para novos apps na BTP". Alternativa ABAP equivalente: [RAP](/glossario/rap) (DSAG: decisão CAP × RAP depende de skills e acoplamento — ver [Extensibilidade Side-by-Side](/glossario/extensibilidade-side-by-side)).

**Arquitetura hexagonal (portas e adaptadores):**
- **Core:** domínio e serviços (`db/`, `srv/`) puros e testáveis.
- **Portas:** serviços definidos em CDS.
- **Adaptadores de protocolo:** OData V4 por padrão (também REST, GraphQL) sem mudar o serviço.
- **Adaptadores de persistência:** SQLite em desenvolvimento, SAP HANA em produção — mesma lógica.

**Regras de ouro do arquiteto CAP:**
1. Capture a intenção, não a implementação (`cuid`, `managed`, `localized`).
2. Modelos simples e planos ("keep it simple").
3. Separação de concerns: domínio em `db/`, serviços em `srv/`, UI em `app/`; `extend`/`annotate` em arquivos separados.
4. Serviços são a interface orientada a casos de uso, não espelho do banco.
5. Desenvolva localmente e "mock everything" (SQLite, `cds watch`, auth mockada, serviços remotos mockados).

**Grow-as-you-go:** protótipo com SQLite → produção com HANA Cloud e XSUAA por **perfis de configuração**, sem reescrever código.

**Ferramentas:** SAP Business Application Studio (dev space *Full-Stack Cloud Application*) ou VS Code com *SAP CDS Language Support*, ESLint, Prettier, SQLTools. Documentação: `cap.cloud.sap`.

**Projeto-exemplo do curso — TechBooks Enterprise:** distribuidora B2B de livros técnicos (produtos, editoras, armazéns, estoque, clientes, pedidos), com API logística externa, eventos de despacho e papéis (vendedor, operador de armazém, admin).

## 🔗 Relacionados
- [CDS no CAP](/glossario/cds-no-cap)
- [Serviços CAP](/glossario/servicos-cap)
- [Projeto CAP](/glossario/projeto-cap)
- [Event Handlers CAP](/glossario/event-handlers-cap)
- [SAP BTP](/glossario/sap-btp)
- [MTA](/glossario/mta)
- [RAP](/glossario/rap)
- [Fiori Elements](/glossario/fiori-elements)

## 📚 Fontes
- Apostila - SAP CAP (Completa)
- Apostila - Arquitetura do SAP BTP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)

---
🧭 [SAP CAP](/glossario/temas/sap-cap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
