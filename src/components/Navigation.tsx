import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Volume2, VolumeX, Menu, X, Heart } from 'lucide-react';

interface NavigationProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isPlayingAudio,
  onToggleAudio,
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Welcome' },
    { id: 'couple', label: 'The Couple' },
    { id: 'date', label: 'Save the Date' },
    { id: 'events', label: 'Itinerary' },
    { id: 'story', label: 'Our Story' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'venue', label: 'Venue' },
    { id: 'dress-code', label: 'Dress Code' },
    { id: 'blessings', label: 'Blessings' },
    { id: 'rsvp', label: 'RSVP' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Simple intersection check
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 blush-glass shadow-md'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Couple Monogram Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 text-left cursor-pointer group"
          >
            <span className="font-serif-luxury text-2xl tracking-widest text-[#362D2D] font-medium group-hover:text-[#C5A059] transition-colors">
              {weddingConfig.couple.bride.firstName[0]} & {weddingConfig.couple.groom.firstName[0]}
            </span>
            <span className="hidden sm:inline-block text-xs font-display-luxury tracking-[0.2em] text-[#9A8D8B] uppercase">
              • Aug 2026
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-full font-display-luxury text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-[#362D2D] font-semibold bg-[#E8CAC8]/40 border border-[#C5A059]/30'
                    : 'text-[#615452] hover:text-[#261E1E] hover:bg-[#F5EDE0]/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons (Music + Quick RSVP) */}
          <div className="flex items-center space-x-3">
            
            {/* Music Button */}
            <button
              onClick={onToggleAudio}
              className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 cursor-pointer border ${
                isPlayingAudio
                  ? 'bg-[#C5A059] text-white border-[#C5A059] shadow-md animate-pulse'
                  : 'bg-white/80 text-[#615452] border-[#E8CAC8] hover:bg-[#F5EDE0]'
              }`}
              title={isPlayingAudio ? 'Mute Music' : 'Play Music'}
              aria-label="Toggle background music"
            >
              {isPlayingAudio ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Quick RSVP CTA Button */}
            <button
              onClick={() => scrollToSection('rsvp')}
              className="hidden sm:inline-flex items-center space-x-1.5 rounded-full px-4 py-1.5 text-xs font-display-luxury tracking-widest uppercase font-semibold text-[#2C1E1E] shimmer-button shadow-sm cursor-pointer"
            >
              <Heart className="w-3 h-3 fill-[#2C1E1E]" />
              <span>RSVP</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/80 border border-[#E8CAC8] text-[#362D2D] cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#1A1414]/70 backdrop-blur-md pt-20 px-6 pb-8 transition-all">
          <div className="rounded-2xl bg-[#FAF6F2] p-6 shadow-2xl border border-[#E8CAC8] space-y-3">
            <div className="text-center pb-3 border-b border-[#E8CAC8]/40">
              <p className="font-script-luxury text-3xl text-[#C5A059]">
                {weddingConfig.couple.bride.firstName} & {weddingConfig.couple.groom.firstName}
              </p>
              <p className="font-display-luxury text-[10px] tracking-[0.3em] uppercase text-[#736765]">
                {weddingConfig.date.formattedDate}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3 py-2 rounded-lg font-display-luxury text-xs tracking-wider uppercase transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#E8CAC8]/50 text-[#2C1E1E] font-semibold'
                      : 'text-[#615452] hover:bg-[#F5EDE0]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('rsvp')}
              className="w-full py-3 rounded-full text-center font-display-luxury text-xs tracking-[0.2em] uppercase font-semibold text-[#2C1E1E] shimmer-button shadow-md cursor-pointer"
            >
              Confirm Attendance (RSVP)
            </button>
          </div>
        </div>
      )}
    </>
  );
};
