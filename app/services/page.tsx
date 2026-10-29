import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs, QuoteBanner } from '@/components/site/sections'
import { services } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata('Invisible grills, safety nets and related services', 'Explore eight service categories from invisible grills and balcony nets to bird spikes and cloth hangers in Bengaluru and Mysuru.', '/services')

export default function ServicesPage() {
  return <main><section className="page-top"><Breadcrumbs items={[{ title: 'Services' }]} /><div className="page-heading"><span className="eyebrow">A considered set of solutions</span><h1>Services for open spaces, everyday living.</h1><p>Explore the options below. The right fit depends on your opening, surfaces, intended use and building requirements.</p></div></section>
    <div className="page-content"><div className="service-grid">{services.map((service, index) => <Link href={`/services/${service.slug}`} className="service-card" key={service.slug} style={{ ['--card-order' as string]: index }}><div className="service-image"><Image src={service.image} alt={`Illustrative ${service.title.toLowerCase()} concept image`} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 26vw" /><span className="image-note">Illustrative image</span></div><div className="service-card-copy"><span className="service-number">0{index + 1} / SERVICE</span><h3>{service.title}</h3><p>{service.description}</p><span className="text-link" style={{ marginTop: 12 }}>View service <ArrowUpRight size={14} /></span></div></Link>)}</div></div>
    <QuoteBanner title="Not sure which service to choose?" copy="Tell us what you want to address and we’ll help you work out a useful next step." />
  </main>
}
