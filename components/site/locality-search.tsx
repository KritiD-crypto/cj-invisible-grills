'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

export function LocalitySearch({
  localities,
  city,
}: {
  localities: string[]
  city: string
}) {
  const [query, setQuery] = useState('')
  const prefersReducedMotion = useReducedMotion()

  const filtered = useMemo(
    () =>
      localities.filter((locality) =>
        locality.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [localities, query]
  )

  return (
    <div className="locality-search-wrap">
      <label className="area-search area-search-enhanced">
        <span className="sr-only">Search {city} localities</span>
        <Search size={16} />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={`Search ${city} localities`}
        />
      </label>

      {filtered.length ? (
        <motion.ul layout className="locality-list locality-list-enhanced">
          <AnimatePresence mode="popLayout">
            {filtered.map((locality, index) => (
              <motion.li
                layout
                key={locality}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.25,
                  delay: Math.min(index * 0.015, 0.15),
                  ease: FAST_EASE,
                }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -1 }}
              >
                {locality}
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <p role="status" className="empty-message">
          No matching localities. Contact us to check coverage for your area.
        </p>
      )}
    </div>
  )
}
