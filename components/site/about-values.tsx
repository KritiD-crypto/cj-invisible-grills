'use client'

import { motion, useReducedMotion, useInView, useMotionValue, useSpring } from 'motion/react'
import { useRef, useState, useCallback, MouseEvent } from 'react'
import { Check } from 'lucide-react'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

interface ValueCardProps {
  title: string
  copy: string
  index: number
}

function ValueCard3D({ title, copy, index }: ValueCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.05, margin: '80px 0px 0px 0px' })
  const prefersReducedMotion = useReducedMotion()

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  // Snappy spring config for responsive tilt without sluggish drag
  const springConfig = { damping: 20, stiffness: 400 }
  const rotateX = useSpring(useMotionValue(0), springConfig)
  const rotateY = useSpring(useMotionValue(0), springConfig)

  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    mouseX.set(x)
    mouseY.set(y)

    rotateX.set((y - 0.5) * -10)
    rotateY.set((x - 0.5) * 10)

    setGlarePos({
      x: Math.round(x * 100),
      y: Math.round(y * 100),
      opacity: 1
    })
  }, [prefersReducedMotion, mouseX, mouseY, rotateX, rotateY])

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
    setGlarePos(prev => ({ ...prev, opacity: 0 }))
  }, [rotateX, rotateY])

  if (prefersReducedMotion) {
    return (
      <div ref={cardRef} className="value-card-3d">
        <div className="value-card-header">
          <span className="value-card-number">0{index + 1}</span>
          <div className="value-card-icon">
            <Check size={15} strokeWidth={2.4} />
          </div>
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
      ref={cardRef}
      className="value-card-3d-wrapper"
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: FAST_EASE
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="value-card-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Violet Specular Reflection Sheen */}
        <div
          className="value-card-glare"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 240px at ${glarePos.x}% ${glarePos.y}%, rgba(128, 87, 245, 0.16), transparent 70%)`
          }}
          aria-hidden="true"
        />

        {/* Ambient Top Hairline Accent */}
        <div className="value-card-accent-line" aria-hidden="true" />

        {/* Card Header with Elevated TranslateZ */}
        <div className="value-card-header" style={{ transform: 'translateZ(20px)' }}>
          <span className="value-card-number">0{index + 1}</span>
          <div className="value-card-icon">
            <Check size={15} strokeWidth={2.4} />
          </div>
        </div>

        {/* Content with Layered Architectural Depth */}
        <div className="value-card-content">
          <h3 style={{ transform: 'translateZ(14px)' }}>{title}</h3>
          <p style={{ transform: 'translateZ(8px)' }}>{copy}</p>
        </div>

        {/* Ambient Corner Mark */}
        <div className="value-card-corner" aria-hidden="true" />
      </motion.div>
    </motion.div>
  )
}

interface AboutValuesProps {
  values: Array<{ title: string; copy: string }>
}

export function AboutValues({ values }: AboutValuesProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.05, margin: '80px 0px 0px 0px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section ref={sectionRef} className="about-values-section">
      <div className="about-values-header">
        <motion.span
          className="eyebrow"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: FAST_EASE }}
        >
          What guides our work
        </motion.span>
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05, ease: FAST_EASE }}
        >
          The little things are part of the solution.
        </motion.h2>
      </div>

      <div className="value-grid-3d">
        {values.map((value, index) => (
          <ValueCard3D key={value.title} {...value} index={index} />
        ))}
      </div>
    </section>
  )
}
