import { PageHeader } from '@/components/site/page-header'
import { QuoteBanner } from '@/components/site/sections'
import { PremiumServiceCard } from '@/components/site/premium-service-card'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/site/animated-section'
import { Reveal } from '@/components/site/reveal'
import { services } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata(
  'Invisible Grills, Balcony Safety Nets, Pigeon Nets in Bengaluru, Chennai & Mysore',
  'Explore comprehensive safety installations by CJ Invisible Grills: balcony invisible grills, window grills, HDPE pigeon safety nets, transparent copolymer mesh, Garware TUF ropes, cricket sports nets, staircase nets, and cloth hangers across Bengaluru, Chennai and Mysore.',
  '/services'
)

export default function ServicesPage() {
  return (
    <main className="page-ambient-bg">
      <PageHeader
        breadcrumbs={[{ title: 'Services' }]}
        eyebrow="A considered set of solutions"
        title="Services for open spaces, everyday living."
        description="Explore the options below. The right fit depends on your opening, surfaces, intended use and building requirements."
      />

      <div className="page-content">
        <AnimatedSection className="section-no-pad">
          <StaggerContainer staggerDelay={0.08}>
            <div className="service-grid">
              {services.map((service, index) => (
                <StaggerItem key={service.slug}>
                  <PremiumServiceCard
                    service={service}
                    index={index}
                    label={`0${index + 1} / SERVICE`}
                  />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </AnimatedSection>
      </div>

      <Reveal>
        <QuoteBanner
          title="Not sure which service to choose?"
          copy="Tell us what you want to address and we’ll help you work out a useful next step."
        />
      </Reveal>
    </main>
  )
}
