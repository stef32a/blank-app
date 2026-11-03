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
  var h = pageHead("Căutare", "„" + q.trim() + "”", res.length + " molecule · " + chs.length + " capitole · " + mcs.length + " clase de medicamente");
  h += '<section class="panel">';
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
  var nav = '<details class="chap-menu"><summary><span>Capitolele · ' + (grp === "fz" ? "Fiziologie" : "Fiziopatologie") + '</span><b>' + esc(cur.short) + '</b></summary><nav class="chap-nav" aria-label="Capitole">';
  SEC_ORDER[grp].forEach(function (sec) {
    var cs = same.filter(function (c) { return c.sec === sec; });
    if (!cs.length) return;
    nav += '<div class="grp"><h3>' + esc(sec) + '</h3><div>' + cs.map(function (c) {
      return '<a class="chap-link" href="' + href.chap(c.id) + '" aria-current="' + (c.id === cur.id) + '">' + esc(c.short) + '</a>';
    }).join("") + '</div></div>';
  });
  nav += '</nav></details>';
  var a = '<article class="chap" id="cap-' + cur.id + '">' + pageHead((grp === "fz" ? "Fiziologie" : "Fiziopatologie") + ' · ' + esc(cur.sec), cur.title);
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
  var n = t.links.length;
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
  h += '<dl class="stats">' + [[MOLS.length, "molecule"], [CHAPTERS.length, "capitole de mecanism"], [tabCount("boli"), "boli genetice"], [DRUGS.length, "clase de medicamente"], [HC.ROOMS.length, "camere clinice"]].map(function (s) {
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

  h += '<section class="home-sec"><header class="sec-head"><div><h2>Clinica</h2><p>Patologia pe sisteme, în zece camere. Fiecare are temele ei și legăturile spre ce e deja construit.</p></div></header>';
  h += '<div class="grid-2">' + HC.ROOMS.map(function (t) { return topicCard(t); }).join("") + '</div></section>';

  h += '<div class="home-split">';
  h += '<section class="home-sec"><header class="sec-head"><div><h2>Transversal</h2><p>Teme care traversează toate camerele.</p></div></header><div class="rows">' + HC.CORRIDORS.map(listRow).join("") + '</div></section>';
  h += '<section class="home-sec"><header class="sec-head"><div><h2>Unelte</h2><p>Cu ce intri în fiecare cameră.</p></div></header><div class="rows">' + HC.TOOLS.map(listRow).join("") + '</div></section>';
  h += '</div>';
  return h;
};

/* ---------- pagina unei teme (cameră, coridor, unealtă) ---------- */
var LINK_GROUPS = [["chap", "Mecanisme"], ["tab", "Secțiuni"], ["tag", "Genetică"], ["gene", "Gene"], ["med", "Medicamente"], ["doc", "Documente"]];
V.topic = function (t) {
  var g = HC.GROUP_BY[t.grp];
  var kicker = esc(g.label) + (t.num ? ' · camera ' + t.num : '');
  var h = pageHead(kicker, t.name, esc(t.ess));
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
  h += '<div class="sb-group"><div class="sb-h">Farmacologie</div>' + link("med", href.tab("med"), "Medicamente", "med", DRUGS.length) +
    sub("med", DRUGS.map(function (d) { return ["med/" + d.id, href.med(d.id), d.name]; })) + '</div>';
  HC.TOPIC_GROUPS.slice(1).forEach(function (g) {
    h += '<div class="sb-group"><div class="sb-h">' + esc(g.label) + '</div>' + g.list.map(function (t) {
      return '<a class="sb-link topic" data-key="' + g.key + "/" + t.id + '" href="' + href.topic(t) + '">' + (t.num ? '<span class="sb-num">' + t.num + '</span>' : '<span class="sb-num dot"></span>') + '<span class="sb-label">' + esc(t.name) + '</span></a>';
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
