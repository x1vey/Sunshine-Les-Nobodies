// Central content + links for Sunshine Monie El — Les Nobodies Business LLC
// All copy sourced from /requirements (Req.txt + service flyers 1, 2, 3).

export const links = {
  whatsapp:
    "https://api.whatsapp.com/send/?phone=16096685479&text&type=phone_number&app_absent=0",
  // 33-minute free consultation booking
  consultation: "https://calendar.app.google/Rh6T1SWYZnuUh4G48",
  // Full appointment schedule
  calendar:
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01xXUbRrnSwAi-w35gbGcDhNhWK-euODF9hWyk6j_I85TyG5ek3kOWAZcs40FudEEMJp3ohJCc",
  youtube: "https://youtube.com/@lesnobodies1465",
  email: "lesnobodies@gmail.com",
  phone: "609-817-3126",
  phoneHref: "tel:+16098173126",
  maps: "https://www.google.com/maps/place/Les+Nobodies+Business+LLC/@46.423669,-129.9427085,3z/data=!3m1!4b1!4m6!3m5!1s0x886e9eb73b931b83:0xaff837fbe096ae7e!8m2!3d46.423669!4d-129.9427086!16s%2Fg%2F11pdw2800p!18m1!1e1",
  // Write-a-review deep link (Google place id for Les Nobodies Business LLC)
  writeReview:
    "https://search.google.com/local/writereview?placeid=ChIJgxuTO7ebboYRfq6W4Ps3-K8",
  googleProfile:
    "https://www.google.com/maps/place/?q=place_id:ChIJgxuTO7ebboYRfq6W4Ps3-K8",
  instagramHandle: "@sunshinemonieel",
};

export const business = {
  coach: "Sunshine Monie El",
  fullName: "Minister Sunshine Monié El",
  legal: "Les Nobodies Business LLC",
  ministry: "Kosmic Nobodies Ministries",
  tagline: "Energy Awareness Coach",
  motto: "Promoting Unity Among Everyone",
  greeting: "Peace Peace Yaw!",
};

// Mission statement (from mission.txt)
export const mission =
  "Les Nobodies Business and Kosmic Nobodies Ministries were manifested with the intention of using esoteric knowledge to enlighten and align individuals interested in using metaphysical arts and wellness techniques to heal from past traumatic experiences, be aware of their present energy exchanges, and prepare and plan for their future goals and milestones in life successfully and with confidence.";

// About-me copy (from mission.txt), split into paragraphs for layout.
export const aboutMe = {
  greeting: "Peace Peace Yaw!",
  paragraphs: [
    "I am Minister Sunshine Monié El. I am agape in human form, learning to exercise my greatest superpower on this plane: unconditional love. Like many others, I have had my fair share of traumatic, challenging experiences that made me question my love for myself, others, and life in general.",
    "I spent so much time studying religions, spiritual practices, psychology, and behavioral sciences to figure out how to heal myself and keep moving forward in life. What helped me the most was learning that all of this knowledge was already within me — I just had to find the right keys to unlock it.",
    "I strive to assist others who are looking for the keys to unlock healing, confidence, and love in their lives. This is not only my profession, but also my purpose and passion.",
  ],
  closing:
    "I am elated to assist you in finding your keys to your light. Together we illuminate stratosphere.",
};

export const identityBadges = [
  "Black-Owned",
  "LGBTQ+ Friendly",
  "Women-Owned",
  "Disability-Owned",
  "Indigenous-Owned",
];

// The three headline services shown on the home page.
export const mainServices = [
  {
    slug: "readings",
    eyebrow: "Best Seller",
    title: "Readings",
    summary:
      "One-time readings presented in a Google slide with attached voice notes for you to keep and replay — accompanied with up to 66 mins of clarity therapy thereafter.",
    points: [
      "Tarot readings are donation based",
      "Astrology readings starting at $44",
      "Numerology / Gematria readings starting at $22",
    ],
    priceFrom: "From $22",
  },
  {
    slug: "therapy",
    eyebrow: "Astro Chakra",
    title: "Therapy",
    summary:
      "Astro Chakra therapy sessions focusing on one chakra, sefirot, or ntr per session — bringing you to healing and awareness on an astrology and psychology level.",
    points: [
      "Art therapy exercises & journal prompts included",
      "$44 for 33-min · $77 for 66-min · $111 for 99-min sessions",
      "Discounts on products & events included in sessions",
    ],
    priceFrom: "From $44",
  },
  {
    slug: "workshops",
    eyebrow: "Group & Team",
    title: "Workshops",
    summary:
      "33 to 99 minute bookings available, with pricing that varies for your needs. Workshops specialize in empowering people through the 7 stages of development / chakras.",
    points: [
      "Art therapy exercises incorporated",
      "Energy awareness for conflict prevention & resolution",
      "Great for team building",
    ],
    priceFrom: "Custom pricing",
  },
] as const;

// ---- Catalogue (detail page) data ----

