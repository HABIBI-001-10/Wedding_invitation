import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { weddingAudio } from '../audio/soundEffects';
import { Sparkles, Heart } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

interface OpeningEnvelopeProps {
  onOpen: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpen }) => {
  const [isUnsealing, setIsUnsealing] = useState(false);
  const [isOpeningFlap, setIsOpeningFlap] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleOpenInvitation = () => {
    if (isUnsealing || isOpeningFlap) return;

    // Trigger audio sound effects
    weddingAudio.playSealBreak();
    weddingAudio.startMusic(weddingConfig.audio.customAudioUrl);

    setIsUnsealing(true);

    setTimeout(() => {
      setIsOpeningFlap(true);
    }, 600);

    setTimeout(() => {
      setIsFadingOut(true);
    }, 1400);

    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1A1414]/90 px-4 transition-opacity duration-1000 ${
        isFadingOut ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(232, 197, 200, 0.18) 0%, rgba(20, 15, 16, 0.95) 75%), url('${assetUrl('/images/hero_tree.jpg')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Soft Ambient Light Ray Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

      {/* Main Luxury Envelope Container */}
      <div
        className={`relative z-10 mx-auto max-w-lg w-full transform transition-all duration-1000 ease-out ${
          isOpeningFlap ? 'scale-105 opacity-90 blur-[1px]' : 'scale-100 opacity-100'
        }`}
      >
        {/* Outer Glow Halo */}
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#C5A059]/30 via-[#E8C5C8]/40 to-[#C5A059]/30 blur-xl opacity-75 animate-pulse-glow" />

        {/* Deckled Edge Paper Envelope Body */}
        <div className="relative overflow-hidden rounded-xl bg-[#FAF6F2] p-8 sm:p-12 text-center shadow-2xl border border-[#E6CA85]/40 paper-deckled">
          
          {/* Subtle floral watermark background */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#3B2E2E 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }}
          />

          {/* Top Foil Botanical Wreath Crest */}
          <div className="mx-auto mb-6 flex items-center justify-center space-x-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="font-display-luxury text-xs tracking-[0.3em] text-[#C5A059] uppercase font-semibold">
              Wedding Invitation
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          {/* Invitation Intro Line */}
          <p className="font-serif-luxury text-sm sm:text-base italic text-[#736765] tracking-wide mb-3">
            {weddingConfig.couple.invitationLine}
          </p>

          {/* Couple Names */}
          <div className="my-6">
            <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#362D2D]">
              {weddingConfig.couple.bride.firstName}
            </h1>
            <div className="my-2 flex items-center justify-center space-x-4">
              <span className="h-[1px] w-8 bg-[#E8CAC8]" />
              <span className="font-script-luxury text-3xl sm:text-4xl text-[#C5A059]">
                &
              </span>
              <span className="h-[1px] w-8 bg-[#E8CAC8]" />
            </div>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#362D2D]">
              {weddingConfig.couple.groom.firstName}
            </h1>
          </div>

          {/* Action request line */}
          <p className="font-serif-luxury text-sm sm:text-base italic text-[#736765] max-w-xs mx-auto leading-relaxed mb-6">
            {weddingConfig.couple.actionLine}
          </p>

          {/* Wedding Date Pill */}
          <div className="inline-flex items-center justify-center space-x-2 rounded-full bg-[#F5EDE0]/80 px-5 py-2 border border-[#C5A059]/30 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="font-display-luxury text-xs tracking-widest text-[#5C4D4D] font-medium uppercase">
              {weddingConfig.date.formattedDate}
            </span>
          </div>

          {/* Wax Seal Action Button */}
          <div className="relative pt-2">
            <button
              onClick={handleOpenInvitation}
              disabled={isUnsealing}
              className="group relative mx-auto flex items-center justify-center space-x-3 rounded-full px-8 py-3.5 text-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 active:scale-95 shimmer-button cursor-pointer"
              aria-label="Open wedding invitation"
            >
              {/* Wax Seal Icon / Heart */}
              <div className={`relative flex items-center justify-center w-7 h-7 rounded-full bg-red-900/40 border border-amber-200/50 transition-transform duration-700 ${isUnsealing ? 'scale-150 rotate-45' : 'group-hover:rotate-12'}`}>
                <Heart className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
              </div>

              <span className="font-display-luxury text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#2C1E1E]">
                {isUnsealing ? 'Opening Sanctuary...' : 'Open Invitation'}
              </span>
            </button>

            <p className="mt-4 font-sans text-[11px] text-[#9A8D8B] tracking-wider uppercase">
              Click to unveil the celebration & music
            </p>
          </div>
        </div>

        {/* Floating Blossom Accents */}
        <div className="absolute -top-4 -left-4 w-12 h-12 text-2xl animate-float opacity-80 pointer-events-none">
          🌸
        </div>
        <div className="absolute -bottom-3 -right-3 w-12 h-12 text-2xl animate-float opacity-80 pointer-events-none" style={{ animationDelay: '2s' }}>
          🌸
        </div>
      </div>
    </div>
  );
};
