/* Aplicația: stare, router pe adrese (#/...), meniu lateral, căutare, temă. Se încarcă ultimul.

   Adrese:
     #/                         pagina principală
     #/miocit[/compartiment]    #/vas[/compartiment]
     #/gena/scn5a               fișa unei gene (deschide compartimentul ei și o evidențiază)
     #/fiziologie[/capitol]     #/fiziopatologie[/capitol]
     #/boli[/eticheta]          #/molecule            #/medicamente[/clasa]
     #/clinica/<id>  #/transversal/<id>  #/unelte/<id>  #/fundatie/<id>   pagina unei teme
     #/cauta/text               căutare
   Adresele vechi (#miocit, #fz, #fp, #toate, #med...) sunt încă recunoscute. */
var HC = window.HC = window.HC || {};
(function () {
"use strict";
var el = HC.el, V = HC.views, COMPS = HC.COMPS, CH_BY = HC.CH_BY, esc = HC.esc, href = HC.href;

var state = HC.state = {
  tab: "cuprins",
  comp: { miocit: "sarcolema", vas: "endoteliu" },
  chap: { fz: "ioni", fp: "aritmii" },
  topic: null,
  q: "",
  ap: "p:f0"
};

/* ---------- adresă → rută ---------- */
var SEG_TAB = {};
Object.keys(HC.ROUTE).forEach(function (t) { SEG_TAB[HC.ROUTE[t]] = t; });
var LEGACY = { cuprins: "cuprins", miocit: "miocit", vas: "vas", fz: "fz", fp: "fp", boli: "boli", toate: "toate", med: "med" };

function parse(hash) {
  var raw = (hash || "").replace(/^#/, "");
  if (raw.charAt(0) !== "/") return { tab: LEGACY[raw] || "cuprins" };   // adrese vechi
  var seg = raw.slice(1).split("/");
  var head = seg[0] || "", arg = seg.slice(1).join("/");
  try { arg = decodeURIComponent(arg); } catch (e) {}
  if (head === "cauta") return { tab: state.tab, q: arg };
  if (head === "gena") {
    var m = HC.MOL_BY[arg];
    return m ? { tab: COMPS[m.c].tab, comp: m.c, target: HC.molDomId(m) } : { tab: "toate" };
  }
  if (HC.GROUP_BY[head]) {
    var t = HC.TOPIC_BY[head + "/" + arg];
    return t ? { tab: "topic", topic: t } : { tab: "cuprins" };
  }
  var tab = SEG_TAB[head];
  if (!tab) return { tab: "cuprins" };
  var r = { tab: tab };
  if (arg) {
    if ((tab === "miocit" || tab === "vas") && COMPS[arg] && COMPS[arg].tab === tab) r.comp = arg;
    else if ((tab === "fz" || tab === "fp") && CH_BY[arg] && CH_BY[arg].grp === tab) r.chap = arg;
    else if (tab === "boli" && HC.TAGMAP[arg]) r.target = "tag-" + arg;
    else if (tab === "med" && HC.DRUG_BY[arg]) { r.target = "med-" + arg; r.medId = arg; }
  }
  return r;
}

/* ---------- pagini ----------
   Fiecare pagină: html, titlu, fir de navigare (crumbs), cheia activă din meniu. */
var HOME = ["Acasă", "#/"];
var SEC_LABEL = { miocit: "Miocitul", vas: "Vasul", fz: "Fiziologie", fp: "Fiziopatologie", boli: "Boli → gene", toate: "Toate moleculele", med: "Medicamente" };

function buildPage(r) {
  var t = state.tab, q = state.q.trim();
  if (q) return { html: V.search(q), title: "Căutare: " + q, crumbs: [HOME, ["Căutare"]], key: "", sub: "" };
  if (t === "cuprins") return { html: V.home(readRecent()), title: "", crumbs: [], key: "cuprins", home: true };
  if (t === "topic") {
    var tp = state.topic, g = HC.GROUP_BY[tp.grp];
    return { html: V.topic(tp), title: tp.name, kicker: g.label, crumbs: [HOME, [g.label], [tp.name]], key: tp.grp + "/" + tp.id };
  }
  if (t === "miocit" || t === "vas") {
    var c = state.comp[t];
    return { html: V.stage(t, c), title: COMPS[c].name, kicker: SEC_LABEL[t], crumbs: [HOME, ["Fundația"], [SEC_LABEL[t], href.tab(t)], [COMPS[c].name]], key: t, sub: t + "/" + c,
      after: function () { V.markActive(t, c); } };
  }
  if (t === "fz" || t === "fp") {
    var res = V.chapters(t, state.chap[t]);
    return { html: res.html, title: res.chapter.short, kicker: SEC_LABEL[t], crumbs: [HOME, ["Fundația"], [SEC_LABEL[t], href.tab(t)], [res.chapter.short]], key: t, sub: t + "/" + res.chapter.id,
      after: function () { V.mountDiagrams(res.chapter); } };
  }
  if (t === "boli") return { html: V.index(), title: "Boli → gene", kicker: "Fundația", crumbs: [HOME, ["Fundația"], ["Boli → gene"]], key: "boli" };
  if (t === "med") return { html: V.meds(), title: "Medicamente", kicker: "Farmacologie", crumbs: [HOME, ["Farmacologie"], ["Medicamente"]], key: "med", sub: r.medId ? "med/" + r.medId : "" };
  return { html: V.all(), title: "Toate moleculele", kicker: "Fundația", crumbs: [HOME, ["Fundația"], ["Toate moleculele"]], key: "toate" };
}

/* ---------- vizitate recent (doar în browserul tău) ---------- */
function readRecent() {
  try { return JSON.parse(localStorage.getItem("hc-recent") || "[]").slice(0, 6); } catch (e) { return []; }
}
function remember(page) {
  if (page.home || !page.title || state.q) return;
  var h = location.hash || "#/";
  try {
    var list = readRecent().filter(function (x) { return x.t !== page.title; });
    list.unshift({ h: h, t: page.title, k: page.kicker || "" });
    localStorage.setItem("hc-recent", JSON.stringify(list.slice(0, 6)));
  } catch (e) {}
}

/* ---------- randare ---------- */
var TITLE = "Harta cardiologiei";
var SIDEBAR = el("sidebar-nav");

function crumbsHTML(cs) {
  if (!cs.length) return "";
  return '<ol>' + cs.map(function (c, i) {
    var last = i === cs.length - 1;
    if (last) return '<li aria-current="page">' + esc(c[0]) + '</li>';
    return '<li>' + (c[1] ? '<a href="' + c[1] + '">' + esc(c[0]) + '</a>' : '<span>' + esc(c[0]) + '</span>') + '</li>';
  }).join("") + '</ol>';
}

function markSidebar(page) {
  SIDEBAR.querySelectorAll("[data-key]").forEach(function (a) {
    var k = a.getAttribute("data-key");
    var on = a.classList.contains("sb-sublink") ? k === page.sub : k === page.key;
    if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
  SIDEBAR.querySelectorAll(".sb-sub").forEach(function (s) {
    s.classList.toggle("open", s.getAttribute("data-for") === page.key);
  });
  var cur = SIDEBAR.querySelector('.sb-sublink[aria-current="page"]') || SIDEBAR.querySelector('.sb-link[aria-current="page"]');
  if (cur) {
    var box = el("sidebar"), r = cur.getBoundingClientRect(), b = box.getBoundingClientRect();
    if (r.top < b.top + 60 || r.bottom > b.bottom - 20) box.scrollTop += r.top - b.top - b.height / 3;
  }
}

function render(r) {
  var page = buildPage(r || {});
  el("main").innerHTML = page.html;
  if (page.after) page.after();
  el("crumbs").innerHTML = crumbsHTML(page.crumbs);
  document.body.classList.toggle("is-home", !!page.home);
  document.title = page.title ? page.title + " · " + TITLE : TITLE;
  markSidebar(page);
  syncSearch();
  return page;
}

var reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
function flash(node) { node.classList.remove("flash"); void node.offsetWidth; node.classList.add("flash"); }

/* aplică adresa curentă: actualizează starea, randează, derulează la țintă */
function route() {
  var r = parse(location.hash);
  var prevKey = state.tab + (state.topic ? state.topic.id : "");
  state.tab = r.tab;
  if (r.comp) state.comp[r.tab] = r.comp;
  if (r.chap) state.chap[r.tab] = r.chap;
  if (r.topic) state.topic = r.topic;
  state.q = r.q || "";
  var page = render(r);
  closeNav();

  var target = r.target && el(r.target);
  if (target) {
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: r.target.indexOf("gena-") === 0 ? "center" : "start" });
    flash(target);
  } else if (!r.q && (r.chap || r.topic || prevKey !== state.tab + (state.topic ? state.topic.id : ""))) {
    window.scrollTo(0, 0);
  }
  remember(page);
}

function go(hash, replace) {
  if (location.hash === hash) { route(); return; }
  try { history[replace ? "replaceState" : "pushState"](null, "", hash); }
  catch (e) { location.hash = hash; return; }
  route();
}
HC.go = go;

/* ---------- meniul lateral pe ecrane mici ---------- */
function openNav() { document.body.classList.add("nav-open"); el("menu-btn").setAttribute("aria-expanded", "true"); }
function closeNav() { document.body.classList.remove("nav-open"); el("menu-btn").setAttribute("aria-expanded", "false"); }
el("menu-btn").addEventListener("click", function () { document.body.classList.contains("nav-open") ? closeNav() : openNav(); });
el("scrim").addEventListener("click", closeNav);

/* ---------- evenimente ---------- */
window.addEventListener("hashchange", route);
window.addEventListener("popstate", route);

document.addEventListener("click", function (e) {
  // legături interne: le tratăm noi ca să funcționeze și re-clicul pe aceeași adresă
  var a = e.target.closest('a[href^="#/"]');
  if (a && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
    e.preventDefault();
    go(a.getAttribute("href"));
    return;
  }
  var t = e.target.closest("[data-comp],[data-phase],[data-cur]");
  if (!t) return;
  if (t.hasAttribute("data-phase")) HC.updateAP("p:" + t.getAttribute("data-phase"));
  else if (t.hasAttribute("data-cur")) HC.updateAP("c:" + t.getAttribute("data-cur"));
  else if (t.hasAttribute("data-comp")) go(href.comp(t.getAttribute("data-comp")));
});

function focusSearch() {
  var inputs = [].slice.call(document.querySelectorAll(".js-q")).filter(function (i) { return i.offsetParent !== null; });
  if (inputs[0]) { inputs[0].focus(); inputs[0].select(); }
}
document.addEventListener("keydown", function (e) {
  // regiunile SVG se pot activa și din tastatură
  if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("region")) {
    e.preventDefault();
    var comp = e.target.getAttribute("data-comp");
    go(href.comp(comp));
    var again = document.querySelector('.region[data-comp="' + comp + '"][tabindex="0"]');
    if (again) again.focus();
    return;
  }
  var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  // „/” sau Ctrl/⌘+K mută focusul în căutare
  if ((e.key === "/" && !typing) || (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey))) { e.preventDefault(); focusSearch(); }
  if (e.key === "Escape") closeNav();
});

/* ---------- căutarea: aceeași logică pentru toate câmpurile .js-q ---------- */
var qTimer = null, beforeSearch = null;
function syncSearch() {
  document.querySelectorAll(".js-q").forEach(function (i) { if (document.activeElement !== i && i.value !== state.q) i.value = state.q; });
}
function onSearchInput(input) {
  var v = input.value;
  clearTimeout(qTimer);
  qTimer = setTimeout(function () {
    if (v.trim()) {
      if (!state.q) beforeSearch = location.hash || "#/";
      go(href.search(v.trim()), !!state.q);
      // după randare, căutarea de pe pagina principală dispare; mutăm focusul în bara de sus
      if (!document.body.contains(input)) { var top = el("q"); top.value = v; top.focus(); top.setSelectionRange(v.length, v.length); }
    } else if (state.q) {
      go(beforeSearch || "#/", true);
    }
  }, 140);
}
document.addEventListener("input", function (e) { if (e.target.classList.contains("js-q")) onSearchInput(e.target); });
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && e.target.classList && e.target.classList.contains("js-q")) {
    e.target.value = "";
    if (state.q) go(beforeSearch || "#/", true);
    e.target.blur();
  }
});

/* ---------- temă: automat / luminos / întunecat ---------- */
var THEMES = ["auto", "light", "dark"], THEME_LABEL = { auto: "Temă: automată", light: "Temă: luminoasă", dark: "Temă: întunecată" };
function applyTheme(t) {
  if (t === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", t);
  var b = el("theme");
  b.innerHTML = HC.icon({ auto: "auto", light: "sun", dark: "moon" }[t]);
  b.title = THEME_LABEL[t]; b.setAttribute("aria-label", THEME_LABEL[t]);
}
var theme = "auto";
try { theme = localStorage.getItem("hc-theme") || "auto"; } catch (e) {}
applyTheme(theme);
el("theme").addEventListener("click", function () {
  theme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
  applyTheme(theme);
  try { localStorage.setItem("hc-theme", theme); } catch (e) {}
});

/* ---------- start ---------- */
SIDEBAR.innerHTML = V.sidebar();
route();
})();
