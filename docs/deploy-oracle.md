# Alternativa: VM na Oracle Cloud Always Free

A Oracle oferece uma VM ARM gratuita e sem prazo (Ampere A1: até 2 OCPU e 12 GB de RAM desde jun/2026). É mais do que o Wiki.js precisa. Todas as imagens deste compose têm build `arm64`.

## 1. Conta e VM

1. Crie a conta em https://signup.cloud.oracle.com, de preferência com um **e-mail corporativo**. Eles pedem cartão só para validação.
2. Escolha bem a **home region** (ex.: `Brazil East (Sao Paulo)`). Ela não pode ser trocada depois.
3. Em *Compute > Instances > Create instance*:
   - Image: **Canonical Ubuntu 24.04** (aarch64)
   - Shape: **VM.Standard.A1.Flex** com 1 OCPU e 6 GB (sobra folga dentro do free)
   - Networking: VCN com subnet pública e **IPv4 público**
   - SSH: envie sua chave pública
4. Se aparecer `Out of capacity`, tente outro *Availability Domain* ou tente de novo mais tarde.
5. **Recomendado:** faça upgrade da conta para *Pay As You Go*. Os recursos Always Free continuam gratuitos, e contas free têm VMs "ociosas" recuperadas pela Oracle. Um wiki interno tem pouco uso de CPU e cai nessa regra. Crie também um *Budget* com alerta de valor baixo em *Billing*.

## 2. Liberar portas

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

## 3. Docker e projeto

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

## 4. DNS e HTTPS

- Peça a quem administra o DNS da `lab2dev.com` um registro **A**: `wiki` apontando para o IP público da VM.
- O Caddy emite o certificado Let's Encrypt sozinho na primeira requisição.
- Para testar antes do DNS ficar pronto, use `WIKI_DOMAIN=<ip-com-hifens>.sslip.io` (ex.: `129-146-10-20.sslip.io`).

## 5. Levar os dados do ambiente local

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

## 6. Ajustes no Admin após o deploy

- **General > Site URL:** `https://wiki.lab2dev.com`
- **Security > Trust X-Forwarded-\* Proxy Headers:** ligado (o wiki fica atrás do Caddy)
- **Security > HSTS:** desligado (o Caddy já envia)
- Em instalação nova, aplique a tabela da seção *Identidade visual*.

Nessa opção o `docker-compose.yaml` roda tudo na VM (Postgres, Caddy com HTTPS e backup diário em `backups/`).
