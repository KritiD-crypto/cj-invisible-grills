'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

// Hook to detect mobile viewport
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 760)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

export function CinematicHeroV2() {
  const [showContent, setShowContent] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowContent(true)
      return
    }

    // Mobile: Quick content reveal for immediate engagement
    // Desktop: Smooth delayed entrance
    const timer = setTimeout(() => setShowContent(true), isMobile ? 400 : 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [prefersReducedMotion, isMobile])

  if (prefersReducedMotion) {
    return <StaticHero />
  }

  // Mobile: Premium architectural reveal with elegant zoom and fade
  // Desktop: Smooth cinematic zoom
  const mobileAnimation = {
    scale: 1.22,
    duration: 2.4,
    ease: [0.25, 0.1, 0.25, 1] as any,
    imageOpacity: { initial: 0, animate: 1, duration: 1.0 },
    overlayOpacity: { initial: 0.5, animate: 0.32 }
  }

  const desktopAnimation = {
    scale: 1.18,
    duration: 2.0,
    ease: [0.33, 0.1, 0.2, 1] as any
  }

  const animation = isMobile ? mobileAnimation : desktopAnimation

  return (
    <section className="cinematic-hero-v2">
      {/* Balcony grill image with premium cinematic reveal */}
      <div className="hero-camera-scene">
        <motion.div
          className="camera-layer"
          initial={{ scale: 1, opacity: isMobile ? 0 : 1 }}
          animate={{
            scale: animation.scale,
            opacity: 1
          }}
          transition={{
            scale: { duration: animation.duration, ease: animation.ease },
            opacity: isMobile ? { duration: mobileAnimation.imageOpacity.duration, ease: [0.33, 0, 0.2, 1] } : {}
          }}
        >
          <Image
            src={isMobile ? "/images/grill-detail.png" : "/images/hero-balcony.png"}
            alt="Apartment balcony with invisible safety grills"
            fill
            priority
            quality={95}
            className="layer-image"
            style={{
              objectFit: 'cover',
              objectPosition: isMobile ? 'center 38%' : 'center center'
            }}
            sizes="100vw"
          />
        </motion.div>

        {/* Dynamic atmosphere overlay with refined fade */}
        <motion.div
          className="hero-atmosphere-gradient"
          initial={{ opacity: isMobile ? mobileAnimation.overlayOpacity.initial : 0.35 }}
          animate={{ opacity: showContent ? (isMobile ? mobileAnimation.overlayOpacity.animate : 0.28) : (isMobile ? mobileAnimation.overlayOpacity.initial : 0.35) }}
          transition={{ duration: isMobile ? 1.2 : 1, ease: [0.33, 0, 0.2, 1] }}
        />
      </div>

      {/* Content overlay with elegant staggered entrance */}
      <div className="hero-content-overlay">
        <motion.div
          className="hero-copy-v2"
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={{
            opacity: showContent ? 1 : 0,
            y: showContent ? 0 : (isMobile ? 20 : 30),
          }}
          transition={{ duration: isMobile ? 0.65 : 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          {/* Eyebrow with refined entrance */}
          <motion.span
            className="eyebrow-v2"
            initial={{ opacity: 0, y: isMobile ? 8 : 0 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : (isMobile ? 8 : 0)
            }}
            transition={{ duration: 0.5, delay: showContent ? (isMobile ? 0.05 : 0.1) : 0, ease: [0.33, 0, 0.2, 1] }}
          >
            Made for the way you live
          </motion.span>

          {/* Headline with word-by-word stagger on mobile */}
          <motion.h1
            className="hero-headline-v2"
            initial={{ opacity: 0, y: isMobile ? 12 : 15 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : (isMobile ? 12 : 15),
            }}
            transition={{ duration: isMobile ? 0.7 : 0.6, delay: showContent ? (isMobile ? 0.12 : 0.15) : 0, ease: [0.22, 0.03, 0.26, 1] }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, y: isMobile ? 6 : 0 }}
              animate={{ opacity: showContent ? 1 : 0, y: 0 }}
              transition={{ duration: 0.4, delay: showContent ? (isMobile ? 0.18 : 0.15) : 0 }}
            >
              Safety that lets the{' '}
            </motion.span>
            <motion.em
              className="highlight-word"
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, y: isMobile ? 6 : 0 }}
              animate={{ opacity: showContent ? 1 : 0, y: 0 }}
              transition={{ duration: 0.4, delay: showContent ? (isMobile ? 0.28 : 0.15) : 0 }}
            >
              view
            </motion.em>
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, y: isMobile ? 6 : 0 }}
              animate={{ opacity: showContent ? 1 : 0, y: 0 }}
              transition={{ duration: 0.4, delay: showContent ? (isMobile ? 0.35 : 0.15) : 0 }}
            >
              {' '}breathe.
            </motion.span>
          </motion.h1>

          {/* Subtitle with refined timing */}
          <motion.p
            className="hero-subtitle-v2"
            initial={{ opacity: 0, y: isMobile ? 8 : 0 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : (isMobile ? 8 : 0)
            }}
            transition={{ duration: 0.5, delay: showContent ? (isMobile ? 0.45 : 0.25) : 0, ease: [0.33, 0, 0.2, 1] }}
          >
            Premium Invisible Grills &amp; Safety Solutions
          </motion.p>

          {/* Description with smooth fade */}
          <motion.p
            className="hero-description-v2"
            initial={{ opacity: 0, y: isMobile ? 6 : 0 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : (isMobile ? 6 : 0)
            }}
            transition={{ duration: 0.5, delay: showContent ? (isMobile ? 0.55 : 0.3) : 0, ease: [0.33, 0, 0.2, 1] }}
          >
            Thoughtfully considered grills, nets and everyday solutions for open spaces in Bengaluru and Mysuru.
          </motion.p>

          {/* Action buttons with subtle lift */}
          <motion.div
            className="hero-actions-v2"
            initial={{ opacity: 0, y: isMobile ? 10 : 15 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : (isMobile ? 10 : 15),
            }}
            transition={{ duration: 0.6, delay: showContent ? (isMobile ? 0.65 : 0.4) : 0, ease: [0.22, 0.03, 0.26, 1] }}
          >
            <Link className="button button-primary" href="/contact">
              Get a Free Quote <ArrowUpRight size={16} />
            </Link>
            <Link className="button button-outline-v2" href="/services">
              Explore Our Services <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Note with final reveal */}
          <motion.div
            className="hero-note-v2"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.5, delay: showContent ? (isMobile ? 0.75 : 0.5) : 0, ease: [0.33, 0, 0.2, 1] }}
          >
            <span className="note-line" />
            A clear conversation. A solution shaped around your space.
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

