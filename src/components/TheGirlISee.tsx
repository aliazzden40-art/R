import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export const TheGirlISee: React.FC = () => {
  const sentences = [
    { text: 'I see your kindness.', detail: 'A gentle warmth that softens every room you enter, making my world so much brighter.' },
    { text: 'I see your strength.', detail: 'A quiet, unyielding courage that never asks for praise, yet moves mountains.' },
    { text: 'I see the way you care.', detail: 'The tenderness in your eyes and how deeply you love without holding anything back.' },
    { text: 'I see the way you keep going.', detail: 'Even when the code won\'t run or the semester feels heavy, you never surrender.' },
    { text: 'I see the person you\'re becoming.', detail: 'A woman of breathtaking brilliance, grace, and an intellect I admire every single day.' },
  ];

  return (
    <section
      id="the-girl-i-see"
      className="relative py-28 sm:py-36 px-6 sm:px-8 bg-gradient-to-b from-[#F8F5EF] via-[#FFFDF9] to-[#F8F5EF] overflow-hidden"
    >
      {/* Soft romantic light blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#5A0F18]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Curatorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5A0F18] font-sans font-medium flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-[#5A0F18] fill-[#5A0F18]" />
              THROUGH MY EYES
            </span>
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#171717] tracking-tight mb-4">
            THE GIRL I SEE
          </h2>

          <div className="font-script text-3xl sm:text-4xl text-[#C6A15B] mb-4">
            My Beautiful Rayan
          </div>

          <p className="max-w-2xl mx-auto font-serif text-xl sm:text-2xl text-[#171717]/85 italic leading-relaxed">
            “Rayan, I hope you know that I see more in you than you sometimes see in yourself.”
          </p>
        </motion.div>

        {/* Text Reveal Sequence */}
        <div className="space-y-6 sm:space-y-7">
          {sentences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#C6A15B]/25 hover:border-[#5A0F18]/50 hover:bg-white transition-all duration-400 shadow-sm hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#F8F5EF] group-hover:bg-[#5A0F18] group-hover:text-[#E1C98A] text-[#5A0F18] flex items-center justify-center font-mono text-xs transition-colors duration-300">
                    0{index + 1}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] group-hover:text-[#5A0F18] transition-colors duration-300">
                    {item.text}
                  </h3>
                </div>
                <p className="text-sm font-serif italic text-[#171717]/70 group-hover:text-[#171717]/90 transition-colors duration-300 sm:max-w-sm sm:text-right pl-11 sm:pl-0 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Romantic Burgundy Indicator Line on Hover */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-gradient-to-b from-[#C6A15B] to-[#5A0F18] group-hover:h-3/4 transition-all duration-400 rounded-r" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
