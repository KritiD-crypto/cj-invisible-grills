import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/site/page-header'
import { QuoteBanner } from '@/components/site/sections'
import { LocalitySearch } from '@/components/site/locality-search'
import { AnimatedSection, SlideIn } from '@/components/site/animated-section'
import { Reveal } from '@/components/site/reveal'
import { chennaiAreas, bengaluruAreas, mysuruAreas } from '@/lib/business'
import { breadcrumbJsonLd, buildMetadata, jsonLdScript, siteUrl } from '@/lib/seo'

const cityData = {
  chennai: {
    title: 'Chennai',
    state: 'Tamil Nadu',
    areas: chennaiAreas,
    description:
      'CJ Invisible Grills coordinates enquiries across Chennai for invisible grills, safety nets, mosquito protection and related solutions. Coverage and scheduling are confirmed for each project; the localities below are a service-area guide, not a list of physical branches.',
  },
  bengaluru: {
    title: 'Bengaluru',
    state: 'Karnataka',
    areas: bengaluruAreas,
    description:
      'CJ Invisible Grills coordinates enquiries across Bengaluru for invisible grills, safety nets and related solutions. Coverage and scheduling are confirmed for each project; the localities below are a service-area guide, not a list of physical branches.',
  },
  mysore: {
    title: 'Mysore',
    state: 'Karnataka',
    areas: mysuruAreas,
    description:
      'CJ Invisible Grills coordinates enquiries across Mysore for invisible grills, safety nets and related solutions. Coverage and scheduling are confirmed for each project; the localities below are a service-area guide, not a list of physical branches.',
  },
  mysuru: {
    title: 'Mysore',
    state: 'Karnataka',
    areas: mysuruAreas,
    description:
      'CJ Invisible Grills coordinates enquiries across Mysore for invisible grills, safety nets and related solutions. Coverage and scheduling are confirmed for each project; the localities below are a service-area guide, not a list of physical branches.',
  },
}

type CityKey = keyof typeof cityData

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string; city?: string }> }) {
  const resolvedParams = await params
  const city = resolvedParams.city || resolvedParams.slug || ''
  const details = cityData[city as CityKey]
  if (!details) return buildMetadata('Service areas', 'Explore service coverage.', `/areas/${city}`)

  const isChennai = details.title.toLowerCase() === 'chennai'
  const isBengaluru = details.title.toLowerCase() === 'bengaluru'

  const keywordsTitle = isChennai
    ? 'Invisible Grills in Chennai | Balcony Safety Nets & Pigeon Nets'
    : isBengaluru
    ? 'Invisible Grills in Bengaluru | Safety Nets & Balcony Protection'
    : 'Invisible Grills in Mysuru | Balcony Safety Nets & Window Grills'

  return buildMetadata(
    keywordsTitle,
    `Looking for premium invisible grills or safety nets in ${details.title}? CJ Invisible Grills coordinates high-tensile 316 stainless steel installations across ${details.areas.slice(0, 6).join(', ')} and surrounding localities.`,
    `/areas/${city}`
  )
}

export default async function CityAreaPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const details = cityData[city as CityKey]
  if (!details) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Installation services in ${details.title}`,
    serviceType: 'Invisible grills and safety solutions',
    areaServed: `${details.title}, India`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'CJ Invisible Grills',
      telephone: '+919886577746',
      email: 'cjgrillsind@gmail.com',
    },
    ...(siteUrl ? { url: `${siteUrl}/areas/${city}` } : {}),
  }

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Areas We Serve', path: '/areas' },
    { name: details.title, path: `/areas/${city}` },
  ])

  return (
    <main className="page-ambient-bg">
      <PageHeader
        breadcrumbs={[{ title: 'Areas We Serve', href: '/areas' }, { title: details.title }]}
        eyebrow={`Service area · ${details.state}`}
        title={`Solutions for homes in ${details.title}.`}
        description={details.description}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      {breadcrumbs && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />}

      <div className="page-content">
        <AnimatedSection className="section section-tight">
          <SlideIn>
            <div className="area-intro">
              <h2>Check your locality</h2>
              <p>
                Search the localities below, then contact us with your location and requirements. The list indicates where enquiries are considered, not a physical office or branch.
              </p>
            </div>
          </SlideIn>

          <SlideIn delay={0.1}>
            <div style={{ padding: '24px 0 40px' }}>
              <LocalitySearch city={details.title} localities={details.areas} />
            </div>
          </SlideIn>
        </AnimatedSection>

        <AnimatedSection className="section section-tight" delay={0.15}>
          <SlideIn>
            <div className="area-intro">
              <h2>What to share</h2>
              <p>
                Let us know the service you’re considering, the property type and anything relevant about the opening or installation site. We’ll confirm coverage and discuss the next step.
              </p>
            </div>
          </SlideIn>
        </AnimatedSection>
      </div>

      <Reveal>
        <QuoteBanner
          title={`Need a solution in ${details.title}?`}
          copy="Share your locality and what you’re looking to solve. We’ll confirm how we can help."
        />
      </Reveal>
    </main>
  )
}
