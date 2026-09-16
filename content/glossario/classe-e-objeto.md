---
title: "Classe e Objeto"
description: "Classe é o modelo (a planta); objeto é a instância na memória em runtime (a casa construída). Atributos = estado; métodos = comportamento."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Classe` · `Objeto` · `Instância` · `CREATE OBJECT` · `NEW` · `Constructor` · `Class_Constructor` · `Static` · `CLASS-DATA` · `CLASS-METHODS`

> **Definição**
> Classe é o modelo (a planta); objeto é a instância na memória em runtime (a casa construída). Atributos = estado; métodos = comportamento.
{.is-info}

```abap
CLASS zcl_carro DEFINITION PUBLIC.
  PUBLIC SECTION.
    DATA: mv_cor TYPE string.          " atributo (prefixo mv_ = member variable)
    CLASS-DATA: gv_total TYPE i.       " estático: compartilhado pela classe
    METHODS: constructor IMPORTING iv_cor TYPE string,
             acelerar IMPORTING iv_forca TYPE i.
    CLASS-METHODS: class_constructor.  " roda 1x no 1º acesso à classe
  PRIVATE SECTION.
    DATA: mv_motor_temp TYPE i.
ENDCLASS.

CLASS zcl_carro IMPLEMENTATION.
  METHOD acelerar.
    mv_motor_temp = mv_motor_temp + 10.
  ENDMETHOD.
  ...
ENDCLASS.

DATA lo_carro TYPE REF TO zcl_carro.   " só a referência (ponteiro)
CREATE OBJECT lo_carro EXPORTING iv_cor = 'Azul'.  " sintaxe clássica
lo_carro = NEW #( iv_cor = 'Azul' ).   " sintaxe moderna (7.40+)
lo_carro->acelerar( iv_forca = 5 ).    " -> instância
zcl_carro=>gv_total.                   " => estático
```

| Instance | Static |
|---|---|
| Uma cópia por objeto (Carro 1 vermelho, Carro 2 azul) | Existe uma vez na memória ("a fábrica") |
| Acesso via `->` | Acesso via `=>` |

- **constructor:** executado no `CREATE OBJECT`/`NEW`, define estado inicial.
- **class_constructor:** executado uma única vez, no primeiro acesso à classe (buffers, configurações).

## 🔗 Relacionados
- [ABAP Orientado a Objetos](/glossario/abap-orientado-a-objetos)
- [Encapsulamento](/glossario/encapsulamento)

## 📚 Fontes
- Apostila - ABAP Orientado a Objetos

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
