// ============================================================
// places-batch1.js - Batch 1: Old Delhi + heritage + South Delhi
// Loads AFTER data.js and adds to the existing PLACES array.
// Same structure as data.js, just with two tiny helpers to
// avoid typing the same thing again and again.
// VERIFY timings, ticket prices, metro and closing days on
// Google Maps before launch.
// ============================================================

const b = (en, hi) => ({ en, hi });                                   // bilingual text
const gmap = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

PLACES.push(

  {
    id: "jama-masjid", name: "Jama Masjid",
    area: "olddelhi", city: "Delhi",
    moods: ["yaadein", "cultural", "peaceful", "aesthetic"],
    who: ["solo", "friends", "family", "couple"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["heritage", "mughal", "photography"],
    bestTime: b("Late afternoon, when the light turns golden", "Dopahar ke baad, jab roshni sunehri hoti hai"),
    etiquette: b("Dress modestly, cover shoulders and legs, avoid prayer times.", "Simple kapde pehno, kandhe aur ghutne dhako, namaz ke time avoid karo."),
    desc: b("Mughal grandeur with the whole of Old Delhi spread out below you.", "Mughal shaan, aur neeche poori Purani Dilli ka nazaara."),
    metro: "Jama Masjid (Violet Line) - verify",
    mapLink: gmap("Jama Masjid Delhi"),
    nearbyDo: [
      { name: "Red Fort", note: b("A short ride away", "Thodi door, rickshaw le lo") },
      { name: "Meena Bazaar lanes", note: b("Bargain for bangles and attar", "Chudiyan aur itar, bhaav-taav karo") }
    ],
    nearbyEat: [
      { name: "Karim's", note: b("Legendary Mughlai just behind the mosque", "Masjid ke peeche, mashhoor Mughlai") }
    ]
  },

  {
    id: "karims-old-delhi", name: "Karim's, Old Delhi",
    area: "olddelhi", city: "Delhi",
    moods: ["foodie", "yaadein", "cultural"],
    who: ["friends", "family", "couple", "genz"],
    budget: "under500", time: "2hrs", slot: ["evening", "latenight"],
    tags: ["mughlai", "old-school food", "iconic"],
    bestTime: b("Early dinner, before the rush", "Jaldi dinner, bheed se pehle"),
    etiquette: b("", ""),
    desc: b("Kebabs and curries from a kitchen that has been at it for generations.", "Kebab aur curry, pushton se chalti rasoi ki."),
    metro: "Jama Masjid (Violet Line) - verify",
    mapLink: gmap("Karim's Jama Masjid Delhi"),
    nearbyDo: [
      { name: "Jama Masjid", note: b("Walk it off after dinner", "Khaane ke baad ghoom lo") }
    ],
    nearbyEat: [
      { name: "Gali Kababian lane", note: b("Smaller kebab shops around the same lane", "Isi gali mein aur kebab wale") }
    ]
  },

  {
    id: "chandni-chowk-food-walk", name: "Chandni Chowk Food Walk",
    area: "olddelhi", city: "Delhi",
    moods: ["foodie", "yaadein", "cultural", "adventure"],
    who: ["friends", "family", "genz", "solo"],
    budget: "under500", time: "halfday", slot: ["morning", "evening"],
    tags: ["street food", "chaos", "old lanes"],
    bestTime: b("Late morning or evening, avoid peak Sunday crowds", "Subah late ya sham, Sunday ki bheed se bacho"),
    etiquette: b("Carry small cash, wear comfy shoes, keep your bag in front.", "Chhote notes rakho, aaram wale joote, bag aage rakho."),
    desc: b("Parathas, jalebi, chaat and lassi, one lane after another.", "Paranthe, jalebi, chaat, lassi. Gali dar gali."),
    metro: "Chandni Chowk (Yellow Line) - verify",
    mapLink: gmap("Chandni Chowk Delhi"),
    nearbyDo: [
      { name: "Red Fort", note: b("Walk down the main road", "Seedha road pe chalte jao") },
      { name: "Gurdwara Sis Ganj Sahib", note: b("Calm break from the chaos", "Bheed se thodi shaanti") }
    ],
    nearbyEat: [
      { name: "Paranthe Wali Gali", note: b("Stuffed parathas, fried fresh", "Garma garam bhare paranthe") }
    ]
  },

  {
    id: "red-fort", name: "Red Fort",
    area: "olddelhi", city: "Delhi",
    moods: ["cultural", "yaadein", "aesthetic"],
    who: ["family", "friends", "solo", "couple"],
    budget: "under500", time: "halfday", slot: ["morning"],
    tags: ["heritage", "unesco", "history"],
    bestTime: b("Morning, before it gets hot", "Subah, garmi se pehle"),
    etiquette: b("Closed on Mondays - verify. Security check at entry.", "Monday ko band - confirm kar lena. Entry pe security check."),
    desc: b("Mughal walls, courtyards and halls. Give it a slow morning.", "Mughal deewarein aur aangan. Aaram se subah do."),
    metro: "Lal Qila (Violet Line) - verify",
    mapLink: gmap("Red Fort Delhi"),
    nearbyDo: [
      { name: "Chandni Chowk", note: b("Straight into the market", "Seedha bazaar mein") }
    ],
    nearbyEat: [
      { name: "Old Famous Jalebi Wala", note: b("Hot jalebis, a classic stop", "Garam jalebi, classic stop") }
    ]
  },

  {
    id: "purana-qila", name: "Purana Qila",
    area: "central", city: "Delhi",
    moods: ["yaadein", "romantic", "cultural", "chill"],
    who: ["couple", "friends", "family", "solo"],
    budget: "under500", time: "2hrs", slot: ["evening"],
    tags: ["fort", "boating", "sound and light"],
    bestTime: b("Evening, for the light and the show - check timings", "Sham ko, light aur show ke liye - timing check karo"),
    etiquette: b("Show timings and boating change by season - verify.", "Show aur boating ke time season se badalte hain - confirm karo."),
    desc: b("A ruined fort, a quiet lake and an evening show with Delhi's history.", "Purana qila, shaant jheel, aur sham ko Dilli ki kahani."),
    metro: "Pragati Maidan (Blue Line) - verify",
    mapLink: gmap("Purana Qila Delhi"),
    nearbyDo: [
      { name: "India Gate", note: b("Evening walk and ice cream", "Sham ki walk aur ice cream") },
      { name: "National Zoological Park", note: b("Good for family plans", "Family plan ke liye acha") }
    ],
    nearbyEat: [
      { name: "Pandara Road restaurants", note: b("Several North Indian places close by", "Aas-paas kai North Indian restaurants") }
    ]
  },

  {
    id: "humayuns-tomb", name: "Humayun's Tomb",
    area: "south", city: "Delhi",
    moods: ["cultural", "aesthetic", "yaadein", "peaceful"],
    who: ["couple", "friends", "family", "solo"],
    budget: "under500", time: "2hrs", slot: ["morning", "evening"],
    tags: ["unesco", "photography", "garden tomb"],
    bestTime: b("Golden hour, an hour before sunset", "Sunset se ek ghanta pehle"),
    etiquette: b("", ""),
    desc: b("The red sandstone tomb that inspired the Taj. Best at golden hour.", "Lal pathar ka maqbara, jisne Taj ko inspire kiya. Golden hour mein best."),
    metro: "JLN Stadium (Violet Line) - verify",
    mapLink: gmap("Humayun's Tomb Delhi"),
    nearbyDo: [
      { name: "Sunder Nursery", note: b("Right next door, easy to combine", "Bilkul saath mein, jodke chalo") },
      { name: "Nizamuddin Dargah", note: b("Qawwali after sunset", "Sunset ke baad qawwali") }
    ],
    nearbyEat: [
      { name: "Karim's (Nizamuddin)", note: b("Kebabs near the dargah", "Dargah ke paas kebab") }
    ]
  },

  {
    id: "sunder-nursery", name: "Sunder Nursery",
    area: "south", city: "Delhi",
    moods: ["aesthetic", "romantic", "chill", "peaceful", "yaadein"],
    who: ["couple", "friends", "family", "solo"],
    budget: "under500", time: "2hrs", slot: ["morning", "evening"],
    tags: ["gardens", "monuments", "picnic"],
    bestTime: b("Late afternoon into evening", "Dopahar ke baad se sham tak"),
    etiquette: b("", ""),
    desc: b("Landscaped gardens, old monuments and big open lawns.", "Sundar bagiche, purane monuments aur khule lawn."),
    metro: "JLN Stadium (Violet Line) - verify",
    mapLink: gmap("Sunder Nursery Delhi"),
    nearbyDo: [
      { name: "Humayun's Tomb", note: b("Walk across", "Paidal pahunch jao") }
    ],
    nearbyEat: [
      { name: "Lodhi Colony cafes", note: b("A few minutes by cab", "Cab se kuch minute") }
    ]
  },

  {
    id: "bangla-sahib", name: "Gurudwara Bangla Sahib",
    area: "central", city: "Delhi",
    moods: ["peaceful", "yaadein", "cultural"],
    who: ["solo", "family", "friends", "couple"],
    budget: "free", time: "2hrs", slot: ["morning", "evening"],
    tags: ["kirtan", "langar", "calm"],
    bestTime: b("Evening, for the kirtan and the lit-up sarovar", "Sham ko, kirtan aur roshan sarovar ke liye"),
    etiquette: b("Cover your head, remove shoes, wash feet at the entrance.", "Sir dhako, joote utaaro, pair dho ke andar jao."),
    desc: b("Kirtan, a still pool and a free meal for everyone.", "Kirtan, shaant sarovar, aur sabke liye langar."),
    metro: "Patel Chowk (Yellow Line) - verify",
    mapLink: gmap("Gurudwara Bangla Sahib Delhi"),
    nearbyDo: [
      { name: "Connaught Place", note: b("Walk or short ride", "Paidal ya chhoti ride") },
      { name: "Jantar Mantar", note: b("Old astronomical instruments", "Purane khagol yantra") }
    ],
    nearbyEat: [
      { name: "Langar", note: b("Free, simple and filling", "Free, saada aur pet bhar") }
    ]
  },

  {
    id: "mehrauli-park", name: "Mehrauli Archaeological Park",
    area: "south", city: "Delhi",
    moods: ["yaadein", "cultural", "aesthetic", "peaceful", "adventure"],
    who: ["friends", "couple", "solo"],
    budget: "free", time: "halfday", slot: ["morning", "evening"],
    tags: ["ruins", "walk", "hidden gem"],
    bestTime: b("Morning or late afternoon", "Subah ya dopahar ke baad"),
    etiquette: b("Wear sturdy shoes. Better to go in a group.", "Mazboot joote pehno. Group mein jana better."),
    desc: b("Centuries of ruins in the trees, far quieter than the big monuments.", "Sadiyon purane khandhar, bade monuments se kahin zyada shaant."),
    metro: "Qutub Minar (Yellow Line) - verify",
    mapLink: gmap("Mehrauli Archaeological Park Delhi"),
    nearbyDo: [
      { name: "Qutub Minar", note: b("Close by, an easy add-on", "Paas mein hi, add kar lo") }
    ],
    nearbyEat: [
      { name: "Mehrauli village cafes", note: b("Cafes in the old lanes", "Purani galiyon mein cafes") }
    ]
  },

  {
    id: "hauz-khas-village", name: "Hauz Khas Village",
    area: "south", city: "Delhi",
    moods: ["aesthetic", "party", "romantic", "chill"],
    who: ["couple", "friends", "genz"],
    budget: "under1500", time: "halfday", slot: ["evening", "latenight"],
    tags: ["cafes", "lake view", "nightlife"],
    bestTime: b("Late afternoon for the lake, night for the buzz", "Dopahar mein jheel, raat ko maza"),
    etiquette: b("", ""),
    desc: b("Ruins by a lake, with cafes and bars right in the lanes.", "Jheel ke paas khandhar, aur galiyon mein cafes aur bars."),
    metro: "Hauz Khas (Yellow Line) - verify",
    mapLink: gmap("Hauz Khas Village Delhi"),
    nearbyDo: [
      { name: "Deer Park", note: b("Easy green walk nearby", "Paas mein green walk") },
      { name: "Hauz Khas Fort", note: b("Ruins right at the lake", "Jheel ke kinare khandhar") }
    ],
    nearbyEat: [
      { name: "HKV cafes and bars", note: b("Plenty for every budget", "Har budget ke options") }
    ]
  }

);
