// Frontmatter YAML mínimo: uma chave por linha, com valor string, string JSON
// ou array (JSON ou [a, b]). Cobre os arquivos de content/ e as notas do vault.

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/

export function parseFrontmatter (text) {
  const match = text.match(FRONTMATTER)
  if (!match) return { data: {}, body: text }

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const sep = line.indexOf(':')
    if (sep < 1 || /^\s/.test(line)) continue
    data[line.slice(0, sep).trim()] = parseValue(line.slice(sep + 1).trim())
  }
  return { data, body: text.slice(match[0].length) }
}

function parseValue (raw) {
  if (raw.startsWith('[') || raw.startsWith('"')) {
    try {
      return JSON.parse(raw)
    } catch {}
  }
  if (raw.startsWith('[') && raw.endsWith(']')) {
    return raw.slice(1, -1).split(',').map(item => item.trim()).filter(Boolean)
  }
  return raw
}

export function stringifyFrontmatter (data, body) {
  const lines = Object.entries(data).map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
  return `---\n${lines.join('\n')}\n---\n${body}`
}
