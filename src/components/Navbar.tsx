"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Volume2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-sound-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer z-50">
            <Volume2 className="text-acoustic-green w-8 h-8" />
            <span className="text-white font-bold text-xl tracking-wide">
              GREEN<span className="text-gray-400 font-light">ACOUSTICS</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Services</Link>
            <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Fabrication</Link>
            <Link href="/consultancy" className="text-sm text-gray-300 hover:text-white transition-colors">RT60 Analysis</Link>
            <Link href="/contact" className="bg-acoustic-green hover:bg-acoustic-green/90 text-white px-5 py-2.5 rounded text-sm font-medium transition-all shadow-[0_0_15px_rgba(45,90,39,0.3)] hover:shadow-[0_0_25px_rgba(45,90,39,0.5)]">
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-sound-black border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col px-6 pt-24 pb-8 space-y-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white font-medium border-b border-white/5 pb-4">Services</Link>
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white font-medium border-b border-white/5 pb-4">Fabrication Lab</Link>
          <Link href="/consultancy" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white font-medium border-b border-white/5 pb-4">RT60 Analysis</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-acoustic-green text-center text-white px-5 py-4 rounded-lg font-bold shadow-lg">
            Book Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;