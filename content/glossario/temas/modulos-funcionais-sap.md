---
title: "Módulos Funcionais SAP (tema)"
description: "FI, CO, MM, SD, PP, EWM, HCM e demais módulos de negócio do S/4HANA."
tags: ["glossario","sap-modulos"]
---
> **Sobre esta área**
> FI, CO, MM, SD, PP, EWM, HCM e demais módulos de negócio do S/4HANA.
> Tag: [#sap-modulos](/t/sap-modulos) · 117 termos
{.is-info}

## 📚 Apostilas desta área
- Apostila - Consultor SAP (Dia 3) - FI e CO — Finanças (FI) e Controladoria (CO) no S/4HANA: ACDOCA, GL, AP/AR, CO-PA, Material Ledger.
- Apostila - Consultor SAP (Dia 4) - Suprimentos MM e EWM — Suprimentos e armazém: MM (P2P, BP, PR/PO, MIGO/MIRO, consignação, subcontratação) e EWM (putaway, picking, ondas).
- Apostila - Consultor SAP (Dia 5) - Produção PP e Manutenção PM — Chão de fábrica digital: PP (BOM, roteiro, MRP Live, ordens, backflushing, QM, DDMRP) e PM (manutenção).
- Apostila - Consultor SAP (Final) - SD, BTP e Carreira — Dias 6 e 7: SD/O2C, pricing, NF-e, CX; tecnologia (Clean Core, BTP, RAP, Fiori, SAC, Joule, Activate) e plano de carreira.
- Apostila - Conhecendo todos os Módulos do SAP — Panorama de todos os módulos funcionais e técnicos do SAP.
- Apostila - CDS Views para Funcionais (Parte 1) — CDS Views explicadas para consultores funcionais.
- Apostila - CDS Views para Funcionais (Parte 2) — CDS Views para funcionais — continuação.

## 📖 Termos

### CO - Controladoria
- [Centro de Custo](/glossario/centro-de-custo) *(Cost Center, KOSTL)* — Objeto CO permanente que acumula despesas de um departamento — "quem gastou o dinheiro?".
- [Centro de Lucro](/glossario/centro-de-lucro) *(Profit Center, PRCTR)* — Objeto CO que acumula receitas E despesas de uma unidade de negócio — "deu lucro ou prejuízo?".
- [CO](/glossario/co) *(Controlling, SAP CO, Controladoria)* — Módulo de Controladoria — contabilidade gerencial interna focada em custos, rentabilidade e decisão.
- [CO-PA](/glossario/co-pa) *(Profitability Analysis, Análise de Rentabilidade)* — "Jóia da coroa" do CO: analisa a lucratividade sob múltiplas dimensões (cliente, produto, região, vendedor).
- [CO-PA Account-based x Costing-based](/glossario/co-pa-account-based-e-costing-based) *(Account-based CO-PA, Costing-based CO-PA)* — Account-based (padrão SAP, integrado à ACDOCA, reconciliação zero) × Costing-based (tradicional, flexível, exige reconciliação com FI).
- [Custeio Real](/glossario/custeio-real) *(Actual Costing, Estimativa de Custo, Cost Estimate)* — Cálculo do custo real do estoque e CPV rolando variações de preço e produção via Material Ledger; ordens liquidam suas variâncias.
- [Elementos de Custo](/glossario/elementos-de-custo) *(Cost Elements, Classes de Custo, Custos Primários)* — Classificação da natureza das despesas — ponte entre FI e CO. Primários vêm de contas do razão; secundários são alocações internas.
- [Material Ledger](/glossario/material-ledger) *(ML, Ledger de Materiais)* — Avaliação de estoques a custo real e multimoeda — obrigatório no S/4HANA (era opcional no ECC).
- [Ordem Interna](/glossario/ordem-interna) *(Internal Order, OI)* — "Cesta de custos" temporária para rastrear gastos de um evento/projeto específico com começo, meio e fim.
- [Planejamento e Orçamento](/glossario/planejamento-e-orcamento) *(Budgeting, Orçamento)* — Versões de planejamento de custos/receitas no CO com comparação automática Realizado × Orçado.
- [Product Costing](/glossario/product-costing) *(PC, CO-PC, Custeio do Produto)* — Submódulo CO que calcula o custo planejado e real de fabricação de um produto.

### Dados Mestres
- [Business Partner](/glossario/business-partner) *(BP, Parceiro de Negócios, CVI)* — Cadastro único do S/4HANA para clientes e fornecedores (substitui XD01/XK01 via CVI).

### Dados e Planejamento
- [SAP BW4HANA](/glossario/sap-bw-4hana) *(BW/4HANA, BW, Business Warehouse)* — Data warehouse da SAP otimizado exclusivamente para HANA; simplifica objetos (ADSO) e arquitetura (LSA++).
- [SAP IBP](/glossario/sap-ibp) *(IBP, Integrated Business Planning, S&OP)* — Planejamento integrado da cadeia de suprimentos na nuvem (HANA): S&OP, Demand, Inventory e Response & Supply, com simulações what-if.
- [SAP MDG](/glossario/sap-mdg) *(MDG, Master Data Governance, Golden Record)* — Governança centralizada de dados mestres com workflow de change requests, regras de qualidade, consolidação (golden record) e replicação.

### EWM - Armazém
- [Controle de Armazenagem LOSC](/glossario/losc-layout-oriented-storage-control) *(LOSC, POSC, ID Point)* — Controle de armazenagem orientado a layout: fluxos passam por pontos intermediários (ID Point na entrada, Pick Point na saída).
- [Estrutura do Armazém EWM](/glossario/estrutura-do-armazem-ewm) *(Warehouse Number, Storage Type, Storage Section)* — Hierarquia de endereçamento do armazém: Número do Depósito > Tipo > Seção > Posição (bin).
- [EWM](/glossario/ewm) *(Extended Warehouse Management, SAP EWM, WM)* — Gestão avançada de armazém — os "músculos operacionais": posição física exata, tarefas e recursos.
- [Handling Unit](/glossario/handling-unit) *(HU, Unidade de Manuseio)* — Unidade física serializada (palete, caixa) que agrupa produtos e é movimentada e rastreada como uma única entidade.
- [Inbound Delivery](/glossario/inbound-delivery) *(Recebimento Físico, Remessa de Entrada)* — Recebimento físico no armazém: gestão de pátio, doca, conferência via coletor e criação de warehouse tasks.
- [Inventário Cíclico](/glossario/inventario-ciclico) *(Cycle Counting, Inventário Físico Contínuo)* — Contagens diárias de pequenas áreas via coletor, sem parar a operação, mantendo acuracidade próxima de 100%.
- [MFS](/glossario/mfs) *(Material Flow System, WCS)* — Camada do EWM que funciona como WCS, comunicando-se via telegramas diretamente com PLCs de automação (esteiras, transelevadores, AGVs).
- [Picking](/glossario/picking) *(Separação, Packing, Embalagem)* — Separação dos itens para expedição com rota otimizada pelo sistema; packing é a montagem dos volumes.
- [Putaway](/glossario/putaway) *(Armazenagem, Guarda)* — Estratégia de guarda em que o EWM decide "o melhor lugar" para cada item (alto giro, pesados, perigosos, caótico).
- [QIE](/glossario/qie) *(Quality Inspection Engine)* — Motor de qualidade integrado ao EWM: dispara inspeção no recebimento e cria tarefas conforme a decisão (armazenar ou sucata/devolução).
- [VAS e Kitting](/glossario/vas-e-kitting) *(Value-Added Services, Serviços de Valor Agregado, Kitting)* — Atividades que agregam valor no armazém (ordens VAS); Kitting monta kits para estoque (novo SKU) ou para a ordem de venda.
- [Warehouse Task](/glossario/warehouse-task) *(WT, Warehouse Order, WO)* — WT é a menor unidade de trabalho (mover produto de A para B); WOs agrupam WTs e são atribuídas a filas e recursos.
- [Wave Management](/glossario/wave-management) *(Gestão de Ondas, Onda de Trabalho)* — Agrupamento de pedidos com características similares (rota, transportadora, prioridade) em uma única onda de picking.

### FI - Finanças
- [Asset Accounting](/glossario/asset-accounting) *(AA, FI-AA, Contabilidade de Ativos)* — Submódulo FI que controla o patrimônio (ativo imobilizado): aquisição, depreciação mensal e baixa.
- [Bank Ledger](/glossario/bank-ledger) *(BL, Contabilidade Bancária)* — Ponte com os bancos: extratos bancários, conciliação automática e arquivos de pagamento.
- [Company Code](/glossario/company-code) *(Código da Empresa, BUKRS)* — Menor unidade organizacional com contabilidade própria e balanço independente (campo BUKRS).
- [Compatibility Views](/glossario/compatibility-views) *(Views de Compatibilidade, V_COEP, FAGLBSIS_DDL)* — Views (DDL SQL/CDS) que simulam as tabelas antigas do ECC (BSIS, COEP, ANEP…) lendo da ACDOCA, preservando programas Z.
- [Conectividade Bancária](/glossario/conectividade-bancaria) *(BCM, Bank Communication Management, MBC)* — BCM (monitor e aprovação de lotes de pagamento), MBC (conexão única em nuvem com bancos) e In-House Cash/Payment Factory (centralização).
- [Contas a Pagar e a Receber](/glossario/contas-a-pagar-e-a-receber) *(AP, AR, Accounts Payable)* — Submódulos FI que controlam saídas (AP — fornecedores) e entradas (AR — clientes) de dinheiro.
- [Estrutura Organizacional FI](/glossario/estrutura-organizacional-fi) *(Company, Empresa, Chart of Accounts)* — Hierarquia de objetos organizacionais financeiros: Company, Company Code, Plano de Contas e Área de Controle de Crédito.
- [Fast Close](/glossario/fast-close) *(Fechamento Rápido, Fechamento Contábil)* — Fechamento contábil que no S/4HANA cai de semanas para dias, graças ao ACDOCA e dados em tempo real.
- [FI](/glossario/fi) *(Financial Accounting, SAP FI, Finanças)* — Módulo de Contabilidade Financeira — visão legal e externa (governo, bancos, acionistas).
- [Financial Closing Cockpit](/glossario/financial-closing-cockpit) *(Closing Cockpit, Fechamento Contínuo, Continuous Close)* — Orquestrador do fechamento de período: template de tarefas, dependências, responsáveis, status e automação (ex.: AFAB).
- [General Ledger](/glossario/general-ledger) *(GL, Livro-Razão, Razão)* — Livro-razão — repositório central de todos os lançamentos contábeis da empresa.
- [Gestão de Caixa e Bancos](/glossario/gestao-de-caixa-e-bancos) *(Bank Account Management, BAM, Cash Flow Analyzer)* — Apps Fiori para ciclo de vida de contas bancárias (BAM), posição de caixa e previsão de liquidez em tempo real.
- [New GL e Ledgers Paralelos](/glossario/new-gl-e-ledgers-paralelos) *(New G/L, Leading Ledger, 0L)* — Contabilidade paralela com múltiplos ledgers (ex.: 0L BR GAAP e N1 IFRS) e Document Splitting para balanço por segmento/centro de lucro.
- [Tesouraria TRM](/glossario/tesouraria-trm) *(Treasury and Risk Management, TRM, Transaction Manager)* — Módulo de tesouraria: liquidez, transações financeiras (câmbio, derivativos, dívidas), riscos de mercado e hedge accounting.
- [Universal Journal](/glossario/universal-journal) *(ACDOCA, Diário Universal, Single Source of Truth)* — Tabela única ACDOCA do S/4HANA que unifica lançamentos de FI, CO, AA e ML, eliminando reconciliações.

### Fiscal Brasil
- [Advanced Compliance Reporting](/glossario/advanced-compliance-reporting) *(ACR)* — Plataforma global Fiori da SAP para ciclo de vida de relatórios legais (definir, executar, analisar, submeter); no Brasil consome dados do TDF.
- [Central Tax Repository](/glossario/central-tax-repository) *(CTR, Repositório Fiscal Central)* — Repositório do TDF no HANA que replica, harmoniza e enriquece dados fiscais para apuração e geração de obrigações.
- [J1BTAX](/glossario/j1btax) *(TAXBRA, TAXVAL, Cockpit Fiscal)* — Transação/cockpit de tabelas fiscais brasileiras; TAXBRA e TAXVAL são os esquemas de cálculo de impostos do Brasil.
- [Localização Brasil](/glossario/localizacao-brasil) *(Tropicalização, Localização Brasileira, Brazil Localization)* — Camada de adaptações do SAP à legislação fiscal brasileira (impostos, NF-e, obrigações acessórias).
- [NF-e](/glossario/nf-e) *(Nota Fiscal Eletrônica, DANFE, SEFAZ)* — Nota Fiscal Eletrônica: XML gerado pelo SAP, validado pela SEFAZ e impresso como DANFE — sem autorização, o caminhão não sai.
- [SAP TDF](/glossario/sap-tdf) *(TDF, Tax Declaration Framework)* — Solução SAP para compliance fiscal brasileiro (obrigações acessórias, SPED, NF-e, impostos retidos).
- [SPED](/glossario/sped) *(EFD ICMS/IPI, EFD Contribuições, ECF)* — Sistema Público de Escrituração Digital — família de obrigações fiscais eletrônicas geradas pelo SAP TDF.

### HCM - Pessoas
- [Administração de Pessoal](/glossario/administracao-de-pessoal) *(PA, Personnel Administration, Infotipos)* — Dados mestres do colaborador organizados em infotipos com histórico, manipulados por medidas (admissão, promoção, desligamento).
- [Estrutura Organizacional HCM](/glossario/estrutura-organizacional-hcm) *(OM, Organizational Management, Unidade Organizacional)* — Plano diretor da organização no RH: Unidades Organizacionais (O), Cargos (C) e Posições (S); base para autorizações e workflow.
- [Folha de Pagamento](/glossario/folha-de-pagamento) *(Payroll, Gestão de Tempos, Time Management)* — Motor de cálculo de remuneração (schema) alimentado por PA, tempos e OM; gera holerite, arquivos bancários, eSocial e lançamentos FI/CO.
- [HCM](/glossario/hcm) *(Human Capital Management, SAP HCM, HR)* — Gestão de capital humano — da contratação à aposentadoria; na nuvem, SAP SuccessFactors.
- [SAP SuccessFactors](/glossario/sap-successfactors) *(SuccessFactors, HXM, Human Experience Management)* — Suíte de RH em nuvem da SAP (HXM), focada na experiência do colaborador: Employee Central, Recruiting, Learning, Performance etc.

### MM - Suprimentos
- [Avaliação de Estoque](/glossario/avaliacao-de-estoque) *(Valuation, Preço Médio Móvel, Custo Standard)* — Como o SAP valoriza o estoque: Preço Médio Móvel (V) ou Custo Standard (S).
- [Consignação](/glossario/consignacao) *(Consignment, Estoque em Consignação)* — Estoque de terceiros: do fornecedor em nosso armazém (paga ao usar) ou nosso na planta do cliente (vende ao consumir).
- [Estratégia de Liberação](/glossario/estrategia-de-liberacao) *(Release Strategy, Aprovação de Compras)* — Workflow de aprovação de documentos de compra por alçadas (gerente, diretor) conforme valor/critérios.
- [Inventário Físico](/glossario/inventario-fisico) *(Physical Inventory, Inventário Periódico, Curva ABC)* — Sincroniza estoque sistêmico e físico: documento de inventário → contagem → análise de divergências → lançamento de diferenças.
- [Material Master](/glossario/material-master) *(Mestre de Materiais, Cadastro de Material, MARA)* — "DNA do produto": cadastro mestre com visões de compras, estoque/planejamento, contabilidade e vendas.
- [MIGO](/glossario/migo) *(Entrada de Mercadoria, Goods Receipt, GR)* — Transação de movimentação de mercadorias; na entrada por pedido gera estoque físico e lançamento contábil.
- [MIRO](/glossario/miro) *(Verificação de Fatura, Invoice Verification, Logistics Invoice Verification)* — Transação de verificação de fatura de fornecedor — onde a logística encontra o financeiro (three-way match).
- [MM](/glossario/mm) *(Materials Management, SAP MM, Gestão de Materiais)* — Módulo de Gestão de Materiais — compras, estoque e fornecedores (ciclo Procure-to-Pay).
- [Pedido de Compra](/glossario/pedido-de-compra) *(PO, Purchase Order)* — Documento externo enviado ao fornecedor com material, quantidade, preço e prazo — "aperto de mão digital".
- [Procure-to-Pay](/glossario/procure-to-pay) *(P2P, Source-to-Pay, Compra ao Pagamento)* — Ciclo ponta a ponta de suprimentos: da necessidade de compra até o pagamento do fornecedor.
- [Registro Info de Compras](/glossario/registro-info-de-compras) *(Purchasing Info Record, Info Record, PIR)* — Elo material × fornecedor com condições negociadas (preço, lead time, último pedido); base para cotação e custos.
- [Requisição de Compra](/glossario/requisicao-de-compra) *(PR, Purchase Requisition, RC)* — Documento interno que registra uma necessidade de compra ("preciso de 10 rolamentos").
- [SAP Ariba](/glossario/sap-ariba) *(Ariba, Ariba Network)* — Rede/marketplace B2B de compras na nuvem integrada ao S/4HANA: sourcing, cotação online e colaboração com fornecedores.
- [SAP Ariba Soluções](/glossario/sap-ariba-solucoes) *(Ariba Sourcing, Ariba Contracts, Guided Buying)* — Portfólio Ariba: Sourcing (RFx, leilões), Contracts, Guided Buying, integração CIG, colaboração com fornecedor e análise de gastos.
- [Subcontratação](/glossario/subcontratacao) *(Subcontracting, Industrialização por Encomenda)* — Envio de matéria-prima a um terceiro que devolve o produto acabado — no Brasil, "industrialização por encomenda".
- [Tipos de Movimento](/glossario/tipos-de-movimento) *(Movement Types, 101, 201)* — Códigos que classificam movimentações de estoque — 101 entrada por pedido, 201 consumo para centro de custo, 261 consumo para ordem.

### PM - Manutenção
- [Estrutura Organizacional PM](/glossario/estrutura-organizacional-pm) *(Planning Plant, Maintenance Plant, Local de Planejamento da Manutenção)* — Centro, Local de Planejamento (onde se planeja), Centro de Manutenção (onde os ativos estão) e Centros de Trabalho (equipes).
- [Indicadores de Manutenção](/glossario/indicadores-de-manutencao) *(MTBF, MTTR, Catálogos de Manutenção)* — MTBF (tempo médio entre falhas), MTTR (tempo médio para reparo) e catálogos de códigos padronizados para análise de causa raiz.
- [Lista Técnica de Manutenção](/glossario/lista-tecnica-de-manutencao) *(BOM de Manutenção, Maintenance BOM)* — Lista de peças de reposição de um equipamento, usada para selecionar e reservar materiais rapidamente na ordem de manutenção.
- [Local de Instalação e Equipamento](/glossario/local-de-instalacao-e-equipamento) *(Functional Location, Equipment, Local de Instalação)* — Local de Instalação = ONDE o ativo está (fixo, acumula custos); Equipamento = O QUE o ativo é (móvel, leva o histórico).
- [Nota de Manutenção](/glossario/nota-de-manutencao) *(Maintenance Notification, Nota PM)* — Registro formal de um problema/condição anormal em um ativo (quem reportou, onde, sintoma, prioridade).
- [Ordem de Manutenção](/glossario/ordem-de-manutencao) *(Maintenance Order, TECO, CLSD)* — Plano de ação da manutenção (operações, recursos, materiais) e objeto de custo; encerra com TECO e CLSD.
- [Plano de Manutenção](/glossario/plano-de-manutencao) *(Maintenance Plan, Plano de Ciclo Único, Plano de Estratégia)* — Gera automaticamente ordens/notas preventivas em ciclos de tempo ou uso; programação com data da chamada e horizonte de abertura.
- [PM](/glossario/pm) *(Plant Maintenance, SAP PM, Manutenção)* — Módulo de Manutenção — garante disponibilidade e confiabilidade de máquinas, frotas e instalações.

### PP - Produção
- [Apontamento de Produção](/glossario/apontamento-de-producao) *(Confirmação da Ordem, Production Confirmation)* — Registro do realizado (quantidade boa/refugo, horas de máquina e mão de obra) que atualiza status, estoque e custos.
- [Backflushing](/glossario/backflushing) *(Baixa Automática, Consumo Retroativo)* — Consumo automático dos componentes da BOM (movimento 261) disparado pelo apontamento da produção.
- [BOM](/glossario/bom) *(Bill of Materials, Lista Técnica, Lista de Materiais)* — "Receita do produto": estrutura hierárquica de componentes (nível 0 produto, nível 1 subconjuntos, nível 2 componentes).
- [DDMRP](/glossario/ddmrp) *(Demand-Driven MRP)* — Planejamento "puxado" pela demanda real com pulmões (buffers) de estoque, em vez de "empurrado" por previsão.
- [MRP Live](/glossario/mrp-live) *(MRP, MD01N, Material Requirements Planning)* — Planejamento de necessidades de materiais em tempo real no HANA (transação MD01N), gerando ordens planejadas e requisições.
- [MTS e MTO](/glossario/mts-e-mto) *(Make-to-Stock, Make-to-Order, Assemble-to-Order)* — MTS produz para estoque a partir de previsão; MTO produz a partir de um pedido de cliente; ATO combina os dois.
- [Ordem de Produção](/glossario/ordem-de-producao) *(Production Order)* — Autorização para produzir: o quê, quanto, quando, com cópia da BOM e do roteiro.
- [PP](/glossario/pp) *(Production Planning, SAP PP, Planejamento da Produção)* — Módulo de Planejamento e Controle da Produção — transforma insumos (MM) em produto acabado (SD).
- [PPDS](/glossario/pp-ds) *(PP/DS, Production Planning and Detailed Scheduling, Capacidade Finita)* — Planejamento avançado integrado ao S/4HANA com capacidade finita, heurísticas, programação detalhada e Alert Monitor.
- [Status da Ordem de Produção](/glossario/status-da-ordem-de-producao) *(CRTD, REL, CNF)* — Ciclo Ordem Planejada → Criada (CRTD) → Liberada (REL) → Confirmada → Encerrada; a liberação efetiva reservas e custos.
- [Tipos de Manufatura](/glossario/tipos-de-manufatura) *(Manufatura Discreta, Manufatura Repetitiva, Manufatura por Processos)* — Discreta (ordens individuais), Repetitiva (taxas por período em linha estável) e por Processos (receitas, lotes, ordens de processo).
- [Work Center](/glossario/work-center) *(Centro de Trabalho, Roteiro)* — Work Center responde ONDE se produz (máquina, linha, pessoa); o Roteiro responde COMO (sequência de operações).

### PS - Projetos
- [PS](/glossario/ps) *(Project System, SAP PS, Elemento PEP)* — Módulo de gestão de projetos: estrutura WBS (elementos PEP), redes de atividades, orçamento com AVAC e acompanhamento plano × real.

### Plataforma ERP
- [Armazenamento Colunar](/glossario/armazenamento-colunar) *(Columnar Store, Banco Orientado a Coluna, Column Store)* — Técnica do HANA de guardar dados por coluna (não por linha), lendo só as colunas necessárias e comprimindo até \~90%.
- [Cenários de Migração S4HANA](/glossario/cenarios-de-migracao-s4hana) *(Greenfield, Brownfield, Bluefield)* — Três caminhos para o S/4HANA: Greenfield (do zero), Brownfield (conversão do ECC) e Bluefield (transição seletiva).
- [Edições S4HANA Cloud](/glossario/edicoes-s4hana-cloud) *(Public Cloud, Private Cloud, Public Edition)* — S/4HANA Cloud Public Edition (SaaS multi-tenant padronizado) × Private Edition (nuvem dedicada, mais flexível).
- [Embedded Analytics](/glossario/embedded-analytics) *(Analytics Embarcado, Fiori Embedded Analytics)* — Análises operacionais em tempo real direto sobre os dados transacionais do S/4HANA (ACDOCA), sem ETL para BW.
- [OLTP e OLAP](/glossario/oltp-e-olap) *(OLTP, OLAP, Convergência OLTP OLAP)* — OLTP = processamento transacional; OLAP = processamento analítico. No S/4HANA ambos rodam sobre os mesmos dados em tempo real.
- [RISE with SAP](/glossario/rise-with-sap) *(RISE)* — Oferta/contrato da SAP que entrega o S/4HANA como serviço na nuvem (ERP + infraestrutura + ferramentas).
- [RISE with SAP Detalhado](/glossario/rise-with-sap-componentes) *(Business Process Intelligence, BPI, SAP Business Network Starter Pack)* — Componentes do pacote RISE: S/4HANA Cloud, infraestrutura gerenciada, BPI, créditos BTP e Business Network Starter Pack.
- [S4HANA](/glossario/s4hana) *(S/4HANA, SAP S/4HANA, S4)* — ERP de 4ª geração da SAP, construído sobre o banco in-memory HANA, sucessor do ECC.
- [SAP ECC](/glossario/sap-ecc) *(ECC, ERP Central Component, R/3)* — ERP legado da SAP (sucessor do R/3), rodando sobre bancos tradicionais; está sendo migrado para S/4HANA.
- [SAP HANA](/glossario/sap-hana) *(HANA, In-Memory Database)* — Banco de dados colunar in-memory da SAP que viabiliza processamento e análise em tempo real.
- [Situation Handling](/glossario/situation-handling) *(Gestão de Situações, Empresa Inteligente, Intelligent Enterprise)* — Recurso do S/4HANA que identifica proativamente situações que exigem atenção (ex.: contrato expirando) e sugere ações.

### QM - Qualidade
- [Configuração de Inspeção QM](/glossario/configuracao-de-inspecao-qm) *(MIC, Características de Inspeção, Plano de Inspeção)* — Características (o que medir), Métodos (como) e Planos de Inspeção (a receita completa com amostragem e operações).
- [Lote de Inspeção](/glossario/lote-de-inspecao) *(Inspection Lot, Decisão de Uso, DU)* — Requisição formal de inspeção criada automaticamente (entrada, liberação de ordem, remessa) que coloca o estoque em controle de qualidade.
- [Notificação de Qualidade](/glossario/notificacao-de-qualidade) *(Quality Notification, Q1, Q2)* — Registro de não conformidade (Q1 cliente, Q2 fornecedor, Q3 interno) com causa raiz e ações corretivas; CEP/SPC previne desvios.
- [QM](/glossario/qm) *(Quality Management, Gestão da Qualidade)* — Módulo de Qualidade — lotes de inspeção automáticos que liberam ou bloqueiam estoque.

### SD - Vendas
- [ATP](/glossario/atp) *(Available-to-Promise, Verificação de Disponibilidade)* — Checagem dinâmica de disponibilidade (estoque atual + produção prevista + compras em trânsito) para prometer datas.
- [Credit Management](/glossario/credit-management) *(Gestão de Crédito, FSCM Credit)* — Bloqueio automático de vendas quando o limite de crédito é excedido ou há faturas vencidas (integração com FI/FSCM).
- [CX](/glossario/cx) *(Customer Experience, SAP C/4HANA, CRM)* — Suíte de experiência do cliente (C/4HANA/CX) — de "tirar pedido" para "gerenciar a jornada" omnichannel.
- [Faturamento](/glossario/faturamento) *(Billing, Fatura, Nota de Crédito)* — Transforma a entrega física em obrigação financeira: gera fatura, NF-e e lançamento em Contas a Receber.
- [Ordem de Venda](/glossario/ordem-de-venda) *(Sales Order, OV, VA01)* — Coração do SD: documento com cabeçalho (cliente, pagamento), itens e divisões de remessa (quando/quanto).
- [Order-to-Cash](/glossario/order-to-cash) *(O2C, OTC, Pedido ao Recebimento)* — Ciclo de receita: pedido do cliente → ordem de venda → entrega → faturamento → recebimento.
- [Outbound Delivery](/glossario/outbound-delivery) *(Remessa, Remessa de Saída, VL01N)* — Documento operacional (VL01N) que autoriza o armazém a separar e expedir; herda dados da ordem de venda.
- [PGI](/glossario/pgi) *(Post Goods Issue, Saída de Mercadoria)* — "Ponto de não retorno": baixa o estoque, gera lançamento contábil (CMV) e transfere a propriedade.
- [Pricing](/glossario/pricing) *(Esquema de Cálculo, Pricing Procedure, Condition Technique)* — Motor de preços do SD (condition technique) que monta o valor: preço bruto, descontos, frete, impostos e líquido.
- [SD](/glossario/sd) *(Sales and Distribution, SAP SD, Vendas e Distribuição)* — Módulo de Vendas e Distribuição — gerencia o ciclo do pedido do cliente até o faturamento (O2C).

---
🧭 [Glossário SAP](/glossario) · [Glossário SAP A-Z](/glossario/a-z)
