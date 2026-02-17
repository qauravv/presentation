/**
 * EyeStages — Used on slide 3.3
 * Five panels showing progressively complex eye cross-sections.
 * NO ARROWS between panels. Each is visually ISOLATED.
 * "Complete functional system" label under each.
 * SVG-based for crispness.
 */
export function EyeStages() {
  const stages = [
    { title: 'Light-sensitive patch', draw: drawPatch },
    { title: 'Cup shape', draw: drawCup },
    { title: 'Pinhole', draw: drawPinhole },
    { title: 'Lens', draw: drawLens },
    { title: 'Camera-type eye', draw: drawCameraEye },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-5 gap-3 sm:gap-4">
        {stages.map((stage, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* SVG diagram */}
            <div
              className="w-full aspect-square rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(30, 58, 95, 0.1)',
              }}
            >
              <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
                {stage.draw()}
              </svg>
            </div>
            {/* Caption */}
            <p className="text-xs sm:text-sm font-semibold text-darwin-navy mt-2 text-center leading-tight">
              {stage.title}
            </p>
            <p className="text-[0.6rem] sm:text-[0.7rem] tracking-wider uppercase mt-1 text-center font-semibold"
               style={{ color: '#D4A574' }}>
              Complete functional system
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function drawPatch() {
  return (
    <>
      {/* Flat surface */}
      <line x1="25" y1="60" x2="75" y2="60" stroke="#1E3A5F" strokeWidth="2" />
      {/* Photoreceptor cells */}
      {[32, 42, 52, 62].map((x) => (
        <rect key={x} x={x} y={52} width={4} height={8} rx={1} fill="#D4A574" />
      ))}
      {/* Light rays */}
      <line x1="47" y1="20" x2="47" y2="48" stroke="#D4A574" strokeWidth="1" strokeDasharray="3,2" opacity={0.6} />
      <line x1="35" y1="22" x2="40" y2="48" stroke="#D4A574" strokeWidth="1" strokeDasharray="3,2" opacity={0.4} />
      <line x1="60" y1="22" x2="55" y2="48" stroke="#D4A574" strokeWidth="1" strokeDasharray="3,2" opacity={0.4} />
    </>
  )
}

function drawCup() {
  return (
    <>
      {/* Cup shape */}
      <path d="M30 40 Q30 70 50 75 Q70 70 70 40" fill="none" stroke="#1E3A5F" strokeWidth="2" />
      {/* Photoreceptors lining inside */}
      {[35, 42, 50, 58, 65].map((x, i) => {
        const y = 42 + Math.abs(x - 50) * 0.6
        return <rect key={i} x={x - 2} y={y} width={4} height={6} rx={1} fill="#D4A574" />
      })}
      {/* Light */}
      <line x1="50" y1="15" x2="50" y2="38" stroke="#D4A574" strokeWidth="1" strokeDasharray="3,2" opacity={0.6} />
    </>
  )
}

function drawPinhole() {
  return (
    <>
      {/* Near-closed sphere */}
      <path d="M38 30 Q25 50 30 70 Q40 82 50 82 Q60 82 70 70 Q75 50 62 30" fill="none" stroke="#1E3A5F" strokeWidth="2" />
      {/* Small opening */}
      <line x1="38" y1="30" x2="42" y2="28" stroke="#1E3A5F" strokeWidth="2" />
      <line x1="62" y1="30" x2="58" y2="28" stroke="#1E3A5F" strokeWidth="2" />
      {/* Photoreceptors inside */}
      {[38, 45, 55, 62].map((x, i) => {
        const y = 60 + Math.abs(x - 50) * 0.3
        return <rect key={i} x={x - 1.5} y={y} width={3} height={5} rx={1} fill="#D4A574" />
      })}
      {/* Light through pinhole */}
      <line x1="50" y1="10" x2="50" y2="26" stroke="#D4A574" strokeWidth="1" strokeDasharray="3,2" opacity={0.6} />
      <line x1="50" y1="32" x2="45" y2="58" stroke="#D4A574" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.4} />
      <line x1="50" y1="32" x2="55" y2="58" stroke="#D4A574" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.4} />
    </>
  )
}

function drawLens() {
  return (
    <>
      {/* Sphere */}
      <ellipse cx="50" cy="58" rx="25" ry="28" fill="none" stroke="#1E3A5F" strokeWidth="2" />
      {/* Lens */}
      <ellipse cx="50" cy="33" rx="10" ry="5" fill="rgba(212, 165, 116, 0.2)" stroke="#D4A574" strokeWidth="1.5" />
      {/* Retina at back */}
      <path d="M32 62 Q50 75 68 62" fill="none" stroke="#D4A574" strokeWidth="2" />
      {/* Light rays bending through lens */}
      <polyline points="40,12 45,28 50,60" fill="none" stroke="#D4A574" strokeWidth="0.8" strokeDasharray="3,2" opacity={0.5} />
      <polyline points="60,12 55,28 50,60" fill="none" stroke="#D4A574" strokeWidth="0.8" strokeDasharray="3,2" opacity={0.5} />
      <circle cx="50" cy="60" r="2" fill="#D4A574" opacity={0.7} />
    </>
  )
}

function drawCameraEye() {
  return (
    <>
      {/* Outer eye */}
      <ellipse cx="50" cy="55" rx="28" ry="30" fill="none" stroke="#1E3A5F" strokeWidth="2" />
      {/* Iris */}
      <line x1="38" y1="28" x2="44" y2="30" stroke="#1E3A5F" strokeWidth="1.5" />
      <line x1="62" y1="28" x2="56" y2="30" stroke="#1E3A5F" strokeWidth="1.5" />
      {/* Lens (biconvex) */}
      <ellipse cx="50" cy="32" rx="8" ry="6" fill="rgba(212, 165, 116, 0.15)" stroke="#D4A574" strokeWidth="1.5" />
      {/* Retina (thick, detailed) */}
      <path d="M28 58 Q50 80 72 58" fill="none" stroke="#D4A574" strokeWidth="2.5" />
      {/* Focused light rays */}
      <polyline points="38,10 44,26 50,62" fill="none" stroke="#D4A574" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.5} />
      <polyline points="62,10 56,26 50,62" fill="none" stroke="#D4A574" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.5} />
      <polyline points="50,8 50,26 50,62" fill="none" stroke="#D4A574" strokeWidth="0.8" strokeDasharray="2,2" opacity={0.5} />
      <circle cx="50" cy="62" r="2.5" fill="#D4A574" opacity={0.8} />
      {/* Optic nerve hint */}
      <line x1="50" y1="82" x2="50" y2="90" stroke="#1E3A5F" strokeWidth="1.5" />
    </>
  )
}
