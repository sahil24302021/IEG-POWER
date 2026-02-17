'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { FileText, Cpu, Zap, ShieldCheck } from 'lucide-react';

export default function TechnologyPage() {
  return (
    <main className="bg-[#050d0a] min-h-screen text-white selection:bg-[#2FE89B] selection:text-[#050d0a]">
      <div className="pt-32 pb-20 container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#2FE89B]/50"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#2FE89B] uppercase">
              Core IP & Research
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight">
            The Science of <span className="text-[#2FE89B]">Self-Regeneration</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
            IEG technology is not a perpetual motion machine. It is an advanced 
            <span className="text-white font-medium"> internal energy regeneration system </span>
            that minimizes entropy and recycles output power through a patented closed-loop architecture.
          </p>
        </motion.div>

        {/* Patents Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Patent 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#2FE89B]/50 transition-colors group"
          >
            <div className="flex justify-between items-start mb-8">
              <FileText className="w-10 h-10 text-[#2FE89B]" />
              <span className="px-4 py-1 rounded-full bg-[#2FE89B]/10 text-[#2FE89B] text-xs font-bold tracking-widest border border-[#2FE89B]/20">
                GRANTED 2022
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Patent No. 391051</h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">Internal Energy Generation</p>
            <p className="text-gray-300 font-light leading-relaxed">
              The foundational patent covering the method of autonomous power generation without external fuel dependency. 
              Effective from 2011, this IP secures the core architecture of the IEG generator.
            </p>
          </motion.div>

          {/* Patent 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#2FE89B]/50 transition-colors group"
          >
            <div className="flex justify-between items-start mb-8">
              <ShieldCheck className="w-10 h-10 text-[#2FE89B]" />
              <span className="px-4 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-bold tracking-widest border border-white/10">
                GRANTED 2025
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Regeneration Protocol</h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">Internal Energy Regeneration</p>
            <p className="text-gray-300 font-light leading-relaxed">
              The advanced protocol that maximizes system efficiency by capturing and recirculating latent energy. 
              This breakthrough allows for continuous operation cycles required for mobility and industrial use.
            </p>
          </motion.div>
        </div>

        {/* The "How It Works" Deep Dive */}
        <div className="border-t border-white/10 pt-24">
           <h2 className="text-3xl md:text-5xl font-semibold mb-16">System Architecture</h2>
           
           <div className="space-y-24">
             {/* Step 1 */}
             <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="w-full md:w-1/2">
                 <div className="text-[#2FE89B] font-mono text-xl mb-4">01.</div>
                 <h3 className="text-3xl font-bold mb-6">Magnetic Flux Stabilization</h3>
                 <p className="text-gray-400 text-lg font-light leading-relaxed">
                   Unlike conventional generators that rely on combustion to rotate a stator, IEG uses a 
                   patented magnetic arrangement to induce electron flow with minimal mechanical resistance.
                 </p>
               </div>
               <div className="w-full md:w-1/2 h-64 bg-gradient-to-r from-[#2FE89B]/20 to-transparent rounded-2xl border border-[#2FE89B]/30 flex items-center justify-center">
                 <span className="text-[#2FE89B] tracking-widest uppercase text-sm">[Diagram: Flux Architecture]</span>
               </div>
             </div>

             {/* Step 2 */}
             <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
               <div className="w-full md:w-1/2">
                 <div className="text-[#2FE89B] font-mono text-xl mb-4">02.</div>
                 <h3 className="text-3xl font-bold mb-6">The Regenerative Loop</h3>
                 <p className="text-gray-400 text-lg font-light leading-relaxed">
                   A portion of the output energy is conditioned and fed back into the system's exciter field. 
                   This creates a self-sustaining resonance that maintains the magnetic field without draining a battery.
                 </p>
               </div>
               <div className="w-full md:w-1/2 h-64 bg-gradient-to-l from-[#2FE89B]/20 to-transparent rounded-2xl border border-[#2FE89B]/30 flex items-center justify-center">
                 <span className="text-[#2FE89B] tracking-widest uppercase text-sm">[Diagram: Feedback Loop]</span>
               </div>
             </div>
           </div>
        </div>

      </div>
    </main>
  );
}