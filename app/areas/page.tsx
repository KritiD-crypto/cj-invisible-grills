import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs, QuoteBanner } from '@/components/site/sections'
import { LocalitySearch } from '@/components/site/locality-search'
import { bengaluruAreas, mysuruAreas } from '@/lib/business'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata('Areas we serve in Bengaluru and Mysuru', 'Check the Bengaluru and Mysuru localities where CJ Invisible Grills coordinates service enquiries. Coverage and scheduling are confirmed case by case.', '/areas')

export default function AreasPage() {
  return <main><section className="page-top"><Breadcrumbs items={[{ title: 'Areas We Serve' }]} /><div className="page-heading"><span className="eyebrow">Across Bengaluru &amp; Mysuru</span><h1>Local knowledge, one space at a time.</h1><p>We coordinate enquiries in the localities below. The list is a guide, not a claim of a physical branch in every neighbourhood; coverage and scheduling are confirmed for each enquiry.</p></div></section>
    <div className="page-content"><section className="area-intro"><h2>Bengaluru</h2><p>Share your locality and the type of solution you’re considering. We’ll confirm coverage and help clarify the next step.</p></section><div style={{ padding: '24px 0 41px' }}><LocalitySearch city="Bengaluru" localities={bengaluruAreas} /></div><Link className="text-link" href="/areas/bengaluru">Bengaluru service information <ArrowUpRight size={15} /></Link>
      <section className="area-intro" style={{ marginTop: 55 }}><h2>Mysuru</h2><p>Enquiries are considered based on the location, scope and practical site requirements.</p></section><div style={{ padding: '24px 0 41px' }}><LocalitySearch city="Mysuru" localities={mysuruAreas} /></div><Link className="text-link" href="/areas/mysuru">Mysuru service information <ArrowUpRight size={15} /></Link></div>
    <QuoteBanner title="A locality not listed? Ask us." copy="Tell us where your property is. We’ll confirm whether we can coordinate an enquiry there." />
  </main>
}
