import type { MetadataRoute } from 'next'
import { articles, serviceRoutes } from '@/lib/business'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (siteUrl || 'https://cjinvisiblegrills.in').replace(/\/$/, '')

  const coreRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/areas', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/areas/bengaluru', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/areas/chennai', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/areas/mysore', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/areas/mysuru', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/gallery', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.75, changeFrequency: 'monthly' as const },
  ]

  const servicePages = serviceRoutes.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages = articles.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...coreRoutes.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: new Date(),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...servicePages,
    ...blogPages,
  ]
}
