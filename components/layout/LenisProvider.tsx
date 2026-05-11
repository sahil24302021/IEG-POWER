'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * LenisProvider — Production-grade smooth scroll with:
 * - Mobile detection to reduce duration on touch devices
 * - Proper cleanup of GSAP ticker
 * - Debounced ScrollTrigger refresh on route change
 * - Respects prefers-reduced-motion
 */
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const tickerFnRef = useRef<((time: number) => void) | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.01 : isMobile ? 0.6 : 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,          // Better mobile momentum
      wheelMultiplier: 1,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Store the ticker function reference so we can remove it on cleanup
    const tickerFn = (time: number) => lenis.raf(time * 1000);
    tickerFnRef.current = tickerFn;
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      if (tickerFnRef.current) {
        gsap.ticker.remove(tickerFnRef.current);
        tickerFnRef.current = null;
      }
      lenisRef.current = null;
    };
  }, []);

  // On route change: reset scroll + refresh ScrollTrigger (debounced)
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Debounced refresh — wait for DOM to settle after route transition
    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}