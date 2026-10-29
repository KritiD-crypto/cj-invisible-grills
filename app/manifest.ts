import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return { name: 'CJ Invisible Grills', short_name: 'CJ Grills', description: 'Invisible grills and safety solutions in Bengaluru and Mysuru.', start_url: '/', display: 'standalone', background_color: '#FAF9FF', theme_color: '#FAF9FF', icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }] }
}
