/**
 * BranchingVsLadder — Used on slide 6.3
 * Side-by-side: Ladder (WRONG, red) vs Branching Tree (CORRECT, green).
 * KEY: All branch tips at the SAME horizontal level.
 * Resolution palette (cream bg, gold accents).
 */
export function BranchingVsLadder() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-5 sm:gap-6 w-full">
        {/* Left: Ladder (WRONG) */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            border: '2px solid #E63946',
            backgroundColor: 'rgba(230, 57, 70, 0.03)',
            padding: '1.25rem',
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-uni-red">LADDER</h3>
            <span className="text-uni-red font-bold text-xl">✘</span>
          </div>

          <svg viewBox="0 0 160 220" className="w-full mx-auto" style={{ maxHeight: '280px', maxWidth: '200px', display: 'block' }}>
            {/* Ladder rungs */}
            {[
              { y: 190, label: 'Bacteria' },
              { y: 150, label: 'Fish' },
              { y: 110, label: 'Reptiles' },
              { y: 70, label: 'Mammals' },
              { y: 30, label: 'Humans' },
            ].map((item, i) => (
              <g key={i}>
                <rect x="40" y={item.y} width="80" height="24" rx="4" fill="rgba(230, 57, 70, 0.08)" stroke="#E63946" strokeWidth="1" />
                <text x="80" y={item.y + 15} textAnchor="middle" fontSize="10" fill="#2D2D2D" fontWeight="500" fontFamily="Inter, sans-serif">
                  {item.label}
                </text>
                {i > 0 && (
                  <g>
                    <line x1="80" y1={item.y + 24 + 4} x2="80" y2={item.y + 24 + 16} stroke="#E63946" strokeWidth="1.5" />
                    <polygon points={`76,${item.y + 24 + 14} 80,${item.y + 24 + 18} 84,${item.y + 24 + 14}`} fill="#E63946" />
                  </g>
                )}
              </g>
            ))}
          </svg>

          <p className="text-sm font-semibold text-uni-red text-center mt-2">This is wrong.</p>
        </div>

        {/* Right: Branching Tree (CORRECT) */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            border: '2px solid #52B788',
            backgroundColor: 'rgba(82, 183, 136, 0.03)',
            padding: '1.25rem',
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-uni-green">BRANCHING TREE</h3>
            <span className="text-uni-green font-bold text-xl">✓</span>
          </div>

          <svg viewBox="0 0 200 220" className="w-full mx-auto" style={{ maxHeight: '280px', maxWidth: '250px', display: 'block' }}>
            {/* Trunk + major branches */}
            <line x1="100" y1="210" x2="100" y2="170" stroke="#C9A961" strokeWidth="2.5" />
            <line x1="100" y1="170" x2="70" y2="150" stroke="#C9A961" strokeWidth="2" />
            <line x1="100" y1="170" x2="130" y2="150" stroke="#C9A961" strokeWidth="2" />

            {/* Mid-level branching */}
            <line x1="70" y1="150" x2="35" y2="95" stroke="#C9A961" strokeWidth="1.8" />
            <line x1="70" y1="150" x2="70" y2="95" stroke="#C9A961" strokeWidth="1.8" />
            <line x1="70" y1="150" x2="95" y2="95" stroke="#C9A961" strokeWidth="1.8" />
            <line x1="130" y1="150" x2="105" y2="95" stroke="#C9A961" strokeWidth="1.8" />
            <line x1="130" y1="150" x2="130" y2="95" stroke="#C9A961" strokeWidth="1.8" />
            <line x1="130" y1="150" x2="165" y2="95" stroke="#C9A961" strokeWidth="1.8" />

            {/* Endpoint stems: ALL terminate at same vertical level */}
            <line x1="35" y1="95" x2="15" y2="25" stroke="#C9A961" strokeWidth="1.2" />
            <line x1="35" y1="95" x2="30" y2="25" stroke="#C9A961" strokeWidth="1.2" />
            <line x1="70" y1="95" x2="50" y2="25" stroke="#C9A961" strokeWidth="1.2" />
            <line x1="70" y1="95" x2="70" y2="25" stroke="#C9A961" strokeWidth="1.2" />
            <line x1="95" y1="95" x2="90" y2="25" stroke="#C9A961" strokeWidth="1.2" />
            <line x1="105" y1="95" x2="110" y2="25" stroke="#C9A961" strokeWidth="1.2" />
            <line x1="130" y1="95" x2="130" y2="25" stroke="#C9A961" strokeWidth="1.2" />
            <line x1="130" y1="95" x2="150" y2="25" stroke="#C9A961" strokeWidth="1.2" />
            <line x1="165" y1="95" x2="170" y2="25" stroke="#C9A961" strokeWidth="1.2" />

            {/* ALL tips at same Y coordinate */}
            {[
              { x: 15, label: 'Bacteria' },
              { x: 30, label: 'Archaea' },
              { x: 50, label: 'Fungi' },
              { x: 70, label: 'Plants' },
              { x: 90, label: 'Insects' },
              { x: 110, label: 'Fish' },
              { x: 130, label: 'Reptiles' },
              { x: 150, label: 'Birds' },
              { x: 170, label: 'Mammals' },
            ].map((tip, i) => (
              <g key={i}>
                <circle cx={tip.x} cy={20} r="3" fill="#52B788" />
                <text
                  x={tip.x}
                  y={12}
                  textAnchor="middle"
                  fontSize="7"
                  fill="#2D2D2D"
                  fontWeight="500"
                  fontFamily="Inter, sans-serif"
                >
                  {tip.label}
                </text>
              </g>
            ))}

            {/* Common ancestor label */}
            <text x="100" y="218" textAnchor="middle" fontSize="7" fill="#999" fontStyle="italic" fontFamily="Inter, sans-serif">
              common ancestor
            </text>
          </svg>

          <p className="text-sm font-semibold text-uni-green text-center mt-2">This is accurate.</p>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center mt-5">
        <p className="text-lg sm:text-xl font-bold text-darwin-navy">
          No ladder. No endpoint. No species more &lsquo;evolved&rsquo; than another.
        </p>
        <p className="text-sm sm:text-base text-darwin-charcoal/70 mt-1">
          A tree of extraordinary diversity, produced by a process that has no author.
        </p>
      </div>
    </div>
  )
}
