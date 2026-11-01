'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

export function AboutApproach() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.05, margin: '80px 0px 0px 0px' })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <section ref={sectionRef} className="about-approach-section">
        <div className="about-approach-image">
          <div className="approach-frame">
            <Image
              src="/images/hero-balcony.png"
              alt="Illustrative modern apartment balcony with subtle safety cable detailing"
              fill
              sizes="(max-width: 760px) 90vw, 50vw"
            />
          </div>

        </div>
        <div className="about-approach-content">
          <span className="eyebrow">Our approach</span>
          <h2>Good recommendations are grounded in the real space.</h2>
          <p>What works for one balcony may not suit another. We pay attention to the shape of the opening, the available fixing surfaces, the routines of the household and practical access for future care.</p>
          <p>Our role is to explain possible approaches, clarify what needs a site discussion and keep the next steps understandable.</p>
          <Link className="text-link" href="/services">
            Explore our services <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="about-approach-section">
      {/* Visual Side with Fast Spring Elevation */}
      <motion.div
        className="about-approach-image-wrap"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, ease: FAST_EASE }}
      >
        <motion.div
          className="approach-frame"
          whileHover={{
            y: -4,
            transition: { duration: 0.25, ease: FAST_EASE }
          }}
        >
          <div className="approach-image-container">
            <div className="approach-image-scale">
              <Image
                src="/images/hero-balcony.png"
                alt="Illustrative modern apartment balcony with subtle safety cable detailing"
                fill
                sizes="(max-width: 760px) 90vw, 50vw"
                className="approach-image"
              />
              <div className="approach-frame-gradient" />
            </div>
          </div>
          <div className="approach-frame-specular" />
          <div className="approach-frame-border" />
        </motion.div>

      </motion.div>

      {/* Editorial Content with Instant Staggered Viewport Entrance */}
      <div className="about-approach-content">
        <div className="overflow-hidden mb-2">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.04, ease: FAST_EASE }}
          >
            Our approach
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08, ease: FAST_EASE }}
        >
          Good recommendations are grounded in the real space.
        </motion.h2>

        <motion.p
          className="about-approach-lead"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.38, delay: 0.12, ease: FAST_EASE }}
        >
          What works for one balcony may not suit another. We pay attention to the shape of the opening, the available fixing surfaces, the routines of the household and practical access for future care.
        </motion.p>

        <motion.p
          className="about-approach-body"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.38, delay: 0.16, ease: FAST_EASE }}
        >
          Our role is to explain possible approaches, clarify what needs a site discussion and keep the next steps understandable.
        </motion.p>

        <motion.div
          className="about-approach-action"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.2, ease: FAST_EASE }}
        >
          <Link className="text-link" href="/services">
            Explore our services <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
