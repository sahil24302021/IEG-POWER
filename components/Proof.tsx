'use client';

import { motion } from 'framer-motion';
import { FileCheck, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

export default function Proof() {
  return (
    <section className="relative py-32 bg-[#020604] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#2FE89B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2FE89B]/30 bg-[#2FE89B]/10 text-[#2FE89B] text-[10px] font-bold tracking-widest uppercase mb-6">
            <ShieldCheck className="w-3 h-3" />
            <span>Govt. of India Certified</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Backed by <span className="text-[#2FE89B]">Science</span>,<br />
            Protected by Law.
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            We don't just have a concept. We have a government-granted patent, a working prototype, and presidential recognition.
          </p>
        </div>

        {/* THE GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: The Patent */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-[#2FE89B]/50 transition-all duration-500"
          >
            {/* Image Area */}
            <div className="relative aspect-[4/5] overflow-hidden">
               {/* High-Quality Placeholder for Patent */}
               <img 
                 src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop" 
                 alt="Patent Document" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020604] via-[#020604]/20 to-transparent opacity-90" />
               
               {/* Icon Overlay */}
               <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-[#2FE89B]/20 backdrop-blur-md border border-[#2FE89B]/30 flex items-center justify-center text-[#2FE89B]">
                 <FileCheck className="w-6 h-6" />
               </div>
            </div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2FE89B] text-xs font-bold uppercase tracking-widest">Intellectual Property</span>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#2FE89B] transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Patent No. 391051</h3>
              <p className="text-sm text-gray-400 font-light border-l-2 border-[#2FE89B] pl-3">
                Granted 2022 (Effective 2011)<br/>
                Govt. of India Intellectual Property
              </p>
            </div>
          </motion.div>

          {/* Card 2: The Prototype */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-[#2FE89B]/50 transition-all duration-500"
          >
            {/* Image Area */}
            <div className="relative aspect-[4/5] overflow-hidden">
               {/* High-Quality Placeholder for Prototype */}
               <img 
                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
                 alt="Working Prototype" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020604] via-[#020604]/20 to-transparent opacity-90" />
               
               <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center text-blue-400">
                 <ShieldCheck className="w-6 h-6" />
               </div>
            </div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Hardware</span>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Functional Prototype</h3>
              <p className="text-sm text-gray-400 font-light border-l-2 border-blue-500 pl-3">
                Working Model (2011-Present)<br/>
                Continuous Self-Regeneration Demo
              </p>
            </div>
          </motion.div>

          {/* Card 3: The Recognition */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-[#2FE89B]/50 transition-all duration-500"
          >
            {/* Image Area */}
            <div className="relative aspect-[4/5] overflow-hidden">
               {/* High-Quality Placeholder for Award */}
               <img 
                 src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop" 
                 alt="Presidential Letter" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020604] via-[#020604]/20 to-transparent opacity-90" />
               
               <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 flex items-center justify-center text-yellow-500">
                 <Award className="w-6 h-6" />
               </div>
            </div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Recognition</span>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-yellow-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Presidential Honor</h3>
              <p className="text-sm text-gray-400 font-light border-l-2 border-yellow-500 pl-3">
                Letter from Rashtrapati Bhavan<br/>
                Dr. A.P.J. Abdul Kalam (2005)
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}