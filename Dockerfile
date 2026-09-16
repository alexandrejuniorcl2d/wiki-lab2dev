# Imagem do Wiki Lab2dev: Wiki.js 2.5 com a identidade visual embutida.
# É a mesma imagem no Render (produção) e no docker compose (local).
FROM ghcr.io/requarks/wiki:2.5.314

COPY --chown=node:node branding/static /wiki/assets/branding
COPY --chown=node:node branding/favicons /wiki/assets/favicons
COPY --chown=node:node branding/manifest.json /wiki/assets/manifest.json
COPY --chown=node:node branding/favicon.ico /wiki/assets/favicon.ico
