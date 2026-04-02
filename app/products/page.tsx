'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BatteryCharging, Bike, CookingPot, Plug, Cpu, Zap } from 'lucide-react';
import { PRODUCTS_READY, PRODUCTS_UPCOMING } from '@/lib/constants';

const ICONS: Record<string, React.ElementType> = {
  rickshaw: BatteryCharging,
  scooty: Bike,
  chula: CookingPot,
  generator: Plug,
  'battery-charger': Cpu,
};

export default function ProductsPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-carbon overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ieg-orange/[0.03] rounded-full blur-[200px]" />
        </div>
        <div className="ieg-container relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-6 block">Product Catalog</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.08]">
              Built for the <span className="text-ieg-orange">Real World</span>
            </h1>
            <p className="text-lg text-white/40 font-body leading-relaxed max-w-2xl">
              From electric mobility to home appliances — IEG-powered products that deliver continuous, fuel-free electricity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Products */}
      <section className="py-24 bg-carbon-light">
        <div className="ieg-container">
          <span className="section-label mb-4 block">Available Now</span>
          <h2 className="font-heading font-bold text-3xl text-white mb-12">Current Products</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS_READY.map((p, i) => {
              const Icon = ICONS[p.id] || Zap;
              return (
                <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="glass-card p-7 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-forest-light" />
                    </div>
                    <span className="text-[9px] font-heading font-bold uppercase tracking-[0.2em] text-ieg-muted">{p.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{p.name}</h3>
                  <p className="text-ieg-muted text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.values(p.specs).map((s) => (
                      <span key={s} className="text-[10px] font-mono font-medium text-forest-light bg-forest/10 px-2.5 py-1 rounded-md">{s}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-24 bg-carbon">
        <div className="ieg-container">
          <span className="section-label mb-4 block">Coming Soon</span>
          <h2 className="font-heading font-bold text-3xl text-white mb-12">Upcoming Products</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRODUCTS_UPCOMING.map((name, i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass-card p-5 flex items-center gap-3">
                <Zap className="w-4 h-4 text-ieg-orange shrink-0" />
                <span className="text-sm text-white/70 font-heading">{name}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact" className="btn-primary">
              Discuss Requirements <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}