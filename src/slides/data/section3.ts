import type { DarwinSlideDef } from '../../types'

/** Section 3: The Eye — A Case Study (6 slides — 8 min) + Lightning Reset (1 slide) */
export const section3: DarwinSlideDef[] = [
  // ── SLIDE 3.1: "What Good Is Half an Eye?" ──
  {
    id: 'slide-3.1',
    section: 3,
    slideNum: '3.1',
    title: '"What Good Is Half an Eye?"',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 60,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'State the objection seriously. Students who hold this intuition should feel it\'s being engaged, not dismissed. The answer comes in the next slides.',
    content: {
      type: 'B',
      titleBar: 'The Objection',
      blocks: [
        {
          type: 'quote',
          text: 'If an eye only functions when all parts are assembled, how could natural selection build it incrementally? Each intermediate stage would be useless.',
          boxed: true,
          step: 0,
        },
        {
          type: 'text',
          text: 'This was the most famous challenge to Darwin\'s theory. Darwin acknowledged it openly.',
          style: 'normal',
          step: 1,
        },
      ],
    },
  },

  // ── SLIDE 3.2: Language Note ──
  {
    id: 'slide-3.2',
    section: 3,
    slideNum: '3.2',
    title: 'Language Note',
    func: 'FRAME',
    template: 'B',
    palette: 'darwin',
    timing: 30,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'State this once explicitly. It prevents teleological interpretation of every eye stage that follows. The framing "reproductive success" replaces vague "advantage."',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'text',
          text: 'When I say a stage is \'useful\' or provides an \'advantage,\' I mean:',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'Organisms with that structure left more surviving offspring than organisms without it.',
          style: 'large-bold',
          step: 0,
        },
        {
          type: 'text',
          text: 'I do NOT mean the organism \'needed\' or \'tried to develop\' the structure.',
          style: 'italic',
          step: 1,
        },
      ],
    },
  },

  // ── SLIDE 3.3: Eye Stages: 5 Complete Systems ──
  {
    id: 'slide-3.3',
    section: 3,
    slideNum: '3.3',
    title: 'Eye Stages: 5 Complete Systems',
    func: 'ANCHOR',
    template: 'E',
    palette: 'darwin',
    timing: 90,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Walk through each stage. Emphasize: each one is functional RIGHT NOW at its level. No stage "needs" the next. This is the mechanism from Section 2 applied to a specific case.',
    content: {
      type: 'E',
      title: 'Eye Stages: 5 Complete Systems',
      visualDescription: '5-panel visual of eye evolution stages, each labeled "Complete functional system."',
      panels: [
        {
          title: '1. Light-sensitive patch',
          description: 'Detects predator\'s shadow. Higher reproduction.',
        },
        {
          title: '2. Cup shape',
          description: 'Registers light direction. Locates threats more precisely.',
        },
        {
          title: '3. Pinhole',
          description: 'Detects shape + movement. Significant reproductive difference.',
        },
        {
          title: '4. Lens',
          description: 'Sharp images. Hunting, navigation, mate recognition.',
        },
        {
          title: '5. Camera-type eye',
          description: 'Adjustable focus, iris, resolution.',
        },
      ],
      caption: 'No stage is \'half an eye.\' Each is a complete, functional visual system.',
    },
  },

  // ── SLIDE 3.4: Exaptation ──
  {
    id: 'slide-3.4',
    section: 3,
    slideNum: '3.4',
    title: 'Exaptation',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 30,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'Exaptation takes 20 seconds and has high conceptual ROI. It undercuts any lingering "progression toward a goal" reading of the eye sequence.',
    content: {
      type: 'B',
      titleBar: 'One More Wrinkle',
      blocks: [
        {
          type: 'text',
          text: 'Sometimes structures evolved for one function get co-opted for another.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'Feathers likely evolved for insulation or display before being used for flight.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'Selection doesn\'t plan ahead; it repurposes whatever happens to be available.',
          style: 'bold',
          step: 1,
        },
      ],
    },
  },

  // ── SLIDE 3.5: Convergent Evolution of Eyes ──
  {
    id: 'slide-3.5',
    section: 3,
    slideNum: '3.5',
    title: 'Convergent Evolution of Eyes',
    func: 'EVIDENCE',
    template: 'B',
    palette: 'darwin',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'Multiple independent origins = same pressure, different solutions. If challenged on model: "That\'s a model with stated assumptions. Change them, number changes. That\'s how models work."',
    content: {
      type: 'B',
      titleBar: 'Eyes Evolved Independently — Many Times',
      blocks: [
        {
          type: 'text',
          text: 'Structurally different solutions to the same environmental pressure.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'split',
          left: {
            heading: 'Three eye types',
            items: [
              'Octopus camera eye',
              'Insect compound eye',
              'Mammalian camera eye',
            ],
          },
          right: {
            heading: 'Nilsson & Pelger model',
            items: [
              'Theoretical model: patch → camera eye feasible in ~hundreds of thousands of generations.',
              'A model with stated assumptions, not a measurement.',
            ],
          },
          step: 1,
        },
      ],
    },
  },

  // ── SLIDE 3.6: Eye Checkpoint ──
  {
    id: 'slide-3.6',
    section: 3,
    slideNum: '3.6',
    title: 'Eye Checkpoint',
    func: 'CHECKPOINT',
    template: 'D',
    palette: 'checkpoint',
    timing: 120,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Format: Silent think 30s → neighbor discuss 90s. Then have pairs explain WHY. Multiple choice gives struggling students options to reason about.\nTracker cross-off #6.',
    content: {
      type: 'D',
      question:
        'We said selection has no foresight, but each eye stage seems to \'lead toward\' a better eye. Which resolves this?',
      options: [
        {
          label: 'A',
          text: 'Each stage correlated with more reproduction on its own — selection only saw the immediate benefit.',
          isCorrect: true,
          explanation: 'Each stage was favored by selection for its immediate reproductive benefit.',
        },
        {
          label: 'B',
          text: 'Random mutations accidentally built toward an eye without selection being involved.',
          isCorrect: false,
          explanation: 'Removes selection entirely. Mutations alone don\'t build functional complexity.',
        },
        {
          label: 'C',
          text: 'There is some foresight built into the process, but it\'s hard to detect.',
          isCorrect: false,
          explanation: 'Smuggles teleology back in. Foresight ≡ planning ≡ goal-directedness.',
        },
      ],
      processingCue: 'This is genuinely tricky. Take your time.',
      formatInstructions: 'Silent think (30s) → neighbor discuss (90s)',
    },
  },

  // ── SLIDE 3.7: Lightning Reset ──
  {
    id: 'slide-3.7',
    section: 3,
    slideNum: '3.7',
    title: 'Lightning Reset',
    func: 'INTERVENTION',
    template: 'F',
    palette: 'darwin',
    timing: 60,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Attention spans drop after ~25 min. Physical + social reset recharges engagement at near-zero time cost. "Tell someone one thing" forces retrieval practice (strengthens memory).\n⚠ EMERGENCY: mention "stand and stretch" during transition rather than dedicated slide.',
    verbalBackup: 'Stand up, stretch for 10 seconds, then we\'ll continue.',
    content: {
      type: 'F',
      lines: [
        { text: 'Stand up. Stretch.', style: 'large' },
        {
          text: 'Turn to someone new — tell them one thing you\'ve learned so far that you didn\'t know before this seminar.',
          style: 'medium',
        },
        { text: 'Just 60 seconds.', style: 'italic' },
      ],
    },
  },
]
