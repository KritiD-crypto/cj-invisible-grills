'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import type { services } from '@/lib/business'

export function PremiumServiceCard({
  service,
  index = 0,
  label,
}: {
  service: typeof services[number]
  index?: number
  label?: string
}) {
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const displayLabel = label ?? `0${index + 1}`

  const imageAlt = `${service.title} - CJ Invisible Grills`

  if (prefersReducedMotion) {
    return (
      <Link href={`/services/${service.slug}`} className="service-card" style={{ ['--card-order' as string]: index }}>
        <div className="service-image">
          <Image src={service.image} alt={imageAlt} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 26vw" />

        </div>
        <div className="service-card-copy">
          <span className="service-number">{displayLabel}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <span className="card-arrow" aria-hidden="true">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </Link>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '80px 0px 0px 0px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.14), ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="service-card premium-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ ['--card-order' as string]: index }}
      >
        <motion.div
          className="service-image"
          animate={{
            scale: isHovered ? 1.04 : 1,
          }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image src={service.image} alt={imageAlt} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 26vw" />

          <motion.div
            className="card-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
        <div className="service-card-copy">
          <span className="service-number">{displayLabel}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <motion.span
            className="card-arrow"
            aria-hidden="true"
            animate={{
              x: isHovered ? 3 : 0,
              y: isHovered ? -3 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={17} />
          </motion.span>
        </div>
      </Link>
    </motion.div>
  )
}
