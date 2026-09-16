---
title: "Output Management SAP"
description: "Frameworks que disparam a emissão de formulários: NAST (condition technique via NACE/TNAPR em SD/MM), PPF (SPPFCADM em EWM/TM) e o S/4HANA Output Control, novo padrão com BRF+ como motor de regras."
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `NAST` · `NACE` · `TNAPR` · `Condition Technique Output` · `PPF` · `Post Processing Framework` · `SPPFCADM` · `S/4HANA Output Control` · `Output Control` · `BRF+ Output` · `TAANA` · `EFRM` · `Druck-Workbench`

> **Definição**
> Frameworks que disparam a emissão de formulários: NAST (condition technique via NACE/TNAPR em SD/MM), PPF (SPPFCADM em EWM/TM) e o S/4HANA Output Control, novo padrão com BRF+ como motor de regras.
{.is-info}

| Framework | Onde | Configuração | Observações |
|---|---|---|---|
| **NAST** | SD, MM (clássico) | `NACE` (tipos de mensagem, programas e formulários em `TNAPR`) | Condition technique; suporta workflow; use `TAANA` na NAST para medir volume por ano/idioma antes de migrar |
| **PPF** (Post Processing Framework) | EWM, TM, CRM | `SPPFCADM` | Ações disparadas por condições |
| **S/4HANA Output Control** | S/4HANA (novo padrão) | SPRO > componentes > controle de saída | **BRF+** é só o motor de regras (determinação de destinatário, canal, formulário); fragmentos Adobe para layout reutilizável; **não** suporta workflow como a NAST |
| Específicos | IS-U (Druck-Workbench `EFRM`), FI (dunning próprio) | — | — |

**Canais de saída do motor ADS:** impressão (spool), e-mail, arquivamento (ArchiveLink) e XML — formatos PDF, PDF/A, PCL, ZPL e PostScript (ver [Adobe Document Services](/glossario/adobe-document-services)).

## 🔗 Relacionados
- [SAP Forms](/glossario/sap-forms)
- [Adobe Forms](/glossario/adobe-forms)
- [SAPscript e Smart Forms](/glossario/sapscript-e-smart-forms)

## 📚 Fontes
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
