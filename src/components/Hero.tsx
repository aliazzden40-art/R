import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('the-girl-i-see');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 px-6 sm:px-8 overflow-hidden bg-gradient-to-b from-[#F8F5EF] via-[#FFFDF9] to-[#F8F5EF]"
    >
      {/* Romantic Ambient Candlelight & Rose-Gold Bokeh Aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-[#5A0F18]/10 via-[#C6A15B]/20 to-[#8B1E2F]/15 rounded-full blur-3xl opacity-80" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C6A15B]/15 rounded-full blur-2xl" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#5A0F18]/10 rounded-full blur-2xl" />

        {/* Floating Delicate Golden Sparkles */}
        <motion.div
          animate={{ y: [-10, 10, -10], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-36 left-1/4 text-[#C6A15B]/60"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-52 right-1/4 text-[#C6A15B]/50"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Poetic Arabic / English Romantic Inscription */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2 mb-4"
        >
          <div className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#5A0F18] font-sans font-medium">
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
            <span>A LOVE LETTER FROM ALI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#5A0F18]" />
            <span className="font-mono text-[#171717]/80">08 · 01 · 2026</span>
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
          </div>

          <p className="font-serif italic text-sm sm:text-base text-[#5A0F18]/80 tracking-wide">
            “إلى ريان، نوري وأجمل ما في حياتي”
          </p>
        </motion.div>

        {/* Large Romantic Monogram Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
        >
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight text-[#171717] leading-none select-none">
            RAYAN
          </h1>

          {/* Romantic Script flourish underneath */}
          <div className="font-script text-3xl sm:text-4xl text-[#C6A15B] mt-2 select-none">
            Forever & Always
          </div>

          <div className="mx-auto mt-3 w-36 sm:w-56 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent relative">
            <div className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#5A0F18] shadow-[0_0_8px_rgba(90,15,24,0.6)]" />
          </div>
        </motion.div>

        {/* Main Heartfelt Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto space-y-4 text-lg sm:text-xl md:text-2xl font-serif text-[#171717] leading-relaxed mb-10 px-4"
        >
          <p className="italic text-[#5A0F18] font-normal text-2xl sm:text-3xl">
            “This isn't just a website.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-serif text-[#171717]/80 leading-relaxed font-light">
            It's a little reminder of how amazing you are,<br className="hidden sm:block" />
            how much I believe in you,<br className="hidden sm:block" />
            and how proud I am of the person you're becoming.”
          </p>
        </motion.div>

        {/* CTA Button: Begin the Love Letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToNext}
            className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#5A0F18] text-[#F8F5EF] text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-[#32070C] hover:shadow-[0_10px_35px_rgba(90,15,24,0.35)] hover:scale-105 active:scale-95"
            data-interactive="true"
          >
            <Heart className="w-4 h-4 text-[#E1C98A] fill-[#E1C98A] group-hover:scale-110 transition-transform" />
            <span>Begin the Letter</span>
            <ArrowDown className="w-4 h-4 text-[#E1C98A] transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </motion.div>

        {/* Romantic Fine-Art Visual: Lovers' Hands in Candlelight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-14 w-full max-w-4xl relative rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-[#C6A15B]/50 via-white to-[#5A0F18]/20 shadow-2xl"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-[#F8F5EF]">
            <img
              src="/src/assets/images/romantic_lovers_hands_1791179631564.jpg"
              alt="Two lovers hands gently touching with warm golden light"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.02] transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#32070C]/85 via-transparent to-transparent flex items-end p-6 sm:p-8 text-white justify-between">
              <div>
                <span className="font-script text-2xl sm:text-3xl text-[#E1C98A] block">
                  Holding you in my heart, always
                </span>
                <span className="font-serif italic text-xs sm:text-sm tracking-wide text-white/90">
                  “Two minds, one field, and a love that chose each other on January 8th, 2026.”
                </span>
              </div>
              <div className="text-right hidden sm:block">
                <span className="font-mono text-xs text-[#E1C98A] tracking-widest uppercase block">
                  08 · 01 · 2026
                </span>
                <span className="font-script text-xl text-white/80">
                  Ali & Rayan
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
