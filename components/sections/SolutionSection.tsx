'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Battery, Zap, Leaf, Package, CircleDollarSign, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FEATURES = [
  { icon: Battery, title: 'No Fossil Fuel', desc: 'Operates entirely without petrol, diesel, gas, or any combustible fuel source.' },
  { icon: Zap, title: 'No Grid Required', desc: 'Complete independence from external power grids — works anywhere, anytime.' },
  { icon: Leaf, title: 'Zero Pollution', desc: 'Zero emissions, zero noise pollution. Clean energy from the ground up.' },
  { icon: Package, title: '100% Portable', desc: 'Compact modular design that can be installed in any vehicle or structure.' },
  { icon: CircleDollarSign, title: 'Negligible Cost', desc: '₹0 fuel cost per kWh. Only nominal maintenance required.' },
  { icon: ShieldCheck, title: 'Always Reliable', desc: '24/7 continuous output. No weather dependence, no downtime.' },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-forest overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest-light/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-ieg-orange/5 rounded-full blur-[150px]" />

      <div className="ieg-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase text-white/60 font-heading mb-4">
            <span className="w-8 h-px bg-white/30" />
            The Solution
            <span className="w-8 h-px bg-white/30" />
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-tight mb-4">
            IEG Vidaka is{' '}
            <span className="text-ieg-orange">the Answer</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base">
            A patented internal energy generation system that eliminates dependency on fuel, grid, and charging infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-white/80" />
              </div>
              <h3 className="text-white font-heading font-bold text-sm mb-2">{f.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/technology" className="btn-orange">
            See How It Works <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
