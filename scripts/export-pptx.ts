/**
 * Export presentation slides to PowerPoint (.pptx).
 * Preserves: build steps (one PPT slide per step), fonts (Playfair Display, Inter, JetBrains Mono),
 * and image sizing (contain/cover, no stretch).
 * Run: npm run export:pptx
 * Output: output/The-Dangerous-Idea.pptx
 */
import PptxGenJSModule from 'pptxgenjs'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { mainSlideDefs, appendixDefs } from '../src/slides/index.tsx'

const PptxGenJS = (PptxGenJSModule as { default?: typeof PptxGenJSModule }).default ?? PptxGenJSModule

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')

const SLIDE_W = 13.333
const SLIDE_H = 7.5

const hexToPptx = (hex: string) => (hex || '0F172A').replace(/^#/, '')

function resolveImage(imagePath: string | undefined): string | null {
  if (!imagePath) return null
  const relative = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  const full = path.join(publicDir, relative)
  return fs.existsSync(full) ? full : null
}

type LineLike = { text: string; step?: number; className?: string }
type DefLike = {
  id?: string
  mode: string
  background: string
  image?: string
  backgroundImage?: string
  caption?: string
  imageAsMain?: boolean
  lines: LineLike[]
  speakerNotes?: string
}

function totalSteps(def: DefLike): number {
  return Math.max(0, ...def.lines.map((l) => l.step ?? 0)) + 1
}

function textOptsFromClassName(
  className: string | undefined,
  isDark: boolean
): { fontFace?: string; fontSize: number; color: string } {
  const c = className ?? (isDark ? 'font-playfair text-4xl text-white' : 'font-sans text-2xl text-obsidian')
  const parts = c.split(/\s+/)
  let fontFace: string | undefined
  let fontSize = isDark ? 28 : 20
  let color = isDark ? 'FFFFFF' : '0F172A'

  for (const p of parts) {
    if (p === 'font-playfair') fontFace = 'Playfair Display'
    else if (p === 'font-sans') fontFace = 'Inter'
    else if (p === 'font-mono') fontFace = 'JetBrains Mono'
    else if (p === 'text-7xl') fontSize = 44
    else if (p === 'text-6xl') fontSize = 36
    else if (p === 'text-5xl') fontSize = 32
    else if (p === 'text-4xl') fontSize = 28
    else if (p === 'text-3xl') fontSize = 24
    else if (p === 'text-2xl') fontSize = 20
    else if (p === 'text-base') fontSize = 14
    else if (p === 'text-sm') fontSize = 12
    else if (p === 'text-white') color = 'FFFFFF'
    else if (p === 'text-white/70') color = 'B3B3B3'
    else if (p === 'text-obsidian') color = '0F172A'
    else if (p === 'text-ember') color = 'E07A2F'
    else if (p === 'text-slate' || p === 'text-slate-400') color = '94A3B8'
    else if (p === 'text-slate-300') color = 'CBD5E1'
    else if (p === 'text-slate-500') color = '64748B'
  }

  return { fontFace, fontSize, color }
}

async function main() {
  const pptx = new PptxGenJS()
  pptx.title = 'The Dangerous Idea'
  pptx.author = 'Sarthak G.'
  pptx.subject = "Darwin's Theory of Evolution & the Science That Transformed It"
  pptx.defineLayout({ name: '16:9', width: SLIDE_W, height: SLIDE_H })
  pptx.layout = '16:9'
  pptx.theme = { headFontFace: 'Playfair Display', bodyFontFace: 'Inter' }

  const allDefs: DefLike[] = [...mainSlideDefs, ...appendixDefs]

  for (const def of allDefs) {
    const stepsCount = totalSteps(def)
    const bgHex = hexToPptx(def.background)
    const isDark = def.mode === 'cinematic' || bgHex === '0F172A' || bgHex === '000000'
    const imgPath = resolveImage(def.image)
    const bgImagePath = resolveImage(def.backgroundImage)
    const imageAsMain = def.imageAsMain === true

    if (def.image && !imgPath) {
      console.warn(`Missing slide image for ${def.id ?? 'unknown-id'}: ${def.image}`)
    }
    if (def.backgroundImage && !bgImagePath) {
      console.warn(`Missing background image for ${def.id ?? 'unknown-id'}: ${def.backgroundImage}`)
    }

    for (let stepIndex = 0; stepIndex < stepsCount; stepIndex++) {
      const slide = pptx.addSlide()
      slide.background = { color: bgHex }

      const visibleLines = def.lines.filter((l) => (l.step ?? 0) <= stepIndex)
      const textColor = isDark ? 'FFFFFF' : '0F172A'

      // Keep texture image natural (no stretch).
      if (!imgPath && bgImagePath) {
        slide.addImage({
          path: bgImagePath,
          x: 0,
          y: 0,
          w: SLIDE_W,
          h: SLIDE_H,
          sizing: { type: 'contain', w: SLIDE_W, h: SLIDE_H },
          transparency: 92,
        })
      }

      // Image (same on every step; sizing so it never stretches)
      if (imgPath) {
        if (def.mode === 'cinematic') {
          slide.addImage({
            path: imgPath,
            x: 0,
            y: 0,
            w: SLIDE_W,
            h: SLIDE_H,
            // Keep original aspect ratio (no stretch/crop zoom).
            sizing: { type: 'contain', w: SLIDE_W, h: SLIDE_H },
          })
          // Match cinematic readability treatment from web layout.
          slide.addShape(pptx.ShapeType.rect, {
            x: 0,
            y: 5.5,
            w: SLIDE_W,
            h: 2.0,
            line: { color: '000000', transparency: 100 },
            fill: { color: '000000', transparency: 8 },
          })
        } else if (imageAsMain) {
          slide.addImage({
            path: imgPath,
            x: 0.5,
            y: 0.5,
            w: 12.333,
            h: 4.5,
            sizing: { type: 'contain', w: 12.333, h: 4.5 },
          })
        } else {
          slide.addImage({
            path: imgPath,
            x: 0.5,
            y: 0.3,
            w: 12.333,
            h: 2.8,
            sizing: { type: 'contain', w: 12.333, h: 2.8 },
          })
        }
      }

      // Text: only lines visible at this step, with per-line font/size/color
      if (visibleLines.length > 0) {
        const y = def.mode === 'cinematic' ? 5.5 : imageAsMain ? 5.2 : imgPath ? 3.4 : 1.5
        const h = imageAsMain ? 1.8 : imgPath && !imageAsMain ? 3.5 : 4.5
        const align = def.mode === 'impact' && !imgPath ? 'center' : 'left'
        const valign = def.mode === 'impact' && !imgPath ? 'middle' : 'top'

        const runs: { text: string; options: { fontFace?: string; fontSize: number; color: string } }[] = []
        for (let i = 0; i < visibleLines.length; i++) {
          const line = visibleLines[i]!
          const opts = textOptsFromClassName(line.className, isDark)
          runs.push({
            text: line.text,
            options: { fontFace: opts.fontFace, fontSize: opts.fontSize, color: opts.color },
          })
          if (i < visibleLines.length - 1) runs.push({ text: '\n', options: { fontSize: opts.fontSize, color: opts.color } })
        }

        slide.addText(runs, {
          x: 0.5,
          y,
          w: 12.333,
          h,
          align,
          valign,
        })
      }

      if (def.caption) {
        slide.addText(def.caption, {
          x: 0.5,
          y: imageAsMain ? 6.85 : imgPath ? 6.95 : 6.9,
          w: 12.333,
          h: 0.35,
          fontFace: 'Inter',
          fontSize: 11,
          color: isDark ? '94A3B8' : '64748B',
          align: 'left',
          valign: 'top',
        })
      }

      if (def.speakerNotes) {
        slide.addNotes(def.speakerNotes)
      }
    }
  }

  const outDir = path.join(rootDir, 'output')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
  const outPath = path.join(outDir, 'The-Dangerous-Idea.pptx')
  await pptx.writeFile({ fileName: outPath })
  console.log('Written:', outPath)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
