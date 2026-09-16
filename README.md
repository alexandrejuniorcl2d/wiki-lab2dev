# Wiki Lab2dev

Portal interno de conhecimento da Lab2dev, baseado no [Wiki.js 2.5](https://docs.requarks.io).

```
wiki-lab2dev/
├── docker-compose.yaml   # db (Postgres 17) + wiki + caddy (HTTPS) + backup diário
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
- Os favicons e o `manifest.json` são montados por volume e valem em todas as telas.
- Todo seletor do CSS começa com `body`. O Vuetify injeta o tema dele depois do nosso código, com os mesmos seletores, e ganharia a disputa.
- Depois de alterar o CSS, aumente o `?v=` em `head.html` e atualize o Head Injection no Admin. O `/_assets` tem cache de 7 dias.

## Produção: Oracle Cloud Always Free

A Oracle oferece uma VM ARM gratuita e sem prazo (Ampere A1: até 2 OCPU e 12 GB de RAM desde jun/2026). É mais do que o Wiki.js precisa. Todas as imagens deste compose têm build `arm64`.

### 1. Conta e VM

1. Crie a conta em https://signup.cloud.oracle.com, de preferência com um **e-mail corporativo**. Eles pedem cartão só para validação.
2. Escolha bem a **home region** (ex.: `Brazil East (Sao Paulo)`). Ela não pode ser trocada depois.
3. Em *Compute > Instances > Create instance*:
   - Image: **Canonical Ubuntu 24.04** (aarch64)
   - Shape: **VM.Standard.A1.Flex** com 1 OCPU e 6 GB (sobra folga dentro do free)
   - Networking: VCN com subnet pública e **IPv4 público**
   - SSH: envie sua chave pública
4. Se aparecer `Out of capacity`, tente outro *Availability Domain* ou tente de novo mais tarde.
5. **Recomendado:** faça upgrade da conta para *Pay As You Go*. Os recursos Always Free continuam gratuitos, e contas free têm VMs "ociosas" recuperadas pela Oracle. Um wiki interno tem pouco uso de CPU e cai nessa regra. Crie também um *Budget* com alerta de valor baixo em *Billing*.

### 2. Liberar portas

Na **Security List** da subnet, adicione regras de *Ingress* com origem `0.0.0.0/0`:
- TCP 80
- TCP 443
- UDP 443

Restrinja a porta 22 ao seu IP.

A imagem Ubuntu da Oracle também bloqueia portas no `iptables` da própria VM:

```bash
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p udp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```

### 3. Docker e projeto

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker ubuntu && exit   # reconecte o SSH
```

Envie o projeto por `git clone` do repositório da empresa ou por `rsync`, a partir da sua máquina:

```bash
rsync -av --exclude .env --exclude backups ./ ubuntu@IP_DA_VM:~/wiki-lab2dev/
```

Na VM, crie o `.env`:

```bash
cd ~/wiki-lab2dev
cp .env.example .env
openssl rand -base64 32    # use como DB_PASS
nano .env                  # WIKI_DOMAIN=wiki.lab2dev.com e DB_PASS=<senha gerada>
```

### 4. DNS e HTTPS

- Peça a quem administra o DNS da `lab2dev.com` um registro **A**: `wiki` apontando para o IP público da VM.
- O Caddy emite o certificado Let's Encrypt sozinho na primeira requisição.
- Para testar antes do DNS ficar pronto, use `WIKI_DOMAIN=<ip-com-hifens>.sslip.io` (ex.: `129-146-10-20.sslip.io`).

### 5. Levar os dados do ambiente local

Restaure **antes** de o wiki subir pela primeira vez na VM. Com o banco vazio, o Wiki.js cria outro schema e a restauração conflita.

Na máquina local:

```bash
docker compose exec -T db pg_dump -U wikijs --no-owner wiki | gzip > wiki-local.sql.gz
scp wiki-local.sql.gz ubuntu@IP_DA_VM:~/wiki-lab2dev/
```

Na VM:

```bash
docker compose up -d db
gunzip -c wiki-local.sql.gz | docker compose exec -T db psql -U wikijs -d wiki
docker compose up -d
```

Para começar do zero, rode apenas `docker compose up -d` e siga o assistente de instalação no navegador.

### 6. Ajustes no Admin após o deploy

- **General > Site URL:** `https://wiki.lab2dev.com`
- **Security > Trust X-Forwarded-\* Proxy Headers:** ligado (o wiki fica atrás do Caddy)
- **Security > HSTS:** desligado (o Caddy já envia)
- Em instalação nova, aplique a tabela da seção *Identidade visual*.

## Backup e restauração

**Backups automáticos:**
- O serviço `backup` gera `backups/wiki-AAAAMMDD-HHMMSS.sql.gz` na subida e a cada 24h.
- Ele mantém os últimos `BACKUP_RETENTION_DAYS` dias.

**Proteção fora da VM:**
- Copie a pasta `backups/` periodicamente para outro lugar. A Oracle oferece Object Storage gratuito.
- Ative **Admin > Storage > Git** apontando para um repositório da empresa. Cada página vira um `.md` versionado.

**Restauração:**

```bash
docker compose stop wiki
docker compose exec -T db psql -U wikijs -d wiki -c 'DROP SCHEMA public CASCADE; CREATE SCHEMA public;'
gunzip -c backups/wiki-AAAAMMDD-HHMMSS.sql.gz | docker compose exec -T db psql -U wikijs -d wiki
docker compose start wiki
```

## Atualizar o Wiki.js

Troque a tag `ghcr.io/requarks/wiki:2.5.314` no compose e rode:

```bash
docker compose pull wiki && docker compose up -d wiki
```

Faça um backup antes.
