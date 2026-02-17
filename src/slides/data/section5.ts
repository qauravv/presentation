import type { DarwinSlideDef } from '../../types'

/** Section 5: The Missing Piece — Inheritance (7 slides — 9 min) */
export const section5: DarwinSlideDef[] = [
  // ── SLIDE 5.1: Temporal Transition ──
  {
    id: 'slide-5.1',
    section: 5,
    slideNum: '5.1',
    title: 'Temporal Transition',
    func: 'BRIDGE',
    template: 'F',
    palette: 'modern',
    timing: 45,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Explicit transition. The palette shift is the visual cue that "we\'re moving forward in time." From this point: Modern palette (teal, cool blue, sans-serif).',
    content: {
      type: 'F',
      lines: [
        {
          text: 'Everything so far has been Darwin\'s argument using ideas available in his time.',
          style: 'large',
        },
        { text: 'Now we move forward.', style: 'medium' },
        {
          text: 'Darwin had a serious problem he couldn\'t solve — and the solution existed in his lifetime, but he never saw it.',
          style: 'medium',
        },
      ],
      specialBg: 'gradient-transition',
    },
  },

  // ── SLIDE 5.2: The Problem: Blending Inheritance ──
  {
    id: 'slide-5.2',
    section: 5,
    slideNum: '5.2',
    title: 'The Problem: Blending Inheritance',
    func: 'CONCEPT',
    template: 'B',
    palette: 'modern',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'The paint metaphor makes the problem concrete. Students should feel the genuine difficulty: "How can selection work if variation dissolves?"',
    content: {
      type: 'B',
      titleBar: 'Darwin\'s Unsolved Problem',
      blocks: [
        {
          type: 'text',
          text: 'In Darwin\'s era, traits were assumed to blend like mixing paint: tall + short = medium.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'If blending is true, any beneficial new variant gets halved each generation. Within a few generations, it dissolves.',
          style: 'bold',
          step: 1,
        },
        {
          type: 'text',
          text: 'Selection requires variation to persist. Blending destroys it.',
          style: 'normal',
          step: 1,
        },
        {
          type: 'text',
          text: 'Fleeming Jenkin pointed this out in 1867. Darwin had no adequate answer.',
          style: 'italic',
          step: 2,
        },
      ],
    },
  },

  // ── SLIDE 5.3: Mendel's Solution: Particulate Inheritance ──
  {
    id: 'slide-5.3',
    section: 5,
    slideNum: '5.3',
    title: 'Mendel\'s Solution: Particulate Inheritance',
    func: 'CONCEPT',
    template: 'E',
    palette: 'modern',
    timing: 90,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      '"Think of it like instruction cards. A plant inherits one card for red flowers and one for white. It doesn\'t blend them into pink ink. It carries both, expresses one, and can pass either — intact — to offspring."',
    content: {
      type: 'E',
      title: 'Mendel\'s Solution: Particulate Inheritance',
      visualDescription: 'Two-panel comparison: Blending vs. Particulate',
      panels: [
        {
          title: '✘ BLENDING',
          description:
            'Paint mixing → average. Variation dissolves. "Darwin\'s problem."',
        },
        {
          title: '✓ PARTICULATE',
          description:
            'Discrete cards passed intact. Masked in one generation, reappear in next. "Mendel\'s solution."',
        },
      ],
      caption:
        'Variation is preserved, not diluted. This is exactly what natural selection requires.',
    },
  },

  // ── SLIDE 5.4: The Missed Connection ──
  {
    id: 'slide-5.4',
    section: 5,
    slideNum: '5.4',
    title: 'The Missed Connection',
    func: 'CONCEPT',
    template: 'B',
    palette: 'modern',
    timing: 30,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'Brief. The timeline tells the story. Let students feel the irony: the answer existed and was missed.',
    content: {
      type: 'B',
      titleBar: 'One of the Great Near-Misses in Science',
      blocks: [
        {
          type: 'bullets',
          items: [
            '1856–1863: Mendel\'s experiments',
            '1866: Mendel publishes',
            '1867: Jenkin\'s critique of Darwin',
            '1882: Darwin dies',
          ],
          ordered: true,
          step: 0,
        },
        {
          type: 'text',
          text: 'Mendel published one year before Jenkin\'s critique. Darwin almost certainly did not appreciate its significance. Both died without the connection being made.',
          style: 'normal',
          step: 1,
        },
      ],
    },
  },

  // ── SLIDE 5.5: The Modern Synthesis ──
  {
    id: 'slide-5.5',
    section: 5,
    slideNum: '5.5',
    title: 'The Modern Synthesis',
    func: 'CONCEPT',
    template: 'B',
    palette: 'modern',
    timing: 60,
    compressionTag: 'CUT1',
    showMiniFlowchart: true,
    verbalBackup: 'In the 1920s–40s, mathematicians formally showed Darwinian selection on Mendelian inheritance produces exactly the patterns Darwin described.',
    speakerNotes:
      '🟡 CUT 1 applied: single slide. If running ahead (Scenario A), expand: "Researchers including Fisher, Haldane, Wright, and Dobzhansky formally united Darwinian selection with Mendelian genetics."',
    content: {
      type: 'B',
      titleBar: 'Two Halves, Joined',
      blocks: [
        {
          type: 'text',
          text: 'In the 1920s–1940s, mathematicians and biologists formally showed that Darwinian selection operating on Mendelian inheritance produces exactly the patterns of adaptation Darwin described.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'Variation arises through mutation and recombination (undirected). Sorted by differential reproduction (non-random, environment-biased).',
          style: 'bold',
          step: 1,
        },
        {
          type: 'keyPhrase',
          text: 'Undirected input, environmentally biased output.',
          highlight: 'accent',
          step: 2,
        },
      ],
    },
  },

  // ── SLIDE 5.6: Diagnostic: The Sophisticated Trap ──
  {
    id: 'slide-5.6',
    section: 5,
    slideNum: '5.6',
    title: 'Diagnostic: The Sophisticated Trap',
    func: 'CHECKPOINT',
    template: 'D',
    palette: 'checkpoint',
    timing: 135,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'MOST IMPORTANT CHECKPOINT. Silent individual commit first: 45s write letter on paper. Then pair discuss: 90s. Walk the room during silent commit. Note how many choose B — this is your diagnostic data.\n"Notice how many chose B. Let\'s see why it\'s tempting but wrong."\n🔴 ALL DECKS — NEVER CUT',
    content: {
      type: 'D',
      question: 'Which statement is consistent with what we\'ve described today?',
      options: [
        {
          label: 'A',
          text: 'Organisms evolve traits because they need them.',
          isCorrect: false,
          explanation: '"Need-based" reasoning. Teleological — variation is not a response to need.',
        },
        {
          label: 'B',
          text: 'Random mutations create variation; natural selection then directs organisms toward optimal adaptations.',
          isCorrect: false,
          explanation: '\'Directs toward optimal\' smuggles in teleology. Selection doesn\'t DIRECT toward anything — it filters based on current conditions, imperfectly.',
          emphasis: true,
        },
        {
          label: 'C',
          text: 'Organisms with traits that happen to correlate with higher reproduction in their environment leave more offspring, shifting the population over time.',
          isCorrect: true,
          explanation: '"Happen to correlate" + "in their environment" = no teleology, context-dependent.',
        },
        {
          label: 'D',
          text: 'Evolution always moves organisms toward greater complexity.',
          isCorrect: false,
          explanation: '"Progress narrative." Parasites that lost organs are as evolved as mammals.',
        },
      ],
      closingLine: 'If you chose B, you\'re in good company — it\'s designed to be tempting.',
      processingCue: 'This one is tricky on purpose. Take your time.',
      formatInstructions:
        'Silent individual commit: Write the letter of ONE answer. Don\'t discuss yet.',
    },
  },

  // ── SLIDE 5.7: Diagnostic Reveal ──
  {
    id: 'slide-5.7',
    section: 5,
    slideNum: '5.7',
    title: 'Diagnostic Reveal',
    func: 'CHECKPOINT',
    template: 'B',
    palette: 'modern',
    timing: 90,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      '"This is one of the most important learning moments in the seminar." Don\'t rush. Linger on Option B. Let students sit with the distinction between "sorting" and "directing toward."\nClosing line normalizes the error: "It\'s designed to be tempting."\n🔴 ALL DECKS — NEVER CUT',
    content: {
      type: 'B',
      titleBar: 'ANSWER: Only C',
      blocks: [
        {
          type: 'reveal',
          items: [
            {
              label: 'A',
              text: '"Need-based" reasoning. Teleological — variation is not a response to need.',
              correct: false,
            },
            {
              label: 'B',
              text: '\'Directs toward optimal\' smuggles in teleology. Selection doesn\'t DIRECT toward anything — it filters based on current conditions, imperfectly.',
              correct: false,
              emphasis: true,
            },
            {
              label: 'D',
              text: '"Progress narrative." Parasites that lost organs are as evolved as mammals.',
              correct: false,
            },
            {
              label: 'C',
              text: 'Correct. "Happen to correlate" + "in their environment" = no teleology, context-dependent.',
              correct: true,
            },
          ],
          step: 0,
        },
        {
          type: 'text',
          text: 'If you chose B, you\'re in good company — it\'s designed to be tempting.',
          style: 'italic',
          step: 1,
        },
      ],
    },
  },
]
