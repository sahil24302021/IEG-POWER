'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleField from '@/components/three/ParticleField';
import { MARKET, SUBSIDIARY_STRUCTURE, ROADMAP_STEPS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function InvestorsPage() {
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
        <ParticleField count={70} opacity={0.3} color="#F7941D" />
        <div className="hero-glow" />
        <div className="ieg-container relative z-10">
          <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>For Investors</span>
          <h1 className="display-hero reveal" style={{ maxWidth: '700px', marginBottom: '24px' }}>
            Invest In The <span className="text-orange">Future of Energy</span>
          </h1>
          <p className="body-xl reveal" style={{ maxWidth: '600px' }}>
            Join a patented, proven technology on the cusp of global scale.
          </p>
        </div>
      </section>

      {/* MARKET OPPORTUNITY */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Market Opportunity</span>
          <h2 className="display-md reveal" style={{ marginBottom: '40px' }}>
            A <span className="text-orange">{MARKET.cagr}</span> CAGR Market
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="reveal glass-card" style={{ padding: '36px 28px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '36px', color: 'var(--orange)', marginBottom: '8px' }}>
                $34.8B
              </div>
              <span className="mono-label">Market Size 2024</span>
              <p className="body-sm" style={{ marginTop: '8px' }}>{MARKET.market}</p>
            </div>
            <div className="reveal glass-card" style={{ padding: '36px 28px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '36px', color: 'var(--orange)', marginBottom: '8px' }}>
                $110.7B
              </div>
              <span className="mono-label">Projected 2029</span>
              <p className="body-sm" style={{ marginTop: '8px' }}>3.2× growth in five years</p>
            </div>
            <div className="reveal glass-card" style={{ padding: '36px 28px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '36px', color: 'var(--green)', marginBottom: '8px' }}>
                26%
              </div>
              <span className="mono-label">CAGR</span>
              <p className="body-sm" style={{ marginTop: '8px' }}>Source: {MARKET.source}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPOSED STRUCTURE */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="ieg-container">
          <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Structure</span>
          <h2 className="display-md reveal" style={{ marginBottom: '40px' }}>
            Investment <span className="text-orange">Framework</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="reveal glass-card" style={{ padding: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '20px', color: 'var(--text-1)', marginBottom: '16px' }}>
                Corporate Structure
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  <span className="body-md">Parent Company</span>
                  <span className="mono-label">Public Limited</span>
                </div>
                <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  <span className="body-md">Subsidiaries (5)</span>
                  <span className="mono-label">Private Limited</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-md" style={{ color: 'var(--text-1)' }}>IEG Parent Holding</span>
                  <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '20px', color: 'var(--orange)' }}>
                    {SUBSIDIARY_STRUCTURE.parentShare}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="body-md" style={{ color: 'var(--text-1)' }}>Investor Group</span>
                  <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '20px', color: 'var(--green)' }}>
                    {SUBSIDIARY_STRUCTURE.investorShare}%
                  </span>
                </div>
              </div>
            </div>

            <div className="reveal glass-card" style={{ padding: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '20px', color: 'var(--text-1)', marginBottom: '16px' }}>
                Capital Structure
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  <span className="body-md">IEG Contribution</span>
                  <span className="mono-label">Proprietary Tech</span>
                </div>
                <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  <span className="body-md">Investor Funds</span>
                  <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, color: 'var(--orange)' }}>{SUBSIDIARY_STRUCTURE.investorFund}%</span>
                </div>
                <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                  <span className="body-md">Bank/Institutional Loan</span>
                  <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, color: 'var(--text-2)' }}>{SUBSIDIARY_STRUCTURE.loanPercent}%</span>
                </div>
              </div>
              <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(247,148,29,0.05)', borderRadius: '8px', border: '1px solid var(--orange-dim)' }}>
                <span className="mono-label" style={{ color: 'var(--orange)', display: 'block', marginBottom: '4px' }}>Governance</span>
                <span className="body-sm">
                  Board: 1 IEG Director + 1 Investor Director + 1 Independent Director. 
                  Joint banking authorization by both directors.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTION ROADMAP */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="ieg-container">
          <span className="section-label reveal" style={{ display: 'block', marginBottom: '16px' }}>Roadmap</span>
          <h2 className="display-md reveal" style={{ marginBottom: '48px' }}>
            Execution <span className="text-orange">Timeline</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            {ROADMAP_STEPS.map((step, i) => (
              <div key={step.title} className="reveal roadmap-step" style={{ paddingBottom: '36px' }}>
                <div className="roadmap-dot" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--orange)', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
                  {step.day}
                </span>
                <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '20px', color: 'var(--text-1)', display: 'block', marginBottom: '6px' }}>
                  {step.title}
                </span>
                <p className="body-md">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 reveal">
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
