import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, UtensilsCrossed, Cat, HeartHandshake, ChevronRight, Heart } from 'lucide-react';
import { PERSONA_CARDS } from '../data/content.ts';

export const WhatMakesYouYou: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'coffee':
        return <Coffee className="w-6 h-6 stroke-[1.5]" />;
      case 'croissant':
        return <UtensilsCrossed className="w-6 h-6 stroke-[1.5]" />;
      case 'cat':
        return <Cat className="w-6 h-6 stroke-[1.5]" />;
      case 'heart-handshake':
        return <HeartHandshake className="w-6 h-6 stroke-[1.5]" />;
      default:
        return <Heart className="w-6 h-6 stroke-[1.5]" />;
    }
  };

  return (
    <section
      id="what-makes-you-you"
      className="py-28 sm:py-36 px-6 sm:px-8 bg-gradient-to-b from-[#F8F5EF] via-white to-[#F8F5EF]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Curatorial Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5A0F18] font-sans font-medium flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-[#5A0F18] fill-[#5A0F18]" />
              THE LITTLE THINGS I ADORE
            </span>
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#171717] tracking-tight mb-3">
            WHAT MAKES YOU, YOU
          </h2>

          <div className="font-script text-3xl sm:text-4xl text-[#C6A15B] mb-4">
            Reasons My Heart Chose You
          </div>

          <p className="font-serif text-base sm:text-lg text-[#171717]/75 max-w-xl mx-auto italic">
            The quiet joys, tender instincts, and sweet details that make you the only one in the world for me. Tap each card to read my heart.
          </p>
        </div>

        {/* 4 Interactive Romantic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONA_CARDS.map((card) => {
            const isSelected = activeCardId === card.id;

            return (
              <motion.div
                key={card.id}
                layout
                onClick={() => setActiveCardId(isSelected ? null : card.id)}
                className={`group relative rounded-3xl p-7 cursor-pointer transition-all duration-500 border text-left flex flex-col justify-between min-h-[320px] ${
                  isSelected
                    ? 'bg-[#32070C] text-[#F8F5EF] border-[#C6A15B] shadow-2xl scale-[1.03] ring-1 ring-[#C6A15B]/40'
                    : 'bg-white/85 hover:bg-white text-[#171717] border-[#C6A15B]/25 hover:border-[#5A0F18]/50 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
                data-interactive="true"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCardId(isSelected ? null : card.id);
                  }
                }}
              >
                {/* Top Row: Icon + Romantic Category */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`p-3.5 rounded-2xl transition-all duration-300 shadow-xs ${
                        isSelected
                          ? 'bg-[#5A0F18] text-[#E1C98A]'
                          : 'bg-[#F8F5EF] text-[#5A0F18] group-hover:bg-[#5A0F18] group-hover:text-[#E1C98A]'
                      }`}
                    >
                      {getIcon(card.iconName)}
                    </div>

                    <span
                      className={`font-script text-lg ${
                        isSelected ? 'text-[#E1C98A]' : 'text-[#C6A15B]'
                      }`}
                    >
                      {card.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-serif text-2xl tracking-wide mb-3 ${
                      isSelected ? 'text-white' : 'text-[#171717] group-hover:text-[#5A0F18]'
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Reflection Text */}
                  <p
                    className={`text-sm sm:text-base font-serif italic leading-relaxed ${
                      isSelected ? 'text-[#F8F5EF]/95' : 'text-[#171717]/80'
                    }`}
                  >
                    “{card.reflection}”
                  </p>
                </div>

                {/* Bottom Extended Insight on Expand */}
                <div className="pt-6 mt-4 border-t border-current/10">
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs sm:text-sm font-serif italic text-[#F8F5EF]/90 leading-relaxed mb-4 pl-3 border-l-2 border-[#E1C98A]"
                      >
                        {card.extendedNote}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between text-xs font-mono tracking-wider">
                    <span className={isSelected ? 'text-[#E1C98A]' : 'text-[#5A0F18] font-medium'}>
                      {isSelected ? 'CLOSE LETTER' : 'READ MY NOTE'}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isSelected
                          ? 'bg-[#5A0F18] text-[#E1C98A] rotate-90'
                          : 'bg-[#F8F5EF] text-[#5A0F18] group-hover:bg-[#5A0F18] group-hover:text-[#F8F5EF]'
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
