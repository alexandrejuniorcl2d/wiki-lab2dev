---
title: "Migração BW para Datasphere"
description: "Caminhos para levar um BW on-premise ao BW Bridge: Shell Conversion (só metadados, recarga do zero) ou Remote Conversion (metadados + dados históricos via ODP, com downtime e sincronização de delta)."
tags: ["glossario","sap-datasphere"]
---
**Também conhecido como:** `Shell Conversion` · `Remote Conversion` · `Transfer Cockpit` · `RSB4HCONV` · `SAP BW Note Analyzer` · `Code Scan BW` · `BW/4HANA Model Transfer` · `ODP Delta Queue` · `Cutover BW`

> **Definição**
> Caminhos para levar um BW on-premise ao BW Bridge: Shell Conversion (só metadados, recarga do zero) ou Remote Conversion (metadados + dados históricos via ODP, com downtime e sincronização de delta).
{.is-info}

| Critério | Shell Conversion | Remote Conversion |
|---|---|---|
| Metadados | Completo | Completo |
| Dados históricos | ❌ recarga do zero | ✅ completo |
| Tempo de projeto | Mais rápido | Mais longo |
| Downtime | Mínimo (virada de deltas) | Significativo (carga de dados) |
| Complexidade | Menor | Maior |
| Cenário ideal | Novo começo, limpeza de legado, greenfield | Compliance/auditoria, histórico crítico (IA, tendências), desativar o legado |

**Pré-requisitos:** SAP BW 7.3+/7.4 ou BW/4HANA (recomendado 2.0 SP07+, 2021 ou 2023 — nota 2989654); Cloud Connector com a subconta mapeada; DP Agent atualizado (nota 2419138) com IP na allowlist; usuário técnico com autorizações (ex.: `S_BI-WX_RFC`, `S_RFC_ADM`) e DW Administrator; BW Modeling Tools.

**Shell Conversion — passos:**
1. **SAP BW Note Analyzer** — lista notas necessárias (pular isso é o maior risco).
2. **Transfer Cockpit** (transação `RSB4HCONV`) — task list sequencial.
3. **Escopo** — InfoAreas, application components ou fluxos (análise na RSA1/Eclipse); migre só o essencial.
4. **Mapeamento de source systems** — mesmo nome lógico (`S4HCLNT100`), tipo ODP via Cloud Connector; app *Source Systems – Maintain IDs* (ID de dois dígitos `0GN_R3_SSY`).
5. **Code Scan** — ABAP obsoleto, funções não permitidas, tabelas fora da lista → relatório de remediação.
6. **Execução** — metadados exportados (XML/JSON) e importados no Bridge.
7. **Pós-processamento** — importar, ativar em massa (dependências) e validar no BW-MT/Cockpit.

**Evolução automática:** InfoCube → ADSO (cube-like) · DSO clássico → ADSO standard · MultiProvider → CompositeProvider.

**Remote Conversion — fases:** preparar o sender (notas, usuário RFC, ODP ativo, consistência na `RSRV`) → coleta de escopo com **árvore de dependências** automática → **fase 1** metadados (= o que a Shell entrega) → **fase 2** dados via ODP em pacotes e DTPs paralelos durante o **downtime** → **ODP delta queues** das fontes seguem capturando e sincronizam após a virada.
- **Troubleshooting:** timeout/memória → reduzir package size; registro corrompido → corrigir na origem ou tratar na transformação.
- **Validação em 3 níveis:** contagem de linhas → soma de key figures → reconciliação de relatórios com sign-off do negócio.
- **Pós-go-live:** redirecionar deltas, ativar process chains, apontar o SAC para os novos modelos, descomissionar o BW após 1–3 meses.
- **Limites:** volume (tenants até \~60 TB) e largura de banda/latência — teste com uma fatia e extrapole.

**Dicas:** limpe a RSA1 antes; remedie ABAP em paralelo; faça PoC com 1–2 fluxos representativos; planeje carga inicial, janela de cutover e disponibilidade das fontes.

## 🔗 Relacionados
- [SAP BW Bridge](/glossario/sap-bw-bridge)
- [SAP BW4HANA](/glossario/sap-bw-4hana)
- [SAP Datasphere](/glossario/sap-datasphere)

## 📚 Fontes
- Apostila - SAP Datasphere (Parte 1)

---
🧭 [SAP Datasphere](/glossario/temas/sap-datasphere) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