export const astroChakraTiers = [
  {
    tier: "Tier One",
    price: "$44",
    items: [
      "One chakra of your choice in a presentation emailed to you",
      "OR a Retrograde reading",
      "OR a Life Path reading",
    ],
  },
  {
    tier: "Tier Two",
    price: "$111",
    items: [
      "A full 7-chakra chart reading in a short presentation with any of the astrology charts",
      "33 mins of clarity therapy",
    ],
  },
  {
    tier: "Tier Three",
    price: "$222",
    items: [
      "PowerPoint presentation with voice notes of your full astro chart",
      "OR full Numerology & Gematria PowerPoint reading with voice notes",
    ],
  },
  {
    tier: "Tier Four",
    price: "$444",
    items: [
      "Pre-recorded video of 3 astro charts with transit chart & tarot cards, plus your PowerPoint as a PDF",
      "OR a recorded live FaceTime reading",
    ],
  },
  {
    tier: "Tier Five",
    price: "$1111",
    items: [
      "Full Numerology & Gematria & Astro chart with Tarot",
      "181 clarity therapy minutes",
      "Les Nobodies care package mailed with a physical flash drive and booklet of your chart",
    ],
  },
] as const;

export const numerologyOptions = [
  {
    option: "Option 1",
    price: "$33",
    desc: "Current personal month & year + tarot spread",
  },
  {
    option: "Option 2",
    price: "$66",
    desc: "Option 1 + Life Path & birth-day reading for personal days forecast",
  },
  {
    option: "Option 3",
    price: "$111",
    desc: "Full panel numerology reading",
  },
  {
    option: "Option 4",
    price: "$222",
    desc: "Full panel numerology reading (relationship with time & space) + Gematria reading (inner self)",
  },
] as const;

export const astroCharts = [
  { name: "Tropical", desc: "How you think you are" },
  { name: "Vedic", desc: "How you feel you are" },
  { name: "Draconic", desc: "Your soul and past lives" },
  { name: "Natal", desc: "Your chart at birth" },
  { name: "Progressive", desc: "Your changes from birth to present" },
  { name: "Nakshatras", desc: "Your physical self and events" },
  { name: "Numerology & Gematria", desc: "Chart reading of self" },
  {
    name: "Astrocartography",
    desc: "Your experiences and connections across the map as we know it",
  },
] as const;

export const therapyDetails = {
  intro:
    "Astro Chakra therapy sessions are held in a motivational therapy setting. We address each celestial placement in your chakras thoroughly across all of your charts — bringing you to healing and awareness of all facets of self on an astrology and psychology level.",
  sessions: [
    { length: "33 minutes", price: "$44" },
    { length: "66 minutes", price: "$77" },
    { length: "99 minutes", price: "$111" },
  ],
  notes: [
    "Natal Chakra Therapy sessions are 66-minute sessions, focused on one sphere (NTR) per chakra per session.",
    "99-min consults after receipt of a reading can be broken into 2× 45-min or 3× 33-min sessions, however you wish to use them.",
    "Minutes never expire and accumulate in your minutes bank as you continue to get readings.",
    "Art therapy exercises and journal prompts are included in each session.",
    "Discounts on products & events are included in sessions.",
  ],
} as const;

export const workshopDetails = {
  intro:
    "Workshops specialize in empowering people through the 7 stages of development and chakras, incorporating art therapy exercises throughout.",
  points: [
    "33 to 99 minute bookings available — pricing varies for your needs",
    "Art therapy exercises are incorporated",
    "Assisting with energy awareness during conflict prevention & resolution",
    "Great for team building",
  ],
} as const;

export const addOns = [
  "Synastry charts of self & others are available +$55 / chart",
  "Motivational / art therapy sessions are $77 / 99 min, focused on one sphere (NTR) per chakra per session",
  "Tarot spreads start @ $22",
  "We barter · Payment plans welcomed",
];

// ---- Reviews ----
// Real Google reviews for Les Nobodies Business LLC (from requirements/reviews.txt).
export const reviewsMeta = {
  rating: 5.0,
  source: "Google",
  count: 3 as number | null,
};

export type Review = {
  name: string;
  rating: number;
  date: string;
  text: string;
  reviewerMeta?: string;
};

export const reviews: Review[] = [
  {
    name: "JusticeGalore",
    rating: 5,
    date: "a year ago",
    reviewerMeta: "1 review",
    text: "Every time I attended a Nobodies Event I enjoyed the effort, professionalism and the overall atmosphere of freedom and creativity. As an orator and an ultimate engaging person, Sunshine has held workshops providing practical tools to help people navigate subjects from diet to manifestation. As a jeweler her eye for artistic design shines through. I purchased two rings and a necklace — very nice. I am constantly complimented for the pieces I bought. Thank you Sunshine. Not a dollar wasted. #galore",
  },
  {
    name: "Katrina Durant",
    rating: 5,
    date: "6 months ago",
    reviewerMeta: "16 reviews · 1 photo",
    text: "Les Nobodies is extraordinary. Sunshine, the heart behind it, is a spiritual savant whose presence radiates love, healing, and expansion. Whether through her healing jewelry, soulful teachings, workshops, spiritual guidance, astrological navigation, or intuitive insights, every interaction with Sunshine has been a true blissing and a powerful elevation of my spirit.",
  },
  {
    name: "Mel Bey",
    rating: 5,
    date: "a year ago",
    reviewerMeta: "8 reviews",
    text: "The services that I have received from Les Nobodies' Creatress, Sunshine El, over the years have been right and exact. Sunshine's readings that I've received were everything that I expected from someone as knowledgeable as Sunshine El. The way that she articulates the positions / locations of the stars, the location of planets, and earth's vibrational frequency is unmatched.",
  },
];
