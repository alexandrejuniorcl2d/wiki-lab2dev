#!/usr/bin/env node
// Gera content/glossario/ a partir do vault Obsidian de SAP (my_brain/SAP).
//
// A pasta de saída é APAGADA e recriada a cada execução. Correções no glossário
// devem ser feitas no vault (my_brain/.sap-glossario/data), não nos arquivos gerados.
//
// Uso: npm run glossario    (SAP_VAULT=/caminho/para/my_brain/SAP para outro local)

import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { parseFrontmatter, stringifyFrontmatter } from './lib/frontmatter.mjs'
import { convertObsidian } from './lib/obsidian.mjs'
import { slugify } from './lib/slug.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const VAULT = path.resolve(ROOT, process.env.SAP_VAULT ?? '../../../my_brain/SAP')
const OUT = path.join(ROOT, 'content', 'glossario')
const BASE = '/glossario'

const TERMS_DIR = 'Termos'
const TOPICS_DIR = 'Áreas (MOCs)'
const HUBS = {
  'Glossário SAP A-Z': { sub: 'a-z', description: 'Todos os termos, sinônimos e siglas em ordem alfabética' },
  'Siglas SAP': { sub: 'siglas', description: 'Siglas e acrônimos SAP com significado e link para o conceito' },
  'Transações SAP (T-codes)': { sub: 'transacoes', description: 'Transações SAP citadas no glossário, com link para o conceito' }
}
const HOME_NOTE = 'SAP Home'
const RESERVED = new Set(['a-z', 'siglas', 'transacoes', 'temas'])

