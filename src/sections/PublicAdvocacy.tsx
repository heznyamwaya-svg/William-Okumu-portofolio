import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Mic2, Tv, Users, MessageSquare, Heart, ArrowUpRight, Volume2 } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const MEDIA_CONTENT = [
  {
    type: "Speaking",
    title: "The Architecture of Redemption",
    platform: "Keynote Address",
    description: "A profound exploration of transformation, shifting the narrative from incarceration to advocacy on international stages.",
    image: "/images/William14.jpeg",
    icon: Mic2,
    color: "luxury-gold"
  },
  {
    type: "Advocacy",
    title: "Justice via Literacy",
    platform: "Legal Awareness Campaign",
    description: "Bridging the gap between the complex legal bar and the marginalized through grassroots education initiatives.",
    image: "/images/William16.jpeg",
    icon: Users,
    color: "luxury-black"
  },
  {
    type: "Media",
    title: "Constitutional Courage",
    platform: "National TV Interview",
    description: "Discussing landmark case outcomes and the future of human rights litigation in the Kenyan High Court.",
    image: "/images/williamrob3.jpeg",
    icon: Tv,
    color: "luxury-gold"
  },
  {
    type: "Counsel",
    title: "Spiritual Stewardship",
    platform: "Church Chaplaincy",
    description: "Integrating emotional healing with guidance, mentoring the next generation through transformative communication.",
    image: "/images/William3.jpeg",
    icon: Heart,
    color: "luxury-black"
  }
];

export default function PublicAdvocacy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".advocacy-title", {
        opacity: 0,
        y: 60,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".advocacy-header",
          start: "top 80%",
        }
      });

      gsap.from(".media-card", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".media-grid",
          start: "top 75%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-8 lg:px-24 bg-luxury-white relative overflow-hidden">
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-luxury-gold mix-blend-multiply blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-full bg-luxury-amber mix-blend-multiply blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="advocacy-header mb-32 flex flex-col md:flex-row md:items-end justify-between items-start gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-luxury-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-bold">
                The Public Voice
              </span>
            </motion.div>
            <h2 className="advocacy-title text-5xl lg:text-9xl font-serif font-black text-luxury-black mb-8 leading-[0.8]">
              Voice Beyond <br /> 
              <span className="italic text-luxury-gold">the Courtroom.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-luxury-gray font-light max-w-2xl leading-relaxed text-balance">
              Using advocacy, communication, and education to expand access to justice and human dignity.
            </p>
          </div>

          <div className="flex items-center gap-6 group cursor-pointer bg-luxury-cream/20 px-8 py-4 rounded-full border border-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-500">
            <div className="relative">
              <div className="absolute -inset-2 bg-luxury-gold/20 rounded-full blur-md group-hover:bg-luxury-gold/40 transition-all" />
              <div className="relative w-14 h-14 rounded-full border border-luxury-gold/20 flex items-center justify-center bg-white group-hover:bg-luxury-gold transition-all duration-500">
                 <Volume2 className="w-5 h-5 text-luxury-gold group-hover:text-white animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-luxury-gray">The Public Voice</span>
              <span className="text-xs font-bold text-luxury-black">Audio Narrative Active</span>
            </div>
          </div>
        </header>

        {/* Media Storytelling Grid */}
        <div className="media-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {MEDIA_CONTENT.map((content, idx) => {
            const Icon = content.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="media-card group relative h-[500px] lg:h-[650px] rounded-[3rem] overflow-hidden shadow-2xl shadow-luxury-black/10 border border-white/20"
              >
                {/* Background Image with Cinematic Filter */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] contrast-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-white/60 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                      {content.type}
                    </span>
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:bg-luxury-gold transition-all duration-500">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                       <p className="font-mono text-[10px] uppercase tracking-widest text-luxury-gold/80 italic font-bold">
                         {content.platform}
                       </p>
                       <h3 className="text-3xl lg:text-5xl font-serif font-bold text-white leading-tight">
                         {content.title}
                       </h3>
                    </div>
                    
                    <p className="text-white/60 font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                      {content.description}
                    </p>

                    <button className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] text-white group/btn mt-8">
                       <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-luxury-black transition-all">
                         <Play className="w-4 h-4 fill-current" />
                       </span>
                       Watch Content
                    </button>
                  </div>
                </div>

                {/* Ambient Light Wrap */}
                <div className="absolute inset-0 border-[1px] border-white/10 rounded-[3rem] pointer-events-none group-hover:border-luxury-gold/50 transition-colors duration-700" />
              </motion.div>
            );
          })}
        </div>

        {/* Narrative Philosophical Quotes */}
        <div className="mt-48 flex flex-col items-center text-center max-w-4xl mx-auto space-y-24">
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="relative"
           >
              <MessageSquare className="w-16 h-16 text-luxury-gold/20 absolute -top-12 -left-12 rotate-12" />
              <h4 className="text-3xl lg:text-6xl font-serif font-light text-luxury-black italic leading-tight">
                “Advocacy must reach <span className="text-luxury-gold font-bold not-italic">beyond</span> the courtroom into the very physiology of the people we represent.”
              </h4>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
              <div className="p-12 glass rounded-[3rem] border-luxury-gold/10 bg-luxury-cream/20 text-left">
                 <h5 className="font-mono text-[10px] uppercase tracking-widest text-luxury-gold mb-6 font-black">Strategic Intent</h5>
                 <p className="text-xl font-serif text-luxury-black leading-relaxed">
                   Transformation is possible when dignity is restored at the grassroots level of legal awareness.
                 </p>
              </div>
              <div className="p-12 glass rounded-[3rem] border-luxury-gold/10 bg-luxury-black text-white text-left">
                 <h5 className="font-mono text-[10px] uppercase tracking-widest text-luxury-gold mb-6 font-black">Global Vision</h5>
                 <p className="text-xl font-serif text-white leading-relaxed">
                   Justice begins when people understand their rights as inherent, not merely granted by the state.
                 </p>
              </div>
           </div>
        </div>

        {/* Final Outro Narrative Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-48 py-24 border-t border-luxury-black/5 flex flex-col md:flex-row justify-between items-center gap-12"
        >
          <div className="flex items-center gap-6">
             <img src="/images/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
             <div>
                <p className="font-serif font-bold text-luxury-black text-xl">The Digital Steward</p>
                <p className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray">Counsel Protocol v.2.0</p>
             </div>
          </div>
          
          <div className="flex gap-12">
             <div className="flex flex-col gap-2">
                <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-gray/60">Interviews</span>
                <span className="text-sm font-bold text-luxury-black">20+ Records</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-gray/60">Global Talks</span>
                <span className="text-sm font-bold text-luxury-black">15 Keynotes</span>
             </div>
             <div className="flex flex-col gap-2">
                <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-gray/60">Advocacy Range</span>
                <span className="text-sm font-bold text-luxury-black">Continental</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
