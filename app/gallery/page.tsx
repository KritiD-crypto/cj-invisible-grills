import { PageHeader } from '@/components/site/page-header'
import { QuoteBanner } from '@/components/site/sections'
import { GalleryGrid } from '@/components/site/gallery-grid'
import { Reveal } from '@/components/site/reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata(
  'Invisible Grills & Safety Nets Gallery | Installation Photos in Bengaluru, Chennai & Mysore',
  'Browse genuine company installations and solutions across invisible grills, balcony safety nets, transparent copolymer netting, cricket sports nets and cloth hangers in Bengaluru, Chennai and Mysore.',
  '/gallery'
)

export default function GalleryPage() {
  return (
    <main className="page-ambient-bg">
      <PageHeader
        breadcrumbs={[{ title: 'Gallery' }]}
        eyebrow="A visual starting point"
        title="Spaces, considered from a different angle."
        description="Browse our completed business installations and solutions across invisible grills, safety nets, mosquito protection, sports netting, and clothes hangers."
      />

      <div className="page-content">
        <GalleryGrid />
      </div>

      <Reveal>
        <QuoteBanner
          title="Have a space in mind?"
          copy="Share a few details and we’ll help you explore a solution that fits the opening."
        />
      </Reveal>
    </main>
  )
}
