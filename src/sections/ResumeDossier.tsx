import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Download, Shield, Landmark, BookOpen, User, ArrowRight, Eye, CheckCircle2, Award, Briefcase, GraduationCap, X } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { cn } from '../lib/utils';
import { CV_DATA } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const RESUME_CONTENT = {
  summary: "A distinguished Advocate of the High Court of Kenya, Legal Researcher, and Justice Reform Advocate focused on transforming lived experiences into powerful legal advocacy. With over a decade of dedication to public interest litigation and prison justice reform, I specialize in constitutional challenges, trauma-informed legal practice, and human rights empowerment. My work is anchored in the belief that justice systems must prioritize human dignity, rehabilitation, and constitutionalism above all else.",
  experience: [
    {
      company: "Justice Defenders (formerly African Prisons Project)",
      roles: [
        { title: "Legal Quality Assurance Officer", period: "2023 – Present" },
        { title: "Fundraising & Communications Officer", period: "2021 – 2023" },
        { title: "Legal Officer", period: "2018 – 2021" },
        { title: "Administration Officer", period: "2016 – 2018" },
        { title: "Legal Researcher / IT Officer", period: "2014 – 2016" },
        { title: "Legal Research Intern", period: "2014" }
      ],
      description: "A transformative decade-long journey within the justice sector. Spearheaded legal education models within maximum-security prisons, managed multi-million dollar fundraising campaigns for justice reform, and provided authoritative legal research for cross-border litigation. Currently ensuring the highest standards of legal practice across the organization's continental operations in Africa."
    },
    {
      company: "Kituo Cha Sheria (Legal Advice Centre)",
      roles: [{ title: "Legal Aid Officer", period: "2012 – 2013" }],
      description: "Provided critical inmate legal defense support and spearheaded legal awareness programs in underserved communities. Focused on mitigating the systemic barriers to justice for those in detention."
    }
  ],
  landmarks: [
    { title: "Muruatetu Litigation", description: "Key involvement in the Francis Karioko Muruatetu constitutional challenge, which led to the landmark ruling against mandatory death sentencing in Kenya." },
    { title: "Death Penalty Challenge", description: "Strategic participation in the broader constitutional challenge against the death penalty, reshaping Kenyan criminal jurisprudence." },
    { title: "Prison Justice Reform", description: "Leading the shift towards a rehabilitation-centric penal system through strategic litigation and policy advocacy." }
  ],
  education: [
    { school: "University of London", degree: "Bachelor of Laws (LLB) & Diploma in Common Law" },
    { school: "Kenya School of Law", degree: "Advocate Training Program (ATP)" }
  ],
  certifications: [
    "Somatic Experiencing Practitioner Training",
    "Trauma-Informed Legal Practice Certification",
    "Leadership & Legal Empowerment Specialist"
  ],
  skills: [
    "Constitutional Law", "Public Interest Litigation", "Trauma-Informed Advocacy", 
    "Legal Drafting", "Justice Reform Strategy", "Human Rights Advocacy", 
    "Legal Education Leadership", "Public Speaking"
  ]
};

