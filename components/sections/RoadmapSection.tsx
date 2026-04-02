'use client';

import { motion } from 'framer-motion';
import { ROADMAP_STEPS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';

export default function RoadmapSection() {
  return (
    <section className="section-light relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-forest/3 blur-[100px] rounded-full" />
      </div>

      <div className="ieg-container relative z-10">
        <SectionHeader
          label="Execution Plan"
          title="180-Day Roadmap"
          subtitle="The path from agreement to full-scale manufacturing."
          align="center"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {ROADMAP_STEPS.map((step, i) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group text-center"
              >
                {/* Timeline dot */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                    i === ROADMAP_STEPS.length - 1
                      ? 'bg-forest text-white border-forest shadow-[0_0_25px_rgba(13,107,63,0.3)]'
                      : 'bg-white text-forest border-gray-200 group-hover:border-forest group-hover:shadow-[0_0_15px_rgba(13,107,63,0.15)]'
                  }`}>
                    <span className="text-sm font-mono font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Day label */}
                <div className="text-amber font-mono text-xs uppercase tracking-widest mb-2 font-bold">
                  {step.day}
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-carbon mb-2 group-hover:text-forest transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
