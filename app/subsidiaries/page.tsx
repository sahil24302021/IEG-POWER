'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientMesh from '@/components/ui/GradientMesh';
import ParticleBg from '@/components/ui/ParticleBg';
import { SUBSIDIARIES } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function SubsidiariesPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.sub-hero-label', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo('.sub-hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out', delay: 0.2 });
      gsap.fromTo('.sub-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.35 });

      ref.current!.querySelectorAll('.sub-card').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: i * 0.1, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} id="main-content">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ paddingTop: 'clamp(90px, 12vw, 120px)', paddingBottom: 'clamp(50px, 8vw, 80px)' }}>
        <GradientMesh />
        <div className="grid-bg" />

        <div className="ieg-container relative z-10">
          <span className="sub-hero-label section-label" style={{ display: 'block', marginBottom: '20px', opacity: 0 }}>
            [ 06 — Subsidiaries ]
          </span>
          <h1 className="sub-hero-title" style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text-1)', maxWidth: '700px', marginBottom: '28px', opacity: 0 }}>
            Five Companies. <span className="gradient-text">One Energy Revolution.</span>
          </h1>
          <p className="sub-hero-sub body-xl" style={{ maxWidth: '600px', opacity: 0 }}>
            Each subsidiary targets a specific vertical — from electric vehicles to industrial power. 
            Unified by IEG&apos;s patented technology.
          </p>
        </div>
      </section>

      {/* SUBSIDIARIES */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <div className="grid gap-6">
            {SUBSIDIARIES.map((sub) => (
              <div key={sub.number} className="sub-card glass-card hover-lift" style={{ padding: 'clamp(28px, 5vw, 40px) clamp(24px, 5vw, 36px)' }}>
                <div className="flex items-center gap-6">
                  <span style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 800,
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    lineHeight: 1,
                    color: 'var(--gold)',
                    opacity: 0.85,
                    minWidth: '70px',
                  }}>
                    {sub.number}
                  </span>
                  <div>
                    <span className="mono-label" style={{ color: 'var(--gold)', display: 'block', marginBottom: '6px' }}>
                      {sub.segment}
                    </span>
                    <h2 style={{
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 700,
                      fontSize: 'clamp(20px, 2.5vw, 30px)',
                      color: 'var(--text-1)',
                      letterSpacing: '-0.02em',
                    }}>
                      {sub.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
