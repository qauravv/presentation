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
            className={`w-full h-full object-${objectFit}`}
          />
          {vignette && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 15% 5% rgba(0,0,0,0.5)',
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
