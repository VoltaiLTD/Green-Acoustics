import React from 'react';

const projects = [
  {
    id: 'proj-01',
    title: 'Lekki Master Control Room',
    category: 'Studio Acoustics',
    specs: 'Target RT60: 0.3s | Treatment: Broadband + Diffusion',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'proj-02',
    title: 'V.I. Corporate Boardroom',
    category: 'Commercial Soundproofing',
    specs: 'Target STC: 55 | Treatment: Acoustic Clouds + Wall Panels',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'proj-03',
    title: 'Ikeja Mega-Church Auditorium',
    category: 'Large Venue Acoustics',
    specs: 'Target RT60: 1.2s | Treatment: Custom Reflectors & Bass Traps',
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=1000'
  }
];

const VisualizationStudio = () => {
  return (
    <section className="bg-sound-black py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-acoustic-green uppercase tracking-widest text-xs font-bold mb-3 block">
              Pre-Construction Rendering
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              3D Visualization Studio
            </h2>
            <p className="text-gray-400">
              See the sound. We provide hyper-realistic architectural renders combined with precise acoustic mapping, ensuring zero guesswork before fabrication begins.
            </p>
          </div>
          <button className="hidden md:block mt-6 md:mt-0 text-white border border-white/20 hover:bg-white/10 px-6 py-3 rounded transition-colors">
            View Full Portfolio
          </button>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl bg-gray-900 border border-white/10">
              {/* Image Placeholder */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-sound-black via-sound-black/60 to-transparent">
                <p className="text-acoustic-green text-sm font-medium mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="h-[1px] w-12 bg-white/20 mb-3 group-hover:w-full transition-all duration-500"></div>
                <p className="text-gray-400 text-xs font-mono">{project.specs}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-8 text-white border border-white/20 hover:bg-white/10 px-6 py-4 rounded transition-colors">
          View Full Portfolio
        </button>
      </div>
    </section>
  );
};

export default VisualizationStudio;