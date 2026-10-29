'use client'

import { useEffect, useRef } from 'react'

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = elementRef.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    element.classList.add('reveal-ready')
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        element.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return <div ref={elementRef} className={`reveal ${className}`}>{children}</div>
}
