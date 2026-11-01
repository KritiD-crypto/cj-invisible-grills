export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

// Track page views manually across initial load and client-side route changes
export const pageview = (url: string) => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return

  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function () {
      window.dataLayer.push(arguments)
    }
  }

  window.gtag('event', 'page_view', {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  })
}

// Optional helper for custom event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category?: string
  label?: string
  value?: number
}) => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return

  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function () {
      window.dataLayer.push(arguments)
    }
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
