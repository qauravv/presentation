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

  return (
    <div
      className="w-full h-full flex flex-col slide-palette-bg relative"
      data-palette={def.palette}
    >
      {/* Mini flowchart overlay */}
      {def.showMiniFlowchart && <MiniFlowchart />}

      {/* Title bar (16% height, strong horizontal band) */}
      {content.titleBar && (
        <div
          className="shrink-0 flex items-center"
          style={{
            minHeight: '16%',
            backgroundColor: 'var(--slide-heading)',
            padding: '0 6%',
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
            {content.titleBar}
          </h2>
        </div>
      )}

      {/* Content area with generous padding */}
      <div
        className="flex-1 overflow-y-auto"
        style={{ padding: '2rem 6% 1.5rem' }}
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

      {/* Refined footer */}
      <div
        className="shrink-0 flex justify-between items-center slide-footer"
        style={{ padding: '0.5rem 6%' }}
      >
        <span className="font-sans">
          {def.section} · {sectionName(def.section)}
        </span>
        <span className="font-sans">{def.slideNum}</span>
      </div>
    </div>
  )
}

function sectionName(section: number): string {
  const names: Record<number, string> = {
    1: 'Bridge + Frame',
    2: "Darwin's Logic",
    3: 'The Eye',
    4: 'The Evidence',
    5: 'Inheritance',
    6: 'Close',
  }
  return names[section] ?? ''
}
