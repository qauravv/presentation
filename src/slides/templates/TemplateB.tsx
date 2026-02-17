import type { DarwinSlideDef, TemplateBContent } from '../../types'
import { BuildStep } from '../../components/BuildStep'
import { ContentBlockRenderer } from './ContentBlockRenderer'
import { MiniFlowchart } from './MiniFlowchart'
import { ConvergenceArrows } from '../../components/visuals/ConvergenceArrows'
import { FitnessContext } from '../../components/visuals/FitnessContext'

interface Props {
  def: DarwinSlideDef
  step: number
}

/**
 * Template B: Content Standard (workhorse — 25 of 46 slides)
 * Strong colored title bar (~16% height), generous content area, refined footer.
 */
export function TemplateB({ def, step }: Props) {
  const content = def.content as TemplateBContent
  const titleText = content.titleBar ?? def.title

  /* ── Slide 3.1 dramatic inverted treatment — "The Objection" ── */
  if (def.id === 'slide-3.1') {
    return (
      <div className="w-full h-full flex flex-col relative" data-palette={def.palette}>
        {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}
        <div
          className="shrink-0 flex items-center"
          style={{ minHeight: '14%', backgroundColor: '#1E3A5F', padding: '0 6%' }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
            {titleText}
          </h2>
        </div>
        <div
          className="flex-1 min-h-0 flex flex-col items-center justify-center"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, #24466B 0%, #1E3A5F 40%, #162E4C 100%)',
            padding: '0 8%',
          }}
        >
          <BuildStep step={0} currentStep={step} duration={0.7}>
            <div
              className="relative max-w-4xl"
              style={{ padding: '2.5rem 3rem' }}
            >
              <span
                aria-hidden
                className="absolute left-2 -top-1 font-heading select-none"
                style={{ fontSize: '5rem', color: 'rgba(201, 169, 97, 0.35)', lineHeight: 1 }}
              >
                &ldquo;
              </span>
              <p
                className="text-[1.6rem] sm:text-[2rem] lg:text-[2.2rem] leading-[1.45] font-heading font-medium italic text-center"
                style={{ color: '#F5F1E8', textShadow: '0 2px 12px rgba(0,0,0,0.18)' }}
              >
                {content.blocks[0] && 'text' in content.blocks[0] ? content.blocks[0].text : ''}
              </p>
              <span
                aria-hidden
                className="absolute right-2 -bottom-3 font-heading select-none"
                style={{ fontSize: '4rem', color: 'rgba(201, 169, 97, 0.35)', lineHeight: 1 }}
              >
                &rdquo;
              </span>
            </div>
          </BuildStep>
          <BuildStep step={1} currentStep={step} duration={0.4} delay={0.15}>
            <div className="w-28 h-[2px] mx-auto my-6" style={{ backgroundColor: '#C9A961' }} />
          </BuildStep>
          <BuildStep step={1} currentStep={step} duration={0.5} delay={0.1}>
            <p
              className="text-[1.2rem] sm:text-[1.4rem] leading-relaxed text-center max-w-3xl"
              style={{ color: '#F5F1E8', opacity: 0.82 }}
            >
              {content.blocks[1] && 'text' in content.blocks[1] ? content.blocks[1].text : ''}
            </p>
          </BuildStep>
        </div>
      </div>
    )
  }

  /* ── Slide 2.1 dramatic inverted treatment ── */
  if (def.id === 'slide-2.1') {
    return (
      <div className="w-full h-full flex flex-col relative" data-palette={def.palette}>
        <div
          className="shrink-0 flex items-center"
          style={{ minHeight: '14%', backgroundColor: '#1E3A5F', padding: '0 6%' }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
            {titleText}
          </h2>
        </div>
        <div
          className="flex-1 min-h-0 flex items-center justify-center"
          style={{
            background: 'radial-gradient(ellipse at center, #1E3A5F 0%, #162E4C 100%)',
          }}
        >
          <div className="text-center px-[8%] max-w-4xl">
            <BuildStep step={0} currentStep={step} duration={0.6}>
              <p
                className="text-[1.95rem] sm:text-[2.35rem] leading-[1.35] font-heading font-medium tracking-wide"
                style={{ color: '#F5F1E8', textShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
              >
                {content.blocks[0] && 'text' in content.blocks[0] ? content.blocks[0].text : ''}
              </p>
            </BuildStep>
            <BuildStep step={1} currentStep={step} duration={0.4} delay={0.15}>
              <div className="w-24 h-[2px] mx-auto my-8" style={{ backgroundColor: '#C9A961' }} />
            </BuildStep>
            <BuildStep step={1} currentStep={step} duration={0.5} delay={0.1}>
              <p
                className="text-[1.3rem] sm:text-[1.5rem] leading-relaxed"
                style={{ color: '#F5F1E8', opacity: 0.85 }}
              >
                {content.blocks[1] && 'text' in content.blocks[1] ? content.blocks[1].text : ''}
              </p>
            </BuildStep>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-full h-full flex flex-col slide-palette-bg relative"
      data-palette={def.palette}
    >
      {/* Mini flowchart overlay */}
      {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

      {/* Title bar (16% height, strong horizontal band) */}
      <div
        className="shrink-0 flex items-center"
        style={{
          minHeight: '16%',
          backgroundColor: 'var(--slide-heading)',
          padding: def.showMiniFlowchart ? '0 18% 0 6%' : '0 6%',
        }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
          {titleText}
        </h2>
      </div>

      {/* Content area with generous padding */}
      <div
        className="flex-1 min-h-0 overflow-hidden flex flex-col"
        style={{ padding: def.showMiniFlowchart ? '2.1rem 18% 1.4rem 6%' : '2.1rem 6% 1.4rem' }}
      >
        <div className={`max-w-5xl mx-auto space-y-5 sm:space-y-6${def.id === 'slide-2.5' ? ' my-auto' : ''}`}>
          <ContentBlockRenderer blocks={content.blocks} step={step} />

          {/* Integrated visual components for specific slides */}
          {(def.id === 'slide-1.3' || def.id === 'slide-4.1') && step >= 1 && (
            <div className="mt-4">
              <ConvergenceArrows />
            </div>
          )}
          {def.id === 'slide-2.10' && step >= 2 && (
            <div className="mt-4">
              <FitnessContext />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
