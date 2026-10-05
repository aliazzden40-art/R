import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart } from 'lucide-react';
import { OpenWhenLetter } from '../types.ts';

interface OpenWhenModalProps {
  letter: OpenWhenLetter | null;
  onClose: () => void;
}

export const OpenWhenModal: React.FC<OpenWhenModalProps> = ({ letter, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (letter) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [letter, onClose]);

  if (!letter) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Soft Romantic Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#32070C]/75 backdrop-blur-md transition-opacity"
        />

        {/* Romantic Parchment Letter Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 25 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl p-7 sm:p-12 shadow-2xl border-2 border-[#C6A15B]/40 my-auto z-10 text-[#171717] overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Subtle Golden Hairline Frame */}
          <div className="absolute inset-2 border border-[#C6A15B]/20 rounded-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full text-[#171717]/60 hover:text-[#5A0F18] hover:bg-[#C6A15B]/20 transition-colors z-20"
            aria-label="Close letter"
            data-interactive="true"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Romantic Letterhead with Wax Seal */}
          <div className="text-center relative pb-6 mb-6 border-b border-[#C6A15B]/25">
            {/* Wax Seal with Monogram */}
            <div className="relative mx-auto mb-3 w-14 h-14 rounded-full bg-[#5A0F18] text-[#E1C98A] flex flex-col items-center justify-center shadow-lg border-2 border-[#C6A15B] ring-4 ring-[#5A0F18]/20">
              <span className="font-serif font-bold text-xs tracking-wider">A & R</span>
              <Heart className="w-2.5 h-2.5 fill-[#E1C98A] text-[#E1C98A] -mt-0.5" />
            </div>

            <span className="font-script text-2xl text-[#C6A15B] block mb-1">
              A Private Letter For Rayan
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#5A0F18] font-normal tracking-wide">
              {letter.trigger}
            </h3>

            <p className="text-xs sm:text-sm font-serif italic text-[#171717]/70 mt-1">
              {letter.subtitle}
            </p>
          </div>

          {/* Letter Body (Warm Book Typography) */}
          <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-[#171717]/90 max-w-prose mx-auto">
            {letter.content.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:text-[#5A0F18]'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Handwritten Romantic Signature */}
          <div className="mt-8 pt-6 border-t border-[#C6A15B]/25 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C6A15B]">
              <span>SEALED:</span>
              <span className="text-[#171717]/70">08 · 01 · 2026</span>
            </div>

            <div className="text-right mt-3 sm:mt-0">
              <span className="font-script text-3xl sm:text-4xl text-[#5A0F18] block leading-none">
                Ali
              </span>
              <span className="text-[11px] font-serif italic text-[#171717]/60">
                “Still choosing you, every single day.”
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
