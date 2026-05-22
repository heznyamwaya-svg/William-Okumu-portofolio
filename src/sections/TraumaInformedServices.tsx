import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Activity, ShieldCheck, Users, Sun, Sparkles, Compass } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const SERVICE_PILLARS = [
  {
    title: "Trauma-Informed Advocacy",
    description: "Understanding the emotional effects of incarceration and legal conflict. We integrate compassion with legal rigor to protect the whole person.",
    icon: ShieldCheck,
    detail: "Psychological Integrity"
  },
  {
    title: "Somatic Integration",
    description: "Utilizing Somatic Experiencing (SE) principles to regulate the nervous system during legal stress. Healing-centered support for resilient outcomes.",
    icon: Activity,
    detail: "Nervous System Regulation"
  },
  {
    title: "Human Dignity",
    description: "A legal approach that recognizes inherent worth beyond the verdict. We believe justice is a tool for preserving and restoring humanity.",
    icon: Heart,
    detail: "Dignity-First Praxis"
  },
  {
    title: "Rehabilitation",
    description: "Advocacy that supports transformation. We empower individuals through legal education and emotional resilience for successful reintegration.",
    icon: Compass,
    detail: "Strategic Restoration"
  }
];

export default function TraumaInformedServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Breathing background effect
      gsap.to(".bg-glow", {
        scale: 1.1,
        opacity: 0.4,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Scroll-based expansion: Tension to Openness
      gsap.fromTo(".pillar-container", 
        { gap: "2rem", scale: 0.95 },
        {
          gap: "8rem",
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
          }
        }
      );

      // Blur to focus typography reveal
      gsap.utils.toArray('.contemplative-text').forEach((text: any) => {
        gsap.from(text, {
          filter: 'blur(20px)',
          opacity: 0,
          y: 20,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
          }
        });
      });

      // Image parallax
      gsap.to(bgImageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-48 px-8 lg:px-24 bg-luxury-white relative overflow-hidden">
      {/* Immersive Ambient Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="bg-glow absolute top-1/4 left-1/4 w-[80vw] h-[80vw] bg-luxury-gold/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="bg-glow absolute bottom-1/4 right-1/4 w-[60vw] h-[60vw] bg-luxury-amber/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <header className="mb-48 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <div className="h-16 w-[1px] bg-luxury-gold/30" />
            <span className="font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gold font-bold">
              Human-Centered Advocacy
            </span>
            <h2 className="text-5xl lg:text-9xl font-serif font-black text-luxury-black mb-12 leading-[0.85]">
              Law with Human <br /> 
              <span className="italic text-luxury-gold">Understanding.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-luxury-gray font-light leading-relaxed max-w-3xl">
              Integrating legal advocacy with dignity, emotional awareness, rehabilitation, and trauma-informed justice. A praxis that heals while it defends.
            </p>
          </motion.div>
        </header>

        {/* Narrative Grid System */}
        <div className="pillar-container grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          
          {/* Central Metaphor Image (Generated Style via Unsplash) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] hidden lg:flex items-center justify-center">
             <div ref={bgImageRef} className="w-[60%] h-[120%] border-[1px] border-luxury-gold/30 rounded-full blur-sm" />
          </div>

          {SERVICE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 1 }}
                viewport={{ once: true }}
                className={cn(
                  "group relative p-12 lg:p-16 glass rounded-[4rem] border-white/60 bg-white/40 shadow-sm hover:shadow-2xl hover:border-luxury-gold/20 transition-all duration-1000 backdrop-blur-xl",
                  idx % 2 === 1 ? "md:mt-32" : ""
                )}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-6 bg-luxury-white rounded-3xl border border-luxury-black/5 group-hover:bg-luxury-gold transition-all duration-700">
                      <Icon className="w-8 h-8 text-luxury-gold group-hover:text-white" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold font-black opacity-40 group-hover:opacity-100 transition-opacity">
                      {pillar.detail}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-black mb-8 leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-lg text-luxury-gray font-light leading-relaxed mb-12 flex-1">
                    {pillar.description}
                  </p>

                  <div className="mt-auto pt-8 border-t border-luxury-gold/10">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-luxury-gray">Stewardship Protocol</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contemplative Philosophical Quotes */}
        <div className="mt-64 space-y-32">
          {["Justice should understand human pain.", "Legal systems must recognize humanity before they can deliver equity."].map((quote, i) => (
            <div key={i} className="text-center">
              <h4 className="contemplative-text text-4xl lg:text-7xl font-serif font-light italic text-luxury-black leading-tight max-w-5xl mx-auto">
                “{quote}”
              </h4>
            </div>
          ))}
        </div>

        {/* Final Outro Narrative Card */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="mt-64 p-16 lg:p-32 rounded-[5rem] overflow-hidden relative group"
        >
          {/* Subtle Video-like Background (Abstract light) */}
          <div className="absolute inset-0 z-0">
             <img 
               src="/images/William4.jpeg"
               alt="Calm architectural light" 
               className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-luxury-black/60 group-hover:bg-luxury-black/40 transition-colors duration-1000" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-12">
            <Sparkles className="w-16 h-16 text-luxury-gold mx-auto mb-8 animate-pulse" />
            <h5 className="text-4xl lg:text-6xl font-serif font-light leading-tight italic">
              “Healing and accountability can <span className="text-luxury-gold font-bold not-italic">coexist</span> when law is practiced with human understanding.”
            </h5>
            <div className="h-[1px] w-24 bg-luxury-gold mx-auto" />
            <p className="font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gold">
              Beyond Verdicts // Towards Peace
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtle UI details */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12 pointer-events-none opacity-20">
         <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-gray">Compassion</span>
         <div className="w-12 h-[1px] bg-luxury-gold/50" />
         <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-gray">Rigor</span>
         <div className="w-12 h-[1px] bg-luxury-gold/50" />
         <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-gray">Healing</span>
      </div>
    </section>
  );
}
