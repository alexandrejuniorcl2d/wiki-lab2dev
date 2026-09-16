#!/usr/bin/env node
// Configura o wiki para o conteúdo da Lab2dev. Pode rodar várias vezes.
//   1. Idioma pt-br (baixa o pacote e migra as páginas criadas em "en")
//   2. Move as páginas de área antigas para dentro de /areas
//   3. Arquiva páginas que não usam Markdown nos caminhos de content/
//   4. Menu lateral
//   5. Busca PostgreSQL com dicionário em português
//
// Uso: npm run setup

import { randomUUID } from 'node:crypto'
import path from 'node:path'

import { loadContent } from './lib/content.mjs'
import { assertOk, RESPONSE, ROOT, wikiFromEnv } from './lib/wiki-api.mjs'

const LEGACY_MOVES = { integration: 'areas/integracao', abap: 'areas/abap' }

const MENU = [
  { kind: 'link', label: 'Início', icon: 'mdi-home', targetType: 'home', target: '/' },
  { kind: 'divider' },
  { kind: 'header', label: 'Comece aqui' },
  { kind: 'link', label: 'Onboarding', icon: 'mdi-rocket-launch', path: 'onboarding' },
  { kind: 'link', label: 'A Lab2dev', icon: 'mdi-domain', path: 'empresa' },
  { kind: 'divider' },
  { kind: 'header', label: 'Trabalho' },
  { kind: 'link', label: 'Áreas', icon: 'mdi-account-group', path: 'areas' },
  { kind: 'link', label: 'Projetos', icon: 'mdi-folder-multiple', path: 'projetos' },
  { kind: 'link', label: 'Engenharia', icon: 'mdi-hammer-wrench', path: 'engenharia' },
  { kind: 'link', label: 'Processos', icon: 'mdi-clipboard-check-outline', path: 'processos' },
  { kind: 'link', label: 'Ferramentas', icon: 'mdi-toolbox', path: 'ferramentas' },
  { kind: 'divider' },
  { kind: 'header', label: 'Conhecimento' },
  { kind: 'link', label: 'Glossário SAP', icon: 'mdi-book-open-variant', path: 'glossario' },
  { kind: 'link', label: 'Templates', icon: 'mdi-file-document-multiple-outline', path: 'templates' }
]

const { url, locale, gql } = wikiFromEnv()
const step = (msg) => console.log(`→ ${msg}`)

async function setupLocale () {
  const { localization } = await gql('{ localization { config { locale namespacing } } }')
  if (localization.config.locale !== locale) {
    step(`Baixando idioma ${locale}`)
    assertOk((await gql(`mutation ($l: String!) { localization { downloadLocale(locale: $l) { ${RESPONSE} } } }`, { l: locale })).localization.downloadLocale, 'downloadLocale')
    step(`Definindo ${locale} como idioma do site`)
    assertOk((await gql(`mutation ($l: String!) { localization { updateLocale(locale: $l, autoUpdate: true, namespacing: false, namespaces: []) { ${RESPONSE} } } }`, { l: locale })).localization.updateLocale, 'updateLocale')
  } else {
    step(`Idioma já é ${locale}`)
  }

  const { pages } = await gql('{ pages { list(limit: 1000) { id locale } } }')
  const otherLocales = [...new Set(pages.list.map(p => p.locale).filter(l => l !== locale))]
  for (const source of otherLocales) {
    const res = (await gql(`mutation ($s: String!, $t: String!) { pages { migrateToLocale(sourceLocale: $s, targetLocale: $t) { ${RESPONSE} count } } }`, { s: source, t: locale })).pages.migrateToLocale
    assertOk(res, `migrateToLocale ${source}`)
    step(`${res.count} página(s) migrada(s) de ${source} para ${locale}`)
  }
}

async function findPage (path) {
  const { pages } = await gql('query ($p: String!, $l: String!) { pages { singleByPath(path: $p, locale: $l) { id } } }', { p: path, l: locale })
    .catch(err => (/not found|does not exist/i.test(err.message) ? { pages: { singleByPath: null } } : Promise.reject(err)))
  return pages.singleByPath
}

async function moveLegacyPages () {
  for (const [from, to] of Object.entries(LEGACY_MOVES)) {
    const source = await findPage(from)
    if (!source) continue
    if (await findPage(to)) {
      step(`"${from}" não foi movida: já existe "${to}"`)
      continue
    }
    assertOk((await gql(`mutation ($id: Int!, $p: String!, $l: String!) { pages { move(id: $id, destinationPath: $p, destinationLocale: $l) { ${RESPONSE} } } }`, { id: source.id, p: to, l: locale })).pages.move, `move ${from}`)
    step(`Página "${from}" movida para "${to}"`)
  }
}

