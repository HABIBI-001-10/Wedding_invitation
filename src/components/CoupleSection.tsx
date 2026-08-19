import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Heart } from 'lucide-react';
import { weddingAudio } from '../audio/soundEffects';
import { assetUrl } from '../utils/assetUrl';

export const CoupleSection: React.FC = () => {
  const handleHeartClick = () => {
    weddingAudio.playHeartSound();
  };

  return (
    <section
      id="couple"
      className="relative py-24 sm:py-32 bg-[#FAF6F2] overflow-hidden"
    >
      {/* Background Soft Floral Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#F5EDE0] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#F7EAE8] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center space-x-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-display-luxury text-xs tracking-[0.3em] uppercase text-[#9A7B38] font-semibold">
              The Bride & The Groom
            </span>
            <span className="h-[1px] w-8 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#2C2222] tracking-tight mb-4">
            Destined by Serendipity
          </h2>
          
          <p className="font-serif-luxury text-lg sm:text-xl italic text-[#736765]">
            "{weddingConfig.couple.loveQuoteFull}"
          </p>
          <span className="block mt-2 font-display-luxury text-xs tracking-widest text-[#B38E46] uppercase">
            — {weddingConfig.couple.quoteAuthor}
          </span>
        </div>

        {/* Centerpiece Couple Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Bride Profile Card */}
          <div className="lg:col-span-4 text-center lg:text-right space-y-4 order-2 lg:order-1">
            <div className="inline-block p-1 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#E8CAC8] mb-2">
              <span className="font-display-luxury text-xs tracking-widest uppercase px-3 py-1 bg-[#FAF6F2] rounded-full text-[#736765] block">
                The Bride
              </span>
            </div>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#362D2D] font-normal">
              {weddingConfig.couple.bride.fullName}
            </h3>
            <p className="font-serif-luxury text-sm italic text-[#8F7E7C]">
              {weddingConfig.couple.bride.parents}
            </p>
            <p className="font-sans text-sm text-[#615452] leading-relaxed max-w-sm ml-auto mr-auto lg:mr-0">
              {weddingConfig.couple.bride.bio}
            </p>
          </div>

          {/* Center Fine Art Framed Photograph */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              
              {/* Outer Decorative Gold Filigree Border */}
              <div className="absolute -inset-3 rounded-[2.5rem] border border-[#C5A059]/40 transition-transform duration-700 group-hover:scale-105 group-hover:border-[#C5A059]" />
              
              {/* Secondary Soft Glow */}
              <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-b from-[#E8CAC8]/40 via-transparent to-[#C5A059]/30 blur-sm opacity-60" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[#F5EDE0] shadow-2xl aspect-[3/4] border-2 border-[#FAF6F2]">
                <img
                  src={assetUrl("/images/first_date.png")}
                  alt="Evelyn and Alexander"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Bottom Floating Interactive Monogram Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full blush-glass px-4 py-1.5 shadow-md flex items-center space-x-2 border border-[#C5A059]/40">
                  <button
                    onClick={handleHeartClick}
                    className="cursor-pointer text-[#D99B9B] hover:text-red-500 hover:scale-125 transition-transform"
                    title="Send a heart to the couple"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                  <span className="font-display-luxury text-[11px] tracking-widest text-[#362D2D] font-semibold uppercase">
                    {weddingConfig.couple.monogram}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Groom Profile Card */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-4 order-3">
            <div className="inline-block p-1 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#E8CAC8] mb-2">
              <span className="font-display-luxury text-xs tracking-widest uppercase px-3 py-1 bg-[#FAF6F2] rounded-full text-[#736765] block">
                The Groom
              </span>
            </div>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#362D2D] font-normal">
              {weddingConfig.couple.groom.fullName}
            </h3>
            <p className="font-serif-luxury text-sm italic text-[#8F7E7C]">
              {weddingConfig.couple.groom.parents}
            </p>
            <p className="font-sans text-sm text-[#615452] leading-relaxed max-w-sm mr-auto ml-auto lg:ml-0">
              {weddingConfig.couple.groom.bio}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
