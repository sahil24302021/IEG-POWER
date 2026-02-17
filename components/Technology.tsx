'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, RotateCw, Activity, Cpu } from 'lucide-react';

export default function Technology() {
  return (
    <section className="relative py-32 bg-[#050d0a] overflow-hidden border-t border-white/5">
      
      {/* Clean Background: Just a subtle central glow, no messy grids */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2FE89B]/5 blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#2FE89B]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#2FE89B] uppercase">
              Patent No. 391051
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2FE89B] to-emerald-600">Regenerative Loop</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Our proprietary architecture captures latent magnetic energy and recirculates it, creating a self-sustaining power resonance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* THE "DIGITAL REACTOR" (CSS Animation - No Image Needed) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* The Black Glass Box */}
            <div className="relative aspect-square md:aspect-video bg-[#020604] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(47,232,155,0.05)] flex items-center justify-center">
               
               {/* 1. Outer Field (Static) */}
               <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full"></div>
               
               {/* 2. Rotating Magnetic Field (Slow Spin) */}
               <div className="absolute w-[60%] h-[60%] border border-[#2FE89B]/20 rounded-full animate-[spin_10s_linear_infinite]">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-[#2FE89B] rounded-full shadow-[0_0_15px_#2FE89B]"></div>
               </div>

               {/* 3. Reverse Counter-Flow (Fast Spin) */}
               <div className="absolute w-[40%] h-[40%] border-2 border-dashed border-[#2FE89B]/40 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>

               {/* 4. The Core (Pulse) */}
               <div className="relative z-10 flex flex-col items-center justify-center">
                 <div className="w-20 h-20 bg-[#2FE89B]/10 rounded-full flex items-center justify-center border border-[#2FE89B] animate-pulse shadow-[0_0_30px_rgba(47,232,155,0.2)]">
                   <Zap className="w-8 h-8 text-[#2FE89B]" />
                 </div>
                 <div className="mt-4 px-3 py-1 bg-[#2FE89B]/10 border border-[#2FE89B]/20 rounded-full">
                   <span className="text-[#2FE89B] text-[10px] font-bold tracking-[0.2em] uppercase">System Active</span>
                 </div>
               </div>

               {/* Data Overlay (HUD) */}
               <div className="absolute top-6 left-6 flex flex-col gap-1">
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest">Input Voltage</div>
                 <div className="text-white font-mono text-sm">0.0V (Self)</div>
               </div>
               <div className="absolute bottom-6 right-6 flex flex-col gap-1 text-right">
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest">Output Stable</div>
                 <div className="text-[#2FE89B] font-mono text-sm">60.0V / 50Hz</div>
               </div>

            </div>
          </motion.div>

          {/* THE EXPLANATION */}
          <div className="space-y-12">
            
            <div className="group flex gap-6">
              <div className="mt-1 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#2FE89B] group-hover:text-black transition-all duration-300">
                <RotateCw className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">1. Input Stabilization</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  The system initiates with a micro-pulse that aligns the magnetic domains within the stator, reducing entropy and preparing the core.
                </p>
              </div>
            </div>

            <div className="group flex gap-6">
              <div className="mt-1 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#2FE89B] group-hover:text-black transition-all duration-300">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">2. The Regenerative Loop</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  Latent back-EMF is captured via our patented circuit. Instead of being lost as heat, it is phase-corrected and fed back into the exciter field.
                </p>
              </div>
            </div>

            <div className="group flex gap-6">
              <div className="mt-1 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#2FE89B] group-hover:text-black transition-all duration-300">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">3. Continuous Output</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  The magnetic field becomes self-sustaining. The system delivers clean AC/DC power indefinitely, independent of external fuel.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <button className="flex items-center gap-3 text-white border-b border-[#2FE89B] pb-1 hover:text-[#2FE89B] transition-colors text-sm uppercase tracking-widest font-bold">
                <span>View Schematic Diagram</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}