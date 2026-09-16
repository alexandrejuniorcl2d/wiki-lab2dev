---
title: "Classe Abstrata e Final"
description: "ABSTRACT define o molde (não instanciável, obriga redefinição); FINAL é o cadeado (impede herança/redefinição)."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `ABSTRACT` · `FINAL` · `Template Pattern` · `Fragile Base Class`

> **Definição**
> ABSTRACT define o molde (não instanciável, obriga redefinição); FINAL é o cadeado (impede herança/redefinição).
{.is-info}

```abap
CLASS lcl_employee DEFINITION ABSTRACT.
  PUBLIC SECTION.
    METHODS calc_pay ABSTRACT.       " subclasses DEVEM redefinir
    METHODS validar_senha FINAL.     " subclasses NÃO podem redefinir
ENDCLASS.
CLASS zcl_utils DEFINITION FINAL.   " ninguém herda
```
- **Abstract** = foco no futuro, flexibilidade, define a estrutura (ex.: Material genérico × RawMaterial).
- **Final** = foco no presente, estabilidade, garante a implementação (utilitários, impostos, senhas); static binding com leve ganho de performance.

## 🔗 Relacionados
- [Herança e Polimorfismo](/glossario/heranca-e-polimorfismo)
- [Design Patterns ABAP](/glossario/design-patterns-abap)

## 📚 Fontes
- Apostila - ABAP Orientado a Objetos

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
