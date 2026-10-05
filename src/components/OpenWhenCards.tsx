import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Compass, ShieldAlert, Moon, Flame, Sparkles, ArrowUpRight, Mail } from 'lucide-react';
import { OPEN_WHEN_LETTERS } from '../data/content.ts';
import { OpenWhenLetter } from '../types.ts';
import { OpenWhenModal } from './OpenWhenModal.tsx';

export const OpenWhenCards: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<OpenWhenLetter | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'lost':
        return <Compass className="w-5 h-5 text-[#C6A15B]" />;
      case 'doubt':
        return <ShieldAlert className="w-5 h-5 text-[#C6A15B]" />;
      case 'tired':
        return <Moon className="w-5 h-5 text-[#C6A15B]" />;
      case 'miss-me':
        return <Heart className="w-5 h-5 text-[#C6A15B] fill-[#C6A15B]" />;
      case 'motivation':
        return <Flame className="w-5 h-5 text-[#C6A15B]" />;
      case 'reminder':
        return <Sparkles className="w-5 h-5 text-[#C6A15B]" />;
      default:
        return <Mail className="w-5 h-5 text-[#C6A15B]" />;
    }
  };

  return (
    <section
      id="open-when"
      className="py-28 sm:py-36 px-6 sm:px-8 bg-gradient-to-b from-[#F8F5EF] via-[#FFFDF9] to-[#F8F5EF] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5A0F18] font-sans font-medium flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-[#5A0F18] fill-[#5A0F18]" />
              LETTERS FOR YOUR HEART
            </span>
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#171717] tracking-tight mb-3">
            OPEN WHEN...
          </h2>

          <div className="font-script text-3xl sm:text-4xl text-[#C6A15B] mb-4">
            Words to Hold Whenever You Need Me
          </div>

          <p className="font-serif text-base sm:text-lg text-[#171717]/75 italic max-w-xl mx-auto">
            Six personal letters, sealed with my love, waiting for you whenever you need comfort, reassurance, or a reminder that I am always by your side.
          </p>
        </div>

        {/* 6 Romantic Love Envelope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {OPEN_WHEN_LETTERS.map((letter, idx) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedLetter(letter)}
              className="group relative rounded-3xl bg-white/90 p-8 border border-[#C6A15B]/30 hover:border-[#5A0F18] transition-all duration-400 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between min-h-[250px]"
              data-interactive="true"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedLetter(letter);
                }
              }}
            >
              <div>
                {/* Header: Icon + Wax Stamp Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-[#F8F5EF] group-hover:bg-[#5A0F18] group-hover:text-[#E1C98A] transition-colors duration-300 shadow-xs">
                    {getIcon(letter.id)}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5A0F18]/5 group-hover:bg-[#5A0F18]/10 text-[#5A0F18] text-[11px] font-mono tracking-wider transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5A0F18]" />
                    <span>LETTER 0{idx + 1}</span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#171717] group-hover:text-[#5A0F18] transition-colors duration-300 leading-snug mb-2 font-normal">
                  {letter.trigger}
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#171717]/65 line-clamp-2">
                  {letter.subtitle}
                </p>
              </div>

              {/* Bottom Unseal Affordance */}
              <div className="pt-6 border-t border-[#C6A15B]/20 flex items-center justify-between mt-4">
                <span className="font-script text-xl text-[#5A0F18] group-hover:text-[#32070C] transition-colors">
                  Unseal My Letter
                </span>
                <div className="w-8 h-8 rounded-full bg-[#F8F5EF] flex items-center justify-center group-hover:bg-[#5A0F18] group-hover:text-white transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <OpenWhenModal
        letter={selectedLetter}
        onClose={() => setSelectedLetter(null)}
      />
    </section>
  );
};
