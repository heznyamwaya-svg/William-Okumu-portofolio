import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Globe, ShieldCheck, ArrowRight, User } from 'lucide-react';
import { CV_DATA } from '../constants';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
      gsap.from(".contact-header > *", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 80%",
        }
      });

      // Ambient light sweep
      gsap.to(".contact-beam", {
        rotate: 45,
        opacity: 0.4,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-48 px-8 lg:px-24 bg-luxury-white relative overflow-hidden">
      
      {/* Cinematic Environmental Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="contact-beam absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(200,169,107,0.05)_180deg,transparent_360deg)] z-0 rotate-0" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-luxury-gold/[0.05]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-luxury-amber/10 rounded-full blur-[150px]" />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        
        <header className="contact-header mb-48 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-10">
             <div className="h-20 w-[1px] bg-luxury-gold/40" />
             <h2 className="text-6xl lg:text-9xl font-serif font-black text-luxury-black leading-[0.85]">
               Begin the <br />
               <span className="italic text-luxury-gold">Conversation.</span>
             </h2>
             <p className="text-xl lg:text-3xl text-luxury-gray font-light leading-relaxed">
               Justice begins with dialogue, understanding, and the courage to seek transformation. Enter our private consultation space below.
             </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">
          
          {/* Identity & Contact Detail Column */}
          <div className="space-y-24">
             <div className="space-y-12">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-[1px] bg-luxury-gold" />
                   <span className="font-mono text-[10px] uppercase tracking-[0.8em] text-luxury-gold font-bold">The Protocol</span>
                </div>
                <h3 className="text-4xl lg:text-6xl font-serif font-bold text-luxury-black italic leading-tight">
                   "Every story <br /> deserves <span className="text-luxury-gold underline decoration-luxury-gold/20 underline-offset-[12px] not-italic">dignity.</span>"
                </h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group cursor-pointer">
                   <div className="mb-6 w-14 h-14 rounded-2xl bg-white border border-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold transition-all duration-700">
                      <Mail className="w-6 h-6 text-luxury-gold group-hover:text-white" />
                   </div>
                   <p className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray/60 mb-2">Electronic Correspondence</p>
                   <p className="text-xl font-serif font-bold text-luxury-black">{CV_DATA.contact.email}</p>
                </div>
                <div className="group cursor-pointer">
                   <div className="mb-6 w-14 h-14 rounded-2xl bg-white border border-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold transition-all duration-700">
                      <Phone className="w-6 h-6 text-luxury-gold group-hover:text-white" />
                   </div>
                   <p className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray/60 mb-2">Secure Line</p>
                   <p className="text-xl font-serif font-bold text-luxury-black">{CV_DATA.contact.phone}</p>
                </div>
                <div className="group cursor-pointer">
                   <div className="mb-6 w-14 h-14 rounded-2xl bg-white border border-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold transition-all duration-700">
                      <MapPin className="w-6 h-6 text-luxury-gold group-hover:text-white" />
                   </div>
                   <p className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray/60 mb-2">Jurisdiction Base</p>
                   <p className="text-xl font-serif font-bold text-luxury-black">Nairobi, Kenya</p>
                </div>
                <div className="group cursor-pointer">
                   <div className="mb-6 w-14 h-14 rounded-2xl bg-white border border-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold transition-all duration-700">
                      <ShieldCheck className="w-6 h-6 text-luxury-gold group-hover:text-white" />
                   </div>
                   <p className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray/60 mb-2">Representation Status</p>
                   <p className="text-xl font-serif font-bold text-luxury-black">High Court Advocate</p>
                </div>
             </div>

             <div className="p-12 glass rounded-[4rem] border-luxury-gold/10 bg-luxury-cream/20 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-luxury-gold/10" />
                <div className="relative z-10 flex flex-col items-center text-center gap-8">
                   <Globe className="w-12 h-12 text-luxury-gold opacity-50 group-hover:rotate-180 transition-transform duration-1000" />
                   <p className="text-sm font-mono uppercase tracking-[0.5em] text-luxury-black font-black">Connecting Global Justice Systems</p>
                   <div className="flex gap-4">
                      {["LinkedIn", "Twitter", "Email"].map((link, i) => (
                        <span key={link} className="text-[8px] font-mono uppercase tracking-[0.4em] text-luxury-gray hover:text-luxury-gold cursor-pointer transition-colors">
                           {link}
                        </span>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Luxury Interactive Form Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            className="glass rounded-[5rem] border-white/80 bg-white/40 shadow-2xl p-12 lg:p-20 relative backdrop-blur-3xl overflow-hidden"
          >
            {/* Form Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 space-y-16">
               <div className="flex flex-col gap-2">
                  <h4 className="text-3xl font-serif font-black text-luxury-black">Consultation Inquiry</h4>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-luxury-gray">Establishment of Professional Relationship</p>
               </div>

               <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <div className="group space-y-4">
                        <label className="block text-[10px] font-mono uppercase tracking-[0.4em] text-luxury-gray transition-colors group-focus-within:text-luxury-gold">Your Name</label>
                        <input 
                           type="text" 
                           placeholder="Full Identity"
                           className="w-full bg-transparent border-b border-luxury-black/10 py-4 focus:outline-none focus:border-luxury-gold transition-all font-serif text-lg placeholder:text-luxury-gray/20"
                        />
                     </div>
                     <div className="group space-y-4">
                        <label className="block text-[10px] font-mono uppercase tracking-[0.4em] text-luxury-gray transition-colors group-focus-within:text-luxury-gold">Email Address</label>
                        <input 
                           type="email" 
                           placeholder="Correspondence Node"
                           className="w-full bg-transparent border-b border-luxury-black/10 py-4 focus:outline-none focus:border-luxury-gold transition-all font-serif text-lg placeholder:text-luxury-gray/20"
                        />
                     </div>
                  </div>

                  <div className="group space-y-4">
                     <label className="block text-[10px] font-mono uppercase tracking-[0.4em] text-luxury-gray transition-colors group-focus-within:text-luxury-gold">Nature of Interest</label>
                     <select className="w-full bg-transparent border-b border-luxury-black/10 py-4 focus:outline-none focus:border-luxury-gold transition-all font-serif text-lg text-luxury-black">
                        <option>Legal Representation</option>
                        <option>Reform Advocacy</option>
                        <option>Trauma-Informed Consultation</option>
                        <option>Educational Partnership</option>
                        <option>Public Speaking Inquiry</option>
                     </select>
                  </div>

                  <div className="group space-y-4">
                     <label className="block text-[10px] font-mono uppercase tracking-[0.4em] text-luxury-gray transition-colors group-focus-within:text-luxury-gold">Matter Description</label>
                     <textarea 
                        rows={5}
                        placeholder="Share the journey or matter you wish to bring to light..."
                        className="w-full bg-transparent border-b border-luxury-black/10 py-4 focus:outline-none focus:border-luxury-gold transition-all font-serif text-lg resize-none placeholder:text-luxury-gray/20"
                     />
                  </div>

                  <button className="group relative w-full overflow-hidden rounded-3xl bg-luxury-black py-8 transition-all hover:shadow-[0_20px_50px_-20px_rgba(200,169,107,0.4)]">
                     <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                     <div className="relative z-10 flex items-center justify-center gap-6">
                        <span className="font-mono text-xs font-black uppercase tracking-[0.8em] text-white group-hover:text-luxury-black transition-colors">Begin Your Journey</span>
                        <ArrowRight className="w-5 h-5 text-luxury-gold group-hover:text-luxury-black transition-all group-hover:translate-x-2" />
                     </div>
                  </button>
               </form>

               <div className="flex items-center justify-center gap-6 pt-12 border-t border-luxury-black/5">
                  <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-luxury-cream flex items-center justify-center shadow-md">
                           <User className="w-4 h-4 text-luxury-gold" />
                        </div>
                     ))}
                  </div>
                  <p className="text-[10px] font-mono tracking-widest text-luxury-gray">Global Consultation Readiness Active</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Philosophical Summary */}
        <div className="mt-64 flex flex-col items-center">
           <div className="flex flex-col items-center text-center gap-12 max-w-5xl">
              <div className="h-1px w-32 bg-luxury-gold" />
              <h4 className="text-4xl lg:text-8xl font-serif font-black text-luxury-black leading-[0.9] italic">
                “Transformation begins when first <span className="text-luxury-gold font-bold not-italic underline decoration-luxury-gold/40 underline-offset-[16px]">voices are heard.</span>”
              </h4>
              <div className="flex flex-col items-center gap-4">
                 <p className="font-mono text-[10px] uppercase tracking-[1em] text-luxury-gold font-black">Professional Stewardship</p>
                 <div className="w-12 h-[1px] bg-luxury-gold" />
              </div>
           </div>
        </div>

      </div>

    </section>
  );
}
