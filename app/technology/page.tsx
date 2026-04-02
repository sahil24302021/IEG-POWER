'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, RotateCcw, BatteryCharging, ArrowRight, FileText, ShieldCheck } from 'lucide-react';

const techSteps = [
  { num: '01', title: 'Magnetic Flux Stabilization', desc: 'A patented magnetic arrangement induces electron flow with minimal mechanical resistance. Unlike conventional generators, IEG uses no combustion — just precision-engineered magnetic fields.', icon: Zap },
  { num: '02', title: 'The Regenerative Loop', desc: 'Latent back-EMF is captured via our patented circuit. Instead of being lost as heat, it is phase-corrected and fed back into the exciter field, creating a self-sustaining resonance.', icon: RotateCcw },
  { num: '03', title: 'Continuous Output', desc: 'The magnetic field becomes self-sustaining. The system delivers clean AC/DC power indefinitely, independent of any external fuel or energy source.', icon: BatteryCharging },
];

export default function TechnologyPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-carbon overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest/[0.04] rounded-full blur-[200px]" />
        </div>
        <div className="ieg-container relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-6 block">Core IP & Research</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.08]">
              The Science of <span className="text-forest-light">Self-Regeneration</span>
            </h1>
            <p className="text-lg text-white/40 font-body leading-relaxed max-w-2xl">
              IEG technology is an advanced <span className="text-white font-semibold">internal energy regeneration system</span> that minimizes entropy and recycles output power through a patented closed-loop architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-carbon-light">
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="section-label justify-center mb-4">System Architecture</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-4">How IEG Technology Works</h2>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-card p-8 mb-20">
            <Image src="/assets/images/ieg-diagram.jpg" alt="IEG System Architecture" width={1200} height={500} className="w-full h-auto object-contain rounded-lg" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {techSteps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass-card p-8">
                <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-6">
                  <step.icon className="w-5 h-5 text-forest-light" />
                </div>
                <span className="font-mono text-sm text-ieg-orange font-bold mb-2 block">{step.num}</span>
                <h3 className="font-heading font-bold text-lg text-white mb-3">{step.title}</h3>
                <p className="text-ieg-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-24 bg-carbon">
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="section-label justify-center mb-4">Intellectual Property</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-4">Protected by Law</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image src="/assets/images/patent-cert.jpg" alt="Patent Certificate" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-forest-light" />
                    <span className="text-xs font-heading text-forest-light uppercase tracking-wider font-bold">Granted 2022</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">Patent No. 391051</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-ieg-muted text-sm leading-relaxed">The foundational patent covering the method of autonomous power generation without external fuel dependency. Effective from 2011.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="glass-card overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-forest/20 to-forest/5 flex flex-col items-center justify-center">
                <ShieldCheck className="w-16 h-16 text-forest-light mb-4" />
                <span className="text-sm font-heading text-white/40 uppercase tracking-wider">Granted 2025</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-white mb-2">Regeneration Protocol</h3>
                <span className="text-xs font-heading text-forest-light uppercase tracking-wider mb-3 block">Internal Energy Regeneration</span>
                <p className="text-ieg-muted text-sm leading-relaxed">Advanced protocol maximizing efficiency by capturing and recirculating latent energy for continuous operation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Generator Specs */}
      <section className="py-24 bg-carbon-light">
        <div className="ieg-container">
          <div className="text-center mb-16">
            <span className="section-label justify-center mb-4">Specifications</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-4">Generator Models</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-heading font-bold text-2xl text-white">IEG 1000</h3>
                <span className="px-3 py-1 bg-forest/10 text-forest-light text-xs font-bold rounded-full">1 KVA</span>
              </div>
              <div className="space-y-3">
                {[['Rating', '1 KVA / 0.9 KWe'], ['Output (1Φ)', '2.3A / 220-240V'], ['Harmonics', '4-5%'], ['Runtime', '18 hrs/day'], ['Noise', '68-72 DB']].map(([l, v]) => (
                  <div key={l} className="flex justify-between items-center py-2 border-b border-white/[0.04] last:border-0">
                    <span className="text-sm text-ieg-muted font-heading">{l}</span>
                    <span className="font-mono text-sm font-semibold text-white">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 border-forest-light/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-forest text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider">RECOMMENDED</div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-heading font-bold text-2xl text-white">IEG 2000</h3>
                <span className="px-3 py-1 bg-forest/10 text-forest-light text-xs font-bold rounded-full">2 KVA</span>
              </div>
              <div className="space-y-3">
                {[['Rating', '2 KVA / 1.8 KWe'], ['Output (1Φ)', '4.6A / 220-240V'], ['Output (3Φ)', '3.0A / 415V'], ['Harmonics', '4-5%'], ['Runtime', '18 hrs/day']].map(([l, v]) => (
                  <div key={l} className="flex justify-between items-center py-2 border-b border-white/[0.04] last:border-0">
                    <span className="text-sm text-ieg-muted font-heading">{l}</span>
                    <span className="font-mono text-sm font-semibold text-white">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Prototypes */}
          <div className="mt-20 text-center">
            <span className="section-label justify-center mb-4">Proven Hardware</span>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">Working Prototypes</h3>
            <p className="text-ieg-muted text-sm mb-10 max-w-lg mx-auto">From 600W compact units to 5KVA industrial generators — built, tested, and running.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { src: '/assets/pdf_page17_img2.png', name: 'IEG 600W Solar', desc: 'Compact residential unit' },
              { src: '/assets/pdf_page17_img1.png', name: 'IEG 3KVA Fuel-less', desc: 'Industrial / commercial unit', featured: true },
              { src: '/assets/pdf_page17_img3.png', name: 'IEG 5KVA', desc: 'Heavy-duty power unit' },
            ].map((proto, i) => (
              <motion.div key={proto.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`glass-card overflow-hidden group ${proto.featured ? 'border-forest-light/20' : ''}`}>
                <div className="aspect-square bg-gradient-to-b from-white/[0.02] to-transparent p-6 flex items-center justify-center overflow-hidden">
                  <Image src={proto.src} alt={proto.name} width={300} height={300} className="object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="px-6 py-4 border-t border-white/[0.04]">
                  <p className="font-heading font-bold text-sm text-white">{proto.name}</p>
                  <p className="text-xs text-ieg-muted mt-0.5">{proto.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact" className="btn-primary">
              Request Technical Briefing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}