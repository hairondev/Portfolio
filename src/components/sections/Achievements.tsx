'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Award, X } from 'lucide-react';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';

const achievements = [
  {
    title: 'Fundamentos de AWS: Cloud, Serverless y Operación',
    issuer: 'Commit Academy',
    date: 'September 2026',
    sortDate: '2026-09-30',
    category: 'Course',
    image: '/Certifications/AWSFundamentals.png',
    href: 'https://www.commitacademy.io/app/verify-certificate/cert_RsRpR4qm8L',
  },
  {
    title: '2026 Aspire Leaders Program',
    issuer: 'Aspire Institute',
    date: 'September 2026',
    sortDate: '2026-09-01',
    category: 'Certificate',
    image: '/Certifications/AspireInstitute.png',
    href: 'https://aspire-leaders-assets-prod.s3.amazonaws.com/certificates/certificate-4bf0e218-e796-43ca-9c72-1a19cf3133f9-78c882ca-7770-4da9-96f2-6fed21cefbac-did:rcw:87e3a809-9e61-4558-964f-515e349f0641-1790252271009.png',
  },
  {
    title: 'Agents League — Creative Apps',
    issuer: 'Global AI Community',
    date: 'July 2026',
    sortDate: '2026-07-01',
    category: 'Certificate',
    image: '/Certifications/digitalBadge.png',
    href: 'https://globalai.community/badges/fb3ade69-3517-4bc7-8fc5-fcbab8752e52',
  },
  {
    title: 'Desarrollo con IA: Programa con Agentes',
    issuer: 'BIG school',
    date: 'June 2026',
    sortDate: '2026-06-01',
    category: 'Course',
    image: '/Certifications/DesarrolloConIA.png',
  },
  {
    title: 'Curso de FastAPI',
    issuer: 'Platzi',
    date: 'March 2025',
    sortDate: '2025-03-01',
    category: 'Course',
    href: 'https://platzi.com/p/haironl072/curso/11190-fastapi/diploma/detalle/',
    image: '/Certifications/FastAPIPlatzi.png',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'February 2025',
    sortDate: '2025-02-01',
    category: 'Certificate',
    image: '/Certifications/CybersecurityFundamentals.png',
    href: 'https://www.credly.com/badges/50c3c2f8-b0d8-42f8-b234-8976cf80e11f/linked_in_profile',
  },
  {
    title: 'Scrum Foundation Professional Certification — SFPC™',
    issuer: 'CertiProf',
    date: 'November 2024 · Expires November 2027',
    sortDate: '2024-11-01',
    category: 'Certificate',
    image: '/Certifications/blob.png',
    href: 'https://www.credly.com/badges/f0864e0e-9744-4972-9ab1-9cecaecbc2d0/linked_in_profile',
  },
  {
    title: "CONISOFT'24",
    issuer: '12th International Conference on Software Engineering Research and Innovation',
    date: 'Oct 28 – Nov 1, 2024 · Universidad del Mar, Puerto Escondido, Oaxaca',
    sortDate: '2024-10-28',
    category: 'Event',
    image: '/Certifications/Conisoft24.jpg',
    detail: 'Certificate of participation',
    href: 'https://conisoft.org/2024/',
  },
  {
    title: 'FastAPI — Construcción de APIs con Python',
    issuer: 'Universidad Tecnológica de la Mixteca',
    date: 'October 2024',
    sortDate: '2024-10-01',
    category: 'Course',
    image: '/Certifications/FastAPIUTM.png',
  },
]

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxImageRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  useGSAP(() => {
    const rows = sectionRef.current?.querySelectorAll('.achievement-row');
    rows?.forEach((row, index) => {
      gsap.fromTo(row, { y: 32, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: index * 0.06,
        ease: 'power3.out',
        scrollTrigger: { trigger: row, start: 'top 92%', once: true },
      });
    });
  }, { scope: sectionRef });

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  useGSAP(() => {
    if (!selectedImage || !lightboxRef.current || !lightboxImageRef.current) return;
    gsap.fromTo(lightboxRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    gsap.fromTo(
      lightboxImageRef.current,
      { opacity: 0, scale: 0.82, y: 24, rotateX: -5 },
      { opacity: 1, scale: 1, y: 0, rotateX: 0, duration: 0.55, ease: 'power3.out', transformOrigin: 'center center' },
    );
  }, { dependencies: [selectedImage] });
  
  const closeLightbox = () => {
    window.dispatchEvent(new Event('customCursorReset'));
    if (!lightboxRef.current || !lightboxImageRef.current) {
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      setSelectedImage(null);
      return;
    }
    gsap.to(lightboxImageRef.current, { opacity: 0, scale: 0.9, y: 12, duration: 0.22, ease: 'power3.inOut' });
    gsap.to(lightboxRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.inOut',
      onComplete: () => {
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
        setSelectedImage(null);
      },
    });
  };

  return (
    <section id="achievements" ref={sectionRef} className="relative w-full overflow-hidden bg-cream font-sans text-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em]">Learning &amp; Engagement</p>
            <AnimatedHeading
              words={[{ t: 'My' }, { t: 'Journey', serif: true }]}
              className="text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-tight"
              containerClassName="mb-0"
              showLine={false}
            />
          </div>
          <p className="max-w-sm text-base leading-relaxed text-warm md:text-right">
            Courses, certificates, programs, and events in chronological order.
          </p>
        </div>

        <div className="border-t border-border">
          <div className="flex items-center justify-between py-4 font-mono text-[10px] uppercase tracking-[0.2em]">
            <span>{achievements.length} entries</span>
            <span className="hidden sm:inline">Most recent</span>
          </div>
          <ol className="divide-y divide-border">
            {achievements.map((item) => {
              const content = (
                <>
                  {item.image ? (
                    <span className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                      <Image src={item.image} alt={`Image for ${item.title}`} fill sizes="80px" className="object-contain" />
                      <button
                        type="button"
                        aria-label={`Enlarge image: ${item.title}`}
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          window.dispatchEvent(new Event('customCursorReset'));
                          setSelectedImage({ src: item.image!, title: item.title });
                        }}
                        className="absolute inset-0 z-10 cursor-zoom-in"
                      />
                    </span>
                  ) : (
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20">
                      <Award aria-hidden="true" className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="min-w-0 flex-1 py-1">
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{item.category}</span>
                      <span className="font-mono text-[10px]">{item.date}</span>
                    </div>
                    <h3 className="text-base font-medium leading-snug sm:text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-warm">{item.issuer}</p>
                    {item.detail && <p className="mt-2 text-xs">{item.detail}</p>}
                  </div>
                </>
              );

              return (
                <li key={item.title} className="achievement-row">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="group flex items-start gap-4 py-5 transition-colors hover:text-accent sm:gap-5 sm:py-6">
                      {content}
                      <ArrowUpRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gray-soft transition-colors group-hover:text-accent" />
                    </a>
                  ) : (
                    <div className="group flex items-start gap-4 py-5 sm:gap-5 sm:py-6">{content}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      {selectedImage && (
        <div
          ref={lightboxRef}
          role="presentation"
          onClick={closeLightbox}
          className="fixed inset-0 z-[10000] flex cursor-zoom-out items-center justify-center bg-black/80 p-5 backdrop-blur-sm sm:p-10"
        >
          <button
            type="button"
            aria-label="Close enlarged image"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-10 rounded-full p-2 text-white transition-colors hover:text-accent"
          >
            <X aria-hidden="true" size={28} />
          </button>
          <div ref={lightboxImageRef} className="relative h-full max-h-[60vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedImage.src} alt={selectedImage.title} fill sizes="(max-width: 768px) 100vw, 80vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
