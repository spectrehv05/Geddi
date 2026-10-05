// ============================================================
// places-batch6.js - West Delhi + East Delhi (new areas)
// Sources: LBB (East Delhi cafes), FlickOnClick (outdoor cafes, 2026),
// Tripoto, Holidify-style guides, India Highlight, so.city, Sloshout.
// CONFIDENCE: MEDIUM-LOW. Few fresh sources exist for these areas, so
// treat details as starting points. Verify before launch.
// Needs areas "westdelhi" and "eastdelhi" in FILTERS and FILTER_LABELS.
// Load AFTER places-batch5.js. Reuses b(), gmap(), n().
// ============================================================

PLACES.push(

  // ================= WEST DELHI =================
  {
    id: "rajouri-garden", name: "Rajouri Garden",
    area: "westdelhi", city: "Delhi",
    moods: ["foodie", "party", "chill"],
    who: ["friends", "genz", "couple", "family"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["street food", "rooftop cafes", "shopping"],
    bestTime: b("Evening, when the market and cafes fill up", "Sham ko, jab market aur cafes bharte hain"),
    etiquette: b("Called the 'Hauz Khas of West Delhi'. Average meal about ₹200 to ₹800 - verify.", "West Delhi ka Hauz Khas bolte hain. Meal lagbhag ₹200 se ₹800 - confirm karo."),
    desc: b("West Delhi's main hangout: chaat carts, rooftop cafes, bars and a huge market.", "West Delhi ka main adda: chaat, rooftop cafes, bars aur bada market."),
    metro: "Rajouri Garden (Blue and Pink Line) - verify",
    mapLink: gmap("Rajouri Garden Delhi"),
    nearbyDo: [n("Main Market and Nehru Market", "Fashion, jewellery, bargains", "Fashion, jewellery, bhaav-taav"), n("Gurudwara Singh Sabha", "Calm break", "Shaanti ka break")],
    nearbyEat: [n("Infinite Cafe", "Calm coffee spot, popular with locals", "Shaant coffee spot, locals mein popular"), n("Arsalan and Bikanervala", "Mughlai and sweets", "Mughlai aur mithai")]
  },

  {
    id: "punjabi-bagh", name: "Punjabi Bagh and District Park",
    area: "westdelhi", city: "Delhi",
    moods: ["party", "chill", "peaceful"],
    who: ["friends", "genz", "couple", "family"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["lounges", "district park", "club road"],
    bestTime: b("Park at dusk, lounges after 8 PM", "Park dhalte suraj mein, lounges 8 baje ke baad"),
    etiquette: b("Lounges on Club Road are about ₹700 to ₹1,000 per person - verify.", "Club Road ke lounges lagbhag ₹700 se ₹1,000 per person - confirm karo."),
    desc: b("A wide-road neighbourhood with a big park by day and lounges and rooftops by night.", "Chauri sadkon wala area: din mein bada park, raat ko lounges aur rooftops."),
    metro: "Punjabi Bagh West (Green Line) - verify",
    mapLink: gmap("District Park Punjabi Bagh Delhi"),
    nearbyDo: [n("District Park", "Jogging, yoga and picnics on the grass", "Jogging, yoga aur ghaas pe picnic")],
    nearbyEat: [n("Verandah Moonshine", "Popular party spot", "Popular party spot"), n("Doodles Garden", "Rooftop-style dining", "Rooftop style khaana")]
  },

  {
    id: "dilli-haat-janakpuri", name: "Dilli Haat Janakpuri",
    area: "westdelhi", city: "Delhi",
    moods: ["cultural", "foodie", "chill"],
    who: ["family", "friends", "couple", "solo"],
    budget: "under500", time: "2hrs", slot: ["evening"],
    tags: ["crafts", "regional food", "open-air market"],
    bestTime: b("Late afternoon into evening", "Dopahar ke baad se sham tak"),
    etiquette: b("Small entry ticket. Check timings - verify.", "Chhota entry ticket. Timing confirm karo."),
    desc: b("The West Delhi version of Dilli Haat: craft stalls and food from across India.", "West Delhi ka Dilli Haat: poore India ke craft stalls aur khaana."),
    metro: "Janakpuri West (Blue and Magenta Line) - verify",
    mapLink: gmap("Dilli Haat Janakpuri Delhi"),
    nearbyDo: [n("Janakpuri District Centre", "Malls and local shops", "Malls aur local dukaanein")],
    nearbyEat: [n("Cafe Delhi Heights", "Delhi-themed cafe near the metro", "Metro ke paas Delhi-theme cafe")]
  },

  {
    id: "adventure-island-rohini", name: "Adventure Island, Rohini",
    area: "westdelhi", city: "Delhi",
    moods: ["adventure", "party"],
    who: ["friends", "genz", "family", "couple"],
    budget: "under1500", time: "fullday", slot: ["morning"],
    tags: ["amusement park", "water rides", "jungle maze"],
    bestTime: b("Weekday mornings, summer for water rides", "Weekday ki subah, garmi mein water rides"),
    etiquette: b("Carry a change of clothes. Check ticket prices and opening - verify.", "Kapde badalne ko le jao. Ticket price aur opening confirm karo."),
    desc: b("A theme park in Rohini with rides, boats, a jungle maze and water attractions.", "Rohini ka theme park: rides, boats, jungle maze aur water attractions."),
    metro: "Rohini area, check the nearest Red Line station - verify",
    mapLink: gmap("Adventure Island Rohini Delhi"),
    nearbyDo: [n("Rohini market", "Shopping and snacks nearby", "Paas mein shopping aur snacks")],
    nearbyEat: [n("Park food courts", "Quick bites inside", "Andar quick bites")]
  },

  {
    id: "dwarka-city-centre", name: "Dwarka City Centre and Sector 12 Cafes",
    area: "westdelhi", city: "Delhi",
    moods: ["chill", "foodie", "aesthetic"],
    who: ["friends", "couple", "family", "solo"],
    budget: "under500", time: "2hrs", slot: ["morning", "evening"],
    tags: ["cafes", "mall", "desserts"],
    bestTime: b("Afternoon coffee or an evening dessert run", "Dopahar ki coffee ya sham ka dessert"),
    etiquette: b("Cafe list comes from an older Tripoto post - verify what's still open.", "Cafe list purani Tripoto post se hai - confirm karo kya khula hai."),
    desc: b("Dwarka's easy cafe stop around City Centre Mall, with coffee and dessert places.", "Dwarka ka aasan cafe stop, City Centre Mall ke paas coffee aur dessert."),
    metro: "Dwarka Sector 12 (Blue Line) - verify",
    mapLink: gmap("City Centre Mall Dwarka Sector 12"),
    nearbyDo: [n("City Centre Mall", "Shops and a movie", "Shopping aur movie")],
    nearbyEat: [n("Honey and Dough", "Small cafe inside City Centre Mall", "City Centre Mall ke andar chhota cafe")]
  },

  // ================= EAST DELHI =================
  {
    id: "akshardham-temple", name: "Swaminarayan Akshardham",
    area: "eastdelhi", city: "Delhi",
    moods: ["cultural", "peaceful", "aesthetic"],
    who: ["family", "friends", "solo", "couple"],
    budget: "under500", time: "halfday", slot: ["morning", "evening"],
    tags: ["temple complex", "architecture", "gardens"],
    bestTime: b("Open about 10 AM to 6:30 PM, closed Mondays - verify", "Lagbhag 10 AM se 6:30 PM, Monday band - confirm karo"),
    etiquette: b("Strict security and dress code. Phones and bags usually not allowed inside - verify.", "Security aur dress code strict. Phone aur bag andar aam taur pe allowed nahi - confirm karo."),
    desc: b("One of the largest Hindu temple complexes, known for its carvings, gardens and exhibitions.", "Sabse bade mandir complexes mein se ek: naqqashi, bagiche aur exhibitions."),
    metro: "Akshardham (Blue Line) - verify",
    mapLink: gmap("Swaminarayan Akshardham Delhi"),
    nearbyDo: [n("Laxmi Nagar Market", "Short ride for shopping", "Shopping ke liye thodi door")],
    nearbyEat: [n("Akshardham food court", "Simple vegetarian meals", "Saada shaakahari khaana")]
  },

  {
    id: "sanjay-lake", name: "Sanjay Lake, Mayur Vihar",
    area: "eastdelhi", city: "Delhi",
    moods: ["chill", "adventure", "peaceful", "romantic"],
    who: ["friends", "couple", "family", "solo"],
    budget: "under500", time: "2hrs", slot: ["morning", "evening"],
    tags: ["lake", "boating", "park"],
    bestTime: b("Winter mornings or evenings", "Sardiyon ki subah ya sham"),
    etiquette: b("Boating and entry details change - verify.", "Boating aur entry ki details badalti hain - confirm karo."),
    desc: b("A lake and park in Mayur Vihar. Easy for boating, walks and a quiet evening.", "Mayur Vihar mein jheel aur park. Boating, walk aur shaant shaam ke liye."),
    metro: "Trilokpuri Sanjay Lake (Pink Line) - verify",
    mapLink: gmap("Sanjay Lake Mayur Vihar Delhi"),
    nearbyDo: [n("Akshardham", "Short ride away", "Thodi door")],
    nearbyEat: [n("Freakin Beans (Mayur Vihar Phase 1)", "Outdoor cafe with fairy lights, near metro", "Metro ke paas fairy lights wala outdoor cafe")]
  },

  {
    id: "laxmi-nagar-market", name: "Laxmi Nagar Market",
    area: "eastdelhi", city: "Delhi",
    moods: ["foodie", "chill"],
    who: ["friends", "genz", "solo"],
    budget: "under500", time: "2hrs", slot: ["evening"],
    tags: ["street food", "budget shopping", "cafes"],
    bestTime: b("Evening, crowded on weekends", "Sham ko, weekend pe bheed"),
    etiquette: b("Keep your bag in front and carry small cash.", "Bag aage rakho aur chhote notes rakho."),
    desc: b("East Delhi's big market for clothes, street food and student-budget cafes.", "East Delhi ka bada market: kapde, street food aur student-budget cafes."),
    metro: "Laxmi Nagar (Blue Line) - verify",
    mapLink: gmap("Laxmi Nagar Market Delhi"),
    nearbyDo: [n("Preet Vihar cafes", "Next stop for hangouts", "Agla hangout stop")],
    nearbyEat: [n("The Foody Toury Cafe", "Budget cafe, laptop-friendly", "Budget cafe, laptop-friendly"), n("The Minnions Cafe", "Minions-themed cafe with PlayStation corner", "Minions theme cafe, PlayStation corner")]
  },

  {
    id: "preet-vihar-cafes", name: "Preet Vihar Cafe Strip",
    area: "eastdelhi", city: "Delhi",
    moods: ["romantic", "party", "chill", "aesthetic"],
    who: ["couple", "friends", "genz"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["terrace cafes", "outdoor seating", "metro-friendly"],
    bestTime: b("Evening, terraces get busy on weekends", "Sham ko, weekend pe terrace mein bheed"),
    etiquette: b("Prices vary a lot from cafe to cafe - verify.", "Cafe ke hisaab se price bahut alag - confirm karo."),
    desc: b("East Delhi's cafe cluster with terrace and open-air seating, easy to reach by Blue Line.", "East Delhi ka cafe cluster: terrace aur open-air seating, Blue Line se aasan."),
    metro: "Preet Vihar (Blue Line) - verify",
    mapLink: gmap("Preet Vihar cafes Delhi"),
    nearbyDo: [n("V3S Mall", "Shopping and a movie nearby", "Paas mein shopping aur movie")],
    nearbyEat: [n("The Salt Cafe", "Evening ambience for dates", "Dates ke liye shaam ka mahaul"), n("Tipsy Terrace", "Terrace seating for hangouts", "Terrace seating, hangout ke liye"), n("The Riding Guns Cafe", "Outdoor seating, cake and affogato", "Outdoor seating, cake aur affogato")]
  },

  {
    id: "cross-river-mall", name: "Cross River Mall, Shahdara",
    area: "eastdelhi", city: "Delhi",
    moods: ["party", "chill", "foodie"],
    who: ["family", "friends", "couple", "genz"],
    budget: "under1500", time: "halfday", slot: ["evening"],
    tags: ["mall", "multiplex", "cafes"],
    bestTime: b("Evening and weekends", "Sham aur weekend"),
    etiquette: b("Details are thin - verify what's open.", "Jaankari kam hai - confirm karo kya khula hai."),
    desc: b("An East Delhi mall with shops, eateries, cafes and a multiplex.", "East Delhi ka mall: shops, eateries, cafes aur multiplex."),
    metro: "Karkardooma (Blue Line) + auto - verify",
    mapLink: gmap("Cross River Mall Shahdara Delhi"),
    nearbyDo: [n("Multiplex", "Movie night", "Movie night")],
    nearbyEat: [n("Mall food court and cafes", "Easy group meals", "Group ke liye aasan khaana")]
  }

);
