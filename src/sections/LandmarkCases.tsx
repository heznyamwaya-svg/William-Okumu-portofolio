import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Landmark, ShieldCheck, UserCheck, BookOpenCheck, ArrowUpRight, Scale, X, FileText, Gavel, Globe, Users, Brain, Heart, Sparkles, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import { useDragScroll } from '../hooks/useDragScroll';

gsap.registerPlugin(ScrollTrigger);

const CASES = [
  {
    title: "Francis Karioko Muruatetu & Another v Republic [2017] KESC 2 (KLR)",
    impact: "Abolition of Mandatory Death Sentence",
    description: "Lead drafter of the landmark Supreme Court petition that declared mandatory death sentences unconstitutional, fundamentally reshaping sentencing jurisprudence in Kenya.",
    metric: "Millions Impacted",
    category: "Constitutional Precedent",
    year: "2017",
    icon: Landmark,
    isAdvanced: true,
    citations: ["Muruatetu & another v Republic; Katiba Institute & 5 others (Amicus Curiae) [2017] KESC 2 (KLR)"],
    fullStory: "In Francis Karioko Muruatetu & another v Republic [2017] KESC 2 (KLR), the Supreme Court of Kenya held that the mandatory death sentence under Section 204 of the Penal Code was unconstitutional because it denied courts judicial discretion and violated constitutional rights including dignity, fair trial, equality before the law, and access to justice.\n\nThe judgment fundamentally reshaped Kenyan sentencing jurisprudence by affirming that mitigation and individualized sentencing are essential components of a fair trial under the Constitution of Kenya, 2010.\n\nThe Court emphasized that punishment must recognize the humanity, circumstances, and dignity of every accused person.",
    contributionTitle: "Role & Contribution",
    contributionNarrative: "William Okumu Onyango played a significant behind-the-scenes role in the constitutional litigation process surrounding the Muruatetu case. He served as a lead drafter involved in preparing key legal materials connected to the petition and contributed to the drafting of constitutional submissions that helped shape the broader legal arguments presented before the Supreme Court.\n\nHis contribution focused on:",
    contributionPostFocus: "The case represented a defining moment in Kenya’s constitutional evolution and remains one of the most influential decisions in modern criminal justice reform.",
    contributionFocus: [
      "constitutional interpretation",
      "fair trial rights",
      "sentencing jurisprudence",
      "dignity and mitigation principles",
      "access to justice",
      "judicial discretion in sentencing"
    ],
    principles: [
      { 
        title: "Judicial Discretion", 
        quote: "Sentencing must allow courts to consider individual circumstances.",
        icon: Scale
      },
      { 
        title: "Human Dignity", 
        quote: "Mandatory sentencing treats offenders as an undifferentiated mass.",
        icon: Heart
      },
      { 
        title: "Fair Trial Rights", 
        quote: "Mitigation is an essential component of constitutional due process.",
        icon: ShieldCheck
      },
      { 
        title: "Constitutional Transformation", 
        quote: "The law must evolve toward dignity, proportionality, and justice.",
        icon: Sparkles
      }
    ],
    impactCinematic: "The Muruatetu decision triggered nationwide sentencing rehearings and influenced constitutional discourse across Kenya’s criminal justice system.",
    impactConclusion: "The judgment remains one of the most cited constitutional decisions in Kenya’s modern legal era.",
    impactPoints: [
      "sentencing reform",
      "death penalty jurisprudence",
      "human rights litigation",
      "prison justice reform",
      "constitutional criminal law"
    ],
    details: [
      { label: "Court", value: "Supreme Court of Kenya" },
      { label: "Significance", value: "Redirection of Judicial Power" },
      { label: "Reach", value: "Across Commonwealth Jurisdictions" }
    ],
    stats: [
      { label: "Resentenced", value: "4,500+" },
      { label: "Discretion", value: "100%" }
    ]
  },
  {
    title: "Petition Challenging the Death Penalty",
    impact: "Ongoing Constitutional Initiative",
    description: "Spearheading a major constitutional petition in Murang'a High Court to declare the death penalty inherently unconstitutional, continuing the march towards full abolition.",
    metric: "Murang'a High Court",
    category: "Constitutional Reform",
    year: "2024",
    icon: ShieldCheck,
    fullStory: "This ongoing litigation represents the next frontier in the abolitionist movement. Building on the Muruatetu precedent, William is leading a petition that argues the death penalty itself—as a punishment—is incompatible with the modern constitutional framework of human rights. This case seeks to move Kenya toward a total ban on capital punishment, aligning with global human rights standards.",
    details: [
      { label: "Status", value: "Active Litigation" },
      { label: "Forum", value: "Murang'a High Court" },
      { label: "Key Argument", value: "Inherent Unconstitutionality" }
    ],
    stats: [
      { label: "Support", value: "Major NGOs" },
      { label: "Stage", value: "Interlocutory" }
    ]
  },
  {
    title: "Inmate Self-Representation Advocacy",
    impact: "Transforming Prison Literacy",
    description: "Organized massive legal awareness sessions resulting in an 80% success rate for inmate self-representation, bridging the gap between incarceration and justice.",
    metric: "80% Success Rate",
    category: "Legal Empowerment",
    year: "2012-2025",
    icon: UserCheck,
    fullStory: "Recognizing that the vast majority of inmates lacked access to counsel, William pioneered a series of intensive legal literacy clinics within maximum-security facilities. These workshops empowered inmates with the skills to draft their own appeals and represent themselves in court. The initiative has seen an unprecedented success rate, with hundreds of wrongfully convicted individuals securing their freedom through their own advocacy.",
    details: [
      { label: "Model", value: "Peer-to-Peer Legal Literacy" },
      { label: "Scope", value: "National Maximum Security" },
      { label: "Outcome", value: "800+ Successful Appeals" }
    ],
    stats: [
      { label: "Sessions", value: "500+" },
      { label: "Success", value: "80%" }
    ]
  },
  {
    title: "Public Interest Legal Initiatives",
    impact: "Prison Justice Systematic Reform",
    description: "Transformative legal aid and research that directly influenced paralegal initiatives and drop-in legal offices within reaching the most disenfranchised populations.",
    metric: "National Expansion",
    category: "Public Interest",
    year: "2014-Present",
    icon: BookOpenCheck,
    fullStory: "Through sustained research and public interest litigation, William has been a catalyst for structural changes in the prison legal aid system. His work influenced the establishment of permanent drop-in legal offices within correctional facilities, ensuring that legal guidance is accessible at the point of need. This systemic reform has reduced case backlogs and ensured that the right to a fair trial is practical rather than theoretical.",
    details: [
      { label: "Focus", value: "Systemic Accountability" },
      { label: "Partner", value: "Legal Aid Service Providers" },
      { label: "Impact", value: "Institutionalizing Support" }
    ],
    stats: [
      { label: "Offices", value: "24+" },
      { label: "Reach", value: "National" }
    ]
  }
];

