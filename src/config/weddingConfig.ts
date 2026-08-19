/**
 * WEDDING INVITATION CONFIGURATION
 * 
 * You can effortlessly customize all wedding details, names, dates,
 * timeline events, photos, venue links, and registry information here.
 */

import { assetUrl } from '../utils/assetUrl';
import One__Direction from '../assets/one_direction.mp3';


export interface EventItem {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  venue: string;
  address: string;
  description: string;
  mapUrl: string;
  calendarData: {
    startDate: string; // ISO 8601 string
    endDate: string;
    summary: string;
    description: string;
    location: string;
  };
}

export interface StoryChapter {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  narrative: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'portraits' | 'moments' | 'venue' | 'details';
}

export interface ColorSwatch {
  name: string;
  hex: string;
  description: string;
}

export const weddingConfig = {
  // Couple Information
  couple: {
    bride: {
      firstName: "Evelyn",
      middleName: "Rose",
      lastName: "Vance",
      fullName: "Evelyn Rose Vance",
      parents: "Daughter of Mr. Arthur & Mrs. Clara Vance",
      bio: "An architect with a passion for classical gardens, fine art, and quiet morning coffees."
    },
    groom: {
      firstName: "Alexander",
      middleName: "James",
      lastName: "Sterling",
      fullName: "Alexander James Sterling",
      parents: "Son of Dr. Jonathan & Mrs. Eleanor Sterling",
      bio: "A landscape designer and cellist who finds boundless beauty in nature and timeless melodies."
    },
    monogram: "E & A",
    invitationLine: "Together with their loving families",
    actionLine: "request the pleasure of your company to celebrate their marriage",
    romanticQuote: "Two hearts, one beautiful journey under the blossom trees.",
    loveQuoteFull: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    quoteAuthor: "Maya Angelou",
  },

  // Wedding Date & Time
  date: {
    // Target date for countdown (Set in future: August 29, 2026 at 15:30)
    targetISO: "2026-08-29T15:30:00+02:00",
    day: "29",
    month: "AUGUST",
    year: "2026",
    dayOfWeek: "SATURDAY",
    formattedDate: "Saturday, August 29, 2026",
    timeDisplay: "Three o'clock in the afternoon",
    receptionTime: "Five o'clock in the evening",
  },

  // Primary Venue Details
  venue: {
    name: "The Rosewood Blossom Estate & Conservatory",
    hall: "Grand Glass Orangery & Botanical Pavilions",
    address: "742 Blossom Hill Road, Cote d'Azur Valley, France",
    googleMapsUrl: "https://maps.google.com/?q=Chateau+de+Chantilly+France",
    appleMapsUrl: "http://maps.apple.com/?q=Chateau+de+Chantilly+France",
    parkingInfo: "Complimentary valet parking is provided at the main estate gates.",
    shuttleInfo: "Private luxury shuttles will depart from Hotel Le Jardin every 30 minutes starting at 2:00 PM.",
    dressCodeSummary: "Black Tie & Romantic Garden Formal",
  },

  // Wedding Events / Timeline
  events: [
    {
      id: "ceremony",
      time: "3:30 PM — 4:45 PM",
      title: "The Holy Matrimony Ceremony",
      subtitle: "Under the Ancient Blossom Tree",
      venue: "The Central Blossom Garden",
      address: "Rosewood Blossom Estate, Main Courtyard",
      description: "Exchange of vows and rings as flower petals drift gently on the summer breeze, accompanied by a live string quartet.",
      mapUrl: "https://maps.google.com/?q=Chateau+de+Chantilly+France",
      calendarData: {
        startDate: "20260829T133000Z",
        endDate: "20260829T144500Z",
        summary: "Evelyn & Alexander Wedding Ceremony",
        description: "Wedding ceremony under the blossom tree at Rosewood Blossom Estate.",
        location: "Rosewood Blossom Estate, 742 Blossom Hill Road",
      }
    },
    {
      id: "cocktail",
      time: "5:00 PM — 6:30 PM",
      title: "Champagne & Garden Hors D'oeuvres",
      subtitle: "Aperitifs & Golden Hour Melodies",
      venue: "The Rose Stone Terrace & Fountains",
      address: "West Wing Botanical Gardens",
      description: "Sip vintage Rosé champagne and signature botanic cocktails while enjoying acoustic jazz and panoramic sunset views.",
      mapUrl: "https://maps.google.com/?q=Chateau+de+Chantilly+France",
      calendarData: {
        startDate: "20260829T150000Z",
        endDate: "20260829T163000Z",
        summary: "Evelyn & Alexander Cocktail Reception",
        description: "Cocktail hour on the stone terrace.",
        location: "Rosewood Blossom Estate",
      }
    },
    {
      id: "dinner",
      time: "6:45 PM — 9:30 PM",
      title: "The Grand Wedding Banquet",
      subtitle: "Four-Course Gastronomic Dinner",
      venue: "The Crystal Glass Conservatory",
      address: "Grand Orangery Pavilion",
      description: "A candlelit feast beneath crystal chandeliers and floral arches, accompanied by heartfelt toasts and our first dance.",
      mapUrl: "https://maps.google.com/?q=Chateau+de+Chantilly+France",
      calendarData: {
        startDate: "20260829T164500Z",
        endDate: "20260829T193000Z",
        summary: "Evelyn & Alexander Wedding Dinner & Reception",
        description: "Grand dinner in the glass conservatory.",
        location: "Rosewood Blossom Estate",
      }
    },
    {
      id: "afterparty",
      time: "9:45 PM — 2:00 AM",
      title: "Dancing & Midnight Fireworks",
      subtitle: "Celebration Under the Stars",
      venue: "The Lantern Grove & Ballroom",
      address: "East Pavilion Estate",
      description: "Midnight champagne toast, artisan dessert stations, live band, and fireworks over the blossom lake.",
      mapUrl: "https://maps.google.com/?q=Chateau+de+Chantilly+France",
      calendarData: {
        startDate: "20260829T194500Z",
        endDate: "20260830T000000Z",
        summary: "Evelyn & Alexander Afterparty & Fireworks",
        description: "Dancing and fireworks celebration.",
        location: "Rosewood Blossom Estate",
      }
    }
  ] as EventItem[],

  // Our Story Chapters
  story: [
    {
      id: "chapter-1",
      year: "Spring 2021",
      title: "A Serendipitous Encounter",
      subtitle: "The Paris Botanical Gardens",
      narrative: "Under a canopy of blooming sakura blossoms, both reaching for the same botanical botany book in a quaint Latin Quarter bookstore. One shared smile turned into a four-hour stroll across the Seine.",
      image: assetUrl("/images/first_date.jpg")
    },
    {
      id: "chapter-2",
      year: "Autumn 2022",
      title: "The First Chapter",
      subtitle: "Roadtrips & Quiet Moments",
      narrative: "Countless shared sunrises, cooking experiments that turned into laughter, and discovering that home isn't a place, but a person.",
      image: assetUrl("/images/couple_portrait.jpg")
    },
    {
      id: "chapter-3",
      year: "Spring 2025",
      title: "The Proposal",
      subtitle: "A Lantern-Lit Sanctuary",
      narrative: "Surrounded by hundreds of glowing lanterns and blooming cherry branches at dusk, Alexander knelt down with a vintage heirloom ring. Through joyful tears, Evelyn said 'A thousand times, yes!'",
      image: assetUrl("/images/proposal.jpg")
    },
    {
      id: "chapter-4",
      year: "August 2026",
      title: "Forever Begins",
      subtitle: "Our Wedding Day",
      narrative: "Surrounded by our dearest family and cherished friends, we step hand-in-hand into the grandest adventure of our lives.",
      image: assetUrl("/images/reception.jpg")
    }
  ] as StoryChapter[],

  // Gallery Photos
  gallery: [
    {
      id: "gal-1",
      src: assetUrl("/images/couple_portrait.jpg"),
      alt: "Evelyn & Alexander Fine Art Portrait",
      caption: "Eternal Embrace beneath the Blossom Tree",
      category: "portraits"
    },
    {
      id: "gal-2",
      src: assetUrl("/images/hero_tree.jpg"),
      alt: "The Grand Estate & Garden Pathway",
      caption: "The Rosewood Blossom Grounds at Golden Hour",
      category: "venue"
    },
    {
      id: "gal-3",
      src: assetUrl("/images/proposal.jpg"),
      alt: "Lantern-lit Proposal Evening",
      caption: "The Twilight Lantern Proposal",
      category: "moments"
    },
    {
      id: "gal-4",
      src: assetUrl("/images/reception.jpg"),
      alt: "Grand Glass Conservatory Tablescape",
      caption: "Crystal Chandeliers & Candlelit Banquet",
      category: "venue"
    },
    {
      id: "gal-5",
      src: assetUrl("/images/details.jpg"),
      alt: "Handcrafted Wedding Rings & Letterpress Calligraphy",
      caption: "Heirloom Gold Rings on Blush Velvet",
      category: "details"
    },
    {
      id: "gal-6",
      src: assetUrl("/images/first_date.jpg"),
      alt: "Spring Blossom Stroll in Bloom",
      caption: "Laughter in the Sun-Dappled Garden",
      category: "moments"
    }
  ] as GalleryPhoto[],

  // Dress Code Palette
  dressCode: {
    title: "Black Tie & Romantic Garden Formal",
    subtitle: "Inspired by Soft Blossoms & Natural Elegance",
    gentlemen: "Tailored Tuxedo, Velvet Dinner Jacket, or Classic Dark Suit with bow tie.",
    ladies: "Floor-length evening gowns or elevated cocktail attire in soft pastel tones, floral textures, or neutral hues.",
    notes: "We kindly request our guests avoid stark white or bright neon colors.",
    colorPalette: [
      { name: "Blush Rose", hex: "#E8C5C8", description: "Delicate spring petal tone" },
      { name: "Dusty Peony", hex: "#D69F9F", description: "Warm romantic rose" },
      { name: "Champagne", hex: "#F3E7D3", description: "Soft shimmering neutral" },
      { name: "Muted Sage", hex: "#9EADA0", description: "Natural botanical green" },
      { name: "Midnight Charcoal", hex: "#2C2627", description: "Classic formal contrast" },
    ] as ColorSwatch[]
  },

  // Blessings & Gift Registry
  registry: {
    message: "Your presence, love, and warm wishes are the greatest gift we could ever receive.",
    submessage: "For those who have kindly asked for registry details or wish to contribute to our honeymoon dream voyage to Japan's cherry blossom gardens, we have established a couple's fund.",
    funds: [
      {
        title: "Honeymoon In Kyoto Fund",
        accountName: "Evelyn & Alexander Wedding",
        iban: "FR76 3000 4000 5000 6000 7000 890",
        swift: "BNPAFRPPXXX",
        description: "For traditional ryokan stays & temple garden tours"
      },
      {
        title: "New Home & Garden Sanctuary",
        accountName: "Alexander Sterling & Evelyn Vance",
        zelleOrUpi: "love@evelyn-alexander.com",
        description: "For our greenhouse restoration & botanic library"
      }
    ]
  },

  // RSVP Configuration
  rsvp: {
    deadlineDate: "July 15, 2026",
    dietaryOptions: [
      "No specific restrictions",
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Pescatarian",
      "Nut Allergy",
      "Halal / Kosher"
    ],
    maxGuestsPerInvite: 4,
    contactEmail: "concierge@evelyn-alexander.wedding",
  },

  // Audio / Music Settings
  audio: {
    enabled: true,
    songTitle: "Night Changes",
    artist: "One Direction",
    // Can be replaced with any direct MP3 URL. If null or not reachable, the Web Audio Synth plays smoothly.
    customAudioUrl: One__Direction,
  }
};
