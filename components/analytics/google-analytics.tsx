'use client'

import { Suspense, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { GA_TRACKING_ID, pageview } from '@/lib/gtag'

function RouteTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastTrackedUrl = useRef<string | null>(null)

  useEffect(() => {
    if (!GA_TRACKING_ID) return

    const search = searchParams?.toString()
    const url = search ? `${pathname}?${search}` : pathname

    // Prevent duplicate page_view events on the same URL
    if (lastTrackedUrl.current === url) return
    lastTrackedUrl.current = url

    pageview(url)
  }, [pathname, searchParams])

  return null
}

export function GoogleAnalytics() {
  if (!GA_TRACKING_ID) return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              send_page_view: false
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <RouteTracker />
      </Suspense>
    </>
  )
}
