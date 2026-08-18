import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Sparkles, ArrowUp } from 'lucide-react';
import { weddingAudio } from '../audio/soundEffects';
import { assetUrl } from '../utils/assetUrl';

interface FinalSectionProps {
  onTriggerShower: () => void;
}

export const FinalSection: React.FC<FinalSectionProps> = ({ onTriggerShower }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowerClick = () => {
    weddingAudio.playHeartSound();
    onTriggerShower();
  };

  return (
    <footer
      id="closing"
      className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#1A1414] text-white py-24 px-4 text-center"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(30, 22, 23, 0.7) 0%, rgba(15, 10, 11, 0.95) 85%), url('${assetUrl('/images/hero_tree.jpg')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Dimmer and Light Rays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#140E0F] via-transparent to-[#FAF6F2]/30 pointer-events-none" />

      {/* Floating Center Card */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        
        {/* Blossom Icon */}
        <div className="w-12 h-12 mx-auto rounded-full bg-white/10 backdrop-blur-md border border-[#E6CA85]/40 flex items-center justify-center text-xl animate-float">
          🌸
        </div>

        {/* Closing Tagline */}
        <p className="font-display-luxury text-xs sm:text-sm tracking-[0.35em] text-[#E6CA85] uppercase font-semibold">
          With Love & Gratitude
        </p>

        {/* Bride & Groom Full Signature Names */}
        <div className="my-4">
          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white drop-shadow-lg">
            {weddingConfig.couple.bride.firstName}
          </h2>
          <div className="my-2 flex items-center justify-center space-x-4">
            <span className="h-[1px] w-12 bg-[#C5A059]/60" />
            <span className="font-script-luxury text-4xl sm:text-5xl text-[#E6CA85]">
              &
            </span>
            <span className="h-[1px] w-12 bg-[#C5A059]/60" />
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white drop-shadow-lg">
            {weddingConfig.couple.groom.firstName}
          </h2>
        </div>

        {/* Emotional Line */}
        <p className="font-serif-luxury text-xl sm:text-2xl italic text-[#E8C5C8] max-w-lg mx-auto leading-relaxed">
          "We can't wait to celebrate this sacred moment with you."
        </p>

        {/* Trigger Blossom Shower Button */}
        <div className="pt-2">
          <button
            onClick={handleShowerClick}
            className="group inline-flex items-center space-x-2 rounded-full px-8 py-3.5 bg-white/15 backdrop-blur-md border border-[#E6CA85]/60 hover:bg-[#C5A059] text-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#E6CA85] group-hover:text-white" />
            <span className="font-display-luxury text-xs tracking-widest uppercase font-semibold">
              Shower With Blossoms 🌸
            </span>
          </button>
        </div>

        {/* Final Sign-off & Back to Top */}
        <div className="pt-12 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A89C9A] gap-4">
          <p className="font-display-luxury tracking-widest uppercase text-[10px]">
            Forever Begins Here • {weddingConfig.date.year}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span className="font-display-luxury uppercase text-[10px] tracking-wider">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
