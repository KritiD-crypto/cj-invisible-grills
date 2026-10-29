'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Send, X } from 'lucide-react'
import { services } from '@/lib/business'

const suggestions = ['What services do you offer?', 'Do you serve my area?', 'How do I get an estimate?']
const responses: Record<string, string> = {
  'What services do you offer?': 'We offer invisible grills, safety nets, balcony nets, bird and pigeon nets, sports nets, cloth hangers and bird spikes. Tell us what space you have in mind and we can point you to a relevant service.',
  'Do you serve my area?': 'We coordinate enquiries across Bengaluru and Mysuru. Use the service-area link below to search localities, or message us with your area to confirm coverage and scheduling.',
  'How do I get an estimate?': 'An estimate depends on the opening, site conditions and the solution you choose. Share a few details and photos over WhatsApp, or use the contact form to prepare your enquiry.',
  'I need a quote': 'For a case-specific quote, tell us your city, locality, service and property type. Our WhatsApp handoff will open a message to +91 90357 71799 so you can share the details directly.',
}

type Message = { from: 'bot' | 'you'; text: string }

function MascotEyes({ compact = false }: { compact?: boolean }) {
  return <span className={`mascot-face${compact ? ' mascot-face-compact' : ''}`} aria-hidden="true">
    <span className="mascot-eye"><span className="mascot-pupil" /></span>
    <span className="mascot-eye mascot-eye-second"><span className="mascot-pupil" /></span>
    <span className="mascot-satellite" />
  </span>
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [isReacting, setIsReacting] = useState(false)
  const reactionTimerRef = useRef<number | null>(null)
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: 'Hello, welcome to CJ Invisible Grills. How can we help with your space today?' }])
  const closeRef = useRef<HTMLButtonElement>(null)

  const closePanel = useCallback(() => {
    setOpen(false)
    window.setTimeout(() => document.getElementById('chat-launcher')?.focus(), 0)
  }, [])

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') closePanel() }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [closePanel, open])

  function respond(question: string) {
    const answer = responses[question] ?? (services.some((service) => service.title === question) ? `For ${question.toLowerCase()}, the right approach depends on your opening, site surfaces and intended use. Tell us your locality and property type and we can discuss the next step.` : 'For advice specific to your property, contact our team on WhatsApp. We serve enquiries across Bengaluru and Mysuru.')
    setMessages((current) => [...current, { from: 'you', text: question }, { from: 'bot', text: answer }])
    setIsReacting(true)
    if (reactionTimerRef.current !== null) window.clearTimeout(reactionTimerRef.current)
    reactionTimerRef.current = window.setTimeout(() => setIsReacting(false), 650)
  }

  useEffect(() => () => {
    if (reactionTimerRef.current !== null) window.clearTimeout(reactionTimerRef.current)
  }, [])


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
        <a className="chat-whatsapp" href="https://wa.me/919035771799?text=Hello%20CJ%20Invisible%20Grills%2C%20I%27d%20like%20to%20discuss%20a%20quote." target="_blank" rel="noopener noreferrer">Continue on WhatsApp <Send size={14} /></a>
      </section>
      <button id="chat-launcher" className={`chat-launcher${open ? ' is-open' : ''}${isReacting ? ' is-reacting' : ''}`} type="button" aria-label={open ? 'Close CJ chat assistant' : 'Open CJ chat assistant'} aria-expanded={open} aria-controls="cj-chat-panel" onClick={() => setOpen((value) => !value)}>
        <span className="mascot-shell" aria-hidden="true"><MascotEyes /></span>
        <span className="chat-launcher-tooltip">Ask CJ</span>
      </button>
    </>
  )
}
