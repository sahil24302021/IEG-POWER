'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleField from '@/components/three/ParticleField';
import { SUBSIDIARIES } from '@/lib/constants';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function SubsidiariesPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll('.reveal').forEach((el) => {
      gsap.from(el, {
        y: 50, opacity: 0, duration: 0.8, ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      });
    });
  }, []);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative" style={{ padding: '160px 0 100px', background: 'var(--bg-primary)' }}>
        <ParticleField count={50} opacity={0.25} />
        <div className="hero-glow" />
        <div className="ieg-container relative z-10">
          <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Subsidiaries</span>
          <h1 className="display-hero reveal" style={{ maxWidth: '700px', marginBottom: '24px' }}>
            Five Companies. <span className="text-orange">One Energy Revolution.</span>
          </h1>
          <p className="body-xl reveal" style={{ maxWidth: '600px' }}>
            Each subsidiary targets a specific vertical — from electric vehicles to industrial power. 
            Unified by IEG&apos;s patented technology.
          </p>
        </div>
      </section>

      {/* SUBSIDIARIES */}
      {SUBSIDIARIES.map((sub, i) => (
        <section key={sub.number} className="section-pad" style={{ background: i % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-primary)' }}>
          <div className="ieg-container">
            <div className="reveal grid lg:grid-cols-[120px_1fr] gap-12 items-start">
              {/* Large number */}
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(72px, 8vw, 120px)',
                lineHeight: 1,
                color: 'var(--orange)',
                opacity: 0.12,
              }}>
                {sub.number}
              </div>

              {/* Content */}
              <div>
                <span className="mono-label" style={{ color: 'var(--orange)', display: 'block', marginBottom: '8px' }}>
                  {sub.segment}
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 800,
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  color: 'var(--text-1)',
                  marginBottom: '16px',
                }}>
                  {sub.name}
                </h2>
                <p className="body-lg" style={{ marginBottom: '28px', maxWidth: '600px' }}>
                  {sub.desc}
                </p>

                {/* Products */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {sub.products.map((product) => (
                    <span key={product} className="stat-pill">{product}</span>
                  ))}
                </div>

                <Link href="/contact" className="btn-sm">
                  Enquire About This Vertical →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
