#!/usr/bin/env node
/* Verifică datele hărții: trimiteri rupte, chei necunoscute, duplicate.
   Rulează:  node tools/verifica.mjs      (cod de ieșire 1 dacă există erori)
   Rulează-l după fiecare modificare de conținut, înainte de commit. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "site");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]);

const ctx = { console: { warn: (...a) => errors.push(a.join(" ")), log() {} } };
ctx.window = ctx;
vm.createContext(ctx);
const errors = [], warns = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warns.push(`${where}: ${msg}`);

// doar date + nucleu (fără DOM)
for (const s of scripts) {
  if (!/\/data\/|\/core\.js$/.test(s)) continue;
  const code = fs.readFileSync(path.join(ROOT, s), "utf8");
  try { vm.runInContext(code, ctx, { filename: s }); }
  catch (e) { console.error(`✗ ${s} nu se poate încărca: ${e.message}`); process.exit(1); }
}
const HC = ctx.HC;

// ---------- molecule ----------
const syms = new Set();
HC.MOLS.forEach((m) => {
  const w = `moleculă ${m.g || "(fără g)"}`;
  for (const f of ["c", "k", "g", "p", "f", "d"]) if (!m[f]) err(w, `lipsește câmpul „${f}”`);
  if (!HC.COMPS[m.c]) err(w, `compartiment necunoscut „${m.c}”`);
  if (!HC.KINDS[m.k]) err(w, `tip necunoscut „${m.k}”`);
  (m.tg || []).forEach((t) => { if (!HC.TAGMAP[t]) err(w, `etichetă necunoscută „${t}”`); });
  if (syms.has(m.g)) err(w, "simbol duplicat");
  syms.add(m.g);
  if (m.fp && !Array.isArray(m.fp)) err(w, "fp trebuie să fie o listă");
  const allowed = new Set(["c", "k", "g", "p", "f", "d", "t", "fp", "tg", "id"]);
  Object.keys(m).forEach((k) => { if (!allowed.has(k)) warn(w, `câmp necunoscut „${k}” (greșeală de tipar?)`); });
});

const sym = (where, s) => { if (!HC.molBySym(s)) err(where, `gena „${s}” nu există în hartă`); };
const chap = (where, id) => { if (!HC.CH_BY[id]) err(where, `capitolul „${id}” nu există`); };

// ---------- etichete și compartimente ----------
HC.TAGS.forEach((t) => {
  if (!HC.MOLS.some((m) => (m.tg || []).includes(t[0]))) warn(`eticheta ${t[0]}`, "nicio moleculă nu o folosește (nu apare în Boli → gene)");
});
Object.entries(HC.COMP_CH).forEach(([c, ids]) => {
  if (!HC.COMPS[c]) err("COMP_CH", `compartiment necunoscut „${c}”`);
  ids.forEach((id) => chap(`COMP_CH.${c}`, id));
});
Object.keys(HC.COMPS).forEach((c) => {
  if (!HC.MOLS.some((m) => m.c === c)) warn(`compartiment ${c}`, "nu are molecule");
});

// ---------- capitole ----------
const chIds = new Set();
const DIAS = ["ap", "cycle", "nodal", "ecc", "eaddad"];
HC.CHAPTERS.forEach((c) => {
  const w = `capitol ${c.id}`;
  if (chIds.has(c.id)) err(w, "id duplicat");
  chIds.add(c.id);
  if (!HC.SEC_ORDER[c.grp]) err(w, `grup necunoscut „${c.grp}” (fz sau fp)`);
  else if (!HC.SEC_ORDER[c.grp].includes(c.sec)) err(w, `secțiunea „${c.sec}” lipsește din SEC_ORDER.${c.grp}`);
  for (const f of ["short", "title", "idea"]) if (!c[f]) err(w, `lipsește „${f}”`);
  (c.blocks || []).forEach((b, i) => {
    if (b.dia && !DIAS.includes(b.dia)) err(`${w} bloc ${i + 1}`, `schemă necunoscută „${b.dia}”`);
    if (b.table) {
      const n = b.table.head.length;
      b.table.rows.forEach((r, j) => { if (r.length !== n) err(`${w} bloc ${i + 1}`, `rândul ${j + 1} are ${r.length} celule, antetul ${n}`); });
      if (b.table.gcol != null) b.table.rows.forEach((r) => r[b.table.gcol].split(/,\s*/).forEach((s) => sym(`${w} tabel`, s)));
    }
  });
  (c.mols || []).forEach((s) => sym(w, s));
  (c.see || []).forEach((id) => chap(`${w} (see)`, id));
});

// ---------- cuprins ----------
const linkCheck = (where, l) => {
  const [type, id] = l;
  if (type === "chap") chap(where, id);
  else if (type === "tab") { if (!(id in HC.ROUTE)) err(where, `tab necunoscut „${id}”`); }
  else if (type === "tag") { if (!HC.TAGMAP[id]) err(where, `etichetă necunoscută „${id}”`); }
  else if (type === "gene") sym(where, id);
  else if (type === "doc") { if (!HC.DOC[id]) err(where, `document necunoscut „${id}”`); }
  else if (type === "med") { if (!HC.DRUG_BY[id]) err(where, `clasă de medicamente necunoscută „${id}”`); }
  else err(where, `tip de legătură necunoscut „${type}”`);
};
for (const [name, list] of Object.entries({ FOUNDATION: HC.FOUNDATION, ROOMS: HC.ROOMS, CORRIDORS: HC.CORRIDORS, TOOLS: HC.TOOLS })) {
  list.forEach((r) => (r.links || []).forEach((l) => linkCheck(`${name} „${r.name}”`, l)));
}

// ---------- medicamente ----------
const drugIds = new Set();
HC.DRUGS.forEach((d) => {
  if (drugIds.has(d.id)) err(`medicamente ${d.id}`, "id duplicat");
  drugIds.add(d.id);
  d.subs.forEach((s) => {
    if (s[2]) s[2].split(/,\s*/).forEach((g) => sym(`medicamente ${d.id} „${s[0]}”`, g));
    if (s[3] && s[3] !== "studii") warn(`medicamente ${d.id} „${s[0]}”`, `al 4-lea câmp „${s[3]}” (doar „studii” e recunoscut)`);
  });
});

// ---------- raport ----------
const n = (k) => k.toLocaleString("ro-RO");
console.log(`Harta: ${n(HC.MOLS.length)} molecule · ${n(HC.CHAPTERS.length)} capitole · ${n(HC.TAGS.length)} etichete · ${n(HC.DRUGS.length)} clase de medicamente`);
warns.forEach((w) => console.log("  ⚠ " + w));
errors.forEach((e) => console.log("  ✗ " + e));
if (errors.length) { console.log(`\n${errors.length} erori.`); process.exit(1); }
console.log(warns.length ? `\nFără erori (${warns.length} avertismente).` : "\nTotul e în regulă.");
