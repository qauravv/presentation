/**
 * Act-based visual configuration. The presentation "evolves" through these eras.
 */
export type ActId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

export interface ActConfig {
  id: ActId
  name: string
  /** CSS class for slide container background texture / feel */
  slideClass: string
  /** Emphasis colors for this act */
  accent: string
}

export const acts: Record<ActId, ActConfig> = {
  0: {
    id: 0,
    name: 'Cold Open',
    slideClass: 'bg-black',
    accent: 'ember',
  },
  1: {
    id: 1,
    name: 'Act I–II',
    slideClass: 'bg-bone presentation-canvas',
    accent: 'ember',
  },
  2: {
    id: 2,
    name: 'Act III Evidence',
    slideClass: 'bg-bone presentation-museum',
    accent: 'ember',
  },
  3: {
    id: 3,
    name: 'Act IV Flaw',
    slideClass: 'bg-bone presentation-stripped',
    accent: 'signal-red',
  },
  4: {
    id: 4,
    name: 'Act V–VI',
    slideClass: 'bg-bone presentation-modern',
    accent: 'moss',
  },
  5: {
    id: 5,
    name: 'Act VII Close',
    slideClass: 'bg-obsidian',
    accent: 'ember',
  },
  6: {
    id: 6,
    name: 'Appendix',
    slideClass: 'bg-bone',
    accent: 'slate',
  },
  7: {
    id: 7,
    name: 'Obsidian',
    slideClass: 'bg-obsidian',
    accent: 'ember',
  },
}
