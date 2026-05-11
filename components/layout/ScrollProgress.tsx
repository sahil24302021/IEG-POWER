'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrollProgress — Zero re-render scroll progress bar.
 * Uses direct DOM manipulation via ref instead of React state
 * to avoid triggering re-renders on every scroll event.
 * GPU-accelerated via transform: scaleX() instead of width changes.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!barRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      // Use scaleX for GPU-accelerated rendering — no layout thrashing
      barRef.current.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress"
      style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
      aria-hidden="true"
    />
  );
}
