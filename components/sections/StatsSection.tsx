'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const STATS = [
  { value: 0, prefix: '₹', suffix: '/kWh', label: 'Fuel Cost', color: 'text-forest-light' },
  { value: 4.5, suffix: 'x', label: 'vs Solar Efficiency', color: 'text-ieg-orange' },
  { value: 21, suffix: ' Months', label: 'ROI Payback', color: 'text-forest-light' },
  { value: 87, suffix: '%', label: 'Cost Saving (2W)', color: 'text-ieg-orange' },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-20 md:py-24 bg-carbon border-t border-b border-white/[0.04]">
      <div className="ieg-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center py-4">
              <div className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl ${stat.color} mb-3`}
                style={{ fontStyle: 'normal' }}>
                {stat.prefix}
                {inView && <AnimatedCounter end={stat.value} duration={2000} decimals={stat.value % 1 !== 0 ? 1 : 0} />}
                {stat.suffix}
              </div>
              <p className="text-ieg-muted text-[10px] md:text-xs font-heading font-semibold uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
