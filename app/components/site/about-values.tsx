'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Check } from 'lucide-react'

interface ValueCardProps {
  title: string
  copy: string
  index: number
}

function ValueCard3D({ title, copy, index }: ValueCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className="value-card-3d">
        <div className="value-card-icon">
          <Check size={16} strokeWidth={2.5} />
        </div>
        <div className="value-card-content">
          <h3>{title}</h3>
          <p>{copy}</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className="value-card-3d"
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 0.03, 0.26, 1]
      }}
      whileHover={{
        y: -8,
        rotateX: -2,
        transition: { duration: 0.3, ease: [0.22, 0.03, 0.26, 1] }
      }}
    >
      <motion.div
        className="value-card-glow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="value-card-icon">
        <Check size={16} strokeWidth={2.5} />
      </div>
      <div className="value-card-content">
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    </motion.div>
  )
}

interface AboutValuesProps {
  values: Array<{ title: string; copy: string }>
}

export function AboutValues({ values }: AboutValuesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section ref={ref} className="about-values-section">
      <motion.div
        className="about-values-header"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.33, 0, 0.2, 1] }}
      >
        <span className="eyebrow">What guides our work</span>
        <h2>The little things are part of the solution.</h2>
      </motion.div>

      <div className="value-grid-3d">
        {values.map((value, index) => (
          <ValueCard3D key={value.title} {...value} index={index} />
        ))}
      </div>
    </section>
  )
}
