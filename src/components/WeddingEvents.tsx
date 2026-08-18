import React from 'react';
import { weddingConfig, type EventItem } from '../config/weddingConfig';
import { MapPin, Clock, CalendarPlus, Navigation } from 'lucide-react';

export const WeddingEvents: React.FC = () => {
  const getEventGoogleCalUrl = (event: EventItem) => {
    const title = encodeURIComponent(`${weddingConfig.couple.bride.firstName} & ${weddingConfig.couple.groom.firstName}: ${event.title}`);
    const details = encodeURIComponent(`${event.description}\n\nVenue: ${event.venue}, ${event.address}`);
    const loc = encodeURIComponent(`${event.venue}, ${event.address}`);
    const dates = `${event.calendarData.startDate}/${event.calendarData.endDate}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${loc}&dates=${dates}`;
  };

  return (
    <section
      id="events"
      className="relative py-24 sm:py-32 bg-[#FAF6F2] overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#F5EDE0] blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#F7EAE8] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-display-luxury text-xs tracking-[0.3em] uppercase text-[#9A7B38] font-semibold">
              The Celebration Itinerary
            </span>
            <span className="h-[1px] w-8 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#2C2222] tracking-tight mb-4">
            Wedding Order of Events
          </h2>
          
          <p className="font-serif-luxury text-lg italic text-[#736765]">
            A seamless symphony of sacred vows, joyous music, and golden hour dining.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Center Vertical Golden Line (Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#C5A059]/60 to-transparent" />

          {/* Events List */}
          <div className="space-y-12 sm:space-y-16">
            {weddingConfig.events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node / Blossom Icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-[#FCFAF7] border-2 border-[#C5A059] shadow-md z-10 text-sm">
                    🌸
                  </div>

                  {/* Content Card Side */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="relative rounded-3xl bg-white/95 p-7 sm:p-9 shadow-xl border border-[#E8CAC8]/60 hover:border-[#C5A059]/80 transition-all duration-500 hover:-translate-y-1 paper-deckled group">
                      
                      {/* Event Time Badge */}
                      <div className="inline-flex items-center space-x-2 rounded-full bg-[#F5EDE0] px-4 py-1.5 border border-[#C5A059]/30 mb-4">
                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span className="font-display-luxury text-xs tracking-wider uppercase font-semibold text-[#5C4D4D]">
                          {event.time}
                        </span>
                      </div>

                      {/* Event Title & Subtitle */}
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#2C2222] font-normal mb-1 group-hover:text-[#9A7B38] transition-colors">
                        {event.title}
                      </h3>
                      <p className="font-serif-luxury text-sm italic text-[#8F7E7C] mb-3">
                        {event.subtitle}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-sm text-[#615452] leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {/* Venue & Address */}
                      <div className="pt-4 border-t border-[#E8CAC8]/40 space-y-2 mb-6">
                        <div className="flex items-start space-x-2 text-xs sm:text-sm text-[#4A3D3C]">
                          <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="font-medium">{event.venue} — {event.address}</span>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={event.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 rounded-full bg-[#FAF6F2] px-4 py-2 text-xs font-display-luxury tracking-wider uppercase font-semibold text-[#362D2D] border border-[#E8CAC8] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all cursor-pointer"
                        >
                          <Navigation className="w-3 h-3" />
                          <span>View Location</span>
                        </a>

                        <a
                          href={getEventGoogleCalUrl(event)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 rounded-full bg-[#FAF6F2] px-4 py-2 text-xs font-display-luxury tracking-wider uppercase font-semibold text-[#362D2D] border border-[#E8CAC8] hover:bg-[#FAF6F2] hover:border-[#C5A059] transition-all cursor-pointer"
                        >
                          <CalendarPlus className="w-3 h-3 text-[#C5A059]" />
                          <span>Add to Cal</span>
                        </a>
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer Side on Desktop */}
                  <div className="hidden md:block md:w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
