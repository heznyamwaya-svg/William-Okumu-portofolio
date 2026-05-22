import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bookmark, Unlock, BookOpen, Scaling as Scale, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.story-panel');
      
      const horizontalTween = gsap.to(sections, {
        id: "storyScroll",
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          start: "top top",
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + triggerRef.current!.offsetWidth,
        }
      });

      // Character reveals
      gsap.utils.toArray('.reveal-text').forEach((text: any) => {
        gsap.from(text, {
          opacity: 0,
          y: 50,
          filter: 'blur(10px)',
          duration: 1,
          scrollTrigger: {
            trigger: text,
            containerAnimation: horizontalTween,
            start: "left 80%",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={containerRef} className="overflow-hidden bg-luxury-white">
      <div ref={triggerRef} className="flex h-screen w-[400vw] relative">
        
        {/* The Spark */}
        <div className="story-panel w-screen h-full flex flex-col items-center justify-center relative bg-luxury-black overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex justify-around pointer-events-none px-24">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[2px] h-full bg-white" />
            ))}
          </div>
          <div className="relative z-10 text-center max-w-4xl px-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-gold/50 mb-8 block">The Spark</span>
            <h3 className="text-5xl lg:text-8xl font-serif italic text-luxury-white leading-tight reveal-text">
              The Inner <br /> 
              <span className="text-luxury-gold">Spark</span> of purpose.
            </h3>
            <p className="mt-12 text-luxury-gray/60 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              While condemned and judged, I discovered the University of London’s distance learning programme, sponsored by Justice Defenders. With limited resources and challenging conditions, I enrolled and began studying for my Diploma in Common Law and later my LLB. In the darkness behind bars, a new purpose was born.
            </p>
          </div>
        </div>

        {/* CHAPTER 2: AWAKENING */}
        <div className="story-panel w-screen h-full flex flex-col items-center justify-center relative bg-luxury-cream">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-luxury-black to-transparent opacity-50" />
          <div className="relative z-10 text-center max-w-4xl px-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-black/30 mb-8 block">Transformation</span>
            <div className="flex justify-center gap-12 mb-12 opacity-20">
              <BookOpen className="w-16 h-16 text-luxury-black" />
              <GraduationCap className="w-16 h-16 text-luxury-black" />
            </div>
            <h3 className="text-5xl lg:text-8xl font-serif text-luxury-black leading-tight reveal-text">
              The Eyes <br /> 
              <span className="italic text-luxury-gold">That Have Cried.</span>
            </h3>
            <p className="mt-12 text-luxury-black/50 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              I didn’t just study law, I lived it.  Started training fellow inmates in self-representation, legal rights, and court procedures. Using my growing knowledge, I helped many prepare petitions, applications and appeals. My environment became a classroom and a place of hope for hundreds of others.
            </p>
          </div>
        </div>

        {/* CHAPTER 3: TRANSFORMATION */}
        <div className="story-panel w-screen h-full flex flex-col items-center justify-center relative bg-luxury-white">
          {/* Morphing lines visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[1px] h-64 bg-luxury-gold/20 relative">
              <div className="absolute inset-0 bg-luxury-gold animate-pulse shadow-[0_0_20px_rgba(200,169,107,0.5)]" />
            </div>
          </div>
          <div className="relative z-10 text-center max-w-5xl px-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-gray/40 mb-8 block">Redemption</span>
            <h3 className="text-5xl lg:text-8xl font-serif font-black text-luxury-black leading-tight reveal-text">
              FROM THE bar <br /> 
              <span className="italic text-luxury-gold font-medium">TO THE BAR.</span>
            </h3>
            <p className="mt-12 text-luxury-gray font-light text-xl max-w-2xl mx-auto leading-relaxed">
              After my freedom, I joined the Kenya School of Law, completed the Advocates Training Programme, and in 2024 was admitted as an Advocate of the High Court of Kenya. Today, I works with Justice Defenders, giving back through legal aid, quality assurance, and expanding access to legal education, turning my journey into purpose.
            </p>
          </div>
        </div>

        {/* CHAPTER 4: IMPACT */}
        <div className="story-panel w-screen h-full flex flex-col items-center justify-center relative bg-luxury-cream">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-luxury-gold/5" />
          <div className="relative z-10 text-left max-w-6xl px-12 lg:px-24">
            <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-luxury-black/30 mb-8 block">TEARS OF IMPACT</span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <h3 className="text-5xl lg:text-7xl font-serif text-luxury-black leading-[1.1] reveal-text">
                ONLY THOSE EYES  <br /> 
                <span className="italic text-luxury-gold">THAT HAVE</span>. <br />
                CRIED<span className="font-black"></span>
              </h3>
              <div className="space-y-8 glass p-12 rounded-[3rem] border-white/50 backdrop-blur-xl">
                <p className="text-luxury-gray text-lg leading-relaxed italic">
                  "My journey is a testament to the fact that the legal system can be a vessel for healing and human dignity, especially when informed by the physiology of truth."
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-luxury-gold flex items-center justify-center">
                    <Scale className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-luxury-black">William Okumu Onyango</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-luxury-gray">Champion of change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