function StaticHero() {
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <span className="eyebrow">Made for the way you live</span>
        <h1>
          Safety that lets the <em>view</em> breathe.
        </h1>
        <p className="hero-subtitle">Premium Invisible Grills &amp; Safety Solutions</p>
        <p className="hero-description">
          Thoughtfully considered grills, nets and everyday solutions for open spaces in Bengaluru and Mysuru.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Get a Free Quote <ArrowUpRight size={16} />
          </Link>
          <Link className="button button-outline" href="/services">
            Explore Our Services <ArrowRight size={15} />
          </Link>
        </div>
        <div className="hero-note">
          <span />A clear conversation. A solution shaped around your space.
        </div>
      </div>
      <div className="hero-art">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-side-label">Designed around your view</div>
        <div className="hero-image-wrap">
          <Image
            src="/images/hero-balcony.png"
            alt="Illustrative modern Bengaluru apartment balcony with discreet vertical safety cables and an open view"
            fill
            loading="eager"
            sizes="(max-width: 760px) 90vw, 55vw"
          />
          <div className="hero-image-caption">
            A little more room to look out<span>Architectural concept image</span>
          </div>
        </div>
        <div className="hero-index">
          <strong>01 / 08</strong>
          <span>Solutions</span>
        </div>
      </div>
    </section>
  )
}
