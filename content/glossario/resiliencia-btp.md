---
title: "Resiliência BTP"
description: "Construir sistemas indestrutíveis no BTP: múltiplas instâncias distribuídas em AZs, DR entre regiões, autoscaling por políticas e padrões de código como circuit breaker e bulkhead."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `High Availability` · `Alta Disponibilidade` · `Availability Zones` · `Disaster Recovery` · `Autoscaler` · `Circuit Breaker` · `Bulkhead` · `Multi-AZ` · `RPO`

> **Definição**
> Construir sistemas indestrutíveis no BTP: múltiplas instâncias distribuídas em AZs, DR entre regiões, autoscaling por políticas e padrões de código como circuit breaker e bulkhead.
{.is-info}

- **HA × DR:** HA trata falhas dentro da região (AZs isoladas com energia/rede próprias); DR trata a perda de uma região (failover para região standby, replicação de dados e DNS).
- **Multi-AZ no CF:** `cf push my-app -i 3` — o BTP distribui instâncias entre AZs e o router faz load balancing; nunca um ponto único de falha. SAP *In-Metro DR* com replicação síncrona entre AZs, testado anualmente (SOC2).
- **Autoscaler:** políticas por CPU, memória, latência (ex.: CPU > 80% por 5 min → +1 instância; < 20% → −1) — scale out/in.
- **Circuit breaker:** após falhas repetidas do serviço B, o disjuntor "abre" e responde erro imediato, evitando falhas em cascata.
- **Bulkhead:** isola recursos (threads, conexões) por serviço para que uma falha não derrube tudo.
- **Dados:** HANA Cloud multi-AZ (RPO 0) e réplica assíncrona inter-regional.

## 🔗 Relacionados
- [SAP HANA Cloud](/glossario/sap-hana-cloud)
- [Serviços e Bindings BTP](/glossario/servicos-e-bindings-btp)
- [Resiliência de Integrações](/glossario/resiliencia-de-integracoes)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
