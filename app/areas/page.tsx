import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/site/page-header'
import { QuoteBanner } from '@/components/site/sections'
import { LocalitySearch } from '@/components/site/locality-search'
import { AnimatedSection, SlideIn } from '@/components/site/animated-section'
import { Reveal } from '@/components/site/reveal'
import { chennaiAreas, bengaluruAreas, mysuruAreas } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata(
  'Invisible Grills & Safety Nets in Bengaluru, Chennai & Mysore — Areas We Serve',
  'Check localities served by CJ Invisible Grills across Chennai, Bengaluru, and Mysore for balcony invisible grills, window grills, pigeon safety nets, cricket nets and cloth drying systems.',
  '/areas'
)

export default function AreasPage() {
  return (
    <main className="page-ambient-bg">
      <PageHeader
        breadcrumbs={[{ title: 'Areas We Serve' }]}
        eyebrow="Across Chennai, Bengaluru &amp; Mysore"
        title="Local knowledge, one space at a time."
        description="We coordinate enquiries in the localities below. The list is a guide, not a claim of a physical branch in every neighbourhood; coverage and scheduling are confirmed for each enquiry."
      />

      <div className="page-content">
        {/* 1. Chennai */}
        <AnimatedSection className="section section-tight area-card-section">
          <SlideIn>
            <section className="area-intro">
              <span className="eyebrow">Tamil Nadu · Metro</span>
              <h2>Chennai</h2>
              <p>Share your locality and the type of solution you’re considering across Chennai. We’ll confirm coverage and help clarify the next step.</p>
            </section>
          </SlideIn>

          <SlideIn delay={0.1}>
            <div style={{ padding: '24px 0 32px' }}>
              <LocalitySearch city="Chennai" localities={chennaiAreas} />
            </div>
            <Link className="text-link" href="/areas/chennai">
              Chennai service information <ArrowUpRight size={15} />
            </Link>
          </SlideIn>
        </AnimatedSection>

        {/* 2. Bengaluru */}
        <AnimatedSection className="section section-tight area-card-section" delay={0.1}>
          <SlideIn>
            <section className="area-intro" style={{ marginTop: 24 }}>
              <span className="eyebrow">Karnataka · Metro</span>
              <h2>Bengaluru</h2>
              <p>Share your locality and the type of solution you’re considering across Bengaluru. We’ll confirm coverage and help clarify the next step.</p>
            </section>
          </SlideIn>

          <SlideIn delay={0.1}>
            <div style={{ padding: '24px 0 32px' }}>
              <LocalitySearch city="Bengaluru" localities={bengaluruAreas} />
            </div>
            <Link className="text-link" href="/areas/bengaluru">
              Bengaluru service information <ArrowUpRight size={15} />
            </Link>
          </SlideIn>
        </AnimatedSection>

        {/* 3. Mysore */}
        <AnimatedSection className="section section-tight area-card-section" delay={0.15}>
          <SlideIn>
            <section className="area-intro" style={{ marginTop: 24 }}>
              <span className="eyebrow">Karnataka · Heritage city</span>
              <h2>Mysore</h2>
              <p>Enquiries across Mysore are considered based on the location, scope and practical site requirements.</p>
            </section>
          </SlideIn>

          <SlideIn delay={0.1}>
            <div style={{ padding: '24px 0 32px' }}>
              <LocalitySearch city="Mysore" localities={mysuruAreas} />
            </div>
            <Link className="text-link" href="/areas/mysore">
              Mysore service information <ArrowUpRight size={15} />
            </Link>
          </SlideIn>
        </AnimatedSection>
      </div>

      <Reveal>
        <QuoteBanner
          title="A locality not listed? Ask us."
          copy="Tell us where your property is. We’ll confirm whether we can coordinate an enquiry there."
        />
      </Reveal>
    </main>
  )
}
