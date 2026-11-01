import { Breadcrumbs, QuoteBanner } from '@/components/site/sections'
import { buildMetadata } from '@/lib/seo'
import { AboutHero } from '@/components/site/about-hero'
import { AboutApproach } from '@/components/site/about-approach'
import { AboutValues } from '@/components/site/about-values'
import { AboutProcess } from '@/components/site/about-process'

export const metadata = buildMetadata(
  'About CJ Invisible Grills | Balcony Safety Solutions in Bengaluru, Chennai & Mysore',
  'Learn about CJ Invisible Grills: premium 316 stainless steel invisible grills, certified safety nets, customer-first craftsmanship, and transparent service across Bengaluru, Chennai and Mysore.',
  '/about'
)

export default function AboutPage() {
  const values = [
    {
      title: 'Listen first',
      copy: 'We ask about the property and the reason behind your enquiry before talking through an option.'
    },
    {
      title: 'Explain plainly',
      copy: 'Clear scope and practical considerations help you make an informed decision.'
    },
    {
      title: 'Respect the setting',
      copy: 'We consider the home, the existing architecture and the people who use the space.'
    },
    {
      title: 'Stay thoughtful',
      copy: 'Care, access and maintenance belong in the conversation, not only the installation.'
    }
  ]

  return (
    <main className="about-page-premium">
      {/* Lead / Hero Section */}
      <section className="about-lead-premium">
        <div className="about-breadcrumbs-wrap">
          <Breadcrumbs items={[{ title: 'About' }]} />
        </div>
        <AboutHero />
      </section>

      {/* Main Architectural Narrative Content */}
      <div className="about-content-premium">
        {/* Architectural Statement Section */}
        <section className="about-statement-premium">
          <div className="about-statement-inner">
            <span className="about-statement-mark" aria-hidden="true" />
            <p>
              We believe a good installation begins with listening: understanding the opening, the people who use it, and what matters to the home.
            </p>
            <div className="about-statement-foot">
              <span className="about-statement-line" aria-hidden="true" />
              <span className="about-statement-tag">Foundational Principle</span>
            </div>
          </div>
        </section>

        {/* Section 2: Our Approach */}
        <AboutApproach />

        {/* Section 3: What Guides Our Work */}
        <AboutValues values={values} />

        {/* Section 4: A Clear Journey */}
        <AboutProcess />
      </div>

      {/* Section 5: Final CTA */}
      <section className="about-cta-section">
        <div className="about-cta-ambient-glow" aria-hidden="true" />
        <QuoteBanner
          title="Tell us what you're working with."
          copy="A quick conversation can help us understand the opening and the next useful step."
        />
      </section>
    </main>
  )
}
