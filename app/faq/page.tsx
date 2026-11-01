import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/site/page-header'
import { QuoteBanner } from '@/components/site/sections'
import { FaqAccordionItem } from '@/components/site/faq-accordion'
import { AnimatedSection } from '@/components/site/animated-section'
import { Reveal } from '@/components/site/reveal'
import { faqGroups } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

import { jsonLdScript } from '@/lib/seo'

export const metadata = buildMetadata(
  'Frequently Asked Questions | Invisible Grills & Safety Nets FAQ',
  'Get answers about invisible grill installation, balcony safety nets, pigeon mesh durability, warranties, pricing, maintenance and service areas in Bengaluru, Chennai & Mysore.',
  '/faq'
)

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups.flatMap((group) =>
      group.questions.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  }

  return (
    <main className="page-ambient-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqSchema)} />
      <PageHeader
        breadcrumbs={[{ title: 'FAQ' }]}
        eyebrow="A few useful answers"
        title="Good questions deserve clear answers."
        description="Here are a few common starting points. Your property and requirements may need a more specific conversation."
      />

      <div className="page-content">
        <div className="faq-groups">
          <nav className="faq-group-nav" aria-label="FAQ topics">
            {faqGroups.map((group, index) => (
              <a key={group.title} href={`#faq-group-${index}`}>
                {group.title}
              </a>
            ))}
          </nav>

          <div>
            {faqGroups.map((group, index) => (
              <AnimatedSection
                className="faq-group faq-group-enhanced"
                id={`faq-group-${index}`}
                key={group.title}
              >
                <h2>{group.title}</h2>
                <div className="faq-items-list">
                  {group.questions.map((question, qIndex) => (
                    <FaqAccordionItem
                      key={question.q}
                      question={question.q}
                      answer={question.a}
                      defaultOpen={index === 0 && qIndex === 0}
                    />
                  ))}
                </div>
              </AnimatedSection>
            ))}

            <p style={{ marginTop: 32, color: 'var(--muted)', fontSize: 13 }}>
              Have a case-specific question?{' '}
              <Link className="text-link" href="/contact">
                Contact the team <ArrowUpRight size={14} />
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Reveal>
        <QuoteBanner
          title="We’re happy to talk through the details."
          copy="Share your location and what you’re looking to address."
        />
      </Reveal>
    </main>
  )
}
