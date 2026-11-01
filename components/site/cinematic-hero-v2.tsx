'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 760px)')
    setIsMobile(mql.matches)

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return isMobile
}

const FAST_EASE = [0.16, 1, 0.3, 1] as const

export function CinematicHeroV2() {
  const [showContent, setShowContent] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowContent(true)
      return
    }

    // Near-instant reveal: content is ready without long blank waiting period
    const timer = setTimeout(() => setShowContent(true), 60)
    return () => clearTimeout(timer)
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return <StaticHero />
  }

  return (
    <section className="cinematic-hero-v2">
      {/* Balcony grill image with smooth GPU-accelerated reveal */}
      <div className="hero-camera-scene">
        <motion.div
          className="camera-layer"
          initial={{ scale: 1.04, opacity: 0.85 }}
          animate={{ scale: 1.12, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={isMobile ? "/images/grill-detail.png" : "/images/hero-balcony.png"}
            alt="Apartment balcony with invisible safety grills"
            fill
            priority
            quality={90}
            className="layer-image"
            style={{
              objectFit: 'cover',
              objectPosition: isMobile ? 'center 38%' : 'center center'
            }}
            sizes="100vw"
          />
        </motion.div>

        {/* Dynamic atmosphere overlay with smooth light fade */}
        <motion.div
          className="hero-atmosphere-gradient"
          initial={{ opacity: 0.35 }}
          animate={{ opacity: showContent ? 0.28 : 0.35 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Content overlay with immediate responsive entrance */}
      <div className="hero-content-overlay">
        <motion.div
          className="hero-copy-v2"
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: showContent ? 1 : 0,
            y: showContent ? 0 : 15,
          }}
          transition={{ duration: 0.38, ease: FAST_EASE }}
        >
          {/* Eyebrow */}
          <motion.span
            className="eyebrow-v2"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.04 }}
          >
            Made for the way you live
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="hero-headline-v2"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 10,
            }}
            transition={{ duration: 0.4, delay: 0.08, ease: FAST_EASE }}
          >
            <span>Safety that lets the </span>
            <em className="highlight-word">view</em>
            <span> breathe.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle-v2"
            initial={{ opacity: 0, y: 8 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 8
            }}
            transition={{ duration: 0.35, delay: 0.12, ease: FAST_EASE }}
          >
            Premium Invisible Grills &amp; Safety Solutions
          </motion.p>

          {/* Description */}
          <motion.p
            className="hero-description-v2"
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 6
            }}
            transition={{ duration: 0.35, delay: 0.16, ease: FAST_EASE }}
          >
            Thoughtfully considered grills, nets and everyday solutions for open spaces in Bengaluru and Mysuru.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            className="hero-actions-v2"
            initial={{ opacity: 0, y: 8 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 8,
            }}
            transition={{ duration: 0.35, delay: 0.2, ease: FAST_EASE }}
          >
            <Link className="button button-primary" href="/contact">
              Get a Free Quote <ArrowUpRight size={16} />
            </Link>
            <Link className="button button-outline-v2" href="/services">
              Explore Our Services <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Note */}
          <motion.div
            className="hero-note-v2"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.24 }}
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
