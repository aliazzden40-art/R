import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, ShieldCheck, Code2, Heart, Sparkles, Lock, CheckCircle2 } from 'lucide-react';

export const TechAndSecurity: React.FC = () => {
  const [isHandshakeVerified, setIsHandshakeVerified] = useState(true);

  return (
    <section
      id="programming-cybersecurity"
      className="py-28 sm:py-36 px-6 sm:px-8 bg-gradient-to-b from-[#F8F5EF] via-[#FFFDF9] to-[#F8F5EF] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Curatorial Romantic Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5A0F18] font-sans font-medium flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-[#5A0F18] fill-[#5A0F18]" />
              SHARED DESTINY
            </span>
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#171717] tracking-tight mb-3">
            TWO MINDS. ONE DIRECTION.
          </h2>

          <div className="font-script text-3xl sm:text-4xl text-[#C6A15B] mb-4">
            Our Minds In Sync, Our Hearts In Love
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#171717]/85 max-w-2xl mx-auto leading-relaxed">
            “Maybe one of the things I love most is knowing that we're not only dreaming about our future — we're learning how to build it.”
          </p>
        </div>

        {/* Romantic Dual Node Card: ALI × RAYAN with Warm Animated Connection Line */}
        <div className="relative rounded-3xl bg-white/90 border border-[#C6A15B]/30 p-8 sm:p-12 shadow-2xl backdrop-blur-sm mb-12 overflow-hidden">
          {/* Subtle cyber-romantic background details */}
          <div className="absolute top-4 right-6 font-mono text-[11px] text-[#C6A15B]/70 tracking-widest hidden sm:block">
            010101 · &lt;love /&gt; · 08 · 01 · 2026
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 relative">
            {/* Left Node: ALI */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-5/12 p-6 sm:p-8 rounded-3xl bg-[#F8F5EF] border border-[#C6A15B]/30 text-center shadow-xs"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#5A0F18] text-[#E1C98A] mb-4 shadow-md">
                <Code2 className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-3xl font-normal text-[#171717] mb-1">
                ALI
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-[#5A0F18] font-medium mb-3">
                PROGRAMMING & CYBERSECURITY
              </p>
              <div className="text-xs font-serif italic text-[#171717]/70">
                Birthday: December 16, 2007
              </div>
            </motion.div>

            {/* Center Animated Connection Channel with Beating Heart */}
            <div className="flex flex-col items-center justify-center px-4 w-full md:w-2/12 my-2 md:my-0">
              <div className="w-10 h-10 rounded-full bg-[#5A0F18] flex items-center justify-center shadow-lg border border-[#E1C98A] mb-2 animate-romantic-pulse">
                <Heart className="w-5 h-5 text-[#E1C98A] fill-[#E1C98A]" />
              </div>

              <div className="w-full h-[2px] bg-gradient-to-r from-[#5A0F18]/40 via-[#C6A15B] to-[#5A0F18]/40 relative flex items-center justify-center">
                <motion.div
                  animate={{ x: [-25, 25, -25] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-2.5 h-2.5 rounded-full bg-[#5A0F18] border border-[#E1C98A] shadow-[0_0_10px_rgba(198,161,91,0.9)]"
                />
              </div>

              <span className="font-mono text-[11px] text-[#C6A15B] tracking-widest uppercase mt-2 font-medium">
                08 · 01 · 2026
              </span>
            </div>

            {/* Right Node: RAYAN */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-5/12 p-6 sm:p-8 rounded-3xl bg-[#F8F5EF] border border-[#C6A15B]/30 text-center shadow-xs"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#5A0F18] text-[#E1C98A] mb-4 shadow-md">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-3xl font-normal text-[#171717] mb-1">
                RAYAN
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-[#5A0F18] font-medium mb-3">
                PROGRAMMING & CYBERSECURITY
              </p>
              <div className="text-xs font-serif italic text-[#171717]/70">
                Birthday: December 6, 2007
              </div>
            </motion.div>
          </div>

          {/* Romantic Developer Note */}
          <div className="mt-10 pt-8 border-t border-[#C6A15B]/20">
            <div className="bg-[#32070C] text-[#F8F5EF] rounded-2xl p-6 sm:p-8 font-mono text-xs sm:text-sm shadow-2xl border border-[#C6A15B]/30">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E1C98A]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5A0F18]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <span className="font-script text-base text-[#E1C98A] ml-2">ourSharedTrajectory.ts</span>
                </div>
                <div className="text-[11px] text-[#E1C98A] flex items-center gap-1 font-sans">
                  <Heart className="w-3 h-3 fill-[#E1C98A]" />
                  <span>PERMANENT COMMITMENT</span>
                </div>
              </div>

              <div className="space-y-2 text-[#F8F5EF]/90 font-mono">
                <p>
                  <span className="text-[#C6A15B]">const</span> relationship = &#123;
                </p>
                <div className="pl-6 space-y-1.5 text-white/80">
                  <p>
                    <span className="text-[#E1C98A]">us</span>: <span className="text-[#C6A15B]">"Ali &amp; Rayan"</span>,
                  </p>
                  <p>
                    <span className="text-[#E1C98A]">sharedPassion</span>: <span className="text-[#C6A15B]">"Programming &amp; Cybersecurity"</span>,
                  </p>
                  <p>
                    <span className="text-[#E1C98A]">birthdays</span>: <span className="text-[#C6A15B]">"Dec 6 &amp; Dec 16 (10 days apart)"</span>,
                  </p>
                  <p>
                    <span className="text-[#E1C98A]">anniversary</span>: <span className="text-[#C6A15B]">"January 8, 2026"</span>,
                  </p>
                  <p>
                    <span className="text-[#E1C98A]">myPromise</span>: <span className="text-[#E1C98A]">() =&gt; chooseYouForever()</span>,
                  </p>
                </div>
                <p>&#125;;</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-serif">
                <span className="italic text-sm text-[#F8F5EF]/80">
                  “Of all the infinite code in this world, choosing you was my clearest decision.”
                </span>
                <span className="text-xs font-mono text-[#E1C98A]">
                  // 08 · 01 · 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
