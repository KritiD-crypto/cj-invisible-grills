'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

interface SubpageHeroAnimatedProps {
  eyebrow?: string
  title: string
  description: string
  image: string
  ctaText?: string
  ctaHref?: string
  imageCaption?: string
}

export function SubpageHeroAnimated({
  eyebrow = 'A site-aware approach',
  title,
  description,
  image,
  ctaText = 'Discuss your space',
  ctaHref = '/contact',
  imageCaption = 'Illustrative concept image',
}: SubpageHeroAnimatedProps) {
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const isGenuine = image.startsWith('/services/')
  const effectiveAlt = `${title} - CJ Invisible Grills`

  if (prefersReducedMotion) {
    return (
      <section className="subpage-hero">
        <div className="subpage-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link className="button button-primary" href={ctaHref}>
            {ctaText} <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="subpage-hero-image">
          <Image
            src={image}
            alt={effectiveAlt}
            fill
            loading="eager"
            sizes="(max-width: 760px) 90vw, 50vw"
          />
          {!isGenuine && <span className="image-note">{imageCaption}</span>}
        </div>
      </section>
    )
  }

  return (
    <motion.section
      className="subpage-hero subpage-hero-premium"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: FAST_EASE }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative ambient card glows */}
      <div className="subpage-hero-glow" aria-hidden="true" />

      <div className="subpage-hero-copy">
        <div className="overflow-hidden mb-2">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.04, ease: FAST_EASE }}
          >
            {eyebrow}
          </motion.span>
        </div>

        <h2 className="subpage-hero-title">
          <span className="subpage-title-line">
            <motion.span
              className="subpage-title-text"
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.5, delay: 0.08, ease: FAST_EASE }}
            >
              {title}
            </motion.span>
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16, ease: FAST_EASE }}
        >
          {description}
        </motion.p>

        <motion.div
          className="subpage-hero-cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22, ease: FAST_EASE }}
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link className="button button-primary" href={ctaHref}>
              {ctaText} <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="subpage-hero-image">
        <motion.div
          className="subpage-hero-image-inner"
          animate={{
            scale: isHovered ? 1.04 : 1,
          }}
          transition={{ duration: 0.4, ease: FAST_EASE }}
        >
          <Image
            src={image}
            alt={effectiveAlt}
            fill
            loading="eager"
            sizes="(max-width: 760px) 90vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
        {!isGenuine && <span className="image-note">{imageCaption}</span>}
        <div className="subpage-hero-image-specular" aria-hidden="true" />
      </div>
    </motion.section>
  )
}
