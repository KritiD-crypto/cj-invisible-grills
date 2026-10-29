import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Breadcrumbs, QuoteBanner } from '@/components/site/sections'
import { findService, serviceRoutes, services } from '@/lib/business'
import { breadcrumbJsonLd, buildMetadata, jsonLdScript, siteUrl } from '@/lib/seo'

export function generateStaticParams() { return serviceRoutes.map((slug) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = findService(slug)
  if (!service) return buildMetadata('Service', 'Explore installation solutions from CJ Invisible Grills.', `/services/${slug}`)
  return buildMetadata(service.pageTitle, `${service.pageTitle} in Bengaluru and Mysuru. Explore site-aware options and discuss a suitable installation with CJ Invisible Grills.`, `/services/${slug}`)
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = findService(slug)
  if (!service) notFound()
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3)
  const title = service.pageTitle
  const description = service.isCategory ? service.description : `${title} can be considered for selected openings and properties. Suitability depends on your space, fixing points and how the area is used.`
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: title, serviceType: title, description, provider: { '@type': 'LocalBusiness', name: 'CJ Invisible Grills', telephone: '+919035771799' }, areaServed: ['Bengaluru, Karnataka, India', 'Mysuru, Karnataka, India'], ...(siteUrl ? { url: `${siteUrl}/services/${slug}` } : {}) }
  const breadcrumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: title, path: `/services/${slug}` }])
  return <main><section className="page-top"><Breadcrumbs items={[{ title: 'Services', href: '/services' }, { title }]} /><div className="page-heading"><span className="eyebrow">CJ Invisible Grills · Service</span><h1>{title}</h1><p>{description}</p></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />{breadcrumbs && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />}
    <section className="subpage-hero"><div className="subpage-hero-copy"><span className="eyebrow">A site-aware approach</span><h2>{service.isCategory ? `Explore ${service.title.toLowerCase()} options.` : `A solution shaped around ${title.toLowerCase()}.`}</h2><p>{service.isCategory ? service.detail : `${title} is one of the options within ${service.title.toLowerCase()}. We consider the opening, fixing surfaces, access and household needs before discussing an installation.`}</p><Link className="button button-primary" href="/contact">Discuss your space <ArrowUpRight size={15} /></Link></div><div className="subpage-hero-image"><Image src={service.image} alt={`Illustrative ${service.title.toLowerCase()} concept image`} fill loading="eager" sizes="(max-width: 760px) 90vw, 50vw" /><span className="image-note">Illustrative concept image</span></div></section>
    <div className="page-content"><section className="section section-tight"><div className="section-intro"><div><span className="eyebrow">Explore this category</span><h2>Options within {service.title.toLowerCase()}.</h2></div><div><p>Each opening and property has its own requirements. Choose a topic to learn more, then contact us about your particular space.</p></div></div><div className="subservice-list">{service.subservices.map((sub) => <Link key={sub.slug} className="subservice-link" href={`/services/${sub.slug}`}><span>{sub.title}</span><ArrowRight size={14} /></Link>)}</div></section>
      <section className="section section-tight"><div className="section-intro"><div><span className="eyebrow">Also worth exploring</span><h2>Related services.</h2></div><Link className="text-link" href="/services">All services <ArrowUpRight size={14} /></Link></div><div className="service-grid">{related.map((item, index) => <Link href={`/services/${item.slug}`} className="service-card" key={item.slug}><div className="service-image"><Image src={item.image} alt={`Illustrative ${item.title.toLowerCase()} concept image`} fill sizes="(max-width: 700px) 90vw, 30vw" /></div><div className="service-card-copy"><h3>{item.title}</h3><p>{item.description}</p></div></Link>)}</div></section></div><QuoteBanner title="Let’s talk about your opening." copy="We’ll ask a few practical questions and help you work out the next step for your property." />
  </main>
}
