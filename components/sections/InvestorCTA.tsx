'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, FileText, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HIGHLIGHTS = [
  { icon: Globe, title: '₹34.8B Market', desc: 'India EV market growing 26% CAGR through 2029', color: 'text-forest-light' },
  { icon: FileText, title: '20-Year Patent', desc: 'Exclusive IP protection through 2031', color: 'text-ieg-orange' },
  { icon: Zap, title: 'Working Prototypes', desc: '600W to 5KVA systems tested and running', color: 'text-forest-light' },
];

export default function InvestorCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-carbon overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest/[0.04] rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-ieg-orange/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="ieg-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">Investors</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-tight mb-4">
            Power the Future <span className="text-ieg-orange">with Us</span>
          </h2>
          <p className="text-ieg-muted text-sm md:text-base max-w-xl mx-auto">
            Join the mission to bring fuel-free, grid-independent energy to 1.4 billion people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card p-7 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mx-auto mb-4">
                <h.icon className={`w-5 h-5 ${h.color}`} />
              </div>
              <h3 className="text-white font-heading font-bold text-lg mb-2">{h.title}</h3>
              <p className="text-ieg-muted text-xs">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/investor" className="btn-primary">
            Investor Brief <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Schedule a Meeting
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
