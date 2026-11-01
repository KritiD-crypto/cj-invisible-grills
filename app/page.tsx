import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionIntro, QuoteBanner, ProcessStep, ValuePoint } from '@/components/site/sections'
import { StatisticsSection } from '@/components/site/animated-counter'
import { Reveal } from '@/components/site/reveal'
import { CinematicHeroV2 } from '@/components/site/cinematic-hero-v2'
import { PremiumServiceCard } from '@/components/site/premium-service-card'
import { FaqAccordionItem } from '@/components/site/faq-accordion'
import { AnimatedSection, SlideIn, StaggerContainer, StaggerItem } from '@/components/site/animated-section'
import { articles, faqGroups, services } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata(
  'Invisible Grills in Bengaluru, Chennai & Mysuru | Safety Nets & Balcony Grills',
  'CJ Invisible Grills specializes in premium 316 stainless steel invisible grills, balcony safety nets, pigeon protection, transparent safety nets and sports netting across Bengaluru, Chennai and Mysore. High-tensile strength, open views and trusted warranty.',
  '/'
)

export default function HomePage() {
  const homepageServiceSlugs = [
    'invisible-grills-for-balcony',
    'invisible-grills-for-glass-balcony',
    'invisible-grills-for-windows',
    'invisible-grills-for-utilities',
  ]
  const homepageServices = homepageServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return <main>
    <CinematicHeroV2 />

    <StatisticsSection />

    <AnimatedSection className="section section-premium sculptural-bg sculptural-curves">
      <SlideIn>
        <SectionIntro eyebrow="Explore the possibilities" title="A considered fit for every opening." copy="From a balcony edge to a utility space, start with the need and we'll help you explore an option that makes sense." href="/services" action="See all services" />
      </SlideIn>
      <StaggerContainer>
        <div className="service-grid">
          {homepageServices.map((service, index) => (
            <StaggerItem key={service.slug}>
              <PremiumServiceCard service={service} index={index} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
      <div className="service-cta-mobile">
        <Link href="/services" className="button button-primary">Explore All Services <ArrowRight size={16} /></Link>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section section-tight section-warm-accent pattern-grid sculptural-bg sculptural-blend">
      <div className="editorial-split">
        <SlideIn direction="left">
          <div className="editorial-copy"><span className="eyebrow">A clearer perspective</span><h2>Protection that doesn't have to take over the view.</h2><p>Every home has its own proportions, routines and priorities. We begin by understanding yours, then talk through what may work for the opening and the people who use it.</p><Link className="text-link" href="/about">Meet CJ Invisible Grills <ArrowRight size={15} /></Link></div>
        </SlideIn>
        <SlideIn direction="right" delay={0.2}>
          <figure className="editorial-image"><div><Image src="/services/invisible-grills/invisible-grills-01.jpg" alt="CJ Invisible Grills installation across a modern balcony" fill sizes="(max-width: 760px) 90vw, 50vw" /></div><figcaption>CJ Invisible Grills — Balcony cable installation</figcaption></figure>
        </SlideIn>
      </div>
    </AnimatedSection>

    <AnimatedSection className="section section-tight bg-ambient-lavender pattern-lines sculptural-bg contour-lines">
      <SlideIn>
        <SectionIntro eyebrow="A closer look" title="Material, light and open space." copy="Explore genuine completed installations across invisible grills, safety nets and clothes hangers." href="/gallery" action="Explore the gallery" />
      </SlideIn>
      <SlideIn delay={0.2}>
        <div className="home-gallery-preview">
          <Link href="/gallery"><Image src="/services/invisible-grills/invisible-grills-02.jpg" alt="Discreet invisible grill cable installation" fill sizes="(max-width: 760px) 60vw, 38vw" /><span>Invisible grills <small>Installation</small></span></Link>
          <Link href="/gallery"><Image src="/services/cloth-hangers/cloth-hangers-01.jpg" alt="Ceiling cloth hanger installation" fill sizes="(max-width: 760px) 45vw, 27vw" /><span>Cloth hangers <small>Installation</small></span></Link>
          <Link href="/gallery"><Image src="/services/hdpe-nylon/hdpe-nylon-01.jpg" alt="Balcony safety net installation" fill sizes="(max-width: 760px) 45vw, 27vw" /><span>Safety nets <small>Installation</small></span></Link>
        </div>
      </SlideIn>
    </AnimatedSection>

    <Reveal><AnimatedSection className="section section-tight">
      <SlideIn>
        <SectionIntro eyebrow="The way we work" title="Thoughtful, from first conversation to final check." copy="A straightforward process keeps expectations clear at every step." />
      </SlideIn>
      <StaggerContainer staggerDelay={0.15}>
        <div className="process-grid">
          <StaggerItem><ProcessStep number="01" title="Consultation" copy="Tell us about your space, location and what you'd like to address. We'll discuss the right next step." /></StaggerItem>
          <StaggerItem><ProcessStep number="02" title="Installation" copy="Once the scope and approach are understood, we coordinate installation around the site conditions." /></StaggerItem>
          <StaggerItem><ProcessStep number="03" title="Final inspection" copy="We review the completed work with you and share care guidance relevant to the installation." /></StaggerItem>
        </div>
      </StaggerContainer>
    </AnimatedSection></Reveal>

    <AnimatedSection className="section section-tight bg-ambient-pearl sculptural-bg sculptural-waves">
      <SlideIn>
        <SectionIntro eyebrow="Good work starts with good questions" title="The details matter as much as the product." />
      </SlideIn>
      <StaggerContainer>
        <div className="value-grid">
          <StaggerItem><ValuePoint title="Site-aware recommendations" copy="The opening, fixing surface and daily use all shape a sensible solution." /></StaggerItem>
          <StaggerItem><ValuePoint title="A clear scope" copy="We discuss what is included and what still needs to be confirmed before work begins." /></StaggerItem>
          <StaggerItem><ValuePoint title="Practical communication" copy="Questions about access, maintenance and building requirements deserve clear answers." /></StaggerItem>
          <StaggerItem><ValuePoint title="No one-size-fits-all claims" copy="We explain options honestly and keep suitability specific to your property." /></StaggerItem>
        </div>
      </StaggerContainer>
    </AnimatedSection>

    <Reveal><AnimatedSection className="section section-tight">
      <SlideIn>
        <SectionIntro eyebrow="Where we coordinate" title="Local conversations. Considered site by site." copy="We work with enquiries across two Karnataka cities. Locality coverage and scheduling are confirmed for each project." href="/areas" action="View areas we serve" />
      </SlideIn>
      <StaggerContainer>
        <div className="area-feature-grid">
          <StaggerItem>
            <article className="area-feature"><span className="eyebrow">Karnataka · Metro</span><h3>Bengaluru</h3><p>From Whitefield and Electronic City to Indiranagar, Jayanagar and beyond.</p><Link className="text-link" href="/areas/bengaluru">Explore Bengaluru <ArrowRight size={15} /></Link></article>
          </StaggerItem>
          <StaggerItem>
            <article className="area-feature"><span className="eyebrow">Karnataka · Heritage city</span><h3>Mysuru</h3><p>Enquiries across residential localities throughout Mysuru.</p><Link className="text-link" href="/areas/mysuru">Explore Mysuru <ArrowRight size={15} /></Link></article>
          </StaggerItem>
        </div>
      </StaggerContainer>
    </AnimatedSection></Reveal>

    <AnimatedSection className="section section-tight bg-ambient-warm sculptural-bg sculptural-blend">
      <SlideIn>
        <SectionIntro eyebrow="From the journal" title="Useful ideas for your next decision." href="/blog" action="Visit the journal" />
      </SlideIn>
      <StaggerContainer>
        <div className="article-grid">{articles.slice(0, 3).map((article) => <StaggerItem key={article.slug}><Link href={`/blog/${article.slug}`} className="article-card"><div className="article-photo"><Image src={article.image} alt={`Illustrative image accompanying ${article.title}`} fill sizes="(max-width: 760px) 90vw, 30vw" /></div><div className="article-copy"><span className="eyebrow">{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p><span className="article-read">Read the guide <ArrowUpRight size={14} /></span></div></Link></StaggerItem>)}</div>
      </StaggerContainer>
    </AnimatedSection>

    <AnimatedSection className="section section-tight section-lavender-tint">
      <SlideIn>
        <SectionIntro eyebrow="A few quick answers" title="Before you get in touch." href="/faq" action="Browse all FAQs" />
      </SlideIn>
      <SlideIn delay={0.2}>
        <div className="faq-group">
          {faqGroups[0].questions.slice(0, 2).map((item, index) => (
            <FaqAccordionItem
              key={item.q}
              question={item.q}
              answer={item.a}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </SlideIn>
    </AnimatedSection>
    <QuoteBanner />
  </main>
}
