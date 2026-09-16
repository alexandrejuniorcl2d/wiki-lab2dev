---
title: "SAP Cloud Connector"
description: "Software leve instalado na rede on-premise que cria um túnel reverso seguro até a subconta BTP, sem abrir portas de entrada."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `Cloud Connector` · `SCC` · `Túnel VPN Reverso`

> **Definição**
> Software leve instalado na rede on-premise que cria um túnel reverso seguro até a subconta BTP, sem abrir portas de entrada.
{.is-info}

**O dilema híbrido:** firewalls bloqueiam tráfego de entrada; como a nuvem acessa o S/4HANA/ECC interno sem abrir portas?

**Reverse invoke:** o SCC (dentro da rede) inicia uma conexão **de saída** para o BTP, estabelecendo um **túnel TLS** persistente pelo qual as chamadas da nuvem são invocadas.

- **Implantação:** **DMZ** (mais segura, regras de firewall precisas) ou **intranet** (mais simples; host endurecido). **Alta disponibilidade:** par **master/shadow** com failover automático.
- **Conexão:** BTP Cockpit > Subaccount > Connectivity > Cloud Connectors; na UI do SCC *Add Subaccount* (região, subaccount ID, usuário) → status *Connected* nos dois lados.
- **Access control (allowlist):** tudo bloqueado por padrão; mapeie cada backend com **host virtual** e libere explicitamente caminhos HTTP (`/sap/opu/odata/...`) e funções RFC (`BAPI_SALESORDER_GETLIST`).
- **Uso:** via [Destination Service](/glossario/destination-service) com Proxy Type `OnPremise`; suporta **principal propagation** (JWT → certificado X.509 curto → usuário local).
- **Além de HTTP/RFC:** túneis **TCP/JDBC** para bancos on-premise (host/porta virtuais → `db.internal.corp:5432`).
- **Monitoramento:** dashboard do SCC — status do túnel, backends alcançáveis, requisições, latência e logs.
- O administrador controla de forma granular quais sistemas e recursos internos a nuvem pode acessar.
- Suporta HTTP e RFC; também atua de forma reversa (sistema interno → nuvem).
- **DSAG:** separe o Cloud Connector produtivo das máquinas de desenvolvimento e especifique cada URL/função exata — **nunca use curingas (`*`)** nas permissões de recursos.
- **Segurança compartilhada:** cliente (usuários e dados) · SAP (aplicação e banco) · hyperscaler (infraestrutura física).

## 🔗 Relacionados
- [SAP BTP](/glossario/sap-btp)
- [Destination](/glossario/destination-service)

## 📚 Fontes
- Apostila - Conhecendo todos os Módulos do SAP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
