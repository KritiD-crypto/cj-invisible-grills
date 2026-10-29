import { Breadcrumbs, QuoteBanner } from '@/components/site/sections'
import { ArticleBrowser } from '@/components/site/article-browser'
import { articles } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata('Guides to balcony safety and invisible grills', 'Useful guides to comparing invisible grills, considering safety nets, reducing pigeon entry and maintaining installations.', '/blog')

export default function BlogPage() {
  return <main><section className="page-top"><Breadcrumbs items={[{ title: 'Journal' }]} /><div className="page-heading"><span className="eyebrow">Notes for thoughtful decisions</span><h1>Useful ideas, without the noise.</h1><p>Practical guides to help you ask better questions about openings, netting and everyday care.</p></div></section><div className="page-content"><ArticleBrowser articles={articles} /></div><QuoteBanner title="Have a question the guide didn’t cover?" copy="Every property is different. Talk with us about your particular opening or installation." /></main>
}
