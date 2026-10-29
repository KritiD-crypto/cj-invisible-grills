'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { services } from '@/lib/business'

const whatsappMessage = 'Hello CJ Invisible Grills, I would like to enquire about your services.'
const whatsappHref = `https://wa.me/919035771799?text=${encodeURIComponent(whatsappMessage)}`

const serviceLinks = services.map((service) => ({ label: service.title, href: `/services/${service.slug}` }))
const moreLinks = [
  { label: 'Journal / Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
]

type DropdownItem = { label: string; href: string }
type DesktopDropdownProps = {
  id: string
  label: string
  items: DropdownItem[]
  active: boolean
  viewAllHref?: string
  viewAllLabel?: string
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.94 9.94 0 0 0-8.48 15.14L2.25 22l5.02-1.28A9.96 9.96 0 1 0 12.04 2Zm0 18.1a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-2.98.76.8-2.9-.2-.3a8.14 8.14 0 1 1 6.82 3.75Zm4.47-6.1c-.25-.12-1.48-.73-1.71-.81-.23-.09-.4-.12-.57.12-.17.25-.65.81-.8.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.43 1.02 2.6c.12.16 1.77 2.71 4.3 3.8.6.26 1.07.42 1.43.54.6.19 1.14.16 1.57.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.28Z" /></svg>
}

function DesktopDropdown({ id, label, items, active, viewAllHref, viewAllLabel }: DesktopDropdownProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsidePointer)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  function focusDropdownLink(position: 'first' | 'last') {
    const links = rootRef.current?.querySelectorAll<HTMLAnchorElement>('.dropdown-panel a')
    links?.[position === 'first' ? 0 : links.length - 1]?.focus()
  }

  function handleTriggerKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
    event.preventDefault()
    setOpen(true)
    window.requestAnimationFrame(() => focusDropdownLink(event.key === 'ArrowDown' ? 'first' : 'last'))
  }

  function handlePanelKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>('a[href]'))
    const currentIndex = links.indexOf(event.target as HTMLAnchorElement)
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const direction = event.key === 'ArrowDown' ? 1 : -1
      const nextIndex = (currentIndex + direction + links.length) % links.length
      links[nextIndex]?.focus()
    } else if (event.key === 'Home') {
      event.preventDefault()
      links[0]?.focus()
    } else if (event.key === 'End') {
      event.preventDefault()
      links[links.length - 1]?.focus()
    }
  }

  return <div ref={rootRef} className={`nav-dropdown${open ? ' is-open' : ''}`}>
    <button ref={triggerRef} className={`nav-dropdown-trigger${active ? ' is-active' : ''}`} type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((value) => !value)} onKeyDown={handleTriggerKeyDown}>
      {label}<ChevronDown size={15} aria-hidden="true" />
    </button>
    <div id={id} className={`dropdown-panel${label === 'Services' ? ' dropdown-panel-services' : ' dropdown-panel-more'}${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open} onKeyDown={handlePanelKeyDown}>
      <ul>{items.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link></li>)}</ul>
      {viewAllHref && viewAllLabel && <Link className="dropdown-all" href={viewAllHref} onClick={() => setOpen(false)}>{viewAllLabel}<ArrowUpRight size={15} aria-hidden="true" /></Link>}
    </div>
  </div>
}

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const routeIsActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))

  return <header className={`site-header${menuOpen ? ' is-menu-open' : ''}`}>
    <div className="nav-shell">
      <Link href="/" className="brand" aria-label="CJ Invisible Grills home" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
        <span className="brand-copy"><strong>CJ</strong><span>INVISIBLE GRILLS</span></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/" className={`nav-link${routeIsActive('/') ? ' is-active' : ''}`} aria-current={routeIsActive('/') ? 'page' : undefined}>Home</Link>
        <Link href="/about" className={`nav-link${routeIsActive('/about') ? ' is-active' : ''}`} aria-current={routeIsActive('/about') ? 'page' : undefined}>About</Link>
        <DesktopDropdown id="services-dropdown" label="Services" items={serviceLinks} active={routeIsActive('/services')} viewAllHref="/services" viewAllLabel="View All Services" />
        <Link href="/areas" className={`nav-link${routeIsActive('/areas') ? ' is-active' : ''}`} aria-current={routeIsActive('/areas') ? 'page' : undefined}>Areas</Link>
        <Link href="/gallery" className={`nav-link${routeIsActive('/gallery') ? ' is-active' : ''}`} aria-current={routeIsActive('/gallery') ? 'page' : undefined}>Gallery</Link>
        <DesktopDropdown id="more-dropdown" label="More" items={moreLinks} active={routeIsActive('/blog') || routeIsActive('/faq')} />
      </nav>
      <div className="nav-actions">
        <a className="nav-action nav-call" href="tel:+919035771799" aria-label="Call CJ Invisible Grills at +91 90357 71799"><Phone size={15} aria-hidden="true" /><span>Call Now</span></a>
        <a className="nav-action nav-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Message CJ Invisible Grills on WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>
        <Link className="nav-cta" href="/contact">Get a Free Quote <ArrowUpRight aria-hidden="true" size={15} /></Link>
      </div>
      <button ref={menuToggleRef} className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((value) => !value)}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </div>
    <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? ' is-open' : ''}`} aria-label="Mobile navigation" hidden={!menuOpen}>
      <Link href="/" aria-current={routeIsActive('/') ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Home</Link>
      <Link href="/about" aria-current={routeIsActive('/about') ? 'page' : undefined} onClick={() => setMenuOpen(false)}>About</Link>
      <details className="mobile-nav-group">
        <summary>Services</summary>
        <div className="mobile-subnav"><Link href="/services" onClick={() => setMenuOpen(false)}>View All Services</Link>{serviceLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</div>
      </details>
      <Link href="/areas" aria-current={routeIsActive('/areas') ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Areas</Link>
      <Link href="/gallery" aria-current={routeIsActive('/gallery') ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Gallery</Link>
      <details className="mobile-nav-group">
        <summary>More</summary>
        <div className="mobile-subnav">{moreLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</div>
      </details>
      <div className="mobile-menu-actions">
        <Link className="mobile-contact mobile-contact-page" href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a className="mobile-contact mobile-call" href="tel:+919035771799" onClick={() => setMenuOpen(false)}><Phone size={15} aria-hidden="true" />Call Now · +91 90357 71799</a>
        <a className="mobile-contact mobile-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} aria-label="Message CJ Invisible Grills on WhatsApp"><WhatsAppIcon />WhatsApp · Message us</a>
      </div>
      <Link className="mobile-quote" href="/contact" onClick={() => setMenuOpen(false)}>Get a Free Quote <ArrowUpRight size={16} /></Link>
    </nav>
  </header>
}
