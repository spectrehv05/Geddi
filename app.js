// ============================================================
// app.js - uses MOODS, FILTERS, PLACES from data.js
// ============================================================

let lang = "hi";                       // "en" or "hi" (Hinglish)
let currentMood = null;                // mood id
let selected = { who: "any", budget: "any", time: "any", slot: "any", area: "any" };

// ---------- UI text (also bilingual) ----------
const UI = {
  moodQ:    { en: "What's your mood today?", hi: "Aaj kya mood hai?" },
  hint:     { en: "Pick a mood to see where to go.", hi: "Mood chuno, plan mil jayega." },
  none:     { en: "Nothing matches yet. Try removing a filter.", hi: "Kuch nahi mila. Ek filter hata ke dekho." },
  any:      { en: "Any", hi: "Koi bhi" },
  nearDo:   { en: "Do nearby", hi: "Aas-paas kya karein" },
  nearEat:  { en: "Eat nearby", hi: "Aas-paas kya khayein" },
  best:     { en: "Best time", hi: "Best time" },
  metro:    { en: "Metro", hi: "Metro" },
  etiquette:{ en: "Good to know", hi: "Dhyan rakhna" },
  map:      { en: "Open in Maps", hi: "Maps mein kholo" },
  share:    { en: "Share on WhatsApp", hi: "WhatsApp pe bhejo" },
  back:     { en: "Back to places", hi: "Wapas places pe" },
  toggle:   { en: "EN | Hinglish", hi: "EN | Hinglish" },
  budgetIs: { en: "Budget", hi: "Budget" },
  heroTitle:{ en: "Where to today? Tell us your mood, we'll plan the rest.", hi: "Aaj kahan? Mood batao, plan hum denge." },
  heroSub:  { en: "Last-minute plans across Delhi NCR, matched to your mood and your crowd.", hi: "Delhi NCR ke last-minute plans, tumhare mood aur tumhare gang ke hisaab se." },
  surprise: { en: "Surprise me", hi: "Surprise Me" },
  again:    { en: "Surprise me again", hi: "Ek aur surprise" },
  removeLabel: { en: "Remove", hi: "Hata do" },
  clearAll: { en: "Clear all filters", hi: "Saare filter hata do" },
  disclaimer: { en: "Timings, prices and openings change. Please check before you head out.", hi: "Timing, price aur openings badalte rehte hain. Nikalne se pehle ek baar check kar lena." },
  updated:  { en: `Last updated: ${SITE.updated}.`, hi: `Last updated: ${SITE.updated}.` },
  feedback: { en: "Spotted something wrong? Tell us.", hi: "Kuch galat dikha? Bata do." },
  footer:   { en: "Made for Delhi NCR evenings.", hi: "Dilli NCR ki shaamon ke liye." }
};

const FILTER_TITLES = {
  who:    { en: "Going with", hi: "Kiske saath" },
  budget: { en: "Budget",     hi: "Budget" },
  time:   { en: "Time",       hi: "Time" },
  slot:   { en: "Time of day", hi: "Din ka time" },
  area:   { en: "Area",       hi: "Area" }
};

const FILTER_LABELS = {
  who:    { solo: { en: "Solo", hi: "Akele" }, couple: { en: "Couple", hi: "Couple" }, friends: { en: "Friends", hi: "Dost" },
            family: { en: "Family", hi: "Family" }, genz: { en: "Gen Z squad", hi: "Gen Z squad" } },
  budget: { free: { en: "Free", hi: "Free" }, under500: { en: "Under ₹500", hi: "₹500 tak" },
            under1500: { en: "Under ₹1500", hi: "₹1500 tak" }, splurge: { en: "Splurge", hi: "Khul ke" } },
  time:   { "2hrs": { en: "2 hours", hi: "2 ghante" }, halfday: { en: "Half day", hi: "Aadha din" }, fullday: { en: "Full day", hi: "Poora din" } },
  slot:   { morning: { en: "Morning", hi: "Subah" }, evening: { en: "Evening", hi: "Sham" }, latenight: { en: "Late night", hi: "Der raat" } },
  area:   { south: { en: "South Delhi", hi: "South Delhi" }, central: { en: "Central", hi: "Central" },
            olddelhi: { en: "Old Delhi", hi: "Purani Dilli" }, gurgaon: { en: "Gurgaon", hi: "Gurgaon" }, noida: { en: "Noida", hi: "Noida" },
            greaternoida: { en: "Greater Noida", hi: "Greater Noida" }, ghaziabad: { en: "Ghaziabad", hi: "Ghaziabad" },
            westdelhi: { en: "West Delhi", hi: "West Delhi" }, eastdelhi: { en: "East Delhi", hi: "East Delhi" } }
};

