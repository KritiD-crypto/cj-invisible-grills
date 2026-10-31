'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion, useTransform, useMotionValue, animate } from 'motion/react'

export function CinematicHeroV2() {
  const [isAnimating, setIsAnimating] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  // Camera zoom progression (0 = wide city view, 1 = balcony closeup)
  const cameraProgress = useMotionValue(0)

  // Zoom into a specific focal point in the city image (targeting building at 38% from left, 58% from top)
  const imageScale = useTransform(cameraProgress, [0, 1], [1, 3.5])
  const imageX = useTransform(cameraProgress, [0, 1], [0, -12])
  const imageY = useTransform(cameraProgress, [0, 1], [0, -8])
  const imageBlur = useTransform(cameraProgress, [0, 0.3, 0.85, 1], [0, 0, 0.8, 0])

  const textOpacity = useTransform(cameraProgress, [0, 0.75, 0.92, 1], [0, 0, 0.3, 1])
  const textY = useTransform(cameraProgress, [0, 0.85, 1], [20, 10, 0])
  const overlayOpacity = useTransform(cameraProgress, [0, 0.5, 1], [0.5, 0.35, 0.28])

  useEffect(() => {
    if (prefersReducedMotion) {
      cameraProgress.set(1)
      setIsAnimating(false)
      return
    }

    // 7-second continuous zoom animation simulating camera movement
    const controls = animate(cameraProgress, 1, {
      duration: 7,
      ease: [0.33, 0.1, 0.2, 1],
      onComplete: () => setIsAnimating(false)
    })

    return () => controls.stop()
  }, [prefersReducedMotion, cameraProgress])

  if (prefersReducedMotion) {
    return <StaticHero />
  }

  return (
    <section className="cinematic-hero-v2">
      {/* Continuous camera zoom from city to building focus */}
      <div className="hero-camera-scene">
        <motion.div
          className="camera-layer single-shot-layer"
          style={{
            scale: imageScale,
            x: imageX,
            y: imageY,
            transformOrigin: '38% 58%', // Focal point: targeting a specific building in the city image
          }}
        >
          <motion.div
            style={{ filter: useTransform(imageBlur, (v) => `blur(${v}px)`) }}
            className="layer-content"
          >
            <Image
              src="/images/bengaluru-skyline.webp"
              alt="Bengaluru cityscape with apartment buildings"
              fill
              priority
              quality={95}
              className="layer-image"
              style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
            />
          </motion.div>
        </motion.div>

        {/* Dynamic atmosphere overlay */}
        <motion.div
          className="hero-atmosphere-gradient"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content overlay */}
      <div className="hero-content-overlay">
        <motion.div
          className="hero-copy-v2"
          style={{
            opacity: textOpacity,
            y: textY
          }}
        >
          <span className="eyebrow-v2">Made for the way you live</span>

          <h1 className="hero-headline-v2">
            Safety that lets the <em className="highlight-word">view</em> breathe.
          </h1>

          <p className="hero-subtitle-v2">Premium Invisible Grills &amp; Safety Solutions</p>

          <p className="hero-description-v2">
            Thoughtfully considered grills, nets and everyday solutions for open spaces in Bengaluru and Mysuru.
          </p>

          <div className="hero-actions-v2">
            <Link className="button button-primary" href="/contact">
              Get a Free Quote <ArrowUpRight size={16} />
            </Link>
            <Link className="button button-outline-v2" href="/services">
              Explore Our Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="hero-note-v2">
            <span className="note-line" />
            A clear conversation. A solution shaped around your space.
          </div>
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
