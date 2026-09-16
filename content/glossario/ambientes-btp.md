---
title: "Ambientes BTP"
description: "Ambientes de execução do BTP: Cloud Foundry (PaaS orientado a apps), Kyma (Kubernetes gerenciado para microserviços/containers) e ABAP Environment \"Steampunk\" (ABAP Cloud na nuvem)."
tags: ["glossario","sap-btp"]
---
**Também conhecido como:** `Runtimes BTP` · `Cloud Foundry` · `CF` · `Kyma` · `Kubernetes` · `ABAP Environment` · `Steampunk` · `BTP ABAP Environment` · `Org` · `Space` · `Buildpack` · `Droplet` · `cf push` · `manifest.yml`

> **Definição**
> Ambientes de execução do BTP: Cloud Foundry (PaaS orientado a apps), Kyma (Kubernetes gerenciado para microserviços/containers) e ABAP Environment "Steampunk" (ABAP Cloud na nuvem).
{.is-info}

Um **ambiente** abstrai a infraestrutura e oferece **runtime** + **serviços** + **ferramentas** (APIs/CLIs).

**Cloud Foundry:** PaaS de padrão aberto para apps *12-factor*; foco na aplicação, não no container.
- **Buildpacks** detectam a linguagem (`pom.xml` → Java/SapMachine, `package.json` → Node.js, Python), compilam e geram um **droplet** executável.
- **Org** (1:1 com a subconta; quotas) → **Spaces** (Dev, QA, Prod, Sandbox; apps, instâncias de serviço, membros como SpaceDeveloper).
- `cf push` lê o `manifest.yml` (nome, memória, rota), envia o código, aplica o buildpack, cria o droplet e agenda o container.

**Kyma:** Kubernetes + Istio gerenciados pela SAP (via Gardener); módulos habilitáveis (**Serverless** para funções, **Eventing** com NATS); controle granular de rede e deploy, portabilidade; CLIs `kyma` e `kubectl`.

**ABAP Environment (Steampunk):** PaaS de ABAP com o modelo **ABAP Cloud** (só APIs públicas e estáveis) — extensões side-by-side do S/4HANA Cloud, modernização de add-ons, reaproveitamento de skills e do ADT. (DSAG: também alternativa para o sistema central do ATC e já inclui o CVA.)

| | Cloud Foundry | Kyma | ABAP Environment |
|---|---|---|---|
| Paradigma | PaaS orientado a app | Orquestração de containers (CaaS) | PaaS transacional |
| Cenários | Apps web Java/Node.js, CAP, microserviços leves | Microserviços complexos, serverless, apps em container | Extensões S/4HANA, lógica transacional, modernização ABAP |
| Deploy | Código-fonte/binário | Imagem Docker | Objetos ABAP via ADT |
| Controle | Médio (abstraído) | Alto (granular) | Médio (gerenciado) |
| Skills | Java, Node.js, Python | DevOps, Kubernetes | ABAP, CDS, RAP |

**"Hello World":** CF (`app.js` + `manifest.yml` → `cf push` → URL pública) · Kyma (`Dockerfile`/`deployment.yaml`/`function.yaml` → `kubectl apply` → pod + service) · ABAP (classe + HTTP service no ADT → endpoint).

## 🔗 Relacionados
- [SAP BTP](/glossario/sap-btp)
- [Serviços e Bindings BTP](/glossario/servicos-e-bindings-btp)
- [SAP CAP](/glossario/sap-cap)
- [ABAP Cloud](/glossario/abap-cloud)
- [Contas BTP](/glossario/contas-btp)

## 📚 Fontes
- Apostila - Arquitetura do SAP BTP
- Apostila - DSAG ABAP Leitfaden 2026 (Parte 2)

---
🧭 [SAP BTP](/glossario/temas/sap-btp) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
