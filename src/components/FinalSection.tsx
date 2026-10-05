import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Check, Share2 } from 'lucide-react';

export const FinalSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="final-section"
      className="relative pt-36 pb-44 px-6 sm:px-8 bg-gradient-to-b from-[#F8F5EF] via-[#5A0F18] to-[#260408] text-[#F8F5EF] overflow-hidden"
    >
      {/* Delicate romantic starry glow & velvet rose aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C6A15B]/15 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#8B1E2F]/20 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Poetic Arabic / English Romantic Whisper */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2 mb-14"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#E1C98A]">
            <Heart className="w-3.5 h-3.5 fill-[#E1C98A]" />
            <span>MY ETERNAL PROMISE</span>
            <Heart className="w-3.5 h-3.5 fill-[#E1C98A]" />
          </div>
          <span className="font-serif italic text-sm text-[#F8F5EF]/70">
            “أحبك اليوم، وغداً، وإلى ما لا نهاية”
          </span>
        </motion.div>

        {/* The Emotional Sequence */}
        <div className="space-y-8 sm:space-y-12 mb-20 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-sm sm:text-base tracking-[0.25em] uppercase text-[#F8F5EF]/80 font-light"
          >
            IF YOU EVER FORGET HOW AMAZING YOU ARE...
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight"
          >
            COME BACK HERE.
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif italic text-4xl sm:text-6xl md:text-7xl text-[#E1C98A] font-light leading-tight"
          >
            I'LL REMIND YOU.
          </motion.h3>
        </div>

        {/* Signature & Romantic Date Seal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="border-t border-[#C6A15B]/30 pt-12 w-full max-w-md flex flex-col items-center gap-4"
        >
          {/* Handwritten Script Signature */}
          <div className="font-script text-5xl sm:text-6xl text-white select-none leading-none">
            Ali
          </div>

          <span className="font-serif tracking-widest text-xs uppercase text-[#E1C98A] font-medium">
            — ALI
          </span>

          <div className="flex items-center gap-3 text-xs font-mono text-[#E1C98A] tracking-widest uppercase mt-1">
            <span>08 · 01 · 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E1C98A]" />
            <span className="font-script text-2xl text-white lowercase">
              “Still choosing you.”
            </span>
          </div>

          {/* Quick Sanctuary Bookmark Button */}
          <div className="mt-8">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-[#C6A15B]/50 text-xs font-mono text-[#F8F5EF] transition-all duration-300 hover:scale-105 shadow-lg"
              data-interactive="true"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#E1C98A]" />
                  <span>Sanctuary Saved to Clipboard</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#E1C98A]" />
                  <span>Save Our Sanctuary Link</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
