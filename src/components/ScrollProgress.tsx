import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-[#F8F5EF]/30 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#C6A15B] via-[#E1C98A] to-[#5A0F18] origin-left shadow-[0_0_8px_rgba(198,161,91,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
};
