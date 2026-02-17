'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020604] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2FE89B] rounded-full flex items-center justify-center text-[#050d0a] font-bold text-lg">
                IEG
              </div>
              <span className="text-white font-semibold text-lg tracking-wide">
                ENERGY
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pioneering internal energy regeneration technology for a fuel-less, grid-independent future.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/technology" className="text-gray-400 hover:text-[#2FE89B] text-sm transition-colors">Technology</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-[#2FE89B] text-sm transition-colors">Products</Link></li>
              <li><Link href="/company" className="text-gray-400 hover:text-[#2FE89B] text-sm transition-colors">Company History</Link></li>
              <li><Link href="/investor" className="text-gray-400 hover:text-[#2FE89B] text-sm transition-colors">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Contact Info (From PPT) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Headquarters</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#2FE89B] mt-1 shrink-0" />
                <span>Dahisar East, Mumbai HQ<br />Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#2FE89B] shrink-0" />
                <span>+91 77395 44789</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#2FE89B] shrink-0" />
                <span>ajaykumarchoudhary07@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Stay Updated</h4>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2FE89B]/50"
              />
              <button className="bg-[#2FE89B] text-[#050d0a] px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-[#25c482] transition-colors flex items-center justify-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Vidaka Powers Ltd. All rights reserved. Patent No. 391051.
          </p>
          <div className="flex gap-6 text-gray-600 text-xs uppercase tracking-wider">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}