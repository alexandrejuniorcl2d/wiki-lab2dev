---
title: "Serviços e Bindings BTP"
description: "Como apps consomem serviços no BTP (marketplace → plano → instância → binding com credenciais em VCAP_SERVICES) e como escalam, se recuperam e registram logs."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `Service Instance` · `Service Binding BTP` · `Service Plan` · `Service Broker` · `Service Marketplace` · `VCAP_SERVICES` · `Service Key` · `Escalabilidade Horizontal` · `Scale Out` · `Scale Up` · `cf scale` · `Health Check` · `Application Logging` · `Loggregator`

> **Definição**
> Como apps consomem serviços no BTP (marketplace → plano → instância → binding com credenciais em VCAP_SERVICES) e como escalam, se recuperam e registram logs.
{.is-info}

- **Marketplace** lista serviços SAP e de parceiros; cada serviço tem **planos** (free, lite, standard, premium); o **service broker** gerencia criar/atualizar/deletar/bind.
- **Service instance:** cópia provisionada para uso dentro de um space.
- **Binding:** injeta credenciais como variável de ambiente (`VCAP_SERVICES`) — sem senhas hard-coded; trocar DEV por PRD é unbind/bind, sem mudar código.
- **Escalabilidade:** horizontal (`cf scale my-app -i 5` — mais instâncias; preferida para apps stateless, aumenta concorrência e resiliência) × vertical (`cf scale my-app -m 2G` — mais memória/CPU para tarefas não paralelizáveis).
- **Health checks:** a plataforma testa a porta de cada instância; falhas consecutivas → instância substituída automaticamente. **Graceful shutdown:** `SIGTERM` com 60 s no CF para finalizar transações.
- **Logging:** a app escreve em `stdout`/`stderr`; o **Loggregator** coleta; `cf logs my-app` para stream; bind ao **SAP Application Logging** para persistência, busca e alertas.

## 🔗 Relacionados
- [Ambientes BTP](/glossario/ambientes-btp)
- [SAP HANA Cloud](/glossario/sap-hana-cloud)
- [Destination Service](/glossario/destination-service)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
