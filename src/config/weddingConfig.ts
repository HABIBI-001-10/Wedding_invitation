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
      firstName: "Aswathi",
      middleName: "",
      lastName: "A",
      fullName: "Aswathi A",
      parents: "Daughter of Mr. Manikandan & Mrs. Anitha K S",
      bio: "A Business Development Executive who brings warmth, ambition, and a thoughtful spirit to every chapter of life."
    },
    groom: {
      firstName: "Habeeb",
      middleName: "",
      lastName: "T",
      fullName: "Habeeb T",
      parents: "Son of Sidhik T & Mrs. Shameera P",
      bio: "An AI Engineer passionate about technology, innovation, and building a meaningful future together."
    },
    monogram: "H & A",
    invitationLine: "Together with their loving families",
    actionLine: "request the pleasure of your company to celebrate their marriage",
    romanticQuote: "Two hearts, one beautiful journey under the blossom trees.",
    loveQuoteFull: "What began as a college friendship grew into a love strong enough to bring two worlds, two traditions, and two families together",
    quoteAuthor: "Habeeb & Aswathi",
  },

  // Wedding Date & Time
  date: {
    // Target date for countdown (Set in future: December 21, 2028 at 10:00)
    targetISO: "2028-12-21T10:00:00+05:30",
    day: "21",
    month: "DECEMBER",
    year: "2028",
    dayOfWeek: "THURSDAY",
    formattedDate: "Thursday, December 21, 2028",
    timeDisplay: "Nikah Ceremony",
    receptionTime: "Friday evening, December 22, 2028",
  },

  // Primary Venue Details
  venue: {
    name: "Kumarakom Lake Resort",
    hall: "Luxury Lakeside Destination Wedding",
    address: "Kumarakom, Kottayam, Kerala, India",
    googleMapsUrl: "https://maps.google.com/?q=Kumarakom+Lake+Resort+Kerala",
    appleMapsUrl: "http://maps.apple.com/?q=Kumarakom+Lake+Resort+Kerala",
    parkingInfo: "Complimentary parking facilities are available for wedding guests.",
    shuttleInfo: "Guest transportation details will be shared closer to the wedding.",
    dressCodeSummary: "Elegant Traditional & Destination Wedding Formal",
  },

  // Wedding Events / Timeline
  events: [
    {
      id: "nikah",
      time: "December 21, 2028",
      title: "The Nikah Ceremony",
      subtitle: "A Sacred Beginning to Forever",
      venue: "Guruvayur",
      address: "Guruvayur, Thrissur, Kerala, India",
      description: "A heartfelt Nikah ceremony marking the beginning of Habeeb and Aswathi's journey together, bringing two families and two traditions together with love and respect.",
      mapUrl: "https://maps.google.com/?q=Guruvayur+Kerala",
      calendarData: {
        startDate: "20281221T043000Z",
        endDate: "20281221T063000Z",
        summary: "Habeeb & Aswathi Nikah Ceremony",
        description: "Nikah ceremony for Habeeb and Aswathi in Guruvayur.",
        location: "Guruvayur, Thrissur, Kerala, India",
      }
    },
    {
      id: "reception",
      time: "December 22, 2028 — Evening",
      title: "The Destination Wedding Reception",
      subtitle: "Love by the Backwaters",
      venue: "Kumarakom Lake Resort",
      address: "Kumarakom, Kottayam, Kerala, India",
      description: "An elegant destination celebration by the Kerala backwaters, bringing family and friends together for an evening of dinner, music, laughter, and unforgettable memories.",
      mapUrl: "https://maps.google.com/?q=Kumarakom+Lake+Resort+Kerala",
      calendarData: {
        startDate: "20281222T133000Z",
        endDate: "20281222T183000Z",
        summary: "Habeeb & Aswathi Wedding Reception",
        description: "Destination wedding reception at Kumarakom Lake Resort.",
        location: "Kumarakom Lake Resort, Kumarakom, Kerala, India",
      }
    }
  ] as EventItem[],

  // Our Story Chapters
  story: [
    {
      id: "chapter-1",
      year: "College Days",
      title: "Where It All Began",
      subtitle: "A College Love Story",
      narrative: "Two people from different backgrounds met during their college years. What began with conversations, friendship, and shared moments slowly became a love neither of them could imagine living without.",
      image: assetUrl("/images/college.jpeg")
    },
    {
      id: "chapter-2",
      year: "The Journey",
      title: "Two Traditions, One Love",
      subtitle: "Growing Together",
      narrative: "Their journey brought together two families, two traditions, and two perspectives. Through every challenge and every beautiful moment, their love continued to grow with understanding, respect, and patience.",
      image: assetUrl("/images/beach.png")
    },
    {
      id: "chapter-3",
      year: "The Promise",
      title: "Choosing Forever",
      subtitle: "A Love Beyond Differences",
      narrative: "What started as a college romance became a promise to build a life together. Their story is a celebration of love that embraces differences while finding common ground in the things that matter most.",
      image: assetUrl("/images/proposal.png")
    },
    {
      id: "chapter-4",
      year: "December 2028",
      title: "Forever Begins",
      subtitle: "Habeeb & Aswathi",
      narrative: "On December 21, 2028, their journey enters a beautiful new chapter. With the Nikah in Guruvayur and a destination celebration by the Kerala backwaters, two hearts and two families come together as one.",
      image: assetUrl("/images/destination.jpg")
    }
  ] as StoryChapter[],

  // Gallery Photos
  gallery: [
    {
      id: "gal-1",
      src: assetUrl("/images/marraige.png"),
      alt: "Habeeb & Aswathi — A Love Story",
      caption: "Two Hearts, One Journey",
      category: "portraits"
    },
    {
      id: "gal-2",
      src: assetUrl("/images/destination.jpg"),
      alt: "Kerala Destination Wedding",
      caption: "A Celebration by the Backwaters",
      category: "venue"
    },
    {
      id: "gal-3",
      src: assetUrl("/images/proposal.png"),
      alt: "The Journey That Led to Forever",
      caption: "A Love That Chose Forever",
      category: "moments"
    },
    {
      id: "gal-4",
      src: assetUrl("/images/backwaters.jpg"),
      alt: "Destination Wedding Celebration",
      caption: "An Evening of Love & Togetherness",
      category: "venue"
    },
    {
      id: "gal-5",
      src: assetUrl("/images/card.png"),
      alt: "Details of a Beautiful Beginning",
      caption: "Symbols of Forever",
      category: "details"
    },
    {
      id: "gal-6",
      src: assetUrl("/images/college.jpeg"),
      alt: "Memories from Their College Days",
      caption: "Where Their Story Began",
      category: "moments"
    }
  ] as GalleryPhoto[],

  // Dress Code Palette
  dressCode: {
    title: "Elegant Traditional & Destination Wedding Formal",
    subtitle: "Inspired by Kerala's timeless beauty and the couple's two traditions",
    gentlemen: "Traditional Kerala attire, kurta, sherwani, or elegant formalwear.",
    ladies: "Kerala saree, elegant saree, lehenga, or graceful traditional formalwear.",
    notes: "Guests are warmly encouraged to celebrate the occasion in elegant traditional or formal attire.",
    colorPalette: [
      { name: "Kerala Ivory", hex: "#F4EBDD", description: "Warm traditional neutral" },
      { name: "Mullapoo White", hex: "#FFFDF7", description: "Soft jasmine-inspired white" },
      { name: "Backwater Green", hex: "#9EADA0", description: "Serene Kerala botanical tone" },
      { name: "Rose Gold", hex: "#D69F9F", description: "Warm romantic accent" },
      { name: "Deep Charcoal", hex: "#2C2627", description: "Elegant formal contrast" },
    ] as ColorSwatch[]
  },

  // Blessings & Gift Registry
  // Blessings & Gift Registry
registry: {
  message: "Your presence, love, and warm wishes are the greatest gift we could ever receive.",
  submessage: "For those who have kindly asked, we are dreaming of a romantic honeymoon in the Maldives — turquoise waters, sunset evenings, and a few peaceful days together by the sea.",
  funds: [
    {
      title: "Honeymoon in the Maldives Fund",
      accountName: "Habeeb & Aswathi Wedding",
      description: "For our dream honeymoon in the Maldives — island sunsets, overwater stays, and beautiful memories together.",
      iban: "",
      zelleOrUpi: ""
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
    maxGuestsPerInvite: 6,
    contactEmail: "concierge@aswathi-habeeb.wedding",
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
