'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import type { articles } from '@/lib/business'

type Article = (typeof articles)[number]
export function ArticleBrowser({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All topics')
  const categories = ['All topics', ...Array.from(new Set(articles.map((article) => article.category)))]
  const filtered = useMemo(() => articles.filter((article) => (category === 'All topics' || article.category === category) && `${article.title} ${article.excerpt}`.toLowerCase().includes(query.trim().toLowerCase())), [articles, category, query])
  return <>
    <div className="article-controls"><label className="area-search"><span className="sr-only">Search journal guides</span><Search size={16} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the journal" /></label><label className="topic-select"><span className="sr-only">Filter by topic</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label></div>
    {filtered.length ? <div className="article-grid">{filtered.map((article) => <Link href={`/blog/${article.slug}`} className="article-card" key={article.slug}><div className="article-photo"><Image src={article.image} alt={`Illustrative image for ${article.title}`} fill sizes="(max-width: 760px) 90vw, 30vw" /></div><div className="article-copy"><span className="eyebrow">{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p><span className="article-read">{article.read} <ArrowUpRight size={14} /></span></div></Link>)}</div> : <p className="empty-message" role="status">No guides match that search. Try a different topic or keyword.</p>}
  </>
}