// ---------- helpers ----------
const $ = (id) => document.getElementById(id);
const t = (obj) => obj[lang];          // pick current language
const fl = (group, value) => t(FILTER_LABELS[group][value]);

// "up to" order, so a ₹500 place shows when you pick "Under ₹1500"
const ORDER = {
  budget: ["free", "under500", "under1500", "splurge"],
  time:   ["2hrs", "halfday", "fullday"]
};

// ---------- filtering ----------
function matches(p, sel = selected) {
  if (currentMood && !p.moods.includes(currentMood)) return false;
  if (sel.who !== "any" && !p.who.includes(sel.who)) return false;
  if (sel.slot !== "any" && !p.slot.includes(sel.slot)) return false;
  if (sel.area !== "any" && p.area !== sel.area) return false;
  for (const g of ["budget", "time"]) {
    if (sel[g] !== "any" && ORDER[g].indexOf(p[g]) > ORDER[g].indexOf(sel[g])) return false;
  }
  return true;
}

// shown when nothing matches: offers one-click fixes that actually work
function emptyState() {
  const fixes = Object.keys(selected)
    .filter((g) => selected[g] !== "any")
    .map((g) => ({ g, count: PLACES.filter((p) => matches(p, { ...selected, [g]: "any" })).length }))
    .filter((x) => x.count > 0);
  const buttons = fixes.map((x) =>
    `<button class="chip fix-btn" data-clear="${x.g}">${t(UI.removeLabel)} ${t(FILTER_TITLES[x.g])} (${x.count})</button>`).join("");
  return `<div class="empty-box"><p class="empty">${t(UI.none)}</p>
    <div class="chips fixes">${buttons}<button class="chip fix-btn" data-clear="all">${t(UI.clearAll)}</button></div></div>`;
}

// random pick that respects the current mood and filters
function surprise() {
  const pool = PLACES.filter((p) => matches(p));
  if (!pool.length) {
    $("plan-section").hidden = true;
    $("results-section").hidden = false;
    $("results").innerHTML = emptyState();
    return;
  }
  const pick = pool[Math.floor(Math.random() * pool.length)];
  if (!currentMood) {                                  // no mood yet: borrow one of the place's moods
    currentMood = pick.moods[Math.floor(Math.random() * pick.moods.length)];
    applyTheme(currentMood);
    renderMoods();
  }
  openPlan(pick.id, true);
}

// ---------- render: moods ----------
function renderMoods() {
  $("mood-grid").innerHTML = MOODS.map((m) => `
    <button class="mood-btn ${m.id === currentMood ? "active" : ""}" data-mood="${m.id}"
      style="--c-bg:${m.theme.bg}; --c-text:${m.theme.text}; --c-accent:${m.theme.accent}">
      <span class="mood-name">${t(m.label)}</span>
      <span class="mood-tag">${t(m.tagline)}</span>
    </button>`).join("");
}

// ---------- render: filters ----------
function renderFilters() {
  const groups = { who: "filter-who", budget: "filter-budget", time: "filter-time", slot: "filter-slot", area: "filter-area" };
  for (const g in groups) {
    const chips = ["any", ...FILTERS[g]].map((v) => `
      <button class="chip ${selected[g] === v ? "on" : ""}" data-group="${g}" data-value="${v}">
        ${v === "any" ? t(UI.any) : fl(g, v)}
      </button>`).join("");
    $(groups[g]).innerHTML = `<span class="filter-label">${t(FILTER_TITLES[g])}</span><div class="chips">${chips}</div>`;
  }
}

// ---------- render: results ----------
function renderResults() {
  $("plan-section").hidden = true;
  $("results-section").hidden = false;

  if (!currentMood) { $("results").innerHTML = `<p class="empty">${t(UI.hint)}</p>`; return; }

  const mood = MOODS.find((m) => m.id === currentMood);
  const list = PLACES.filter((p) => matches(p));
  const head = `<p class="tagline" style="grid-column:1/-1">${t(mood.tagline)}</p>`;

  $("results").innerHTML = head + (list.length ? list.map((p) => `
    <article class="place-card" data-id="${p.id}" tabindex="0">
      <h3>${p.name}</h3>
      <p class="meta">${p.city}, ${fl("area", p.area)}, ${fl("budget", p.budget)}</p>
      <p>${t(p.desc)}</p>
      <div class="tags">${p.tags.map((x) => `<span class="tag">${x}</span>`).join("")}</div>
    </article>`).join("") : emptyState());
}

