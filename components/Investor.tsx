'use client';

import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight, ShieldCheck } from 'lucide-react';

export default function InvestorEngagement() {
  return (
    <section className="relative bg-[#050d0a] py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }} 
        />
        {/* Strong bottom glow to highlight the CTA area */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#2FE89B]/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          
          {/* 1. Header & Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
             {/* Label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#2FE89B]/50"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#2FE89B] uppercase">
                Investor Relations
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-semibold text-white mb-8 tracking-tight leading-[1.1]">
              Engage With IEG
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
              For investors, partners, and institutions exploring the <span className="text-white">future of energy architecture.</span>
            </p>
          </motion.div>

          {/* 2. Context Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 border-l-2 border-[#2FE89B] pl-8" 
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                IEG is selectively engaging with strategic investors and partners to accelerate 
                deployment across energy, mobility, and infrastructure sectors.
              </p>
              
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Detailed technical documentation, patents, and project plans are available upon request.
              </p>
            </div>
          </motion.div>

          {/* 3. CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            {/* Primary Action */}
            <button className="group relative px-8 py-5 rounded-full bg-[#2FE89B] text-[#050d0a] font-bold text-sm tracking-wider uppercase hover:bg-[#25c482] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(47,232,155,0.3)] hover:shadow-[0_0_30px_rgba(47,232,155,0.5)]">
              <Mail className="w-5 h-5" />
              <span>Request Discussion</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Action */}
            <button className="group px-8 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm tracking-wider uppercase hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-3">
              <Download className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span>Download Overview (PDF)</span>
            </button>
          </motion.div>

          {/* 4. Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 pt-8 border-t border-white/10 flex items-center gap-3 text-gray-500 text-xs md:text-sm font-medium tracking-widest uppercase"
          >
            <ShieldCheck className="w-4 h-4 text-[#2FE89B]" />
            <span>Confidentiality Agreements Required for Deep-Dive Access.</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}