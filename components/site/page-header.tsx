'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Breadcrumbs } from '@/components/site/sections'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

interface PageHeaderProps {
  breadcrumbs: { title: string; href?: string }[]
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function PageHeader({
  breadcrumbs,
  eyebrow,
  title,
  description,
  className = '',
}: PageHeaderProps) {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (prefersReducedMotion) {
    return (
      <section className={`page-top ${className}`}>
        <Breadcrumbs items={breadcrumbs} />
        <div className="page-heading">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </section>
    )
  }

  return (
    <section className={`page-top page-header-premium ${className}`}>
      {/* Subtle Architectural Ambient Glow behind header */}
      <div className="page-header-backdrop" aria-hidden="true">
        <div className="page-header-glow-peach" />
        <div className="page-header-glow-lavender" />
        <div className="page-header-contour" />
      </div>

      <motion.div
        className="page-breadcrumbs-wrap"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: FAST_EASE }}
      >
        <Breadcrumbs items={breadcrumbs} />
      </motion.div>

      <div className="page-heading">
        {/* Eyebrow with smooth reveal */}
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.04, ease: FAST_EASE }}
        >
          {eyebrow}
        </motion.span>

        {/* Title with smooth reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: FAST_EASE }}
        >
          {title}
        </motion.h1>

        {/* Description with gentle slide-up and fade */}
        {description && (
          <motion.p
            className="page-description-animated"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: FAST_EASE }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
