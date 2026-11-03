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

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
console.log(`✓ ${path.relative(process.cwd(), OUT)} (${(html.length / 1024).toFixed(0)} KB)`);
