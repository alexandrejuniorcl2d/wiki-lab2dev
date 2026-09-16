---
title: "Adobe Document Services"
description: "Motor Java da Adobe que renderiza formulários SAP em PDF, PDF/A, PCL, ZPL e PostScript, com fontes, XDC/XCI, credenciais e montagem de documentos; on-premise (suporte até 2027/2030) ou como serviço gerenciado na BTP."
tags: ["glossario","sap-forms"]
---
**Também conhecido como:** `ADS` · `Adobe Document Services on-premise` · `FP_TEST_00` · `FP_TEST_01` · `FP_TEST_02` · `XDC` · `XCI` · `custom_xfa.xci` · `pdfa.xdc` · `PDF/A` · `ZPL` · `PCL` · `Job Profiles` · `ReaderRights` · `Assembler` · `DDX` · `Document Description XML`

> **Definição**
> Motor Java da Adobe que renderiza formulários SAP em PDF, PDF/A, PCL, ZPL e PostScript, com fontes, XDC/XCI, credenciais e montagem de documentos; on-premise (suporte até 2027/2030) ou como serviço gerenciado na BTP.
{.is-info}

**Deploy:**
| On-premise (NetWeaver Java) | [SAP Forms Service by Adobe](/glossario/sap-forms-service-by-adobe) (BTP) |
|---|---|
| Suporte até 2027, estendido a 2030; solução em XSA prevista para Q1/2027 | Serviço gerenciado baseado no ADS, multi-cloud (Cloud Foundry) |
| Patches, Java, hardware e configuração manual | Patches, atualizações e infraestrutura por conta da SAP |

**Testes on-premise:** `FP_TEST_00` (conexão), `FP_TEST_01` (arquivamento), `FP_TEST_02` (tipos de dados).

**Capacidades:**
- **PDF/A** (ISO de arquivamento de longo prazo): configurado por arquivo XDC — o serviço traz `pdfa.xdc`, customizável.
- **ZPL** (Zebra, etiquetas térmicas de logística) e **PCL** (impressoras laser) direto do serviço, sem middleware (`/v1/adsRender/zpl`, `/v1/adsRender/pcl`).
- **Formulários interativos:** credencial **ReaderRights** (no cloud já pré-configurada — `1010448.pfx`, não faça upload) habilita salvar dados no Adobe Reader gratuito; extração com `/v1/pdf/adsGet/data`.
- **Assinatura digital server-side:** credenciais PKCS#12 com *alias* (ex.: `ServerSignature`), *Trusted Anchors* e CRLs.
- **Fontes customizadas** (`.ttf`, `.otf`, `.pfb`) e mapeamento no **XCI** (`custom_xfa.xci`) com `embed="1"` para embutir a fonte no PDF.
- **Job profiles** customizados de impressão.

**Assembler e DDX:** capacidade do ADS para fundir documentos (capa PDF + contrato XDP com dados + termos PDF) num único PDF com cabeçalho, rodapé e numeração unificados. Não é endpoint REST direto — invocado em renderizações complexas (ex.: chamada SOAP a partir do ABAP).
```xml
<DDX xmlns="http://ns.adobe.com/DDX/1.0/">
  <PDF result="ContratoFinal.pdf">
    <PDF source="in_Capa"/>
    <PDF source="in_Contrato"/>
    <PDF source="in_Termos"/>
    <Header><StyledText><p><b>GlobalTech - Contrato Confidencial</b></p></StyledText></Header>
    <Footer><StyledText><p>Página <_PageNumber/> de <_TotalPages/></p></StyledText></Footer>
  </PDF>
</DDX>
```

**Migração on-premise → nuvem (Configuration Tool > Data Migration / seções):**
| Ativo on-premise | Destino na Configuration Tool |
|---|---|
| `.../FontManagerService/fonts/customer` | Fonts > Upload |
| `.../lib/XDC/Customer` e `.../lib/custom_xfa.XCI` | XDC, XCI Administration > Upload |
| `.../TrustManagerService/trust/credentials` (P12/PFX) | Document Security > Credentials |
| `.../trust/certificates` e `.../trust/CRLs` | Trusted Anchors / Certificate Revocation Lists |
| `.../JobProfiles/Custom/Print` | Job Profiles > Upload |

Templates ABAP continuam no repositório ABAP; muda só a conexão (ver [Configuração ABAP para Forms Service](/glossario/configuracao-abap-para-forms-service)). "A interface para o ADS permanece a mesma… você só precisa realizar mudanças de configuração."

## 🔗 Relacionados
- [SAP Forms Service by Adobe](/glossario/sap-forms-service-by-adobe)
- [Adobe Forms](/glossario/adobe-forms)
- [API REST SAP Forms Service](/glossario/api-rest-sap-forms-service)

## 📚 Fontes
- Apostila - SAP Forms
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [SAP Forms](/glossario/temas/sap-forms) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
