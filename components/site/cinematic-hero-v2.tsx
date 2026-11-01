'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

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

const HERO_SLIDES = [
  {
    src: '/images/hero-balcony.png',
    alt: 'Apartment balcony with invisible safety grills in Bengaluru',
    caption: 'Balcony Invisible Grills · Modern Living',
  },
  {
    src: '/images/grill-detail.png',
    alt: 'Fine marine-grade stainless steel cable detail against bright skyline',
    caption: 'High-Tensile 316 Stainless Steel Cable System',
  },
  {
    src: '/images/bengaluru-skyline.webp',
    alt: 'Panoramic Karnataka cityscape framed with minimal safety solution',
    caption: 'Uncompromised Panoramic Living · Bengaluru & Mysuru',
  },
  {
    src: '/images/safety-net-study.png',
    alt: 'Engineered balcony safety net across apartment opening',
    caption: 'Engineered Safety Nets · Discreet Anchoring',
  },
  {
    src: '/images/cloth-hanger-study.png',
    alt: 'Considered ceiling-mounted clothes drying system in modern utility balcony',
    caption: 'Utility Solutions · Space-Saving Design',
  },
]

export function CinematicHeroV2() {
  const [showContent, setShowContent] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const isFirstMountRef = useRef(true)
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  // Continuous seamless slideshow loop
  useEffect(() => {
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 6500)

    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  // One-time load entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
      isFirstMountRef.current = false
    }, 60)
    return () => clearTimeout(timer)
  }, [])

  const handleDotClick = useCallback((index: number) => {
    setCurrentSlideIndex(index)
  }, [])

  if (prefersReducedMotion) {
    return <StaticHero />
  }

  const currentSlide = HERO_SLIDES[currentSlideIndex]
  const isInitialFirstSlide = currentSlideIndex === 0 && isFirstMountRef.current

  return (
    <section className="cinematic-hero-v2" aria-label="Hero Section">
      {/* Full-width architectural continuous Ken Burns background */}
      <div className="hero-camera-scene" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide.src}
            className="camera-layer"
            initial={{ opacity: isInitialFirstSlide ? 1 : 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: isMobile ? 1.09 : 1.14 }}
            exit={{ opacity: 0, scale: isMobile ? 1.11 : 1.16 }}
            transition={{
              opacity: { duration: 1.8, ease: 'easeInOut' },
              scale: { duration: 7.2, ease: 'easeOut' },
            }}
          >
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt}
              fill
              priority={currentSlideIndex === 0}
              quality={90}
              className="layer-image"
              style={{
                objectFit: 'cover',
                objectPosition: isMobile ? 'center 35%' : 'center center',
              }}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic dark black gradient overlay (strong on left, tapering to right) */}
        <div className="hero-cinematic-overlay" />

        {/* Ambient atmospheric glows (terracotta warm & soft lavender) */}
        <div className="hero-ambient-depth" />
      </div>

      {/* Content overlay directly on architectural background (no purple box) */}
      <div className="hero-content-overlay">
        <div className="hero-copy-v2">
          {/* Eyebrow with masked reveal */}
          <div className="hero-eyebrow-mask">
            <motion.span
              className="eyebrow-v2"
              initial={{ y: '100%', opacity: 0 }}
              animate={{
                y: showContent ? '0%' : '100%',
                opacity: showContent ? 1 : 0,
              }}
              transition={{ duration: 0.45, delay: 0.04, ease: FAST_EASE }}
            >
              Made for the way you live
            </motion.span>
          </div>

          {/* Headline line-by-line masked reveal */}
          <h1 className="hero-headline-v2">
            <span className="hero-headline-line">
              <motion.span
                className="hero-headline-text"
                initial={{ y: '110%' }}
                animate={{ y: showContent ? '0%' : '110%' }}
                transition={{ duration: 0.55, delay: 0.08, ease: FAST_EASE }}
              >
                Safety that lets the
              </motion.span>
            </span>
            <span className="hero-headline-line">
              <motion.span
                className="hero-headline-text"
                initial={{ y: '110%' }}
                animate={{ y: showContent ? '0%' : '110%' }}
                transition={{ duration: 0.55, delay: 0.16, ease: FAST_EASE }}
              >
                <em className="highlight-word">view</em> breathe.
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle-v2"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 10,
            }}
            transition={{ duration: 0.45, delay: 0.22, ease: FAST_EASE }}
          >
            Premium Invisible Grills &amp; Safety Solutions
          </motion.p>

          {/* Description */}
          <motion.p
            className="hero-description-v2"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 10,
            }}
            transition={{ duration: 0.45, delay: 0.28, ease: FAST_EASE }}
          >
            Thoughtfully considered grills, nets and everyday solutions for open spaces in Bengaluru and Mysuru.
          </motion.p>

          {/* Action CTA buttons with subtle scale and hover interaction */}
          <motion.div
            className="hero-actions-v2"
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 12,
            }}
            transition={{ duration: 0.45, delay: 0.34, ease: FAST_EASE }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link className="button button-primary" href="/contact">
                Get a Free Quote <ArrowUpRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link className="button button-outline-v2" href="/services">
                Explore Our Services <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Note with expanding rule line */}
          <motion.div
            className="hero-note-v2"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <motion.span
              className="note-line"
              initial={{ width: 0 }}
              animate={{ width: showContent ? 32 : 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: FAST_EASE }}
            />
            A clear conversation. A solution shaped around your space.
          </motion.div>

          {/* Interactive Slide Navigation Dots */}
          <div className="hero-slide-indicators" aria-label="Slideshow controls">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={`hero-slide-dot ${index === currentSlideIndex ? 'is-active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Jump to slide ${index + 1}: ${slide.caption}`}
              >
                <span className="dot-fill" />
              </button>
            ))}
            <span className="hero-slide-caption-text">{currentSlide.caption}</span>
          </div>
        </div>
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
            A little more room to look out<span>Balcony invisible grill detail</span>
          </div>
        </div>
      </div>
    </section>
  )
}
