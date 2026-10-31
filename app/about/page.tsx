import { Breadcrumbs, QuoteBanner } from '@/components/site/sections'
import { buildMetadata } from '@/lib/seo'
import { AboutHero } from '@/components/site/about-hero'
import { AboutApproach } from '@/components/site/about-approach'
import { AboutValues } from '@/components/site/about-values'
import { AboutProcess } from '@/components/site/about-process'

export const metadata = buildMetadata('About', 'Learn how CJ Invisible Grills approaches invisible grills, safety nets and customer-focused installation conversations across Bengaluru and Mysuru.', '/about')

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
      <section className="about-lead-premium">
        <Breadcrumbs items={[{ title: 'About' }]} />
        <AboutHero />
      </section>

      <div className="about-content-premium">
        <section className="about-statement-premium">
          <p>We believe a good installation begins with listening: understanding the opening, the people who use it, and what matters to the home.</p>
        </section>

        <AboutApproach />

        <AboutValues values={values} />

        <AboutProcess />
      </div>

      <QuoteBanner title="Tell us what you're working with." copy="A quick conversation can help us understand the opening and the next useful step." />
    </main>
  )
}
