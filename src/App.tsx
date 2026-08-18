import { useState } from 'react';
import { weddingConfig } from './config/weddingConfig';
import { weddingAudio } from './audio/soundEffects';
import { PetalCanvas } from './components/PetalCanvas';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { DateCountdown } from './components/DateCountdown';
import { WeddingEvents } from './components/WeddingEvents';
import { StoryTimeline } from './components/StoryTimeline';
import { GallerySection } from './components/GallerySection';
import { VenueTravel } from './components/VenueTravel';
import { DressCodeSection } from './components/DressCodeSection';
import { GuestBlessings } from './components/GuestBlessings';
import { RSVPSection } from './components/RSVPSection';
import { GiftBlessings } from './components/GiftBlessings';
import { FinalSection } from './components/FinalSection';
import { AudioController } from './components/AudioController';

export function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [burstCount, setBurstCount] = useState(0);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlayingAudio(true);
    setBurstCount((prev) => prev + 1);
  };

  const handleToggleAudio = () => {
    const newState = weddingAudio.toggleMusic(weddingConfig.audio.customAudioUrl);
    setIsPlayingAudio(newState);
  };

  const handleVolumeChange = (vol: number) => {
    weddingAudio.setVolume(vol);
  };

  const handleTriggerBurst = () => {
    setBurstCount((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF6F2] text-[#362D2D] selection:bg-[#E8C5C8] selection:text-[#2C1E1E]">
      
      {/* 3D Falling Blossom Petals Physics Engine (Always active in background) */}
      <PetalCanvas burstTrigger={burstCount} intensity="medium" />

      {/* Initial Envelope & Wax Seal Opening Ceremony Modal */}
      {!isOpened && (
        <OpeningEnvelope onOpen={handleOpenInvitation} />
      )}

      {/* Main Wedding Sanctuary Invitation Experience */}
      <div className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Floating Top Navigation */}
        <Navigation
          isPlayingAudio={isPlayingAudio}
          onToggleAudio={handleToggleAudio}
        />

        {/* 1. Hero Flowering Tree Cinematic Opening */}
        <HeroSection />

        {/* 2. The Couple Introduction & Portraits */}
        <CoupleSection />

        {/* 3. Editorial Save The Date & Live Countdown */}
        <DateCountdown />

        {/* 4. Wedding Order of Events & Itinerary */}
        <WeddingEvents />

        {/* 5. Our Love Story Chapter Milestones */}
        <StoryTimeline />

        {/* 6. Fine Art Photo Gallery & Lightbox */}
        <GallerySection />

        {/* 7. Destination Venue & Accommodations */}
        <VenueTravel />

        {/* 8. Dress Code & Aesthetic Palette */}
        <DressCodeSection />

        {/* 9. Guest Blessings & Wishes Guestbook */}
        <GuestBlessings />

        {/* 10. Interactive RSVP Section with Blossom Celebration */}
        <RSVPSection onTriggerBurst={handleTriggerBurst} />

        {/* 11. Gift & Registry Details */}
        <GiftBlessings />

        {/* 12. Emotional Closing & Final Petal Shower */}
        <FinalSection onTriggerShower={handleTriggerBurst} />

        {/* Floating Audio Controller */}
        <AudioController
          isPlaying={isPlayingAudio}
          onToggle={handleToggleAudio}
          onVolumeChange={handleVolumeChange}
        />
      </div>

    </div>
  );
}

export default App;
