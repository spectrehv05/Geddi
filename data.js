// ============================================================
// GEDDI / YAADEIN - data.js
// Every piece of user-facing text is { en: "...", hi: "..." }
// (hi = Hinglish in Roman script). The language toggle just
// picks which key to show.
// ============================================================

// ---------- 1. MOODS (9) ----------
// "theme" values will become CSS variables in Step 3
const MOODS = [
  { id: "chill",     label: { en: "Chill",     hi: "Chill Maar" },
    tagline: { en: "Slow down, nowhere to be.", hi: "Aaram se, koi jaldi nahi." },
    theme: { bg: "#E8F1F5", text: "#1F3A4D", accent: "#5B9BB5" } },

  { id: "romantic",  label: { en: "Romantic",  hi: "Date Wala" },
    tagline: { en: "Just the two of you.", hi: "Bas tum aur hum." },
    theme: { bg: "#FBE9EC", text: "#5A1F2E", accent: "#D4607A" } },

  { id: "foodie",    label: { en: "Foodie",    hi: "Khaana Peena" },
    tagline: { en: "Come hungry.", hi: "Bhookh leke aana." },
    theme: { bg: "#FFF1DC", text: "#4A2A0A", accent: "#E0801A" } },

  { id: "adventure", label: { en: "Adventure", hi: "Thoda Rush" },
    tagline: { en: "Get your heart racing.", hi: "Dhadkan tez karo." },
    theme: { bg: "#E6F0E0", text: "#1E3A1A", accent: "#4F8F2F" } },

  { id: "party",     label: { en: "Party",     hi: "Party Mode" },
    tagline: { en: "Lights down, volume up.", hi: "Light band, volume full." },
    theme: { bg: "#140B2E", text: "#F4EEFF", accent: "#FF2E93" } },

  { id: "peaceful",  label: { en: "Peaceful",  hi: "Sukoon" },
    tagline: { en: "Quiet places, clear head.", hi: "Shaanti chahiye." },
    theme: { bg: "#FFF3E0", text: "#5C3410", accent: "#E98A15" } },

  { id: "cultural",  label: { en: "Cultural",  hi: "Itihaas Wala" },
    tagline: { en: "Walk through history.", hi: "Dilli ki kahani." },
    theme: { bg: "#F3E9DD", text: "#3E2A1B", accent: "#A0522D" } },

  { id: "aesthetic", label: { en: "Aesthetic", hi: "Reel Ready" },
    tagline: { en: "Pretty spots, good light.", hi: "Photo achi aani chahiye." },
    theme: { bg: "#F7F2FA", text: "#3B2F4A", accent: "#9B7BC8" } },

  // The new mood: old-world + 90s nostalgia merged
  { id: "yaadein",   label: { en: "Yaadein",   hi: "Yaadein" },
    tagline: { en: "A little old, a little calm.", hi: "Thoda purana, thoda sukoon." },
    theme: { bg: "#2B0F10", text: "#F6E7C8", accent: "#E8A33D" } }
];

// ---------- 2. FILTERS ----------
const FILTERS = {
  who:    ["solo", "couple", "friends", "family", "genz"],
  budget: ["free", "under500", "under1500", "splurge"],
  time:   ["2hrs", "halfday", "fullday"],
  slot:   ["morning", "evening", "latenight"],
  area:   ["south", "central", "olddelhi", "gurgaon", "noida", "greaternoida", "ghaziabad", "westdelhi", "eastdelhi"]
};

