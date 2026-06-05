import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, BookOpen, Users, Compass, Microscope, Award, ArrowUpRight, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const KNOWLEDGE_PILLARS = [
  {
    title: "Legal Education Leadership",
    institution: "University of London",
    description: "Deep scholarship and teaching center research focused on common law principles and global legal standards.",
    icon: GraduationCap,
    category: "Scholarship"
  },
  {
    title: "Paralegal Empowerment",
    institution: "Justice Literacy",
    description: "Developing self-representation manuals and training systems that turn inmates into their own best advocates.",
    icon: BookOpen,
    category: "Empowerment"
  },
  {
    title: "Leadership Quality",
    institution: "Justice Defenders",
    description: "Overseeing legal quality assurance and institutional reform frameworks to ensure constitutional integrity at scale.",
    icon: Award,
    category: "Governance"
  },
  {
    title: "Capacity Building",
    institution: "Institutional Reform",
    description: "Mentoring future practitioners and building justice-centered ecosystems for sustainable systemic transformation.",
    icon: Users,
    category: "Mentorship"
  }
];

const RESEARCH_NODES = [
  "Constitutional Analysis",
  "Penal System Reform",
  "Case Law Research",
  "Institutional Development",
  "Human Rights Policy",
  "Legal Ethics"
];

export default function LegalEducation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Grid Animation
      gsap.from(".grid-line", {
        scaleX: 0,
        scaleY: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Knowledge Nodes Floating Animation
      gsap.to(".knowledge-node", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });

      // Connective Lines (Visual Metaphor)
      gsap.from(".connective-path", {
        strokeDashoffset: 1000,
        strokeDasharray: 1000,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ecosystemRef.current,
          start: "top center",
        }
      });

      // Blur reveal for headings
      gsap.utils.toArray('.reveal-heading').forEach((heading: any) => {
        gsap.from(heading, {
          filter: 'blur(20px)',
          opacity: 0,
          y: 40,
          duration: 1.5,
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-48 px-8 lg:px-24 bg-luxury-white relative overflow-hidden">
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="grid-line absolute top-0 left-1/4 w-[1px] h-full bg-luxury-black" />
        <div className="grid-line absolute top-0 left-2/4 w-[1px] h-full bg-luxury-black" />
        <div className="grid-line absolute top-0 left-3/4 w-[1px] h-full bg-luxury-black" />
        <div className="grid-line absolute top-1/4 left-0 h-[1px] w-full bg-luxury-black" />
        <div className="grid-line absolute top-2/4 left-0 h-[1px] w-full bg-luxury-black" />
        <div className="grid-line absolute top-3/4 left-0 h-[1px] w-full bg-luxury-black" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <header className="mb-48 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-12"
          >
            <div className="p-6 bg-luxury-cream rounded-full border border-luxury-gold/20">
               <Compass className="w-10 h-10 text-luxury-gold animate-spin-slow" />
            </div>
            <div className="space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gold font-bold">The Intellectual Foundation</span>
              <h2 className="reveal-heading text-6xl lg:text-9xl font-serif font-black text-luxury-black leading-[0.85]">
                Teaching <br /> 
                <span className="italic text-luxury-gold">Justice.</span>
              </h2>
            </div>
            <p className="text-xl lg:text-3xl text-luxury-gray font-light leading-relaxed max-w-3xl border-t border-luxury-gold/20 pt-12">
              Empowering transformation through legal education, mentorship, leadership, and institutional reform.
            </p>
          </motion.div>
        </header>

        {/* Knowledge Ecosystem Visualization */}
        <div ref={ecosystemRef} className="relative h-[600px] mb-64 hidden lg:flex items-center justify-center">
           {/* SVG Connectors */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
             <path className="connective-path" d="M200,300 Q400,100 800,300" stroke="#C8A96B" fill="none" strokeWidth="1" />
             <path className="connective-path" d="M800,300 Q1000,500 1200,300" stroke="#C8A96B" fill="none" strokeWidth="1" />
             <path className="connective-path" d="M400,100 Q600,600 1000,500" stroke="#C8A96B" fill="none" strokeWidth="1" />
           </svg>

           <div className="grid grid-cols-3 gap-24 relative z-10">
             {KNOWLEDGE_PILLARS.slice(0, 3).map((pillar, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="knowledge-node glass p-12 rounded-[3.5rem] border-white/80 shadow-2xl backdrop-blur-xl bg-white/40 text-center flex flex-col items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-luxury-gold/10 flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-luxury-black">{pillar.title}</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray">{pillar.institution}</span>
                </motion.div>
             ))}
           </div>
        </div>

        {/* Modular Grid of Leadership Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-luxury-gold/20 border border-luxury-gold/20 rounded-[4rem] overflow-hidden">
          {KNOWLEDGE_PILLARS.map((pillar, idx) => (
            <div key={idx} className="group p-16 bg-luxury-white hover:bg-luxury-cream transition-colors duration-700 flex flex-col justify-between min-h-[450px]">
              <div className="space-y-12">
                <div className="flex justify-between items-start">
                   <div className="w-12 h-12 rounded-xl border border-luxury-gold/30 flex items-center justify-center group-hover:bg-luxury-gold transition-colors duration-500">
                     <pillar.icon className="w-5 h-5 text-luxury-gold group-hover:text-white" />
                   </div>
                   <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-luxury-gray/40">{pillar.category}</span>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-3xl font-serif font-black text-luxury-black group-hover:text-luxury-gold transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-luxury-gray font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[8px] font-mono uppercase tracking-widest text-luxury-gray">Affiliation</span>
                    <span className="text-sm font-bold text-luxury-black">{pillar.institution}</span>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-luxury-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight className="w-4 h-4 text-luxury-gold" />
                 </div>
              </div>
            </div>
          ))}

          {/* Special Research Node */}
          <div className="lg:col-span-2 p-16 bg-luxury-black text-white flex flex-col justify-center gap-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-8">
                   <h4 className="text-4xl lg:text-6xl font-serif font-bold italic leading-tight">
                     Legal Research & <br /> <span className="text-luxury-gold not-italic">Systems Thinking.</span>
                   </h4>
                   <p className="text-white/60 font-light text-lg lg:text-xl">
                     Developing constitutional frameworks and institutional strategies to redefine the future of justice.
                   </p>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {RESEARCH_NODES.map((node, i) => (
                    <span key={i} className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 font-mono text-[9px] uppercase tracking-widest text-white/40 hover:text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all text-center">
                      {node}
                    </span>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* Intellectual Quote Interstitial */}
        <div className="mt-48 text-center space-y-32">
           {["Legal knowledge creates empowerment.", "Leadership begins with service."].map((text, i) => (
              <motion.h4
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5 }}
                className="text-4xl lg:text-8xl font-serif font-light text-luxury-black italic leading-[0.9]"
              >
                “{text}”
              </motion.h4>
           ))}
        </div>

        {/* Master Vision Outro */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-64 relative py-32 px-12 lg:px-24 rounded-[5rem] overflow-hidden border border-luxury-gold/20"
        >
          <div className="absolute inset-0 bg-luxury-cream/30 backdrop-blur-3xl" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-luxury-gold/10" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold/10" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-12">
                <Share2 className="w-16 h-16 text-luxury-gold opacity-50" />
                <h5 className="text-4xl lg:text-6xl font-serif font-bold text-luxury-black leading-tight">
                  Shaping the <br /> <span className="italic text-luxury-gold font-medium">Ecosystem of Justice.</span>
                </h5>
                <p className="text-xl text-luxury-gray font-light leading-relaxed">
                  Beyond individual cases, we provide the blueprints for a more equitable legal future through persistent education and strategic mentorship.
                </p>
             </div>
             
             <div className="glass p-12 lg:p-20 rounded-[4rem] border-white/80 bg-white/40 flex flex-col gap-12">
               <div className="space-y-4">
                 <span className="font-mono text-[10px] uppercase tracking-widest text-luxury-gold font-black">Strategic Directive</span>
                 <p className="text-2xl font-serif text-luxury-black italic font-medium leading-relaxed">
                   "Teaching justice expands human dignity by giving individuals the tools to defend their own liberation."
                 </p>
               </div>
               <div className="flex items-center gap-6">
                 <div className="h-12 w-[1px] bg-luxury-gold" />
                 <div>
                   <p className="font-bold text-luxury-black">William Okumu</p>
                   <p className="text-[9px] font-mono uppercase tracking-widest text-luxury-gray">The Legal Educator</p>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Add slow spin animation to tailwind config? No, usually just add as a style or via motion
