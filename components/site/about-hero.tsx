'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

export function AboutHero() {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (prefersReducedMotion) {
    return (
      <div className="about-hero-premium">
        <div className="about-hero-content">
          <span className="eyebrow">A little about us</span>
          <h1 className="about-hero-title">
            Thoughtful solutions for more open, everyday living.
          </h1>
          <p className="about-hero-description">
            CJ Invisible Grills helps households in Bengaluru and Mysuru explore grill, netting and related solutions for the spaces they use every day.
          </p>
        </div>
        <div className="about-hero-visual">
          <div className="hero-frame">
            <Image
              src="/images/hero-balcony.png"
              alt="Illustrative modern apartment balcony with subtle safety cable detailing"
              fill
              priority
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
      {/* Background Architectural Layer */}
      <div className="about-hero-backdrop" aria-hidden="true">
        <div className="about-hero-ambient-glow" />
        <div className="about-hero-grid-pattern" />
      </div>

      {/* Copy Column with Rapid Fluid Entrance */}
      <motion.div
        className="about-hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMounted ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="overflow-hidden mb-3">
          <motion.span
            className="eyebrow about-hero-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 10 }}
            transition={{ duration: 0.35, ease: FAST_EASE }}
          >
            A little about us
          </motion.span>
        </div>

        <h1 className="about-hero-title">
          <span className="about-hero-title-line">
            <motion.span
              className="about-hero-title-text"
              initial={{ y: '100%' }}
              animate={{ y: isMounted ? '0%' : '100%' }}
              transition={{ duration: 0.45, delay: 0.04, ease: FAST_EASE }}
            >
              Thoughtful solutions
            </motion.span>
          </span>
          <span className="about-hero-title-line">
            <motion.span
              className="about-hero-title-text"
              initial={{ y: '100%' }}
              animate={{ y: isMounted ? '0%' : '100%' }}
              transition={{ duration: 0.45, delay: 0.08, ease: FAST_EASE }}
            >
              for more open,
            </motion.span>
          </span>
          <span className="about-hero-title-line">
            <motion.span
              className="about-hero-title-text"
              initial={{ y: '100%' }}
              animate={{ y: isMounted ? '0%' : '100%' }}
              transition={{ duration: 0.45, delay: 0.12, ease: FAST_EASE }}
            >
              everyday living.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="about-hero-description"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 10 }}
          transition={{ duration: 0.4, delay: 0.16, ease: FAST_EASE }}
        >
          CJ Invisible Grills helps households in Bengaluru and Mysuru explore grill, netting and related solutions for the spaces they use every day.
        </motion.p>

        <motion.div
          className="about-hero-meta"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 8 }}
          transition={{ duration: 0.35, delay: 0.2, ease: FAST_EASE }}
        >
          <span className="about-hero-meta-dot" />
          <span className="about-hero-meta-text">Crafted for architectural clarity · Bengaluru &amp; Mysuru</span>
        </motion.div>
      </motion.div>

      {/* Visual Column */}
      <motion.div
        className="about-hero-visual"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 15 }}
        transition={{ duration: 0.5, delay: 0.08, ease: FAST_EASE }}
      >
        <div className="hero-frame-3d-wrapper">
          <div className="hero-frame-shadow" />
          <motion.div
            className="hero-frame"
            initial={{ clipPath: 'inset(6% 6% 6% 6% round 20px)' }}
            animate={{ clipPath: isMounted ? 'inset(0% 0% 0% 0% round 20px)' : 'inset(6% 6% 6% 6% round 20px)' }}
            transition={{ duration: 0.55, delay: 0.1, ease: FAST_EASE }}
          >
            <motion.div
              className="hero-frame-inner"
              initial={{ scale: 1.06 }}
              animate={{ scale: isMounted ? 1 : 1.06 }}
              transition={{ duration: 0.6, delay: 0.1, ease: FAST_EASE }}
            >
              <Image
                src="/images/hero-balcony.png"
                alt="Illustrative modern apartment balcony with subtle safety cable detailing"
                fill
                priority
                sizes="(max-width: 760px) 90vw, 50vw"
                className="hero-frame-image"
              />
              <div className="hero-frame-gradient-overlay" />
            </motion.div>
            <div className="hero-frame-specular" />
          </motion.div>

          {/* Floating Architectural Badge */}
          <motion.div
            className="hero-architectural-tag"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: isMounted ? 1 : 0, y: isMounted ? 0 : 6 }}
            transition={{ duration: 0.4, delay: 0.25, ease: FAST_EASE }}
          >
            <span className="tag-kicker">Architectural Detail</span>
            <span className="tag-caption">High-Tensile SS 316 Cables</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
