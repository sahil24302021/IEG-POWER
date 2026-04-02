'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, BatteryCharging, Bike, CookingPot, Plug } from 'lucide-react';
import Link from 'next/link';

const PRODUCTS = [
  {
    icon: BatteryCharging,
    category: 'ELECTRIC MOBILITY',
    name: 'IEG E-Rickshaw Charger',
    desc: 'Self-powered charging system that extends battery life 2–2.5x without external electricity.',
    specs: ['Battery Life 2–2.5x', 'Self-Charging', 'No External Power'],
    color: 'border-forest-light/20',
  },
  {
    icon: Bike,
    category: 'ELECTRIC MOBILITY',
    name: 'IEG E-Scooty Charger',
    desc: 'Auto-recharging system for 2-wheelers. 200km range at ₹0.12/km operating cost.',
    specs: ['200km Range', '₹0.12/km', 'Auto-Recharge'],
    color: 'border-ieg-orange/20',
  },
  {
    icon: CookingPot,
    category: 'HOME APPLIANCE',
    name: 'IEG Electric Chula',
    desc: 'Clean cooking stove powered entirely by IEG technology. No gas, no grid, no compromise.',
    specs: ['Zero Gas', 'Zero Grid', 'Zero Compromise'],
    color: 'border-forest-light/20',
  },
  {
    icon: Plug,
    category: 'INDUSTRIAL ENERGY',
    name: 'IEG Generator 1000/2000',
    desc: 'Continuous 1–2 KVA output for commercial and industrial applications.',
    specs: ['1–2 KVA', '18hrs/day', '240V/50Hz'],
    color: 'border-ieg-orange/20',
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-carbon overflow-hidden">
      <div className="absolute top-0 left-[30%] w-[400px] h-[400px] bg-forest/[0.03] rounded-full blur-[200px]" />

      <div className="ieg-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-4 block">Products</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-tight">
              Built for the{' '}
              <span className="text-ieg-orange">Real World</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            <Link href="/products" className="btn-ghost text-sm">View All Products <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className={`glass-card p-8 border ${p.color} group`}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white/[0.04] flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-forest-light" />
                </div>
                <div className="flex-1">
                  <span className="text-[9px] font-heading font-bold uppercase tracking-[0.2em] text-ieg-muted mb-2 block">{p.category}</span>
                  <h3 className="text-white font-heading font-bold text-lg mb-2">{p.name}</h3>
                  <p className="text-ieg-muted text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.specs.map(s => (
                      <span key={s} className="text-[10px] font-mono font-medium text-forest-light bg-forest/10 px-2.5 py-1 rounded-md">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
