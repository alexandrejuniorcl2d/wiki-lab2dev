// Converte uma nota Markdown do Obsidian para o Markdown do Wiki.js 2.x.
//
// Cuidados específicos do renderizador do Wiki.js (Admin > Rendering):
// - KaTeX inline ligado: "$batch ... $filter" viraria fórmula, então escapamos "$".
// - Subscrito (supsub) ligado: "~" pode virar subscrito, então escapamos "~" isolado.
// - HTML sanitizado: "<token>" some da página, então viram entidades.
// Nada disso é aplicado dentro de código (inline ou bloco).

import { parseFrontmatter } from './frontmatter.mjs'

const CALLOUT = /^>\s*\[!(\w+)\][-+]?\s*(.*)$/
const FENCE = /^\s*(```|~~~)/
const WIKILINK = /\[\[([^\]|#\\]*)(#[^\]|\\]*)?(?:\\?\|([^\]]*))?\]\]/g
const INLINE_TAG = /(^|[\s(|])#([a-z][\w-]*(?:\/[\w-]+)+)/g

const CALLOUT_CLASS = {
  abstract: 'is-info', summary: 'is-info', tldr: 'is-info', info: 'is-info', note: 'is-info', todo: 'is-info',
  tip: 'is-success', hint: 'is-success', success: 'is-success', check: 'is-success', done: 'is-success',
  important: 'is-warning', warning: 'is-warning', caution: 'is-warning', attention: 'is-warning', question: 'is-warning',
  danger: 'is-danger', error: 'is-danger', bug: 'is-danger', failure: 'is-danger'
}

export function convertObsidian (text, { resolve = () => undefined } = {}) {
  const { body } = parseFrontmatter(text)
  const lines = body.replace(/^\s*# [^\n]*(\n+|$)/, '').split('\n')
  const out = []
  let inFence = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (FENCE.test(line)) {
      inFence = !inFence
      out.push(line)
      continue
    }
    const callout = !inFence && line.match(CALLOUT)
    if (!callout) {
      out.push(inFence ? line : convertInline(line, resolve))
      continue
    }

    const title = callout[2].trim()
    if (title) out.push(`> **${convertInline(title, resolve)}**`)
    while (i + 1 < lines.length && lines[i + 1].startsWith('>')) {
      i++
      out.push(convertInline(lines[i], resolve))
    }
    const cssClass = CALLOUT_CLASS[callout[1].toLowerCase()]
    if (cssClass) out.push(`{.${cssClass}}`)
    if (i + 1 < lines.length && lines[i + 1].trim() !== '') out.push('')
  }

  return out.join('\n')
}

function convertInline (line, resolve) {
  // Índices ímpares do split são trechos de código inline, que ficam intactos
  return line
    .split(/(`+[^`]*?`+)/)
    .map((part, idx) => (idx % 2 ? part : escapeText(convertTags(convertWikilinks(part, resolve)))))
    .join('')
}

function convertWikilinks (text, resolve) {
  return text.replace(WIKILINK, (_, rawTarget, heading, label) => {
    const target = rawTarget.trim()
    const anchor = heading ? `#${anchorSlug(heading.slice(1))}` : ''
    if (!target) return `[${label || heading.slice(1)}](${anchor})`
    const url = resolve(target)
    const text = label || target
    return url ? `[${text}](${url}${anchor})` : text
  })
}

function convertTags (text) {
  return text.replace(INLINE_TAG, (_, before, tag) => {
    const slug = tag.replace(/\//g, '-')
    return `${before}[#${slug}](/t/${slug})`
  })
}

function escapeText (text) {
  return text
    .replace(/(?<!\\)\$/g, '\\$')
    .replace(/(?<![\\~])~(?!~)/g, '\\~')
    .replace(/<([A-Za-z][^<>]*)>/g, (tag, inner) => (inner.includes('://') || /^br\s*\/?$/i.test(inner) ? tag : `&lt;${inner}&gt;`))
}

// Mesmo formato de âncora que o Wiki.js gera (uslug) para títulos simples
function anchorSlug (heading) {
  return heading.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\p{L}\p{N}_-]/gu, '')
}
