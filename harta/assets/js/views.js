/* Vederile: fiecare funcție întoarce HTML-ul pentru <main>. Nu modifică starea și nu navighează
   (de asta se ocupă app.js), deci pot fi refolosite oricând, inclusiv la generarea de pagini statice. */
var HC = window.HC = window.HC || {};
(function () {
"use strict";
var esc = HC.esc, rich = HC.rich, kc = HC.kc, href = HC.href, norm = HC.norm;
var KINDS = HC.KINDS, COMPS = HC.COMPS, TAGS = HC.TAGS, TAGMAP = HC.TAGMAP, MOLS = HC.MOLS;
var CHAPTERS = HC.CHAPTERS, CH_BY = HC.CH_BY, COMP_CH = HC.COMP_CH, SEC_ORDER = HC.SEC_ORDER, DRUGS = HC.DRUGS;
var V = HC.views = {};

/* ---------- fișa unei molecule ---------- */
function molHTML(m, showWhere) {
  var h = '<article class="mol" id="' + HC.molDomId(m) + '" style="--kc:' + kc(m) + '">';
  h += '<div class="mol-head"><a class="gene permalink" href="' + href.mol(m) + '" title="Legătură directă">' + esc(m.g) + '</a><span class="prot">' + esc(m.p) + '</span>';
  if (showWhere) h += '<a class="where" href="' + href.comp(m.c) + '">' + esc(COMPS[m.c].name) + '</a>';
  h += '</div>';
  h += '<p class="fn"><b>Ce face:</b> ' + rich(m.f, m.id) + '</p>';
  h += '<p class="dis"><b>Boli:</b> ' + rich(m.d, m.id) + '</p>';
  if (m.fp && m.fp.length) {
    h += '<div class="fp"><div class="h">Când se strică</div>' + m.fp.map(function (x) { return '<p>' + rich(x, m.id) + '</p>'; }).join("") + '</div>';
  }
  if (m.t) h += '<p class="tx"><b>Țintă terapeutică:</b> ' + rich(m.t, m.id) + '</p>';
  if (COMP_CH[m.c]) h += '<div class="chapchips">Mecanism: ' + COMP_CH[m.c].map(HC.chapChip).join("") + '</div>';
  if (m.tg && m.tg.length) h += '<div class="tags">' + m.tg.map(function (t) { return HC.tagChip(t); }).join("") + '</div>';
  return h + '</article>';
}
V.molHTML = molHTML;

/* ---------- Miocitul / Vasul: schemă + panou ---------- */
var COUNT = {};
MOLS.forEach(function (m) { COUNT[m.c] = (COUNT[m.c] || 0) + 1; });

function compButtons(tab, cur) {
  var h = '<div class="comp-list" role="group" aria-label="Compartimente">';
  Object.keys(COMPS).forEach(function (k) {
    if (COMPS[k].tab !== tab) return;
    h += '<a class="comp-btn" href="' + href.comp(k) + '" aria-current="' + (cur === k) + '">' + esc(COMPS[k].name) + ' · ' + (COUNT[k] || 0) + '</a>';
  });
  return h + '</div>';
}
V.stage = function (tab, comp) {
  var c = COMPS[comp];
  var list = MOLS.filter(function (m) { return m.c === comp; });
  var plateTitle = tab === "miocit" ? "Cardiomiocitul" : "Peretele arterial";
  var plateNote = tab === "miocit" ? "Atinge o structură sau alege din listă" : "Atinge un strat sau o etichetă";
  var h = '<div class="stage">';
  h += '<section class="plate" aria-label="' + plateTitle + '">';
  h += '<div class="plate-cap"><h2>' + plateTitle + '</h2><p>' + plateNote + '</p></div>';
  h += tab === "miocit" ? HC.myocyteSVG() : HC.vesselSVG();
  h += compButtons(tab, comp);
  h += '</section>';
  h += '<section class="panel" aria-live="polite">';
  h += '<div class="panel-head"><div class="kicker">' + (tab === "miocit" ? "Miocit" : "Vas") + ' · compartiment</div><h2>' + esc(c.name) + '</h2><p>' + esc(c.desc) + '</p><div class="chapchips">Citește mecanismul: ' + (COMP_CH[comp] || []).map(HC.chapChip).join("") + '</div><div class="count">' + list.length + ' molecule</div></div>';
  h += '<div class="mols">' + list.map(function (m) { return molHTML(m, false); }).join("") + '</div>';
  h += '</section></div>';
  return h;
};
/* după inserare: evidențiază compartimentul activ în SVG */
V.markActive = function (tab, comp) {
  var svg = document.getElementById(tab === "miocit" ? "svg-miocit" : "svg-vas");
  if (!svg) return;
  svg.classList.add("has-active");
  svg.querySelectorAll(".region").forEach(function (g) {
    g.classList.toggle("active", g.getAttribute("data-comp") === comp);
  });
};

/* ---------- Boli → gene ---------- */
V.index = function () {
  var h = '<div class="index">';
  TAGS.forEach(function (t) {
    var ms = MOLS.filter(function (m) { return m.tg && m.tg.indexOf(t[0]) > -1; });
    if (!ms.length) return;
    h += '<section class="dz" id="tag-' + t[0] + '"><h3><a class="permalink" href="' + href.tag(t[0]) + '">' + esc(t[1]) + '</a></h3><p>' + esc(t[2]) + '</p><div class="genes">';
    ms.forEach(function (m) {
      h += '<a class="gchip" href="' + href.mol(m) + '" style="--kc:' + kc(m) + '" title="' + esc(m.p) + '">' + esc(m.g) + '</a>';
    });
    h += '</div></section>';
  });
  return h + '</div>';
};

/* ---------- Toate moleculele ---------- */
V.all = function () {
  var order = Object.keys(COMPS);
  var rows = MOLS.slice().sort(function (a, b) { return order.indexOf(a.c) - order.indexOf(b.c); });
  var h = '<div class="tablewrap"><table><thead><tr><th>Genă</th><th>Proteină</th><th>Compartiment</th><th>Boli</th><th>Țintă terapeutică</th></tr></thead><tbody>';
  rows.forEach(function (m) {
    h += '<tr style="--kc:' + kc(m) + '"><td><a class="linkbtn gene" href="' + href.mol(m) + '">' + esc(m.g) + '</a></td><td>' + esc(m.p) + '</td><td>' + esc(COMPS[m.c].name) + '</td><td>' + esc(m.d) + '</td><td>' + esc(m.t || "") + '</td></tr>';
  });
  return h + '</tbody></table></div>';
};

/* ---------- Căutare ----------
   Textul fiecărui element se normalizează o singură dată (la prima căutare), nu la fiecare tastă. */
var HAY = null;
function buildHay() {
  HAY = {
    mols: MOLS.map(function (m) {
      return norm([m.g, m.p, m.f, m.d, m.t || "", (m.fp || []).join(" "), COMPS[m.c].name, (m.tg || []).map(function (t) { return TAGMAP[t].label; }).join(" ")].join(" "));
    }),
    chaps: CHAPTERS.map(function (c) {
      return norm([c.title, c.idea].concat(c.blocks.map(function (b) {
        return [b.h || "", b.p || "", (b.list || []).join(" "), (b.steps || []).join(" "), b.table ? b.table.rows.map(function (r) { return r.join(" "); }).join(" ") : ""].join(" ");
      })).join(" "));
    }),
    drugs: DRUGS.map(function (dc) {
      return norm([dc.name, dc.note || ""].concat(dc.subs.map(function (s) { return s.join(" "); })).join(" "));
    })
  };
}
function matches(words) { return function (hay) { return words.every(function (w) { return hay.indexOf(w) > -1; }); }; }
V.search = function (q) {
  if (!HAY) buildHay();
  var words = norm(q.trim()).split(/\s+/), ok = matches(words);
  var res = MOLS.filter(function (m, i) { return ok(HAY.mols[i]); });
  var chs = CHAPTERS.filter(function (c, i) { return ok(HAY.chaps[i]); });
  var mcs = DRUGS.filter(function (d, i) { return ok(HAY.drugs[i]); });
  var h = '<section class="panel"><div class="results-head"><h2>Rezultate pentru „' + esc(q.trim()) + '”</h2><span class="count">' + res.length + ' molecule · ' + chs.length + ' capitole</span></div>';
  if (chs.length) h += '<div class="chapchips">Capitole de fiziologie: ' + chs.map(function (c) { return HC.chapChip(c.id); }).join("") + '</div>';
  if (mcs.length) h += '<div class="chapchips">Medicamente: ' + mcs.map(function (dc) { return '<a class="chapchip" href="' + href.med(dc.id) + '">' + esc(dc.name) + '</a>'; }).join("") + '</div>';
  if (!res.length) h += '<p class="empty">Nimic găsit. Încearcă simbolul genei (de ex. LMNA), numele bolii (Danon) sau un medicament (ivabradină).</p>';
  else h += '<div class="mols">' + res.map(function (m) { return molHTML(m, true); }).join("") + '</div>';
  return h + '</section>';
};

V.legend = function () {
  return Object.keys(KINDS).map(function (k) {
    return '<span><i class="dot" style="background:var(' + KINDS[k].color + ')"></i>' + esc(KINDS[k].label) + '</span>';
  }).join("");
};

/* ---------- Capitole (Fiziologie / Fiziopatologie) ---------- */
function tableHTML(tb) {
  var h = '<div class="tablewrap tw-s"><table><thead><tr>' + tb.head.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join("") + '</tr></thead><tbody>';
  tb.rows.forEach(function (r) {
    h += '<tr>' + r.map(function (cell, i) {
      if (i === tb.gcol) return '<td><div class="genes">' + cell.split(/,\s*/).map(HC.gchipSym).join("") + '</div></td>';
      return '<td>' + rich(cell) + '</td>';
    }).join("") + '</tr>';
  });
  return h + '</tbody></table></div>';
}
function diagramHTML(n) {
  var d = HC.DIAGRAMS && HC.DIAGRAMS[n];
  if (!d) { console.warn("[harta] schemă necunoscută:", n); return ""; }
  return d.html();
}
function blockHTML(b) {
  var h = '<section class="blk">';
  if (b.h) h += '<h3>' + esc(b.h) + '</h3>';
  if (b.dia) h += diagramHTML(b.dia);
  if (b.p) h += '<p>' + rich(b.p) + '</p>';
  if (b.list) h += '<ul>' + b.list.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join("") + '</ul>';
  if (b.steps) h += '<ol class="steps">' + b.steps.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join("") + '</ol>';
  if (b.table) h += tableHTML(b.table);
  return h + '</section>';
}
V.chapters = function (grp, curId) {
  var same = CHAPTERS.filter(function (c) { return c.grp === grp; });
  var cur = (CH_BY[curId] && CH_BY[curId].grp === grp) ? CH_BY[curId] : same[0];
  var nav = '<nav class="chap-nav" aria-label="Capitole">';
  SEC_ORDER[grp].forEach(function (sec) {
    var cs = same.filter(function (c) { return c.sec === sec; });
    if (!cs.length) return;
    nav += '<div class="grp"><h3>' + esc(sec) + '</h3><div>' + cs.map(function (c) {
      return '<a class="chap-link" href="' + href.chap(c.id) + '" aria-current="' + (c.id === cur.id) + '">' + esc(c.short) + '</a>';
    }).join("") + '</div></div>';
  });
  nav += '</nav>';
  var a = '<article class="chap" id="cap-' + cur.id + '"><div class="panel-head"><div class="kicker">' + (grp === "fz" ? "Fiziologie" : "Fiziopatologie") + ' · ' + esc(cur.sec) + '</div><h2>' + esc(cur.title) + '</h2></div>';
  a += '<p class="idea">' + rich(cur.idea) + '</p>';
  cur.blocks.forEach(function (b) { a += blockHTML(b); });
  if (cur.mols && cur.mols.length) a += '<section class="blk"><h3>Moleculele capitolului</h3><div class="genes">' + cur.mols.map(HC.gchipSym).join("") + '</div></section>';
  if (cur.see && cur.see.length) a += '<div class="chapchips">Continuă cu: ' + cur.see.map(HC.chapChip).join("") + '</div>';
  var i = same.indexOf(cur);
  a += '<div class="pager">' +
    (i > 0 ? '<a class="linkbtn pg" href="' + href.chap(same[i - 1].id) + '">← ' + esc(same[i - 1].short) + '</a>' : '<span></span>') +
    (i < same.length - 1 ? '<a class="linkbtn pg" href="' + href.chap(same[i + 1].id) + '">' + esc(same[i + 1].short) + ' →</a>' : '') + '</div>';
  a += '</article>';
  return { html: '<div class="chap-wrap">' + nav + a + '</div>', chapter: cur };
};
/* rulează mount() pentru schemele interactive din capitol */
V.mountDiagrams = function (chapter) {
  chapter.blocks.forEach(function (b) {
    var d = b.dia && HC.DIAGRAMS && HC.DIAGRAMS[b.dia];
    if (d && d.mount) d.mount();
  });
};

/* ---------- Cuprins ---------- */
function roomLink(l) {
  if (l[0] === "chap") return HC.chapChip(l[1]);
  if (l[0] === "tab") return '<a class="rlink" href="' + href.tab(l[1]) + '">' + esc(l[2]) + '</a>';
  if (l[0] === "tag") return HC.tagChip(l[1], "rlink");
  if (l[0] === "gene") return HC.gchipSym(l[1]);
  if (l[0] === "med") return HC.medChip(l[1]);
  if (l[0] === "doc") { var doc = HC.DOC[l[1]]; return doc ? '<a class="rlink doc" href="' + esc(doc[1]) + '" target="_blank" rel="noopener">' + esc(doc[0]) + '</a>' : ""; }
  return "";
}
V.roomLink = roomLink;
function roomCard(r, num, cls) {
  var h = '<article class="room' + (cls ? " " + cls : "") + '"><div class="room-top">' + (num ? '<span class="num">' + num + '</span>' : '') + '<div><h3>' + esc(r.name) + '</h3></div></div>';
  h += '<p class="ess">' + esc(r.ess) + '</p>';
  h += '<ul class="topics">' + r.topics.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join("") + '</ul>';
  if (r.links.length) h += '<div class="built">Deja construit: ' + r.links.map(roomLink).join("") + '</div>';
  else h += '<div class="built none">De construit</div>';
  return h + '</article>';
}
function medIndex() {
  return '<div class="medidx">' + DRUGS.map(function (d) { return HC.medChip(d.id); }).join("") + '</div>';
}
V.cuprins = function () {
  var h = '<div class="toc">';
  h += '<section class="toc-sec"><header><div class="toc-kicker">Etajul 0</div><h2>Fundația</h2><p>Ce susține toate camerele. Dacă fundația e solidă, bolile nu mai sunt liste de memorat, ci consecințe logice.</p></header>';
  h += '<div class="rooms">' + HC.FOUNDATION.map(function (r, i) { return roomCard(r, "", i < 3 ? "found" : ""); }).join("") + '</div></section>';
  h += '<section class="toc-sec"><header><div class="toc-kicker">Etajul 1</div><h2>Cele zece camere</h2><p>Patologia clinică, organizată pe sisteme. Fiecare cameră arată temele ei și ce e deja construit.</p></header>';
  h += '<div class="rooms">' + HC.ROOMS.map(function (r, i) { return roomCard(r, String(i + 1)); }).join("") + '</div></section>';
  h += '<section class="toc-sec"><header><div class="toc-kicker">Transversal</div><h2>Coridoarele</h2><p>Teme care traversează toate camerele.</p></header>';
  h += '<div class="rooms">' + HC.CORRIDORS.map(function (r) { return roomCard(r, ""); }).join("") + '</div></section>';
  h += '<section class="toc-sec"><header><div class="toc-kicker">Instrumente</div><h2>Uneltele</h2><p>Cu ce intri în fiecare cameră.</p></header>';
  h += '<div class="rooms three">' + HC.TOOLS.map(function (r) { return roomCard(r, ""); }).join("") + '</div></section>';
  h += '<section class="toc-sec"><header><div class="toc-kicker">Farmacologie</div><h2>Medicamentele</h2><p>Scheletul pe clase, legat de ținta moleculară a fiecărui medicament.</p></header>';
  h += medIndex() + '</section>';
  return h + '</div>';
};

/* ---------- Medicamente ---------- */
V.meds = function () {
  var h = '<div class="toc"><section class="toc-sec"><header><div class="toc-kicker">Schelet · de completat în timp</div><h2>Medicamente</h2>';
  h += '<p>Clasele, moleculele și ținta lor. Fiecare țintă duce la fișa genei din hartă (mecanism, boli, „când se strică”). Fișele farmacologice se completează pe rând.</p></header>';
  h += '<div class="fields">Fiecare clasă va primi: ' + HC.MED_FIELDS.map(function (f) { return '<span class="field">' + esc(f) + '</span>'; }).join("") + '</div>';
  h += '<div class="fields">Pentru doze în gardă, deocamdată: ' + roomLink(["doc", "gardamed"]) + '</div>';
  h += medIndex() + '</section>';
  DRUGS.forEach(function (d, i) {
    h += '<section class="medcls" id="med-' + d.id + '"><h3><span class="num">' + (i + 1) + '</span><a class="permalink" href="' + href.med(d.id) + '">' + esc(d.name) + '</a></h3>';
    if (d.note) h += '<p>' + esc(d.note) + '</p>';
    d.subs.forEach(function (s) {
      h += '<div class="medrow"><div class="sub">' + esc(s[0]) + (s[3] === "studii" ? '<span class="pill">în studii</span>' : '') + '</div>';
      h += '<div class="drugs">' + esc(s[1]) + '</div>';
      h += '<div class="tgt">' + (s[2] ? s[2].split(/,\s*/).map(HC.gchipSym).join("") : '<span class="empty-note">țintă de adăugat</span>') + '</div></div>';
    });
    h += '<div class="empty-note">Fișa clasei: de completat.</div></section>';
  });
  return h + '</div>';
};

})();
