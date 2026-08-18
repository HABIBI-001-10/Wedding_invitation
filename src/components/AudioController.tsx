import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioControllerProps {
  isPlaying: boolean;
  onToggle: () => void;
  onVolumeChange: (vol: number) => void;
}

export const AudioController: React.FC<AudioControllerProps> = ({
  isPlaying,
  onToggle,
  onVolumeChange,
}) => {
  const [showVolume, setShowVolume] = useState(false);
  const [volume, setVolume] = useState(0.45);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    onVolumeChange(val);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center space-x-2">
      {/* Floating Audio Disc Card */}
      <div 
        onMouseEnter={() => setShowVolume(true)}
        onMouseLeave={() => setShowVolume(false)}
        className="relative flex items-center space-x-3 rounded-full blush-glass px-4 py-2 shadow-xl border border-[#E8CAC8] backdrop-blur-md transition-all duration-300 hover:scale-105"
      >
        {/* Rotating Vinyl / Blossom Disk Button */}
        <button
          onClick={onToggle}
          className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#C5A059] text-white shadow-sm cursor-pointer overflow-hidden group"
          title={isPlaying ? 'Pause ambient wedding music' : 'Play ambient wedding music'}
          aria-label="Toggle wedding music"
        >
          <div className={`transition-transform duration-1000 ease-linear ${isPlaying ? 'animate-spin' : ''}`}>
            🌸
          </div>
        </button>

        {/* Music Information */}
        <div className="hidden sm:block text-left pr-2">
          <p className="font-serif-luxury text-xs text-[#362D2D] font-medium leading-none">
            {weddingConfig.audio.songTitle}
          </p>
          <p className="font-display-luxury text-[9px] tracking-widest text-[#9A8D8B] uppercase mt-0.5">
            {isPlaying ? 'Playing Romantic Melody' : 'Music Paused'}
          </p>
        </div>

        {/* Play / Pause Toggle Icon */}
        <button
          onClick={onToggle}
          className="text-[#615452] hover:text-[#2C1E1E] transition-colors cursor-pointer"
        >
          {isPlaying ? <Volume2 className="w-4 h-4 text-[#C5A059]" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
        </button>

        {/* Volume Slider Popup on Hover */}
        {showVolume && (
          <div className="absolute -top-10 left-0 rounded-xl blush-glass px-3 py-1.5 shadow-lg border border-[#E8CAC8] flex items-center space-x-2 animate-fadeIn">
            <span className="text-[10px] text-[#736765] font-display-luxury uppercase">Vol</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleSliderChange}
              className="w-16 h-1.5 bg-[#E8CAC8] rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
            />
          </div>
        )}
      </div>
    </div>
  );
};
