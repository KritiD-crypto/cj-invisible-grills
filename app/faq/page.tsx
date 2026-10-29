import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs, QuoteBanner } from '@/components/site/sections'
import { faqGroups } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata('Frequently asked questions', 'Answers about invisible grills, safety nets, installation, choosing a solution, maintenance, service coverage and estimates.', '/faq')

export default function FAQPage() {
  return <main><section className="page-top"><Breadcrumbs items={[{ title: 'FAQ' }]} /><div className="page-heading"><span className="eyebrow">A few useful answers</span><h1>Good questions deserve clear answers.</h1><p>Here are a few common starting points. Your property and requirements may need a more specific conversation.</p></div></section><div className="page-content"><div className="faq-groups"><nav className="faq-group-nav" aria-label="FAQ topics">{faqGroups.map((group, index) => <a key={group.title} href={`#faq-group-${index}`}>{group.title}</a>)}</nav><div>{faqGroups.map((group, index) => <section className="faq-group" id={`faq-group-${index}`} key={group.title}><h2>{group.title}</h2>{group.questions.map((question) => <details className="faq-item" key={question.q}><summary>{question.q}</summary><p>{question.a}</p></details>)}</section>)}<p style={{ marginTop: 30, color: 'var(--muted)', fontSize: 12 }}>Have a case-specific question? <Link className="text-link" href="/contact">Contact the team <ArrowUpRight size={14} /></Link></p></div></div></div><QuoteBanner title="We’re happy to talk through the details." copy="Share your location and what you’re looking to address." /></main>
}
