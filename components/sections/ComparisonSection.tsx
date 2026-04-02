'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingDown, Wifi, Leaf } from 'lucide-react';

const ADVANTAGES = [
  { badge: '₹0/KWH', icon: TrendingDown, title: 'Zero Fuel Cost', desc: 'Eliminate recurring OPEX permanently. No diesel, no electricity bills, no dependency.', color: 'bg-forest-light/10 text-forest-light border-forest-light/20' },
  { badge: '24/7 UPTIME', icon: Wifi, title: 'Grid Independence', desc: 'Sovereign infrastructure that works anywhere — rural, urban, off-grid, on-grid.', color: 'bg-ieg-orange/10 text-ieg-orange border-ieg-orange/20' },
  { badge: 'ZERO EMISSIONS', icon: Leaf, title: 'Risk Mitigation', desc: 'Future-proof your assets against carbon taxes, fuel volatility, and regulatory shifts.', color: 'bg-forest-light/10 text-forest-light border-forest-light/20' },
];

const TABLE_DATA = [
  { vehicle: '2-Wheeler', stdRange: '100km', stdCost: '₹0.90/km', iegRange: '200km', iegCost: '₹0.12/km', saving: '87%' },
  { vehicle: '4-Wheeler', stdRange: '250km', stdCost: '₹1.60/km', iegRange: '500km', iegCost: '₹0.42/km', saving: '74%' },
  { vehicle: 'E-Rickshaw', stdRange: '100km', stdCost: '₹0.45/km', iegRange: '200km', iegCost: '₹0.27/km', saving: '40%' },
];

export default function ComparisonSection() {
  const ref = useRef(null);
  const tableRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const tableInView = useInView(tableRef, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="ieg-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase text-forest font-heading mb-4">
            <span className="w-8 h-px bg-forest/50" />
            The Advantage
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-carbon leading-tight">
            Why Switch to IEG?
          </h2>
        </motion.div>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {ADVANTAGES.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.6 }}
              className="glass-card-light p-7"
            >
              <span className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md border mb-5 ${a.color}`}>
                {a.badge}
              </span>
              <h3 className="text-carbon font-heading font-bold text-lg mb-2">{a.title}</h3>
              <p className="text-carbon/50 text-sm leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div ref={tableRef}>
          <h3 className="font-heading font-bold text-xl text-carbon mb-8">Running Cost Comparison</h3>
          <div className="glass-card-light overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 px-6 py-4 bg-carbon/[0.02] border-b border-carbon/[0.05]">
              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-carbon/40">Vehicle</span>
              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-carbon/40">Std Range</span>
              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-carbon/40">Std Cost</span>
              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-carbon/40">IEG Range</span>
              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-carbon/40">IEG Cost</span>
              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-carbon/40">Savings</span>
            </div>

            {/* Table Rows — 100ms stagger */}
            {TABLE_DATA.map((row, i) => (
              <motion.div
                key={row.vehicle}
                initial={{ opacity: 0, x: -30 }}
                animate={tableInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                className="grid grid-cols-6 gap-4 px-6 py-5 border-b border-carbon/[0.04] last:border-b-0 hover:bg-forest/[0.02] transition-colors"
              >
                <span className="font-heading font-bold text-sm text-carbon">{row.vehicle}</span>
                <span className="text-sm text-carbon/50 font-mono">{row.stdRange}</span>
                <span className="text-sm text-[#E8614D] font-mono font-semibold">{row.stdCost}</span>
                <span className="text-sm text-carbon/70 font-mono">{row.iegRange}</span>
                <span className="text-sm text-forest font-mono font-bold">{row.iegCost}</span>
                <span className="inline-flex items-center justify-center w-fit text-xs font-mono font-bold text-forest bg-forest/10 px-3 py-1 rounded-full">{row.saving}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
