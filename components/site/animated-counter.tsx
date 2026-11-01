'use client'

import { useEffect, useRef, useState } from 'react'
import { businessStatistics } from '@/lib/statistics'

type AnimatedCounterProps = {
  value: number
  progress: number
  suffix?: string
}

const numberFormatter = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 })

function AnimatedCounter({ value, progress, suffix = '' }: AnimatedCounterProps) {
  const formattedValue = `${numberFormatter.format(Math.round(value * progress))}${suffix}`

  return <span className="stat-number" aria-label={formattedValue} aria-live="off">
    <span aria-hidden="true">{formattedValue}</span>
  </span>
}

export function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const frameRef = useRef<number | null>(null)
  const visibleRef = useRef(false)
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const cancelAnimation = () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
    const startAnimation = () => {
      cancelAnimation()
      if (reducedMotion.matches) {
        setProgress(1)
        return
      }

      setProgress(0)
      const startedAt = performance.now()
      const tick = (now: number) => {
        const linearProgress = Math.min((now - startedAt) / 750, 1)
        setProgress(1 - (1 - linearProgress) ** 3)
        if (linearProgress < 1) frameRef.current = window.requestAnimationFrame(tick)
        else frameRef.current = null
      }
      frameRef.current = window.requestAnimationFrame(tick)
    }
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
          const nextVisibility = entry.isIntersecting
          if (nextVisibility === visibleRef.current) return

          visibleRef.current = nextVisibility
          setIsVisible(nextVisibility)
          if (nextVisibility) {
            startAnimation()
          } else {
            cancelAnimation()
            setProgress(0)
          }
        }, { threshold: 0.05, rootMargin: '60px 0px 0px 0px' })
      : null

    if (observer) {
      observer.observe(section)
    } else {
      visibleRef.current = true
      setIsVisible(true)
      startAnimation()
    }

    const handleMotionPreferenceChange = () => {
      if (reducedMotion.matches) {
        cancelAnimation()
        setProgress(visibleRef.current ? 1 : 0)
      } else if (visibleRef.current) {
        startAnimation()
      }
    }
    reducedMotion.addEventListener('change', handleMotionPreferenceChange)

    return () => {
      cancelAnimation()
      observer?.disconnect()
      reducedMotion.removeEventListener('change', handleMotionPreferenceChange)
    }
  }, [])

  return <section ref={sectionRef} className={`stats-section${isVisible ? ' is-visible' : ''}`} aria-labelledby="stats-heading" aria-describedby="stats-demo-note">
    <div className="stats-content">
      <div className="stats-heading">
        <span className="stats-kicker">A considered measure</span>
        <h2 id="stats-heading">Every detail, thoughtfully considered.</h2>
      </div>
      <dl className="stats-grid">
        {businessStatistics.map((statistic) => <div className="stat-item" key={statistic.label}>
          <dt>{statistic.label}</dt>
          <dd><AnimatedCounter value={statistic.value} progress={progress} suffix={statistic.suffix} /></dd>
        </div>)}
      </dl>
      <p className="stats-disclaimer" id="stats-demo-note">Temporary demo figures for preview only. Replace with verified business values before launch.</p>
    </div>
  </section>
}
