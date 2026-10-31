'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import type { services } from '@/lib/business'

export function PremiumServiceCard({ service, index = 0 }: { service: typeof services[number]; index?: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <Link href={`/services/${service.slug}`} className="service-card" style={{ ['--card-order' as string]: index }}>
        <div className="service-image">
          <Image src={service.image} alt={`Illustrative image for ${service.title.toLowerCase()} solutions`} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 26vw" />
          <span className="image-note">Illustrative image</span>
        </div>
        <div className="service-card-copy">
          <span className="service-number">0{index + 1}</span>
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={service.image} alt={`Illustrative image for ${service.title.toLowerCase()} solutions`} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 26vw" />
          <span className="image-note">Illustrative image</span>
          <motion.div
            className="card-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <div className="service-card-copy">
          <span className="service-number">0{index + 1}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <motion.span
            className="card-arrow"
            aria-hidden="true"
            animate={{
              x: isHovered ? 3 : 0,
              y: isHovered ? -3 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={17} />
          </motion.span>
        </div>
      </Link>
    </motion.div>
  )
}
