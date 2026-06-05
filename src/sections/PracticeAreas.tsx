import { motion } from 'motion/react';
import { Scale, Gavel, FileText, Heart, Shield, GraduationCap, Microscope, Landmark, Target, Cpu, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

const PRACTICE_AREAS = [
  {
    title: "Constitutional Litigation",
    description: "Challenging systemic injustices through high-stakes constitutional petitions and landmark legal precedents.",
    icon: Landmark,
    category: "High Court"
  },
  {
    title: "Public Interest Litigation",
    description: "Advocating for the collective rights of the marginalized and securing justice for vulnerable communities.",
    icon: Gavel,
    category: "Advocacy"
  },
  {
    title: "Criminal Appeals",
    description: "Meticulous legal defense and appellate representation, ensuring every voice is heard in the search for truth.",
    icon: Shield,
    category: "Defense"
  },
  {
    title: "Human Rights Advocacy",
    description: "Defending fundamental freedoms and upholding the inherent dignity of individuals against institutional overreach.",
    icon: Heart,
    category: "Protection"
  },
  {
    title: "Prison Justice Reform",
    description: "Transforming the penal system through strategic litigation and inmate empowerment initiatives.",
    icon: Scale,
    category: "Reform"
  },
  {
    title: "Legal Education & Training",
    description: "Empowering future legal minds and inmates through rigorous academic training and paralegal programs.",
    icon: GraduationCap,
    category: "Empowerment"
  },
  {
    title: "Trauma-Informed Services",
    description: "Integrating Somatic Experiencing to support clients navigating the physiological impacts of legal trauma.",
    icon: Microscope,
    category: "Wellbeing"
  },
  {
    title: "Research & Drafting",
    description: "Precision legal scholarship and strategic document preparation for complex judicial proceedings.",
    icon: FileText,
    category: "Strategic"
  },
  {
    title: "Trial Advocacy",
    description: "Expert courtroom representation and litigation strategy, leveraging deep procedural knowledge and constitutional expertise.",
    icon: Scale,
    category: "Litigation"
  },
  {
    title: "Legal Awareness (Prison & Community)",
    description: "Bridging the justice gap through intensive legal literacy programs for both incarcerated persons and local communities.",
    icon: BookOpen,
    category: "Literacy"
  },
  {
    title: "Strategic Management Services",
    description: "Providing high-level organizational leadership, strategic planning, and fundraising for justice-centered institutions.",
    icon: Target,
    category: "Management"
  },
  {
    title: "IT-Based Legal Services",
    description: "Implementing digital infrastructure and technological frameworks to optimize legal research and organizational workflows.",
    icon: Cpu,
    category: "Digital"
  }
];

export default function PracticeAreas() {
  return (
    <section className="py-32 px-8 lg:px-24 bg-luxury-white relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-luxury-black" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-luxury-black" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-luxury-black" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-luxury-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-bold">
                Expertise & Passion
              </span>
            </motion.div>
            <h2 className="text-5xl lg:text-7xl font-serif font-black text-luxury-black mb-8">
              Areas of <span className="italic text-luxury-gold">Advocacy.</span>
            </h2>
            <p className="text-lg lg:text-xl text-luxury-gray font-light max-w-xl leading-relaxed text-balance">
              Justice pursued through litigation, education, reform, human-centered legal practice, and trauma-informed legal services.
            </p>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex flex-col items-end gap-2 text-[9px] font-mono uppercase tracking-[0.4em] text-luxury-gray/40">
              <span>Jurisdiction: High Court of Kenya</span>
              <span>Bar Roll: Distinguished</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {PRACTICE_AREAS.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={cn(
                  "group relative p-10 glass rounded-[3rem] border-luxury-gold/5 flex flex-col h-full bg-white/40 shadow-sm hover:shadow-xl hover:shadow-luxury-gold/5 transition-all duration-500 overflow-hidden",
                  idx % 3 === 0 && "lg:col-span-1",
                  idx % 5 === 0 && "lg:col-span-1"
                )}
              >
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-luxury-gold/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="mb-12 flex justify-between items-start">
                    <div className="p-4 bg-luxury-gold/5 rounded-2xl group-hover:bg-luxury-gold/10 transition-colors">
                      <Icon className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-gray font-bold">
                      {area.category}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-serif font-bold text-luxury-black mb-6 leading-tight group-hover:text-luxury-gold transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-sm text-luxury-gray leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
                    {area.description}
                  </p>
                </div>

                <div className="mt-12 pt-6 border-t border-luxury-gold/10 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray/40">Inquire</span>
                  <div className="w-8 h-8 rounded-full border border-luxury-gold/20 flex items-center justify-center group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all">
                    <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold group-hover:bg-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative Connection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 lg:p-24 glass rounded-[4rem] border-white/80 relative overflow-hidden bg-luxury-cream/30 text-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-luxury-black/5" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h4 className="text-2xl lg:text-4xl font-serif font-bold italic text-luxury-black/80 mb-8">
              "We represent not just a case, <br /> but a <span className="text-luxury-gold">person's inherent right</span> to equality and a chance to tell their story."
            </h4>
            <div className="h-12 w-[1px] bg-luxury-gold mx-auto mb-8" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-luxury-gray">The Steward's Manifesto</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
