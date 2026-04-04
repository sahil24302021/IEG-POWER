'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SUBSIDIARIES } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function SubsidiariesPreview() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current!.querySelectorAll('.subs-heading'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
      ref.current!.querySelectorAll('.subs-card').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-pad relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-glow-left" />
      <div className="ieg-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="subs-heading section-label" style={{ display: 'block', marginBottom: '12px' }}>
              [ Subsidiaries ]
            </span>
            <h2 className="subs-heading display-md">
              5 Companies. <span className="gradient-text">One Vision.</span>
            </h2>
          </div>
          <Link href="/subsidiaries" className="subs-heading btn-sm">
            View All Verticals
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* Unified grid for all 5 cards — 1 col mobile, 2 col md, 3 col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* First 3 cards — full card layout */}
          {SUBSIDIARIES.slice(0, 3).map((sub) => (
            <div key={sub.number} className="subs-card glass-card hover-lift" style={{ padding: '36px 28px' }}>
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: '44px',
                lineHeight: 1,
                color: 'var(--orange)',
                opacity: 0.85,
                marginBottom: '16px',
              }}>
                {sub.number}
              </div>
              <span className="mono-label" style={{ color: 'var(--orange)', display: 'block', marginBottom: '8px' }}>
                {sub.segment}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '20px',
                color: 'var(--text-1)',
                marginBottom: '10px',
              }}>
                {sub.name}
              </h3>
              <p className="body-sm" style={{ marginBottom: '18px' }}>{sub.desc}</p>
              <div className="flex flex-wrap gap-2">
                {sub.products.slice(0, 2).map((p) => (
                  <span key={p} className="stat-pill" style={{ fontSize: '10px', padding: '4px 10px' }}>{p}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Last 2 cards — same grid, same width, compact inline layout */}
          {SUBSIDIARIES.slice(3).map((sub) => (
            <div key={sub.number} className="subs-card glass-card hover-lift" style={{ padding: '32px 28px' }}>
              <div style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: '44px',
                lineHeight: 1,
                color: 'var(--orange)',
                opacity: 0.85,
                marginBottom: '12px',
              }}>
                {sub.number}
              </div>
              <span className="mono-label" style={{ color: 'var(--orange)', display: 'block', marginBottom: '6px' }}>
                {sub.segment}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '20px',
                color: 'var(--text-1)',
                marginBottom: '10px',
              }}>
                {sub.name}
              </h3>
              <p className="body-sm">{sub.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}