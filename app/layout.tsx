import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { ChatAssistant } from '@/components/site/chat-assistant'
import { jsonLdScript, organizationJsonLd, siteUrl } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: 'CJ Invisible Grills | Open views, considered safety', template: '%s' },
  description: 'Explore invisible grills, safety nets and related solutions for homes and spaces in Bengaluru and Mysuru, Karnataka.',
  applicationName: 'CJ Invisible Grills',
  generator: 'Next.js',
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#FAF9FF', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatAssistant />
      </body>
    </html>
  )
}
