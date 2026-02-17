'use client';

import { motion } from 'framer-motion';
import { Zap, BatteryCharging, Fuel, Check, Bike, CloudLightning } from 'lucide-react';

export default function ProductsPage() {
  
  // THE DATA: This is your biggest weapon.
  const comparisonData = [
    { feature: "Fuel Cost / Month", petrol: "₹3,500+", ev: "₹400 (Charging)", ieg: "₹0.00", highlight: true },
    { feature: "Range Limit", petrol: "300 km", ev: "150 km", ieg: "Infinite", highlight: true },
    { feature: "Refueling Time", petrol: "10 Mins", ev: "4-6 Hours", ieg: "0 Mins", highlight: true },
    { feature: "Battery Life", petrol: "N/A", ev: "3-5 Years", ieg: "10+ Years", highlight: false },
    { feature: "Grid Dependency", petrol: "High (Pumps)", ev: "High (Chargers)", ieg: "None", highlight: true },
  ];

  return (
    <main className="bg-[#050d0a] min-h-screen text-white pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2FE89B]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2FE89B]/30 bg-[#2FE89B]/10 mb-8"
          >
            <Zap className="w-4 h-4 text-[#2FE89B]" />
            <span className="text-[#2FE89B] text-xs font-bold tracking-widest uppercase">Market Disruption</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Don't Just Change Fuel.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2FE89B] to-emerald-500">Eliminate It.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The world's first vehicle that charges *while* it drives. No plugs. No pumps. No downtime.
          </p>
        </div>
      </section>

      {/* 2. THE KILL SHOT: COMPARISON TABLE */}
      <section className="py-20 bg-[#020604] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Side */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold mb-6">The Math is <br/> Undeniable.</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Why pay for electricity? Our IEG system captures magnetic flux to regenerate its own power, dropping your operating cost to effectively zero.
              </p>
              
              <div className="p-6 rounded-2xl bg-[#2FE89B]/10 border border-[#2FE89B]/20">
                <div className="text-sm text-[#2FE89B] uppercase tracking-widest font-bold mb-2">5-Year Savings</div>
                <div className="text-4xl font-bold text-white">₹1.8 Lakhs</div>
                <div className="text-xs text-gray-400 mt-2">vs. Standard Petrol Bike</div>
              </div>
            </div>

            {/* The Table */}
            <div className="lg:col-span-8">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a120f]">
                {/* Header */}
                <div className="grid grid-cols-4 bg-white/5 p-6 border-b border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <div className="col-span-1">Feature</div>
                  <div className="text-center">Petrol</div>
                  <div className="text-center">Electric (EV)</div>
                  <div className="text-center text-[#2FE89B]">IEG (Us)</div>
                </div>

                {/* Rows */}
                {comparisonData.map((row, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`grid grid-cols-4 p-6 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors ${row.highlight ? 'bg-[#2FE89B]/5' : ''}`}
                  >
                    <div className="col-span-1 font-medium text-gray-300 text-xs md:text-sm">{row.feature}</div>
                    
                    {/* Petrol */}
                    <div className="flex flex-col items-center justify-center text-gray-500 gap-1">
                      {row.feature.includes("Fuel") && <Fuel className="w-5 h-5 mb-1" />}
                      <span className={row.highlight ? "text-red-400 font-bold" : ""}>{row.petrol}</span>
                    </div>

                    {/* EV */}
                    <div className="flex flex-col items-center justify-center text-gray-400 gap-1">
                      {row.feature.includes("Fuel") && <BatteryCharging className="w-5 h-5 mb-1" />}
                      <span>{row.ev}</span>
                    </div>

                    {/* IEG */}
                    <div className="flex flex-col items-center justify-center text-[#2FE89B] gap-1 relative">
                      {/* Glow effect behind the winner */}
                      {row.highlight && <div className="absolute inset-0 bg-[#2FE89B]/20 blur-xl rounded-full" />}
                      
                      {row.feature.includes("Fuel") && <Zap className="w-6 h-6 mb-1 fill-current" />}
                      <span className="font-bold text-lg relative z-10">{row.ieg}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Go-To-Market Products</h2>
            <p className="text-gray-400">Ready for mass manufacturing in Gujarat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PRODUCT 1: The Bike */}
            <div className="group relative rounded-3xl overflow-hidden bg-[#020604] border border-white/10 hover:border-[#2FE89B]/50 transition-all duration-500">
              <div className="aspect-video relative">
                 {/* SAFE IMAGE (Uses standard HTML img to avoid Next.js Config Error) */}
                 <img 
                   src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop" 
                   alt="IEG Motorcycle" 
                   className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020604] to-transparent" />
                 
                 <div className="absolute top-6 right-6 bg-[#2FE89B] text-black font-bold px-4 py-2 rounded-full text-xs uppercase tracking-widest">
                   Flagship
                 </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Bike className="w-6 h-6 text-[#2FE89B]" />
                  <h3 className="text-2xl font-bold text-white">Vidaka M-1</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The first commuter motorcycle that never visits a petrol pump. 
                  Regenerative braking + Flux Loop technology keeps the battery topped up indefinitely during motion.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#2FE89B]" /> 48V / 60V IEG System
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#2FE89B]" /> No External Charging Required
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#2FE89B]" /> 80 km/h Top Speed
                  </li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-[#2FE89B] hover:text-black hover:border-[#2FE89B] transition-all font-bold uppercase tracking-widest text-sm">
                  View Specs
                </button>
              </div>
            </div>

            {/* PRODUCT 2: The Generator */}
            <div className="group relative rounded-3xl overflow-hidden bg-[#020604] border border-white/10 hover:border-[#2FE89B]/50 transition-all duration-500">
              <div className="aspect-video relative">
                 {/* SAFE IMAGE (Uses standard HTML img to avoid Next.js Config Error) */}
                 <img 
                   src="https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?q=80&w=1000&auto=format&fit=crop" 
                   alt="IEG Generator" 
                   className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020604] to-transparent" />
                 
                 <div className="absolute top-6 right-6 bg-white/10 border border-white/20 text-white font-bold px-4 py-2 rounded-full text-xs uppercase tracking-widest">
                   Industrial
                 </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CloudLightning className="w-6 h-6 text-[#2FE89B]" />
                  <h3 className="text-2xl font-bold text-white">PowerBox Pro</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Silent, emission-free power generation for homes and telecom towers. 
                  Replaces diesel gensets with magnetic flux resonance.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#2FE89B]" /> 5kW - 100kW Output
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#2FE89B]" /> Zero Noise / Zero Fumes
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#2FE89B]" /> 24/7 Continuous Run Time
                  </li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-[#2FE89B] hover:text-black hover:border-[#2FE89B] transition-all font-bold uppercase tracking-widest text-sm">
                  View Specs
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}