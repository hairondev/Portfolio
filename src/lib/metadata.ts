import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'Eduardo Rojas - Full-Stack Developer',
    template: '%s | Eduardo Rojas',
  },
  description:
    'Full-stack developer building mobile and web products with Flutter, React, Laravel, Python, and FastAPI.',
  keywords: [
    'Eduardo Rojas',
    'Web Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'Flutter',
    'Laravel',
    'Python',
    'FastAPI',
    'React',
    'JavaScript',
    'Full-Stack Development',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Eduardo Rojas',
    },
  ],
  creator: 'Eduardo Rojas',
  metadataBase: new URL('https://hairon.vercel.app'),
  alternates: {
    canonical: './',
  },
  icons: {
    icon: { url: '/logo.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' }
  },
  openGraph: {
    title: 'Eduardo Rojas - Full-Stack Developer',
    description:
      'Portfolio of Eduardo Rojas, full-stack developer building products across mobile, web, and backend systems with Flutter, Laravel, Python, and React.',
    url: 'https://hairon.vercel.app',
    siteName: 'Eduardo Rojas Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Eduardo Rojas - Full-Stack Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduardo Rojas - Full-Stack Developer',
    description:
      'Portfolio of Eduardo Rojas, full-stack developer building products across mobile, web, and backend systems with Flutter, Laravel, Python, and React.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

