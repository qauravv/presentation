import { useEffect, useCallback } from 'react'

export interface UseKeyboardOptions {
  onNext: () => void
  onPrev: () => void
  onToggleNotes?: () => void
  onToggleFullscreen?: () => void
  onGoToSlide?: () => void
  onToggleAppendix?: () => void
  onCycleDeck?: () => void
  onEscape?: () => void
  enabled?: boolean
}

export function useKeyboard({
  onNext,
  onPrev,
  onToggleNotes,
  onToggleFullscreen,
  onGoToSlide,
  onToggleAppendix,
  onCycleDeck,
  onEscape,
  enabled = true,
}: UseKeyboardOptions) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!enabled) return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          onNext()
          break
        case 'ArrowLeft':
          e.preventDefault()
          onPrev()
          break
        case 's':
        case 'S':
          e.preventDefault()
          onToggleNotes?.()
          break
        case 'f':
        case 'F':
          e.preventDefault()
          onToggleFullscreen?.()
          break
        case 'g':
        case 'G':
          e.preventDefault()
          onGoToSlide?.()
          break
        case 'a':
        case 'A':
          e.preventDefault()
          onToggleAppendix?.()
          break
        case 'd':
        case 'D':
          e.preventDefault()
          onCycleDeck?.()
          break
        case 'Escape':
          e.preventDefault()
          onEscape?.()
          if (document.fullscreenElement) {
            document.exitFullscreen()
          }
          break
        default:
          break
      }
    },
    [
      enabled,
      onNext,
      onPrev,
      onToggleNotes,
      onToggleFullscreen,
      onGoToSlide,
      onToggleAppendix,
      onCycleDeck,
      onEscape,
    ]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
}
