/**
 * FitnessContext — Used on slide 2.10
 * Two-panel visual: same organism, different environments, different outcomes.
 * Demonstrates context-dependent fitness.
 */
export function FitnessContext() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-5 w-full">
        {/* Panel 1: Abundant */}
        <div
          className="rounded-xl text-center"
          style={{
            border: '1px solid rgba(82, 183, 136, 0.3)',
            backgroundColor: 'rgba(82, 183, 136, 0.04)',
            padding: '1.25rem',
          }}
        >
          <svg viewBox="0 0 120 80" className="w-full mx-auto" style={{ maxHeight: '100px', maxWidth: '160px' }}>
            {/* Abundant environment */}
            <rect x="0" y="60" width="120" height="20" rx="2" fill="#52B788" opacity={0.15} />
            {/* Trees/food */}
            {[20, 50, 80, 105].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="60" x2={x} y2="45" stroke="#52B788" strokeWidth="2" />
                <circle cx={x} cy="40" r="8" fill="#52B788" opacity={0.3} />
              </g>
            ))}
            {/* Animal silhouette (larger = advantage here) */}
            <ellipse cx="60" cy="55" rx="16" ry="10" fill="#1E3A5F" opacity={0.7} />
            <circle cx="72" cy="48" r="5" fill="#1E3A5F" opacity={0.7} />
          </svg>
          <p className="text-sm font-semibold text-uni-green mt-2">
            Large body → advantage
          </p>
          <p className="text-xs text-darwin-charcoal/60 mt-1">Food abundant</p>
        </div>

        {/* Panel 2: Scarce */}
        <div
          className="rounded-xl text-center"
          style={{
            border: '1px solid rgba(230, 57, 70, 0.3)',
            backgroundColor: 'rgba(230, 57, 70, 0.04)',
            padding: '1.25rem',
          }}
        >
          <svg viewBox="0 0 120 80" className="w-full mx-auto" style={{ maxHeight: '100px', maxWidth: '160px' }}>
            {/* Sparse environment */}
            <rect x="0" y="60" width="120" height="20" rx="2" fill="#E63946" opacity={0.08} />
            {/* Sparse trees */}
            <g>
              <line x1="80" y1="60" x2="80" y2="48" stroke="#999" strokeWidth="1.5" />
              <circle cx="80" cy="44" r="5" fill="#999" opacity={0.2} />
            </g>
            {/* Same animal (larger = liability here) */}
            <ellipse cx="45" cy="55" rx="16" ry="10" fill="#1E3A5F" opacity={0.5} />
            <circle cx="57" cy="48" r="5" fill="#1E3A5F" opacity={0.5} />
            {/* Hunger indicator */}
            <text x="45" y="40" textAnchor="middle" fontSize="7" fill="#E63946" fontWeight="bold">!</text>
          </svg>
          <p className="text-sm font-semibold text-uni-red mt-2">
            Large body → liability
          </p>
          <p className="text-xs text-darwin-charcoal/60 mt-1">Food scarce</p>
        </div>
      </div>

      <p className="text-base sm:text-lg font-bold text-darwin-navy text-center mt-4">
        Fitness is always context-dependent.
      </p>
    </div>
  )
}
