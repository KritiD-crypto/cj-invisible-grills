import { notFound } from 'next/navigation'
import { Breadcrumbs, QuoteBanner } from '@/components/site/sections'
import { LocalitySearch } from '@/components/site/locality-search'
import { bengaluruAreas, mysuruAreas } from '@/lib/business'
import { breadcrumbJsonLd, buildMetadata, jsonLdScript, siteUrl } from '@/lib/seo'

const cityData = { bengaluru: { title: 'Bengaluru', areas: bengaluruAreas, description: 'CJ Invisible Grills coordinates enquiries across Bengaluru for invisible grills, safety nets and related solutions. Coverage and scheduling are confirmed for each project; the localities below are a service-area guide, not a list of physical branches.' }, mysuru: { title: 'Mysuru', areas: mysuruAreas, description: 'CJ Invisible Grills coordinates enquiries across Mysuru for invisible grills, safety nets and related solutions. Coverage and scheduling are confirmed for each project; the localities below are a service-area guide, not a list of physical branches.' } }

type CityKey = keyof typeof cityData
export function generateStaticParams() { return Object.keys(cityData).map((city) => ({ city })) }
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const details = cityData[city as CityKey]
  if (!details) return buildMetadata('Service areas', 'Explore service coverage.', `/areas/${city}`)
  return buildMetadata(`Invisible grills and safety solutions in ${details.title}`, details.description, `/areas/${city}`)
}

export default async function CityAreaPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const details = cityData[city as CityKey]
  if (!details) notFound()
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: `Installation services in ${details.title}`, serviceType: 'Invisible grills and safety solutions', areaServed: details.title, provider: { '@type': 'LocalBusiness', name: 'CJ Invisible Grills', telephone: '+919035771799' }, ...(siteUrl ? { url: `${siteUrl}/areas/${city}` } : {}) }
  const breadcrumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Areas We Serve', path: '/areas' }, { name: details.title, path: `/areas/${city}` }])
  return <main><section className="page-top"><Breadcrumbs items={[{ title: 'Areas We Serve', href: '/areas' }, { title: details.title }]} /><div className="page-heading"><span className="eyebrow">Service area · Karnataka</span><h1>Solutions for homes in {details.title}.</h1><p>{details.description}</p></div></section><script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />{breadcrumbs && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />}<div className="page-content"><section className="area-intro"><h2>Check your locality</h2><p>Search the localities below, then contact us with your location and requirements. The list indicates where enquiries are considered, not a physical office or branch.</p></section><div style={{ padding: '24px 0 43px' }}><LocalitySearch city={details.title} localities={details.areas} /></div><div className="area-intro"><h2>What to share</h2><p>Let us know the service you’re considering, the property type and anything relevant about the opening or installation site. We’ll confirm coverage and discuss the next step.</p></div></div><QuoteBanner title={`Need a solution in ${details.title}?`} copy="Share your locality and what you’re looking to solve. We’ll confirm how we can help." /></main>
}
