'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientMesh from '@/components/ui/GradientMesh';
import ParticleBg from '@/components/ui/ParticleBg';
import { MARKET, SUBSIDIARY_STRUCTURE, ROADMAP_STEPS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function InvestorsPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.inv-hero-label', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 });
      gsap.fromTo('.inv-hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out', delay: 0.2 });
      gsap.fromTo('.inv-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.35 });

      ref.current!.querySelectorAll('.reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });

      // Market stat cards stagger
      ref.current!.querySelectorAll('.market-card').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: i * 0.12, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <GradientMesh />
        <div className="grid-bg" />

        <div className="ieg-container relative z-10">
          <span className="inv-hero-label section-label" style={{ display: 'block', marginBottom: '20px', opacity: 0 }}>
            [ 05 — Investors ]
          </span>
          <h1 className="inv-hero-title display-hero" style={{ maxWidth: '700px', marginBottom: '28px', opacity: 0 }}>
            Invest In The <span className="gradient-text">Future of Energy</span>
          </h1>
          <p className="inv-hero-sub body-xl" style={{ maxWidth: '600px', opacity: 0 }}>
            Join a patented, proven technology on the cusp of global scale.
          </p>
        </div>
      </section>

      {/* MARKET OPPORTUNITY */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Market Opportunity ]</span>
          <h2 className="reveal display-md" style={{ marginBottom: '48px' }}>
            A <span className="gradient-text">{MARKET.cagr}</span> CAGR Market
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: '$34.8B', label: 'Market Size 2024', desc: MARKET.market, color: 'var(--orange)' },
              { value: '$110.7B', label: 'Projected 2029', desc: '3.2× growth in five years', color: 'var(--orange)' },
              { value: '26%', label: 'CAGR', desc: `Source: ${MARKET.source}`, color: 'var(--green)' },
            ].map((card) => (
              <div key={card.label} className="market-card glass-card hover-lift" style={{ padding: '40px 32px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '42px', color: card.color, marginBottom: '10px', letterSpacing: '-0.03em' }}>
                  {card.value}
                </div>
                <span className="mono-label">{card.label}</span>
                <p className="body-sm" style={{ marginTop: '10px' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURE */}
      <section className="section-pad relative" style={{ background: 'var(--bg-primary)' }}>
        <div className="section-glow-left" />
        <div className="ieg-container">
          <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Structure ]</span>
          <h2 className="reveal display-md" style={{ marginBottom: '48px' }}>
            Investment <span className="gradient-text">Framework</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="reveal glass-card" style={{ padding: '36px' }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '22px', color: 'var(--text-1)', marginBottom: '20px' }}>
                Corporate Structure
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  ['Parent Company', 'Public Limited'],
                  ['Subsidiaries (5)', 'Private Limited'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '14px' }}>
                    <span className="body-md">{label}</span>
                    <span className="mono-label">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center">
                  <span className="body-md" style={{ color: 'var(--text-1)' }}>IEG Parent Holding</span>
                  <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '24px', color: 'var(--orange)' }}>
                    {SUBSIDIARY_STRUCTURE.parentShare}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-md" style={{ color: 'var(--text-1)' }}>Investor Group</span>
                  <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '24px', color: 'var(--green)' }}>
                    {SUBSIDIARY_STRUCTURE.investorShare}%
                  </span>
                </div>
              </div>
            </div>

            <div className="reveal glass-card" style={{ padding: '36px' }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '22px', color: 'var(--text-1)', marginBottom: '20px' }}>
                Capital Structure
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  ['IEG Contribution', 'Proprietary Tech', ''],
                  ['Investor Funds', `${SUBSIDIARY_STRUCTURE.investorFund}%`, 'var(--orange)'],
                  ['Bank/Institutional Loan', `${SUBSIDIARY_STRUCTURE.loanPercent}%`, 'var(--text-2)'],
                ].map(([label, value, color]) => (
                  <div key={label as string} className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '14px' }}>
                    <span className="body-md">{label}</span>
                    <span style={{ fontFamily: color ? 'var(--font-syne)' : 'var(--font-mono)', fontWeight: color ? 700 : 400, color: color || 'var(--text-3)', fontSize: color ? '16px' : '11px', letterSpacing: color ? '' : '0.1em', textTransform: color ? undefined : 'uppercase' as const }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '24px', padding: '18px', background: 'rgba(247,148,29,0.04)', borderRadius: '10px', border: '1px solid var(--orange-dim)' }}>
                <span className="mono-label" style={{ color: 'var(--orange)', display: 'block', marginBottom: '6px' }}>Governance</span>
                <span className="body-sm">
                  Board: 1 IEG Director + 1 Investor Director + 1 Independent Director. 
                  Joint banking authorization by both directors.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <span className="reveal section-label" style={{ display: 'block', marginBottom: '16px' }}>[ Roadmap ]</span>
          <h2 className="reveal display-md" style={{ marginBottom: '56px' }}>
            Execution <span className="gradient-text">Timeline</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            {ROADMAP_STEPS.map((step) => (
              <div key={step.title} className="reveal roadmap-step" style={{ paddingBottom: '40px' }}>
                <div className="roadmap-dot" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--orange)', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}>
                  {step.day}
                </span>
                <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '22px', color: 'var(--text-1)', display: 'block', marginBottom: '8px' }}>
                  {step.title}
                </span>
                <p className="body-md">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/contact" className="btn-orange">
              Schedule an Investor Meeting
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
