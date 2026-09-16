---
title: "SAP Build"
description: "Oferta unificada de desenvolvimento na BTP que junta low-code (Build Apps, Process Automation, Work Zone) e pro-code (Build Code com Joule) para negócio e TI construírem juntos extensões limpas do S/4HANA."
tags: ["glossario","sap-build"]
---
**Também conhecido como:** `SAP Build Portfolio` · `SAP Build Lobby` · `Lobby` · `Fusion Teams` · `Fusion Development` · `Citizen Developer` · `Low-Code` · `Pro-Code` · `SAP Build Library`

> **Definição**
> Oferta unificada de desenvolvimento na BTP que junta low-code (Build Apps, Process Automation, Work Zone) e pro-code (Build Code com Joule) para negócio e TI construírem juntos extensões limpas do S/4HANA.
{.is-info}

**O desafio:** escassez de desenvolvedores (demanda cresce 5× mais que a oferta), necessidade de velocidade e silos entre negócio (conhece o processo) e TI (conhece a tecnologia).

**Família SAP Build ("canteiro de obras da inovação"):**
| Produto | Tipo | Para quê |
|---|---|---|
| [SAP Build Apps](/glossario/sap-build-apps) | Low/no-code | Apps web e mobile com drag-and-drop e lógica visual |
| [SAP Build Process Automation](/glossario/sap-build-process-automation) | Low-code | Workflows + RPA para automatizar processos e tarefas |
| [SAP Build Work Zone](/glossario/sap-build-work-zone) | Low-code | Portais/sites de negócio, ponto único de acesso |
| [SAP Build Code](/glossario/sap-build-code) | Pro-code + IA | Java/Node.js/CAP com Joule, sucessor do BAS |

**Personas:**
- **Citizen Developer ("arquiteto de negócios")** — analistas e key users; Build Apps; transforma ideias em apps sem código.
- **Professional Developer ("engenheiro estrutural")** — CAP/Java, APIs complexas e reutilizáveis consumidas pelo low-code.
- **TI ("mestre de obras")** — guardrails, não barreiras: user roles, [Destination Service](/glossario/destination-service) e ALM.

**Fusion Teams:** equipes mistas negócio + TI; o arquiteto prototipa a tela, o engenheiro conecta o serviço complexo — ferramentas visuais como "planta baixa" comum.

**SAP Build Lobby:** portal único para criar e gerenciar todos os projetos (Apps, Process Automation, Work Zone, Code), templates, learning journeys, conectores e Control Tower. Papéis de projeto: **RegistryAdmin** (superusuário do tenant), **Administrator** (dono do projeto, recebe por padrão), **Developer** (editar, deploy, releases), **Viewer** (leitura).

**Fundação comum na BTP:** autenticação unificada (Cloud Identity Services/SSO), Destinations e reuso via **SAP Build Library** (ações, processos, componentes).

| Critério | Build Apps (low-code) | Build Code (pro-code) |
|---|---|---|
| Persona | Citizen developer, analista | Dev profissional |
| Foco | UI/UX, apps departamentais, protótipos | Backend, APIs, microsserviços, regras complexas |
| Complexidade | Baixa a média | Alta (algoritmos, alto volume) |
| Exemplo | "App para coletar dados em campo e iniciar aprovação, para ontem" | "Serviço de preço com 50 variáveis respondendo em ms" |

**Cenários do curso:**
- **Aprovação de despesas:** Build Apps (foto do recibo) → Process Automation (auto-aprova dentro da política ou envia ao gestor) → Work Zone (gestor aprova com um clique).
- **Cálculo de frete crítico:** Build Code cria microsserviço CAP (CEP, peso, estoque S/4HANA em tempo real) → TI publica via Destinations → Build Apps consome com um conector. Core limpo — ver [Clean Core](/glossario/clean-core).

**Carreira — "arquiteto de fusão":** saber *quando* e *como* usar cada ferramenta; prototipar com Build Apps e estender com Build Code. Comece pelo **Free Tier** da BTP (Build Apps com limites: dois builds por app, sem uso produtivo).

## 🔗 Relacionados
- [SAP Build Apps](/glossario/sap-build-apps)
- [SAP Build Code](/glossario/sap-build-code)
- [SAP Build Process Automation](/glossario/sap-build-process-automation)
- [SAP Build Work Zone](/glossario/sap-build-work-zone)
- [SAP BTP](/glossario/sap-btp)
- [Extensibilidade Side-by-Side](/glossario/extensibilidade-side-by-side)

## 📚 Fontes
- Apostila - SAP Build Low e Pro Code
- Apostila - Arquitetura do SAP BTP

---
🧭 [SAP Build](/glossario/temas/sap-build) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
