import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, MoveUpRight } from 'lucide-react'
import { services } from '@/lib/business'

export function SectionIntro({ eyebrow, title, copy, href, action }: { eyebrow: string; title: string; copy?: string; href?: string; action?: string }) {
  return <div className="section-intro"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div><div>{copy && <p>{copy}</p>}{href && <Link className="text-link" href={href}>{action ?? 'Explore more'} <ArrowUpRight size={15} /></Link>}</div></div>
}

export function ServiceCard({ service, index = 0 }: { service: typeof services[number]; index?: number }) {
  return <Link href={`/services/${service.slug}`} className="service-card" style={{ ['--card-order' as string]: index }}>
    <div className="service-image"><Image src={service.image} alt={`Illustrative image for ${service.title.toLowerCase()} solutions`} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 26vw" /><span className="image-note">Illustrative image</span></div>
    <div className="service-card-copy"><span className="service-number">0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p><span className="card-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span></div>
  </Link>
}

export function QuoteBanner({ title = 'A more open view starts with a conversation.', copy = 'Tell us about your space. We’ll help you explore a considered solution for your home.' }: { title?: string; copy?: string }) {
  return <section className="quote-banner"><div className="quote-orbit" aria-hidden="true" /><div><span className="eyebrow light-eyebrow">A considered first step</span><h2>{title}</h2><p>{copy}</p></div><div className="quote-actions"><Link className="button button-white" href="/contact">Get a Free Quote <ArrowUpRight size={16} /></Link><a className="button button-ghost" href="tel:+919035771799">Call +91 90357 71799</a></div></section>
}

export function Breadcrumbs({ items }: { items: { title: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map((item, index) => <span key={`${item.title}-${index}`} className="breadcrumb-item"><span aria-hidden="true">/</span>{item.href ? <Link href={item.href}>{item.title}</Link> : <span aria-current="page">{item.title}</span>}</span>)}</nav>
}

export function LocalityPills({ localities }: { localities: string[] }) {
  return <ul className="locality-list">{localities.map((locality) => <li key={locality}>{locality}</li>)}</ul>
}

export function EditorialImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return <figure className="editorial-image"><div><Image src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 60vw" /></div><figcaption>{caption}</figcaption></figure>
}

export function ProcessStep({ number, title, copy }: { number: string; title: string; copy: string }) {
  return <article className="process-step"><span className="step-index">{number}</span><div className="step-mark" aria-hidden="true"><span /><span /><span /></div><h3>{title}</h3><p>{copy}</p></article>
}

export function ValuePoint({ title, copy }: { title: string; copy: string }) {
  return <div className="value-point"><span className="value-check"><Check size={16} /></span><div><h3>{title}</h3><p>{copy}</p></div></div>
}

export function ImageFeature({ label, title, copy, src, alt, href }: { label: string; title: string; copy: string; src: string; alt: string; href: string }) {
  return <article className="image-feature"><div className="feature-photo"><Image src={src} alt={alt} fill sizes="(max-width: 750px) 100vw, 55vw" /><span className="image-note">Illustrative image</span></div><div className="feature-copy"><span className="eyebrow">{label}</span><h3>{title}</h3><p>{copy}</p><Link className="text-link" href={href}>Discover the approach <ArrowRight size={15} /></Link></div></article>
}

export function ArrowLabel({ children, href }: { children: React.ReactNode; href: string }) {
  return <Link className="arrow-label" href={href}>{children}<MoveUpRight size={15} /></Link>
}
