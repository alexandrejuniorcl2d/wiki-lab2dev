---
title: "Programação ABAP de Formulários"
description: "Como chamar formulários Adobe no ABAP: fluxo clássico FP_JOB_OPEN → FP_FUNCTION_MODULE_NAME → módulo gerado → FP_JOB_CLOSE, a abordagem OO com CL_FP_ADS_UTIL=>CALL_ADS, obtenção do PDF (GETPDF), parâmetros de saída, tratamento de erros e debug do XM…"
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `FP_JOB_OPEN` · `FP_FUNCTION_MODULE_NAME` · `FP_JOB_CLOSE` · `CL_FP_ADS_UTIL` · `CALL_ADS` · `SFPOUTPUTPARAMS` · `SFPDOCPARAMS` · `GETPDF` · `GETXML` · `CX_FP_RUNTIME` · `ARCMODE` · `/1BCDWB/DOCPARAMS` · `/1BCDWB/FORMOUTPUT` · `Programa de Impressão Adobe`

> **Definição**
> Como chamar formulários Adobe no ABAP: fluxo clássico FP_JOB_OPEN → FP_FUNCTION_MODULE_NAME → módulo gerado → FP_JOB_CLOSE, a abordagem OO com CL_FP_ADS_UTIL=>CALL_ADS, obtenção do PDF (GETPDF), parâmetros de saída, tratamento de erros e debug do XML.
{.is-info}

**Fluxo clássico (3 atos):**
```abap
DATA: lv_fm_name TYPE funcname, ls_params TYPE sfpoutputparams,
      ls_docparams TYPE sfpdocparams, ls_output TYPE sfpformoutput.

ls_params-device = 'PRINTER'.  ls_params-nodialog = 'X'.  ls_params-reqnew = 'X'.
CALL FUNCTION 'FP_JOB_OPEN'                       " 1. abre o job / spool
  CHANGING ie_outputparams = ls_params
  EXCEPTIONS cancel = 1 usage_error = 2 system_error = 3 internal_error = 4 OTHERS = 5.

CALL FUNCTION 'FP_FUNCTION_MODULE_NAME'           " 2. nome do módulo gerado (muda por ambiente)
  EXPORTING i_name = 'Z_MY_ADOBE_FORM'
  IMPORTING e_funcname = lv_fm_name.

ls_docparams-langu = sy-langu.
CALL FUNCTION lv_fm_name
  EXPORTING /1bcdwb/docparams = ls_docparams
            is_data           = gs_form_data       " parâmetros da interface
  IMPORTING /1bcdwb/formoutput = ls_output
  EXCEPTIONS usage_error = 1 system_error = 2 internal_error = 3 OTHERS = 4.

CALL FUNCTION 'FP_JOB_CLOSE'                      " 3. fecha e envia ao spool
  EXCEPTIONS usage_error = 1 system_error = 2 internal_error = 3 OTHERS = 4.
```
> **Code review clássico**
> Esquecer o `FP_JOB_CLOSE` deixa os spool requests "em processamento" para sempre na `SP01` e nada chega à impressora.
{.is-danger}

**Abordagem moderna (façade):** `CL_FP_ADS_UTIL=>CALL_ADS` — `I_FORM_NAME`, `I_FORM_DATA` (XML em `XSTRING`), `I_OUTPUT_PARAMS`, `E_PDF`, `E_PDF_ERROR`; \~75% menos código e exceções modernas.
```abap
CALL TRANSFORMATION id SOURCE data = lo_data->s_data RESULT XML lv_xml.   " dados ABAP → XML
ls_output_params-getpdf = abap_true.        " suprime spool e devolve o binário
TRY.
    cl_fp_ads_util=>call_ads( EXPORTING i_form_name     = 'Z_INVOICE_FORM'
                                        i_form_data     = lv_xml
                                        i_output_params = ls_output_params
                              IMPORTING e_pdf           = lv_pdf_content
                                        e_pdf_error     = lv_error_pdf ).
  CATCH cx_fp_runtime INTO DATA(lo_exc).    " superclasse das exceções de formulário
    MESSAGE lo_exc->get_text( ) TYPE 'E'.   " ou BAL_LOG_MSG_ADD no log de aplicação
ENDTRY.
```

**`SFPOUTPUTPARAMS` (painel de controle):** `dest` (impressora, ex.: LP01) · `copies` · `arcmode` (1 imprimir, 2 arquivar, 3 ambos via ArchiveLink) · `reqname` · `reqimm` (imprimir já) · `reqdel` (apagar spool após imprimir) · `getpdf` · `nodialog` · `reqnew`.

**PDF na mão:** com `GETPDF`, salve, envie por e-mail ou baixe — `cl_gui_frontend_services=>file_save_dialog` + `gui_download` com `filetype = 'BIN'` e `cl_bcs_convert=>xstring_to_solix( lv_pdf_content )` (só com SAP GUI ativo: `cl_gui_frontend_services=>is_running`).

**Impressão em massa (híbrido):** um `FP_JOB_OPEN`, loop chamando `CALL_ADS` por fatura (CATCH e `CONTINUE` por item) e um `FP_JOB_CLOSE` — um único spool sem abrir/fechar job por documento.

**Debug do XML enviado:** `FP_FUNCTION_MODULE_NAME` + `ls_doc_params-getxml = 'X'` → chamar o módulo gerado → XML em `/1bcdwb/formoutput-xmldata` sem chamar o ADS.

**DSAG:** toda a lógica numa classe ABAP; o formulário só apresenta.

## 🔗 Relacionados
- [Adobe Forms](/glossario/adobe-forms)
- [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service)
- [Output Management SAP](/glossario/output-management-sap)
- [Exceções ABAP](/glossario/excecoes-abap)

## 📚 Fontes
- Apostila - SAP Forms
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
