import React, { useState } from 'react';
import { weddingConfig, type GalleryPhoto } from '../config/weddingConfig';
import { LightboxModal } from './LightboxModal';
import { Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'portraits', label: 'The Couple' },
    { id: 'moments', label: 'Milestones' },
    { id: 'venue', label: 'The Estate' },
    { id: 'details', label: 'Details' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? weddingConfig.gallery
    : weddingConfig.gallery.filter((p) => p.category === selectedCategory);

  const handleOpenLightbox = (photo: GalleryPhoto, index: number) => {
    setActivePhoto(photo);
    setActivePhotoIndex(index);
  };

  const handleNext = () => {
    const nextIdx = (activePhotoIndex + 1) % filteredPhotos.length;
    setActivePhotoIndex(nextIdx);
    setActivePhoto(filteredPhotos[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhotoIndex(prevIdx);
    setActivePhoto(filteredPhotos[prevIdx]);
  };

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 bg-[#FAF6F2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-display-luxury text-xs tracking-[0.3em] uppercase text-[#9A7B38] font-semibold">
              Visual Memories
            </span>
            <span className="h-[1px] w-8 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#2C2222] tracking-tight mb-4">
            Wedding Gallery
          </h2>
          
          <p className="font-serif-luxury text-lg italic text-[#736765]">
            Moments frozen in time beneath the soft cherry blossom petals.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full font-display-luxury text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#C5A059] text-white shadow-md font-semibold'
                  : 'bg-white text-[#615452] border border-[#E8CAC8] hover:border-[#C5A059] hover:bg-[#F5EDE0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Artistic Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            const isWide = index === 0 || index === 3;

            return (
              <div
                key={photo.id}
                onClick={() => handleOpenLightbox(photo, index)}
                className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg border border-[#E8CAC8]/60 cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl paper-deckled ${
                  isWide ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Photo Image */}
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white" />

                  {/* Hover Caption Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif-luxury text-lg font-normal drop-shadow-sm">
                          {photo.caption}
                        </p>
                        <span className="font-display-luxury text-[10px] tracking-widest text-[#E6CA85] uppercase">
                          {photo.category}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal Portal */}
      <LightboxModal
        photo={activePhoto}
        photos={filteredPhotos}
        currentIndex={activePhotoIndex}
        onClose={() => setActivePhoto(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
