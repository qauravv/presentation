import { useCallback, useState } from 'react'
import type { SlideConfig } from '../types'

export interface UsePresentationOptions {
  slides: SlideConfig[]
  onSlideChange?: (index: number, slide: SlideConfig) => void
}

export function usePresentation({ slides, onSlideChange }: UsePresentationOptions) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [stepIndex, setStepIndex] = useState(0)

  const currentSlide = slides[slideIndex] ?? null
  const totalSlides = slides.length
  const totalSteps = currentSlide?.totalSteps ?? 1
  const isAtLastStep = stepIndex >= totalSteps - 1
  const isAtFirstStep = stepIndex <= 0
  const isFirstSlide = slideIndex <= 0
  const isLastSlide = slideIndex >= totalSlides - 1

  const goNext = useCallback(() => {
    if (isAtLastStep) {
      if (!isLastSlide) {
        setSlideIndex((i) => i + 1)
        setStepIndex(0)
        const next = slides[slideIndex + 1]
        if (next) onSlideChange?.(slideIndex + 1, next)
      }
    } else {
      setStepIndex((s) => s + 1)
    }
  }, [isAtLastStep, isLastSlide, slideIndex, slides, onSlideChange])

  const goPrev = useCallback(() => {
    if (isAtFirstStep) {
      if (!isFirstSlide) {
        const prevSlide = slides[slideIndex - 1]
        const prevSteps = prevSlide?.totalSteps ?? 1
        setSlideIndex((i) => i - 1)
        setStepIndex(Math.max(0, prevSteps - 1))
        if (prevSlide) onSlideChange?.(slideIndex - 1, prevSlide)
      }
    } else {
      setStepIndex((s) => Math.max(0, s - 1))
    }
  }, [isAtFirstStep, isFirstSlide, slideIndex, slides, onSlideChange])

  const goToSlide = useCallback(
    (index: number) => {
      const i = Math.max(0, Math.min(index, totalSlides - 1))
      setSlideIndex(i)
      setStepIndex(0)
      const slide = slides[i]
      if (slide) onSlideChange?.(i, slide)
    },
    [totalSlides, slides, onSlideChange]
  )

  return {
    slideIndex,
    stepIndex,
    currentSlide,
    totalSlides,
    totalSteps,
    goNext,
    goPrev,
    goToSlide,
    isFirstSlide,
    isLastSlide,
    isAtFirstStep,
    isAtLastStep,
  }
}
