/* Schemele din capitole: ciclul punților transversale și potențialul de acțiune interactiv (faze + curenți). */
var HC = window.HC = window.HC || {};
(function () {
"use strict";
var esc = HC.esc, rich = HC.rich, el = HC.el, gchipSym = HC.gchipSym, CYCLE = HC.CYCLE, AP_PHASES = HC.AP_PHASES, AP_CURS = HC.AP_CURS;

function cycleHTML() {
  return '<div class="cycle">' + CYCLE.map(function (c, i) {
    return '<div class="cstep"><span class="n">' + (i + 1) + '</span><div><b>' + esc(c[0]) + '</b><p>' + rich(c[1]) + '</p></div></div>';
  }).join("") + '</div>';
}
function apX(t) { return +(78 + (t + 40) * (548 / 440)).toFixed(1); }
function apY(v) { return +(100 + (40 - v)).toFixed(1); }
function apFigure() {
  var X = apX, Y = apY, s = [];
  s.push('<svg class="diagram" viewBox="0 0 640 486" role="group" aria-label="Potențialul de acțiune ventricular, ECG-ul și curenții ionici">');
  [0, 25, 200, 300].forEach(function (t) {
    s.push('<line x1="' + X(t) + '" y1="8" x2="' + X(t) + '" y2="458" stroke="var(--line)" stroke-dasharray="3 4" pointer-events="none"/>');
  });
  // ECG
  s.push('<text class="lbl" x="8" y="54">ECG</text>');
  s.push('<path d="M' + X(-40) + ' 50 L' + X(-8) + ' 50 L' + X(-3) + ' 54 L' + X(8) + ' 14 L' + X(20) + ' 62 L' + X(32) + ' 50 L' + X(185) + ' 50 Q' + X(245) + ' 16 ' + X(300) + ' 50 L' + X(400) + ' 50" fill="none" stroke="var(--ink)" stroke-width="2" pointer-events="none"/>');
  s.push('<text class="lbl-sm" x="' + X(36) + '" y="26">QRS</text>');
  s.push('<text class="lbl-sm" x="' + X(100) + '" y="44">ST</text>');
  s.push('<text class="lbl-sm" x="' + X(252) + '" y="28">T</text>');
  s.push('<path d="M' + X(-3) + ' 68 V74 H' + X(300) + ' V68" fill="none" stroke="var(--muted)" stroke-width="1.2"/>');
  s.push('<text class="lbl-sm" x="' + X(70) + '" y="88">QT ≈ durata potențialului de acțiune</text>');
  // phase bands
  [["f4", -40, 0], ["f0", -2, 6], ["f1", 6, 25], ["f2", 25, 200], ["f3", 200, 300], ["f4", 300, 400]].forEach(function (b) {
    s.push('<rect class="apband" data-phase="' + b[0] + '" x="' + X(b[1]) + '" y="94" width="' + (X(b[2]) - X(b[1])).toFixed(1) + '" height="142" rx="4"/>');
  });
  s.push('<line x1="72" y1="' + Y(0) + '" x2="626" y2="' + Y(0) + '" stroke="var(--line)" stroke-dasharray="4 4" pointer-events="none"/>');
  s.push('<text class="lbl-sm" x="8" y="' + (Y(30) + 4) + '">+30 mV</text>');
  s.push('<text class="lbl-sm" x="8" y="' + (Y(0) + 4) + '">0 mV</text>');
  s.push('<text class="lbl-sm" x="8" y="' + (Y(-85) + 4) + '">−85 mV</text>');
  s.push('<path d="M' + X(-40) + ' ' + Y(-85) + ' L' + X(0) + ' ' + Y(-85) + ' L' + X(2) + ' ' + Y(30) + ' L' + X(7) + ' ' + Y(8) +
    ' Q' + X(12) + ' ' + Y(18) + ' ' + X(30) + ' ' + Y(16) + ' C' + X(110) + ' ' + Y(12) + ' ' + X(185) + ' ' + Y(4) + ' ' + X(215) + ' ' + Y(-15) +
    ' C' + X(240) + ' ' + Y(-40) + ' ' + X(258) + ' ' + Y(-80) + ' ' + X(295) + ' ' + Y(-85) + ' L' + X(400) + ' ' + Y(-85) +
    '" fill="none" stroke="var(--eosin)" stroke-width="3" stroke-linejoin="round" pointer-events="none"/>');
  [["4", -20], ["0", 0], ["1", 16], ["2", 110], ["3", 255], ["4", 350]].forEach(function (p) {
    s.push('<g pointer-events="none"><circle cx="' + X(p[1]) + '" cy="249" r="9" fill="var(--accent-soft)"/><text x="' + X(p[1]) + '" y="253" text-anchor="middle" style="font: 700 11.5px var(--body); fill: var(--accent)">' + p[0] + '</text></g>');
  });
  // currents
  AP_CURS.forEach(function (c, i) {
    var top = 266 + i * 32, base = top + 28;
    var d = "M" + X(c.pts[0][0]) + " " + base;
    c.pts.forEach(function (p) { d += " L" + X(p[0]) + " " + (base - 22 * p[1]).toFixed(1); });
    d += " L" + X(c.pts[c.pts.length - 1][0]) + " " + base + " Z";
    s.push('<g class="aprow" data-cur="' + c.id + '"><rect class="rowbg" x="0" y="' + top + '" width="640" height="32" rx="6"/>');
    s.push('<text class="lbl" x="8" y="' + (top + 15) + '">' + esc(c.lab) + '</text><text class="lbl-sm" x="8" y="' + (top + 28) + '" font-style="italic">' + esc(c.gene) + '</text>');
    s.push('<line x1="' + X(-40) + '" y1="' + base + '" x2="' + X(400) + '" y2="' + base + '" stroke="var(--line)"/>');
    s.push('<path d="' + d + '" fill="' + (c.dir === "in" ? "var(--eosin)" : "var(--accent)") + '" opacity=".75"/></g>');
  });
  s.push('<rect x="8" y="468" width="10" height="10" rx="2" fill="var(--eosin)" opacity=".75"/><text class="lbl-sm" x="24" y="477">curent de intrare (Na⁺, Ca²⁺): depolarizează</text>');
  s.push('<rect x="330" y="468" width="10" height="10" rx="2" fill="var(--accent)" opacity=".75"/><text class="lbl-sm" x="346" y="477">curent de ieșire (K⁺): repolarizează</text>');
  s.push('</svg>');
  var h = '<div class="figure">' + s.join("");
  h += '<div class="chiprow" role="group" aria-label="Fazele">' + AP_PHASES.map(function (p) {
    return '<button class="comp-btn" type="button" data-phase="' + p.id + '" aria-pressed="false">' + esc(p.chip) + '</button>';
  }).join("") + '</div>';
  h += '<div class="chiprow" role="group" aria-label="Curenții">' + AP_CURS.map(function (c) {
    return '<button class="comp-btn" type="button" data-cur="' + c.id + '" aria-pressed="false">' + esc(c.lab) + '</button>';
  }).join("") + '</div>';
  h += '<div class="apinfo" id="apinfo" aria-live="polite"></div></div>';
  return h;
}
function updateAP(sel) {
  var state = HC.state;
  state.ap = sel || "p:f0";
  var kind = state.ap.slice(0, 1), key = state.ap.slice(2);
  document.querySelectorAll("[data-phase]").forEach(function (n) {
    var on = kind === "p" && n.getAttribute("data-phase") === key;
    if (n.tagName.toLowerCase() === "button") n.setAttribute("aria-pressed", String(on));
    else n.classList.toggle("on", on);
  });
  document.querySelectorAll("[data-cur]").forEach(function (n) {
    var on = kind === "c" && n.getAttribute("data-cur") === key;
    if (n.tagName.toLowerCase() === "button") n.setAttribute("aria-pressed", String(on));
    else n.classList.toggle("on", on);
  });
  var box = el("apinfo");
  if (!box) return;
  if (kind === "p") {
    var p = AP_PHASES.filter(function (x) { return x.id === key; })[0];
    if (!p) return;
    box.innerHTML = '<h4>' + esc(p.title) + '</h4><p>' + rich(p.what) + '</p><p><span class="lbl2">Când se strică:</span> ' + rich(p.bad) + '</p>';
  } else {
    var c = AP_CURS.filter(function (x) { return x.id === key; })[0];
    if (!c) return;
    box.innerHTML = '<h4>' + esc(c.name) + '</h4><p><span class="lbl2">Sens:</span> ' + esc(c.dirtxt) + ' · <span class="lbl2">Când:</span> ' + esc(c.when) + '</p><p>' + rich(c.what) + '</p><p><span class="lbl2">Prea puțin:</span> ' + rich(c.less) + '</p><p><span class="lbl2">Prea mult:</span> ' + rich(c.more) + '</p><div class="genes">' + gchipSym(c.gene) + '</div>';
  }
}


HC.updateAP = updateAP;
HC.DIAGRAMS = HC.DIAGRAMS || {};
/* html() întoarce markup-ul; mount() rulează după ce e inserat în pagină (opțional). */
HC.DIAGRAMS.ap = { html: apFigure, mount: function () { updateAP(HC.state.ap); } };
HC.DIAGRAMS.cycle = { html: cycleHTML };

})();
