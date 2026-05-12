import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/services';
import FabricationLab from '@/components/FabricationLab';
import VisualizationStudio from '@/components/VisualizationStudio';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar /> {/* <-- Added Navbar here */}
      <Hero />
      <Services />
      <FabricationLab />
      <VisualizationStudio />
      
      <footer className="bg-black py-12 text-center border-t border-white/10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-white font-bold text-xl tracking-wide">
            GREEN<span className="text-gray-400 font-light">ACOUSTICS</span>
          </span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Green Acoustics Lagos. Engineering Perfect Soundscapes.
        </p>
      </footer>
    </main>
  );
}