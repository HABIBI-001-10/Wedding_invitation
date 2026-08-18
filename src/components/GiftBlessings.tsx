import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Gift, Copy, Check } from 'lucide-react';
import { weddingAudio } from '../audio/soundEffects';

export const GiftBlessings: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    weddingAudio.playHeartSound();
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section
      id="registry"
      className="relative py-20 sm:py-28 bg-[#FAF6F2] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Ornament */}
        <div className="inline-flex items-center space-x-2 mb-3">
          <span className="h-[1px] w-8 bg-[#C5A059]" />
          <span className="font-display-luxury text-xs tracking-[0.3em] uppercase text-[#9A7B38] font-semibold">
            Gifts & Blessings
          </span>
          <span className="h-[1px] w-8 bg-[#C5A059]" />
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#2C2222] tracking-tight mb-4">
          Your Presence is Our Gift
        </h2>

        <p className="font-serif-luxury text-lg italic text-[#736765] max-w-xl mx-auto mb-2">
          {weddingConfig.registry.message}
        </p>

        <p className="font-sans text-xs text-[#8F7E7C] max-w-lg mx-auto mb-10 leading-relaxed">
          {weddingConfig.registry.submessage}
        </p>

        {/* Registry & Fund Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {weddingConfig.registry.funds.map((fund, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/95 p-6 shadow-md border border-[#E8CAC8]/70 text-left space-y-3 paper-deckled transition-all hover:-translate-y-1 hover:border-[#C5A059]"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F5EDE0] flex items-center justify-center text-[#9A7B38]">
                  <Gift className="w-4 h-4" />
                </div>
                <h3 className="font-serif-luxury text-xl text-[#362D2D] font-normal">
                  {fund.title}
                </h3>
              </div>

              <p className="font-serif-luxury text-xs italic text-[#8F7E7C]">
                {fund.description}
              </p>

              <div className="pt-2 border-t border-[#E8CAC8]/30 space-y-1">
                <p className="font-display-luxury text-[10px] tracking-wider uppercase text-[#9A8D8B]">
                  Account: {fund.accountName}
                </p>
                {fund.iban && (
                  <div className="flex items-center justify-between text-xs font-mono bg-[#FAF6F2] p-2 rounded-lg border border-[#E8CAC8]">
                    <span className="truncate mr-2 text-[#362D2D]">{fund.iban}</span>
                    <button
                      onClick={() => handleCopy(fund.iban!, idx)}
                      className="text-[#C5A059] hover:text-[#9A7B38] shrink-0 cursor-pointer"
                      title="Copy IBAN"
                    >
                      {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                )}
                {fund.zelleOrUpi && (
                  <div className="flex items-center justify-between text-xs font-mono bg-[#FAF6F2] p-2 rounded-lg border border-[#E8CAC8]">
                    <span className="truncate mr-2 text-[#362D2D]">{fund.zelleOrUpi}</span>
                    <button
                      onClick={() => handleCopy(fund.zelleOrUpi!, idx)}
                      className="text-[#C5A059] hover:text-[#9A7B38] shrink-0 cursor-pointer"
                      title="Copy Digital ID"
                    >
                      {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
