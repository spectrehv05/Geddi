// ============================================================
// places-batch5.js - Famous places of Greater Noida, Noida, Ghaziabad
// (your list). Already in earlier batches, so NOT repeated here:
//   DLF Mall of India (inside "noida-sector-18"), Okhla Bird Sanctuary,
//   Worlds of Wonder, Surajpur Wetland, Indirapuram Habitat Centre,
//   Shipra Mall, Mahagun Metro Mall (inside "vaishali-buddha-stupa").
// Sources: Wikipedia, Tripadvisor, Holidify, Thrillophilia, Wanderlog.
// Confidence: Noida = good, Greater Noida = medium, Ghaziabad = medium-low.
// Load AFTER places-batch4.js. Reuses b(), gmap(), n(), patch().
// ============================================================

patch("worlds-of-wonder", (p) => { p.nearbyDo.push(n("The Great India Place and Gardens Galleria", "Same Entertainment City complex", "Usi Entertainment City complex mein")); });

PLACES.push(

  // ================= GREATER NOIDA =================
  {
    id: "grand-venice-mall", name: "The Grand Venice Mall",
    area: "greaternoida", city: "Greater Noida",
    moods: ["aesthetic", "party", "foodie", "adventure"],
    who: ["family", "friends", "couple", "genz"],
    budget: "under1500", time: "halfday", slot: ["evening"],
    tags: ["italian theme", "gondola ride", "snow park"],
    bestTime: b("Evening or weekends. Open about 10 AM to 10 PM - verify", "Sham ya weekend. Lagbhag 10 AM se 10 PM - confirm karo"),
    etiquette: b("Ride and activity prices vary - verify.", "Rides aur activities ke price badalte hain - confirm karo."),
    desc: b("An Italian-themed mall with canals and gondola rides, a snow park, trampolines and bowling.", "Italian theme wala mall: nahar aur gondola ride, snow park, trampoline aur bowling."),
    metro: "Pari Chowk (Aqua Line), next to the mall - verify",
    mapLink: gmap("The Grand Venice Mall Greater Noida"),
    nearbyDo: [n("Snow Mastiii and Mastiii Zone", "Snow park, zip line, VR games", "Snow park, zip line, VR games"), n("Pari Chowk", "Short walk or ride", "Paas mein")],
    nearbyEat: [n("Mall food court", "Haldiram's, Chaayos, Domino's and more", "Haldiram's, Chaayos, Domino's aur bhi")]
  },

  {
    id: "city-park-greater-noida", name: "City Park, Greater Noida",
    area: "greaternoida", city: "Greater Noida",
    moods: ["chill", "peaceful", "romantic"],
    who: ["family", "couple", "friends", "solo"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["park", "walk", "green space"],
    bestTime: b("Morning or late afternoon", "Subah ya dopahar ke baad"),
    etiquette: b("Little reliable detail online. Check timings and entry - verify.", "Online kam jaankari hai. Timing aur entry confirm karo."),
    desc: b("A green city park in the Alpha area for an easy evening walk.", "Alpha area ka hara-bhara city park, aaram ki shaam walk ke liye."),
    metro: "Cab recommended - verify",
    mapLink: gmap("City Park Greater Noida Alpha"),
    nearbyDo: [n("The Grand Venice Mall", "Short drive", "Thodi door")],
    nearbyEat: [n("Alpha commercial belt cafes", "Casual cafes nearby", "Paas mein casual cafes")]
  },

  {
    id: "india-expo-centre-mart", name: "India Expo Centre and Mart",
    area: "greaternoida", city: "Greater Noida",
    moods: ["cultural", "adventure"],
    who: ["friends", "family", "solo"],
    budget: "under500", time: "halfday", slot: ["morning"],
    tags: ["expos", "trade fairs", "events"],
    bestTime: b("Only when an expo is on. Check the event calendar.", "Sirf jab koi expo ho. Event calendar dekho."),
    etiquette: b("Not a walk-in place. Entry and tickets depend on the event.", "Walk-in jagah nahi hai. Entry aur ticket event par depend karte hain."),
    desc: b("A huge exhibition venue. Go for auto shows, book fairs and big expos.", "Bada exhibition venue. Auto show, book fair aur bade expos ke liye jao."),
    metro: "Cab recommended - verify",
    mapLink: gmap("India Expo Centre and Mart Knowledge Park II Greater Noida"),
    nearbyDo: [n("The Grand Venice Mall", "A few km away", "Kuch km door")],
    nearbyEat: [n("Mall food courts nearby", "Easy meals after the expo", "Expo ke baad aasan khaana")]
  },

  {
    id: "buddh-international-circuit", name: "Buddh International Circuit",
    area: "greaternoida", city: "Greater Noida",
    moods: ["adventure"],
    who: ["friends", "genz", "family", "solo"],
    budget: "under1500", time: "halfday", slot: ["morning"],
    tags: ["f1 track", "motorsport", "events"],
    bestTime: b("Only on event or track days. Check before you go.", "Sirf event ya track day pe. Jaane se pehle check karo."),
    etiquette: b("Public access is mostly during scheduled events. One review says upkeep is patchy - verify.", "Public access zyada tar events mein. Ek review mein rakh-rakhaav kam bataya - confirm karo."),
    desc: b("The track that hosted the Indian Grand Prix, now used for MotoGP and track days.", "Indian Grand Prix wala track, ab MotoGP aur track days ke liye."),
    metro: "Noida City Centre then cab (one source) - verify",
    mapLink: gmap("Buddh International Circuit Greater Noida"),
    nearbyDo: [n("Jaypee Sports City", "Same sports complex", "Usi sports complex mein")],
    nearbyEat: [n("Cafes near Pari Chowk", "Closest food area", "Sabse paas khaane ki jagah")]
  },

  // ================= NOIDA =================
  {
    id: "atta-market-noida", name: "Atta Market, Sector 27",
    area: "noida", city: "Noida",
    moods: ["foodie", "party", "chill"],
    who: ["friends", "genz", "couple"],
    budget: "under500", time: "2hrs", slot: ["evening"],
    tags: ["street shopping", "budget", "street food"],
    bestTime: b("Evening, markets are busy after 6 PM", "Sham ko, 6 baje ke baad bheed"),
    etiquette: b("Bargain, and keep an eye on your bag.", "Bhaav-taav karo aur bag ka dhyan rakho."),
    desc: b("Noida's classic street market for clothes, accessories and cheap bites.", "Noida ka classic street market: kapde, accessories aur sasta khaana."),
    metro: "Cab or auto - verify",
    mapLink: gmap("Atta Market Sector 27 Noida"),
    nearbyDo: [n("Sector 18 market", "Short ride away", "Thodi door")],
    nearbyEat: [n("Market food stalls", "Chaat, momos and rolls", "Chaat, momo aur rolls")]
  },

  {
    id: "great-india-place", name: "The Great India Place (GIP)",
    area: "noida", city: "Noida",
    moods: ["party", "foodie", "chill"],
    who: ["family", "friends", "genz", "couple"],
    budget: "under1500", time: "halfday", slot: ["evening"],
    tags: ["mall", "cinema", "entertainment city"],
    bestTime: b("Evening and weekends. Open roughly 11 AM to 10 or 11 PM - verify", "Sham aur weekend. Lagbhag 11 AM se 10-11 PM - confirm karo"),
    etiquette: b("", ""),
    desc: b("A huge themed mall in Sector 38A with 250+ brands, a food court and a multiplex.", "Sector 38A ka bada themed mall: 250+ brands, food court aur multiplex."),
    metro: "Noida Sector 18 (Blue Line), walkable - verify",
    mapLink: gmap("The Great India Place Sector 38A Noida"),
    nearbyDo: [n("Worlds of Wonder", "Same complex", "Usi complex mein"), n("Appu Ghar Express", "Rides inside the complex", "Complex ke andar rides")],
    nearbyEat: [n("GIP food court", "Many cuisines in one place", "Ek jagah kai cuisines")]
  },

  {
    id: "gardens-galleria", name: "Gardens Galleria Mall",
    area: "noida", city: "Noida",
    moods: ["party", "foodie", "chill"],
    who: ["friends", "genz", "couple", "family"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["mall", "restaurants", "bars"],
    bestTime: b("Evening onwards", "Sham se aage"),
    etiquette: b("Part of the same Entertainment City as GIP and Worlds of Wonder.", "GIP aur Worlds of Wonder jaise hi Entertainment City ka hissa."),
    desc: b("Open-air feel with restaurants and bars, built next to the Great India Place.", "Open-air jaisa mall, restaurants aur bars, Great India Place ke bagal mein."),
    metro: "Noida Sector 18 (Blue Line) + walk or auto - verify",
    mapLink: gmap("Gardens Galleria Mall Noida"),
    nearbyDo: [n("The Great India Place", "Next door", "Bagal mein")],
    nearbyEat: [n("Restaurants and bars inside", "Good for group dinners", "Group dinner ke liye acha")]
  },

  {
    id: "brahmaputra-market", name: "Brahmaputra Market, Sector 29",
    area: "noida", city: "Noida",
    moods: ["foodie", "chill", "party"],
    who: ["friends", "genz", "couple", "family"],
    budget: "under500", time: "2hrs", slot: ["evening", "latenight"],
    tags: ["street food", "BP market", "late night"],
    bestTime: b("After dusk. Open roughly 9 AM to 11 PM - verify", "Andhera hone ke baad. Lagbhag 9 AM se 11 PM - confirm karo"),
    etiquette: b("", ""),
    desc: b("Noida's street-food stop. Food vendors fire up in the evening.", "Noida ka street-food adda. Sham ko vendors ki dukaanein chalu."),
    metro: "Cab or auto - verify",
    mapLink: gmap("Brahmaputra Market Sector 29 Noida"),
    nearbyDo: [n("Walk the market lanes", "Casual shopping", "Casual shopping")],
    nearbyEat: [n("Street stalls and chains", "Momos, rolls, chaat and shakes", "Momo, roll, chaat aur shake")]
  },

  {
    id: "botanical-garden-noida", name: "Botanic Garden of Indian Republic",
    area: "noida", city: "Noida",
    moods: ["peaceful", "chill", "aesthetic"],
    who: ["family", "couple", "friends", "solo"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["botanical garden", "green space", "picnic"],
    bestTime: b("Morning or late afternoon", "Subah ya dopahar ke baad"),
    etiquette: b("Limited current detail online. Check entry and timings - verify.", "Abhi ki jaankari kam hai. Entry aur timing confirm karo."),
    desc: b("A big green space near the Botanical Garden metro. Easy for a slow walk.", "Botanical Garden metro ke paas bada hara space. Aaram ki walk ke liye."),
    metro: "Botanical Garden (Blue Line) - verify",
    mapLink: gmap("Botanic Garden of Indian Republic Noida"),
    nearbyDo: [n("Worlds of Wonder", "A short ride", "Thodi door"), n("Okhla Bird Sanctuary", "Nature combo", "Nature combo")],
    nearbyEat: [n("Sector 18 cafes", "Quick ride away", "Thodi door")]
  },

  {
    id: "ved-van-park", name: "Ved Van Park",
    area: "noida", city: "Noida",
    moods: ["peaceful", "chill", "aesthetic", "yaadein"],
    who: ["family", "couple", "solo", "friends"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["park", "walking trails", "gardens"],
    bestTime: b("Open about 8 AM to 9 PM. Early morning or evening - verify", "Lagbhag 8 AM se 9 PM. Subah ya sham - confirm karo"),
    etiquette: b("Opened to the public on 4 July 2023.", "4 July 2023 ko public ke liye khula."),
    desc: b("A newer park with walking trails and well-kept gardens. Quiet for Noida.", "Naya park, walking trails aur sundar bagiche. Noida ke hisaab se shaant."),
    metro: "Cab or auto - verify",
    mapLink: gmap("Ved Van Park Noida"),
    nearbyDo: [n("ISKCON Temple Noida", "Calm second stop", "Doosra shaant stop")],
    nearbyEat: [n("Nearby sector markets", "Simple cafes and dhabas", "Saade cafes aur dhabe")]
  },

  {
    id: "iskcon-noida", name: "ISKCON Temple, Noida",
    area: "noida", city: "Noida",
    moods: ["peaceful", "cultural", "yaadein"],
    who: ["family", "solo", "friends", "couple"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["temple", "kirtan", "architecture"],
    bestTime: b("Evening aarti. Open roughly 4:30 AM to 10 PM - verify", "Sham ki aarti. Lagbhag 4:30 AM se 10 PM - confirm karo"),
    etiquette: b("Dress modestly, remove shoes at the entrance.", "Simple kapde pehno, joote bahar utaaro."),
    desc: b("Sector 33 temple dedicated to Lord Krishna with devotional music and a calm air.", "Sector 33 ka Krishna mandir, bhajan kirtan aur shaant mahaul."),
    metro: "Cab or auto - verify",
    mapLink: gmap("ISKCON Temple Sector 33 Noida"),
    nearbyDo: [n("Ved Van Park", "Park nearby", "Paas mein park")],
    nearbyEat: [n("Temple prasad and nearby cafes", "Simple vegetarian food", "Saada shaakahari khaana")]
  },

  // ================= GHAZIABAD =================
  {
    id: "swarna-jayanti-park", name: "Swarna Jayanti Park, Indirapuram",
    area: "ghaziabad", city: "Ghaziabad (Indirapuram)",
    moods: ["chill", "peaceful", "romantic"],
    who: ["family", "couple", "friends", "solo"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["park", "jogging", "family park"],
    bestTime: b("Morning for joggers, evening for families. Open about 8 AM to 7 PM - verify", "Subah joggers, shaam families. Lagbhag 8 AM se 7 PM - confirm karo"),
    etiquette: b("Parking outside is paid.", "Bahar parking paid hai."),
    desc: b("A well-kept 25-acre park in the middle of Indirapuram. Good for families and morning walks.", "Indirapuram ke beech 25 acre ka saaf park. Family aur subah ki walk ke liye."),
    metro: "Cab or auto - verify",
    mapLink: gmap("Swarna Jayanti Park Indirapuram Ghaziabad"),
    nearbyDo: [n("Indirapuram Habitat Centre", "Cafes close by", "Paas mein cafes")],
    nearbyEat: [n("Park food kiosks", "Snacks and juice", "Snacks aur juice")]
  },

  {
    id: "city-forest-ghaziabad", name: "City Forest, Raj Nagar Extension",
    area: "ghaziabad", city: "Ghaziabad",
    moods: ["adventure", "peaceful", "chill"],
    who: ["family", "friends", "couple"],
    budget: "under500", time: "halfday", slot: ["morning", "evening"],
    tags: ["lakes", "boating", "cycling"],
    bestTime: b("Weekend. Open roughly 7 AM to 7 PM, entry about ₹10 - verify", "Weekend. Lagbhag 7 AM se 7 PM, entry lagbhag ₹10 - confirm karo"),
    etiquette: b("Activities like boating and cycling vary by season - verify.", "Boating aur cycling season ke hisaab se badalte hain - confirm karo."),
    desc: b("A 175-acre forest park with two lakes, boating, cycling and picnic spots.", "175 acre ka jungle park, do jheel, boating, cycling aur picnic."),
    metro: "Cab recommended - verify",
    mapLink: gmap("City Forest Raj Nagar Extension Ghaziabad"),
    nearbyDo: [n("Gaur Central Mall", "Short ride away", "Thodi door")],
    nearbyEat: [n("Park food court", "Basic snacks", "Basic snacks")]
  },

  {
    id: "mohan-nagar-temple", name: "Mohan Nagar Temple",
    area: "ghaziabad", city: "Ghaziabad",
    moods: ["peaceful", "cultural"],
    who: ["family", "solo", "friends", "couple"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["durga temple", "architecture", "calm"],
    bestTime: b("Morning or evening aarti", "Subah ya sham ki aarti"),
    etiquette: b("Dress modestly and remove shoes.", "Simple kapde pehno aur joote utaaro."),
    desc: b("A well-known Durga temple at Mohan Nagar crossing, known for its clean, peaceful feel.", "Mohan Nagar crossing ka mashhoor Durga mandir, saaf aur shaant."),
    metro: "Cab or auto - verify",
    mapLink: gmap("Mohan Nagar Temple Ghaziabad"),
    nearbyDo: [n("World Square Mall", "Popular with younger crowds", "Yuva crowd mein popular")],
    nearbyEat: [n("Mohan Nagar market", "Local sweets and snacks", "Local mithai aur snacks")]
  },

  {
    id: "gaur-central-mall", name: "Gaur Central Mall, Raj Nagar",
    area: "ghaziabad", city: "Ghaziabad",
    moods: ["chill", "foodie", "party"],
    who: ["family", "friends", "couple", "genz"],
    budget: "under1500", time: "halfday", slot: ["evening"],
    tags: ["mall", "shopping", "food"],
    bestTime: b("Evening and weekends", "Sham aur weekend"),
    etiquette: b("Reviews are modest and few. Check what's open - verify.", "Reviews kam aur saadharan hain. Kya khula hai confirm karo."),
    desc: b("A popular mall in Raj Nagar for shopping and casual food.", "Raj Nagar ka popular mall, shopping aur casual khaane ke liye."),
    metro: "Cab recommended - verify",
    mapLink: gmap("Gaur Central Mall Raj Nagar Ghaziabad"),
    nearbyDo: [n("City Forest", "Short ride for a green break", "Thodi door hara break")],
    nearbyEat: [n("Mall food court", "Quick meals", "Jaldi khaana")]
  },

  {
    id: "iskcon-ghaziabad", name: "ISKCON Temple, Ghaziabad",
    area: "ghaziabad", city: "Ghaziabad",
    moods: ["peaceful", "cultural", "yaadein"],
    who: ["family", "solo", "friends", "couple"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["temple", "kirtan", "janmashtami"],
    bestTime: b("Evening. Janmashtami is especially lively", "Sham ko. Janmashtami pe khaas raunak"),
    etiquette: b("On Hare Krishna Marg (ISKCON Chowk). You mentioned Sahibabad, so confirm the exact branch - verify.", "Hare Krishna Marg (ISKCON Chowk) pe. Aapne Sahibabad bola, to sahi branch confirm karo."),
    desc: b("A peaceful ISKCON temple, busiest and brightest at Janmashtami.", "Shaant ISKCON mandir, Janmashtami pe sabse zyada raunak."),
    metro: "Cab or auto - verify",
    mapLink: gmap("ISKCON Temple Hare Krishna Marg Ghaziabad"),
    nearbyDo: [n("Mohan Nagar Temple", "Short ride", "Thodi door")],
    nearbyEat: [n("Temple prasad", "Simple vegetarian food", "Saada shaakahari khaana")]
  },

  {
    id: "masuri-jheel", name: "Masuri Jheel",
    area: "ghaziabad", city: "Ghaziabad",
    moods: ["chill", "peaceful", "adventure"],
    who: ["friends", "couple", "solo"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["lake", "sunset", "outskirts"],
    bestTime: b("Late afternoon for the light", "Dopahar ke baad, roshni ke liye"),
    etiquette: b("Very little reliable info online. Go in daylight and check ahead - verify.", "Online bahut kam jaankari hai. Din mein jao aur pehle check karo."),
    desc: b("A lake on the Dasna-Nahal road side of Ghaziabad for a quiet sit-down.", "Ghaziabad ke Dasna-Nahal road side par jheel, shaanti se baithne ke liye."),
    metro: "Cab recommended - verify",
    mapLink: gmap("Masuri Jheel Ghaziabad"),
    nearbyDo: [n("Dasna Devi Temple", "Nearby temple", "Paas mein mandir")],
    nearbyEat: [n("Highway dhabas", "Simple food on the road", "Road pe saada khaana")]
  }

);
