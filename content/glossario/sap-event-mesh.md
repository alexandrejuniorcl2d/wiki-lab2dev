---
title: "SAP Event Mesh"
description: "Message broker gerenciado do BTP para arquitetura orientada a eventos: o S/4HANA publica eventos (ex.: SalesOrderCreated) e extensões assinantes reagem de forma assíncrona."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `Event Mesh` · `Advanced Event Mesh` · `Eventos de Negócio` · `Message Broker` · `Publish Subscribe` · `Event-Driven Architecture`

> **Definição**
> Message broker gerenciado do BTP para arquitetura orientada a eventos: o S/4HANA publica eventos (ex.: SalesOrderCreated) e extensões assinantes reagem de forma assíncrona.
{.is-info}

1. Processo concluído no S/4HANA → publica evento (`SalesOrderCreated`).
2. Event Mesh coloca na fila/tópico.
3. Assinantes no BTP (apps, funções serverless, iFlows) são notificados.
4. Executam a lógica (notificar logística, calcular bônus).

Vantagens sobre *polling*: baixo acoplamento, **resiliência** (evento espera na fila se o consumidor estiver offline) e escalabilidade.

## 🔗 Relacionados
- [Extensibilidade Side-by-Side](/glossario/extensibilidade-side-by-side)
- [Business Events RAP](/glossario/business-events-rap)
- [SAP Integration Suite](/glossario/sap-integration-suite)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
