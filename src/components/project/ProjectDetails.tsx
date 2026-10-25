'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Link } from 'next-transition-router';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';
import AnimatedButton from '@/components/ui/AnimatedButton';
import TechCard from '@/components/ui/TechCard';
import { gsap, SplitText, useGSAP } from '@/lib/gsap';
import { EASE } from '@/lib/motion';
import { FaArrowUp, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@/lib/projects';
import { getAdjacentProjects } from '@/lib/projects';
import { site } from '@/lib/site';

import { STACK_SECTIONS } from '@/components/sections/TechStack';

const STACK_TECH_BY_NAME = new Map(
  STACK_SECTIONS.flatMap((section) => section.technologies.map((tech) => [tech.name, tech] as const))
);

const PROJECT_TECH_ICONS: Record<string, string> = {
  Express: '/Services/express.png',
  'Socket.IO': '/Services/socketio.svg',
  'MongoDB Atlas': '/Services/mongodb.svg',
  'Upstash Redis': '/Services/redis-icon.svg',
  Gemma: '/Services/google-gemma-ai-icon.svg',
  'Azure OpenAI': '/Services/azure-badge.svg',
  'Azure AI Search': '/Services/azure-badge.svg',
  Vite: '/Services/vitejs.svg',
};

export default function ProjectDetails({ project }: { project: Project }) {
  const rootRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const techGridRef = useRef<HTMLDivElement>(null);
  const { prev, next } = getAdjacentProjects(project.slug);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      const split = SplitText.create(titleRef.current.querySelector('.pd-title-text'), {
        type: 'lines',
        mask: 'lines',
      });
      gsap.fromTo(
        split.lines,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1,
          ease: EASE.outQuart,
          stagger: 0.08,
          delay: 0.15,
        }
      );

      gsap.utils.toArray<HTMLElement>('.pd-figure-parallax').forEach((wrap) => {
        if (project.slug === 'clearing') return;
        const inner = wrap.querySelector('.pd-figure-inner');
        if (!inner) return;
        gsap.fromTo(
          inner,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: 'none',
            scrollTrigger: {
              trigger: wrap,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      const techCards = techGridRef.current?.querySelectorAll('.pd-tech-item');
      if (techCards?.length) {
        gsap.fromTo(
          techCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: techGridRef.current,
              start: 'top 90%',
              end: 'top 70%',
              scrub: 0.5,
            },
          }
        );
      }

      return () => split.revert();
    },
    { scope: rootRef, dependencies: [project.slug] }
  );

  const scrollToTop = () => {
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section ref={rootRef} className="min-h-screen bg-surface-base text-white px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors duration-200 group"
          >
            <span className="text-base sm:text-lg transform group-hover:-translate-x-1 transition-transform duration-200">
              ←
            </span>
            <span className="font-mono text-xs uppercase tracking-widest">Back to Projects</span>
          </Link>
        </div>

        <header className="mb-8 sm:mb-12 md:mb-16">
          <h1
            ref={titleRef}
            aria-label={project.title}
            className="font-display font-black uppercase tracking-tight leading-[0.98] sm:leading-[1.02] text-[clamp(2rem,6vw,5.5rem)] mb-5 sm:mb-8"
          >
            <span aria-hidden="true" className="pd-title-text block">
              {project.title}
            </span>
          </h1>

          {(project.liveUrl || project.github) && (
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              {project.liveUrl && (
                <AnimatedButton
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  topText={
                    <span className="flex items-center gap-2">
                      <span>LIVE</span>
                      <FaExternalLinkAlt className="text-[11px]" />
                    </span>
                  }
                  bottomText={
                    <span className="flex items-center gap-2">
                      <span>DEMO ↗</span>
                    </span>
                  }
                  variant="primary"
                />
              )}
              {project.github && (
                <AnimatedButton
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  topText={
                    <span className="flex items-center gap-2">
                      <FaGithub className="text-sm" />
                      <span>CODE</span>
                    </span>
                  }
                  bottomText={
                    <span className="flex items-center gap-2">
                      <FaGithub className="text-sm" />
                      <span>GITHUB ↗</span>
                    </span>
                  }
                  variant="dark"
                  className="!border !border-white/15 hover:!border-white/40"
                />
              )}
            </div>
          )}
        </header>

        {project.images && project.images.length > 0 && (
          <div className="mb-10 sm:mb-14 md:mb-20">
            <div className={`relative w-full ${project.slug === 'clearing' ? 'max-w-[360px] mx-auto aspect-[9/16] max-h-[80vh]' : 'aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9]'} rounded-xl sm:rounded-2xl overflow-hidden bg-surface-card border border-surface-border shadow-2xl`}>
              {project.slug === 'clearing' ? (
                <Image
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  priority
                  className="object-contain"
                />
              ) : (
                <div className="pd-figure-parallax absolute inset-0 overflow-hidden">
                  <div className="pd-figure-inner absolute inset-x-0 -top-[8%] h-[116%]" style={{ willChange: 'transform' }}>
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 1200px"
                      priority
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col md:grid md:grid-cols-12 gap-2 sm:gap-3 md:gap-8 mb-8 sm:mb-12 md:mb-20">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-accent md:text-warm-light">(Overview)</p>
          </div>
          <div className="md:col-span-8">
            <ScrollWordReveal
              text={project.overview}
              offset={['start 0.98', 'end 0.85']}
              className="text-base sm:text-lg md:text-2xl text-light font-sans leading-relaxed"
            />
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-12 gap-2 sm:gap-3 md:gap-8 mb-8 sm:mb-12 md:mb-20">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-accent md:text-warm-light">(Architecture)</p>
          </div>
          <div className="md:col-span-8">
            <ScrollWordReveal
              text={project.architecture}
              offset={['start 0.98', 'end 0.88']}
              className="text-sm sm:text-base md:text-lg text-light/80 font-sans leading-relaxed"
            />
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-12 gap-2 sm:gap-3 md:gap-8 mb-10 sm:mb-14 md:mb-20">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-accent md:text-warm-light">(Engineering)</p>
          </div>
          <div className="md:col-span-8">
            <ScrollWordReveal
              text={project.implementation}
              offset={['start 0.98', 'end 0.88']}
              className="text-sm sm:text-base md:text-lg text-light/80 font-sans leading-relaxed"
            />
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-24">
          <AnimatedHeading
            words={[{ t: 'KEY' }, { t: 'moves', serif: true }]}
            showLine={false}
            containerClassName="mb-6 sm:mb-10"
            className="text-[clamp(1.75rem,4.5vw,3.4rem)] text-white"
          />
          <ul className="divide-y divide-white/[0.06] border-t border-b border-white/[0.06]">
            {project.myRole.map((role, i) => (
              <li key={i} className="py-3.5 sm:py-5 flex items-start gap-3 sm:gap-5 group">
                <span className="font-mono text-xs text-accent mt-0.5 shrink-0 w-6 sm:w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ScrollWordReveal
                  text={role}
                  offset={['start 0.99', 'end 0.92']}
                  className="text-xs sm:text-base text-light/80 font-sans leading-relaxed flex-1 group-hover:text-light transition-colors duration-300"
                />
              </li>
            ))}
          </ul>
        </div>

        {project.images && project.images.length > 1 && (
          <div className={`mb-14 sm:mb-18 md:mb-28 ${project.slug === 'clearing' ? '' : 'flex flex-col gap-6 sm:gap-10 md:gap-16'}`}>
            <div className="mb-1">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-light">Gallery</p>
            </div>
            <div className={project.slug === 'clearing' ? 'grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6' : 'flex flex-col gap-6 sm:gap-10 md:gap-16'}>
              {project.images.slice(1).map((img, i) => {
              const actualIdx = i + 1;
              const wide = actualIdx % 3 === 0;
              return (
                <figure
                  key={`${project.slug}-img-${actualIdx}`}
                  className={`relative ${project.slug === 'clearing' ? 'w-full' : `${wide ? 'w-full' : 'w-full md:w-10/12'} ${actualIdx % 3 === 1 ? 'md:ml-auto' : ''}`}`}
                >
                  <div
                    className={`overflow-hidden rounded-xl bg-surface-card border border-surface-border relative ${project.slug === 'clearing' ? 'aspect-[9/16]' : `aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] ${wide ? 'max-h-[500px]' : 'max-h-[420px]'}`} w-full`}
                  >
                    {project.slug === 'clearing' ? (
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${actualIdx + 1}`}
                        fill
                        sizes="(max-width: 768px) 90vw, 360px"
                        className="object-contain"
                      />
                    ) : (
                      <div className="pd-figure-parallax absolute inset-0 overflow-hidden">
                        <div className="pd-figure-inner absolute inset-x-0 -top-[8%] h-[116%]" style={{ willChange: 'transform' }}>
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${actualIdx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 1100px"
                          className="object-cover object-top"
                        />
                        </div>
                      </div>
                    )}
                  </div>
                  <figcaption className="mt-2.5 flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-muted">
                    <span>{project.title}</span>
                    <span>
                      {String(actualIdx + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
                    </span>
                  </figcaption>
                </figure>
              );
              })}
            </div>
          </div>
        )}

        
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-warm-light mb-3 sm:mb-5">Built with</p>
          <div ref={techGridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {project.tech?.map((tech) => (
              <TechCard
                key={tech}
                tech={{
                  name: tech,
                  icon: PROJECT_TECH_ICONS[tech] ?? STACK_TECH_BY_NAME.get(tech)?.icon,
                }}
                className="pd-tech-item"
              />
            ))}
          </div>
        </div>
        
        {project.digitalBadge && (
          <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-warm-light mb-3 sm:mb-5">Digital Badge</p>
          <div className="relative w-full max-w-3xl aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={project.digitalBadge}
              alt={`${project.title} digital badge`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>
        </div>
        )}
        

        {(project.liveUrl || project.github) && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-surface-card border border-white/[0.08] mb-12 sm:mb-16 md:mb-20">
            <div>
              <p className="font-display font-bold text-lg sm:text-2xl text-white mb-1">
                Explore this project
              </p>
              <p className="font-sans text-xs sm:text-sm text-muted">
                Inspect the live deployment or browse the repository code.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              {project.liveUrl && (
                <AnimatedButton
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  topText={
                    <span className="flex items-center gap-2">
                      <span>LIVE DEMO</span>
                      <FaExternalLinkAlt className="text-[11px]" />
                    </span>
                  }
                  bottomText={
                    <span className="flex items-center gap-2">
                      <span>LAUNCH ↗</span>
                    </span>
                  }
                  variant="primary"
                />
              )}
              {project.github && (
                <AnimatedButton
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  topText={
                    <span className="flex items-center gap-2">
                      <FaGithub className="text-sm" />
                      <span>SOURCE CODE</span>
                    </span>
                  }
                  bottomText={
                    <span className="flex items-center gap-2">
                      <FaGithub className="text-sm" />
                      <span>GITHUB ↗</span>
                    </span>
                  }
                  variant="dark"
                  className="!border !border-white/15 hover:!border-white/40"
                />
              )}
            </div>
          </div>
        )}

        <nav aria-label="Project navigation" className="grid grid-cols-1 md:grid-cols-2 border-t border-white/[0.08] mb-12 sm:mb-16">
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="group py-6 sm:py-10 md:py-14 md:pr-10 border-b md:border-b-0 md:border-r border-white/[0.08] no-underline"
            >
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-muted mb-2 sm:mb-3 flex items-center gap-2">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1.5">←</span>
                Previous
              </p>
              <p className="font-display font-black uppercase tracking-tight leading-none text-[clamp(1.3rem,3.5vw,2.8rem)] text-light/60 group-hover:text-accent transition-colors duration-400">
                {prev.title}
              </p>
            </Link>
          )}
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className={`group py-6 sm:py-10 md:py-14 md:pl-10 no-underline text-right items-end ${
                prev ? '' : 'md:col-span-2'
              }`}
            >
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-muted mb-2 sm:mb-3 flex items-center justify-end gap-2">
                Next
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </p>
              <p className="font-display font-black uppercase tracking-tight leading-none text-[clamp(1.3rem,3.5vw,2.8rem)] text-light/60 group-hover:text-accent transition-colors duration-400">
                {next.title}
              </p>
            </Link>
          )}
        </nav>

        <div className="relative flex justify-center py-6 sm:py-8">
          <div className="text-center flex flex-col items-center">
            <ScrollWordReveal
              text="Have a project in mind?"
              offset={['start 0.98', 'end 0.88']}
              className="text-muted text-base sm:text-lg justify-center mb-1"
            />
            <a
              href={`mailto:${site.email}`}
              className="text-lg sm:text-xl font-semibold text-[#CDCFCC] hover:text-[#CDCFCC] transition"
            >
              {site.email}
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="absolute right-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-elevated-dark border border-border-subtler flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 group focus:outline-none"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
