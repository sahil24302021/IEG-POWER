'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const techSteps = [
  { num: '01', title: 'Magnetic Flux Stabilization', desc: 'Patented magnetic arrangement induces electron flow without combustion. Precision-engineered fields create initial torque.' },
  { num: '02', title: 'The Regenerative Loop', desc: 'Back-EMF is captured and phase-corrected, then fed back into the exciter field — creating a self-sustaining resonance.' },
  { num: '03', title: 'Continuous Output', desc: 'The system delivers clean AC/DC power indefinitely, independent of any external fuel or energy source. 240V / 50Hz.' },
];

export default function TechnologyPage() {
  return (
    <main>
      {/* Hero — technical, not marketing */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <p className="label mb-4">Core Technology</p>
          <h1 className="heading-xl max-w-2xl mb-6">
            How IEG{' '}
            <span style={{ color: 'var(--text-muted)' }}>actually works.</span>
          </h1>
          <p className="body-lg max-w-xl">
            An internal energy regeneration system that minimizes entropy and recycles
            output power through a patented closed-loop architecture.
          </p>
        </div>
      </section>

      {/* System Flow — visual steps (unique to this page) */}
      <section className="py-20" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">System Architecture</p>
          <h2 className="heading-lg mb-12">Three-stage energy loop</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {techSteps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="card p-6 h-full">
                  <span className="text-xs font-mono font-medium block mb-3" style={{ color: 'var(--accent)' }}>
                    {step.num}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="body-sm">{step.desc}</p>
                </div>
                {i < techSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                    <ArrowRight className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loop */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-px flex-1 max-w-[160px]" style={{ background: 'var(--border)' }} />
            <span className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ color: 'var(--accent)', background: 'var(--accent-muted)' }}>
              ↻ Closed regeneration loop
            </span>
            <div className="h-px flex-1 max-w-[160px]" style={{ background: 'var(--border)' }} />
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Intellectual Property</p>
          <h2 className="heading-lg mb-10">Protected by law</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <div className="card p-6">
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>Granted 2022</p>
              <p className="text-lg font-semibold text-white mb-3">Patent No. 391051</p>
              <p className="body-sm">Method of autonomous power generation without external fuel. 20-year protection from 2011.</p>
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--amber)' }}>Granted 2025</p>
              <p className="text-lg font-semibold text-white mb-3">Regeneration Protocol</p>
              <p className="body-sm">Advanced protocol capturing and recirculating latent energy for continuous operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Specs — table format (unique to this page) */}
      <section className="py-20" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Specifications</p>
          <h2 className="heading-lg mb-10">Generator models</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {[
              { name: 'IEG 1000', kva: '1 KVA', specs: [['Rating', '1 KVA / 0.9 KWe'], ['Output', '2.3A / 220-240V'], ['Harmonics', '4-5%'], ['Runtime', '18 hrs/day'], ['Noise', '68-72 dB']] },
              { name: 'IEG 2000', kva: '2 KVA', recommended: true, specs: [['Rating', '2 KVA / 1.8 KWe'], ['Output (1Φ)', '4.6A / 220-240V'], ['Output (3Φ)', '3.0A / 415V'], ['Harmonics', '4-5%'], ['Runtime', '18 hrs/day']] },
            ].map((m) => (
              <div key={m.name} className="card p-6 relative overflow-hidden"
                style={{ borderColor: m.recommended ? 'rgba(34,197,94,0.3)' : undefined }}>
                {m.recommended && (
                  <span className="absolute top-0 right-0 text-[9px] font-medium px-2 py-0.5 rounded-bl"
                    style={{ background: 'var(--accent)', color: 'var(--bg)' }}>RECOMMENDED</span>
                )}
                <div className="flex items-center justify-between mb-5">
                  <p className="text-xl font-semibold text-white">{m.name}</p>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ color: 'var(--accent)', background: 'var(--accent-muted)' }}>{m.kva}</span>
                </div>
                <div className="space-y-2">
                  {m.specs.map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm py-1.5"
                      style={{ borderBottom: '1px solid var(--border)' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{k}</span>
                      <span className="font-medium text-white">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototypes */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <p className="label mb-4">Hardware</p>
          <h2 className="heading-lg mb-10">Working prototypes</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
            {[
              { src: '/assets/pdf_page17_img2.png', name: 'IEG 600W Solar', desc: 'Compact residential' },
              { src: '/assets/pdf_page17_img1.png', name: 'IEG 3KVA', desc: 'Industrial / commercial' },
              { src: '/assets/pdf_page17_img3.png', name: 'IEG 5KVA', desc: 'Heavy-duty' },
            ].map((p) => (
              <div key={p.name} className="card overflow-hidden group">
                <div className="aspect-square flex items-center justify-center p-6"
                  style={{ background: '#0A0D0A' }}>
                  <Image src={p.src} alt={p.name} width={250} height={250}
                    className="object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <p className="text-sm font-medium text-white">{p.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Request Technical Briefing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}