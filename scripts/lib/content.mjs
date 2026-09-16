import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

import { parseFrontmatter } from './frontmatter.mjs'

// content/onboarding/index.md -> "onboarding"; content/glossario/rap.md -> "glossario/rap"
export function filePathToPagePath (relativeFile) {
  return relativeFile
    .split(path.sep).join('/')
    .replace(/\.md$/, '')
    .replace(/(^|\/)index$/, '')
}

// No Wiki.js, "{.is-warning}" logo após um item de lista dentro de citação vai
// para o <ul>, não para o <blockquote>, e o aviso perde a cor. A citação precisa
// terminar em parágrafo. Retorna as linhas (1-based) com esse problema.
export function findMisplacedCalloutClasses (markdown) {
  const lines = markdown.split('\n')
  const found = []
  let inFence = false
  lines.forEach((line, i) => {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
    if (!inFence && i > 0 && /^\{\.is-/.test(line) && /^>\s*([-*+]|\d+\.)\s/.test(lines[i - 1])) found.push(i + 1)
  })
  return found
}

export async function loadContent (rootDir) {
  const files = (await readdir(rootDir, { recursive: true }))
    .filter(file => file.endsWith('.md'))
    .sort()

  const pages = []
  for (const file of files) {
    const { data, body } = parseFrontmatter(await readFile(path.join(rootDir, file), 'utf8'))
    const pagePath = filePathToPagePath(file)
    if (!pagePath) throw new Error(`${file}: use home.md para a página inicial`)
    if (!data.title) throw new Error(`${file}: frontmatter sem "title"`)
    const misplaced = findMisplacedCalloutClasses(body)
    if (misplaced.length) {
      throw new Error(`${file}: aviso termina em lista antes de "{.is-...}" (linhas ${misplaced.join(', ')} do corpo). Termine a citação com um parágrafo.`)
    }
    pages.push({
      file,
      path: pagePath,
      title: data.title,
      description: data.description ?? '',
      tags: data.tags ?? [],
      content: `${body.trim()}\n`
    })
  }
  return pages
}
