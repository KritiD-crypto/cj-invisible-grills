import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/site/page-header'
import { SubpageHeroAnimated } from '@/components/site/subpage-hero-animated'
import { PremiumServiceCard } from '@/components/site/premium-service-card'
import { ServiceDetailsSection } from '@/components/site/service-details-section'
import { AnimatedSection, SlideIn, StaggerContainer, StaggerItem } from '@/components/site/animated-section'
import { Reveal } from '@/components/site/reveal'
import { QuoteBanner } from '@/components/site/sections'
import { findService, serviceRoutes, services } from '@/lib/business'
import { getServiceDetailInfo } from '@/lib/service-details'
import { breadcrumbJsonLd, buildMetadata, jsonLdScript, siteUrl } from '@/lib/seo'

export function generateStaticParams() {
  return serviceRoutes.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = findService(slug)
  if (!service) return buildMetadata('Service', 'Explore installation solutions from CJ Invisible Grills.', `/services/${slug}`)
  return buildMetadata(
    `${service.pageTitle} in Bengaluru, Chennai & Mysore`,
    `${service.pageTitle} by CJ Invisible Grills. Premium installation across Bengaluru, Chennai and Mysore with high-tensile 316 stainless steel cables, durable netting, warranty and site-aware craftsmanship.`,
    `/services/${slug}`
  )
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = findService(slug)
  if (!service) notFound()

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3)
  const title = service.pageTitle
  const description = service.isCategory
    ? service.description
    : `${title} can be considered for selected openings and properties. Suitability depends on your space, fixing points and how the area is used.`

  const heroHeading = service.isCategory
    ? `Explore ${service.title.toLowerCase()} options.`
    : `A solution shaped around ${title.toLowerCase()}.`

  const heroCopy = service.isCategory
    ? service.detail
    : `${title} is one of the options within ${service.title.toLowerCase()}. We consider the opening, fixing surfaces, access and household needs before discussing an installation.`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    serviceType: title,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'CJ Invisible Grills',
      telephone: '+919886577746',
      email: 'cjgrillsind@gmail.com',
    },
    areaServed: [
      'Bengaluru, Karnataka, India',
      'Chennai, Tamil Nadu, India',
      'Mysore, Karnataka, India',
    ],
    ...(siteUrl ? { url: `${siteUrl}/services/${slug}` } : {}),
  }

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: title, path: `/services/${slug}` },
  ])

  const detailInfo = getServiceDetailInfo(slug)
  const isGenuinePhoto = service.image.startsWith('/services/')

  return (
    <main className="page-ambient-bg">
      <PageHeader
        breadcrumbs={[{ title: 'Services', href: '/services' }, { title }]}
        eyebrow="CJ Invisible Grills · Service"
        title={title}
        description={description}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      {breadcrumbs && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />}

      <SubpageHeroAnimated
        eyebrow="A site-aware approach"
        title={heroHeading}
        description={heroCopy}
        image={service.image}
        ctaText="Discuss your space"
        ctaHref="/contact"
        imageCaption={isGenuinePhoto ? 'Completed installation' : 'Illustrative concept image'}
      />

      <div className="page-content">
        {detailInfo && (
          <AnimatedSection className="section section-tight">
            <ServiceDetailsSection info={detailInfo} serviceTitle={title} />
          </AnimatedSection>
        )}
        {service.subservices && service.subservices.length > 0 && (
          <AnimatedSection className="section section-tight">
            <SlideIn>
              <div className="section-intro">
                <div>
                  <span className="eyebrow">Explore this category</span>
                  <h2>Options within {service.title.toLowerCase()}.</h2>
                </div>
                <div>
                  <p>Each opening and property has its own requirements. Choose a topic to learn more, then contact us about your particular space.</p>
                </div>
              </div>
            </SlideIn>

            <StaggerContainer>
              <div className="subservice-list">
                {service.subservices.map((sub) => (
                  <StaggerItem key={sub.slug}>
                    <Link className="subservice-link subservice-link-enhanced" href={`/services/${sub.slug}`}>
                      <span>{sub.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </AnimatedSection>
        )}

        <AnimatedSection className="section section-tight">
          <SlideIn>
            <div className="section-intro">
              <div>
                <span className="eyebrow">Also worth exploring</span>
                <h2>Related services.</h2>
              </div>
              <Link className="text-link" href="/services">
                All services <ArrowUpRight size={14} />
              </Link>
            </div>
          </SlideIn>

          <StaggerContainer>
            <div className="service-grid">
              {related.map((item, index) => (
                <StaggerItem key={item.slug}>
                  <PremiumServiceCard service={item} index={index} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </AnimatedSection>
      </div>

      <Reveal>
        <QuoteBanner
          title="Let’s talk about your opening."
          copy="We’ll ask a few practical questions and help you work out the next step for your property."
        />
      </Reveal>
    </main>
  )
}
