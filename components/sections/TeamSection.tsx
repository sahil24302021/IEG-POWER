'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import { EXECUTIVE_BOARD, OPERATIONAL_DIRECTORS } from '@/lib/constants';
import { ShieldCheck, Cpu, TrendingUp, Users } from 'lucide-react';

const execIcons = [
  <ShieldCheck key="0" className="w-6 h-6 text-forest" />,
  <Cpu key="1" className="w-6 h-6 text-forest" />,
  <TrendingUp key="2" className="w-6 h-6 text-forest" />,
];

export default function TeamSection() {
  return (
    <section className="section-dark relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-forest/5 blur-[150px] rounded-full" />
      </div>

      <div className="ieg-container relative z-10">
        <SectionHeader
          label="Corporate Governance"
          title="Leadership & Board"
          subtitle="A structure built for scale — combining deep-tech innovation with industrial manufacturing expertise."
          dark
        />

        {/* Executive Board */}
        <div className="mb-16">
          <h3 className="text-sm font-heading font-medium text-gray-500 uppercase tracking-widest mb-8">
            Executive Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXECUTIVE_BOARD.map((exec, i) => (
              <motion.div
                key={exec.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group"
              >
                <div className="h-full p-7 rounded-2xl bg-white/[0.03] border border-white/8 hover:bg-white/[0.06] hover:border-amber/20 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-5 w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all duration-300">
                    {execIcons[i]}
                  </div>

                  <h4 className="text-xl font-heading font-bold text-cream mb-1 group-hover:text-amber transition-colors">
                    {exec.name}
                  </h4>
                  <div className="text-amber text-sm font-heading tracking-wide uppercase mb-3">
                    {exec.role}
                  </div>
                  <p className="text-gray-500 text-sm border-t border-white/5 pt-3 mt-3">
                    {exec.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operational Directors */}
        <div>
          <h3 className="text-sm font-heading font-medium text-gray-500 uppercase tracking-widest mb-8">
            Operational Directors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OPERATIONAL_DIRECTORS.map((dir, i) => (
              <motion.div
                key={dir.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-cream font-heading font-semibold">{dir.name}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider font-heading mt-0.5">{dir.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Governance note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-6 border-t border-white/5 flex items-center gap-3 text-gray-500 text-sm font-heading"
        >
          <div className="w-2 h-2 rounded-full bg-forest animate-pulse" />
          <span className="uppercase tracking-widest text-xs font-medium">Verified Operational Structure</span>
        </motion.div>
      </div>
    </section>
  );
}
