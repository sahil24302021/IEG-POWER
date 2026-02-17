'use client';

import { motion } from 'framer-motion';
import { TrendingDown, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

const benefits = [
  {
    id: 'cost',
    title: 'Zero Fuel Cost',
    subtitle: 'Eliminate Recurring Opex',
    description: 'Stop paying for petrol, diesel, or grid electricity. IEG systems generate power internally, removing the single largest recurring expense from your balance sheet.',
    icon: <TrendingDown className="w-8 h-8 text-[#2FE89B]" />,
    stat: '100% Savings'
  },
  {
    id: 'independence',
    title: 'Grid Independence',
    subtitle: 'Sovereign Infrastructure',
    description: 'Decouple from aging grid infrastructure, rising tariffs, and blackouts. IEG provides total autonomy, allowing operations in remote or undeveloped regions.',
    icon: <Zap className="w-8 h-8 text-[#2FE89B]" />,
    stat: '24/7 Uptime'
  },
  {
    id: 'risk',
    title: 'Risk Mitigation',
    subtitle: 'Future-Proof Assets',
    description: 'Bypass geopolitical fuel scarcity and carbon taxation. IEG systems are immune to global oil price shocks and changing environmental regulations.',
    icon: <ShieldCheck className="w-8 h-8 text-[#2FE89B]" />,
    stat: 'Zero Emissions'
  },
];

export default function EconomicAdvantage() {
  return (
    <section className="relative bg-[#050d0a] py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }} 
        />
        {/* Soft center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2FE89B]/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          {/* Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#2FE89B]/50"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#2FE89B] uppercase">
              The Advantage
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            Why Switch to IEG?
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            A fundamental shift in energy economics. Move from <span className="text-red-400/80">renting power</span> to <span className="text-[#2FE89B]">owning generation</span>.
          </p>
        </motion.div>

        {/* 2. Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-[#2FE89B]/30 transition-all duration-500 flex flex-col">
                
                {/* Icon & Stat Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#2FE89B] bg-[#2FE89B]/10 px-3 py-1 rounded-full border border-[#2FE89B]/20">
                    {item.stat}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#2FE89B] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm text-gray-500 font-medium tracking-wide uppercase mb-4">
                    {item.subtitle}
                  </div>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Visual Anchor (Bottom Line) */}
                <div className="mt-8 h-px w-full bg-white/10 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[#2FE89B] w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Bottom Call to Action area */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="mt-16 flex justify-center md:justify-start"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm hover:text-[#2FE89B] transition-colors cursor-pointer group">
            <span className="uppercase tracking-widest font-bold">See Financial Projections</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}