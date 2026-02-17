'use client';

import { motion } from 'framer-motion';
import { Factory, AlertTriangle, ShieldCheck, TrendingDown } from 'lucide-react';

export default function IndustrialEnergyPage() {
  return (
    <main className="bg-[#050d0a] min-h-screen text-white selection:bg-[#2FE89B] selection:text-[#050d0a]">
      <div className="pt-32 pb-20 container mx-auto px-6 md:px-12">
        
        {/* 1. Hero Section */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#2FE89B]/50"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#2FE89B] uppercase">
              Industrial Sector
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold mb-8">
            Megawatt-Scale <span className="text-[#2FE89B]">Independence</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
            For heavy industries, grid failure means revenue loss. IEG Industrial Modules provide 
            decentralized, baseload power that insulates your operations from blackouts and rising tariffs.
          </p>
        </div>

        {/* 2. The Problem/Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          
          <div className="p-8 bg-white/[0.03] rounded-2xl border border-white/10 group hover:border-red-500/30 transition-colors">
            <AlertTriangle className="w-10 h-10 text-red-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Grid Instability</h3>
            <p className="text-gray-400 leading-relaxed">
              Industrial zones often suffer from voltage fluctuations and unscheduled outages, damaging sensitive machinery and halting production lines.
            </p>
          </div>

          <div className="p-8 bg-white/[0.03] rounded-2xl border border-white/10 group hover:border-[#2FE89B]/30 transition-colors">
            <TrendingDown className="w-10 h-10 text-[#2FE89B] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Zero OpEx</h3>
            <p className="text-gray-400 leading-relaxed">
              Unlike Diesel Gensets (DG) which burn expensive fuel every hour, IEG systems have near-zero operating costs once installed.
            </p>
          </div>

          <div className="p-8 bg-white/[0.03] rounded-2xl border border-white/10 group hover:border-[#2FE89B]/30 transition-colors">
            <ShieldCheck className="w-10 h-10 text-[#2FE89B] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Compliance Ready</h3>
            <p className="text-gray-400 leading-relaxed">
              Meet strict carbon reduction targets and Environmental, Social, and Governance (ESG) mandates immediately upon installation.
            </p>
          </div>

        </div>

        {/* 3. Specs for Heavy Industry */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Industrial Module Specifications</h3>
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <tbody className="divide-y divide-white/5">
                <tr className="bg-white/[0.02]">
                  <td className="p-4 text-gray-400">Unit Capacity</td>
                  <td className="p-4 text-white font-mono">100kW - 1MW (Scalable)</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-400">Scalability</td>
                  <td className="p-4 text-white font-mono">Modular Array (Up to 100MW+)</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="p-4 text-gray-400">Output Voltage</td>
                  <td className="p-4 text-white font-mono">11kV / 33kV (High Tension)</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-400">Uptime Guarantee</td>
                  <td className="p-4 text-white font-mono">99.9% Availability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}