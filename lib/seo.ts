import type { Metadata } from 'next'

export const siteName = 'CJ Invisible Grills'
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '')
export const siteUrl = configuredSiteUrl && /^https?:\/\//i.test(configuredSiteUrl) ? configuredSiteUrl : 'https://cjinvisiblegrills.in'

export function buildMetadata(title: string, description: string, path = '/'): Metadata {
  const canonical = `${siteUrl}${path === '/' ? '' : path}`
  return {
    title: `${title} | ${siteName}`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      type: 'website',
      url: canonical,
      siteName,
      images: [
        {
          url: `${siteUrl}/images/cj-logo-transparent.png`,
          width: 1024,
          height: 341,
          alt: `${siteName} - Safety Solutions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [`${siteUrl}/images/cj-logo-transparent.png`],
    },
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteName,
  telephone: '+919886577746',
  email: 'cjgrillsind@gmail.com',
  url: siteUrl,
  logo: `${siteUrl}/images/cj-logo-transparent.png`,
  image: `${siteUrl}/images/cj-logo-transparent.png`,
  areaServed: [
    { '@type': 'City', name: 'Bengaluru' },
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'City', name: 'Mysuru' },
    { '@type': 'State', name: 'Karnataka' },
    { '@type': 'State', name: 'Tamil Nadu' },
  ],
  description: 'Premium invisible grills, balcony safety nets, pigeon protection, transparent safety nets, cricket sports nets, and clothes drying hangers across Bengaluru, Chennai, and Mysore.',
  priceRange: '₹₹',
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/areas?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') }
}
