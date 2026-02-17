'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, User } from 'lucide-react';

export default function Founder() {
  return (
    <section className="relative py-24 bg-[#050d0a] overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none">
        <Quote className="w-96 h-96 text-white" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* VISUAL: Solo Profile Photo (Full Color, No Animation) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            {/* The Frame */}
            <div className="relative rounded-2xl p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                 
                 {/* IMAGE: Full Color Always */}
                 <Image 
                   src="/assets/images/founder.jpg" 
                   alt="Ajay Choudhary - Founder" 
                   fill 
                   className="object-cover"
                 />
                 
                 {/* Subtle Overlay (Gradient at bottom only for text readability) */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050d0a] via-transparent to-transparent opacity-40"></div>

                 {/* Badge */}
                 <div className="absolute top-4 right-4 bg-[#2FE89B] text-[#050d0a] p-2 rounded-lg shadow-lg">
                   <User className="w-6 h-6" />
                 </div>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-[#2FE89B] text-xs font-bold uppercase tracking-widest">Managing Director</p>
                <p className="text-gray-400 text-xs mt-1">Vidaka Powers Ltd.</p>
              </div>
            </div>

            {/* Decoration behind image */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#2FE89B]/10 blur-3xl rounded-full -z-10"></div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
               <span className="h-px w-12 bg-[#2FE89B]"></span>
               <span className="text-[#2FE89B] font-bold uppercase tracking-widest text-xs">The Visionary</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              30 Years of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Relentless Innovation.</span>
            </h2>
            
            <div className="relative pl-8 border-l-2 border-[#2FE89B]/30 mb-10">
              <Quote className="absolute -top-2 -left-3 w-6 h-6 text-[#2FE89B] bg-[#050d0a]" />
              <p className="text-xl text-gray-300 font-light leading-relaxed italic">
                "We didn't just build a machine; we rewrote the rules of energy regeneration. 
                Our mission is to provide fuel-less, grid-independent power to every corner of the globe."
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xl">
                AC
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Ajay Choudhary</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wider">Inventor & Patent Holder</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}