'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Flame, Grid3X3, CloudRain } from 'lucide-react';

const PROBLEMS = [
  { num: '01', icon: Flame, title: 'Fossil Fuel Scarcity', desc: 'Global reserves depleting rapidly. Prices volatile. Energy insecurity growing for developing nations.', color: 'text-red-400' },
  { num: '02', icon: Grid3X3, title: 'Grid Dependency', desc: 'Billions still lack reliable grid access. Rural electrification remains decades away.', color: 'text-orange-400' },
  { num: '03', icon: CloudRain, title: 'Environmental Cost', desc: 'Carbon emissions accelerating climate change. Existing clean energy alternatives remain inefficient.', color: 'text-amber-400' },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="ieg-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-16">
          <span className="section-label-dark mb-4">The Challenge</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-carbon leading-tight">
            The World Runs on a <span className="text-red-500">Broken</span> Energy System
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => (
            <motion.div key={p.num} initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
              className="relative bg-white rounded-2xl p-7 border border-black/[0.04] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
              <span className="absolute top-4 right-4 text-6xl font-heading font-extrabold text-black/[0.03]">{p.num}</span>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  <p.icon className={`w-4 h-4 ${p.color}`} />
                </div>
                <h3 className="text-carbon font-heading font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
