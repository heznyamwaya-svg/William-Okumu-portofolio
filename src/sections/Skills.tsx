import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CV_DATA } from '../constants';
import { ChevronDown, Scale, Zap, Users, Shield, Cpu, Target } from 'lucide-react';
import { cn } from '../lib/utils';

const SKILL_DETAILS: Record<string, { description: string; icon: any }> = {
  "Legal Research & Drafting": {
    description: "Expert interpretation of constitutional statutes and precision documentation for complex appellate litigation and policy reform.",
    icon: Scale
  },
  "Strategic Planning & Fundraising": {
    description: "Orchestrating global funding initiatives and securing sustainable institutional growth through strategic community engagement.",
    icon: Target
  },
  "Public Speaking": {
    description: "Articulating complex legal principles with clarity and emotional resonance across diverse international and local forums.",
    icon: Zap
  },
  "Somatic Experiencing": {
    description: "Integrating trauma-informed physiological approaches to support client resilience and emotional regulation within the legal process.",
    icon: Shield
  },
  "IT Maintenance": {
    description: "Implementing robust digital frameworks to optimize legal research efficiency, communication, and organizational performance.",
    icon: Cpu
  },
  "Team Leadership": {
    description: "Cultivating excellence, accountability, and multidisciplinary collaboration within high-performance legal advocacy teams.",
    icon: Users
  }
};

const MARQUEE_WORDS = [
  "Constitutional Law", "Somatic Experiencing", "Trauma-Informed Advocacy", 
  "Strategic Litigation", "Institutional Reform", "Public Speaking", 
  "Penal Reform", "Human Dignity", "Rehabilitation", "Mediation",
  "Legal Empowerment", "Access to Justice", "Restoration", "Leadership"
];

export default function Skills() {
  const [openSkill, setOpenSkill] = useState<string | null>(CV_DATA.skills[0]);

  const MarqueeRow = ({ reverse = false, duration = 30, colorClass }: { reverse?: boolean, duration?: number, colorClass?: string }) => (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div
        initial={{ x: reverse ? "-50%" : 0 }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
          <div key={i} className="flex items-center gap-12 py-2">
            <span className={cn(
              "text-3xl lg:text-5xl font-serif font-black uppercase tracking-tighter",
              colorClass || "text-luxury-black/5"
            )}>
              {word}
            </span>
            <div className="w-2 h-2 rounded-full bg-luxury-gold/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="skills" className="py-32 px-8 lg:px-24 bg-luxury-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-20">
        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-luxury-gold" />
              <h2 className="text-4xl lg:text-5xl font-serif font-black text-luxury-black">Competencies.</h2>
            </div>
            <p className="text-luxury-gray text-lg font-light leading-relaxed max-w-xl">
              A multidisciplinary approach to justice, blending advanced legal expertise with Somatic Experiencing trauma therapy and strategic communication.
            </p>

            {/* Kinetic Typography Marquee Section - Relocated Inline */}
            <div className="mt-12 bg-luxury-black py-8 rounded-[2.5rem] select-none pointer-events-none relative border border-luxury-gold/10 shadow-xl overflow-hidden">
              <MarqueeRow duration={120} colorClass="text-white/90" />
              <MarqueeRow reverse duration={120} colorClass="text-luxury-gold/50 italic" />
            </div>
          </div>
          
          <div className="space-y-4">
            {CV_DATA.skills.map((skill, idx) => {
              const isOpen = openSkill === skill;
              const details = SKILL_DETAILS[skill] || { description: "Advanced professional proficiency in specialized legal and advocacy domains.", icon: Zap };
              const Icon = details.icon;

              return (
                <div 
                  key={idx}
                  className={cn(
                    "group rounded-3xl border transition-all duration-500 overflow-hidden",
                    isOpen ? "border-luxury-gold/30 bg-luxury-cream/20 shadow-xl shadow-luxury-black/5" : "border-luxury-black/5 bg-white hover:border-luxury-gold/20"
                  )}
                >
                  <button
                    onClick={() => setOpenSkill(isOpen ? null : skill)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-5">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                        isOpen ? "bg-luxury-gold text-white" : "bg-luxury-gold/5 text-luxury-gold group-hover:bg-luxury-gold/10"
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={cn(
                        "font-serif text-lg lg:text-xl font-bold transition-colors duration-500",
                        isOpen ? "text-luxury-black" : "text-luxury-black/60 group-hover:text-luxury-black"
                      )}>
                        {skill}
                      </span>
                    </div>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform duration-500 text-luxury-gold",
                      isOpen ? "rotate-180" : "rotate-0"
                    )} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                      >
                        <div className="px-8 pb-8 pl-[4.5rem]">
                          <p className="text-luxury-gray text-base font-light leading-relaxed max-w-lg">
                            {details.description}
                          </p>
                          <div className="mt-6 flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-luxury-gold/30" />
                            <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold">Verified Proficiency</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:w-1/2 relative h-[600px] w-full flex items-center justify-center perspective-1000">
          {/* Enhanced Orbits with Depth */}
          <div className="absolute inset-0 border border-luxury-gold/5 rounded-full animate-[spin_40s_linear_infinite] [transform:rotateX(60deg)]" />
          <div className="absolute inset-20 border border-luxury-black/5 rounded-full animate-[spin_30s_linear_infinite_reverse] [transform:rotateX(-45deg)]" />
          <div className="absolute inset-40 border border-luxury-gold/10 rounded-full animate-[spin_20s_linear_infinite] [transform:rotateY(30deg)]" />

          {/* Glow Core */}
          <div className="absolute w-96 h-96 bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            animate={{ 
              y: [0, -35, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotateY: 15 }}
            className="z-10 p-16 glass rounded-[4rem] border-luxury-gold/20 shadow-2xl shadow-luxury-gold/10 flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="w-24 h-24 mb-6 flex items-center justify-center relative z-10">
              <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-2 relative z-10">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.5em] text-luxury-black font-black">Justice Nexus</h3>
              <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-luxury-gray/60">Multidisciplinary Mastery</p>
            </div>
            
            {/* Geometric Accents */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-luxury-gold/20 rounded-full" />
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-luxury-gold/20 rounded-full" />
          </motion.div>

          {/* Orbiting Tags (Visual Only) */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  rotate: 360 
                }}
                transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div 
                  className="w-1 h-1 bg-luxury-gold/40 rounded-full"
                  style={{ transform: `translateX(${180 + i * 40}px)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