export default function LandmarkCases() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCase, setSelectedCase] = useState<typeof CASES[0] | null>(null);

  const sidebarDrag = useDragScroll();
  const contentDrag = useDragScroll();
  
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCase]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".case-card", {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      gsap.from(".stat-bubble", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cases" ref={containerRef} className="py-32 px-8 lg:px-24 bg-luxury-cream/50 relative overflow-hidden">
      {/* Cinematic Grain & Texture Overlay handled by .grain in CSS */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between items-start gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-luxury-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-bold">
                Archives of Justice
              </span>
            </motion.div>
            <h2 className="text-5xl lg:text-8xl font-serif font-black text-luxury-black mb-8 leading-[0.95]">
              Cases That <br /> 
              <span className="italic text-luxury-gold">Changed Lives.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-luxury-gray font-light max-w-2xl leading-relaxed text-balance">
              Litigation not only as legal practice, but as a force for justice, dignity, and systemic transformation.
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 text-right">
            <div className="px-6 py-3 glass rounded-full border-luxury-gold/20 flex items-center gap-3">
              <Scale className="w-4 h-4 text-luxury-gold" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-black">Precedent Analytics</span>
            </div>
          </div>
        </header>

        {/* Narrative Statistics */}
        <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { label: "Lives Impacted", value: "3,000+", sub: "Constitutional Reform" },
            { label: "Empowerment", value: "80%", sub: "Self-Representation" },
            { label: "Years active", value: "16", sub: "Legal Excellence" },
            { label: "Reform reach", value: "National", sub: "Prison Systems" }
          ].map((stat, i) => (
            <div key={i} className="stat-bubble p-8 glass rounded-[2.5rem] border-white/80 bg-white/40 flex flex-col items-center text-center">
              <span className="text-4xl font-serif font-black text-luxury-gold mb-2">{stat.value}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-luxury-black font-bold">{stat.label}</span>
              <span className="text-[8px] font-mono text-luxury-gray mt-1">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Grid of Storytelling Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CASES.map((caseItem, idx) => {
            const Icon = caseItem.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedCase(caseItem)}
                className="case-card group relative p-12 glass rounded-[3.5rem] border-white/60 bg-white/30 backdrop-blur-3xl shadow-xl shadow-luxury-black/5 hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer"
              >
                {/* Abstract Legal Texture */}
                <div className="absolute -top-10 -right-10 w-64 h-64 border-[1px] border-luxury-gold/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
                
                <div className="flex justify-between items-start mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center border border-luxury-gold/20">
                      <Icon className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray font-bold">
                      {caseItem.category}
                    </span>
                  </div>
                  <span className="font-serif italic text-luxury-gold/40 text-2xl">
                    {caseItem.year}
                  </span>
                </div>

                <div className="space-y-6 flex-1">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-luxury-black leading-tight group-hover:text-luxury-gold transition-colors duration-500">
                    {caseItem.title}
                  </h3>
                  <div className="h-[1px] w-24 bg-luxury-gold/30 group-hover:w-full transition-all duration-700" />
                  <p className="text-sm lg:text-base text-luxury-gray leading-relaxed font-light">
                    {caseItem.description}
                  </p>
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-luxury-gray/40">Verdict Outcome</span>
                    <span className="text-xs font-bold text-luxury-black">{caseItem.impact}</span>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    className="w-12 h-12 rounded-full border border-luxury-gold/20 flex items-center justify-center group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all shadow-lg"
                  >
                    <ArrowUpRight className="w-5 h-5 text-luxury-gold group-hover:text-white transition-colors" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Narrative Quote */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-32 max-w-4xl mx-auto text-center"
        >
          <div className="mb-12 flex justify-center">
             <div className="w-[1px] h-20 bg-luxury-gold/20" />
          </div>
          <h4 className="text-3xl lg:text-5xl font-serif font-light text-luxury-black italic leading-[1.3]">
            “Advocacy becomes meaningful when it restores the <span className="text-luxury-gold font-bold not-italic">humanity</span> the system was built to strip away.”
          </h4>
          <div className="mt-12 font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gray/40">
            William Okumu // Legal Steward
          </div>
        </motion.div>
      </div>

      {/* Expanded Case Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8" onWheel={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-luxury-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-5xl bg-luxury-white rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row h-full max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 lg:top-8 lg:right-8 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-luxury-black/10 hover:bg-luxury-gold hover:text-white transition-all flex items-center justify-center group z-30 shadow-lg backdrop-blur-sm"
              >
                <X className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-90 transition-transform duration-500" />
              </button>
 
              {/* Sidebar Info */}
              <div 
                ref={sidebarDrag.ref}
                onMouseDown={sidebarDrag.onMouseDown}
                onMouseUp={sidebarDrag.onMouseUp}
                onMouseMove={sidebarDrag.onMouseMove}
                onMouseLeave={sidebarDrag.onMouseLeave}
                style={sidebarDrag.style}
                className="w-full lg:w-[40%] bg-luxury-cream/50 p-6 lg:p-12 relative flex flex-col border-b lg:border-b-0 lg:border-r border-luxury-gold/10 overflow-y-auto luxury-scrollbar select-none" 
                data-lenis-prevent
                onWheel={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-luxury-black" />
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-luxury-black" />
                </div>
 
                <div className="relative z-10 mb-auto">
                   <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-luxury-gold/10 flex items-center justify-center border border-luxury-gold/20 mb-6 lg:mb-10">
                      <Gavel className="w-6 h-6 lg:w-8 lg:h-8 text-luxury-gold" />
                   </div>
                   <h3 className="text-xl lg:text-4xl font-display font-black text-luxury-black leading-tight mb-4">{selectedCase.title}</h3>
                   <div className="flex items-center gap-3">
                      <div className="px-3 py-1 lg:px-4 lg:py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-[9px] lg:text-[10px] font-mono text-luxury-gold uppercase tracking-widest font-bold">
                        {selectedCase.category}
                      </div>
                      <span className="font-serif italic text-luxury-gold font-bold text-sm lg:text-lg">{selectedCase.year}</span>
                   </div>
                </div>
 
                <div className="mt-8 lg:mt-12 space-y-6 lg:space-y-10 relative z-10">
                  <div className="grid grid-cols-1 gap-6 lg:gap-8">
                     {selectedCase.details.map((detail, dIdx) => (
                       <div key={dIdx} className="space-y-1">
                          <span className="block font-mono text-[8px] lg:text-[9px] uppercase tracking-widest text-luxury-gray/60">{detail.label}</span>
                          <p className="font-bold text-luxury-black text-sm lg:text-base leading-tight">{detail.value}</p>
                       </div>
                     ))}
                  </div>
 
                  <div className="flex gap-10 pt-6 lg:pt-8 border-t border-luxury-gold/10">
                    {selectedCase.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="text-xl lg:text-2xl font-serif font-black text-luxury-gold">{stat.value}</span>
                        <span className="text-[8px] lg:text-[9px] font-mono uppercase tracking-widest text-luxury-black font-bold">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
 
              {/* Main Content */}
              <div 
                ref={contentDrag.ref}
                onMouseDown={contentDrag.onMouseDown}
                onMouseUp={contentDrag.onMouseUp}
                onMouseMove={contentDrag.onMouseMove}
                onMouseLeave={contentDrag.onMouseLeave}
                style={contentDrag.style}
                className="w-full lg:w-[60%] p-6 lg:p-16 relative overflow-y-auto luxury-scrollbar h-full select-none" 
                data-lenis-prevent
                onWheel={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 right-0 w-64 h-64 border-[1px] border-luxury-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                   <div className="space-y-12 lg:space-y-24 scroll-smooth">
                  {/* Floating Legal Citations Overlay for Content */}
                  <div className="absolute top-0 right-0 p-8 flex flex-col gap-2 z-20 pointer-events-none">
                     {(selectedCase as any).citations?.map((cite: string, i: number) => (
                        <motion.div 
                          key={i}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="px-3 py-1 bg-white/40 backdrop-blur-xl border border-luxury-gold/20 rounded-lg shadow-xl"
                        >
                           <span className="text-[9px] font-mono text-luxury-gold uppercase tracking-tighter opacity-60">Dossier Reference</span>
                           <p className="text-[10px] font-mono text-luxury-black font-bold whitespace-nowrap">{cite}</p>
                        </motion.div>
                     ))}
                  </div>

                  {/* Narrative Section */}
                  <motion.div 
                    initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-3 text-luxury-gold">
                      <FileText className="w-5 h-5" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold">CASE SUMMARY</span>
                    </div>
                    
                    <div className="text-xl lg:text-2xl text-luxury-black leading-relaxed font-serif italic max-w-none space-y-8">
                      {selectedCase.fullStory.split('\n\n').map((para, i) => (
                        <motion.p 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.2 }}
                          className={cn(
                            "relative pl-8 border-l-4 border-luxury-gold/20",
                            i === 0 && "first-letter:text-7xl first-letter:font-display first-letter:font-black first-letter:text-luxury-gold first-letter:mr-6 first-letter:float-left first-letter:-mt-1"
                          )}
                        >
                          {para}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>

                  {/* William Contribution Section */}
                  {(selectedCase as any).contributionTitle && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="space-y-10 p-10 lg:p-16 rounded-[4rem] bg-luxury-cream/40 border border-luxury-gold/15 backdrop-blur-sm relative overflow-hidden group shadow-inner"
                    >
                      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000">
                        <UserCheck className="w-48 h-48 text-luxury-gold" />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="h-[1px] w-12 bg-luxury-gold" />
                           <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-luxury-gold font-black">Contributor Profiles</span>
                        </div>

                        <h4 className="text-3xl lg:text-5xl font-display font-black text-luxury-black mb-10 flex items-baseline gap-4">
                          <span className="text-luxury-gold italic text-2xl lg:text-3xl">Role &</span>
                          <span className="underline decoration-luxury-gold/30 underline-offset-8">Contribution</span>
                        </h4>

                        <div className="text-lg lg:text-xl text-luxury-black leading-relaxed space-y-8 font-light">
                          {(selectedCase as any).contributionNarrative.split('\n\n').map((para: string, i: number) => (
                            <p key={i} className="text-balance">{para}</p>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 mb-12">
                          {(selectedCase as any).contributionFocus.map((item: string, i: number) => (
                            <motion.div 
                              key={i} 
                              whileHover={{ x: 10 }}
                              className="flex items-center gap-4 bg-white/60 p-4 rounded-2xl border border-luxury-gold/10 shadow-sm"
                            >
                              <div className="w-2 h-2 rounded-full bg-luxury-gold shadow-glow" />
                              <span className="text-sm font-mono text-luxury-black uppercase tracking-[0.1em] font-bold">{item}</span>
                            </motion.div>
                          ))}
                        </div>

                        {(selectedCase as any).contributionPostFocus && (
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-8 border-l-4 border-luxury-gold bg-luxury-black text-white rounded-r-3xl shadow-xl mt-12"
                          >
                             <Sparkles className="w-6 h-6 text-luxury-gold mb-4" />
                             <p className="text-lg lg:text-2xl font-serif italic leading-relaxed">
                                {(selectedCase as any).contributionPostFocus}
                             </p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Key Legal Principles Section */}
                  {(selectedCase as any).principles && (
                    <div className="space-y-12">
                      <header className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-luxury-gold">
                          <Brain className="w-5 h-5" />
                          <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold">KEY LEGAL PRINCIPLES</span>
                        </div>
                        <h4 className="text-3xl lg:text-4xl font-display font-black text-luxury-black">Constitutional Doctrines</h4>
                      </header>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {(selectedCase as any).principles.map((principle: any, i: number) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, rotate: i % 2 === 0 ? -1 : 1 }}
                            className="p-10 rounded-[2.5rem] border border-luxury-gold/20 bg-white shadow-xl shadow-luxury-gold/5 transition-all group relative overflow-hidden flex flex-col"
                          >
                             <div className="absolute -top-10 -right-10 w-32 h-32 bg-luxury-gold/5 rounded-full transition-all group-hover:scale-150 duration-700" />
                             
                             <div className="relative z-10 flex-1">
                                <div className="w-14 h-14 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-8 group-hover:bg-luxury-gold transition-colors duration-500">
                                   <principle.icon className="w-7 h-7 text-luxury-gold group-hover:text-white transition-colors" />
                                </div>
                                <h5 className="font-display font-black text-2xl text-luxury-black mb-4">{principle.title}</h5>
                                <div className="h-[1px] w-12 bg-luxury-gold/30 mb-6 group-hover:w-full transition-all duration-500" />
                                <p className="text-lg italic text-luxury-gray leading-relaxed font-serif">“{principle.quote}”</p>
                             </div>
                             
                             <div className="mt-8 flex justify-end opacity-20 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-5 h-5 text-luxury-gold" />
                             </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Impact Section - Cinematic Panel */}
                  <div className="space-y-10 pb-20">
                     <div className="flex items-center gap-3 text-luxury-gold">
                      <Globe className="w-5 h-5" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold">IMPACT SECTION</span>
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="p-12 lg:p-20 glass rounded-[4rem] bg-luxury-black text-white relative overflow-hidden group shadow-2xl border border-white/10"
                    >
                       <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,107,0.3),transparent_70%)]" />
                         <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzvxs72df/image/upload/v1714578000/noise_uvwuvw.png')] opacity-10" />
                       </div>
                       
                       <div className="relative z-10 space-y-12">
                         <motion.p 
                           initial={{ opacity: 0, scale: 0.9 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           className="text-2xl lg:text-4xl font-display font-black italic text-luxury-gold leading-tight text-center lg:text-left"
                         >
                            “{(selectedCase as any).impactCinematic || selectedCase.impact}”
                         </motion.p>
                         
                         {(selectedCase as any).impactPoints && (
                           <div className="space-y-6">
                             <p className="text-xs font-mono uppercase tracking-[0.5em] text-white/40 text-center lg:text-left">It became a foundational precedent in:</p>
                             <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                               {(selectedCase as any).impactPoints.map((point: string, i: number) => (
                                 <motion.span 
                                   key={i} 
                                   initial={{ opacity: 0, x: -10 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ delay: i * 0.1 }}
                                   className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10 text-xs font-mono uppercase tracking-widest text-white/90 hover:bg-white/10 transition-colors cursor-default"
                                 >
                                   {point}
                                 </motion.span>
                               ))}
                             </div>
                           </div>
                         )}

                         {(selectedCase as any).impactConclusion && (
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden"
                            >
                               <Gavel className="absolute -bottom-6 -right-6 w-32 h-32 opacity-5" />
                               <p className="text-lg lg:text-2xl font-serif font-light text-white/90 italic leading-relaxed text-center">
                                 {(selectedCase as any).impactConclusion}
                               </p>
                            </motion.div>
                         )}

                         <div className="h-[1px] w-full bg-white/10" />
                         <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                            <span>Final Resolution Verified by Judicial Review</span>
                            <span className="text-luxury-gold">Founding Precedent // 2017</span>
                         </div>
                       </div>
                    </motion.div>
                  </div>
                </div>

                <div className="pt-8 lg:pt-12 flex items-center justify-between border-t border-luxury-gold/10">
                     <div className="flex items-center gap-3 text-luxury-gold">
                       <Scale className="w-5 h-5" />
                       <span className="font-mono text-[8px] lg:text-[9px] uppercase tracking-[0.4em] text-luxury-gray">Constitutional Evolution Vector</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
                        <span className="font-serif italic text-sm lg:text-lg text-luxury-black font-medium tracking-tight uppercase">LITIGATED BY WILLIAM OKUMU ONYANGO</span>
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
