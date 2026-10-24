import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Full Stack Developer`,
    short_name: site.name,
    description: site.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#2C2E2A',
    theme_color: '#88A649',
    icons: [
      {
        src: '/logo.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  };
}
