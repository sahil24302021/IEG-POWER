'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Building, Factory, FileSignature } from 'lucide-react';

export default function Roadmap() {
  const steps = [
    { 
      id: 1, 
      title: "MoU Signing", 
      date: "Day 0", 
      icon: <FileSignature />,
      desc: "Formal agreement with Strategic Investor." 
    },
    { 
      id: 2, 
      title: "SPV Formation", 
      date: "Day 30", 
      icon: <CheckCircle />,
      desc: "Incorporation of Private Limited Subsidiary." 
    },
    { 
      id: 3, 
      title: "HQ Acquisition", 
      date: "Day 60", 
      icon: <Building />,
      desc: "Corporate office in Mumbai CBD." 
    },
    { 
      id: 4, 
      title: "Manufacturing Live", 
      date: "Day 180", 
      icon: <Factory />,
      desc: "High-volume facility operational in Gujarat." 
    },
  ];

  return (
    <section className="py-24 bg-[#050d0a] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Execution Roadmap</h2>
          <p className="text-gray-400">The 180-day path from Agreement to Production.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-[#020604] border border-white/10 p-8 rounded-2xl hover:border-[#2FE89B] transition-colors"
              >
                <div className="w-12 h-12 bg-[#2FE89B]/10 rounded-full flex items-center justify-center text-[#2FE89B] mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="text-[#2FE89B] font-mono text-xs uppercase tracking-widest mb-2">{step.date}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}