interface ImageSlotProps {
  /** Path to image in public folder, e.g. /images/slide01-iris.jpg */
  src?: string | null
  /** Fallback gradient when no image (placeholder) */
  fallbackGradient?: string
  /** Shown on placeholder when no image */
  description?: string
  /** Optional AI prompt for placeholder label */
  prompt?: string
  className?: string
  /** Apply subtle vignette per spec */
  vignette?: boolean
  /** How the image fits in the slot; use 'contain' for diagrams so the full image is visible */
  objectFit?: 'cover' | 'contain'
}

export function ImageSlot({
  src,
  fallbackGradient = 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)',
  description,
  prompt,
  className = '',
  vignette = true,
  objectFit = 'cover',
}: ImageSlotProps) {
  const hasImage = src && src.length > 0
  const objectFitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover'

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ minHeight: 200 }}
    >
      {hasImage ? (
        <>
          <img
            src={src}
            alt={description ?? ''}
            className={`w-full h-full ${objectFitClass} object-center`}
            draggable={false}
          />
          {vignette && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                // Spec asks for a subtle vignette (~5%) on photo-heavy slides.
                background:
                  'radial-gradient(ellipse at center, rgba(0,0,0,0) 62%, rgba(0,0,0,0.18) 100%)',
              }}
            />
          )}
        </>
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
          style={{ background: fallbackGradient }}
        >
          <span className="text-slate-400 text-sm font-sans">
            {description ?? 'Image placeholder'}
          </span>
          {prompt && (
            <span className="text-slate-600 text-xs mt-2 max-w-md">
              {prompt}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
