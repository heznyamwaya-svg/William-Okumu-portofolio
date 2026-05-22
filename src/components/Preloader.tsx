import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const imgRef1 = useRef<HTMLDivElement>(null);
  const imgRef2 = useRef<HTMLDivElement>(null);
  const imgRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            pointerEvents: 'none',
            duration: 1.5,
            ease: "power2.inOut",
            onComplete
          });
        }
      });

      // Initial State
      gsap.set('.prison-bar', { scaleY: 0, opacity: 0 });
      gsap.set([textRef1.current, textRef2.current, finalRef.current], { opacity: 0, filter: 'blur(20px)' });
      gsap.set([imgRef1.current, imgRef2.current, imgRef3.current], { opacity: 0, scale: 1.2, rotate: 2 });

      // Stage 1: Prison Bars + Images
      tl.to('.prison-bar', {
        scaleY: 1,
        opacity: 0.15,
        duration: 2,
        stagger: 0.05,
        ease: "power4.inOut"
      })
      .to(imgRef1.current, {
        opacity: 0.6,
        scale: 1,
        rotate: 0,
        duration: 3,
        ease: "sine.out"
      }, "-=2")
      .to(textRef1.current, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: "power2.out"
      }, "-=1.5")
      .to([textRef1.current, imgRef1.current], {
        opacity: 0,
        filter: 'blur(20px)',
        duration: 1.2,
        delay: 0.5
      })

      // The Transformation: Bars become Gold Dividers + Advocacy Image
      .to('.prison-bar', {
        backgroundColor: '#C8A96B',
        opacity: 0.4,
        width: '1px',
        duration: 1.8,
        stagger: 0.03,
        ease: "expo.inOut"
      })
      .to(imgRef2.current, {
        opacity: 0.6,
        scale: 1,
        rotate: 0,
        duration: 3,
        ease: "sine.out"
      }, "-=1.8")
      .to(textRef2.current, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: "power2.out"
      }, "-=1.5")
      .to([textRef2.current, imgRef2.current], {
        opacity: 0,
        filter: 'blur(20px)',
        duration: 1.2,
        delay: 0.5
      })

      // Final Reveal: The Advocate
      .to(imgRef3.current, {
        opacity: 0.6,
        scale: 1,
        rotate: 0,
        duration: 4,
        ease: "sine.out"
      }, "-=0.8")
      .to(finalRef.current, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 2.5,
        ease: "power3.out"
      }, "-=3.5")
      .to(progressRef.current, {
        scaleX: 1,
        duration: 1.5,
        ease: "power4.inOut"
      }, "-=1.5");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-luxury-white flex items-center justify-center overflow-hidden"
    >
      <div className="grain" />

      {/* images in the preloead showing his journey to the BAR */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div ref={imgRef1} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/William4.jpeg")' }} />
        <div ref={imgRef2} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/willysign.jpeg")' }} />
        <div ref={imgRef3} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/William-profile.webp")' }} />
      </div>

      {/* Morphing Background Bars */}
      <div ref={barsRef} className="absolute inset-0 flex justify-around pointer-events-none px-12 lg:px-48">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="prison-bar w-8 h-full bg-black/40 origin-top" 
          />
        ))}
      </div>

      {/* Cinematic Typography */}
      <div className="relative z-10 text-center px-6 w-full">
        <div ref={textRef1} className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl lg:text-9xl font-serif font-black italic tracking-tighter text-luxury-black">
            FROM THE bar
          </h2>
        </div>
        
        <div ref={textRef2} className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl lg:text-9xl font-serif font-black italic tracking-tighter text-luxury-gold">
            TO THE BAR
          </h2>
        </div>

        <div ref={finalRef} className="flex flex-col items-center w-full">
          <h1 className="text-3xl lg:text-7xl font-serif font-black text-luxury-black mb-6 light-sweep text-center leading-tight">
            This is Counsel <br className="lg:hidden" /> WILLIAM OKUMU
          </h1>
          <p className="font-mono text-xs lg:text-xl uppercase tracking-[0.6em] text-luxury-gold font-black">
            ADVOCATE OF THE HIGH COURT
          </p>
          
          <div className="w-64 lg:w-96 h-[2px] bg-luxury-gold/20 mt-16 relative overflow-hidden">
            <div 
              ref={progressRef}
              className="absolute inset-0 bg-luxury-gold origin-left scale-x-0"
            />
          </div>
        </div>
      </div>

      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="fixed bottom-12 font-mono text-[8px] uppercase tracking-[0.8em] text-luxury-gray/40"
      >
        Justice Restored // Neural Integrity
      </motion.div>
    </div>
  );
}
