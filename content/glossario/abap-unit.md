---
title: "ABAP Unit"
description: "Framework de testes unitários automatizados do ABAP (classes FOR TESTING, asserts, mocks) — \"código sem teste é legado instantâneo\"."
tags: ["glossario","sap-abap"]
---
**Também conhecido como:** `Teste Unitário ABAP` · `FOR TESTING` · `CL_ABAP_UNIT_ASSERT` · `CL_AUNIT_ASSERT` · `Mock` · `Test Double` · `Injeção de Dependência`

> **Definição**
> Framework de testes unitários automatizados do ABAP (classes FOR TESTING, asserts, mocks) — "código sem teste é legado instantâneo".
{.is-info}

```abap
CLASS lcl_test DEFINITION FOR TESTING RISK LEVEL HARMLESS DURATION SHORT.
  PRIVATE SECTION.
    METHODS test_fatorial FOR TESTING.
ENDCLASS.
CLASS lcl_test IMPLEMENTATION.
  METHOD test_fatorial.
    cl_abap_unit_assert=>assert_equals( act = lv_resultado exp = 24
                                        msg = 'Fatorial incorreto' ).
  ENDMETHOD.
ENDCLASS.
```
- Asserts: `ASSERT_EQUALS`, `ASSERT_DIFFERS`, `ASSERT_BOUND`, `ASSERT_SUBRC`, `FAIL`; parâmetros `LEVEL`, `QUIT`, `TOL` (tolerância para ponto flutuante).
- Executar: **Ctrl+Shift+F10** no ADT.
- **Shift Left:** bug em DEV custa centavos; em PRD custa reputação.
- Teste unitário deve ser **isolado** → dependências (DB, APIs) substituídas por **mocks** via interfaces e injeção de dependência.

**Diretrizes DSAG (Leitfaden 2026):**
- ⚠️ `CL_AUNIT_ASSERT` é **obsoleta** → use sempre `CL_ABAP_UNIT_ASSERT`.
- Estruture cada teste em **GIVEN / WHEN / THEN**; `SETUP` roda antes e `TEARDOWN` depois de cada teste.
- **RISK LEVEL:** `HARMLESS` (não muda nada) · `DANGEROUS` (persistência) · `CRITICAL` (customizing). **DURATION:** `SHORT` (60 s) · `MEDIUM` (300 s) · `LONG` (3600 s). Meta: 100% SHORT + HARMLESS.
- O que trava a adoção: pouca vivência em OO, volta aos velhos hábitos sob pressão, "pronto" = funciona na tela. Teste deve entrar na **Definition of Done**.
- **Test doubles:** *mock* (responde dinamicamente), *stub* (respostas fixas), *fake* (implementação simplificada), *spy* (registra chamadas).
- **Frameworks:** `CL_ABAP_TESTDOUBLE` (classes/interfaces) e test double para módulos de função; `CL_OSQL_TEST_ENVIRONMENT` (mock de tabelas e CDS em memória); dados em containers ECATT. Precisar deles indica arquitetura pouco testável.
- **Test Seams** (`TEST-SEAM` / `TEST-INJECTION`): cirurgia em código legado (telas, RFC) — temporário, remova ao modernizar.
- **Cobertura:** mede por onde passou, não qualidade; testar métodos privados diretamente é mais eficaz que forçar cenários gigantes via públicos.
- Se o código pode lançar exceção, **não** a trate no teste — declare-a na assinatura para o teste falhar ruidosamente.
- ATC bloqueia transporte se testes falharem; execuções periódicas; primeiro hábito do dia = ver se os testes estão verdes.
- Pirâmide: ABAP Unit na base; integração com Cloud ALM e **Tricentis Test Automation**.

**Curva de Boehm:** um defeito em produção custa até 100× mais que na análise. Divisão de papéis *white box* (dev), *grey box* (integração por time independente) e *black box* (usuário valida o negócio); regressão com **eCATT**; frameworks de mock **ABAP Test Double Framework** e **MockA**.

**Testes em RAP (apostila RAP, módulo 8):**
- **Pirâmide:** muitos testes unitários (rápidos, isolados) na base → integração (BO + APIs; OData Client Proxy) → poucos testes de UI end-to-end.
- **Arsenal:** ABAP Unit + [EML](/glossario/eml) (para "conversar" com o BO) + test doubles + OData client proxy.
- Alvo principal: o **behavior pool** (determinations, validations, actions).
- Padrão **Arrange → Act → Assert**:
```abap
METHOD initial_status_is_open.
  " Arrange
  DATA travels TYPE TABLE FOR CREATE zi_travel.
  travels = VALUE #( ( %cid = 'test_01' AgencyID = '070007' CustomerID = '000095'
                       BeginDate = '20240801' EndDate = '20240815' ) ).
  " Act
  MODIFY ENTITIES OF zi_travel ENTITY Travel CREATE FIELDS ( AgencyID CustomerID BeginDate EndDate )
    WITH travels MAPPED DATA(mapped) FAILED DATA(failed) REPORTED DATA(reported).
  cl_abap_unit_assert=>assert_initial( failed-travel ).
  " Assert
  READ ENTITIES OF zi_travel ENTITY Travel ALL FIELDS
    WITH CORRESPONDING #( mapped-travel ) RESULT DATA(result).
  cl_abap_unit_assert=>assert_equals( exp = 'O' act = result[ 1 ]-OverallStatus
                                      msg = 'Status inicial deveria ser Aberto (O)' ).
ENDMETHOD.
```

## 🔗 Relacionados
- [Interface ABAP](/glossario/interface-abap)
- [Design Patterns ABAP](/glossario/design-patterns-abap)
- [Testes em Projetos SAP](/glossario/testes-em-projetos-sap)

## 📚 Fontes
- Apostila - ABAP Orientado a Objetos
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP
- Apostila - ABAP RAP

---
🧭 [ABAP](/glossario/temas/abap) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
