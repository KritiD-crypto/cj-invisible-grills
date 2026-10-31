'use client'

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutApproach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <section ref={ref} className="about-approach-section">
        <div className="about-approach-image">
          <div className="approach-frame">
            <Image
              src="/images/hero-balcony.png"
              alt="Illustrative modern apartment balcony with subtle safety cable detailing"
              fill
              sizes="(max-width: 760px) 90vw, 50vw"
            />
          </div>
          <figcaption>Illustrative architectural concept · Not a verified customer project</figcaption>
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
    <section ref={ref} className="about-approach-section">
      <motion.div
        className="about-approach-image"
        initial={{ opacity: 0, x: -40, rotateY: -10 }}
        animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 0.03, 0.26, 1] }}
      >
        <motion.div
          className="approach-frame"
          whileHover={{
            scale: 1.02,
            rotateY: 2,
            transition: { duration: 0.4, ease: [0.22, 0.03, 0.26, 1] }
          }}
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 0.03, 0.26, 1] }}
          >
            <Image
              src="/images/hero-balcony.png"
              alt="Illustrative modern apartment balcony with subtle safety cable detailing"
              fill
              sizes="(max-width: 760px) 90vw, 50vw"
            />
          </motion.div>
          <div className="approach-frame-glow" />
        </motion.div>
        <motion.figcaption
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Illustrative architectural concept · Not a verified customer project
        </motion.figcaption>
      </motion.div>

      <motion.div
        className="about-approach-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.03, 0.26, 1] }}
      >
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Our approach
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 0.03, 0.26, 1] }}
        >
          Good recommendations are grounded in the real space.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          What works for one balcony may not suit another. We pay attention to the shape of the opening, the available fixing surfaces, the routines of the household and practical access for future care.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our role is to explain possible approaches, clarify what needs a site discussion and keep the next steps understandable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link className="text-link" href="/services">
            Explore our services <ArrowRight size={15} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
