import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CJ Invisible Grills',
    short_name: 'CJ Grills',
    description: 'Invisible grills and safety solutions in Bengaluru, Chennai, and Mysuru.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9FF',
    theme_color: '#FAF9FF',
    icons: [
      { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
