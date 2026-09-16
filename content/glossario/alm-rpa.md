---
title: "ALM RPA"
description: "Governança e ciclo de vida de um programa de RPA: fases do requisito à otimização, versionamento semântico com status Preview/Released, promoção DEV→QAS→PRD com gates, PDD e SDD, checklist de qualidade, componentes reutilizáveis, gestão de mudanças,…"
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `Ciclo de Vida RPA` · `Versionamento Semântico RPA` · `Package Preview` · `Package Released` · `PDD` · `SDD` · `Process Definition Document` · `Solution Design Document` · `Deprecate Package` · `Decommission Package` · `Core Components Project RPA` · `KPIs RPA`

> **Definição**
> Governança e ciclo de vida de um programa de RPA: fases do requisito à otimização, versionamento semântico com status Preview/Released, promoção DEV→QAS→PRD com gates, PDD e SDD, checklist de qualidade, componentes reutilizáveis, gestão de mudanças, CoE, KPIs, higiene, segurança contínua e escala.
{.is-info}

**Ciclo de vida:** Requisito (viabilidade, ROI) → Design (AS-IS/TO-BE, **PDD** e **SDD**) → Desenvolvimento (Cloud Studio, modular) → Teste (unitário, integração, UAT em QAS) → Deploy (pacote em PRD, triggers e variáveis) → Monitoramento (Factory) → Otimização (novo ciclo).

**Versionamento semântico:** MAJOR "significant changes which may impact dependent projects" (ex.: ECC → S/4HANA) · MINOR "minor changes" compatíveis (novo campo) · PATCH "only patches to indicate bug fixes" (seletor, cálculo). **Preview** (instável, só DEV) × **Released** (estável — única promovível a QAS/PRD).

**Promoção:** DEV → *Gate 1: code review e release* → QAS (integração + UAT) → *Gate 2: aprovação do negócio e change management* → PRD. "Promove-se o pacote, não o código" — o artefato testado em QAS é idêntico ao de PRD.

| **PDD** — o quê e porquê | **SDD** — como |
|---|---|
| Dono: analista de negócio/dono do processo; fase de requisito | Dono: arquiteto/dev líder; fase de design |
| AS-IS, métricas (volume, tempo, FTEs), TO-BE, regras e exceções, critérios de sucesso | Arquitetura e reuso, variáveis de ambiente e credenciais, erros e logging, seletores e integrações, deploy e sustentação |

> "Código sem documentação é um passivo. Código com documentação é um ativo."

**Checklist de qualidade do desenvolvedor:** Try/Catch e recuperação · segredos em *Credential variables* · zero hard-code (variáveis de ambiente) · nomenclatura padronizada do CoE · *Log Message* com severidade correta (Warning/Error aparecem na página de jobs) · código modular.

**Componentes reutilizáveis:** projeto central (ex.: `SAP_Login_S4HANA`, `Outlook_Enviar_Email_Com_Anexo`, `Core_Tratamento_Erro_Padrao`) consumido como dependência — acelera, centraliza manutenção e padroniza qualidade.

**Gestão de mudanças:** gatilho (upgrade S/4HANA, redesign de portal, política de segurança) → mapear bots impactados (SDDs, inventário) → análise técnica (seletores, APIs, lógica) → **patch** rápido (baixo impacto) ou **minor/major** com ciclo completo → comunicar stakeholders.

**CoE de RPA:** *Sponsor* (estratégia, orçamento) · **RPA Lead/gerente de governança** (padrões, pipeline, valor — IRPAOfficer) · analista de negócio (PDD, UAT) · desenvolvedor (SDD, build, testes) · **controller**/sustentação (produção, primeira análise, agents).

**KPIs:** técnicos — taxa de sucesso, duração média, utilização de agents, volume (aba *Consumption*); negócio — horas devolvidas (ROI), redução de erros, SLA, custo evitado.

**Higiene:** histórico de jobs 95 dias/100.000; retenção diferente para logs de erro × info; **Deprecate** ("transient status before a future deletion") e **Decommission** ("automatically deletes a package if it is not referenced") para versões obsoletas.

**Segurança contínua:** rotação de senhas técnicas (ex.: 90 dias) via credential variables · revisão trimestral de acessos (IRPAOfficer, IRPAProjectMember) · API keys com escopo mínimo e rotação · code review para não logar dados sensíveis.

**Escalar:** sinais — fila *Ready* crescente, espera maior, picos (fechamento) sem atendimento, agents > 80–95% em Running/Busy ("no unattended agent is available") → mais agents (horizontal), agent groups por função e atributos para distribuição fina.

## 🔗 Relacionados
- [SAP RPA](/glossario/sap-rpa)
- [Factory RPA](/glossario/factory-rpa)
- [Operação RPA](/glossario/operacao-rpa)
- [Segurança RPA](/glossario/seguranca-rpa)
- [DevOps no BTP](/glossario/devops-no-btp)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
