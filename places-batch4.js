// ============================================================
// places-batch4.js - Gurgaon landmarks + Aravalli + Greater Noida + Ghaziabad
// Researched Oct 2026 from Tripadvisor reviews (Sept 2026), Holidify,
// Wanderlog, Curly Tales, Expedia and travel blogs.
// CONFIDENCE: Gurgaon and Aravalli = good. Greater Noida = medium.
// Ghaziabad = LOW (sources are mostly 2023 listings) - verify everything.
// Load AFTER places-batch3.js. Needs areas "greaternoida" and "ghaziabad"
// added to FILTERS (data.js) and FILTER_LABELS (app.js).
// ============================================================

patch("damdama-lake", (p) => { p.nearbyDo.push(n("Leopard Trail", "Aravalli drive and hike on the way", "Raste mein Aravalli ki drive aur hike")); });

PLACES.push(

  // ================= GURGAON =================
  {
    id: "ambience-mall-gurgaon", name: "Ambience Mall, Gurgaon",
    area: "gurgaon", city: "Gurgaon",
    moods: ["party", "chill", "foodie"],
    who: ["friends", "family", "genz", "couple"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["ice skating", "bowling", "pubs"],
    bestTime: b("Evening, weekends are packed", "Sham ko, weekend pe bheed"),
    etiquette: b("Ice skating was about ₹600 per hour in one guide - verify.", "Ice skating ek guide mein lagbhag ₹600 per ghanta tha - confirm karo."),
    desc: b("Huge mall on the Delhi-Gurgaon border with an ice rink, bowling and pubs under one roof.", "Delhi-Gurgaon border ka bada mall: ice rink, bowling aur pubs, sab ek jagah."),
    metro: "Nearest metro - verify (one source says Micromax Moser Baer)",
    mapLink: gmap("Ambience Mall Gurgaon NH8"),
    nearbyDo: [n("iSkate (6th floor)", "Ice skating rink and cafe", "Ice skating rink aur cafe"), n("Blu-O and Smaaash", "Bowling and arcade games", "Bowling aur games")],
    nearbyEat: [n("Mall food court (3rd floor)", "Options for every budget", "Har budget ka khaana"), n("Firangi Paani and Underdogs", "Popular pubs inside the mall", "Mall ke andar mashhoor pubs")]
  },

  {
    id: "32nd-avenue-gurgaon", name: "32nd Avenue",
    area: "gurgaon", city: "Gurgaon",
    moods: ["aesthetic", "romantic", "chill", "foodie"],
    who: ["friends", "couple", "family", "genz"],
    budget: "under1500", time: "halfday", slot: ["evening"],
    tags: ["fairy lights", "red-brick street", "cafes"],
    bestTime: b("Early evening, as the fairy lights come on", "Jaldi sham, jab fairy lights jalti hain"),
    etiquette: b("Entry is free. Parking gets tight at lunch and evenings.", "Entry free hai. Parking mushkil ho sakti hai."),
    desc: b("A car-free red-brick street with fairy lights and cafes. Looks great on camera.", "Bina gaadi wali laal eent ki gali, fairy lights aur cafes. Photo mein bahut achi."),
    metro: "Cab recommended - verify",
    mapLink: gmap("32nd Avenue Gurgaon Sector 15"),
    nearbyDo: [n("Just stroll the street", "No ticket needed", "Bas ghoomo, ticket nahi")],
    nearbyEat: [n("Greenr Cafe", "Budget-friendly cafe", "Sasta cafe"), n("Carnatic Cafe", "South Indian, easy on the pocket", "South Indian, sasta"), n("Melt House", "Comfort food and grilled cheese", "Comfort food aur grilled cheese")]
  },

  {
    id: "65th-avenue-gurgaon", name: "M3M 65th Avenue",
    area: "gurgaon", city: "Gurgaon",
    moods: ["party", "foodie", "chill"],
    who: ["friends", "genz", "family", "couple"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["open-air high street", "multiplex", "pubs"],
    bestTime: b("Evening, mall is open about 11:30 AM to 11 PM - verify", "Sham ko, lagbhag 11:30 AM se 11 PM - confirm karo"),
    etiquette: b("Details here come mostly from listings, so verify what's open.", "Zyada tar listings se liya hai, kya khula hai confirm karo."),
    desc: b("Open-air high street on Golf Course Extension Road with an 8-screen multiplex, cafes and pubs.", "Golf Course Extension Road pe open-air high street, 8-screen multiplex, cafes aur pubs."),
    metro: "Cab recommended - verify",
    mapLink: gmap("M3M 65th Avenue Sector 65 Gurgaon"),
    nearbyDo: [n("PVR multiplex", "Movie night", "Movie night")],
    nearbyEat: [n("Mi Piaci", "Italian fine dining", "Italian fine dining"), n("Sorry Sugar", "Trendy cafe for desserts", "Dessert ke liye trendy cafe")]
  },

  {
    id: "leopard-trail-gurgaon", name: "Leopard Trail, Aravalli",
    area: "gurgaon", city: "Gurgaon",
    moods: ["adventure", "peaceful", "aesthetic"],
    who: ["friends", "couple", "solo", "family"],
    budget: "free", time: "halfday", slot: ["morning"],
    tags: ["hike", "sunrise", "peacocks"],
    bestTime: b("Early morning for sunrise. Wear sports shoes.", "Subah jaldi, sunrise ke liye. Sports shoes pehno."),
    etiquette: b("Sources differ on length (about 8 to 12 km). No metro or bus. Carry water.", "Length ke baare mein sources alag hain (8 se 12 km). Metro ya bus nahi. Paani le jao."),
    desc: b("A rocky Aravalli trail with peacocks and big views. Feels like a hill hike without leaving NCR.", "Aravalli ka pathrila trail, mor aur bade views. Bina NCR chhode pahaad wali hike."),
    metro: "No metro, bike or car - verify",
    mapLink: gmap("Leopard Trail Gurugram Garat Pur Bas"),
    nearbyDo: [n("Damdama Lake", "Boating and a day trip", "Boating aur day trip")],
    nearbyEat: [n("Q Cafe Leopard Trail", "Scenic cafe in the hills", "Pahaadon mein scenic cafe")]
  },

  {
    id: "aravalli-biodiversity-park", name: "Aravalli Biodiversity Park",
    area: "gurgaon", city: "Gurgaon",
    moods: ["peaceful", "chill", "aesthetic", "adventure"],
    who: ["solo", "friends", "couple", "family"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["walking trails", "birds", "butterflies"],
    bestTime: b("Open roughly 6 to 11 AM and 3 to 6/7 PM - verify", "Lagbhag 6 se 11 AM aur 3 se 6/7 PM - confirm karo"),
    etiquette: b("Entry rules can change. Check before you go.", "Entry ke niyam badal sakte hain. Jaane se pehle check karo."),
    desc: b("A forest park with walking and cycling trails, home to hundreds of birds and butterflies.", "Jungle jaisa park, walking aur cycling trails, kai pakshi aur titliyan."),
    metro: "Guru Dronacharya (Yellow Line) + auto - verify",
    mapLink: gmap("Aravalli Biodiversity Park Gurugram"),
    nearbyDo: [n("Cycling trails", "Slow ride through the forest", "Jungle mein aaram ki cycling")],
    nearbyEat: [n("Cafes on Golf Course Road", "Short drive away", "Thodi door")]
  },

  // ================= GREATER NOIDA =================
  {
    id: "surajpur-wetland", name: "Surajpur Wetland",
    area: "greaternoida", city: "Greater Noida",
    moods: ["peaceful", "adventure", "aesthetic", "romantic"],
    who: ["solo", "couple", "friends", "family"],
    budget: "free", time: "halfday", slot: ["morning", "evening"],
    tags: ["birds", "wetland", "sunset"],
    bestTime: b("November to February, early morning or golden hour", "November se February, subah jaldi ya golden hour"),
    etiquette: b("A small entry fee was reported (around ₹50) - verify.", "Chhota entry fee bataya gaya (lagbhag ₹50) - confirm karo."),
    desc: b("A big urban wetland full of migratory birds. Go for sunrise or sunset.", "Pravasi pakshiyon se bhari badi wetland. Sunrise ya sunset pe jao."),
    metro: "No direct metro, cab recommended - verify",
    mapLink: gmap("Surajpur Wetland Greater Noida"),
    nearbyDo: [n("Pari Chowk", "Short drive for chai and snacks", "Chai aur snacks ke liye thodi door")],
    nearbyEat: [n("Pari Chowk food stalls", "Local street food", "Local street food")]
  },

  {
    id: "pari-chowk", name: "Pari Chowk, Greater Noida",
    area: "greaternoida", city: "Greater Noida",
    moods: ["chill", "foodie", "aesthetic"],
    who: ["friends", "genz", "couple", "family"],
    budget: "under500", time: "2hrs", slot: ["evening"],
    tags: ["landmark", "street food", "parks"],
    bestTime: b("Cooler months (October to March), evenings", "Thandi mein (October se March), shaam ko"),
    etiquette: b("", ""),
    desc: b("Greater Noida's best-known landmark. Chai, snacks and nearby parks.", "Greater Noida ka sabse mashhoor landmark. Chai, snacks aur paas ke park."),
    metro: "Pari Chowk (Aqua Line) - verify",
    mapLink: gmap("Pari Chowk Greater Noida"),
    nearbyDo: [n("Surajpur Wetland", "Nature break nearby", "Paas mein nature")],
    nearbyEat: [n("Pari Chowk food stalls and cafes", "Chai, shakes and snacks", "Chai, shake aur snacks")]
  },

  // ================= GHAZIABAD (data is lower confidence) =================
  {
    id: "indirapuram-habitat-centre", name: "Indirapuram Habitat Centre",
    area: "ghaziabad", city: "Ghaziabad (Indirapuram)",
    moods: ["chill", "aesthetic", "foodie", "party"],
    who: ["friends", "couple", "genz"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["cafes", "rooftop", "book cafe"],
    bestTime: b("Evening, rooftop after dark", "Sham ko, andhera hone ke baad rooftop"),
    etiquette: b("Prices come from a 2023 list (about ₹900 to ₹2,000 for two) - verify.", "Prices 2023 ki list se hain (do logon ka ₹900 se ₹2,000) - confirm karo."),
    desc: b("Indirapuram's go-to cafe cluster: a book cafe, coffee spots and a rooftop restaurant.", "Indirapuram ka cafe cluster: book cafe, coffee spots aur rooftop restaurant."),
    metro: "Cab recommended, nearest Blue Line - verify",
    mapLink: gmap("Indirapuram Habitat Centre Ghaziabad"),
    nearbyDo: [n("Shipra Mall", "Shopping and a movie nearby", "Paas mein shopping aur movie")],
    nearbyEat: [n("The Reader's Cafe", "Book-themed cafe", "Kitaabon wala cafe"), n("Imperfecto", "Rooftop restaurant and lounge", "Rooftop restaurant aur lounge"), n("Xero Degrees", "Easy cafe hangout", "Aasan cafe hangout")]
  },

  {
    id: "gc-grand-indirapuram", name: "GC Grand, Indirapuram",
    area: "ghaziabad", city: "Ghaziabad (Indirapuram)",
    moods: ["chill", "foodie"],
    who: ["friends", "genz", "couple", "solo"],
    budget: "under500", time: "2hrs", slot: ["evening", "latenight"],
    tags: ["budget cafes", "coffee", "hangout"],
    bestTime: b("Late afternoon to late night", "Dopahar ke baad se der raat tak"),
    etiquette: b("Based on older listings - verify what's still open.", "Purani listings par based - confirm karo kya khula hai."),
    desc: b("A strip of budget-friendly cafes in Vaibhav Khand. Easy, cheap evenings.", "Vaibhav Khand mein sasta cafe strip. Aasan aur kam kharche wali shaam."),
    metro: "Cab or auto - verify",
    mapLink: gmap("GC Grand Vaibhav Khand Indirapuram"),
    nearbyDo: [n("Shipra Mall", "Short ride away", "Thodi door")],
    nearbyEat: [n("Cafe 99", "Cheap bites", "Sasta khaana"), n("Woodbox", "Often called a top cafe locally", "Local log ise top cafe bolte hain"), n("Nothing Before Coffee", "Coffee-first spot", "Coffee wala spot")]
  },

  {
    id: "shipra-mall-vasundhara", name: "Shipra Mall, Vasundhara and Indirapuram",
    area: "ghaziabad", city: "Ghaziabad (Vasundhara)",
    moods: ["party", "foodie", "chill"],
    who: ["family", "friends", "couple", "genz"],
    budget: "under1500", time: "halfday", slot: ["evening"],
    tags: ["mall", "movies", "food"],
    bestTime: b("Evening and weekends", "Sham aur weekend"),
    etiquette: b("Details are thin for this area - verify.", "Is area ki jaankari kam hai - confirm karo."),
    desc: b("The area's main mall for shopping, movies and casual hangouts between Indirapuram and Vasundhara.", "Indirapuram aur Vasundhara ke beech ka main mall: shopping, movies aur hangout."),
    metro: "Cab recommended - verify",
    mapLink: gmap("Shipra Mall Indirapuram Vasundhara"),
    nearbyDo: [n("Indirapuram Habitat Centre", "Cafes close by", "Paas mein cafes")],
    nearbyEat: [n("Cafe Beernation", "Casual pub-cafe inside Shipra Mall", "Shipra Mall ke andar casual pub-cafe")]
  },

  {
    id: "vaishali-buddha-stupa", name: "Vaishali: Mahagun Metro Mall and Buddha Stupa",
    area: "ghaziabad", city: "Ghaziabad (Vaishali)",
    moods: ["peaceful", "chill", "foodie", "cultural"],
    who: ["family", "friends", "solo", "couple"],
    budget: "under500", time: "halfday", slot: ["morning", "evening"],
    tags: ["stupa", "metro mall", "rooftop lounges"],
    bestTime: b("Morning for the stupa, evening for the mall", "Subah stupa, shaam ko mall"),
    etiquette: b("Vaishali cafe data is from older listings - verify.", "Vaishali ke cafe ki jaankari purani hai - confirm karo."),
    desc: b("A quiet Buddha stupa in the morning, a metro-side mall and cafes in the evening.", "Subah shaant Buddha stupa, shaam ko metro ke paas mall aur cafes."),
    metro: "Vaishali (Blue Line) - verify",
    mapLink: gmap("Mahagun Metro Mall Vaishali Ghaziabad"),
    nearbyDo: [n("Buddha Stupa", "Calm place to sit", "Baithne ke liye shaant jagah")],
    nearbyEat: [n("The Soho Garden Rooftop Lounge", "Rooftop lounge and bar", "Rooftop lounge aur bar"), n("Baatcheet Cafe", "Casual cafe hangout", "Casual cafe hangout")]
  }

);
