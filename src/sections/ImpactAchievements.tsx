import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, GraduationCap, Gavel, Scale, Heart, Mic2, ArrowRight, TrendingUp, X, Target, BarChart, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const IMPACT_METRICS = [
  { label: "Years of Advocacy", value: 16, suffix: "+", sub: "Legal Excellence" },
  { label: "Lives Impacted", value: 3000, suffix: "+", sub: "Constitutional Reform" },
  { label: "Success Rate", value: 80, suffix: "%", sub: "Self-Representation" },
  { label: "Training Programs", value: 12, suffix: "+", sub: "Educational Leadership" }
];

const ACHIEVEMENT_CARDS = [
  {
    id: "landmark",
    title: "Landmark Litigation & Penal Reform",
    description: "Successfully assisted inmates in the Muruatetu case and currently spearheading the abolish-death-penalty petition in Muranga.",
    icon: Gavel,
    metric: "Constitutional Reform",
    caseSummary: [
      "In Francis Karioko Muruatetu & another v Republic [2017] KESC 2 (KLR), the Supreme Court of Kenya held that the mandatory death sentence under Section 204 of the Penal Code was unconstitutional because it denied courts judicial discretion and violated constitutional rights including dignity, fair trial, equality before the law, and access to justice.",
      "The judgment fundamentally reshaped Kenyan sentencing jurisprudence by affirming that mitigation and individualized sentencing are essential components of a fair trial under the Constitution of Kenya, 2010.",
      "The Court emphasized that punishment must recognize the humanity, circumstances, and dignity of every accused person."
    ],
    roleContribution: {
      narrative: "William Okumu played a significant behind-the-scenes role in the constitutional litigation process surrounding the Muruatetu case. He served as a lead drafter involved in preparing key legal materials connected to the petition and contributed to the drafting of constitutional submissions that helped shape the broader legal arguments presented before the Supreme Court.",
      focus: [
        "constitutional interpretation",
        "fair trial rights",
        "sentencing jurisprudence",
        "dignity and mitigation principles",
        "access to justice",
        "judicial discretion in sentencing"
      ],
      conclusion: "The case represented a defining moment in Kenya’s constitutional evolution and remains one of the most influential decisions in modern criminal justice reform."
    },
    keyPrinciples: [
      { title: "Judicial Discretion", quote: "Sentencing must allow courts to consider individual circumstances.", icon: Scale },
      { title: "Human Dignity", quote: "Mandatory sentencing treats offenders as an undifferentiated mass.", icon: Heart },
      { title: "Fair Trial Rights", quote: "Mitigation is an essential component of constitutional due process.", icon: ShieldCheck },
      { title: "Constitutional Transformation", quote: "The law must evolve toward dignity, proportionality, and justice.", icon: TrendingUp }
    ],
    impact: {
      narrative: "The Muruatetu decision triggered nationwide sentencing rehearings and influenced constitutional discourse across Kenya’s criminal justice system.",
      points: [
        "sentencing reform",
        "death penalty jurisprudence",
        "human rights litigation",
        "prison justice reform",
        "constitutional criminal law"
      ],
      conclusion: "The judgment remains one of the most cited constitutional decisions in Kenya’s modern legal era."
    },
    cinematicSequence: [
      { 
        id: 1, 
        title: "THE WEIGHT OF MANDATORY SENTENCING", 
        image: "/images/ropweight.jpg",
        caption: "A system without discretion is a system without humanity."
      },
      { 
        id: 2, 
        title: "LEGAL AWAKENING & RESEARCH", 
        image: "/images/gravel1.jpg",
        caption: "Drafting the blueprints of constitutional challenge."
      },
      { 
        id: 3, 
        title: "THE CONSTITUTIONAL BATTLE", 
        image: "/images/williamrob3.jpeg",
        caption: "Confronting the mandatory death penalty in the Supreme Court."
      },
      { 
        id: 4, 
        title: "TRANSFORMATION OF JUSTICE", 
        image: "/images/gravel2.jpg",
        caption: "Towards a legacy of dignity, proportionality, and justice."
      }
    ],
    fullStory: "Our work in landmark litigation is driven by the belief that the law must serve as a shield for the most vulnerable. From constructing the legal research for the Muruatetu petition which declared mandatory death sentences unconstitutional, to leading the current petition at the Muranga High Court to abolish the death penalty entirely, we aim to redefine the boundaries of justice.",
    milestones: ["Muruatetu Success", "Muranga High Court Petition", "Death Penalty Abolition"]
  },
  {
    id: "awareness",
    title: "Legal Empowerment & Awareness",
    description: "Organized impactful legal awareness sessions since 2012, achieving high rates of successful inmate self-representation.",
    icon: Users,
    metric: "80% Success Rate",
    caseSummary: [
      "From 2012 to 2025, William Okumu organized and facilitated legal awareness and inmate legal empowerment sessions across various correctional institutions in Kenya.",
      "These initiatives focused on constitutional rights awareness, criminal procedure education, fair trial rights, legal drafting guidance, self-representation training, and access to justice for incarcerated persons.",
      "Through structured legal education and empowerment programs, inmates were equipped with practical legal knowledge enabling them to actively participate in their own legal processes and pursue justice with dignity and informed understanding."
    ],
    roleContribution: {
      narrative: "William Okumu’s leadership and advocacy transformed inmate participation in the Kenyan justice system. His programs provided the critical bridge between complex constitutional provisions and practical self-representation in court.",
      focus: [
        "constitutional rights awareness",
        "criminal procedure education",
        "fair trial rights",
        "legal drafting guidance",
        "self-representation training",
        "access to justice"
      ],
      conclusion: "The programs achieved an estimated 80% success rate in inmate self-representation outcomes, demonstrating the transformative power of legal literacy."
    },
    keyPrinciples: [
      { title: "Accessibility", quote: "Justice becomes possible when knowledge becomes accessible.", icon: GraduationCap },
      { title: "Dignity", quote: "Legal literacy restores dignity and participation.", icon: Heart },
      { title: "Empowerment", quote: "Empowerment begins when individuals understand their rights.", icon: ShieldCheck },
      { title: "Literacy", quote: "A literate inmate is a powerful advocate for justice.", icon: Scale }
    ],
    impact: {
      narrative: "The legal awareness initiatives have become a foundational model for inmate empowerment across the region.",
      points: [
        "2012–2025 Legal Awareness Leadership",
        "80% Self-Representation Success Rate",
        "Prison Legal Literacy Advocacy",
        "Constitutional Rights Education",
        "Access-to-Justice Empowerment"
      ],
      conclusion: "This initiative showcases how constitutional awareness can redefine the landscape of judicial participation."
    },
    cinematicSequence: [
      { 
        id: 1, 
        title: "The Struggle", 
        image: "/images/William16.jpeg",
        caption: "Facing the silence of the justice system."
      },
      { 
        id: 2, 
        title: "The Legal Awakening", 
        image: "/images/William18.jpeg",
        caption: "Turning pages of the law toward freedom."
      },
      { 
        id: 3, 
        title: "The Constitutional Battle", 
        image: "/images/William14.jpeg",
        caption: "Equipping the marginalized with the tools of advocacy."
      },
      { 
        id: 4, 
        title: "Transformation & Legacy", 
        image: "/images/William3.jpeg",
        caption: "Restoring the human spirit through understanding."
      }
    ],
    fullStory: "Justice should not be a privilege for those who can afford it. Since 2012, we have organized legal awareness sessions within correctional facilities and marginalized communities. By providing inmates with the knowledge and tools of the law, we have achieved a documented 80% success rate in inmate self-representation.",
    milestones: ["2012–2025 Sessions", "80% Self-Rep Success", "National Outreach Model"]
  },
  {
    id: "chaplaincy",
    title: "Motivational & Spiritual Support",
    description: "Dedicated service through church chaplaincies, providing counseling and motivational talks to those within the justice system.",
    icon: Mic2,
    metric: "2010–2025 Service",
    caseSummary: [
      "Since 2010, William Okumu has been deeply involved in providing spiritual and motivational support within the Kenyan prison system. Recognizing that incarceration is a deep psychological and spiritual challenge, his work focuses on restoring hope.",
      "Through dedicated service in church chaplaincies, he has provided a sanctuary for inmates to process their journey, offering motivational leadership that emphasizes personal transformation and accountability.",
      "This accompaniment addresses the foundational human need for dignity and spiritual resilience during the difficult transition from detention back to society."
    ],
    roleContribution: {
      narrative: "As a motivational leader and spiritual counselor, William has bridged the gap between despair and purpose. His work within the chaplaincy provides the emotional fortitude required for inmates to navigate the complexities of the justice system.",
      focus: [
        "Spiritual Resilience",
        "Motivational Leadership",
        "Emotional Support",
        "Rehabilitation Ethics",
        "Community Integration",
        "Pastoral Care"
      ],
      conclusion: "His service since 2010 has touched thousands of lives, fostering a culture of hope and self-correction within correctional facilities."
    },
    impact: {
      narrative: "The chaplaincy initiatives have been instrumental in reducing the psychological toll of long-term incarceration.",
      points: [
        "2010–2025 Continuous Service",
        "Enhanced Inmate Wellbeing",
        "Reduced Recidivism through Faith",
        "Psychological Resilience Building",
        "Community-Based Support Networks"
      ],
      conclusion: "Spiritual support is the cornerstone of sustainable rehabilitation and a critical component of human-centered justice."
    },
    cinematicSequence: [
      { 
        id: 1, 
        title: "THE SPIRITUAL VOID", 
        image: "/images/chaplain1.jpg", 
        caption: "In the depth of the cell, hope is the first necessity." 
      },
      { 
        id: 2, 
        title: "WORDS OF EMPOWERMENT", 
        image: "/images/chaplain2.jpg", 
        caption: "Motivational leadership as a tool for transformation." 
      },
      { 
        id: 3, 
        title: "THE SANCTUARY OF FAITH", 
        image: "/images/chaplain3.jpg", 
        caption: "Creating spaces for reflection and spiritual growth." 
      },
      { 
        id: 4, 
        title: "RENEWED SPIRIT", 
        image: "/images/chaplain4.jpg", 
        caption: "Walking the long road to restoration with dignity." 
      }
    ],
    fullStory: "True rehabilitation requires addressed the soul as well as the legal standing. Since 2010, William has delivered motivational talks and provided psychological counseling through church chaplaincies within the prison system. This spiritual and emotional accompaniment is critical for individuals navigating the trauma of incarceration and the long road to reintegration, offering hope where it is most scarce.",
    milestones: ["Church Chaplaincy", "Inmate Counseling", "Motivational Leadership"]
  },
  {
    id: "trauma",
    title: "Trauma-Informed Somatic Practice",
    description: "Integrating Somatic Experiencing (SE) with legal services to honor the physiological and emotional impacts of trauma.",
    icon: Heart,
    metric: "Holistic Justice",
    caseSummary: [
      "William Okumu is a pioneer in integrating Somatic Experiencing (SE) into legal practice. He recognizes that the legal system can often be inherently re-traumatizing for victims and defendants alike.",
      "Somatic Experiencing is a body-oriented approach to the healing of trauma. By honoring physiological impacts, this practice allows legal professionals to support clients in a way that prioritizes their safety and nervous system regulation.",
      "This holistic approach ensures that justice is not just a legal outcome, but a process that promotes long-term healing and respects the biological reality of human suffering."
    ],
    roleContribution: {
      narrative: "William’s unique dual expertise as an Advocate and a Somatic Experiencing Practitioner allows him to offer a truly human-centered legal service. He navigates the law while keeping a constant pulse on the client's physiological wellbeing.",
      focus: [
        "Nervous System Regulation",
        "Trauma-Informed Law",
        "Physiological Safety",
        "Somatic Grounding",
        "Client Trust Building",
        "Healing-Centered Advocacy"
      ],
      conclusion: "By integrating SE, he ensures that the pursuit of justice does not come at the cost of the client's neural integrity."
    },
    impact: {
      narrative: "The integration of somatic practices into the legal field has redefined the boundaries of professional care in Kenya.",
      points: [
        "Somatic Experiencing Pioneer",
        "Neural Integrity Advocacy",
        "Human-Centered Legal Models",
        "Trauma-Resilient Testimony",
        "Holistic Justice Systems"
      ],
      conclusion: "Healing and justice are inseparable; this practice provides the blueprint for the legal systems of the future."
    },
    cinematicSequence: [
      { id: 1, title: "THE BODY’S MEMORY", image: "/images/trauma1.jpg", caption: "Trauma lives in the nervous system, not just the memory." },
      { id: 2, title: "BIOLOGICAL REALITY", image: "/images/trauma2.jpg", caption: "Honoring the physiological impact of the legal journey." },
      { id: 3, title: "THE SPACE OF SAFETY", image: "/images/trauma3.jpg", caption: "Integrating grounding techniques into the courtroom." },
      { id: 4, title: "RESTORATION AT SCALE", image: "/images/trauma4.jpg", caption: "A legacy of healing that transforms the architecture of law." }
    ],
    fullStory: "The legal system is often inherently re-traumatizing. We have pioneered the combination of trauma-informed legal services with Somatic Experiencing (SE). SE is a powerful way to support clients and legal professionals in navigating the legal system while honoring the physiological and emotional impacts of trauma. By recognizing how trauma lives in the body, we provide a more compassionate and effective path to justice that promotes long-term healing.",
    milestones: ["Somatic Experiencing Integration", "Trauma-Informed Care", "Physiological Support"]
  }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const CinematicImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => {
  return (
    <div className="relative aspect-video lg:aspect-[21/9] w-full overflow-hidden group rounded-[2rem] lg:rounded-[4rem]">
      <motion.img 
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.2, 0, 0.2, 1] }}
        src={src} 
        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
        alt={alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-60" />
      {caption && (
        <div className="absolute bottom-8 lg:bottom-16 left-8 lg:left-16 right-8 lg:right-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg lg:text-3xl font-serif italic text-white leading-tight max-w-2xl"
          >
            {caption}
          </motion.p>
        </div>
      )}
    </div>
  );
};

