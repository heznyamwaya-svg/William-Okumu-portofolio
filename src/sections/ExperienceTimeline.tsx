import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Landmark, Scale, BookOpen, GraduationCap, Briefcase, Activity, ShieldCheck, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    year: "2012-2013",
    title: "Kituo Cha Sheria",
    role: "Legal Aid Officer",
    description: "Assisted inmates with legal defenses and appeals. Conducted vital legal awareness and self-representation training within correctional facilities.",
    icon: ShieldCheck,
    details: ["Legal Defenses", "Self-Representation Training", "Access to Justice"]
  },
  {
    year: "2014-2019",
    title: "Justice Defenders",
    role: "IT & Legal Research",
    description: "Managed IT infrastructure before transitioning to legal research. Spearheaded studies on inmate empowerment and penal accessibility.",
    icon: Briefcase,
    details: ["IT Infrastructure", "Legal Research", "Inmate Empowerment"]
  },
  {
    year: "2014-2018",
    title: "University of London",
    role: "Legal Scholarship",
    description: "Pursued rigorous academic excellence, earning a Diploma in Common Law followed by a Bachelor of Laws (LLB).",
    icon: GraduationCap,
    details: ["Diploma in Common Law", "Bachelor of Laws (LLB)", "Academic Excellence"]
  },
  {
    year: "2019-Present",
    title: "Leadership Progression",
    role: "Justice Defenders",
    description: "Advanced through Administration, Legal, and Fundraising roles to become the Legal Quality Assurance Officer, overseeing global standards.",
    icon: Landmark,
    details: ["Quality Assurance", "Strategic Planning", "Global Fundraising"]
  },
  {
    year: "2024",
    title: "Kenya School of Law",
    role: "Advocate of the High Court",
    description: "Attained the prestigious status of Advocate of the High Court of Kenya, formalizing a journey of transformation and resilience.",
    icon: Scale,
    details: ["The Bar Admissions", "Constitutional Mandate", "Legal Leadership"]
  },
  {
    year: "Ongoing",
    title: "Trauma-Informed Services",
    role: "Somatic Practitioner",
    description: "Integrating Somatic Experiencing (SE) into legal advocacy to honor the physiological impacts of trauma within the justice system.",
    icon: Heart,
    details: ["Somatic Experiencing", "Trauma-Informed Advocacy", "Human-Centered Law"]
  }
];

export default function ExperienceTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pinDistance = MILESTONES.length * 400; // Rough horizontal distance

      const horizontalTimeline = gsap.to(".timeline-track", {
        id: "horizontalScroll",
        x: () => -(scrollRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () => `+=${pinDistance}`,
        }
      });

      // Character reveals for years
      gsap.utils.toArray('.milestone-year').forEach((year: any) => {
        gsap.from(year, {
          opacity: 0,
          scale: 0.5,
          filter: 'blur(10px)',
          duration: 1,
          scrollTrigger: {
            trigger: year,
            containerAnimation: horizontalTimeline,
            start: "left 80%",
          }
        });
      });
    }, triggerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="milestones" ref={triggerRef} className="bg-luxury-white overflow-hidden">
      <div className="h-screen flex items-center">
        {/* Progress Sidebar (Desktop Only) */}
        <div className="hidden lg:flex fixed left-12 top-1/2 -translate-y-1/2 flex-col gap-8 z-50 pointer-events-none">
          <div className="font-mono text-[9px] uppercase tracking-[0.5em] text-luxury-gold/40 vertical-rl rotate-180">
            Timeline Narrative
          </div>
          <div className="w-[1px] h-32 bg-luxury-gold/20" />
        </div>

        <div ref={scrollRef} className="timeline-track flex flex-nowrap items-center px-[10vw] gap-32">
          
          {/* Intro Section */}
          <div className="flex-shrink-0 w-[40vw] max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-luxury-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-bold">The Record</span>
            </motion.div>
            <h2 className="text-5xl lg:text-8xl font-serif font-black text-luxury-black mb-8 leading-[0.9]">
              The Journey <br />
              <span className="italic text-luxury-gold">Through Justice.</span>
            </h2>
            <p className="text-xl text-luxury-gray font-light max-w-xl leading-relaxed">
              A path shaped by resilience, education, advocacy, and transformative legal leadership. From incarceration to the Bar.
            </p>
          </div>

          {/* Milestones */}
          {MILESTONES.map((milestone, idx) => {
            const Icon = milestone.icon;
            return (
              <div key={idx} className="flex-shrink-0 w-[80vw] lg:w-[35vw] relative">
                {/* Year Watermark */}
                <span className="absolute -top-16 -left-8 text-[12vw] font-serif font-black text-luxury-black/[0.03] select-none pointer-events-none milestone-year">
                  {milestone.year.split('-')[0]}
                </span>

                <div className="glass p-12 lg:p-16 rounded-[4rem] border-white/80 bg-white/40 shadow-2xl shadow-luxury-black/5 hover:border-luxury-gold/30 transition-all duration-700 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold">
                        {milestone.year}
                      </span>
                      <h4 className="text-xs uppercase tracking-widest text-luxury-gray font-medium">{milestone.role}</h4>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-luxury-gold/10 flex items-center justify-center border border-luxury-gold/20">
                      <Icon className="w-6 h-6 text-luxury-gold" />
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-luxury-black mb-8 leading-tight">
                    {milestone.title}
                  </h3>

                  <p className="text-lg text-luxury-gray font-light leading-relaxed mb-12 flex-1">
                    {milestone.description}
                  </p>

                  <div className="pt-8 border-t border-luxury-gold/10 flex flex-wrap gap-4">
                    {milestone.details.map((detail, dIdx) => (
                      <span key={dIdx} className="px-4 py-1 rounded-full border border-luxury-black/5 bg-luxury-white text-[9px] font-mono uppercase tracking-[0.2em] text-luxury-gray/60">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Connection Line */}
                {idx < MILESTONES.length - 1 && (
                  <div className="absolute top-1/2 -right-48 w-32 h-[1px] bg-luxury-gold/20 hidden lg:block">
                    <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-luxury-gold -translate-y-1/2" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Outro / Call to Impact */}
          <div className="flex-shrink-0 w-[40vw] max-w-2xl ml-32">
             <div className="p-16 glass rounded-full border-luxury-gold/20 aspect-square flex flex-col items-center justify-center text-center shadow-2xl shadow-luxury-gold/10">
                <Scale className="w-12 h-12 text-luxury-gold mb-8" />
                <h4 className="text-3xl font-serif font-bold italic text-luxury-black mb-6">Advocate of the <br /> High Court</h4>
                <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-luxury-gray">The Journey Continues</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
