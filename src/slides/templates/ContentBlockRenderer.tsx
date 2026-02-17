import { BuildStep } from '../../components/BuildStep'
import type { ContentBlock } from '../../types'

interface Props {
  blocks: ContentBlock[]
  step: number
}

export function ContentBlockRenderer({ blocks, step }: Props) {
  return (
    <>
      {blocks.map((block, idx) => (
        <BuildStep
          key={idx}
          step={block.type === 'footnote' ? 0 : (block.step ?? 0)}
          currentStep={step}
          duration={0.4}
          delay={idx * 0.12}
        >
          <BlockContent block={block} />
        </BuildStep>
      ))}
    </>
  )
}

function BlockContent({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'text':
      return <TextRenderer text={block.text} style={block.style} />
    case 'bullets':
      return <BulletsRenderer items={block.items} ordered={block.ordered} />
    case 'numberedGroup':
      return <NumberedGroupRenderer groups={block.groups} />
    case 'quote':
      return <QuoteRenderer text={block.text} attribution={block.attribution} boxed={block.boxed} />
    case 'negation':
      return <NegationRenderer items={block.items} />
    case 'twoColumn':
      return (
        <TwoColumnRenderer
          left={block.left}
          right={block.right}
          centerArrow={block.centerArrow}
        />
      )
    case 'reveal':
      return <RevealRenderer items={block.items} bottomLine={block.bottomLine} />
    case 'split':
      return <SplitRenderer left={block.left} right={block.right} />
    case 'checklist':
      return <ChecklistRenderer items={block.items} />
    case 'keyPhrase':
      return <KeyPhraseRenderer text={block.text} highlight={block.highlight} />
    case 'footnote':
      return <FootnoteRenderer text={block.text} />
    case 'scale':
      return <ScaleRenderer left={block.left} right={block.right} />
    default:
      return null
  }
}

/* ═══════════════════════════════════════════════
   Individual Block Renderers — Museum-grade polish
   ═══════════════════════════════════════════════ */

function TextRenderer({ text, style }: { text: string; style?: string }) {
  const classes: Record<string, string> = {
    normal: 'text-[1.32rem] leading-[1.62] text-slide-text',
    bold: 'text-[1.32rem] leading-[1.62] text-slide-text font-bold',
    italic: 'text-[1.28rem] leading-[1.62] text-slide-text/78 italic border-l-2 border-slide-accent/45 pl-4',
    large: 'text-[1.5rem] sm:text-[1.75rem] leading-relaxed text-slide-text',
    small: 'text-[1rem] leading-relaxed text-slide-text/65',
    muted: 'text-[0.95rem] leading-relaxed text-slide-text/45',
    'large-bold': 'text-[1.5rem] sm:text-[1.75rem] leading-relaxed text-slide-text font-bold',
    'centered-large': 'text-[1.9rem] sm:text-[2.35rem] leading-snug text-slide-text text-center font-heading font-medium',
    thesis:
      'text-[1.95rem] sm:text-[2.35rem] leading-[1.35] text-slide-text font-heading font-medium bg-white/45 border-l-4 border-slide-accent rounded-r-lg px-6 py-5',
  }
  if (text === '160+ years of searching. No such discovery verified.') {
    return (
      <p className="text-[1.55rem] sm:text-[1.85rem] leading-[1.5] font-bold text-slide-heading bg-white/55 rounded-lg px-5 py-4 border-l-4 border-slide-accent">
        {text}
      </p>
    )
  }

  if (text.includes("If you chose B, you're in good company")) {
    return (
      <p className="text-[1.22rem] sm:text-[1.35rem] leading-[1.6] italic font-medium text-slide-text bg-white/50 border border-slide-accent/35 rounded-lg px-4 py-3">
        {text}
      </p>
    )
  }

  return <p className={classes[style ?? 'normal'] ?? classes.normal}>{renderNoNamesEmphasis(text)}</p>
}

function renderNoNamesEmphasis(text: string) {
  const needle = 'no names'
  const lower = text.toLowerCase()
  const idx = lower.indexOf(needle)
  if (idx === -1) return text
  const before = text.slice(0, idx)
  const match = text.slice(idx, idx + needle.length)
  const after = text.slice(idx + needle.length)
  return (
    <>
      {before}
      <span
        className="inline-flex items-center rounded-full px-2 py-0.5 ml-1 mr-1"
        style={{ backgroundColor: 'color-mix(in srgb, var(--slide-accent) 22%, transparent)' }}
      >
        <strong>{match}</strong>
      </span>
      {after}
    </>
  )
}

