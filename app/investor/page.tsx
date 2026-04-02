'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MARKET, SUBSIDIARY_STRUCTURE, ROADMAP_STEPS } from '@/lib/constants';

export default function InvestorPage() {
  return (
    <main>
      {/* Hero — data-forward, different from other pages */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <p className="label mb-4">Investor Relations</p>
          <h1 className="heading-xl max-w-2xl mb-6">
            A ₹34.8B opportunity{' '}
            <span style={{ color: 'var(--text-muted)' }}>in clean energy.</span>
          </h1>
          <p className="body-lg max-w-xl mb-8">
            Patent-protected, validated, and production-ready technology addressing 
            India&apos;s fastest-growing energy market.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Schedule a Meeting <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-secondary">Download Investor Brief</Link>
          </div>
        </div>
      </section>

      {/* Market data */}
      <section className="py-20" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Market Opportunity</p>
          <h2 className="heading-lg mb-10">India EV Market</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { value: MARKET.size2024, label: 'Market Size (2024)' },
              { value: `${MARKET.cagr} CAGR`, label: 'Growth Rate to 2029' },
              { value: MARKET.size2029, label: 'Projected (2029)' },
            ].map((m) => (
              <div key={m.label} className="card p-6">
                <p className="text-2xl font-semibold text-white mb-1">{m.value}</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{m.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Source: {MARKET.source}</p>
        </div>
      </section>

      {/* Investment highlights */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Why Invest</p>
          <h2 className="heading-lg mb-10">Investment Highlights</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: '20-Year Patent', desc: 'Exclusive IP protection. Two granted patents covering core technology and regeneration protocol.' },
              { title: 'Working Prototypes', desc: '600W to 5KVA systems built, tested, and running. Multiple product categories validated.' },
              { title: '₹34.8B Market', desc: 'India EV market growing 26% CAGR. IEG addresses the fundamental charging infrastructure gap.' },
            ].map((h) => (
              <div key={h.title} className="card p-6">
                <h3 className="text-base font-semibold text-white mb-2">{h.title}</h3>
                <p className="body-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiary structure */}
      <section className="py-20" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Business Model</p>
          <h2 className="heading-lg mb-3">Subsidiary Structure</h2>
          <p className="body mb-10 max-w-lg">
            Parent company ({SUBSIDIARY_STRUCTURE.parentShare}%) retains majority. 
            Strategic investor: {SUBSIDIARY_STRUCTURE.investorShare}%.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUBSIDIARY_STRUCTURE.subsidiaries.map((sub) => (
              <div key={sub.name} className="card p-5">
                <p className="text-sm font-medium text-white">{sub.name}</p>
                <p className="text-xs mb-3" style={{ color: 'var(--accent)' }}>{sub.segment}</p>
                <div className="flex flex-wrap gap-1.5">
                  {sub.products.map(p => (
                    <span key={p} className="text-[10px] px-2 py-0.5 rounded"
                      style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)' }}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Execution Plan</p>
          <h2 className="heading-lg mb-10">Investment Roadmap</h2>
          <div className="max-w-2xl space-y-3">
            {ROADMAP_STEPS.map((step) => (
              <div key={step.day} className="flex gap-4 items-start">
                <span className="shrink-0 text-xs font-medium w-16 pt-4"
                  style={{ color: 'var(--accent)' }}>{step.day}</span>
                <div className="card p-4 flex-1">
                  <p className="text-sm font-medium text-white">{step.title}</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <h2 className="heading-lg mb-4">Ready to invest in the future of energy?</h2>
          <p className="body max-w-md mx-auto mb-8">
            Schedule a meeting or download our investor brief.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Schedule a Meeting <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-secondary">Download Brief</Link>
          </div>
        </div>
      </section>
    </main>
  );
}