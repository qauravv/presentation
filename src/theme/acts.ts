/**
 * Section-based visual configuration for the Darwin presentation.
 * Maps sections 1–6 to their palette and heading font.
 */
export type ActId = 1 | 2 | 3 | 4 | 5 | 6

export type PaletteMode = 'darwin' | 'modern' | 'resolution' | 'checkpoint'

export interface ActConfig {
  id: ActId
  name: string
  palette: PaletteMode
  headingFont: 'serif' | 'sans'
  /** Kept for engine backward compat */
  slideClass: string
  accent: string
}

export const acts: Record<ActId, ActConfig> = {
  1: {
    id: 1,
    name: 'Bridge + Frame',
    palette: 'darwin',
    headingFont: 'serif',
    slideClass: 'bg-darwin-cream',
    accent: 'darwin-amber',
  },
  2: {
    id: 2,
    name: "Darwin's Logic",
    palette: 'darwin',
    headingFont: 'serif',
    slideClass: 'bg-darwin-cream',
    accent: 'darwin-amber',
  },
  3: {
    id: 3,
    name: 'The Eye',
    palette: 'darwin',
    headingFont: 'serif',
    slideClass: 'bg-darwin-cream',
    accent: 'darwin-amber',
  },
  4: {
    id: 4,
    name: 'The Evidence',
    palette: 'darwin',
    headingFont: 'serif',
    slideClass: 'bg-darwin-cream',
    accent: 'darwin-amber',
  },
  5: {
    id: 5,
    name: 'Inheritance',
    palette: 'modern',
    headingFont: 'sans',
    slideClass: 'bg-modern-cool-white',
    accent: 'modern-teal',
  },
  6: {
    id: 6,
    name: 'Close',
    palette: 'resolution',
    headingFont: 'serif',
    slideClass: 'bg-darwin-cream',
    accent: 'uni-gold',
  },
}
