// ============================================================
// places-batch7.js - Mood balance: Yaadein, Cultural, Adventure, Romantic
// Sources (Sept/Oct 2026): Time Out Delhi, ExploreIndiaGuide (Sept 2026),
// Delhi Tourism heritage walk news (Outlook Traveller), Delhi Walks
// (Aug/Sept 2026 schedule), Thrillophilia, TrekGo, Veda Adventures,
// WanderOn and other couple-spot guides.
// Confidence: medium. Many adventure prices and timings are from blogs,
// so VERIFY before launch. Load AFTER places-batch6.js.
// ============================================================

PLACES.push(

  // ================= YAADEIN / CULTURAL =================
  {
    id: "phool-walon-ki-sair", name: "Phool Walon Ki Sair, Mehrauli (festival)",
    area: "south", city: "Delhi",
    moods: ["yaadein", "cultural", "peaceful"],
    who: ["family", "friends", "couple", "solo"],
    budget: "free", time: "halfday", slot: ["evening"],
    tags: ["qawwali", "festival", "seasonal"],
    bestTime: b("Held once a year between September and November, for three days. Check this year's dates.", "Saal mein ek baar, September se November ke beech, teen din. Is saal ki date check karo."),
    etiquette: b("Cover your head at the dargah and remove shoes. Dates change every year - verify.", "Dargah mein sir dhako aur joote utaaro. Date har saal badalti hai - confirm karo."),
    desc: b("A qawwali-led festival with 19th-century roots. Floral fans are offered at the dargah and the Yogmaya Temple.", "19vi sadi se chalta qawwali wala mela. Dargah aur Yogmaya mandir pe phoolon ke pankhe chadhte hain."),
    metro: "Qutub Minar (Yellow Line) + auto - verify",
    mapLink: gmap("Qutbuddin Bakhtiyar Kaki Dargah Mehrauli"),
    nearbyDo: [n("Mehrauli Archaeological Park", "Ruins walk the same day", "Usi din khandharon ki walk")],
    nearbyEat: [n("Mehrauli village cafes", "Evening chai and snacks", "Sham ki chai aur snacks")]
  },

  {
    id: "qutub-minar-complex", name: "Qutub Minar Complex",
    area: "south", city: "Delhi",
    moods: ["cultural", "yaadein", "aesthetic", "romantic"],
    who: ["family", "couple", "friends", "solo"],
    budget: "under500", time: "2hrs", slot: ["morning", "evening"],
    tags: ["unesco", "photography", "evening walks"],
    bestTime: b("Early morning or late afternoon. The fort's western gate catches direct sunset light.", "Subah jaldi ya dopahar ke baad. Western gate pe sunset ki seedhi roshni aati hai."),
    etiquette: b("Delhi Tourism runs special evening walks here - check availability - verify.", "Delhi Tourism yahan evening walks chalata hai - availability confirm karo."),
    desc: b("A 13th-century tower, ruins and carved pillars. Quieter and prettier near sunset.", "13vi sadi ki minar, khandhar aur naqqashi wale khambe. Sunset ke paas shaant aur sundar."),
    metro: "Qutub Minar (Yellow Line) - verify",
    mapLink: gmap("Qutub Minar Delhi"),
    nearbyDo: [n("Mehrauli Archaeological Park", "Right next door", "Bilkul saath mein")],
    nearbyEat: [n("Ambawatta One", "Dinner with a Qutub view", "Qutub ke view ke saath dinner")]
  },

  {
    id: "delhi-tourism-heritage-walks", name: "Delhi Tourism Evening Heritage Walks",
    area: "south", city: "Delhi",
    moods: ["cultural", "yaadein", "adventure"],
    who: ["friends", "family", "couple", "solo"],
    budget: "under500", time: "2hrs", slot: ["evening"],
    tags: ["guided walk", "mehrauli", "old delhi"],
    bestTime: b("Late afternoon and evening slots", "Dopahar ke baad aur sham ke slots"),
    etiquette: b("Walks run on set days and need booking. Check the official schedule - verify.", "Walks fixed din chalte hain aur booking chahiye. Official schedule confirm karo."),
    desc: b("Guided walks through Mehrauli, Qutub and Old Delhi, many scheduled for evenings.", "Mehrauli, Qutub aur Purani Dilli mein guided walks, kai evening mein."),
    metro: "Depends on the walk, usually Qutub Minar or Chandni Chowk - verify",
    mapLink: gmap("Delhi Tourism heritage walk Mehrauli"),
    nearbyDo: [n("Delhi Walks weekend trails", "Private groups also run Sunday walks (Hauz Khas, Lodhi, Kotla)", "Private groups Sunday walks bhi chalate hain")],
    nearbyEat: [n("Chandni Chowk food trail", "Old Delhi food walk option", "Purani Dilli food walk")]
  },

  {
    id: "ferozshah-kotla", name: "Ferozshah Kotla",
    area: "central", city: "Delhi",
    moods: ["yaadein", "cultural", "peaceful"],
    who: ["solo", "friends", "couple"],
    budget: "under500", time: "2hrs", slot: ["morning", "evening"],
    tags: ["ruined fort", "ashokan pillar", "quiet"],
    bestTime: b("Late afternoon. Locals gather here on Thursday evenings - verify", "Dopahar ke baad. Thursday sham ko log yahan jama hote hain - confirm karo"),
    etiquette: b("Heritage walks sometimes run here (Ferozabad trail). Check timings - verify.", "Kabhi kabhi yahan heritage walks (Ferozabad trail) hoti hain. Timing confirm karo."),
    desc: b("The ruins of Ferozabad, Delhi's fifth city, with a tall Ashokan pillar. Quiet and old-world.", "Dilli ke paanchve shehar Ferozabad ke khandhar, lambi Ashokan stambh ke saath. Shaant aur puraane zamane jaisa."),
    metro: "Delhi Gate or ITO (Violet Line) - verify",
    mapLink: gmap("Feroz Shah Kotla Delhi"),
    nearbyDo: [n("Delhi Gate and Daryaganj", "Old Delhi's edge", "Purani Dilli ka kinara")],
    nearbyEat: [n("Daryaganj eateries", "Old-school kebabs and chai", "Purane kebab aur chai")]
  },

  {
    id: "dhan-mill-compound", name: "Dhan Mill Compound, Chhatarpur",
    area: "south", city: "Delhi",
    moods: ["aesthetic", "chill", "foodie", "yaadein"],
    who: ["friends", "couple", "genz", "solo"],
    budget: "under1500", time: "halfday", slot: ["morning", "evening"],
    tags: ["cafe hopping", "design stores", "vintage"],
    bestTime: b("Afternoon, when the stores and cafes are open", "Dopahar mein, jab stores aur cafes khule hote hain"),
    etiquette: b("Timings vary store by store - verify.", "Har store ka time alag - confirm karo."),
    desc: b("A converted mill compound full of design stores, thrift finds and quiet cafes.", "Purani mill ka compound: design stores, thrift finds aur shaant cafes."),
    metro: "Chhatarpur (Yellow Line) + auto - verify",
    mapLink: gmap("Dhan Mill Compound Chhatarpur Delhi"),
    nearbyDo: [n("Mehrauli", "Short ride for ruins and cafes", "Khandhar aur cafes ke liye thodi door")],
    nearbyEat: [n("Cafes inside the compound", "Coffee, bakes and brunch", "Coffee, bakes aur brunch")]
  },

  {
    id: "majnu-ka-tilla", name: "Majnu Ka Tilla (Tibetan Colony)",
    area: "olddelhi", city: "Delhi",
    moods: ["foodie", "cultural", "chill", "aesthetic"],
    who: ["friends", "genz", "couple", "solo"],
    budget: "under500", time: "halfday", slot: ["morning", "evening"],
    tags: ["tibetan food", "momos", "prayer flags"],
    bestTime: b("Afternoon to evening", "Dopahar se sham tak"),
    etiquette: b("Narrow lanes. Carry cash for small stalls.", "Gali sankri hai. Chhote stalls ke liye cash rakho."),
    desc: b("Tibetan lanes with momos, thukpa, cafes and prayer flags. Feels like another city.", "Tibetan galiyan: momo, thukpa, cafes aur prayer flags. Alag shehar jaisa."),
    metro: "Vidhan Sabha (Yellow Line) + auto - verify",
    mapLink: gmap("Majnu Ka Tilla Delhi"),
    nearbyDo: [n("Yamuna ghat", "Quiet riverside walk", "Shaant nadi kinare walk")],
    nearbyEat: [n("Tibetan restaurants", "Momos, thukpa and butter tea", "Momo, thukpa aur butter tea")]
  },

  // ================= ROMANTIC =================
  {
    id: "deer-park-hauz-khas", name: "Deer Park, Hauz Khas",
    area: "south", city: "Delhi",
    moods: ["romantic", "chill", "peaceful", "aesthetic"],
    who: ["couple", "friends", "family", "solo"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["park", "lake views", "birds"],
    bestTime: b("Early morning or just before sunset", "Subah jaldi ya sunset se pehle"),
    etiquette: b("", ""),
    desc: b("A green park with deer, lake views and quiet benches. Popular with couples.", "Hara park, hiran, jheel ke view aur shaant benches. Couples mein popular."),
    metro: "Hauz Khas (Yellow Line) - verify",
    mapLink: gmap("Deer Park Hauz Khas Delhi"),
    nearbyDo: [n("Hauz Khas Fort and lake", "Short walk away", "Paidal thodi door")],
    nearbyEat: [n("Hauz Khas Village cafes", "Rooftop dinners", "Rooftop dinner")]
  },

  {
    id: "parthasarathy-rocks", name: "Parthasarathy Rocks, JNU",
    area: "south", city: "Delhi",
    moods: ["romantic", "peaceful", "adventure", "chill"],
    who: ["couple", "friends", "solo"],
    budget: "free", time: "2hrs", slot: ["evening"],
    tags: ["sunset point", "rocks", "campus"],
    bestTime: b("Just before sunset", "Sunset se thoda pehle"),
    etiquette: b("Inside JNU campus. Entry rules and ID checks may apply - verify.", "JNU campus ke andar. Entry rules aur ID check ho sakte hain - confirm karo."),
    desc: b("Rocky outcrops in the JNU campus with open views. A free, quiet sunset spot.", "JNU campus ke pathar, khule view. Free aur shaant sunset spot."),
    metro: "Munirka or Hauz Khas + auto - verify",
    mapLink: gmap("Parthasarathy Rocks JNU Delhi"),
    nearbyDo: [n("Deer Park", "Another green stop", "Ek aur hara stop")],
    nearbyEat: [n("Ganga Dhaba, JNU", "Classic campus chai", "Campus ki classic chai")]
  },

  {
    id: "champa-gali", name: "Champa Gali, Saket-Mehrauli Road",
    area: "south", city: "Delhi",
    moods: ["romantic", "aesthetic", "chill", "foodie"],
    who: ["couple", "friends", "genz"],
    budget: "under1500", time: "halfday", slot: ["morning", "evening"],
    tags: ["cafe lane", "garden cafes", "art"],
    bestTime: b("Late afternoon, cafes fill up by evening", "Dopahar ke baad, shaam tak cafes bhar jaate hain"),
    etiquette: b("Weekends get crowded. Cafe timings vary - verify.", "Weekend pe bheed. Cafe timing alag - confirm karo."),
    desc: b("A leafy lane of garden cafes and art spaces, a go-to for a cafe date.", "Hari-bhari gali: garden cafes aur art spaces. Cafe date ke liye pehli pasand."),
    metro: "Saket or Chhatarpur + auto - verify",
    mapLink: gmap("Champa Gali Saket Mehrauli Road Delhi"),
    nearbyDo: [n("Garden of Five Senses", "Walk before coffee", "Coffee se pehle walk")],
    nearbyEat: [n("Garden cafes on the lane", "Brunch and coffee", "Brunch aur coffee")]
  },

  {
    id: "olive-mehrauli", name: "Olive Bar and Kitchen, Mehrauli",
    area: "south", city: "Delhi",
    moods: ["romantic", "party"],
    who: ["couple", "friends"],
    budget: "splurge", time: "2hrs", slot: ["evening", "latenight"],
    tags: ["mediterranean", "candlelit", "courtyard"],
    bestTime: b("Dinner, book ahead for outdoor seating", "Dinner, outdoor seating ke liye pehle book karo"),
    etiquette: b("Fine-dining prices. Check current menu and cost - verify.", "Fine-dining ke price. Menu aur cost confirm karo."),
    desc: b("A whitewashed Mediterranean courtyard with candlelit outdoor seating.", "Safed Mediterranean courtyard, candle ki roshni mein outdoor seating."),
    metro: "Qutub Minar (Yellow Line) + cab - verify",
    mapLink: gmap("Olive Bar and Kitchen Mehrauli Delhi"),
    nearbyDo: [n("Qutub Minar Complex", "Golden-hour walk before dinner", "Dinner se pehle golden hour walk")],
    nearbyEat: [n("Ambawatta One", "More dinner options nearby", "Paas mein aur dinner options")]
  },

  // ================= ADVENTURE =================
  {
    id: "f9-go-karting", name: "F9 Go Karting, Sector 29",
    area: "gurgaon", city: "Gurgaon",
    moods: ["adventure", "party"],
    who: ["friends", "genz", "couple", "family"],
    budget: "under1500", time: "2hrs", slot: ["evening", "latenight"],
    tags: ["go-karting", "racing", "group fun"],
    bestTime: b("Evening or weekend afternoons", "Sham ya weekend ki dopahar"),
    etiquette: b("Book slots ahead, wear closed shoes. Check prices - verify.", "Slot pehle book karo, band joote pehno. Price confirm karo."),
    desc: b("NCR's well-known go-karting track. Race your friends lap after lap.", "NCR ka mashhoor go-karting track. Dosto ke saath race lagao."),
    metro: "Cab recommended - verify",
    mapLink: gmap("F9 Go Karting Sector 29 Gurgaon"),
    nearbyDo: [n("Sector 29 market", "Food and nightlife nearby", "Paas mein khaana aur nightlife")],
    nearbyEat: [n("Sector 29 cafes and pubs", "Dinner after the race", "Race ke baad dinner")]
  },

  {
    id: "imf-climbing-wall", name: "Indian Mountaineering Foundation Climbing Wall",
    area: "south", city: "Delhi",
    moods: ["adventure"],
    who: ["friends", "solo", "family", "genz"],
    budget: "under500", time: "2hrs", slot: ["morning", "evening"],
    tags: ["rock climbing", "artificial wall", "beginner friendly"],
    bestTime: b("Mornings and evenings, book in advance", "Subah aur sham, pehle book karo"),
    etiquette: b("Instructors help beginners. Check session timings and fees - verify.", "Instructors beginners ki madad karte hain. Session timing aur fee confirm karo."),
    desc: b("An artificial climbing wall in South Delhi where beginners can try real rock-climbing moves.", "South Delhi mein artificial climbing wall, beginners bhi try kar sakte hain."),
    metro: "Cab or auto - verify",
    mapLink: gmap("Indian Mountaineering Foundation Delhi climbing wall"),
    nearbyDo: [n("Delhi Cantonment area", "Quiet roads for a post-climb stroll", "Climb ke baad shaant sadkon pe walk")],
    nearbyEat: [n("Cafes in nearby markets", "Easy post-activity meal", "Activity ke baad aasan khaana")]
  },

  {
    id: "camp-wild-dhauj", name: "Camp Wild Dhauj, Aravallis",
    area: "gurgaon", city: "Dhauj (Faridabad-Gurgaon border)",
    moods: ["adventure", "peaceful", "chill"],
    who: ["friends", "genz", "family", "couple"],
    budget: "under1500", time: "fullday", slot: ["morning"],
    tags: ["rock climbing", "rappelling", "village tour"],
    bestTime: b("October to March, about an hour from Delhi", "October se March, Delhi se lagbhag ek ghanta"),
    etiquette: b("Activities and packages vary by camp - confirm and book ahead - verify.", "Activities aur packages camp ke hisaab se alag - confirm karke book karo."),
    desc: b("An Aravalli campsite for rock climbing, rappelling, hiking and village tours.", "Aravalli ka campsite: rock climbing, rappelling, hiking aur village tour."),
    metro: "No metro, take a cab - verify",
    mapLink: gmap("Camp Wild Dhauj Faridabad Gurgaon"),
    nearbyDo: [n("Leopard Trail", "Another Aravalli hike", "Ek aur Aravalli hike")],
    nearbyEat: [n("Camp meals", "Simple food included in many packages", "Zyada tar packages mein saada khaana")]
  },

  {
    id: "veda-adventures-noida", name: "Veda Adventures, Noida",
    area: "noida", city: "Noida",
    moods: ["adventure", "party"],
    who: ["friends", "genz", "family", "couple"],
    budget: "under1500", time: "halfday", slot: ["morning", "evening"],
    tags: ["zipline", "paramotoring", "atv"],
    bestTime: b("October to March, weekends fill up", "October se March, weekend pe bheed"),
    etiquette: b("Paramotoring was listed around ₹2,499 and ATV about ₹400 to ₹500 - verify.", "Paramotoring lagbhag ₹2,499 aur ATV ₹400 se ₹500 bataya gaya - confirm karo."),
    desc: b("An adventure park with ziplines, a rope course, zorbs, ATV rides and paramotoring.", "Adventure park: zipline, rope course, zorb, ATV aur paramotoring."),
    metro: "Cab recommended - verify",
    mapLink: gmap("Veda Adventures Noida"),
    nearbyDo: [n("Adventure pass activities", "Zipline, climbing and zorb games included", "Zipline, climbing aur zorb pass mein")],
    nearbyEat: [n("Veda Cafe", "On-site cafe", "Andar cafe")]
  }

);
