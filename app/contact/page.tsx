'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-[#050d0a] min-h-screen text-white selection:bg-[#2FE89B] selection:text-[#050d0a] overflow-hidden relative">
      
      {/* --- Background Visuals (The "World's Best" Touch) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* World Map Texture */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }} />
        
        {/* Glowing Orbs for "Global Reach" */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2FE89B]/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: The Pitch & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-[#2FE89B]"></span>
              <span className="text-xs font-bold tracking-[0.3em] text-[#2FE89B] uppercase">
                Direct Access
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Initiate <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Collaboration.
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 font-light mb-16 leading-relaxed max-w-lg">
              Vidaka Powers is strictly screening partners for our 
              <span className="text-white font-medium"> manufacturing SPV </span> 
              and <span className="text-white font-medium"> international licensing </span>.
            </p>

            {/* Contact Cards - Redesigned */}
            <div className="space-y-6">
              
              {/* HQ Card */}
              <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-[#2FE89B]/40 transition-all duration-300 flex items-start gap-5">
                <div className="p-3 bg-[#2FE89B]/10 rounded-full text-[#2FE89B] group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1 group-hover:text-[#2FE89B] transition-colors">Global HQ</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Dahisar East, Mumbai, Maharashtra<br/>
                    India
                  </p>
                </div>
              </div>

              {/* Direct Line Card */}
              <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-[#2FE89B]/40 transition-all duration-300 flex items-start gap-5">
                <div className="p-3 bg-[#2FE89B]/10 rounded-full text-[#2FE89B] group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1 group-hover:text-[#2FE89B] transition-colors">Direct Line</h3>
                  <p className="text-gray-400 font-light">
                    +91 77395 44789
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Available 9:00 - 18:00 IST</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-[#2FE89B]/40 transition-all duration-300 flex items-start gap-5">
                <div className="p-3 bg-[#2FE89B]/10 rounded-full text-[#2FE89B] group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1 group-hover:text-[#2FE89B] transition-colors">Executive Email</h3>
                  <p className="text-gray-400 font-light">
                    ajaykumarchoudhary07@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: The "Investor-Grade" Form */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
          >
            {/* Glass Container */}
            <div className="bg-[#0b1210]/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-semibold text-white">Request Access</h3>
                <Globe className="w-6 h-6 text-gray-500" />
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:border-[#2FE89B] focus:bg-white/[0.05] outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Organization</label>
                    <input type="text" placeholder="Company Ltd" className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:border-[#2FE89B] focus:bg-white/[0.05] outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:border-[#2FE89B] focus:bg-white/[0.05] outline-none transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Inquiry Type</label>
                  <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:border-[#2FE89B] focus:bg-white/[0.05] outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-[#050d0a]">Strategic Investment (SPV Model)</option>
                    <option className="bg-[#050d0a]">Manufacturing Partnership</option>
                    <option className="bg-[#050d0a]">Technology Licensing</option>
                    <option className="bg-[#050d0a]">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                  <textarea rows={4} placeholder="Brief details about your proposal..." className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:border-[#2FE89B] focus:bg-white/[0.05] outline-none transition-all resize-none"></textarea>
                </div>

                <button className="w-full group bg-[#2FE89B] hover:bg-[#25c482] text-[#050d0a] font-bold text-sm uppercase tracking-widest py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(47,232,155,0.2)] hover:shadow-[0_0_30px_rgba(47,232,155,0.4)]">
                  <span>Send Message</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}