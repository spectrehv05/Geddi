// ============================================================
// places-batch3.js - Batch 3: what's NEW and trending (Sept/Oct 2026)
// Researched from LBB (Delhi NCR new openings list) and Curly Tales
// (October 2026 openings), plus Wikipedia for Nisaba.
// Load AFTER places-batch2.js. Reuses b(), gmap(), n().
// Budget = rough cost PER PERSON bucket. "Price for two" in notes is
// from the source articles. Verify hours, prices and that each place
// is still open before launch - new places change fast.
// ============================================================

// small helper to upgrade an older place already in PLACES
const patch = (id, fn) => { const p = PLACES.find((x) => x.id === id); if (p) fn(p); };

// ---------- 1. Upgrade older entries with new spots ----------
patch("sunder-nursery", (p) => { p.nearbyEat = [
  n("Perch (Sunder Nursery)", "Slow-living cafe, pale wood, good for picnics", "Aaram wala cafe, picnic ke liye perfect"),
  n("Cortasso Coffee & Bake House", "Garden views, bakes and coffee", "Bagiche ke view ke saath coffee aur bakes")
]; });
patch("humayuns-tomb", (p) => { p.nearbyEat.push(n("Nisaba (inside the museum complex)", "Chef Manish Mehrotra's new restaurant, opened Jan 2026", "Chef Manish Mehrotra ka naya restaurant, Jan 2026 mein khula")); });
patch("hauz-khas-village", (p) => { p.nearbyEat.push(n("Raiya (Hauz Khas Market)", "Royal-themed new fine dining", "Shahi theme wala naya fine dining")); });
patch("connaught-place", (p) => { p.nearbyEat.push(n("Roma by Unplugged", "Roman-style spot with a big outdoor area", "Roman style, bada outdoor area")); });
patch("cyber-hub", (p) => { p.nearbyEat.push(n("Wagamama", "London's ramen-bar brand, its first Delhi-NCR branch", "London ka ramen brand, Delhi-NCR ka pehla outlet")); });

