import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-luxury-gold pointer-events-none z-[11000] flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div className="w-1 h-1 bg-luxury-gold rounded-full" />
    </motion.div>
  );
}
