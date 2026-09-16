---
title: "SAP Build Apps"
description: "Ferramenta low/no-code do SAP Build para apps web e mobile nativos: UI por drag-and-drop, lógica visual em fluxos, fórmulas estilo Excel, integração via BTP Destinations/REST e backend no-code (Visual Cloud Functions)."
tags: ["glossario","sap-build"]
---
**Também conhecido como:** `Build Apps` · `AppGyver` · `UI Composer` · `Logic Canvas` · `Flow Functions` · `Page Variables` · `App Variables` · `Data Variables` · `Data Resources` · `Visual Cloud Functions` · `VCF` · `Universal REST API` · `Build Service` · `SAP Build Apps Preview`

> **Definição**
> Ferramenta low/no-code do SAP Build para apps web e mobile nativos: UI por drag-and-drop, lógica visual em fluxos, fórmulas estilo Excel, integração via BTP Destinations/REST e backend no-code (Visual Cloud Functions).
{.is-info}

**Filosofia:** arrastar e soltar, não digitar — foco no valor de negócio, sem sintaxe de CSS/JS.

**UI Composer:**
1. **Biblioteca de componentes** (esquerda) — abas CORE, BY ME, INSTALLED, MARKETPLACE.
2. **UI Canvas** (centro) — área de montagem; preview por dispositivo (mobile/tablet/web), layout flexbox.
3. **Painel de configuração** (direita) — abas **PROPERTIES** (conteúdo, `Repeat with`, Disabled), **STYLE** (cores, fonte, bordas), **LAYOUT** (padding, margin, alinhamento).

- **Componentes:** estruturais (Container, Row, Title, Text), entradas (Button, Input, Dropdown, Checkbox), exibição (Icon, Image).
- **Componentes compostos (DRY):** agrupe em Container → *Convert to new component* (Component Template Editor). Listas dinâmicas com `Repeat with`.
- **Marketplace:** view components (gráficos, QR code), flow functions (upload), data resources — *Install*.
- **Tema centralizado:** App Settings > Theme (cores, fontes, theme variables).

**Variáveis:** page variables (vivem e morrem com a página — texto de busca, filtro, item selecionado), app variables, system variables, theme variables e **data variables** (collection of data records × single data record, reativas: UI atualiza sozinha).

**Navegação:** `Open Page` empilha (A → B → C, estado preservado), `Navigate back` desempilha; **Page Parameters** passam dados (ex.: ID do produto).

**Fórmulas (estilo Excel):** `IF(pageVars.isCompleted, "Concluído", "Pendente")`, `FORMAT_DATETIME_LOCAL(NOW(), "DD/MM/YYYY")`, responsividade com `systemVars.dimensions.viewport.width`.

**Logic Canvas:** lógica orientada a eventos (`Component tap`, `Page mounted`) → **flow functions** ligadas por "fios" (If condition, Delay, Open Page, Alert, Toast, Set page variable, Create record, Get record collection). Cada página/componente tem seu canvas; **Global Canvas** para lógica em background.
- **Tratamento de erros:** funções externas têm saídas de sucesso (superior) e erro (inferior) — sempre ligue o caminho do erro (Alert).

**Integração (Data Resources):** on-device storage · **BTP Destinations** (S/4HANA, credenciais centralizadas, autenticação propagada) · **Universal REST API** (Google Maps, clima, câmbio, legados) · **Visual Cloud Functions** (backend no-code próprio: entities = tabelas com campos tipados, extended entities = views, functions, deployments, authorization).

> **Regra de ouro**
> Nunca coloque segredos/API keys no Logic Canvas — o front-end roda no dispositivo e pode ser extraído. Use BTP Destinations (sistemas SAP) ou VCF como proxy (APIs de terceiros).
{.is-danger}

**Autenticação:** integração nativa com Cloud Identity Services → token repassado às chamadas de API.

**Testar:** web preview ou app **SAP Build Apps Preview** (iOS/Android, QR code + PIN) com live reload.

**Deploy (Build Service — Publish > Build and Deploy):**
| Alvo | Artefato | Observações |
|---|---|---|
| Web | `.mtar` | HTML5 app na BTP com **Managed Approuter**; perfil Work Zone; Space Manager no CF; build e deploy na **mesma subconta** |
| Android | `.apk` (testes) / `.aab` (Google Play) | Assinatura com keystore (`keytool` do Java) |
| iOS | Pacote não assinado → `.ipa` | Só **Team ID** no build; assinatura local em macOS |

- **Nativo × web:** nativo acessa câmera, GPS, sensores, on-device storage offline e lojas; web tem acesso limitado.
- **Image assets:** ícone, launch screen (PNG estático), ícones de notificação.
- **Distribuição:** TestFlight/canais de teste (até 10.000 testadores), lojas públicas ou MDM corporativo (Intune, Apple Business Manager).
- **OTA:** o invólucro nativo só contém o runtime; UI e lógica são conteúdo web — um novo deploy do `.mtar` atualiza o app sem nova instalação.
- **Versões:** *Release version* (snapshot semântico, crie antes de build produtivo) × *Build version* (número do pacote compilado).
- **Otimização:** MVP (evite >\~20 páginas), padrão lista → detalhe, Global Canvas e *Receive event*, spinners.
- **Limites:** sem gráficos nativos complexos (use web/D3.js), sem tarefas em background, sem APIs nativas de baixo nível nem código Swift/Kotlin.
- **Go-live checklist:** destinations e `MobileEnabled`, autenticação, certificados de produção, bundle ID, usage strings iOS, roles no Work Zone, regressão, performance em dispositivos fracos, plano de rollback e suporte.

## 🔗 Relacionados
- [SAP Build](/glossario/sap-build)
- [SAP Build Work Zone](/glossario/sap-build-work-zone)
- [SAP Mobile Services](/glossario/sap-mobile-services)
- [Destination Service](/glossario/destination-service)

## 📚 Fontes
- Apostila - SAP Build Low e Pro Code

---
🧭 [SAP Build](/glossario/temas/sap-build) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
