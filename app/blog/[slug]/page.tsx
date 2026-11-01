import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/site/page-header'
import { QuoteBanner } from '@/components/site/sections'
import { AnimatedSection, SlideIn } from '@/components/site/animated-section'
import { Reveal } from '@/components/site/reveal'
import { articleBody, articles, findService } from '@/lib/business'
import { breadcrumbJsonLd, buildMetadata, jsonLdScript, siteUrl } from '@/lib/seo'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)
  return article
    ? buildMetadata(article.title, article.excerpt, `/blog/${slug}`)
    : buildMetadata('Journal article', 'Practical information from CJ Invisible Grills.', `/blog/${slug}`)
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)
  const body = articleBody[slug]
  if (!article || !body) notFound()

  const relatedService = findService(body.service)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: siteUrl ? `${siteUrl}${article.image}` : undefined,
    publisher: { '@type': 'Organization', name: 'CJ Invisible Grills', ...(siteUrl ? { url: siteUrl } : {}) },
    ...(siteUrl ? { mainEntityOfPage: `${siteUrl}/blog/${slug}` } : {}),
  }

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Journal', path: '/blog' },
    { name: article.title, path: `/blog/${slug}` },
  ])

  return (
    <main className="page-ambient-bg">
      <PageHeader
        breadcrumbs={[{ title: 'Journal', href: '/blog' }, { title: article.title }]}
        eyebrow={`${article.category} · Practical guide`}
        title={article.title}
        description={article.excerpt}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      {breadcrumbs && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />}

      <div className="page-content">
        <SlideIn>
          <figure className="editorial-image editorial-image-article" style={{ marginBottom: 38 }}>
            <div style={{ height: 'min(48vw, 480px)' }}>
              <Image
                src={article.image}
                alt={`Illustrative concept image accompanying ${article.title}`}
                fill
                loading="eager"
                sizes="90vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <figcaption>Illustrative image · Not a verified customer project</figcaption>
          </figure>
        </SlideIn>

        <article className="article-body">
          <p className="article-meta">A practical guide from CJ Invisible Grills</p>
          <p className="article-intro">{body.intro}</p>

          {body.sections.map((section) => (
            <AnimatedSection key={section.heading} className="article-content-block">
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.1}>
            <aside className="article-related article-related-enhanced">
              <h2>Explore a related service</h2>
              <p>
                Learn more about {relatedService?.title.toLowerCase()} and discuss what could work for your property.
              </p>
              <Link className="text-link" href={`/services/${body.service}`}>
                {relatedService?.title} <ArrowRight size={15} />
              </Link>
              <br />
              <Link className="text-link" href="/contact" style={{ marginTop: 12 }}>
                Ask a question <ArrowUpRight size={15} />
              </Link>
            </aside>
          </AnimatedSection>
        </article>
      </div>

      <Reveal>
        <QuoteBanner
          title="Use the guide as a starting point."
          copy="For a recommendation specific to your property, share details with our team."
        />
      </Reveal>
    </main>
  )
}
