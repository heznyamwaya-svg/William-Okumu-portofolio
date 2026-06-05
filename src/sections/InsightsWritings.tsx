import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Scale, Landmark, Heart, Users, ArrowUpRight, Clock, Feather, X, Calendar, Share2, Bookmark } from 'lucide-react';
import { cn } from '../lib/utils';
import { useDragScroll } from '../hooks/useDragScroll';

gsap.registerPlugin(ScrollTrigger);

const INSIGHTS = [
  {
    category: "Constitutional Reform",
    title: "The Muruatetu Legacy: Beyond Mandatory Sentencing",
    excerpt: "Exploring the evolution of Kenyan sentencing jurisprudence and the imperative of judicial discretion in preserving human dignity.",
    readTime: "8 min read",
    date: "March 2024",
    icon: Landmark,
    color: "luxury-gold",
    fullContent: "The Muruatetu case stands as a beacon of constitutional hope. By challenging the mandatory nature of the death penalty, it restored the fundamental power of judicial discretion. Our advocacy focused on the principle that 'one size does not fit all' in justice. Every individual's circumstances, history, and potential for redemption must be weighed. This legacy continues to ripple through our legal system, reminding us that dignity is the bedrock of every verdict. The implications extend far beyond the death penalty, influencing how we perceive sentencing for all major offenses, ensuring that the human element is never lost to administrative rigidity.",
    tags: ["Constitutional Law", "Human Rights", "Sentencing Reform"]
  },
  {
    category: "Prison Justice",
    title: "Rehabilitation as a Constitutional Conversation",
    excerpt: "Why the legal system must recognize that transformation is not an elective process, but a fundamental right within the penal framework.",
    readTime: "12 min read",
    date: "January 2024",
    icon: BookOpen,
    color: "luxury-black",
    fullContent: "Prisons should be houses of transformation, not warehouses of despair. A constitutional approach to rehabilitation requires us to view inmates as future citizens, not perpetual subjects of punishment. Our research indicates that when the legal system prioritizes educational and psychological support, recidivism drops significantly. This isn't just about soft hearts; it's about smart justice. We argue that the right to rehabilitation is implicitly protected under the right to dignity and the prohibition against cruel treatment. By shifting the conversation, we pave the way for a society that heals rather than one that merely segregates.",
    tags: ["Penal Reform", "Social Justice", "Public Policy"]
  },
  {
    category: "Trauma-Informed Law",
    title: "Somatic Awareness in Advocacy",
    excerpt: "Integrating physiological understanding into the courtroom to address the root causes of conflict and pave the way for genuine restoration.",
    readTime: "10 min read",
    date: "December 2023",
    icon: Heart,
    color: "luxury-gold",
    fullContent: "Legal trauma is not just mental; it is biological. Clients navigating the justice system often experience severe physiological stress that impairs their ability to participate effectively in their own defense. By integrating Somatic Experiencing principles into our practice, we acknowledge the nervous system's role in justice. This trauma-informed approach allows for more accurate testimony, better client communication, and ultimately, a more humane legal process. We advocate for courtrooms that recognize the physical manifestations of trauma, ensuring that the pursuit of truth does not come at the cost of the seeker's well-being.",
    tags: ["Somatic Experiencing", "Legal Psychology", "Wellbeing"]
  },
  {
    category: "Public Interest",
    title: "Legal Literacy as Liberation",
    excerpt: "How empowering the marginalized with constitutional knowledge shifts the power dynamics of the entire justice system from within.",
    readTime: "15 min read",
    date: "October 2023",
    icon: Users,
    color: "luxury-black",
    fullContent: "The greatest barrier to justice is often a lack of information. Legal literacy is the key that unlocks the doors of the courthouse for those who have been systematically excluded. Our programs focus on demystifying the law, turning complex statutes into tools for empowerment. When a community understands its constitutional rights, it can no longer be easily exploited. This shift in power dynamics is the essence of public interest litigation. We don't just win cases; we build capacity. A literate population is the ultimate check and balance in a democratic society, ensuring that power remains accountable to the people.",
    tags: ["Legal Empowerment", "Grassroots", "Community Rights"]
  }
];

