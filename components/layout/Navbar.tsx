'use client';

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * Navbar — Production-grade, RAF-throttled scroll handling.
 * - Uses useCallback for stable event handler references
 * - RAF-throttled scroll to prevent layout thrashing
 * - Memoized sub-components to minimize re-renders
 * - Touch-optimized tap targets (min 44px)
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // RAF-throttled scroll handler — prevents layout thrashing
  const updateScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 50);
    if (currentY > 300) {
      setVisible(currentY < lastScrollY.current || currentY < 100);
    } else {
      setVisible(true);
    }
    lastScrollY.current = currentY;
    ticking.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScroll);
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [updateScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen && mobileNavRef.current) {
      const links = mobileNavRef.current.querySelectorAll('.mobile-link');
      gsap.fromTo(links,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, [mobileOpen]);

  useGSAP(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: pathname === '/' ? 1.8 : 0.2,
        clearProps: 'all',
      });
    }
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(6,10,14,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
          transition: 'background 0.5s cubic-bezier(0.23,1,0.32,1), transform 0.4s cubic-bezier(0.23,1,0.32,1)',
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          willChange: 'transform',
        }}
      >
        <div className="ieg-container flex items-center justify-between" style={{ height: '72px' }}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 relative z-50" prefetch={true}>
            <div className="relative w-[54px] h-[54px]">
              <Image src="/ieg-logo.png" alt="IEG" fill sizes="54px" className="object-contain" priority />
            </div>
            <span style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: '18px',
              letterSpacing: '-0.02em',
              color: '#F5F5F0',
            }}>
              IEG
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.filter(l => l.name !== 'Home').map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--text-1)' : 'var(--text-2)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.01em',
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '14px',
                      right: '14px',
                      height: '2px',
                      background: 'linear-gradient(90deg, var(--blue), var(--gold))',
                      borderRadius: '2px',
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-orange" style={{ padding: '9px 22px', fontSize: '12px' }} prefetch={true}>
              Contact Us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* ─── MOBILE HAMBURGER ───────────────────────────────────────
               Uses a bright orange-bordered pill so it is ALWAYS visible
               on any background (transparent or dark navbar).
               CRITICAL: no `display` property in the inline style —
               that would fight Tailwind's lg:hidden / flex classes.
          ──────────────────────────────────────────────────────────── */}
          <button
            className="lg:hidden flex items-center justify-center relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              background: mobileOpen
                ? 'rgba(46,134,193,0.2)'
                : 'rgba(46,134,193,0.08)',
              border: `1.5px solid ${mobileOpen ? '#2E86C1' : 'rgba(46,134,193,0.5)'}`,
              flexDirection: 'column',
              gap: '5px',
              padding: 0,
              cursor: 'pointer',
              transition: 'background 0.25s ease, border-color 0.25s ease',
              minWidth: '44px',
              minHeight: '44px',
            }}
          >
            {/* Line 1 */}
            <span style={{
              width: '18px',
              height: '2.5px',
              borderRadius: '3px',
              background: '#2E86C1',
              transformOrigin: 'center',
              transition: 'transform 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translateY(7.5px)' : 'none',
            }} />
            {/* Line 2 */}
            <span style={{
              width: '18px',
              height: '2.5px',
              borderRadius: '3px',
              background: '#2E86C1',
              transition: 'opacity 0.3s ease',
              opacity: mobileOpen ? 0 : 1,
            }} />
            {/* Line 3 */}
            <span style={{
              width: '18px',
              height: '2.5px',
              borderRadius: '3px',
              background: '#2E86C1',
              transformOrigin: 'center',
              transition: 'transform 0.3s ease',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-7.5px)' : 'none',
            }} />
          </button>

        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden flex flex-col"
          style={{ background: 'rgba(6,10,14,0.98)', backdropFilter: 'blur(40px)' }}
        >
          <nav ref={mobileNavRef} className="flex flex-col gap-1 px-8" style={{ paddingTop: '100px' }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-link block py-3 opacity-0"
                prefetch={true}
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 5vw, 28px)',
                  color: pathname === link.href ? 'var(--blue)' : 'var(--text-2)',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none',
                  minHeight: '48px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mobile-link btn-orange w-full justify-center opacity-0"
                style={{ minHeight: '48px' }}
              >
                Contact Us →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}