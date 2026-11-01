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

const serviceSeoCopy: Record<string, { title: string; description: string }> = {
  'invisible-grills-for-balcony': {
    title: 'Invisible Grills for Balcony in Bangalore & Mysore | Balcony Safety',
    description: 'Premium 316 marine-grade invisible grills for balconies in Bangalore, Chennai and Mysore. Certified high-tensile safety cables for apartments with 100% unobstructed panoramic views.',
  },
  'invisible-grills-for-glass-balcony': {
    title: 'Invisible Grills for Glass Balcony in Bangalore & Mysore',
    description: 'Specialised invisible grills for glass balconies in Bangalore. Seamlessly integrated height safety engineered for glass railings and contemporary architectural balconies.',
  },
  'invisible-grills-for-plain-balcony': {
    title: 'Invisible Grills for Plain Balcony in Bangalore & Mysore',
    description: 'Durable invisible grills for plain balconies in Bangalore. Full-height and parapet-mounted high-tensile safety cables for conventional apartments and open-edge homes.',
  },
  'invisible-grills-for-windows': {
    title: 'Invisible Grills for Windows in Bangalore & Mysore | Window Safety',
    description: 'Modern invisible grills for windows in Bangalore. Discreet, rust-free 316 stainless steel cable systems for sliding and openable window frames without blocking air or daylight.',
  },
  'invisible-grills-for-utilities': {
    title: 'Invisible Grills for Utility Areas in Bangalore & Mysore',
    description: 'Protective invisible grills for utility areas and service balconies in Bangalore. Secure open wash areas and service yards while preserving continuous ventilation.',
  },
  'invisible-grills-for-staircases': {
    title: 'Invisible Grills for Staircases in Bangalore & Mysore | Duplex Safety',
    description: 'Architectural invisible grills for staircases and duplex voids in Bangalore. High-tensile vertical cable barriers for open banisters and mezzanine voids.',
  },
  'invisible-grills-for-terraces': {
    title: 'Invisible Grills for Terraces in Bangalore & Mysore | Rooftop Safety',
    description: 'High-tensile invisible grills for terraces and rooftop leisure areas in Bangalore. Weather-resistant perimeter safety cables preserving panoramic skyline views.',
  },
  'invisible-grills-for-compound-walls': {
    title: 'Invisible Grills for Compound Walls in Bangalore & Mysore',
    description: 'Perimeter invisible grills for compound walls in Bangalore. Sleek, high-security vertical cable barriers for villas and gated communities without bulky iron bars.',
  },
  'invisible-grills-for-open-areas': {
    title: 'Invisible Grills for Open Spaces & Areas in Bangalore',
    description: 'Custom invisible grills for open spaces, central atriums, courtyards and large spans in Bangalore and Mysore. Certified load-bearing structural cable systems.',
  },
  'wall-mounted-cloth-hangers': {
    title: 'Wall-Mounted Cloth Hangers in Bangalore | Foldable Drying Racks',
    description: 'Heavy-duty wall-mounted cloth hangers and foldable drying racks in Bangalore. Space-saving rust-proof stainless steel construction for balconies and utility walls.',
  },
  'ceiling-mounted-cloth-hangers': {
    title: 'Ceiling-Mounted Cloth Hangers in Bangalore | Pulley Drying Racks',
    description: 'Smooth pulley ceiling-mounted cloth hangers in Bangalore. Individual pipe lowering mechanisms with rust-proof stainless steel rods for easy daily laundry drying.',
  },
  'extra-mount-cloth-hangers': {
    title: 'Extra-Mount Cloth Hangers in Bangalore & Mysore | Heavy-Duty Drying',
    description: 'High-capacity extra-mount cloth hangers in Bangalore. Heavy-duty structural brackets and reinforced stainless steel pipes built for heavy laundry loads.',
  },
  'pigeon-safety-nets': {
    title: 'Pigeon Safety Nets in Bangalore & Mysore | Anti-Pigeon Balcony Nets',
    description: 'High-durability HDPE pigeon safety nets in Bangalore. Precision 30 mm mesh blocking pigeon and bird intrusion across balconies, windows and duct shafts.',
  },
  'cricket-practice-nets': {
    title: 'Cricket Nets Installation & Practice Enclosures in Bangalore',
    description: 'Professional cricket nets installation in Bangalore. High-tensile UV-stabilised braided netting for terrace practice pitches, academies and sports enclosures.',
  },
  'child-safety-nets': {
    title: 'Child Safety Nets in Bangalore & Mysore | Balcony Fall Protection',
    description: 'Certified fall-prevention child safety nets in Bangalore for high-rise apartment balconies, stairwells, and wide windows with heavy-duty anchors.',
  },
  'pet-safety-nets': {
    title: 'Pet Safety Nets for Balconies & Windows in Bangalore',
    description: 'Bite-resistant pet safety nets in Bangalore for cats and dogs. Tight mesh gaps preventing curious pets from slipping through high-rise railings.',
  },
  'coconut-safety-nets': {
    title: 'Coconut Safety Nets Installation in Bangalore & Mysore',
    description: 'Heavy-duty coconut safety nets installation in Bangalore. High-impact shock-absorbing braided netting protecting vehicles, parking lots and pedestrians.',
  },
  'balcony-nets': {
    title: 'Balcony Safety Nets in Bangalore & Mysore | Apartment Protection',
    description: 'Reliable balcony safety nets in Bangalore. Custom-fitted durable HDPE nylon netting protecting against accidental falls, birds, and pests with full airflow.',
  },
}

export function getServiceMetadata(slug: string, pageTitle: string): Metadata {
  const custom = serviceSeoCopy[slug]
  if (custom) {
    return buildMetadata(custom.title, custom.description, `/services/${slug}`)
  }

  // Default SEO formulation
  const title = `${pageTitle} in Bangalore, Chennai & Mysore`
  const description = `${pageTitle} by CJ Invisible Grills. Professional installation across Bangalore, Chennai and Mysore with certified materials, warranty and site-aware craftsmanship.`
  return buildMetadata(title, description, `/services/${slug}`)
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
  description: 'Premium invisible grills for balconies, windows and open areas, wall-mounted and ceiling cloth hangers, pigeon safety nets, cricket practice nets, child and pet safety nets across Bengaluru, Chennai, and Mysore.',
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
