import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Check, Shirt, UserCheck } from 'lucide-react';

export const DressCodeSection: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopyHex = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(name);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section
      id="dress-code"
      className="relative py-24 sm:py-32 bg-[#FAF6F2] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-display-luxury text-xs tracking-[0.3em] uppercase text-[#9A7B38] font-semibold">
              Attire & Aesthetic
            </span>
            <span className="h-[1px] w-8 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#2C2222] tracking-tight mb-4">
            {weddingConfig.dressCode.title}
          </h2>
          
          <p className="font-serif-luxury text-lg italic text-[#736765]">
            {weddingConfig.dressCode.subtitle}
          </p>
        </div>

        {/* Dress Code Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Gentlemen Card */}
          <div className="rounded-3xl bg-white/90 p-8 shadow-xl border border-[#E8CAC8]/60 space-y-4 paper-deckled">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#F5EDE0] flex items-center justify-center text-[#9A7B38]">
                <Shirt className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#2C2222] font-normal">
                For Gentlemen
              </h3>
            </div>
            <p className="font-sans text-sm text-[#615452] leading-relaxed">
              {weddingConfig.dressCode.gentlemen}
            </p>
          </div>

          {/* Ladies Card */}
          <div className="rounded-3xl bg-white/90 p-8 shadow-xl border border-[#E8CAC8]/60 space-y-4 paper-deckled">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#F5EDE0] flex items-center justify-center text-[#9A7B38]">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#2C2222] font-normal">
                For Ladies
              </h3>
            </div>
            <p className="font-sans text-sm text-[#615452] leading-relaxed">
              {weddingConfig.dressCode.ladies}
            </p>
          </div>

        </div>

        {/* Color Palette Inspiration Swatches */}
        <div className="rounded-3xl bg-[#FCFAF7] p-8 sm:p-12 shadow-xl border border-[#E6CA85]/40 text-center">
          <p className="font-display-luxury text-xs tracking-[0.25em] uppercase text-[#736765] font-semibold mb-2">
            Curated Color Palette Inspiration
          </p>
          <p className="font-serif-luxury text-sm italic text-[#8F7E7C] mb-8">
            Click any swatch to copy hex code for styling
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {weddingConfig.dressCode.colorPalette.map((color) => (
              <button
                key={color.name}
                onClick={() => handleCopyHex(color.hex, color.name)}
                className="group relative flex flex-col items-center p-4 rounded-2xl bg-white shadow-sm border border-[#E8CAC8]/50 hover:border-[#C5A059] hover:shadow-md transition-all cursor-pointer"
              >
                {/* Color Dot */}
                <div
                  className="w-14 h-14 rounded-full mb-3 shadow-inner border border-black/10 transition-transform group-hover:scale-110 flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                >
                  {copiedColor === color.name && (
                    <Check className="w-5 h-5 text-white drop-shadow-md" />
                  )}
                </div>

                <span className="font-serif-luxury text-base text-[#362D2D] font-medium">
                  {color.name}
                </span>
                
                <span className="font-sans text-[11px] text-[#9A8D8B] tracking-wider uppercase mt-0.5">
                  {copiedColor === color.name ? 'Copied!' : color.hex}
                </span>

                <span className="font-serif-luxury text-[11px] italic text-[#8F7E7C] mt-1 text-center">
                  {color.description}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-8 font-sans text-xs text-[#9A8D8B] italic">
            * {weddingConfig.dressCode.notes}
          </p>
        </div>

      </div>
    </section>
  );
};
