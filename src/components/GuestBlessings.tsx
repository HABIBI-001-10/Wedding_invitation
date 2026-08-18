import React, { useState, useEffect } from 'react';
import { weddingAudio } from '../audio/soundEffects';
import { Heart, Send, MessageCircleHeart } from 'lucide-react';

interface Blessing {
  id: string;
  name: string;
  relationship: string;
  message: string;
  date: string;
  likes: number;
}

const initialBlessings: Blessing[] = [
  {
    id: '1',
    name: 'Charlotte & Henry Vance',
    relationship: 'Family',
    message: 'May your shared path always blossom with infinite kindness, deep peace, and laughter as radiant as this garden.',
    date: 'August 10, 2026',
    likes: 12,
  },
  {
    id: '2',
    name: 'Julian Montgomery',
    relationship: 'Best Friend',
    message: 'To the most extraordinary duo! From Paris bookshops to forever vows, here is to a lifetime of adventures together.',
    date: 'August 12, 2026',
    likes: 9,
  },
  {
    id: '3',
    name: 'Aunt Vivienne & Uncle Pierre',
    relationship: 'Family',
    message: 'May the warmth and grace of your wedding day carry you through all the seasons of life. We are thrilled to celebrate with you!',
    date: 'August 15, 2026',
    likes: 15,
  }
];

export const GuestBlessings: React.FC = () => {
  const [blessings, setBlessings] = useState<Blessing[]>(() => {
    const saved = localStorage.getItem('wedding_blessings');
    return saved ? JSON.parse(saved) : initialBlessings;
  });

  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('Friend');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  useEffect(() => {
    localStorage.setItem('wedding_blessings', JSON.stringify(blessings));
  }, [blessings]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    weddingAudio.playHeartSound();

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name: name.trim(),
      relationship,
      message: message.trim(),
      date: 'Just now',
      likes: 1,
    };

    setTimeout(() => {
      setBlessings([newBlessing, ...blessings]);
      setName('');
      setMessage('');
      setIsSubmitting(false);
      setSuccessNotice(true);
      setTimeout(() => setSuccessNotice(false), 4000);
    }, 400);
  };

  const handleLike = (id: string) => {
    weddingAudio.playHeartSound();
    setBlessings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, likes: b.likes + 1 } : b))
    );
  };

  return (
    <section
      id="blessings"
      className="relative py-24 sm:py-32 bg-[#FAF6F2] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-display-luxury text-xs tracking-[0.3em] uppercase text-[#9A7B38] font-semibold">
              Words of Love
            </span>
            <span className="h-[1px] w-8 bg-[#C5A059]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#2C2222] tracking-tight mb-4">
            Guest Blessings & Wishes
          </h2>
          
          <p className="font-serif-luxury text-lg italic text-[#736765]">
            Leave your warmest blessings for the couple to cherish forever.
          </p>
        </div>

        {/* Blessings Form & Wall Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Leave a Blessing Form */}
          <div className="lg:col-span-5 rounded-3xl bg-white p-7 sm:p-8 shadow-xl border border-[#E8CAC8]/70 paper-deckled">
            <h3 className="font-serif-luxury text-2xl text-[#362D2D] font-normal mb-1 flex items-center space-x-2">
              <MessageCircleHeart className="w-5 h-5 text-[#C5A059]" />
              <span>Send Your Blessing</span>
            </h3>
            <p className="font-serif-luxury text-xs italic text-[#8F7E7C] mb-6">
              Your words will be added to the couple's keepsake book.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-display-luxury text-[11px] tracking-wider uppercase text-[#736765] font-semibold mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Eleanor & David"
                  className="w-full rounded-xl border border-[#E8CAC8] bg-[#FAF6F2] px-4 py-2.5 text-sm text-[#362D2D] focus:border-[#C5A059] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-display-luxury text-[11px] tracking-wider uppercase text-[#736765] font-semibold mb-1.5">
                  Relationship
                </label>
                <select
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full rounded-xl border border-[#E8CAC8] bg-[#FAF6F2] px-4 py-2.5 text-sm text-[#362D2D] focus:border-[#C5A059] focus:bg-white focus:outline-none transition-colors"
                >
                  <option value="Family">Family Member</option>
                  <option value="Friend">Dearest Friend</option>
                  <option value="Colleague">Colleague / Peer</option>
                  <option value="Well Wisher">Well Wisher</option>
                </select>
              </div>

              <div>
                <label className="block font-display-luxury text-[11px] tracking-wider uppercase text-[#736765] font-semibold mb-1.5">
                  Your Message & Wishes
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your heartfelt blessing..."
                  className="w-full rounded-xl border border-[#E8CAC8] bg-[#FAF6F2] px-4 py-2.5 text-sm text-[#362D2D] focus:border-[#C5A059] focus:bg-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 rounded-full py-3 text-xs font-display-luxury tracking-wider uppercase font-semibold text-[#2C1E1E] shimmer-button shadow-md cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Sending Blessing...' : 'Post Blessing'}</span>
              </button>

              {successNotice && (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center text-xs text-emerald-800 animate-fadeIn">
                  Thank you! Your heartfelt blessing has been shared. 🌸
                </div>
              )}
            </form>
          </div>

          {/* Blessings Wall List */}
          <div className="lg:col-span-7 space-y-4 max-h-[560px] overflow-y-auto pr-2">
            {blessings.map((blessing) => (
              <div
                key={blessing.id}
                className="rounded-2xl bg-white/95 p-6 shadow-md border border-[#E8CAC8]/60 transition-all hover:border-[#C5A059]/60 paper-deckled"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-serif-luxury text-lg text-[#362D2D] font-medium">
                      {blessing.name}
                    </h4>
                    <span className="font-display-luxury text-[10px] tracking-widest text-[#9A7B38] uppercase">
                      {blessing.relationship} • {blessing.date}
                    </span>
                  </div>

                  <button
                    onClick={() => handleLike(blessing.id)}
                    className="flex items-center space-x-1 px-3 py-1 rounded-full bg-[#FAF6F2] hover:bg-rose-50 border border-[#E8CAC8] text-xs text-[#736765] hover:text-rose-600 transition-colors cursor-pointer"
                    title="Give heart"
                  >
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span>{blessing.likes}</span>
                  </button>
                </div>

                <p className="font-serif-luxury text-sm italic text-[#5C4F4E] leading-relaxed">
                  "{blessing.message}"
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
