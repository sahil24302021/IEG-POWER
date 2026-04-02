'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from('.hero-badge', { y: -15, opacity: 0, duration: 0.5, ease: 'power2.out' });
      tl.from('.hero-title', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2');
      tl.from('.hero-body', { y: 15, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
      tl.from('.hero-ctas', { y: 15, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
      tl.from('.hero-stats', { y: 15, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2');
      tl.from('.hero-trust', { opacity: 0, duration: 0.8 }, '-=0.2');
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-grid"
      style={{ background: 'var(--black)', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(34,197,94,0.03) 0%, transparent 70%)' }} />

      <div className="ieg-container relative z-10 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-10 items-center">
          <div>
            <div className="hero-badge flex items-center gap-3 mb-8">
              <div style={{ width: '36px', height: '1px', background: 'var(--green)' }} />
              <span className="section-label">Patent No. 391051</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-3)', letterSpacing: '0.08em' }}>— Govt. of India</span>
            </div>

            <h1 className="hero-title display-hero" style={{ marginBottom: '24px', maxWidth: '520px' }}>
              Generate Electricity.{' '}
              <span className="text-green-glow">Without Fuel.</span>{' '}
              <span style={{ color: 'var(--text-2)' }}>Without Charging.</span>
            </h1>

            <p className="hero-body body-lg" style={{ marginBottom: '32px', maxWidth: '460px' }}>
              A patented self-sustaining energy system. Continuous electricity generation —
              no grid, no fuel, no external charging. Thirty years of R&D, made real.
            </p>

            <div className="hero-ctas flex flex-wrap gap-4">
              <Link href="/technology" className="btn-primary magnetic">
                See How It Works
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/investor" className="btn-secondary magnetic">Request Demo</Link>
            </div>
          </div>

          <div className="hero-stats hidden lg:flex flex-col gap-4 items-end">
            {[
              { label: 'Output', value: '240V', suffix: '/ 50Hz', color: 'var(--green)' },
              { label: 'Fuel Required', value: 'Zero', suffix: '', color: 'var(--amber)' },
              { label: 'R&D Duration', value: '30+', suffix: 'years', color: 'var(--text-1)' },
            ].map((item) => (
              <div key={item.label} style={{
                background: 'rgba(12, 20, 12, 0.7)', border: '1px solid var(--border)',
                backdropFilter: 'blur(16px)', borderRadius: '10px',
                padding: '18px 24px', minWidth: '200px',
              }}>
                <span className="mono-label" style={{ display: 'block', marginBottom: '6px' }}>{item.label}</span>
                <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: '22px', color: item.color, letterSpacing: '-0.01em' }}>
                  {item.value}
                </span>
                {item.suffix && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-3)', marginLeft: '6px' }}>{item.suffix}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-trust mt-16 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="trust-badge flex flex-wrap items-center gap-0" style={{ justifyContent: 'center' }}>
            <span>Patent 391051</span><span className="dot" />
            <span>30+ Years R&D</span><span className="dot" />
            <span>Zero Emissions</span><span className="dot" />
            <span style={{ color: 'var(--amber)' }}>IIM Nagpur Validated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
