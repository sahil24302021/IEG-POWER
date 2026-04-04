'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > 300) {
        setVisible(currentY < lastScrollY.current || currentY < 100);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

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
        }}
      >
        <div className="ieg-container flex items-center justify-between" style={{ height: '72px' }}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 relative z-50">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="IEG" fill sizes="32px" className="object-contain" priority />
            </div>
            <span style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: '17px',
              letterSpacing: '-0.02em',
              color: 'var(--text-1)',
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
                      background: 'var(--orange)',
                      borderRadius: '2px',
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-orange" style={{ padding: '9px 22px', fontSize: '12px' }}>
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
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              background: mobileOpen
                ? 'rgba(247,148,29,0.2)'
                : 'rgba(247,148,29,0.08)',
              border: `1.5px solid ${mobileOpen ? '#F7941D' : 'rgba(247,148,29,0.5)'}`,
              flexDirection: 'column',
              gap: '5px',
              padding: 0,
              cursor: 'pointer',
              transition: 'background 0.25s ease, border-color 0.25s ease',
            }}
          >
            {/* Line 1 */}
            <span style={{
              width: '18px',
              height: '2.5px',
              borderRadius: '3px',
              background: '#F7941D',
              transformOrigin: 'center',
              transition: 'transform 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translateY(7.5px)' : 'none',
            }} />
            {/* Line 2 */}
            <span style={{
              width: '18px',
              height: '2.5px',
              borderRadius: '3px',
              background: '#F7941D',
              transition: 'opacity 0.3s ease',
              opacity: mobileOpen ? 0 : 1,
            }} />
            {/* Line 3 */}
            <span style={{
              width: '18px',
              height: '2.5px',
              borderRadius: '3px',
              background: '#F7941D',
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
          className="fixed inset-0 z-40 lg:hidden flex flex-col justify-center"
          style={{ background: 'rgba(6,10,14,0.98)', backdropFilter: 'blur(40px)' }}
        >
          <nav ref={mobileNavRef} className="flex flex-col gap-1 px-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-link block py-3 opacity-0"
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '28px',
                  color: pathname === link.href ? 'var(--orange)' : 'var(--text-2)',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mobile-link btn-orange w-full justify-center opacity-0"
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