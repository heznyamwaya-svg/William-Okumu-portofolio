import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, User, Star, X, Heart, MessageSquareQuote, Calendar, Target } from 'lucide-react';
import { cn } from '../lib/utils';
import { useDragScroll } from '../hooks/useDragScroll';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    name: "Peter Kinuthia",
    role: "Legal Empowerment Beneficiary",
    quote: "He transformed hopelessness into possibility. Through his mentorship, I learned that my story wasn't over, only beginning a new chapter of advocacy.",
    category: "Transformation",
    impact: "Personal Resilience",
    fullStory: "Peter was facing a systemic legal battle that felt insurmountable. Beyond providing legal representation, William took the time to mentor Peter, teaching him the fundamentals of self-advocacy. This journey transformed Peter from a victim of the system into a proactive community advocate who now helps others navigate similar hurdles.",
    details: [
      { label: "Duration", value: "18 Months of Mentorship" },
      { label: "Outcome", value: "Self-Advocacy Mastery" },
      { label: "Legacy", value: "Founded Community Support Group" }
    ]
  },
  {
    name: "UoL Dean of Studies",
    role: "Institutional Colleague",
    quote: "William brings a rare blend of legal rigor and deep emotional intelligence. He doesn't just represent clients; he restores their place in the human family.",
    category: "Professional",
    impact: "Institutional Reform",
    fullStory: "Working within international reform frameworks, William identified key gaps in how trauma-informed care was integrated into legal defense. His collaboration with the commission led to the adoption of new protocols that prioritize the psychological well-being of the disenfranchised, fundamentally shifting the institutional approach from purely procedural to human-centric.",
    details: [
      { label: "Scale", value: "National Protocol Reform" },
      { label: "Collaboration", value: "Human Rights Commission" },
      { label: "Metric", value: "15+ Policy Shifts" }
    ]
  },
  {
    name: "John M.",
    role: "Constitutional Client",
    quote: "Justice finally felt human. For the first time, I wasn't just a case file status. I was a person whose dignity was worth the fight.",
    category: "Advocacy",
    impact: "Human Rights",
    fullStory: "John's case was a complex constitutional challenge involving property rights and gender-based discrimination. William navigated the intricate legal landscape while providing constant emotional support, ensuring Alice felt seen and heard at every stage. The victory not only secured her rights but established a precedent for thousands of women in similar positions.",
    details: [
      { label: "Legal Basis", value: "Constitutional Article 27" },
      { label: "Reach", value: "Precedent for 10k+ cases" },
      { label: "Status", value: "Final Supreme Court Victory" }
    ]
  },
  {
    name: "Hesbon Onyango N.",
    role: "Paralegal Trainee",
    quote: "Advocacy became a path to dignity. The training systems William developed gave us the tools to defend ourselves and our community with pride.",
    category: "Education",
    impact: "Legal Literacy",
    fullStory: "Hesbon was one of the first participants in the grassroots paralegal training initiative. William's modular approach to legal education allowed Samuel to master legal drafting and research despite having limited formal schooling. Today, Samuel manages a drop-in legal aid office that serves as a vital bridge between his community and the formal justice system.",
    details: [
      { label: "Program", value: "Grassroots Legal Literacy" },
      { label: "Placement", value: "Community Legal Office Lead" },
      { label: "Impact", value: "200+ Cases Resolved Annually" }
    ]
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof TESTIMONIALS[0] | null>(null);

  const sidebarDrag = useDragScroll();
  const contentDrag = useDragScroll();

  useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTestimonial]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating cards animation
      gsap.utils.toArray('.testimonial-card').forEach((card: any, i: number) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -60 : 60,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        });
      });

      // Blur to focus quote reveal
      gsap.utils.toArray('.highlight-quote').forEach((quote: any) => {
        gsap.from(quote, {
          filter: 'blur(20px)',
          opacity: 0,
          y: 40,
          duration: 2,
          scrollTrigger: {
            trigger: quote,
            start: "top 85%",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="py-48 px-8 lg:px-24 bg-luxury-cream/20 relative overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-luxury-black" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-luxury-black" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-48 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col items-center gap-10"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-luxury-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gold font-bold">
                Voices of Transformation
              </span>
              <div className="h-[1px] w-12 bg-luxury-gold" />
            </div>
            <h2 className="text-6xl lg:text-9xl font-serif font-black text-luxury-black leading-[0.85] mb-8">
              Human Stories. <br />
              <span className="italic text-luxury-gold">Legal Impact.</span>
            </h2>
            <p className="text-xl lg:text-3xl text-luxury-gray font-light leading-relaxed max-w-3xl">
              Stories of dignity, empowerment, justice, and human transformation shared by those we've had the privilege to serve.
            </p>
          </motion.div>
        </header>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 relative">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={idx} 
              className="testimonial-card group relative cursor-pointer"
              onClick={() => setSelectedTestimonial(t)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="glass p-12 lg:p-20 rounded-[4rem] border-white/80 bg-white/40 shadow-2xl shadow-luxury-black/5 group-hover:border-luxury-gold/30 transition-all duration-1000 flex flex-col h-full backdrop-blur-3xl">
                <Quote className="w-16 h-16 text-luxury-gold/5 absolute top-12 left-12 -z-10 group-hover:scale-110 transition-transform duration-1000" />
                
                <div className="mb-12 flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-luxury-gold/5 flex items-center justify-center border border-luxury-gold/20 shadow-inner">
                      <User className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-luxury-black text-xl">{t.name}</h4>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-luxury-gray/60">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-luxury-gold/40">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current shadow-sm" />
                    ))}
                  </div>
                </div>

                <p className="text-2xl lg:text-3xl font-serif italic text-luxury-black leading-tight mb-12">
                  "{t.quote}"
                </p>

                <div className="mt-auto pt-10 border-t border-luxury-gold/10 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-luxury-gold">Impact Vector</span>
                    <span className="font-bold text-luxury-black text-xs">{t.impact}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[8px] font-mono uppercase tracking-widest text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity">Read Full Story</span>
                    <div className="px-5 py-2 rounded-full bg-luxury-black text-white text-[9px] font-mono uppercase tracking-[0.2em] group-hover:bg-luxury-gold transition-colors">
                      {t.category}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Highlight Quotes */}
        <div className="mt-64 space-y-32">
          {[
            "His story inspired transformation in others.",
            "Advocacy became a path to dignity.",
            "He transformed hopelessness into possibility."
          ].map((text, i) => (
            <motion.h4
              key={i}
              className="highlight-quote text-4xl lg:text-8xl font-serif font-black text-center text-luxury-black italic leading-[0.9] max-w-5xl mx-auto"
            >
              “{text}”
            </motion.h4>
          ))}
        </div>

        {/* Summary Narrative Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-64 p-16 lg:p-32 rounded-[5rem] overflow-hidden relative group text-center bg-luxury-black text-white"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-12">
            <Heart className="w-16 h-16 text-luxury-gold mx-auto mb-8 animate-pulse" />
            <h4 className="text-3xl lg:text-6xl font-serif font-light italic leading-tight">
              “Transformation is not a process you oversee; it is a <span className="text-luxury-gold font-bold not-italic">human journey</span> you walk alongside.”
            </h4>
            <div className="flex flex-col items-center gap-6">
              <div className="h-12 w-[1px] bg-luxury-gold" />
              <p className="font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gold">
                The Sentinel of Restoration
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Identity Row */}
        <div className="mt-32 flex flex-wrap justify-center gap-12 opacity-20 hover:opacity-100 transition-opacity duration-1000">
           {["Rehabilitation", "Redemption", "Dignity", "Integrity", "Courage"].map((word, i) => (
             <div key={i} className="flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-black">{word}</span>
                {i < 4 && <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />}
             </div>
           ))}
        </div>
      </div>
            {/* Expanded Story Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8" onWheel={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTestimonial(null)}
              className="absolute inset-0 bg-luxury-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={`testimonial-${selectedTestimonial.name}`}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-5xl bg-luxury-white rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row h-full max-h-[90vh]"
            >
              <div className="absolute top-4 right-4 lg:top-8 lg:right-8 z-30">
                <button 
                  onClick={() => setSelectedTestimonial(null)}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-luxury-black/10 hover:bg-luxury-gold hover:text-white transition-all flex items-center justify-center group shadow-lg backdrop-blur-md"
                >
                  <X className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden h-full w-full">
                {/* Visual Accent Side */}
                <div 
                  ref={sidebarDrag.ref}
                  onMouseDown={sidebarDrag.onMouseDown}
                  onMouseUp={sidebarDrag.onMouseUp}
                  onMouseMove={sidebarDrag.onMouseMove}
                  onMouseLeave={sidebarDrag.onMouseLeave}
                  style={sidebarDrag.style}
                  className="lg:col-span-5 bg-luxury-cream/50 p-8 lg:p-16 relative flex flex-col justify-between overflow-y-auto luxury-scrollbar select-none" 
                  data-lenis-prevent
                  onWheel={(e) => e.stopPropagation()}
                >
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-luxury-black" />
                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-luxury-black" />
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-luxury-gold/10 flex items-center justify-center border border-luxury-gold/20 mb-6 lg:mb-8">
                      <User className="w-8 h-8 lg:w-10 lg:h-10 text-luxury-gold" />
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <h3 className="text-2xl lg:text-4xl font-serif font-black text-luxury-black">{selectedTestimonial.name}</h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold">{selectedTestimonial.role}</p>
                    </div>
                  </div>

                  <div className="space-y-8 lg:space-y-12 mt-10 lg:mt-0">
                    <div className="grid grid-cols-1 gap-6 lg:gap-8">
                      {selectedTestimonial.details.map((detail, dIdx) => (
                        <div key={dIdx} className="space-y-1">
                          <span className="block font-mono text-[8px] lg:text-[9px] uppercase tracking-widest text-luxury-gray/60">{detail.label}</span>
                          <p className="font-bold text-luxury-black text-base lg:text-lg">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-6 lg:pt-8 border-t border-luxury-gold/20 flex flex-wrap gap-4">
                       <span className="px-4 py-2 rounded-full border border-luxury-gold/30 text-[8px] lg:text-[9px] font-mono text-luxury-gold uppercase tracking-widest">
                         {selectedTestimonial.category}
                       </span>
                       <span className="px-4 py-2 rounded-full bg-luxury-black text-white text-[8px] lg:text-[9px] font-mono uppercase tracking-widest">
                         Impact: {selectedTestimonial.impact}
                       </span>
                    </div>
                  </div>
                </div>

                {/* Content Narrative Side */}
                <div 
                  ref={contentDrag.ref}
                  onMouseDown={contentDrag.onMouseDown}
                  onMouseUp={contentDrag.onMouseUp}
                  onMouseMove={contentDrag.onMouseMove}
                  onMouseLeave={contentDrag.onMouseLeave}
                  style={contentDrag.style}
                  className="lg:col-span-7 p-8 lg:p-20 relative overflow-y-auto h-full luxury-scrollbar select-none" 
                  data-lenis-prevent
                  onWheel={(e) => e.stopPropagation()}
                >
                  <Quote className="w-24 h-24 lg:w-32 lg:h-32 text-luxury-gold/5 absolute -top-8 -left-8" />
                  
                  <div className="relative z-10 space-y-10 lg:space-y-12">
                    <div className="space-y-4 lg:space-y-6">
                      <div className="flex items-center gap-3 text-luxury-gold">
                        <MessageSquareQuote className="w-5 h-5" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">The Sentiment</span>
                      </div>
                      <p className="text-xl lg:text-3xl font-serif italic text-luxury-black leading-tight border-l-4 border-luxury-gold/20 pl-6 lg:pl-8">
                        "{selectedTestimonial.quote}"
                      </p>
                    </div>

                    <div className="space-y-4 lg:space-y-6">
                       <div className="flex items-center gap-3 text-luxury-gold">
                        <Target className="w-5 h-5" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">The Journey</span>
                      </div>
                      <p className="text-base lg:text-xl text-luxury-gray leading-relaxed font-light first-letter:text-5xl lg:first-letter:text-6xl first-letter:font-serif first-letter:font-black first-letter:text-luxury-gold first-letter:mr-3 first-letter:float-left">
                        {selectedTestimonial.fullStory}
                      </p>
                    </div>

                    <div className="pt-8 lg:pt-12 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-luxury-gold" />
                         </div>
                         <span className="font-mono text-[8px] lg:text-[9px] uppercase tracking-widest text-luxury-gray">Verified Impact Record</span>
                       </div>
                       <div className="h-[1px] flex-1 mx-4 lg:mx-8 bg-luxury-gold/10" />
                       <span className="font-serif italic text-base lg:text-lg text-luxury-gold font-bold">William Okumu</span>
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
