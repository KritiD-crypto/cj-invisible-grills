import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
import { services } from '@/lib/business'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-copy"><strong>CJ</strong><span>INVISIBLE GRILLS</span></span></Link>
          <p>Open views. Thoughtful safety solutions.<br />Serving Bengaluru and Mysuru, Karnataka.</p>
          <a className="footer-phone" href="tel:+919035771799"><Phone size={15} /> +91 90357 71799</a>
        </div>
        <div className="footer-column"><h2>Explore</h2><Link href="/about">About</Link><Link href="/gallery">Gallery</Link><Link href="/blog">Journal</Link><Link href="/faq">FAQs</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-column"><h2>Services</h2>{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}<Link href="/services">All services <ArrowUpRight size={13} /></Link></div>
        <div className="footer-column"><h2>Service areas</h2><Link href="/areas/bengaluru">Bengaluru</Link><Link href="/areas/mysuru">Mysuru</Link><Link href="/areas">View localities</Link><h2 className="footer-follow-heading">Start a conversation</h2><a href="https://wa.me/919035771799?text=Hello%20CJ%20Invisible%20Grills%2C%20I%27d%20like%20to%20discuss%20a%20quote." target="_blank" rel="noreferrer">WhatsApp the team <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} CJ Invisible Grills</span><span>Thoughtful solutions for the spaces you call home.</span><Link href="/contact">Request an estimate <ArrowUpRight size={13} /></Link></div>
    </footer>
  )
}
