---
title: "Customer Objects (Cloud ALM)"
description: "Painel do SAP Cloud ALM que faz um \"raio-X\" dos objetos Z, classificando cada um em níveis de Clean Core e medindo a dívida técnica."
tags: ["glossario","sap-clean-core"]
---
**Também conhecido como:** `Customer Objects` · `Objetos do Cliente` · `Painel de Objetos do Cliente`

> **Definição**
> Painel do SAP Cloud ALM que faz um "raio-X" dos objetos Z, classificando cada um em níveis de Clean Core e medindo a dívida técnica.
{.is-info}

- **Objetivo:** identificar dívidas técnicas antes que virem problemas em upgrades (agilidade, redução de custo, prontidão para RISE).
- **Pré-requisitos:** resultados do [ATC](/glossario/abap-test-cockpit) importados (> 4 semanas = "Obsoleto"; recomenda-se semanalmente) e role de visualizador.
- **Acesso:** bloco "Customer Objects" na RISE with SAP Methodology ou *System View > Extensibility > Clean Core*.
- **Filtros:** System ID, pacote, tipo de objeto, nível de Clean Core.

**Três dimensões de análise:**
1. **Constatações (findings):** nível D = erro prio 1 · C = aviso prio 2 · B = info prio 3.
2. **Referências:** APIs liberadas (estável) · objetos internos (arriscado) · não recomendados (bloqueados para cloud).
3. **Comportamentos:** escrita em tabela SAP → D; leitura em tabela SAP → C; `CALL TRANSACTION`/`ROLLBACK` → B.

Detalhe por objeto mostra os **objetos SAP referenciados** e sua classificação — permite remover "dependências tóxicas". Suporte: componente `SV-CLM-RMD-SYS`.

**Boas práticas:** monitore (importe ATC semanalmente) → priorize (maior pontuação primeiro) → limpe (busque o nível A).

## 🔗 Relacionados
- [Níveis de Clean Core](/glossario/niveis-de-clean-core)
- [Dívida Técnica](/glossario/divida-tecnica)
- [ABAP Test Cockpit](/glossario/abap-test-cockpit)
- [SAP Cloud ALM](/glossario/sap-cloud-alm)
- [Objeto Z](/glossario/objeto-z)

## 📚 Fontes
- Apostila - SAP Customer Objects

---
🧭 [Clean Core e ABAP Cloud](/glossario/temas/clean-core-e-abap-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
