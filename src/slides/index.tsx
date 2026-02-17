import { BuildStep } from '../components/BuildStep'
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
  lines: LineDef[]
  speakerNotes: string
  interactionHint?: string
}

function StarterSlide({
  def,
  step,
}: {
  def: SlideDef
  step: number
}) {
  const isDark =
    def.mode === 'cinematic' ||
    def.background === '#0F172A' ||
    def.background === '#000000'

  return (
    <div className="w-full h-full flex items-center justify-center p-12 sm:p-14">
      <div className="w-full max-w-5xl space-y-5 text-center">
        {def.lines.map((line, idx) => (
          <BuildStep
            key={`${def.id}-line-${idx}`}
            step={line.step ?? 0}
            currentStep={step}
            duration={0.55}
          >
            <p
              className={
                line.className ??
                (isDark
                  ? 'font-playfair text-5xl text-white leading-tight'
                  : 'font-playfair text-5xl text-obsidian leading-tight')
              }
            >
              {line.text}
            </p>
          </BuildStep>
        ))}
      </div>
    </div>
  )
}

function buildSlide(def: SlideDef): SlideConfig {
  const totalSteps =
    Math.max(0, ...def.lines.map((line) => line.step ?? 0)) + 1

  const component = ({ step, isActive }: SlideProps) => (
    <StarterSlide def={def} step={isActive ? step : 0} />
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
    id: 'slide-01-title',
    mode: 'impact',
    background: '#0F172A',
    act: 0,
    lines: [
      {
        text: 'NEW PRESENTATION',
        className: 'font-playfair text-6xl text-white',
      },
      {
        text: 'Your subtitle goes here',
        step: 1,
        className: 'font-sans text-2xl text-slate-300',
      },
    ],
    speakerNotes:
      'Starter title slide after reset. Replace with your new topic and opening line.',
  },
  {
    id: 'slide-02-agenda',
    mode: 'teaching',
    background: '#FAF9F6',
    act: 1,
    lines: [
      {
        text: 'Agenda',
        className: 'font-playfair text-5xl text-obsidian',
      },
      {
        text: '1) Point one',
        step: 1,
        className: 'font-sans text-3xl text-obsidian',
      },
      {
        text: '2) Point two',
        step: 2,
        className: 'font-sans text-3xl text-obsidian',
      },
      {
        text: '3) Point three',
        step: 3,
        className: 'font-sans text-3xl text-obsidian',
      },
    ],
    speakerNotes:
      'Starter structure slide. Replace each point with your new section plan.',
  },
]

const appendixDefs: SlideDef[] = []

export const mainSlides: SlideConfig[] = mainSlideDefs.map(buildSlide)
export const appendixSlides: SlideConfig[] = appendixDefs.map(buildSlide)
export const slides: SlideConfig[] = [...mainSlides, ...appendixSlides]
export { mainSlideDefs, appendixDefs } // for PPTX export script
