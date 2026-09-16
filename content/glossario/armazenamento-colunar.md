---
title: "Armazenamento Colunar"
description: "Técnica do HANA de guardar dados por coluna (não por linha), lendo só as colunas necessárias e comprimindo até ~90%."
tags: ["glossario","sap-modulos"]
---
**Também conhecido como:** `Columnar Store` · `Banco Orientado a Coluna` · `Column Store`

> **Definição**
> Técnica do HANA de guardar dados por coluna (não por linha), lendo só as colunas necessárias e comprimindo até \~90%.
{.is-info}

- **Orientado a linha (tradicional):** para somar vendas de um produto, lê todas as linhas e colunas.
- **Orientado a coluna (HANA):** lê só as colunas `Produto` e `Valor`.
- **Compressão:** dados da mesma coluna têm o mesmo tipo → compressão de até 90%, permitindo que todo o banco caiba na RAM.

## 🔗 Relacionados
- [SAP HANA](/glossario/sap-hana)
- [OLTP e OLAP](/glossario/oltp-e-olap)

## 📚 Fontes
- Apostila - Conhecendo todos os Módulos do SAP

---
🧭 [Módulos Funcionais SAP](/glossario/temas/modulos-funcionais-sap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
