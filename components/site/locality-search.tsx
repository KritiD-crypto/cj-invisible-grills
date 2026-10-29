'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

export function LocalitySearch({ localities, city }: { localities: string[]; city: string }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => localities.filter((locality) => locality.toLowerCase().includes(query.trim().toLowerCase())), [localities, query])
  return <div><label className="area-search"><span className="sr-only">Search {city} localities</span><Search size={16} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${city} localities`} /></label>{filtered.length ? <ul className="locality-list">{filtered.map((locality) => <li key={locality}>{locality}</li>)}</ul> : <p role="status" className="empty-message">No matching localities. Contact us to check coverage for your area.</p>}</div>
}
