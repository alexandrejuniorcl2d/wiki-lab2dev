# Wiki Lab2dev

Portal interno de conhecimento da Lab2dev, baseado no [Wiki.js 2.5](https://docs.requarks.io).

```
wiki-lab2dev/
├── Dockerfile            # imagem do wiki com a marca (usada no Render e localmente)
├── render.yaml           # deploy no Render
├── docker-compose.yaml   # ambiente local: db + wiki + caddy + backup
├── supabase/             # CA pública do Supabase (TLS verificado)
├── Caddyfile             # proxy reverso; HTTPS automático em produção
├── .env.example          # modelo de variáveis (copie para .env)
├── branding/             # identidade visual versionada
│   ├── head.html         # conteúdo do Admin > Theme > Head HTML Injection
│   ├── static/           # servido em /_assets/branding/ (CSS e logos)
│   ├── favicons/         # substitui os favicons padrão (vale em todas as telas)
│   ├── favicon.ico
│   └── manifest.json
├── content/              # páginas do wiki em Markdown (1 arquivo = 1 página)
│   └── glossario/        # GERADO a partir do vault SAP; não edite à mão
├── scripts/              # geração do glossário, setup e importação via API
└── backups/              # dumps diários do Postgres (fora do Git)
```

## Rodando localmente

```bash
cp .env.example .env      # ajuste DB_PASS
docker compose up -d
```

Acesse http://localhost.

## Conteúdo

As páginas iniciais ficam em `content/` e são enviadas ao wiki pela API GraphQL. Requisitos: Node 20.12+ e uma chave de **Admin > API Access** em `WIKI_API_TOKEN` no `.env`.

```bash
npm test             # testes do conversor e do carregador de conteúdo
npm run glossario    # regenera content/glossario a partir de ../../../my_brain/SAP (ou SAP_VAULT=...)
npm run setup        # idioma pt-br, menu lateral, busca PostgreSQL e arquivamento de páginas antigas
npm run import       # cria/atualiza as páginas (use -- --dry-run para simular, -- --only <prefixo> para filtrar)
```

**Como funciona:**
- `content/onboarding/index.md` vira a página `onboarding`. O frontmatter define `title`, `description` e `tags`.
- A importação pode rodar várias vezes. Páginas iguais não são tocadas, e no fim o script refaz o HTML das páginas com links pendentes, a árvore e o índice de busca.
- Páginas que já existem com outro editor (ex.: AsciiDoc) são movidas para `arquivo/` e despublicadas pelo `setup`, sem perder histórico. O Wiki.js não converte AsciiDoc para Markdown.

**Cuidados:**
- **Depois da carga inicial, o wiki é a fonte da verdade** das páginas da Lab2dev. Reimportar sobrescreve edições feitas no wiki. Use `--only` para atualizar só o que precisa.
- **O glossário é a exceção:** a fonte é o vault SAP, e ele pode ser regenerado e reimportado com `npm run glossario && npm run import -- --only glossario`.
- Avisos (`> ... {.is-warning}`) precisam terminar em parágrafo. Se a última linha for item de lista, o Wiki.js aplica a cor na lista, e o import recusa o arquivo.
- Não use `$`, `~` ou `<palavra>` fora de código no Markdown. O wiki interpreta como fórmula, subscrito ou HTML (escape com `\$`, `\~`).

**Tags úteis:**
- [`a-preencher`](http://localhost/t/a-preencher): páginas com seções para os responsáveis completarem.
- `arquivo`: páginas antigas despublicadas.

## Identidade visual

**Como funciona:**
- O CSS fica em `branding/static/lab2dev.css`, versionado no Git. O Wiki.js o serve em `/_assets/branding/lab2dev.css`.
- O Admin só guarda duas configurações:

| Onde | Valor |
|---|---|
| Admin > General > Site Logo URL | `/_assets/branding/logo-lab2dev-icone.png` |
| Admin > Theme > Head HTML Injection | conteúdo de `branding/head.html` |
| Admin > Theme > CSS Override | vazio |

**Cuidados:**
- O código injetado só vale nas **páginas de conteúdo**. O Wiki.js não injeta CSS no Admin, no login nem no editor. Isso é do produto, não é bug.
- Logo, CSS, favicons e `manifest.json` vão dentro da imagem (`Dockerfile`). Favicons valem em todas as telas. Depois de mudar `branding/`, rode `docker compose up -d --build`.
- Todo seletor do CSS começa com `body`. O Vuetify injeta o tema dele depois do nosso código, com os mesmos seletores, e ganharia a disputa.
- Depois de alterar o CSS, aumente o `?v=` em `head.html` e atualize o Head Injection no Admin. O `/_assets` tem cache de 7 dias.

## Produção: Render + Supabase (gratuito)

```
GitHub (repo privado) → Render (free, Virginia): Wiki.js com HTTPS
                              └→ Supabase (free, East US): Postgres
```

Limites do plano gratuito: o Render dorme após 15 min sem acesso (a primeira visita espera ~1 min) e o Supabase pausa após 7 dias sem uso.

### 1. Supabase
1. Crie um projeto em [supabase.com](https://supabase.com), região **East US (North Virginia)**. Guarde a senha do banco.
2. Na criação, deixe **desmarcado** "expor tabelas automaticamente" e desative a **Data API** se a opção aparecer (o wiki não usa).
3. Em **Connect → Session pooler**, anote o host (ex.: `aws-0-us-east-1.pooler.supabase.com`) e o usuário (`postgres.xxxx`).

### 2. Copiar o wiki local para o Supabase
Adicione ao `.env` e rode (uma vez, antes do Render):

```bash
scripts/migrate-to-supabase.sh
```

### 3. GitHub
Crie um repositório **privado** e envie o projeto (`.env` e `backups/` ficam de fora pelo `.gitignore`).

### 4. Render
**New → Blueprint →** escolha o repositório. Preencha `DB_HOST`, `DB_USER` e `DB_PASS` com os dados do passo 1 e confirme. O `render.yaml` cuida do resto.

### 5. Depois do primeiro deploy
- Entre com o mesmo admin do ambiente local e **troque a senha** (o wiki agora está na internet).
- Ajuste a URL do site e o proxy: `WIKI_URL=https://SEU-SERVICO.onrender.com npm run setup`

### Opcional: backup diário
O Supabase gratuito não faz backup. A Action `.github/workflows/backup.yml` faz um backup criptografado por dia (e mantém o Supabase ativo). Para ligar, cadastre em **Settings → Secrets → Actions**: `SUPABASE_DB_HOST`, `SUPABASE_DB_USER`, `SUPABASE_DB_PASSWORD` e `BACKUP_PASSPHRASE` (guarde essa frase: sem ela o backup não abre). Para restaurar num projeto vazio: `scripts/restore-supabase.sh ARQUIVO`.

Para rodar numa VM própria em vez disso, veja [docs/deploy-oracle.md](docs/deploy-oracle.md).

## Atualizar o Wiki.js

Troque a tag em `Dockerfile`, teste localmente com `docker compose up -d --build` e faça push. O Render rebuilda sozinho.
