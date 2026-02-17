import type { DarwinSlideDef } from '../../types'

/** Section 2: Darwin's Logic — Building the Mechanism (11 slides — 13 min) */
export const section2: DarwinSlideDef[] = [
  // ── SLIDE 2.1: Natural Selection: The Mechanism Preview ──
  {
    id: 'slide-2.1',
    section: 2,
    slideNum: '2.1',
    title: 'Natural Selection: The Mechanism Preview',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 60,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Give the punchline first. Students know where we\'re heading, so they can organize the four pieces as you present them. Previewing the conclusion before unpacking = scaffold.',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'text',
          text: 'If traits vary, some variation is heritable, and different traits lead to different numbers of surviving offspring, then populations will change over time.',
          style: 'thesis',
          step: 0,
        },
        {
          type: 'text',
          text: 'That\'s it. Now let\'s unpack why that works and why it\'s not as obvious as it sounds.',
          style: 'normal',
          step: 1,
        },
      ],
    },
  },

  // ── SLIDE 2.2: The Mechanism Flowchart ──
  {
    id: 'slide-2.2',
    section: 2,
    slideNum: '2.2',
    title: 'The Mechanism Flowchart',
    func: 'ANCHOR',
    template: 'E',
    palette: 'darwin',
    timing: 90,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Post this visual and LEAVE IT VISIBLE. Every time you say "the mechanism," point to it. Physical poster also visible. Students with different processing styles can glance at the diagram instead of reconstructing your verbal chain.\n🔴 ALL DECKS',
    content: {
      type: 'E',
      title: 'The Mechanism Flowchart',
      visualDescription:
        'VARIATION exists → Some is HERITABLE → More offspring than SURVIVE → Traits → different REPRODUCTION → POPULATION SHIFTS over time',
      panels: [
        { title: 'VARIATION exists', description: 'Individuals in a population differ' },
        { title: 'Some is HERITABLE', description: 'Offspring resemble parents' },
        { title: 'More offspring than SURVIVE', description: 'Resources are finite' },
        { title: 'Traits → different REPRODUCTION', description: 'Some traits correlate with more offspring' },
        { title: 'POPULATION SHIFTS over time', description: 'Trait frequencies change' },
      ],
      caption: 'Undirected input → Environmentally biased output',
    },
  },

  // ── SLIDE 2.3: Four Components (Part 1) ──
  {
    id: 'slide-2.3',
    section: 2,
    slideNum: '2.3',
    title: 'Four Components (Part 1)',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    miniFlowchartHighlight: [1, 2],
    speakerNotes:
      'Components 1–2 on this slide, 3–4 on next. Breaking into two slides prevents cognitive overload. Keep Darwin-era framing: no genetic language.',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'numberedGroup',
          groups: [
            {
              number: '1',
              title: 'VARIATION EXISTS',
              items: [
                'Individuals differ: size, coloring, resistance, speed',
                'Always present in populations',
                'Darwin didn\'t know source',
              ],
            },
            {
              number: '2',
              title: 'SOME VARIATION IS HERITABLE',
              items: [
                'Offspring resemble parents more than unrelated individuals',
                'Trait differences persist across generations',
              ],
            },
          ],
          step: 0,
        },
        {
          type: 'footnote',
          text: 'Darwin did not use the word \'genetic.\' He spoke of heritable variation without knowing its physical basis.',
        },
      ],
    },
  },

  // ── SLIDE 2.4: Four Components (Part 2) ──
  {
    id: 'slide-2.4',
    section: 2,
    slideNum: '2.4',
    title: 'Four Components (Part 2)',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    miniFlowchartHighlight: [3, 4],
    speakerNotes:
      'These build on previous slide. Component 4 is the crux: "not random with respect to heritable traits." Emphasize this phrase. It distinguishes selection from pure chance.',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'numberedGroup',
          groups: [
            {
              number: '3',
              title: 'MORE OFFSPRING THAN SURVIVE',
              items: [
                'Resources finite',
                'Significant fraction dies before reproducing',
                'Default condition of life',
              ],
            },
            {
              number: '4',
              title: 'SURVIVAL & REPRODUCTION NOT RANDOM w.r.t. HERITABLE TRAITS',
              items: [
                'Some traits correlate with higher survival/reproduction',
                'Those organisms leave more offspring',
                'Offspring inherit the traits',
              ],
            },
          ],
          step: 0,
        },
      ],
    },
  },

  // ── SLIDE 2.5: The Consequence ──
  {
    id: 'slide-2.5',
    section: 2,
    slideNum: '2.5',
    title: 'The Consequence',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 60,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    miniFlowchartHighlight: [5],
    speakerNotes:
      'This is the payoff of 2.3–2.4. Short slide. Let it land. The italic line does the heavy anti-teleological lifting. "No process guided" = the core distinction students need.',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'text',
          text: 'Populations change over time.',
          style: 'centered-large',
          step: 0,
        },
        {
          type: 'text',
          text: 'Traits that correlate with survival and reproduction accumulate.',
          style: 'normal',
          step: 1,
        },
        {
          type: 'text',
          text: 'Not because any process guided that outcome — but because individuals less suited to the environment left fewer descendants.',
          style: 'italic',
          step: 2,
        },
      ],
    },
  },

  // ── SLIDE 2.6: The Key Distinction ──
  {
    id: 'slide-2.6',
    section: 2,
    slideNum: '2.6',
    title: 'The Key Distinction',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'This distinction prevents the "completely random" misconception. Students should be able to repeat this phrase. It\'s tested directly in the Section 5 diagnostic checkpoint.\n🔴 ALL DECKS',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'twoColumn',
          left: {
            heading: 'SOURCE of Variation — UNDIRECTED',
            items: [
              'Occurs without reference to what would be beneficial',
              'Mutation, recombination',
            ],
            color: 'red' as const,
          },
          right: {
            heading: 'SORTING of Variation — NON-RANDOM',
            items: [
              'Environment-biased',
              'Differential reproduction',
            ],
            color: 'green' as const,
          },
          centerArrow: 'Undirected input → Environmentally biased output',
          step: 0,
        },
      ],
    },
  },

  // ── SLIDE 2.7: Bacteria + Antibiotic Resistance ──
  {
    id: 'slide-2.7',
    section: 2,
    slideNum: '2.7',
    title: 'Bacteria + Antibiotic Resistance',
    func: 'EXAMPLE',
    template: 'E',
    palette: 'darwin',
    timing: 90,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'This is students\' concrete reference point for the abstract distinction on 2.6. "The bacteria didn\'t try to resist" is a phrase they can hold onto. Repeat it. Point to it when teleological language appears later.\n🔴 ALL DECKS',
    content: {
      type: 'E',
      title: 'Bacteria + Antibiotic Resistance',
      visualDescription: '3-panel: Before antibiotics → Add antibiotics → After',
      panels: [
        {
          title: 'Before antibiotics',
          description: 'Resistant (blue) + susceptible (gray) variation already exists.',
        },
        {
          title: 'Add antibiotics',
          description: 'Environment sorts.',
        },
        {
          title: 'After',
          description: 'Population shifted.',
        },
      ],
      caption: 'The bacteria didn\'t try to resist.',
    },
  },

  // ── SLIDE 2.8: Giraffe Question ──
  {
    id: 'slide-2.8',
    section: 2,
    slideNum: '2.8',
    title: 'Giraffe Question',
    func: 'CHECKPOINT',
    template: 'C',
    palette: 'checkpoint',
    timing: 150,
    compressionTag: 'CORE',
    showMiniFlowchart: false,
    speakerNotes:
      'Format: Silent commit (30s write) → groups 3–4 (2 min, each person shares ~30s uninterrupted) → reporter shares RANGE of reasoning.\nBefore starting: read processing cue aloud. Let silence sit. Don\'t rush the 30 seconds.',
    content: {
      type: 'C',
      question: 'Two students are arguing:',
      quotes: [
        {
          speaker: 'Student 1',
          text: 'Giraffes have long necks because their ancestors stretched to reach high leaves, and that stretching got passed down.',
        },
        {
          speaker: 'Student 2',
          text: 'Giraffes with slightly longer necks happened to reach more food, left more offspring, and over time the population shifted.',
        },
      ],
      subQuestions: ['Which matches natural selection? What\'s the key difference?'],
      processingCue: 'This is genuinely tricky. Take your time.',
      formatInstructions: 'Silent commit → groups of 3–4 → reporter shares range',
      checkpointReveal: {
        items: [
          { label: 'Student 1', text: 'Effort/need CAUSES the trait → Lamarckism (incorrect)', correct: false },
          { label: 'Student 2', text: 'Differential reproduction SORTS pre-existing variation → Natural selection (correct)', correct: true },
        ],
        bottomLine: 'The variation was already there. Selection sorted it.',
      },
    },
  },

  // ── SLIDE 2.9: Giraffe Reveal ──
  {
    id: 'slide-2.9',
    section: 2,
    slideNum: '2.9',
    title: 'Giraffe Reveal',
    func: 'CHECKPOINT',
    template: 'B',
    palette: 'darwin',
    timing: 60,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'If groups struggled to articulate the distinction, spend extra 30 seconds clarifying. This distinction is foundational for everything that follows. Don\'t rush past confusion here.\nMisconception tracker cross-off #1.',
    content: {
      type: 'B',
      titleBar: 'ANSWER: Student 2',
      blocks: [
        {
          type: 'reveal',
          items: [
            {
              label: 'Student 1',
              text: 'Effort/need CAUSES the trait → Lamarckism (incorrect)',
              correct: false,
            },
            {
              label: 'Student 2',
              text: 'Differential reproduction SORTS pre-existing variation → Natural selection (correct)',
              correct: true,
            },
          ],
          bottomLine: 'The variation was already there. Selection sorted it.',
          step: 0,
        },
      ],
    },
  },

  // ── SLIDE 2.10: What "Fitness" Means ──
  {
    id: 'slide-2.10',
    section: 2,
    slideNum: '2.10',
    title: 'What "Fitness" Means',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 60,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'Spencer coined "survival of the fittest," Darwin regretted adopting it. Don\'t get pulled into inclusive fitness / kin selection side lecture. Differential reproductive success = foundation.\nTracker cross-off #5.',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'text',
          text: 'Fitness = reproductive success in a specific environment',
          style: 'large-bold',
          step: 0,
        },
        {
          type: 'negation',
          items: [
            'NOT strength',
            'NOT complexity',
            'NOT universal',
          ],
          step: 1,
        },
        {
          type: 'text',
          text: 'Always context-dependent.',
          style: 'bold',
          step: 1,
        },
        {
          type: 'text',
          text: 'Large body helps when food abundant — liability during scarcity.',
          style: 'normal',
          step: 2,
        },
      ],
    },
  },

  // ── SLIDE 2.11: What Natural Selection Does NOT Do ──
  {
    id: 'slide-2.11',
    section: 2,
    slideNum: '2.11',
    title: 'What Natural Selection Does NOT Do',
    func: 'CONCEPT',
    template: 'B',
    palette: 'darwin',
    timing: 75,
    compressionTag: 'CORE',
    showMiniFlowchart: true,
    speakerNotes:
      'These negations prevent teleological thinking. Each addresses a specific misconception. On drift: "That\'s genuinely a whole separate lecture. Short version: random sampling in small populations. Real, important, separate from today\'s focus."\n🔴 ALL DECKS',
    content: {
      type: 'B',
      blocks: [
        {
          type: 'negation',
          items: [
            'No foresight — Cannot plan ahead or "prepare" for future.',
            'No direction or goal — No progress toward complexity. Parasites as "evolved" as mammals.',
            'No perfection — Compromises, legacy structures, flaws (human spine, blind spot).',
            'Not the only process — Drift: random sampling in small pops. Real, important, separate.',
          ],
          step: 0,
        },
      ],
    },
  },
]
