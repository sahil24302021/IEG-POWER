import React from 'react';

export default function LandingPage() {
  return (
    <main className="bg-[#050d0a] min-h-screen text-white selection:bg-[#2FE89B] selection:text-[#050d0a]">
      <Hero />
    </main>
  );
}

// ==========================================
// 1. HERO SECTION
// ==========================================
function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">

      {/* --- Background Image & Overlays --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/free-photo/nature-suffocated-by-co2-pollution_23-2150858319.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Energy Infrastructure"
          className="w-full h-full object-cover scale-105"
        />

        {/* Cinematic Gradient Overlay */}
        {/* We fade from semi-transparent black at the top to SOLID #050d0a at the bottom to match the About section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#050d0a]" />

        {/* Green Glow Effect for Depth */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#2FE89B]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      {/* --- Hero Content --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">

        {/* Context badge */}
        <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2FE89B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2FE89B]"></span>
          </span>
          <span className="text-xs font-bold tracking-[0.25em] text-gray-300 uppercase">
            IEG Energy Systems
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mb-8">
          Fuel-less Power,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#2FE89B] to-[#2FE89B]">
            Engineered for Reality.
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-10">
          A patented internal energy generation architecture delivering
          continuous, self-sustaining electricity for mobility, residential,
          and industrial systems — without fuel or grid dependency.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5">
          <button className="px-8 py-4 rounded-full bg-[#2FE89B] text-[#050d0a] font-semibold text-sm tracking-wider hover:bg-[#25c482] transition-colors duration-300">
            VIEW TECHNOLOGY
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm tracking-wider hover:bg-white/10 transition-colors duration-300">
            INVESTOR OVERVIEW
          </button>
        </div>

        {/* Trust/Stats Line */}
        <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs md:text-sm text-gray-400 tracking-widest uppercase font-medium">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-[#2FE89B] rounded-full"/> Patented Technology
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-[#2FE89B] rounded-full"/> 30+ Years Research
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-[#2FE89B] rounded-full"/> Infrastructure-Scale
          </span>
        </div>

      </div>
    </section>
  );
}