// ---------- 2. New places ----------
PLACES.push(

  // ================= DELHI =================
  {
    id: "lodhi-art-district-cafes", name: "Lodhi Colony and Meherchand Market",
    area: "south", city: "Delhi",
    moods: ["aesthetic", "chill", "romantic", "foodie"],
    who: ["friends", "couple", "genz", "solo"],
    budget: "under1500", time: "halfday", slot: ["morning", "evening"],
    tags: ["new cafes", "street art", "glass cafe"],
    bestTime: b("Weekday afternoons, weekends get crowded", "Weekday dopahar, weekend pe bheed"),
    etiquette: b("Check each place's timings, many close in the afternoon - verify.", "Har jagah ka time check karo, kuch dopahar mein band hote hain."),
    desc: b("Murals outside, glass cafes and gelato inside. Delhi's newest cafe-hopping lane.", "Bahar murals, andar glass cafe aur gelato. Dilli ki nayi cafe-hopping gali."),
    metro: "JLN Stadium or Jor Bagh + auto - verify",
    mapLink: gmap("Meherchand Market Lodhi Colony Delhi"),
    nearbyDo: [n("Lodhi Garden", "Walk before or after", "Pehle ya baad mein walk"), n("Lodhi Art District murals", "Free open-air street art", "Free open-air street art")],
    nearbyEat: [
      n("Ate Glasshouse", "Layered glass cafe and art space", "Glass cafe aur art space"),
      n("LoCol by Subko", "Specialty coffee, cacao and bakes", "Specialty coffee aur bakes"),
      n("Cafe Dali / Dali Dolci", "Gelato, croissants and warm lights", "Gelato aur croissant")
    ]
  },

  {
    id: "rasayyah", name: "Rasayyah",
    area: "south", city: "Delhi",
    moods: ["foodie", "yaadein", "romantic"],
    who: ["couple", "family", "friends"],
    budget: "under1500", time: "2hrs", slot: ["evening"],
    tags: ["awadhi", "fine dining", "new"],
    bestTime: b("Dinner, book ahead", "Dinner, pehle book karo"),
    etiquette: b("Reported about ₹2,500 for two - verify.", "Do logon ka lagbhag ₹2,500 bataya gaya hai - confirm karo."),
    desc: b("Awadhi and Banarasi flavours in a royal setting, right in the cafe-hopping lane.", "Awadhi aur Banarasi swaad, shahi andaaz mein."),
    metro: "JLN Stadium or Jor Bagh + auto - verify",
    mapLink: gmap("Rasayyah Meherchand Market Lodhi Colony"),
    nearbyDo: [n("Lodhi Garden", "Evening walk after dinner", "Dinner ke baad walk")],
    nearbyEat: [n("Dali Dolci", "Gelato to finish", "Aakhir mein gelato")]
  },

  {
    id: "gk2-m-block-market", name: "GK-2 M Block Market",
    area: "south", city: "Delhi",
    moods: ["foodie", "party", "aesthetic", "chill"],
    who: ["friends", "genz", "couple"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["new openings", "cocktails", "dosa"],
    bestTime: b("Evening, expect waits at the hyped places", "Sham ko, hype wali jagahon pe wait"),
    etiquette: b("Benne is closed on Mondays and has a break in the afternoon - verify.", "Benne Monday ko band aur dopahar mein break - confirm karo."),
    desc: b("A market full of new openings: coffee, eggless desserts, pizza, dosas and a 42-foot bar.", "Naye openings ka bazaar: coffee, eggless dessert, pizza, dosa aur 42-foot ka bar."),
    metro: "Cab or auto recommended - verify",
    mapLink: gmap("GK 2 M Block Market Delhi"),
    nearbyDo: [n("Chittaranjan Park market", "Short ride, Bengali food", "Thodi door, Bengali khaana")],
    nearbyEat: [
      n("Refuge", "Coffee by day, big cocktail bar at night", "Din mein coffee, raat ko bada bar"),
      n("Benne", "Bangalore-style butter dosa, very hyped", "Bangalore ka benne dosa, bahut hype"),
      n("Libertario Coffee", "Colombian-style coffee and croissants", "Colombian coffee aur croissant")
    ]
  },

  {
    id: "nisaba", name: "Nisaba, Humayun's Tomb Museum Complex",
    area: "south", city: "Delhi",
    moods: ["romantic", "yaadein", "cultural", "foodie"],
    who: ["couple", "family", "friends"],
    budget: "splurge", time: "2hrs", slot: ["evening"],
    tags: ["fine dining", "heritage view", "chef manish mehrotra"],
    bestTime: b("Dinner, pair with a golden-hour walk", "Dinner, saath mein golden hour walk"),
    etiquette: b("Opened January 2026. Reserve ahead, check prices - verify.", "Jan 2026 mein khula. Pehle reserve karo, price confirm karo."),
    desc: b("Chef Manish Mehrotra's first independent restaurant, inside the Humayun's Tomb museum complex.", "Chef Manish Mehrotra ka pehla apna restaurant, Humayun ke maqbare ke museum complex mein."),
    metro: "JLN Stadium (Violet Line) - verify",
    mapLink: gmap("Nisaba Humayun's Tomb Museum Delhi"),
    nearbyDo: [n("Humayun's Tomb", "Walk it before dinner", "Dinner se pehle ghoom lo"), n("Sunder Nursery", "Gardens next door", "Saath mein bagiche")],
    nearbyEat: [n("Perch (Sunder Nursery)", "Casual coffee option", "Casual coffee")]
  },

  {
    id: "ambawatta-one-mehrauli", name: "Ambawatta One, Mehrauli",
    area: "south", city: "Delhi",
    moods: ["romantic", "party", "aesthetic"],
    who: ["couple", "friends", "genz"],
    budget: "splurge", time: "halfday", slot: ["evening", "latenight"],
    tags: ["qutub view", "rooftop dining", "cocktails"],
    bestTime: b("Evening, for the Qutub Minar view", "Sham ko, Qutub Minar ke view ke liye"),
    etiquette: b("Pendulo (Indian-Mexican tasting menu) is very high end. Mi Piaci is cheaper. Verify prices.", "Pendulo bahut mehnga hai, Mi Piaci kam. Price confirm karo."),
    desc: b("Premium dining complex with a view of Qutub Minar. Pasta, tasting menus and cocktails.", "Qutub Minar ke view wala premium dining complex. Pasta, tasting menu aur cocktails."),
    metro: "Qutub Minar (Yellow Line) + auto - verify",
    mapLink: gmap("Ambawatta One Mehrauli Delhi"),
    nearbyDo: [n("Qutub Minar", "Visit in daylight first", "Pehle din mein dekho"), n("Mehrauli Archaeological Park", "Ruins walk", "Khandharon ki walk")],
    nearbyEat: [n("Mi Piaci", "Live pasta station, Italian", "Live pasta station, Italian")]
  },

  {
    id: "dramique-vasant-kunj", name: "Dramique, Vasant Kunj",
    area: "south", city: "Delhi",
    moods: ["party", "romantic"],
    who: ["friends", "couple", "genz"],
    budget: "splurge", time: "halfday", slot: ["latenight"],
    tags: ["theatrical dining", "performances", "late night"],
    bestTime: b("Opens late (about 9:30 PM), good for special occasions", "Raat 9:30 ke aas-paas khulta hai, special occasion ke liye"),
    etiquette: b("Reported about ₹10,000 for two - verify.", "Do logon ka lagbhag ₹10,000 bataya gaya hai - confirm karo."),
    desc: b("Dinner with live performances and storytelling. Not your usual outing.", "Live performances aur storytelling ke saath dinner. Roz wala plan nahi."),
    metro: "Cab recommended - verify",
    mapLink: gmap("Dramique Ambience Island Vasant Kunj"),
    nearbyDo: [n("Ambience Mall Vasant Kunj", "Shops and a movie", "Shopping aur movie")],
    nearbyEat: [n("DLF Promenade restaurants", "Many options nearby", "Paas mein kai options")]
  },

  {
    id: "flurys-green-park", name: "Flurys Tea Room, Green Park",
    area: "south", city: "Delhi",
    moods: ["yaadein", "chill", "foodie"],
    who: ["family", "couple", "friends", "solo"],
    budget: "under500", time: "2hrs", slot: ["morning", "evening"],
    tags: ["old-world tearoom", "rum balls", "since 1927"],
    bestTime: b("Breakfast or evening tea", "Breakfast ya sham ki chai"),
    etiquette: b("Slated to open in October 2026. Check that it has opened - verify.", "October 2026 mein khulne wala tha. Check karo ki khula ya nahi."),
    desc: b("Kolkata's near-century-old tearoom. Rum balls, plum cake and patties, old-world style.", "Kolkata ka lagbhag sau saal purana tearoom. Rum ball, plum cake aur patties."),
    metro: "Green Park (Yellow Line) - verify",
    mapLink: gmap("Flurys Green Park Delhi"),
    nearbyDo: [n("Hauz Khas Village", "Short ride away", "Thodi door")],
    nearbyEat: [n("Cafe Amudham", "Benne dosa and filter coffee", "Benne dosa aur filter coffee")]
  },

  // ================= GURGAON =================
  {
    id: "oberoi-gurgaon-madam-chow", name: "The Oberoi Gurgaon: Madam Chow and Lord Vesper",
    area: "gurgaon", city: "Gurgaon",
    moods: ["romantic", "party", "foodie"],
    who: ["couple", "friends"],
    budget: "splurge", time: "halfday", slot: ["evening", "latenight"],
    tags: ["dim sum", "hotel bar", "glass pavilion"],
    bestTime: b("Dinner at Madam Chow, then drinks at Lord Vesper", "Madam Chow mein dinner, phir Lord Vesper mein drinks"),
    etiquette: b("Dim lighting, upscale crowd. Reported about ₹7,000 for two - verify.", "Dheemi roshni, upscale crowd. Do logon ka lagbhag ₹7,000 - confirm karo."),
    desc: b("Refined dim sum in a glass pavilion by a reflective pool, plus a moody new hotel bar.", "Glass pavilion mein dim sum, paani ke kinare, aur ek moody naya bar."),
    metro: "Cab recommended - verify",
    mapLink: gmap("The Oberoi Gurgaon Udyog Vihar"),
    nearbyDo: [n("Cyber Hub", "Short drive for a walk", "Thodi door walk ke liye")],
    nearbyEat: [n("Lord Vesper", "Outdoor seating, classic cocktails", "Outdoor seating, classic cocktails")]
  },

  {
    id: "oju-gurgaon", name: "OJU by Neuma, DLF Phase 5",
    area: "gurgaon", city: "Gurgaon",
    moods: ["party", "romantic"],
    who: ["friends", "couple", "genz"],
    budget: "splurge", time: "halfday", slot: ["evening", "latenight"],
    tags: ["japanese-inspired", "cocktails", "late night"],
    bestTime: b("Late dinner, opens around 7:30 PM", "Late dinner, shaam 7:30 ke aas-paas khulta hai"),
    etiquette: b("Reported about ₹5,000 for two - verify.", "Do logon ka lagbhag ₹5,000 - confirm karo."),
    desc: b("Cocktail-first dining with Japanese-inspired plates and minimalist interiors.", "Cocktail pehle, saath mein Japanese-style plates aur minimalist look."),
    metro: "Cab recommended - verify",
    mapLink: gmap("OJU by Neuma The Anya Hotel Golf Course Road Gurgaon"),
    nearbyDo: [n("Golf Course Road", "Late-night drive", "Late-night drive")],
    nearbyEat: [n("Nara Thai", "Thai dining nearby", "Paas mein Thai khaana")]
  },

  {
    id: "galleria-market-gurgaon", name: "Galleria Market, DLF Phase 4",
    area: "gurgaon", city: "Gurgaon",
    moods: ["foodie", "chill", "aesthetic", "party"],
    who: ["friends", "genz", "couple", "family"],
    budget: "under500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["cafes", "cookies", "late night"],
    bestTime: b("Evening, stays open late", "Sham ko, der tak khula rehta hai"),
    etiquette: b("Parking gets tight on weekends.", "Weekend pe parking mushkil."),
    desc: b("A neighbourhood market of cafes. Cookies, coffee and late-night snacks.", "Cafes ka bazaar. Cookies, coffee aur late-night snacks."),
    metro: "Cab recommended, nearest Rapid Metro or Yellow Line - verify",
    mapLink: gmap("Galleria Market DLF Phase 4 Gurgaon"),
    nearbyDo: [n("Walk the market lanes", "Browse stores and cafes", "Dukaanein aur cafes dekho")],
    nearbyEat: [
      n("ButterHands", "Big New York-style cookies, first floor", "Bade New York style cookies, first floor"),
      n("Ammy's Coffee", "Late-night coffee and desserts", "Late-night coffee aur dessert")
    ]
  },

  {
    id: "oro-sector-58", name: "ORO Specialty Coffee, Sector 58",
    area: "gurgaon", city: "Gurgaon",
    moods: ["chill", "aesthetic"],
    who: ["solo", "friends", "couple"],
    budget: "under1500", time: "2hrs", slot: ["morning"],
    tags: ["specialty coffee", "new", "all-day cafe"],
    bestTime: b("Morning to afternoon, closes about 8 PM", "Subah se dopahar, lagbhag 8 baje band"),
    etiquette: b("Opened around Sept/Oct 2026. Hours - verify.", "Sept/Oct 2026 ke aas-paas khula. Timing confirm karo."),
    desc: b("New design-led cafe with coffees from the North East, Goa and Tamil Nadu.", "Naya design wala cafe, North East, Goa aur Tamil Nadu ki coffee."),
    metro: "Cab recommended - verify",
    mapLink: gmap("ORO Cafe Good Earth Business Bay 2 Sector 58 Gurgaon"),
    nearbyDo: [n("Sohna Road drive", "Easy weekend drive", "Easy weekend drive")],
    nearbyEat: [n("Cafe's own menu", "Sandos, croissants and Basque cheesecake", "Sandos, croissant aur Basque cheesecake")]
  },

  // ================= NOIDA =================
  {
    id: "baroak-noida", name: "BAROAK, Sector 15A",
    area: "noida", city: "Noida",
    moods: ["party", "romantic", "chill"],
    who: ["friends", "couple", "genz"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["standalone restaurant", "cocktails", "indoor and outdoor"],
    bestTime: b("Evening, outdoor seating in cooler months", "Sham ko, thandi mein outdoor seating"),
    etiquette: b("Reported about ₹3,000 for two - verify.", "Do logon ka lagbhag ₹3,000 - confirm karo."),
    desc: b("A standalone bar-restaurant with classic indoor and relaxed outdoor seating.", "Alag se bar-restaurant, andar classic aur bahar relaxed seating."),
    metro: "Noida Sector 15 (Blue Line) + auto - verify",
    mapLink: gmap("BAROAK Rajnigandha Market Sector 15A Noida"),
    nearbyDo: [n("Sector 18 market", "Short ride away", "Thodi door")],
    nearbyEat: [n("Bar menu with Indian botanicals", "Cocktails using local herbs and spices", "Desi jadi-bootiyon wale cocktails")]
  },

  {
    id: "tulsi-noida", name: "Tulsi, Spectrum Mall",
    area: "noida", city: "Noida",
    moods: ["foodie", "chill"],
    who: ["family", "friends", "couple"],
    budget: "under1500", time: "2hrs", slot: ["evening"],
    tags: ["pure veg", "chaat counter", "new"],
    bestTime: b("Lunch or dinner", "Lunch ya dinner"),
    etiquette: b("New opening (Oct 2026). Reported about ₹1,200 for two - verify.", "Naya (Oct 2026). Do logon ka lagbhag ₹1,200 - confirm karo."),
    desc: b("Pure veg restaurant with a creative chaat counter: Dilli 6 tokri chaat, kathal tikki chaat.", "Pure veg restaurant, creative chaat counter: Dilli 6 tokri chaat, kathal tikki chaat."),
    metro: "Cab recommended - verify",
    mapLink: gmap("Tulsi Spectrum Mall Noida"),
    nearbyDo: [n("Spectrum Mall", "Shopping and a movie", "Shopping aur movie")],
    nearbyEat: [n("The chaat counter", "Street food, reimagined", "Street food, naye andaaz mein")]
  }

);
