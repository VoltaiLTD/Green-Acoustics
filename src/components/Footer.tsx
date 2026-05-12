import React from 'react';
import Link from 'next/link';
import { Volume2, MapPin, Phone, Mail, Box } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Volume2 className="text-acoustic-green w-8 h-8" />
              <span className="text-white font-bold text-xl tracking-wide">
                GREEN<span className="text-gray-400 font-light">ACOUSTICS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Nigeria's premier acoustic engineering firm. We design, fabricate, and deploy world-class soundscapes across the African continent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-acoustic-green transition-colors">Acoustic Treatment</Link></li>
              <li><Link href="/" className="hover:text-acoustic-green transition-colors">3D Architectural Render</Link></li>
              <li><Link href="/consultancy" className="hover:text-acoustic-green transition-colors">RT60 Analysis (Oodio)</Link></li>
              <li><Link href="/contact" className="hover:text-acoustic-green transition-colors">Site Survey Booking</Link></li>
            </ul>
          </div>

          {/* Logistics & Shipping */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-6">Pan-African Logistics</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Box className="w-5 h-5 text-acoustic-green flex-shrink-0" />
                <span>Custom fabrication shipped securely to Nigeria, Ghana, and Benin.</span>
              </li>
              <li><span className="text-gray-500 text-xs">All panels are crate-packed to preserve acoustic integrity during freight.</span></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-6">Direct Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-acoustic-green" />
                Lekki, Lagos, Nigeria
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-acoustic-green" />
                +234 8137201234
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-acoustic-green" />
                greenacoustics@hotmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Green Acoustics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;