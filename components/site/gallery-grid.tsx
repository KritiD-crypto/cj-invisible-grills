'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

const galleryItems = [
  { title: 'An open balcony outlook', category: 'Invisible grills', image: '/images/hero-balcony.png', alt: 'Illustrative modern apartment balcony with nearly invisible safety cables' },
  { title: 'Fine cable detail', category: 'Invisible grills', image: '/images/grill-detail.png', alt: 'Illustrative detail of discreet vertical safety cables against a bright view' },
  { title: 'Netting across an opening', category: 'Safety nets', image: '/images/safety-net-study.png', alt: 'Illustrative apartment balcony with a fine transparent safety net' },
  { title: 'A considered drying space', category: 'Cloth hangers', image: '/images/cloth-hanger-study.png', alt: 'Illustrative utility balcony with a ceiling-mounted drying hanger' },
  { title: 'Practice space netting', category: 'Sports nets', image: '/images/sports-net-study.png', alt: 'Illustrative community cricket practice space enclosed with netting' },
  { title: 'A closer look at the view', category: 'Invisible grills', image: '/images/hero-balcony.png', alt: 'Illustrative balcony outlook framed by minimal safety cables' },
]
const filters = ['All', 'Invisible grills', 'Safety nets', 'Cloth hangers', 'Sports nets']

export function GalleryGrid() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  const visibleItems = galleryItems.filter((item) => filter === 'All' || item.category === filter)

  useEffect(() => {
    if (!selected) return
    previousFocus.current = document.activeElement as HTMLElement
    closeButton.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previousFocus.current?.focus()
    }
  }, [selected])

  return <>
    <div className="gallery-filters" role="group" aria-label="Filter gallery images">{filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
    <div className="gallery-grid">{visibleItems.map((item, index) => <button className="gallery-item" key={`${item.title}-${index}`} type="button" onClick={() => setSelected(item)} aria-label={`Open image: ${item.title}, illustrative concept image`}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 50vw, 40vw" /><span className="gallery-item-label">{item.title}<small>{item.category} · Concept imagery</small></span></button>)}</div>
    {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null) }}><button ref={closeButton} type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image preview"><X size={20} /></button><figure><div className="lightbox-photo"><Image src={selected.image} alt={selected.alt} fill sizes="90vw" /></div><figcaption>{selected.title} — {selected.category}. Illustrative concept imagery, not a verified customer installation.</figcaption></figure></div>}
  </>
}
