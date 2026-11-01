import { PageHeader } from '@/components/site/page-header'
import { QuoteBanner } from '@/components/site/sections'
import { PremiumServiceCard } from '@/components/site/premium-service-card'
import { AnimatedSection, SlideIn, StaggerContainer, StaggerItem } from '@/components/site/animated-section'
import { Reveal } from '@/components/site/reveal'
import { services } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata(
  'Invisible Grills, Cloth Hangers & Safety Nets in Bangalore & Mysore',
  'Explore comprehensive safety installations by CJ Invisible Grills: 316 stainless steel invisible grills for balconies and windows, wall and ceiling cloth hangers, pigeon safety nets, cricket practice nets, child and pet safety nets across Bangalore, Chennai and Mysore.',
  '/services'
)

export default function ServicesPage() {
  const invisibleGrillServices = services.slice(0, 9)
  const clothHangerServices = services.slice(9, 12)
  const priorityNetServices = services.slice(12, 17)
  const otherServices = services.slice(17)

  return (
    <main className="page-ambient-bg">
      <PageHeader
        breadcrumbs={[{ title: 'Services' }]}
        eyebrow="A considered set of solutions"
        title="Services for open spaces, everyday living."
        description="Explore our invisible grill applications, space-saving cloth hangers, and high-durability safety netting solutions. Engineered for site-specific requirements in Bangalore, Chennai and Mysore."
      />

      <div className="page-content">
        {/* Invisible Grills */}
        <AnimatedSection className="section-no-pad">
          <SlideIn>
            <div className="section-intro" style={{ marginBottom: '28px' }}>
              <div>
                <span className="eyebrow">Invisible Grills</span>
                <h2>Invisible Grill Applications</h2>
              </div>
              <div>
                <p>
                  High-tensile 316 marine-grade stainless steel vertical cables engineered for balcony, window, terrace and architectural openings without blocking daylight or panoramic views.
                </p>
              </div>
            </div>
          </SlideIn>
          <StaggerContainer staggerDelay={0.05}>
            <div className="service-grid">
              {invisibleGrillServices.map((service, index) => (
                <StaggerItem key={service.slug}>
                  <PremiumServiceCard
                    service={service}
                    index={index}
                    label={`0${index + 1}`}
                  />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </AnimatedSection>

        {/* Cloth Hangers */}
        <div style={{ marginTop: '56px' }}>
          <AnimatedSection className="section-no-pad">
            <SlideIn>
              <div className="section-intro" style={{ marginBottom: '28px' }}>
                <div>
                  <span className="eyebrow">Drying Solutions</span>
                  <h2>Cloth Hanger Systems</h2>
                </div>
                <div>
                  <p>
                    Space-conscious wall-mounted foldable drying racks and pulley-operated ceiling clothes drying systems manufactured from rust-proof stainless steel for daily household laundry.
                  </p>
                </div>
              </div>
            </SlideIn>
            <StaggerContainer staggerDelay={0.06}>
              <div className="service-grid">
                {clothHangerServices.map((service, index) => (
                  <StaggerItem key={service.slug}>
                    <PremiumServiceCard
                      service={service}
                      index={index}
                      label={`0${index + 1}`}
                    />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </AnimatedSection>
        </div>

        {/* Nets and Safety Solutions */}
        <div style={{ marginTop: '56px' }}>
          <AnimatedSection className="section-no-pad">
            <SlideIn>
              <div className="section-intro" style={{ marginBottom: '28px' }}>
                <div>
                  <span className="eyebrow">Safety & Protection</span>
                  <h2>Nets & Safety Solutions</h2>
                </div>
                <div>
                  <p>
                    High-durability UV-stabilised netting solutions tailored for pigeon prevention, sports cricket practice, child fall protection, pet safety, and falling coconuts.
                  </p>
                </div>
              </div>
            </SlideIn>
            <StaggerContainer staggerDelay={0.06}>
              <div className="service-grid">
                {priorityNetServices.map((service, index) => (
                  <StaggerItem key={service.slug}>
                    <PremiumServiceCard
                      service={service}
                      index={index}
                      label={`0${index + 1}`}
                    />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </AnimatedSection>
        </div>

        {/* Other Available Net & Safety Solutions */}
        <div style={{ marginTop: '56px' }}>
          <AnimatedSection className="section-no-pad">
            <SlideIn>
              <div className="section-intro" style={{ marginBottom: '28px' }}>
                <div>
                  <span className="eyebrow">Specialised Netting</span>
                  <h2>Other Available Net & Safety Solutions</h2>
                </div>
                <div>
                  <p>
                    Specialised transparent copolymer mesh, Garware heavy braided safety ropes, multi-sport enclosures, removable velcro mosquito window screens, and stainless steel deterrents.
                  </p>
                </div>
              </div>
            </SlideIn>
            <StaggerContainer staggerDelay={0.05}>
              <div className="service-grid">
                {otherServices.map((service, index) => (
                  <StaggerItem key={service.slug}>
                    <PremiumServiceCard
                      service={service}
                      index={index}
                      label={`0${index + 1}`}
                    />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </AnimatedSection>
        </div>
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
