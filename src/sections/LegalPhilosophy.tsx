import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Sparkles, Scale, Heart, Compass } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const PHILOSOPHIES = [
  {
    title: "Human Dignity",
    statement: "Justice must preserve human dignity.",
    description: "Every person retains inherent worth. My practice is built on the belief that a legal system which fails to recognize the humanity of its subjects fails to be just.",
    icon: Heart
  },
  {
    title: "Rehabilitation",
    statement: "Legal systems must recognize humanity before they can deliver equity.",
    description: "Law should create pathways for transformation, not just dead-ends. Advocacy can restore purpose and identity to those the system has forgotten.",
    icon: Sparkles
  },
  {
    title: "Evolving Justice",
    statement: "Rehabilitation is not weakness — it is justice evolving.",
    description: "True justice looks beyond retribution. It seeks healing, accountability, and the eventual reintegration of every individual back into society's fabric.",
    icon: Scale
  },
  {
    title: "Restoration",
    statement: "The legal system should not only punish, but restore.",
    description: "Integrating trauma-informed rigor with legal advocacy allows us to address the root causes of conflict and pave the way for genuine restoration.",
    icon: Compass
  }
];

export default function LegalPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for floating panels
      gsap.utils.toArray('.philosophy-card').forEach((card: any, i: number) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -100 : 100,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Blur to focus typography reveal
      gsap.utils.toArray('.philosophy-statement').forEach((text: any) => {
        gsap.from(text, {
          filter: 'blur(20px)',
          opacity: 0,
          y: 30,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-46 px-12 lg:px-24 bg-luxury-white relative overflow-hidden z-0">
      {/* Cinematic Ambient Elements */}
      <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-luxury-gold/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-luxury-amber/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-48 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="h-20 w-[1px] bg-luxury-gold" />
            <h2 className="text-5xl lg:text-8xl font-serif font-black text-luxury-black mb-8 leading-[0.95]">
              Justice Beyond <br /> 
              <span className="italic text-luxury-gold">Punishment.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-luxury-gray font-light leading-relaxed max-w-2xl px-4">
              A philosophy grounded in dignity, transformation, rehabilitation, and access to justice.
            </p>
          </motion.div>
        </header>

        {/* Floating Narrative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-48 lg:gap-y-64 relative">
          {/* Central Architectural Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-luxury-gold/10 hidden lg:block" />

          {PHILOSOPHIES.map((phi, idx) => {
            const Icon = phi.icon;
            return (
              <div 
                key={idx} 
                className={cn(
                  "philosophy-card flex flex-col",
                  idx % 2 === 0 ? "lg:items-end text-left lg:text-right" : "lg:items-start text-left"
                )}
              >
                <div className="max-w-lg space-y-12">
                  <div className={cn(
                    "flex items-center gap-6",
                    idx % 2 === 0 ? "lg:flex-row-reverse" : "flex-row"
                  )}>
                    <div className="p-5 bg-white shadow-xl shadow-luxury-black/5 rounded-3xl border border-luxury-black/5">
                      <Icon className="w-8 h-8 text-luxury-gold" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-black">
                      {phi.title}
                    </span>
                  </div>

                  <h3 className="philosophy-statement text-3xl lg:text-5xl font-serif font-bold italic text-luxury-black leading-tight text-balance">
                    "{phi.statement}"
                  </h3>

                  <div className="glass p-12 rounded-[3.5rem] border-white/80 bg-white/40 shadow-sm backdrop-blur-xl relative group">
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-luxury-gold/5 -z-10 group-hover:scale-125 transition-transform duration-1000" />
                    <p className="text-lg text-luxury-gray font-light leading-relaxed relative z-10">
                      {phi.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Master Narrative Closing */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="mt-64 p-16 lg:p-32 rounded-[5rem] border border-luxury-gold/20 bg-luxury-black text-white relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
             <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <Quote className="w-16 h-16 text-luxury-gold mx-auto mb-2 opacity-50" />
            <h4 className="text-4xl lg:text-6xl font-serif font-light leading-tight italic">
              “Justice is not merely a verdict delivered; it is a <span className="text-luxury-gold font-bold not-italic">humanity restored</span> through the courage of advocacy.”
            </h4>
            <div className="flex flex-col items-center gap-4">
               <div className="w-12 h-[1px] bg-luxury-gold" />
               <p className="font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gold">
                 Counselor William Okumu Onyango
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
