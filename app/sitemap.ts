import type { MetadataRoute } from 'next'
import { articles, serviceRoutes } from '@/lib/business'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return []
  const routes = ['/', '/about', '/services', '/areas', '/areas/bengaluru', '/areas/mysuru', '/gallery', '/blog', '/faq', '/contact', ...serviceRoutes.map((slug) => `/services/${slug}`), ...articles.map((article) => `/blog/${article.slug}`)]
  return routes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: 'monthly', priority: route === '/' ? 1 : route.split('/').length > 2 ? 0.6 : 0.8 }))
}
