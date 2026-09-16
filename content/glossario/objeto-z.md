---
title: "Objeto Z"
description: "Objeto customizado pelo cliente, criado no namespace reservado (prefixos Z ou Y, ou um namespace registrado /XYZ/) para não colidir com objetos SAP."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Objetos Z` · `Customer Namespace` · `Namespace de Cliente` · `Z` · `Y` · `Desenvolvimento Z` · `Customização`

> **Definição**
> Objeto customizado pelo cliente, criado no namespace reservado (prefixos Z ou Y, ou um namespace registrado /XYZ/) para não colidir com objetos SAP.
{.is-info}

- Programas, classes, tabelas, CDS, transações etc. com prefixo `Z*`/`Y*` (ex.: `ZCL_CARRO`, `ZI_DELIV_HU`, `ZCX_BP`).
- Em projetos reais os sistemas são cheios de objetos Z ("choque de realidade" para quem só viu o standard em curso).
- Cada objeto Z é dívida de manutenção: avalie sempre [Standard First](/glossario/standard-first) e meça a conformidade com [Níveis de Clean Core](/glossario/niveis-de-clean-core).
- Pacote `$TMP` = objetos locais, sem transporte.

**DSAG v2.0:** separar objetos do cliente dos objetos SAP é regra inegociável (evita colisões ao fundir sistemas ou importar ferramentas). Recomenda-se fortemente registrar gratuitamente um **namespace de cliente** (`/EMPRESA/`) na SAP para proteção mundial do código.

## 🔗 Relacionados
- [Clean Core](/glossario/clean-core)
- [RICEFW](/glossario/ricefw)
- [Standard First](/glossario/standard-first)
- [Customer Objects (Cloud ALM)](/glossario/customer-objects-cloud-alm)
- [Modificação do Standard](/glossario/modificacao-do-standard)

## 📚 Fontes
- Apostila - Consultor SAP (Dia 1) - Ecossistema e Soft Skills
- Apostila - Consultor SAP (Dia 2) - CV e Entrevistas
- Apostila - SAP Customer Objects
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
