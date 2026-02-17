'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function ProblemSection() {
  const problems = [
    {
      number: '01',
      title: 'Fossil Fuel Dependence',
      description: 'Energy systems rely heavily on finite fuels, exposing economies to price shocks, scarcity, and geopolitical instability.'
    },
    {
      number: '02',
      title: 'Grid Dependency',
      description: 'Electric mobility and modern appliances remain tied to centralized grids that are unreliable, expensive, and inaccessible in many regions.'
    },
    {
      number: '03',
      title: 'Environmental Cost',
      description: 'Conventional power generation produces massive carbon emissions, accelerating climate damage and regulatory pressure worldwide.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="relative bg-[#050d0a] py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Texture --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }} 
        />
        {/* Subtle glow behind the title area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#2FE89B]/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-24 text-center md:text-left"
        >
           {/* Label */}
           <div className="mb-6 flex items-center justify-center md:justify-start gap-3">
              <span className="h-px w-8 bg-[#2FE89B]/50"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#2FE89B] uppercase">
                The Challenge
              </span>
            </div>

          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight leading-tight">
            The Global Energy Problem
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
            Modern civilization still depends on fuel, grids, and fragile infrastructure.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-xl overflow-hidden hover:bg-white/[0.05] transition-colors duration-500"
            >
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2FE89B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Number */}
                <div className="text-5xl md:text-6xl font-bold text-white/10 mb-8 group-hover:text-white/20 transition-colors duration-300">
                  {problem.number}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#2FE89B] transition-colors duration-300">
                  {problem.title}
                </h3>
                
                {/* Description */}
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                  {problem.description}
                </p>

                {/* Bottom Line Decoration */}
                <div className="w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-[#2FE89B] transition-all duration-500 ease-out" />
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}