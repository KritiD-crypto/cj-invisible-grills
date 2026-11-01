'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import type { articles } from '@/lib/business'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

type Article = (typeof articles)[number]

export function ArticleBrowser({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All topics')
  const prefersReducedMotion = useReducedMotion()

  const categories = ['All topics', ...Array.from(new Set(articles.map((article) => article.category)))]

  const filtered = useMemo(
    () =>
      articles.filter(
        (article) =>
          (category === 'All topics' || article.category === category) &&
          `${article.title} ${article.excerpt}`.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [articles, category, query]
  )

  return (
    <>
      <div className="article-controls">
        <label className="area-search">
          <span className="sr-only">Search journal guides</span>
          <Search size={16} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the journal"
          />
        </label>
        <label className="topic-select">
          <span className="sr-only">Filter by topic</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length ? (
        <motion.div layout className="article-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((article, index) => (
              <motion.div
                layout
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.05, 0.2),
                  ease: FAST_EASE,
                }}
                whileHover={prefersReducedMotion ? {} : { y: -6 }}
                className="article-card-wrap"
              >
                <Link href={`/blog/${article.slug}`} className="article-card article-card-enhanced">
                  <div className="article-photo">
                    <Image
                      src={article.image}
                      alt={`Illustrative image for ${article.title}`}
                      fill
                      sizes="(max-width: 760px) 90vw, 30vw"
                      className="article-img"
                    />
                    <div className="article-photo-glow" aria-hidden="true" />
                  </div>
                  <div className="article-copy">
                    <span className="eyebrow">{article.category}</span>
                    <h2>{article.title}</h2>
                    <p>{article.excerpt}</p>
                    <span className="article-read">
                      {article.read}{' '}
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 2, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight size={14} />
                      </motion.span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <p className="empty-message" role="status">
          No guides match that search. Try a different topic or keyword.
        </p>
      )}
    </>
  )
}
