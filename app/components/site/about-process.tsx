'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'

interface ProcessStepProps {
  number: string
  title: string
  description: string
  index: number
}

function ProcessStep3D({ number, title, description, index }: ProcessStepProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className="process-step-3d">
        <div className="process-step-number">{number}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className="process-step-3d"
      initial={{ opacity: 0, x: -30, rotateY: -8 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 0.03, 0.26, 1]
      }}
    >
      <motion.div
        className="process-step-glow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
      />
      <div className="process-step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}

export function AboutProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const prefersReducedMotion = useReducedMotion()

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
    <section ref={ref} className="about-process-section">
      <motion.div
        className="about-process-header"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.33, 0, 0.2, 1] }}
      >
        <div>
          <span className="eyebrow">A clear journey</span>
          <h2>From first question to finished detail.</h2>
        </div>
        <div>
          <p>A considered process helps keep the conversation and the work aligned.</p>
        </div>
      </motion.div>

      <div className="process-grid-3d">
        {!prefersReducedMotion && (
          <svg className="process-connector" viewBox="0 0 100 2" preserveAspectRatio="none">
            <motion.line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="100"
              initial={{ strokeDashoffset: 100 }}
              animate={isInView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 0.03, 0.26, 1] }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8057F5" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8057F5" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8057F5" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {steps.map((step, index) => (
          <ProcessStep3D key={step.number} {...step} index={index} />
        ))}
      </div>
    </section>
  )
}
