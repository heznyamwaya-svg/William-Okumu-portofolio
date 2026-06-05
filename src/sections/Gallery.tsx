import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  X, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Waves, 
  Maximize2,
  Lock,
  Compass,
  FileText
} from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    title: "The High Court Oath",
    caption: "William Okumu sworn in as an Advocate of the High Court of Kenya, cementing a lifelong vow to defenceless human dignity.",
    category: "SACRED OATH",
    date: "2024",
    location: "High Court, Nairobi",
    image: "/images/William4.jpeg",
    aspect: "w-[340px] md:w-[420px] aspect-[3/4]",
    details: "The formal admission to the bar represents the key peak of years of legal defense and human rights study. Moving from lay prison advocacy into a licensed courtroom defender, this moment sealed William's role as a primary systemic advocate in East Africa.",
    quote: "Justice is a tireless pursuit of dignity that knows no bounds of concrete and steel.",
    icon: Compass
  },
  {
    id: 2,
    title: "Behind the Iron Gates",
    caption: "Deep within maximum-security prisons, guiding inmates through custom legal workshops and preparing critical appeals.",
    category: "GRASSROOTS REFORM",
    date: "2020",
    location: "Kamiti Maximum Security",
    image: "/images/William14.jpeg",
    aspect: "w-[480px] md:w-[600px] aspect-[16/10]",
    details: "During his time inside maximum correctional facilities, William was instrumental in establishing Drop-In legal hubs. Stacks of statutory codes and penal guidelines are translated into accessible legal handbooks used directly by self-advocating prisoners.",
    quote: "Freedom begins inside the intellect, where the rules of law become instruments of self-defense.",
    icon: Lock
  },
  {
    id: 3,
    title: "Somatic Sanctuaries",
    caption: "Integrating Somatic Experiencing (SE) into legal sessions to release stress-inflicted nervous system trauma.",
    category: "RESTORATIVE HEALING",
    date: "Weekly Sessions",
    location: "Nairobi Somatic Sanctuary",
    image: "/images/williamrob2.jpeg",
    aspect: "w-[340px] md:w-[420px] aspect-[3/4]",
    details: "Recognizing that trauma restricts mental clarity, William integrates somatic practices with counsel. By releasing high-stress tension patterns of detention, survivor inmates restore emotional and physical homeostasis before testifying in critical court battles.",
    quote: "A restored nervous system is the ultimate weapon against systemic trauma.",
    icon: Waves
  },
  {
    id: 4,
    title: "The Muruatetu Briefs",
    caption: "Reviewing the Supreme Court files that abolished mandatory death sentences across East Africa.",
    category: "LANDMARK LITIGATION",
    date: "2017",
    location: "Supreme Court, Kenya",
    image: "/images/williamrob3.jpeg",
    aspect: "w-[340px] md:w-[420px] aspect-[3/4]",
    details: "Assisting the pioneering minds that disputed the mandatory application of capital punishment. This strategic brief altered decades of common law jurisprudence, commuting thousands of death terms back into individual hearing opportunities.",
    quote: "When a sentence is mandatory, mercy becomes impossible. We restored justice to the individual.",
    icon: FileText
  },
  {
    id: 5,
    title: "Self-Advocacy Classes",
    caption: "Conducting legal workshops to empower inmates to stand proudly as their own defenders.",
    category: "LEGAL LITERACY",
    date: "2021",
    location: "Shimo La Tewa Prison",
    image: "/images/William16.jpeg",
    aspect: "w-[350px] md:w-[430px] aspect-[3/4]",
    details: "A vital picture of self-sustained resilience: prisoners taking agency of their judicial paths. Working alongside Justice Defenders, these classes generated certified jailhouse lawyers who succeeded in scores of releases.",
    quote: "By sharing the fire of statutory knowledge, we turn cell blocks into courtroom universities.",
    icon: BookOpen
  },
  {
    id: 6,
    title: "Community Mobilization",
    caption: "Taking localized legal wisdom into rural markets, building legal fortresses against state abuse.",
    category: "PUBLIC ADVOCACY",
    date: "2023",
    location: "Murang'a Legal Clinic",
    image: "/images/William3.jpeg",
    aspect: "w-[500px] md:w-[650px] aspect-[16/9]",
    details: "By bringing legal clinics to regional communities, the constitution is pulled down from elitist libraries and placed directly into hands that farm and build. Legal empowerment acts as the frontline of collective national safety.",
    quote: "Dignity is a language that every citizen deserves to speak fluently.",
    icon: Compass
  },
  {
    id: 7,
    title: "Strategic Advisory Boards",
    caption: "Presenting sustainable models of restorative justice on global humanitarian panels.",
    category: "GLOBAL SOLIDARITY",
    date: "2024",
    location: "Geneva Panels",
    image: "/images/williamrob2.jpeg",
    aspect: "w-[340px] md:w-[420px] aspect-[3/4]",
    details: "Securing resources for underrepresented legal counsel in Africa. William acts as a prominent voice of domestic legal expertise on international panels, structuring sustainable fundraising initiatives for jailhouse law schools.",
    quote: "Justice Defenders build portals of hope where the law has historically brought despair.",
    icon: FileText
  },
  {
    id: 8,
    title: "The Gates of Redemptive Day",
    caption: "A freed client crosses prison gates after decades of structural containment, walking into somatic peace.",
    category: "SYSTEMIC IMPACT",
    date: "2022",
    location: "Naivasha Prison",
    image: "/images/William3.jpeg",
    aspect: "w-[480px] md:w-[600px] aspect-[16/10]",
    details: "The literal manifestation of constitutional advocacy. All the legal briefs, dry procedural filings, and administrative pleadings vanish the moment a legal ward finally breathes the air of unregulated freedom.",
    quote: "Our victory is measured not by pages of briefs, but by the physiological relief of absolute freedom.",
    icon: Waves
  }
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<any>(null);
  const [hoveredImage, setHoveredImage] = useState<any>(null);

  // Nav inside fullscreen modal
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === activeImage.id);
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setActiveImage(GALLERY_IMAGES[prevIndex]);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === activeImage.id);
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setActiveImage(GALLERY_IMAGES[nextIndex]);
  };

  return (
    <section className="py-24 px-4 overflow-hidden bg-luxury-white relative selection:bg-luxury-gold selection:text-white border-t border-luxury-gold/15">
      {/* Inject Continuous Floema-Style Marquee Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-drift {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-track {
          display: flex;
          width: max-content;
          gap: 2rem;
          animation: marquee-drift 40s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-marquee-track {
            gap: 3.5rem;
            animation-duration: 55s;
          }
        }
        .animate-marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.8em] text-luxury-gold font-bold">Visual Testaments</span>
            <div className="w-12 h-[1px] bg-luxury-gold/30" />
          </div>
          <h2 className="text-4xl md:text-7xl font-serif font-black text-luxury-black leading-[0.9] uppercase">
            THE CHRONICLE <br /><span className="italic text-luxury-gold text-[0.85em]">OF ADVOCACY</span>
          </h2>
        </div>
        
        <div className="max-w-md">
          <p className="text-lg md:text-xl font-serif text-luxury-gray leading-relaxed italic">
            "A visual study of physical freedom, judicial architecture, and somatic survival. Each capture represents a real, documented campaign of Okumu's 16-year commitment to collective liberation."
          </p>
        </div>
      </div>

      {/* Floema-Style Drifting Collage Track */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Subtle left & right gradient vignettes */}
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-48 bg-gradient-to-r from-luxury-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-48 bg-gradient-to-l from-luxury-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track Container */}
        <div className="overflow-hidden w-full py-20 md:py-32">
          <div className="animate-marquee-track">
            {/* We duplicate the galleries array to create a perfect endless wrap loop */}
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((item, index) => {
              // Asymmetrical alignment based on item.id to ensure matches remain identical across sets
              const alignY = item.id % 3 === 0 ? "pt-8" : item.id % 3 === 1 ? "pt-20" : "pt-32";
              
              return (
                <div 
                  key={`${item.id}-${index}`} 
                  className={`${alignY} shrink-0 relative transition-transform duration-500`}
                >
                  {/* Floating card framework */}
                  <motion.div 
                    whileHover={{ 
                      scale: 1.05,
                      y: -12,
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    onMouseEnter={() => setHoveredImage(item)}
                    onClick={() => setActiveImage(item)}
                    className={`relative ${item.aspect} rounded-2xl overflow-hidden cursor-pointer bg-luxury-cream group shadow-2xl shadow-luxury-black/5 hover:shadow-luxury-black/25 transition-all duration-700`}
                  >
                    {/* Image with subtle modern distortion grid overlay or black & white to color hover */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out scale-100 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />

                    {/* High design text veil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/95 via-luxury-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                      <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[8px] tracking-[0.4em] text-luxury-gold uppercase font-black bg-luxury-gold/20 px-2.5 py-1 rounded-full">
                            {item.category}
                          </span>
                          <span className="font-mono text-[9px] text-white/50 tracking-widest">{item.date}</span>
                        </div>
                        
                        <h4 className="text-2xl font-serif font-black leading-tight uppercase tracking-tight text-white group-hover:text-luxury-gold transition-colors">
                          {item.title}
                        </h4>
                        
                        <p className="text-xs text-white/70 italic font-serif leading-relaxed line-clamp-2">
                          “{item.caption}”
                        </p>

                        <div className="pt-3 flex justify-between items-center text-[9px] font-mono uppercase tracking-[0.2em] text-luxury-gold">
                          <span className="flex items-center gap-1.5 opacity-60">
                            <MapPin className="w-3 h-3 text-luxury-gold" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1 font-bold group-hover:translate-x-1.5 transition-transform">
                            Open File <Maximize2 className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Elegant floating tag when not hovered */}
                    <div className="absolute top-5 left-5 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                      <div className="flex items-center gap-2 bg-luxury-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-luxury-gold/20 shadow-lg">
                        <item.icon className="w-3.5 h-3.5 text-luxury-gold" />
                        <span className="font-mono text-[8px] font-semibold tracking-widest uppercase text-luxury-black">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Instructions/Indicator */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <div className="h-[1px] w-12 bg-luxury-gold/30" />
        <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-luxury-gray">
          [ HOVER CARDS TO FILL SCREEN • CLICK TO OPEN CASE SUMMARY ]
        </span>
        <div className="h-[1px] w-12 bg-luxury-gold/30" />
      </div>

      {/* Immersive Screen-Filling Hover Overlay */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[160] bg-neutral-950/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden select-none cursor-zoom-out"
            onMouseLeave={() => setHoveredImage(null)}
          >
            {/* Outer edge exit zone triggers */}
            <div 
              className="absolute inset-x-0 top-0 h-16 md:h-24 z-[161] cursor-zoom-out"
              onMouseEnter={() => setHoveredImage(null)}
            />
            <div 
              className="absolute inset-x-0 bottom-0 h-16 md:h-24 z-[161] cursor-zoom-out"
              onMouseEnter={() => setHoveredImage(null)}
            />
            <div 
              className="absolute inset-y-0 left-0 w-16 md:w-24 z-[161] cursor-zoom-out"
              onMouseEnter={() => setHoveredImage(null)}
            />
            <div 
              className="absolute inset-y-0 right-0 w-16 md:w-24 z-[161] cursor-zoom-out"
              onMouseEnter={() => setHoveredImage(null)}
            />

            {/* Immersive centered image frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              onClick={() => {
                setActiveImage(hoveredImage);
                setHoveredImage(null);
              }}
              className="relative w-full h-full max-w-6xl max-h-[80vh] rounded-[2rem] overflow-hidden border border-white/10 shadow-3xl z-[162] grid grid-cols-1 md:grid-cols-12 bg-black pointer-events-auto cursor-pointer group"
              onMouseEnter={(e) => e.stopPropagation()}
            >
              {/* Explicit Exit X for Hovered State */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setHoveredImage(null);
                }}
                className="absolute top-6 right-6 z-[170] flex items-center gap-3 p-2 pr-4 rounded-full bg-white/10 hover:bg-luxury-gold text-white hover:text-black border border-white/20 hover:border-luxury-gold backdrop-blur-md transition-all duration-500 group/exit"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/exit:rotate-90 transition-transform duration-500">
                  <X className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-0 group-hover/exit:opacity-100 transition-opacity duration-500">
                  Go Back
                </span>
              </button>

              {/* Dynamic slow zoom visual panel */}
              <div className="md:col-span-8 h-full relative overflow-hidden">
                <motion.img
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.06 }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  src={hoveredImage.image}
                  alt={hoveredImage.title}
                  className="w-full h-full object-cover object-top brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 pointer-events-none" />
                
                {/* Visual Pill Overlay */}
                <div className="absolute left-6 top-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-luxury-gold">
                    {hoveredImage.category}
                  </span>
                </div>
              </div>

              {/* Sublime Editorial Metadata Right */}
              <div className="md:col-span-4 h-full bg-luxury-black p-8 md:p-10 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 text-white overflow-y-auto luxury-scrollbar">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.6em] text-luxury-gold font-bold">CASE FILE PREVIEW</span>
                    <div className="h-[1px] w-8 bg-luxury-gold/30" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-white uppercase leading-none group-hover:text-luxury-gold transition-colors">
                    {hoveredImage.title}
                  </h3>
                  
                  <div className="h-[1.5px] w-16 bg-luxury-gold" />

                  {/* Somatic Word Bubble */}
                  <div className="p-4 border border-white/10 bg-white/5 rounded-xl italic text-xs text-luxury-gold/90 font-serif leading-relaxed">
                    “{hoveredImage.quote}”
                  </div>

                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {hoveredImage.caption}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-white/50">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-luxury-gold" /> {hoveredImage.location}</span>
                    <span>{hoveredImage.date}</span>
                  </div>

                  <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-center text-luxury-gold/50 bg-luxury-gold/5 py-2.5 rounded border border-luxury-gold/15 group-hover:bg-luxury-gold group-hover:text-black group-hover:border-luxury-gold transition-all duration-550">
                    CLICK CONTAINER TO LOCK DETAILS DIALOG
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Cinematic Details Overlay Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-luxury-black/95 flex items-center justify-center p-4 md:p-12 overflow-y-auto"
            onClick={() => setActiveImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, filter: "blur(15px)" }}
              animate={{ scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ scale: 0.95, y: 30, filter: "blur(15px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-7xl bg-luxury-black rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] lg:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Noise overlay inside modal */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <filter id="documentNoiseModal">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#documentNoiseModal)" />
                </svg>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setActiveImage(null)}
                className="absolute top-6 right-6 z-[210] flex items-center gap-3 p-2 pr-4 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-500 group/back"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/back:rotate-90 transition-transform duration-500">
                  <X className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-0 group-hover/back:opacity-100 transition-opacity duration-500">
                  Go Back
                </span>
              </button>

              {/* Left Column: Visual Area with subtle overlay (7 cols) */}
              <div className="lg:col-span-7 bg-black min-h-[300px] lg:min-h-0 relative flex items-center justify-center group/visual overflow-hidden order-1 lg:order-1">
                {/* Background ambient glow matching current image state */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 z-10 pointer-events-none" />
                <img 
                  src={activeImage.image} 
                  alt={activeImage.title} 
                  className="w-full h-full object-cover object-top opacity-85 group-hover/visual:scale-105 transition-transform duration-[4000ms] ease-out brightness-90 grayscale-[0.2]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Quick Arrow Nav Overlay for cinematic preview */}
                <div className="absolute inset-x-4 bottom-8 z-20 flex justify-between pointer-events-none">
                  <button 
                    onClick={handlePrev}
                    className="p-3.5 rounded-full bg-black/60 hover:bg-luxury-gold text-white hover:text-black border border-white/10 hover:border-luxury-gold pointer-events-auto backdrop-blur-md transition-all duration-400 group/btn"
                  >
                    <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-3.5 rounded-full bg-black/60 hover:bg-luxury-gold text-white hover:text-black border border-white/10 hover:border-luxury-gold pointer-events-auto backdrop-blur-md transition-all duration-400 group/btn"
                  >
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Vertical Text Aesthetic in margin */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 rotate-180 writing-mode-vertical pointer-events-none opacity-20 hidden md:block select-none">
                  <span className="font-mono text-[9px] uppercase tracking-[0.8em] text-white">WILLIAM OKUMU ARCHIVES</span>
                </div>
              </div>

              {/* Right Column: Elaborate Narrative Area (5 cols) */}
              <div className="lg:col-span-5 bg-luxury-black text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-y-auto luxury-scrollbar relative z-10 border-t lg:border-t-0 lg:border-l border-white/10 order-2 lg:order-2">
                <div className="space-y-8">
                  {/* Category, Date & Loc stamps */}
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="font-mono text-[9px] tracking-[0.5em] text-luxury-gold font-bold bg-luxury-gold/15 px-3 py-1.5 rounded-full border border-luxury-gold/30">
                      {activeImage.category}
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-white/50 tracking-widest uppercase">
                      <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                      {activeImage.date}
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-white/50 tracking-widest uppercase">
                      <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                      {activeImage.location}
                    </div>
                  </div>

                  {/* High Title */}
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.6mm] text-luxury-gold/50 block">Dossier Case File {activeImage.id.toString().padStart(2, '0')}</span>
                    <h3 className="text-4xl lg:text-5xl font-serif font-black tracking-tight leading-none text-white uppercase">
                      {activeImage.title}
                    </h3>
                    <div className="h-[2px] w-24 bg-luxury-gold" />
                  </div>

                  {/* Somatic / Legal insight block */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/15 relative">
                    <activeImage.icon className="absolute top-5 right-5 w-6 h-6 text-luxury-gold/20" />
                    <p className="text-sm font-serif italic text-white/80 leading-relaxed pr-8">
                      “{activeImage.quote}”
                    </p>
                  </div>

                  {/* Substantive narrative */}
                  <div className="space-y-4">
                    <h5 className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold">Strategic Case Significance</h5>
                    <p className="text-sm md:text-base text-white/70 font-light leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:text-luxury-gold first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                      {activeImage.details}
                    </p>
                  </div>
                </div>

                {/* Footer and certification of dossier */}
                <div className="pt-12 mt-12 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-luxury-gold/20 mr-1.5 flex items-center justify-center text-luxury-gold border border-luxury-gold/30">
                      ⚖️
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-white/40">Affiliated Counselor</span>
                      <span className="text-xs font-bold text-white/90">W. Okumu </span>
                    </div>
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-luxury-gold/60 border border-luxury-gold/20 px-2.5 py-1 rounded-sm bg-luxury-gold/5">
                    RECORDS TRUSTEE
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
