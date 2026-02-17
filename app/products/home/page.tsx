'use client';

import { motion } from 'framer-motion';
import { Sun, CloudRain, Zap, Home, Battery } from 'lucide-react';

export default function HomeEnergyPage() {
  return (
    <main className="bg-[#050d0a] min-h-screen text-white selection:bg-[#2FE89B] selection:text-[#050d0a]">
      <div className="pt-32 pb-20 container mx-auto px-6 md:px-12">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#2FE89B]/50"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#2FE89B] uppercase">
              Residential Sector
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold mb-8">
            Beyond <span className="text-[#2FE89B]">Solar</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
            Solar energy is intermittent and weather-dependent. IEG provides 
            <span className="text-white font-medium"> true energy independence </span> 
            by generating continuous power, day or night, rain or shine.
          </p>
        </div>

        {/* 2. Solar Comparison (The "Kill Shot" for Investors) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          
          {/* Solar Limitation Card */}
          <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-10 opacity-10"><Sun className="w-32 h-32 text-yellow-500" /></div>
             <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
               Traditional Solar
               <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold tracking-wide uppercase border border-red-500/20">Legacy</span>
             </h3>
             <ul className="space-y-6">
               <li className="flex gap-4 items-start">
                 <CloudRain className="w-6 h-6 text-red-400 shrink-0" />
                 <div>
                   <span className="block text-white font-semibold text-lg">Weather Dependent</span>
                   <span className="text-gray-400 font-light">Production drops to near zero during monsoon, night, or heavy cloud cover.</span>
                 </div>
               </li>
               <li className="flex gap-4 items-start">
                 <Battery className="w-6 h-6 text-yellow-400 shrink-0" />
                 <div>
                   <span className="block text-white font-semibold text-lg">Expensive Storage</span>
                   <span className="text-gray-400 font-light">Requires massive, costly Lithium-ion battery banks to provide power at night.</span>
                 </div>
               </li>
               <li className="flex gap-4 items-start">
                 <Home className="w-6 h-6 text-gray-400 shrink-0" />
                 <div>
                   <span className="block text-white font-semibold text-lg">Roof Space Intensive</span>
                   <span className="text-gray-400 font-light">Requires hundreds of square feet of unobstructed rooftop area.</span>
                 </div>
               </li>
             </ul>
          </div>

          {/* IEG Advantage Card */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-[#2FE89B]/10 to-transparent border border-[#2FE89B]/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-20"><Zap className="w-32 h-32 text-[#2FE89B]" /></div>
             <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
               IEG Home Unit
               <span className="px-3 py-1 rounded-full bg-[#2FE89B]/20 text-[#2FE89B] text-xs font-bold tracking-wide uppercase border border-[#2FE89B]/30">The Future</span>
             </h3>
             <ul className="space-y-6">
               <li className="flex gap-4 items-start">
                 <div className="mt-1 w-2 h-2 bg-[#2FE89B] rounded-full" />
                 <div>
                   <span className="block text-white font-semibold text-lg">24/7 Continuous Power</span>
                   <span className="text-gray-300 font-light">Operates at 100% capacity regardless of time, weather, or season.</span>
                 </div>
               </li>
               <li className="flex gap-4 items-start">
                 <div className="mt-1 w-2 h-2 bg-[#2FE89B] rounded-full" />
                 <div>
                   <span className="block text-white font-semibold text-lg">Compact Footprint</span>
                   <span className="text-gray-300 font-light">Size of a standard washing machine. Can be installed in a basement or garage.</span>
                 </div>
               </li>
               <li className="flex gap-4 items-start">
                 <div className="mt-1 w-2 h-2 bg-[#2FE89B] rounded-full" />
                 <div>
                   <span className="block text-white font-semibold text-lg">No External Charging</span>
                   <span className="text-gray-300 font-light">Internal regeneration means it never needs grid input or fuel top-ups.</span>
                 </div>
               </li>
             </ul>
          </div>

        </div>

        {/* 3. Specs */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Residential Unit Specifications</h3>
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <tbody className="divide-y divide-white/5">
                <tr className="bg-white/[0.02]">
                  <td className="p-4 text-gray-400">Capacity</td>
                  <td className="p-4 text-white font-mono">5kW / 10kW / 15kW</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-400">Output Phase</td>
                  <td className="p-4 text-white font-mono">Single Phase (230V) / Three Phase (415V)</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="p-4 text-gray-400">Maintenance</td>
                  <td className="p-4 text-white font-mono">Annual Checkup Only (Brushless Design)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}