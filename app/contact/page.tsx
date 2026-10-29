import { MessageCircle, Phone } from 'lucide-react'
import { Breadcrumbs } from '@/components/site/sections'
import { ContactForm } from '@/components/site/contact-form'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata('Contact', 'Contact CJ Invisible Grills about invisible grills, safety nets and related services in Bengaluru and Mysuru.', '/contact')

export default function ContactPage() {
  return <main><section className="page-top"><Breadcrumbs items={[{ title: 'Contact' }]} /></section><div className="page-content"><div className="contact-layout"><section className="contact-intro"><span className="eyebrow">Start with a conversation</span><h1>Let’s make a plan for your space.</h1><p>Tell us a little about the opening and your location. We’ll help you work out a useful next step.</p><div className="contact-methods"><a className="contact-method" href="tel:+919035771799"><span className="contact-method-icon"><Phone size={17} /></span><span><strong>Call the team</strong>+91 90357 71799</span></a><a className="contact-method" href="https://wa.me/919035771799?text=Hello%20CJ%20Invisible%20Grills%2C%20I%27d%20like%20to%20discuss%20a%20quote." target="_blank" rel="noreferrer"><span className="contact-method-icon"><MessageCircle size={17} /></span><span><strong>WhatsApp</strong>Open a direct conversation</span></a></div></section><section className="contact-card"><h2>Prepare an enquiry</h2><p>Complete a few details and continue in WhatsApp when you’re ready.</p><ContactForm /></section></div></div></main>
}
