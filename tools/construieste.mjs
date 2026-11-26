#!/usr/bin/env node
/* Construiește varianta „un singur fișier”: dist/harta-cardiologiei.html, cu tot CSS-ul și JS-ul inclus.
   Bună pentru trimis pe e-mail, deschis offline sau publicat ca artifact.
   Rulează:  node tools/construieste.mjs */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, "..", "harta");
const OUT = path.join(HERE, "..", "dist", "harta-cardiologiei.html");
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8");

let html = read("index.html");
html = html.replace(/<link rel="stylesheet" href="(assets\/[^"]+)">/g, (_, p) => `<style>/* ${p} */\n${read(p)}</style>`);
html = html.replace(/<script src="(assets\/[^"]+)"><\/script>/g, (_, p) =>
  `<script>/* ${p} */\n${read(p).replace(/<\/script/gi, "<\\/script")}</script>`);
html = html.replace(/<link rel="icon" href="(assets\/[^"]+\.svg)"[^>]*>/, (_, p) =>
  `<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(read(p).trim())}">`);
html = html.replace(/<img src="(assets\/[^"]+\.svg)"/g, (_, p) =>
  `<img src="data:image/svg+xml,${encodeURIComponent(read(p).trim())}"`);

// imaginile din date (assets/img/...) devin HC.IMG = { cale: data URI }, citit de views.js
const IMGDIR = path.join(ROOT, "assets", "img");
const imgs = {};
const walk = (d) => { if (!fs.existsSync(d)) return; for (const f of fs.readdirSync(d)) { const full = path.join(d, f);
  if (fs.statSync(full).isDirectory()) walk(full);
  else if (/\.(webp|png|jpe?g|svg)$/i.test(f)) { const rel = path.relative(ROOT, full).split(path.sep).join("/");
    const mime = { webp: "image/webp", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", svg: "image/svg+xml" }[f.split(".").pop().toLowerCase()];
    imgs[rel] = `data:${mime};base64,${fs.readFileSync(full).toString("base64")}`; } } };
walk(IMGDIR);
if (Object.keys(imgs).length) {
  html = html.replace('<script>/* assets/js/core.js */', () => `<script>window.HC = window.HC || {}; HC.IMG = ${JSON.stringify(imgs)};</script>\n<script>/* assets/js/core.js */`);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
console.log(`✓ ${path.relative(process.cwd(), OUT)} (${(html.length / 1024).toFixed(0)} KB)`);
