'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to darken the navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Technology', href: '/technology' },
    { name: 'Products', href: '/products' },
    { name: 'Company', href: '/company' },
    { name: 'Investors', href: '/investor' },
  ];

  // Animation variants for mobile menu items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#050d0a]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <div className="w-10 h-10 bg-[#2FE89B] rounded-xl flex items-center justify-center text-[#050d0a] shadow-[0_0_15px_rgba(47,232,155,0.4)] group-hover:rotate-12 transition-transform duration-300">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-wider leading-none group-hover:text-[#2FE89B] transition-colors">
                VIDAKA
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] leading-none">
                Powers Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-300 hover:text-[#2FE89B] transition-colors uppercase tracking-[0.15em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#2FE89B] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#2FE89B] hover:bg-[#2FE89B]/10 hover:text-[#2FE89B] text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-[#2FE89B] transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay (Glassmorphism) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-[#050d0a]/95 md:hidden flex flex-col justify-center px-8"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2FE89B]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <motion.nav 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6 relative z-10"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-light text-white hover:text-[#2FE89B] hover:pl-4 transition-all duration-300 flex items-center justify-between group border-b border-white/5 pb-4"
                  >
                    {link.name}
                    <ChevronRight className="w-6 h-6 text-[#2FE89B] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full block text-center py-4 rounded-full bg-[#2FE89B] text-[#050d0a] text-lg font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(47,232,155,0.3)]"
                >
                  Invest Now
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}