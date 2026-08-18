import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { MapPin, Navigation, Car, Bus, Hotel } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export const VenueTravel: React.FC = () => {
  return (
    <section
      id="venue"
      className="relative py-24 sm:py-32 bg-[#FCFAF7] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-display-luxury text-xs tracking-[0.3em] uppercase text-[#9A7B38] font-semibold">
              The Destination
            </span>
            <span className="h-[1px] w-8 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#2C2222] tracking-tight mb-4">
            Venue & Accommodations
          </h2>
          
          <p className="font-serif-luxury text-lg italic text-[#736765]">
            Nestled amid historic stone gardens and ancient blossoming cherry canopies.
          </p>
        </div>

        {/* Venue Grand Card */}
        <div className="rounded-3xl bg-white shadow-2xl border border-[#E8CAC8]/70 overflow-hidden mb-12 paper-deckled">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Preview Side */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-full">
              <img
                src={assetUrl("/images/reception.jpg")}
                alt={weddingConfig.venue.name}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-display-luxury text-xs tracking-widest text-[#E6CA85] uppercase">
                  Botanical Greenhouse & Grounds
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white">
                  {weddingConfig.venue.hall}
                </h3>
              </div>
            </div>

            {/* Details Side */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="font-display-luxury text-xs tracking-widest text-[#9A7B38] uppercase font-semibold">
                  Estate Information
                </span>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#2C2222] font-normal leading-snug">
                  {weddingConfig.venue.name}
                </h3>

                <div className="flex items-start space-x-2.5 text-sm text-[#615452]">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{weddingConfig.venue.address}</span>
                </div>

                <p className="font-sans text-xs text-[#736765] leading-relaxed">
                  Located in the serene rolling hills, surrounded by private botanical gardens and centuries-old flowering cherry trees.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8CAC8]/40 space-y-3">
                <a
                  href={weddingConfig.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 rounded-full px-6 py-3 text-xs font-display-luxury tracking-wider uppercase font-semibold text-[#2C1E1E] shimmer-button shadow-md cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={weddingConfig.venue.appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 rounded-full bg-[#FAF6F2] px-6 py-2.5 text-xs font-display-luxury tracking-wider uppercase font-semibold text-[#362D2D] border border-[#E8CAC8] hover:bg-[#F5EDE0] transition-colors cursor-pointer"
                >
                  <span>Apple Maps Directions</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Travel Tips Grid (Valet Parking, Private Shuttle, Nearby Hotels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="rounded-2xl bg-white/90 p-6 shadow-md border border-[#E8CAC8]/60 space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#F5EDE0] flex items-center justify-center text-[#9A7B38]">
              <Car className="w-4 h-4" />
            </div>
            <h4 className="font-serif-luxury text-xl text-[#362D2D] font-normal">
              Valet & Parking
            </h4>
            <p className="font-sans text-xs text-[#615452] leading-relaxed">
              {weddingConfig.venue.parkingInfo}
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 p-6 shadow-md border border-[#E8CAC8]/60 space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#F5EDE0] flex items-center justify-center text-[#9A7B38]">
              <Bus className="w-4 h-4" />
            </div>
            <h4 className="font-serif-luxury text-xl text-[#362D2D] font-normal">
              Guest Shuttles
            </h4>
            <p className="font-sans text-xs text-[#615452] leading-relaxed">
              {weddingConfig.venue.shuttleInfo}
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 p-6 shadow-md border border-[#E8CAC8]/60 space-y-3">
            <div className="w-9 h-9 rounded-full bg-[#F5EDE0] flex items-center justify-center text-[#9A7B38]">
              <Hotel className="w-4 h-4" />
            </div>
            <h4 className="font-serif-luxury text-xl text-[#362D2D] font-normal">
              Partner Hotels
            </h4>
            <p className="font-sans text-xs text-[#615452] leading-relaxed">
              Preferential room rates are reserved under "Vance & Sterling Wedding" at Hotel Le Jardin and Villa Beauvoir.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
