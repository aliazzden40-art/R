import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Calendar, Clock } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/content.ts';

export const OurStoryTimeline: React.FC = () => {
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const updateElapsed = () => {
      const anniversary = new Date('2026-01-08T00:00:00Z').getTime();
      const now = Date.now();
      const diff = Math.max(0, now - anniversary);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setElapsed({ days, hours, minutes });
    };

    updateElapsed();
    const interval = setInterval(updateElapsed, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="our-story-timeline"
      className="py-28 sm:py-36 px-6 sm:px-8 bg-gradient-to-b from-[#F8F5EF] via-white to-[#F8F5EF] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Curatorial Romantic Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5A0F18] font-sans font-medium flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-[#5A0F18] fill-[#5A0F18]" />
              HOW OUR STORY BEGAN
            </span>
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#171717] tracking-tight mb-3">
            OUR STORY TIMELINE
          </h2>

          <div className="font-script text-3xl sm:text-4xl text-[#C6A15B] mb-4">
            Written In The Stars
          </div>

          <p className="font-serif text-base sm:text-lg text-[#171717]/75 italic">
            Two souls born ten days apart in December, walking paths destined to meet and become one on January 8th, 2026.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative">
          {/* Vertical Romantic Gold-Rose Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#C6A15B]/30 via-[#5A0F18] to-[#C6A15B]/40 -translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {TIMELINE_EVENTS.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={event.date}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div
                    className={`w-full md:w-[45%] pl-14 md:pl-0 ${
                      isEven ? 'md:pl-10 md:text-left' : 'md:pr-10 md:text-right'
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-8 rounded-3xl transition-all duration-400 border ${
                        event.isPrimary
                          ? 'bg-[#32070C] text-[#F8F5EF] border-[#C6A15B] shadow-2xl ring-2 ring-[#C6A15B]/60 scale-[1.02]'
                          : 'bg-white/90 hover:bg-white text-[#171717] border-[#C6A15B]/25 shadow-sm'
                      }`}
                    >
                      {/* Event Tag */}
                      <span
                        className={`inline-block font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
                          event.isPrimary
                            ? 'bg-[#5A0F18] text-[#E1C98A] border border-[#C6A15B]/40'
                            : 'bg-[#F8F5EF] text-[#5A0F18]'
                        }`}
                      >
                        {event.tag}
                      </span>

                      {/* Display Date */}
                      <div
                        className={`font-mono text-xs sm:text-sm tracking-widest font-semibold mb-2 ${
                          event.isPrimary ? 'text-[#E1C98A]' : 'text-[#C6A15B]'
                        }`}
                      >
                        {event.displayDate}
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-serif text-2xl sm:text-3xl mb-1 font-normal ${
                          event.isPrimary ? 'text-white' : 'text-[#171717]'
                        }`}
                      >
                        {event.title}
                      </h3>

                      {/* Subtitle */}
                      <p
                        className={`font-script text-2xl mb-3 ${
                          event.isPrimary ? 'text-[#E1C98A]' : 'text-[#5A0F18]'
                        }`}
                      >
                        {event.subtitle}
                      </p>

                      {/* Description */}
                      <p
                        className={`font-serif text-sm sm:text-base leading-relaxed ${
                          event.isPrimary ? 'text-[#F8F5EF]/90 italic' : 'text-[#171717]/75'
                        }`}
                      >
                        {event.description}
                      </p>

                      {/* Primary highlight milestone details */}
                      {event.isPrimary && (
                        <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-[#E1C98A]">
                          <span className="flex items-center gap-1.5 font-sans font-medium">
                            <Heart className="w-3.5 h-3.5 fill-[#E1C98A]" />
                            <span>OUR GREATEST MILESTONE</span>
                          </span>
                          <Sparkles className="w-4 h-4 text-[#E1C98A]" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Node Marker */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        event.isPrimary
                          ? 'bg-[#5A0F18] border-2 border-[#E1C98A] shadow-[0_0_20px_rgba(198,161,91,0.8)] scale-110'
                          : 'bg-[#F8F5EF] border border-[#C6A15B]'
                      }`}
                    >
                      {event.isPrimary ? (
                        <Heart className="w-5 h-5 text-[#E1C98A] fill-[#E1C98A] animate-pulse" />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-[#C6A15B]" />
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Live Days of Loving You Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-tr from-[#5A0F18] to-[#32070C] text-white border border-[#C6A15B]/40 text-center max-w-xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#C6A15B]/10 rounded-full blur-xl pointer-events-none" />

          <div className="font-script text-3xl sm:text-4xl text-[#E1C98A] mb-2">
            Every Single Day With You
          </div>

          <span className="font-mono text-xs uppercase tracking-widest text-[#F8F5EF]/80 block mb-4">
            SINCE JANUARY 8, 2026
          </span>

          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto py-3 border-y border-white/10 mb-4">
            <div>
              <div className="font-serif text-3xl sm:text-4xl text-[#E1C98A]">
                {elapsed.days}
              </div>
              <div className="font-mono text-[10px] uppercase text-white/60 tracking-wider">
                DAYS
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl text-[#E1C98A]">
                {elapsed.hours}
              </div>
              <div className="font-mono text-[10px] uppercase text-white/60 tracking-wider">
                HOURS
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl text-[#E1C98A]">
                {elapsed.minutes}
              </div>
              <div className="font-mono text-[10px] uppercase text-white/60 tracking-wider">
                MINUTES
              </div>
            </div>
          </div>

          <p className="font-serif italic text-sm text-[#F8F5EF]/90">
            “And I would choose you all over again in every lifetime.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};
