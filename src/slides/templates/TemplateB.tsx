import type { DarwinSlideDef, TemplateBContent } from '../../types'
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

  return (
    <div
      className="w-full h-full flex flex-col slide-palette-bg relative"
      data-palette={def.palette}
    >
      {/* Mini flowchart overlay */}
      {def.showMiniFlowchart && <MiniFlowchart />}

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
        className="flex-1 min-h-0 overflow-hidden"
        style={{ padding: def.showMiniFlowchart ? '2.1rem 18% 1.4rem 6%' : '2.1rem 6% 1.4rem' }}
      >
        <div className="max-w-5xl mx-auto space-y-5 sm:space-y-6">
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
