/* Vederile: fiecare funcție întoarce HTML-ul pentru <main>. Nu modifică starea și nu navighează
   (de asta se ocupă app.js), deci pot fi refolosite oricând, inclusiv la generarea de pagini statice. */
var HC = window.HC = window.HC || {};
(function () {
"use strict";
var esc = HC.esc, rich = HC.rich, kc = HC.kc, href = HC.href, norm = HC.norm;
var KINDS = HC.KINDS, COMPS = HC.COMPS, TAGS = HC.TAGS, TAGMAP = HC.TAGMAP, MOLS = HC.MOLS;
var CHAPTERS = HC.CHAPTERS, CH_BY = HC.CH_BY, COMP_CH = HC.COMP_CH, SEC_ORDER = HC.SEC_ORDER, DRUGS = HC.DRUGS;
var V = HC.views = {};

/* fișele (assets/js/fise/): index și atașare la teme */
var FISE = HC.FISE = HC.FISE || [];
HC.FISA_BY = {};
FISE.forEach(function (f) {
  HC.FISA_BY[f.id] = f;
  [f.parent].concat(f.also || []).forEach(function (key) {
    var t = HC.TOPIC_BY[key];
    if (!t) { console.warn("[harta] fișa " + f.id + ": temă necunoscută " + key); return; }
    (t.fise = t.fise || []).push(f);
  });
});

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
  var dxs = V.dxForGene ? V.dxForGene(m) : [];
  if (dxs.length) h += '<div class="chapchips">ECG: ' + dxs.map(function (d) { return HC.dxChip(d); }).join("") + '</div>';
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
  h += '<div class="legend">' + V.legend() + '</div>';
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
  var h = pageHead("Fundația · genetică", "Boli → gene", "Fiecare boală, cu mecanismul pe scurt și genele implicate. Atinge o genă pentru fișa ei completă.", '<div class="legend">' + V.legend() + '</div>');
  h += '<div class="index">';
  TAGS.forEach(function (t) {
    var ms = MOLS.filter(function (m) { return m.tg && m.tg.indexOf(t[0]) > -1; });
    if (!ms.length) return;
    var tdx = V.dxForTag(t[0]);
    h += '<section class="dz" id="tag-' + t[0] + '"><h3><a class="permalink" href="' + href.tag(t[0]) + '">' + esc(t[1]) + '</a></h3><p>' + esc(t[2]) + '</p>' + (tdx.length ? '<div class="chapchips">ECG: ' + tdx.map(function (d) { return HC.dxChip(d); }).join("") + '</div>' : '') + '<div class="genes">';
    ms.forEach(function (m) {
      h += '<a class="gchip" href="' + href.mol(m) + '" style="--kc:' + kc(m) + '" title="' + esc(m.p) + '">' + esc(m.g) + '</a>';
    });
    h += '</div></section>';
  });
  return h + '</div>';
};

/* ---------- Toate moleculele ---------- */
V.all = function () {
  var head = pageHead("Fundația · genetică", "Toate moleculele", MOLS.length + " molecule, ordonate pe compartimente. Tabelul se derulează orizontal pe ecrane mici.", '<div class="legend">' + V.legend() + '</div>');
  var order = Object.keys(COMPS);
  var rows = MOLS.slice().sort(function (a, b) { return order.indexOf(a.c) - order.indexOf(b.c); });
  var h = head + '<div class="tablewrap"><table><thead><tr><th>Genă</th><th>Proteină</th><th>Compartiment</th><th>Boli</th><th>Țintă terapeutică</th></tr></thead><tbody>';
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
    dx: ECG_DX.map(function (d) { return norm([d.name, d.alias || "", d.ecg, d.note || ""].join(" ")); }),
    fise: FISE.map(function (f) { return norm([f.title, f.ess, f.keywords || ""].join(" ")); }),
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
  var fis = FISE.filter(function (f, i) { return ok(HAY.fise[i]); });
  var dxs = ECG_DX.filter(function (d, i) { return ok(HAY.dx[i]); });
  var h = pageHead("Căutare", "„" + q.trim() + "”", res.length + " molecule · " + chs.length + " capitole · " + dxs.length + " diagnostice ECG · " + mcs.length + " clase de medicamente");
  h += '<section class="panel">';
  if (fis.length) h += '<div class="grid-2">' + fis.map(fisaCard).join("") + '</div>';
  if (dxs.length) h += '<div class="chapchips">Diagnostice ECG: ' + dxs.slice(0, 24).map(function (d) { return HC.dxChip(d); }).join("") + (dxs.length > 24 ? '<a class="rlink" href="' + href.tab("ecgdx") + '">… încă ' + (dxs.length - 24) + '</a>' : '') + '</div>';
  if (chs.length) h += '<div class="chapchips">Capitole: ' + chs.map(function (c) { return HC.chapChip(c.id); }).join("") + '</div>';
  if (mcs.length) h += '<div class="chapchips">Medicamente: ' + mcs.map(function (dc) { return '<a class="chapchip" href="' + href.med(dc.id) + '">' + esc(dc.name) + '</a>'; }).join("") + '</div>';
  if (!res.length && !fis.length && !dxs.length) h += '<p class="empty">Nimic găsit. Încearcă simbolul genei (de ex. LMNA), numele bolii (Danon) sau un medicament (ivabradină).</p>';
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
/* imagine: în varianta într-un singur fișier, HC.IMG conține imaginile încorporate */
function imgSrc(src) { return (HC.IMG && HC.IMG[src]) || src; }
function figureHTML(im) {
  return '<figure class="fig-img"><a href="' + esc(imgSrc(im.src)) + '" target="_blank" rel="noopener" title="Deschide imaginea mărită"><img src="' + esc(imgSrc(im.src)) + '" alt="' + esc(im.cap || "") + '" loading="lazy" decoding="async"></a>' +
    (im.cap ? '<figcaption>' + esc(im.cap) + '</figcaption>' : '') + '</figure>';
}
V.imgSrc = imgSrc;
function blockHTML(b) {
  var h = '<section class="blk">';
  if (b.h) h += '<h3>' + esc(b.h) + '</h3>';
  if (b.dia) h += diagramHTML(b.dia);
  if (b.p) h += '<p>' + rich(b.p) + '</p>';
  if (b.list) h += '<ul>' + b.list.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join("") + '</ul>';
  if (b.steps) h += '<ol class="steps">' + b.steps.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join("") + '</ol>';
  if (b.table) h += tableHTML(b.table);
  if (b.img) h += figureHTML(b.img);
  if (b.callout) h += '<aside class="callout"><div class="callout-h">' + HC.icon("alert") + esc(b.callout.title || "Notă") + '</div>' +
    [].concat(b.callout.text).map(function (t) { return '<p>' + rich(t) + '</p>'; }).join("") + '</aside>';
  return h + '</section>';
}
V.chapters = function (grp, curId) {
  var same = CHAPTERS.filter(function (c) { return c.grp === grp; });
  var cur = (CH_BY[curId] && CH_BY[curId].grp === grp) ? CH_BY[curId] : same[0];
  var nav = '<details class="chap-menu"><summary><span>Capitolele · ' + HC.GRP_LABEL[grp] + '</span><b>' + esc(cur.short) + '</b></summary><nav class="chap-nav" aria-label="Capitole">';
  SEC_ORDER[grp].forEach(function (sec) {
    var cs = same.filter(function (c) { return c.sec === sec; });
    if (!cs.length) return;
    nav += '<div class="grp"><h3>' + esc(sec) + '</h3><div>' + cs.map(function (c) {
      return '<a class="chap-link" href="' + href.chap(c.id) + '" aria-current="' + (c.id === cur.id) + '">' + esc(c.short) + '</a>';
    }).join("") + '</div></div>';
  });
  nav += '</nav></details>';
  var a = '<article class="chap" id="cap-' + cur.id + '">' + pageHead(HC.GRP_LABEL[grp] + ' · ' + esc(cur.sec), cur.title);
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

/* ---------- antet comun de pagină ---------- */
function pageHead(kicker, title, desc, extra) {
  return '<header class="page-head">' + (kicker ? '<div class="kicker">' + kicker + '</div>' : '') +
    '<h1 class="page-title">' + esc(title) + '</h1>' + (desc ? '<p class="page-desc">' + desc + '</p>' : '') + (extra || '') + '</header>';
}
V.pageHead = pageHead;

/* ---------- legături din teme ---------- */
function roomLink(l) {
  if (l[0] === "chap") return HC.chapChip(l[1]);
  if (l[0] === "tab") return '<a class="rlink" href="' + href.tab(l[1]) + '">' + esc(l[2]) + '</a>';
  if (l[0] === "tag") return HC.tagChip(l[1], "rlink");
  if (l[0] === "gene") return HC.gchipSym(l[1]);
  if (l[0] === "med") return HC.medChip(l[1]);
  if (l[0] === "ecgdx") { var dx = HC.ECG_DX_BY && HC.ECG_DX_BY[l[1]]; return dx ? HC.dxChip(dx) : ""; }
  if (l[0] === "doc") { var doc = HC.DOC[l[1]]; return doc ? '<a class="rlink doc" href="' + esc(doc[1]) + '" target="_blank" rel="noopener">' + esc(doc[0]) + '</a>' : ""; }
  return "";
}
V.roomLink = roomLink;

/* ---------- statistici ---------- */
function tabCount(tab) {
  if (tab === "miocit" || tab === "vas") return MOLS.filter(function (m) { return COMPS[m.c].tab === tab; }).length;
  if (tab === "fz" || tab === "fp") return CHAPTERS.filter(function (c) { return c.grp === tab; }).length;
  if (tab === "boli") return TAGS.filter(function (t) { return MOLS.some(function (m) { return (m.tg || []).indexOf(t[0]) > -1; }); }).length;
  if (tab === "med") return DRUGS.length;
  if (tab === "toate") return MOLS.length;
  return 0;
}
var UNIT = { miocit: ["moleculă", "molecule"], vas: ["moleculă", "molecule"], fz: ["capitol", "capitole"], fp: ["capitol", "capitole"], boli: ["boală", "boli"], med: ["clasă", "clase"], toate: ["moleculă", "molecule"] };
function plural(n, u) { return n + " " + (n === 1 ? u[0] : u[1]); }
V.tabCount = tabCount;

/* ---------- pagina principală ---------- */
function topicStatus(t) {
  var n = t.links.length + (t.fise ? t.fise.length : 0);
  return n ? '<span class="status ok">' + plural(n, ["resursă", "resurse"]) + '</span>' : '<span class="status todo">De construit</span>';
}
function sectionCard(s) {
  var n = tabCount(s.tab);
  return '<a class="card sec-card" href="' + href.tab(s.tab) + '">' +
    '<span class="card-ico">' + HC.icon(s.icon) + '</span>' +
    '<span class="card-body"><span class="card-title">' + esc(s.name) + '</span><span class="card-text">' + esc(s.ess) + '</span></span>' +
    '<span class="card-foot"><span class="meta">' + plural(n, UNIT[s.tab]) + '</span>' + HC.icon("arrow", "go") + '</span></a>';
}
function topicCard(t, icon) {
  return '<a class="card topic-card" href="' + href.topic(t) + '">' +
    (t.num ? '<span class="num">' + t.num + '</span>' : '<span class="card-ico">' + HC.icon(icon || "dot") + '</span>') +
    '<span class="card-body"><span class="card-title">' + esc(t.name) + '</span><span class="card-text">' + esc(t.ess) + '</span></span>' +
    '<span class="card-foot"><span class="meta">' + plural(t.topics.length, ["temă", "teme"]) + '</span>' + topicStatus(t) + '</span></a>';
}
function listRow(t) {
  return '<a class="row-link" href="' + href.topic(t) + '"><span class="row-main"><span class="row-title">' + esc(t.name) + '</span><span class="row-text">' + esc(t.ess) + '</span></span>' + topicStatus(t) + '</a>';
}
V.home = function (recent) {
  var tries = [["SCN5A", href.search("SCN5A")], ["QT lung", href.tag("lqt")], ["Fabry", href.search("Fabry")], ["tafamidis", href.search("tafamidis")], ["Potențialul de acțiune", href.chap("pa")], ["Brugada", href.tag("brugada")]];
  var h = '<section class="hero">';
  h += '<div class="kicker">De la moleculă la pacient</div>';
  h += '<h1 class="hero-title">Harta cardiologiei</h1>';
  h += '<p class="hero-lede">Genele, mecanismele, bolile și tratamentele, legate între ele. Pornești de la orice punct și ajungi, din câteva clicuri, la tot ce ține de el.</p>';
  h += '<label class="hero-search">' + HC.icon("search") + '<input class="js-q" type="search" placeholder="Caută o genă, o boală, un medicament…" aria-label="Caută în hartă" autocomplete="off" spellcheck="false"><kbd>/</kbd></label>';
  h += '<div class="hero-try"><span>Încearcă:</span>' + tries.map(function (t) { return '<a class="try" href="' + t[1] + '">' + esc(t[0]) + '</a>'; }).join("") + '</div>';
  h += '<dl class="stats">' + [[MOLS.length, "molecule"], [CHAPTERS.filter(function (c) { return c.grp !== "ecg"; }).length, "capitole de mecanism"], [HC.ECG_DX.length, "diagnostice ECG"], [tabCount("boli"), "boli genetice"], [DRUGS.length, "clase de medicamente"], [HC.ROOMS.length, "camere clinice"]].map(function (s) {
    return '<div><dt>' + s[1] + '</dt><dd>' + s[0] + '</dd></div>';
  }).join("") + '</dl>';
  h += '</section>';

  if (recent && recent.length) {
    h += '<section class="home-sec"><header class="sec-head"><h2>' + HC.icon("clock") + 'Continuă de unde ai rămas</h2></header><div class="recent">' +
      recent.map(function (r) { return '<a class="recent-item" href="' + esc(r.h) + '"><span class="recent-k">' + esc(r.k || "") + '</span><span class="recent-t">' + esc(r.t) + '</span></a>'; }).join("") + '</div></section>';
  }

  h += '<section class="home-sec"><header class="sec-head"><div><h2>Fundația</h2><p>Ce susține toate camerele. Cu fundația solidă, bolile devin consecințe logice, nu liste de memorat.</p></div></header>';
  h += '<div class="grid-3">' + HC.SECTIONS.map(sectionCard).join("") + '</div>';
  if (HC.FOUNDATION.length) h += '<div class="rows">' + HC.FOUNDATION.map(listRow).join("") + '</div>';
  h += '</section>';

  var ecgSteps = CHAPTERS.filter(function (c) { return c.grp === "ecg" && c.sec === "Pas cu pas"; });
  h += '<section class="home-sec"><header class="sec-head"><div><h2>Atlasul ECG</h2><p>Citirea standardizată pas cu pas și catalogul diagnosticelor ECG, legate de mecanisme, gene și clinică.</p></div></header>';
  h += '<div class="ecg-feature"><a class="ecg-feature-main" href="' + href.tab("ecg") + '"><span class="card-ico">' + HC.icon("ecg") + '</span><span class="card-title">Deschide atlasul</span><span class="card-text">' + CHAPTERS.filter(function (c) { return c.grp === "ecg"; }).length + ' capitole · ' + HC.ECG_DX.length + ' diagnostice · scheme</span></a>' +
    '<div class="ecg-feature-links"><div class="chips">' + ecgSteps.map(function (c) { return '<a class="rlink" href="' + href.chap(c.id) + '">' + esc(c.short) + '</a>'; }).join("") + '</div>' +
    '<div class="chips"><a class="rlink" href="' + href.tab("ecgdx") + '">Diagnostice ECG</a><a class="rlink" href="' + href.chap("ecg-qrs-larg") + '">QRS larg</a><a class="rlink" href="' + href.chap("ecg-st") + '">Ocluzie coronariană</a><a class="rlink urgent" href="' + href.chap("ecg-critic") + '">Valori critice</a></div></div></div></section>';

  h += '<section class="home-sec"><header class="sec-head"><div><h2>Clinica</h2><p>Patologia pe sisteme, în zece camere. Fiecare are temele ei și legăturile spre ce e deja construit.</p></div></header>';
  h += '<div class="grid-2">' + HC.ROOMS.map(function (t) { return topicCard(t); }).join("") + '</div></section>';

  h += '<div class="home-split">';
  h += '<section class="home-sec"><header class="sec-head"><div><h2>Transversal</h2><p>Teme care traversează toate camerele.</p></div></header><div class="rows">' + HC.CORRIDORS.map(listRow).join("") + '</div></section>';
  h += '<section class="home-sec"><header class="sec-head"><div><h2>Unelte</h2><p>Cu ce intri în fiecare cameră.</p></div></header><div class="rows">' + HC.TOOLS.map(listRow).join("") + '</div></section>';
  h += '</div>';
  return h;
};

/* ---------- pagina unei teme (cameră, coridor, unealtă) ---------- */
var LINK_GROUPS = [["chap", "Mecanisme și ECG"], ["ecgdx", "Diagnostice ECG"], ["tab", "Secțiuni"], ["tag", "Genetică"], ["gene", "Gene"], ["med", "Medicamente"], ["doc", "Documente"]];
V.topic = function (t) {
  var g = HC.GROUP_BY[t.grp];
  var kicker = esc(g.label) + (t.num ? ' · camera ' + t.num : '');
  var h = pageHead(kicker, t.name, esc(t.ess));
  if (t.fise && t.fise.length) h += '<section class="fise-sec"><h2 class="card-h">Fișe</h2><div class="grid-2">' + t.fise.map(fisaCard).join("") + '</div></section>';
  h += '<div class="topic-grid">';
  h += '<section class="panel-card"><h2 class="card-h">Teme</h2><ol class="topic-list">' + t.topics.map(function (x) {
    return '<li><span>' + esc(x) + '</span><span class="status todo">de scris</span></li>';
  }).join("") + '</ol></section>';
  h += '<section class="panel-card"><h2 class="card-h">Deja în hartă</h2>';
  if (!t.links.length) h += '<p class="muted">Nimic încă: camera e în construcție. Legăturile apar aici pe măsură ce adaugi conținut.</p>';
  LINK_GROUPS.forEach(function (lg) {
    var ls = t.links.filter(function (l) { return l[0] === lg[0]; });
    if (ls.length) h += '<div class="link-group"><div class="lg-h">' + lg[1] + '</div><div class="chips">' + ls.map(roomLink).join("") + '</div></div>';
  });
  h += '</section></div>';
  var i = g.list.indexOf(t), prev = g.list[i - 1], next = g.list[i + 1];
  h += '<nav class="pager" aria-label="Paginare">' +
    (prev ? '<a class="pg" href="' + href.topic(prev) + '"><small>Înapoi</small>← ' + esc(prev.name) + '</a>' : '<span></span>') +
    (next ? '<a class="pg next" href="' + href.topic(next) + '"><small>Mai departe</small>' + esc(next.name) + ' →</a>' : '') + '</nav>';
  return h;
};

/* ---------- fișe ---------- */
function fisaCard(f) {
  var parent = HC.TOPIC_BY[f.parent];
  return '<a class="card fisa-card" href="' + href.fisa(f) + '"><span class="card-ico">' + HC.icon("doc") + '</span>' +
    '<span class="card-body"><span class="card-title">' + esc(f.title) + '</span><span class="card-text">' + esc(f.ess) + '</span></span>' +
    '<span class="card-foot"><span class="meta">Fișă · ' + esc(parent ? parent.name : "") + '</span>' + HC.icon("arrow", "go") + '</span></a>';
}
V.fisaCard = fisaCard;
V.fisa = function (f) {
  var parent = HC.TOPIC_BY[f.parent], g = HC.GROUP_BY[parent.grp];
  var h = pageHead(esc(g.label) + ' · ' + esc(parent.name), f.title, f.lead);
  h += f.html();
  var rel = [parent].concat((f.also || []).map(function (k) { return HC.TOPIC_BY[k]; }).filter(Boolean));
  h += '<div class="chapchips">Legată de: ' + rel.map(function (t) { return '<a class="rlink" href="' + href.topic(t) + '">' + esc(t.name) + '</a>'; }).join("") + '</div>';
  return h;
};

/* ---------- Atlasul ECG ---------- */
var ECG_DX = HC.ECG_DX = HC.ECG_DX || [];
var ECG_CATS = HC.ECG_CATS = HC.ECG_CATS || [];
HC.ECG_DX_BY = {};
var DX_BY_GENE = {}, DX_BY_TAG = {};
ECG_DX.forEach(function (d) {
  HC.ECG_DX_BY[d.id] = d;
  (d.genes || []).forEach(function (g) { var m = HC.molBySym(g); if (m) (DX_BY_GENE[m.id] = DX_BY_GENE[m.id] || []).push(d); });
  (d.tags || []).forEach(function (t) { (DX_BY_TAG[t] = DX_BY_TAG[t] || []).push(d); });
});
function dxChip(d) { return '<a class="rlink dxlink' + (d.urgent ? ' urgent' : '') + '" href="' + href.ecgdx(d) + '">' + esc(d.name) + '</a>'; }
HC.dxChip = dxChip;
V.dxForGene = function (m) { return DX_BY_GENE[m.id] || []; };
V.dxForTag = function (t) { return DX_BY_TAG[t] || []; };

function ecgChapters(sec) { return CHAPTERS.filter(function (c) { return c.grp === "ecg" && (!sec || c.sec === sec); }); }
function firstSentence(t) {
  var plain = String(t || "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*|_/g, "");
  var m = plain.match(/^(.{40,180}?[.:;])(\s|$)/);
  return m ? m[1] : plain.slice(0, 180);
}
function chapRow(c, num) {
  return '<a class="row-link" href="' + href.chap(c.id) + '">' + (num ? '<span class="sb-num row-num">' + num + '</span>' : '') +
    '<span class="row-main"><span class="row-title">' + esc(c.title.replace(/^Pasul \d+ · /, "")) + '</span><span class="row-text">' + esc(firstSentence(c.idea)) + '</span></span>' + HC.icon("arrow", "go") + '</a>';
}
V.ecgHub = function () {
  var nUrg = ECG_DX.filter(function (d) { return d.urgent; }).length;
  var h = pageHead("Unelte · electrocardiografie", "Atlasul ECG", "Citirea standardizată în 12 pași, de la calitatea tehnică la ritmul stimulat, plus catalogul diagnosticelor ECG pe care trebuie să le recunoască un cardiolog, fiecare cu criteriile lui și legat de mecanism, gene și camera clinică.");
  h += '<div class="grid-3 ecg-actions">' +
    '<a class="card sec-card" href="' + href.chap("ecg-metoda") + '"><span class="card-ico">' + HC.icon("ecg") + '</span><span class="card-body"><span class="card-title">Începe citirea</span><span class="card-text">Ordinea fixă, șablonul de raport și exemple de concluzii standardizate.</span></span><span class="card-foot"><span class="meta">' + ecgChapters().length + ' capitole</span>' + HC.icon("arrow", "go") + '</span></a>' +
    '<a class="card sec-card" href="' + href.tab("ecgdx") + '"><span class="card-ico">' + HC.icon("toate") + '</span><span class="card-body"><span class="card-title">Diagnostice ECG</span><span class="card-text">Catalogul complet pe categorii, cu criterii, capcane și legături. Se poate filtra.</span></span><span class="card-foot"><span class="meta">' + ECG_DX.length + ' diagnostice</span>' + HC.icon("arrow", "go") + '</span></a>' +
    '<a class="card sec-card urgent-card" href="' + href.chap("ecg-critic") + '"><span class="card-ico">' + HC.icon("alert") + '</span><span class="card-body"><span class="card-title">Valori critice</span><span class="card-text">Ce se comunică imediat: ocluzie, aritmii maligne, bradiaritmii severe, QT, hiperkaliemie.</span></span><span class="card-foot"><span class="meta">' + nUrg + ' diagnostice urgente</span>' + HC.icon("arrow", "go") + '</span></a>' +
    '</div>';
  var steps = ecgChapters("Pas cu pas");
  h += '<section class="home-sec"><header class="sec-head"><div><h2>Citirea pas cu pas</h2><p>Mereu în aceeași ordine; fiecare pas are ce măsori, pragul normal, criteriile patologice și capcanele.</p></div></header><div class="rows">' +
    steps.map(function (c) { var m = c.short.match(/^(\d+) · /); return chapRow(c, m ? m[1] : ""); }).join("") + '</div></section>';
  h += '<div class="home-split">';
  ["Aritmii", "Stimulare"].forEach(function (sec) {
    var cs = ecgChapters(sec);
    if (cs.length) h += '<section class="home-sec"><header class="sec-head"><div><h2>' + esc(sec) + '</h2></div></header><div class="rows">' + cs.map(function (c) { return chapRow(c); }).join("") + '</div></section>';
  });
  h += '</div>';
  var expert = ecgChapters("Nivel expert");
  if (expert.length) h += '<section class="home-sec"><header class="sec-head"><div><h2>Nivel expert</h2><p>Algoritmi de localizare și criterii de aritmolog, verificate pe sursa primară.</p></div></header><div class="rows">' + expert.map(function (c) { return chapRow(c); }).join("") + '</div></section>';
  var figs = [];
  ecgChapters().forEach(function (c) { c.blocks.forEach(function (b) { if (b.img) figs.push({ c: c, im: b.img }); }); });
  if (figs.length) h += '<section class="home-sec"><header class="sec-head"><div><h2>' + HC.icon("image") + 'Schemele</h2><p>Fiecare schemă duce la capitolul în care e explicată.</p></div></header><div class="gallery">' +
    figs.map(function (f) { return '<a class="gal-item" href="' + href.chap(f.c.id) + '"><img src="' + esc(imgSrc(f.im.src)) + '" alt="' + esc(f.im.cap) + '" loading="lazy" decoding="async"><span>' + esc(f.im.cap) + '</span></a>'; }).join("") + '</div></section>';
  if (ECG_CATS.length) h += '<section class="home-sec"><header class="sec-head"><div><h2>Diagnostice pe categorii</h2></div></header><div class="chips">' +
    ECG_CATS.map(function (c) { var n = ECG_DX.filter(function (d) { return d.cat === c.id; }).length; return '<a class="rlink" href="' + href.tab("ecgdx") + '" data-dxcat="' + c.id + '">' + esc(c.name) + ' · ' + n + '</a>'; }).join("") + '</div></section>';
  var src = CH_BY["ecg-surse"];
  if (src) h += '<div class="chapchips">Surse: ' + HC.chapChip("ecg-surse") + '</div>';
  return h;
};

/* catalogul de diagnostice */
function dxCard(d) {
  var hay = norm([d.name, d.ecg, d.note || "", (d.genes || []).join(" "), (d.alias || "")].join(" "));
  var h = '<article class="dx' + (d.urgent ? ' urgent' : '') + '" id="dx-' + d.id + '" data-cat="' + d.cat + '" data-hay="' + esc(hay) + '"' + (d.urgent ? ' data-urgent="1"' : '') + '>';
  h += '<header><a class="permalink dx-name" href="' + href.ecgdx(d) + '">' + esc(d.name) + '</a>' + (d.urgent ? '<span class="badge-urgent">' + HC.icon("alert") + 'urgent</span>' : '') + '</header>';
  h += '<p class="dx-ecg">' + rich(d.ecg) + '</p>';
  if (d.note) h += '<p class="dx-note">' + rich(d.note) + '</p>';
  var foot = [];
  (d.chap || []).forEach(function (id) { var c = CH_BY[id]; if (c) foot.push('<a class="chapchip" href="' + href.chap(id) + '">' + esc(c.grp === "ecg" ? "Ghid: " + c.short : c.short) + '</a>'); });
  (d.genes || []).forEach(function (g) { foot.push(HC.gchipSym(g)); });
  (d.tags || []).forEach(function (t) { if (TAGMAP[t]) foot.push(HC.tagChip(t, "rlink")); });
  (d.topics || []).forEach(function (k) { var t = HC.TOPIC_BY[k]; if (t) foot.push('<a class="rlink" href="' + href.topic(t) + '">' + esc(t.name) + '</a>'); });
  (d.meds || []).forEach(function (id) { foot.push(HC.medChip(id)); });
  if (d.src) foot.push('<span class="dx-src">' + rich(d.src) + '</span>');
  if (foot.length) h += '<div class="chips dx-foot">' + foot.join("") + '</div>';
  return h + '</article>';
}
V.ecgDx = function () {
  var h = pageHead("Atlasul ECG", "Diagnostice ECG", ECG_DX.length + " diagnostice pe " + ECG_CATS.length + " categorii, cu criteriile esențiale și legături spre ghid, gene și clinică. Cele marcate „urgent” se comunică imediat.");
  h += '<div class="dx-tools panel-card"><label class="dx-filter">' + HC.icon("search") + '<input id="dx-q" type="search" placeholder="Filtrează: ex. Brugada, BAV, ocluzie, hiperkaliemie…" autocomplete="off" spellcheck="false"></label>' +
    '<label class="dx-toggle"><input type="checkbox" id="dx-urg"> doar urgențe</label>' +
    '<div class="chips dx-cats">' + ECG_CATS.map(function (c) { return '<button type="button" class="rlink" data-dxcat="' + c.id + '">' + esc(c.name) + '</button>'; }).join("") + '</div>' +
    '<div class="count" id="dx-count"></div></div>';
  ECG_CATS.forEach(function (c) {
    var ds = ECG_DX.filter(function (d) { return d.cat === c.id; });
    if (!ds.length) return;
    h += '<section class="dx-sec" id="dxcat-' + c.id + '"><h2 class="fisa-h">' + esc(c.name) + '</h2>' + (c.note ? '<p class="muted">' + esc(c.note) + '</p>' : '') + '<div class="dx-grid">' + ds.map(dxCard).join("") + '</div></section>';
  });
  h += '<p class="empty" id="dx-empty" hidden>Niciun diagnostic nu se potrivește filtrului.</p>';
  return h;
};
V.mountEcgDx = function () {
  var q = document.getElementById("dx-q"), urg = document.getElementById("dx-urg"), cnt = document.getElementById("dx-count");
  if (!q) return;
  function apply() {
    var words = norm(q.value.trim()).split(/\s+/).filter(Boolean), only = urg.checked, shown = 0;
    document.querySelectorAll(".dx").forEach(function (el) {
      var hay = el.getAttribute("data-hay"), ok = (!only || el.hasAttribute("data-urgent")) && words.every(function (w) { return hay.indexOf(w) > -1; });
      el.hidden = !ok; if (ok) shown++;
    });
    document.querySelectorAll(".dx-sec").forEach(function (s) { s.hidden = !s.querySelector(".dx:not([hidden])"); });
    document.getElementById("dx-empty").hidden = shown > 0;
    cnt.textContent = shown === ECG_DX.length ? ECG_DX.length + " diagnostice" : shown + " din " + ECG_DX.length + " diagnostice";
  }
  q.addEventListener("input", apply);
  urg.addEventListener("change", apply);
  document.querySelectorAll(".dx-cats [data-dxcat]").forEach(function (b) {
    b.addEventListener("click", function () {
      var sec = document.getElementById("dxcat-" + b.getAttribute("data-dxcat"));
      if (sec) { if (sec.hidden) { q.value = ""; urg.checked = false; apply(); } sec.scrollIntoView({ block: "start" }); }
    });
  });
  apply();
  var pending = HC.pendingDxCat; HC.pendingDxCat = null;
  if (pending) { var s = document.getElementById("dxcat-" + pending); if (s) s.scrollIntoView({ block: "start" }); }
};

/* ---------- meniul lateral ---------- */
V.sidebar = function () {
  var link = function (key, hrefv, label, icon, count) {
    return '<a class="sb-link" data-key="' + key + '" href="' + hrefv + '">' + (icon ? HC.icon(icon) : '') + '<span class="sb-label">' + esc(label) + '</span>' + (count != null ? '<span class="sb-n">' + count + '</span>' : '') + '</a>';
  };
  var sub = function (key, items) {
    return '<div class="sb-sub" data-for="' + key + '">' + items.map(function (it) { return '<a class="sb-sublink" data-key="' + it[0] + '" href="' + it[1] + '">' + esc(it[2]) + '</a>'; }).join("") + '</div>';
  };
  var compsOf = function (tab) { return Object.keys(COMPS).filter(function (k) { return COMPS[k].tab === tab; }).map(function (k) { return [tab + "/" + k, href.comp(k), COMPS[k].name]; }); };
  var chapsOf = function (grp) { return CHAPTERS.filter(function (c) { return c.grp === grp; }).map(function (c) { return [grp + "/" + c.id, href.chap(c.id), c.short]; }); };
  var h = '<nav class="sb-nav" aria-label="Harta">';
  h += link("cuprins", "#/", "Acasă", "home");
  h += '<div class="sb-group"><div class="sb-h">Fundația</div>';
  h += link("miocit", href.tab("miocit"), "Miocitul", "miocit", tabCount("miocit")) + sub("miocit", compsOf("miocit"));
  h += link("vas", href.tab("vas"), "Vasul", "vas", tabCount("vas")) + sub("vas", compsOf("vas"));
  h += link("fz", href.tab("fz"), "Fiziologie", "fz", tabCount("fz")) + sub("fz", chapsOf("fz"));
  h += link("fp", href.tab("fp"), "Fiziopatologie", "fp", tabCount("fp")) + sub("fp", chapsOf("fp"));
  h += link("boli", href.tab("boli"), "Boli → gene", "boli", tabCount("boli"));
  h += link("toate", href.tab("toate"), "Toate moleculele", "toate", MOLS.length);
  HC.FOUNDATION.forEach(function (t) { h += link("fundatie/" + t.id, href.topic(t), t.name, "anatomie"); });
  h += '</div>';
  h += '<div class="sb-group"><div class="sb-h">ECG</div>' + link("ecg", href.tab("ecg"), "Atlasul ECG", "ecg") + sub("ecg", chapsOf("ecg")) +
    link("ecgdx", href.tab("ecgdx"), "Diagnostice ECG", "toate", ECG_DX.length) + '</div>';
  h += '<div class="sb-group"><div class="sb-h">Farmacologie</div>' + link("med", href.tab("med"), "Medicamente", "med", DRUGS.length) +
    sub("med", DRUGS.map(function (d) { return ["med/" + d.id, href.med(d.id), d.name]; })) + '</div>';
  HC.TOPIC_GROUPS.slice(1).forEach(function (g) {
    h += '<div class="sb-group"><div class="sb-h">' + esc(g.label) + '</div>' + g.list.map(function (t) {
      var own = FISE.filter(function (f) { return f.parent === g.key + "/" + t.id; });
      return '<a class="sb-link topic" data-key="' + g.key + "/" + t.id + '" href="' + href.topic(t) + '">' + (t.num ? '<span class="sb-num">' + t.num + '</span>' : '<span class="sb-num dot"></span>') + '<span class="sb-label">' + esc(t.name) + '</span>' + (own.length ? '<span class="sb-n">' + own.length + '</span>' : '') + '</a>' +
        (own.length ? sub(g.key + "/" + t.id, own.map(function (f) { return ["fisa/" + f.id, href.fisa(f), f.short || f.title]; })) : '');
    }).join("") + '</div>';
  });
  return h + '</nav>';
};

/* ---------- Medicamente ---------- */
V.meds = function () {
  var h = pageHead("Farmacologie · schelet de completat", "Medicamente", "Clasele, moleculele și ținta lor. Fiecare țintă duce la fișa genei din hartă (mecanism, boli, „când se strică”). Fișele farmacologice se completează pe rând.");
  h += '<div class="med-intro panel-card"><div class="fields">Fiecare clasă va primi: ' + HC.MED_FIELDS.map(function (f) { return '<span class="field">' + esc(f) + '</span>'; }).join("") + '</div>';
  h += '<div class="fields">Pentru doze în gardă, deocamdată: ' + roomLink(["doc", "gardamed"]) + '</div>';
  h += '<div class="medidx">' + DRUGS.map(function (d) { return HC.medChip(d.id); }).join("") + '</div></div>';
  h += '<div class="medlist">';
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
