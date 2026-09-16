import { test } from 'node:test'
import assert from 'node:assert/strict'

import { parseFrontmatter, stringifyFrontmatter } from '../lib/frontmatter.mjs'
import { slugify } from '../lib/slug.mjs'
import { convertObsidian } from '../lib/obsidian.mjs'
import { filePathToPagePath, findMisplacedCalloutClasses } from '../lib/content.mjs'

test('slugify remove acentos, pontuação e caixa', () => {
  assert.equal(slugify('ABAP Cloud'), 'abap-cloud')
  assert.equal(slugify('Transações SAP (T-codes)'), 'transacoes-sap-t-codes')
  assert.equal(slugify('SAP BW-4HANA'), 'sap-bw-4hana')
  assert.equal(slugify('  Localização Brasil  '), 'localizacao-brasil')
})

test('parseFrontmatter lê strings, arrays JSON e arrays simples', () => {
  const md = [
    '---',
    'aliases: ["A", "B, C"]',
    'tags: [onboarding, a-preencher]',
    'title: Primeiro dia',
    'description: "Checklist: acessos"',
    '---',
    'corpo'
  ].join('\n')
  const { data, body } = parseFrontmatter(md)
  assert.deepEqual(data, {
    aliases: ['A', 'B, C'],
    tags: ['onboarding', 'a-preencher'],
    title: 'Primeiro dia',
    description: 'Checklist: acessos'
  })
  assert.equal(body, 'corpo')
})

test('parseFrontmatter sem frontmatter devolve o texto inteiro', () => {
  assert.deepEqual(parseFrontmatter('# Oi'), { data: {}, body: '# Oi' })
})

test('stringifyFrontmatter é lido de volta por parseFrontmatter', () => {
  const data = { title: 'CDS: "View"', description: 'a, b', tags: ['glossario', 'sap-cds'] }
  const md = stringifyFrontmatter(data, 'corpo')
  assert.deepEqual(parseFrontmatter(md), { data, body: 'corpo' })
})

test('filePathToPagePath trata index.md como a pasta', () => {
  assert.equal(filePathToPagePath('home.md'), 'home')
  assert.equal(filePathToPagePath('onboarding/index.md'), 'onboarding')
  assert.equal(filePathToPagePath('glossario/temas/abap-rap.md'), 'glossario/temas/abap-rap')
})

test('detecta classe de aviso logo após item de lista (ela iria para o <ul>)', () => {
  const md = ['> **Aviso**', '> - item', '{.is-warning}', '', '> ok', '> 1. item', '>', '> fim', '{.is-info}'].join('\n')
  assert.deepEqual(findMisplacedCalloutClasses(md), [3])
  assert.deepEqual(findMisplacedCalloutClasses(['```', '> - x', '{.is-info}', '```'].join('\n')), [])
})

const resolve = (name) => ({
  RAP: '/glossario/rap',
  'CDS View': '/glossario/cds-view'
})[name]

test('wikilinks viram links do wiki', () => {
  assert.equal(convertObsidian('Veja [[RAP]].', { resolve }), 'Veja [RAP](/glossario/rap).')
  assert.equal(convertObsidian('[[CDS View|CDS views]]', { resolve }), '[CDS views](/glossario/cds-view)')
})

test('wikilink com pipe escapado dentro de tabela', () => {
  assert.equal(
    convertObsidian('| [[CDS View\\|CDS views]] | x |', { resolve }),
    '| [CDS views](/glossario/cds-view) | x |'
  )
})

test('link para título na mesma página vira âncora', () => {
  assert.equal(convertObsidian('[[#A|A]] · [[#0-9|0-9]]', { resolve }), '[A](#a) · [0-9](#0-9)')
})

test('wikilink sem destino no wiki vira texto', () => {
  assert.equal(convertObsidian('- [[Apostila - ABAP RAP]]', { resolve }), '- Apostila - ABAP RAP')
  assert.equal(convertObsidian('[[Inexistente|rótulo]]', { resolve }), 'rótulo')
})

test('callout vira blockquote com classe do Wiki.js', () => {
  const input = ['> [!abstract] Definição', '> Texto.', 'Depois'].join('\n')
  const expected = ['> **Definição**', '> Texto.', '{.is-info}', '', 'Depois'].join('\n')
  assert.equal(convertObsidian(input, { resolve }), expected)
})

test('callout sem título, dobrável e sem cor equivalente', () => {
  assert.equal(
    convertObsidian(['> [!tip]', '> Dica.'].join('\n'), { resolve }),
    ['> Dica.', '{.is-success}'].join('\n')
  )
  assert.equal(
    convertObsidian(['> [!example]- Consultor', '> [[RAP]] → x'].join('\n'), { resolve }),
    ['> **Consultor**', '> [RAP](/glossario/rap) → x'].join('\n')
  )
  assert.equal(
    convertObsidian(['> [!danger] Cuidado', '> x'].join('\n'), { resolve }),
    ['> **Cuidado**', '> x', '{.is-danger}'].join('\n')
  )
})

test('remove frontmatter e o primeiro H1', () => {
  const input = ['---', 'tags: [x]', '---', '# 🗺️ Título', '', '## Seção'].join('\n')
  assert.equal(convertObsidian(input, { resolve }), '## Seção')
})

test('escapa $, ~ e <tag> fora de código, preservando código', () => {
  assert.equal(
    convertObsidian('Use $batch e `$filter` com <token> ~150 ms', { resolve }),
    'Use \\$batch e `$filter` com &lt;token&gt; \\~150 ms'
  )
  const fenced = ['```abap', 'SELECT a~b FROM t INTO @$x.', '```'].join('\n')
  assert.equal(convertObsidian(fenced, { resolve }), fenced)
})

test('tag inline do Obsidian vira link para a página de tag', () => {
  assert.equal(
    convertObsidian('> Tag: #sap/rap · 19 termos', { resolve }),
    '> Tag: [#sap-rap](/t/sap-rap) · 19 termos'
  )
})
