'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, RefreshCcw, BatteryCharging, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const STEPS = [
  { num: '01', icon: Zap, title: 'Magnetic Flux Stabilization', desc: 'A patented arrangement of magnetic elements creates a self-stabilizing flux field, generating initial torque without external input.' },
  { num: '02', icon: RefreshCcw, title: 'The Regenerative Loop', desc: 'BLDC Motor drives the IEG MB Generator, which produces excess energy fed back through the Battery Charger — creating a continuous closed loop.' },
  { num: '03', icon: BatteryCharging, title: 'Continuous Output', desc: 'The system delivers stable 240V / 50Hz AC output continuously — enough to power appliances, vehicles, and industrial equipment.' },
];

export default function TechnologySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="ieg-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase text-forest font-heading mb-4">
              <span className="w-8 h-px bg-forest/50" />
              Core Technology
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-carbon leading-tight">
              How{' '}
              <span className="text-forest">IEG</span>{' '}
              Works
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link href="/technology" className="btn-outline-light text-sm">
              Deep Dive <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Diagram placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass-card-light p-8 md:p-10"
          >
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-carbon/[0.02] to-forest/[0.04] flex items-center justify-center relative">
              {/* Simplified energy flow diagram */}
              <svg viewBox="0 0 400 300" className="w-full h-full max-w-[400px]">
                <defs>
                  <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#1A6B3C" opacity="0.6" />
                  </marker>
                </defs>

                {/* Nodes */}
                <rect x="10" y="110" width="90" height="60" rx="12" fill="#1A6B3C" opacity="0.08" stroke="#1A6B3C" strokeWidth="1.5" />
                <text x="55" y="145" textAnchor="middle" fill="#1A6B3C" fontSize="11" fontFamily="var(--font-heading)" fontWeight="700">BATTERY</text>

                <rect x="155" y="30" width="90" height="60" rx="12" fill="#F4A123" opacity="0.08" stroke="#F4A123" strokeWidth="1.5" />
                <text x="200" y="65" textAnchor="middle" fill="#F4A123" fontSize="11" fontFamily="var(--font-heading)" fontWeight="700">BLDC MOTOR</text>

                <rect x="300" y="110" width="90" height="60" rx="12" fill="#1A6B3C" opacity="0.08" stroke="#1A6B3C" strokeWidth="1.5" />
                <text x="345" y="138" textAnchor="middle" fill="#1A6B3C" fontSize="11" fontFamily="var(--font-heading)" fontWeight="700">IEG MB</text>
                <text x="345" y="155" textAnchor="middle" fill="#1A6B3C" fontSize="9" fontFamily="var(--font-heading)" fontWeight="600">GENERATOR</text>

                <rect x="155" y="210" width="90" height="60" rx="12" fill="#F4A123" opacity="0.08" stroke="#F4A123" strokeWidth="1.5" />
                <text x="200" y="238" textAnchor="middle" fill="#F4A123" fontSize="9" fontFamily="var(--font-heading)" fontWeight="700">BATTERY</text>
                <text x="200" y="252" textAnchor="middle" fill="#F4A123" fontSize="9" fontFamily="var(--font-heading)" fontWeight="700">CHARGER</text>

                {/* Arrows */}
                <line x1="100" y1="120" x2="155" y2="75" stroke="#1A6B3C" strokeWidth="1.5" markerEnd="url(#arrowGreen)" strokeDasharray="4 3" />
                <line x1="245" y1="75" x2="300" y2="120" stroke="#1A6B3C" strokeWidth="1.5" markerEnd="url(#arrowGreen)" strokeDasharray="4 3" />
                <line x1="345" y1="170" x2="245" y2="220" stroke="#1A6B3C" strokeWidth="1.5" markerEnd="url(#arrowGreen)" strokeDasharray="4 3" />
                <line x1="155" y1="240" x2="55" y2="170" stroke="#1A6B3C" strokeWidth="1.5" markerEnd="url(#arrowGreen)" strokeDasharray="4 3" />

                {/* Load output */}
                <text x="370" y="200" fill="#1A6B3C" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600" opacity="0.5">→ LOAD</text>
                <text x="370" y="212" fill="#1A6B3C" fontSize="7" fontFamily="var(--font-mono)" opacity="0.4">240V/50Hz</text>
              </svg>
            </div>
          </motion.div>

          {/* Right — Steps */}
          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="flex gap-5"
              >
                <div className="shrink-0">
                  <span className="text-2xl font-heading font-extrabold text-ieg-orange/30">{step.num}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-forest" />
                    </div>
                    <h3 className="font-heading font-bold text-carbon text-base">{step.title}</h3>
                  </div>
                  <p className="text-carbon/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
