'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckCircle2, ShieldCheck, Wrench, Layers, ZoomIn, Play, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import type { ServiceDetailInfo, ServicePhoto } from '@/lib/service-details'

interface ServiceDetailsSectionProps {
  info: ServiceDetailInfo
  serviceTitle: string
}

export function ServiceDetailsSection({ info, serviceTitle }: ServiceDetailsSectionProps) {
  const [activePhoto, setActivePhoto] = useState<ServicePhoto | null>(null)

  return (
    <section className="service-deep-dive section-tight">
      {/* 1. Technical & Material Specifications */}
      {info.specifications && info.specifications.length > 0 && (
        <div className="spec-block">
          <div className="spec-header">
            <div>
              <span className="eyebrow">
                <ShieldCheck size={14} className="inline-icon" /> Material & Technical Details
              </span>
              <h2>{info.badge ? `${info.badge} specifications.` : `${serviceTitle} specifications.`}</h2>
            </div>
            {info.badge && <span className="spec-badge">{info.badge}</span>}
          </div>

          <div className="spec-grid">
            {info.specifications.map((spec) => (
              <div key={spec.label} className="spec-card">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-val">{spec.value}</span>
              </div>
            ))}
          </div>

          {info.importantNote && (
            <p className="spec-note">
              <strong>Note:</strong> {info.importantNote}
            </p>
          )}
        </div>
      )}

      {/* 2. Features & Key Benefits */}
      {((info.features && info.features.length > 0) || (info.benefits && info.benefits.length > 0)) && (
        <div className="feature-benefits-split">
          {info.features && info.features.length > 0 && (
            <div className="features-card">
              <span className="eyebrow">
                <Layers size={14} className="inline-icon" /> Core Features
              </span>
              <h3>Engineered for everyday durability.</h3>
              <ul className="feature-list">
                {info.features.map((feat) => (
                  <li key={feat}>
                    <CheckCircle2 size={16} className="feature-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {info.applications && info.applications.length > 0 && (
            <div className="applications-card">
              <span className="eyebrow">
                <Wrench size={14} className="inline-icon" /> Recommended Applications
              </span>
              <h3>Where this solution fits best.</h3>
              <div className="app-pills">
                {info.applications.map((app) => (
                  <span key={app} className="app-pill">
                    {app}
                  </span>
                ))}
              </div>

              {info.benefits && info.benefits.length > 0 && (
                <div className="benefits-subblock">
                  <h4 className="benefits-title">Key Benefits</h4>
                  <ul className="benefits-list">
                    {info.benefits.map((b) => (
                      <li key={b}>
                        <span className="bullet-dot" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 3. Sequential Installation Steps (when available) */}
      {info.installationSteps && info.installationSteps.length > 0 && (
        <div className="install-process-block">
          <div className="install-process-header">
            <span className="eyebrow">Professional Installation Process</span>
            <h3>Step-by-step installation approach.</h3>
          </div>
          <div className="install-steps-grid">
            {info.installationSteps.map((step, idx) => (
              <div key={step} className="install-step-card">
                <span className="install-step-num">0{idx + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Genuine Business Photography Gallery */}
      {info.photos && info.photos.length > 0 && (
        <div className="service-gallery-block">
          <div className="service-gallery-header">
            <div>
              <span className="eyebrow">Actual Installations</span>
              <h3>Recent completed work for {serviceTitle.toLowerCase()}.</h3>
            </div>
            <span className="gallery-counter">{info.photos.length} Photographs</span>
          </div>

          <div className="service-gallery-grid">
            {info.photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                className="service-photo-card"
                onClick={() => setActivePhoto(photo)}
                aria-label={`View enlarged photo: ${photo.caption}`}
              >
                <div className="service-photo-image">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="service-img"
                  />
                  <div className="service-photo-overlay">
                    <ZoomIn size={18} />
                  </div>
                </div>
                <figcaption className="service-photo-caption">
                  <span>{photo.caption}</span>
                </figcaption>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 5. Video Showcase (when available) */}
      {info.video && (
        <div className="service-video-block">
          <div className="service-video-header">
            <span className="eyebrow">
              <Play size={14} className="inline-icon" /> Video Walkthrough
            </span>
            <h3>{info.video.caption}</h3>
          </div>
          <div className="service-video-wrapper">
            <video
              src={info.video.src}
              controls
              playsInline
              preload="metadata"
              className="service-video-player"
            />
          </div>
        </div>
      )}

      {/* Lightbox for service photos */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActivePhoto(null)}
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>
            <motion.figure
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-photo">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  sizes="90vw"
                  priority
                />
              </div>
              <figcaption>
                {activePhoto.caption} — CJ Invisible Grills installation
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
