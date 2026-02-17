'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Home, Factory, ArrowRight } from 'lucide-react'

export default function ProductEcosystem() {
  const products = [
    {
      id: 'mobility',
      title: 'Electric Mobility',
      description: 'Continuous propulsion systems for next-gen EVs, eliminating charging downtime and range anxiety.',
      icon: <Zap className="w-8 h-8 text-[#2FE89B]" />,
      href: '/products/ev',
      gradient: 'from-[#2FE89B]/20 to-transparent'
    },
    {
      id: 'residential',
      title: 'Home Energy',
      description: 'Decentralized power units for true residential independence, detached from grid instability and rising costs.',
      icon: <Home className="w-8 h-8 text-[#2FE89B]" />,
      href: '/products/home',
      gradient: 'from-[#3b82f6]/20 to-transparent' // Subtle blue tint for variation, or keep green
    },
    {
      id: 'industrial',
      title: 'Industrial Grid',
      description: 'Megawatt-class scalable modules designed for heavy infrastructure, factories, and data centers.',
      icon: <Factory className="w-8 h-8 text-[#2FE89B]" />,
      href: '/products/industrial',
      gradient: 'from-[#f59e0b]/20 to-transparent' // Subtle amber tint or keep green
    }
  ]

  return (
    <section className="relative bg-[#050d0a] py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }} 
        />
        {/* Subtle Green Glow from bottom right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2FE89B]/5 blur-[150px] rounded-full mix-blend-screen" />
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
              Applications
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            Product Ecosystem
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Scalable solutions across mobility, residential, and industrial sectors — <span className="text-white">powered by IEG.</span>
          </p>
        </motion.div>

        {/* 2. Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={product.href} className="group relative block h-full">
                
                {/* Card Container */}
                <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#2FE89B]/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col">
                  
                  {/* Hover Gradient Reveal */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Icon Box */}
                  <div className="relative mb-8 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#2FE89B]/30 transition-all duration-300">
                    {product.icon}
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#2FE89B] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed font-light mb-8 group-hover:text-gray-300 transition-colors">
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="relative z-10 flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#2FE89B] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}