import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { ChatAssistant } from '@/components/site/chat-assistant'
import { jsonLdScript, organizationJsonLd, websiteJsonLd, siteUrl } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: 'CJ Invisible Grills | Invisible Grills & Safety Nets in Bengaluru, Chennai & Mysuru',
    template: '%s | CJ Invisible Grills',
  },
  description:
    'CJ Invisible Grills specializes in premium 316 marine-grade invisible grills, pigeon & balcony safety nets, transparent nets, sports nets, and clothes drying hangers across Bengaluru, Chennai, and Mysuru. Free site consultation: +91 9886577746.',
  keywords: [
    'invisible grills Bengaluru',
    'invisible grills Chennai',
    'invisible grills Mysore',
    'balcony safety nets',
    'pigeon safety nets',
    'transparent safety nets',
    'cricket sports nets',
    'garware safety nets',
    'clothes drying hangers',
    'mosquito velcro mesh',
    'staircase safety nets',
    'bird spikes',
  ],
  applicationName: 'CJ Invisible Grills',
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'CJ Invisible Grills',
    title: 'CJ Invisible Grills | Premium Invisible Grills & Safety Nets',
    description:
      'Engineered 316 marine-grade invisible grills and ISO-certified safety netting for balconies, windows, and staircases across Bengaluru, Chennai, and Mysuru.',
    images: [
      {
        url: `${siteUrl}/images/cj-logo-transparent.png`,
        width: 1024,
        height: 341,
        alt: 'CJ Invisible Grills Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CJ Invisible Grills | Invisible Grills & Safety Nets',
    description:
      'Premium invisible grills & safety nets in Bengaluru, Chennai & Mysuru. Call +91 9886577746.',
    images: [`${siteUrl}/images/cj-logo-transparent.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAF9FF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd)}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatAssistant />
      </body>
    </html>
  )
}
