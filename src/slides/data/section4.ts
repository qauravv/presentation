import type { DarwinSlideDef } from '../../types'

/** Section 4: The Evidence — Independent Lines That Converge (10 slides — 12.5 min) */
export const section4: DarwinSlideDef[] = [
  // ── SLIDE 4.1: The Convergence Principle ──
  // Custom TemplateB treatment: dramatic framing with enlarged ConvergenceArrows
  {
    id: 'slide-4.1',
    section: 4,
    slideNum: '4.1',
    title: 'The Convergence Principle',
    func: 'FRAME',
    template: 'B',
    palette: 'darwin',
    timing: 45,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'This references the seed planted in 1.3. Students should recognize the concept. Brief — move quickly into the evidence itself.',
    content: {
      type: 'B',
      titleBar: 'Multiple Independent Lines',
      blocks: [
        {
          type: 'text',
          text: 'No single line of evidence is conclusive alone. Different researchers, different methods, different fields — all converging on the same conclusion.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'keyPhrase',
          text: 'The convergence is what makes the case powerful.',
          highlight: 'gold',
          step: 2,
        },
      ],
    },
  },

  // ── SLIDE 4.2: The Fossil Record ──
  // Custom TemplateB treatment: integrates StratigraphicColumn visual
  {
    id: 'slide-4.2',
    section: 4,
    slideNum: '4.2',
    title: 'The Fossil Record',
    func: 'EVIDENCE',
    template: 'B',
    palette: 'darwin',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'Framing: prediction of descent with modification. "Consistently" is precise. Gaps objection: fossilization is rare; the record is a sample.',
    content: {
      type: 'B',
      titleBar: 'The Fossil Record',
      blocks: [
        {
          type: 'text',
          text: 'Fossils in adjacent layers should be more similar than fossils from widely separated layers. Confirmed consistently.',
          style: 'bold',
          step: 1,
        },
        {
          type: 'footnote',
          text: 'Geology is messy. Strata fold and fault. But the broad pattern holds across formations worldwide.',
        },
      ],
    },
  },

  // ── SLIDE 4.3: Tiktaalik: The Power of Prediction ──
  {
    id: 'slide-4.3',
    section: 4,
    slideNum: '4.3',
    title: 'Tiktaalik: The Power of Prediction',
    func: 'EXAMPLE',
    template: 'E',
    palette: 'darwin',
    timing: 90,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Frame as prediction-testing: they specified IN ADVANCE what to find and where. "That\'s the difference between a strong theory and a just-so story."',
    content: {
      type: 'E',
      title: 'Tiktaalik: The Power of Prediction',
      visualDescription: 'Three-panel: prediction / search location / finding',
      panels: [
        {
          title: 'THE PREDICTION',
          description:
            'If fish-to-tetrapod transition happened, transitional fossils should exist in ~375 Ma rocks from ancient shallow water.',
        },
        {
          title: 'THE SEARCH',
          description: 'Canadian Arctic, chosen based on predictions. 3 years of searching.',
        },
        {
          title: 'THE FINDING',
          description: 'Tiktaalik: gills + scales + flat skull + neck + wrist-like fin bones.',
        },
      ],
      caption: 'Strong theories tell you where to look before you look.',
    },
  },

  // ── SLIDE 4.4: Falsifiability ──
  // Custom TemplateB treatment: dramatic elevated layout
  {
    id: 'slide-4.4',
    section: 4,
    slideNum: '4.4',
    title: 'Falsifiability',
    func: 'EVIDENCE',
    template: 'B',
    palette: 'darwin',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'This moment turns "evidence for" into "evidence for + failure to find evidence against." Also pre-empts the "unfalsifiable" objection proactively. Give it the weight it deserves.\nVerbal backup if 4.5 cut: "And the timeline is independently confirmed: radiometric dating from physics, not biology, gives the same chronological order."',
    content: {
      type: 'B',
      titleBar: 'What Would Disprove This?',
      blocks: [
        {
          type: 'quote',
          text: 'If it could be demonstrated that any complex organ existed which could not possibly have been formed by numerous, successive, slight modifications, my theory would absolutely break down.',
          attribution: 'Charles Darwin',
          boxed: true,
          step: 0,
        },
        {
          type: 'text',
          text: 'A rabbit skeleton in 500-million-year-old rock = fundamental problem.',
          style: 'normal',
          step: 1,
        },
        {
          type: 'text',
          text: '160+ years of searching. No such discovery verified.',
          style: 'bold',
          step: 2,
        },
      ],
    },
  },

  // ── SLIDE 4.5: Independent Dating ──
  // Custom TemplateB treatment: integrates RadiometricTimeline visual
  {
    id: 'slide-4.5',
    section: 4,
    slideNum: '4.5',
    title: 'Independent Dating',
    func: 'EVIDENCE',
    template: 'B',
    palette: 'darwin',
    timing: 60,
    compressionTag: 'CUT2',
    showMiniFlowchart: true,
    verbalBackup: 'And the timeline is independently confirmed: radiometric dating from physics, not biology, gives the same chronological order.',
    speakerNotes:
      'Circularity objection: refer to Section 1. Fossil ages come from physics and geology, not evolutionary theory.\n🟠 CUT 2 (DECK C): Drop this slide. Verbal backup in 4.4 speaker notes covers it.',
    content: {
      type: 'B',
      titleBar: 'Independent Confirmation',
      blocks: [
        {
          type: 'text',
          text: 'Radiometric dating is based on physics of radioactive decay — not biology.',
          style: 'bold',
          step: 0,
        },
        {
          type: 'text',
          text: 'This is the "independent convergence" from earlier in action.',
          style: 'italic',
          step: 1,
        },
      ],
    },
  },

  // ── SLIDE 4.6: Evolution Observed in Real Time ──
  // Custom TemplateB treatment: integrates RealTimeEvolutionSplit visual
  {
    id: 'slide-4.6',
    section: 4,
    slideNum: '4.6',
    title: 'Evolution Observed in Real Time',
    func: 'EVIDENCE',
    template: 'B',
    palette: 'darwin',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'Bacteria: "Direct observation of the mechanism." Finches: "The Grants tracked individual finches across generations for 40+ years. Selection measured generation by generation."',
    content: {
      type: 'B',
      titleBar: 'Evolution Observed in Real Time',
      blocks: [],
    },
  },

  // ── SLIDE 4.7: The Micro/Macro Question ──
  // Custom TemplateB treatment: integrates MicroMacroScale visual
  {
    id: 'slide-4.7',
    section: 4,
    slideNum: '4.7',
    title: 'The Micro/Macro Question',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'The micro/macro objection is extremely common. Addressing it HERE — at the exact moment students are thinking it — is far more effective than waiting for Q&A.\nTracker cross-off #4.',
    content: {
      type: 'B',
      titleBar: '"But That\'s Just Small Changes..."',
      blocks: [
        {
          type: 'text',
          text: 'No biological barrier says "selection can change beak size but not bone structure."',
          style: 'normal',
          step: 0,
        },
        {
          type: 'text',
          text: 'Same mechanism — heritable variation sorted by reproduction — operating over different timescales.',
          style: 'normal',
          step: 0,
        },
        {
          type: 'keyPhrase',
          text: 'No one has found a point where the process hits a wall and stops.',
          highlight: 'gold',
          step: 2,
        },
      ],
    },
  },

  // ── SLIDE 4.8: Convergence Checkpoint ──
  {
    id: 'slide-4.8',
    section: 4,
    slideNum: '4.8',
    title: 'Convergence Checkpoint',
    func: 'CHECKPOINT',
    template: 'C',
    palette: 'checkpoint',
    timing: 150,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Format: Pairs ~90s, then two pairs form group of 4 ("square") ~60s, then room shares.\nOpen-ended — no single right phrasing. Listen for: convergence = independent confirmation.',
    content: {
      type: 'C',
      question:
        'Imagine one of these evidence lines turned out to contradict the others — say, the fossil sequence was random rather than ordered.',
      subQuestions: [
        'What would that mean for the theory?',
        'Why does the convergence matter?',
      ],
      formatInstructions: 'Pairs 90s → join another pair 60s → room shares',
      processingCue: 'Think about what makes convergence powerful before discussing.',
      checkpointReveal: {
        isOpenEnded: true,
      },
    },
  },

  // ── SLIDE 4.9: Discussion Capture ──
  // Custom TemplateB treatment: warm flexible capture cards
  {
    id: 'slide-4.9',
    section: 4,
    slideNum: '4.9',
    title: 'Discussion Capture',
    func: 'CHECKPOINT',
    template: 'B',
    palette: 'darwin',
    timing: 60,
    compressionTag: 'OPTIONAL',
    showMiniFlowchart: false,
    speakerNotes:
      'Paraphrase student responses back for confirmation. Optional — use only if time allows. Skip in Scenario C.\n🟠 CUT 2 (DECK C): Skip entirely.',
    verbalBackup: '[Skip discussion capture — proceed after room share.]',
    content: {
      type: 'B',
      titleBar: 'What We Heard',
      blocks: [
        {
          type: 'text',
          text: 'Space for 2–3 student responses captured during room share.',
          style: 'muted',
          step: 0,
        },
      ],
    },
  },

  // ── SLIDE 4.10: Consolidation Pause ──
  {
    id: 'slide-4.10',
    section: 4,
    slideNum: '4.10',
    title: 'Consolidation Pause',
    func: 'INTERVENTION',
    template: 'F',
    palette: 'darwin',
    timing: 120,
    compressionTag: 'CUT3',
    showMiniFlowchart: false,
    speakerNotes:
      'Section 4 is information-dense. Students need 90 seconds to move material from working memory toward longer-term storage before loading Section 5. Highest-value 2-min investment.\n🔵 CUT 3: Drop in Deck C. Say: "Let\'s carry that thinking into the next piece."',
    verbalBackup: 'Let\'s carry that thinking into the next piece.',
    content: {
      type: 'F',
      lines: [
        { text: 'Before we move on:', style: 'large' },
        {
          text: 'Take 30 seconds. What\'s one thing from the last 20 minutes that clicked for you?',
          style: 'medium',
        },
        { text: 'What\'s one thing still fuzzy?', style: 'medium' },
        {
          text: 'Turn to your neighbor and share one of those.',
          style: 'medium',
        },
      ],
    },
  },
]
