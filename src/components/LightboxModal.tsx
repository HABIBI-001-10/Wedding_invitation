import React, { useEffect } from 'react';
import type { GalleryPhoto } from '../config/weddingConfig';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [photo, onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8 animate-fadeIn">
      
      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 text-white/80">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span className="font-display-luxury text-xs tracking-widest uppercase">
            {currentIndex + 1} / {photos.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer z-20 hidden sm:flex items-center justify-center"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer z-20 hidden sm:flex items-center justify-center"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Content */}
      <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 max-h-[75vh]">
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-h-[75vh] w-auto object-contain mx-auto transition-transform duration-300"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white space-y-1 max-w-xl">
          <p className="font-serif-luxury text-lg sm:text-xl font-normal tracking-wide">
            {photo.caption}
          </p>
          <p className="font-display-luxury text-xs tracking-widest text-[#E6CA85] uppercase">
            {photo.category}
          </p>
        </div>
      </div>
    </div>
  );
};
