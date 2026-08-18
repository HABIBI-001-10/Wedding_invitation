import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Sparkles } from 'lucide-react';

export const StoryTimeline: React.FC = () => {
  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 bg-[#FCFAF7] overflow-hidden"
    >
      {/* Background Soft Gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#F7EAE8] blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#F5EDE0] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-display-luxury text-xs tracking-[0.3em] uppercase text-[#9A7B38] font-semibold">
              The Journey Of Us
            </span>
            <span className="h-[1px] w-8 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#2C2222] tracking-tight mb-4">
            Our Love Story
          </h2>
          
          <p className="font-serif-luxury text-lg italic text-[#736765]">
            Every great romance is written with quiet glances, shared dreams, and serendipity.
          </p>
        </div>

        {/* Story Chapters List */}
        <div className="space-y-20 sm:space-y-28">
          {weddingConfig.story.map((chapter, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={chapter.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Photo Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group max-w-md mx-auto">
                    {/* Gold Leaf Outline Border */}
                    <div className="absolute -inset-3 rounded-3xl border border-[#C5A059]/40 group-hover:border-[#C5A059] transition-all duration-700 group-hover:scale-105" />
                    
                    {/* Shadow Ambient Glow */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#E8CAC8]/40 to-[#F5EDE0]/40 blur-md opacity-70" />

                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-[#FAF6F2] shadow-2xl aspect-[4/3] border-2 border-white">
                      <img
                        src={chapter.image}
                        alt={chapter.title}
                        className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-30" />
                    </div>
                  </div>
                </div>

                {/* Narrative Side */}
                <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                  
                  {/* Milestone Year Badge */}
                  <div className="inline-flex items-center space-x-2 rounded-full bg-[#F5EDE0] px-4 py-1.5 border border-[#C5A059]/30">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="font-display-luxury text-xs tracking-widest uppercase font-semibold text-[#5C4D4D]">
                      {chapter.year}
                    </span>
                  </div>

                  {/* Chapter Heading */}
                  <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#2C2222] font-normal">
                    {chapter.title}
                  </h3>

                  <p className="font-serif-luxury text-base italic text-[#8F7E7C]">
                    {chapter.subtitle}
                  </p>

                  {/* Narrative Text */}
                  <p className="font-sans text-sm sm:text-base text-[#615452] leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {chapter.narrative}
                  </p>

                  {/* Blossom Ornament */}
                  <div className="pt-2 flex items-center justify-center lg:justify-start space-x-2 text-rose-300">
                    <span>🌸</span>
                    <span className="h-[1px] w-12 bg-[#E8CAC8]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
