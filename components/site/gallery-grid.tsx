'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { X, ZoomIn, Play } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

export type GalleryItem = {
  title: string
  category: string
  image: string
  alt: string
  isVerified?: boolean
  video?: string
}

const galleryItems: GalleryItem[] = [
  // Existing initial gallery items preserved
  { title: 'An open balcony outlook', category: 'Invisible grills', image: '/images/hero-balcony.png', alt: 'Discreet invisible grill cables against bright open sky' },
  { title: 'Fine cable detail', category: 'Invisible grills', image: '/images/grill-detail.png', alt: 'Precision vertical safety cable detail' },
  { title: 'Netting across an opening', category: 'Safety nets', image: '/images/safety-net-study.png', alt: 'Fine transparent safety netting across balcony opening' },
  { title: 'A considered drying space', category: 'Cloth hangers', image: '/images/cloth-hanger-study.png', alt: 'Ceiling-mounted clothes hanger in utility balcony' },
  { title: 'Practice space netting', category: 'Sports nets', image: '/images/sports-net-study.png', alt: 'Cricket practice sports netting enclosure' },
  { title: 'A closer look at the view', category: 'Invisible grills', image: '/images/hero-balcony.png', alt: 'Balcony safety cables framing city outlook' },

  // Genuine Invisible Grills (Balconies & Videos)
  { title: 'Balcony invisible grill installation', category: 'Invisible grills', image: '/services/invisible-grills/invisible-grills-01.jpg', alt: 'Balcony invisible grill installation with open horizon view', isVerified: true },
  { title: 'Vertical high-tensile cable detailing', category: 'Invisible grills', image: '/services/invisible-grills/invisible-grills-02.jpg', alt: 'High-tensile vertical cable tensioning detail', isVerified: true },
  { title: 'High-rise balcony safety boundary', category: 'Invisible grills', image: '/services/invisible-grills/invisible-grills-06.jpg', alt: 'High-rise balcony safety cables', isVerified: true },
  { title: 'Corner balcony cable profile', category: 'Invisible grills', image: '/services/invisible-grills/invisible-grills-10.jpg', alt: 'Corner balcony invisible grill installation', isVerified: true },
  { title: 'Apartment balcony grill walkthrough', category: 'Invisible grills', image: '/services/invisible-grills/invisible-grills-07.jpg', video: '/services/invisible-grills/invisible-grills-video-01.mp4', alt: 'Video walkthrough of balcony invisible grill installation', isVerified: true },
  { title: 'Discreet safety cable profile inspection', category: 'Invisible grills', image: '/services/invisible-grills/invisible-grills-15.jpg', video: '/services/invisible-grills/invisible-grills-video-02.mp4', alt: 'Video showing tensioned cable alignment', isVerified: true },

  // Genuine Window Invisible Grills
  { title: 'Window invisible grill installation', category: 'Invisible grills', image: '/services/invisible-grills-for-windows/invisible-grills-for-windows-01.jpg', alt: 'Window invisible grill installation with aluminium track', isVerified: true },
  { title: 'Residential window safety grill', category: 'Invisible grills', image: '/services/invisible-grills-for-windows/invisible-grills-for-windows-05.jpg', alt: 'Discreet safety cables fitted to sliding window frame', isVerified: true },
  { title: 'Wide window reveal cable boundary', category: 'Invisible grills', image: '/services/invisible-grills-for-windows/invisible-grills-for-windows-12.jpg', alt: 'Wide residential window invisible grill', isVerified: true },

  // Transparent Copolymer
  { title: 'Transparent copolymer balcony net', category: 'Transparent copolymer', image: '/services/transparent-copolymer/transparent-copolymer-01.jpg', alt: 'Transparent copolymer safety net on modern balcony', isVerified: true },
  { title: 'High-clarity 1 mm copolymer mesh', category: 'Transparent copolymer', image: '/services/transparent-copolymer/transparent-copolymer-02.jpg', alt: 'Crystal-clear transparent copolymer net detail', isVerified: true },
  { title: 'Unobtrusive balcony light & airflow', category: 'Transparent copolymer', image: '/services/transparent-copolymer/transparent-copolymer-05.jpg', alt: 'Transparent net preserving daylight and fresh air', isVerified: true },
  { title: 'Transparent window safety netting', category: 'Transparent copolymer', image: '/services/transparent-copolymer/transparent-copolymer-06.jpg', alt: 'Transparent copolymer net fitted on window frame', isVerified: true },

  // Safety Nets (HDPE Pigeon & Pet)
  { title: 'HDPE balcony pigeon safety net', category: 'Safety nets', image: '/services/hdpe-nylon/hdpe-nylon-01.jpg', alt: 'HDPE pigeon safety net installed on apartment balcony', isVerified: true },
  { title: '30 mm pigeon-proof mesh', category: 'Safety nets', image: '/services/hdpe-nylon/hdpe-nylon-02.jpg', alt: 'Close view of 30 mm pigeon net mesh', isVerified: true },
  { title: 'Building duct area safety net', category: 'Safety nets', image: '/services/hdpe-nylon/hdpe-nylon-05.jpg', alt: 'Duct area safety netting installation', isVerified: true },
  { title: 'Balcony pet protection netting', category: 'Safety nets', image: '/services/pet-safety-nets/pet-safety-nets-01.jpg', alt: 'Pet safety net on high-rise balcony', isVerified: true },
  { title: 'Window pet safety net', category: 'Safety nets', image: '/services/pet-safety-nets/pet-safety-nets-02.jpg', alt: 'Window pet protection net with secure perimeter cord', isVerified: true },

  // Garware TUF Ropes
  { title: 'Garware 2.5 mm braided safety net', category: 'Garware TUF ropes', image: '/services/tuf-ropes-garware/tuf-ropes-garware-01.jpg', alt: 'Garware TUF rope braided net installed on balcony', isVerified: true },
  { title: '40 mm braided mesh detail', category: 'Garware TUF ropes', image: '/services/tuf-ropes-garware/tuf-ropes-garware-02.jpg', alt: 'Close detail of 2.5 mm braided HDPE mesh', isVerified: true },
  { title: 'Heavy-duty balcony enclosure', category: 'Garware TUF ropes', image: '/services/tuf-ropes-garware/tuf-ropes-garware-03.jpg', alt: 'Balcony protection with Garware safety net', isVerified: true },
  { title: 'Monkey & pigeon protection net', category: 'Garware TUF ropes', image: '/services/tuf-ropes-garware/tuf-ropes-garware-04.jpg', alt: 'Garware net protecting against birds and monkeys', isVerified: true },

  // Staircase Safety Nets
  { title: 'Duplex staircase safety net', category: 'Staircase safety nets', image: '/services/staircase-safety-nets/staircase-safety-nets-01.jpg', alt: 'Indoor staircase safety netting for child fall prevention', isVerified: true },
  { title: 'Staircase banister & railing netting', category: 'Staircase safety nets', image: '/services/staircase-safety-nets/staircase-safety-nets-02.jpg', alt: 'Railing protection net along staircase', isVerified: true },
  { title: 'Open stairwell floor-to-ceiling barrier', category: 'Staircase safety nets', image: '/services/staircase-safety-nets/staircase-safety-nets-04.jpg', alt: 'Stairwell void fall protection net', isVerified: true },
  { title: 'Custom-anchored railing safety net', category: 'Staircase safety nets', image: '/services/staircase-safety-nets/staircase-safety-nets-05.jpg', alt: 'Neat railing safety net installation', isVerified: true },

  // Mosquito Velcro Nets
  { title: 'Self-adhesive Velcro window mosquito net', category: 'Mosquito nets', image: '/services/mosquito/mosquito-01.jpg', alt: 'Mosquito velcro screen installed on bedroom window', isVerified: true },
  { title: 'Fine insect mesh window attachment', category: 'Mosquito nets', image: '/services/mosquito/mosquito-02.jpg', alt: 'Close view of fine insect screen mesh', isVerified: true },
  { title: 'Detachable & washable mosquito screen', category: 'Mosquito nets', image: '/services/mosquito/mosquito-03.jpg', alt: 'Removable mosquito net border detail', isVerified: true },
  { title: 'Neat no-drill frame finish', category: 'Mosquito nets', image: '/services/mosquito/mosquito-04.jpg', alt: 'No-drill velcro tape around window frame', isVerified: true },

  // Cricket Sports Nets
  { title: 'Outdoor cricket practice pitch netting', category: 'Sports nets', image: '/services/cricket-sports-net/cricket-sports-net-01.jpg', alt: 'Cricket practice net enclosure', isVerified: true },
  { title: 'Terrace cricket practice enclosure', category: 'Sports nets', image: '/services/cricket-sports-net/cricket-sports-net-02.jpg', alt: 'Terrace cricket practice net installation', isVerified: true },
  { title: 'High-impact cricket sports frame', category: 'Sports nets', image: '/services/cricket-sports-net/cricket-sports-net-03.jpg', alt: 'Durable frame with sports netting', isVerified: true },
  { title: 'Academy boundary sports net', category: 'Sports nets', image: '/services/cricket-sports-net/cricket-sports-net-05.jpg', alt: 'Heavy-duty boundary sports net', isVerified: true },

  // Cloth Hangers
  { title: 'Ceiling pulley clothes drying hanger', category: 'Cloth hangers', image: '/services/cloth-hangers/cloth-hangers-01.jpg', alt: 'Ceiling pulley cloth drying hanger in balcony', isVerified: true },
  { title: 'Wall-mounted foldable drying rack', category: 'Cloth hangers', image: '/services/cloth-hangers/cloth-hangers-02.jpg', alt: 'Foldable wall drying rack', isVerified: true },
  { title: 'Space-saving ceiling drying mechanism', category: 'Cloth hangers', image: '/services/cloth-hangers/cloth-hangers-04.jpg', alt: 'Individual rod cloth drying mechanism', isVerified: true },
  { title: 'Stainless steel utility drying rods', category: 'Cloth hangers', image: '/services/cloth-hangers/cloth-hangers-06.jpg', alt: 'Stainless steel clothes hanger rods', isVerified: true },
]

