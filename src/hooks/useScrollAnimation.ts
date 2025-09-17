'use client'

import { useRef } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

interface UseScrollAnimationOptions {
  offset?: ["start start" | "start end" | "end start" | "end end", "start start" | "start end" | "end start" | "end end"]
  target?: React.RefObject<HTMLDivElement>
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { offset = ['start end', 'end start'] as const, target } = options
  const ref = useRef<HTMLDivElement>(null)
  const targetRef = target || ref

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset,
  })

  return {
    ref: targetRef,
    scrollYProgress,
  }
}

export function useParallaxEffect(
  scrollYProgress: MotionValue<number>,
  distance: number = 50
) {
  return useTransform(scrollYProgress, [0, 1], [0, distance])
}

export function useScaleEffect(
  scrollYProgress: MotionValue<number>,
  scaleRange: [number, number] = [0.8, 1.2]
) {
  return useTransform(scrollYProgress, [0, 1], scaleRange)
}

export function useOpacityEffect(
  scrollYProgress: MotionValue<number>,
  opacityRange: [number, number] = [0, 1]
) {
  return useTransform(scrollYProgress, [0, 1], opacityRange)
}

// Hook for laptop zoom effect in hero section
export function useLaptopZoomEffect() {
  const { ref, scrollYProgress } = useScrollAnimation({
    offset: ['start end', 'end start'] as const,
  })

  // Scale from larger default to even larger on scroll
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 2])
  
  // Keep laptop centered during zoom
  const x = useTransform(scrollYProgress, [0, 0.8], [0, -20])
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -30])

  return {
    ref,
    scale,
    x,
    y,
    scrollYProgress,
  }
}
