import type { Metadata } from 'next'

export const siteName = 'CJ Invisible Grills'
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '')
export const siteUrl = configuredSiteUrl && /^https?:\/\//i.test(configuredSiteUrl) ? configuredSiteUrl : undefined

export function buildMetadata(title: string, description: string, path = '/') : Metadata {
  const canonical = siteUrl ? `${siteUrl}${path}` : undefined
  return {
    title: `${title} | ${siteName}`,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      type: 'website',
      ...(canonical ? { url: canonical } : {}),
      siteName,
      ...(siteUrl ? { images: [{ url: `${siteUrl}/images/hero-balcony.png`, alt: 'Illustrative modern apartment balcony with discreet safety cables' }] } : {}),
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${siteName}`, description },
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteName,
  telephone: '+919035771799',
  areaServed: ['Bengaluru, Karnataka, India', 'Mysuru, Karnataka, India'],
  description: 'Invisible grills, safety nets and related installation solutions serving Bengaluru and Mysuru, Karnataka.',
  ...(siteUrl ? { url: siteUrl } : {}),
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  if (!siteUrl) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: `${siteUrl}${item.path}` })),
  }
}

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') }
}
