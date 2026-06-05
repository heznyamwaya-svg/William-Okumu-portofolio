import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Mail, Linkedin, Instagram, Youtube, Music2, Facebook, Sparkles, Scale, Heart, Shield } from 'lucide-react';
import { cn } from '../lib/utils';
import { CV_DATA } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Journey", href: "#journey" },
  { name: "Expertise", href: "#expertise" },
  { name: "Records", href: "#cases" },
  { name: "Impact", href: "#impact" },
  { name: "Gallery", href: "#gallery" },
  { name: "Resume", href: "#dossier" },
  { name: "Milestones", href: "#milestones" },
  { name: "Manifesto", href: "#philosophy" },
  { name: "Praxis", href: "#advocacy" },
  { name: "Academy", href: "#academy" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" }
];

const SOCIAL_LINKS = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/william-okumu-31a5b8117?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
    icon: <Linkedin className="w-5 h-5" />, 
    color: "#0A66C2",
    title: "LinkedIn"
  },
  { 
    name: "X", 
    href: "https://x.com/smilewillium", 
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
      </svg>
    ), 
    color: "#000000",
    title: "X (Twitter)"
  },
  { 
    name: "Facebook", 
    href: "https://www.facebook.com/share/1aAJDWEA7W/", 
    icon: <Facebook className="w-5 h-5 fill-current" />, 
    color: "#1877F2",
    title: "Facebook"
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/advwilliamokumusep?igsh=NnU2YnQ0ZzR5NWE1", 
    icon: <Instagram className="w-5 h-5" />, 
    color: "#E4405F",
    title: "Instagram"
  },
  { 
    name: "YouTube", 
    href: "https://youtube.com", 
    icon: <Youtube className="w-5 h-5 fill-current" />, 
    color: "#FF0000",
    title: "YouTube"
  },
  { 
    name: "TikTok", 
    href: "https://www.tiktok.com/@william_okumu?_r=1&_t=ZS-96x2esR1pYH", 
    icon: <Music2 className="w-5 h-5" />, 
    color: "#010101",
    title: "TikTok"
  }
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Signature reveal animation
      gsap.from(".signature-path", {
        strokeDashoffset: 1000,
        strokeDasharray: 1000,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        }
      });

      // Ambient elements motion
      gsap.to(".ambient-glow", {
        scale: 1.2,
        opacity: 0.3,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Text reveal animations
      gsap.from(".footer-reveal", {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
        stagger: 0.2,
        duration: 1.5,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
        }
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-luxury-white py-48 px-8 lg:px-24 relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-luxury-gold/5 rounded-full blur-[180px]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-luxury-gold/10" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-luxury-black/[0.03]" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-luxury-black/[0.03]" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-luxury-black/[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Reflection Section */}
        <div className="text-center mb-48 max-w-5xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6 justify-center"
          >
            <div className="h-[1px] w-12 bg-luxury-gold" />
            <span className="font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gold font-bold">The Closing Argument</span>
            <div className="h-[1px] w-12 bg-luxury-gold" />
          </motion.div>
          
          <h2 className="footer-reveal text-6xl lg:text-[clamp(5rem,11vw,11rem)] font-serif font-black text-luxury-black leading-[0.9] tracking-tighter mb-12">
            Justice. <br />
            Transformation. <br />
            <span className="italic text-luxury-gold">Legacy.</span>
          </h2>

          <div className="flex flex-col items-center gap-8">
             <div className="h-16 w-[1px] bg-luxury-gold" />
             <p className="footer-reveal text-2xl lg:text-4xl font-serif italic text-luxury-gray max-w-4xl text-balance">
               “Transforming lived experience into advocacy, dignity, and justice.” 
             </p>
             <div className="h-16 w-[1px] bg-luxury-gold" />
          </div>
        </div>

        {/* Informational Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-32 pb-48 border-b border-luxury-black/5">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <a href="#hero" className="flex items-center gap-4 group">
               <img src="/images/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
               <span className="font-serif font-bold text-xl text-luxury-black group-hover:text-luxury-gold transition-colors">William Okumu</span>
            </a>
            <p className="text-sm text-luxury-gray font-light leading-relaxed">
              Advocate of the High Court of Kenya. Dedicated to human-centered justice reform and rehabilitation systems.
            </p>
            <div className="pt-4 space-y-2">
               <p className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold">Signature Directive</p>
               <p className="font-serif font-black text-luxury-black italic text-lg">FROM THE BARS TO THE BAR</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
             <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black">Architecture</h4>
             <nav className="flex flex-col gap-4">
                {NAV_LINKS.map(link => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group flex items-center justify-between text-sm text-luxury-gray hover:text-luxury-black transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-luxury-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </a>
                ))}
             </nav>
          </div>

          {/* Connect */}
          <div className="space-y-8">
             <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black">Correspondence</h4>
             <div className="space-y-6">
                <a href={`mailto:${CV_DATA.contact.email}`} className="group block space-y-1">
                   <span className="block text-[8px] font-mono uppercase tracking-widest text-luxury-gray/60">Digital Mail</span>
                   <span className="block text-sm font-bold text-luxury-black group-hover:text-luxury-gold transition-colors">{CV_DATA.contact.email}</span>
                </a>
                <div className="flex flex-wrap gap-4 pt-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a 
                      key={social.name}
                      href={social.href} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-3 rounded-xl text-white transition-all group/social hover:scale-110 active:scale-95 shadow-lg" 
                      style={{ backgroundColor: social.color }}
                      title={social.title}
                    >
                      <div className="group-hover/social:scale-110 transition-transform">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
             </div>
          </div>

          {/* Consultation CTA */}
          <div className="space-y-8">
             <div className="bg-luxury-black p-10 rounded-[3rem] text-white space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                <p className="text-sm font-light text-white/60 leading-relaxed relative z-10">
                   Begin your journey towards justice and transformation today.
                </p>
                <a 
                  href="#contact" 
                  className="block w-full py-4 rounded-2xl bg-luxury-gold text-luxury-black font-mono text-[10px] uppercase tracking-widest font-black hover:bg-white transition-colors relative z-10 text-center"
                >
                   Consultation
                </a>
             </div>
          </div>
        </div>

        {/* The Animated Signature Reveal */}
        <div className="py-48 flex flex-col items-center gap-12">
            <svg 
              ref={signatureRef} 
              className="w-full max-w-[400px] h-auto text-luxury-gold" 
              viewBox="0 0 400 120" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Abstract Signature Path */}
              <path 
                className="signature-path" 
                d="M50,80 C60,40 100,20 130,50 C160,80 180,90 200,60 C220,30 250,30 280,70 C310,110 330,80 350,50" 
              />
              <path className="signature-path" d="M120,40 L160,40" />
              <path className="signature-path" d="M210,50 L240,50" />
            </svg>
            <div className="flex flex-col items-center gap-2">
               <span className="font-serif font-black text-2xl tracking-tighter text-luxury-black">William Okumu</span>
               <span className="font-mono text-[9px] uppercase tracking-[1em] text-luxury-gold pl-2">Advocate of the High Court</span>
            </div>
        </div>

        {/* Final Reflective Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full pt-12">
           {[ 
             "Justice must recognize humanity.", 
             "Transformation is possible.", 
             "Dignity belongs to everyone.", 
             "The law is a path to restoration." 
           ].map((quote, i) => (
             <div key={i} className="text-center p-6 border-x border-luxury-black/5">
                <p className="text-[10px] font-serif italic text-luxury-gray">"{quote}"</p>
             </div>
           ))}
        </div>

        {/* Legal Credits */}
        <div className="mt-48 flex flex-col md:flex-row justify-between items-center w-full gap-12 opacity-60">
           <div className="flex items-center gap-6">
              <Scale className="w-4 h-4 text-luxury-gold" />
              <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-black font-black">Rule of Law // Equity First</span>
           </div>
           
           <div className="flex flex-col items-center gap-4">
              <div className="flex gap-12">
                 <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-black hover:text-luxury-gold cursor-pointer transition-colors">Privacy Policy</span>
                 <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-black hover:text-luxury-gold cursor-pointer transition-colors">Terms of Service</span>
              </div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-luxury-black flex items-center gap-2">
                 Designed with <Heart className="w-3 h-3 text-luxury-gold fill-luxury-gold animate-pulse" /> by <span className="font-black text-luxury-gold">Hesbon Onyango</span>
              </p>
           </div>

           <p className="font-mono text-[8px] uppercase tracking-widest text-luxury-black">
              © 2026 H. Onyango's Design . All Rights Reserved.
           </p>
        </div>

      </div>

      {/* Finishing Detail */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
         <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
         <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-luxury-gray">Hetz Tech Solution LtD</span>
      </div>
    </footer>
  );
}
