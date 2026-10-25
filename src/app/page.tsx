/**
 * @license
 * Copyright (c) 2026 Aitezaz Sikandar. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 * Project: Portfolio
 * Author: Aitezaz Sikandar (aitezazdev)
 * Website: https://aitezazdev.vercel.app
 */

import HomeBanner from '@/components/sections/HomeBanner';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import About from '@/components/sections/About';
import MarqueeStrip from '@/components/sections/MarqueeStrip';
import CurvedSectionDivider from '@/components/ui/CurvedSectionDivider';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import HomeScrollOrchestrator from '@/components/home/HomeScrollOrchestrator';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeScrollOrchestrator
        banner={<HomeBanner />}
        about={<About />}
      >
        <CurvedSectionDivider curveColor="#2C2E2A" bottomColor="#CDCFCC" />
        <section className="relative z-20 bg-cream">
          <Projects />
        </section>
        <Achievements />
        <MarqueeStrip />
        <CurvedSectionDivider curveColor="#CDCFCC" bottomColor="#2C2E2A" />
        <div className="relative z-25 bg-ink overflow-hidden">
          <Contact />
          <Footer />
        </div>
      </HomeScrollOrchestrator>
    </>
  );
}
