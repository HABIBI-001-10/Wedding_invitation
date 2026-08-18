import React, { useEffect, useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { ChevronDown, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const coupleElement = document.getElementById('couple');
    if (coupleElement) {
      coupleElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#FAF6F2] pt-20 pb-16"
    >
      {/* Background Image Layer with Parallax and Gentle Sway */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out will-change-transform animate-branch"
        style={{
          backgroundImage: `url('/images/hero_tree.jpg')`,
          transform: `translateY(${scrollY * 0.25}px) scale(1.05)`,
        }}
      />

      {/* Atmospheric Soft Light & Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F2]/40 via-transparent to-[#FAF6F2] pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#FAF6F2]/20 to-[#FAF6F2]/70 pointer-events-none" />

      {/* Sunbeam Light Glow Accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FFEED4]/30 blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Center Cinematic Invitation Card Content */}
      <div 
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center transition-all duration-300"
        style={{
          transform: `translateY(${-scrollY * 0.15}px)`,
          opacity: Math.max(0, 1 - scrollY / 700),
        }}
      >
        {/* Top Gold Crest Ornament */}
        <div className="inline-flex items-center justify-center space-x-3 mb-6">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="font-display-luxury text-xs sm:text-sm tracking-[0.35em] text-[#B38E46] uppercase font-semibold">
            The Wedding Celebration
          </span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        {/* Invitation Line */}
        <p className="font-serif-luxury text-base sm:text-xl italic text-[#5C4F4E] tracking-wide mb-6">
          {weddingConfig.couple.invitationLine}
        </p>

        {/* Bride & Groom Grand Typography */}
        <div className="my-6 sm:my-8">
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#2C2222] tracking-tight leading-none drop-shadow-sm">
            {weddingConfig.couple.bride.firstName}
          </h1>

          <div className="my-3 sm:my-4 flex items-center justify-center space-x-6">
            <span className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="font-script-luxury text-4xl sm:text-5xl md:text-6xl text-[#C5A059] -rotate-6">
              &
            </span>
            <span className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#2C2222] tracking-tight leading-none drop-shadow-sm">
            {weddingConfig.couple.groom.firstName}
          </h1>
        </div>

        {/* Subtitle / Romantic Tagline */}
        <p className="font-serif-luxury text-base sm:text-2xl italic text-[#4A3D3C] max-w-xl mx-auto leading-relaxed mb-8">
          "{weddingConfig.couple.romanticQuote}"
        </p>

        {/* Date & Location Pill Card */}
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 rounded-2xl blush-glass px-6 sm:px-8 py-3.5 shadow-lg border border-[#E6CA85]/40 mb-10">
          <div className="flex items-center space-x-2 text-[#362D2D]">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span className="font-display-luxury text-xs sm:text-sm tracking-widest font-semibold uppercase">
              {weddingConfig.date.formattedDate}
            </span>
          </div>
          <span className="hidden sm:inline text-[#C5A059]">•</span>
          <span className="font-display-luxury text-xs sm:text-sm tracking-widest text-[#5C4D4D] uppercase font-medium">
            {weddingConfig.venue.name}
          </span>
        </div>

        {/* Scroll Indicator */}
        <div>
          <button
            onClick={scrollToNext}
            className="group inline-flex flex-col items-center justify-center text-[#736765] hover:text-[#362D2D] transition-colors cursor-pointer"
            aria-label="Scroll to explore our story"
          >
            <span className="font-display-luxury text-[10px] tracking-[0.3em] uppercase mb-2">
              Explore Our Story
            </span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#C5A059]/40 bg-white/70 shadow-sm group-hover:scale-110 group-hover:border-[#C5A059] transition-all animate-bounce">
              <ChevronDown className="w-4 h-4 text-[#C5A059]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
