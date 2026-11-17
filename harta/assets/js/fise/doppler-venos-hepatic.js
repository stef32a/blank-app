/* Fișă: Doppler pe venele hepatice + VExUS.  Adresa: #/fisa/doppler-venos-hepatic
   O fișă = o pagină de sine stătătoare (atlas, schemă interactivă), atașată unei teme (parent)
   și afișată și în temele din „also”. Vezi README → „O fișă nouă”. */
var HC = window.HC = window.HC || {};
(function () {
"use strict";

/* ---------- desenul unui „ecran” Doppler (schemă, nu înregistrare reală) ---------- */
var W = 360, H = 188, ML = 10, MR = 10;
var BASE = 108, SCALE = 52;
var ECGY = 34, ECGS = 16;

function g(t, c, w) { var d = (t - c) / w; return Math.exp(-0.5 * d * d); }

function makeBeats(beats) {
  var total = beats.reduce(function (s, b) { return s + (b.len || 1); }, 0);
  var span = W - ML - MR, x0 = ML, out = [];
  beats.forEach(function (b) {
    var w = span * (b.len || 1) / total;
    out.push({ x0: x0, w: w, b: b });
    x0 += w;
  });
  return out;
}

function svgEl(name, attrs, text) {
  var e = document.createElementNS("http://www.w3.org/2000/svg", name);
  var css = "";
  for (var k in attrs) {
    var v = String(attrs[k]);
    if (v.indexOf("var(") === 0 && (k === "fill" || k === "stroke" || k === "font-family")) css += k + ":" + v + ";";
    else e.setAttribute(k, v);
  }
  if (css) e.setAttribute("style", css);
  if (text != null) e.textContent = text;
  return e;
}

function ecgVal(t, af, seed) {
  var v = 0;
  if (!af) v += 0.12 * g(t, 0.06, 0.02);
  else v += 0.04 * Math.sin(t * 110 + seed) + 0.03 * Math.sin(t * 73 + seed * 2);
  v += -0.1 * g(t, 0.172, 0.006) + 1.0 * g(t, 0.185, 0.008) - 0.25 * g(t, 0.2, 0.008);
  v += 0.25 * g(t, 0.45, 0.045);
  return v;
}

var uid = 0;
function draw(container, p, opts) {
  opts = opts || {};
  var base = opts.base != null ? opts.base : BASE;
  var scale = opts.scale || SCALE;
  var svg = svgEl("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": p.title + ": " + (p.sign || "") });
  for (var gy = 60; gy < H; gy += 24) {
    svg.appendChild(svgEl("line", { x1: 0, x2: W, y1: gy, y2: gy, stroke: "var(--dp-grid)", "stroke-width": 1 }));
  }
  svg.appendChild(svgEl("line", { x1: 0, x2: W, y1: base, y2: base, stroke: "var(--dp-trace)", "stroke-width": 1, opacity: 0.7 }));

  var beats = makeBeats(p.beats);
  var ecg = "", fill = "", line = "", labels = [];
  beats.forEach(function (bt, i) {
    var b = bt.b;
    var pts = [];
    for (var s = 0; s <= 160; s++) {
      var t = s / 160;
      var v = b.k || 0;
      (b.comps || []).forEach(function (c) { v += c.a * g(t, c.c, c.w); });
      var x = bt.x0 + t * bt.w;
      var y = base - v * scale;
      pts.push([x, y]);
      if (!opts.noEcg) {
        var ey = ECGY - ecgVal(t, p.af, i * 1.7 + 0.4) * ECGS;
        ecg += (ecg === "" ? "M" : "L") + x.toFixed(1) + " " + ey.toFixed(1) + " ";
      }
    }
    pts.forEach(function (q, j) { line += (j === 0 && i === 0 ? "M" : "L") + q[0].toFixed(1) + " " + q[1].toFixed(1) + " "; });
    fill += "M" + pts[0][0].toFixed(1) + " " + base + " ";
    pts.forEach(function (q) { fill += "L" + q[0].toFixed(1) + " " + q[1].toFixed(1) + " "; });
    fill += "L" + pts[pts.length - 1][0].toFixed(1) + " " + base + " Z ";
    (b.comps || []).forEach(function (c) {
      if (!c.l) return;
      var x = bt.x0 + c.c * bt.w;
      var v = b.k || 0;
      (b.comps || []).forEach(function (cc) { v += cc.a * g(c.c, cc.c, cc.w); });
      var y = base - v * scale;
      labels.push({ x: x, y: v > 0 ? y - 6 : y + 15, t: c.l });
    });
    if (b.resp) {
      svg.appendChild(svgEl("text", { x: bt.x0 + 4, y: 12, fill: "var(--dp-trace)", "font-family": "var(--mono)", "font-size": 10, "letter-spacing": "0.08em" }, b.resp));
    }
    if (i > 0) {
      svg.appendChild(svgEl("line", { x1: bt.x0, x2: bt.x0, y1: 16, y2: H - 6, stroke: "var(--dp-grid)", "stroke-width": 1, "stroke-dasharray": "3 4" }));
    }
  });
  if (!opts.noEcg) {
    svg.appendChild(svgEl("path", { d: ecg, fill: "none", stroke: "var(--dp-ecg)", "stroke-width": 1.4 }));
  }
  uid += 1;
  var clipUp = "dpu" + uid, clipDn = "dpd" + uid;
  var defs = svgEl("defs", {});
  var c1 = svgEl("clipPath", { id: clipUp }); c1.appendChild(svgEl("rect", { x: 0, y: 0, width: W, height: base })); defs.appendChild(c1);
  var c2 = svgEl("clipPath", { id: clipDn }); c2.appendChild(svgEl("rect", { x: 0, y: base, width: W, height: H - base })); defs.appendChild(c2);
  svg.appendChild(defs);
  svg.appendChild(svgEl("path", { d: fill, fill: "var(--dp-rev)", "fill-opacity": 0.6, "clip-path": "url(#" + clipUp + ")" }));
  svg.appendChild(svgEl("path", { d: fill, fill: "var(--dp-fwd)", "fill-opacity": 0.6, "clip-path": "url(#" + clipDn + ")" }));
  svg.appendChild(svgEl("path", { d: line, fill: "none", stroke: "var(--dp-trace)", "stroke-width": 1.2, opacity: 0.9 }));
  labels.forEach(function (L) {
    svg.appendChild(svgEl("text", { x: L.x, y: L.y, fill: "var(--dp-trace)", "font-family": "var(--mono)", "font-size": 11, "font-weight": 600, "text-anchor": "middle" }, L.t));
  });
  var scr = document.createElement("div"); scr.className = "dp-screen"; scr.appendChild(svg);
  container.appendChild(scr);
}

function card(parent, p, opts) {
  var c = document.createElement("article"); c.className = "dp-card";
  var h = document.createElement("h3"); h.textContent = p.title;
  if (p.tag) { var t = document.createElement("span"); t.className = "dp-tag" + (p.abn ? " abn" : ""); t.textContent = p.tag; h.appendChild(t); }
  c.appendChild(h);
  draw(c, p, opts);
  if (p.sign) { var s = document.createElement("p"); s.className = "dp-sign"; s.textContent = p.sign; c.appendChild(s); }
  if (p.why) { var w = document.createElement("p"); w.className = "dp-why"; w.textContent = p.why; c.appendChild(w); }
  parent.appendChild(c);
}

/* ---------- pattern-urile ----------
   amplitudini: + = retrograd (deasupra liniei), − = anterograd (sub linie)
   c = poziția în ciclu (0-1), w = lățimea, a = amplitudinea, l = eticheta */
var A = function (a) { return { c: 0.10, w: 0.032, a: a, l: "A" }; };
var S = function (a, w) { return { c: 0.34, w: w || 0.065, a: a, l: "S" }; };
var V = function (a) { return { c: 0.57, w: 0.028, a: a, l: a > 0.08 ? "V" : null }; };
var D = function (a, w) { return { c: 0.72, w: w || 0.055, a: a, l: "D" }; };

var HEP = [
  { title: "Normal", tag: "referință", sign: "S > D, A mic. La inspir S și D cresc.",
    why: "OD se relaxează și inelul tricuspid coboară în sistolă: OD „aspiră” sângele (descendenta x) → S mare.",
    beats: [ { comps: [A(0.25), S(-1.0), V(0.1), D(-0.6)] }, { comps: [A(0.25), S(-1.0), V(0.1), D(-0.6)] } ] },
  { title: "POD crescută / VD rigid", tag: "anormal", abn: true, sign: "S < D (S tocit), A mare.",
    why: "OD plin nu mai poate aspira în sistolă; contracția atrială împinge înapoi mai tare (HTP, disfuncție diastolică VD).",
    beats: [ { comps: [A(0.6), S(-0.42), V(0.15), D(-0.85)] }, { comps: [A(0.6), S(-0.42), V(0.15), D(-0.85)] } ] },
  { title: "Fibrilație atrială", tag: "anormal", abn: true, af: true, sign: "Fără undă A, S tocit, cicluri inegale.",
    why: "Lipsesc contracția și relaxarea atrială: dispare A și scade aspirația sistolică, indiferent de presiune.",
    beats: [ { len: 0.8, comps: [S(-0.45), V(0.1), D(-0.8)] }, { len: 1.2, comps: [S(-0.4), V(0.1), D(-0.8)] } ] },
  { title: "IT severă", tag: "anormal", abn: true, sign: "S inversat (flux retrograd în toată sistola).",
    why: "Jetul de IT umple OD în sistolă și împinge sângele înapoi în venele hepatice. În VExUS: pattern sever.",
    beats: [ { comps: [A(0.2), { c: 0.38, w: 0.09, a: 0.85, l: "S" }, D(-0.95)] }, { comps: [A(0.2), { c: 0.38, w: 0.09, a: 0.85, l: "S" }, D(-0.95)] } ] },
  { title: "Tamponadă", tag: "anormal", abn: true, sign: "Flux aproape doar sistolic, D mic sau absent; în expir D se inversează.",
    why: "Pericardul comprimă OD: în diastolă nu se poate goli (nu există descendenta y). Inspirul ajută puțin umplerea dreaptă.",
    beats: [ { resp: "INSPIR", comps: [A(0.2), S(-1.0), D(-0.15)] }, { resp: "EXPIR", comps: [A(0.3), S(-0.6), { c: 0.72, w: 0.06, a: 0.3, l: "D" }] } ] },
  { title: "Constricție", tag: "anormal", abn: true, sign: "D mare și ascuțit (pattern W); inversare holodiastolică în EXPIR (raport ≥ 0,79).",
    why: "Umplere rapidă până la limita pericardului (dip). În expir septul trece spre VD, VD nu mai are loc → sângele se întoarce.",
    beats: [ { resp: "INSPIR", comps: [A(0.25), S(-0.65), D(-1.05, 0.04), { c: 0.84, w: 0.05, a: 0.12 }] },
             { resp: "EXPIR", comps: [A(0.3), S(-0.4), D(-0.45, 0.035), { c: 0.84, w: 0.07, a: 0.55, l: "DR" }] } ] },
  { title: "Restricție", tag: "anormal", abn: true, sign: "S tocit, D dominant; inversare diastolică în INSPIR.",
    why: "Miocardul rigid nu primește surplusul de sânge adus de inspir, deci acesta se întoarce în vene. Invers față de constricție.",
    beats: [ { resp: "INSPIR", comps: [A(0.35), S(-0.32), D(-0.8, 0.045), { c: 0.84, w: 0.06, a: 0.5, l: "DR" }] },
             { resp: "EXPIR", comps: [A(0.3), S(-0.35), D(-0.7, 0.045), { c: 0.84, w: 0.05, a: 0.1 }] } ] }
];

var dip = function (a) { return [{ c: 0.34, w: 0.07, a: a }, { c: 0.72, w: 0.06, a: a * 0.8 }]; };
var PORTAL = [
  { title: "Normal", tag: "IP < 30%", sign: "Flux continuu, aproape plat.",
    beats: [ { k: 0.6, comps: dip(-0.1) }, { k: 0.6, comps: dip(-0.1) } ] },
  { title: "Ușor anormal", tag: "IP 30–49%", abn: true, sign: "Flux ondulat, pulsatil.",
    beats: [ { k: 0.6, comps: dip(-0.24) }, { k: 0.6, comps: dip(-0.24) } ] },
  { title: "Sever anormal", tag: "IP ≥ 50%", abn: true, sign: "Pulsatil, uneori cu inversare.",
    beats: [ { k: 0.55, comps: dip(-0.75) }, { k: 0.55, comps: dip(-0.75) } ] }
];
var RENAL = [
  { title: "Normal", tag: "continuu", sign: "Flux venos continuu.",
    beats: [ { k: -0.5, comps: dip(0.08) }, { k: -0.5, comps: dip(0.08) } ] },
  { title: "Ușor anormal", tag: "bifazic", abn: true, sign: "Unde S și D separate.",
    beats: [ { comps: [{ c: 0.34, w: 0.07, a: -0.55, l: "S" }, { c: 0.72, w: 0.06, a: -0.55, l: "D" }] }, { comps: [{ c: 0.34, w: 0.07, a: -0.55, l: "S" }, { c: 0.72, w: 0.06, a: -0.55, l: "D" }] } ] },
  { title: "Sever anormal", tag: "monofazic", abn: true, sign: "Doar unda D.",
    beats: [ { comps: [{ c: 0.72, w: 0.07, a: -0.75, l: "D" }] }, { comps: [{ c: 0.72, w: 0.07, a: -0.75, l: "D" }] } ] }
];

/* tabelul „Pe scurt” */
var SUMMARY = [
  ["Normal", "S > D, A mic", "OD aspiră în sistolă (descendenta x)"],
  ["POD crescută / VD rigid", "S < D, A mare", "OD plin nu mai aspiră, contracția atrială împinge înapoi"],
  ["FA", "fără A, S tocit", "lipsesc contracția și relaxarea atrială"],
  ["IT severă", "S inversat", "jetul de IT împinge sângele înapoi în vene"],
  ["Tamponadă", "flux doar sistolic, D absent; în expir D inversat", "OD comprimată nu se poate goli în diastolă"],
  ["Constricție", "D mare (W); inversare holodiastolică în **expir** (raport ≥ 0,79)", "interdependență ventriculară, cofraj pericardic"],
  ["Restricție", "S tocit; inversare diastolică în **inspir**", "ventriculi rigizi nu primesc surplusul adus de inspir"]
];

/* ---------- pagina ---------- */
function html() {
  var esc = HC.esc, b = function (s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); };
  var h = '<div class="fisa fisa-dp">';
  h += '<div class="legend dp-legend">' +
    '<span><i class="dot" style="background:var(--dp-fwd)"></i>sub linie = anterograd (spre OD): S, D</span>' +
    '<span><i class="dot" style="background:var(--dp-rev)"></i>deasupra = retrograd (spre ficat): A, V, inversări</span>' +
    '<span><i class="dot" style="background:var(--dp-ecg)"></i>ECG de referință</span></div>';
  h += '<section class="dp-grid" id="dp-hep" aria-label="Pattern-uri în venele hepatice"></section>';

  h += '<section class="blk"><h2 class="fisa-h">VExUS: aceeași presiune, mai departe în ficat și rinichi</h2>' +
    '<p>Cu cât POD crește, presiunea „ajunge” și în vena portă și în venele intrarenale, care normal au flux aproape continuu.</p>' +
    '<div class="dp-grades">' +
    '<div><b>Grad 0</b><span>VCI &lt; 2 cm</span></div>' +
    '<div><b>Grad 1</b><span>VCI ≥ 2 cm, pattern-uri normale sau ușor anormale</span></div>' +
    '<div><b>Grad 2</b><span>un pattern sever</span></div>' +
    '<div><b>Grad 3</b><span>≥ 2 pattern-uri severe</span></div></div></section>';
  h += '<div class="dp-row"><div class="dp-rowlabel">Vena portă · flux spre ficat, spre sondă (deasupra liniei)</div><section class="dp-grid three" id="dp-portal"></section></div>';
  h += '<div class="dp-row"><div class="dp-rowlabel">Venele intrarenale · afișate sub linie</div><section class="dp-grid three" id="dp-renal"></section></div>';

  h += '<section class="blk"><h2 class="fisa-h">Pe scurt</h2><div class="tablewrap tw-s dp-table"><table><thead><tr><th>Pattern</th><th>Semnul-cheie</th><th>Mecanismul</th></tr></thead><tbody>' +
    SUMMARY.map(function (r) { return '<tr><td><b>' + esc(r[0]) + '</b></td><td>' + b(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'; }).join("") +
    '</tbody></table></div></section>';
  h += '<p class="fisa-note">Formele undelor sunt desenate schematic, ca să arate direcția și raportul dintre unde, nu valori reale de velocitate.</p>';
  return h + '</div>';
}
function mount() {
  var hep = document.getElementById("dp-hep"), por = document.getElementById("dp-portal"), ren = document.getElementById("dp-renal");
  if (!hep) return;
  HEP.forEach(function (p) { card(hep, p); });
  PORTAL.forEach(function (p) { card(por, p, { base: 125, scale: 70 }); });
  RENAL.forEach(function (p) { card(ren, p, { base: 70, scale: 70 }); });
}

HC.FISE = HC.FISE || [];
HC.FISE.push({
  id: "doppler-venos-hepatic",
  title: "Doppler pe venele hepatice",
  short: "Doppler venos hepatic",
  parent: "unelte/eco",
  also: ["clinica/pericard", "clinica/insuficienta-cardiaca", "clinica/pulmonar", "transversal/acut"],
  ess: "Atlas de pattern-uri: normal, POD crescută, FA, IT severă, tamponadă, constricție, restricție, plus VExUS (vena portă, venele intrarenale).",
  lead: "Fiecare undă e oglinda unei variații de presiune în OD. Imaginile sunt scheme (nu înregistrări reale), cu incidența subcostală: fluxul spre inimă se îndepărtează de sondă, deci apare <b>sub linia de bază</b>.",
  /* text suplimentar pentru căutare */
  keywords: "VExUS congestie venoasă vena cavă inferioară VCI vena portă indice de pulsatilitate venele intrarenale POD presiunea în atriul drept " +
    HEP.concat(PORTAL, RENAL).map(function (p) { return p.title + " " + p.sign + " " + (p.why || ""); }).join(" ") + " " +
    SUMMARY.map(function (r) { return r.join(" "); }).join(" "),
  html: html,
  mount: mount
});

})();
