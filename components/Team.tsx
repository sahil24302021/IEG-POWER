'use client';

import { motion } from 'framer-motion';
import { User, TrendingUp, Factory, Cpu, Globe, ShieldCheck, Settings, Users } from 'lucide-react';

// Data derived from content.pdf (Page 26-27)
const executiveBoard = [
  {
    name: 'Mansukh Vaghasiya',
    role: 'Chairman',
    focus: 'Corporate Governance & Strategy',
    icon: <ShieldCheck className="w-6 h-6 text-[#2FE89B]" />,
  },
  {
    name: 'Ajay Choudhary',
    role: 'Managing Director',
    focus: 'Inventor & Patent Owner',
    icon: <Cpu className="w-6 h-6 text-[#2FE89B]" />,
  },
  {
    name: 'Rajesh Vaghasiya',
    role: 'Director Finance',
    focus: 'Capital Structure & Financial Control',
    icon: <TrendingUp className="w-6 h-6 text-[#2FE89B]" />,
  },
];

const operationalDirectors = [
  {
    name: 'Neena Nagle',
    role: 'Director Operations',
    icon: <Settings className="w-5 h-5 text-gray-400" />,
  },
  {
    name: 'Vijay Gupta',
    role: 'Director Production (Electronics)',
    icon: <Cpu className="w-5 h-5 text-gray-400" />,
  },
  {
    name: 'Nitin Vyas',
    role: 'Director Production (Mechanical)',
    icon: <Factory className="w-5 h-5 text-gray-400" />,
  },
  {
    name: 'Rajeshwar Nagle',
    role: 'Director IT',
    icon: <Globe className="w-5 h-5 text-gray-400" />,
  },
  {
    name: 'Vinay Salodkar',
    role: 'Director Marketing (Technical)',
    icon: <Users className="w-5 h-5 text-gray-400" />,
  },
  {
    name: 'Nilesh Vyas',
    role: 'Director Marketing',
    icon: <Users className="w-5 h-5 text-gray-400" />,
  },
];

export default function Team() {
  return (
    <section className="relative bg-[#050d0a] py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }} 
        />
        {/* Subtle top-right glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2FE89B]/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          {/* Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#2FE89B]/50"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#2FE89B] uppercase">
              Corporate Governance
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            Leadership & Board
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            A structure built for scale. Combining <span className="text-white">deep-tech innovation</span> with <span className="text-white">industrial manufacturing expertise</span>.
          </p>
        </motion.div>

        {/* 2. Executive Board (Featured Row) */}
        <div className="mb-16">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8 pl-1">
            Executive Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveBoard.map((exec, index) => (
              <motion.div
                key={exec.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-[#2FE89B]/30 transition-all duration-300">
                  
                  {/* Icon Badge */}
                  <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {exec.icon}
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#2FE89B] transition-colors">
                    {exec.name}
                  </h4>
                  <div className="text-[#2FE89B] font-medium text-sm tracking-wide uppercase mb-4">
                    {exec.role}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4 mt-4">
                    {exec.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Operational Directors (Grid) */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8 pl-1">
            Operational Directors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalDirectors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-colors duration-300"
              >
                <div className="p-3 rounded-full bg-white/5 text-gray-400">
                  {director.icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    {director.name}
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider font-medium mt-1">
                    {director.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Governance Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-white/10 flex items-center gap-3 text-gray-500 text-xs md:text-sm"
        >
          <div className="w-2 h-2 rounded-full bg-[#2FE89B] animate-pulse" />
          <span className="uppercase tracking-widest font-medium">Verified Operational Structure</span>
        </motion.div>

      </div>
    </section>
  );
}