// Dá rótulos legíveis aos links sem alias que apontam para nomes internos do vault
const readNote = async (...parts) => (await readFile(path.join(VAULT, ...parts), 'utf8'))
  .replace(/\[\[(MOC - ([^\]|\\#]+))\]\]/g, '[[$1|$2]]')
  .replace(/\[\[SAP Home\]\]/g, '[[SAP Home|Glossário SAP]]')
const listNotes = async (dir) => (await readdir(path.join(VAULT, dir))).filter(f => f.endsWith('.md')).sort()
const noteName = (file) => file.replace(/\.md$/, '')
const stripEmoji = (title) => title.replace(/^[^\p{L}\p{N}]+/u, '').trim()
const h1 = (body) => stripEmoji(body.match(/^# (.+)$/m)?.[1] ?? '')
const truncate = (text, max = 250) => (text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text)
const areaTags = (tags = []) => tags.filter(t => t.startsWith('sap/')).map(t => t.replace(/\//g, '-'))

async function main () {
  const termFiles = await listNotes(TERMS_DIR)
  const topicFiles = await listNotes(TOPICS_DIR)

  // 1. Rotas de todas as notas que viram página
  const routes = new Map([[HOME_NOTE, BASE]])
  for (const [name, hub] of Object.entries(HUBS)) routes.set(name, `${BASE}/${hub.sub}`)
  for (const file of topicFiles) {
    routes.set(noteName(file), `${BASE}/temas/${slugify(noteName(file).replace(/^MOC - /, ''))}`)
  }
  const termSlugs = new Map()
  for (const file of termFiles) {
    const slug = slugify(noteName(file))
    if (RESERVED.has(slug)) throw new Error(`Termo "${noteName(file)}" colide com a rota reservada /glossario/${slug}`)
    if (termSlugs.has(slug)) throw new Error(`Termos "${termSlugs.get(slug)}" e "${noteName(file)}" geram o mesmo slug "${slug}"`)
    termSlugs.set(slug, noteName(file))
    routes.set(noteName(file), `${BASE}/${slug}`)
  }
  const resolve = (name) => routes.get(name)
  const pages = []
  const add = (url, data, body) => pages.push({ file: `${url.slice(BASE.length + 1) || 'index'}.md`, data, body })

  // 2. Termos
  let aliasCount = 0
  for (const file of termFiles) {
    const raw = await readNote(TERMS_DIR, file)
    const { data } = parseFrontmatter(raw)
    aliasCount += data.aliases?.length ?? 0
    add(routes.get(noteName(file)), {
      title: noteName(file),
      description: truncate(data.resumo ?? ''),
      tags: ['glossario', ...areaTags(data.tags)]
    }, convertObsidian(raw, { resolve }))
  }

  // 3. Temas (MOCs)
  const topics = []
  for (const file of topicFiles) {
    const raw = await readNote(TOPICS_DIR, file)
    const { data, body } = parseFrontmatter(raw)
    const title = h1(body) || noteName(file).replace(/^MOC - /, '')
    const summary = body.match(/^> \[!info\][^\n]*\n> (.+)$/m)?.[1] ?? ''
    const termCount = (body.split('## 📖 Termos')[1] ?? '').match(/^- \[\[/gm)?.length ?? 0
    const url = routes.get(noteName(file))
    topics.push({ name: noteName(file), title, url, termCount, tags: areaTags(data.tags) })
    add(url, { title: `${title} (tema)`, description: truncate(summary), tags: ['glossario', ...areaTags(data.tags)] },
      convertObsidian(raw, { resolve }))
  }

  // 4. Índices (A-Z, siglas, T-codes), trocando as dicas de uso do Obsidian
  const hubTips = {
    'a-z': `> **${termFiles.length} termos · ${aliasCount} sinônimos e siglas** remetendo ao termo principal.\n> Use a busca do wiki no topo ou **Ctrl+F** nesta página.\n{.is-info}`,
    siglas: '> Use **Ctrl+F** para achar uma sigla. A coluna **Nota** abre o conceito completo.\n{.is-info}'
  }
  for (const [name, hub] of Object.entries(HUBS)) {
    const raw = await readNote(`${name}.md`)
    const withoutObsidianTips = raw.replace(/^> \[!tip\][^\n]*\n(?:>[^\n]*\n)*?(?=(?:>[^\n]*Ctrl\/Cmd))(?:>[^\n]*\n)+\n?/m, '')
    const content = convertObsidian(withoutObsidianTips, { resolve })
    add(routes.get(name), {
      title: h1(parseFrontmatter(raw).body),
      description: hub.description,
      tags: ['glossario']
    }, hubTips[hub.sub] ? `${hubTips[hub.sub]}\n\n${content}` : content)
  }

  // 5. Página inicial do glossário
  const home = await readNote(`${HOME_NOTE}.md`)
  const topicOrder = [...home.matchAll(/\[\[(MOC - [^\]|\\]+)/g)].map(m => m[1])
  topics.sort((a, b) => topicOrder.indexOf(a.name) - topicOrder.indexOf(b.name))
  const trails = home.match(/## 🎓 Trilhas sugeridas\n([\s\S]*?)(?=\n## |$)/)?.[1] ?? ''
  add(BASE, {
    title: 'Glossário SAP',
    description: `${termFiles.length} conceitos SAP com definição, siglas, transações e trilhas de estudo`,
    tags: ['glossario']
  }, [
    '> **O que é isto**',
    `> Base de conceitos SAP para consulta rápida: **${termFiles.length} termos** em **${topics.length} temas**, cada um com definição, sinônimos e siglas, termos relacionados e fontes de estudo.`,
    '{.is-info}',
    '',
    '# Acesso rápido',
    `- [🔤 Glossário A-Z *${HUBS['Glossário SAP A-Z'].description}*](${BASE}/a-z)`,
    `- [🔠 Siglas SAP *${HUBS['Siglas SAP'].description}*](${BASE}/siglas)`,
    `- [⌨️ Transações (T-codes) *${HUBS['Transações SAP (T-codes)'].description}*](${BASE}/transacoes)`,
    '{.links-list}',
    '',
    '# Temas',
    '| Tema | Termos | Tag |',
    '|---|---:|---|',
    ...topics.map(t => `| [${t.title}](${t.url}) | ${t.termCount} | ${t.tags.map(tag => `[#${tag}](/t/${tag})`).join(' ')} |`),
    '',
    '# Trilhas sugeridas',
    convertObsidian(trails.trim(), { resolve }),
    '',
    '# Como usar',
    '- **Busca:** a barra no topo encontra termos, siglas e sinônimos (ex.: `MIGO`, `XSUAA`, `Draft`).',
    '- **Por tema:** clique numa tag (ex.: [#sap-rap](/t/sap-rap)) para listar todos os termos daquele tema.',
    '',
    '> **Conteúdo gerado automaticamente**',
    '> O glossário é mantido fora do wiki e reimportado periodicamente. Edições feitas direto nestas páginas serão sobrescritas na próxima importação. Encontrou um erro? Fale com o time de Arquitetura.',
    '{.is-warning}'
  ].join('\n'))

  // 6. Grava
  await rm(OUT, { recursive: true, force: true })
  for (const page of pages) {
    const target = path.join(OUT, page.file)
    await mkdir(path.dirname(target), { recursive: true })
    await writeFile(target, stringifyFrontmatter(page.data, `${page.body.trim()}\n`))
  }
  console.log(`Glossário gerado em ${path.relative(ROOT, OUT)}: ${termFiles.length} termos, ${topics.length} temas, ${Object.keys(HUBS).length} índices + página inicial (${pages.length} páginas)`)
}

main().catch(err => {
  console.error(err.message)
  process.exit(1)
})
