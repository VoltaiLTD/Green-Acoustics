import React from 'react';
import { Layers, Activity, Maximize, CheckCircle2 } from 'lucide-react';

const products = [
  {
    title: "Acoustic Reflectors",
    description: "Engineered to redirect sound energy, ideal for auditoriums and live rooms.",
    features: ["Custom Timber Finish", "Angled for Energy Flow", "High-End Render"],
    icon: <Maximize className="w-6 h-6 text-acoustic-green" />,
    slug: "reflectors"
  },
  {
    title: "Quadratic Diffusers",
    description: "Scatter sound waves to eliminate standing waves and flutter echoes.",
    features: ["Mathematical Precision", "Visual Statement Piece", "RT60 Optimization"],
    icon: <Activity className="w-6 h-6 text-acoustic-green" />,
    slug: "diffusers"
  },
  {
    title: "Bass Traps",
    description: "Low-frequency absorbers designed to sit in room corners for a tighter low-end.",
    features: ["Broadband Absorption", "Fabric Wrapped", "Corner-Specific Design"],
    icon: <Layers className="w-6 h-6 text-acoustic-green" />,
    slug: "bass-traps"
  }
];

const Services = () => {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Background abstract element for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-acoustic-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-acoustic-green font-bold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-acoustic-slate mb-4">
            Specialist Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From soundproofing Lagos' top studios to fabricating custom acoustic panels, we blend architectural design with acoustic science.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.slug} className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-acoustic-green/20 transition-all duration-300 translate-y-0 hover:-translate-y-2">
              <div className="w-14 h-14 bg-acoustic-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-acoustic-slate mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
              
              <div className="h-px w-full bg-gray-100 mb-6"></div>
              
              <ul className="space-y-3">
                {item.features.map(f => (
                  <li key={f} className="flex items-center text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-acoustic-green mr-3 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;