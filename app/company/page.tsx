'use client';

import { motion } from 'framer-motion';
import { Flag, Award, Zap, Building2, User, TrendingUp, Settings, Monitor, Briefcase, Users } from 'lucide-react';

export default function CompanyPage() {
  
  // 1. The Historical Timeline
  const timeline = [
    { year: '1993', title: 'Inception', desc: 'Ajay Choudhary begins fundamental research on internal energy generation systems.', icon: <Zap /> },
    { year: '2003', title: 'The Breakthrough', desc: 'First successful prototype of a self-charging generator created.', icon: <Flag /> },
    { year: '2004', title: 'Presidential Recognition', desc: 'Technology presented to Dr. A.P.J. Abdul Kalam, receiving commendation.', icon: <Award /> },
    { year: '2011', title: 'Prototype Refinement', desc: 'Advanced iteration of the IEG system developed for mobility applications.', icon: <Zap /> },
    { year: '2022', title: 'Patent Granted', desc: 'Patent No. 391051 officially granted, securing IP rights from 2011.', icon: <Award /> },
    { year: '2024', title: 'Corporate Formalization', desc: 'Vidaka Powers Ltd established to commercialize the technology globally.', icon: <Building2 /> },
  ];

  // 2. The Board of Directors (Data from Content.pdf Page 26)
  const team = [
    { name: 'Mansukh Vaghasiya', role: 'Chairman', icon: <User /> },
    { name: 'Rajesh Vaghasiya', role: 'Director Finance', icon: <TrendingUp /> },
    { name: 'Vijay Gupta', role: 'Director Production (Electronics)', icon: <Settings /> },
    { name: 'Nitin Vyas', role: 'Director Production (Mechanical)', icon: <Settings /> },
    { name: 'Rajeshwar Nagle', role: 'Director IT', icon: <Monitor /> },
    { name: 'Neena Nagle', role: 'Director Operations', icon: <Briefcase /> },
  ];

  return (
    <main className="bg-[#050d0a] min-h-screen text-white selection:bg-[#2FE89B] selection:text-[#050d0a]">
      <div className="pt-32 pb-20 container mx-auto px-6 md:px-12">
        
        {/* --- SECTION 1: HEADER --- */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#2FE89B]/50"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#2FE89B] uppercase">
              Our Legacy
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold mb-8">The Vidaka Journey</h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
            From a garage experiment in 1993 to a patented deep-tech architecture in 2026. 
            Three decades of relentless pursuit of the fuel-less future.
          </p>
        </div>

        {/* --- SECTION 2: TIMELINE --- */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-16 mb-32">
          {timeline.map((item, index) => (
            <motion.div 
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Dot */}
              <div className="absolute -left-3 top-0 w-6 h-6 bg-[#050d0a] border border-[#2FE89B] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#2FE89B] rounded-full" />
              </div>

              {/* Content */}
              <div className="group">
                <span className="text-5xl font-bold text-white/5 group-hover:text-[#2FE89B]/20 transition-colors absolute -top-4 left-16 -z-10 select-none">
                  {item.year}
                </span>
                <div className="flex items-center gap-4 mb-2">
                   <div className="text-[#2FE89B]">{item.icon}</div>
                   <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400 font-light leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 3: CORPORATE LEADERSHIP (Added) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-24"
        >
          <div className="flex items-center gap-3 mb-12">
            <Users className="w-6 h-6 text-[#2FE89B]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Board of Directors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#2FE89B]/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#2FE89B]/10 flex items-center justify-center text-[#2FE89B] group-hover:scale-110 transition-transform">
                    {member.icon}
                  </div>
                  <div className="h-1 w-8 bg-[#2FE89B]/20 group-hover:w-16 group-hover:bg-[#2FE89B] transition-all duration-500 rounded-full" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-medium border-l-2 border-[#2FE89B]/50 pl-3">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}