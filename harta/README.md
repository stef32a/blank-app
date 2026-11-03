# Harta cardiologiei

Cardiologia de la moleculă la pacient, într-un site static: fără server, fără bază de date, fără pași de compilare.
Se deschide cu dublu-clic pe `index.html` sau se publică pe orice găzduire statică (GitHub Pages, Netlify, Cloudflare Pages).

## Structura

```
harta/
├── index.html                  scheletul paginii (antet, file, căutare, subsol)
└── assets/
    ├── css/
    │   ├── tokens.css          culori, fonturi, tema întunecată  ← aici schimbi aspectul
    │   ├── base.css            layout, fișe de moleculă, tabele
    │   ├── capitole.css · cuprins.css · medicamente.css
    │   └── site.css            legături, buton de temă, tipărire
    └── js/
        ├── data/               ← CONȚINUTUL. Aici lucrezi de cele mai multe ori.
        │   ├── taxonomie.js            tipuri, compartimente, etichete de boală
        │   ├── molecule-miocit.js      genele miocitului (cu „Când se strică”)
        │   ├── molecule-vas.js         genele vasului
        │   ├── capitole-fiziologie.js
        │   ├── capitole-fiziopatologie.js
        │   ├── potential-actiune.js    fazele și curenții din schema PA
        │   ├── cuprins.js              fundația, camerele, coridoarele, uneltele, documente externe
        │   └── medicamente.js
        ├── core.js             indexuri, adrese, gene → legături
        ├── diagrame/           schemele SVG (miocit, vas, PA, mecanisme)
        ├── views.js            HTML-ul fiecărei secțiuni
        └── app.js              router, căutare, evenimente, temă
```

Regula: **conținutul stă în `data/`, codul în rest**. Ca să adaugi cardiologie nu trebuie să atingi codul.

## Adrese (fiecare lucru are link propriu)

| Adresă | Ce deschide |
|---|---|
| `#/` | Cuprinsul |
| `#/gena/scn5a` | fișa genei SCN5A, în compartimentul ei |
| `#/miocit/rs` · `#/vas/endoteliu` | un compartiment |
| `#/fiziologie/pa` · `#/fiziopatologie/aritmii` | un capitol |
| `#/boli/lqt` | QT lung → gene |
| `#/medicamente/ic` | o clasă de medicamente |
| `#/molecule` | tabelul tuturor moleculelor |
| `#/cauta/fabry` | o căutare |

Butonul „Înapoi” al browserului funcționează, linkurile se pot copia, salva ca semne de carte sau deschide în tab nou.
Adresele vechi (`#miocit`, `#fz`, `#med`…) încă merg.

## Cum adaugi conținut

**O genă nouă** — în `molecule-miocit.js` sau `molecule-vas.js`, în secțiunea compartimentului:

```js
{ c:"sarcolema", k:"canal", g:"KCNJ11", p:"Kir6.2 · KATP",
  f:"Ce face.",
  d:"Boli.",
  t:"Țintă terapeutică (opțional).",
  fp:[ "Pasul 1 → pasul 2 → consecința." ],   // „Când se strică” (opțional)
  tg:["lqt"] },
```

Adresa ei apare automat (`#/gena/kcnj11`), iar simbolul devine clicabil oriunde apare în text.

**Un capitol** — copiază un capitol din `capitole-*.js`, schimbă `id`, `sec` (trebuie să existe în `SEC_ORDER` din `taxonomie.js`) și textul.
**O boală / etichetă** — adaugă în `TAGS` (`taxonomie.js`), apoi pune cheia în `tg` la genele respective.
**Un medicament** — în `medicamente.js`, la clasa lui; țintele sunt simboluri de gene separate prin virgulă.
**Un document extern** — în `DOC` din `cuprins.js`, apoi `["doc", "cheie"]` în `links` la camera potrivită.
**O schemă nouă** — un fișier în `diagrame/` care înregistrează `HC.DIAGRAMS.nume = { html: function () {…} }`, inclus în `index.html`; apoi `{ dia:"nume" }` într-un capitol.

În text: `**bold**`; simbolurile genelor din hartă devin legături singure.

## Verificare și variantă într-un singur fișier

Necesită [Node.js](https://nodejs.org) (doar pentru aceste unelte, nu pentru site):

```bash
node tools/verifica.mjs        # trimiteri rupte, etichete greșite, gene inexistente, capitole lipsă
node tools/construieste.mjs    # dist/harta-cardiologiei.html — totul într-un fișier (offline, e-mail, artifact)
```

Rulează `verifica` după fiecare modificare: prinde greșelile de tipar înainte să ajungă pe site.

## Rulare locală

Dublu-clic pe `harta/index.html` e suficient. Alternativ, cu un server local:

```bash
python3 -m http.server -d harta 8000     # apoi http://localhost:8000
```

## Publicare

**GitHub Pages** (automat): workflow-ul `.github/workflows/pages.yml` publică folderul `harta/` la fiecare push pe `main`,
după ce `tools/verifica.mjs` trece. O singură dată: Settings → Pages → Source: **GitHub Actions**.
Dacă verificarea găsește erori, site-ul nu se actualizează (rămâne versiunea bună anterioară).

**Netlify / Cloudflare Pages**: folderul de publicat = `harta`, fără comandă de build.
