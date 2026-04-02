'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Award, GraduationCap, FileCheck } from 'lucide-react';

export default function ProofSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-carbon-light overflow-hidden">
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest/[0.03] rounded-full blur-[250px]" />

      <div className="ieg-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">Protected by Law</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Patented & Validated
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Patent Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-forest/15 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-forest-light" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-forest-light">Granted 2022</span>
                <h3 className="text-white font-heading font-bold text-lg">Indian Patent No. 391051</h3>
              </div>
            </div>
            <p className="text-ieg-muted text-sm leading-relaxed mb-6">
              &ldquo;Internal Energy Generating System&rdquo; — A complete closed-loop energy regeneration architecture
              granted by the Government of India, Controller General of Patents, Designs and Trade Marks.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-[10px] text-ieg-muted font-mono">
                <FileCheck className="w-3.5 h-3.5 text-forest-light" />
                Filed: Dec 13, 2011
              </div>
              <div className="flex items-center gap-2 text-[10px] text-ieg-muted font-mono">
                <Award className="w-3.5 h-3.5 text-ieg-orange" />
                20-Year Protection
              </div>
            </div>
          </motion.div>

          {/* Validation Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-ieg-orange/10 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-ieg-orange" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-ieg-orange">Academic Validation</span>
                <h3 className="text-white font-heading font-bold text-lg">IIM Nagpur Validated</h3>
              </div>
            </div>
            <p className="text-ieg-muted text-sm leading-relaxed mb-6">
              IEG technology has been reviewed and validated by the Indian Institute of Management, Nagpur —
              confirming the technical viability and commercial potential of the internal energy generation system.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-[10px] text-ieg-muted font-mono">
                <Award className="w-3.5 h-3.5 text-forest-light" />
                Technical & Commercial Viability
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
