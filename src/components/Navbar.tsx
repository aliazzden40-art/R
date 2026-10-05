import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Heart, ArrowUpRight } from 'lucide-react';
import { ambientSound } from '../utils/audio.ts';

interface NavbarProps {
  onOpenLetterModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLetterModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = ambientSound.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { label: 'Through My Eyes', href: '#the-girl-i-see' },
    { label: 'What I Adore', href: '#what-makes-you-you' },
    { label: 'My Belief', href: '#i-believe-in-you' },
    { label: 'Love Letters', href: '#open-when' },
    { label: 'Shared Path', href: '#programming-cybersecurity' },
    { label: 'Our Story', href: '#our-story-timeline' },
    { label: 'Our Future', href: '#your-future' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F8F5EF]/92 backdrop-blur-md border-b border-[#C6A15B]/25 py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Romantic Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2 group font-serif text-lg md:text-xl font-normal tracking-wider text-[#171717] hover:text-[#5A0F18] transition-colors whitespace-nowrap"
            data-interactive="true"
          >
            <span>RAYAN</span>
            <Heart className="w-3.5 h-3.5 text-[#5A0F18] fill-[#5A0F18] group-hover:scale-125 transition-transform" />
            <span className="font-script text-2xl text-[#C6A15B] font-light lowercase">ali</span>
          </a>

          {/* Zone 2: Clean Text Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-serif tracking-wider uppercase text-[#171717]/85">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#5A0F18] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#5A0F18] hover:after:w-full after:transition-all after:duration-300"
                data-interactive="true"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            {/* Ambient Romance Music Toggle */}
            <button
              onClick={toggleSound}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-serif transition-all duration-300 ${
                isPlayingAudio
                  ? 'border border-[#C6A15B] bg-[#5A0F18] text-[#E1C98A] shadow-[0_0_15px_rgba(198,161,91,0.35)]'
                  : 'border border-[#171717]/15 bg-white/70 text-[#171717]/75 hover:border-[#5A0F18]/40 hover:text-[#5A0F18]'
              }`}
              title={isPlayingAudio ? 'Mute romantic harmony' : 'Play romantic harmony'}
              aria-label="Toggle romantic harmony music"
              data-interactive="true"
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="hidden sm:inline text-xs tracking-wider">MUSIC ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-xs tracking-wider">PLAY MUSIC</span>
                </>
              )}
            </button>

            {/* Quick Open CTA */}
            <a
              href="#open-when"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-serif tracking-wider uppercase bg-[#5A0F18] text-[#F8F5EF] rounded-full hover:bg-[#32070C] transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(90,15,24,0.3)]"
              data-interactive="true"
            >
              <Heart className="w-3 h-3 fill-[#E1C98A] text-[#E1C98A]" />
              <span>Letters</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#171717] hover:bg-[#C6A15B]/15 transition-colors"
              aria-label="Toggle menu"
              data-interactive="true"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#F8F5EF]/98 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between transition-all duration-300">
          <div className="flex flex-col gap-6">
            <span className="font-script text-2xl text-[#C6A15B]">Chapters of My Heart</span>
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#171717] hover:text-[#5A0F18] flex items-center justify-between border-b border-[#C6A15B]/20 pb-2 transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="font-script text-xl text-[#C6A15B]">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#C6A15B]/25 flex items-center justify-between font-serif">
            <div className="text-xs text-[#5A0F18] font-mono">
              08 · 01 · 2026
            </div>
            <button
              onClick={toggleSound}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#5A0F18] font-medium"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{isPlayingAudio ? 'Music Playing' : 'Music Muted'}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