export default function InsightsWritings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedInsight, setSelectedInsight] = useState<typeof INSIGHTS[0] | null>(null);

  const sidebarDrag = useDragScroll();
  const contentDrag = useDragScroll();
  
  useEffect(() => {
    if (selectedInsight) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedInsight]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the main title with blur effect
      gsap.from(".journal-title", {
        opacity: 0,
        filter: "blur(20px)",
        y: 40,
        rotateX: -15,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".journal-header",
          start: "top 80%",
        }
      });

      // Staggered article reveals
      gsap.utils.toArray('.article-card').forEach((card: any, i: number) => {
        gsap.from(card, {
          opacity: 0,
          y: i % 2 === 0 ? 100 : 60,
          rotateY: i % 2 === 0 ? -5 : 5,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        });
      });

      // Parallax for ambient elements
      gsap.to(".ambient-orb", {
        y: (i, target) => (target as HTMLElement).dataset.speed ? parseFloat((target as HTMLElement).dataset.speed!) * 100 : 0,
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
    <section id="insights" ref={containerRef} className="py-48 px-8 lg:px-24 bg-luxury-white relative overflow-hidden">
      {/* Cinematic Ambient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div data-speed="0.5" className="ambient-orb absolute top-1/4 -right-24 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px]" />
        <div data-speed="0.2" className="ambient-orb absolute bottom-0 left-1/4 w-[60vw] h-[60vw] bg-luxury-amber/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-luxury-black/[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <header className="journal-header mb-40 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between items-center gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
            >
              <Feather className="w-5 h-5 text-luxury-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gold font-bold">The Journal of Justice</span>
            </motion.div>
            <h2 className="journal-title text-5xl lg:text-9xl font-serif font-black text-luxury-black mb-12 leading-[0.8]">
              Thoughts on <br />
              <span className="italic text-luxury-gold">Justice.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-luxury-gray font-light max-w-2xl leading-relaxed text-balance">
              Reflections on law, dignity, rehabilitation, constitutional justice, and human transformation.
            </p>
          </div>

          <div className="flex flex-col lg:items-end gap-3 text-center lg:text-right">
             <div className="px-8 py-4 glass rounded-full border-luxury-gold/20 flex items-center gap-4">
                <Clock className="w-4 h-4 text-luxury-gold" />
                <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-luxury-black">Volume 2024.III</span>
             </div>
             <p className="font-serif italic text-luxury-gray text-sm">Curated Insights from the Steward</p>
          </div>
        </header>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 perspective-1000">
          {INSIGHTS.map((insight, idx) => {
            const Icon = insight.icon;
            return (
              <motion.article 
                key={idx}
                onClick={() => setSelectedInsight(insight)}
                whileHover={{ 
                  y: -25, 
                  scale: 1.04,
                  rotateY: idx % 2 === 0 ? 4 : -4,
                  rotateX: 3,
                  z: 100,
                  boxShadow: "0 50px 100px -20px rgba(17, 17, 17, 0.15), 0 30px 60px -15px rgba(200, 169, 107, 0.2), inset 0 0 0 1px rgba(255,255,255,0.8)"
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  duration: 0.6
                }}
                className={cn(
                  "article-card group glass p-12 lg:p-16 rounded-[4rem] border-white/80 bg-white/50 flex flex-col justify-between cursor-pointer overflow-hidden backdrop-blur-3xl",
                  idx % 2 === 1 ? "md:mt-32" : ""
                )}
              >
                {/* Cinematic Light Reflection */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Decorative Pattern Overlay */}
                <div className="absolute top-0 right-0 w-64 h-64 border-[1px] border-luxury-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 group-hover:border-luxury-gold/20 transition-all duration-[2s] ease-out" />

                <div className="space-y-12">
                   <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black">{insight.category}</span>
                        <div className="flex items-center gap-4 text-luxury-gray/60 font-mono text-[8px] uppercase tracking-[0.2em]">
                           <span>{insight.date}</span>
                           <span className="w-1 h-1 bg-luxury-gold rounded-full" />
                           <span>{insight.readTime}</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-luxury-cream rounded-2xl flex items-center justify-center group-hover:bg-luxury-black transition-colors duration-500">
                        <Icon className="w-5 h-5 text-luxury-gold group-hover:text-white" />
                      </div>
                   </div>

                   <div className="space-y-6">
                      <h3 className="text-3xl lg:text-5xl font-serif font-black text-luxury-black leading-tight group-hover:text-luxury-gold transition-colors duration-500">
                        {insight.title}
                      </h3>
                      <p className="text-lg text-luxury-gray font-light leading-relaxed">
                        {insight.excerpt}
                      </p>
                   </div>
                </div>

                <div className="mt-16 flex items-center justify-between">
                   <button className="text-[10px] font-mono uppercase tracking-[0.5em] text-luxury-black font-bold flex items-center gap-4 border-b border-luxury-gold/30 pb-2 group-hover:border-luxury-gold transition-all">
                      Read insight
                      <ArrowUpRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                   <div className="h-10 w-[1px] bg-luxury-gold/20" />
                   <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                   </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Narrative Philosophical Interstitials */}
        <div className="mt-64 space-y-40">
           <div className="text-center">
              <motion.h4
                 initial={{ opacity: 0, filter: "blur(15px)" }}
                 whileInView={{ opacity: 1, filter: "blur(0px)" }}
                 transition={{ duration: 1.5 }}
                 className="text-4xl lg:text-8xl font-serif font-black text-luxury-black italic leading-[0.9] max-w-6xl mx-auto"
              >
                “Justice evolves when <span className="text-luxury-gold font-bold not-italic underline decoration-luxury-gold/20 underline-offset-8">dignity</span> becomes central.”
              </motion.h4>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="space-y-8">
                 <div className="h-16 w-[1px] bg-luxury-gold/50" />
                 <h5 className="text-4xl lg:text-6xl font-serif font-bold text-luxury-black leading-tight">
                    Beyond the <br /> <span className="italic text-luxury-gold">Verdict.</span>
                 </h5>
                 <p className="text-xl text-luxury-gray font-light leading-relaxed">
                    The courtroom is where law is tested, but the journal is where justice is reimagined. Knowledge becomes liberation only when shared.
                 </p>
                 <ArrowUpRight className="w-12 h-12 text-luxury-gold/20" />
              </div>

              <div className="p-16 glass rounded-[4rem] border-luxury-black bg-luxury-black text-white relative group overflow-hidden shadow-2xl">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
                 <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
                 <div className="relative z-10 space-y-12">
                    <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-luxury-gold">The Vision Directive</span>
                    <h6 className="text-3xl lg:text-5xl font-serif font-light leading-tight italic">
                      “Legal systems must recognize <span className="text-luxury-gold font-bold not-italic">humanity</span> before they can deliver equity.”
                    </h6>
                    <div className="flex items-center gap-6 pt-12 border-t border-white/10">
                       <img src="/images/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
                       <div>
                          <p className="text-sm font-bold">William Okumu</p>
                          <p className="text-[9px] font-mono tracking-widest text-white/40">Advocate & Justice Philosopher</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Closing Narrative Footnote */}
        <footer className="mt-64 border-t border-luxury-black/5 pt-24 text-center group cursor-pointer">
           <div className="flex flex-col items-center gap-8">
              <div className="flex gap-4">
                 {["Archives", "Philosophy", "Reform", "Dignity", "Stewardship"].map((tag, i) => (
                    <span key={i} className="text-[8px] font-mono uppercase tracking-[0.6em] text-luxury-gray/40 group-hover:text-luxury-gold group-hover:tracking-[0.8em] transition-all duration-700">
                       {tag}
                    </span>
                 ))}
              </div>
              <div className="p-6 rounded-full border border-luxury-gold/20 flex flex-col items-center gap-2 group-hover:bg-luxury-gold/5 transition-all">
                 <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-luxury-black font-black">Open Complete Archive</span>
                 <ArrowUpRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
           </div>
        </footer>
      </div>

      {/* Insight Details Modal */}
      <AnimatePresence>
        {selectedInsight && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8" onWheel={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInsight(null)}
              className="absolute inset-0 bg-luxury-black/95 backdrop-blur-2xl"
            />
            
             <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-5xl bg-luxury-white rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row h-full max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedInsight(null)}
                className="absolute top-4 right-4 lg:top-8 lg:right-8 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-luxury-black/10 hover:bg-luxury-gold hover:text-white transition-all flex items-center justify-center group z-30 shadow-lg backdrop-blur-sm"
              >
                <X className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-90 transition-transform duration-500" />
              </button>
 
              {/* Cover Info Area */}
              <div 
                ref={sidebarDrag.ref}
                onMouseDown={sidebarDrag.onMouseDown}
                onMouseUp={sidebarDrag.onMouseUp}
                onMouseMove={sidebarDrag.onMouseMove}
                onMouseLeave={sidebarDrag.onMouseLeave}
                style={sidebarDrag.style}
                className="w-full lg:w-[45%] bg-luxury-cream/40 p-6 lg:p-12 relative flex flex-col border-b lg:border-b-0 lg:border-r border-luxury-gold/10 overflow-y-auto luxury-scrollbar select-none" 
                data-lenis-prevent
                onWheel={(e) => e.stopPropagation()}
              >
                <div className="absolute -top-12 -left-12 w-64 h-64 border border-luxury-gold/10 rounded-full opacity-20 pointer-events-none" />
                
                <div className="relative z-10 mb-auto">
                   <div className="flex items-center gap-4 mb-6 lg:mb-10">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl flex items-center justify-center border border-luxury-gold/20 shadow-sm">
                        <selectedInsight.icon className="w-5 h-5 lg:w-6 lg:h-6 text-luxury-gold" />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-luxury-gold font-bold">{selectedInsight.category}</span>
                   </div>
                   
                   <h3 className="text-xl lg:text-3xl font-serif font-black text-luxury-black leading-tight mb-6">
                     {selectedInsight.title.split(':').map((part, i) => (
                       <span key={i} className={i === 1 ? "italic text-luxury-gold block mt-2" : "block"}>{part}{i === 0 && selectedInsight.title.includes(':') ? ':' : ''}</span>
                     ))}
                   </h3>
                </div>
 
                <div className="relative z-10 space-y-6 lg:space-y-10">
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {selectedInsight.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 lg:px-4 lg:py-2 rounded-full border border-luxury-gold/20 bg-white/50 text-[7px] lg:text-[8px] font-mono uppercase tracking-widest text-luxury-gray">
                        {tag}
                      </span>
                    ))}
                  </div>
 
                  <div className="pt-6 lg:pt-10 border-t border-luxury-gold/10 flex items-center justify-between">
                     <div className="flex flex-col">
                        <span className="text-[8px] lg:text-[10px] font-mono uppercase tracking-widest text-luxury-gray/60">Published</span>
                        <span className="text-xs lg:text-sm font-serif italic text-luxury-gold font-bold">{selectedInsight.date}</span>
                     </div>
                     <div className="flex gap-2 lg:gap-4">
                        <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-luxury-gold/20 flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-all">
                           <Share2 className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                        </button>
                        <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-luxury-gold/20 flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-all">
                           <Bookmark className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                        </button>
                     </div>
                  </div>
                </div>
              </div>
 
              {/* Narrative Text Area */}
              <div 
                ref={contentDrag.ref}
                onMouseDown={contentDrag.onMouseDown}
                onMouseUp={contentDrag.onMouseUp}
                onMouseMove={contentDrag.onMouseMove}
                onMouseLeave={contentDrag.onMouseLeave}
                style={contentDrag.style}
                className="w-full lg:w-[55%] p-6 lg:p-12 relative overflow-y-auto luxury-scrollbar h-full select-none" 
                data-lenis-prevent
                onWheel={(e) => e.stopPropagation()}
              >
                 <div className="max-w-xl mx-auto space-y-10 lg:space-y-12">
                   <div className="flex items-center gap-6">
                      <div className="h-[1px] flex-1 bg-luxury-gold/20" />
                      <Calendar className="w-4 h-4 text-luxury-gold/40" />
                      <div className="h-[1px] flex-1 bg-luxury-gold/20" />
                   </div>
 
                   <p className="text-lg lg:text-xl text-luxury-gray font-light leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-black first-letter:text-luxury-gold first-letter:mr-4 first-letter:float-left first-letter:mt-2">
                     {selectedInsight.fullContent}
                   </p>
 
                   <div className="pt-10 lg:pt-16 space-y-6 lg:space-y-8">
                     <div className="p-8 lg:p-10 glass rounded-[2rem] bg-luxury-black text-white relative overflow-hidden group">
                       <div className="absolute inset-0 opacity-10 pointer-events-none">
                         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
                         <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white" />
                       </div>
                       <p className="text-[10px] lg:text-xs font-mono uppercase tracking-[0.3em] text-white/40 mb-4">Core Thesis</p>
                       <p className="text-xl lg:text-2xl font-serif italic text-luxury-gold font-medium">
                         “Advocacy is the bridge between constitutional promise and lived reality.”
                       </p>
                     </div>
 
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <Feather className="w-5 h-5 text-luxury-gold" />
                           <span className="font-mono text-[8px] lg:text-[9px] uppercase tracking-[0.4em] text-luxury-gray">The Steward's Journal</span>
                        </div>
                        <div className="font-serif italic text-sm lg:text-base text-luxury-black font-bold border-b-2 border-luxury-gold/20 pb-1">
                          W. Okumu
                        </div>
                     </div>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
