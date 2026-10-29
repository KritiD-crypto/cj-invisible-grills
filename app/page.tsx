import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ServiceCard, SectionIntro, QuoteBanner, ProcessStep, ValuePoint } from '@/components/site/sections'
import { StatisticsSection } from '@/components/site/animated-counter'
import { Reveal } from '@/components/site/reveal'
import { articles, faqGroups, services } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata('Invisible grills & safety solutions in Bengaluru and Mysuru', 'Premium invisible grills, safety nets and considered home safety solutions in Bengaluru and Mysuru, Karnataka.', '/')

export default function HomePage() {
  return <main>
    <section className="home-hero">
      <div className="hero-copy">
        <span className="eyebrow">Made for the way you live</span>
        <h1>Safety that lets the <em>view</em> breathe.</h1>
        <p className="hero-subtitle">Premium Invisible Grills &amp; Safety Solutions</p>
        <p className="hero-description">Thoughtfully considered grills, nets and everyday solutions for open spaces in Bengaluru and Mysuru.</p>
        <div className="hero-actions"><Link className="button button-primary" href="/contact">Get a Free Quote <ArrowUpRight size={16} /></Link><Link className="button button-outline" href="/services">Explore Our Services <ArrowRight size={15} /></Link></div>
        <div className="hero-note"><span />A clear conversation. A solution shaped around your space.</div>
      </div>
      <div className="hero-art">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-side-label">Designed around your view</div>
        <div className="hero-image-wrap"><Image src="/images/hero-balcony.png" alt="Illustrative modern Bengaluru apartment balcony with discreet vertical safety cables and an open view" fill loading="eager" sizes="(max-width: 760px) 90vw, 55vw" /><div className="hero-image-caption">A little more room to look out<span>Architectural concept image</span></div></div>
        <div className="hero-index"><strong>01 / 08</strong><span>Solutions</span></div>
      </div>
    </section>

    <StatisticsSection />

    <section className="section">
      <SectionIntro eyebrow="Explore the possibilities" title="A considered fit for every opening." copy="From a balcony edge to a utility space, start with the need and we’ll help you explore an option that makes sense." href="/services" action="See all services" />
      <div className="service-grid">{services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div>
    </section>

    <section className="section section-tight">
      <div className="editorial-split"><div className="editorial-copy"><span className="eyebrow">A clearer perspective</span><h2>Protection that doesn’t have to take over the view.</h2><p>Every home has its own proportions, routines and priorities. We begin by understanding yours, then talk through what may work for the opening and the people who use it.</p><Link className="text-link" href="/about">Meet CJ Invisible Grills <ArrowRight size={15} /></Link></div><figure className="editorial-image"><div><Image src="/images/grill-detail.png" alt="Illustrative close view of fine invisible grill cables against a bright balcony opening" fill sizes="(max-width: 760px) 90vw, 50vw" /></div><figcaption>Concept imagery for illustrative purposes · Not a verified customer installation</figcaption></figure></div>
    </section>

    <section className="section section-tight">
      <SectionIntro eyebrow="A closer look" title="Material, light and open space." copy="Explore illustrative concepts across a few of the solutions we discuss. These are not verified completed projects." href="/gallery" action="Explore the gallery" />
      <div className="home-gallery-preview"><Link href="/gallery"><Image src="/images/grill-detail.png" alt="Illustrative fine cable detail in a bright balcony setting" fill sizes="(max-width: 760px) 60vw, 38vw" /><span>Invisible grills <small>Concept imagery</small></span></Link><Link href="/gallery"><Image src="/images/safety-net-study.png" alt="Illustrative balcony safety net across an apartment opening" fill sizes="(max-width: 760px) 45vw, 27vw" /><span>Safety nets <small>Concept imagery</small></span></Link><Link href="/gallery"><Image src="/images/cloth-hanger-study.png" alt="Illustrative ceiling-mounted clothes hanger in a modern utility balcony" fill sizes="(max-width: 760px) 45vw, 27vw" /><span>Cloth hangers <small>Concept imagery</small></span></Link></div>
    </section>

    <Reveal><section className="section section-tight">
      <SectionIntro eyebrow="The way we work" title="Thoughtful, from first conversation to final check." copy="A straightforward process keeps expectations clear at every step." />
      <div className="process-grid"><ProcessStep number="01" title="Consultation" copy="Tell us about your space, location and what you’d like to address. We’ll discuss the right next step." /><ProcessStep number="02" title="Installation" copy="Once the scope and approach are understood, we coordinate installation around the site conditions." /><ProcessStep number="03" title="Final inspection" copy="We review the completed work with you and share care guidance relevant to the installation." /></div>
    </section></Reveal>

    <section className="section section-tight">
      <SectionIntro eyebrow="Good work starts with good questions" title="The details matter as much as the product." />
      <div className="value-grid"><ValuePoint title="Site-aware recommendations" copy="The opening, fixing surface and daily use all shape a sensible solution." /><ValuePoint title="A clear scope" copy="We discuss what is included and what still needs to be confirmed before work begins." /><ValuePoint title="Practical communication" copy="Questions about access, maintenance and building requirements deserve clear answers." /><ValuePoint title="No one-size-fits-all claims" copy="We explain options honestly and keep suitability specific to your property." /></div>
    </section>

    <Reveal><section className="section section-tight">
      <SectionIntro eyebrow="Where we coordinate" title="Local conversations. Considered site by site." copy="We work with enquiries across two Karnataka cities. Locality coverage and scheduling are confirmed for each project." href="/areas" action="View areas we serve" />
      <div className="area-feature-grid"><article className="area-feature"><span className="eyebrow">Karnataka · Metro</span><h3>Bengaluru</h3><p>From Whitefield and Electronic City to Indiranagar, Jayanagar and beyond.</p><Link className="text-link" href="/areas/bengaluru">Explore Bengaluru <ArrowRight size={15} /></Link></article><article className="area-feature"><span className="eyebrow">Karnataka · Heritage city</span><h3>Mysuru</h3><p>Enquiries across residential localities throughout Mysuru.</p><Link className="text-link" href="/areas/mysuru">Explore Mysuru <ArrowRight size={15} /></Link></article></div>
    </section></Reveal>

    <section className="section section-tight">
      <SectionIntro eyebrow="From the journal" title="Useful ideas for your next decision." href="/blog" action="Visit the journal" />
      <div className="article-grid">{articles.slice(0, 3).map((article) => <Link href={`/blog/${article.slug}`} className="article-card" key={article.slug}><div className="article-photo"><Image src={article.image} alt={`Illustrative image accompanying ${article.title}`} fill sizes="(max-width: 760px) 90vw, 30vw" /></div><div className="article-copy"><span className="eyebrow">{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p><span className="article-read">Read the guide <ArrowUpRight size={14} /></span></div></Link>)}</div>
    </section>

    <section className="section section-tight"><SectionIntro eyebrow="A few quick answers" title="Before you get in touch." href="/faq" action="Browse all FAQs" /><div className="faq-group">{faqGroups[0].questions.slice(0, 2).map((item) => <details className="faq-item" key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    <QuoteBanner />
  </main>
}
