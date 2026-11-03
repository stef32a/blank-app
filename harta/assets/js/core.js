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
  search: function (q) { return "#/cauta/" + encodeURIComponent(q); }
};
HC.molDomId = function (m) { return "gena-" + m.id; };

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
