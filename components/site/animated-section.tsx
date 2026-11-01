'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

// Hook to detect mobile viewport
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 760)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
}) {
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  if (prefersReducedMotion) {
    return <div id={id} className={className}>{children}</div>
  }

  // Mobile: simpler settings, desktop: original settings
  const viewportSettings = isMobile
    ? { once: true, margin: '0px', amount: 0.05 }
    : { once: false, margin: '-150px', amount: 0.1 }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: isMobile ? 10 : 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportSettings}
      transition={{ duration: isMobile ? 0.3 : 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  const viewportSettings = isMobile
    ? { once: true, margin: '0px', amount: 0.05 }
    : { once: false, margin: '-200px', amount: 0.15 }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportSettings}
      transition={{ duration: isMobile ? 0.4 : 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({ children, direction = 'up', delay = 0 }: { children: React.ReactNode; direction?: 'up' | 'down' | 'left' | 'right'; delay?: number }) {
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  const variants = {
    up: { y: isMobile ? 12 : 20 },
    down: { y: isMobile ? -12 : -20 },
    left: { x: isMobile ? 12 : 20 },
    right: { x: isMobile ? -12 : -20 },
  }

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  const viewportSettings = isMobile
    ? { once: true, margin: '0px', amount: 0.05 }
    : { once: false, margin: '-150px', amount: 0.1 }

  return (
    <motion.div
      initial={{ opacity: 0, ...variants[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportSettings}
      transition={{ duration: isMobile ? 0.3 : 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, staggerDelay = 0.1 }: { children: React.ReactNode; staggerDelay?: number }) {
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  const viewportSettings = isMobile
    ? { once: true, margin: '0px', amount: 0.03 }
    : { once: false, margin: '-150px', amount: 0.08 }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={{
        visible: {
          transition: {
            staggerChildren: isMobile ? 0.08 : staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: isMobile ? 10 : 15 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: isMobile ? 0.3 : 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
