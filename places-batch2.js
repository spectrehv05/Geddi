// ============================================================
// places-batch2.js - Batch 2: Gurgaon + Noida + more Delhi
// Load AFTER places-batch1.js. It reuses b() and gmap() from
// batch 1, so don't declare them again here.
// VERIFY timings, ticket prices, metro and whether each place
// is currently open before launch.
// ============================================================

// tiny helper for nearby items: n("Name", "English note", "Hinglish note")
const n = (name, en, hi) => ({ name, note: b(en, hi) });

PLACES.push(

  // ---------------- GURGAON ----------------
  {
    id: "cyber-hub", name: "Cyber Hub",
    area: "gurgaon", city: "Gurgaon",
    moods: ["party", "foodie", "chill"],
    who: ["friends", "genz", "couple"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["restaurants", "bars", "open-air"],
    bestTime: b("Evening onwards, weekends get busy", "Sham se aage, weekend pe bheed"),
    etiquette: b("", ""),
    desc: b("Open-air food street with bars, live music and a young crowd.", "Khule mein food street, bars, live music aur young crowd."),
    metro: "Belvedere Towers (Rapid Metro) - verify",
    mapLink: gmap("Cyber Hub Gurgaon"),
    nearbyDo: [n("Cyber Hub lakeside", "Walk by the water", "Paani ke paas walk")],
    nearbyEat: [n("Cyber Hub restaurants", "Dozens of cuisines in one place", "Ek jagah kai cuisines")]
  },

  {
    id: "kingdom-of-dreams", name: "Kingdom of Dreams",
    area: "gurgaon", city: "Gurgaon",
    moods: ["cultural", "party", "romantic"],
    who: ["family", "couple", "friends"],
    budget: "splurge", time: "halfday", slot: ["evening"],
    tags: ["live shows", "theatre", "food"],
    bestTime: b("Evening show, book ahead", "Sham ka show, pehle book karo"),
    etiquette: b("Check that it is open and the show timings - verify.", "Open hai ya nahi aur show timing - confirm karo."),
    desc: b("Big Bollywood-style live theatre plus themed food lanes.", "Bade Bollywood-style live show aur themed food gali."),
    metro: "IFFCO Chowk (Yellow Line) + cab - verify",
    mapLink: gmap("Kingdom of Dreams Gurgaon"),
    nearbyDo: [n("Culture Gully", "Craft stalls and food", "Craft stalls aur khaana")],
    nearbyEat: [n("Culture Gully food lanes", "Regional dishes in one place", "Alag-alag state ka khaana")]
  },

  {
    id: "sultanpur-national-park", name: "Sultanpur National Park",
    area: "gurgaon", city: "Gurgaon",
    moods: ["peaceful", "adventure", "aesthetic", "chill"],
    who: ["solo", "friends", "family", "couple"],
    budget: "under500", time: "halfday", slot: ["morning"],
    tags: ["birdwatching", "nature", "photography"],
    bestTime: b("Winter mornings, when migratory birds arrive", "Sardiyon ki subah, jab pravasi pakshi aate hain"),
    etiquette: b("Go early, keep quiet and carry water. Check entry timings - verify.", "Jaldi jao, shor mat karo, paani le jao. Timing confirm karo."),
    desc: b("A bird sanctuary just outside the city. Wake up early, thank yourself later.", "Shehar ke bahar pakshi abhayaranya. Jaldi uthoge, maza aayega."),
    metro: "No metro, take a cab - verify",
    mapLink: gmap("Sultanpur National Park Gurgaon"),
    nearbyDo: [n("Walking trails inside the park", "Stroll and spot birds", "Trail pe ghoomo aur pakshi dekho")],
    nearbyEat: [n("Highway dhabas on the way", "Simple parathas and chai", "Paranthe aur chai")]
  },

  {
    id: "damdama-lake", name: "Damdama Lake",
    area: "gurgaon", city: "Sohna, Gurgaon",
    moods: ["adventure", "chill", "aesthetic"],
    who: ["friends", "genz", "family", "couple"],
    budget: "under1500", time: "fullday", slot: ["morning"],
    tags: ["lake", "boating", "day trip"],
    bestTime: b("Morning start, leave before it gets dark", "Subah nikalo, andhera hone se pehle lautna"),
    etiquette: b("It's a long drive, so plan the return. Check activities - verify.", "Door hai, wapsi plan karo. Activities confirm karo."),
    desc: b("A weekend lake escape with boating and open sky.", "Weekend ke liye jheel, boating aur khula aasman."),
    metro: "No metro, take a cab - verify",
    mapLink: gmap("Damdama Lake Sohna"),
    nearbyDo: [n("Lakeside boating", "Pedal or row on the water", "Paani pe boating")],
    nearbyEat: [n("Lakeside food stalls", "Snacks with a view", "View ke saath snacks")]
  },

  // ---------------- NOIDA ----------------
  {
    id: "noida-sector-18", name: "Sector 18 and DLF Mall of India",
    area: "noida", city: "Noida",
    moods: ["party", "foodie", "aesthetic"],
    who: ["friends", "genz", "family", "couple"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["mall", "street shopping", "food"],
    bestTime: b("Evening, weekends are packed", "Sham ko, weekend pe bheed"),
    etiquette: b("", ""),
    desc: b("A huge mall and busy market lanes side by side. Noida's go-to for plans.", "Bada mall aur bheed wale bazaar, saath saath. Noida ka plan-hub."),
    metro: "Noida Sector 18 (Blue Line) - verify",
    mapLink: gmap("DLF Mall of India Noida"),
    nearbyDo: [n("Atta Market", "Street shopping and snacks", "Street shopping aur snacks")],
    nearbyEat: [n("Mall food courts and cafes", "Easy options for groups", "Group ke liye aasan options")]
  },

  {
    id: "worlds-of-wonder", name: "Worlds of Wonder",
    area: "noida", city: "Noida",
    moods: ["adventure", "party"],
    who: ["friends", "genz", "family", "couple"],
    budget: "under1500", time: "fullday", slot: ["morning"],
    tags: ["amusement park", "water rides", "thrills"],
    bestTime: b("Weekday mornings, summer for water rides", "Weekday ki subah, garmi mein water rides"),
    etiquette: b("Carry a change of clothes. Check ticket prices - verify.", "Kapde badalne ko le jao. Ticket price confirm karo."),
    desc: b("Rides and water slides for a full day of screaming.", "Rides aur water slides, poora din chillao."),
    metro: "Botanical Garden (Blue Line) + auto - verify",
    mapLink: gmap("Worlds of Wonder Noida"),
    nearbyDo: [n("Botanical Garden metro area", "Handy transport hub", "Transport ke liye aasan")],
    nearbyEat: [n("Park food courts", "Snacks inside", "Andar snacks")]
  },

  {
    id: "okhla-bird-sanctuary", name: "Okhla Bird Sanctuary",
    area: "noida", city: "Noida",
    moods: ["peaceful", "adventure", "aesthetic", "chill"],
    who: ["solo", "friends", "couple", "family"],
    budget: "under500", time: "halfday", slot: ["morning"],
    tags: ["birds", "river", "walk"],
    bestTime: b("Early morning in winter", "Sardiyon ki jaldi subah"),
    etiquette: b("Keep quiet, carry a camera or binoculars. Timings - verify.", "Shor mat karo, camera ya binoculars le jao. Timing confirm karo."),
    desc: b("A wetland full of birds on the Yamuna, right on the Delhi-Noida edge.", "Yamuna ke kinare pakshiyon se bhari wetland, Delhi-Noida border pe."),
    metro: "Botanical Garden (Blue Line) + auto - verify",
    mapLink: gmap("Okhla Bird Sanctuary Noida"),
    nearbyDo: [n("Trails along the water", "Slow nature walk", "Aaram ki nature walk")],
    nearbyEat: [n("Cafes in Noida Sector 18", "Easy meal afterwards", "Baad mein aaram se khaana")]
  },

  // ---------------- MORE DELHI ----------------
  {
    id: "connaught-place", name: "Connaught Place",
    area: "central", city: "Delhi",
    moods: ["party", "romantic", "foodie", "yaadein"],
    who: ["friends", "couple", "genz", "family"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["colonnades", "bars", "cafes"],
    bestTime: b("Evening, when the arcades light up", "Sham ko, jab arcades jagmagate hain"),
    etiquette: b("", ""),
    desc: b("White colonnades, old cafes and bars. Delhi's classic hangout.", "Safed colonnades, purane cafes aur bars. Dilli ka classic adda."),
    metro: "Rajiv Chowk (Yellow and Blue Line) - verify",
    mapLink: gmap("Connaught Place Delhi"),
    nearbyDo: [n("Central Park", "Sit on the lawns", "Lawn pe baitho"), n("Janpath", "Street shopping", "Street shopping")],
    nearbyEat: [n("Wenger's and Indian Coffee House", "Classic old-school stops", "Purane classic stops")]
  },

  {
    id: "garden-of-five-senses", name: "Garden of Five Senses",
    area: "south", city: "Delhi",
    moods: ["romantic", "chill", "aesthetic", "peaceful"],
    who: ["couple", "friends", "family", "solo"],
    budget: "under500", time: "2hrs", slot: ["morning", "evening"],
    tags: ["garden", "sculptures", "picnic"],
    bestTime: b("Cooler months, late afternoon", "Thandi mein, dopahar ke baad"),
    etiquette: b("Check events and ticket prices - verify.", "Events aur ticket price confirm karo."),
    desc: b("A landscaped park with sculptures, pathways and quiet corners.", "Sculptures, raaste aur shaant kone wala sajaya hua park."),
    metro: "Saket (Yellow Line) + auto - verify",
    mapLink: gmap("Garden of Five Senses Delhi"),
    nearbyDo: [n("Saket malls", "Easy add-on", "Saath mein jod lo")],
    nearbyEat: [n("Saket cafes", "Options for every budget", "Har budget ke options")]
  },

  {
    id: "dilli-haat-ina", name: "Dilli Haat INA",
    area: "south", city: "Delhi",
    moods: ["foodie", "cultural", "aesthetic"],
    who: ["family", "friends", "couple", "solo"],
    budget: "under500", time: "2hrs", slot: ["evening"],
    tags: ["crafts", "regional food", "market"],
    bestTime: b("Late afternoon into evening", "Dopahar ke baad se sham tak"),
    etiquette: b("Small entry ticket. Check timings - verify.", "Chhota entry ticket. Timing confirm karo."),
    desc: b("Crafts from across India and food stalls from every state.", "Poore India ke craft aur har state ke khaane ke stall."),
    metro: "INA (Yellow and Pink Line) - verify",
    mapLink: gmap("Dilli Haat INA Delhi"),
    nearbyDo: [n("INA Market", "Fresh produce and spices", "Taaza saaman aur masale")],
    nearbyEat: [n("State-wise food stalls", "Try something new", "Kuch naya try karo")]
  },

  {
    id: "india-gate", name: "India Gate",
    area: "central", city: "Delhi",
    moods: ["chill", "aesthetic", "yaadein"],
    who: ["family", "friends", "couple", "genz"],
    budget: "free", time: "2hrs", slot: ["evening", "latenight"],
    tags: ["lawns", "ice cream", "night lights"],
    bestTime: b("Evening, after the lights come on", "Sham ko, lights jalne ke baad"),
    etiquette: b("", ""),
    desc: b("Wide lawns, evening lights and ice cream. Cheapest good plan in Delhi.", "Khule lawn, sham ki lights aur ice cream. Dilli ka sabse sasta acha plan."),
    metro: "Central Secretariat (Yellow and Violet Line) + auto - verify",
    mapLink: gmap("India Gate Delhi"),
    nearbyDo: [n("Purana Qila", "A short ride away", "Thodi door")],
    nearbyEat: [n("Pandara Road restaurants", "Several North Indian options", "Kai North Indian options")]
  }

);
