export const site = {
  name: 'Eduardo Rojas',
  firstName: 'Eduardo',
  lastName: 'Rojas',
  handle: 'hairondev',
  brand: 'hairon.dev',
  email: 'rojas.edu53@gmail.com',
  location: 'Mexico',
  timeZone: 'America/Mexico_City',
  timeZoneLabel: 'CT',
  url: 'https://hairon.vercel.app',
  tagline: 'Full-stack developer building useful products across mobile, web, and backend systems.',
  roles: [
    'Softawre Engineer',
    'Full Stack Developer',
    'Flutter & Mobile Developer',
    'Python & FastAPI Developer',
    'React & Laravel Engineer',
  ],
} as const;

export type SocialKey = 'github' | 'linkedin' | 'instagram';

export const socials: Record<SocialKey, { label: string; href: string }> = {
  github: { label: 'GitHub', href: 'https://github.com/hairondev' },
  linkedin: { label: 'LinkedIn', href: 'https://linkedin.com/in/eduardorojas-r' },
  instagram: { label: 'Instagram', href: 'https://instagram.com/eduardo_rojas40' },
};

export const socialList: Array<{ label: string; href: string }> = [
  socials.linkedin,
  socials.instagram,
  socials.github,
];

export const navLinks = [
  { name: 'Home', href: '/#top', menuOnly: true },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
] as const;
