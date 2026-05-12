"use client";

import React from 'react';
import { MapPin, Phone, Mail, Globe, Plane } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Note: If you have already added the <Navbar /> to your layout.tsx, 
        you do not need to import or render it here. If not, you can add it back.
      */}
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Regional Presence & Info */}
          <div>
            <span className="text-acoustic-green font-bold tracking-widest text-xs uppercase mb-4 block">
              Pan-African Service
            </span>
            <h1 className="text-5xl font-bold text-acoustic-slate mb-8 leading-tight">
              Let’s Engineer Your <br /> 
              <span className="text-acoustic-green italic">Global Space.</span>
            </h1>
            <p className="text-gray-500 text-lg mb-12">
              Based in Lagos, serving Africa. We deploy engineering teams and ship custom-fabricated acoustic solutions to projects across the continent.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100">
                  <MapPin className="text-acoustic-green w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-acoustic-slate">Lagos Headquarters</h4>
                  <p className="text-gray-500 text-sm">Engineering & Fabrication Hub, Lekki, Lagos.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100">
                  <Globe className="text-acoustic-green w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-acoustic-slate">Regional Reach</h4>
                  <p className="text-gray-500 text-sm">Serving Nigeria, Ghana, Benin, and beyond.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100">
                  <Plane className="text-acoustic-green w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-acoustic-slate">International Logistics</h4>
                  <p className="text-gray-500 text-sm">Seamless shipping of custom Diffusers and Bass Traps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Booking Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-acoustic-slate mb-6">Book a Consultation</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Row 1: Name and Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Full Name</label>
                  <input type="text" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-acoustic-green/20 outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Contact Details</label>
                  <input type="text" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-acoustic-green/20 outline-none transition-all" placeholder="Phone number or Email" />
                </div>
              </div>

              {/* Row 2: Address & Region */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Full Address</label>
                  <input type="text" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-acoustic-green/20 outline-none transition-all" placeholder="Street address" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Region</label>
                  <select className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-acoustic-green/20 outline-none appearance-none">
                    <option>Lagos, Nigeria</option>
                    <option>Abuja, Nigeria</option>
                    <option>Accra, Ghana</option>
                    <option>Cotonou, Benin</option>
                    <option>Other / International</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Project Type */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Project Type</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Studio', 'Church', 'Office', 'Home', 'Auditorium', 'Cinema'].map((type) => (
                    <button key={type} type="button" className="py-3 px-4 border border-gray-200 rounded-lg text-sm hover:border-acoustic-green hover:text-acoustic-green focus:bg-acoustic-green focus:text-white focus:border-acoustic-green transition-all text-gray-600">
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Specifications */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Message & Specs</label>
                <textarea rows={4} className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-acoustic-green/20 outline-none" placeholder="Tell us about your space, dimensions, and RT60 goals..."></textarea>
              </div>

              <button type="submit" className="w-full bg-acoustic-slate hover:bg-black text-white py-5 rounded-xl font-bold tracking-wide transition-all shadow-xl">
                Submit Project Inquiry
              </button>
            </form>
            
          </div>
        </div>
      </section>
    </main>
  );
}