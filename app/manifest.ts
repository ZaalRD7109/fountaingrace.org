import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fountain of Grace International',
    short_name: 'FGI',
    description: 'A Christian church and registered NPO in Pretoria North, South Africa.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#008080',
    icons: [
      {
        src: '/logo-square.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-square.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
