import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RotateCcw, Heart } from 'lucide-react';

export const ALittleReminder: React.FC = () => {
  const steps = [
    { lead: 'Rayan...', text: 'Look at me through these words, my darling.' },
    { lead: 'You don\'t have to be perfect.', text: 'I love you in all your humanity, through every tired evening and every imperfect moment.' },
    { lead: 'You don\'t have to have everything figured out.', text: 'The entire roadmap does not need to be clear right now. You only have to take the next gentle step.' },
    { lead: 'You just have to keep going.', text: 'Step by step, day by day. And whenever your steps feel heavy, lean on me.' },
    { lead: 'And I hope you never forget...', text: 'Through every doubt that ever crosses your mind,' },
    { lead: 'You are worth believing in.', text: 'With all my heart, with all my soul, forever and always.' },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <section
      id="a-little-reminder"
      className="py-32 sm:py-44 px-6 sm:px-8 bg-gradient-to-b from-[#F8F5EF] via-[#FFFDF9] to-[#F8F5EF] relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Curatorial Romantic Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5A0F18] font-sans font-medium flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-[#5A0F18] fill-[#5A0F18]" />
              MY INTIMATE PROMISE
            </span>
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#171717] font-normal">
            A LITTLE REMINDER
          </h2>

          <div className="font-script text-3xl sm:text-4xl text-[#C6A15B] mt-2">
            Just For You
          </div>
        </div>

        {/* Step-by-Step Romantic Text Reveal Chamber */}
        <div className="min-h-[240px] sm:min-h-[280px] flex flex-col items-center justify-center p-8 sm:p-14 rounded-3xl bg-white/85 border border-[#C6A15B]/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-4 right-6 text-[#5A0F18]/15">
            <Heart className="w-16 h-16 fill-[#5A0F18]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 relative z-10"
            >
              <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#5A0F18] font-normal tracking-tight">
                {steps[currentStep].lead}
              </h3>
              <p className="font-serif text-base sm:text-xl text-[#171717]/80 italic max-w-lg mx-auto leading-relaxed">
                “{steps[currentStep].text}”
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {currentStep < steps.length - 1 ? (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5A0F18] text-[#F8F5EF] text-xs uppercase tracking-widest font-medium hover:bg-[#32070C] transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
              data-interactive="true"
            >
              <span>Continue Reading</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E1C98A]" />
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#C6A15B] text-[#5A0F18] text-xs uppercase tracking-widest font-medium hover:bg-[#C6A15B]/15 transition-colors shadow-sm"
              data-interactive="true"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Read Again From The Start</span>
            </button>
          )}
        </div>

        {/* Step Progress Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === currentStep
                  ? 'w-10 bg-[#5A0F18]'
                  : idx < currentStep
                  ? 'w-3.5 bg-[#C6A15B]'
                  : 'w-3.5 bg-black/10'
              }`}
              aria-label={`Jump to reminder part ${idx + 1}`}
              data-interactive="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
