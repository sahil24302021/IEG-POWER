'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { gsap } from 'gsap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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

  // Header entrance animation
  useEffect(() => {
    if (headerRef.current) {
      // Ensure visible immediately, then animate
      gsap.set(headerRef.current, { opacity: 1, y: 0 });
      gsap.fromTo(headerRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, []);

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50" style={{
        background: scrolled ? 'rgba(8,12,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(247,148,29,0.1)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      }}>
        <div className="ieg-container flex items-center justify-between" style={{ height: '68px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 relative z-50 group">
            <div className="relative w-8 h-8" style={{ transition: 'transform 0.3s ease' }}>
              <Image src="/logo.png" alt="IEG" fill sizes="32px" className="object-contain" priority />
            </div>
            <span style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: '16px',
              letterSpacing: '-0.02em',
              color: 'var(--text-1)',
            }}>
              IEG
            </span>
          </Link>

          {/* Desktop Nav — ALL page links */}
          <nav className="hidden lg:flex items-center gap-0.5">
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
                    color: isActive ? 'var(--orange)' : 'var(--text-2)',
                    padding: '8px 14px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.01em',
                  }}
                  className="hover:text-white"
                  onMouseEnter={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = '#fff';
                    (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = 'var(--text-2)';
                    (e.target as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {link.name}
                  {/* Active indicator line */}
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

          {/* CTA — "Contact Us" */}
          <div className="hidden lg:block">
            <Link href="/contact" style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 600,
              fontSize: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 20px',
              borderRadius: '50px',
              background: 'var(--orange)',
              color: '#080C10',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'scale(1.03)';
              (e.target as HTMLElement).style.boxShadow = '0 0 24px rgba(247,148,29,0.3)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'scale(1)';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}>
              Contact Us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-[1.5px] transition-all duration-300" style={{
              background: 'var(--text-1)',
              transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none',
            }} />
            <span className="block w-5 h-[1.5px] transition-all duration-300" style={{
              background: 'var(--text-1)',
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span className="block w-5 h-[1.5px] transition-all duration-300" style={{
              background: 'var(--text-1)',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-center" style={{
          background: 'rgba(8,12,16,0.97)',
          backdropFilter: 'blur(40px)',
        }}>
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
                  fontSize: '26px',
                  color: pathname === link.href ? 'var(--orange)' : 'var(--text-2)',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none',
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
