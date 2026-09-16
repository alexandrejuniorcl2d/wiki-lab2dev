import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

// Lê WIKI_URL, WIKI_API_TOKEN e WIKI_LOCALE do ambiente ou do .env na raiz do projeto
export function wikiFromEnv () {
  try {
    process.loadEnvFile(path.join(ROOT, '.env'))
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }
  const token = process.env.WIKI_API_TOKEN
  if (!token) throw new Error('WIKI_API_TOKEN não definido. Crie a chave em Admin > API Access e adicione ao .env.')
  const url = process.env.WIKI_URL ?? 'http://localhost'
  return { url, locale: process.env.WIKI_LOCALE ?? 'pt-br', gql: createClient(url, token) }
}

function createClient (url, token) {
  const endpoint = new URL('/graphql', url).toString()
  return async function gql (query, variables = {}) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ query, variables })
    })
    if (!res.ok) throw new Error(`HTTP ${res.status} em ${endpoint}`)
    const json = await res.json()
    if (json.errors?.length) throw new Error(json.errors.map(e => e.message).join('; '))
    return json.data
  }
}

// Mutations do Wiki.js respondem 200 mesmo quando falham; o erro vem em responseResult
export function assertOk (result, action) {
  const status = result?.responseResult
  if (!status?.succeeded) {
    throw new Error(`${action}: ${status?.message ?? 'sem resposta'} (código ${status?.errorCode ?? '?'})`)
  }
  return result
}

export const RESPONSE = 'responseResult { succeeded errorCode message }'
