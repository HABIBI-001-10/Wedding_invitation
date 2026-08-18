import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { weddingAudio } from '../audio/soundEffects';
import { CheckCircle2, Heart, Send, Users, Utensils } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RSVPSectionProps {
  onTriggerBurst: () => void;
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({ onTriggerBurst }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState<'accept' | 'decline'>('accept');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [dietary, setDietary] = useState(weddingConfig.rsvp.dietaryOptions[0]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Please provide a valid email address.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    weddingAudio.playSealBreak();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger blossom shower
      onTriggerBurst();

      // Launch luxury gold & blush confetti
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#E8C5C8', '#C5A059', '#F5EDE0', '#D99B9B', '#FFFFFF'],
        });
      } catch {
        // ignore
      }

      // Save locally
      const rsvpData = {
        fullName,
        email,
        attendance,
        guestCount,
        dietary,
        message,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('wedding_rsvp_entry', JSON.stringify(rsvpData));
    }, 800);
  };

  return (
    <section
      id="rsvp"
      className="relative py-24 sm:py-32 bg-[#FCFAF7] overflow-hidden"
    >
      {/* Background Soft Pink Blossom Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F7EAE8] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-display-luxury text-xs tracking-[0.3em] uppercase text-[#9A7B38] font-semibold">
              Presence & Honor
            </span>
            <span className="h-[1px] w-8 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#2C2222] tracking-tight mb-4">
            Will You Join Us?
          </h2>
          
          <p className="font-serif-luxury text-lg italic text-[#736765]">
            Kindly respond by <strong className="font-semibold text-[#362D2D]">{weddingConfig.rsvp.deadlineDate}</strong> so we may reserve your seat in the garden.
          </p>
        </div>

        {/* Main RSVP Card */}
        <div className="relative mx-auto max-w-2xl rounded-3xl bg-white/95 p-8 sm:p-12 shadow-2xl border border-[#E8CAC8]/70 backdrop-blur-md paper-deckled">
          
          {isSubmitted ? (
            <div className="text-center py-10 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#F5EDE0] mx-auto flex items-center justify-center text-[#C5A059] shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#362D2D] font-normal">
                  {attendance === 'accept' ? 'We Can’t Wait to Celebrate!' : 'Thank You For Your Response'}
                </h3>
                <p className="font-serif-luxury text-lg italic text-[#736765] max-w-md mx-auto">
                  {attendance === 'accept'
                    ? `Thank you, ${fullName}. Your presence will make our sacred union truly complete.`
                    : `Thank you for letting us know, ${fullName}. You will be in our hearts on our special day.`}
                </p>
              </div>

              <div className="inline-block rounded-2xl bg-[#FAF6F2] p-4 text-xs font-display-luxury tracking-wider text-[#9A8D8B] uppercase border border-[#E8CAC8]">
                Confirmation details sent to: <strong>{email}</strong>
              </div>

              <div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-display-luxury tracking-widest text-[#C5A059] uppercase hover:underline cursor-pointer"
                >
                  Modify Your RSVP Details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Attendance Choice Buttons */}
              <div>
                <label className="block font-display-luxury text-xs tracking-widest uppercase text-[#736765] font-semibold mb-3 text-center">
                  Will you be attending? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setAttendance('accept')}
                    className={`flex items-center justify-center space-x-2 py-3.5 px-4 rounded-2xl border transition-all cursor-pointer ${
                      attendance === 'accept'
                        ? 'bg-[#E8CAC8]/40 border-[#C5A059] text-[#2C1E1E] font-semibold shadow-sm'
                        : 'bg-[#FAF6F2] border-[#E8CAC8] text-[#736765] hover:bg-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${attendance === 'accept' ? 'fill-rose-600 text-rose-600' : 'text-gray-400'}`} />
                    <span className="font-serif-luxury text-base">Joyfully Accept</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance('decline')}
                    className={`flex items-center justify-center space-x-2 py-3.5 px-4 rounded-2xl border transition-all cursor-pointer ${
                      attendance === 'decline'
                        ? 'bg-stone-200/60 border-stone-400 text-[#2C1E1E] font-semibold shadow-sm'
                        : 'bg-[#FAF6F2] border-[#E8CAC8] text-[#736765] hover:bg-white'
                    }`}
                  >
                    <span className="font-serif-luxury text-base">Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {/* Full Name Field */}
              <div>
                <label className="block font-display-luxury text-[11px] tracking-wider uppercase text-[#736765] font-semibold mb-1.5">
                  Guest Name(s) *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Lord & Lady Cavendish"
                  className="w-full rounded-xl border border-[#E8CAC8] bg-[#FAF6F2] px-4 py-3 text-sm text-[#362D2D] focus:border-[#C5A059] focus:bg-white focus:outline-none transition-colors"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block font-display-luxury text-[11px] tracking-wider uppercase text-[#736765] font-semibold mb-1.5">
                  Email Address for Itinerary Updates *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. guest@royalmail.com"
                  className="w-full rounded-xl border border-[#E8CAC8] bg-[#FAF6F2] px-4 py-3 text-sm text-[#362D2D] focus:border-[#C5A059] focus:bg-white focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                )}
              </div>

              {/* Attending Specific Fields */}
              {attendance === 'accept' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  
                  {/* Guest Count */}
                  <div>
                    <label className="block font-display-luxury text-[11px] tracking-wider uppercase text-[#736765] font-semibold mb-1.5 flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Number of Attendees</span>
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full rounded-xl border border-[#E8CAC8] bg-[#FAF6F2] px-4 py-3 text-sm text-[#362D2D] focus:border-[#C5A059] focus:bg-white focus:outline-none transition-colors"
                    >
                      {[...Array(weddingConfig.rsvp.maxGuestsPerInvite)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Guest (Attending Solo)' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dietary Requirements */}
                  <div>
                    <label className="block font-display-luxury text-[11px] tracking-wider uppercase text-[#736765] font-semibold mb-1.5 flex items-center space-x-1.5">
                      <Utensils className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Dietary Preference</span>
                    </label>
                    <select
                      value={dietary}
                      onChange={(e) => setDietary(e.target.value)}
                      className="w-full rounded-xl border border-[#E8CAC8] bg-[#FAF6F2] px-4 py-3 text-sm text-[#362D2D] focus:border-[#C5A059] focus:bg-white focus:outline-none transition-colors"
                    >
                      {weddingConfig.rsvp.dietaryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>
              )}

              {/* Message to Couple */}
              <div>
                <label className="block font-display-luxury text-[11px] tracking-wider uppercase text-[#736765] font-semibold mb-1.5">
                  Personal Note or Song Request (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a sweet memory or a song that will get you dancing..."
                  className="w-full rounded-xl border border-[#E8CAC8] bg-[#FAF6F2] px-4 py-3 text-sm text-[#362D2D] focus:border-[#C5A059] focus:bg-white focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full font-display-luxury text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#2C1E1E] shimmer-button shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Recording RSVP...' : 'Confirm RSVP'}</span>
                </button>
                <p className="mt-3 font-serif-luxury text-xs italic text-[#8F7E7C]">
                  Questions? Reach out directly to {weddingConfig.rsvp.contactEmail}
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
