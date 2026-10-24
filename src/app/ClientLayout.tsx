'use client';

import { useEffect, useState, useCallback } from 'react';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import GlobalPreloader from '@/components/shared/GlobalPreloader';
import CustomCursor from '@/components/shared/CustomCursor';
import Providers from './providers';

declare global {
  interface Window {
    __preloaderDone?: boolean;
  }
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [instantDone, setInstantDone] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    console.log(
      '%c Creative Portfolio Blueprint %c by Aitezaz Sikandar (https://aitezazdev.vercel.app) ',
      'background: #2C2E2A; color: #CDCFCC; padding: 4px 8px; border-radius: 4px 0 0 4px; font-family: monospace; font-weight: bold;',
      'background: #CDCFCC; color: #2C2E2A; padding: 4px 8px; border-radius: 0 4px 4px 0; font-family: monospace; font-weight: bold; border: 1px solid #2C2E2A;'
    );

    let seen = false;
    try {
      seen = sessionStorage.getItem('preloader-seen') === '1';
    } catch {}

    if (seen) {
      window.__preloaderDone = true;
      document.body.classList.remove('preloader-active');
      setInstantDone(true);
      setIsLoading(false);
      setShowCursor(true);
      requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent('preloaderComplete'));
      });
    }
  }, []);

  const handleExitComplete = useCallback(() => {
    setIsLoading(false);
    document.body.classList.remove('preloader-active');
    window.scrollTo(0, 0);
    setShowCursor(true);
    window.__preloaderDone = true;
    window.dispatchEvent(new CustomEvent('preloaderComplete'));
  }, []);

  return (
    <>
      <div className="film-grain pointer-events-none" aria-hidden="true" />
      {showCursor && <CustomCursor />}

      {!instantDone && isLoading && (
        <GlobalPreloader onComplete={handleExitComplete} />
      )}

      <SmoothScrollProvider>
        <Providers>{children}</Providers>
      </SmoothScrollProvider>
    </>
  );
}
