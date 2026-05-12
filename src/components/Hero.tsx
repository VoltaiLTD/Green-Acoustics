import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-sound-black">
      {/* Background Placeholder - Represents a 3D Render of a Studio */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000" 
          alt="Acoustic Studio Placeholder" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sound-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-acoustic-green uppercase bg-acoustic-green/10 border border-acoustic-green/20 rounded">
            Lagos, Nigeria
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            The Architecture <br />
            <span className="text-acoustic-green italic">of Silence.</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Specializing in acoustic treatment, precision fabrication, and 3D architectural renders for world-class sound environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-acoustic-green hover:bg-opacity-90 text-white px-8 py-4 rounded-md font-medium transition-all">
              Request Site Survey
            </button>
            <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-md font-medium transition-all">
              View Fabrication Lab
            </button>
          </div>
        </div>

        {/* Feature Overlay - Floating Stats */}
        <div className="hidden md:block">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl max-w-xs ml-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 rounded-full bg-acoustic-green animate-pulse"></div>
              <p className="text-white text-sm font-mono">RT60 Analysis Active</p>
            </div>
            <div className="space-y-4">
              <div className="h-[1px] bg-white/10 w-full"></div>
              <p className="text-gray-400 text-xs">Acoustic precision for studios, halls, and corporate spaces in Nigeria.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;