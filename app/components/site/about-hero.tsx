'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (prefersReducedMotion) {
    return (
      <div className="about-hero-premium">
        <div className="about-hero-content">
          <span className="eyebrow">A little about us</span>
          <h1>Thoughtful solutions for more open, everyday living.</h1>
          <p>CJ Invisible Grills helps households in Bengaluru and Mysuru explore grill, netting and related solutions for the spaces they use every day.</p>
        </div>
        <div className="about-hero-visual">
          <div className="hero-frame">
            <Image
              src="/images/hero-balcony.png"
              alt="Illustrative modern apartment balcony with subtle safety cable detailing"
              fill
              sizes="(max-width: 760px) 90vw, 50vw"
              className="hero-frame-image"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="about-hero-premium">
      <motion.div
        className="about-hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8, ease: [0.22, 0.03, 0.26, 1] }}
      >
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 0, 0.2, 1] }}
        >
          A little about us
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.03, 0.26, 1] }}
        >
          Thoughtful solutions for more open, everyday living.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.33, 0, 0.2, 1] }}
        >
          CJ Invisible Grills helps households in Bengaluru and Mysuru explore grill, netting and related solutions for the spaces they use every day.
        </motion.p>
      </motion.div>

      <motion.div
        className="about-hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 0.03, 0.26, 1] }}
      >
        <motion.div
          className="hero-frame"
          initial={{ rotateX: 8, rotateY: -5 }}
          animate={{ rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 0.03, 0.26, 1] }}
        >
          <motion.div
            className="hero-frame-inner"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 0.03, 0.26, 1] }}
          >
            <Image
              src="/images/hero-balcony.png"
              alt="Illustrative modern apartment balcony with subtle safety cable detailing"
              fill
              sizes="(max-width: 760px) 90vw, 50vw"
              className="hero-frame-image"
              priority
            />
          </motion.div>
          <div className="hero-frame-glow" />
        </motion.div>
      </motion.div>
    </div>
  )
}
