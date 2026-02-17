import type { ComponentType } from 'react'
import type { ActId, PaletteMode } from './theme/acts'

/* ── Engine Types (backward compat) ── */

export type SlideMode = 'cinematic' | 'teaching' | 'impact'

export type DeckVersion = 'A' | 'B' | 'C' | 'EMERGENCY'

export interface SlideProps {
  step: number
  isActive: boolean
}

export interface SlideConfig {
  id: string
  mode: SlideMode
  background: string
  totalSteps: number
  component: ComponentType<SlideProps>
  speakerNotes: string
  act: ActId
  interactionHint?: string
  /** Palette for data-palette attribute */
  palette?: PaletteMode
  /** Compression tag for presenter view */
  compressionTag?: CompressionTag
}

/* ── Darwin Presentation Types ── */

export type SlideFunction =
  | 'ANCHOR'
  | 'BRIDGE'
  | 'CONCEPT'
  | 'EXAMPLE'
  | 'EVIDENCE'
  | 'CHECKPOINT'
  | 'INTERVENTION'
  | 'RESOLUTION'
  | 'FRAME'

export type TemplateType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

export type CompressionTag =
  | 'CORE'
  | 'CUT1'
  | 'CUT2'
  | 'CUT3'
  | 'NEVER_CUT'
  | 'OPTIONAL'

/* ── Content Block Types (for Template B) ── */

export interface TextBlock {
  type: 'text'
  text: string
  style?: 'normal' | 'bold' | 'italic' | 'large' | 'small' | 'muted' | 'large-bold' | 'centered-large'
  step?: number
}

export interface BulletsBlock {
  type: 'bullets'
  items: string[]
  ordered?: boolean
  step?: number
}

export interface NumberedGroupBlock {
  type: 'numberedGroup'
  groups: { number: string; title: string; items: string[] }[]
  step?: number
}

export interface QuoteBlock {
  type: 'quote'
  text: string
  attribution?: string
  boxed?: boolean
  step?: number
}

export interface NegationBlock {
  type: 'negation'
  items: string[]
  step?: number
}

export interface TwoColumnBlock {
  type: 'twoColumn'
  left: { heading: string; items: string[]; color: 'red' | 'green' }
  right: { heading: string; items: string[]; color: 'red' | 'green' }
  centerArrow?: string
  step?: number
}

export interface RevealBlock {
  type: 'reveal'
  items: { label: string; text: string; correct: boolean; emphasis?: boolean }[]
  bottomLine?: string
  step?: number
}

export interface SplitBlock {
  type: 'split'
  left: { heading: string; items: string[] }
  right: { heading: string; items: string[] }
  step?: number
}

export interface ChecklistBlock {
  type: 'checklist'
  items: { text: string }[]
  step?: number
}

export interface KeyPhraseBlock {
  type: 'keyPhrase'
  text: string
  highlight?: 'gold' | 'green' | 'red' | 'accent'
  step?: number
}

export interface FootnoteBlock {
  type: 'footnote'
  text: string
}

export interface ScaleBlock {
  type: 'scale'
  left: { label: string; value: string }
  right: { label: string; value: string }
  step?: number
}

export type ContentBlock =
  | TextBlock
  | BulletsBlock
  | NumberedGroupBlock
  | QuoteBlock
  | NegationBlock
  | TwoColumnBlock
  | RevealBlock
  | SplitBlock
  | ChecklistBlock
  | KeyPhraseBlock
  | FootnoteBlock
  | ScaleBlock

/* ── Template Content Types ── */

export interface TemplateAContent {
  type: 'A'
  sectionNumber: number
  title: string
  preview: string
}

export interface TemplateBContent {
  type: 'B'
  titleBar?: string
  blocks: ContentBlock[]
}

export interface TemplateCContent {
  type: 'C'
  question: string
  subQuestions?: string[]
  quotes?: { speaker: string; text: string }[]
  formatInstructions?: string
  processingCue?: string
  /** Checkpoint reveal data for 3-state machine */
  checkpointReveal?: {
    items?: { label: string; text: string; correct: boolean }[]
    bottomLine?: string
    isOpenEnded?: boolean
  }
}

export interface TemplateDContent {
  type: 'D'
  question: string
  options: { label: string; text: string; isCorrect?: boolean; explanation?: string; emphasis?: boolean }[]
  processingCue?: string
  formatInstructions?: string
  /** Closing line that fades in after reveal */
  closingLine?: string
}

export interface TemplateEContent {
  type: 'E'
  title?: string
  visualDescription: string
  panels?: { title: string; description: string }[]
  caption?: string
}

export interface TemplateFContent {
  type: 'F'
  lines: { text: string; style?: 'large' | 'medium' | 'small' | 'italic' }[]
  specialBg?: 'gradient-transition' | 'watermark-callback'
}

export type SlideContent =
  | TemplateAContent
  | TemplateBContent
  | TemplateCContent
  | TemplateDContent
  | TemplateEContent
  | TemplateFContent

/* ── Darwin Slide Definition ── */

export interface DarwinSlideDef {
  id: string
  section: 1 | 2 | 3 | 4 | 5 | 6
  slideNum: string
  title: string
  func: SlideFunction
  template: TemplateType
  palette: PaletteMode
  timing: number
  compressionTag: CompressionTag
  showMiniFlowchart: boolean
  speakerNotes: string
  content: SlideContent
  /** Verbal backup script when this slide is cut from a compressed deck */
  verbalBackup?: string
}
