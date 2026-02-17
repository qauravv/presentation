import { BuildStep } from '../../components/BuildStep'
import type { DarwinSlideDef, TemplateEContent } from '../../types'
import { FullFlowchart, MiniFlowchart } from './MiniFlowchart'
import { BacteriaPanels } from '../../components/visuals/BacteriaPanels'
import { EyeStages } from '../../components/visuals/EyeStages'
import { ExaptationFeather } from '../../components/visuals/ExaptationFeather'
import { ConvergentEyes } from '../../components/visuals/ConvergentEyes'
import { BlendingVsParticulate } from '../../components/visuals/BlendingVsParticulate'
import { BranchingVsLadder } from '../../components/visuals/BranchingVsLadder'
import { TiktaalikPanels } from '../../components/visuals/TiktaalikPanels'

interface Props {
  def: DarwinSlideDef
  step: number
}

/**
 * Template E: Visual Anchor
 * The visual IS the content. Title left-aligned, large visual area (65–70%),
 * minimal text caption. Custom visual components for key slides.
 */
export function TemplateE({ def, step }: Props) {
  const content = def.content as TemplateEContent
  const isMechanismFlowchart = def.id === 'slide-2.2'
  const isBacteriaResistance = def.id === 'slide-2.7'
  const isEyeStages = def.id === 'slide-3.3'
  const isExaptation = def.id === 'slide-3.4'
  const isConvergentEyes = def.id === 'slide-3.5'
  const isBlendingVsParticulate = def.id === 'slide-5.3'
  const isBranchingVsLadder = def.id === 'slide-6.3'
  const isTiktaalik = def.id === 'slide-4.3'
  const componentOwnsCaption = isMechanismFlowchart || isBlendingVsParticulate || isBranchingVsLadder || isTiktaalik

  const captionStep = isEyeStages
    ? 2
    : isExaptation
      ? 1
      : isConvergentEyes
        ? 1
        : isBacteriaResistance || isTiktaalik
          ? 2
          : content.panels
            ? 2
            : 1

  return (
    <div
      className="w-full h-full flex flex-col slide-palette-bg relative"
      data-palette={def.palette}
    >
      {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}

      {/* Title — lightweight, no bar; maximise visual area */}
      {content.title && (
        <div className="shrink-0" style={{ padding: '1.1rem 6% 0' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold"
              style={{ color: 'var(--slide-heading)' }}>
            {content.title}
          </h2>
        </div>
      )}

      {/* Visual area (65–70%) */}
      <div className="flex-1 flex flex-col justify-center min-h-0" style={{ padding: '0.75rem 6%' }}>
        {isMechanismFlowchart ? (
          <BuildStep step={0} currentStep={step} duration={0.6}>
            <FullFlowchart step={step} />
          </BuildStep>
        ) : isBacteriaResistance ? (
          <BacteriaPanels step={step} />
        ) : isEyeStages ? (
          <EyeStages step={step} />
        ) : isExaptation ? (
          <ExaptationFeather step={step} />
        ) : isConvergentEyes ? (
          <ConvergentEyes step={step} />
        ) : isBlendingVsParticulate ? (
          <BlendingVsParticulate step={step} />
        ) : isBranchingVsLadder ? (
          <BranchingVsLadder />
        ) : isTiktaalik ? (
          <TiktaalikPanels step={step} />
        ) : content.panels && content.panels.length > 0 ? (
          <div className={`grid gap-4 sm:gap-5 ${panelGridClass(content.panels.length)} w-full`}>
            {content.panels.map((panel, i) => (
              <BuildStep key={i} step={i > 0 ? 1 : 0} currentStep={step} duration={0.42} delay={i * 0.12}>
                <div
                  className="rounded-xl text-center h-full flex flex-col justify-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(var(--slide-accent), 0.15)',
                    borderColor: 'color-mix(in srgb, var(--slide-accent) 15%, transparent)',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <p className="text-sm sm:text-base font-bold mb-2"
                     style={{ color: 'var(--slide-heading)' }}>
                    {panel.title}
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed"
                     style={{ color: 'var(--slide-text)' }}>
                    {panel.description}
                  </p>
                </div>
              </BuildStep>
            ))}
          </div>
        ) : (
          <BuildStep step={0} currentStep={step} duration={0.5}>
            <div className="rounded-xl text-center"
                 style={{
                   backgroundColor: 'rgba(255, 255, 255, 0.45)',
                   border: '1px solid rgba(45, 45, 45, 0.08)',
                   padding: '2rem',
                 }}>
              <p className="text-base sm:text-lg italic"
                 style={{ color: 'var(--slide-text)', opacity: 0.7 }}>
                {content.visualDescription}
              </p>
            </div>
          </BuildStep>
        )}
      </div>

      {/* Caption */}
      {content.caption && !componentOwnsCaption && (
        <BuildStep step={captionStep} currentStep={step} duration={0.5}>
          <div className="shrink-0" style={{ padding: '0 6% 1.5rem' }}>
            {isBacteriaResistance ? (
              <div className="text-center">
                <p className="text-base sm:text-lg lg:text-xl text-darwin-charcoal gold-box inline-block">
                  {content.caption}
                </p>
              </div>
            ) : (
              <p className="text-base sm:text-lg lg:text-xl font-bold text-center"
                 style={{ color: 'var(--slide-heading)' }}>
                {content.caption}
              </p>
            )}
          </div>
        </BuildStep>
      )}
    </div>
  )
}

function panelGridClass(count: number): string {
  if (count === 2) return 'grid-cols-2'
  if (count === 3) return 'grid-cols-3'
  if (count === 5) return 'grid-cols-5'
  return 'grid-cols-2'
}

