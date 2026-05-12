'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * PageTransition — Smooth overlay during client-side route changes.
 * Covers the "blank flash" caused by components re-mounting with opacity: 0.
 * Only activates on subsequent navigations (not initial load).
 */
export default function PageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Skip transition on first load (loading screen handles that)
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    // Show transition overlay
    setIsTransitioning(true);

    // Hide after a short delay (enough for new page to mount + start animating)
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isTransitioning) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#0B1526',
        pointerEvents: 'none',
        animation: 'page-transition-fade 0.4s ease-out forwards',
      }}
    />
  );
}
