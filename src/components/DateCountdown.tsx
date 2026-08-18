import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Download, ExternalLink, Sparkles, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export const DateCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(weddingConfig.date.targetISO).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Google Calendar URL Generator
  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`${weddingConfig.couple.bride.firstName} & ${weddingConfig.couple.groom.firstName}'s Wedding Celebration`);
    const details = encodeURIComponent(`We are overjoyed to celebrate our wedding with you at ${weddingConfig.venue.name}.\n\nDress Code: ${weddingConfig.venue.dressCodeSummary}`);
    const location = encodeURIComponent(`${weddingConfig.venue.name}, ${weddingConfig.venue.address}`);
    const dates = "20260829T133000Z/20260830T000000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  // Apple & Outlook .ICS File Download
  const downloadIcsFile = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Evelyn and Alexander Wedding//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${weddingConfig.couple.bride.firstName} & ${weddingConfig.couple.groom.firstName}'s Wedding`,
      `DESCRIPTION:Join us to celebrate our wedding at ${weddingConfig.venue.name}.`,
      `LOCATION:${weddingConfig.venue.name}, ${weddingConfig.venue.address}`,
      "DTSTART:20260829T133000Z",
      "DTEND:20260830T000000Z",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Evelyn-and-Alexander-Wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="date"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#FAF6F2] via-[#F6ECE9] to-[#FAF6F2] overflow-hidden text-center"
    >
      {/* Background Floral Watermark Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3B2E2E_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Header Badge */}
        <div className="inline-flex items-center space-x-3 mb-8">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span className="font-display-luxury text-xs tracking-[0.35em] text-[#8F6B28] uppercase font-bold">
            Save The Date
          </span>
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
        </div>

        {/* Grand Editorial Date Frame */}
        <div className="relative mx-auto max-w-lg rounded-3xl bg-[#FCFAF7]/90 p-8 sm:p-12 shadow-2xl border border-[#E6CA85]/50 backdrop-blur-md paper-deckled mb-12">
          
          {/* Animated Botanical Corner Flairs */}
          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-tl-xl border-t-2 border-l-2 border-[#C5A059]" />
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-tr-xl border-t-2 border-r-2 border-[#C5A059]" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 rounded-bl-xl border-b-2 border-l-2 border-[#C5A059]" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-br-xl border-b-2 border-r-2 border-[#C5A059]" />

          {/* Day of Week */}
          <p className="font-display-luxury text-sm tracking-[0.4em] uppercase text-[#736765] mb-2 font-medium">
            {weddingConfig.date.dayOfWeek}
          </p>

          {/* Giant Editorial Day Number */}
          <div className="my-2">
            <span className="font-serif-luxury text-7xl sm:text-9xl font-light text-[#2C2222] tracking-tighter leading-none">
              {weddingConfig.date.day}
            </span>
          </div>

          {/* Month & Year */}
          <div className="space-y-1 mt-2">
            <h3 className="font-display-luxury text-2xl sm:text-3xl tracking-[0.25em] text-[#C5A059] font-semibold uppercase">
              {weddingConfig.date.month}
            </h3>
            <p className="font-editorial-luxury text-xl sm:text-2xl text-[#5C4F4E] font-medium tracking-widest">
              {weddingConfig.date.year}
            </p>
          </div>

          {/* Time & Venue Summary */}
          <div className="mt-8 pt-6 border-t border-[#E8CAC8]/40 space-y-1">
            <div className="flex items-center justify-center space-x-2 text-[#736765] text-sm">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <span className="font-serif-luxury italic text-base sm:text-lg">
                {weddingConfig.date.timeDisplay}
              </span>
            </div>
            <p className="font-sans text-xs text-[#9A8D8B] tracking-wider uppercase font-medium">
              {weddingConfig.venue.name}
            </p>
          </div>
        </div>

        {/* Live Countdown Section */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="font-display-luxury text-xs tracking-[0.3em] uppercase text-[#736765] mb-6 font-semibold">
            {timeLeft.isComplete ? 'The Day Has Arrived' : 'Counting Down To Our Sacred Vows'}
          </p>

          {timeLeft.isComplete ? (
            <div className="rounded-2xl blush-glass p-8 border border-[#C5A059] shadow-lg animate-pulse-glow">
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#362D2D] mb-2">
                Today We Celebrate Forever
              </h3>
              <p className="font-serif-luxury text-lg italic text-[#736765]">
                Welcome to our wedding day!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-3 sm:gap-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((unit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/90 p-3 sm:p-5 shadow-md border border-[#E8CAC8]/60 backdrop-blur-sm transition-transform hover:-translate-y-1"
                >
                  <div className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-normal text-[#362D2D] tracking-tight">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="font-display-luxury text-[9px] sm:text-xs tracking-[0.2em] text-[#9A8D8B] uppercase font-semibold mt-1">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add to Calendar Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 rounded-full bg-white/90 px-6 py-3 text-xs font-display-luxury tracking-wider uppercase font-semibold text-[#362D2D] border border-[#E8CAC8] shadow-sm hover:bg-[#FAF6F2] hover:border-[#C5A059] transition-all cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Google Calendar</span>
          </a>

          <button
            onClick={downloadIcsFile}
            className="inline-flex items-center space-x-2 rounded-full bg-white/90 px-6 py-3 text-xs font-display-luxury tracking-wider uppercase font-semibold text-[#362D2D] border border-[#E8CAC8] shadow-sm hover:bg-[#FAF6F2] hover:border-[#C5A059] transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Apple / iCal (.ics)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
