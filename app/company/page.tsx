'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BRAND, EXECUTIVE_BOARD, OPERATIONAL_DIRECTORS, JOURNEY_MILESTONES } from '@/lib/constants';

export default function CompanyPage() {
  return (
    <main>
      {/* Hero — storytelling approach, different from home */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <p className="label mb-4">Our Story</p>
          <h1 className="heading-xl max-w-2xl mb-6">
            30 years of research.{' '}
            <span style={{ color: 'var(--text-muted)' }}>One breakthrough technology.</span>
          </h1>
          <p className="body-lg max-w-xl">{BRAND.vision}</p>
        </div>
      </section>

      {/* Founder — horizontal layout */}
      <section className="py-20" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
            <div>
              <p className="label mb-4">The Inventor</p>
              <h2 className="heading-lg mb-6">Ajay Choudhary</h2>
              <div className="space-y-4 body max-w-xl">
                <p>
                  Managing Director and inventor behind IEG technology. Research began in{' '}
                  <strong className="text-white">1993</strong>, driven by a vision of complete energy independence.
                </p>
                <p>
                  In <strong className="text-white">2004</strong>, the technology was presented to{' '}
                  <strong className="text-white">Dr. APJ Abdul Kalam</strong>, then President of India, 
                  who recognized its potential.
                </p>
                <p>
                  After decades of refinement, <strong className="text-white">Patent No. 391051</strong> was 
                  granted in 2022, validating a completely new category of energy technology.
                </p>
              </div>
            </div>
            <div className="card p-8 text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"
                style={{ background: 'var(--accent-muted)' }}>
                👤
              </div>
              <p className="text-lg font-semibold text-white">Ajay Choudhary</p>
              <p className="text-xs" style={{ color: 'var(--accent)' }}>Managing Director & Inventor</p>
              <p className="text-sm italic mt-3" style={{ color: 'var(--text-muted)' }}>
                &ldquo;Energy should be generated from within — not extracted from the earth.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Journey</p>
          <h2 className="heading-lg mb-10">The IEG Timeline</h2>
          <div className="max-w-2xl space-y-0">
            {JOURNEY_MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-6 group">
                <div className="shrink-0 w-16 pt-5">
                  <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>{m.year}</span>
                </div>
                <div className="flex-1 pb-6 pl-6" style={{ borderLeft: '1px solid var(--border)' }}>
                  <div className="absolute -ml-[25px] mt-5 w-2.5 h-2.5 rounded-full"
                    style={{ background: 'var(--bg)', border: '2px solid var(--accent)' }} />
                  <div className="card p-4">
                    <p className="text-sm font-medium text-white">{m.title}</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Leadership</p>
          <h2 className="heading-lg mb-10">Executive Board</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {EXECUTIVE_BOARD.map((m) => (
              <div key={m.name} className="card p-6 text-center">
                <p className="text-base font-semibold text-white">{m.name}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--accent)' }}>{m.role}</p>
                <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>{m.focus}</p>
              </div>
            ))}
          </div>

          <h3 className="text-base font-semibold text-white mb-4">Operations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {OPERATIONAL_DIRECTORS.map((d) => (
              <div key={d.name} className="card p-4">
                <p className="text-sm font-medium text-white">{d.name}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{d.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations + CTA */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mb-10">
            {[
              { title: 'Headquarters', value: BRAND.hq, extra: `${BRAND.phone} · ${BRAND.email}` },
              { title: 'Manufacturing', value: BRAND.factory, extra: '' },
            ].map((loc) => (
              <div key={loc.title} className="card p-6">
                <p className="text-sm font-medium text-white mb-1">{loc.title}</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{loc.value}</p>
                {loc.extra && <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>{loc.extra}</p>}
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}