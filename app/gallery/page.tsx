import { Breadcrumbs, QuoteBanner } from '@/components/site/sections'
import { GalleryGrid } from '@/components/site/gallery-grid'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata('Gallery of invisible grill and safety net concepts', 'Browse illustrative architectural concepts for invisible grills, balcony safety nets, cloth hangers and sports netting.', '/gallery')

export default function GalleryPage() {
  return <main><section className="page-top"><Breadcrumbs items={[{ title: 'Gallery' }]} /><div className="page-heading"><span className="eyebrow">A visual starting point</span><h1>Spaces, considered from a different angle.</h1><p>These AI-assisted images are illustrative concepts, not verified completed customer installations. Replace them with real company photography when available.</p></div></section><div className="page-content"><GalleryGrid /></div><QuoteBanner title="Have a space in mind?" copy="Share a few details and we’ll help you explore a solution that fits the opening." /></main>
}
