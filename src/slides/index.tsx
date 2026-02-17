import type { SlideConfig, SlideProps, DarwinSlideDef, TemplateBContent, TemplateCContent, TemplateEContent, TemplateFContent, DeckVersion, CompressionTag } from '../types'
import { section1 } from './data/section1'
import { section2 } from './data/section2'
import { section3 } from './data/section3'
import { section4 } from './data/section4'
import { section5 } from './data/section5'
import { section6 } from './data/section6'
import { TemplateA } from './templates/TemplateA'
import { TemplateB } from './templates/TemplateB'
import { TemplateC } from './templates/TemplateC'
import { TemplateD } from './templates/TemplateD'
import { TemplateE } from './templates/TemplateE'
import { TemplateF } from './templates/TemplateF'

/* ── All 46 Darwin slide definitions ── */

const allDarwinSlides: DarwinSlideDef[] = [
  ...section1,
  ...section2,
  ...section3,
  ...section4,
  ...section5,
  ...section6,
]

/* ── Template component map ── */

const templateComponents: Record<
  string,
  React.ComponentType<{ def: DarwinSlideDef; step: number }>
> = {
  A: TemplateA,
  B: TemplateB,
  C: TemplateC,
  D: TemplateD,
  E: TemplateE,
  F: TemplateF,
}

/* ── Compute total build steps from content ── */

function computeTotalSteps(def: DarwinSlideDef): number {
  if (def.id === 'slide-2.2') return 6
  if (def.id === 'slide-3.3' || def.id === 'slide-6.3') return 1
  if (def.id === 'slide-6.4') return 4

  /* Section 4 custom-treated slides */
  if (def.id === 'slide-4.1') return 3  // text → arrows → key phrase
  if (def.id === 'slide-4.2') return 2  // strat column → prediction callout + bold text
  if (def.id === 'slide-4.4') return 3  // quote → rabbit → 160+ years
  if (def.id === 'slide-4.5') return 2  // bio track → physics track + callback
  if (def.id === 'slide-4.6') return 1  // both panels appear together
  if (def.id === 'slide-4.7') return 3  // text → scale visual → punchline
  if (def.id === 'slide-4.9') return 1  // capture cards appear

  const content = def.content

  switch (content.type) {
    case 'A':
      return 1

    case 'B': {
      const bc = content as TemplateBContent
      let maxStep = 0
      for (const block of bc.blocks) {
        const s = 'step' in block ? (block.step ?? 0) : 0
        if (s > maxStep) maxStep = s
      }
      return maxStep + 1
    }

    case 'C': {
      const cc = content as TemplateCContent
      if (cc.checkpointReveal?.isOpenEnded) return 1
      return cc.checkpointReveal ? 3 : 1
    }

    case 'D':
      return 3

    case 'E': {
      const ec = content as TemplateEContent
      let steps = 1
      if (ec.panels && ec.panels.length > 1) steps = 2
      if (ec.caption) steps = Math.max(steps, ec.panels ? 3 : 2)
      return steps
    }

    case 'F': {
      const fc = content as TemplateFContent
      return fc.lines.length > 1 ? 2 : 1
    }
  }
}

/* ── Build SlideConfig from DarwinSlideDef ── */

export function buildDarwinSlide(def: DarwinSlideDef): SlideConfig {
  const TemplateComponent = templateComponents[def.template]!
  const totalSteps = computeTotalSteps(def)

  const component = ({ step, isActive }: SlideProps) => (
    <TemplateComponent def={def} step={isActive ? step : 0} />
  )

  return {
    id: def.id,
    title: def.title,
    mode: 'teaching',
    background: '#FAF9F6',
    totalSteps,
    component,
    speakerNotes: def.speakerNotes,
    act: def.section,
    palette: def.palette,
    compressionTag: def.compressionTag,
  }
}

/* ── Deck compression filter ── */

const DECK_C_CUT_TAGS: CompressionTag[] = ['CUT1', 'CUT2', 'CUT3', 'OPTIONAL']
const EMERGENCY_REMOVE_IDS = ['slide-3.7', 'slide-6.6']

export function filterSlidesByDeck(
  defs: DarwinSlideDef[],
  deck: DeckVersion
): DarwinSlideDef[] {
  if (deck === 'A' || deck === 'B') return defs.slice()

  const filtered: DarwinSlideDef[] = []

  for (const d of defs) {
    let shouldCut = false

    if (deck === 'C' || deck === 'EMERGENCY') {
      if (DECK_C_CUT_TAGS.includes(d.compressionTag)) shouldCut = true
    }

    if (deck === 'EMERGENCY') {
      if (EMERGENCY_REMOVE_IDS.includes(d.id)) shouldCut = true
    }

    if (shouldCut) {
      if (d.verbalBackup && d.verbalBackup.length > 0 && filtered.length > 0) {
        const prev = filtered[filtered.length - 1]!
        filtered[filtered.length - 1] = {
          ...prev,
          speakerNotes:
            prev.speakerNotes +
            '\n\n📋 VERBAL BACKUP (cut slide ' +
            d.slideNum +
            '): ' +
            d.verbalBackup,
        } as DarwinSlideDef
      }
    } else {
      filtered.push(Object.assign({}, d))
    }
  }

  return filtered
}

/* ── Exports (compatible with engine + PPTX script) ── */

export const darwinSlideDefs = allDarwinSlides
export const mainSlideDefs = allDarwinSlides
export const appendixDefs: DarwinSlideDef[] = []

export const mainSlides: SlideConfig[] = allDarwinSlides.map(buildDarwinSlide)
export const appendixSlides: SlideConfig[] = []
export const slides: SlideConfig[] = [...mainSlides, ...appendixSlides]