export default function ResumeDossier() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dossier-reveal", {
        opacity: 0,
        y: 60,
        filter: "blur(20px)",
        stagger: 0.2,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleDownload = async () => {
    setIsExporting(true);
    try {
      const element = pdfRef.current;
      if (!element) {
        throw new Error("Resume element not found for export.");
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#F8F6F1'
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('William_Okumu_Legal_Dossier.pdf');
    } catch (error) {
      console.error("PDF Export failed:", error);
    } finally {
      setIsExporting(false);
      setIsPreviewOpen(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-48 px-8 lg:px-24 bg-luxury-white relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.03)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-luxury-gold/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        <div className="space-y-12">
           <div className="flex items-center gap-6 dossier-reveal">
              <div className="w-12 h-[1px] bg-luxury-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gold font-bold">The Records</span>
           </div>
           
           <div className="space-y-8 dossier-reveal">
              <h2 className="text-5xl lg:text-8xl font-serif font-black text-luxury-black leading-[0.9]">
                 Professional <br />
                 <span className="italic text-luxury-gold underline decoration-luxury-gold/20 underline-offset-[16px]">Legacy.</span>
              </h2>
              <p className="text-xl lg:text-2xl text-luxury-gray font-light max-w-xl leading-relaxed">
                 Access the comprehensive legal dossier of Advocate William Okumu. A chronicle of transformation, advocacy, and landmark justice reform.
              </p>
           </div>

           <div className="flex flex-wrap gap-6 dossier-reveal">
              <button 
                onClick={() => setIsPreviewOpen(true)}
                className="group relative px-10 py-5 rounded-full bg-luxury-black text-white overflow-hidden transition-all hover:shadow-[0_20px_50px_-20px_rgba(200,169,107,0.4)]"
              >
                <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <div className="relative z-10 flex items-center gap-4">
                   <Eye className="w-4 h-4 text-luxury-gold group-hover:text-luxury-black transition-colors" />
                   <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-black group-hover:text-luxury-black transition-colors">View CV</span>
                </div>
              </button>

              <button 
                onClick={handleDownload}
                disabled={isExporting}
                className="group px-10 py-5 rounded-full border border-luxury-gold/30 flex items-center gap-4 hover:bg-luxury-gold/5 transition-all"
              >
                 <Download className={cn("w-4 h-4 text-luxury-gold", isExporting && "animate-bounce")} />
                 <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-luxury-black font-black">
                    {isExporting ? "Securing PDF..." : "Download Dossier"}
                 </span>
              </button>
           </div>

           <div className="pt-12 border-t border-luxury-black/5 flex items-center gap-10 dossier-reveal opacity-50">
              <Shield className="w-6 h-6 text-luxury-gold" />
              <p className="font-mono text-[9px] uppercase tracking-widest leading-loose">
                 Authenticated Records // High Court Registration No. P.105/XXXX/XX <br />
                 Authorized Professional Archive 2026.IV
              </p>
           </div>
        </div>

        {/* Cinematic Dossier Card Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 40, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="relative group dossier-reveal cursor-pointer"
          onClick={() => setIsPreviewOpen(true)}
        >
           <div className="absolute inset-0 bg-luxury-gold/5 blur-[120px] rounded-full scale-150 group-hover:bg-luxury-gold/10 transition-all duration-1000" />
           
           <div className="glass rounded-[4rem] border-white/80 bg-white/40 shadow-2xl p-16 relative backdrop-blur-3xl overflow-hidden aspect-[4/5] flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-luxury-gold/0 via-luxury-gold/40 to-luxury-gold/0" />
              
              <div className="space-y-12">
                 <div className="flex justify-between items-start">
                    <div className="w-20 h-20 flex items-center justify-center">
                       <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-right">
                       <p className="font-mono text-[8px] uppercase tracking-widest text-luxury-gray/60">Resume</p>
                       <p className="font-mono text-[10px] uppercase tracking-widest text-luxury-black font-black">My Professional Journey</p>
                    </div>
                 </div>

                 <div className="space-y-6">
                    <h3 className="text-4xl font-serif font-black text-luxury-black leading-tight">Curriculum <br /> Vitae</h3>
                    <div className="h-[1px] w-12 bg-luxury-gold" />
                    <p className="text-lg text-luxury-gray font-light">
                       Advocate William Okumu. <br />
                       Professional Legacy & Justice Blueprint.
                    </p>
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="grid grid-cols-2 gap-8 pb-12 border-b border-luxury-black/5">
                    <div>
                       <p className="font-mono text-[8px] uppercase tracking-widest text-luxury-gray mb-2">Experience</p>
                       <p className="text-xl font-serif font-bold text-luxury-black">12+ Years</p>
                    </div>
                    <div>
                       <p className="font-mono text-[8px] uppercase tracking-widest text-luxury-gray mb-2">Status</p>
                       <p className="text-xl font-serif font-bold text-luxury-gold italic">Active Council</p>
                    </div>
                 </div>
                 <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                       {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-luxury-gold/20" />)}
                    </div>
                    <ArrowRight className="w-6 h-6 text-luxury-gold group-hover:translate-x-4 transition-transform duration-700" />
                 </div>
              </div>
           </div>
        </motion.div>
      </div>

      {/* Hidden PDF Template for background downloading (Always in DOM) */}
      <div className="absolute -left-[9999px] top-0 w-[210mm] pointer-events-none opacity-0" aria-hidden="true">
        <div ref={pdfRef} className="bg-luxury-white p-12">
          <header className="flex justify-between items-end border-b-2 border-luxury-black pb-12 mb-16">
            <div>
              <h1 className="text-4xl font-serif font-black text-luxury-black uppercase tracking-tighter">William Okumu</h1>
              <p className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-bold mt-2">Advocate of the High Court of Kenya // Justice Reform Advocate</p>
              <div className="flex gap-12 mt-8 font-mono text-[9px] uppercase tracking-widest text-luxury-gray">
                  <span className="flex items-center gap-2"> {CV_DATA.contact.email}</span>
                  <span className="flex items-center gap-2"> Nairobi, Kenya</span>
              </div>
            </div>
            <div className="w-24 h-24 flex items-center justify-center">
               <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <section>
                <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Professional Summary</h4>
                <p className="text-base text-luxury-black font-light leading-relaxed">
                    {RESUME_CONTENT.summary}
                </p>
              </section>

              <section>
                <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Legal Experience</h4>
                <div className="space-y-12">
                    {RESUME_CONTENT.experience.map((exp, i) => (
                      <div key={i} className="space-y-6">
                        <h5 className="text-xl font-serif font-bold text-luxury-black">{exp.company}</h5>
                        <div className="space-y-4">
                          {exp.roles.map((role, ri) => (
                            <div key={ri} className="flex justify-between items-center bg-luxury-cream/30 p-4 rounded-xl">
                                <span className="font-mono text-[10px] uppercase font-black text-luxury-black">{role.title}</span>
                                <span className="font-mono text-[10px] text-luxury-gray italic">{role.period}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-luxury-gray leading-relaxed">{exp.description}</p>
                      </div>
                    ))}
                </div>
              </section>
            </div>

            <div className="space-y-16">
              <section>
                <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Education</h4>
                <div className="space-y-8">
                    {RESUME_CONTENT.education.map((edu, i) => (
                      <div key={i}>
                        <p className="text-sm font-serif font-bold text-luxury-black">{edu.school}</p>
                        <p className="text-[10px] font-mono text-luxury-gray uppercase tracking-widest mt-1">{edu.degree}</p>
                      </div>
                    ))}
                </div>
              </section>

              <section>
                <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Specialized Training</h4>
                <ul className="space-y-4">
                    {RESUME_CONTENT.certifications.map((cert, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-luxury-gray leading-tight">
                        <span>{cert}</span>
                      </li>
                    ))}
                </ul>
              </section>

              <section>
                  <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_CONTENT.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-luxury-black text-white font-mono text-[8px] uppercase tracking-widest rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
              </section>
            </div>
          </div>
          <div className="pt-12 mt-12 border-t border-luxury-black/10 text-center">
            <p className="font-serif italic text-sm text-luxury-gray">"Committed to justice systems grounded in dignity and transformation."</p>
          </div>
        </div>
      </div>

      {/* MODAL FOR PREVIEW & EXPORT TEMPLATE */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-8 lg:p-24 bg-luxury-black/90 backdrop-blur-md"
            onWheel={(e) => e.stopPropagation()}
          >
             <button 
               onClick={() => setIsPreviewOpen(false)}
               className="absolute top-12 right-12 text-white/40 hover:text-white transition-all transition-colors z-30"
             >
                <X className="w-12 h-12" />
             </button>

             <motion.div 
               initial={{ scale: 0.9, y: 40 }}
               animate={{ scale: 1, y: 0 }}
               data-lenis-prevent
               className="w-full max-w-5xl h-full bg-luxury-white rounded-[3rem] overflow-y-auto shadow-2xl relative p-12 lg:p-20 chat-scrollbar"
             >
                <div className="bg-luxury-white min-h-full">
                  {/* PDF TEMPLATE CONTENT */}
                  <header className="flex justify-between items-end border-b-2 border-luxury-black pb-12 mb-16">
                    <div>
                      <h1 className="text-4xl font-serif font-black text-luxury-black uppercase tracking-tighter">William Okumu</h1>
                      <p className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-bold mt-2">Advocate of the High Court of Kenya // Justice Reform Advocate</p>
                      <div className="flex gap-12 mt-8 font-mono text-[9px] uppercase tracking-widest text-luxury-gray">
                         <span className="flex items-center gap-2"><FileText className="w-3 h-3" /> {CV_DATA.contact.email}</span>
                         <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3" /> Nairobi, Kenya</span>
                      </div>
                    </div>
                    <div className="w-24 h-24 flex items-center justify-center">
                       <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                  </header>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-16">
                      <section>
                        <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Professional Summary</h4>
                        <p className="text-base text-luxury-black font-light leading-relaxed text-balance">
                           {RESUME_CONTENT.summary}
                        </p>
                      </section>

                      <section>
                        <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Legal Experience</h4>
                        <div className="space-y-12">
                           {RESUME_CONTENT.experience.map((exp, i) => (
                             <div key={i} className="space-y-6">
                                <div className="flex justify-between items-start">
                                  <h5 className="text-xl font-serif font-bold text-luxury-black">{exp.company}</h5>
                                </div>
                                <div className="space-y-4">
                                  {exp.roles.map((role, ri) => (
                                    <div key={ri} className="flex justify-between items-center bg-luxury-cream/30 p-4 rounded-xl">
                                       <span className="font-mono text-[10px] uppercase font-black text-luxury-black">{role.title}</span>
                                       <span className="font-mono text-[10px] text-luxury-gray italic">{role.period}</span>
                                    </div>
                                  ))}
                                </div>
                                <p className="text-sm text-luxury-gray leading-relaxed">{exp.description}</p>
                             </div>
                           ))}
                        </div>
                      </section>

                      <section>
                         <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Landmark Work</h4>
                         <div className="grid md:grid-cols-2 gap-8">
                            {RESUME_CONTENT.landmarks.map((work, i) => (
                              <div key={i} className="p-8 border border-luxury-black/5 rounded-3xl bg-luxury-cream/10 space-y-4">
                                 <h6 className="text-lg font-serif font-bold text-luxury-black underline decoration-luxury-gold/20 underline-offset-4">{work.title}</h6>
                                 <p className="text-xs text-luxury-gray leading-relaxed">{work.description}</p>
                              </div>
                            ))}
                         </div>
                      </section>
                    </div>

                    <div className="space-y-16">
                      <section>
                        <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Education</h4>
                        <div className="space-y-8">
                           {RESUME_CONTENT.education.map((edu, i) => (
                             <div key={i}>
                                <p className="text-sm font-serif font-bold text-luxury-black">{edu.school}</p>
                                <p className="text-[10px] font-mono text-luxury-gray uppercase tracking-widest mt-1">{edu.degree}</p>
                             </div>
                           ))}
                        </div>
                      </section>

                      <section>
                        <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Specialized Training</h4>
                        <ul className="space-y-4">
                           {RESUME_CONTENT.certifications.map((cert, i) => (
                             <li key={i} className="flex items-start gap-3 text-xs text-luxury-gray leading-tight">
                                <Award className="w-4 h-4 text-luxury-gold shrink-0" />
                                <span>{cert}</span>
                             </li>
                           ))}
                        </ul>
                      </section>

                      <section>
                         <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Competencies</h4>
                         <div className="flex flex-wrap gap-2">
                            {RESUME_CONTENT.skills.map(skill => (
                              <span key={skill} className="px-3 py-1.5 bg-luxury-black text-white font-mono text-[8px] uppercase tracking-widest rounded-full">
                                {skill}
                              </span>
                            ))}
                         </div>
                      </section>

                      <section>
                         <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">Publications</h4>
                         <div className="space-y-4">
                            <p className="text-[10px] text-luxury-gray italic">"The Muruatetu Legacy: Beyond Mandatory Sentencing" (2024)</p>
                            <p className="text-[10px] text-luxury-gray italic">"Rehabilitation as a Constitutional Conversation" (2024)</p>
                         </div>
                      </section>

                      <section>
                         <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-luxury-gold font-black border-b border-luxury-gold/20 pb-4 mb-8">References</h4>
                         <p className="font-mono text-[9px] uppercase tracking-widest text-luxury-black font-black">Elite Academic & Legal References Available Upon Request</p>
                      </section>

                      <div className="pt-12 mt-12 border-t border-luxury-black/10">
                         <p className="font-serif italic text-sm text-luxury-gray text-center">
                            "Committed to justice systems grounded in dignity, rehabilitation, constitutionalism, and human transformation."
                         </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-20 flex justify-center gap-8">
                   <button 
                     onClick={handleDownload}
                     disabled={isExporting}
                     className="px-12 py-4 bg-luxury-gold text-luxury-black rounded-full font-mono text-[10px] uppercase tracking-widest font-black flex items-center gap-4 hover:bg-luxury-black hover:text-white transition-all shadow-xl"
                   >
                     <Download className="w-4 h-4" />
                     {isExporting ? "Authenticating..." : "Export Legal Dossier (PDF)"}
                   </button>
                   <button 
                     onClick={() => setIsPreviewOpen(false)}
                     className="px-12 py-4 border border-luxury-black/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-luxury-black hover:bg-luxury-cream transition-all"
                   >
                     Close Archive
                   </button>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
