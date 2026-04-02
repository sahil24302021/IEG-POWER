'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, FileText, Zap, TrendingUp, BarChart3, Building2 } from 'lucide-react';
import { MARKET, SUBSIDIARY_STRUCTURE, ROADMAP_STEPS } from '@/lib/constants';

export default function InvestorPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-carbon overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-[20%] w-[600px] h-[600px] bg-ieg-orange/[0.03] rounded-full blur-[200px]" />
        </div>
        <div className="ieg-container relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-6 block">Investor Relations</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.08]">
              Power the Future <span className="text-ieg-orange">with Us</span>
            </h1>
            <p className="text-lg text-white/40 font-body leading-relaxed max-w-2xl">
              Join the mission to bring fuel-free, grid-independent energy to 1.4 billion people. Patent-protected, validated, and production-ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 bg-carbon-light">
        <div className="ieg-container">
          <span className="section-label mb-4 block">Market Opportunity</span>
          <h2 className="font-heading font-bold text-3xl text-white mb-12">India EV Market</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card p-7 text-center">
              <Globe className="w-8 h-8 text-forest-light mx-auto mb-4" />
              <p className="font-heading font-bold text-2xl text-white mb-1">{MARKET.size2024}</p>
              <p className="text-ieg-muted text-xs">Market Size (2024)</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass-card p-7 text-center">
              <TrendingUp className="w-8 h-8 text-ieg-orange mx-auto mb-4" />
              <p className="font-heading font-bold text-2xl text-white mb-1">{MARKET.cagr} CAGR</p>
              <p className="text-ieg-muted text-xs">Growth Rate to 2029</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="glass-card p-7 text-center">
              <BarChart3 className="w-8 h-8 text-forest-light mx-auto mb-4" />
              <p className="font-heading font-bold text-2xl text-white mb-1">{MARKET.size2029}</p>
              <p className="text-ieg-muted text-xs">Projected (2029)</p>
            </motion.div>
          </div>
          <p className="text-center text-ieg-muted/50 text-xs font-mono">Source: {MARKET.source}</p>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-24 bg-carbon">
        <div className="ieg-container">
          <span className="section-label mb-4 block">Why Invest</span>
          <h2 className="font-heading font-bold text-3xl text-white mb-12">Investment Highlights</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: FileText, title: '20-Year Patent', desc: 'Exclusive IP protection through 2031. Two granted patents covering core technology and regeneration protocol.', color: 'text-forest-light' },
              { icon: Zap, title: 'Working Prototypes', desc: '600W to 5KVA systems built, tested, and running. Multiple product categories validated.', color: 'text-ieg-orange' },
              { icon: Globe, title: '₹34.8B Market', desc: 'India EV market growing 26% CAGR. IEG technology addresses the fundamental charging infrastructure gap.', color: 'text-forest-light' },
            ].map((h, i) => (
              <motion.div key={h.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card p-8">
                <h.icon className={`w-8 h-8 ${h.color} mb-4`} />
                <h3 className="font-heading font-bold text-lg text-white mb-2">{h.title}</h3>
                <p className="text-ieg-muted text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiary Structure */}
      <section className="py-24 bg-carbon-light">
        <div className="ieg-container">
          <span className="section-label mb-4 block">Business Model</span>
          <h2 className="font-heading font-bold text-3xl text-white mb-4">Subsidiary Structure</h2>
          <p className="text-ieg-muted text-sm mb-12 max-w-xl">
            Parent company ({SUBSIDIARY_STRUCTURE.parentShare}%) retains majority control, with strategic investor holding {SUBSIDIARY_STRUCTURE.investorShare}%.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUBSIDIARY_STRUCTURE.subsidiaries.map((sub, i) => (
              <motion.div key={sub.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-forest-light" />
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm">{sub.name}</h3>
                    <p className="text-[10px] text-ieg-orange font-heading uppercase tracking-wider">{sub.segment}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {sub.products.map(p => (
                    <span key={p} className="text-[10px] font-mono text-ieg-muted bg-white/[0.03] px-2 py-1 rounded">{p}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-carbon">
        <div className="ieg-container">
          <span className="section-label mb-4 block">Execution Plan</span>
          <h2 className="font-heading font-bold text-3xl text-white mb-12">Investment Roadmap</h2>
          <div className="max-w-3xl mx-auto space-y-1">
            {ROADMAP_STEPS.map((step, i) => (
              <motion.div key={step.day} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start group">
                <div className="shrink-0 w-20 pt-5">
                  <span className="font-mono font-bold text-sm text-ieg-orange">{step.day}</span>
                </div>
                <div className="relative flex-1 pb-6 border-l border-white/[0.06] pl-8">
                  <div className="absolute left-0 top-5 -translate-x-1/2 w-3 h-3 rounded-full bg-carbon border-2 border-ieg-orange group-hover:bg-ieg-orange transition-colors" />
                  <div className="glass-card p-5">
                    <h3 className="font-heading font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-ieg-muted text-sm">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest-light rounded-full blur-[150px]" />
        </div>
        <div className="ieg-container relative z-10 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to invest in the future of energy?</h2>
          <p className="text-white/50 mb-10 max-w-lg mx-auto">Download our investor brief, schedule a meeting, or connect with our leadership team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-orange">Schedule a Meeting <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/contact" className="btn-ghost border-white/20 text-white/70 hover:text-white">Download Investor Brief</Link>
          </div>
        </div>
      </section>
    </main>
  );
}