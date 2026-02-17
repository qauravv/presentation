import type { DarwinSlideDef } from '../../types'

/** Section 6: Closing + Q&A + Exit Tickets (8 slides — 10 min) */
export const section6: DarwinSlideDef[] = [
  // ── SLIDE 6.1: The Unity of Life ──
  {
    id: 'slide-6.1',
    section: 6,
    slideNum: '6.1',
    title: 'The Unity of Life',
    func: 'EVIDENCE',
    template: 'B',
    palette: 'resolution',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'Framing as prediction test: "What would separate creation vs common descent predict?" Reinforces reasoning framework from Section 1.',
    content: {
      type: 'B',
      titleBar: 'One Final Piece',
      blocks: [
        {
          type: 'text',
          text: 'Nearly every living cell — bacteria, oak trees, jellyfish, humans — uses the same basic genetic code.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'Same molecule (DNA), same codon-to-amino-acid translation.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'If separately designed: no reason for identical machinery. If common ancestor: exactly what you\'d predict.',
          style: 'bold',
          step: 1,
        },
        {
          type: 'text',
          text: 'The code itself is evidence.',
          style: 'bold',
          step: 2,
        },
      ],
    },
  },

  // ── SLIDE 6.2: What Evolution Does — and Doesn't — Explain ──
  {
    id: 'slide-6.2',
    section: 6,
    slideNum: '6.2',
    title: 'What Evolution Does — and Doesn\'t — Explain',
    func: 'FRAME',
    template: 'B',
    palette: 'resolution',
    timing: 45,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'Brief and honest. Don\'t over-explain. Acknowledging limits actually strengthens credibility.',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'text',
          text: 'Evolutionary theory explains the diversity and adaptation of life.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'It does not explain the origin of life itself. That is a separate field — abiogenesis.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'Acknowledging a theory\'s scope is a strength, not a weakness.',
          style: 'italic',
          step: 1,
        },
      ],
    },
  },

  // ── SLIDE 6.3: The Core Insight ──
  {
    id: 'slide-6.3',
    section: 6,
    slideNum: '6.3',
    title: 'The Core Insight',
    func: 'CONCEPT',
    template: 'E',
    palette: 'resolution',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Progress narrative: final correction. "There is no ladder of progress, no predetermined endpoint." The visual does the heavy lifting.\nTracker cross-off #3.',
    content: {
      type: 'E',
      title: 'The Core Insight',
      visualDescription: 'Side-by-side: Ladder (red ✘) vs. Branching Tree (green ✓)',
      panels: [
        {
          title: '✘ LADDER',
          description:
            'Linear: bacteria → fish → mammals → humans. "This is wrong."',
        },
        {
          title: '✓ BRANCHING TREE',
          description:
            'Multiple branches, diverse endpoints at same level. "This is accurate."',
        },
      ],
      caption:
        'No ladder. No endpoint. No species more \'evolved\' than another.\nA tree of extraordinary diversity, produced by a process that has no author.',
    },
  },

  // ── SLIDE 6.4: Callback ──
  {
    id: 'slide-6.4',
    section: 6,
    slideNum: '6.4',
    title: 'Callback',
    func: 'RESOLUTION',
    template: 'F',
    palette: 'resolution',
    timing: 60,
    compressionTag: 'NEVER_CUT',
    showMiniFlowchart: false,
    speakerNotes:
      'This creates the complete arc. Mariam opened with these words before the audience understood the mechanism. You close with them after they do. The quote lands differently.\nJust the final phrase — don\'t re-read the whole paragraph.\nSlow. Let the quote land. Pause after "machinery behind that sentence." Then: "Variation. Inheritance. Selection. Time." — each word gets its own beat.\n🔴 NEVER CUT under any circumstances.',
    content: {
      type: 'F',
      lines: [
        {
          text: '…endless forms most beautiful and most wonderful have been, and are being, evolved.',
          style: 'large',
        },
        {
          text: 'Now you know the machinery: variation, inheritance, selection, time.',
          style: 'medium',
        },
      ],
      specialBg: 'watermark-callback',
    },
  },

  // ── SLIDE 6.5: Q&A Prompt ──
  {
    id: 'slide-6.5',
    section: 6,
    slideNum: '6.5',
    title: 'Q&A Prompt',
    func: 'FRAME',
    template: 'F',
    palette: 'resolution',
    timing: 180,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'After 1–2 responses, shift: "Now: what\'s still fuzzy?" If silent: "Is the randomness distinction clear? Variation arising vs selection sorting?"',
    content: {
      type: 'F',
      lines: [
        {
          text: 'What\'s one idea from today — Mariam\'s section or mine — that felt counterintuitive or surprising?',
          style: 'large',
        },
        {
          text: 'Something that didn\'t match what you expected coming in.',
          style: 'medium',
        },
      ],
    },
  },

  // ── SLIDE 6.6: Fallback Q&A Prompt ──
  {
    id: 'slide-6.6',
    section: 6,
    slideNum: '6.6',
    title: 'Fallback Q&A Prompt',
    func: 'FRAME',
    template: 'B',
    palette: 'resolution',
    timing: 120,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Only advance to this slide if silence after 6.5. Otherwise stay on 6.5 during live Q&A.\n⚠ EMERGENCY: Drop. Say verbally: "Is the randomness distinction clear?"',
    verbalBackup: 'Is the randomness distinction clear?',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'text',
          text: 'For example —',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'Is the randomness distinction clear?',
          style: 'large-bold',
          step: 0,
        },
        {
          type: 'text',
          text: 'The difference between variation arising and selection sorting?',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'If that\'s still fuzzy, great thing to ask about.',
          style: 'italic',
          step: 0,
        },
      ],
    },
  },

  // ── SLIDE 6.7: Exit Tickets ──
  {
    id: 'slide-6.7',
    section: 6,
    slideNum: '6.7',
    title: 'Exit Tickets',
    func: 'FRAME',
    template: 'B',
    palette: 'resolution',
    timing: 120,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Anonymous exit tickets capture 3–4x more genuine confusion than public Q&A. They give patterns for follow-up. Students who wouldn\'t speak get heard.\nLeave slide visible 60–90 sec while students write.\n🔴 ALL DECKS — NEVER CUT',
    content: {
      type: 'B',
      titleBar: 'Before You Go',
      blocks: [
        {
          type: 'text',
          text: 'On the half-sheet of paper — no names:',
          style: 'normal',
          step: 0,
        },
        {
          type: 'bullets',
          items: [
            'One idea from today that made sense',
            'One question you still have',
            '(Optional) One idea you want to think about more',
          ],
          step: 0,
        },
        {
          type: 'text',
          text: 'Collect as you leave.',
          style: 'bold',
          step: 1,
        },
      ],
    },
  },

  // ── SLIDE 6.8: Misconception Tracker Summary ──
  {
    id: 'slide-6.8',
    section: 6,
    slideNum: '6.8',
    title: 'Misconception Tracker Summary',
    func: 'RESOLUTION',
    template: 'B',
    palette: 'resolution',
    timing: 30,
    compressionTag: 'OPTIONAL',
    showMiniFlowchart: false,
    speakerNotes:
      'This makes the learning arc visible. Students see their conceptual journey. Creates satisfying closure.\n🟠 OPTIONAL: Skip in Deck C. Gesture to physical poster: "Look at the poster — we tackled all six."',
    verbalBackup: 'Gesture to physical poster: \'Look at the poster — we tackled all six.\'',
    content: {
      type: 'B',
      titleBar: 'Look — We Tackled All of These.',
      blocks: [
        {
          type: 'checklist',
          items: [
            { text: 'Organisms evolve because they need to' },
            { text: 'Evolution is completely random' },
            { text: 'Evolution = progress' },
            { text: 'Small ≠ big changes' },
            { text: 'Fittest = strongest' },
            { text: 'Eye too complex' },
          ],
          step: 0,
        },
        {
          type: 'text',
          text: 'Any still feel unresolved?',
          style: 'italic',
          step: 1,
        },
      ],
    },
  },
]