const filters = [
  'All',
  'Invisible grills',
  'Safety nets',
  'Transparent copolymer',
  'Garware TUF ropes',
  'Staircase safety nets',
  'Mosquito nets',
  'Sports nets',
  'Cloth hangers',
]

export function GalleryGrid() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const visibleItems = galleryItems.filter((item) => filter === 'All' || item.category === filter)

  useEffect(() => {
    if (!selected) return
    previousFocus.current = document.activeElement as HTMLElement
    closeButton.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previousFocus.current?.focus()
    }
  }, [selected])

  return (
    <>
      {/* Filter Tabs with animated selection */}
      <div className="gallery-filters" role="group" aria-label="Filter gallery images">
        {filters.map((item) => {
          const isActive = filter === item
          return (
            <button
              key={item}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(item)}
              className={isActive ? 'is-active' : ''}
              style={{ position: 'relative' }}
            >
              {isActive && !prefersReducedMotion && (
                <motion.span
                  layoutId="gallery-active-pill"
                  className="gallery-filter-indicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  aria-hidden="true"
                />
              )}
              <span className="gallery-filter-label">{item}</span>
            </button>
          )
        })}
      </div>

      {/* Gallery Grid with staggered items */}
      <motion.div
        layout
        className="gallery-grid"
        transition={{ duration: 0.35, ease: FAST_EASE }}
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => (
            <motion.div
              layout
              key={`${item.title}-${item.category}-${item.image}`}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.03, 0.15),
                ease: FAST_EASE,
              }}
              whileHover={prefersReducedMotion ? {} : { y: -5 }}
              className="gallery-item-wrap"
            >
              <button
                className="gallery-item gallery-item-enhanced"
                type="button"
                onClick={() => setSelected(item)}
                aria-label={`Open preview: ${item.title}`}
              >
                <div className="gallery-item-image-box">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="gallery-card-img"
                  />
                  {item.video && (
                    <span className="gallery-video-pill">
                      <Play size={12} fill="currentColor" /> Video
                    </span>
                  )}
                  <div className="gallery-hover-overlay" aria-hidden="true">
                    <span className="gallery-zoom-badge">
                      <ZoomIn size={18} />
                    </span>
                  </div>
                </div>
                <span className="gallery-item-label">
                  <span className="gallery-card-title">{item.title}</span>
                  <small>{item.category}</small>
                </span>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal with Photo & Video Support */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelected(null)
            }}
          >
            <button
              ref={closeButton}
              type="button"
              className="lightbox-close"
              onClick={() => setSelected(null)}
              aria-label="Close preview"
            >
              <X size={20} />
            </button>

            <motion.figure
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: FAST_EASE }}
              className="lightbox-figure"
              onClick={(e) => e.stopPropagation()}
            >
              {selected.video ? (
                <div className="lightbox-video-box">
                  <video
                    src={selected.video}
                    controls
                    autoPlay
                    playsInline
                    className="lightbox-video-player"
                  />
                </div>
              ) : (
                <div className="lightbox-photo">
                  <Image
                    src={selected.image}
                    alt={selected.alt}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 768px) 96vw, 1050px"
                    className="lightbox-img"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              )}
              <figcaption>
                <strong>{selected.title}</strong> &middot; {selected.category}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
