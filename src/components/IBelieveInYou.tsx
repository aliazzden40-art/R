import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const IBelieveInYou: React.FC = () => {
  const statements = [
    {
      condition: 'On the days you feel behind...',
      affirmation: 'You are still moving.',
      subtext: 'Progress isn’t measured by how loud it is; it is quietly forged in every moment you choose to keep trying. And I am right beside you, cheering for you in every step.',
    },
    {
      condition: 'On the days you doubt yourself...',
      affirmation: 'You are still capable.',
      subtext: 'Your intellect is sharp, your soul is rare, and your determination is breathtaking. Never let a temporary roadblock shake what I know you are destined to achieve.',
    },
    {
      condition: 'On the days you think you\'re not enough...',
      affirmation: 'I hope you remember that you are.',
      subtext: 'You are more than enough, my love. You are everything I could ever dream of, walking toward a future that is waiting for your brilliant touch.',
    },
  ];

  return (
    <section
      id="i-believe-in-you"
      className="py-32 sm:py-44 px-6 sm:px-8 bg-gradient-to-b from-[#F8F5EF] via-[#FFFDF9] to-[#F8F5EF] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Curatorial Romantic Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#5A0F18] font-sans font-medium flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-[#5A0F18] fill-[#5A0F18]" />
              UNWAVERING DEVOTION
            </span>
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-[#171717] tracking-tight leading-none mb-3">
            I BELIEVE IN YOU.
          </h2>

          <div className="font-script text-3xl sm:text-4xl text-[#C6A15B]">
            In Every Storm & Every Season
          </div>

          <div className="w-20 h-[1.5px] bg-[#5A0F18] mx-auto mt-6" />
        </motion.div>

        {/* Large Typography Statements */}
        <div className="space-y-20 sm:space-y-28">
          {statements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-7 sm:pl-12 border-l-2 border-[#C6A15B]/40"
            >
              {/* Index marker */}
              <span className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-[#5A0F18] text-[#E1C98A] font-mono text-xs flex items-center justify-center font-medium shadow-md">
                0{idx + 1}
              </span>

              {/* The condition */}
              <p className="font-serif text-base sm:text-lg text-[#171717]/65 italic mb-2">
                “{item.condition}”
              </p>

              {/* The affirmation (dominant emotional typography) */}
              <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#5A0F18] tracking-tight leading-tight mb-4">
                {item.affirmation}
              </h3>

              {/* Subtext */}
              <p className="font-serif text-base sm:text-lg text-[#171717]/80 max-w-xl leading-relaxed">
                {item.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
