'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Users, ArrowRight, DollarSign, Building } from 'lucide-react';
import Link from 'next/link';

export default function InvestorPage() {
  return (
    <main className="bg-[#050d0a] min-h-screen text-white pt-24">
      
      {/* 1. HERO: The Opportunity */}
      <section className="relative py-20 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2FE89B]/30 bg-[#2FE89B]/10 mb-8">
            <TrendingUp className="w-4 h-4 text-[#2FE89B]" />
            <span className="text-[#2FE89B] text-xs font-bold tracking-widest uppercase">CAGR 26.05% Growth</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The <span className="text-[#2FE89B]">SPV</span> Partnership Model.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We don't just ask for funds. We offer a structured Joint Venture (Subsidiary Company) where you hold equity, control, and board representation.
          </p>
        </div>
      </section>

      {/* 2. THE DEAL STRUCTURE (80/20 SPLIT) */}
      <section className="py-24 bg-[#020604]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Graph (Pure CSS - No Image Required) */}
            <div className="relative aspect-square max-w-md mx-auto">
               <div className="absolute inset-0 rounded-full border-[20px] border-white/5"></div>
               {/* 80% Segment */}
               <div className="absolute inset-0 rounded-full border-[20px] border-[#2FE89B] border-t-transparent border-l-transparent rotate-45"></div>
               
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-6xl font-bold text-white">80%</span>
                 <span className="text-gray-400 uppercase tracking-widest text-sm mt-2">Investor Fund</span>
               </div>

               {/* Floating Label */}
               <div className="absolute top-0 right-0 bg-[#050d0a] border border-white/20 p-4 rounded-xl shadow-xl">
                 <div className="text-[#2FE89B] font-bold text-xl">20%</div>
                 <div className="text-xs text-gray-400">Project Loan</div>
               </div>
            </div>

            {/* Text Logic */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Capital Structure</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2FE89B]/10 flex items-center justify-center text-[#2FE89B] shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">80% Investor Contribution</h3>
                    <p className="text-gray-400 mt-2">The Strategic Investor funds the majority of the project CAPEX. This equity ensures ownership and profit-sharing rights.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">20% Institutional Debt</h3>
                    <p className="text-gray-400 mt-2">The remaining capital is raised via project loans from reputed financial institutions, minimizing equity dilution.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">IP Asset Contribution</h3>
                    <p className="text-gray-400 mt-2">Vidaka Powers Ltd contributes the Patent (No. 391051) and Technology as its capital stake.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GOVERNANCE & CONTROL */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-16">Board of Directors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Director 1 */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#2FE89B]/50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Investor Nominee</h3>
              <p className="text-sm text-gray-400">1 Director Seat</p>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                Appointed by you to oversee financial decisions and operations.
              </p>
            </div>

            {/* Director 2 */}
            <div className="p-8 rounded-3xl bg-[#2FE89B]/10 border border-[#2FE89B]/30 relative transform scale-105 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#2FE89B] text-black text-xs font-bold uppercase tracking-widest rounded-full">
                Joint Control
              </div>
              <div className="w-16 h-16 mx-auto bg-[#2FE89B] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Independent Director</h3>
              <p className="text-sm text-[#2FE89B]">Neutral Appointment</p>
              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                Appointed jointly by both parties to ensure fair governance and dispute resolution.
              </p>
            </div>

            {/* Director 3 */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#2FE89B]/50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Vidaka Nominee</h3>
              <p className="text-sm text-gray-400">1 Director Seat</p>
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                Represents the technology and manufacturing expertise.
              </p>
            </div>

          </div>

          <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/5 inline-block text-left max-w-2xl">
            <h4 className="flex items-center gap-2 text-white font-bold mb-2">
              <Shield className="w-5 h-5 text-[#2FE89B]" /> Banking Authority
            </h4>
            <p className="text-gray-400 text-sm">
              "All bank transactions and official signatories shall be <span className="text-white font-bold">jointly authorized</span> by the Director representing IEG and the Director representing the Investor."
            </p>
          </div>

        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-[#2FE89B] text-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Market Size: $110 Billion</h2>
          <p className="text-xl mb-8 font-medium max-w-2xl mx-auto">
            The Indian EV market is growing at 26% CAGR. Join us to capture the market with a superior, fuel-less alternative.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">
            Start Due Diligence <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}