const CinematicModalContent = ({ achievement, onClose }: { achievement: any; onClose: () => void }) => {
  const [activeImage, setActiveImage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    // Use GSAP ScrollTrigger to track scroll progress and trigger image changes
    const sections = gsap.utils.toArray('.story-section');
    
    const triggers = sections.map((section: any, i: number) => {
      return ScrollTrigger.create({
        trigger: section,
        scroller: scrollContainerRef.current,
        start: "top 45%",
        end: "bottom 45%",
        onEnter: () => setActiveImage(i),
        onEnterBack: () => setActiveImage(i),
      });
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col lg:flex-row h-full w-full bg-base-100 overflow-hidden relative">
      {/* Background Texture/Overlay for entire modal */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="documentNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#documentNoise)" />
        </svg>
      </div>

      {/* Left Area: Scrollable Text Narrative (55%) */}
      <div 
        ref={scrollContainerRef}
        className="w-full lg:w-[55%] h-full overflow-y-auto overflow-x-hidden luxury-scrollbar relative z-10 bg-luxury-cream/30"
        data-lenis-prevent
      >
        {/* Progress Bar (Visual Sync) */}
        <div className="sticky top-0 left-0 w-full h-1 bg-luxury-gold/10 z-[100]">
           <motion.div 
             className="h-full bg-luxury-gold origin-left"
             style={{ scaleX: (activeImage + 1) / 4 }}
           />
        </div>

        {/* Section 1: Introduction */}
        <section 
          className="story-section min-h-screen flex flex-col justify-center px-10 lg:px-24 py-32 relative"
        >
          {/* Mobile Background Image (Stacked for small screens) */}
          <div className="lg:hidden absolute inset-0 z-0 opacity-20">
            <img src={achievement.cinematicSequence[0].image} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="relative z-10 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] lg:text-[12px] uppercase tracking-[1em] text-luxury-gold font-bold italic">Chapter I</span>
                <div className="h-[1px] w-12 bg-luxury-gold/30" />
              </div>
              <h2 className="text-4xl lg:text-[clamp(3rem,7vw,7rem)] font-serif font-black text-luxury-black leading-[0.95] uppercase">
                {achievement.id === 'landmark' ? (
                  <>THE WEIGHT <br /><span className="italic text-luxury-gold text-[0.8em]">OF MANDATORY</span></>
                ) : achievement.id === 'chaplaincy' ? (
                  <>THE STRENGTH <br /><span className="italic text-luxury-gold text-[0.8em]">OF THE SPIRIT</span></>
                ) : achievement.id === 'trauma' ? (
                  <>THE MEMORY <br /><span className="italic text-luxury-gold text-[0.8em]">OF THE BODY</span></>
                ) : (
                  <>THE AWAKENING <br /><span className="italic text-luxury-gold text-[0.8em]">OF RIGHTS</span></>
                )}
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="p-12 border border-luxury-gold/20 rounded-[3rem] bg-white/40 backdrop-blur-sm max-w-xl group hover:bg-luxury-black hover:text-white transition-all duration-700 shadow-2xl shadow-luxury-black/5"
            >
              <p className="text-2xl lg:text-3xl font-serif italic leading-relaxed opacity-80">
                “{achievement.cinematicSequence[0].caption}”
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Core Narrative */}
        <section 
          className="story-section min-h-screen flex flex-col justify-center px-10 lg:px-24 py-32 relative"
        >
          <div className="lg:hidden absolute inset-0 z-0 opacity-10">
            <img src={achievement.cinematicSequence[1].image} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="relative z-10 space-y-12">
            <div className="border-l-4 border-luxury-gold pl-12 space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-luxury-gold font-black bg-luxury-gold/10 px-4 py-1 rounded-full">Archive Reference</span>
              <h3 className="text-5xl lg:text-7xl font-serif font-black text-luxury-black leading-[0.9] uppercase">
                {achievement.id === 'landmark' ? 'CASE SUMMARY' : 'MAIN NARRATIVE'}
              </h3>
            </div>
            
            <div className="space-y-12 max-w-2xl">
               {achievement.caseSummary?.map((paragraph: string, i: number) => (
                 <motion.p 
                   key={i} 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.2 }}
                   className="text-2xl lg:text-3xl text-luxury-gray font-light leading-relaxed first-letter:text-6xl first-letter:font-serif first-letter:text-luxury-gold first-letter:float-left first-letter:mr-4 first-letter:mt-2"
                 >
                   {paragraph}
                 </motion.p>
               ))}
            </div>
          </div>
        </section>

        {/* Section 3: Contribution / Evolution */}
        <section 
          className="story-section min-h-screen flex flex-col justify-center px-10 lg:px-24 py-32 bg-luxury-black text-white relative rounded-t-[4rem] lg:rounded-none"
        >
           <div className="lg:hidden absolute inset-0 z-0 opacity-20">
            <img src={achievement.cinematicSequence[2].image} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="relative z-10 space-y-16">
            <h2 className="text-4xl lg:text-7xl font-serif font-bold text-luxury-gold leading-none uppercase">Role & <br /><span className="italic">Contribution</span></h2>
            
            <p className="text-3xl lg:text-5xl font-serif font-light leading-snug italic text-white/90 max-w-3xl">
              {achievement.roleContribution?.narrative}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/10">
               {achievement.roleContribution?.focus.map((item: string, i: number) => (
                 <motion.div 
                   key={i} 
                   whileHover={{ x: 10 }}
                   className="flex flex-col gap-4 group"
                 >
                    <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold opacity-60 group-hover:opacity-100 transition-opacity">Strategic Pillar</span>
                    <span className="text-2xl font-bold uppercase tracking-[0.2em] group-hover:text-luxury-gold transition-colors">{item}</span>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* Section 4: Final Impact */}
        <section 
          className="story-section min-h-screen flex flex-col justify-center px-10 lg:px-24 py-32 relative"
        >
          <div className="lg:hidden absolute inset-0 z-0 opacity-10">
            <img src={achievement.cinematicSequence[3].image} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="relative z-10 space-y-16">
             <div className="space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[1em] text-luxury-gold">Impact Legacy</span>
                <h2 className="text-3xl lg:text-7xl font-serif font-black leading-none uppercase">
                   {achievement.id === 'landmark' ? 'SYSTEMIC IMPACT' : 'IMPACT HIGHLIGHTS'}
                </h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-luxury-gold/30">
                {achievement.impact?.points.map((point: string, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex gap-6 group items-center"
                  >
                     <div className="w-16 h-16 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0 group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all duration-700 shadow-xl">
                        <ArrowRight className="w-6 h-6 text-luxury-gold group-hover:text-black transition-colors" />
                     </div>
                     <span className="text-2xl lg:text-3xl font-serif italic text-luxury-black group-hover:translate-x-3 transition-transform duration-500">{point}</span>
                  </motion.div>
                ))}
             </div>

             <div className="pt-24 border-t border-luxury-gold/20 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
               <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-luxury-gray">Steward of Legal Reform</span>
                  <p className="text-2xl font-serif font-bold text-luxury-black">William Okumu</p>
               </div>
               
               <button 
                 onClick={onClose}
                 className="group relative px-12 py-5 overflow-hidden rounded-full border border-luxury-black/10 hover:border-luxury-black transition-all duration-700"
               >
                  <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-luxury-black transition-all duration-500 ease-out z-0" />
                  <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-black group-hover:text-white font-bold">Return to Dossier</span>
               </button>
             </div>
          </div>
        </section>
      </div>

      {/* Right Area: Sticky Sequential Visuals (45%) */}
      <div className="hidden lg:block w-[45%] h-full relative bg-luxury-black overflow-hidden border-l border-white/10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, filter: "blur(40px) brightness(0.2)", scale: 1.15 }}
            animate={{ opacity: 1, filter: "blur(0px) brightness(1)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(20px) brightness(0.5)", scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {/* Cinematic Image Panel */}
            <motion.img 
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
              src={achievement.cinematicSequence[activeImage].image} 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale-[0.2]"
              alt=""
            />
            
            {/* Ambient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-luxury-black/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* Document Textures / Particles (Cinematic Overlay) */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Content Display Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-20 lg:p-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="space-y-12 max-w-xl"
              >
                {/* Scroll Indicator Dot Sync */}
                <div className="flex justify-center gap-4 mb-10">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      animate={{ 
                        scale: activeImage === i ? 1.5 : 1,
                        backgroundColor: activeImage === i ? "#D4AF37" : "rgba(255,255,255,0.2)",
                        opacity: activeImage === i ? 1 : 0.4
                      }}
                      className="h-1.5 w-1.5 rounded-full transition-all duration-700" 
                    />
                  ))}
                </div>

                <div className="space-y-6">
                   <span className="font-mono text-[9px] uppercase tracking-[0.8em] text-luxury-gold mb-2 block opacity-70">Visual Archive {activeImage + 1}</span>
                   <h4 className="text-5xl lg:text-7xl font-serif font-black text-white italic leading-tight tracking-tight uppercase shadow-white/5">
                    {achievement.cinematicSequence[activeImage].title}
                  </h4>
                  <div className="h-[2px] w-32 bg-luxury-gold/50 mx-auto rounded-full" />
                </div>

                <p className="text-xl lg:text-3xl text-white/50 font-serif italic leading-relaxed text-balance">
                  {achievement.cinematicSequence[activeImage].caption}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Ambient Floating Light Effects */}
        <div className="absolute inset-0 pointer-events-none">
           <motion.div 
             animate={{ 
               y: [0, -30, 0],
               opacity: [0.1, 0.2, 0.1]
             }}
             transition={{ duration: 10, repeat: Infinity }}
             className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-luxury-gold/10 rounded-full blur-[150px]" 
           />
           <motion.div 
             animate={{ 
               y: [0, 50, 0],
               opacity: [0.05, 0.1, 0.05]
             }}
             transition={{ duration: 12, repeat: Infinity, delay: 2 }}
             className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-luxury-gold/10 rounded-full blur-[120px]" 
           />
        </div>
      </div>
    </div>
  );
};

export default function ImpactAchievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<typeof ACHIEVEMENT_CARDS[0] | null>(null);
  
  useEffect(() => {
    if (selectedAchievement) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedAchievement]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal pinning for the entire experience
      // More items = more scroll distance needed
      const pinDistance = (ACHIEVEMENT_CARDS.length + 2) * 600;
      
      const mainTl = gsap.to(".achievement-cards-track", {
        x: () => -(scrollRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          start: "top top",
          end: () => `+=${pinDistance}`,
        }
      });

      // Character reveals for metrics (linked to horizontal progress)
      gsap.utils.toArray(".metric-card").forEach((card: any, i: number) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: mainTl,
            start: "left 90%",
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="impact" ref={containerRef} className="bg-luxury-cream relative overflow-hidden z-20">
      <div ref={triggerRef} className="h-screen flex items-center overflow-hidden relative z-30 bg-luxury-cream">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-luxury-gold/10" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-luxury-gold/10" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px]" />
        </div>

        {/* Horizontal Scroll Track */}
        <div ref={scrollRef} className="achievement-cards-track flex gap-12 lg:gap-32 px-[10vw] items-center">
          
          {/* Intro Slide: Header & Metrics */}
          <div className="flex-shrink-0 w-[85vw] lg:w-[80vw] flex flex-col justify-center relative z-10">
            <header className="mb-12 lg:mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-[1px] w-12 bg-luxury-gold" />
                <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-bold">
                  Impact Analysis
                </span>
              </motion.div>
              <h2 className="text-5xl lg:text-7xl font-serif font-black text-luxury-black mb-6 leading-tight">
                Transforming <br /> 
                <span className="italic text-luxury-gold">Legal Access.</span>
              </h2>
              <p className="text-lg lg:text-xl text-luxury-gray font-light max-w-xl leading-relaxed text-balance">
                Measuring impact through advocacy, education, reform, and human-centered empowerment.
              </p>
            </header>

            {/* Impact Metrics Grid */}
            <div className="metrics-grid grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {IMPACT_METRICS.map((metric, i) => (
                <div key={i} className="metric-card group p-6 lg:p-8 glass rounded-[2.5rem] border-white/60 bg-white/40 shadow-xl shadow-luxury-black/5 hover:border-luxury-gold/30 transition-all duration-500 text-center flex flex-col items-center">
                  <span className="text-3xl lg:text-5xl font-serif font-black text-luxury-gold mb-2">
                    <Counter value={metric.value} suffix={metric.suffix} />
                  </span>
                  <span className="font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.4em] text-luxury-black font-bold mb-1">
                    {metric.label}
                  </span>
                  <div className="h-[1px] w-6 bg-luxury-gold/20 mb-1" />
                  <span className="text-[8px] font-mono text-luxury-gray uppercase tracking-widest">{metric.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Cards */}
          {ACHIEVEMENT_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedAchievement(card)}
                className="achievement-card flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[35vw] group relative p-12 lg:p-16 glass rounded-[4rem] border-white/80 bg-white/40 shadow-2xl shadow-luxury-black/5 flex flex-col transition-all duration-700 cursor-pointer h-[60vh] lg:h-[70vh] justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-[2.5rem] bg-luxury-gold/5 flex items-center justify-center border border-luxury-gold/10 group-hover:bg-luxury-black group-hover:border-luxury-black transition-all duration-500">
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-luxury-gold group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-luxury-black group-hover:text-luxury-gold transition-colors leading-tight">
                        {card.title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-luxury-gray">{card.metric}</span>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                     <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-luxury-gold/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                       <ArrowRight className="w-5 h-5 text-luxury-gold" />
                     </div>
                  </div>
                </div>

                <p className="text-lg lg:text-xl text-luxury-gray font-light leading-relaxed flex-1 mt-8 mb-8 overflow-hidden">
                  {card.description}
                </p>

                <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] text-luxury-gold/60 mt-auto">
                   <div className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
                   <span>Verified Achievement Record</span>
                </div>
              </motion.div>
            );
          })}
          
          {/* Connection Slide */}
          <div className="flex-shrink-0 w-[40vw] flex items-center px-12">
             <div className="h-[2px] w-32 bg-luxury-gold/20" />
             <div className="p-16 glass rounded-full border-luxury-gold/20 aspect-square flex flex-col items-center justify-center text-center shadow-2xl shadow-luxury-gold/10">
                <Target className="w-12 h-12 text-luxury-gold mb-8" />
                <h4 className="text-3xl font-serif font-bold italic text-luxury-black mb-6 whitespace-nowrap">Legacy of <br /> Reform</h4>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-24 py-32">
        {/* Documentary Narrative Connection */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
        >
          <div className="lg:col-span-1 border-l-2 border-luxury-gold pl-12">
             <h4 className="text-4xl lg:text-6xl font-serif font-black text-luxury-black mb-6">
               Access <br /> Is <br /> <span className="italic text-luxury-gold">Liberation.</span>
             </h4>
          </div>
          <div className="lg:col-span-2 space-y-12 flex flex-col md:flex-row items-center gap-12">
             <img src="/images/logo.png" alt="Logo" className="w-24 h-24 object-contain" />
             <p className="text-2xl lg:text-3xl font-serif font-light text-luxury-gray leading-tight italic">
               “Empowerment begins with legal knowledge. When we bridge the gap between the bar and the marginalized, we don't just change lives—we transform the very architecture of justice.”
             </p>
             <div className="flex items-center gap-8 border-t border-luxury-gold/20 pt-8 w-full md:w-auto">
                <div className="flex flex-col">
                   <span className="text-sm font-bold text-luxury-black">William Okumu</span>
                   <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-luxury-gray">Steward of Legal Reform</span>
                </div>
                <div className="h-10 w-[1px] bg-luxury-gold/30" />
                <div className="flex items-center gap-3">
                   <Heart className="w-5 h-5 text-luxury-gold" />
                   <span className="text-[10px] font-mono uppercase tracking-widest text-luxury-gray">Human-Centered</span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Tertiary Impact Row (Floating Metadata) */}
        <div className="mt-32 flex flex-wrap justify-center gap-6 opacity-30 group hover:opacity-100 transition-opacity duration-1000">
          {["Church Chaplaincy", "Public Speaking", "Somatic Sync", "Penal Reform", "KSL Advocate", "LLB London"].map((item, i) => (
            <span key={i} className="px-6 py-2 rounded-full border border-luxury-black/10 font-mono text-[9px] uppercase tracking-widest text-luxury-black">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Achievement Detail Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-0 md:p-8" onWheel={(e) => e.stopPropagation()}>
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedAchievement(null)}
               className="absolute inset-0 bg-luxury-black/95 backdrop-blur-2xl"
             />
             
             <motion.div
               initial={{ opacity: 0, scale: 0.95, y: 30 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 30 }}
               className="relative w-full max-w-7xl bg-luxury-cream overflow-hidden shadow-2xl z-10 flex flex-col h-full md:h-[90vh] md:rounded-[3rem]"
             >
                <div className="absolute top-6 right-6 z-50">
                  <button 
                    onClick={() => setSelectedAchievement(null)}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-luxury-gold text-white transition-all flex items-center justify-center group backdrop-blur-md border border-white/20"
                  >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                  </button>
                </div>

                <div className="h-full overflow-hidden" data-lenis-prevent>
                  {['landmark', 'awareness', 'chaplaincy', 'trauma'].includes(selectedAchievement.id) ? (
                    <CinematicModalContent achievement={selectedAchievement} onClose={() => setSelectedAchievement(null)} />
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 h-full w-full overflow-y-auto luxury-scrollbar">
                      {/* Standard Detailed Content (for other cards) */}
                      <div className="lg:col-span-5 bg-luxury-cream/50 p-8 lg:p-16 relative flex flex-col justify-between">
                         <div className="absolute inset-0 opacity-5 pointer-events-none">
                           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-luxury-black" />
                           <div className="absolute top-0 left-1/2 w-[1px] h-full bg-luxury-black" />
                         </div>
                         
                         <div className="relative z-10">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-luxury-gold/10 flex items-center justify-center border border-luxury-gold/20 mb-6 lg:mb-8">
                               <selectedAchievement.icon className="w-8 h-8 lg:w-10 lg:h-10 text-luxury-gold" />
                            </div>
                            <h3 className="text-2xl lg:text-4xl font-serif font-black text-luxury-black leading-tight mb-4">{selectedAchievement.title}</h3>
                            <span className="px-4 py-1.5 rounded-full border border-luxury-gold/30 text-[8px] lg:text-[9px] font-mono text-luxury-gold uppercase tracking-widest inline-block">
                               {selectedAchievement.metric}
                            </span>
                         </div>

                         <div className="mt-10 lg:mt-12 space-y-8 lg:space-y-10 relative z-10">
                            <div className="space-y-4 lg:space-y-6">
                               <div className="flex items-center gap-3 text-luxury-gold">
                                  <Target className="w-4 h-4 lb:w-5 lg:h-5" />
                                  <span className="font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-bold">Key Milestones</span>
                               </div>
                               <div className="space-y-3 lg:space-y-4">
                                  {selectedAchievement.milestones.map((milestone, mIdx) => (
                                     <div key={mIdx} className="flex gap-4 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-1.5 shrink-0" />
                                        <p className="text-sm font-bold text-luxury-black">{milestone}</p>
                                     </div>
                                  ))}
                               </div>
                            </div>
                            
                            <div className="pt-6 lg:pt-8 border-t border-luxury-gold/20 flex items-center gap-4">
                               <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-luxury-black flex items-center justify-center">
                                  <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                               </div>
                               <span className="text-[8px] lg:text-[9px] font-mono uppercase tracking-[0.5em] text-luxury-gray">Verified Resolution</span>
                            </div>
                         </div>
                      </div>

                      <div className="lg:col-span-7 p-8 lg:p-16 relative">
                        <div className="absolute top-0 right-0 w-64 h-64 border border-luxury-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                         
                         <div className="relative z-10 space-y-10 lg:space-y-12">
                            <div className="space-y-4 lg:space-y-6">
                               <div className="flex items-center gap-3 text-luxury-gold">
                                  <BarChart className="w-4 h-4 lg:w-5 lg:h-5" />
                                  <span className="font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-bold">Strategic Impact</span>
                               </div>
                               <p className="text-lg lg:text-2xl text-luxury-gray font-light leading-relaxed first-letter:text-6xl first-letter:font-serif first-letter:font-black first-letter:text-luxury-gold first-letter:mr-4 first-letter:float-left first-letter:mt-1">
                                  {selectedAchievement.fullStory}
                                </p>
                             </div>
 
                             <div className="p-8 lg:p-10 glass rounded-[2rem] bg-luxury-black text-white relative group overflow-hidden shadow-xl">
                                <div className="absolute inset-0 opacity-5 pointer-events-none">
                                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
                                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white" />
                                </div>
                                <h5 className="text-xl lg:text-2xl font-serif italic mb-2 text-luxury-gold">“Justice is not a destination, but a persistent pursuit of dignity.”</h5>
                                <div className="h-4 w-[1px] bg-luxury-gold/40 my-4" />
                                <p className="text-[9px] lg:text-[10px] font-mono tracking-widest uppercase text-white/40">Okumu Legacy Directive</p>
                             </div>
                          </div>
                       </div>
                     </div>
                   )}
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
