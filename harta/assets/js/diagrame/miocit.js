/* Schema cardiomiocitului (SVG). Fiecare <g class="region" data-comp> e un compartiment clicabil. */
var HC = window.HC = window.HC || {};
(function () {
"use strict";
var esc = HC.esc, rich = HC.rich;

HC.myocyteSVG = function myocyteSVG() {
  var s = [];
  s.push('<svg class="diagram" id="svg-miocit" viewBox="0 0 720 420" role="group" aria-label="Schema unui cardiomiocit">');
  // interstitiu (background)
  s.push('<g class="region" data-comp="interstitiu" tabindex="0" role="button" aria-label="Interstițiul">');
  s.push('<rect x="0" y="0" width="720" height="420" fill="var(--interst)"/>');
  for (var i = 0; i < 14; i++) {
    var x = 30 + i * 48, y = 340 + (i % 3) * 18;
    s.push('<path d="M' + x + ' ' + y + ' q 8 -8 16 0 t 16 0 t 16 0" fill="none" stroke="var(--amyloid)" stroke-width="3" stroke-linecap="round"/>');
  }
  for (var j = 0; j < 7; j++) {
    var cx = 40 + j * 62, cy = 40 + (j % 2) * 14;
    s.push('<path d="M' + cx + ' ' + cy + ' c 12 -10 24 10 36 0 s 24 10 36 0" fill="none" stroke="var(--fiber)" stroke-width="2.5" stroke-linecap="round"/>');
  }
  s.push('<text class="lbl" x="30" y="405">Interstițiu: amiloid, colagen</text>');
  s.push('</g>');
  // neighbour cells
  s.push('<rect x="0" y="100" width="40" height="210" fill="var(--cell-stub)"/>');
  s.push('<rect x="680" y="100" width="40" height="210" fill="var(--cell-stub)"/>');
  // cytoplasm = citoschelet (part A)
  s.push('<g class="region" data-comp="citoschelet" tabindex="0" role="button" aria-label="Citoscheletul și costamerul">');
  s.push('<rect x="56" y="100" width="608" height="210" fill="var(--cell)"/>');
  s.push('</g>');
  // nucleus
  s.push('<g class="region" data-comp="nucleu" tabindex="0" role="button" aria-label="Nucleul">');
  s.push('<ellipse cx="180" cy="148" rx="74" ry="30" fill="var(--nuc)" stroke="var(--nuc-in)" stroke-width="2"/>');
  s.push('<circle cx="198" cy="144" r="8" fill="var(--nuc-in)"/>');
  s.push('<text class="lbl" x="128" y="153">Nucleu</text>');
  s.push('</g>');
  // mito + lysosomes
  s.push('<g class="region" data-comp="mito" tabindex="0" role="button" aria-label="Mitocondria, lizozomul și metabolismul">');
  var mx = [340, 404, 468, 532, 596];
  mx.forEach(function (x, k) {
    var y = 122 + (k % 2) * 30;
    s.push('<rect x="' + x + '" y="' + y + '" width="54" height="22" rx="11" fill="var(--mito)" stroke="var(--mito-line)" stroke-width="1.6"/>');
    s.push('<path d="M' + (x + 12) + ' ' + (y + 4) + ' v14 M' + (x + 22) + ' ' + (y + 4) + ' v14 M' + (x + 32) + ' ' + (y + 4) + ' v14 M' + (x + 42) + ' ' + (y + 4) + ' v14" stroke="var(--mito-line)" stroke-width="1.2"/>');
  });
  s.push('<circle cx="272" cy="128" r="8" fill="var(--lyso)" stroke="var(--mito-line)" stroke-width="1.4"/>');
  s.push('<circle cx="268" cy="162" r="6" fill="var(--lyso)" stroke="var(--mito-line)" stroke-width="1.4"/>');
  s.push('<text class="lbl-sm" x="340" y="116">Mitocondrii · lizozomi</text>');
  s.push('</g>');
  // SR
  s.push('<g class="region" data-comp="rs" tabindex="0" role="button" aria-label="Reticulul sarcoplasmic și calciul">');
  var p = "M70 196";
  for (var x2 = 70; x2 < 650; x2 += 20) { p += " q 5 -8 10 0 t 10 0"; }
  s.push('<rect x="64" y="184" width="592" height="24" fill="transparent" class="hit"/>');
  s.push('<path d="' + p + '" fill="none" stroke="var(--sr)" stroke-width="4" stroke-linecap="round"/>');
  s.push('<rect x="284" y="186" width="10" height="20" rx="4" fill="var(--sr)"/><rect x="314" y="186" width="10" height="20" rx="4" fill="var(--sr)"/>');
  s.push('<text class="lbl-sm" x="70" y="181">Reticul sarcoplasmic (Ca²⁺)</text>');
  s.push('</g>');
  // sarcomeres
  s.push('<g class="region" data-comp="sarcomer" tabindex="0" role="button" aria-label="Sarcomerul">');
  var n = 11, w = (650 - 70) / n;
  s.push('<rect x="70" y="214" width="580" height="66" fill="transparent" class="hit"/>');
  for (var q = 0; q < n; q++) {
    var x0 = 70 + q * w;
    s.push('<rect x="' + (x0 + w * 0.22).toFixed(1) + '" y="218" width="' + (w * 0.56).toFixed(1) + '" height="58" rx="3" fill="var(--sarc-a)"/>');
    s.push('<line x1="' + (x0 + w / 2).toFixed(1) + '" y1="218" x2="' + (x0 + w / 2).toFixed(1) + '" y2="276" stroke="var(--zline)" stroke-width="1" opacity=".55"/>');
    for (var f = 0; f < 4; f++) {
      var fy = 226 + f * 13;
      s.push('<line x1="' + (x0 + 2).toFixed(1) + '" y1="' + fy + '" x2="' + (x0 + w - 2).toFixed(1) + '" y2="' + fy + '" stroke="var(--zline)" stroke-width=".8" opacity=".35"/>');
    }
  }
  for (var z = 0; z <= n; z++) {
    var zx = (70 + z * w).toFixed(1);
    s.push('<line x1="' + zx + '" y1="214" x2="' + zx + '" y2="280" stroke="var(--zline)" stroke-width="2.4"/>');
  }
  s.push('</g>');
  // cytoskeleton (part B): desmin + costameres
  s.push('<g class="region" data-comp="citoschelet" tabindex="0" role="button" aria-label="Citoscheletul și costamerul (desmină)">');
  s.push('<rect x="64" y="281" width="592" height="21" fill="transparent" class="hit"/>');
  for (var z2 = 0; z2 <= n; z2++) {
    var dx = (70 + z2 * w).toFixed(1);
    s.push('<line x1="' + dx + '" y1="281" x2="' + dx + '" y2="304" stroke="var(--desmin)" stroke-width="1.6" stroke-dasharray="3 3"/>');
    s.push('<rect x="' + (70 + z2 * w - 4).toFixed(1) + '" y="302" width="8" height="5" rx="1.5" fill="var(--desmin)"/>');
  }
  s.push('<text class="lbl-sm" x="470" y="297">Desmină, costamer</text>');
  s.push('</g>');
  // sarcolemma
  s.push('<g class="region" data-comp="sarcolema" tabindex="0" role="button" aria-label="Sarcolema și canalele ionice">');
  s.push('<rect x="56" y="93" width="450" height="15" class="hit"/>');
  s.push('<rect x="56" y="302" width="608" height="15" class="hit"/>');
  s.push('<rect x="291" y="100" width="20" height="90" class="hit"/>');
  s.push('<line x1="56" y1="100" x2="664" y2="100" stroke="var(--membrane)" stroke-width="4"/>');
  s.push('<line x1="56" y1="310" x2="664" y2="310" stroke="var(--membrane)" stroke-width="4"/>');
  s.push('<path d="M296 100 V190 M306 100 V190" stroke="var(--membrane)" stroke-width="2.5" fill="none"/>');
  [84, 108, 132, 228, 252, 380, 404, 452].forEach(function (cx) {
    s.push('<rect x="' + (cx - 5) + '" y="91" width="10" height="18" rx="4" fill="var(--channel)"/>');
  });
  [110, 170, 230, 330, 390, 450, 510, 570, 630].forEach(function (cx) {
    s.push('<rect x="' + (cx - 5) + '" y="301" width="10" height="18" rx="4" fill="var(--channel)"/>');
  });
  s.push('<rect x="294" y="160" width="14" height="9" rx="3" fill="var(--channel)"/>');
  s.push('<text class="lbl-sm" x="314" y="176">Tubul T (Cav1.2)</text>');
  s.push('<text class="lbl" x="70" y="84">Sarcolema, canale ionice</text>');
  s.push('</g>');
  // receptors
  s.push('<g class="region" data-comp="receptori" tabindex="0" role="button" aria-label="Receptori și semnalizare">');
  s.push('<rect x="500" y="56" width="164" height="42" class="hit"/>');
  [520, 552, 584, 616, 648].forEach(function (rx) {
    s.push('<path d="M' + rx + ' 100 V82 M' + rx + ' 82 l-7 -10 M' + rx + ' 82 l7 -10" stroke="var(--rec)" stroke-width="3" stroke-linecap="round" fill="none"/>');
  });
  s.push('<text class="lbl" x="506" y="62">Receptori</text>');
  s.push('</g>');
  // intercalated discs
  s.push('<g class="region" data-comp="disc" tabindex="0" role="button" aria-label="Discul intercalar">');
  s.push('<rect x="38" y="100" width="30" height="210" class="hit"/>');
  s.push('<rect x="652" y="100" width="30" height="210" class="hit"/>');
  function zig(x) {
    var d = "M" + x + " 100";
    for (var yy = 100; yy < 310; yy += 30) { d += " V" + (yy + 15) + " H" + (x + 10) + " V" + (yy + 30) + " H" + x; }
    return d;
  }
  s.push('<path d="' + zig(48) + '" stroke="var(--disc)" stroke-width="3.5" fill="none"/>');
  s.push('<path d="' + zig(662) + '" stroke="var(--disc)" stroke-width="3.5" fill="none"/>');
  [130, 190, 250].forEach(function (yy) {
    s.push('<circle cx="53" cy="' + yy + '" r="3.5" fill="var(--disc)"/><circle cx="667" cy="' + yy + '" r="3.5" fill="var(--disc)"/>');
  });
  s.push('<text class="lbl-sm" x="8" y="330">Disc intercalar</text>');
  s.push('</g>');
  s.push('</svg>');
  return s.join("");
}


})();
