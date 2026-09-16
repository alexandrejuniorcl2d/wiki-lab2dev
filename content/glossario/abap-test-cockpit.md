---
title: "ABAP Test Cockpit"
description: "Ferramenta de verificação estática do código ABAP (performance, segurança, Clean Core, estilo) — deve ser etapa bloqueante no transporte."
tags: ["glossario","sap-clean-core"]
---
**Também conhecido como:** `ATC` · `Code Inspector` · `SCI` · `Code Pal` · `Verificação Estática` · `CTS_REQUEST_CHECK`

> **Definição**
> Ferramenta de verificação estática do código ABAP (performance, segurança, Clean Core, estilo) — deve ser etapa bloqueante no transporte.
{.is-info}

- DSAG: transforme o ATC em **etapa bloqueante e imutável** do sistema de transportes ("revisões manuais cedem à pressão de prazo; regras automáticas, não").
- Pipeline de qualidade: nomenclatura → pacotes → **ATC** → ABAP Unit / code coverage → produção protegida.
- **Code Pal:** checks de Clean ABAP para o ATC.
- Relato brownfield: comece pelas **vitórias fáceis** (segurança, HANA readiness) — ativar 100% dos checks de uma vez paralisa transportes.
- Resultados alimentam o painel [Customer Objects (Cloud ALM)](/glossario/customer-objects-cloud-alm).

**Arquitetura (DSAG Parte 2):**
- **Sistema central ATC** enxuto (SAP_BASIS ≥ 7.51) verificando sistemas satélites via RFC; atualize-o 1–2×/ano para receber checks novos (ou use o BTP ABAP Environment).
- Integra o **Code Inspector (SCI)**, roda no ADT, em jobs de background e no **CTS** na liberação da ordem (bloqueio com fluxo de exceção).
- **Variantes:** S/4HANA Readiness Checks · **abapOpenChecks** (+100 checks comunitários, via abapGit) · **Code Pal for ABAP** (Clean ABAP; versão cloud `/CC4A/CODE_PAL`) · checks de segurança e **CVA** (ver [Segurança ABAP](/glossario/seguranca-abap)).
- Complemento na digitação: plugin **ABAP Cleaner** no Eclipse.

**Caso real Comgroup GmbH (DSAG):** Code Inspector em jobs noturnos + BAdI **`CTS_REQUEST_CHECK`** bloqueando a liberação de requests com erros de qualidade ou idioma + e-mails centralizados de alerta e treinamento interno. Para legado: a regra é **não piorar** os indicadores existentes.

## 🔗 Relacionados
- [Níveis de Clean Core](/glossario/niveis-de-clean-core)
- [Customer Objects (Cloud ALM)](/glossario/customer-objects-cloud-alm)
- [Clean ABAP](/glossario/clean-abap)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 1)
- Apostila - SAP Customer Objects
- Apostila - DSAG Boas Práticas de Desenvolvimento ABAP
- Apostila - ABAP Orientado a Objetos

---
🧭 [Clean Core e ABAP Cloud](/glossario/temas/clean-core-e-abap-cloud) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