function BulletsRenderer({ items, ordered }: { items: string[]; ordered?: boolean }) {
  if (ordered) {
    return (
      <ol className="space-y-3 pl-0 list-none counter-reset-custom">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[1.3rem] text-slide-text leading-relaxed">
            <span className="shrink-0 w-6 h-6 rounded-full bg-slide-heading/10 text-slide-heading text-sm font-semibold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    )
  }

  return (
    <ul className="space-y-3 pl-0 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[1.3rem] text-slide-text leading-relaxed">
          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-slide-accent mt-2.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function NumberedGroupRenderer({ groups }: { groups: { number: string; title: string; items: string[] }[] }) {
  return (
    <div className="space-y-6">
      {groups.map((group, i) => (
        <div key={i} className="flex gap-4">
          <span className="number-badge mt-0.5">{group.number}</span>
          <div className="flex-1">
            <p className="text-[1.25rem] sm:text-[1.4rem] font-bold text-slide-heading tracking-[-0.01em]">
              {group.title}
            </p>
            <ul className="mt-2 space-y-1.5 pl-0 list-none">
              {group.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 text-[1.1rem] text-slide-text leading-relaxed">
                  <span className="shrink-0 w-1 h-1 rounded-full bg-slide-accent/60 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

function QuoteRenderer({ text, attribution, boxed }: { text: string; attribution?: string; boxed?: boolean }) {
  if (boxed) {
    return (
      <div
        className="rounded-xl relative overflow-hidden"
        style={{
          border: '3px solid color-mix(in srgb, var(--slide-accent) 45%, white)',
          backgroundColor: 'color-mix(in srgb, var(--slide-accent) 8%, white)',
          padding: '1.75rem 2.25rem',
        }}
      >
        <span
          aria-hidden
          className="absolute left-4 top-1 font-heading"
          style={{ fontSize: '3.2rem', color: 'color-mix(in srgb, var(--slide-accent) 65%, transparent)', lineHeight: 1 }}
        >
          &ldquo;
        </span>
        <p className="text-[1.25rem] sm:text-[1.4rem] italic text-slide-text leading-relaxed font-heading">
          {text}
        </p>
        <span
          aria-hidden
          className="absolute right-5 bottom-0 font-heading"
          style={{ fontSize: '2.6rem', color: 'color-mix(in srgb, var(--slide-accent) 55%, transparent)', lineHeight: 1 }}
        >
          &rdquo;
        </span>
        {attribution && (
          <p className="mt-3 text-sm text-slide-text/55 font-sans">— {attribution}</p>
        )}
      </div>
    )
  }
  return (
    <blockquote
      className="pl-5"
      style={{ borderLeft: '3px solid var(--slide-accent)' }}
    >
      <p className="text-[1.25rem] italic text-slide-text leading-relaxed font-heading">
        &ldquo;{text}&rdquo;
      </p>
      {attribution && (
        <p className="mt-2 text-sm text-slide-text/55 font-sans">— {attribution}</p>
      )}
    </blockquote>
  )
}

function NegationRenderer({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-lg"
          style={{
            padding: '0.75rem 1rem',
            borderLeft: '3px solid var(--uni-red)',
            backgroundColor: 'rgba(230, 57, 70, 0.04)',
          }}
        >
          <span className="text-uni-red font-bold text-lg shrink-0 mt-0.5">✘</span>
          <p className="text-[1.15rem] text-slide-text leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  )
}

function TwoColumnRenderer({
  left,
  right,
  centerArrow,
}: {
  left: { heading: string; items: string[]; color: 'red' | 'green' }
  right: { heading: string; items: string[]; color: 'red' | 'green' }
  centerArrow?: string
}) {
  const borderColor = (c: 'red' | 'green') =>
    c === 'red' ? '#E63946' : '#52B788'
  const bgColor = (c: 'red' | 'green') =>
    c === 'red' ? 'rgba(230, 57, 70, 0.05)' : 'rgba(82, 183, 136, 0.05)'
  const headingColor = (c: 'red' | 'green') =>
    c === 'red' ? 'text-uni-red' : 'text-uni-green'

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="grid grid-cols-2 gap-6 w-full items-stretch">
        {[left, right].map((side, i) => (
          <div
            key={i}
            className="rounded-xl h-full flex flex-col"
            style={{
              border: `2px solid ${borderColor(side.color)}`,
              backgroundColor: bgColor(side.color),
              padding: '1.4rem 1.3rem',
              minHeight: '17rem',
            }}
          >
            <h3 className={`text-[1.2rem] sm:text-[1.5rem] font-bold ${headingColor(side.color)} mb-3 leading-snug`}>
              {side.heading}
            </h3>
            <div className="space-y-2 mt-auto">
              {side.items.map((item, j) => (
                <p key={j} className="text-[1.12rem] text-slide-text leading-relaxed">{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {centerArrow && (
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-12 bg-slide-accent" />
          <p className="text-lg sm:text-xl font-bold text-slide-heading text-center">
            {centerArrow}
          </p>
          <div className="h-[2px] w-12 bg-slide-accent" />
        </div>
      )}
    </div>
  )
}

function RevealRenderer({
  items,
  bottomLine,
}: {
  items: { label: string; text: string; correct: boolean; emphasis?: boolean }[]
  bottomLine?: string
}) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 rounded-lg transition-all duration-300 ${
            item.emphasis ? 'ring-2 ring-uni-red/30' : ''
          }`}
          style={{
            border: item.correct
              ? '2px solid #52B788'
              : item.emphasis
                ? '2px solid rgba(230, 57, 70, 0.45)'
                : '1px solid #CBD5E1',
            backgroundColor: item.correct
              ? 'rgba(82, 183, 136, 0.08)'
              : item.emphasis
                ? 'rgba(230, 57, 70, 0.09)'
                : 'rgba(241, 245, 249, 0.55)',
            padding: '1rem 1.25rem',
            opacity: item.correct || item.emphasis ? 1 : 0.86,
          }}
        >
          <span className={`font-bold text-lg shrink-0 mt-0.5 ${item.correct ? 'text-uni-green' : 'text-uni-red'}`}>
            {item.correct ? '✓' : '✘'}
          </span>
          <div className="flex-1">
            <span className="font-bold text-slide-text">{item.label}: </span>
            <span className={`text-slide-text ${item.emphasis ? 'font-semibold text-[1.06em]' : ''}`}>{item.text}</span>
          </div>
        </div>
      ))}
      {bottomLine && (
        <p className="text-lg sm:text-xl font-bold text-slide-heading text-center mt-5 pt-4"
           style={{ borderTop: '1px solid rgba(45, 45, 45, 0.1)' }}>
          {bottomLine}
        </p>
      )}
    </div>
  )
}

function SplitRenderer({
  left,
  right,
}: {
  left: { heading: string; items: string[] }
  right: { heading: string; items: string[] }
}) {
  return (
    <div className="grid grid-cols-2 gap-6 w-full">
      {[left, right].map((side, i) => (
        <div
          key={i}
          className="rounded-xl"
          style={{
            border: '1px solid color-mix(in srgb, var(--slide-accent) 25%, transparent)',
            padding: '1.25rem 1.5rem',
          }}
        >
          <h3 className="text-lg sm:text-xl font-bold mb-3"
              style={{ color: 'var(--slide-heading)' }}>
            {side.heading}
          </h3>
          <div className="space-y-1.5">
            {side.items.map((item, j) => (
              <p key={j} className="text-[1.05rem] text-slide-text leading-relaxed">{item}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ChecklistRenderer({ items }: { items: { text: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg"
          style={{
            padding: '0.625rem 1rem',
            backgroundColor: 'rgba(82, 183, 136, 0.06)',
            borderLeft: '3px solid #52B788',
          }}
        >
          <span className="text-uni-green font-bold text-lg">✓</span>
          <p className="text-[1.15rem] text-slide-text line-through decoration-1 decoration-slide-text/30">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  )
}

function KeyPhraseRenderer({ text, highlight }: { text: string; highlight?: string }) {
  const styles: Record<string, { bg: string; text: string; border: string }> = {
    gold: { bg: 'rgba(255, 183, 3, 0.15)', text: '#2D2D2D', border: '2px solid rgba(255, 183, 3, 0.4)' },
    green: { bg: 'rgba(82, 183, 136, 0.1)', text: '#52B788', border: '2px solid rgba(82, 183, 136, 0.3)' },
    red: { bg: 'rgba(230, 57, 70, 0.08)', text: '#E63946', border: '2px solid rgba(230, 57, 70, 0.3)' },
    accent: { bg: 'color-mix(in srgb, var(--slide-accent) 12%, transparent)', text: 'var(--slide-heading)', border: '2px solid color-mix(in srgb, var(--slide-accent) 35%, transparent)' },
  }
  const s = styles[highlight ?? 'gold'] ?? styles.gold!
  return (
    <div
      className="inline-block rounded-lg font-bold text-lg sm:text-xl"
      style={{
        backgroundColor: s!.bg,
        color: s!.text,
        border: s!.border,
        padding: '0.625rem 1.25rem',
      }}
    >
      {text}
    </div>
  )
}

function FootnoteRenderer({ text }: { text: string }) {
  return (
    <p className="text-[0.8rem] italic mt-3" style={{ color: 'var(--slide-text)', opacity: 0.45 }}>
      {text}
    </p>
  )
}

function ScaleRenderer({
  left,
  right,
}: {
  left: { label: string; value: string }
  right: { label: string; value: string }
}) {
  return (
    <div className="flex items-center justify-center gap-4 py-3">
      <div className="text-center flex-1" style={{ maxWidth: '200px' }}>
        <p className="text-lg sm:text-xl font-bold text-slide-heading">{left.label}</p>
        <p className="text-sm text-slide-text/70 mt-1">{left.value}</p>
      </div>
      <div className="flex-1 flex items-center gap-2 justify-center" style={{ maxWidth: '280px' }}>
        <div className="h-[2px] flex-1" style={{ backgroundColor: 'var(--slide-accent)' }} />
        <span className="text-sm font-semibold text-slide-accent whitespace-nowrap">same mechanism</span>
        <div className="h-[2px] flex-1" style={{ backgroundColor: 'var(--slide-accent)' }} />
        <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0">
          <path d="M2 6h8M7 3l3 3-3 3" stroke="var(--slide-accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="text-center flex-1" style={{ maxWidth: '200px' }}>
        <p className="text-lg sm:text-xl font-bold text-slide-heading">{right.label}</p>
        <p className="text-sm text-slide-text/70 mt-1">{right.value}</p>
      </div>
    </div>
  )
}
