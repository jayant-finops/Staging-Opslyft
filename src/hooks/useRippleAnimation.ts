'use client'

import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

export function useRippleAnimation(autoStart: boolean = true) {
  const controls = useAnimation()

  useEffect(() => {
    if (!autoStart) return

    const startAnimation = async () => {
      await controls.start({
        scale: [1, 1.2, 1],
        opacity: [0.7, 0.3, 0.7],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      })
    }

    startAnimation()
  }, [controls, autoStart])

  return controls
}

// More complex ripple effect with multiple rings
export function useMultiRippleAnimation() {
  const ring1 = useAnimation()
  const ring2 = useAnimation()
  const ring3 = useAnimation()

  useEffect(() => {
    const startAnimations = async () => {
      // Stagger the animations for a more complex effect
      ring1.start({
        scale: [1, 1.4, 1],
        opacity: [0.8, 0.2, 0.8],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0,
        },
      })

      ring2.start({
        scale: [1, 1.3, 1],
        opacity: [0.6, 0.1, 0.6],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        },
      })

      ring3.start({
        scale: [1, 1.5, 1],
        opacity: [0.4, 0.05, 0.4],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        },
      })
    }

    startAnimations()
  }, [ring1, ring2, ring3])

  return { ring1, ring2, ring3 }
}
