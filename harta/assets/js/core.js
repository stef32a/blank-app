/* Nucleul: utilitare, indexuri peste date, adrese (href) și transformarea textului
   (gene → legături, **bold**). Se încarcă DUPĂ fișierele din data/ și ÎNAINTE de diagrame și vederi. */
var HC = window.HC = window.HC || {};
(function () {
"use strict";

/* ---------- utilitare ---------- */
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function el(id) { return document.getElementById(id); }
/* fără diacritice și litere mici: „Fabry” = „fabry”, „inimă” = „inima” */
function norm(s) {
  return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}
function slug(s) {
  return norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
HC.esc = esc; HC.el = el; HC.norm = norm; HC.slug = slug;

/* ---------- indexuri ---------- */
HC.TAGMAP = {};
HC.TAGS.forEach(function (t) { HC.TAGMAP[t[0]] = { label: t[1], note: t[2] }; });

HC.CH_BY = {};
HC.CHAPTERS.forEach(function (c) { HC.CH_BY[c.id] = c; });

HC.DRUG_BY = {};
HC.DRUGS.forEach(function (d) { HC.DRUG_BY[d.id] = d; });

/* Id-ul unei molecule vine din simbolul genei (stabil: nu se schimbă când adaugi altele).
   Poți forța unul cu câmpul id în date. */
HC.MOL_BY = {};
HC.MOLS.forEach(function (m) {
  m.id = m.id || slug(m.g);
  if (HC.MOL_BY[m.id]) console.warn("[harta] id de moleculă duplicat:", m.id);
  HC.MOL_BY[m.id] = m;
});

/* Temele cu pagină proprie, pe grupuri (ordinea = ordinea din meniu) */
HC.TOPIC_GROUPS = [
  { key: "fundatie", label: "Fundația", list: HC.FOUNDATION },
  { key: "clinica", label: "Clinica", list: HC.ROOMS, numbered: true },
  { key: "transversal", label: "Transversal", list: HC.CORRIDORS },
  { key: "unelte", label: "Unelte", list: HC.TOOLS }
];
HC.GROUP_BY = {};
HC.TOPIC_BY = {};
HC.TOPIC_GROUPS.forEach(function (g) {
  HC.GROUP_BY[g.key] = g;
  g.list.forEach(function (t, i) { t.grp = g.key; t.num = g.numbered ? i + 1 : 0; HC.TOPIC_BY[g.key + "/" + t.id] = t; });
});

HC.kc = function (m) { return "var(" + HC.KINDS[m.k].color + ")"; };

/* ---------- adrese ---------- */
/* vedere internă → segment de adresă */
HC.ROUTE = { cuprins: "", miocit: "miocit", vas: "vas", fz: "fiziologie", fp: "fiziopatologie", boli: "boli", toate: "molecule", med: "medicamente" };
HC.href = {
  tab: function (tab) { return "#/" + HC.ROUTE[tab]; },
  comp: function (comp) { return "#/" + HC.COMPS[comp].tab + "/" + comp; },
  mol: function (m) { return "#/gena/" + m.id; },
  chap: function (id) { var c = HC.CH_BY[id]; return "#/" + HC.ROUTE[c.grp] + "/" + id; },
  tag: function (t) { return "#/boli/" + t; },
  med: function (id) { return "#/medicamente/" + id; },
  topic: function (t) { return "#/" + t.grp + "/" + t.id; },
  search: function (q) { return "#/cauta/" + encodeURIComponent(q); }
};
HC.molDomId = function (m) { return "gena-" + m.id; };

/* ---------- iconițe (24×24, contur) ---------- */
var ICONS = {
  home: '<path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
  miocit: '<rect x="2.5" y="6.5" width="19" height="11" rx="3.5"/><ellipse cx="8.5" cy="12" rx="2.6" ry="1.8"/><path d="M14 9.5v5M17 9.5v5"/>',
  vas: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 3.5v4M12 16.5v4"/>',
  fz: '<path d="M2.5 13h4l2-6 3.5 11 2.5-8 1.5 3h5.5"/>',
  fp: '<path d="M13.5 3 5.5 13.5h6L10.5 21l8-10.5h-6z"/>',
  boli: '<path d="M7 3c0 5 10 6 10 9s-10 4-10 9M17 3c0 5-10 6-10 9s10 4 10 9"/><path d="M8.5 6.5h7M8.5 17.5h7"/>',
  toate: '<rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="M3.5 9h17M3.5 14.5h17M9.5 4v16"/>',
  med: '<rect x="2.6" y="8.6" width="18.8" height="6.8" rx="3.4" transform="rotate(-45 12 12)"/><path d="m8.6 8.6 6.8 6.8"/>',
  anatomie: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20z"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  dot: '<circle cx="12" cy="12" r="3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/>',
  moon: '<path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/>',
  auto: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" stroke="none"/>'
};
HC.icon = function (name, cls) {
  return '<svg class="ico' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || ICONS.dot) + '</svg>';
};

/* ---------- text: simboluri de gene → legături ---------- */
var TOKMAP = null, TOKRE = null;
function buildTokens() {
  TOKMAP = {};
  HC.MOLS.forEach(function (m) { if (!TOKMAP[m.g]) TOKMAP[m.g] = m.id; });
  var skip = { ADN: 1, X: 1 };
  HC.MOLS.forEach(function (m) {
    m.g.split(/[\s,()–\/]+/).forEach(function (tk) {
      if (!tk || skip[tk]) return;
      if (!/^[A-Z][A-Z0-9-]*$/.test(tk)) return;
      if (!/\d/.test(tk) && tk.length < 3) return;
      if (!TOKMAP[tk]) TOKMAP[tk] = m.id;
    });
  });
  var keys = Object.keys(TOKMAP).filter(function (k) { return /^[A-Z][A-Z0-9-]*$/.test(k) && !skip[k]; })
    .sort(function (a, b) { return b.length - a.length; });
  TOKRE = new RegExp("(^|[^A-Za-z0-9-])(" + keys.map(function (k) { return k.replace(/-/g, "\\-"); }).join("|") + ")(?![A-Za-z0-9-])", "g");
}
function linkify(s, selfId) {
  if (!TOKRE) buildTokens();
  return s.replace(TOKRE, function (all, pre, tk) {
    var id = TOKMAP[tk];
    if (!id || id === selfId) return pre + '<span class="g-inline">' + tk + '</span>';
    return pre + '<a class="ginl" href="' + HC.href.mol(HC.MOL_BY[id]) + '">' + tk + '</a>';
  });
}
/* text din date → HTML: escape, gene clicabile, **bold** */
HC.rich = function (s, selfId) {
  return linkify(esc(s), selfId).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
};
HC.molBySym = function (sym) {
  if (!TOKMAP) buildTokens();
  var id = TOKMAP[sym];
  return id ? HC.MOL_BY[id] : null;
};

/* ---------- cipuri (legături mici) ---------- */
HC.gchipSym = function (sym) {
  var m = HC.molBySym(sym);
  if (!m) return '<span class="g-inline">' + esc(sym) + '</span>';
  return '<a class="gchip" href="' + HC.href.mol(m) + '" style="--kc:' + HC.kc(m) + '" title="' + esc(m.p) + '">' + esc(sym) + '</a>';
};
HC.chapChip = function (id) {
  var c = HC.CH_BY[id];
  if (!c) return "";
  return '<a class="chapchip" href="' + HC.href.chap(id) + '">' + esc(c.short) + '</a>';
};
HC.tagChip = function (t, cls) {
  return '<a class="' + (cls || "chip") + '" href="' + HC.href.tag(t) + '">' + esc(HC.TAGMAP[t].label) + '</a>';
};
HC.medChip = function (id) {
  var d = HC.DRUG_BY[id];
  return d ? '<a class="rlink" href="' + HC.href.med(id) + '">' + esc(d.name) + '</a>' : "";
};

})();
