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
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{
        background: scrolled ? 'rgba(6,10,6,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      }}>
        <div className="ieg-container flex items-center justify-between" style={{ height: '72px' }}>
          <Link href="/" className="flex items-center gap-3 relative z-50">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="IEG" fill sizes="32px" className="object-contain" priority />
            </div>
            <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: '16px', letterSpacing: '-0.01em', color: 'var(--text-1)' }}>
              IEG Vidaka
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className={`nav-link px-4 py-2 ${pathname === link.href ? 'active' : ''}`}>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/investor" className="btn-primary">
              Invest Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <button className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span className="block w-5 h-[1.5px] transition-all duration-300" style={{ background: 'var(--text-1)', transform: mobileOpen ? 'rotate(45deg) translateY(4.5px)' : 'none' }} />
            <span className="block w-5 h-[1.5px] transition-all duration-300" style={{ background: 'var(--text-1)', transform: mobileOpen ? 'rotate(-45deg) translateY(-4.5px)' : 'none' }} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-center" style={{ background: 'rgba(6,10,6,0.97)' }}>
          <nav ref={mobileNavRef} className="flex flex-col gap-2 px-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="mobile-link block py-3 opacity-0"
                style={{ fontFamily: 'var(--font-outfit)', fontWeight: 500, fontSize: '24px', color: pathname === link.href ? 'var(--text-1)' : 'var(--text-2)', transition: 'color 0.2s ease' }}>
                {link.name}
              </Link>
            ))}
            <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
              <Link href="/investor" onClick={() => setMobileOpen(false)} className="mobile-link btn-primary w-full justify-center opacity-0">
                Invest Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
