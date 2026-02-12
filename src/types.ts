import type { ComponentType } from 'react'
import type { ActId } from './theme/acts'

export type SlideMode = 'cinematic' | 'teaching' | 'impact'

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
  /** For audience-interaction slides (show of hands, etc.) */
  interactionHint?: string
}