// ---------- render: plan card ----------
function openPlan(id, viaSurprise = false) {
  const p = PLACES.find((x) => x.id === id);
  const li = (arr) => arr.map((x) => `<li><strong>${x.name}</strong>: ${t(x.note)}</li>`).join("");
  const shareText = encodeURIComponent(`${p.name} chalein? ${t(p.desc)}\n${p.mapLink}\n(via Geddi)`);

  $("plan-card").innerHTML = `
    <div class="full">
      <h2>${p.name}</h2>
      <p class="meta">${p.city}, ${fl("area", p.area)}, ${t(UI.budgetIs)}: ${fl("budget", p.budget)}</p>
      <p>${t(p.desc)}</p>
    </div>
    <div><h3>${t(UI.best)}</h3><p>${t(p.bestTime)}</p></div>
    <div><h3>${t(UI.metro)}</h3><p>${p.metro}</p></div>
    ${t(p.etiquette) ? `<div class="full note"><strong>${t(UI.etiquette)}:</strong> ${t(p.etiquette)}</div>` : ""}
    <div><h3>${t(UI.nearDo)}</h3><ul>${li(p.nearbyDo)}</ul></div>
    <div><h3>${t(UI.nearEat)}</h3><ul>${li(p.nearbyEat)}</ul></div>
    <div class="full actions">
      <a class="btn" href="${p.mapLink}" target="_blank" rel="noopener">${t(UI.map)}</a>
      <a class="btn" href="https://wa.me/?text=${shareText}" target="_blank" rel="noopener">${t(UI.share)}</a>
      ${viaSurprise ? `<button class="btn" id="again-btn" type="button">${t(UI.again)}</button>` : ""}
      <button class="btn ghost" id="back-btn" type="button">${t(UI.back)}</button>
    </div>`;

  $("results-section").hidden = true;
  $("plan-section").hidden = false;
  $("plan-section").scrollIntoView({ behavior: "smooth" });
}

// ---------- theme ----------
// picks dark or white text so buttons stay readable on any accent colour
function onColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) > 150 ? "#14110F" : "#FFFFFF";
}
function applyTheme(moodId) {
  const m = MOODS.find((x) => x.id === moodId);
  const root = document.documentElement.style;
  root.setProperty("--bg", m.theme.bg);
  root.setProperty("--text", m.theme.text);
  root.setProperty("--accent", m.theme.accent);
  root.setProperty("--on-accent", onColor(m.theme.accent));
  document.body.className = "mood-" + moodId;
}

// ---------- static text + full redraw ----------
function renderAll() {
  document.documentElement.lang = lang === "en" ? "en" : "hi-Latn";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(UI[el.dataset.i18n]); });
  $("lang-toggle").textContent = t(UI.toggle);
  if (SITE.feedbackUrl) { $("feedback-link").href = SITE.feedbackUrl; $("feedback-link").hidden = false; }
  renderMoods();
  renderFilters();
  renderResults();
}

// ---------- events (one listener per area, not per button) ----------
$("mood-grid").addEventListener("click", (e) => {
  const btn = e.target.closest(".mood-btn");
  if (!btn) return;
  currentMood = btn.dataset.mood;
  applyTheme(currentMood);
  renderMoods();
  renderResults();
  // on phones, jump down to the suggestions after picking a mood
  if (window.matchMedia("(max-width: 760px)").matches) {
    $("results-section").scrollIntoView({ behavior: "smooth" });
  }
});

$("filter-section").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  selected[chip.dataset.group] = chip.dataset.value;
  renderFilters();
  renderResults();
});

$("results").addEventListener("click", (e) => {
  const card = e.target.closest(".place-card");
  if (card) openPlan(card.dataset.id);
});

$("results").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.classList.contains("place-card")) openPlan(e.target.dataset.id);
});

$("plan-section").addEventListener("click", (e) => {
  if (e.target.id === "back-btn") renderResults();
  if (e.target.id === "again-btn") surprise();
});

$("surprise-btn").addEventListener("click", surprise);

// one-click fixes from the empty state
$("results").addEventListener("click", (e) => {
  const fix = e.target.closest(".fix-btn");
  if (!fix) return;
  const which = fix.dataset.clear;
  if (which === "all") Object.keys(selected).forEach((g) => (selected[g] = "any"));
  else selected[which] = "any";
  renderFilters();
  renderResults();
});

$("lang-toggle").addEventListener("click", () => {
  lang = lang === "en" ? "hi" : "en";
  renderAll();
});

renderAll();
