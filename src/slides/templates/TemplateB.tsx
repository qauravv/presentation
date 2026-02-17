import type { DarwinSlideDef, TemplateBContent } from '../../types'
import { BuildStep } from '../../components/BuildStep'
import { ContentBlockRenderer } from './ContentBlockRenderer'
import { MiniFlowchart } from './MiniFlowchart'
import { ConvergenceArrows } from '../../components/visuals/ConvergenceArrows'
import { FitnessContext } from '../../components/visuals/FitnessContext'
import { StratigraphicColumn } from '../../components/visuals/StratigraphicColumn'
import { RadiometricTimeline } from '../../components/visuals/RadiometricTimeline'
import { RealTimeEvolutionSplit } from '../../components/visuals/RealTimeEvolutionSplit'
import { MicroMacroScale } from '../../components/visuals/MicroMacroScale'

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

  /* ── Slide 4.1: Convergence Principle — dramatic framing ── */
  if (def.id === 'slide-4.1') {
    return (
      <div className="w-full h-full flex flex-col relative" data-palette={def.palette}>
        {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}
        <div
          className="shrink-0 flex items-center"
          style={{
            minHeight: '14%',
            background: 'linear-gradient(135deg, #1E3A5F 0%, #24466B 100%)',
            padding: '0 18% 0 6%',
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
            {titleText}
          </h2>
        </div>
        <div
          className="flex-1 min-h-0 flex flex-col items-center justify-center overflow-hidden"
          style={{ padding: '1rem 6%', backgroundColor: '#F5F1E8' }}
        >
          <BuildStep step={0} currentStep={step} duration={0.5}>
            <p className="text-[1.25rem] sm:text-[1.4rem] leading-relaxed text-center max-w-3xl mb-4" style={{ color: '#2D2D2D' }}>
              No single line of evidence is conclusive alone. Different researchers, different methods, different fields — all converging on the same conclusion.
            </p>
          </BuildStep>
          <BuildStep step={1} currentStep={step} duration={0.6}>
            <div className="w-full max-w-xl">
              <ConvergenceArrows step={step >= 1 ? 0 : -1} size="full" />
            </div>
          </BuildStep>
          <BuildStep step={2} currentStep={step} duration={0.5}>
            <div className="mt-4">
              <p className="text-base sm:text-lg lg:text-xl font-bold text-center gold-box inline-block">
                The convergence is what makes the case powerful.
              </p>
            </div>
          </BuildStep>
        </div>
      </div>
    )
  }

  /* ── Slide 4.2: Fossil Record — with StratigraphicColumn visual ── */
  if (def.id === 'slide-4.2') {
    return (
      <div className="w-full h-full flex flex-col slide-palette-bg relative" data-palette={def.palette}>
        {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}
        <div
          className="shrink-0 flex items-center"
          style={{ minHeight: '14%', backgroundColor: 'var(--slide-heading)', padding: '0 18% 0 6%' }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
            {titleText}
          </h2>
        </div>
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden" style={{ padding: '1rem 6% 0.5rem' }}>
          <div className="flex-1 flex items-center justify-center">
            <StratigraphicColumn step={step} />
          </div>
          <BuildStep step={1} currentStep={step} duration={0.5}>
            <p className="text-[1.25rem] sm:text-[1.4rem] font-bold text-center max-w-3xl mx-auto mb-1" style={{ color: 'var(--slide-heading)' }}>
              Fossils in adjacent layers should be more similar than fossils from widely separated layers. Confirmed consistently.
            </p>
          </BuildStep>
          <p className="text-[0.85rem] italic text-center mx-auto max-w-2xl" style={{ color: 'var(--slide-text)', opacity: 0.5, borderTop: '1px solid rgba(45,45,45,0.08)', paddingTop: '0.4rem', marginBottom: '0.5rem' }}>
            Geology is messy. Strata fold and fault. But the broad pattern holds across formations worldwide.
          </p>
        </div>
      </div>
    )
  }

  /* ── Slide 4.4: Falsifiability — elevated dramatic treatment ── */
  if (def.id === 'slide-4.4') {
    return (
      <div className="w-full h-full flex flex-col relative" data-palette={def.palette}>
        {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}
        <div
          className="shrink-0 flex items-center"
          style={{ minHeight: '14%', backgroundColor: '#1E3A5F', padding: '0 18% 0 6%' }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
            {titleText}
          </h2>
        </div>
        <div
          className="flex-1 min-h-0 flex flex-col items-center justify-center"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, #24466B 0%, #1E3A5F 40%, #162E4C 100%)', padding: '0 8%' }}
        >
          <BuildStep step={0} currentStep={step} duration={0.7}>
            <div className="relative max-w-4xl" style={{ padding: '2rem 2.5rem' }}>
              <span
                aria-hidden
                className="absolute left-2 -top-1 font-heading select-none"
                style={{ fontSize: '5rem', color: 'rgba(201, 169, 97, 0.35)', lineHeight: 1 }}
              >
                &ldquo;
              </span>
              <p
                className="text-[1.35rem] sm:text-[1.65rem] lg:text-[1.85rem] leading-[1.45] font-heading font-medium italic text-center"
                style={{ color: '#F5F1E8', textShadow: '0 2px 12px rgba(0,0,0,0.18)' }}
              >
                If it could be demonstrated that any complex organ existed which could not possibly have been formed by numerous, successive, slight modifications, my theory would absolutely break down.
              </p>
              <span
                aria-hidden
                className="absolute right-2 -bottom-3 font-heading select-none"
                style={{ fontSize: '4rem', color: 'rgba(201, 169, 97, 0.35)', lineHeight: 1 }}
              >
                &rdquo;
              </span>
              <p className="mt-4 text-sm text-center" style={{ color: '#F5F1E8', opacity: 0.5 }}>
                — Charles Darwin
              </p>
            </div>
          </BuildStep>
          <BuildStep step={1} currentStep={step} duration={0.4} delay={0.15}>
            <div className="w-28 h-[2px] mx-auto my-5" style={{ backgroundColor: '#C9A961' }} />
          </BuildStep>
          <BuildStep step={1} currentStep={step} duration={0.5} delay={0.1}>
            <p className="text-[1.15rem] sm:text-[1.3rem] leading-relaxed text-center max-w-3xl" style={{ color: '#F5F1E8', opacity: 0.8 }}>
              A rabbit skeleton in 500-million-year-old rock = fundamental problem.
            </p>
          </BuildStep>
          <BuildStep step={2} currentStep={step} duration={0.6} delay={0.1}>
            <div className="mt-5 px-8 py-4 rounded-lg text-center" style={{ backgroundColor: 'rgba(201, 169, 97, 0.15)', border: '1.5px solid rgba(201, 169, 97, 0.35)' }}>
              <p className="text-[1.45rem] sm:text-[1.7rem] font-bold" style={{ color: '#F5F1E8' }}>
                160+ years of searching. No such discovery verified.
              </p>
            </div>
          </BuildStep>
        </div>
      </div>
    )
  }

  /* ── Slide 4.5: Independent Dating — with RadiometricTimeline visual ── */
  if (def.id === 'slide-4.5') {
    return (
      <div className="w-full h-full flex flex-col slide-palette-bg relative" data-palette={def.palette}>
        {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}
        <div
          className="shrink-0 flex items-center"
          style={{ minHeight: '14%', backgroundColor: 'var(--slide-heading)', padding: '0 18% 0 6%' }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
            {titleText}
          </h2>
        </div>
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden" style={{ padding: '1rem 4% 0.75rem' }}>
          <BuildStep step={0} currentStep={step} duration={0.5}>
            <p className="text-[1.25rem] sm:text-[1.4rem] font-bold text-center max-w-3xl mx-auto mb-3" style={{ color: 'var(--slide-heading)' }}>
              Radiometric dating is based on physics of radioactive decay — not biology.
            </p>
          </BuildStep>
          <div className="flex-1 flex items-center justify-center">
            <RadiometricTimeline step={step} />
          </div>
          <BuildStep step={1} currentStep={step} duration={0.4} delay={0.15}>
            <p className="text-[1.1rem] italic text-center max-w-2xl mx-auto" style={{ color: 'var(--slide-accent)', marginBottom: '0.5rem' }}>
              This is the &ldquo;independent convergence&rdquo; from earlier in action.
            </p>
          </BuildStep>
        </div>
      </div>
    )
  }

  /* ── Slide 4.6: Real-Time Evolution — with RealTimeEvolutionSplit visual ── */
  if (def.id === 'slide-4.6') {
    return (
      <div className="w-full h-full flex flex-col slide-palette-bg relative" data-palette={def.palette}>
        {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}
        <div
          className="shrink-0 flex items-center"
          style={{ minHeight: '14%', backgroundColor: 'var(--slide-heading)', padding: '0 18% 0 6%' }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
            {titleText}
          </h2>
        </div>
        <div className="flex-1 min-h-0 flex items-center overflow-hidden" style={{ padding: '1rem 5%' }}>
          <RealTimeEvolutionSplit step={step} />
        </div>
      </div>
    )
  }

  /* ── Slide 4.7: Micro/Macro — with MicroMacroScale visual ── */
  if (def.id === 'slide-4.7') {
    return (
      <div className="w-full h-full flex flex-col slide-palette-bg relative" data-palette={def.palette}>
        {def.showMiniFlowchart && <MiniFlowchart highlight={def.miniFlowchartHighlight} />}
        <div
          className="shrink-0 flex items-center"
          style={{ minHeight: '14%', backgroundColor: 'var(--slide-heading)', padding: '0 18% 0 6%' }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
            {titleText}
          </h2>
        </div>
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden" style={{ padding: '1.25rem 5% 0.75rem' }}>
          <BuildStep step={0} currentStep={step} duration={0.5}>
            <div className="max-w-4xl mx-auto space-y-2 mb-3">
              <p className="text-[1.25rem] sm:text-[1.35rem] leading-relaxed" style={{ color: 'var(--slide-text)' }}>
                No biological barrier says &ldquo;selection can change beak size but not bone structure.&rdquo;
              </p>
              <p className="text-[1.25rem] sm:text-[1.35rem] leading-relaxed" style={{ color: 'var(--slide-text)' }}>
                Same mechanism — heritable variation sorted by reproduction — operating over different timescales.
              </p>
            </div>
          </BuildStep>
          <div className="flex-1 flex items-center justify-center">
            <MicroMacroScale step={step} />
          </div>
          <BuildStep step={2} currentStep={step} duration={0.5}>
            <div className="text-center mt-2 mb-1">
              <p className="text-base sm:text-lg lg:text-xl font-bold gold-box inline-block">
                No one has found a point where the process hits a wall and stops.
              </p>
            </div>
          </BuildStep>
        </div>
      </div>
    )
  }

  /* ── Slide 4.9: Discussion Capture — warm flexible capture layout ── */
  if (def.id === 'slide-4.9') {
    return (
      <div className="w-full h-full flex flex-col slide-palette-bg relative" data-palette={def.palette}>
        <div
          className="shrink-0 flex items-center"
          style={{ minHeight: '14%', backgroundColor: 'var(--slide-accent)', padding: '0 6%' }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug tracking-[-0.01em]">
            {titleText}
          </h2>
        </div>
        <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden" style={{ padding: '1.5rem 6%' }}>
          <div className="grid grid-cols-3 gap-4 sm:gap-5 w-full max-w-4xl">
            {[1, 2, 3].map((n) => (
              <BuildStep key={n} step={0} currentStep={step} duration={0.4} delay={n * 0.12}>
                <div
                  className="rounded-xl flex flex-col items-center justify-center text-center"
                  style={{
                    border: '2px dashed rgba(212, 165, 116, 0.35)',
                    backgroundColor: 'rgba(212, 165, 116, 0.04)',
                    padding: '2rem 1.25rem',
                    minHeight: '180px',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)', border: '1px solid rgba(212, 165, 116, 0.3)' }}
                  >
                    <span className="text-sm font-bold" style={{ color: '#D4A574' }}>{n}</span>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-6 h-6 mb-2" style={{ opacity: 0.25 }}>
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="#2D2D2D" />
                    <path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#2D2D2D" />
                  </svg>
                  <p className="text-xs italic" style={{ color: '#2D2D2D', opacity: 0.3 }}>
                    Student response
                  </p>
                </div>
              </BuildStep>
            ))}
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
          {def.id === 'slide-1.3' && step >= 1 && (
            <div className="mt-4">
              <ConvergenceArrows step={step >= 1 ? 0 : -1} size="compact" />
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
