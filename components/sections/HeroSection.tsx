'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Award, Zap, Leaf, Building } from 'lucide-react';
import { motion } from 'framer-motion';

/* ─── Animated Energy Loop Diagram (SVG) ─── */
function EnergyDiagram() {
  const nodes = [
    { label: 'BATTERY', x: 50, y: 15, color: '#F4A123' },
    { label: 'BLDC MOTOR', x: 85, y: 50, color: '#2ECC71' },
    { label: 'IEG GENERATOR', x: 50, y: 85, color: '#2ECC71' },
    { label: 'LOAD OUTPUT', x: 15, y: 50, color: '#F4A123' },
  ];

  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-forest/[0.04] blur-[60px]" />

      {/* Orbiting rings */}
      <div className="absolute inset-4 rounded-full border border-white/[0.04] animate-orbit" />
      <div className="absolute inset-10 rounded-full border border-forest/[0.08] animate-orbit-reverse" />
      <div className="absolute inset-16 rounded-full border border-dashed border-forest/[0.06]" />

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-[10px] font-mono text-ieg-muted tracking-widest uppercase mb-1">Output</div>
          <div className="text-2xl font-heading font-bold text-white">240V</div>
          <div className="text-xs font-mono text-forest-light">50Hz AC</div>
        </div>
      </div>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
          className="absolute"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="px-3 py-2 rounded-lg bg-carbon-light/80 backdrop-blur border border-white/[0.08] text-center">
            <div className="text-[9px] font-mono font-bold tracking-wider" style={{ color: node.color }}>{node.label}</div>
          </div>
        </motion.div>
      ))}

      {/* Flow dots on the circular path */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-forest-light"
          style={{
            left: '50%', top: '50%',
            transformOrigin: '0 0',
          }}
          animate={{
            rotate: [i * 60, i * 60 + 360],
            x: [0, 0],
            y: [-130, -130],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Floating spec cards */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute -right-4 top-[20%] px-3 py-2 rounded-lg bg-carbon-light/90 backdrop-blur border border-forest/[0.15] text-right"
      >
        <div className="text-[9px] font-mono text-ieg-muted uppercase tracking-wider">Fuel Input</div>
        <div className="text-sm font-heading font-bold text-ieg-orange">Zero</div>
      </motion.div>
    </div>
  );
}

/* ─── HERO ─── */
export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-carbon">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] right-[20%] w-[500px] h-[500px] rounded-full bg-forest/[0.06] blur-[180px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-ieg-orange/[0.03] blur-[140px]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest/20 to-transparent" />

      {/* Content */}
      <div className="ieg-container relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <div>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }} className="mb-8">
              <div className="trust-badge">
                <Shield className="w-3.5 h-3.5" />
                <span>INDIAN PATENT NO. 391051</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold text-white tracking-[-0.03em] leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
              Generate Electricity.
              <br />
              <span className="text-forest-light">Without Fuel.</span>
              <br />
              <span className="text-white/40">Without Charging.</span>
            </motion.h1>

            {/* Description */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-ieg-muted text-base font-body leading-relaxed max-w-md mb-10">
              A patented internal energy generation system delivering continuous,
              self-sustaining electricity — no grid, no fuel, no external charging.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-12">
              <Link href="/technology" className="btn-primary">
                See How It Works <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/investor" className="btn-ghost">
                Investor Brief
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-5">
              {[
                { icon: Award, label: 'Patent 391051' },
                { icon: Zap, label: '30+ Years R&D' },
                { icon: Leaf, label: 'Zero Emissions' },
                { icon: Building, label: 'IIM Nagpur Validated' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-3.5 h-3.5 text-forest-light/50" />
                  <span className="text-[10px] text-white/20 font-heading uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — animated energy diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <EnergyDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
