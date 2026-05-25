import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'motion/react';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Scene3D from './components/Scene3D';
import AIWilliam from './components/AIWilliam';

import Hero from './sections/Hero';
import Storytelling from './sections/Storytelling';
import PracticeAreas from './sections/PracticeAreas';
import LandmarkCases from './sections/LandmarkCases';
import ExperienceTimeline from './sections/ExperienceTimeline';
import LegalPhilosophy from './sections/LegalPhilosophy';
import ImpactAchievements from './sections/ImpactAchievements';
import Gallery from './sections/Gallery';
import PublicAdvocacy from './sections/PublicAdvocacy';
import TraumaInformedServices from './sections/TraumaInformedServices';
import LegalEducation from './sections/LegalEducation';
import Testimonials from './sections/Testimonials';
import InsightsWritings from './sections/InsightsWritings';
import ResumeDossier from './sections/ResumeDossier';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative bg-luxury-white selection:bg-luxury-gold selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <Scene3D />
      <AIWilliam />

      <div className="relative">
        <div id="hero"><Hero /></div>
        <div id="journey"><Storytelling /></div>
        <div id="expertise"><PracticeAreas /></div>
        <div id="cases"><LandmarkCases /></div>
        <div id="milestones"><ExperienceTimeline /></div>
        <div id="philosophy"><LegalPhilosophy /></div>
        <div id="impact"><ImpactAchievements /></div>
        <div id="gallery"><Gallery /></div>
        <div id="advocacy"><PublicAdvocacy /></div>
        <TraumaInformedServices />
        <div id="academy"><LegalEducation /></div>
        <Testimonials />
        <div id="insights"><InsightsWritings /></div>
        <div id="dossier"><ResumeDossier /></div>
        <Skills />
        <div id="contact"><Contact /></div>
        <Footer />
      </div>

      <div className="fixed top-8 left-8 right-8 z-[100] flex justify-between items-center pointer-events-none">
        <a href="#hero" className="font-serif font-black text-3xl text-luxury-gold italic pointer-events-auto cursor-pointer hover:scale-110 transition-transform">W.</a>
        <nav className="hidden lg:flex gap-8 xl:gap-12 font-mono text-[9px] uppercase tracking-[0.4em] text-luxury-black/40 pointer-events-auto">
          {[
            { name: 'Home', href: '#hero' },
            { name: 'Journey', href: '#journey' },
            { name: 'Expertise', href: '#expertise' },
            { name: 'Records', href: '#cases' },
            { name: 'Impact', href: '#impact' },
            { name: 'Gallery', href: '#gallery' },
            { name: 'Resume', href: '#dossier' },
          ].map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative group py-1 hover:text-luxury-black transition-all duration-500 hover:tracking-[0.6em]"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-gold/60 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        
      </div>
    </main>
  );
}