// ---------- 3. PLACES ----------
// Sample entries only. Details (timings, metro, prices) must be
// verified on Google Maps before the site goes live.
const PLACES = [
  {
    id: "nizamuddin-dargah",
    name: "Nizamuddin Dargah",
    area: "south", city: "Delhi",
    moods: ["yaadein", "peaceful", "cultural"],
    who: ["solo", "friends", "couple"],
    budget: "free", time: "2hrs", slot: ["evening"],
    tags: ["live music", "heritage", "sufi"],
    bestTime: { en: "Evening after sunset, Thursdays are special", hi: "Sham ko sunset ke baad, Thursday sabse khaas" },
    etiquette: { en: "Cover your head, remove shoes, dress modestly.", hi: "Sir dhako, joote utaaro, simple kapde pehno." },
    desc: {
      en: "Qawwali under warm lights in lanes that feel centuries old.",
      hi: "Purani galiyon mein, peeli roshni ke neeche qawwali. Bas sunte jao."
    },
    metro: "Jangpura (Violet Line) - verify",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Nizamuddin+Dargah+Delhi",
    nearbyDo: [
      { name: "Humayun's Tomb", note: { en: "Golden hour walk", hi: "Golden hour mein ghoomo" } },
      { name: "Sunder Nursery", note: { en: "Gardens and monuments", hi: "Bagiche aur monuments" } }
    ],
    nearbyEat: [
      { name: "Karim's (Nizamuddin)", note: { en: "Kebabs and rumali roti", hi: "Kebab aur rumali roti" } }
    ]
  },

  {
    id: "lodhi-garden",
    name: "Lodhi Garden",
    area: "central", city: "Delhi",
    moods: ["chill", "romantic", "peaceful", "aesthetic"],
    who: ["solo", "couple", "friends", "family"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["garden", "tombs", "walk"],
    bestTime: { en: "Early morning or late afternoon", hi: "Subah jaldi ya dopahar ke baad" },
    etiquette: { en: "", hi: "" },
    desc: {
      en: "Tombs, big trees and long walks. Delhi's easiest reset.",
      hi: "Maqbare, bade ped, lambi walk. Dilli ka sabse easy reset."
    },
    metro: "Jor Bagh (Yellow Line) - verify",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Lodhi+Garden+Delhi",
    nearbyDo: [
      { name: "Khan Market", note: { en: "Bookshops and browsing", hi: "Books aur window shopping" } },
      { name: "Safdarjung Tomb", note: { en: "Quieter, less crowded", hi: "Kam bheed, zyada shaanti" } }
    ],
    nearbyEat: [
      { name: "Khan Market cafes", note: { en: "Plenty of options for every budget", hi: "Har budget ke options" } }
    ]
  },

  {
    id: "indian-coffee-house-cp",
    name: "Indian Coffee House, Connaught Place",
    area: "central", city: "Delhi",
    moods: ["yaadein", "chill", "cultural"],
    who: ["solo", "friends", "couple"],
    budget: "under500", time: "2hrs", slot: ["morning", "evening"],
    tags: ["old-school", "cafe", "heritage"],
    bestTime: { en: "Late afternoon", hi: "Dopahar ke baad" },
    etiquette: { en: "", hi: "" },
    desc: {
      en: "Old-school coffee house with slow fans, filter coffee and long chats.",
      hi: "Purani style ka coffee house. Filter coffee, dheeme pankhe, lambi baatein."
    },
    metro: "Rajiv Chowk (Yellow/Blue Line) - verify",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Indian+Coffee+House+Connaught+Place",
    nearbyDo: [
      { name: "Janpath market", note: { en: "Street shopping", hi: "Street shopping" } },
      { name: "Central Park, CP", note: { en: "Sit and people-watch", hi: "Baithke logon ko dekho" } }
    ],
    nearbyEat: [
      { name: "Wenger's", note: { en: "Classic bakery, patties and pastries", hi: "Purani bakery, patties aur pastries" } }
    ]
  }
];


// ---------- 4. SITE SETTINGS ----------
// feedbackUrl: where people report wrong info. Examples:
//   "https://wa.me/91XXXXXXXXXX?text=Geddi%20feedback"   (WhatsApp)
//   "mailto:you@example.com?subject=Geddi%20feedback"     (email)
// Leave "" and the link stays hidden.
const SITE = {
  feedbackUrl: "",
  updated: "October 2026"
};
