import type { DarwinSlideDef } from '../../types'

/** Section 1: Bridge + Frame (3 slides — 3 min) */
export const section1: DarwinSlideDef[] = [
  // ── SLIDE 1.1: Transition From Mariam ──
  {
    id: 'slide-1.1',
    section: 1,
    slideNum: '1.1',
    title: 'Transition From Mariam',
    func: 'BRIDGE',
    template: 'F',
    palette: 'darwin',
    timing: 60,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'You are continuing a conversation running for an hour. Match Mariam\'s energy. Do NOT shift into lecture mode.\nPre-scripted handoff with Mariam: she ends with "Sarthak\'s going to walk us through what he did with all of that." Pick up immediately.',
    content: {
      type: 'F',
      lines: [
        {
          text: 'Darwin had all these observations — variation, geographic patterns, fossils. But observations alone don\'t explain anything.',
          style: 'large',
        },
        {
          text: 'The question Darwin wrestled with for twenty years: what mechanism could produce these patterns?',
          style: 'medium',
        },
        {
          text: 'That\'s what we\'re building now.',
          style: 'italic',
        },
      ],
    },
  },

  // ── SLIDE 1.2: How We'll Work Today ──
  {
    id: 'slide-1.2',
    section: 1,
    slideNum: '1.2',
    title: 'How We\'ll Work Today',
    func: 'FRAME',
    template: 'B',
    palette: 'darwin',
    timing: 45,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'The "no pressure" line is important. Research shows this single cue increases participation from students with different processing speeds or anxiety. Read it aloud, don\'t skip.',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'text',
          text: 'I\'m going to build the argument piece by piece. At a few points I\'ll pause and ask you to think through something in small groups.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'bullets',
          items: [
            'Not to quiz you — some ideas are genuinely tricky',
            'No pressure to have the \'right\' answer',
            'Goal = practice the reasoning',
          ],
          step: 1,
        },
      ],
    },
  },

  // ── SLIDE 1.3: How Science Reasons From Evidence ──
  {
    id: 'slide-1.3',
    section: 1,
    slideNum: '1.3',
    title: 'How Science Reasons From Evidence',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'This pre-empts the circularity objection. One clear sentence here prevents that lens from forming at Section 4. Don\'t spend more than 45 seconds explaining — just plant the seed.',
    content: {
      type: 'B',
      titleBar: 'Convergent Independent Evidence',
      blocks: [
        {
          type: 'text',
          text: 'Multiple separate methods, developed by different researchers, pointing to the same conclusion.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'Mariam showed Darwin\'s observations from different islands, species, continents — all pointing to the same pattern.',
          style: 'normal',
          step: 1,
        },
        {
          type: 'text',
          text: 'Independent means the methods don\'t rely on each other\'s assumptions.',
          style: 'bold',
          step: 2,
        },
      ],
    },
  },
]
