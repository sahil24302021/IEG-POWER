'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, RefreshCcw, Globe } from 'lucide-react';

const FEATURES = [
  { icon: Zap, title: 'No Pollution', desc: 'Zero emissions, zero carbon footprint. Pure clean energy generation.' },
  { icon: Shield, title: 'Low Carbon', desc: 'Promotes the green revolution with carbon credits and sustainability.' },
  { icon: RefreshCcw, title: 'No Harm', desc: 'Safe for the environment and mother nature. Regenerative loop.' },
  { icon: Globe, title: 'Very Low Cost', desc: 'Negligible infrastructure and maintenance. Runs indefinitely.' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-carbon overflow-hidden">
      <div className="ieg-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <span className="section-label mb-4">About IEG Vidaka</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.5rem] text-white leading-tight mb-6">
              Building a new category of <span className="text-forest-light">internal energy generation</span>
            </h2>
            <p className="text-ieg-muted text-base leading-relaxed mb-6">
              IEG Vidaka Powers has developed a patented Internal Energy Generation system —
              a breakthrough closed-loop architecture that produces electricity without fuel,
              grid connection, or external charging. Founded on 30+ years of research by
              Ajay Choudhary, who presented the invention to Dr. APJ Abdul Kalam in 2004.
            </p>
            <blockquote className="border-l-2 border-forest/30 pl-5 text-white/40 italic text-sm leading-relaxed">
              &ldquo;Making the globe more ecologically sustainable for future generations.&rdquo;
            </blockquote>
          </motion.div>

          {/* Right — feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                className="glass-card p-6">
                <div className="w-10 h-10 rounded-xl bg-forest/[0.1] flex items-center justify-center mb-4">
                  <f.icon className="w-4 h-4 text-forest-light" />
                </div>
                <h3 className="text-white font-heading font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-ieg-muted text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
