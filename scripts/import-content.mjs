#!/usr/bin/env node
// Cria ou atualiza no Wiki.js as páginas de content/. Pode rodar várias vezes:
// páginas sem mudança não são tocadas, então o histórico não é poluído.
//
// Uso:
//   npm run import                          importa tudo
//   npm run import -- --only glossario      só caminhos que começam com "glossario"
//   npm run import -- --dry-run             mostra o que faria, sem gravar
//
// ATENÇÃO: atualizar uma página sobrescreve edições feitas nela pelo wiki.

import path from 'node:path'
import { parseArgs } from 'node:util'

import { loadContent } from './lib/content.mjs'
import { assertOk, RESPONSE, ROOT, wikiFromEnv } from './lib/wiki-api.mjs'

// Importação é sequencial de propósito: cada criação dispara um rebuild da árvore
// de páginas no Wiki.js, e rebuilds concorrentes violam a FK de "pageTree".

const { values: args } = parseArgs({
  options: {
    only: { type: 'string' },
    'dry-run': { type: 'boolean', default: false }
  }
})

const { url, locale, gql } = wikiFromEnv()

async function getPage (pagePath) {
  try {
    const { pages } = await gql(`query ($p: String!, $l: String!) {
      pages { singleByPath(path: $p, locale: $l) { id title description content editor isPublished tags { tag } } }
    }`, { p: pagePath, l: locale })
    return pages.singleByPath
  } catch (err) {
    if (/does not exist/i.test(err.message)) return null
    throw err
  }
}

const sameTags = (a, b) => [...a].sort().join('|') === [...b].sort().join('|')

function isUnchanged (existing, page) {
  return existing.editor === 'markdown' &&
    existing.isPublished &&
    existing.title === page.title &&
    existing.description === page.description &&
    existing.content.trim() === page.content.trim() &&
    sameTags(existing.tags.map(t => t.tag), page.tags)
}

async function importPage (page) {
  const existing = await getPage(page.path)
  if (existing && isUnchanged(existing, page)) return 'unchanged'
  if (args['dry-run']) return existing ? 'updated' : 'created'

  const fields = {
    content: page.content,
    description: page.description,
    tags: page.tags,
    title: page.title,
    isPublished: true,
    isPrivate: false
  }

  if (!existing) {
    const res = await gql(`mutation ($content: String!, $description: String!, $tags: [String]!, $title: String!, $isPublished: Boolean!, $isPrivate: Boolean!, $path: String!, $locale: String!) {
      pages { create(content: $content, description: $description, editor: "markdown", isPublished: $isPublished, isPrivate: $isPrivate, locale: $locale, path: $path, tags: $tags, title: $title) { ${RESPONSE} } }
    }`, { ...fields, path: page.path, locale })
    assertOk(res.pages.create, `criar ${page.path}`)
    return 'created'
  }

  // O update não troca o editor, e o Wiki.js não converte AsciiDoc para Markdown
  if (existing.editor !== 'markdown') {
    throw new Error(`a página existente usa o editor "${existing.editor}". Rode "npm run setup" para arquivá-la antes de importar.`)
  }
  const res = await gql(`mutation ($id: Int!, $content: String, $description: String, $tags: [String], $title: String, $isPublished: Boolean, $isPrivate: Boolean) {
    pages { update(id: $id, content: $content, description: $description, editor: "markdown", tags: $tags, title: $title, isPublished: $isPublished, isPrivate: $isPrivate) { ${RESPONSE} } }
  }`, { ...fields, id: existing.id })
  assertOk(res.pages.update, `atualizar ${page.path}`)
  return 'updated'
}

async function main () {
  const contentDir = path.join(ROOT, 'content')
  const pages = (await loadContent(contentDir)).filter(p => !args.only || p.path.startsWith(args.only))
  console.log(`${args['dry-run'] ? '[dry-run] ' : ''}Importando ${pages.length} páginas em ${url} (${locale})`)

  const totals = { created: 0, updated: 0, unchanged: 0, failed: 0 }
  for (const [index, page] of pages.entries()) {
    try {
      const result = await importPage(page)
      totals[result]++
      if (result !== 'unchanged') console.log(`  ${result === 'created' ? '+' : '~'} ${page.path}`)
    } catch (err) {
      totals.failed++
      console.error(`  ✗ ${page.path}: ${err.message}`)
    }
    if ((index + 1) % 50 === 0) console.log(`  … ${index + 1}/${pages.length}`)
  }

  if (!args['dry-run']) {
    const rerendered = await rerenderStalePages(pages)
    if (totals.created + totals.updated + rerendered > 0) {
      assertOk((await gql(`mutation { pages { rebuildTree { ${RESPONSE} } } }`)).pages.rebuildTree, 'rebuildTree')
      assertOk((await gql(`mutation { search { rebuildIndex { ${RESPONSE} } } }`)).search.rebuildIndex, 'rebuildIndex')
      console.log('Árvore de páginas e índice de busca reconstruídos.')
    }
  }

  console.log(`Criadas: ${totals.created} · Atualizadas: ${totals.updated} · Sem mudança: ${totals.unchanged} · Falhas: ${totals.failed}`)
  if (totals.failed) process.exit(1)
}

// O HTML de cada página é gerado quando ela é salva. Páginas salvas antes dos
// destinos de seus links ficam com esses links marcados como inválidos
// (.is-invalid-page) até serem renderizadas de novo.
async function rerenderStalePages (pages) {
  let count = 0
  for (const page of pages) {
    const { pages: result } = await gql('query ($p: String!, $l: String!) { pages { singleByPath(path: $p, locale: $l) { id render } } }', { p: page.path, l: locale })
      .catch(() => ({ pages: {} }))
    const existing = result.singleByPath
    if (!existing || (existing.render && !existing.render.includes('is-invalid-page'))) continue
    assertOk((await gql(`mutation ($id: Int!) { pages { render(id: $id) { ${RESPONSE} } } }`, { id: existing.id })).pages.render, `renderizar ${page.path}`)
    count++
  }
  if (count) console.log(`${count} página(s) renderizada(s) novamente para atualizar links.`)
  return count
}

main().catch(err => {
  console.error(`Erro: ${err.message}`)
  process.exit(1)
})
