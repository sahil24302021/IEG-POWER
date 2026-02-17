import React from 'react';

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#050d0a] py-24 md:py-32">
      
      {/* --- Atmospheric Background Layer --- */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Base dark fill */}
        <div className="absolute inset-0 bg-[#050d0a]" />
        
        {/* Subtle top gradient to blend with hero section above */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0b1a13] to-transparent opacity-80" />
        
        {/* Radial glow for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,232,155,0.04),transparent_50%)]" />
        
        {/* Noise texture for matte finish */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        />
      </div>

      {/* --- Content Container --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* 1. Label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-500/50"></span>
          <span className="text-xs font-bold tracking-[0.25em] text-emerald-500/80 uppercase">
            About IEG
          </span>
        </div>

        {/* 2. Heading */}
        <h2 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tighter text-white mb-12">
          Building a new category of{" "}
          <span className="text-[#2FE89B] drop-shadow-[0_0_25px_rgba(47,232,155,0.2)]">
            internal energy generation
          </span>
        </h2>

        {/* 3. Body Text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Spacer to push text to the right or keep it left - currently aligned left based on image */}
          <div className="md:col-span-10 lg:col-span-8 space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light">
              <span className="text-white font-medium">IEG (Internal Energy Generate)</span> is a deep-technology energy company
              developing patented systems capable of producing continuous power
              without external fuel, grid electricity, or manual charging.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-light">
              The company’s work is based on decades of research initiated in the
              early 1990s, with granted patents validating a new category of
              internal energy regeneration applicable across mobility,
              residential, industrial, and infrastructure sectors.
            </p>
          </div>
        </div>

        {/* 4. Divider */}
        <div className="mt-20 mb-16 h-px w-full bg-gradient-to-r from-white/10 via-white/20 to-transparent" />

        {/* 5. Proof / Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          
          <div className="group">
            <div className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-[#2FE89B] transition-colors duration-300">
              30+ Years
            </div>
            <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">
              Foundational research
            </div>
          </div>

          <div className="group">
            <div className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-[#2FE89B] transition-colors duration-300">
              Patented
            </div>
            <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">
              Core energy architecture
            </div>
          </div>

          <div className="group">
            <div className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-[#2FE89B] transition-colors duration-300">
              Fuel-less
            </div>
            <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">
              Continuous power output
            </div>
          </div>

          <div className="group">
            <div className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-[#2FE89B] transition-colors duration-300">
              Infra-scale
            </div>
            <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">
              Mobility to industry
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}