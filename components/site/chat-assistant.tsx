'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Send, X } from 'lucide-react'
import { services } from '@/lib/business'

const suggestions = ['What services do you offer?', 'Do you serve my area?', 'How do I get an estimate?']
const responses: Record<string, string> = {
  'What services do you offer?': 'We offer invisible grills (for balconies, glass balconies, windows, utilities, staircases, terraces, compound walls and open areas), wall-mounted and ceiling cloth hangers, and high-durability safety net solutions (pigeon nets, cricket practice nets, child and pet safety nets, coconut nets and balcony nets). Tell us what space you have in mind and we can point you to a relevant service.',
  'Do you serve my area?': 'We coordinate enquiries across Chennai, Bengaluru and Mysore. Use the service-area link below to search localities, or message us with your area to confirm coverage and scheduling.',
  'How do I get an estimate?': 'An estimate depends on the opening, site conditions and the solution you choose. Share a few details and photos over WhatsApp, or use the contact form to prepare your enquiry.',
  'I need a quote': 'For a case-specific quote, tell us your city, locality, service and property type. Our WhatsApp handoff will open a message to +91 9886577746 so you can share the details directly.',
}

type Message = { from: 'bot' | 'you'; text: string }

function MascotEyes({ compact = false, followCursor = false }: { compact?: boolean; followCursor?: boolean }) {
  const leftPupilRef = useRef<HTMLSpanElement>(null)
  const rightPupilRef = useRef<HTMLSpanElement>(null)
  const leftEyeRef = useRef<HTMLSpanElement>(null)
  const rightEyeRef = useRef<HTMLSpanElement>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!followCursor || typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    let rafId: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return

      rafId = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY })
        rafId = null
      })
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [followCursor])

  useEffect(() => {
    if (!followCursor || !leftPupilRef.current || !rightPupilRef.current || !leftEyeRef.current || !rightEyeRef.current) return

    const leftEyeRect = leftEyeRef.current.getBoundingClientRect()
    const rightEyeRect = rightEyeRef.current.getBoundingClientRect()

    const calculatePupilPosition = (eyeRect: DOMRect) => {
      const eyeCenterX = eyeRect.left + eyeRect.width / 2
      const eyeCenterY = eyeRect.top + eyeRect.height / 2

      const deltaX = cursorPos.x - eyeCenterX
      const deltaY = cursorPos.y - eyeCenterY

      const angle = Math.atan2(deltaY, deltaX)
      const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 100)

      const maxMove = 3
      const normalizedDistance = Math.min(distance / 200, 1)

      const x = Math.cos(angle) * maxMove * normalizedDistance
      const y = Math.sin(angle) * maxMove * normalizedDistance

      return { x, y }
    }

    const leftPos = calculatePupilPosition(leftEyeRect)
    const rightPos = calculatePupilPosition(rightEyeRect)

    leftPupilRef.current.style.transform = `translate(${leftPos.x}px, ${leftPos.y}px)`
    rightPupilRef.current.style.transform = `translate(${rightPos.x}px, ${rightPos.y}px)`
  }, [cursorPos, followCursor])

  return (
    <span className={`mascot-face${compact ? ' mascot-face-compact' : ''}`} aria-hidden="true">
      <span ref={leftEyeRef} className="mascot-eye">
        <span ref={leftPupilRef} className="mascot-pupil" style={{ transition: 'transform 0.15s ease-out' }} />
      </span>
      <span ref={rightEyeRef} className="mascot-eye mascot-eye-second">
        <span ref={rightPupilRef} className="mascot-pupil" style={{ transition: 'transform 0.15s ease-out' }} />
      </span>
      <span className="mascot-satellite" />
    </span>
  )
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [isReacting, setIsReacting] = useState(false)
  const [showGreeting, setShowGreeting] = useState(true)
  const [greetingDismissed, setGreetingDismissed] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const reactionTimerRef = useRef<number | null>(null)
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: 'Hello, welcome to CJ Invisible Grills. How can we help with your space today?' }])
  const closeRef = useRef<HTMLButtonElement>(null)

  const closePanel = useCallback(() => {
    setOpen(false)
    window.setTimeout(() => document.getElementById('chat-launcher')?.focus(), 0)
  }, [])

  useEffect(() => {
    if (!open) return
    setShowGreeting(false)
    setGreetingDismissed(true)
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') closePanel() }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [closePanel, open])

  // Hide welcome animation after 3 seconds
  useEffect(() => {
    const timer = window.setTimeout(() => setShowWelcome(false), 3000)
    return () => window.clearTimeout(timer)
  }, [])

  function respond(question: string) {
    const answer = responses[question] ?? (services.some((service) => service.title === question) ? `For ${question.toLowerCase()}, the right approach depends on your opening, site surfaces and intended use. Tell us your locality and property type and we can discuss the next step.` : 'For advice specific to your property, contact our team on WhatsApp. We serve enquiries across Chennai, Bengaluru and Mysore.')
    setMessages((current) => [...current, { from: 'you', text: question }, { from: 'bot', text: answer }])
    setIsReacting(true)
    if (reactionTimerRef.current !== null) window.clearTimeout(reactionTimerRef.current)
    reactionTimerRef.current = window.setTimeout(() => setIsReacting(false), 650)
  }

  useEffect(() => () => {
    if (reactionTimerRef.current !== null) window.clearTimeout(reactionTimerRef.current)
  }, [])

  const handleLauncherClick = () => {
    setOpen((value) => !value)
    if (!open) {
      setShowGreeting(false)
      setGreetingDismissed(true)
    }
  }

  const dismissGreeting = () => {
    setShowGreeting(false)
    setGreetingDismissed(true)
  }

  return (
    <>
      <section id="cj-chat-panel" className={`chat-panel${open ? ' is-open' : ''}`} role="dialog" aria-modal="false" aria-labelledby="chat-title" aria-hidden={!open} inert={!open}>
        <div className="chat-head"><span className="chat-avatar"><MascotEyes compact /></span><div><h2 id="chat-title">Ask CJ</h2><p>Quick answers · WhatsApp handoff</p></div><button ref={closeRef} className="chat-close" type="button" aria-label="Close chat" onClick={closePanel}><X size={18} /></button></div>
        <div className="chat-transcript" aria-live="polite" aria-relevant="additions">
          {messages.map((message, index) => <p key={`${index}-${message.from}`} className={`chat-message ${message.from === 'you' ? 'from-you' : 'from-bot'}`}>{message.text}</p>)}
          <p className="chat-caption">Choose a question to see a quick answer.</p>
        </div>
        <p className="chat-caption chat-section-label">Quick questions</p><div className="chat-suggestions">{suggestions.map((question) => <button key={question} type="button" onClick={() => respond(question)}>{question}</button>)}</div>
        <p className="chat-caption chat-section-label">Choose a service</p><div className="chat-suggestions chat-service-choices">{services.map((service) => <button key={service.slug} type="button" onClick={() => respond(service.title)}>{service.title}</button>)}</div>
        <div className="chat-path-links"><Link href="/areas" onClick={closePanel}>Check service areas</Link><Link href="/contact" onClick={closePanel}>Prepare an enquiry</Link></div>
        <a className="chat-whatsapp" href="https://wa.me/919886577746?text=Hello%20CJ%20Invisible%20Grills%2C%20I%27d%20like%20to%20discuss%20a%20quote." target="_blank" rel="noopener noreferrer">Continue on WhatsApp <Send size={14} /></a>
      </section>

      {showGreeting && !greetingDismissed && !open && (
        <div className="chat-greeting-container">
          <button
            className="chat-greeting"
            onClick={handleLauncherClick}
            aria-label="Open chat to get help"
          >
            Hi! How can I help you today?
          </button>
          <button
            className="chat-greeting-close"
            onClick={dismissGreeting}
            aria-label="Dismiss greeting"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <button
        id="chat-launcher"
        className={`chat-launcher${open ? ' is-open' : ''}${isReacting ? ' is-reacting' : ''}${showWelcome ? ' is-welcoming' : ''}`}
        type="button"
        aria-label={open ? 'Close CJ chat assistant' : 'Open CJ chat assistant'}
        aria-expanded={open}
        aria-controls="cj-chat-panel"
        onClick={handleLauncherClick}
      >
        <span className="mascot-shell" aria-hidden="true">
          <MascotEyes followCursor />
          <span className="mascot-smile" aria-hidden="true" />
        </span>
        <span className="chat-launcher-tooltip">Ask CJ</span>
      </button>
    </>
  )
}
