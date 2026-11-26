/* Ghidul ECG standardizat (Stef, nov. 2026), împărțit în capitole. Generat din documentul Word;
   se poate edita direct aici. Blocuri: { h, p | list | steps | table | img: { src, cap } }.
   În text: **bold**, _italic_, [text](https://link). */
var HC = window.HC = window.HC || {};
HC.CHAPTERS = HC.CHAPTERS || [];
HC.CHAPTERS.push(
  {
    "id": "ecg-metoda",
    "grp": "ecg",
    "sec": "Metoda",
    "short": "Metoda și raportul",
    "title": "Citirea ECG standardizată: ordinea, șablonul, concluzia",
    "idea": "Citește întotdeauna în aceeași ordine, de la tehnic la morfologic, și scrie concluzia în aceeași ordine. Fiecare pas de mai jos are: ce măsori, pragul normal, criteriile patologice și capcanele. Pragurile urmează recomandările AHA/ACCF/HRS de standardizare (2009), definiția universală a infarctului (2018), ghidurile ESC și consensurile citate la final.",
    "blocks": [
      {
        "p": "**Regula de aur:** compară cu un ECG anterior. Aproape orice criteriu (BRS nou, pseudo-r', T nou inversate, QRS lărgit) își schimbă sensul în funcție de „nou vs vechi”."
      },
      {
        "h": "Șablonul de raport (o linie per pas)",
        "steps": [
          "**Tehnic:** calibrare 10 mm/mV, 25 mm/s, filtre; electrozi corect plasați; artefacte.",
          "**Ritm și frecvență:** sinusal / atrial ectopic / joncțional / FiA etc., regulat/neregulat, X/min.",
          "**Unda P:** durată, amplitudine, ax, anomalii atriale, bloc interatrial.",
          "**PR:** X ms; conducere AV.",
          "**Ax QRS:** X°; hemibloc.",
          "**QRS:** X ms; morfologie (bloc de ram, IVCD), voltaj, unde Q, fragmentare.",
          "**ST:** izoelectric / supra- / subdenivelare, derivații, morfologie, reciprocitate.",
          "**T și U:** concordante/discordante, inversări, amplitudine.",
          "**QT/QTc:** X/Y ms, formulă.",
          "**Concluzie:** diagnostic principal + secundare + recomandare (comparație, repetare, derivații suplimentare)."
        ]
      },
      {
        "p": "**Exemplu:** _Ritm sinusal regulat 72/min, ax QRS +30°, PR 168 ms, QRS 98 ms, fără modificări de repolarizare, QTc 412 ms (Fridericia). ECG în limite normale._"
      },
      {
        "h": "Exemple de concluzii standardizate",
        "steps": [
          "_Ritm sinusal regulat 58/min. Ax QRS −60°, PR 210 ms, QRS 136 ms. BRD complet + HBAS, BAV gradul I. Fără modificări ST de tip ischemic. QTc 440 ms (Fridericia; QT modificat Bogossian). Recomandare: comparație cu ECG anterior; Holter dacă există sincopă._",
          "_Ritm sinusal 88/min, ax +80°, PR 160 ms, QRS 92 ms. Subdenivelare ST orizontală 2 mm maximă în V1–V4 cu T terminal pozitiv. Suspiciune de infarct posterior acut — se recomandă derivații V7–V9 imediat._",
          "_FiA cu răspuns ventricular mediu 110/min, ax −15°, QRS 150 ms cu BRS complet (criterii Strauss îndeplinite). Smith-Sgarbossa negativ. QTc indisponibil în FiA cu BRS (JT raportat: 300 ms)._",
          "_Ritm sinusal 64/min, PR 156 ms, ax +70°, QRS 94 ms, voltaj Cornell 30 mm (bărbat), subdenivelare ST descendentă cu T asimetric negativ în DI, aVL, V5–V6. HVS cu modificări de repolarizare secundare._",
          "_Ritm stimulat VVI 60/min, captură eficientă, alternând cu ritm sinusal propriu 64/min cu inhibiție adecvată. Fără spike-uri fără captură._"
        ]
      }
    ],
    "mols": [],
    "see": [
      "ecg-tehnic",
      "ecg-critic"
    ]
  },

  {
    "id": "ecg-critic",
    "grp": "ecg",
    "sec": "Metoda",
    "short": "Valori critice",
    "title": "Valori critice: ce se comunică imediat",
    "idea": "Lista exactă variază între instituții; aceasta e o versiune de lucru pentru un cardiolog.",
    "blocks": [
      {
        "list": [
          "**Ocluzie coronariană:** STEMI sau echivalent (posterior, de Winter, T hiperacute, Smith-Sgarbossa pozitiv, Aslanger, steagul Africii de Sud, swirl), supra aVR + subdenivelare difuză cu simptome",
          "**Aritmii maligne:** FV, TV susținută, TV polimorfă / torsadă, TV bidirecțională, asistolie",
          "**FiA preexcitată** sau orice tahicardie cu QRS larg neregulat >200/min",
          "**Bradiaritmii:** BAV Mobitz II, avansat sau complet; bradicardie <40/min sau pauze >3 s în veghe; alternanță de bloc de ram",
          "**QTc >500 ms** sau creștere >60 ms sub tratament; alternanță T",
          "**Hiperkaliemie** cu QRS lărgit sau pattern sinusoidal",
          "**Brugada tip 1 spontan** cu sincopă",
          "**Defect de pacemaker:** pierdere de captură la pacient dependent, oversensing cu pauze",
          "**Tahicardie sinusală + voltaj mic + alternanță electrică** (tamponadă)"
        ]
      },
      {
        "p": "Raportarea critică automată a QT folosește uneori un prag mai înalt (ex. 520 ms în programul Glasgow), ca să evite alarmele false ([Macfarlane et al., CinC 2012](https://pprd.cinc.org/archives/2012/pdf/0601.pdf))."
      }
    ],
    "mols": [],
    "see": [
      "ecg-st",
      "ecg-qrs-larg",
      "ecg-qt"
    ]
  },

  {
    "id": "ecg-tehnic",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "1 · Calitate tehnică",
    "title": "Pasul 1 · Calitatea tehnică: calibrare, artefacte, electrozi",
    "idea": "Un ECG cu electrozi inversați sau calibrare greșită nu se interpretează: se repetă.",
    "blocks": [
      {
        "h": "Calibrare și setări",
        "table": {
          "head": [
            "Parametru",
            "Standard",
            "Ce se schimbă dacă e greșit"
          ],
          "rows": [
            [
              "Amplitudine",
              "10 mm/mV (semnal dreptunghiular de 10 mm)",
              "La 5 mm/mV voltajul pare mic; la 20 mm/mV pare HVS"
            ],
            [
              "Viteză",
              "25 mm/s (1 mm = 40 ms; 5 mm = 200 ms)",
              "La 50 mm/s totul pare lung și bradicard"
            ],
            [
              "Filtru jos",
              "0,05 Hz pentru analiza ST",
              "0,5 Hz deformează ST (pseudo-supra/subdenivelare)"
            ],
            [
              "Filtru înalt",
              "150 Hz adult (250 Hz copil)",
              "40 Hz „netezește” crestăturile, undele delta, spike-urile de pacing"
            ],
            [
              "Rețea",
              "filtru 50 Hz (Europa)",
              "Fără el: linie „îngroșată” regulat"
            ]
          ]
        }
      },
      {
        "p": "Verifică semnalul de calibrare pe fiecare bandă: unele aparate afișează derivațiile precordiale la 5 mm/mV (forma „în trepte”)."
      },
      {
        "h": "Artefacte",
        "list": [
          "**Tremor parkinsonian (4–6 Hz)** — mimează flutter atrial. Indiciu: complexele QRS se văd regulat „prin” artefact, iar derivația fără electrodul afectat e curată.",
          "**Mișcare / periaj** — mimează TV sau FV; QRS-urile native apar cu ritmul lor sub artefact (semnul „crestăturilor” la intervalul RR de bază).",
          "**Linie de bază ondulantă** — respirație, contact slab; strică analiza ST."
        ]
      },
      {
        "h": "Inversări de electrozi de membre",
        "p": "Semnalul de alarmă universal: **complex P-QRS-T complet negativ în DI** și/sau **complet pozitiv în aVR**, la QRS altfel normal ([LITFL](https://litfl.com/ecg-limb-lead-reversal-ecg-library/))."
      },
      {
        "table": {
          "head": [
            "Inversare",
            "Ce vezi",
            "Capcana"
          ],
          "rows": [
            [
              "**RA–LA** (cea mai frecventă)",
              "DI inversat global, aVR pozitiv, DII↔︎DIII și aVR↔︎aVL schimbate, aVF neschimbat",
              "Mimează dextrocardia — dar precordialele au progresie R **normală**"
            ],
            [
              "**LA–LL**",
              "DIII inversat, DI↔︎DII, aVL↔︎aVF schimbate",
              "Cea mai greu de văzut; P mai mare în DI decât în DII e indiciul"
            ],
            [
              "**RA–LL**",
              "DI, DII, DIII, aVF inversate, aVR pozitiv",
              "Ax „nord-vest” cu precordiale normale = imposibil fiziologic"
            ],
            [
              "**Electrod neutru (RL) mutat pe un braț**",
              "O derivație bipolară e **linie aproape plată** (DII sau DIII)",
              "Precordialele pot fi și ele distorsionate"
            ]
          ]
        }
      },
      {
        "p": "**Dextrocardie adevărată:** DI inversat + aVR pozitiv **și** progresie R inversată în V1→V6 (R scade). Se confirmă cu derivații drepte (V1R–V6R) și inversarea electrozilor brațelor."
      },
      {
        "h": "Plasarea greșită a precordialelor",
        "list": [
          "**V1–V2 prea sus** (spațiul II–III intercostal): rSr' fals (pseudo-BRD incomplet), P negativă în V1–V2, unde T negative, aspect de pattern Brugada fals.",
          "**Precordiale prea jos**: progresie lentă a undei R (mimează infarct anterior vechi).",
          "**Inversări între precordiale** (ex. V2↔︎V3): progresie R care „sare” — R crește, scade, crește."
        ]
      },
      {
        "p": "Regula: orice progresie R aberantă sau morfologie V1–V2 neobișnuită → verifică plasarea înainte de diagnostic."
      }
    ],
    "mols": [],
    "see": [
      "ecg-frecventa"
    ]
  },

  {
    "id": "ecg-frecventa",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "2 · Frecvență și regularitate",
    "title": "Pasul 2 · Frecvența și regularitatea",
    "idea": "Normal la adult 50–100/min în repaus. Regularitatea și relația P–QRS spun deja jumătate din diagnosticul ritmului.",
    "blocks": [
      {
        "p": "Normal la adult: 50–100/min în repaus (pragul inferior uzual în practică e 50, nu 60)."
      },
      {
        "p": "**Calcul:**"
      },
      {
        "list": [
          "Ritm regulat: **300 / număr de pătrate mari** între două R, sau **1500 / număr de pătrate mici**.",
          "Ritm neregulat: **numărul de QRS pe 10 s × 6** (banda standard are 10 s).",
          "Calculează separat frecvența atrială (P) și ventriculară (QRS) dacă nu sunt legate 1:1."
        ]
      },
      {
        "p": "**Tipuri de neregularitate:**"
      },
      {
        "table": {
          "head": [
            "Pattern",
            "Gândește-te la"
          ],
          "rows": [
            [
              "Neregulat neregulat, fără P organizate",
              "FiA"
            ],
            [
              "Neregulat cu ≥3 morfologii de P",
              "Tahicardie atrială multifocală, ritm atrial multifocal (<100/min)"
            ],
            [
              "„Grupat” (group beating)",
              "Wenckebach AV sau SA, extrasistole bigeminate"
            ],
            [
              "Regulat cu pauze",
              "ESA blocate, bloc SA, bloc AV gr. II, oprire sinusală"
            ],
            [
              "Variație fazică cu respirația",
              "Aritmie sinusală respiratorie (benignă)"
            ]
          ]
        }
      },
      {
        "p": "Prag de aritmie sinusală: variație PP >120 ms (sau >10%) cu P de morfologie constantă."
      }
    ],
    "mols": [],
    "see": [
      "ecg-p"
    ]
  },

  {
    "id": "ecg-p",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "3 · Ritmul și unda P",
    "title": "Pasul 3 · Ritmul și unda P",
    "idea": "Întâi decizi dacă ritmul e sinusal (P pozitivă în DI, DII, aVF, negativă în aVR), apoi citești morfologia P: anomalii atriale și bloc interatrial.",
    "blocks": [
      {
        "h": "Criterii de ritm sinusal",
        "list": [
          "P prezentă înaintea fiecărui QRS, morfologie constantă",
          "P **pozitivă în DI, DII, aVF**, **negativă în aVR**; bifazică sau pozitivă în V1",
          "Ax P între 0° și +75°",
          "PR constant ≥120 ms"
        ]
      },
      {
        "h": "Ritmuri non-sinusale cu P vizibilă",
        "table": {
          "head": [
            "Ritm",
            "P",
            "PR",
            "Indiciu"
          ],
          "rows": [
            [
              "**Ritm atrial ectopic**",
              "Morfologie diferită de sinusal, ax anormal",
              "≥120 ms",
              "Frecvență <100; >100 = tahicardie atrială"
            ],
            [
              "**Ritm atrial inferior („coronary sinus rhythm”)**",
              "**Negativă în DII, DIII, aVF**, pozitivă în aVR",
              "**≥120 ms**",
              "PR normal o separă de ritmul joncțional"
            ],
            [
              "**Ritm jonctional**",
              "Absentă, sau negativă inferior **imediat înainte (PR <120 ms)**, în sau după QRS",
              "Scurt/absent",
              "40–60/min scăpare; 60–100 accelerat; >100 tahicardie joncțională"
            ],
            [
              "**Ritm atrial stâng**",
              "Negativă în DI și V6, „dome and dart” în V1",
              "Normal",
              "Origine atrială stângă"
            ],
            [
              "**Ritm atrial multifocal**",
              "≥3 morfologii, PP/PR variabile",
              "Variabil",
              "<100/min; ≥100 = TAM"
            ]
          ]
        }
      },
      {
        "p": "Tot ce ai mai sus se interpretează **după** excluderea inversării RA–LA (P negativă în DI fără altă explicație)."
      },
      {
        "h": "Bloc sino-atrial și oprire sinusală",
        "list": [
          "**Bloc SA gr. II tip 1:** scurtarea progresivă a PP, apoi pauză **<2× PP** precedent.",
          "**Bloc SA gr. II tip 2:** pauză = **multiplu exact** al PP de bază.",
          "**Oprire sinusală:** pauză fără relație matematică cu PP; semnificativă >3 s în veghe.",
          "**Mimica nr. 1:** ESA blocată — caută P deformând unda T dinaintea pauzei."
        ]
      },
      {
        "h": "Morfologia undei P (cel mai bine în DII și V1)",
        "table": {
          "head": [
            "Anomalie",
            "Criterii",
            "Semnificație"
          ],
          "rows": [
            [
              "**Normal**",
              "Durată <120 ms, amplitudine <2,5 mm în DII, <1,5 mm în V1",
              "—"
            ],
            [
              "**Anomalie atrială dreaptă**",
              "P ≥2,5 mm în DII (ascuțită), sau componenta pozitivă ≥1,5 mm în V1; ax P >+75°",
              "HTP, BPOC, valvulopatie tricuspidiană, congenital"
            ],
            [
              "**Anomalie atrială stângă**",
              "P ≥120 ms cu crestătură (vârfuri la >40 ms) în DII; **forța terminală P în V1 (PTFV1) ≥0,04 mm·s** (≥1 mm adâncime × ≥40 ms)",
              "Stenoză/regurgitare mitrală, HTA, disfuncție diastolică"
            ],
            [
              "**Anomalie biatrială**",
              "Criterii pentru ambele",
              "—"
            ],
            [
              "**Bloc interatrial parțial**",
              "P **≥120 ms**, pozitivă (adesea crestată) în inferior",
              "Întârziere în fasciculul Bachmann"
            ],
            [
              "**Bloc interatrial avansat**",
              "P **≥120 ms, bifazică (+/−) în DII, DIII și aVF**",
              "Activare caudo-craniană a AS; asociat cu FiA și AVC cardioembolic (**sindrom Bayés**)"
            ]
          ]
        }
      },
      {
        "p": "Blocul interatrial e definit prin consensul din 2012 ca entitate distinctă de dilatarea atrială stângă ([Bayés de Luna, J Electrocardiol 2012](https://lup.lub.lu.se/record/3139225); [revizie JCM 2023](https://mdpi.com/2077-0383/12/23/7331)). Raportează-l explicit: la un pacient cu AVC criptogen e un argument pentru monitorizare prelungită a ritmului."
      }
    ],
    "mols": [],
    "see": [
      "ecg-pr",
      "nodal"
    ]
  },

  {
    "id": "ecg-pr",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "4 · PR și conducerea AV",
    "title": "Pasul 4 · Intervalul PR și conducerea AV",
    "idea": "Normal: **120–200 ms**, măsurat de la debutul P la debutul QRS, în derivația cu cel mai lung PR.",
    "blocks": [
      {
        "h": "PR scurt (<120 ms)",
        "table": {
          "head": [
            "Situație",
            "Criterii"
          ],
          "rows": [
            [
              "**Preexcitație tip WPW**",
              "PR <120 ms (ESC: ≤120 ms) + undă delta (empastare inițială QRS) + QRS >120 ms + modificări secundare ST-T ([AHA 2009, partea III](https://hrsonline.org/documents/interpretation-electrocardiogram-part-iii-intraventricular-conduction-disturbancespdf/download))"
            ],
            [
              "**Fibre fasciculo-ventriculare**",
              "PR scurt (~100 ms), QRS ~120 ms, tranziție în V2, fără deltă negativă inferior; adenozina dă bloc AV fără accentuarea preexcitației; fără tahicardii"
            ],
            [
              "**PR scurt fără delta**",
              "Conducere nodală accelerată (variantă normală, simpaticotonie); termenul „LGL” e abandonat"
            ],
            [
              "**Ritm jonctional / atrial inferior jos**",
              "P negativă inferior cu PR <120 ms"
            ]
          ]
        }
      },
      {
        "p": "**Localizarea căii accesorii** (primii 40 ms ai deltei): delta pozitivă în V1 → cale stângă; negativă/izoelectrică în V1 → dreaptă sau septală; negativă în DII, DIII, aVF → posteroseptală (mimează infarct inferior); negativă în DI, aVL → laterală stângă."
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "Algoritmii clasici pierd mult la validare externă: **Arruda** (derivare: sensibilitate 90%, specificitate 99%) a localizat exact doar 38% într-o comparație independentă; toți cei 7 algoritmi testați: 20–47%. **EASY-WPW** (_Europace_ 2023, 211 pacienți): polaritatea V1 → tranziția față de V3 → derivația cu delta cea mai pozitivă; acuratețe 93% (88% la copii) vs 84% Pambrun și 75% Arruda în aceeași cohortă.",
            "O delta **netă negativă în DII** prezice cale epicardică / diverticul de sinus coronar. Risc (ESC 2019): RR minim preexcitat în FiA ≤250 ms, perioadă refractară a căii ≤250 ms, căi multiple; riscul de FV/stop e 2,4 la 1000 pacienți-ani."
          ]
        }
      },
      {
        "h": "PR lung și blocurile AV",
        "table": {
          "head": [
            "Grad",
            "Criterii",
            "Localizare probabilă"
          ],
          "rows": [
            [
              "**I**",
              "PR >200 ms, toate P conduse",
              "Nodal (90%), mai ales la QRS îngust"
            ],
            [
              "**II Mobitz I**",
              "PR crește progresiv → P blocată; RR scad; pauza <2× PP",
              "Nodal"
            ],
            [
              "**II Mobitz II**",
              "PR **constant** → P blocată brusc",
              "Infranodal; QRS de obicei larg"
            ],
            [
              "**2:1**",
              "Neclasificabil ca I/II",
              "Decide: QRS, PR condus, efort/atropină"
            ],
            [
              "**Avansat (grad înalt)**",
              "≥2 P consecutive blocate, cu unele conduse",
              "Adesea infranodal"
            ],
            [
              "**III**",
              "Nicio P condusă; frecvență atrială > ventriculară; scăpare regulată",
              "Scăpare îngustă 40–60 = nodal; largă 20–40 = infranodal"
            ]
          ]
        }
      },
      {
        "img": {
          "src": "assets/img/ecg/blocuri-av.webp",
          "cap": "Blocurile AV pe traseu de ritm · 6 scheme"
        }
      },
      {
        "p": "Compară PR-ul bătăilor conduse: crește în Mobitz I, e fix în Mobitz II, iar în ESA blocată P-ul vine precoce, pe unda T."
      },
      {
        "p": "**Localizare nodal vs infranodal:** atropina/efortul ameliorează blocul nodal și agravează pe cel infranodal; masajul carotidian invers. PR condus foarte lung (>300 ms) pledează pentru nodal."
      },
      {
        "p": "**Disociație AV ≠ bloc complet.** În BAV III atriile sunt mai rapide decât ventriculii. Dacă ventriculii sunt mai rapizi → uzurpare (ritm jonctional accelerat, TV), nu bloc."
      },
      {
        "p": "**Cele patru mecanisme de disociație AV:**"
      },
      {
        "table": {
          "head": [
            "Mecanism",
            "Ce vezi",
            "Exemple"
          ],
          "rows": [
            [
              "**Încetinirea pacemaker-ului dominant** (default)",
              "Sinusul încetinește, scapă joncțiunea; frecvența ventriculară ≥ cea atrială",
              "Bradicardie sinusală vagală, betablocant"
            ],
            [
              "**Accelerarea unui pacemaker subsidiar** (uzurpare)",
              "Ventriculii mai rapizi decât atriile",
              "Ritm joncțional accelerat, JET, TV, RIVA"
            ],
            [
              "**Bloc AV**",
              "Atriile mai rapide; nicio P condusă, deși cade în momente favorabile",
              "BAV III"
            ],
            [
              "**Combinat**",
              "Uzurpare + bloc",
              "Intoxicație digitalică (tahicardie joncțională + bloc)"
            ]
          ]
        }
      },
      {
        "p": "**Disociație izoritmică:** frecvențe aproape egale; P „alunecă” înaintea, în și după QRS, uneori se sincronizează temporar (accrochage). **Disociație incompletă** = există bătăi de captură (P care cade suficient de devreme și conduce) — dovada că nu e bloc complet."
      },
      {
        "p": "**Capcane:** ESA blocate (cea mai frecventă mimică de BAV II), extrasistole jonctionale ascunse (pseudo-Mobitz II), BAV vagal (PP se alungește odată cu blocul — benign), BAV paroxistic (bloc brusc după o pauză sau extrasistolă — malign)."
      }
    ],
    "mols": [],
    "see": [
      "ecg-ax",
      "nodal"
    ]
  },

  {
    "id": "ecg-ax",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "5 · Axul și hemiblocurile",
    "title": "Pasul 5 · Axul QRS și hemiblocurile",
    "idea": "Axul normal la adult e între −30° și +90°. Hemiblocul se diagnostichează doar cu toate criteriile prezente; deviația axială singură nu e hemibloc.",
    "blocks": [
      {
        "h": "Intervale la adult (AHA 2009)",
        "table": {
          "head": [
            "Ax",
            "Denumire"
          ],
          "rows": [
            [
              "−30° la +90°",
              "Normal"
            ],
            [
              "−30° la −45°",
              "Deviație axială stângă moderată"
            ],
            [
              "−45° la −90°",
              "Deviație axială stângă marcată (frecvent HBAS)"
            ],
            [
              "+90° la +120°",
              "Deviație axială dreaptă moderată"
            ],
            [
              "+120° la +180°",
              "Deviație axială dreaptă marcată (frecvent HBPS)"
            ],
            [
              "−90° la ±180°",
              "Ax extrem („nord-vest”)"
            ],
            [
              "QRS izodifazic în toate derivațiile",
              "Indeterminat"
            ]
          ]
        }
      },
      {
        "p": "**Metodă rapidă:** găsește derivația frontală cu QRS cel mai izodifazic; axul e perpendicular pe ea, de partea derivației pozitive. Verificare: DI pozitiv + aVF pozitiv = normal; DI pozitiv + **DII negativ** = sub −30°."
      },
      {
        "h": "Hemibloc anterior stâng (HBAS) — toate obligatorii",
        "steps": [
          "Ax între **−45° și −90°**",
          "**qR în aVL**",
          "**Timp de vârf R în aVL ≥45 ms** (de la debutul QRS la vârful R)",
          "QRS **<120 ms** (sau asociat cu un bloc de ram care explică lărgirea)"
        ]
      },
      {
        "p": "Suplimentar caracteristic: rS în DII, DIII, aVF cu S(DIII) > S(DII). **Ax −30° până la −44° = deviație axială stângă, nu HBAS.**"
      },
      {
        "h": "Hemibloc posterior stâng (HBPS) — toate obligatorii",
        "steps": [
          "Ax **+90° la +180°** (mulți autori cer ≥+120°)",
          "**rS în DI și aVL**",
          "**qR în DIII și aVF**",
          "QRS <120 ms",
          "**Diagnostic de excludere:** fără HVD, BPOC, habitus longilin, infarct lateral, inversare de electrozi."
        ]
      },
      {
        "h": "Diagnosticul diferențial al deviației axiale",
        "list": [
          "**Stângă:** HBAS, infarct inferior (unde **Q**, nu r mic, în inferior), HVS, preexcitație posteroseptală, hiperkaliemie, DSA ostium primum (+ BRD), pacing VD apical, emfizem (uneori).",
          "**Dreaptă:** variantă normală la tânăr/longilin, HVD, BPOC, embolie pulmonară acută, HBPS, infarct lateral, dextrocardie, inversare RA–LA, hiperkaliemie, intoxicație cu blocante de canal de sodiu.",
          "**Nord-vest:** TV, hiperkaliemie severă, inversare de electrozi, pacing, emfizem sever."
        ]
      },
      {
        "p": "**Terminologie:** AHA nu mai recomandă termenii „bifascicular” și „trifascicular”; descrie fiecare tulburare separat (ex. „BRD + HBAS”). „Trifascicular” pentru BRD + HBAS + PR lung e incorect: PR lung poate fi nodal ([AHA 2009, partea III](https://hrsonline.org/documents/interpretation-electrocardiogram-part-iii-intraventricular-conduction-disturbancespdf/download))."
      }
    ],
    "mols": [],
    "see": [
      "ecg-qrs"
    ]
  },

  {
    "id": "ecg-qrs",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "6 · QRS: conducere, voltaj, Q",
    "title": "Pasul 6 · Complexul QRS: blocuri de ram, hipertrofie, unde Q",
    "idea": "**Durata normală la adult: ≤110 ms** (AHA 2009). Măsoară în derivația cu QRS cel mai larg, ideal global (debutul cel mai precoce – sfârșitul cel mai tardiv).",
    "blocks": [
      {
        "h": "Tulburările de conducere intraventriculară",
        "table": {
          "head": [
            "Diagnostic",
            "Criterii (adult)"
          ],
          "rows": [
            [
              "**BRD complet**",
              "QRS **≥120 ms**; rsr', rsR' sau rSR' în V1/V2 (R' de obicei mai lată decât r); S în DI și V6 **mai lungă decât R sau >40 ms**; timp de vârf R normal în V5–V6, dar >50 ms în V1. Primele 3 obligatorii"
            ],
            [
              "**BRD incomplet**",
              "Aceeași morfologie, QRS **110–119 ms**. Fals pozitiv frecvent cu V1 plasat prea sus"
            ],
            [
              "**BRS complet (AHA)**",
              "QRS **≥120 ms**; R larg, crestat/empastat în DI, aVL, V5, V6; **fără q** în DI, V5, V6 (q îngust permis în aVL); timp de vârf R >60 ms în V5–V6; ST-T opuse QRS"
            ],
            [
              "**BRS strict (Strauss 2011)**",
              "QRS **≥140 ms (B) / ≥130 ms (F)** + **QS sau rS în V1–V2** + crestătură/empastare **mid-QRS în ≥2 dintre DI, aVL, V1, V2, V5, V6**"
            ],
            [
              "**BRS incomplet**",
              "QRS 110–119 ms, pattern de HVS, timp de vârf R >60 ms în V4–V6, fără q în DI, V5, V6"
            ],
            [
              "**IVCD nespecific**",
              "QRS >110 ms fără criterii de BRD sau BRS (sau BRD în precordiale + BRS în membre)"
            ],
            [
              "**Bloc peri-infarct**",
              "Undă Q de infarct inferior/lateral + porțiune terminală a QRS largă, orientată opus Q (complex QR)"
            ]
          ]
        }
      },
      {
        "p": "Criteriile Strauss identifică „BRS adevărat”: aproximativ o treime din BRS după criteriile convenționale sunt de fapt HVS + întârziere, cu răspuns slab la CRT ([ECGpedia — criteriile AHA și Strauss](https://en.ecgpedia.org/index.php?title=LBBB))."
      },
      {
        "img": {
          "src": "assets/img/ecg/bloc-ram-hbas-preexcitatie.webp",
          "cap": "Bloc de ram, HBAS și preexcitație · 6 scheme"
        }
      },
      {
        "p": "În blocurile de ram, ST-T discordant față de QRS e normal; concordanța e cea care trebuie să te alarmeze (pasul 7)."
      },
      {
        "h": "Voltaj și hipertrofie",
        "table": {
          "head": [
            "Criteriu",
            "Prag",
            "Notă"
          ],
          "rows": [
            [
              "**Sokolow-Lyon (HVS)**",
              "S V1 + R V5/V6 **≥35 mm**",
              "Specific, insensibil; fals pozitiv la tineri slabi"
            ],
            [
              "**Cornell voltaj**",
              "R aVL + S V3 **>28 mm (B) / >20 mm (F)**",
              "Cel mai bun criteriu „clasic”"
            ],
            [
              "**Peguero-Lo Presti**",
              "S cea mai adâncă (oricare derivație) + S V4 **≥28 mm (B) / ≥23 mm (F)**; dacă S cea mai adâncă e în V4, dublezi S V4",
              "Sensibilitate 62% în studiul original, 43–52% în meta-analize, specificitate ~90%; fără avantaj pe RMN ([Peguero, JACC 2017, rezumat](https://reliasmedia.com/articles/140765-ecg-criteria-for-left-ventricular-hypertrophy-revisited))"
            ],
            [
              "**R aVL**",
              "**>11 mm**",
              "Simplu, specific"
            ],
            [
              "**Romhilt-Estes**",
              "Voltaj 3p, ST-T de „strain” 3p (1p sub digoxin), AAS 3p, ax ≤−30° 2p, QRS ≥90 ms 1p, timp de vârf R V5–V6 ≥50 ms 1p",
              "**≥5p = HVS; 4p = probabilă**"
            ],
            [
              "**HVD**",
              "R V1 ≥7 mm; R/S V1 >1; R V1 + S V5/V6 >10,5 mm; ax ≥+110°; „strain” V1–V3",
              "Cere excluderea BRD, infarct posterior, preexcitație stângă, dextrocardie"
            ],
            [
              "**Voltaj mic**",
              "QRS **<5 mm în toate derivațiile membrelor** și/sau **<10 mm în toate precordialele**",
              "Obezitate, emfizem, pericardită lichidiană, amiloidoză, hipotiroidie, mixedem"
            ]
          ]
        }
      },
      {
        "p": "Criteriile de voltaj **nu se aplică în BRS** și sunt nesigure în BRD. **„Strain”:** subdenivelare ST descendentă cu T asimetric negativ în V5–V6, DI, aVL."
      },
      {
        "h": "Unde Q patologice (definiția universală a infarctului, 2018)",
        "list": [
          "**V2–V3:** orice Q **≥20 ms** sau complex QS",
          "**DI, DII, aVL, aVF, V4–V6:** Q **≥30 ms și ≥1 mm** adâncime, sau QS, în **≥2 derivații contigue** (DI, aVL; V1–V6; DII, DIII, aVF)",
          "**Echivalent posterior:** R **≥40 ms** în V1–V2 cu R/S ≥1 și T pozitiv concordant, fără tulburare de conducere",
          "Excepții normale: Q izolat în DIII, Q în aVR, q septal mic în DI, aVL, V5–V6"
        ]
      },
      {
        "p": "Criterii aplicabile doar în **absența** HVS și BRS ([criterii UDMI 2018 citate în protocoale clinice](https://cdn.clinicaltrials.gov/large-docs/04/NCT05493904/Prot_SAP_003.pdf))."
      },
      {
        "h": "Alte elemente de raportat",
        "list": [
          "**Progresie lentă a undei R:** R în V3 ≤3 mm. Cauze: infarct anterior vechi, HVS, BPOC, plasare joasă, BRS, normal.",
          "**Tranziție:** normală V3–V4; precoce (V1–V2) sau tardivă (V5–V6).",
          "**QRS fragmentat (fQRS):** crestătură suplimentară în QRS în ≥2 derivații contigue — definiție, excluderi și limite în subcapitolul de mai jos.",
          "**Alternanță electrică:** amplitudine QRS alternând bătaie cu bătaie — tamponadă (cu tahicardie sinusală), AVRT."
        ]
      }
    ],
    "mols": [],
    "see": [
      "ecg-qrs-morf",
      "ecg-st"
    ]
  },

  {
    "id": "ecg-qrs-morf",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "6 · QRS: crestături, V1, pseudo-Q",
    "title": "Pasul 6 · Crestăturile QRS, V1 atipic, R dominant, pseudo-infarct",
    "idea": "Poziția crestăturii decide ce înseamnă, iar orice R dominant în V1 la adult e anormal până la proba contrarie.",
    "blocks": [
      {
        "h": "Crestăturile QRS și V1 atipic",
        "p": "Poziția crestăturii decide ce înseamnă. Aceeași „crestătură inferioară” poate fi DSA, cicatrice sau doar întârziere de conducere dreaptă."
      },
      {
        "table": {
          "head": [
            "Morfologie",
            "Unde se vede",
            "Semnificație"
          ],
          "rows": [
            [
              "**Crochetage**",
              "Crestătură **aproape de vârful R** în DII, DIII, aVF",
              "DSA ostium secundum. Prezent în ≥1 derivație inferioară la ~73% din DSA, dar și la ~7% din normali. **În toate trei inferioarele: specificitate ≥92%**, ≥95% când se asociază BRD incomplet. Corelează cu mărimea șuntului; dispare după închidere la ~1/3 din pacienți ([Heller, JACC 1996](https://pubmed.ncbi.nlm.nih.gov/8613618/))"
            ],
            [
              "**fQRS (Das 2006)**",
              "R' suplimentar, crestătură **în nadirul S** sau pe R, sau >1 R', în **≥2 derivații contigue din același teritoriu coronarian**, QRS <120 ms",
              "Cicatrice miocardică. Mai sensibil decât unda Q pentru cicatrice, dar mai puțin specific (~89% vs ~99%)"
            ],
            [
              "**fQRS pe QRS larg**",
              "**≥2 crestături** pe R sau S în bloc de ram, ritm stimulat sau ESV, în ≥2 derivații contigue",
              "Cicatrice pe fond de QRS larg"
            ],
            [
              "**Treaptă pe panta ascendentă a S, cu BRD incomplet**",
              "Inferior și/sau DI, V6",
              "Întârziere de conducere terminală dreaptă, aceeași care dă rSr' în V1. **Nu se numără ca fQRS:** BRD incomplet a fost exclus explicit din definiția originală Das ([recenzie, PMC 2012](https://pmc.ncbi.nlm.nih.gov/articles/PMC3443879))"
            ],
            [
              "**Bloc peri-infarct**",
              "QR inferior sau lateral, cu porțiune terminală largă orientată opus undei Q",
              "Infarct vechi"
            ]
          ]
        }
      },
      {
        "p": "**Limitele fQRS:**"
      },
      {
        "list": [
          "Prevalență la sănătoși **5–21%**, majoritar în derivațiile inferioare; la sănătoșii cu fQRS investigați prin RMN nu s-a găsit fibroză ([Sarıkaya, Anatol J Cardiol 2022](https://anatoljcardiol.com/article/AJC-44606/pdf)). fQRS inferior izolat, la un pacient fără cardiopatie, nu înseamnă cicatrice.",
          "Are valoare când e **lateral sau anterior**, **apărut nou**, asociat cu unde Q sau cu o anomalie de cinetică, ori ca marker de risc în boală cunoscută: cardiopatie ischemică, sarcoidoză, ARVC, CMH, Brugada (fQRS în V1–V3).",
          "Depinde de filtru: la 0,15–100 Hz se văd mai multe crestături decât la 40 Hz."
        ]
      },
      {
        "h": "Diagnostic diferențial: BRD incomplet + ST descendent + T negativ în V1",
        "table": {
          "head": [
            "Cauză",
            "Cum o recunoști"
          ],
          "rows": [
            [
              "**Variantă normală / sportiv**",
              "r' îngust, ascuțit, coborâre rapidă; T negativ doar în V1(–V2); unghi β mic"
            ],
            [
              "**V1–V2 plasate prea sus**",
              "P negativă sau bifazică în V1, aspect asemănător cu aVR; dispare la repoziționare"
            ],
            [
              "**Pectus excavatum**",
              "Context clinic, P negativă în V1"
            ],
            [
              "**Brugada tip 2 sau tip 1 sub prag**",
              "r' **larg, rotunjit**, coborâre lentă; ST la 40 ms și la 80 ms progresiv mai jos decât punctul de desprindere; **β >58°**; **baza triunghiului la 5 mm sub vârful r' ≥4 mm (160 ms)**; Corrado STJ/ST80 >1; fără S larg în DI și V6 (spre deosebire de BRD). Desprindere ST între 1 și 2 mm = doar sugestiv, nu diagnostic ([consensul Bayés de Luna 2012](https://pmc.ncbi.nlm.nih.gov/articles/PMC4040869); [criteriile Serra](https://pmc.ncbi.nlm.nih.gov/articles/PMC6931854)). Pasul următor: V1–V2 în spațiile intercostale II–III"
            ],
            [
              "**ARVC**",
              "T negative V1–V3 sau mai departe, durată de activare terminală ≥55 ms în V1–V3, undă epsilon, ESV cu aspect de BRS"
            ],
            [
              "**DSA**",
              "Crochetage, ax drept, VD dilatat la echo"
            ],
            [
              "**Suprasolicitare acută VD**",
              "Embolie pulmonară: tahicardie, T negative V1–V4 + DIII"
            ],
            [
              "**Fenocopii Brugada**",
              "Febră, hiperkaliemie, blocante de canal Na, ischemie VD, compresie mediastinală — dispar la corectarea cauzei"
            ]
          ]
        }
      },
      {
        "img": {
          "src": "assets/img/ecg/crestaturi-qrs-v1.webp",
          "cap": "Crestături QRS și V1 atipic · 6 scheme"
        }
      },
      {
        "p": "Pe rândul de jos, diferența Brugada vs BRD incomplet stă în panta lui r′: lentă și rotunjită în Brugada, ascuțită și rapidă în BRD incomplet benign."
      },
      {
        "h": "DSA cu echo „normal”",
        "list": [
          "**VD decide.** VD nedilatat, fără mișcare septală paradoxală = șunt fără semnificație hemodinamică; conduita nu se schimbă.",
          "**VD dilatat fără explicație:** incidență subcostală pe septul interatrial, Doppler color cu Nyquist scăzut, ser agitat, apoi ETE sau RMN.",
          "**Ce scapă la ETT:** DSA sinus venosus superior, drenaj venos pulmonar anormal parțial, ostium secundum mic (dropout fals vs real în apical 4C)."
        ]
      },
      {
        "p": "**Formulări pentru raport (FR):** _Crochetage de l'onde R en DII, DIII et aVF._ · _Encoche sur la branche ascendante de l'onde S en DIII et aVF, sur aspect de BBD incomplet, d'allure non spécifique._ · _Sus-décalage ST descendant de 1 mm en V1, ne remplissant pas les critères d'un aspect de Brugada de type 1._"
      },
      {
        "h": "R dominant în V1 (R/S ≥1)",
        "p": "Orice R dominant în V1 la adult e anormal până la proba contrarie. Diagnosticul diferențial, în ordinea în care îl verifici:"
      },
      {
        "steps": [
          "**Tehnic:** precordiale inversate, V1 plasat greșit, dextrocardie.",
          "**BRD** (QRS ≥120 ms, S larg în DI/V6) sau **preexcitație cu cale stângă** (PR scurt, delta).",
          "**Infarct posterior (infero-bazal):** R ≥40 ms, R/S ≥1, T pozitiv în V1–V2; adesea cu Q inferioare.",
          "**HVD:** ax drept, P pulmonar, „strain” V1–V3.",
          "**CMH** (hipertrofie septală), **distrofie musculară Duchenne/Becker** (R înalt V1 + Q înguste profunde laterale).",
          "**Bloc fascicular septal stâng** (vezi mai jos).",
          "**Variantă normală** la tineri și copii (diagnostic de excludere)."
        ]
      },
      {
        "h": "Unde Q fără infarct (pseudo-infarct)",
        "p": "Preexcitație (delta negativă), CMH (Q „pumnal” înguste), BRS (QS în V1–V3), HVS (QS V1–V2), amiloidoză și alte infiltrative (pseudo-Q anterioare cu voltaj mic), BPOC/emfizem (QS V1–V3 prin poziție), cord pulmonar acut (Q în DIII), pneumotorax stâng, cardiomiopatie dilatativă, miocardită, takotsubo, Duchenne, dextrocardie și inversare de electrozi, sarcoidoză, tumori. Q-ul ischemic e de obicei larg (≥30–40 ms), cu T modificat în aceleași derivații și într-un teritoriu coronarian."
      },
      {
        "h": "Bloc fascicular septal stâng (LSFB)",
        "p": "Entitate controversată (AHA 2009 nu recomandă termenul), dar descrisă în reviziile Pérez-Riera (criterii nestandardizate). Semnătura: **forțe anterioare proeminente** — R proeminent în V2–V3 (≥15 mm e o observație de caz, nu un prag validat), creștere „în crescendo” V1→V3 și descreștere V4→V6, **dispariția q septale** în DI, V5–V6, timp de activare în V1–V2 crescut, QRS <120 ms. Criteriul cel mai util e **caracterul tranzitoriu/intermitent**, tipic în ischemie acută prin stenoză LAD proximal de prima septală ([caz ilustrativ, Neth Heart J 2022](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9475009/)). Diagnostic numai după excluderea celorlalte cauze de R dominant în V1."
      },
      {
        "h": "Variante normale de recunoscut",
        "p": "Q izolat în DIII (dispare în inspir), T negativ izolat în DIII sau V1, rSr' în V1 cu QRS <110 ms, BRD incomplet la sportiv, repolarizare precoce lateral, pattern juvenil de T, aritmie sinusală respiratorie, ritm atrial migrator la frecvență joasă, BAV I și Mobitz I la sportivi (în somn), voltaj crescut izolat la tineri slabi, S1S2S3 la tineri."
      }
    ],
    "mols": [],
    "see": [
      "ecg-st"
    ]
  },

  {
    "id": "ecg-st",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "7 · ST: praguri și ocluzie",
    "title": "Pasul 7 · Segmentul ST: praguri, echivalente de ocluzie, artera vinovată",
    "idea": "Măsoară la **punctul J**, raportat la **segmentul TP** (sau PR dacă TP nu se vede, la frecvență mare). Descrie: direcție, amplitudine, morfologie (concav / drept / convex; ascendent / orizontal / descendent), derivații, reciprocitate.",
    "blocks": [
      {
        "h": "Pragurile de supradenivelare (definiția universală 2018)",
        "p": "Supradenivelare nouă la punctul J în **≥2 derivații contigue**:"
      },
      {
        "table": {
          "head": [
            "Derivații",
            "Prag"
          ],
          "rows": [
            [
              "Toate, cu excepția V2–V3",
              "**≥1 mm**"
            ],
            [
              "V2–V3, bărbați ≥40 ani",
              "**≥2 mm**"
            ],
            [
              "V2–V3, bărbați <40 ani",
              "**≥2,5 mm**"
            ],
            [
              "V2–V3, femei (orice vârstă)",
              "**≥1,5 mm**"
            ],
            [
              "V3R–V4R (VD)",
              "≥0,5 mm (≥1 mm la bărbați <30 ani)"
            ],
            [
              "V7–V9 (posterior)",
              "≥0,5 mm (≥1 mm la bărbați <40 ani)"
            ]
          ]
        }
      },
      {
        "p": "**Subdenivelare ischemică:** nouă, **orizontală sau descendentă ≥0,5 mm** în ≥2 derivații contigue. Subdenivelarea ascendentă nu se numără (excepție: de Winter)."
      },
      {
        "h": "Echivalente de ocluzie (ESC 2023 — urgență de reperfuzie)",
        "table": {
          "head": [
            "Pattern",
            "Criterii",
            "Semnificație"
          ],
          "rows": [
            [
              "**Posterior**",
              "Subdenivelare ST **maximă în V1–V4**, T terminal pozitiv, R ample; confirmare: ≥0,5 mm în V7–V9",
              "Circumflexă / CD dominantă"
            ],
            [
              "**de Winter**",
              "Subdenivelare ascendentă la punctul J 1–3 mm în V1–V6 + **T înalte, simetrice**; ± supra în aVR",
              "Ocluzie proximală LAD"
            ],
            [
              "**T hiperacute**",
              "T largi, voluminoase, disproporționate față de QRS, în teritoriu coronarian",
              "Ocluzie foarte precoce"
            ],
            [
              "**BRS / pacing cu Sgarbossa (Smith) pozitiv**",
              "Vezi mai jos",
              "Ocluzie"
            ],
            [
              "**Supra aVR + subdenivelare difuză**",
              "Subdenivelare ≥1 mm în **≥8 derivații** + supra în aVR și/sau V1",
              "Trunchi comun / tricoronarian / ischemie de cerere — nu „STEMI aVR”"
            ],
            [
              "**VD**",
              "Supra în V1 (și V3R–V4R) cu infarct inferior",
              "Ocluzie proximală CD"
            ]
          ]
        }
      },
      {
        "img": {
          "src": "assets/img/ecg/st-ocluzie-mimici.webp",
          "cap": "Morfologia ST în ocluzie și mimici · 9 scheme"
        }
      },
      {
        "p": "Forma contează cât pragul: convexitatea, T disproporționat și pierderea undei S sugerează ocluzie chiar sub pragurile de milimetri."
      },
      {
        "p": "Ghidul ESC 2023 numește explicit STEMI posterior, infarctul VD/ocluzia circumflexei și de Winter; T hiperacute, Aslanger, swirl și „steagul” vin din literatura OMI. Toate se tratează ca ocluzie în curs, cu indicație de triaj imediat pentru reperfuzie ([ESC ACVC Toolkit, cap. 2](https://www.escardio.org/static-file/Escardio/Subspecialty/ACCA/Education/ACVC%20Toolkit/CHAP2.pdf))."
      },
      {
        "h": "Indicii suplimentare pentru ocluzie (paradigma OMI)",
        "list": [
          "**Reciprocitate** — subdenivelare în derivațiile opuse: crește masiv specificitatea. **Subdenivelarea în aVL** e cel mai precoce semn de infarct inferior.",
          "**DIII > DII** cu subdenivelare în DI → CD; DII ≥ DIII fără subdenivelare în DI → circumflexă.",
          "**Formula Smith (LAD vs repolarizare precoce, 4 variabile):** 0,052 × QTc − 0,151 × QRS V2 − 0,268 × R V4 + 1,062 × ST60 V3 (mm, ms); **>18,2 sugerează ocluzie LAD**.",
          "**Unde Q noi în V1–V3, pierdere de R, ST convex** → ocluzie, nu repolarizare precoce."
        ]
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "Formula cu 4 variabile e corectă (Driver/Smith, _J Electrocardiol_ 2017;50:561): **>18,2** → sensibilitate 89%, specificitate 95%. Varianta cu 3 variabile: 1,196 × ST60 V3 + 0,059 × QTc − 0,326 × R V4, prag **≥23,4**. QTc = Bazett calculat de aparat.",
            "Se aplică **numai** cu supra ≥1 mm în V2–V4 și **nu** se aplică dacă există: ST drept sau convex în V2–V6, subdenivelare inferioară ≥1 mm (sumă), orice subdenivelare anterioară, unde Q, distorsiune terminală a QRS, supra >5 mm.",
            "Paradigma OMI (Meyers 2021): citirea „ocluzie” a avut sensibilitate 86% vs 41% pentru criteriile STEMI, la specificitate 91% vs 94%."
          ]
        }
      },
      {
        "h": "ST în BRS și ritm stimulat",
        "table": {
          "head": [
            "Regulă",
            "Criterii",
            "Performanță"
          ],
          "rows": [
            [
              "**Sgarbossa (1996)**",
              "Supra concordantă ≥1 mm (5p); subdenivelare concordantă ≥1 mm în V1–V3 (3p); supra discordantă ≥5 mm (2p); ≥3p pozitiv",
              "Specific, sensibilitate ~20–36%"
            ],
            [
              "**Smith modificat (2012/2015)**",
              "Primele două criterii + **supra discordantă ≥1 mm cu ST/S ≤ −0,25** (sau subdenivelare discordantă cu ST/R ≥0,25); oricare = pozitiv",
              "Sensibilitate 80%, specificitate 99% la validare ([Meyers 2015, rezumat REBEL EM](https://rebelem.com/modified-sgarbossa-criteria-part-deux/))"
            ],
            [
              "**BARCELONA (2020)**",
              "Deviere ST ≥1 mm **concordantă în orice derivație**, sau **discordantă ≥1 mm în derivații cu voltaj max (R sau S) ≤6 mm**",
              "Sensibilitate 93–95%, specificitate 89–94% ([Di Marco, JAHA 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7660719))"
            ]
          ]
        }
      },
      {
        "p": "BRS „nou sau presupus nou” **nu mai e echivalent automat de STEMI**; decizia se ia pe simptome, hemodinamică și aceste criterii."
      },
      {
        "h": "Artera vinovată",
        "table": {
          "head": [
            "Supradenivelare ST",
            "Teritoriu",
            "Artera probabilă"
          ],
          "rows": [
            [
              "V1–V2 (± V3)",
              "Septal",
              "LAD proximal de prima septală"
            ],
            [
              "V2–V4",
              "Anterior",
              "LAD"
            ],
            [
              "V1–V6 + DI, aVL",
              "Anterior extins",
              "LAD proximal (rar trunchi comun)"
            ],
            [
              "DI, aVL (± V2, V5–V6)",
              "Lateral înalt",
              "Prima diagonală, circumflexă, intermediară"
            ],
            [
              "DII, DIII, aVF",
              "Inferior",
              "CD (~80%) sau circumflexă"
            ],
            [
              "V7–V9 / subdenivelare maximă V1–V4",
              "Infero-bazal („posterior”)",
              "Circumflexă sau CD"
            ],
            [
              "V1 și V3R–V4R",
              "VD",
              "CD proximal"
            ]
          ]
        }
      },
      {
        "p": "**LAD — proximal vs distal.** Indică ocluzie **proximală**: subdenivelare reciprocă inferioară (doar ocluzia proximală o produce), supradenivelare în aVR, supradenivelare în aVL, BRD nou, pierderea q în V5–V6. **„Wraparound”** (LAD care ocolește apexul): supradenivelare anterioară **și** inferioară simultan, fără reciprocitate inferioară."
      },
      {
        "p": "**Inferior — CD vs circumflexă:**"
      },
      {
        "list": [
          "**CD:** supra DIII > DII; subdenivelare >1 mm în DI și aVL; raport subdenivelare V3 / supradenivelare DIII <1.",
          "**CD proximal (cu VD):** supra în V1 (izoelectric sau ↑) și ≥0,5 mm în V4R.",
          "**Circumflexă:** DII ≥ DIII; DI și aVL izoelectrice sau supradenivelate; supra V5–V6; subdenivelare marcată V1–V3.",
          "Limită: la circumflexa dominantă criteriile DIII/DII și aVL/DI își pierd mult din specificitate ([Fiol, Zimetbaum — rezumat Relias](https://reliasmedia.com/articles/17198-accuracy-of-ecg-localization-of-the-culprit-artery-in-stemi); [LITFL](https://litfl.com/1237-2))."
        ]
      },
      {
        "h": "Pattern-uri de ocluzie fără criterii STEMI",
        "table": {
          "head": [
            "Pattern",
            "Criterii",
            "Semnificație"
          ],
          "rows": [
            [
              "**Aslanger**",
              "(1) supra **doar în DIII** (± aVR), nu în DII/aVF; (2) subdenivelare în oricare V4–V6 (dar nu V2) cu T pozitiv sau terminal pozitiv; (3) **ST în V1 > ST în V2**",
              "Infarct inferior acut + boală multivasculară; mortalitate mai mare. Prezent la 6,3% din NSTEMI ([Aslanger, J Electrocardiol 2020 — LITFL](https://litfl.com/aslanger-pattern/))"
            ],
            [
              "**Steagul Africii de Sud**",
              "Supra în **DI, aVL, V2** + subdenivelare în **DIII** (± DII, aVF); se vede în formatul 3×4",
              "Ocluzie de primă diagonală / lateral înalt; LAD proximal de D1 ([Littmann, AJEM 2016](https://ajemjournal.com/article/S0735-6757(15)00863-3/fulltext))"
            ],
            [
              "**Precordial swirl**",
              "QRS îngust fără HVS; supra și/sau T hiperacute în **V1–V2** (± aVR) + subdenivelare în **V5–V6**",
              "LAD proximal de prima septală. Specificitate 92%; 98% dacă raportul T/S în V2 >0,40 ([J Electrocardiol 2025, rezumat](https://www.powerfulmedical.com/research/precordial-swirl-sign-a-new-ecg-pattern-of-left-anterior-descending-artery-occlusion-myocardial-infarction))"
            ],
            [
              "**Ischemie de grad 3 (Sclarovsky-Birnbaum)**",
              "Dispariția undei S în ≥2 derivații cu aspect Rs (V1–V3), sau punct J peste jumătatea undei R în derivații qR",
              "Lipsa protecției miocardice: infarct mai mare, prognostic mai prost ([studiu CMR, PMC 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4882879))"
            ],
            [
              "**„Shark fin” / lambda**",
              "QRS, ST și T fuzionează într-un singur triunghi monofazic",
              "Ocluzie extinsă, risc de FV"
            ],
            [
              "**BRD nou în SCA**",
              "BRD + ischemie; criteriile ST rămân aplicabile",
              "Ocluzie proximală LAD, prognostic prost"
            ]
          ]
        }
      },
      {
        "img": {
          "src": "assets/img/ecg/ocluzie-12-derivatii.webp",
          "cap": "Pattern-uri de ocluzie pe 12 derivații · 4 hărți"
        }
      },
      {
        "p": "Aceste pattern-uri se recunosc după distribuția pe 12 derivații, nu după milimetrii dintr-o singură derivație; formatul 3×4 e cel în care se văd."
      },
      {
        "h": "Evoluție și reperfuzie",
        "list": [
          "**Semne de reperfuzie:** inversarea terminală a T în derivațiile infarctului (aspect Wellens), rezoluție ST ≥50–70%, ritm idioventricular accelerat.",
          "**Pseudonormalizare:** T negative post-infarct care redevin pozitive = **reocluzie** până la proba contrarie.",
          "**Supradenivelare persistentă >2 săptămâni cu unde Q:** anevrism ventricular."
        ]
      }
    ],
    "mols": [],
    "see": [
      "ecg-st-dd",
      "vas-mec"
    ]
  },

  {
    "id": "ecg-st-dd",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "7 · ST: diagnostic diferențial",
    "title": "Pasul 7 · Supra- și subdenivelarea ST: diagnosticul diferențial",
    "idea": "Înainte să numești o supradenivelare „ocluzie”, treci prin mimici: repolarizare precoce, pericardită, anevrism, HVS/BRS, Brugada, takotsubo.",
    "blocks": [
      {
        "h": "Diagnosticul diferențial al supradenivelării",
        "table": {
          "head": [
            "Entitate",
            "Trăsături"
          ],
          "rows": [
            [
              "**Repolarizare precoce (pattern J)**",
              "Crestătură/empastare J ≥1 mm în ≥2 derivații inferioare/laterale, ST concav, T ample, stabil în timp; risc doar pentru variantele inferioare cu ST orizontal/descendent"
            ],
            [
              "**Pericardită**",
              "Supra **difuză, concavă**, fără reciprocitate (exceptând aVR, V1); **subdenivelare PR** difuză + supra PR în aVR; **raport ST/T în V6 >0,25**; semnul Spodick (TP descendent)"
            ],
            [
              "**Anevrism ventricular**",
              "Unde Q + supra persistentă; raport T/QRS mic (amplitudinea T / QRS <0,36 favorizează anevrism vs acut)"
            ],
            [
              "**HVS / BRS**",
              "Supra discordantă proporțională în V1–V3"
            ],
            [
              "**Brugada tip 1**",
              "Coved ≥2 mm în V1–V2 urmat de T negativ"
            ],
            [
              "**Takotsubo**",
              "Supra antero-laterală fără V1, cu **subdenivelare în aVR** (Kosuge); fără reciprocitate inferioară — criteriu nevalidat extern"
            ],
            [
              "**Hiperkaliemie, Brugada fenocopie, post-cardioversie, miocardită, hipotermie (Osborn), disecție aortică, embolie pulmonară**",
              "Context clinic"
            ]
          ]
        }
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "Criteriul Kosuge (subdenivelare aVR + lipsa supra în V1: sensibilitate 91%, specificitate 96%) **nu s-a confirmat la validarea externă** (2015): nu exclude ocluzia LAD.",
            "ESC 2025 grupează pericardita și miocardita sub **sindromul inflamator miopericardic (IMPS)**; ghidul descrie modificările ECG calitativ, fără praguri. Semnul Spodick și raportul ST/T în V6 vin din literatură, nu din ghid."
          ]
        }
      },
      {
        "h": "Diagnosticul diferențial al subdenivelării",
        "p": "Ischemie subendocardică (orizontală/descendentă, adesea difuză), **echivalent posterior** (V1–V4), reciprocitate a unei supradenivelări, „strain” HVS, BRD/BRS secundar, **digoxin** (în „copaie”, cu QT scurt), hipokaliemie (cu U proeminent), **undă Ta** în tahicardie (subdenivelare PR și ST inferior, cu supra PR/ST în aVR — benign)."
      }
    ],
    "mols": [],
    "see": [
      "ecg-t"
    ]
  },

  {
    "id": "ecg-t",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "8 · Unda T și unda U",
    "title": "Pasul 8 · Unda T și unda U",
    "idea": "T secundar (discordant, explicat de QRS) e normal; T primar (concordant, simetric sau nou) e patologic până la proba contrarie.",
    "blocks": [
      {
        "h": "Normal la adult",
        "list": [
          "**Pozitivă:** DI, DII, V3–V6",
          "**Negativă:** aVR",
          "**Variabilă (poate fi negativă normal):** DIII, aVL, aVF (dacă QRS e negativ acolo), V1, rar V2",
          "Asimetrică (ramă ascendentă lentă), amplitudine de obicei <5 mm în membre și <10 mm în precordiale",
          "**Pattern juvenil:** T negative V1–V3 normale la copii și adolescenți",
          "**Sportiv de origine africană/afro-caraibiană:** T negative V1–V4 precedate de supra J și ST convex — variantă normală"
        ]
      },
      {
        "h": "Primar vs secundar",
        "list": [
          "**Secundar** (normal pentru QRS-ul respectiv): ST-T **discordant** față de QRS în BRS, BRD (V1–V3), HVS, preexcitație, ritm stimulat.",
          "**Primar** (patologic): T negativ **concordant** cu QRS, T simetric, sau T care s-a schimbat față de ECG anterior."
        ]
      },
      {
        "h": "Pattern-uri specifice",
        "table": {
          "head": [
            "Pattern",
            "Criterii",
            "Semnificație"
          ],
          "rows": [
            [
              "**Wellens A**",
              "T **bifazic (+/−)** în V2–V3",
              "Stenoză critică LAD proximală, fază de reperfuzie"
            ],
            [
              "**Wellens B**",
              "T **profund, simetric negativ** în V2–V3 (± V1–V6)",
              "La fel"
            ],
            [
              "_Condiții Wellens_",
              "Durere recentă, **asimptomatic la înregistrare**, ST <1 mm, fără Q, progresie R păstrată, troponină normală/ușor crescută",
              "Nu test de efort — coronarografie"
            ],
            [
              "**de Winter**",
              "T înalte simetrice după subdenivelare ST ascendentă",
              "Ocluzie LAD (vezi pasul 7)"
            ],
            [
              "**T hiperacute**",
              "T voluminoase, largi la bază, disproporționate față de QRS",
              "Ocluzie precoce"
            ],
            [
              "**Hiperkaliemie**",
              "T înalte, **ascuțite, cu bază îngustă** („în cort”), simetrice",
              "Apoi P aplatizat, QRS lărgit, sinusoidal"
            ],
            [
              "**Unde T cerebrale**",
              "T gigante negative, largi, QT foarte lung, adesea bradicardie",
              "Hemoragie subarahnoidiană, AVC, HTIC"
            ],
            [
              "**Memorie cardiacă**",
              "T negative după pacing, BRS intermitent, preexcitație sau tahicardie",
              "Benign, tranzitoriu"
            ],
            [
              "**Takotsubo (subacut)**",
              "T profund negative, difuze, QT lung",
              "—"
            ],
            [
              "**CMH apicală (Yamaguchi)**",
              "T gigante negative (>10 mm) V3–V5",
              "—"
            ],
            [
              "**ARVC**",
              "T negative V1–V3 (și dincolo) la >14 ani, fără BRD complet",
              "Criteriu major Task Force"
            ],
            [
              "**Embolie pulmonară**",
              "T negative V1–V4 **și** DIII simultan",
              "Suprasolicitare VD"
            ],
            [
              "**Alternanța T**",
              "Amplitudine T alternând bătaie cu bătaie",
              "LQTS, risc de TdP"
            ]
          ]
        }
      },
      {
        "img": {
          "src": "assets/img/ecg/t-u-qt-unde-j.webp",
          "cap": "Unda T, U, morfologii QT și unde J · 12 scheme"
        }
      },
      {
        "p": "Rândul al treilea arată de ce morfologia T ajută la ghicirea genotipului LQTS înainte de testul genetic."
      },
      {
        "h": "Unda U",
        "list": [
          "Normal: mică (<1/4 din T), aceeași polaritate cu T, cel mai bine în V2–V3, vizibilă la bradicardie.",
          "**Proeminentă (>1 mm sau ≥ T în aceeași derivație):** hipokaliemie, hipomagneziemie, antiaritmice clasa IA/III, bradicardie, LQTS.",
          "**U negativă** în precordiale (cu T pozitiv): ischemie (LAD) sau HVS/HTA — specificitate mare pentru boală.",
          "Nu include unda U în QT decât dacă e fuzionată cu T (vezi pasul 9)."
        ]
      }
    ],
    "mols": [],
    "see": [
      "ecg-qt"
    ]
  },

  {
    "id": "ecg-qt",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "9 · Intervalul QT",
    "title": "Pasul 9 · Intervalul QT: măsurare, corecție, praguri, LQTS",
    "idea": "QT se măsoară cu metoda tangentei în derivația cu QT-ul cel mai lung; Fridericia e preferată la frecvențe extreme. QTc >500 ms = risc de torsadă.",
    "blocks": [
      {
        "h": "Măsurare",
        "list": [
          "De la debutul QRS la **sfârșitul undei T**, în DII sau V5 (sau derivația cu cel mai lung QT), media a 3–5 bătăi.",
          "**Metoda tangentei:** sfârșitul T = intersecția tangentei la panta descendentă cea mai abruptă a T cu linia izoelectrică. Exclude unda U separată; include U doar dacă e fuzionată cu T.",
          "În FiA: media pe ≥10 bătăi sau RR precedent + următor.",
          "Verificare rapidă: QT normal e **sub jumătate din RR** la frecvențe de 60–100/min."
        ]
      },
      {
        "h": "Corecție pentru frecvență",
        "table": {
          "head": [
            "Formulă",
            "Calcul",
            "Când"
          ],
          "rows": [
            [
              "**Bazett**",
              "QT / √RR (s)",
              "Standard istoric; supracorectează la >90/min, subcorectează la <60/min"
            ],
            [
              "**Fridericia**",
              "QT / ∛RR",
              "**Preferată** la frecvențe extreme și pentru monitorizarea medicamentelor"
            ],
            [
              "**Framingham**",
              "QT + 154 × (1 − RR)",
              "Alternativă liniară"
            ],
            [
              "**Hodges**",
              "QT + 1,75 × (FC − 60)",
              "Alternativă liniară"
            ]
          ]
        }
      },
      {
        "h": "Praguri",
        "table": {
          "head": [
            "Categorie",
            "QTc"
          ],
          "rows": [
            [
              "Prelungit (AHA 2009)",
              "**≥450 ms bărbați, ≥460 ms femei**"
            ],
            [
              "Risc crescut de torsadă / oprire medicament",
              "**>500 ms**, sau creștere **>60 ms** față de bazal"
            ],
            [
              "SQT (AHA 2009)",
              "≤390 ms"
            ],
            [
              "**LQTS (ESC 2022)**",
              "QTc **≥480 ms** pe ECG repetate, sau scor Schwartz **>3**; QTc ≥460 ms + sincopă aritmică poate fi suficient"
            ],
            [
              "**SQTS (ESC 2022)**",
              "QTc **≤360 ms** + mutație patogenă, istoric familial, sau supraviețuire după TV/FV; ≤320 ms poate fi suficient singur"
            ]
          ]
        }
      },
      {
        "p": "Pragurile ESC 2022 sunt rezumate comparativ în [Könemann et al., Europace 2023](https://scholarlypublications.universiteitleiden.nl/access/item%3A3729002/view)."
      },
      {
        "h": "QT în bloc de ram și pacing",
        "p": "**Formula Bogossian:** QT modificat = QT măsurat − **50% din durata QRS**, apoi corecția obișnuită pentru frecvență ([Bogossian, IJC Heart Vasc 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7509006)). Se aplică în BRS, BRD și pacing VD. Alternativ, raportează **JT** (QT − QRS); JTc >340 ms = prelungit."
      },
      {
        "h": "Morfologii de T în LQTS",
        "list": [
          "**LQT1:** T larg, cu bază largă, debut precoce",
          "**LQT2:** T de amplitudine mică, **crestat sau bifid**",
          "**LQT3:** segment ST lung, izoelectric, cu T întârziat de aspect normal"
        ]
      },
      {
        "h": "Cauze de QT lung dobândit",
        "p": "Medicamente (antiaritmice IA/III, macrolide, fluorochinolone, antipsihotice, metadonă, ondansetron, antidepresive), **hipokaliemie, hipomagneziemie, hipocalcemie**, bradicardie, BAV complet, ischemie, takotsubo, evenimente cerebrale, hipotermie, hipotiroidie. **QT scurt:** hipercalcemie, digoxin, hiperkaliemie, acidoză, hipertermie, SQTS."
      },
      {
        "h": "Scorul Schwartz clasic (2011)",
        "p": "În absența medicamentelor sau a tulburărilor care alungesc QT; QTc prin Bazett."
      },
      {
        "table": {
          "head": [
            "Criteriu",
            "Puncte"
          ],
          "rows": [
            [
              "QTc ≥480 ms",
              "3"
            ],
            [
              "QTc 460–479 ms",
              "2"
            ],
            [
              "QTc 450–459 ms (bărbați)",
              "1"
            ],
            [
              "QTc ≥480 ms în minutul 4 de recuperare la test de efort",
              "1"
            ],
            [
              "Torsadă a vârfurilor⁎",
              "2"
            ],
            [
              "Alternanță T vizibilă",
              "1"
            ],
            [
              "T crestat în 3 derivații",
              "1"
            ],
            [
              "Frecvență mică pentru vârstă (<percentila 2)",
              "0,5"
            ],
            [
              "Sincopă⁎ la stres / fără stres",
              "2 / 1"
            ],
            [
              "Surditate congenitală",
              "0,5"
            ],
            [
              "Rudă cu LQTS cert⁎⁎",
              "1"
            ],
            [
              "Moarte subită inexplicabilă <30 ani la rudă de gradul I⁎⁎",
              "0,5"
            ]
          ]
        }
      },
      {
        "p": "⁎Sincopa și torsada se exclud reciproc. ⁎⁎Aceeași rudă nu se numără de două ori. **Interpretare:** ≤1 probabilitate mică; 1,5–3 intermediară; **≥3,5 mare** ([tabel, Medicina 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC10819657/table/medicina-60-00094-t001)). Pragul **>3** aparține scorului modificat ESC 2022 (caseta de mai jos), nu acestui tabel."
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "**ESC 2022 (tabelul 10) folosește un scor Schwartz modificat**, diferit de versiunea clasică de mai sus: QTc ≥480 ms = **3,5** puncte; **variantă patogenă = 3,5** puncte; surditatea congenitală e scoasă; restul itemilor rămân (torsadă 2, QTc ≥480 ms în minutul 4 de recuperare 1, alternanță T 1, T crestat în 3 derivații 1, frecvență mică 0,5, sincopă 2/1, istoric familial 1/0,5). Diagnostic: scor **>3**.",
            "LQTS se diagnostichează și direct cu QTc ≥480 ms pe ECG repetate sau cu o variantă patogenă (I); QTc 460–479 ms + sincopă aritmică: IIa. Sursă: [ESC 2022 aritmii ventriculare](https://academic.oup.com/eurheartj/article/43/40/3997/6675633)."
          ]
        }
      },
      {
        "h": "Markeri ECG de risc aritmic și prognostic",
        "table": {
          "head": [
            "Marker",
            "Prag",
            "Semnificație"
          ],
          "rows": [
            [
              "**Unghi QRS-T frontal**",
              "**≥100°** (diferența absolută dintre axa QRS și axa T)",
              "Risc de moarte aritmică de ~2× în populația generală, mai ales prin axa T anormală ([Tikkanen, Finlanda](https://pmc.ncbi.nlm.nih.gov/articles/PMC6931827))"
            ],
            [
              "**Tpeak–Tend**",
              "**>100 ms**",
              "Dispersie transmurală a repolarizării; specific, puțin sensibil"
            ],
            [
              "**QTc**",
              ">500 ms",
              "Risc de TdP"
            ],
            [
              "**Alternanță T** vizibilă",
              "—",
              "LQTS, risc iminent"
            ],
            [
              "**fQRS** în ≥2 derivații contigue",
              "—",
              "Cicatrice, risc în cardiopatie cunoscută, Brugada, ERS"
            ],
            [
              "**QRS ≥120 ms**, BRS",
              "—",
              "Prognostic mai prost în IC"
            ],
            [
              "**HVS cu strain**",
              "—",
              "Risc CV crescut"
            ],
            [
              "**Supra aVR + subdenivelare difuză** în SCA",
              "—",
              "Trunchi / tricoronarian, mortalitate crescută"
            ],
            [
              "**Ischemie de grad 3** în STEMI",
              "—",
              "Infarct mai mare"
            ],
            [
              "**Repolarizare precoce inferioară cu ST orizontal/descendent**",
              "J ≥2 mm",
              "Risc aritmic (vezi Shanghai, pasul 10)"
            ]
          ]
        }
      }
    ],
    "mols": [],
    "see": [
      "pa",
      "aritmii"
    ]
  },

  {
    "id": "ecg-speciale",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "10 · Canalopatii și boli cu semnătură ECG",
    "title": "Pasul 10 · Canalopatii, cardiomiopatii și boli cu semnătură ECG",
    "idea": "După pașii 1–9, verifică activ lista de mai jos: fiecare are o semnătură pe care o ratezi dacă nu o cauți.",
    "blocks": [
      {
        "h": "Canalopatii și cardiomiopatii",
        "table": {
          "head": [
            "Entitate",
            "Criterii ECG"
          ],
          "rows": [
            [
              "**Brugada tip 1**",
              "Supra ST **coved ≥2 mm** urmat de **T negativ** în ≥1 derivație dreaptă (V1–V2, inclusiv în spațiile intercostale II–III). Spontan = diagnostic (ESC 2022); indus medicamentos cere elemente clinice suplimentare"
            ],
            [
              "**Brugada tip 2 (saddleback)**",
              "r' cu ST în „șa” ≥0,5 mm, T pozitiv în V2. Unghiul **β >58°** sau baza triunghiului la 5 mm sub vârful r' **≥4 mm (160 ms)** favorizează Brugada vs BRD incomplet / sportiv. **Indicele Corrado** STJ/ST80 >1 (ST descendent) favorizează Brugada; <1 favorizează repolarizarea sportivului"
            ],
            [
              "**ARVC (Padova 2020)**",
              "**Major:** T negative V1–V3 (sau dincolo) după pubertate, fără BRD complet. **Minor:** T negative V1–V2; T negative V1–V4 cu BRD complet; **undă epsilon** în V1–V3 (retrogradată la minor); **durată de activare terminală ≥55 ms** (nadir S → sfârșit QRS) în V1–V3 fără BRD; **>500 ESV/24 h sau TVNS/TV cu aspect de BRS = criteriu VD major** (minor doar cu ax inferior); niciun criteriu de depolarizare nu e major ([Padua criteria, Heart 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8995901/table/T1))"
            ],
            [
              "**ALVC**",
              "Voltaj <0,5 mV vârf-la-vârf în **toate** derivațiile membrelor (fără obezitate, emfizem, revărsat), T negative V4–V6, TV cu aspect de BRD — toate criterii VS **minore**"
            ],
            [
              "**CMH**",
              "Voltaj de HVS, **unde Q înguste și adânci („pumnal”)** inferolateral, T negative laterale; apicală: T gigante negative V3–V5"
            ],
            [
              "**Amiloidoză**",
              "**Voltaj mic în membre cu perete gros la eco** (discordanță voltaj–masă), pseudo-unde Q anterioare, tulburări de conducere, FiA"
            ],
            [
              "**Sarcoidoză**",
              "BAV sau BRD la tânăr, fQRS, TV monomorfă"
            ],
            [
              "**Chagas**",
              "**BRD + HBAS**, BAV, ESV"
            ],
            [
              "**Distrofie miotonică**",
              "PR lung, QRS lărgit, progresie spre BAV"
            ],
            [
              "**Non-compactare**",
              "Fără semn specific; voltaj mare, BRS, preexcitație la copii"
            ]
          ]
        }
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "**ESC 2022:** tipul 1 **spontan** e diagnostic (I). Tipul 1 indus de medicament sau febră e diagnostic doar după stop prin FV/TV polimorfă; altfel (IIa) cere sincopă aritmică, respirație agonică nocturnă, rudă cu Brugada sau moarte subită în familie <45 ani cu autopsie negativă. Un tip 1 indus apare la 2–4% din sănătoși.",
            "Scorul Shanghai Brugada (2016): ≥3,5 probabil/cert, 2–3 posibil, <2 nediagnostic. Versiunea APHRS 2026 scoate itemul „FiA/flutter <30 ani” și limitează itemul genetic la varianta patogenă SCN5A.",
            "Padova 2020: toate criteriile de depolarizare (epsilon, TAD ≥55 ms, voltaj mic în membre) sunt **minore**; „după pubertate” înseamnă dezvoltare pubertară completă. Sursă: [J-wave consensus 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC5063270/)."
          ]
        }
      },
      {
        "h": "Sindroame de undă J și canalopatii rare",
        "p": "**Pattern de repolarizare precoce:** crestătură sau empastare terminală a QRS ≥1 mm în ≥2 derivații inferioare și/sau laterale. **Sindromul** cere și eveniment aritmic. Scorul Shanghai (necesită cel puțin un criteriu ECG):"
      },
      {
        "table": {
          "head": [
            "Criteriu",
            "Puncte"
          ],
          "rows": [
            [
              "Stop cardiac inexplicabil, FV sau TV polimorfă documentată",
              "3"
            ],
            [
              "Sincopă suspect aritmică / de mecanism neclar",
              "2 / 1"
            ],
            [
              "J ≥2 mm în ≥2 derivații inferioare/laterale **cu ST orizontal sau descendent**",
              "2"
            ],
            [
              "Variație dinamică a punctului J ≥1 mm",
              "1,5"
            ],
            [
              "J ≥1 mm în ≥2 derivații inferioare/laterale",
              "1"
            ],
            [
              "ESV cu cuplaj scurt (R pe T) la Holter",
              "2"
            ],
            [
              "Rudă cu ERS cert / ≥2 rude de gradul I cu pattern J ≥2 mm",
              "2"
            ],
            [
              "O rudă de gradul I cu pattern J ≥2 mm",
              "1"
            ],
            [
              "Moarte subită inexplicabilă <45 ani la rudă de gradul I–II",
              "0,5"
            ],
            [
              "Mutație probabil patogenă",
              "0,5"
            ]
          ]
        }
      },
      {
        "p": "**≥5 = ERS probabil/cert; 3–4,5 = posibil; <3 = nediagnostic** ([HRS/EHRA/APHRS/SOLAECE 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC5035208/table/T5)). La fiecare categorie se punctează doar criteriul cel mai mare."
      },
      {
        "table": {
          "head": [
            "Entitate",
            "ECG"
          ],
          "rows": [
            [
              "**CPVT**",
              "ECG de repaus **normal** (± bradicardie sinusală); la efort ESV progresive → **TV bidirecțională** sau polimorfă"
            ],
            [
              "**Andersen-Tawil (LQT7)**",
              "**U proeminente**, interval QU lung, ESV frecvente, TV bidirecțională; dismorfism + paralizie periodică"
            ],
            [
              "**Timothy (LQT8)**",
              "QT foarte lung, BAV 2:1 funcțional, sindactilie"
            ],
            [
              "**FV idiopatică cu ectopie Purkinje**",
              "ECG normal; ESV declanșatoare cu cuplaj <300 ms, QRS relativ îngust"
            ],
            [
              "**TV polimorfă cu cuplaj scurt**",
              "Cuplaj <300 ms, QT normal"
            ]
          ]
        }
      },
      {
        "h": "Boli sistemice și genetice cu semnătură ECG",
        "table": {
          "head": [
            "Boală",
            "Semnătura"
          ],
          "rows": [
            [
              "**Fabry**",
              "**PR scurt** (fără delta), HVS, bradicardie, ulterior tulburări de conducere"
            ],
            [
              "**Danon**",
              "**Preexcitație + HVS masivă** (voltaje foarte mari), la adolescent/tânăr"
            ],
            [
              "**PRKAG2**",
              "Preexcitație + HVS + boală de conducere progresivă"
            ],
            [
              "**Laminopatie (LMNA)**",
              "PR lung → BAV, FiA/flutter, TV; P de amplitudine mică"
            ],
            [
              "**Emery-Dreifuss**",
              "**Standstill atrial** (fără P, ritm jonctional), BAV"
            ],
            [
              "**Duchenne / Becker**",
              "R înalt în V1 (R/S >1), Q înguste profunde inferolaterale, tahicardie sinusală"
            ],
            [
              "**Friedreich**",
              "T negative difuze, HVS"
            ],
            [
              "**Kearns-Sayre**",
              "Boală de conducere progresivă spre BAV complet"
            ],
            [
              "**Steinert**",
              "PR lung, QRS lărgit, progresie spre BAV, TV"
            ],
            [
              "**Sarcoidoză**",
              "BAV sau BRD la <60 ani, fQRS, TV monomorfă"
            ]
          ]
        }
      },
      {
        "h": "Cardiopatii congenitale la adult",
        "table": {
          "head": [
            "Entitate",
            "ECG"
          ],
          "rows": [
            [
              "**Transpoziție corectată (ccTGA)**",
              "**q septal inversat**: Q în V1–V3 și DIII, **absența q** în V5–V6; BAV progresiv"
            ],
            [
              "**Tetralogie Fallot operată**",
              "BRD; **QRS ≥180 ms** = marker de risc pentru TV și moarte subită"
            ],
            [
              "**Fontan / Mustard / Senning**",
              "Disfuncție sinusală, flutter atrial intra-atrial (adesea 2:1, lent)"
            ],
            [
              "**ALCAPA**",
              "Pattern de infarct anterolateral la sugar"
            ],
            [
              "**Eisenmenger / HTP**",
              "HVD, P pulmonar, ax drept"
            ]
          ]
        }
      }
    ],
    "mols": [],
    "see": [
      "ecg-context",
      "aritmii",
      "cm-mec"
    ]
  },

  {
    "id": "ecg-context",
    "grp": "ecg",
    "sec": "Pas cu pas",
    "short": "10 · Metabolic, toxic, sportiv",
    "title": "Pasul 10 · Metabolic, toxic, sportiv și alte tablouri",
    "idea": "Electroliții, medicamentele, temperatura și contextul clinic schimbă ECG-ul fără boală cardiacă primară; sportivul are propriile limite de normal.",
    "blocks": [
      {
        "h": "Metabolic, toxic, mediu",
        "table": {
          "head": [
            "Situație",
            "ECG"
          ],
          "rows": [
            [
              "**Hiperkaliemie**",
              "T ascuțite → P aplatizat, PR lung → QRS lărgit → pattern sinusoidal, bradicardie, BAV; ritm „pseudo-TV” lent; fenocopie Brugada"
            ],
            [
              "**Hipokaliemie**",
              "T aplatizate, **U proeminente**, subdenivelare ST, QU lung, ESV"
            ],
            [
              "**Hipercalcemie**",
              "**QT scurt** (ST scurtat), uneori undă J"
            ],
            [
              "**Hipocalcemie**",
              "**ST lung, izoelectric** → QT lung cu T normal"
            ],
            [
              "**Hipomagneziemie**",
              "QT lung, TdP"
            ],
            [
              "**Digoxin (efect)**",
              "Subdenivelare ST „în copaie”, QT scurt, T aplatizat"
            ],
            [
              "**Digoxin (toxicitate)**",
              "Tahicardie atrială cu bloc, ritm joncțional accelerat, **FiA regularizată** (BAV complet), **TV bidirecțională**, ESV bigeminate"
            ],
            [
              "**Blocante de canal Na (triciclice, flecainidă)**",
              "QRS >100 ms, **R terminal în aVR >3 mm**, R/S în aVR >0,7, deviație dreaptă a ultimelor 40 ms, fenocopie Brugada"
            ],
            [
              "**Hipotermie**",
              "Bradicardie, **unde Osborn (J)** proporționale cu hipotermia, intervale lungi, artefact de frison, FiA"
            ],
            [
              "**Hipotiroidie**",
              "Bradicardie, voltaj mic, T aplatizate, QT lung"
            ]
          ]
        }
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "Sensibilitatea ECG pentru K ≥6 mmol/l e doar **34–43%**, a undelor T ascuțite ~18% (Montague 2008): un ECG normal nu exclude hiperkaliemia severă. Intoxicația cu triciclice (Liebelt): R în aVR ≥3 mm (sensibilitate 81%), R/S în aVR ≥0,7 (75%)."
          ]
        }
      },
      {
        "h": "Alte tablouri de recunoscut",
        "table": {
          "head": [
            "Entitate",
            "ECG"
          ],
          "rows": [
            [
              "**Embolie pulmonară**",
              "Tahicardie sinusală (cel mai frecvent), **T negative V1–V4 + DIII**, BRD nou, ax drept, S1Q3T3 (nespecific), supra în aVR/V1, P pulmonar"
            ],
            [
              "**Pericardită**",
              "Vezi pasul 7; stadii: supra difuză + PR subdenivelat → normalizare → T negative → normal"
            ],
            [
              "**Lichid pericardic / tamponadă**",
              "Voltaj mic, **alternanță electrică**, tahicardie sinusală"
            ],
            [
              "**Dextrocardie**",
              "DI inversat, aVR pozitiv, **progresie R inversă** V1→V6"
            ],
            [
              "**DSA secundum**",
              "BRD incomplet, ax drept, **crestătură aproape de vârful R în DII, DIII, aVF („crochetage”)**"
            ],
            [
              "**DSA primum / canal AV**",
              "**Ax stâng + BRD**, PR lung"
            ],
            [
              "**Ebstein**",
              "P gigante, BRD atipic, PR lung, preexcitație dreaptă (~20%)"
            ],
            [
              "**Hemoragie cerebrală**",
              "T gigante negative, QT foarte lung, U proeminente, bradicardie"
            ],
            [
              "**Takotsubo**",
              "Supra anterioară fără V1, apoi T negative difuze și QT lung"
            ]
          ]
        }
      },
      {
        "h": "ECG-ul sportivului (criteriile internaționale 2017)",
        "list": [
          "**Normal (nu cere investigații):** voltaj crescut izolat pentru HVS/HVD, BRD incomplet, repolarizare precoce, supra J + T negative V1–V4 la sportivii de origine africană, T negative V1–V3 sub 16 ani, bradicardie/aritmie sinusală, ritm atrial ectopic sau joncțional, BAV I, Mobitz I.",
          "**Borderline (anormal doar dacă ≥2):** deviație axială stângă sau dreaptă, anomalie atrială stângă sau dreaptă, BRD complet.",
          "**Anormal (investigații):** T negative în afara excepțiilor (inferior DII+aVF, lateral cu DI/aVL/V5/V6), subdenivelare ST, unde Q patologice, BRS complet, QRS ≥140 ms, undă epsilon, preexcitație, QT lung, Brugada tip 1, bradicardie <30/min sau pauze ≥3 s, BAV avansat, aritmii ventriculare."
        ]
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "Pragurile 2017 confirmate: Q/R ≥0,25 sau ≥40 ms, QRS ≥140 ms, QTc ≥470 ms (B) / ≥480 ms (F), PR ≥400 ms, pauze ≥3 s, subdenivelare ST ≥0,5 mm, ≥2 criterii borderline = anormal.",
            "Summit-ul **IC25** (raport ACC, oct. 2026, **provizoriu**): T negative V1–V3 la femei ≥16 ani „pot necesita evaluare”, orice T negativ lateral e semnalat, pattern-ul sportivului de origine africană devine „pattern anterior de repolarizare precoce”, ESV cu cuplaj ≤350 ms = semnal roșu."
          ]
        }
      },
      {
        "p": "Sursa: [Drezner et al., BJSM 2017 (rezumat)](https://www.wits.ac.za/media/wits-university/students/wits-sport/documents/WISH%20Sports%20Cardiology%20Webinar%20-%20Drezner%20-%2009-June-2020.pdf); regula DIII/aVR/V1 exclusă la T negative: [studiu de reinterpretare, 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC10978314)."
      },
      {
        "h": "Alte cauze de ECG anormal",
        "table": {
          "head": [
            "Situație",
            "ECG"
          ],
          "rows": [
            [
              "**BPOC / emfizem**",
              "P pulmonar, voltaj mic, ax drept sau indeterminat, progresie R lentă, S1S2S3, TAM"
            ],
            [
              "**Pneumotorax stâng**",
              "Voltaj scăzut în precordialele stângi, ax drept, variație de amplitudine cu respirația"
            ],
            [
              "**Cocaină**",
              "Tahicardie, supra ST (vasospasm/infarct), QRS lărgit, fenocopie Brugada, QT lung"
            ],
            [
              "**Litiu**",
              "Disfuncție sinusală, T aplatizate"
            ],
            [
              "**Hipoglicemie**",
              "QT lung, T aplatizate, aritmii"
            ],
            [
              "**Hemoragie subarahnoidiană / HTIC**",
              "T gigante negative, QT lung, U; uneori supra ST"
            ],
            [
              "**Feocromocitom**",
              "Tahicardie, aspect de takotsubo, QT lung"
            ],
            [
              "**Electrocuție**",
              "Aritmii, BAV, modificări ST nespecifice"
            ]
          ]
        }
      },
      {
        "h": "Alte rarități de recunoscut",
        "table": {
          "head": [
            "Situație",
            "ECG"
          ],
          "rows": [
            [
              "**Transplant cardiac**",
              "**Două seturi de unde P**: atriul restant al primitorului (neconductibil) și atriul donatorului; BRD frecvent; tahicardie sinusală de repaus (denervare)"
            ],
            [
              "**Angină vasospastică (Prinzmetal)**",
              "Supradenivelare ST **tranzitorie**, adesea nocturnă, care dispare la nitrați; uneori alternanță ST și aritmii ventriculare în timpul crizei"
            ],
            [
              "**Infarct atrial**",
              "Deviații ale **segmentului PR** (supra PR în V5–V6 sau DI, cu subdenivelare reciprocă), aritmii atriale; însoțește de obicei un infarct ventricular"
            ],
            [
              "**Post-TAVI**",
              "BRS nou, BAV progresiv în primele zile"
            ],
            [
              "**Sarcină**",
              "Ax deviat ușor stâng, T negativ în DIII, Q mic în DIII, tahicardie sinusală ușoară, extrasistole"
            ],
            [
              "**Pacient cu LVAD**",
              "Artefacte de înaltă frecvență, voltaj redus, QRS modificat; aritmiile ventriculare pot fi bine tolerate"
            ]
          ]
        }
      }
    ],
    "mols": [],
    "see": [
      "ecg-tsv"
    ]
  },

  {
    "id": "ecg-tsv",
    "grp": "ecg",
    "sec": "Aritmii",
    "short": "Tahicardii cu QRS îngust",
    "title": "Aritmiile cu QRS îngust: TSV, flutter, tahicardii joncționale și atriale focale",
    "idea": "Primul criteriu e lățimea QRS (<120 vs ≥120 ms), al doilea regularitatea. Dacă nu ești sigur la QRS larg, e TV.",
    "blocks": [
      {
        "h": "QRS îngust",
        "img": {
          "src": "assets/img/ecg/tsv-qrs-ingust.webp",
          "cap": "tahicardie regulată cu QRS îngust · RP și bloc AV"
        }
      },
      {
        "p": "Neregulat: FiA (fără P, linie de bază fibrilatorie), flutter cu conducere variabilă, tahicardie atrială multifocală (≥3 morfologii P). Regula clinică: **150/min fix = flutter 2:1** până la proba contrarie; **regula Bix** — o P la jumătatea RR ascunde adesea o a doua P în QRS."
      },
      {
        "table": {
          "head": [
            "Entitate",
            "Semne cheie"
          ],
          "rows": [
            [
              "**Flutter tipic (CCW)**",
              "Unde F „dinți de fierăstrău” **negative în DII, DIII, aVF**, pozitive în V1, ~300/min"
            ],
            [
              "**Flutter tipic CW**",
              "F inferioare pozitive, largi (adesea crestate); F negative, largi, adesea bimodale în V1. Majoritatea flutterelor „CW” sunt de fapt reintrări pe bucla inferioară sau în opt, tot dependente de ICT"
            ],
            [
              "**AVNRT tipic**",
              "RP **<90 ms** pe ECG de suprafață (ESC 2019), pseudo-r′ V1 (specificitate 91–100%, sensibilitate 58%), pseudo-S inferior"
            ],
            [
              "**AVRT ortodromic**",
              "RP **>90 ms**, de obicei sub jumătate din ciclu (ESC 2019); alternanță QRS; aberanța care încetinește tahicardia = cale ipsilaterală"
            ],
            [
              "**PJRT**",
              "RP lung, P profund negative inferior, incesantă"
            ],
            [
              "**Tahicardie atrială focală**",
              "P diferită de sinusal; P pozitivă în V1 / negativă în DI = origine stângă; „warm-up”"
            ]
          ]
        }
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "Pragul de **70 ms** e intervalul VA măsurat la studiul electrofiziologic; pe ECG-ul de suprafață ESC 2019 folosește **90 ms**. Intervalul „70–140 ms” pentru AVRT e o regulă didactică, nu un criteriu de ghid.",
            "Alte indicii pentru AVNRT (ESC 2019): diferență RP >20 ms între V1 și DIII, crestătură în aVL, pseudo-r' în aVR (mai performant decât cel din V1). Un ciclu neregulat >15% sugerează mecanism focal. Sursă: [ESC 2019 TSV](https://academic.oup.com/eurheartj/article/41/5/655/5556821)."
          ]
        }
      },
      {
        "h": "Tahicardiile joncționale",
        "table": {
          "head": [
            "Tip",
            "Frecvență (adult)",
            "Caracteristici",
            "Context"
          ],
          "rows": [
            [
              "**Ritm joncțional de scăpare**",
              "40–60/min",
              "QRS îngust, P absentă sau retrogradă (negativă inferior, PR <120 ms sau RP scurt)",
              "Bradicardie sinusală, bloc"
            ],
            [
              "**Ritm joncțional accelerat** (tahicardie joncțională nonparoxistică)",
              "60–130/min",
              "Debut și sfârșit **gradual**, disociație AV frecventă",
              "**Intoxicație digitalică**, infarct inferior, post-chirurgie, miocardită; în timpul ablației căii lente = semn de efect"
            ],
            [
              "**JET (tahicardie joncțională focală)**",
              ">100/min (120–200)",
              "Automatism; **disociație VA** (ventricul > atriu) sau conducere retrogradă 1:1 care imită AVNRT; adenozina **nu** o oprește, dar demască disociația",
              "Postoperator pediatric (până la 5%), congenital; rar la adult, adesea incesant ([J Arrhythm 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7532275))"
            ]
          ]
        }
      },
      {
        "p": "**QRS îngust + disociație AV — diagnostic diferențial:** JET, AVNRT cu bloc al căii comune superioare, tahicardie pe cale nodo-fasciculară sau nodo-ventriculară ascunsă, reintrare intra-hisiană, **TV fasciculară septală înaltă**. Ventriculul mai rapid decât atriul exclude blocul AV ca mecanism."
      },
      {
        "h": "Localizarea tahicardiei atriale focale (algoritm Kistler)",
        "list": [
          "**V1:** P + sau −/+ → atriul stâng (sensibilitate 100%); P negativă sau +/− → atriul drept (specificitate 100%); acuratețe prospectivă 93% (n=30).",
          "**aVL:** pozitivă sau bifazică → atriul drept; negativă → atriul stâng (vene pulmonare).",
          "**Derivațiile inferioare:** pozitive → origine superioară (crista superioară, vene pulmonare superioare, urechiușe); negative → origine inferioară (ostium sinus coronar, inel tricuspidian inferior).",
          "**Crista terminalis:** negativă în aVR, pozitivă în DI și DII.",
          "**Ostium sinus coronar:** profund negativă inferior, pozitivă în aVL, izoelectrică sau ± în V1, apoi tot mai negativă în precordiale.",
          "**Vene pulmonare:** pozitivă în toate precordialele; P crestată în DII → vene stângi.",
          "**Paraseptal:** P bifazică (−/+ sau izo/+) în V1 (algoritmul actualizat 2021)."
        ]
      },
      {
        "p": "Surse: [Kistler, JACC 2006](https://pubmed.ncbi.nlm.nih.gov/16949495/); [Lee și Fynn, revizie](https://pmc.ncbi.nlm.nih.gov/articles/PMC4356716). Algoritmul a localizat corect focarul în 93% din cazuri; e validat pe cord structural normal."
      }
    ],
    "mols": [],
    "see": [
      "ecg-qrs-larg",
      "aritmii"
    ]
  },

  {
    "id": "ecg-qrs-larg",
    "grp": "ecg",
    "sec": "Aritmii",
    "short": "Tahicardii cu QRS larg",
    "title": "Aritmiile cu QRS larg: TV vs TSV aberantă, algoritmi, TV idiopatice",
    "idea": "La QRS larg, dacă nu ești sigur, e TV. Disociația AV, capturile și fuziunile au specificitate de aproape 100%.",
    "blocks": [
      {
        "h": "QRS larg (≥120 ms)",
        "p": "**Criterii independente de algoritm (specificitate mare, sensibilitate mică):** disociație AV, bătăi de captură și fuziune, concordanță precordială negativă, ax nord-vest, QRS >160 ms cu aspect de BRS sau >140 ms cu BRD."
      },
      {
        "table": {
          "head": [
            "Algoritm",
            "Pași (oprire la primul „da” = TV)"
          ],
          "rows": [
            [
              "**Brugada (1991)**",
              "1. Absența RS în toate precordialele → 2. RS >100 ms într-o precordială → 3. Disociație AV → 4. Morfologie de TV în V1–V2 și V6"
            ],
            [
              "**Vereckei aVR (2008)**",
              "1. R inițial în aVR → 2. r sau q inițial >40 ms → 3. Crestătură pe panta descendentă a QRS negativ → 4. **vi/vt ≤1**"
            ],
            [
              "**Pava (2010)**",
              "Timp de vârf R în DII **≥50 ms**"
            ],
            [
              "**VT score (Jastrzębski, _Europace_ 2016)**",
              "Disociație AV (**2p**); R inițial în V1, r inițial >40 ms în V1/V2, S crestat în V1, R inițial în aVR, timp de vârf R în DII ≥50 ms, absența RS în V1–V6 (câte 1p); **≥3p = TV** (specificitate 99,6%), ≥4p: 100%"
            ]
          ]
        }
      },
      {
        "p": "**Algoritmul Basel (2022)** — TV dacă sunt prezente **≥2 din 3**: (1) risc clinic înalt (infarct în antecedente, IC cu FEVS ≤35%, DAI/CRT-D); (2) timp până la primul vârf în **DII >40 ms**; (3) timp până la primul vârf în **aVR >40 ms**. Sensibilitate 93%, specificitate 90% la validare, diagnostic mai rapid decât Brugada ([Moccetti et al., JACC EP 2022](https://pubmed.ncbi.nlm.nih.gov/35863808)). Niciun algoritm nu exclude TV: la dubiu, tratează ca TV."
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "Performanța scade mult la validare externă: **Brugada** specificitate 59–64% (vs 96,5% în derivare), **Vereckei aVR** specificitate ~61% (25–40% la rezidenți), **Pava** sensibilitate 60–78%. Meta-analiza din 2023 (14 studii, 3966 pacienți): sensibilitate 89%, specificitate 71%. **Basel**: 92%/89% în derivare, 93%/90% la validare, mai rapid (36 s vs 105 s).",
            "**Kindwall** (aspect de BRS, oricare criteriu → TV; sensibilitate 100%, specificitate 89%): R în V1/V2 >30 ms, orice Q în V6, >60 ms de la debut la nadirul S în V1/V2, S crestat în V1/V2 (= semnul Josephson). **Steurer** (TV vs tahicardie preexcitată): QRS predominant negativ în V4–V6, QR în V2–V6, relație AV ≠ 1:1 (specificitate 100%). Concordanța negativă: specificitate >90%, prezentă la ~20% din TV.",
            "**VT score**: ≥3 puncte → specificitate 99,6%; ≥4 → 100% (_Europace_ 2016). Sursă Basel: [Moccetti, JACC EP 2022](https://pubmed.ncbi.nlm.nih.gov/35863808)."
          ]
        }
      },
      {
        "p": "**Semne morfologice clasice:** „urechi de iepure” în V1 cu urechea stângă mai înaltă (TV); **semnul Josephson** — crestătură pe panta descendentă a S lângă nadir (TV); R/S <1 în V6 cu aspect de BRD (TV)."
      },
      {
        "p": "**Neregulat cu QRS larg, morfologie variabilă, >200/min:** FiA preexcitată — interzise adenozină, verapamil, diltiazem, betablocant, digoxin. RR minim preexcitat ≤250 ms = risc de FV."
      },
      {
        "p": "**Polimorfă:** torsada vârfurilor (QT lung, secvență scurt–lung–scurt) vs TV polimorfă cu QT normal (ischemie). **Bidirecțională:** digoxin, CPVT, Andersen-Tawil. **TV fasciculară:** QRS 110–140 ms, BRD + HBAS, cord normal."
      },
      {
        "p": "**Localizarea ESV/TV:** BRS = VD sau sept/LVOT; BRD = VS; ax inferior = bază (tract de ejecție); ax superior = apex/inferior; tranziție ≤V2 = LVOT, ≥V3 = RVOT. Criterii epicardice: pseudo-delta ≥34 ms, timp de vârf R V2 ≥85 ms, RS minim ≥121 ms, MDI ≥0,55."
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "„Tranziție ≤V2 = LVOT, ≥V3 = RVOT” e prea simplu: **tranziția în V3 e zonă gri**. Acolo: **V2S/V3R ≤1,5 → LVOT** (Yoshida: sensibilitate 89%, specificitate 94%); **raport de tranziție V2 ≥0,60 → LVOT** (Betensky, acuratețe 91%); o tranziție a ESV mai tardivă decât cea sinusală exclude LVOT.",
            "Criteriile epicardice (Berruezo: pseudo-delta ≥34 ms, deflexiune intrinsecoidă V2 ≥85 ms, RS minim ≥121 ms; Daniels: MDI ≥0,55) sunt confirmate, dar în cardiomiopatia non-ischemică doar **Q în DI** rămâne fiabil (Vallès 2010)."
          ]
        }
      },
      {
        "h": "TV idiopatice și rare",
        "table": {
          "head": [
            "Tip",
            "ECG",
            "Note"
          ],
          "rows": [
            [
              "**TV fasciculară posterioară** (~90% din fasciculare)",
              "**BRD + ax superior**, QRS 110–140 ms, RS scurt",
              "Reintrare Purkinje, **sensibilă la verapamil** (Belhassen); tânăr, cord normal; adenozina și manevrele vagale de obicei ineficiente"
            ],
            [
              "**TV fasciculară anterioară**",
              "**BRD + ax drept**",
              "Rară"
            ],
            [
              "**TV fasciculară septală înaltă**",
              "**QRS îngust**, ax normal sau drept",
              "Foarte rară; mimează TPSV ([Nogami, ECR](https://www.ecrjournal.com/articles/diagnosis-and-ablation-fascicular-tachycardia-0))"
            ],
            [
              "**Tract de ejecție VD**",
              "BRS + ax inferior, tranziție ≥V3",
              "Activitate declanșată (AMPc), sensibilă la adenozină și betablocant; exclude ARVC/sarcoidoză prin RMN"
            ],
            [
              "**Tract de ejecție VS / cuspide**",
              "Ax inferior, tranziție ≤V2, R larg în V1–V2",
              "Ablație din cuspide sau sumitatea VS"
            ],
            [
              "**Mușchi papilar**",
              "BRD, QRS >150 ms, fără aspect curat de hemibloc, morfologie ușor variabilă",
              "Nu răspunde la verapamil; confundată cu cea fasciculară"
            ],
            [
              "**Inel mitral / tricuspidian**",
              "Mitral: BRD, S în V6, concordanță pozitivă; tricuspidian: BRS cu tranziție tardivă",
              "—"
            ],
            [
              "**Reintrare în ram**",
              "De obicei BRS **identic cu QRS-ul bazal**; HV lung în sinusal",
              "CMD, valvulopatii, post-chirurgie valvulară; ablația ramului drept e curativă"
            ],
            [
              "**Bidirecțională**",
              "Alternanța axului QRS bătaie cu bătaie",
              "Digoxin, CPVT, Andersen-Tawil"
            ],
            [
              "**Torsadă cu cuplaj scurt**",
              "Cuplaj <300 ms, QT normal",
              "FV idiopatică; DAI"
            ],
            [
              "**RIVA**",
              "50–110/min, fuziuni la debut și sfârșit",
              "Reperfuzie; nu se suprimă"
            ]
          ]
        }
      }
    ],
    "mols": [],
    "see": [
      "ecg-extrasistole",
      "aritmii"
    ]
  },

  {
    "id": "ecg-extrasistole",
    "grp": "ecg",
    "sec": "Aritmii",
    "short": "Extrasistole și fenomene",
    "title": "Extrasistole și fenomene de conducere: parasistolie, Ashman, conducere ascunsă",
    "idea": "O extrasistolă se analizează în șase pași: origine, cuplaj, morfologie, pattern, povară și semnale de alarmă.",
    "blocks": [
      {
        "h": "Fenomene de conducere și ritmuri de recunoscut",
        "table": {
          "head": [
            "Fenomen",
            "Criterii",
            "Capcană"
          ],
          "rows": [
            [
              "**Parasistolie ventriculară**",
              "Interval de cuplaj **variabil**; intervalele interectopice sunt **multipli ai unui ciclu de bază comun**; bătăi de fuziune",
              "Confundată cu ESV banale; focar protejat de bloc de intrare"
            ],
            [
              "**Ritm idioventricular accelerat**",
              "QRS larg, 50–110/min, fuziuni la debut și sfârșit",
              "Marker de reperfuzie; nu se suprimă"
            ],
            [
              "**Fenomen Ashman**",
              "Aberanță (de obicei BRD) după un ciclu **lung urmat de unul scurt**, tipic în FiA",
              "Confundat cu ESV"
            ],
            [
              "**Aberanță fază 3** (tahicardie-dependentă)",
              "Bloc de ram la frecvență mare",
              "Fiziologic"
            ],
            [
              "**Aberanță fază 4** (bradicardie-dependentă)",
              "Bloc de ram după pauze lungi",
              "Boală His-Purkinje avansată"
            ],
            [
              "**Conducere ascunsă**",
              "Impuls care pătrunde parțial în nodul AV și modifică conducerea următoarei bătăi (PR lung după ESV interpolată)",
              "Explică neregularitatea în FiA și pseudo-blocurile"
            ],
            [
              "**Dublă cale nodală**",
              "**Salt brusc de PR ≥50 ms**; PR alternant; **conducere 1:2** (o P → două QRS)",
              "Substrat AVNRT; tahicardia non-reentrantă 1:2 mimează FiA"
            ],
            [
              "**Disociație AV izoritmică**",
              "Frecvențe atrială și ventriculară aproape egale, P „plutind” prin QRS",
              "Nu e bloc"
            ],
            [
              "**ESA blocate (bigeminate)**",
              "P precoce deformând T, pauze non-compensatorii",
              "Mimică de bradicardie sinusală sau BAV II"
            ],
            [
              "**Regula bigeminismului**",
              "Un ciclu lung favorizează o ESV după bătaia următoare",
              "Explică ESV care apar după pauze"
            ],
            [
              "**Conducere supranormală**",
              "Conducere neașteptată în perioada supranormală, la sfârșitul T",
              "Rară, în BAV avansat"
            ],
            [
              "**Standstill atrial**",
              "Fără P, fără răspuns la stimulare atrială, ritm jonctional",
              "Hiperkaliemie, Emery-Dreifuss, amiloidoză"
            ]
          ]
        }
      },
      {
        "img": {
          "src": "assets/img/ecg/aritmii-traseu-ritm.webp",
          "cap": "Aritmii pe traseul de ritm · 5 scheme"
        }
      },
      {
        "p": "În TV caută activ undele P independente și bătăile de captură: sunt rare, dar au specificitate de aproape 100%."
      },
      {
        "h": "Extrasistole — algoritm de analiză",
        "p": "**1. Atrială sau ventriculară?**"
      },
      {
        "table": {
          "head": [
            "Element",
            "ESA",
            "ESV"
          ],
          "rows": [
            [
              "Undă P precoce",
              "Prezentă, morfologie diferită (caut-o în T-ul precedent)",
              "Absentă; P sinusală poate apărea după, sau P retrogradă"
            ],
            [
              "QRS",
              "Îngust, sau aberant (tipic BRD trifazic rsR′ cu debut identic sinusalului)",
              "≥120 ms, bizar, debut lent; monofazic sau qR în V1, R/S <1 în V6"
            ],
            [
              "Pauză",
              "**Necompensatorie** (sinusul e resetat)",
              "**Compensatorie**: RR care încadrează ESV = 2 × RR sinusal"
            ],
            [
              "ST-T",
              "De obicei normal",
              "Discordant față de QRS"
            ]
          ]
        }
      },
      {
        "p": "Excepții: ESV **interpolată** (fără pauză, PR-ul următor mai lung prin conducere ascunsă), ESA **blocată** (P fără QRS), **extrasistolă joncțională** (QRS îngust fără P sau cu P retrogradă, pauză de obicei compensatorie), ESV cu conducere retrogradă care resetează sinusul (pauză necompensatorie)."
      },
      {
        "p": "**2. Cuplajul** (intervalul QRS precedent → extrasistolă)"
      },
      {
        "list": [
          "**Fix** → reintrare sau activitate declanșată (forma obișnuită).",
          "**Variabil**, cu intervale interectopice multipli ai unui ciclu comun și bătăi de fuziune → **parasistolie**.",
          "**Scurt (<300 ms) sau R pe T** → risc de FV idiopatică / torsadă cu cuplaj scurt.",
          "Dispersia cuplajului se asociază cu cardiomiopatia indusă de ESV."
        ]
      },
      {
        "p": "**3. Morfologia**"
      },
      {
        "list": [
          "**Monomorfă** (focar unic, ablabil) vs **polimorfă** (substrat structural mai probabil).",
          "Localizare: algoritmul din paragraful „Localizarea ESV/TV” de mai sus (tract de ejecție, fascicular, papilar, inelar, epicardic)."
        ]
      },
      {
        "p": "**4. Pattern-ul**"
      },
      {
        "p": "Bigeminism, trigeminism, cuplete, salve; **TVNS** = ≥3 bătăi consecutive ≥100/min, sub 30 s. Regula bigeminismului: un ciclu lung favorizează o ESV după bătaia următoare."
      },
      {
        "p": "**5. Povara (Holter 24–48 h sau mai mult)**"
      },
      {
        "list": [
          "**≥10%** e pragul minim pentru cardiomiopatia indusă de ESV; riscul crește peste **20%**.",
          "Cresc riscul la aceeași povară: QRS-ul ESV **≥150 ms**, origine epicardică, ESV interpolate, dispersia cuplajului ([revizie Diagnostics 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10572222); [predictori ai CMP-ESV](https://pmc.ncbi.nlm.nih.gov/articles/PMC10333144))."
        ]
      },
      {
        "p": "**6. Semnale de alarmă → caută substrat** (echo, RMN cu LGE, test de efort)"
      },
      {
        "p": "Cardiopatie structurală cunoscută; ESV care cresc la efort sau în recuperare; ESV polimorfe; cuplaj scurt; morfologie din afara tractului de ejecție (în special BRD cu ax superior non-fascicular); QRS foarte larg; cuplete sau TVNS; sincopă; moarte subită în familie."
      },
      {
        "img": {
          "src": "assets/img/ecg/extrasistole-jonctionale-fasciculara.webp",
          "cap": "Extrasistole, ritmuri joncționale și TV fasciculară · 7 scheme"
        }
      }
    ],
    "mols": [],
    "see": [
      "ecg-pacing"
    ]
  },

  {
    "id": "ecg-pacing",
    "grp": "ecg",
    "sec": "Stimulare",
    "short": "12 · ECG-ul stimulat",
    "title": "Pasul 12 · ECG-ul stimulat: captură, sensing, CRT, stimularea sistemului de conducere",
    "idea": "**Primul pas:** identifică spike-urile (filtrul înalt de 40 Hz le poate ascunde; aparatele moderne le marchează). Află modul programat și frecvența minimă.",
    "blocks": [
      {
        "table": {
          "head": [
            "Ce verifici",
            "Normal",
            "Anomalie"
          ],
          "rows": [
            [
              "**Captură**",
              "Fiecare spike urmat de P sau QRS",
              "**Pierdere de captură:** spike fără complex"
            ],
            [
              "**Sensing**",
              "Spike-ul apare doar când ritmul propriu lipsește",
              "**Undersensing:** spike-uri peste ritmul propriu (risc R pe T). **Oversensing:** pauze fără spike (miopotențiale, unde T)"
            ],
            [
              "**Morfologie VD apical**",
              "Aspect de BRS, **ax superior**, QS în V5–V6",
              "Aspect de **BRD** în V1 la „stimulare VD” → sondă în VS (sinus coronar, perforație septală, VS prin FOP)"
            ],
            [
              "**Biventricular (CRT)**",
              "QRS mai îngust decât pacing VD, **R dominant în V1** și **Q/QS în DI**",
              "Pierderea R din V1 și a Q din DI = pierdere de captură VS"
            ],
            [
              "**Stimulare de ram stâng (LBBAP)**",
              "**qR/rSR' în V1** (aspect de BRD), timp de vârf R în V6 scurt (stimul–vârf R V6 ≤75–80 ms)",
              "Lipsa morfologiei de BRD în V1 = probabil captură septală, nu de ram"
            ],
            [
              "**His**",
              "QRS identic cu cel nativ (selectiv) sau cu mică pre-excitație (non-selectiv)",
              "—"
            ]
          ]
        }
      },
      {
        "img": {
          "src": "assets/img/ecg/ritm-stimulat.webp",
          "cap": "Ritmul stimulat · 4 scheme"
        }
      },
      {
        "p": "Undersensing-ul e defectul periculos: un spike care cade pe unda T poate declanșa FV."
      },
      {
        "h": "Stimularea sistemului de conducere — criterii ECG de captură",
        "table": {
          "head": [
            "Tip",
            "Criterii"
          ],
          "rows": [
            [
              "**His selectiv**",
              "QRS identic cu cel nativ, interval stimul–QRS ≈ HV nativ (izoelectric după spike)"
            ],
            [
              "**His non-selectiv**",
              "Pseudo-delta (captură miocardică parahisiană), QRS ușor mai larg, durata stimul–sfârșit QRS ≈ cea nativă"
            ],
            [
              "**Captură de ram stâng (LBBP)**",
              "Aspect de **BRD în V1** (Qr, rSR', QR) + **timp de vârf R în V6 <75 ms** (QRS nativ îngust sau BRD) sau **<80 ms** (BRS, IVCD, ritm de scăpare) + **interval între vârfurile R V6→V1 >44 ms** (specificitate ~100%; >33 ms ~90%)"
            ],
            [
              "**Stimulare septală VS (LVSP)**",
              "Aspect de BRD în V1, dar timp de vârf R V6 mai lung și interval V6→V1 mai scurt"
            ],
            [
              "**Standardul de aur**",
              "**Tranziția QRS** la testarea pragului sau la stimulare programată: prelungire bruscă a timpului de vârf R în V6 la pierderea capturii de ram"
            ]
          ]
        }
      },
      {
        "callout": {
          "title": "Actualizare verificată (2026)",
          "text": [
            "**EHRA 2023 (Burri):** timpul de vârf R în V6 la stimulare clasifică adâncimea: septal VD >120 ms, septal profund 95–120 ms, septal VS 80–95 ms, **captură de ram stâng <80 ms**. Creștere bruscă **≥15 ms** la pierderea capturii: sensibilitate 83%, specificitate 100%. Diferența stimul–V6 vs potențial–V6 <10 ms: 88%/95%. His neselectiv acceptat cu V6 RWPT <100 ms fără crestături în DI, V1, V4–V6.",
            "CRT (**Ammann**): R sau Rs în V1 → captură VS; altfel R/S ≤1 în DI → captură VS, R/S >1 în DI → pierdere de captură VS (sensibilitate 94%, specificitate 93%). Sursă: [Burri, Europace 2023](https://academic.oup.com/europace/article/25/4/1208/7063546)."
          ]
        }
      },
      {
        "p": "Surse: [Jastrzębski et al., Europace 2022 (interval V6–V1)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8742628/); [criterii LBBAP, AER 2023](https://aerjournal.com/articleindex/aer.2023.15)."
      },
      {
        "h": "Alte aspecte la pacientul stimulat",
        "p": "**Fenomene normale care par defecte:** pseudofuziune (spike pe un QRS propriu deja început), fuziune, histerezis, „safety pacing” la 100–120 ms, Wenckebach de limită superioară în DDD, schimbare de mod în FiA."
      },
      {
        "p": "**Tahicardie mediată de pacemaker:** tahicardie regulată la frecvența maximă de urmărire, declanșată de o ESV cu conducere retrogradă."
      },
      {
        "p": "**Ischemie la pacientul stimulat VD:** aplică Sgarbossa / Smith modificat (aceeași logică ca BRS; validare mai slabă)."
      },
      {
        "p": "**Raportare:** _„Ritm stimulat bicameral (DDD) 70/min, captură atrială și ventriculară eficiente, sensing adecvat.”_"
      }
    ],
    "mols": [],
    "see": [
      "ecg-critic"
    ]
  },

  {
    "id": "ecg-surse",
    "grp": "ecg",
    "sec": "Referințe",
    "short": "Surse",
    "title": "Surse și literatură",
    "idea": "Pragurile urmează recomandările AHA/ACCF/HRS de standardizare (2009), definiția universală a infarctului (2018), ghidurile ESC și consensurile de mai jos.",
    "blocks": [
      {
        "list": [
          "[AHA/ACCF/HRS — standardizarea ECG, partea III: tulburări de conducere intraventriculară (2009)](https://hrsonline.org/documents/interpretation-electrocardiogram-part-iii-intraventricular-conduction-disturbancespdf/download)",
          "[AHA/ACCF/HRS — partea VI: ischemie acută / infarct (2009)](https://hrsonline.org/documents/standardization-and-interpretation-electrocardiogram-part-vipdf/download)",
          "[Definiția universală a infarctului, a 4-a (ACC, rezumat)](https://acc.org/latest-in-cardiology/ten-points-to-remember/2018/08/24/00/09/fourth-universal-definition-of-mi-esc-2018)",
          "[ESC ACVC Toolkit — pattern-uri ECG din ghidul SCA 2023](https://www.escardio.org/static-file/Escardio/Subspecialty/ACCA/Education/ACVC%20Toolkit/CHAP2.pdf)",
          "[Di Marco et al. — algoritmul BARCELONA, JAHA 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7660719)",
          "[Meyers et al. — validarea Smith-Sgarbossa (rezumat REBEL EM)](https://rebelem.com/modified-sgarbossa-criteria-part-deux/)",
          "[Criterii BRS AHA și Strauss (ECGpedia)](https://en.ecgpedia.org/index.php?title=LBBB)",
          "[Peguero-Lo Presti — criteriu HVS (rezumat)](https://reliasmedia.com/articles/140765-ecg-criteria-for-left-ventricular-hypertrophy-revisited)",
          "[Bogossian et al. — QTc în bloc de ram, 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7509006)",
          "[Könemann et al. — ghidul ESC 2022 de aritmii ventriculare, aspecte noi](https://scholarlypublications.universiteitleiden.nl/access/item%3A3729002/view)",
          "[Criteriile Padova 2020 pentru cardiomiopatia aritmogenă](https://pmc.ncbi.nlm.nih.gov/articles/PMC8995901/table/T1)",
          "[Bloc interatrial și sindrom Bayés — consens 2012](https://lup.lub.lu.se/record/3139225) · [revizie JCM 2023](https://mdpi.com/2077-0383/12/23/7331)",
          "[Criteriile internaționale pentru ECG-ul sportivului (Drezner, 2017)](https://www.wits.ac.za/media/wits-university/students/wits-sport/documents/WISH%20Sports%20Cardiology%20Webinar%20-%20Drezner%20-%2009-June-2020.pdf)",
          "[Inversări de electrozi de membre (LITFL)](https://litfl.com/ecg-limb-lead-reversal-ecg-library/)"
        ]
      },
      {
        "p": "**Adăugate la actualizarea din 18.11.2026:**"
      },
      {
        "list": [
          "[Heller et al. — semnul crochetage în DSA, JACC 1996](https://pubmed.ncbi.nlm.nih.gov/8613618/)",
          "[fQRS — definiție și excluderi (recenzie)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3443879) · [fQRS inferior la sănătoși](https://anatoljcardiol.com/article/AJC-44606/pdf)",
          "[Consensul Bayés de Luna 2012 — pattern Brugada](https://pmc.ncbi.nlm.nih.gov/articles/PMC4040869) · [criteriile Serra / unghi β](https://pmc.ncbi.nlm.nih.gov/articles/PMC6931854)",
          "[Pattern Aslanger (LITFL)](https://litfl.com/aslanger-pattern/) · [Steagul Africii de Sud (AJEM 2016)](https://ajemjournal.com/article/S0735-6757(15)00863-3/fulltext) · [Precordial swirl (rezumat)](https://www.powerfulmedical.com/research/precordial-swirl-sign-a-new-ecg-pattern-of-left-anterior-descending-artery-occlusion-myocardial-infarction)",
          "[Artera vinovată în infarctul inferior (Relias)](https://reliasmedia.com/articles/17198-accuracy-of-ecg-localization-of-the-culprit-artery-in-stemi)",
          "[Ischemie de grad 3 și CMR](https://pmc.ncbi.nlm.nih.gov/articles/PMC4882879)",
          "[Scorul Shanghai — consens J-wave 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC5035208/table/T5)",
          "[Scorul Schwartz](https://pmc.ncbi.nlm.nih.gov/articles/PMC10819657/table/medicina-60-00094-t001)",
          "[Unghi QRS-T și Tpeak–Tend (Tikkanen)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6931827)",
          "[Algoritmul Basel, JACC EP 2022](https://pubmed.ncbi.nlm.nih.gov/35863808)",
          "[Interval V6–V1 pentru captura de ram stâng, Europace 2022](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8742628/) · [criterii LBBAP, AER 2023](https://aerjournal.com/articleindex/aer.2023.15)",
          "Bloc fascicular septal stâng — reviziile Pérez-Riera (citarea „Heart Rhythm 2023” neconfirmată)",
          "[Valori critice în programul Glasgow, CinC 2012](https://pprd.cinc.org/archives/2012/pdf/0601.pdf)"
        ]
      },
      {
        "p": "Criteriile fără link (formula Smith pentru LAD, Romhilt-Estes, Wellens, algoritmii Brugada/Vereckei/Pava, indicele Corrado, semnăturile ECG ale bolilor genetice și congenitale, fenomenele de conducere din pasul 11) provin din literatura de referință și sunt redate din cunoștințe generale — verifică-le pe sursa primară înainte de citare la examen."
      }
    ],
    "mols": [],
    "see": []
  },

  {
    "id": "ecg-x-preex",
    "grp": "ecg",
    "sec": "Nivel expert",
    "short": "Preexcitație: localizare și risc",
    "title": "Preexcitația: localizarea căii, căile atipice și stratificarea riscului",
    "idea": "Algoritmii clasici de localizare ating 90–99% în cohortele proprii, dar 20–47% pentru situsul exact la validare independentă. **EASY-WPW** (93%) e azi instrumentul de pat validat; regula Arruda „delta netă negativă în DII” răspunde la întrebarea epicardică.",
    "blocks": [
      {
        "h": "Pattern-ul WPW și riscul",
        "list": [
          "ESC 2019: **PR ≤120 ms, undă delta, QRS >120 ms**. Risc de stop/FV: **2,4 la 1000 pacienți-ani**; aritmii pe cale la ~1 din 5; FiA paroxistică la ~50%; căi multiple ≤12%; preexcitația dispare definitiv la ≤35%.",
          "Risc înalt la studiul EF: **SPERRI ≤250 ms**, perioadă refractară anterogradă a căii ≤250 ms, căi multiple, AVRT inductibilă (bazal și sub izoproterenol).",
          "Pierderea bruscă a deltei la efort sau preexcitația intermitentă sunt markeri de risc mic **imperfecți**: >1/5 din căile intermitente au totuși perioadă refractară <250 ms; 37% din tinerii cu evenimente amenințătoare de viață nu aveau criterii de risc la SEF.",
          "Ablația: succes >95%, complicații majore <0,5%; evenimente aritmice la 5 ani 7% vs 77% fără ablație (studiu randomizat). [ESC 2019 TSV](https://academic.oup.com/eurheartj/article/41/5/655/5556821)"
        ]
      },
      {
        "h": "EASY-WPW (El Hamriti, _Europace_ 2023)",
        "p": "Pe primele 20–40 ms ale primei deflexiuni a QRS: **polaritatea V1** → tranziția față de V3 → derivația cu delta cea mai pozitivă. Acuratețe **93%** (88% la copii), sensibilitate 92%, specificitate 99%; superior Pambrun (84%) și Arruda (75%) în aceeași cohortă. [PMC9935024](https://pmc.ncbi.nlm.nih.gov/articles/PMC9935024)"
      },
      {
        "table": {
          "head": [
            "Ramura",
            "Criteriu",
            "Delta cea mai pozitivă în",
            "Localizare"
          ],
          "rows": [
            [
              "Stângă (V1 pozitiv)",
              "—",
              "aVL",
              "Mitral posteroseptal"
            ],
            [
              "Stângă (V1 pozitiv)",
              "—",
              "DII sau aVR",
              "Mitral posterolateral"
            ],
            [
              "Stângă (V1 pozitiv)",
              "—",
              "DIII",
              "Mitral anterolateral"
            ],
            [
              "Dreaptă (V1 negativ/izoelectric)",
              "Tranziție ≤V3",
              "DII sau DIII",
              "Tricuspidian anteroseptal"
            ],
            [
              "Dreaptă (V1 negativ/izoelectric)",
              "Tranziție ≤V3",
              "aVR sau aVL",
              "Tricuspidian posteroseptal"
            ],
            [
              "Dreaptă (V1 negativ/izoelectric)",
              "Tranziție >V3",
              "aVL",
              "Tricuspidian posterolateral"
            ],
            [
              "Dreaptă (V1 negativ/izoelectric)",
              "Tranziție >V3",
              "DII",
              "Tricuspidian anterolateral"
            ],
            [
              "Dreaptă (V1 negativ/izoelectric)",
              "Tranziție >V3",
              "DIII",
              "Tricuspidian anteroseptal"
            ],
            [
              "Dreaptă (V1 negativ/izoelectric)",
              "Tranziție >V3",
              "aVR",
              "Tricuspidian posteroseptal"
            ]
          ]
        }
      },
      {
        "p": "Limite: exclude căile multiple și cardiopatia structurală; nu are categorie mediosept sau epicardică. Ierarhie practică: **EASY-WPW** de primă linie, **regula Arruda** („a truly negative delta wave in lead II predicts ablation within the coronary venous system”) pentru întrebarea epicardică, **Pambrun / ESC 2019 Fig. 17** doar pe un ECG maxim preexcitat."
      },
      {
        "h": "Cât de bine localizează algoritmii clasici (Teixeira 2016, n=111)"
      },
      {
        "table": {
          "head": [
            "Algoritm",
            "Regiuni",
            "Situs exact",
            "Exact sau adiacent"
          ],
          "rows": [
            [
              "Arruda",
              "13",
              "37,8%",
              "75,6%"
            ],
            [
              "Boersma",
              "7",
              "47,2%",
              "73,6%"
            ],
            [
              "Chiang",
              "13",
              "36,0%",
              "74,7%"
            ],
            [
              "d'Avila",
              "8",
              "19,8%",
              "39,6%"
            ],
            [
              "Fitzpatrick",
              "8",
              "39,6%",
              "58,5%"
            ],
            [
              "Iturralde",
              "5",
              "44,1%",
              "64,8%"
            ],
            [
              "Xie (St George's)",
              "9",
              "27,0%",
              "56,7%"
            ]
          ]
        }
      },
      {
        "p": "La copii (Wren 2012): 30–49% pentru șapte algoritmi, doar 5–35% pentru căile septale. Arruda a fost cel mai bun pentru căile septale (58,8% exact). [Teixeira 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC5102479)"
      },
      {
        "h": "Căile atriofasciculare (Mahaim)",
        "list": [
          "Sinusal: preexcitație minimă la 72%, ECG citit adesea ca normal; **rS în DIII** la ~60%. Niciun control nu a avut rS în DIII fără q în DI; combinația rS DIII + q septal absent: specificitate estimată ~90%, sensibilitate ~45% (estimări de model).",
          "Tahicardia antidromică — **criteriile Bardy**: ax 0° până la −75°, **QRS ≤150 ms**, R în DI, rS în V1, **tranziție după V4**, ciclu 220–450 ms. Sensibilitate 87,5%. [Sternick & Gerken 2006](https://pmc.ncbi.nlm.nih.gov/articles/PMC6932410)"
        ]
      },
      {
        "h": "Căile fasciculo-ventriculare",
        "p": "**PR scurt 0,10 ± 0,01 s**, QRS 0,12 ± 0,02 s, axe normale, fără deltă negativă inferior, tranziție în V2. Testul decisiv: **adenozina dă bloc AV fără accentuarea preexcitației**. Benigne; importante pentru a evita ablația inutilă (asociere cu PRKAG2 și Danon)."
      },
      {
        "h": "FiA preexcitată",
        "p": "Neregulată, QRS variabil prin fuziune, frecvență mare; **RR minim preexcitat ≤250 ms** = substitutul de pat pentru SPERRI. De evitat: adenozină, verapamil, diltiazem, betablocant, digoxin; amiodarona IV nu se recomandă. Se pot folosi ibutilida, procainamida, propafenona, flecainida; instabil → cardioversie."
      },
      {
        "callout": {
          "title": "De verificat pe sursa primară",
          "text": [
            "Pașii de ramificare Arruda (DI → DII → V1 → aVF) și pragul numeric al legii Coumel (VA ≥35 ms) nu au fost confirmați pe textul original.",
            "Clasele ESC pentru preexcitația asimptomatică (tabele-imagine ESC 2019)."
          ]
        }
      }
    ],
    "mols": [
      "PRKAG2",
      "LAMP2"
    ],
    "see": [
      "ecg-pr",
      "ecg-x-tsv"
    ]
  },

  {
    "id": "ecg-x-tsv",
    "grp": "ecg",
    "sec": "Nivel expert",
    "short": "TSV: discriminarea de aritmolog",
    "title": "Tahicardiile cu QRS îngust: AVNRT, AVRT, TA și diferențialul RP lung",
    "idea": "Ordinea ESC 2019: regulat sau neregulat → P vizibile și raportul A:V → RP scurt sau lung → răspunsul la adenozină. Pragul de **90 ms** e pentru ECG-ul de suprafață; 70 ms e intervalul VA de la studiul electrofiziologic.",
    "blocks": [
      {
        "h": "Formele de AVNRT (ESC 2019, tabelul 12)"
      },
      {
        "table": {
          "head": [
            "Formă",
            "HA",
            "VA",
            "AH/HA",
            "ECG"
          ],
          "rows": [
            [
              "Tipică (lentă–rapidă)",
              "≤70 ms",
              "≤60 ms",
              ">1",
              "P mascată în QRS sau P′ terminală (pseudo-r′ V1, pseudo-S inferior)"
            ],
            [
              "Atipică (global, ~6%)",
              ">70 ms",
              ">60 ms",
              "variabil",
              "—"
            ],
            [
              "Rapidă–lentă",
              "—",
              "—",
              "<1",
              "RP > PR; P negativă/plată în DII, DIII, aVF, V6, pozitivă în V1"
            ],
            [
              "Lentă–lentă",
              "—",
              "—",
              ">1",
              "AH >200 ms"
            ]
          ]
        }
      },
      {
        "list": [
          "**Pseudo-r′ V1 / pseudo-S inferior:** specificitate 91–100%, sensibilitate 58% (Kalbfleisch, _JACC_ 1993). Alte indicii: diferență RP >20 ms între V1 și DIII, crestătură în aVL, **pseudo-r′ în aVR** (mai performant decât V1).",
          "**AVRT ortodromică:** RP constant, de obicei ≤ jumătate din ciclu; bloc de ram funcțional ipsilateral căii (mai ales <40 ani); subdenivelare ST; 150 până la >220/min. **Blocul AV sau disocierea în timpul tahicardiei exclude AVRT.**",
          "**Regularitate și debut:** variabilitate >15% → mecanism focal; VA fix cu RR variabil exclude TA; salt de PR după ESA la debut → AVNRT tipică; „warm-up/cool-down” → TA focală.",
          "**Adenozina:** oprirea cu o P după ultimul QRS e foarte improbabilă în TA; oprirea cu un QRS sugerează TA; nu oprește macroreintrările atriale (le demască); TV fasciculară e insensibilă la adenozină, sensibilă la verapamil. [ESC 2019 TSV](https://academic.oup.com/eurheartj/article/41/5/655/5556821)"
        ]
      },
      {
        "h": "Tahicardia cu RP lung",
        "p": "Tahicardie sinusală și reintrare sinusală (P sinusală, 100–150/min), TA focală, AVNRT rapidă–lentă, **PJRT** (P profund negative inferior, incesantă). PJRT și AVNRT atipică pot avea P identice pe suprafață: de obicei e nevoie de SEF."
      },
      {
        "h": "Tahicardia atrială focală (Kistler 2006)",
        "list": [
          "**P negativă sau +/− în V1 → atriul drept** (specificitate 100%); **P + sau −/+ în V1 → atriul stâng** (sensibilitate 100%); acuratețe prospectivă **93%** (n=30). Actualizarea 2021 adaugă originile paraseptale (ostium sinus coronar, perinodal, sept), tot cu 93%.",
          "ESC 2019: P negativă în DI și aVL → atriul stâng; V1 negativ → atriul drept lateral; V1 bifazic sau pozitiv → sept drept sau AS; P inferioare negative → origine caudală. [Kistler, JACC 2006](https://pubmed.ncbi.nlm.nih.gov/16949495/)"
        ]
      },
      {
        "h": "Definiții (ESC 2019)",
        "list": [
          "**Tahicardie sinusală inadecvată:** >100/min în repaus, medie Holter >90/min, diagnostic de excludere.",
          "**POTS:** creștere ≥30/min (≥40/min la 12–19 ani) în ortostatism >30 s, fără hipotensiune ortostatică.",
          "**TAM:** ≥3 morfologii P, frecvență atrială >100/min, **linie izoelectrică între P**, PP/PR/RR variabile (Schwartz 1994: BPOC, hipoxie, IC, teofilină)."
        ]
      },
      {
        "callout": {
          "title": "De verificat pe sursa primară",
          "text": [
            "Sub-situsurile Kistler (crista, vene pulmonare, ostium sinus coronar) — textul integral JACC 2006.",
            "Regula Bix, JET și ritmurile joncționale nu au fost reverificate în această revizie."
          ]
        }
      }
    ],
    "mols": [],
    "see": [
      "ecg-tsv",
      "ecg-x-flutter"
    ]
  },

  {
    "id": "ecg-x-flutter",
    "grp": "ecg",
    "sec": "Nivel expert",
    "short": "Flutter tipic și atipic",
    "title": "Flutterul și FiA: „tipic” e un mecanism, nu un aspect ECG",
    "idea": "Flutterul tipic e macroreintrarea dependentă de istmul cavotricuspidian, oricum ar arăta pe ECG. După ablația de FiA sau chirurgie, morfologia undelor F devine nesigură, iar „flutterul atipic” e un diagnostic post hoc, stabilit prin mapping.",
    "blocks": [
      {
        "h": "Definițiile actuale ale FiA (ESC 2024)",
        "list": [
          "FiA = „absence of discernible and regular P waves”, RR fără tipar, **în absența blocului AV**. Clinică: **ECG de 12 derivații (10 s) sau ≥30 s** pe orice dispozitiv; pragul de 30 s e consens „with limited evidence”.",
          "**AHRE:** episoade >5 min la ≥170/min pe sonda atrială. Tipare: paroxistică ≤7 zile; persistentă de lungă durată ≥12 luni; permanentă = decizie de a nu restabili ritmul sinusal. [ESC 2024](https://academic.oup.com/eurheartj/article/45/36/3314/7738779)",
          "Nomenclatura EHRA 2025 a tahicardiilor atriale: **focală, reintrare localizată (<1–3 cm), macroreintrare**."
        ]
      },
      {
        "h": "Flutterul tipic",
        "list": [
          "**CCW:** F negative în dinți de fierăstrău inferior, pozitive în V1, **250–330/min**. **CW:** F inferioare pozitive și largi, F negative, largi, adesea bimodale în V1. CCW ≈90% din flutterul tipic.",
          "2:1 ≈150/min (130–170); 3:1 ≈100; 4:1 ≈75. La bloc variabil, RR sunt **multipli întregi ai F–F** (nu în FiA). Bloc 5:1–8:1 → digoxin, electroliți sau boală de conducere.",
          "Clasa IC sau amiodarona încetinesc F sub 200/min → **conducere 1:1** cu QRS larg (caz publicat la 192/min). ESC: clasa IC numai cu blocant nodal.",
          "**După ablația de FiA:** flutterul dependent de ICT are F inferioare pozitive în **60%** (Chugh 2006); doar 27% au aspectul clasic. Unda pozitivă în V1 care devine negativă spre V6 identifică circuitul peritricuspidian (specificitate 98%, sensibilitate 59%).",
          "**Bucla inferioară** (ciclu ~217 vs 272 ms) și **reintrarea în opt** imită flutterul CW și se vindecă tot prin ablația ICT (Zhang 2004: 11 din 12 „CW”). **Bucla superioară**, nedependentă de ICT, dă un ECG identic cu CW."
        ]
      },
      {
        "h": "Indiciile pentru flutterul atipic (specificitate mare, sensibilitate mică)"
      },
      {
        "table": {
          "head": [
            "Semn ECG",
            "Sugerează",
            "Performanță"
          ],
          "rows": [
            [
              "F negativă în oricare precordială",
              "Circuit în atriul drept",
              "Sensibilitate 83%, specificitate 100% (Fuher 2023)"
            ],
            [
              "F negativă sau −/+ în oricare dintre V2–V6",
              "Flutter perimitral",
              "Specificitate 97%, sensibilitate 30% (Pascale 2018)"
            ],
            [
              "Componentă inițială negativă crestată înaintea F inferioare pozitive",
              "Perimitral orar",
              "Specificitate 98%, sensibilitate 25%"
            ],
            [
              "F pozitive inferior și precordial, componentă negativă în DI/aVL",
              "Perimitral antiorar",
              "Gerstenfeld 2007"
            ],
            [
              "F proeminente în V1, plate în celelalte derivații",
              "Circuit septal stâng",
              "11/11 (Bochoeyer 2003)"
            ],
            [
              "Voltaj inferior mic (1,6 vs 2,68 mV)",
              "Circuit stâng",
              "Bochoeyer 2003"
            ],
            [
              "Linie izoelectrică >80 ms",
              "Mecanism focal",
              "VPP doar 60%"
            ]
          ]
        }
      },
      {
        "p": "ECG-ul **nu separă fiabil** reintrarea de plafon de cea perimitrală. Adenozina și manevrele vagale nu opresc macroreintrarea, dar demască undele F (evită adenozina dacă există preexcitație)."
      },
      {
        "h": "Cardiopatii congenitale",
        "p": "În DSA domină flutterul dependent de ICT; după Mustard/Senning recidiva după ablație ~30%; după Fontan cu tunel lateral, reintrarea intraatrială la 10,8% (mediană 17,2 ani)."
      },
      {
        "h": "Indicii atriale pentru FiA",
        "list": [
          "**Bloc interatrial avansat:** P ≥120 ms, bifazică (±) în DII, DIII, aVF; cu aritmii atriale = sindrom Bayés (AVC, demență, mortalitate).",
          "**PTFV1 >0,04 mm·s:** predictor modest (OR 1,39; populație generală 1,15; Europa 1,05, nesemnificativ).",
          "**Standstill atrial:** P absente, electrograme absente, fără captură atrială la output maxim; tromboembolism 30–54%; confundat cu FiA."
        ]
      },
      {
        "callout": {
          "title": "De verificat pe sursa primară",
          "text": [
            "Stadiile ACC/AHA 2023 ale FiA; pragul AHRE din ESC 2020 (≥175/min).",
            "Derivația Lewis, pragul undelor f fine vs grosiere, fenomenul Ashman, pacemakerul migrator — fără sursă primară găsită."
          ]
        }
      }
    ],
    "mols": [
      "SCN5A",
      "NPPA, NPPB",
      "EMD"
    ],
    "see": [
      "ecg-tsv",
      "ecg-x-tsv"
    ]
  },

  {
    "id": "ecg-x-qrs-larg",
    "grp": "ecg",
    "sec": "Nivel expert",
    "short": "QRS larg: algoritmi și validare",
    "title": "QRS larg: algoritmii, cu cifrele din derivare și din validarea independentă",
    "idea": "Aproximativ 80% din tahicardiile cu QRS larg sunt TV. Algoritmii raportează 90–99% în cohortele proprii și 60–80% în mâinile altora: contează criteriile cu specificitate mare care rezistă la validare (scorul VT ≥3–4, Steurer, Basel).",
    "blocks": [
      {
        "list": [
          "Distribuție: **~80% TV, 15% TSV cu aberanță, 5% TSV pe cale accesorie**; conducere VA în până la 50% din TV, deci 1:1 nu exclude TV.",
          "**QRS >140 ms (BRD) / >160 ms (BRS):** nu se aplică în preexcitație sau sub clasa IC/IA. **Ax extrem** (−90° până la ±180°) → TV; TSV aberantă rămâne între −60° și +120°.",
          "**Concordanța negativă:** specificitate >90%, prezentă doar la ~20%. **Concordanța pozitivă** poate fi AVRT antidromică pe o cale stângă posterioară/laterală. **Capturile/fuziunile:** doar 4 din 33 de TV (Wellens 1978)."
        ]
      },
      {
        "table": {
          "head": [
            "Algoritm",
            "Pași",
            "Derivare",
            "Validare independentă"
          ],
          "rows": [
            [
              "**Brugada 1991**",
              "Absența RS în precordiale → RS >100 ms (debut R → nadir S) → disociație AV → morfologie TV în V1–V2 și V6",
              "Sensibilitate 98,7%, specificitate 96,5%",
              "Specificitate 59% (Jastrzębski 2012); cumulat 90% / **64%**"
            ],
            [
              "**Vereckei 2007**",
              "Disociație AV → R inițial în aVR → morfologie care nu e BR/bloc fascicular → vi/vt ≤1",
              "VPN TV 83,5%",
              "Cumulat 95% / 75%"
            ],
            [
              "**Vereckei aVR 2008**",
              "R inițial → r/q inițial >40 ms → crestătură pe panta descendentă a unui QRS negativ → vi/vt ≤1",
              "Mai bun decât Brugada",
              "Acuratețe 72%; cumulat 90% / **61%**"
            ],
            [
              "**Pava 2010**",
              "Timp de vârf R în DII ≥50 ms",
              "LR+ 34,8",
              "Sensibilitate 60% (2012); cumulat 78% / 88%"
            ],
            [
              "**Griffith 1994**",
              "TV dacă nu e BRS sau BRD tipic",
              "Sensibilitate 90–91%",
              "Specificitate **39,8%**"
            ],
            [
              "**Steurer 1994**",
              "QRS predominant negativ V4–V6 → QR în V2–V6 → relație AV ≠ 1:1",
              "Sensibilitate 75%, specificitate **100%**",
              "Neretestat"
            ],
            [
              "**Basel 2022**",
              "≥2 din 3: risc clinic înalt; primul vârf în DII >40 ms; în aVR >40 ms",
              "92% / 89%",
              "93% / 90%; la non-electrofiziologi 80% (Brugada 81%, aVR 72%); 36 s vs 105 s"
            ]
          ]
        }
      },
      {
        "h": "Scorul VT (Jastrzębski, _Europace_ 2016; 786 QRS larg)"
      },
      {
        "table": {
          "head": [
            "Criteriu",
            "Puncte"
          ],
          "rows": [
            [
              "Disociație AV",
              "**2**"
            ],
            [
              "R inițial în V1",
              "1"
            ],
            [
              "r inițial >40 ms în V1 sau V2",
              "1"
            ],
            [
              "S crestat în V1",
              "1"
            ],
            [
              "R inițial în aVR",
              "1"
            ],
            [
              "Timp de vârf R în DII ≥50 ms",
              "1"
            ],
            [
              "Absența RS în V1–V6",
              "1"
            ]
          ]
        }
      },
      {
        "p": "**≥1:** acuratețe 83%; **≥3:** prezent la 66% din TV, specificitate **99,6%**; **≥4:** specificitate **100%**. Meta-analiza Sun 2023 (14 studii, 3966 pacienți): sensibilitate 89%, specificitate **71%**, cu heterogenitate mare. [PMID 25995387](https://pubmed.ncbi.nlm.nih.gov/25995387/)"
      },
      {
        "h": "Morfologia (pasul 4 Brugada) și Kindwall",
        "list": [
          "**TV cu aspect de BRD:** V1 R monofazic, qR, R larg >40 ms sau „urechi de iepure” cu **urechea stângă mai înaltă**; V6 R/S <1.",
          "**TV cu aspect de BRS:** V1 R larg, panta S crestată, nadir S întârziat; V6 Q sau QS.",
          "**Kindwall 1988** (aspect BRS; oricare → TV, sensibilitate 100%, specificitate 89%): R în V1/V2 >30 ms; orice Q în V6; >60 ms până la nadirul S în V1/V2; S crestat în V1/V2 (= semnul Josephson).",
          "**BRD + HBAS:** TSV e favorizată de QRS >140 ms, r′ în V1, QRS negativ în aVR și R/S >1 în V6 — regula „mai larg = TV” se inversează.",
          "**Clinic (Garratt 1994):** zgomot I variabil — specificitate 100% pentru TV; unde „cannon” — sensibilitate 96%."
        ]
      },
      {
        "callout": {
          "title": "De verificat pe sursa primară",
          "text": [
            "Definiția exactă a „riscului clinic înalt” din algoritmul Basel; acuratețea numerică din Vereckei 2008.",
            "Mimicele: hiperkaliemia și intoxicația cu blocante de Na pot da fals TV prin criteriile aVR."
          ]
        }
      }
    ],
    "mols": [],
    "see": [
      "ecg-qrs-larg",
      "ecg-x-localizare"
    ]
  },

  {
    "id": "ecg-x-localizare",
    "grp": "ecg",
    "sec": "Nivel expert",
    "short": "Localizarea ESV/TV",
    "title": "Localizarea ESV și TV: tract de ejecție, inele, summit, Purkinje, epicard",
    "idea": "Axul inferior înseamnă bază (tract de ejecție), BRS înseamnă VD sau sept, BRD înseamnă VS. Tranziția în V3 e zona gri a tractului de ejecție: acolo decid indicele V2S/V3R și raportul de tranziție V2.",
    "blocks": [
      {
        "h": "Tractul de ejecție (BRS + ax inferior)",
        "list": [
          "Tranziție **≥V4 → RVOT**; **≤V2 → LVOT**; **V3 = zonă gri**.",
          "**Yoshida 2014** (207 pacienți): **S(V2)/R(V3) ≤1,5 → LVOT** (sensibilitate 89%, specificitate 94%, ASC 0,964).",
          "**Betensky 2011:** raport de tranziție V2 **≥0,60 → LVOT** (acuratețe 91%); o tranziție a ESV **mai tardivă decât cea sinusală exclude LVOT** (100%).",
          "**Ouyang 2002:** indicii de durată și amplitudine a R în V1/V2 sunt mai mari în cuspida aortică (~58%, 57%) decât în RVOT (~32%, 15%).",
          "Idiopatice, sensibile la adenozină și betablocant; exclude ARVC și sarcoidoza prin RMN."
        ]
      },
      {
        "h": "Alte situsuri",
        "list": [
          "**Inel tricuspidian** (8%, 74% septal): peretele liber are QRS mai larg, crestat, tranziție după V3; Q în V1 → septal.",
          "**Inel mitral** (5%): aspect BRD cu **S în V6 în toate cazurile**.",
          "**Summit-ul VS:** împărțit de vena cardiacă mare; predictori: aspect BRD, tranziția, R DIII/DII, Q aVL/aVR, S în V6 (Yamada 2010).",
          "**Banda moderatoare:** BRS, tranziție >V4, ax superior stâng, QRS ~153 ms; **7 din 10 pacienți s-au prezentat cu FV idiopatică**.",
          "**Purkinje:** declanșatorii FV idiopatice la 12 din 16 pacienți (Haïssaguerre 2002); QRS relativ îngust, cuplaj scurt.",
          "**TV fasciculară** (a doua ca frecvență după RVOT), sensibilă la verapamil; ESV fasciculară anterioară proximală: QRS ESV − QRS sinusal <15 ms."
        ]
      },
      {
        "h": "Origine epicardică vs endocardică"
      },
      {
        "table": {
          "head": [
            "Criteriu",
            "Prag",
            "Performanță",
            "Sursă"
          ],
          "rows": [
            [
              "Pseudo-delta",
              "≥34 ms",
              "Sensibilitate 83%, specificitate 95%",
              "Berruezo 2004 (TV VS cu aspect BRD)"
            ],
            [
              "Deflexiune intrinsecoidă V2",
              "≥85 ms",
              "87% / 90%",
              "Berruezo 2004"
            ],
            [
              "RS cel mai scurt",
              "≥121 ms",
              "76% / 85%",
              "Berruezo 2004"
            ],
            [
              "Indicele de deflexiune maximă (MDI)",
              "≥0,55",
              "100% / 98,7%",
              "Daniels 2006"
            ],
            [
              "Q în DI (CMP non-ischemică, bazal-superior/lateral)",
              "prezent",
              "88% / 88%",
              "Vallès 2010"
            ]
          ]
        }
      },
      {
        "p": "În cardiomiopatia non-ischemică doar **Q în DI** rămâne fiabil; algoritmul Vallès în patru pași (q inferior, pseudo-delta ≥75 ms, MDI ≥0,59, Q în DI) a avut acuratețe 90%."
      },
      {
        "h": "Cicatrice, reintrare în ramuri, cardiomiopatia indusă de ESV",
        "list": [
          "**TV post-infarct (Miller 1988):** localizarea infarctului, tipul de BR, cadranul axului și progresia R au localizat ieșirea la doar **48%**.",
          "**Reintrarea în ramuri (Blanck 1993):** boală His–Purkinje la toți, aspect BRS la 46 din 48; ablația ramului drept e curativă.",
          "**CMP indusă de ESV:** încărcătură **>24%** separă FEVS scăzută (Baman 2010; minim reversibil 10%); QRS-ESV **>150 ms** și originea epicardică sunt predictori independenți (Yokokawa 2012).",
          "**Definiții ESC 2022** (preluate secundar): TVNS ≥3 bătăi, <30 s; TV susținută ≥30 s sau care cere intervenție; furtună electrică ≥3 episoade în 24 h la ≥5 min distanță."
        ]
      },
      {
        "callout": {
          "title": "De verificat pe sursa primară",
          "text": [
            "Subtipurile fasciculare Nogami, criteriile mușchi papilar vs fascicular, para-Hisian, RCC/LCC și pragurile summit — tabelele consensului HRS/EHRA 2019 (Cronin).",
            "Pragurile ESC 2022 pentru încărcătura ESV (10% / 20%) — doar sursă secundară."
          ]
        }
      }
    ],
    "mols": [],
    "see": [
      "ecg-qrs-larg",
      "ecg-x-qrs-larg"
    ]
  },

  {
    "id": "ecg-x-omi",
    "grp": "ecg",
    "sec": "Nivel expert",
    "short": "Ocluzie coronariană: OMI",
    "title": "Ocluzia coronariană: formulele Smith, Wellens, de Winter și paradigma OMI",
    "idea": "Citirea „ocluzie / non-ocluzie” are sensibilitate dublă față de criteriile STEMI la specificitate similară. Forma contează cât milimetrii, iar unele praguri clasice (V7–V9, V4R, Sgarbossa, anevrism) încă așteaptă verificarea pe sursa primară.",
    "blocks": [
      {
        "h": "Formulele Smith: ocluzie LAD subtilă vs repolarizare precoce",
        "list": [
          "**4 variabile** (_J Electrocardiol_ 2017;50:561): **0,052 × QTc-B − 0,151 × QRS V2 − 0,268 × R V4 + 1,062 × ST60 V3** — prag **>18,2**: sensibilitate 88,8%, specificitate 94,7%, LR+ 16,9.",
          "**3 variabile:** 1,196 × ST60 V3 + 0,059 × QTc-B − 0,326 × R V4 — prag **≥23,4**: specificitate 90,6%, sensibilitate 86%.",
          "QTc-B = Bazett calculat de aparat (ms); QRS V2 = amplitudinea totală; R V4 și ST60 V3 în mm. Derivare: 143 ocluzii LAD subtile vs 171 variante normale, toate cu ≥1 mm STE în V2–V3.",
          "**Nu se aplică** dacă există: ST drept sau convex în V2–V6, subdenivelare inferioară (sumă) ≥1 mm, orice subdenivelare anterioară, unde Q, distorsiune terminală a QRS, STE >5 mm — acolo ECG-ul e deja diagnostic. [PMID 28460689](https://pubmed.ncbi.nlm.nih.gov/28460689/)"
        ]
      },
      {
        "h": "Wellens: reperfuzie; de Winter: ocluzie activă",
        "list": [
          "**de Zwaan 1982:** 26 din 145 (18%) cu angină instabilă aveau pattern-ul; toți cu stenoză critică LAD proximal; **12 din 16 (75%)** neoperați au făcut infarct anterior. Lista de criterii folosită azi vine din **Rhinehart 2002**. Tip A ~25%, tip B ~75%; în durere T se poate pseudonormaliza.",
          "**de Winter** (_NEJM_ 2008): subdenivelare ascendentă la J 1–3 mm în V1–V6, T înalte simetrice, fără supra precordială; supra 0,5–1 mm în aVR frecventă, **nu obligatorie**; 2% din ocluziile LAD (30/1532). Poate evolua spre STEMI; apare și în ocluzia de trunchi."
        ]
      },
      {
        "h": "Paradigma OMI",
        "list": [
          "**Meyers 2021** (n=808): criterii STEMI vs citire OMI — sensibilitate **41% vs 86%**, specificitate 94% vs 91%; OMI fără criterii STEMI au infarct și mortalitate similare, dar ajung mai târziu la coronarografie.",
          "**DIFOCCULT:** mortalitate intraspitalicească 5,0% la NSTEMI reclasificate OMI vs 8,3% STEMI vs 1,8% restul. **DIFOCCULT-3** (2026, 4398 pacienți fără STE diagnostic): strategie invazivă precoce 45,4% vs 13,6%; ocluzie identificată în ≤2 h 35,1% vs 16,7%.",
          "**AI „Queen of Hearts”:** sensibilitate ~83%, specificitate ~93% vs STEMI 34%/98% (date legate de producător).",
          "**ESC 2023** numește explicit STEMI posterior, ocluzia circumflexei/infarctul VD și de Winter. Nu există o definiție cantitativă validată pentru T hiperacute — semn calitativ.",
          "**Aslanger:** evidență slabă (serie de 9 din 30; vinovată adesea circumflexa)."
        ]
      },
      {
        "h": "Mimici",
        "list": [
          "**Takotsubo (Kosuge 2010):** subdenivelare aVR + lipsa supra în V1 → sensibilitate 91%, specificitate 96% la ≤6 h; **validarea externă 2015 a fost negativă**. Niciun criteriu ECG nu exclude ocluzia LAD.",
          "**Pericardita (ESC 2025):** sindromul inflamator miopericardic (IMPS); ECG descris calitativ, fără praguri.",
          "**Embolia pulmonară:** scorul Daniel (0–21, ≥10 = HTP severă) — structura e confirmată, ponderile itemilor nu."
        ]
      },
      {
        "callout": {
          "title": "De verificat pe sursa primară",
          "text": [
            "UDMI 2018: pragurile V7–V9 și V3R–V4R; criteriile infarctului VD (Zimetbaum 2003).",
            "Algoritmii de arteră vinovată: Zimetbaum & Josephson 2003, Fiol 2004, Engelen 1999 (aVR).",
            "Smith-Sgarbossa (ST/S ≤ −0,25) și BARCELONA: cifrele de performanță.",
            "Anevrismul VS: Smith 2005 (Σ T/QRS V1–V4 >0,22 → acut), Klein 2015 (≥0,36 în oricare derivație → acut).",
            "ESC 2023 aVR + subdenivelare în 6 sau 8 derivații; COVADIS pentru vasospasm; ponderile scorului Daniel."
          ]
        }
      }
    ],
    "mols": [],
    "see": [
      "ecg-st",
      "ecg-st-dd",
      "vas-mec"
    ]
  },

  {
    "id": "ecg-x-canal",
    "grp": "ecg",
    "sec": "Nivel expert",
    "short": "Canalopatii: ESC 2022 și scoruri",
    "title": "Canalopatiile: criteriile ESC 2022 și scorurile, cu versiunea lor",
    "idea": "Versiunea scorului schimbă diagnosticul: Schwartz 2011 vs tabelul modificat ESC 2022, Shanghai 2016 vs 2026. Fiecare tabel trebuie citit cu anul și documentul-sursă.",
    "blocks": [
      {
        "h": "Brugada: ESC 2022 decide, scorul Shanghai informează",
        "list": [
          "**I C:** tip 1 **spontan**, fără altă cardiopatie. **I C:** tip 1 indus (blocant de Na sau febră) la supraviețuitorii unui stop prin FV/TV polimorfă.",
          "**IIa C:** tip 1 indus + sincopă aritmică, respirație agonică nocturnă, istoric familial de Brugada sau moarte subită familială <45 ani cu autopsie negativă. Tipul 1 indus apare la **2–4% din sănătoși**.",
          "Test farmacologic: ajmalină 1 mg/kg în 10 min (max 100 mg, ESC), flecainidă 2 mg/kg IV (max 150 mg) sau 200–300 mg oral, procainamidă 10 mg/kg; nu e indicat dacă există deja tip 1 bazal. [ESC 2022](https://academic.oup.com/eurheartj/article/43/40/3997/6675633)"
        ]
      },
      {
        "table": {
          "head": [
            "Scorul Shanghai Brugada",
            "2016",
            "2026 (APHRS, modificat)"
          ],
          "rows": [
            [
              "ECG (obligatoriu ≥1; doar cel mai mare)",
              "Tip 1 spontan 3,5; febril 3; tip 2/3 convertit la provocare 2",
              "Tip 1 spontan 3,5; febril 3; tip 1 indus de blocant Na 2"
            ],
            [
              "Istoric clinic (cel mai mare)",
              "Stop inexplicabil sau FV/TVP 3; respirație agonică 2; sincopă suspect aritmică 2; sincopă neclară 1; FiA/flutter <30 ani 0,5",
              "La fel, fără itemul FiA"
            ],
            [
              "Istoric familial",
              "Brugada cert 2; moarte subită suspectă 1; moarte subită <45 ani cu autopsie negativă 0,5",
              "La fel"
            ],
            [
              "Genetic",
              "Mutație probabil patogenă 0,5",
              "Variantă P/LP în SCN5A 0,5"
            ],
            [
              "Interpretare",
              "**≥3,5 probabil/cert; 2–3 posibil; <2 nediagnostic**",
              "La fel (tipărit „>3,5”)"
            ]
          ]
        }
      },
      {
        "list": [
          "**Tip 2:** ST ≥0,5 mm, convex, T pozitiv în V2; **unghi β ≥58°** (sensibilitate 79%, specificitate 83%); baza triunghiului ≥4 mm la 5 mm sub r′ (cifrele de performanță sunt raportate contradictoriu).",
          "**Markeri de risc (2026):** fQRS (HR 20,2), disfuncție sinusală (9,1), sincopă (6,8), FV inductibilă (5,3), QRS >120 ms (4,7), tip 1 spontan (2,7); semnul aVR, S larg în DI, Tpeak–Tend lung, repolarizare precoce inferolaterală.",
          "**Fenocopie:** pattern Brugada-like + cauză identificabilă + dispariție după rezolvare + fără istoric familial + fără simptome + test cu blocant de Na negativ."
        ]
      },
      {
        "h": "LQTS: scorul modificat ESC 2022 (tabelul 10) vs Schwartz clasic"
      },
      {
        "table": {
          "head": [
            "Criteriu",
            "ESC 2022",
            "Schwartz 2011 clasic"
          ],
          "rows": [
            [
              "QTc ≥480 ms",
              "**3,5**",
              "3"
            ],
            [
              "QTc 460–479 ms",
              "2",
              "2"
            ],
            [
              "QTc 450–459 ms (bărbați)",
              "1",
              "1"
            ],
            [
              "QTc ≥480 ms în minutul 4 al recuperării",
              "1",
              "1"
            ],
            [
              "Torsadă a vârfurilor",
              "2",
              "2"
            ],
            [
              "Alternanță T",
              "1",
              "1"
            ],
            [
              "T crestat în 3 derivații",
              "1",
              "1"
            ],
            [
              "Frecvență mică pentru vârstă",
              "0,5",
              "0,5"
            ],
            [
              "Sincopă la stres / fără stres",
              "2 / 1",
              "2 / 1"
            ],
            [
              "Surditate congenitală",
              "**absentă**",
              "0,5"
            ],
            [
              "Rudă cu LQTS cert",
              "1",
              "1"
            ],
            [
              "Moarte subită <30 ani la rudă de gradul I",
              "0,5",
              "0,5"
            ],
            [
              "Mutație patogenă",
              "**3,5**",
              "absentă"
            ],
            [
              "Diagnostic",
              "**>3**",
              "≥3,5 probabilitate mare"
            ]
          ]
        }
      },
      {
        "list": [
          "**LQTS (ESC 2022):** QTc ≥480 ms pe ECG repetate sau scor >3 (I); mutație patogenă indiferent de QT (I); QTc 460–479 ms + sincopă aritmică (IIa).",
          "**SQTS (ESC 2022):** QTc ≤360 ms + mutație, istoric familial sau supraviețuire după TV/FV (I); QTc ≤320 ms (IIa); 320–360 ms + sincopă aritmică (IIa); 320–360 ms + moarte subită familială <40 ani (IIb).",
          "**Gollob 2011, itemii ECG:** QTc <370 ms 1p, <350 ms 2p, <330 ms 3p; J–Tpeak <120 ms 1p (scor contestat; itemii clinici doar din surse secundare)."
        ]
      },
      {
        "h": "Repolarizare precoce, CPVT, Andersen-Tawil",
        "list": [
          "**Pattern J (Macfarlane 2015):** J ≥0,1 mV în ≥2 derivații contigue, **excluzând V1–V3**, QRS <120 ms. Risc: J ≥2 mm, variație dinamică, ST orizontal/descendent. ERS = pattern + resuscitare după FV/TVP inexplicabilă.",
          "**Scorul Shanghai ERS:** stop/FV/TVP 3; sincopă aritmică 2; sincopă neclară 1; J ≥0,2 mV cu ST orizontal/descendent 2; variație dinamică a J 1,5; J ≥0,1 mV 1; ESV cu cuplaj scurt 2; rudă cu ERS 2; ≥2 rude cu pattern 2; o rudă 1; moarte subită <45 ani 0,5; genetic 0,5 (eliminat în 2026). **≥5 probabil/cert; 3–4,5 posibil; <3 nediagnostic.**",
          "**CPVT (I):** cord normal, ECG de repaus normal, TV bidirecțională sau polimorfă la efort/emoție, sau mutație. **Andersen-Tawil (IIa):** ≥2 din U proeminent, ESV/TV bidirecționale, dismorfism, paralizie periodică, mutație KCNJ2."
        ]
      },
      {
        "callout": {
          "title": "De verificat pe sursa primară",
          "text": [
            "Morfologiile T Moss/Zhang pe genotip; pragurile AHA pentru QT (≥450/≥460 ms, ≤390 ms) și formulele de corecție.",
            "Indicele Corrado (STJ/ST80) și semnul aVR (R ≥3 mm sau R/q ≥0,75)."
          ]
        }
      }
    ],
    "mols": [
      "SCN5A",
      "KCNQ1",
      "KCNH2",
      "KCNJ2",
      "RYR2",
      "CASQ2",
      "CACNA1C"
    ],
    "see": [
      "ecg-speciale",
      "ecg-qt",
      "aritmii"
    ]
  },

  {
    "id": "ecg-x-cmp",
    "grp": "ecg",
    "sec": "Nivel expert",
    "short": "Cardiomiopatii, HVS, electroliți, sportiv",
    "title": "Cardiomiopatii, hipertrofie, electroliți și ECG-ul sportivului: criteriile verificate",
    "idea": "ECG-ul cardiomiopatiilor e mai util ca „steag roșu” etiologic decât ca diagnostic: PR scurt cu HVS, voltaj mic cu perete gros, BAV la tânăr, epsilon. Criteriile de HVS sunt specifice și puțin sensibile.",
    "blocks": [
      {
        "h": "ARVC: Padova 2020",
        "list": [
          "**Repolarizare VD, major:** T negative V1–V3 (sau dincolo) la dezvoltare pubertară completă, fără BRD complet. **Minor:** T negative V1–V2; T negative V1–V4 cu BRD complet.",
          "**Repolarizare VS, minor:** T negative V4–V6 fără BRS complet.",
          "**Depolarizare — toate minore:** undă epsilon (retrogradată), TAD ≥55 ms în V1–V3 fără BRD, **voltaj <0,5 mV în toate derivațiile membrelor** (criteriu VS). SAECG eliminat.",
          "**Aritmii:** >500 ESV/24 h sau TVNS/TV cu aspect de BRS = **VD major** (minor doar cu ax inferior); aritmii cu aspect BRD (nefasciculare) = VS minor. [Graziano 2022](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8746198/)"
        ]
      },
      {
        "h": "Steaguri roșii ECG (ESC 2023, tabelul 7)"
      },
      {
        "table": {
          "head": [
            "Fenotip",
            "Semn ECG",
            "Gândește la"
          ],
          "rows": [
            [
              "CMH",
              "PR scurt / preexcitație",
              "Glicogenoze, Danon, PRKAG2, Fabry, boală mitocondrială"
            ],
            [
              "CMH",
              "BAV",
              "Amiloidoză, Fabry tardiv, Danon, sarcoidoză, PRKAG2"
            ],
            [
              "CMH",
              "HVS extremă",
              "Danon, Pompe, PRKAG2"
            ],
            [
              "CMH",
              "Voltaj mic",
              "Amiloidoză, Friedreich"
            ],
            [
              "CMH",
              "Ax nord-vest",
              "Noonan"
            ],
            [
              "CMH",
              "Pseudo-infarct",
              "Amiloidoză"
            ],
            [
              "CMD",
              "BAV",
              "Laminopatie, Emery-Dreifuss 1, miocardită (Chagas, Lyme, difterie), sarcoidoză, desminopatie, distrofie miotonică"
            ],
            [
              "CMD",
              "P mică / standstill atrial",
              "Emery-Dreifuss"
            ],
            [
              "CMD",
              "Pattern de infarct posterolateral",
              "Distrofinopatii, centura membrelor, sarcoidoză"
            ],
            [
              "CMD",
              "QRS extrem de mic",
              "PLN"
            ],
            [
              "NDLVC",
              "BAV; voltaj mic + BRD atipic",
              "Laminopatie, desminopatie; variante desmozomale"
            ]
          ]
        }
      },
      {
        "p": "Voltajul mic contează doar în absența obezității, revărsatului, BPOC. **Fabry:** PQ scurt la tineri, BAV la adulți, bradicardie, incompetență cronotropă, HVS. **Laminopatii:** PR lung, FiA, ESV, voltaj precordial mic. [ESC 2023](https://academic.oup.com/eurheartj/article/44/37/3503/7246608)"
      },
      {
        "h": "Hipertrofie",
        "list": [
          "**Sokolow-Lyon** SV1 + RV5/V6 ≥35 mm; **Cornell** RaVL + SV3 >28 mm (B) / >20 mm (F).",
          "**Peguero-Lo Presti** S cea mai adâncă + SV4 ≥28 mm (B) / ≥23 mm (F): sensibilitate 62% vs Cornell 35% în studiul original, **43–52% în meta-analize**, specificitate ~90%; fără avantaj pe RMN; ESH 2023 folosește criteriile tradiționale."
        ]
      },
      {
        "h": "Electroliți și toxice",
        "list": [
          "**Hiperkaliemie (Montague 2008, K ≥6):** sensibilitatea ECG 34–43% (55–62% la K >6,5); T ascuțite **18%**; corelația T–K nesemnificativă. QRS larg, bradicardia <50/min și ritmul joncțional au prezis evenimentele, T ascuțite nu.",
          "**Triciclice (Liebelt 1995):** R terminal aVR ≥3 mm (sensibilitate 81%, VPP 43%); R/S aVR ≥0,7 (75%, 46%); QRS >100 ms (82%, 35%).",
          "Torsada: magneziu IV „even in the absence of hypomagnesaemia” (ESC 2022)."
        ]
      },
      {
        "h": "ECG-ul sportivului",
        "list": [
          "**Anormal (2017):** Q/R ≥0,25 sau ≥40 ms în ≥2 derivații (fără DIII, aVR); subdenivelare ST ≥0,5 mm; BRS; QRS ≥140 ms; epsilon; preexcitație; QTc ≥470 (B) / ≥480 ms (F); Brugada tip 1; bradicardie <30/min sau pauze ≥3 s; PR ≥400 ms; Mobitz II; BAV III; T negative ≥1 mm în ≥2 derivații contigue (fără DIII, aVR, V1).",
          "**Borderline:** ax stâng −30° până la −90°, anomalie atrială, BRD complet; **≥2 = anormal**.",
          "**IC25** (summit Seattle 2025, raport ACC oct. 2026, **provizoriu**): T negative V1–V3 la femei ≥16 ani „pot necesita evaluare”; orice T negativ lateral semnalat; „athlete anterior early repolarization pattern” (0,76%); ESV cu cuplaj ≤350 ms sau ax neinferior = roșii. [ACC 2026](https://www.acc.org/latest-in-cardiology/articles/2026/10/29/11/45/2026-international-criteria-for-ecg-interpretation-in-athletes)"
        ]
      },
      {
        "callout": {
          "title": "De verificat pe sursa primară",
          "text": [
            "Romhilt-Estes, produsul Cornell, criteriile HVD și HVS în BRS (AHA 2009 partea V).",
            "CMH apicală (T negative ≥10 mm) și o definiție de consens pentru discordanța voltaj–masă în amiloidoză.",
            "Chagas: asocierea clasică BRD + HBAS nu a fost reconfirmată în sursele acestei revizii (ESC 2023 o listează doar cu BAV)."
          ]
        }
      }
    ],
    "mols": [
      "PKP2",
      "DSP",
      "LMNA",
      "GLA",
      "LAMP2",
      "PRKAG2",
      "TTR",
      "EMD"
    ],
    "see": [
      "ecg-speciale",
      "ecg-context",
      "cm-mec"
    ]
  },

  {
    "id": "ecg-x-pacing",
    "grp": "ecg",
    "sec": "Nivel expert",
    "short": "Conducere, sincopă, CSP",
    "title": "Conducere, sincopă și stimularea sistemului de conducere: criteriile numerice",
    "idea": "Stimularea sistemului de conducere are acum criterii ECG precise: timpul de vârf R în V6 clasifică adâncimea stimulării, iar intervalul V6–V1 confirmă captura de ram stâng.",
    "blocks": [
      {
        "h": "Indicații ECG (ESC 2021, ACC/AHA/HRS 2018)",
        "list": [
          "**Incompetență cronotropă:** <80% din rezerva de frecvență [(220 − vârstă) − FC de repaus].",
          "**Mobitz II, 2:1, BAV avansat, BAV III fără cauză reversibilă:** pacemaker și fără simptome; 2:1 incidental — caz cu caz; Mobitz I infranodal — pacing; **BAV paroxistic = BAV permanent**.",
          "**Bloc de ram alternant:** „as soon as … detected, even in the absence of symptoms” — singura excepție de la „BR asimptomatic nu se stimulează”.",
          "**HV ≥70 ms** la SEF = pozitiv; progresia BAV la 4 ani: 4% (HV <70), 12% (70–100), 24% (>100 ms).",
          "**ILR:** asistolie semnificativă = >3 s simptomatic sau >6 s asimptomatic; tilt cu asistolie >3 s la >40 ani → clasa I.",
          "**CRT:** majoritatea cu QRS ≥130 ms; BRS beneficiază indiferent de durată, non-BRS mai ales la ≥150 ms. Stimularea VD >20%: risc de IC indusă de pacing.",
          "**ACC/AHA/HRS 2018:** bradicardie = <50/min; în disfuncția sinusală nu există o frecvență sau pauză care să impună stimularea. [ESC 2021](https://academic.oup.com/eurheartj/article/42/35/3427/6358547)"
        ]
      },
      {
        "h": "Sincopa: ECG de risc (ESC 2018)",
        "list": [
          "**Risc înalt major:** Mobitz II, BAV II/III; bradicardie sinusală persistentă <40/min; bloc SA repetitiv sau pauze >3 s în veghe, în afara antrenamentului.",
          "**ECG sugestiv de sincopă aritmică (tabelul 5):** bloc bifascicular; QRS ≥0,12 s; Mobitz I sau BAV I cu PR foarte lung; bradicardie sinusală sau FiA lentă 40–50/min; TVNS; preexcitație; QT lung sau scurt; repolarizare precoce; Brugada tip 1; T negative drepte sau epsilon (ARVC); HVS sugestivă de CMH. La sincopă inexplicabilă cu bloc bifascicular: SEF. [ESC 2018](https://academic.oup.com/eurheartj/article/39/21/1883/4939241)"
        ]
      },
      {
        "h": "Stimularea sistemului de conducere (EHRA 2023)"
      },
      {
        "table": {
          "head": [
            "Situație",
            "Criteriu"
          ],
          "rows": [
            [
              "His selectiv",
              "Interval izoelectric stimul–QRS în toate cele 12 derivații (≈HV)"
            ],
            [
              "His neselectiv",
              "Pseudo-delta; acceptat fără crestături în DI, V1, V4–V6 și V6 RWPT **<100 ms**; respins dacă aspect BRS cu stimul–V6 RWPT **>110 ms**"
            ],
            [
              "Captură hisiană",
              "Diferența de latență V6 RWPT (potențial His vs stimul) **<12 ms** (acuratețe 96,7%)"
            ],
            [
              "Captura ramului stâng",
              "V6 RWPT **<75 ms** (QRS nativ îngust/BRD; <74 ms: specificitate 100%) sau **<80 ms** (BRS, IVCD, scăpare largă); V6–V1 **>44 ms** (specificitate 100%), optim **>33 ms** (72% / 90%)"
            ],
            [
              "Pierderea capturii LBB",
              "Creștere V6 RWPT **≥15 ms** (83% / 100%); >10 ms e în variabilitatea dintre observatori"
            ],
            [
              "Potențial–V6 vs stimul–V6",
              "Diferență <10 ms: 88% / 95%"
            ],
            [
              "Adâncimea (V6 RWPT)",
              "Septal VD >120 ms; septal profund 95–120; septal VS 80–95; ram stâng <80 ms"
            ],
            [
              "Ram stâng vs fascicular",
              "Potențial LBB–QRS ≈25–34 ms cu ax normal vs <25 ms, adesea cu ax anormal"
            ],
            [
              "Tranziția neselectiv → selectiv",
              "V1 qR → rSR′ cu R′ rotunjit, S adâncit în DI/V6, **V6 RWPT neschimbat**"
            ]
          ]
        }
      },
      {
        "p": "V6–V1 (Jastrzębski 2022): 62 ms la captura selectivă, 41 ms neselectivă, 27 ms septal VS. **qR/rSR′ în V1 e necesar, dar nu suficient** — și stimularea septală VS are R terminal în V1. [Burri, Europace 2023](https://academic.oup.com/europace/article/25/4/1208/7071606)"
      },
      {
        "h": "CRT, temporizări, magnet",
        "list": [
          "**Ammann (54 de pacienți cu BRS):** R/S >1 în V1 → captură VS; altfel se citește DI. Sensibilitate 94%, specificitate 93%; validat doar cu sondă VD apicală și BRS. Algoritmul în doi pași (îngustarea QRS în membre + negativitate în DI): 94% / 96%.",
          "**PVARP** = conducerea VA + 50–75 ms (previne tahicardia mediată de pacemaker). Stimularea de siguranță ventriculară: AV scurt 70–110 ms.",
          "**Magnet:** Medtronic 85/min (65/min la ERI); Boston Scientific 100/min; Biotronik 90/min (80/min la ERI). La DAI, magnetul suspendă terapiile.",
          "**Bloc fascicular septal stâng:** forțe anterioare proeminente, QRS <120 ms, caracter tranzitoriu; criteriile **nu sunt standardizate**."
        ]
      },
      {
        "callout": {
          "title": "De verificat pe sursa primară",
          "text": [
            "Codul NBG, Wenckebach-ul de pacemaker și punctul 2:1 (TARP), sincronia VA repetitivă, captura anodală — Barold & Herweg.",
            "Criteriile AHA 2009 pentru BRS/BRD/hemiblocuri și criteriile Strauss — nereverificate în această revizie.",
            "Ghidul HRS 2023 de stimulare fiziologică; clasa recomandării pentru blocul de ram alternant."
          ]
        }
      }
    ],
    "mols": [],
    "see": [
      "ecg-pacing",
      "ecg-pr",
      "nodal"
    ]
  },

  {
    "id": "ecg-x-curriculum",
    "grp": "ecg",
    "sec": "Nivel expert",
    "short": "Lista de control (ABIM, EHRA)",
    "title": "Ce trebuie să știi: lista de control din ABIM, COCATS, ESC și EHRA",
    "idea": "Atlasul acoperă tot ce cer foaia de coduri ABIM, COCATS 4, curriculumul ESC 2020 și EHRA 2024, plus competențele de electrofiziolog din blueprint-ul ABIM CCEP 2026.",
    "blocks": [
      {
        "h": "Foaia ECG ABIM CVD (mai 2026)",
        "p": "9 secțiuni, ~90 de opțiuni (87 de căsuțe + grila de infarct pe 5 teritorii × acut/vechi): trăsături generale și unda P; ritmuri; conducere AV; voltaj, ax, hipertrofie; conducere intraventriculară; infarct; ST-T-U; tulburări clinice; pacemaker. O selecție contradictorie (sinusal + FiA) anulează punctul; un infarct codat pe „Q”-urile care sunt de fapt unde delta pierde punctul WPW. [ABIM](https://www.abim.org/media/uq5auwyn/cvd-sample-cases.pdf)"
      },
      {
        "h": "Electrofiziologie (ABIM CCEP 2026)",
        "list": [
          "Flutter atipic drept și stâng; AVNRT tipică și atipică; AVRT antidromică; căi fasciculo-ventriculare și căi multiple.",
          "Localizarea ESV/TV; interpretarea QRS larg; TV polimorfă dependentă de bradicardie, indusă medicamentos sau ischemică.",
          "QT scurt, sindromul de repolarizare precoce; leadless, S-ICD, CRT, ILR; recunoașterea artefactelor."
        ]
      },
      {
        "h": "COCATS 4, ESC 2020, EHRA 2024",
        "list": [
          "**COCATS 4 (Task Force 3):** 3000–3500 de ECG în 36 de luni, 100–200 de Holtere; anexa 4 cere și TA cu bloc, AVNRT „common and uncommon”, disociație izoritmică, BAV de grad înalt, flutter ventricular, DSA secundum și primum, stenoză mitrală, mixedem, efect vs toxicitate digitalică; anexa 3: conducere ascunsă, supranormalitate, parasistolie modulată.",
          "**ESC 2020:** FiA preexcitată; QRS larg; TV benignă (tract de ejecție, fasciculară) vs periculoasă; canalopatii și testul cu ajmalină; ritmuri de pacemaker; ECG în stopul cardiac și după chirurgia cardiacă; inima de atlet; limitele dispozitivelor de consum.",
          "**EHRA 2024:** stimularea sistemului de conducere, leadless, S-ICD/EV-ICD; SAECG; teste farmacologice; Andersen-Tawil, FV idiopatică, sarcoidoză, Chagas. [EHRA 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11528301)"
        ]
      },
      {
        "h": "Rezultatele critice",
        "p": "Nu există o listă de consens a unei societăți. Exemplu documentat (Universitatea din Toledo, 2025): **critic ≤5 min** — STE nouă ≥1 mm în 2 derivații contigue, subdenivelare nouă ≥2 mm, FC <30, TV susținută sau TdP; **Holter ≤1 h** — QRS îngust >150/min >30 s, pauze >3 s, BAV II/III, defect de pacemaker, QRS larg ≥200/min ≥4 bătăi sau ≥160/min ≥20 bătăi; **serios ≤2 h** — FiA/flutter nou, TSV susținută, BAV II de grad înalt. Includerea FiA preexcitate, a hiperkaliemiei, a Brugada tip 1 și a QTc marcat lung e recomandare de expert."
      },
      {
        "p": "Pattern-urile OMI și AI-ECG nu apar încă în niciun curriculum: intră în atlas ca stare a cunoașterii, nu ca cerință."
      }
    ],
    "mols": [],
    "see": [
      "ecg-critic",
      "ecg-metoda"
    ]
  }
);
