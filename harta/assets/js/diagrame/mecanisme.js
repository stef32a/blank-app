/* Schemele de mecanism: PA nodal, cuplajul excitație-contracție, EAD și DAD. */
var HC = window.HC = window.HC || {};
(function () {
"use strict";
var esc = HC.esc, rich = HC.rich;

function nodalSVG() {
  function X(t) { return +(70 + t * 0.6).toFixed(1); }
  function Y(v) { return +(30 + (20 - v) * 2).toFixed(1); }
  var s = '<svg class="diagram" viewBox="0 0 640 240" role="img" aria-label="Potențialul de acțiune al nodului sinusal">';
  s += '<line x1="62" y1="' + Y(-40) + '" x2="630" y2="' + Y(-40) + '" stroke="var(--muted)" stroke-dasharray="4 4"/>';
  s += '<text class="lbl-sm" x="6" y="' + (Y(-40) + 4) + '">prag</text>';
  s += '<text class="lbl-sm" x="6" y="' + (Y(-60) + 4) + '">−60 mV</text>';
  s += '<text class="lbl-sm" x="6" y="' + (Y(10) + 4) + '">+10 mV</text>';
  s += '<path d="M' + X(550) + ' ' + Y(-60) + ' L' + X(670) + ' ' + Y(-40) + '" stroke="var(--eosin)" stroke-width="2" stroke-dasharray="6 4" fill="none"/>';
  s += '<path d="M' + X(550) + ' ' + Y(-66) + ' L' + X(900) + ' ' + Y(-50) + '" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4" fill="none"/>';
  s += '<path d="M' + X(0) + ' ' + Y(-60) + ' C' + X(150) + ' ' + Y(-58) + ' ' + X(250) + ' ' + Y(-48) + ' ' + X(300) + ' ' + Y(-40) +
    ' C' + X(318) + ' ' + Y(-32) + ' ' + X(332) + ' ' + Y(4) + ' ' + X(350) + ' ' + Y(10) +
    ' C' + X(400) + ' ' + Y(8) + ' ' + X(470) + ' ' + Y(-20) + ' ' + X(550) + ' ' + Y(-60) +
    ' C' + X(700) + ' ' + Y(-58) + ' ' + X(800) + ' ' + Y(-48) + ' ' + X(850) + ' ' + Y(-40) +
    ' C' + X(868) + ' ' + Y(-32) + ' ' + X(882) + ' ' + Y(4) + ' ' + X(900) + ' ' + Y(10) +
    '" fill="none" stroke="var(--ink)" stroke-width="3"/>';
  s += '<text class="lbl" x="' + X(10) + '" y="216">Faza 4: If (HCN4) + ceasul de Ca²⁺ urcă singure</text>';
  s += '<text class="lbl" x="' + X(362) + '" y="30">Faza 0 lentă: ICa,L</text>';
  s += '<text class="lbl" x="' + X(500) + '" y="94">Repolarizare: IKr</text>';
  s += '<text class="lbl-sm" x="' + X(612) + '" y="134" style="fill: var(--eosin)">simpatic: pantă mai mare</text>';
  s += '<text class="lbl-sm" x="630" y="232" text-anchor="end" style="fill: var(--accent)">vag: pornește mai jos, pantă mai mică</text>';
  return s + '</svg>';
}
function eccSVG() {
  var s = '<svg class="diagram" viewBox="0 0 640 372" role="img" aria-label="Cuplajul excitație-contracție">';
  s += '<defs><marker id="arrCa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--k-calciu)"/></marker></defs>';
  s += '<rect x="0" y="0" width="640" height="46" fill="var(--interst)"/>';
  s += '<rect x="172" y="44" width="36" height="156" fill="var(--interst)"/>';
  s += '<path d="M0 46 H170 V200 H210 V46 H640" fill="none" stroke="var(--membrane)" stroke-width="4"/>';
  s += '<rect x="228" y="138" width="372" height="44" rx="10" fill="var(--sr)" opacity=".5"/>';
  s += '<text class="lbl-sm" x="300" y="165">Reticul sarcoplasmic (calsechestrină)</text>';
  s += '<rect x="204" y="146" width="12" height="28" rx="3" fill="var(--channel)"/>';
  s += '<rect x="222" y="146" width="10" height="28" rx="3" fill="var(--k-calciu)"/>';
  s += '<rect x="474" y="178" width="18" height="10" rx="3" fill="var(--k-calciu)"/>';
  s += '<rect x="424" y="36" width="14" height="20" rx="4" fill="var(--channel)"/>';
  s += '<rect x="556" y="36" width="14" height="20" rx="4" fill="var(--rec)"/>';
  // myofilaments
  s += '<line x1="60" y1="262" x2="600" y2="262" stroke="var(--sarc-a)" stroke-width="4"/>';
  s += '<line x1="60" y1="318" x2="600" y2="318" stroke="var(--sarc-a)" stroke-width="4"/>';
  s += '<line x1="150" y1="290" x2="510" y2="290" stroke="var(--zline)" stroke-width="8" stroke-linecap="round"/>';
  for (var x = 160; x <= 500; x += 20) {
    s += '<path d="M' + x + ' 286 l8 -16 M' + x + ' 294 l8 16" stroke="var(--zline)" stroke-width="2" stroke-linecap="round"/>';
  }
  for (var x2 = 80; x2 <= 580; x2 += 40) {
    s += '<circle cx="' + x2 + '" cy="262" r="3.5" fill="var(--k-calciu)"/><circle cx="' + x2 + '" cy="318" r="3.5" fill="var(--k-calciu)"/>';
  }
  s += '<line x1="60" y1="250" x2="60" y2="330" stroke="var(--zline)" stroke-width="3"/><line x1="600" y1="250" x2="600" y2="330" stroke="var(--zline)" stroke-width="3"/>';
  // arrows
  var A = ' fill="none" stroke="var(--k-calciu)" stroke-width="2.5" marker-end="url(#arrCa)"';
  s += '<path d="M182 160 H200"' + A + '/>';
  s += '<path d="M236 186 C250 220 280 236 300 254"' + A + '/>';
  s += '<path d="M483 252 V194"' + A + '/>';
  s += '<path d="M400 252 C400 160 420 100 430 62"' + A + '/>';
  // labels
  s += '<text class="lbl" x="190" y="24" text-anchor="middle">① PA intră în tubul T</text>';
  s += '<text class="lbl" x="431" y="24" text-anchor="middle">⑥ NCX: Ca²⁺ afară</text>';
  s += '<text class="lbl" x="563" y="24" text-anchor="middle">⑦ pompa Na⁺/K⁺</text>';
  s += '<text class="lbl" x="164" y="236" text-anchor="end">② Cav1.2: intră puțin Ca²⁺</text>';
  s += '<text class="lbl" x="240" y="128">③ RyR2 eliberează mult Ca²⁺</text>';
  s += '<text class="lbl-sm" x="262" y="226">Ca²⁺ ×10</text>';
  s += '<text class="lbl" x="494" y="222">⑤ SERCA2a (PLN)</text>';
  s += '<text class="lbl" x="60" y="354">④ Ca²⁺ pe troponina C → miozina trage actina → sistolă</text>';
  return s + '</svg>';
}
function eaddadSVG() {
  function P(x0) {
    return { X: function (t) { return +(x0 + 10 + t * 0.7).toFixed(1); }, Y: function (v) { return +(50 + (40 - v)).toFixed(1); } };
  }
  var a = P(0), b = P(320), s = '<svg class="diagram" viewBox="0 0 640 232" role="img" aria-label="EAD și DAD">';
  s += '<line x1="320" y1="10" x2="320" y2="224" stroke="var(--line)"/>';
  s += '<text class="lbl" x="10" y="20">EAD: în timpul repolarizării</text>';
  s += '<text class="lbl" x="330" y="20">DAD: după repolarizare</text>';
  var X = a.X, Y = a.Y;
  s += '<path d="M' + X(0) + ' ' + Y(-85) + ' L' + X(20) + ' ' + Y(-85) + ' L' + X(22) + ' ' + Y(30) + ' L' + X(27) + ' ' + Y(10) +
    ' Q' + X(32) + ' ' + Y(16) + ' ' + X(45) + ' ' + Y(14) + ' C' + X(120) + ' ' + Y(10) + ' ' + X(200) + ' ' + Y(4) + ' ' + X(225) + ' ' + Y(-10) +
    ' C' + X(240) + ' ' + Y(-22) + ' ' + X(252) + ' ' + Y(-38) + ' ' + X(262) + ' ' + Y(-40) +
    ' C' + X(272) + ' ' + Y(-40) + ' ' + X(278) + ' ' + Y(-16) + ' ' + X(287) + ' ' + Y(-16) +
    ' C' + X(298) + ' ' + Y(-16) + ' ' + X(310) + ' ' + Y(-60) + ' ' + X(340) + ' ' + Y(-82) + ' L' + X(400) + ' ' + Y(-85) +
    '" fill="none" stroke="var(--eosin)" stroke-width="3"/>';
  s += '<text class="lbl" x="' + (X(287) + 8) + '" y="' + (Y(-16) - 6) + '" style="fill: var(--eosin)">EAD</text>';
  s += '<text class="lbl-sm" x="10" y="208">PA prea lung → Cav1.2 se redeschide</text>';
  s += '<text class="lbl-sm" x="10" y="224">→ torsadă (QT lung)</text>';
  X = b.X; Y = b.Y;
  s += '<line x1="' + X(180) + '" y1="' + Y(-65) + '" x2="' + X(400) + '" y2="' + Y(-65) + '" stroke="var(--muted)" stroke-dasharray="4 4"/>';
  s += '<text class="lbl-sm" x="' + X(345) + '" y="' + (Y(-65) + 14) + '">prag</text>';
  s += '<path d="M' + X(0) + ' ' + Y(-85) + ' L' + X(20) + ' ' + Y(-85) + ' L' + X(22) + ' ' + Y(30) + ' L' + X(27) + ' ' + Y(10) +
    ' Q' + X(32) + ' ' + Y(16) + ' ' + X(45) + ' ' + Y(14) + ' C' + X(100) + ' ' + Y(10) + ' ' + X(150) + ' ' + Y(4) + ' ' + X(165) + ' ' + Y(-10) +
    ' C' + X(180) + ' ' + Y(-25) + ' ' + X(188) + ' ' + Y(-78) + ' ' + X(210) + ' ' + Y(-85) +
    ' L' + X(235) + ' ' + Y(-85) + ' C' + X(247) + ' ' + Y(-85) + ' ' + X(251) + ' ' + Y(-72) + ' ' + X(257) + ' ' + Y(-72) +
    ' C' + X(263) + ' ' + Y(-72) + ' ' + X(269) + ' ' + Y(-85) + ' ' + X(285) + ' ' + Y(-85) + ' L' + X(300) + ' ' + Y(-85) +
    '" fill="none" stroke="var(--accent)" stroke-width="3"/>';
  s += '<path d="M' + X(300) + ' ' + Y(-85) + ' C' + X(310) + ' ' + Y(-85) + ' ' + X(316) + ' ' + Y(-64) + ' ' + X(320) + ' ' + Y(-62) +
    ' L' + X(322) + ' ' + Y(30) + ' L' + X(327) + ' ' + Y(12) + ' C' + X(345) + ' ' + Y(14) + ' ' + X(370) + ' ' + Y(10) + ' ' + X(400) + ' ' + Y(6) +
    '" fill="none" stroke="var(--eosin)" stroke-width="3" stroke-dasharray="6 4"/>';
  s += '<text class="lbl-sm" x="' + X(232) + '" y="' + (Y(-85) + 18) + '">DAD sub prag</text>';
  s += '<text class="lbl" x="' + (X(330) - 4) + '" y="' + (Y(30) - 6) + '" text-anchor="end" style="fill: var(--eosin)">extrasistolă</text>';
  s += '<text class="lbl-sm" x="330" y="208">Ca²⁺ scapă din reticul → NCX</text>';
  s += '<text class="lbl-sm" x="330" y="224">→ curent de intrare (CPVT, digoxină)</text>';
  return s + '</svg>';
}



function figure(svg, cap) {
  return '<div class="figure">' + svg + (cap ? '<p class="figcap">' + esc(cap) + '</p>' : '') + '</div>';
}
HC.DIAGRAMS = HC.DIAGRAMS || {};
HC.DIAGRAMS.nodal = { html: function () { return figure(nodalSVG(), "Celula din nodul sinusal: fără repaus stabil, faza 4 urcă singură spre prag. Liniile întrerupte arată ce face simpaticul (pantă mai mare) și vagul (pornește mai jos, pantă mai mică)."); } };
HC.DIAGRAMS.ecc = { html: function () { return figure(eccSVG(), "Numerele din schemă corespund pașilor de mai jos. Săgețile turcoaz arată drumul Ca²⁺."); } };
HC.DIAGRAMS.eaddad = { html: function () { return figure(eaddadSVG(), "Stânga: o EAD apare înainte ca repolarizarea să se termine. Dreapta: o DAD apare după repolarizare; când depășește pragul, pornește o extrasistolă."); } };

})();
