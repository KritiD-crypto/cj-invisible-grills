import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { services } from '@/lib/business'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand" aria-label="CJ Invisible Grills home">
            <Image
              src="/images/cj-logo-transparent.png"
              alt="CJ Invisible Grills"
              width={200}
              height={66}
              className="brand-logo-img footer-logo-img"
            />
          </Link>
          <p>Open views. Thoughtful safety solutions.<br />Serving Chennai, Bengaluru and Mysore, Karnataka.</p>
          <div className="footer-direct-contacts">
            <a className="footer-phone" href="tel:+919886577746" aria-label="Call CJ Invisible Grills at +91 9886577746">
              <Phone size={15} /> +91 9886577746
            </a>
            <a className="footer-email" href="mailto:cjgrillsind@gmail.com" aria-label="Email CJ Invisible Grills at cjgrillsind@gmail.com">
              <Mail size={15} /> cjgrillsind@gmail.com
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Journal</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>
          ))}
          <Link href="/services">All services <ArrowUpRight size={13} /></Link>
        </div>
        <div className="footer-column">
          <h2>Service areas</h2>
          <Link href="/areas/chennai">Chennai</Link>
          <Link href="/areas/bengaluru">Bengaluru</Link>
          <Link href="/areas/mysore">Mysore</Link>
          <Link href="/areas">View localities</Link>
          <h2 className="footer-follow-heading">Start a conversation</h2>
          <a href="https://wa.me/919886577746?text=Hello%20CJ%20Invisible%20Grills%2C%20I%27d%20like%20to%20discuss%20a%20quote." target="_blank" rel="noreferrer" aria-label="Message CJ Invisible Grills on WhatsApp">
            WhatsApp the team <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} CJ Invisible Grills</span>
        <span>Thoughtful solutions for the spaces you call home.</span>
        <Link href="/contact">Request an estimate <ArrowUpRight size={13} /></Link>
      </div>
    </footer>
  )
}