// O Wiki.js não converte AsciiDoc para Markdown e o update não troca o editor.
// Para o import poder criar a versão Markdown, a página antiga vai para arquivo/
// despublicada. Nada é apagado: o histórico continua na página arquivada.
async function archiveNonMarkdownPages () {
  const contentPaths = (await loadContent(path.join(ROOT, 'content'))).map(p => p.path)
  for (const pagePath of contentPaths) {
    const { pages } = await gql(`query ($p: String!, $l: String!) {
      pages { singleByPath(path: $p, locale: $l) { id title description content editor tags { tag } } }
    }`, { p: pagePath, l: locale }).catch(err => (/does not exist/i.test(err.message) ? { pages: {} } : Promise.reject(err)))
    const page = pages.singleByPath
    if (!page || page.editor === 'markdown') continue

    const archivePath = `arquivo/${pagePath.replace(/\//g, '-')}`
    if (await findPage(archivePath)) throw new Error(`Não foi possível arquivar "${pagePath}": "${archivePath}" já existe`)
    assertOk((await gql(`mutation ($id: Int!, $p: String!, $l: String!) { pages { move(id: $id, destinationPath: $p, destinationLocale: $l) { ${RESPONSE} } } }`, { id: page.id, p: archivePath, l: locale })).pages.move, `arquivar ${pagePath}`)
    assertOk((await gql(`mutation ($id: Int!, $content: String, $description: String, $tags: [String], $title: String) {
      pages { update(id: $id, content: $content, description: $description, tags: $tags, title: $title, isPublished: false) { ${RESPONSE} } }
    }`, { id: page.id, content: page.content, description: page.description, title: page.title, tags: [...new Set([...page.tags.map(t => t.tag), 'arquivo'])] })).pages.update, `despublicar ${archivePath}`)
    step(`Página "${pagePath}" (editor ${page.editor}) arquivada em "${archivePath}" e despublicada`)
  }
}

async function setupMenu () {
  const items = MENU.map(({ path, ...item }) => ({
    id: randomUUID(),
    label: null,
    icon: null,
    targetType: path ? 'page' : null,
    target: path ? `/${locale}/${path}` : null,
    visibilityMode: 'all',
    visibilityGroups: [],
    ...item
  }))
  assertOk((await gql(`mutation ($tree: [NavigationTreeInput]!) { navigation { updateTree(tree: $tree) { ${RESPONSE} } } }`, { tree: [{ locale, items }] })).navigation.updateTree, 'navigation.updateTree')
  assertOk((await gql(`mutation { navigation { updateConfig(mode: STATIC) { ${RESPONSE} } } }`)).navigation.updateConfig, 'navigation.updateConfig')
  step(`Menu lateral atualizado (${MENU.filter(i => i.kind === 'link').length} links)`)
}

async function setupSearch () {
  const { search } = await gql('{ search { searchEngines { key isEnabled config { key value } } } }')
  const postgres = search.searchEngines.find(e => e.key === 'postgres')
  const dict = postgres?.config?.find(c => c.key === 'dictLanguage')?.value
  if (postgres?.isEnabled && dict && JSON.parse(dict).value === 'portuguese') {
    step('Busca PostgreSQL (portuguese) já ativa')
    return
  }
  const engines = search.searchEngines.map(e => ({
    key: e.key,
    isEnabled: e.key === 'postgres',
    config: e.key === 'postgres' ? [{ key: 'dictLanguage', value: JSON.stringify({ v: 'portuguese' }) }] : []
  }))
  assertOk((await gql(`mutation ($e: [SearchEngineInput]) { search { updateSearchEngines(engines: $e) { ${RESPONSE} } } }`, { e: engines })).search.updateSearchEngines, 'updateSearchEngines')
  step('Busca trocada para PostgreSQL com dicionário português (o índice é reconstruído no import)')
}

async function main () {
  console.log(`Configurando ${url} (${locale})`)
  await setupLocale()
  await moveLegacyPages()
  await archiveNonMarkdownPages()
  assertOk((await gql(`mutation { pages { rebuildTree { ${RESPONSE} } } }`)).pages.rebuildTree, 'rebuildTree')
  assertOk((await gql(`mutation { pages { flushCache { ${RESPONSE} } } }`)).pages.flushCache, 'flushCache')
  await setupMenu()
  await setupSearch()
  console.log('Pronto.')
}

main().catch(err => {
  console.error(`Erro: ${err.message}`)
  process.exit(1)
})
