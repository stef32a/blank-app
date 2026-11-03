/* Aplicația: stare, router pe adrese (#/...), evenimente, temă. Se încarcă ultimul.

   Adrese:
     #/                         Cuprins
     #/miocit[/compartiment]    #/vas[/compartiment]
     #/gena/scn5a               fișa unei gene (deschide compartimentul ei și o evidențiază)
     #/fiziologie[/capitol]     #/fiziopatologie[/capitol]
     #/boli[/eticheta]          #/molecule            #/medicamente[/clasa]
     #/cauta/text               căutare
   Adresele vechi (#miocit, #fz, #fp, #toate, #med...) sunt încă recunoscute. */
var HC = window.HC = window.HC || {};
(function () {
"use strict";
var el = HC.el, V = HC.views, COMPS = HC.COMPS, CH_BY = HC.CH_BY;

var state = HC.state = {
  tab: "cuprins",
  comp: { miocit: "sarcolema", vas: "endoteliu" },
  chap: { fz: "ioni", fp: "aritmii" },
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
  var tab = SEG_TAB[head];
  if (!tab) return { tab: "cuprins" };
  var r = { tab: tab };
  if (arg) {
    if ((tab === "miocit" || tab === "vas") && COMPS[arg] && COMPS[arg].tab === tab) r.comp = arg;
    else if ((tab === "fz" || tab === "fp") && CH_BY[arg] && CH_BY[arg].grp === tab) r.chap = arg;
    else if (tab === "boli" && HC.TAGMAP[arg]) r.target = "tag-" + arg;
    else if (tab === "med" && HC.DRUG_BY[arg]) r.target = "med-" + arg;
  }
  return r;
}

/* ---------- randare ---------- */
var TITLE = document.title;
function setTitle(sub) { document.title = sub ? sub + " · " + TITLE : TITLE; }

function render() {
  var q = state.q.trim();
  document.querySelectorAll(".tab").forEach(function (a) {
    var on = !q && a.getAttribute("data-tab") === state.tab;
    if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
  el("legend").hidden = !q && ["cuprins", "med", "fz", "fp"].indexOf(state.tab) > -1;
  var main = el("main"), t = state.tab;
  if (q) { main.innerHTML = V.search(q); setTitle("Căutare: " + q); return; }
  if (t === "cuprins") { main.innerHTML = V.cuprins(); setTitle(""); }
  else if (t === "med") { main.innerHTML = V.meds(); setTitle("Medicamente"); }
  else if (t === "miocit" || t === "vas") {
    main.innerHTML = V.stage(t, state.comp[t]);
    V.markActive(t, state.comp[t]);
    setTitle(COMPS[state.comp[t]].name);
  }
  else if (t === "fz" || t === "fp") {
    var r = V.chapters(t, state.chap[t]);
    main.innerHTML = r.html;
    V.mountDiagrams(r.chapter);
    setTitle(r.chapter.short);
  }
  else if (t === "boli") { main.innerHTML = V.index(); setTitle("Boli → gene"); }
  else { main.innerHTML = V.all(); setTitle("Toate moleculele"); }
}

var reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
function flash(node) { node.classList.remove("flash"); void node.offsetWidth; node.classList.add("flash"); }

/* aplică adresa curentă: actualizează starea, randează, derulează la țintă */
function route() {
  var r = parse(location.hash);
  var prevTab = state.tab;
  state.tab = r.tab;
  if (r.comp) state.comp[r.tab] = r.comp;
  if (r.chap) state.chap[r.tab] = r.chap;
  state.q = r.q || "";
  var input = el("q");
  if (input.value !== state.q && document.activeElement !== input) input.value = state.q;
  el("qclear").hidden = !input.value;
  render();

  var target = r.target && el(r.target);
  if (target) {
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: r.target.indexOf("gena-") === 0 ? "center" : "start" });
    flash(target);
  } else if (!r.q && (r.chap || prevTab !== state.tab)) {
    var main = el("main");
    if (main.getBoundingClientRect().top < 0) main.scrollIntoView({ block: "start" });
  }
}

function go(hash, replace) {
  if (location.hash === hash) { route(); return; }
  try { history[replace ? "replaceState" : "pushState"](null, "", hash); }
  catch (e) { location.hash = hash; return; }
  route();
}
HC.go = go;

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
  else if (t.hasAttribute("data-comp")) go(HC.href.comp(t.getAttribute("data-comp")));
});

// regiunile SVG se pot activa și din tastatură
document.addEventListener("keydown", function (e) {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("region")) {
    e.preventDefault();
    var comp = e.target.getAttribute("data-comp");
    go(HC.href.comp(comp));
    var again = document.querySelector('.region[data-comp="' + comp + '"][tabindex="0"]');
    if (again) again.focus();
  }
  // „/” mută focusul în căutare
  if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
    e.preventDefault(); el("q").focus();
  }
});

/* căutarea: așteaptă o pauză scurtă la tastare și nu umple istoricul (replaceState) */
var qTimer = null, tabBeforeSearch = null;
el("q").addEventListener("input", function () {
  var v = this.value;
  el("qclear").hidden = !v;
  clearTimeout(qTimer);
  qTimer = setTimeout(function () {
    if (v.trim()) {
      if (!state.q) tabBeforeSearch = location.hash || "#/";
      go(HC.href.search(v.trim()), !!state.q);
    } else {
      go(tabBeforeSearch || HC.href.tab(state.tab), true);
    }
  }, 120);
});
el("q").addEventListener("keydown", function (e) {
  if (e.key === "Escape") { el("qclear").click(); }
});
el("qclear").addEventListener("click", function () {
  el("q").value = ""; this.hidden = true;
  go(tabBeforeSearch || HC.href.tab(state.tab), true);
  el("q").focus();
});

/* ---------- temă: automat / luminos / întunecat ---------- */
var THEMES = ["auto", "light", "dark"], THEME_LABEL = { auto: "Temă: automată", light: "Temă: luminoasă", dark: "Temă: întunecată" };
function applyTheme(t) {
  if (t === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", t);
  var b = el("theme");
  if (b) { b.textContent = { auto: "◐", light: "☀", dark: "☾" }[t]; b.title = THEME_LABEL[t]; b.setAttribute("aria-label", THEME_LABEL[t]); }
}
var theme = "auto";
try { theme = localStorage.getItem("hc-theme") || "auto"; } catch (e) {}
applyTheme(theme);
if (el("theme")) el("theme").addEventListener("click", function () {
  theme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
  applyTheme(theme);
  try { localStorage.setItem("hc-theme", theme); } catch (e) {}
});

/* ---------- start ---------- */
el("legend").innerHTML = V.legend();
route();
})();
