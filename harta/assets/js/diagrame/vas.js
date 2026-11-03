/* Secțiunea prin peretele arterial (SVG). */
var HC = window.HC = window.HC || {};
(function () {
"use strict";
var esc = HC.esc, rich = HC.rich;

/* ------------ SVG: vas ------------ */
function annulus(cx, cy, R, r) {
  return "M" + (cx - R) + " " + cy + " a" + R + " " + R + " 0 1 0 " + (2 * R) + " 0 a" + R + " " + R + " 0 1 0 " + (-2 * R) + " 0 Z " +
         "M" + (cx - r) + " " + cy + " a" + r + " " + r + " 0 1 1 " + (2 * r) + " 0 a" + r + " " + r + " 0 1 1 " + (-2 * r) + " 0 Z";
}
HC.vesselSVG = function vesselSVG() {
  var cx = 250, cy = 210, s = [];
  s.push('<svg class="diagram" id="svg-vas" viewBox="0 0 720 420" role="group" aria-label="Secțiune prin peretele unei artere">');
  // adventitia / ECM
  s.push('<g class="region" data-comp="matrice" tabindex="0" role="button" aria-label="Matricea extracelulară și adventicea">');
  s.push('<path d="' + annulus(cx, cy, 192, 150) + '" fill="var(--adv)" fill-rule="evenodd"/>');
  for (var a = 0; a < 360; a += 15) {
    var rad = a * Math.PI / 180, rr = 171;
    var x = cx + rr * Math.cos(rad), y = cy + rr * Math.sin(rad);
    var t = rad + Math.PI / 2;
    s.push('<path d="M' + (x - 9 * Math.cos(t)).toFixed(1) + ' ' + (y - 9 * Math.sin(t)).toFixed(1) + ' Q ' + (x + 4 * Math.cos(rad)).toFixed(1) + ' ' + (y + 4 * Math.sin(rad)).toFixed(1) + ' ' + (x + 9 * Math.cos(t)).toFixed(1) + ' ' + (y + 9 * Math.sin(t)).toFixed(1) + '" fill="none" stroke="var(--fiber)" stroke-width="2.2" stroke-linecap="round"/>');
  }
  s.push('<circle cx="' + cx + '" cy="' + cy + '" r="150" fill="none" stroke="var(--k-ecm)" stroke-width="1.6" stroke-dasharray="5 4"/>');
  s.push('</g>');
  // media
  s.push('<g class="region" data-comp="media" tabindex="0" role="button" aria-label="Media: celula musculară netedă">');
  s.push('<path d="' + annulus(cx, cy, 150, 106) + '" fill="var(--media)" fill-rule="evenodd"/>');
  [118, 138].forEach(function (rr2, ringIdx) {
    for (var b = ringIdx * 9; b < 360; b += 18) {
      var rb = b * Math.PI / 180;
      var ex = cx + rr2 * Math.cos(rb), ey = cy + rr2 * Math.sin(rb);
      var ang = b + 90;
      s.push('<ellipse cx="' + ex.toFixed(1) + '" cy="' + ey.toFixed(1) + '" rx="15" ry="4.2" transform="rotate(' + ang + ' ' + ex.toFixed(1) + ' ' + ey.toFixed(1) + ')" fill="var(--vsmc)"/>');
    }
  });
  s.push('</g>');
  // endothelium
  s.push('<g class="region" data-comp="endoteliu" tabindex="0" role="button" aria-label="Endoteliul">');
  s.push('<path d="' + annulus(cx, cy, 106, 94) + '" fill="var(--endo)" fill-rule="evenodd"/>');
  for (var e = 0; e < 360; e += 20) {
    var re = e * Math.PI / 180;
    s.push('<line x1="' + (cx + 94 * Math.cos(re)).toFixed(1) + '" y1="' + (cy + 94 * Math.sin(re)).toFixed(1) + '" x2="' + (cx + 106 * Math.cos(re)).toFixed(1) + '" y2="' + (cy + 106 * Math.sin(re)).toFixed(1) + '" stroke="var(--surface)" stroke-width="1.6"/>');
    var mx2 = cx + 100 * Math.cos(re + 0.17), my2 = cy + 100 * Math.sin(re + 0.17);
    s.push('<circle cx="' + mx2.toFixed(1) + '" cy="' + my2.toFixed(1) + '" r="2.4" fill="var(--k-canal)"/>');
  }
  s.push('</g>');
  // lumen
  s.push('<g class="region" data-comp="sange" tabindex="0" role="button" aria-label="Lumenul: lipide, plachete, coagulare">');
  s.push('<circle cx="' + cx + '" cy="' + cy + '" r="94" fill="var(--lumen)"/>');
  [[-40, -30, 20], [10, -45, -15], [45, 5, 30], [-20, 30, -25], [25, 45, 10], [-55, 15, 50]].forEach(function (r) {
    s.push('<ellipse cx="' + (cx + r[0]) + '" cy="' + (cy + r[1]) + '" rx="13" ry="8" transform="rotate(' + r[2] + ' ' + (cx + r[0]) + ' ' + (cy + r[1]) + ')" fill="var(--rbc)"/>');
    s.push('<ellipse cx="' + (cx + r[0]) + '" cy="' + (cy + r[1]) + '" rx="5" ry="3" transform="rotate(' + r[2] + ' ' + (cx + r[0]) + ' ' + (cy + r[1]) + ')" fill="var(--lumen)" opacity=".55"/>');
  });
  [[-10, -5], [30, -20], [-45, -5], [5, 25], [55, -30], [-25, 55], [40, 60], [-60, -45]].forEach(function (d) {
    s.push('<circle cx="' + (cx + d[0]) + '" cy="' + (cy + d[1]) + '" r="5" fill="var(--ldl)"/><circle cx="' + (cx + d[0]) + '" cy="' + (cy + d[1]) + '" r="2" fill="var(--lumen)"/>');
  });
  [[15, 5], [-30, 10], [60, 30], [-5, -60], [35, -55]].forEach(function (d) {
    s.push('<circle cx="' + (cx + d[0]) + '" cy="' + (cy + d[1]) + '" r="3" fill="var(--plt)"/>');
  });
  s.push('</g>');
  // labels with leader lines
  var L = [
    ["matrice", "Matrice și adventice", -50, 171],
    ["media", "Media (celule musculare netede)", -20, 128],
    ["endoteliu", "Endoteliu", 12, 100],
    ["sange", "Lumen: LDL, plachete, coagulare", 40, 55]
  ];
  L.forEach(function (l, i) {
    var ra = l[2] * Math.PI / 180;
    var px = cx + l[3] * Math.cos(ra), py = cy + l[3] * Math.sin(ra);
    var ly = 92 + i * 72;
    s.push('<g class="region" data-comp="' + l[0] + '" tabindex="-1" aria-hidden="true">');
    s.push('<path d="M' + px.toFixed(1) + ' ' + py.toFixed(1) + ' L470 ' + ly + ' H484" fill="none" stroke="var(--muted)" stroke-width="1.2"/>');
    s.push('<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="3.5" fill="var(--ink)"/>');
    s.push('<rect x="484" y="' + (ly - 18) + '" width="232" height="30" class="hit"/>');
    s.push('<text class="lbl" x="490" y="' + (ly + 4) + '">' + esc(l[1]) + '</text>');
    s.push('</g>');
  });
  s.push('</svg>');
  return s.join("");
}


})();
