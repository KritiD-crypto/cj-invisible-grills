import { Mail, MessageCircle, Phone } from 'lucide-react'
import { PageHeader } from '@/components/site/page-header'
import { ContactForm } from '@/components/site/contact-form'
import { AnimatedSection, SlideIn } from '@/components/site/animated-section'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata(
  'Contact CJ Invisible Grills | Get a Free Quote in Bengaluru, Chennai & Mysore',
  'Connect with CJ Invisible Grills for a free quote on invisible grills, balcony safety nets, pigeon protection, transparent nets and cloth hangers across Bengaluru, Chennai and Mysore. Call +91 9886577746 or WhatsApp us today.',
  '/contact'
)

export default function ContactPage() {
  return (
    <main className="page-ambient-bg">
      <PageHeader
        breadcrumbs={[{ title: 'Contact' }]}
        eyebrow="Start with a conversation"
        title="Let’s make a plan for your space."
        description="Tell us a little about the opening and your location. We’ll help you work out a useful next step."
      />

      <div className="page-content">
        <div className="contact-layout">
          <AnimatedSection className="contact-intro-section">
            <SlideIn>
              <div className="contact-intro">
                <span className="eyebrow">Direct Contact</span>
                <h2>Immediate conversations.</h2>
                <p>
                  Prefer to speak directly with an advisor? Choose a phone call or quick WhatsApp chat.
                </p>

                <div className="contact-methods">
                  <a className="contact-method contact-method-interactive" href="tel:+919886577746">
                    <span className="contact-method-icon">
                      <Phone size={17} />
                    </span>
                    <span>
                      <strong>Call the team</strong>
                      +91 9886577746
                    </span>
                  </a>

                  <a
                    className="contact-method contact-method-interactive"
                    href="https://wa.me/919886577746?text=Hello%20CJ%20Invisible%20Grills%2C%20I%27d%20like%20to%20discuss%20a%20quote."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact-method-icon">
                      <MessageCircle size={17} />
                    </span>
                    <span>
                      <strong>WhatsApp</strong>
                      Open a direct conversation
                    </span>
                  </a>

                  <a
                    className="contact-method contact-method-interactive"
                    href="mailto:cjgrillsind@gmail.com"
                  >
                    <span className="contact-method-icon">
                      <Mail size={17} />
                    </span>
                    <span>
                      <strong>Email us</strong>
                      cjgrillsind@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </SlideIn>
          </AnimatedSection>

          <SlideIn delay={0.15}>
            <section className="contact-card contact-card-enhanced">
              <h2>Prepare an enquiry</h2>
              <p>Complete a few details and continue in WhatsApp when you’re ready.</p>
              <ContactForm />
            </section>
          </SlideIn>
        </div>
      </div>
    </main>
  )
}
