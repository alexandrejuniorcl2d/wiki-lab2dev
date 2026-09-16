---
title: "Encapsulamento"
description: "Controle de visibilidade (PUBLIC, PROTECTED, PRIVATE) que protege o estado do objeto; atributos públicos são \"bugs silenciosos\"."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `PUBLIC SECTION` · `PROTECTED SECTION` · `PRIVATE SECTION` · `Visibilidade` · `READ-ONLY` · `Getter` · `Setter` · `FRIENDS`

> **Definição**
> Controle de visibilidade (PUBLIC, PROTECTED, PRIVATE) que protege o estado do objeto; atributos públicos são "bugs silenciosos".
{.is-info}

| Seção | Própria classe | Subclasse | Externo |
|---|:---:|:---:|:---:|
| **PUBLIC** — a interface/contrato | ✅ | ✅ | ✅ |
| **PROTECTED** — "fica na família" | ✅ | ✅ | ❌ |
| **PRIVATE** — lógica interna | ✅ | ❌ | ❌ |

- **Getters/Setters:** nunca exponha atributo público; valide no SET (ex.: `RAISE EXCEPTION` se salário < 0).
- **`READ-ONLY`:** atributo público legível por todos, alterável só pela classe.
- **`FRIENDS`:** classes amigas acessam PROTECTED/PRIVATE — quebra encapsulamento; use para ABAP Unit ou Factory.
- Benefícios: rastreabilidade no debug e *loose coupling* (mudar o tipo interno não quebra programas externos).

## 🔗 Relacionados
- [Classe e Objeto](/glossario/classe-e-objeto)
- [Herança e Polimorfismo](/glossario/heranca-e-polimorfismo)

## 📚 Fontes
- Apostila - ABAP Orientado a Objetos

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
