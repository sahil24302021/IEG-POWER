'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function BreakthroughSection() {
  const highlights = [
    {
      title: 'Patented Technology',
      description: 'Granted patents validate IEG\'s novel approach to internal energy generation and regeneration.'
    },
    {
      title: 'Fuel-less & Grid-Independent',
      description: 'IEG systems operate without petrol, diesel, gas, or external electricity.'
    },
    {
      title: 'Continuous Power',
      description: 'Designed for long-duration operation with minimal energy loss and high reliability.'
    }
  ]

  return (
    <section className="relative bg-[#050d0a] py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }} 
        />
        {/* Central Glow representing "Core" energy */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#2FE89B]/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          {/* Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#2FE89B]/50"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#2FE89B] uppercase">
              Innovation
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-semibold text-white mb-8 tracking-tight leading-[1.1]">
            The Breakthrough
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 font-light max-w-4xl leading-relaxed">
            A new category of energy generation — <span className="text-white">internal, regenerative, and independent.</span>
          </p>
        </motion.div>

        {/* 2. Main Explanation Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Spacer column */}
          <div className="hidden lg:block lg:col-span-1" />
          
          <div className="lg:col-span-10 space-y-8">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light border-l-2 border-[#2FE89B]/20 pl-6 md:pl-8">
              IEG introduces a patented method of internal energy generation that continuously regenerates power <span className="text-white">without external fuel, grid electricity, or manual charging.</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light border-l-2 border-transparent pl-6 md:pl-8">
              Unlike conventional systems that consume energy, IEG systems stabilize and regenerate internal energy loops, enabling sustained, clean power output across applications.
            </p>
          </div>
        </motion.div>

        {/* 3. Three-Column Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="relative group"
            >
              {/* Circuit Line Decoration */}
              <div className="mb-8 w-full h-px bg-white/10 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-[#2FE89B] to-transparent w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out opacity-50" />
                 <div className="absolute inset-0 w-16 h-full bg-[#2FE89B]" /> {/* Static small accent */}
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight group-hover:text-[#2FE89B] transition-colors duration-300">
                {highlight.title}
              </h3>
              
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}