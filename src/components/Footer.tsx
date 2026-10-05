import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-[#F8F5EF]/80 py-12 px-6 sm:px-8 border-t border-white/10 font-sans text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg text-white font-normal tracking-wide">
              RAYAN
            </span>
            <Heart className="w-3.5 h-3.5 text-[#E1C98A] fill-[#E1C98A]" />
            <span className="font-script text-2xl text-[#E1C98A] font-light lowercase">
              ali
            </span>
          </div>
          <span className="hidden sm:inline text-white/30">·</span>
          <span className="font-serif italic text-xs text-[#E1C98A]">
            “بكل حبي لريان · A Letter From Ali”
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] text-white/60">
            08 · 01 · 2026
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/10 text-white transition-colors border border-white/15"
            aria-label="Scroll back to top"
            data-interactive="true"
          >
            <span className="font-mono text-[11px] hidden sm:inline">RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E1C98A]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
