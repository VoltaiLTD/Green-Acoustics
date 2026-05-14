import React from 'react';
import Navbar from '@/components/Navbar';
import { ExternalLink, Activity, Cpu } from 'lucide-react';

export default function ConsultancyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-sound-black pt-32 pb-20 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Acoustic <span className="text-acoustic-green italic">Consultancy.</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Mathematical precision meets architectural design. We analyze, map, and treat complex acoustic environments across Nigeria.
          </p>
        </div>
      </section>

      {/* Oodio Integration Section */}
      <section className="px-6 relative -mt-10">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden max-w-4xl mx-auto mb-20">
          
          <div className="bg-acoustic-slate p-8 text-white flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-2">
                <Cpu className="w-6 h-6 text-acoustic-green" />
                RT60 Analysis & Measurement
              </h3>
              <p className="text-gray-400 text-sm">Powered by our proprietary acoustic engine.</p>
            </div>
            <div className="hidden md:block">
              <Activity className="w-12 h-12 text-acoustic-green opacity-50" />
            </div>
          </div>

          <div className="p-12 text-center">
            <h2 className="text-3xl font-bold text-acoustic-slate mb-4">
              Enter the Oodio Workspace
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              For precise, AI-powered reverberation time analysis and environmental acoustic mapping, we route our clients through the dedicated Oodio measurement tool. 
            </p>
            
            {/* Update the href below with your actual Oodio Vercel/GitHub deployment URL 
            */}
            <a 
              href="https://oodio.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-acoustic-green hover:bg-[#22451d] text-white px-10 py-4 rounded-md font-medium transition-all shadow-[0_4px_14px_0_rgba(45,90,39,0.39)] hover:shadow-[0_6px_20px_rgba(45,90,39,0.23)] hover:-translate-y-1"
            >
              Launch Oodio Calculator
              <ExternalLink className="w-5 h-5" />
            </a>
            
            <p className="text-sm text-gray-400 mt-6 font-mono">
              Opens in a new secure window.
            </p>
          </div>
          
        </div>
      </section>

      <footer className="bg-black py-12 text-center border-t border-white/10">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Green Acoustics Lagos. Engineering Perfect Soundscapes.
        </p>
      </footer>
    </main>
  );
}
