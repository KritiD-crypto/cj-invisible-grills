'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

export function CinematicHero() {
  const [phase, setPhase] = useState<'city' | 'building' | 'balcony' | 'content'>('city')
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase('content')
      return
    }

    const timer1 = setTimeout(() => setPhase('building'), 400)
    const timer2 = setTimeout(() => setPhase('balcony'), 900)
    const timer3 = setTimeout(() => setPhase('content'), 1500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return <StaticHero />
  }

  return (
    <section className="cinematic-hero">
      {/* Background layers with parallax effect */}
      <div className="hero-scene">
        {/* Layer 1: City skyline (furthest) */}
        <motion.div
          className="hero-layer hero-layer-city"
          initial={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          animate={{
            scale: phase === 'city' ? 1 : phase === 'building' ? 2.5 : 8,
            opacity: phase === 'city' ? 1 : phase === 'building' ? 0.4 : 0,
            filter: phase === 'city' ? 'blur(0px)' : `blur(${phase === 'building' ? 3 : 8}px)`,
          }}
          transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <Image
            src="/images/hero-balcony.png"
            alt="Bengaluru cityscape"
            fill
            priority
            quality={90}
            className="hero-layer-image"
          />
        </motion.div>

        {/* Layer 2: Building approach (middle) */}
        <motion.div
          className="hero-layer hero-layer-building"
          initial={{ scale: 0.5, opacity: 0, filter: 'blur(8px)' }}
          animate={{
            scale: phase === 'city' ? 0.5 : phase === 'building' ? 1 : 3.5,
            opacity: phase === 'city' ? 0 : phase === 'building' ? 1 : phase === 'balcony' ? 0.3 : 0,
            filter: phase === 'building' ? 'blur(0px)' : `blur(${phase === 'balcony' ? 4 : 8}px)`,
          }}
          transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96], delay: phase === 'building' ? 0.2 : 0 }}
        >
          <Image
            src="/images/grill-detail.png"
            alt="Modern apartment building"
            fill
            quality={90}
            className="hero-layer-image"
          />
        </motion.div>

        {/* Layer 3: Balcony closeup (closest) */}
        <motion.div
          className="hero-layer hero-layer-balcony"
          initial={{ scale: 0.3, opacity: 0, filter: 'blur(12px)' }}
          animate={{
            scale: phase === 'balcony' || phase === 'content' ? 1 : 0.3,
            opacity: phase === 'balcony' || phase === 'content' ? 1 : 0,
            filter: phase === 'balcony' || phase === 'content' ? 'blur(0px)' : 'blur(12px)',
          }}
          transition={{ duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96], delay: phase === 'balcony' ? 0.3 : 0 }}
        >
          <Image
            src="/images/hero-balcony.png"
            alt="Balcony with invisible safety grills"
            fill
            priority
            quality={95}
            className="hero-layer-image"
          />
        </motion.div>

        {/* Atmospheric overlay */}
        <motion.div
          className="hero-atmosphere"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'content' ? 0.15 : 0.35 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Content overlay */}
      <div className="hero-content-wrapper">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: phase === 'content' ? 1 : 0,
            y: phase === 'content' ? 0 : 30,
          }}
          transition={{ duration: 0.8, delay: phase === 'content' ? 0.4 : 0 }}
        >
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: phase === 'content' ? 1 : 0,
              x: phase === 'content' ? 0 : -20,
            }}
            transition={{ duration: 0.6, delay: phase === 'content' ? 0.5 : 0 }}
          >
            Made for the way you live
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: phase === 'content' ? 1 : 0,
              y: phase === 'content' ? 0 : 20,
            }}
            transition={{ duration: 0.7, delay: phase === 'content' ? 0.6 : 0 }}
          >
            Safety that lets the <em>view</em> breathe.
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'content' ? 1 : 0 }}
            transition={{ duration: 0.6, delay: phase === 'content' ? 0.7 : 0 }}
          >
            Premium Invisible Grills &amp; Safety Solutions
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'content' ? 1 : 0 }}
            transition={{ duration: 0.6, delay: phase === 'content' ? 0.8 : 0 }}
          >
            Thoughtfully considered grills, nets and everyday solutions for open spaces in Bengaluru and Mysuru.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: phase === 'content' ? 1 : 0,
              y: phase === 'content' ? 0 : 15,
            }}
            transition={{ duration: 0.7, delay: phase === 'content' ? 0.9 : 0 }}
          >
            <Link className="button button-primary" href="/contact">
              Get a Free Quote <ArrowUpRight size={16} />
            </Link>
            <Link className="button button-outline" href="/services">
              Explore Our Services <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            className="hero-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'content' ? 1 : 0 }}
            transition={{ duration: 0.6, delay: phase === 'content' ? 1 : 0 }}
          >
            <span />A clear conversation. A solution shaped around your space.
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="hero-index"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: phase === 'content' ? 1 : 0,
          scale: phase === 'content' ? 1 : 0.8,
        }}
        transition={{ duration: 0.6, delay: phase === 'content' ? 1.1 : 0 }}
      >
        <strong>01 / 08</strong>
        <span>Solutions</span>
      </motion.div>
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
