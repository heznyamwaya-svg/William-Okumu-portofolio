import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ChevronRight, Scale, Activity, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (taglineRef.current) {
      gsap.to(taglineRef.current, {
        duration: 2.5,
        text: "Advocate • Legal Reformer • Public Interest Litigator",
        delay: 1.2,
        ease: "none",
      });
    }
  }, []);
  
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-start bg-luxury-white pt-24 lg:pt-28 overflow-hidden">
      {/* Background Texture & Film Grain handled by global .grain in index.css */}
      {/* Ambient Lighting & Depth Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-white via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-white via-transparent to-transparent opacity-40 pointer-events-none" />
      {/* Dynamic Light Bloom */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-luxury-gold/15 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Left Content Side */}
      <div className="relative z-20 w-full lg:w-[55%] pl-8 lg:pl-24 pr-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 lg:mb-6 flex items-center"
        >
          <a href="#hero" className="flex items-center gap-4 group">
            <img src="/images/logo.png" alt="William Okumu  Logo" className="h-16 lg:h-24 w-auto object-contain drop-shadow-2xl" />
          </a>
        </motion.div>

        <div className="space-y-2 lg:space-y-0">
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[4.5vw] font-serif font-black leading-[0.95] lg:leading-[0.9] text-luxury-black tracking-tighter"
          >
            WILLIAM <br /> <br />
             
            <span className="text-luxury-gold italic">OKUMU</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col gap-3 mt-6 lg:mt-8"
          >
            <p ref={taglineRef} className="text-[10px] lg:text-xs font-mono uppercase tracking-[0.3em] text-luxury-gray min-h-[1.5em]">
              {/* Text injected via GSAP TextPlugin */}
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 lg:w-12 bg-luxury-gold" />
              
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 lg:mt-10 text-base lg:text-lg text-luxury-gray max-w-xl font-light leading-relaxed text-balance"
        >
          Transforming lived experience into <span className="text-luxury-black font-semibold">justice</span>, <span className="text-luxury-black font-semibold">advocacy</span>, and <span className="text-luxury-gold font-serif italic text-xl lg:text-2xl">legal empowerment.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap gap-4 mt-10 lg:mt-12"
        >
          <div className="relative group">
            {/* Animated Glow Ring */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-1 bg-luxury-gold/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 lg:px-10 lg:py-5 bg-luxury-black text-luxury-white font-bold uppercase tracking-widest text-[9px] lg:text-[10px] rounded-full overflow-hidden shadow-2xl shadow-luxury-black/30 border border-white/10 group/btn"
              onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover/btn:text-luxury-black">
                Explore the Journey <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-luxury-gold transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
            </motion.button>
          </div>

          <button 
            className="group px-8 py-4 lg:px-10 lg:py-5 border border-luxury-black/10 text-luxury-black font-bold uppercase tracking-widest text-[9px] lg:text-[10px] rounded-full hover:bg-luxury-gold/5 transition-all flex items-center gap-2"
            onClick={() => {
              const element = document.getElementById('impact');
              if (element) {
                const yOffset = -100; // Accounts for fixed navbar height
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({
                  top: y,
                  behavior: 'smooth'
                });
              }
            }}
          >
            View Legal Impact
          </button>
        </motion.div>

        {/* Cinematic Metadata Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden lg:flex gap-12 mt-12 lg:mt-16 p-6 lg:p-8 glass rounded-3xl border-white/50 w-fit"
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray">Constitutional Reform</span>
            <span className="text-sm font-semibold text-luxury-black">Precedent Setter</span>
          </div>
          <div className="w-[1px] h-10 bg-luxury-gold/20" />
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray">Somatic Experiencing Practitioner</span>
            <span className="text-sm font-semibold text-luxury-black">Trauma-Informed Legal Services and Therapy</span>
          </div>
        </motion.div>
      </div>

      {/* Right Portrait Side */}
      <div className="absolute top-24 lg:top-20 right-0 w-full lg:w-[40%] h-full z-10 select-none overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0, x: 100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
        >
          {/* Portrait Image with Ad
          nced Cinematic Masking */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              maskImage: `
                linear-gradient(to right, transparent 0%, black 30%),
                linear-gradient(to top, transparent 0%, black 15%),
                linear-gradient(to bottom, transparent 0%, black 10%)
              `,
              WebkitMaskImage: `
                linear-gradient(to right, transparent 0%, black 30%),
                linear-gradient(to top, transparent 0%, black 15%),
                linear-gradient(to bottom, transparent 0%, black 10%)
              `,
              maskMode: 'alpha',
              WebkitMaskComposite: 'source-in',
              maskComposite: 'intersect'
            }}
          >
            <img 
            src="/images/williamrob2.jpeg" 
              alt="William Okumu"
              className="w-full h-full object-cover object-[center_20%] grayscale-[0.2] contrast-[1.05] brightness-[1.02]"
            />
          </div>
          {/* Subtle Color Overlay to Match Theme */}
          <div className="absolute inset-0 bg-luxury-gold/5 mix-blend-soft-light pointer-events-none" />
        </motion.div>
      </div>

      {/* Vertical Navigation & Scroll Indicator */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-12 text-[9px] font-mono uppercase tracking-[0.5em] text-luxury-gray/40">
        <span className="vertical-rl  hover:text-luxury-gold cursor-pointer transition-colors">Changing</span>
        <div className="w-[1px] h-24 bg-luxury-gold/20" />
        <span className="vertical-rl  hover:text-luxury-gold cursor-pointer transition-colors">Narratives</span>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 text-luxury-black/10"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.8em]">Scroll</span>
        <div className="w-[1px] h-12 bg-luxury-gold/30" />
      </motion.div>
    </section>
  );
}
