import { PageHeader } from '@/components/site/page-header'
import { QuoteBanner } from '@/components/site/sections'
import { ArticleBrowser } from '@/components/site/article-browser'
import { Reveal } from '@/components/site/reveal'
import { articles } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata(
  'Balcony Safety & Invisible Grills Journal | Expert Guides & Tips',
  'Practical guides on invisible grills vs traditional grills, selecting balcony safety nets, pigeon deterrents, child & pet fall prevention, and maintenance tips by CJ Invisible Grills.',
  '/blog'
)

export default function BlogPage() {
  return (
    <main className="page-ambient-bg">
      <PageHeader
        breadcrumbs={[{ title: 'Journal' }]}
        eyebrow="Notes for thoughtful decisions"
        title="Useful ideas, without the noise."
        description="Practical guides to help you ask better questions about openings, netting and everyday care."
      />

      <div className="page-content">
        <ArticleBrowser articles={articles} />
      </div>

      <Reveal>
        <QuoteBanner
          title="Have a question the guide didn’t cover?"
          copy="Every property is different. Talk with us about your particular opening or installation."
        />
      </Reveal>
    </main>
  )
}
