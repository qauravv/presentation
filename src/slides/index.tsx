import { BuildStep } from '../components/BuildStep'
import { ImageSlot } from '../components/ImageSlot'
import type { SlideConfig, SlideProps, SlideMode } from '../types'
import type { ActId } from '../theme/acts'

type LineDef = {
  text: string
  step?: number
  className?: string
}

type SlideDef = {
  id: string
  mode: SlideMode
  background: string
  act: ActId
  image?: string
  imageDescription?: string
  /** When true, image is shown large (main content) instead of as a top banner. Use for diagrams that contain information. */
  imageAsMain?: boolean
  /** Full-bleed background texture (e.g. title slide), shown at low opacity */
  backgroundImage?: string
  caption?: string
  lines: LineDef[]
  speakerNotes: string
  interactionHint?: string
  /** Giant low-opacity numeral used by algorithm template slides (14-18). */
  watermark?: string
  /** Override impact/text-only alignment when needed by the spec. */
  layout?: 'center' | 'left'
}

const BANNER_HEIGHT = '40vh'

function NarrativeSlide({
  def,
  step,
}: {
  def: SlideDef
  step: number
}) {
  const hasImage = Boolean(def.image ?? def.imageDescription)
  const hasBackgroundImage = Boolean(def.backgroundImage)
  const isDark = def.mode === 'cinematic' || def.background === '#0F172A' || def.background === '#000000'

  const textBlock = (
    <div className={def.mode === 'impact' ? 'space-y-4' : 'space-y-3'}>
      {def.lines.map((line, idx) => (
        <BuildStep
          key={`${def.id}-line-${idx}`}
          step={line.step ?? 0}
          currentStep={step}
          duration={0.65}
        >
          <p
            className={
              line.className ??
              (isDark
                ? 'font-playfair text-4xl text-white leading-tight'
                : 'font-sans text-2xl text-obsidian leading-snug')
            }
          >
            {line.text}
          </p>
        </BuildStep>
      ))}
    </div>
  )

  const bannerFade = isDark ? 'rgba(15, 23, 42, 0.98)' : 'rgba(250, 249, 246, 0.98)'

  const banner = hasImage ? (
    <div
      className="relative w-full flex-shrink-0 overflow-hidden"
      style={{ height: BANNER_HEIGHT, minHeight: 200 }}
    >
      <ImageSlot
        src={def.image}
        description={def.imageDescription}
        className="w-full h-full"
        vignette={false}
        objectFit="cover"
      />
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '5rem',
          background: `linear-gradient(to bottom, transparent, ${bannerFade})`,
        }}
      />
    </div>
  ) : null

  const contentArea = (
    <div className={`relative flex-1 min-h-0 flex flex-col px-10 py-8 sm:px-12 sm:py-10 ${isDark ? 'text-white' : 'text-obsidian'}`}>
      {def.watermark ? (
        <span className="absolute left-4 sm:left-6 top-0 font-playfair text-[11rem] sm:text-[13rem] leading-none text-ember/10 pointer-events-none select-none">
          {def.watermark}
        </span>
      ) : null}
      <div className="flex-1 flex items-center">
        <div className={`w-full max-w-5xl ${def.watermark ? 'pl-14 sm:pl-20' : ''}`}>{textBlock}</div>
      </div>
      {def.caption ? (
        <p className="mt-auto pt-4 text-sm text-slate-400 font-sans">{def.caption}</p>
      ) : null}
    </div>
  )

  // Cinematic: image is the main slide (full-bleed), text overlaid
  if (hasImage && def.mode === 'cinematic') {
    return (
      <div className="w-full h-full relative">
        <ImageSlot
          src={def.image}
          description={def.imageDescription}
          className="absolute inset-0"
          vignette={true}
          objectFit="cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.25) 55%, transparent 80%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-black/95 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-10 sm:p-12 flex flex-col justify-end min-h-0">
          <div className={`${isDark ? 'text-white' : 'text-obsidian'} max-w-5xl`}>
            {textBlock}
            {def.caption ? (
              <p className="mt-4 text-sm text-slate-300 font-sans">{def.caption}</p>
            ) : null}
          </div>
        </div>
      </div>
    )
  }

  // Teaching with image as main content (e.g. diagram the audience needs to read): large image, text below
  if (hasImage && def.imageAsMain) {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 min-h-0 flex items-center justify-center p-6 bg-bone">
          <ImageSlot
            src={def.image}
            description={def.imageDescription}
            className="w-full h-full max-h-[55vh]"
            vignette={false}
            objectFit="contain"
          />
        </div>
        <div className="flex-shrink-0 border-t border-slate-200/60 px-10 py-6 bg-bone text-obsidian">
          <div className="max-w-5xl">{textBlock}</div>
          {def.caption ? (
            <p className="mt-3 text-sm text-slate-500 font-sans">{def.caption}</p>
          ) : null}
        </div>
      </div>
    )
  }

  // Teaching (or other) with image: banner at top, content below
  if (hasImage) {
    return (
      <div className="w-full h-full flex flex-col">
        {banner}
        <div className="flex-1 min-h-0 overflow-auto flex flex-col">
          {contentArea}
        </div>
      </div>
    )
  }

  const textOnlyLeft = def.layout === 'left'
  return (
    <div
      className={`relative w-full h-full flex justify-center p-12 sm:p-14 ${textOnlyLeft ? 'items-start text-left' : 'items-center text-center'} ${isDark ? '' : 'text-obsidian'}`}
    >
      {hasBackgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${def.backgroundImage})`,
            opacity: 0.08,
          }}
        />
      )}
      <div className={`relative z-10 max-w-5xl ${textOnlyLeft ? 'pt-10' : ''}`}>{textBlock}</div>
    </div>
  )
}

function buildSlide(def: SlideDef): SlideConfig {
  const totalSteps =
    Math.max(0, ...def.lines.map((line) => line.step ?? 0)) + 1
  const component = ({ step, isActive }: SlideProps) => (
    <NarrativeSlide def={def} step={isActive ? step : 0} />
  )

  return {
    id: def.id,
    mode: def.mode,
    background: def.background,
    totalSteps,
    component,
    speakerNotes: def.speakerNotes,
    act: def.act,
    interactionHint: def.interactionHint,
  }
}

const mainSlideDefs: SlideDef[] = [
  {
    id: 'slide-01-eye',
    mode: 'cinematic',
    background: '#000000',
    act: 0,
    image: '/images/generated-image.png',
    imageDescription: 'Extreme macro human iris, amber-green heterochromia',
    lines: [
      {
        text: 'Who designed this?',
        className: 'font-sans text-[18px] text-white/55',
      },
    ],
    speakerNotes:
      "Open by making the eye feel engineered. Hold eye contact. Let the question hang before speaking.",
  },
  {
    id: 'slide-02-canyon',
    mode: 'cinematic',
    background: '#000000',
    act: 0,
    image: '/images/generated-image (1).png',
    imageDescription: 'Aerial Grand Canyon from directly above, golden hour',
    lines: [
      {
        text: 'Who designed this?',
        className: 'font-sans text-[18px] text-white/55',
      },
    ],
    speakerNotes:
      'Repeat the exact question. Pause longer than comfortable, then invert expectation: no designer, only time and physics.',
  },
  {
    id: 'slide-03-title',
    mode: 'impact',
    background: '#0F172A',
    act: 0,
    backgroundImage: '/images/generated-image (2).png',
    lines: [
      {
        text: 'THE DANGEROUS IDEA',
        className: 'font-playfair text-6xl tracking-wide text-white',
      },
      {
        text: "Darwin's Theory of Evolution",
        step: 1,
        className: 'font-sans text-2xl text-slate',
      },
      {
        text: '& the Science That Transformed It',
        step: 2,
        className: 'font-sans text-2xl text-slate',
      },
      {
        text: 'by Sarthak G.',
        step: 2,
        className: 'font-sans text-base text-slate-500 mt-8',
      },
    ],
    speakerNotes:
      "Use Hooker's line: 'like confessing a murder.' Frame this as ideas with consequences, not biography.",
  },
  {
    id: 'slide-04-bridge',
    mode: 'cinematic',
    background: '#0F172A',
    act: 1,
    image: '/images/generated-image (6).png',
    imageDescription: 'HMS Beagle against vast coast',
    lines: [
      {
        text: 'HMS Beagle - 1831-1836',
        className: 'font-playfair text-4xl text-white',
      },
      {
        text: '[Partner] showed you what Darwin saw.',
        className: 'font-sans text-2xl text-slate-300',
      },
      {
        text: 'Now: what he did with it.',
        className: 'font-sans text-2xl text-ember',
      },
    ],
    speakerNotes:
      'Bridge from the first speaker. Position this section as mechanism, not travel diary.',
  },
  {
    id: 'slide-05-four-puzzles',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/generated-image (3).png',
    imageDescription: 'Four-panel: finch beaks, tortoise shells, glyptodon vs armadillo, world map',
    lines: [
      {
        text: "Puzzle 1: Finch beaks diverge island by island.",
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Puzzle 2: Tortoise shells encode geography.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Puzzle 3: Fossils resemble nearby living species.',
        step: 2,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Puzzle 4: Similar climates, different continents, different life.',
        step: 3,
        className: 'font-sans text-2xl text-obsidian',
      },
    ],
    speakerNotes:
      'Reveal one puzzle per click. Keep a museum exhibit cadence: observe first, interpret second.',
  },
  {
    id: 'slide-06-pigeons',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/generated-image (7).png',
    imageDescription: 'Line of dramatically different pigeon breeds',
    lines: [
      {
        text: 'All of these are the same species.',
        className: 'font-playfair text-4xl text-ember',
      },
      {
        text: 'Breeders choose mates. Populations transform.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'If humans can do this in centuries, what can nature do in billions?',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
    ],
    speakerNotes:
      'Emphasize that Darwin opened Origin with pigeons for a reason: selection is observable before it is universal.',
  },
  {
    id: 'slide-07-common-descent',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/generated-image (8).png',
    imageDescription: "Darwin's I Think notebook page",
    lines: [
      {
        text: 'Common Descent',
        className: 'font-playfair text-5xl text-obsidian',
      },
      {
        text: 'All living things share a single common ancestor.',
        step: 1,
        className: 'font-playfair text-3xl text-ember',
      },
      {
        text: 'Not metaphor. Literally.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
    ],
    speakerNotes:
      'This is the radical claim. Slow down and make it personal: you, pigeons, oak trees, bacteria.',
  },
  {
    id: 'slide-08-malthus',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/generated-image (9).png',
    imageDescription: 'Malthus portrait or essay title page',
    lines: [
      {
        text: 'Population grows exponentially.',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Resources grow slowly, if at all.',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Result: permanent struggle for existence.',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: "Darwin's leap: survival is not random.",
        step: 1,
        className: 'font-playfair text-3xl text-ember',
      },
    ],
    speakerNotes:
      'Frame Malthus as the trigger that turns observations into an engine.',
  },
  {
    id: 'slide-09-transition-mechanism',
    mode: 'impact',
    background: '#0F172A',
    act: 1,
    lines: [
      {
        text: 'He had the observations.',
        className: 'font-sans text-3xl text-white/85',
      },
      {
        text: 'He had the analogy.',
        className: 'font-sans text-3xl text-white/85',
      },
      {
        text: 'He had the trigger.',
        className: 'font-sans text-3xl text-white/85',
      },
      {
        text: 'Now: the mechanism.',
        step: 1,
        className: 'font-playfair text-5xl text-ember',
      },
    ],
    speakerNotes:
      'Deliver with momentum. This should feel like stepping into code.',
  },
  {
    id: 'slide-10-before-darwin',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/generated-image (10).png',
    imageDescription: 'Mechanical watch close-up',
    lines: [
      {
        text: 'Before Darwin: DESIGN.',
        className: 'font-playfair text-5xl text-ember',
      },
      {
        text: 'Complexity requires a creator.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Eye implies eye-maker. Wing implies wing-maker.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
    ],
    speakerNotes:
      'Treat Paley as intuitive, not foolish. Then set up the inversion.',
  },
  {
    id: 'slide-11-inversion',
    mode: 'impact',
    background: '#FAF9F6',
    act: 1,
    lines: [
      {
        text: 'What if design is the result, not the evidence?',
        className: 'font-playfair text-5xl text-obsidian',
      },
      {
        text: "Organisms look designed because the ones that didn't work are dead.",
        step: 1,
        className: 'font-sans text-3xl text-obsidian',
      },
    ],
    speakerNotes:
      "Hit the line clean: you don't need a designer, you need death and time.",
  },
  {
    id: 'slide-12-tooth-fairy-test',
    mode: 'impact',
    background: '#FAF9F6',
    act: 1,
    interactionHint: 'Ask for hands: does design argument feel convincing?',
    lines: [
      {
        text: 'Honest question for the room:',
        className: 'font-sans text-3xl text-slate-600',
      },
      {
        text: 'Does the design argument feel at least a little convincing?',
        className: 'font-playfair text-5xl text-obsidian',
      },
      {
        text: 'Hold that feeling. I am about to try to break it.',
        step: 1,
        className: 'font-sans text-3xl text-ember',
      },
    ],
    speakerNotes: 'Collect hands, acknowledge, then pivot.',
  },
  {
    id: 'slide-13-header',
    mode: 'impact',
    background: '#0F172A',
    act: 1,
    layout: 'left',
    lines: [
      {
        text: 'natural_selection.exe',
        className: 'font-mono text-5xl text-ember',
      },
      {
        text: '// Five requirements. One consequence.',
        step: 1,
        className: 'font-mono text-2xl text-slate-300',
      },
      {
        text: '// The consequence was devastating.',
        step: 1,
        className: 'font-mono text-2xl text-slate-300',
      },
    ],
    speakerNotes: 'Switch tone to procedural. Mechanical. Precise.',
  },
  {
    id: 'slide-14-variation',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/generated-image (4).png',
    imageDescription: 'Row of finch silhouettes, beak variation',
    watermark: '1',
    lines: [
      {
        text: 'Variation exists',
        className: 'font-mono text-4xl text-obsidian',
      },
      {
        text: 'No two organisms are identical.',
        className: 'font-sans text-2xl text-slate-700',
      },
    ],
    speakerNotes: 'Sprint pace.',
  },
  {
    id: 'slide-15-inheritance',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/generated-image (11).png',
    imageDescription: 'Parent-offspring resemblance',
    watermark: '2',
    lines: [
      {
        text: 'Traits are heritable',
        className: 'font-mono text-4xl text-obsidian',
      },
      {
        text: 'Traits pass between generations.',
        className: 'font-sans text-2xl text-slate-700',
      },
    ],
    speakerNotes: 'Sprint pace.',
  },
  {
    id: 'slide-16-overproduction',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/generated-image (12).png',
    imageDescription: 'Sea turtle hatchlings moving to ocean',
    watermark: '3',
    interactionHint: 'Ask cod question.',
    lines: [
      {
        text: 'More are born than can survive',
        className: 'font-mono text-4xl text-obsidian',
      },
      {
        text: 'Cod: two million eggs per year. Populations still stable.',
        className: 'font-sans text-2xl text-slate-700',
      },
    ],
    speakerNotes:
      'Ask the cod question, take guesses, then give absurd result to make scarcity visceral.',
  },
  {
    id: 'slide-17-differential-survival',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/generated-image (13).png',
    imageDescription: 'Peppered moth camouflaged on bark',
    watermark: '4',
    lines: [
      {
        text: 'Survival is not random',
        className: 'font-mono text-4xl text-obsidian',
      },
      {
        text: 'Some variants have a statistical edge.',
        className: 'font-sans text-2xl text-slate-700',
      },
    ],
    speakerNotes: 'Use the moth visibility moment.',
  },
  {
    id: 'slide-18-time',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/slide18-time.jpg',
    imageDescription: 'Grand Canyon strata close-up',
    imageAsMain: true,
    watermark: '5',
    lines: [
      {
        text: 'Sufficient time',
        className: 'font-mono text-4xl text-obsidian',
      },
      {
        text: 'Small changes accumulate across generations.',
        className: 'font-sans text-2xl text-slate-700',
      },
    ],
    speakerNotes: 'Callback to canyon image to shift meaning from beauty to deep time.',
  },
  {
    id: 'slide-19-consequence',
    mode: 'impact',
    background: '#0F172A',
    act: 1,
    lines: [
      { text: 'variation', className: 'font-mono text-4xl text-white' },
      { text: '+ inheritance', step: 1, className: 'font-mono text-4xl text-white' },
      { text: '+ overproduction', step: 2, className: 'font-mono text-4xl text-white' },
      { text: '+ differential survival', step: 3, className: 'font-mono text-4xl text-white' },
      { text: '+ time', step: 4, className: 'font-mono text-4xl text-white' },
      { text: '= everything', step: 5, className: 'font-playfair text-7xl text-ember' },
    ],
    speakerNotes:
      'Mandatory silence before final line. This is the first money shot.',
  },
  {
    id: 'slide-20-fittest',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    image: '/images/generated-image (19).png',
    imageDescription: 'Contextual fitness: same organism thriving vs struggling in two environments',
    lines: [
      {
        text: 'Survival of the fittest does NOT mean strongest.',
        className: 'font-playfair text-4xl text-obsidian',
      },
      {
        text: 'It means best fit to environment, here and now.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'The less-suited die. The population shifts.',
        step: 2,
        className: 'font-sans text-2xl text-ember',
      },
    ],
    speakerNotes: 'Clarify misconception quickly; avoid over-explaining.',
  },
  {
    id: 'slide-21-no-direction',
    mode: 'impact',
    background: '#0F172A',
    act: 1,
    lines: [
      {
        text: 'Natural selection has no direction. No goal. No foresight.',
        className: 'font-playfair text-4xl text-white',
      },
      {
        text: 'Replay life and humans likely never appear.',
        step: 1,
        className: 'font-playfair text-4xl text-ember',
      },
      {
        text: 'Darwin replaced stories with a testable mechanism.',
        step: 2,
        className: 'font-sans text-2xl text-slate-300',
      },
    ],
    speakerNotes: 'Drive contingency hard.',
  },
  {
    id: 'slide-22-fossil-record',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 2,
    image: '/images/slide22-fossils.jpg',
    imageDescription: 'Ordered fossil strata',
    imageAsMain: true,
    lines: [
      {
        text: 'The Fossil Record',
        className: 'font-playfair text-5xl text-obsidian',
      },
      {
        text: 'Life appears in ordered sequence, never inverted.',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Transitional fossils: Tiktaalik, caught in between.',
        step: 1,
        className: 'font-sans text-2xl text-ember',
      },
    ],
    speakerNotes: 'Forensic tone: multiple independent lines, same verdict.',
  },
  {
    id: 'slide-23-comparative-anatomy',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 2,
    image: '/images/slide23-anatomy.svg',
    imageDescription: 'Homologous bones and vestigial structures',
    imageAsMain: true,
    lines: [
      {
        text: 'Bodies are history books.',
        className: 'font-playfair text-5xl text-obsidian',
      },
      {
        text: 'Homology: same bones, different jobs.',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Vestigial structures: inherited remnants.',
        step: 1,
        className: 'font-sans text-2xl text-ember',
      },
      {
        text: 'Convergence: same problem, new engineering.',
        step: 2,
        className: 'font-sans text-2xl text-obsidian',
      },
    ],
    speakerNotes: 'Layer homology, vestigial, convergence in that order.',
  },
  {
    id: 'slide-24-real-time-evolution',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 2,
    image: '/images/generated-image (14).png',
    imageDescription: 'Three-panel evolution-in-real-time: moths, antibiotic resistance petri dish, finch with calipers',
    lines: [
      {
        text: 'Evolution in real time',
        className: 'font-playfair text-5xl text-obsidian',
      },
      {
        text: 'Peppered moths.',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Antibiotic resistance.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: "Grants' finch measurements.",
        step: 2,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Measured, not inferred.',
        step: 3,
        className: 'font-playfair text-3xl text-ember',
      },
    ],
    speakerNotes: 'Keep pace brisk and empirical.',
  },
  {
    id: 'slide-25-problem',
    mode: 'impact',
    background: '#FAF9F6',
    act: 2,
    lines: [
      {
        text: 'Elegant mechanism. Mountain of evidence.',
        className: 'font-sans text-3xl text-obsidian',
      },
      {
        text: 'But there was a problem.',
        step: 1,
        className: 'font-playfair text-6xl text-obsidian',
      },
      {
        text: 'And Darwin knew it.',
        step: 1,
        className: 'font-sans text-3xl text-slate-600',
      },
    ],
    speakerNotes: 'Lower voice. Prepare for emotional drop.',
  },
  {
    id: 'slide-26-blending',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 3,
    image: '/images/generated-image (15).png',
    imageDescription: 'Blending inheritance: red + white paint = pink, traits blend, information lost',
    lines: [
      {
        text: '19th-century assumption: blending inheritance.',
        className: 'font-playfair text-4xl text-obsidian',
      },
      {
        text: 'Traits mix like paint. Every generation averages out.',
        className: 'font-sans text-2xl text-obsidian',
      },
    ],
    speakerNotes: 'Keep this simple; setup for the fatal math.',
  },
  {
    id: 'slide-27-fatal',
    mode: 'impact',
    background: '#FAF9F6',
    act: 3,
    lines: [
      {
        text: 'Beneficial mutation appears.',
        className: 'font-sans text-3xl text-obsidian',
      },
      {
        text: 'Halved by mating.',
        step: 1,
        className: 'font-sans text-3xl text-obsidian',
      },
      {
        text: 'Halved again.',
        step: 2,
        className: 'font-sans text-3xl text-obsidian',
      },
      {
        text: 'Gone.',
        step: 3,
        className: 'font-playfair text-6xl text-signal-red',
      },
      {
        text: 'Selection has nothing to select.',
        step: 3,
        className: 'font-playfair text-4xl text-ember',
      },
    ],
    speakerNotes: 'One click per dilution stage. Let collapse sink in.',
  },
  {
    id: 'slide-28-jenkin',
    mode: 'impact',
    background: '#FAF9F6',
    act: 3,
    lines: [
      {
        text: '1867 - Fleeming Jenkin:',
        className: 'font-playfair text-5xl text-ember',
      },
      {
        text: 'Under blending inheritance, natural selection cannot work.',
        className: 'font-playfair text-4xl text-obsidian',
      },
      {
        text: 'Darwin: one of the most valuable criticisms I have ever received.',
        step: 1,
        className: 'font-sans text-2xl text-slate-600 italic',
      },
    ],
    speakerNotes: 'Use the Victorian understatement joke once, then move.',
  },
  {
    id: 'slide-29-digital-analog',
    mode: 'impact',
    background: '#0F172A',
    act: 3,
    lines: [
      {
        text: 'WHAT DARWIN NEEDED: DIGITAL',
        className: 'font-sans text-2xl tracking-widest text-ember',
      },
      {
        text: 'Heads or tails. Information preserved.',
        className: 'font-playfair text-4xl text-white',
      },
      {
        text: 'WHAT EVERYONE ASSUMED: ANALOG',
        step: 1,
        className: 'font-sans text-2xl tracking-widest text-ember',
      },
      {
        text: 'Mix forever. Information destroyed.',
        step: 1,
        className: 'font-playfair text-4xl text-white',
      },
    ],
    interactionHint: 'Physical prop: coin and murky water.',
    speakerNotes:
      'Use the coin prop here. This is tactile memory anchor.',
  },
  {
    id: 'slide-30-lowest-point',
    mode: 'impact',
    background: '#0F172A',
    act: 3,
    lines: [
      {
        text: 'Charles Darwin died in 1882.',
        className: 'font-playfair text-5xl text-white',
      },
      {
        text: 'He never solved this problem.',
        step: 1,
        className: 'font-playfair text-5xl text-white',
      },
    ],
    speakerNotes: 'Speak quietly. Hold 3-4 seconds of silence after line 2.',
  },
  {
    id: 'slide-31-monastery',
    mode: 'cinematic',
    background: '#0F172A',
    act: 3,
    image: '/images/slide31-monastery.jpg',
    imageDescription: 'Monastery garden with pea plants',
    interactionHint: 'Show of hands: did Darwin read Mendel?',
    lines: [
      {
        text: 'Brno, Moravia - 1856-1863',
        className: 'font-sans text-2xl text-white italic',
      },
    ],
    speakerNotes:
      'Ask the room if Darwin read Mendel. Reveal no: they never connected.',
  },
  {
    id: 'slide-32-mendel',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 4,
    image: '/images/slide32-mendel.jpg',
    imageDescription: 'Tall/short pea inheritance diagram',
    imageAsMain: true,
    lines: [
      {
        text: 'Inheritance is not paint. It is coins.',
        className: 'font-playfair text-5xl text-ember',
      },
      {
        text: 'Traits can hide, then return unchanged.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Variation is preserved across generations.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
    ],
    speakerNotes: 'This is the rescue beat: relief + vindication.',
  },
  {
    id: 'slide-33-tragedy-timeline',
    mode: 'impact',
    background: '#0F172A',
    act: 4,
    lines: [
      {
        text: '1866 - Mendel publishes. Almost nobody reads it.',
        className: 'font-sans text-3xl text-white',
      },
      {
        text: '1867 - Jenkin publishes the critique.',
        step: 1,
        className: 'font-sans text-3xl text-white',
      },
      {
        text: '1882 - Darwin dies. Never read Mendel.',
        step: 2,
        className: 'font-sans text-3xl text-white',
      },
      {
        text: '1884 - Mendel dies. "My time will come."',
        step: 3,
        className: 'font-sans text-3xl text-ember italic',
      },
      {
        text: '1900 - Rediscovered. The halves finally meet.',
        step: 4,
        className: 'font-playfair text-5xl text-ember',
      },
    ],
    speakerNotes:
      'One click per year. Do not rush. Mandatory silence after the quote.',
  },
  {
    id: 'slide-34-modern-synthesis',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 4,
    image: '/images/generated-image (16).png',
    imageDescription: "Modern Synthesis: Darwin's algorithm + Mendel's mechanics -> modern synthesis",
    lines: [
      {
        text: "Darwin's algorithm + Mendel's mechanics = modern synthesis",
        className: 'font-playfair text-4xl text-obsidian',
      },
      {
        text: 'Genes were still abstract.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: '1953: DNA reveals the physical substrate.',
        step: 1,
        className: 'font-sans text-2xl text-ember',
      },
    ],
    speakerNotes: "Mention Franklin's contribution.",
  },
  {
    id: 'slide-35-dna',
    mode: 'cinematic',
    background: '#0F172A',
    act: 4,
    image: '/images/slide35-dna.jpg',
    imageDescription: 'Cinematic DNA helix',
    lines: [
      {
        text: 'A - T - C - G',
        className: 'font-mono text-6xl tracking-[0.4em] text-ember',
      },
      {
        text: 'Four letters. Every living thing on Earth.',
        className: 'font-sans text-2xl text-white/75',
      },
    ],
    speakerNotes: 'Speed round. 30 seconds max.',
  },
  {
    id: 'slide-36-mutation-bomb',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 4,
    image: '/images/slide36-mutation.svg',
    imageDescription: 'Mutation categories and similarity chart',
    imageAsMain: true,
    lines: [
      {
        text: 'Mutation creates all new variation.',
        className: 'font-playfair text-4xl text-obsidian',
      },
      {
        text: 'Harmful - Neutral - Beneficial',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Human/chimp DNA similarity: 98.7%',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Humans ~20k genes. Rice ~37k genes.',
        step: 2,
        className: 'font-playfair text-3xl text-ember',
      },
    ],
    speakerNotes:
      'Let the rice joke breathe before asking what really differs.',
  },
  {
    id: 'slide-37a-regulatory',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 4,
    image: '/images/slide37a-regulatory.jpg',
    imageDescription: 'Regulatory genes and Antennapedia mutant',
    imageAsMain: true,
    lines: [
      {
        text: 'Not different genes. Different switches.',
        className: 'font-playfair text-5xl text-ember',
      },
      {
        text: 'Master regulatory genes control where and when expression happens.',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Mutate one address label: legs can grow from a fly head.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
    ],
    speakerNotes: 'Use the address-label metaphor.',
  },
  {
    id: 'slide-37b-pax6',
    mode: 'impact',
    background: '#0F172A',
    act: 4,
    interactionHint: 'Prediction game before reveal.',
    lines: [
      {
        text: 'They took the eye gene from a mouse.',
        className: 'font-sans text-4xl text-white',
      },
      {
        text: 'They put it into a fruit fly embryo.',
        step: 1,
        className: 'font-sans text-4xl text-white',
      },
      {
        text: 'The fly grew an eye.',
        step: 2,
        className: 'font-playfair text-7xl text-ember',
      },
      {
        text: '500 million years of divergence. The instruction set still works.',
        step: 3,
        className: 'font-sans text-2xl text-white/70',
      },
    ],
    speakerNotes:
      'Take predictions before revealing slide. Mandatory silence before and after reveal.',
  },
  {
    id: 'slide-38-eye-evolution',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 4,
    image: '/images/slide38-eye-stages.svg',
    imageDescription: 'Five-stage eye evolution progression',
    imageAsMain: true,
    lines: [
      {
        text: 'Flat patch -> cup -> pinhole -> lens -> camera eye',
        className: 'font-playfair text-4xl text-obsidian',
      },
      {
        text: '~400,000 generations.',
        step: 1,
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Eyes evolved independently 40+ times.',
        step: 2,
        className: 'font-sans text-2xl text-ember',
      },
      {
        text: 'The eye is not evidence against evolution.',
        step: 3,
        className: 'font-playfair text-4xl text-ember',
      },
    ],
    speakerNotes: 'Close loop back to slide 1.',
  },
  {
    id: 'slide-39-same-bricks',
    mode: 'impact',
    background: '#0F172A',
    act: 4,
    lines: [
      {
        text: '40+ independent origins of eyes.',
        className: 'font-playfair text-4xl text-white',
      },
      {
        text: 'Same ancient switch: Pax6.',
        step: 1,
        className: 'font-playfair text-4xl text-ember',
      },
      {
        text: 'Evolution rewires expression timing and location.',
        step: 2,
        className: 'font-sans text-3xl text-white',
      },
      {
        text: 'Same bricks. Different instruction manual.',
        step: 3,
        className: 'font-playfair text-5xl italic text-ember',
      },
    ],
    speakerNotes: 'Deliver as the evo-devo thesis line.',
  },
  {
    id: 'slide-40-callback',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 4,
    image: '/images/slide40-callback.png',
    imageDescription: 'Finch beak callback visual',
    imageAsMain: true,
    lines: [
      {
        text: "Remember the finch beaks your partner showed?",
        className: 'font-sans text-3xl text-obsidian',
      },
      {
        text: 'Same logic, one level deeper.',
        className: 'font-playfair text-5xl text-ember',
      },
      {
        text: 'Same genes. Different switches.',
        step: 1,
        className: 'font-sans text-3xl text-obsidian',
      },
    ],
    speakerNotes: 'Reconnect both halves of seminar explicitly.',
  },
  {
    id: 'slide-41-beyond-darwin',
    mode: 'impact',
    background: '#FAF9F6',
    act: 5,
    lines: [
      {
        text: 'Epigenetics and horizontal gene transfer expand Darwin.',
        className: 'font-playfair text-4xl text-obsidian',
      },
      {
        text: 'Antibiotic resistance - COVID variants - cancer resistance',
        step: 1,
        className: 'font-sans text-3xl text-ember',
      },
      {
        text: 'Natural selection is not history. It is the news.',
        step: 2,
        className: 'font-playfair text-5xl text-ember',
      },
    ],
    speakerNotes: 'Fast overview, clinically relevant.',
  },
  {
    id: 'slide-42-universal-code',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 5,
    image: '/images/slide42-codon-wheel.jpg',
    imageDescription: 'Codon wheel / genetic code table',
    imageAsMain: true,
    lines: [
      {
        text: 'Every living cell reads from the same dictionary.',
        className: 'font-playfair text-4xl text-obsidian',
      },
      {
        text: 'Bacteria. Trees. Whales. You.',
        className: 'font-sans text-3xl text-obsidian',
      },
    ],
    speakerNotes: 'One code implies one history.',
  },
  {
    id: 'slide-43-darwin-words',
    mode: 'impact',
    background: '#0F172A',
    act: 5,
    lines: [
      {
        text: '"...from so simple a beginning',
        className: 'font-playfair text-5xl italic text-white',
      },
      {
        text: 'endless forms most beautiful',
        className: 'font-playfair text-5xl italic text-white',
      },
      {
        text: 'and most wonderful',
        className: 'font-playfair text-5xl italic text-white',
      },
      {
        text: 'have been, and are being, evolved."',
        className: 'font-playfair text-5xl italic text-white',
      },
      {
        text: '- On the Origin of Species, final sentence, 1859',
        className: 'font-sans text-base text-ember',
      },
    ],
    speakerNotes: 'Read slowly. Let quote do the work.',
  },
  {
    id: 'slide-44-close',
    mode: 'impact',
    background: '#0F172A',
    act: 5,
    interactionHint: 'Close with: What surprised you?',
    lines: [
      {
        text: 'The toolkit is older than Darwin imagined.',
        className: 'font-playfair text-4xl text-white',
      },
      {
        text: 'The unity is deeper than anyone expected.',
        step: 1,
        className: 'font-playfair text-4xl text-white',
      },
      {
        text: 'The creativity is stranger.',
        step: 2,
        className: 'font-playfair text-4xl text-white',
      },
      {
        text: 'And none of it was inevitable.',
        step: 3,
        className: 'font-playfair text-5xl text-ember',
      },
      {
        text: 'Every branch, including ours, is an algorithmic accident that worked.',
        step: 4,
        className: 'font-sans text-3xl text-slate-300',
      },
      {
        text: 'What surprised you?',
        step: 5,
        className: 'font-playfair text-6xl text-ember',
      },
    ],
    speakerNotes:
      'Slowest pace of the talk. Final question replaces \"any questions\".',
  },
]

const appendixDefs: SlideDef[] = [
  {
    id: 'appendix-a1',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 6,
    image: '/images/appendix-a1.png',
    imageDescription: 'Scope boundary visual',
    imageAsMain: true,
    lines: [
      {
        text: 'What Evolution Does Not Explain',
        className: 'font-playfair text-5xl text-obsidian',
      },
      {
        text: 'Evolution explains adaptation and diversity.',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'It does not directly explain origin of life, consciousness, or meaning.',
        className: 'font-sans text-2xl text-obsidian',
      },
    ],
    speakerNotes: 'Use when asked about origins or consciousness.',
  },
  {
    id: 'appendix-a2',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 6,
    image: '/images/generated-image (17).png',
    imageDescription: '1.3% that matters: same building blocks, different regulatory switches and timing',
    lines: [
      {
        text: 'The 1.3% That Matters',
        className: 'font-playfair text-5xl text-obsidian',
      },
      {
        text: 'Differences are concentrated in regulatory regions and timing.',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Same genes, different switch schedules.',
        className: 'font-sans text-2xl text-ember',
      },
    ],
    speakerNotes: 'Use for the \"if 98.7% chimp\" question.',
  },
  {
    id: 'appendix-a3',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 6,
    image: '/images/generated-image (18).png',
    imageDescription: 'Red Queen: predator and prey running in place, constant evolutionary arms race',
    lines: [
      {
        text: 'The Red Queen',
        className: 'font-playfair text-5xl text-obsidian',
      },
      {
        text: 'Predators and prey co-evolve in moving equilibria.',
        className: 'font-sans text-2xl text-obsidian',
      },
      {
        text: 'Running fast just to stay in place.',
        className: 'font-sans text-2xl text-ember',
      },
    ],
    speakerNotes: 'Use when asked why disease is never permanently solved.',
  },
]

export const mainSlides: SlideConfig[] = mainSlideDefs.map(buildSlide)
export const appendixSlides: SlideConfig[] = appendixDefs.map(buildSlide)
export const slides: SlideConfig[] = [...mainSlides, ...appendixSlides]
export { mainSlideDefs, appendixDefs } // for PPTX export script

