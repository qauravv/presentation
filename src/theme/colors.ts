/**
 * Design system colors from the Dangerous Idea spec.
 * Use these for consistent palette across acts.
 */
export const colors = {
  obsidian: '#0F172A',
  bone: '#FAF9F6',
  ember: '#E07A2F',
  moss: '#2D5A3D',
  slate: '#94A3B8',
  signalRed: '#C53030',
  glacierBlue: '#CBD5E1',
  warmSand: '#F5E6D0',
  black: '#000000',
  white: '#FFFFFF',
} as const

export type ColorKey = keyof typeof colors
