---
title: "Herança e Polimorfismo"
description: "Herança reutiliza a classe pai (relação \"É UM\"); polimorfismo faz o mesmo método ter comportamentos diferentes decididos em runtime."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Herança` · `Polimorfismo` · `INHERITING FROM` · `REDEFINITION` · `super->` · `me->` · `Overriding`

> **Definição**
> Herança reutiliza a classe pai (relação "É UM"); polimorfismo faz o mesmo método ter comportamentos diferentes decididos em runtime.
{.is-info}

```abap
CLASS lcl_order_export DEFINITION INHERITING FROM lcl_order.
  PUBLIC SECTION.
    METHODS calculate_tax REDEFINITION.   " assinatura idêntica
ENDCLASS.

METHOD calculate_tax.
  r_tax = super->calculate_tax( ).        " reaproveita a lógica do pai
  r_tax = r_tax + customs_fee.            " e acrescenta a da filha
ENDMETHOD.
```
- O programa principal não precisa de `IF type = 'EXPORT'`: chama `pedido->calculate_tax( )` e o objeto decide (**dynamic binding**).
- `super->` só em métodos redefinidos/construtores; `me->` é a auto-referência à instância atual.
- Glossário: `INHERITING FROM` (pai-filho), `REDEFINITION` (sobrescrever), `ABSTRACT` (incompleto, não instanciável), `FINAL` (sem filhas).

## 🔗 Relacionados
- [Interface ABAP](/glossario/interface-abap)
- [Classe Abstrata e Final](/glossario/classe-abstrata-e-final)
- [Casting e RTTI](/glossario/casting-e-rtti)

## 📚 Fontes
- Apostila - ABAP Orientado a Objetos

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
