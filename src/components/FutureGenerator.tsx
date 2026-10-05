import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, Heart, Compass } from 'lucide-react';
import { FUTURE_POSSIBILITIES } from '../data/content.ts';
import { FuturePossibility } from '../types.ts';

export const FutureGenerator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPossibility, setCurrentPossibility] = useState<FuturePossibility>(FUTURE_POSSIBILITIES[0]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [customSynthesis, setCustomSynthesis] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState('Our Shared Future & Dreams');

  const handleNextPossibility = () => {
    setCustomSynthesis(null);
    const nextIndex = (currentIndex + 1) % FUTURE_POSSIBILITIES.length;
    setCurrentIndex(nextIndex);
    setCurrentPossibility(FUTURE_POSSIBILITIES[nextIndex]);
  };

  const handleDeepSynthesis = async () => {
    setIsSynthesizing(true);
    try {
      const res = await fetch('/api/inspire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: selectedTopic,
          context: 'An intimate, deeply romantic and loving encouragement from Ali to Rayan.',
        }),
      });
      const data = await res.json();
      if (data && data.message) {
        setCustomSynthesis(data.message);
      }
    } catch (err) {
      console.error('Synthesis error:', err);
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <section
      id="future-generator"
      className="py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-[#F8F5EF] via-[#FFFDF9] to-[#F8F5EF]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Curatorial Romantic Kicker */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5A0F18] font-sans font-medium flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-[#5A0F18] fill-[#5A0F18]" />
              VISIONS OF TOMORROW
            </span>
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight mb-2">
            FUTURE POSSIBILITIES
          </h2>

          <div className="font-script text-3xl sm:text-4xl text-[#C6A15B] mb-3">
            What Awaits You, My Love
          </div>

          <p className="font-serif italic text-sm sm:text-base text-[#171717]/70">
            Tap the button to discover another unshakeable truth about where our journey is going.
          </p>
        </div>

        {/* Display Card */}
        <div className="relative rounded-3xl bg-white p-8 sm:p-14 border border-[#C6A15B]/30 shadow-2xl overflow-hidden min-h-[280px] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#C6A15B]/15 pb-4 mb-6">
            <span className="font-script text-2xl text-[#5A0F18] flex items-center gap-2">
              <Heart className="w-4 h-4 fill-[#5A0F18]" />
              {customSynthesis ? 'Ali\'s Heartfelt Note' : currentPossibility.domain}
            </span>
            <span className="font-mono text-xs text-[#C6A15B]">
              0{currentIndex + 1} / 0{FUTURE_POSSIBILITIES.length}
            </span>
          </div>

          <div className="my-auto py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={customSynthesis || currentPossibility.text}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <h3 className="font-serif text-2xl sm:text-4xl text-[#171717] font-normal leading-relaxed">
                  “{customSynthesis || currentPossibility.text}”
                </h3>
                {!customSynthesis && (
                  <p className="font-serif italic text-sm sm:text-base text-[#171717]/70 max-w-xl">
                    {currentPossibility.insight}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Row */}
          <div className="pt-8 border-t border-[#C6A15B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <button
              onClick={handleNextPossibility}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#5A0F18] text-[#F8F5EF] text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:bg-[#32070C] hover:shadow-[0_4px_16px_rgba(90,15,24,0.3)] hover:scale-105 active:scale-95"
              data-interactive="true"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#E1C98A]" />
              <span>SHOW ME A POSSIBILITY</span>
            </button>

            {/* Deep Thought Generator Option */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="text-xs bg-[#F8F5EF] border border-[#C6A15B]/40 rounded-full px-4 py-2.5 text-[#171717] focus:outline-none focus:border-[#5A0F18] font-serif"
                data-interactive="true"
              >
                <option value="Our Shared Future & Dreams">Our Life & Dreams Together</option>
                <option value="Her Incredible Future in Tech & Cybersecurity">Her Brilliant Mind in Cybersecurity</option>
                <option value="Comforting Her When She Feels Tired">A Loving Embrace for Hard Days</option>
                <option value="Why I Love Her and Chose Her on Jan 8">Why I Still Choose Her Every Day</option>
              </select>

              <button
                onClick={handleDeepSynthesis}
                disabled={isSynthesizing}
                className="px-5 py-2.5 rounded-full bg-[#5A0F18]/10 border border-[#5A0F18]/40 text-xs font-serif text-[#5A0F18] hover:bg-[#5A0F18] hover:text-white transition-all whitespace-nowrap flex items-center gap-1.5"
                title="Ask Ali's Heart"
                data-interactive="true"
              >
                {isSynthesizing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Writing...</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-3.5 h-3.5 text-[#5A0F18] fill-[#5A0F18]" />
                    <span>Ali's Note</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
