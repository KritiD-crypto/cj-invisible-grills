'use client'

import { motion, useReducedMotion, useInView, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

interface ProcessStepProps {
  number: string
  title: string
  description: string
  index: number
}

function ProcessStep3D({ number, title, description, index }: ProcessStepProps) {
  const stepRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(stepRef, { once: true, amount: 0.05, margin: '60px 0px 0px 0px' })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div ref={stepRef} className="process-step-3d">
        <div className="process-step-top">
          <div className="process-step-indicator">
            <span className="process-step-node" />
            <span className="process-step-number">{number}</span>
          </div>
        </div>
        <div className="process-step-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      ref={stepRef}
      className="process-step-3d"
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: FAST_EASE
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: FAST_EASE }
      }}
    >
      <div className="process-step-top">
        <div className="process-step-indicator">
          <motion.span
            className="process-step-node"
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={isInView ? { scale: [0.8, 1.2, 1], opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 + 0.1 }}
          />
          <span className="process-step-number">{number}</span>
        </div>
        <span className="process-step-label">Stage 0{index + 1}</span>
      </div>

      <div className="process-step-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="process-step-accent" aria-hidden="true" />
    </motion.div>
  )
}

export function AboutProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.05, margin: '80px 0px 0px 0px' })
  const prefersReducedMotion = useReducedMotion()

  // Scroll progress for drawing the connecting line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'center 50%']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 28,
    restDelta: 0.001
  })

  // ScaleX transform for horizontal desktop track
  const trackScaleX = useTransform(smoothProgress, [0, 1], [0, 1])

  const steps = [
    {
      number: '01',
      title: 'Understand the space',
      description: 'We gather the essentials about location, opening, property and intended use.'
    },
    {
      number: '02',
      title: 'Discuss what fits',
      description: 'We talk through options, scope, access and what needs an on-site assessment.'
    },
    {
      number: '03',
      title: 'Coordinate and review',
      description: 'Once agreed, the work is coordinated and reviewed with care at the end.'
    }
  ]

  return (
    <section ref={sectionRef} className="about-process-section">
      <div className="about-process-header">
        <div>
          <motion.span
            className="eyebrow"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, ease: FAST_EASE }}
          >
            A clear journey
          </motion.span>
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05, ease: FAST_EASE }}
          >
            From first question to finished detail.
          </motion.h2>
        </div>
        <div>
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.38, delay: 0.1, ease: FAST_EASE }}
          >
            A considered process helps keep the conversation and the work aligned.
          </motion.p>
        </div>
      </div>

      <div className="process-grid-container">
        {/* Animated Connecting Track (Desktop) */}
        {!prefersReducedMotion && (
          <div className="process-connector-track" aria-hidden="true">
            <div className="process-connector-bg" />
            <motion.div
              className="process-connector-fill"
              style={{ scaleX: trackScaleX, transformOrigin: 'left center' }}
            />
          </div>
        )}

        <div className="process-grid-3d">
          {steps.map((step, index) => (
            <ProcessStep3D key={step.number} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
