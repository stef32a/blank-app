/* Fiecare moleculă:
   c  = compartiment (cheie din HC.COMPS)      k  = tip (cheie din HC.KINDS, dă culoarea)
   g  = simbolul genei (unic; din el se face adresa #/gena/...)
   p  = proteina / curentul                     f  = ce face
   d  = boli                                    t  = țintă terapeutică (opțional)
   fp = „Când se strică”: pașii fiziopatologici (opțional, listă de paragrafe)
   tg = etichete de boală (chei din HC.TAGS)
   Textul acceptă **bold**; simbolurile de gene cunoscute devin automat legături. */
var HC = window.HC = window.HC || {};
HC.MOLS = HC.MOLS || [];
HC.MOLS.push(
  // ---------- SARCOLEMA ȘI CANALELE IONICE (19) ----------
  { c:"sarcolema", k:"canal", g:"SCN5A", p:"Nav1.5 · curentul INa",
    f:"Canalul de sodiu cardiac: faza 0 a potențialului de acțiune și viteza de conducere.",
    d:"Pierdere de funcție: Brugada (~20 % din cazuri), boală de conducere progresivă (Lenègre), boală de nod sinusal. Câștig de funcție (curent tardiv): LQT3, evenimente în somn. Și CMD, FA, sindroame de suprapunere.",
    t:"Mexiletin, ranolazină în LQT3; flecainida și blocantele de Na⁺ sunt de evitat în Brugada (le demască).",
    fp:[
      "**Pierdere de funcție** → intră mai puțin Na⁺ în faza 0 → depolarizare mai lentă → conducere lentă (PR și QRS lungi, blocuri). În epicardul VD, unde Ito e mare, curentul de intrare nu mai ține piept → domul platoului dispare în unele zone → supradenivelare ST „coved” și reintrare de fază 2 → FV (Brugada). Febra și blocantele de Na⁺ scad și mai mult INa → demască boala.",
      "**Câștig de funcție** → canalul nu se inactivează complet → un INa tardiv continuă în platou → PA și QT lungi → EAD → torsadă, mai ales la frecvență mică (somn), când platoul e oricum mai lung (LQT3). Mexiletinul blochează tocmai acest curent tardiv.",
      "Pe termen lung, conducerea lentă și dezechilibrul de Na⁺ pot remodela miocardul → CMD cu aritmii (rar)."
    ],
    tg:["brugada","lqt","cond","cmd","fa"] },
  { c:"sarcolema", k:"canal", g:"SCN1B–SCN4B", p:"Subunitățile β ale canalului de Na⁺",
    f:"Modulează deschiderea și localizarea Nav1.5.",
    d:"Brugada și boală de conducere (rar), LQT10 (SCN4B), FA.",
    fp:[
      "Subunitatea β defectă → Nav1.5 ajunge mai puțin la membrană sau se deschide anormal → același efect ca SCN5A, mai slab: mai puțin INa (Brugada, conducere lentă) sau INa tardiv (LQT10)."
    ],
    tg:["brugada","cond","lqt","fa"] },
  { c:"sarcolema", k:"canal", g:"CACNA1C", p:"Cav1.2 · curentul ICa,L",
    f:"Canalul de calciu de tip L: platoul (faza 2) și declanșatorul cuplajului excitație-contracție, mai ales în tubul T.",
    d:"Câștig de funcție: sindromul Timothy (LQT8: QT foarte lung, bloc 2:1, sindactilie, autism). Pierdere de funcție: Brugada cu QT scurt.",
    t:"Verapamil, diltiazem pe cord; dihidropiridinele acționează pe varianta vasculară.",
    fp:[
      "**Câștig de funcție (Timothy)** → Cav1.2 nu se mai inactivează → Ca²⁺ intră tot platoul → PA foarte lung → QT extrem, bloc AV 2:1 funcțional (ventriculul e încă refractar când sosește următoarea undă P), EAD. Canalul există și în alte țesuturi → sindactilie, autism.",
      "**Pierdere de funcție** → mai puțin curent de intrare → platou scurt → QT scurt; în epicardul VD Ito domină → Brugada."
    ],
    tg:["lqt","brugada","sqt"] },
  { c:"sarcolema", k:"canal", g:"CACNB2, CACNA2D1", p:"Subunitățile β2 și α2δ1 ale Cav1.2",
    f:"Reglează amplitudinea curentului de calciu.",
    d:"Brugada asociat cu QT scurt.",
    fp:[
      "Subunitățile ajută Cav1.2 să ajungă la membrană și să se deschidă normal → defectul lor înseamnă mai puțin ICa,L → același fenotip ca pierderea de funcție CACNA1C: Brugada cu QT scurt."
    ],
    tg:["brugada","sqt"] },
  { c:"sarcolema", k:"canal", g:"KCNQ1", p:"Kv7.1 · curentul IKs",
    f:"Repolarizarea lentă; crește sub adrenalină ca să scurteze QT la frecvențe mari.",
    d:"Pierdere de funcție: LQT1 (evenimente la efort, tipic înot; undă T largă). Recesiv: Jervell-Lange-Nielsen cu surditate congenitală. Câștig de funcție: QT scurt tip 2, FA familială.",
    t:"Betablocante neselective (nadolol, propranolol): cel mai bun răspuns dintre tipurile de QT lung.",
    fp:[
      "**Pierdere de funcție** → IKs mic → repolarizarea depinde doar de IKr → QT lung. Normal, adrenalina crește IKs ca să scurteze PA la efort; fără el, PA nu se scurtează, iar Cav1.2 stimulat de adrenalină se redeschide → EAD → torsadă la efort, mai ales la înot (LQT1). Betablocantul taie exact declanșatorul.",
      "**Ambele alele afectate** (Jervell-Lange-Nielsen) → IKs absent și în urechea internă, unde secretă K⁺ în endolimfă → surditate congenitală + QT foarte lung.",
      "**Câștig de funcție** → K⁺ iese prea devreme → PA scurt în atrii și ventriculi → perioadă refractară scurtă → reintrare ușoară → FA familială, QT scurt."
    ],
    tg:["lqt","sqt","fa"] },
  { c:"sarcolema", k:"canal", g:"KCNE1", p:"minK · subunitate a IKs",
    f:"Partenerul lui Kv7.1, necesar pentru IKs normal.",
    d:"LQT5; Jervell-Lange-Nielsen tip 2 (recesiv, cu surditate).",
    fp:[
      "minK face canalul Kv7.1 lent și mare; fără el IKs e mic → același mecanism ca LQT1, de obicei mai blând (LQT5); recesiv → Jervell-Lange-Nielsen cu surditate."
    ],
    tg:["lqt"] },
  { c:"sarcolema", k:"canal", g:"KCNH2", p:"hERG, Kv11.1 · curentul IKr",
    f:"Repolarizarea rapidă. Ținta aproape a tuturor medicamentelor care prelungesc QT (antiaritmice, macrolide, antipsihotice).",
    d:"Pierdere de funcție: LQT2 (zgomot brusc, emoție, postpartum; undă T bifidă). Câștig de funcție: QT scurt tip 1.",
    t:"QT lung medicamentos = blocarea hERG; evită asocierile, corectează K⁺ și Mg²⁺.",
    fp:[
      "**Pierdere de funcție** → IKr mic → faza 3 întârziată → QT lung, undă T crestată sau bifidă. Un stimul adrenergic brusc (zgomot, alarmă, trezire) scurtează ciclul și declanșează EAD → torsadă (LQT2). Riscul crește postpartum.",
      "**QT lung medicamentos**: cavitatea canalului hERG e largă și hidrofobă → leagă multe medicamente → același mecanism, dobândit; amplificat de hipokaliemie (IKr depinde de K⁺ extracelular) și bradicardie.",
      "**Câștig de funcție** (canalul nu se mai inactivează) → IKr mare încă din platou → PA scurt → QT scurt tip 1 → FA, FV."
    ],
    tg:["lqt","sqt"] },
  { c:"sarcolema", k:"canal", g:"KCNE2", p:"MiRP1 · subunitate a IKr",
    f:"Modulează canalul hERG.",
    d:"LQT6; susceptibilitate la QT lung medicamentos.",
    fp:[
      "Variantele scad IKr puțin → QT normal în repaus, dar rezerva de repolarizare e mai mică → la un medicament anti-hERG sau la hipokaliemie QT se lungește excesiv."
    ],
    tg:["lqt"] },
  { c:"sarcolema", k:"canal", g:"KCNJ2", p:"Kir2.1 · curentul IK1",
    f:"Menține potențialul de repaus și încheie faza 3.",
    d:"Pierdere de funcție: sindromul Andersen-Tawil (LQT7): paralizie periodică, dismorfie, unde U mari, TV bidirecțională. Câștig de funcție: QT scurt tip 3.",
    fp:[
      "**Pierdere de funcție** → IK1 mic → ultima parte a fazei 3 e lentă (unde U mari, QT-U lung) și repausul e mai puțin stabil → extrasistole și TV bidirecțională. Kir2.1 există și în mușchiul scheletic → paralizie periodică; și în dezvoltarea osoasă → dismorfie (Andersen-Tawil).",
      "**Câștig de funcție** → IK1 mare → faza 3 terminală grăbită → QT scurt tip 3, unde T înalte și asimetrice."
    ],
    tg:["lqt","sqt","cpvt"] },
  { c:"sarcolema", k:"canal", g:"KCND3", p:"Kv4.3 · curentul Ito",
    f:"Faza 1, crestătura potențialului de acțiune, mai mare în epicardul VD.",
    d:"Câștig de funcție: Brugada, repolarizare precoce.",
    t:"Chinidina blochează Ito: folosită în furtuna electrică din Brugada și în QT scurt.",
    fp:[
      "**Câștig de funcție** → Ito mai mare → crestătura fazei 1 se adâncește în epicard → dacă Ito depășește curenții de intrare, epicardul pierde domul → gradient endo-epicardic → supradenivelare ST (Brugada, V1-V2) sau undă J (repolarizare precoce, inferolateral) → reintrare de fază 2 → FV.",
      "Vagul, febra și blocantele de Na⁺ înclină și mai mult balanța spre Ito → de aceea evenimentele apar în somn, cu febră, sub flecainidă. Chinidina blochează Ito → readuce echilibrul."
    ],
    tg:["brugada","erivf"] },
  { c:"sarcolema", k:"canal", g:"KCNJ8, ABCC9", p:"Canalul KATP (Kir6.1, SUR2)",
    f:"Se deschide când scade ATP-ul și scurtează potențialul de acțiune (protecție în ischemie).",
    d:"Sindrom de repolarizare precoce, FV idiopatică; ABCC9 și sindromul Cantú, CMD.",
    fp:[
      "**Câștig de funcție** → canalul KATP se deschide prea ușor (normal se deschide doar când ATP scade) → curent de ieșire de K⁺ în fazele 1-2, mai ales în epicardul inferior → undă J, punct J supradenivelat → reintrare de fază 2 → FV. Aceeași logică cu ischemia, care deschide KATP și ridică ST.",
      "ABCC9 câștig de funcție (Cantú) → KATP vascular deschis → vasodilatație, cardiomegalie cu debit crescut; pierdere de funcție → CMD prin stres energetic."
    ],
    tg:["erivf","cmd"] },
  { c:"sarcolema", k:"canal", g:"HCN4", p:"Canalul HCN4 · curentul If („funny”)",
    f:"Depolarizarea diastolică lentă a nodului sinusal: automatismul.",
    d:"Bradicardie sinusală familială, boală de nod sinusal, necompactare VG asociată.",
    t:"Ivabradina blochează If: scade frecvența fără efect inotrop.",
    fp:[
      "**Pierdere de funcție** → If mic → panta depolarizării diastolice din nodul sinusal scade → bradicardie sinusală, incompetență cronotropă. HCN4 participă și la dezvoltarea miocardului → asociere cu necompactare VG în unele familii."
    ],
    tg:["cond","lvnc","ic"] },
  { c:"sarcolema", k:"canal", g:"KCNA5", p:"Kv1.5 · curentul IKur",
    f:"Curent de repolarizare prezent doar în atrii.",
    d:"FA familială.",
    t:"Vernakalantul blochează curenți atriali (IKur, Ito) și INa.",
    fp:[
      "IKur există doar în atrii. Pierderea lui prelungește PA atrial → EAD atriale; câștigul îl scurtează → refractar scurt → reintrare. Ambele duc la FA la tineri."
    ],
    tg:["fa"] },
  { c:"sarcolema", k:"canal", g:"TRPM4", p:"Canal cationic activat de Ca²⁺",
    f:"Modulează conducerea în sistemul His-Purkinje.",
    d:"Boală de conducere progresivă familială, Brugada (rar).",
    fp:[
      "**Câștig de funcție** (canalul nu e degradat normal) → curent de intrare în celulele Purkinje → repaus mai puțin negativ → o parte din Nav1.5 inactivate → conducere lentă → bloc de ramură, BAV progresiv."
    ],
    tg:["cond","brugada"] },
  { c:"sarcolema", k:"canal", g:"SLC8A1", p:"NCX1 · schimbătorul Na⁺/Ca²⁺",
    f:"Scoate Ca²⁺ din celulă în schimbul a 3 Na⁺; curentul lui de intrare produce postdepolarizările tardive.",
    d:"Nicio boală monogenică clară; mecanism central al aritmiilor din IC și din intoxicația digitalică.",
    fp:[
      "Când reticulul eliberează Ca²⁺ spontan în diastolă, NCX îl scoate afară și aduce 3 Na⁺ pentru fiecare Ca²⁺ → curent net de intrare → postdepolarizare tardivă (DAD) → dacă atinge pragul, extrasistolă.",
      "În IC, NCX e crescut și SERCA2a scăzută → mai mult Ca²⁺ părăsește celula în loc să revină în reticul → contracție slabă + DAD.",
      "Digoxina: Na⁺ intracelular crește → NCX scoate mai puțin Ca²⁺ → reticulul se încarcă → inotropie, iar în exces DAD (TV bidirecțională, ritm joncțional accelerat)."
    ],
    tg:["cpvt"] },
  { c:"sarcolema", k:"canal", g:"ATP1A1, ATP1A2", p:"Na⁺/K⁺-ATPaza",
    f:"Menține gradientele de Na⁺ și K⁺ (3 Na⁺ afară, 2 K⁺ înăuntru).",
    d:"Ținta digoxinei: blocarea ei crește Na⁺ intracelular, apoi Ca²⁺ prin NCX (inotropie și aritmii).",
    t:"Digoxină.",
    fp:[
      "Pompa blocată (digoxină) sau încetinită (ischemie, lipsă de ATP) → Na⁺ se acumulează în celulă → NCX nu mai scoate Ca²⁺ → supraîncărcare cu Ca²⁺ → inotropie, apoi DAD. K⁺ nu mai e adus în celule → hiperkaliemia din intoxicația digitalică."
    ],
    tg:["ic"] },
  { c:"sarcolema", k:"canal", g:"ANK2", p:"Ankirina-B",
    f:"Ancorează NCX, Na⁺/K⁺-ATPaza și receptorul IP3 în membrană.",
    d:"Sindromul ankirinei-B (LQT4): bradicardie sinusală, FA, QT variabil, moarte subită.",
    fp:[
      "Ankirina-B ține NCX, pompa Na⁺/K⁺ și receptorul IP3 la locul lor în tubul T; fără ea pompele se împrăștie → Na⁺ și Ca²⁺ intracelular cresc → DAD, bradicardie sinusală (nodul folosește aceeași mașinărie), FA. QT poate fi normal: de aceea se numește acum „sindromul ankirinei-B”, nu LQT4."
    ],
    tg:["lqt","cond"] },
  { c:"sarcolema", k:"canal", g:"CAV3, AKAP9, SNTA1", p:"Caveolina-3, yotiao, α1-sintrofina",
    f:"Proteine de schelă care țin canalele în locul și starea corectă.",
    d:"LQT9 (CAV3: curent de Na⁺ tardiv), LQT11 (AKAP9: IKs nu mai răspunde la adrenalină), LQT12 (SNTA1). Toate rare, dovezi limitate.",
    fp:[
      "CAV3 și SNTA1 defecte → Nav1.5 scapă de frânare → INa tardiv → QT lung (mecanism ca LQT3).",
      "AKAP9 (yotiao) aduce PKA lângă canalul IKs; fără el adrenalina nu mai crește IKs → QT nu se scurtează la efort (mecanism ca LQT1)."
    ],
    tg:["lqt"] },
  { c:"sarcolema", k:"canal", g:"KCNJ5", p:"GIRK4 · curentul IKACh",
    f:"Canalul de K⁺ deschis de acetilcolină (receptorul M2 → subunitățile Gβγ): hiperpolarizează nodul sinusal și nodul AV și scurtează potențialul de acțiune atrial.",
    d:"Variante germinale: FA familială (rar), hiperaldosteronism familial tip III. Variante somatice în suprarenală: cea mai frecventă cauză de adenom producător de aldosteron (HTA cu hipokaliemie).",
    fp:[
      "Mai mult IKACh în atrii (vag puternic, sportivi) → PA atrial scurt, refractar scurt → FA vagală, nocturnă.",
      "Mutațiile somatice din suprarenală fac canalul permeabil pentru Na⁺ → celula se depolarizează → Ca²⁺ intră → aldosteron produs continuu → HTA cu hipokaliemie."
    ],
    tg:["fa","cond","ic"] },

  // ---------- RETICULUL SARCOPLASMIC ȘI CALCIUL (8) ----------
  { c:"rs", k:"calciu", g:"RYR2", p:"Receptorul ryanodinic 2",
    f:"Canalul prin care reticulul eliberează Ca²⁺ la fiecare bătaie.",
    d:"Câștig de funcție: CPVT1 (dominant, ~60 % din CPVT). Pierdere de funcție: sindromul de deficit de eliberare a Ca²⁺ (RyR2-CRDS), cu test de efort normal.",
    t:"Nadolol în doză plină, flecainidă (blochează și RyR2), denervare simpatică stângă; DAI cu prudență (șocul declanșează furtună).",
    fp:[
      "**Câștig de funcție** → canalul scapă Ca²⁺ în diastolă, mai ales când PKA îl fosforilează și reticulul e plin (efort, emoție) → valuri spontane de Ca²⁺ → NCX → DAD → extrasistole în salve → TV bidirecțională (focarele alternează între fasciculele ramurilor) → TV polimorfă → FV. ECG-ul de repaus e normal: problema apare doar sub adrenalină (CPVT1).",
      "**Pierdere de funcție** (RyR2-CRDS) → reticulul se supraîncarcă și eliberarea devine anormală după o secvență lung-scurt → aritmii maligne cu test de efort normal."
    ],
    tg:["cpvt"] },
  { c:"rs", k:"calciu", g:"CASQ2", p:"Calsechestrina 2",
    f:"Leagă și stochează Ca²⁺ în reticul, reglează RyR2.",
    d:"CPVT2, recesivă (purtătorii heterozigoți pot avea forme ușoare).",
    fp:[
      "Calsechestrina ține Ca²⁺ legat în reticul și „liniștește” RyR2 când reticulul e plin; fără ea Ca²⁺ liber din reticul crește și RyR2 se deschide spontan → același lanț DAD → CPVT, dar recesivă."
    ],
    tg:["cpvt"] },
  { c:"rs", k:"calciu", g:"TRDN", p:"Triadina",
    f:"Leagă RyR2 de calsechestrină și de tubul T.",
    d:"Sindromul de knockout al triadinei: recesiv, QT lung sau CPVT cu debut în copilăria mică, slăbiciune musculară.",
    fp:[
      "Fără triadină, diada (tubul T lipit de reticul) se dezorganizează → cuplajul Cav1.2-RyR2 se pierde → Cav1.2 nu mai e inactivat de Ca²⁺ eliberat local → platou lung (QT lung) și eliberare de Ca²⁺ dezordonată (CPVT)."
    ],
    tg:["cpvt","lqt"] },
  { c:"rs", k:"calciu", g:"CALM1, CALM2, CALM3", p:"Calmodulina",
    f:"Senzorul de Ca²⁺ care reglează RyR2, Cav1.2 și alte canale. Trei gene produc aceeași proteină.",
    d:"Calmodulinopatii: QT lung foarte sever la sugar, CPVT, FV idiopatică; adesea mutații de novo.",
    fp:[
      "Calmodulina mutantă leagă prost Ca²⁺ → nu mai oprește Cav1.2 (inactivarea dependentă de Ca²⁺ dispare → ICa,L prelungit → QT foarte lung) și nu mai frânează RyR2 (scurgere de Ca²⁺ → CPVT).",
      "Sunt 3 gene pentru aceeași proteină, dar o singură alelă mutantă din 6 e suficientă: proteina defectă acționează dominant-negativ."
    ],
    tg:["lqt","cpvt","erivf"] },
  { c:"rs", k:"calciu", g:"ATP2A2", p:"SERCA2a",
    f:"Pompa care readuce Ca²⁺ în reticul: relaxarea și rezerva de Ca²⁺ pentru bătaia următoare.",
    d:"Expresie scăzută în IC (relaxare lentă, contracție slabă). Mutațiile dau boala Darier (piele), fără cardiomiopatie clară.",
    fp:[
      "SERCA2a scăzută (IC, hipertrofie) → Ca²⁺ recaptat lent → relaxare lentă (disfuncție diastolică) → reticulul se golește → următoarea contracție mai slabă; mai mult Ca²⁺ e scos prin NCX → DAD. De aceea relaxarea suferă prima în multe cardiomiopatii."
    ],
    tg:["ic"] },
  { c:"rs", k:"calciu", g:"PLN", p:"Fosfolambanul",
    f:"Frânează SERCA2a; fosforilarea de către PKA sub adrenalină ridică frâna (lusitropie).",
    d:"Varianta R14del (fondatoare în Țările de Jos): CMD și CMA cu voltaj QRS mic și aritmii ventriculare; CMH rar.",
    fp:[
      "**R14del** → fosfolambanul formează agregate, inhibă anormal SERCA2a, iar PKA nu mai ridică frâna → Ca²⁺ dereglat, agregate perinucleare → moarte celulară → fibroză subepicardică inferolaterală → voltaj QRS mic, aritmii ventriculare, apoi CMD.",
      "Pierderea completă a PLN (rar): SERCA fără nicio frână nu e benefică pe termen lung → CMD letală precoce."
    ],
    tg:["cmd","cma"] },
  { c:"rs", k:"calciu", g:"TECRL", p:"Proteină a reticulului endoplasmic",
    f:"Rol în homeostazia Ca²⁺, mecanism incomplet cunoscut.",
    d:"CPVT sau QT lung recesiv.",
    fp:[
      "Proteina reticulului endoplasmic lipsește → Ca²⁺ diastolic crescut și scurgere din reticul → CPVT, uneori cu QT lung (recesiv)."
    ],
    tg:["cpvt","lqt"] },
  { c:"rs", k:"receptor", g:"CAMK2D", p:"CaMKII δ",
    f:"Kinază activată de Ca²⁺-calmodulină; fosforilează RyR2, fosfolambanul și Nav1.5.",
    d:"Hiperactivă în IC și în aritmii (scurgere de Ca²⁺, curent de Na⁺ tardiv); țintă în cercetare.",
    fp:[
      "Activată cronic (IC, diabet, stres oxidativ) → fosforilează RyR2 (scurgere de Ca²⁺ → DAD) și Nav1.5 (INa tardiv → PA lung → EAD) → contracție slabă + aritmii + apoptoză. Explică de ce miocardul insuficient e atât de aritmogen."
    ],
    tg:["ic"] },

  // ---------- SARCOMERUL (12) ----------
  { c:"sarcomer", k:"sarcomer", g:"MYH7", p:"Lanțul greu al β-miozinei",
    f:"Motorul: hidrolizează ATP și trage filamentul de actină.",
    d:"CMH (~40 % din cazurile cu genă identificată), CMD, necompactare VG, uneori anomalia Ebstein; miopatia Laing.",
    t:"Mavacamten și aficamten (inhibitori de miozină) în CMH obstructivă; omecamtiv mecarbil (activator) a fost testat în IC cu FEVG redusă.",
    fp:[
      "Varianta missense produce o miozină „otrăvită” care intră în filamentul gros (efect dominant-negativ) → capetele ies din starea super-relaxată → prea multe punți active → contracție exagerată, ATP consumat excesiv, relaxare incompletă → deficit energetic → semnale de hipertrofie, dezorganizarea miocitelor (disarray), fibroză → CMH.",
      "Unele variante scad forța → CMD; cele din tija moleculei dau miopatie scheletică distală (Laing).",
      "Mavacamten și aficamten corectează direct mecanismul: readuc capetele în starea super-relaxată."
    ],
    tg:["cmh","cmd","lvnc","congenital"] },
  { c:"sarcomer", k:"sarcomer", g:"MYBPC3", p:"Proteina C de legare a miozinei",
    f:"Frânează interacțiunea miozină-actină și ține miozina în starea de repaus.",
    d:"Cea mai frecventă genă în CMH (~40-50 %), adesea debut tardiv, penetranță incompletă. Deleția de 25 pb e frecventă în populația sud-asiatică.",
    fp:[
      "Majoritatea variantelor sunt trunchiante → ARN-ul mutant e degradat → mai puțină proteină C (haploinsuficiență) → frâna de pe filamentul gros lipsește → capetele de miozină ies din starea super-relaxată → hipercontractilitate, consum de ATP, relaxare lentă → CMH, de obicei cu debut mai tardiv și penetranță dependentă de vârstă, HTA, obezitate."
    ],
    tg:["cmh","cmd"] },
  { c:"sarcomer", k:"sarcomer", g:"MYL2, MYL3", p:"Lanțurile ușoare reglatoare și esențiale ale miozinei",
    f:"Reglează brațul miozinei.",
    d:"CMH, adesea forma medio-ventriculară.",
    fp:[
      "Lanțurile ușoare stabilizează brațul miozinei; variantele modifică pasul de forță și sensibilitatea la Ca²⁺ → CMH, frecvent cu obstrucție medio-ventriculară (hipertrofia mușchilor papilari și a segmentelor medii)."
    ],
    tg:["cmh"] },
  { c:"sarcomer", k:"sarcomer", g:"ACTC1", p:"Actina cardiacă α",
    f:"Filamentul subțire pe care trage miozina.",
    d:"CMH (inclusiv apicală), CMD, necompactare VG, DSA.",
    fp:[
      "Actina mutantă leagă anormal miozina sau tropomiozina → forță crescută (CMH, inclusiv apicală) sau scăzută (CMD). Actina e esențială și în embrion → defecte septale atriale."
    ],
    tg:["cmh","cmd","lvnc","congenital"] },
  { c:"sarcomer", k:"sarcomer", g:"TNNT2", p:"Troponina T",
    f:"Ancorează complexul troponinei pe tropomiozină. Biomarkerul de necroză.",
    d:"CMH cu hipertrofie adesea mică, dar risc de moarte subită disproporționat; CMD.",
    fp:[
      "Variantele cresc sensibilitatea miofilamentelor la Ca²⁺ → contracție la Ca²⁺ mai mic, relaxare incompletă, consum energetic; Ca²⁺ legat în exces de miofilamente modifică tranzientul de Ca²⁺ → instabilitate electrică → hipertrofie mică, dar risc aritmic mare (grosimea peretelui subestimează riscul).",
      "Variantele care scad sensibilitatea la Ca²⁺ → forță mică → CMD."
    ],
    tg:["cmh","cmd"] },
  { c:"sarcomer", k:"sarcomer", g:"TNNI3", p:"Troponina I",
    f:"Inhibă interacțiunea actină-miozină în diastolă; fosforilată de PKA grăbește relaxarea. Biomarker de necroză.",
    d:"CMH, cardiomiopatie restrictivă (cauză genetică clasică la tânăr), CMD.",
    fp:[
      "Troponina I nu mai blochează bine actina în diastolă → sensibilitate la Ca²⁺ foarte mare → miofilamentele rămân parțial active în diastolă → rigiditate, umplere restrictivă cu VG mic și atrii foarte mari → CMR (sau CMH cu fenotip restrictiv).",
      "PKA nu mai poate grăbi relaxarea prin fosforilarea troponinei I → lusitropie deficitară la efort."
    ],
    tg:["cmh","cmr","cmd"] },
  { c:"sarcomer", k:"sarcomer", g:"TNNC1", p:"Troponina C",
    f:"Leagă Ca²⁺ și pornește contracția.",
    d:"CMH, CMD.",
    t:"Levosimendanul sensibilizează troponina C la Ca²⁺.",
    fp:[
      "Troponina C mutantă leagă Ca²⁺ prea strâns (CMH) sau prea slab (CMD): ca la troponina T, sensibilitatea la Ca²⁺ decide fenotipul."
    ],
    tg:["cmh","cmd","ic"] },
  { c:"sarcomer", k:"sarcomer", g:"TPM1", p:"α-Tropomiozina",
    f:"Acoperă situsurile de legare de pe actină până la sosirea Ca²⁺.",
    d:"CMH, CMD, necompactare VG.",
    fp:[
      "Tropomiozina mutantă acoperă situsurile de pe actină prea slab sau prea strâns → sensibilitate la Ca²⁺ crescută (CMH) sau scăzută (CMD)."
    ],
    tg:["cmh","cmd","lvnc"] },
  { c:"sarcomer", k:"sarcomer", g:"TTN", p:"Titina",
    f:"Cea mai mare proteină umană: arcul molecular al sarcomerului, rigiditatea diastolică, Frank-Starling.",
    d:"Variantele trunchiante sunt cea mai frecventă cauză genetică de CMD (~20-25 % din CMD familiale); penetranța crește cu un al doilea factor: alcool, chimioterapie, sarcină (CM peripartum), tahicardie. Răspund de obicei bine la tratamentul IC.",
    fp:[
      "Variantele trunchiante din banda A (partea prezentă în toate izoformele) → mai puțină titină funcțională (haploinsuficiență) → sarcomerul pierde arcul și schela de asamblare → forță mai mică, adaptare slabă la stres → CMD.",
      "Boala apare adesea doar la un al doilea stres (alcool, chimioterapie, sarcină, tahicardie, miocardită): rezerva miocardică e mică, nu zero. De aceea și remisiunea sub tratament e frecventă.",
      "Variantele trunchiante din banda I (exoni adesea excluși prin splicing) au de obicei efect mic sau nul."
    ],
    tg:["cmd"] },
  { c:"sarcomer", k:"sarcomer", g:"MYH6", p:"Lanțul greu al α-miozinei",
    f:"Miozina predominantă în atrii.",
    d:"DSA, boală de nod sinusal, CMH sau CMD rar.",
    fp:[
      "α-miozina e motorul atrial și participă la formarea septului atrial și a nodului sinusal → variantele dau DSA și disfuncție sinusală."
    ],
    tg:["congenital","cond","cmh"] },
  { c:"sarcomer", k:"sarcomer", g:"ACTN2", p:"α-Actinina-2 (discul Z)",
    f:"Leagă filamentele de actină la discul Z.",
    d:"CMH, CMD, necompactare VG, FV idiopatică.",
    fp:[
      "Discul Z pierde rezistența și rolul de senzor al întinderii → CMH sau CMD; unele variante dereglează și canalele ancorate la discul Z → FV idiopatică."
    ],
    tg:["cmh","cmd","lvnc","erivf"] },
  { c:"sarcomer", k:"sarcomer", g:"CSRP3, TCAP, LDB3, MYOZ2", p:"MLP, teletonina, ZASP, miozenina-2 (discul Z)",
    f:"Senzori mecanici și proteine de legătură la discul Z.",
    d:"CMD și CMH (dovezi variabile); LDB3 și necompactare VG, miopatie miofibrilară.",
    fp:[
      "Discul Z nu mai simte corect întinderea → semnalele de adaptare la sarcină sunt alterate → CMD sau CMH; LDB3 duce la agregate proteice (miopatie miofibrilară)."
    ],
    tg:["cmd","cmh","lvnc"] },

  // ---------- CITOSCHELETUL ȘI COSTAMERUL (7) ----------
  { c:"citoschelet", k:"struct", g:"DMD", p:"Distrofina",
    f:"Leagă actina citoscheletului de matricea extracelulară prin complexul distrofină-glicoproteine.",
    d:"Distrofiile Duchenne și Becker cu CMD (afectare inferolaterală bazală precoce), CMD legată de X; purtătoarele pot dezvolta CMD.",
    t:"IECA precoce la băieții cu Duchenne, eplerenonă; monitorizare cardiacă anuală.",
    fp:[
      "Fără distrofină, actina nu mai e legată de matrice → la fiecare contracție membrana se rupe microscopic → Ca²⁺ intră necontrolat → activarea proteazelor → necroză → fibroză care începe subepicardic în peretele inferolateral bazal (cel mai solicitat) → CMD, aritmii.",
      "Becker: distrofină scurtată, parțial funcțională → boală musculară mai blândă, dar CMD poate fi severă (pacienții se mișcă mai mult → stres cardiac mai mare)."
    ],
    tg:["cmd","distrofii"] },
  { c:"citoschelet", k:"struct", g:"SGCA, SGCB, SGCD, SGCG", p:"Sarcoglicanii",
    f:"Parte a complexului distrofinei din costamer.",
    d:"Distrofiile musculare ale centurilor cu CMD; SGCD și CMD izolată.",
    fp:[
      "Sarcoglicanii stabilizează complexul distrofinei; absența lor → aceeași fragilitate a membranei → necroză, fibroză → CMD (cu sau fără distrofie)."
    ],
    tg:["cmd","distrofii"] },
  { c:"citoschelet", k:"struct", g:"DES", p:"Desmina",
    f:"Filament intermediar care leagă discurile Z între ele, de desmozomi și de nucleu.",
    d:"Desminopatie: CMD, CMR, CMA, blocuri AV, miopatie miofibrilară.",
    fp:[
      "Desmina mutantă formează agregate în loc de rețea → discurile Z, desmozomii și nucleul nu mai sunt legate → forța nu se transmite, celula se deteriorează → CMD sau CMR. Sistemul de conducere e bogat în desmină → BAV; legătura cu desmozomul → fenotip aritmogen."
    ],
    tg:["cmd","cmr","cma","cond","distrofii"] },
  { c:"citoschelet", k:"struct", g:"FLNC", p:"Filamina C",
    f:"Leagă actina de membrană și de discul Z; rezistența la stres mecanic.",
    d:"Variantele trunchiante: CMD sau CMA cu dominanță stângă, cicatrice inelară la IRM, aritmii ventriculare maligne chiar cu FEVG păstrată. Variantele missense: CMH, CMR.",
    fp:[
      "**Trunchiere** → haploinsuficiență → legătura actină-membrană e slabă sub stres mecanic → moarte celulară → fibroză subepicardică inelară → reintrare → aritmii ventriculare maligne chiar când FEVG e doar puțin scăzută (pragul pentru DAI e mai jos).",
      "**Missense** → agregate de filamină → CMH sau CMR."
    ],
    tg:["cmd","cma","cmh","cmr"] },
  { c:"citoschelet", k:"struct", g:"BAG3", p:"BAG3 (co-chaperonă)",
    f:"Controlul calității proteinelor și autofagia sub stres mecanic.",
    d:"CMD (uneori la tineri), miopatie miofibrilară; implicată în CM peripartum și takotsubo.",
    fp:[
      "Fără BAG3, proteinele deteriorate de stresul mecanic nu mai sunt eliminate prin autofagie → agregate → sarcomerul se dezorganizează → CMD. BAG3 susține și reglarea Ca²⁺, de aceea e implicat în CM peripartum și takotsubo."
    ],
    tg:["cmd","distrofii"] },
  { c:"citoschelet", k:"struct", g:"CRYAB", p:"αB-Cristalina",
    f:"Chaperon care protejează desmina.",
    d:"CMD, miopatie miofibrilară, cataractă.",
    fp:[
      "Chaperonul nu mai protejează desmina → agregate desmină-cristalină → miopatie miofibrilară cu CMD; în cristalin → cataractă."
    ],
    tg:["cmd","distrofii"] },
  { c:"citoschelet", k:"struct", g:"VCL", p:"Vinculina",
    f:"Leagă actina de membrană în costamer și în discul intercalar.",
    d:"CMD, CMH (dovezi limitate).",
    fp:[
      "Vinculina leagă actina de membrană; fără ea transmiterea forței la costamer și la discul intercalar slăbește → CMD."
    ],
    tg:["cmd","cmh"] },

  // ---------- DISCUL INTERCALAR (8) ----------
  { c:"disc", k:"struct", g:"PKP2", p:"Plakofilina-2 (desmozom)",
    f:"Leagă cadherinele desmozomale de plakoglobină și desmoplakină; reglează și canalul de Na⁺.",
    d:"Cea mai frecventă genă în cardiomiopatia aritmogenă (~40 % din formele genetice), dominanță dreaptă.",
    t:"Oprirea sportului de anduranță și de competiție face parte din tratament.",
    fp:[
      "Trunchiere → mai puțină plakofilină → desmozomul se asamblează prost → sub stres mecanic (sport) celulele se desprind și mor → inflamație → înlocuire fibro-grăsoasă dinspre epicard, întâi în VD (perete subțire, stres mare) → substrat de reintrare → TV cu aspect de BRS (din VD).",
      "Chiar înainte de fibroză, PKP2 nu mai ține Nav1.5 și Cx43 la disc → conducere lentă → undă epsilon, activare terminală QRS prelungită → aritmii în faza „ascunsă” a bolii.",
      "Plakoglobina pleacă de la membrană spre nucleu → suprimă calea Wnt/β-catenină → progenitorii devin adipocite → grăsimea văzută la IRM."
    ],
    tg:["cma"] },
  { c:"disc", k:"struct", g:"DSP", p:"Desmoplakina",
    f:"Leagă desmozomul de desmină.",
    d:"CMA cu dominanță stângă: episoade care mimează miocardita (durere, troponină), FEVG scăzută, cicatrice inelară. Recesiv: sindromul Carvajal (păr lânos, keratodermie palmo-plantară, CMD).",
    fp:[
      "Desmoplakina leagă desmozomul de desmină; fără ea legătura cu citoscheletul cade → moarte celulară în VG, cu inflamație → episoade „miocardită-like” (durere, troponină crescută, captare tardivă) → fibroză subepicardică inelară → FEVG scade, aritmii ventriculare.",
      "Pielea și părul folosesc aceeași desmoplakină → keratodermie palmo-plantară, păr lânos (Carvajal, recesiv)."
    ],
    tg:["cma","cmd"] },
  { c:"disc", k:"struct", g:"DSG2", p:"Desmogleina-2",
    f:"Cadherină desmozomală (adeziune).",
    d:"CMA, adesea biventriculară; CMD.",
    fp:[
      "Cadherina desmozomală nu mai lipește celulele vecine → același lanț: desprindere → necroză → fibro-grăsos, adesea în ambii ventriculi."
    ],
    tg:["cma","cmd"] },
  { c:"disc", k:"struct", g:"DSC2", p:"Desmocolina-2",
    f:"Cadherină desmozomală.",
    d:"CMA (dominantă sau recesivă).",
    fp:[
      "Ca la DSG2: adeziune scăzută → CMA; forma recesivă poate avea și semne cutanate."
    ],
    tg:["cma"] },
  { c:"disc", k:"struct", g:"JUP", p:"Plakoglobina",
    f:"Leagă cadherinele de desmoplakină; semnalizare Wnt.",
    d:"Boala Naxos (recesivă): CMA + păr lânos + keratodermie palmo-plantară. Și CMA dominantă (rar).",
    fp:[
      "Plakoglobina mutantă nu mai leagă cadherinele de desmoplakină → desmozom slab; în nucleu dereglează calea Wnt → adipogeneză → CMA. Aceeași proteină în piele și păr → boala Naxos."
    ],
    tg:["cma"] },
  { c:"disc", k:"struct", g:"CDH2, CTNNA3", p:"N-cadherina, αT-catenina",
    f:"Joncțiunea aderentă a discului intercalar.",
    d:"CMA (rar).",
    fp:[
      "Joncțiunea aderentă (care leagă actina celulelor vecine) cedează → desmozomul și joncțiunile gap din aceeași zonă (area composita) se dezorganizează → CMA."
    ],
    tg:["cma"] },
  { c:"disc", k:"canal", g:"GJA1", p:"Conexina 43",
    f:"Joncțiunile gap ventriculare: conducerea electrică de la celulă la celulă.",
    d:"Displazia oculo-dento-digitală. Scade și se mută lateral în IC și CMA: substrat de conducere lentă și reintrare.",
    fp:[
      "Cx43 mai puțină sau mutată pe marginile laterale ale celulei (în loc de capete) → curentul trece mai greu de la o celulă la alta → conducere lentă și neuniformă → substrat de reintrare. Apare în CMA, IC, ischemie, hipertrofie."
    ],
    tg:["cond"] },
  { c:"disc", k:"canal", g:"GJA5", p:"Conexina 40",
    f:"Joncțiunile gap atriale și din sistemul His-Purkinje.",
    d:"FA familială, boală de conducere.",
    fp:[
      "Cx40 defectă → conducere atrială lentă și neomogenă → reintrare atrială → FA; în His-Purkinje → tulburări de conducere."
    ],
    tg:["fa","cond"] },

  // ---------- NUCLEUL (12) ----------
  { c:"nucleu", k:"nuclear", g:"LMNA", p:"Lamina A/C",
    f:"Scheletul anvelopei nucleare; organizează cromatina și protejează nucleul de stresul mecanic.",
    d:"CMD cu boală de conducere precoce (PR lung, BAV), aritmii atriale și ventriculare maligne, risc mare de moarte subită. Și Emery-Dreifuss autozomal, distrofia centurilor 1B, lipodistrofie, progeria Hutchinson-Gilford.",
    t:"Scor de risc propriu (LMNA risk calculator) pentru DAI; DAI preferat când e nevoie de stimulator.",
    fp:[
      "Lamina defectă → nucleul se deformează și se rupe sub stresul mecanic al contracțiilor, cromatina se dezorganizează, semnalele de stres (MAPK) rămân activate → moarte celulară → fibroză care afectează întâi sistemul de conducere și septul bazal → PR lung, BAV, apoi FA/flutter, TV și abia apoi FEVG scade.",
      "Pentru că aritmia precede disfuncția, riscul de moarte subită e mare chiar cu FEVG > 35 % → calculator de risc propriu; când e nevoie de stimulator se preferă DAI.",
      "Aceeași proteină în mușchi, grăsime și piele → distrofii, lipodistrofie, progerie, după varianta exactă."
    ],
    tg:["cmd","cond","distrofii"] },
  { c:"nucleu", k:"nuclear", g:"EMD", p:"Emerina",
    f:"Proteină a membranei nucleare interne, partener al laminei.",
    d:"Emery-Dreifuss legat de X: atriu „mut” (paralizie atrială, fără undă A), BAV, contracturi precoce; purtătoarele pot avea boală de conducere.",
    fp:[
      "Fără emerină, anvelopa nucleară e fragilă mai ales în miocitele atriale și în sistemul de conducere → fibroza atriilor → atriul nu se mai contractă (fără undă A, „atriu mut”) → bradicardie joncțională, BAV, risc de AVC; contracturi la coate și glezne înaintea slăbiciunii (Emery-Dreifuss)."
    ],
    tg:["cond","distrofii"] },
  { c:"nucleu", k:"nuclear", g:"TMEM43", p:"LUMA (membrana nucleară internă)",
    f:"Proteină a anvelopei nucleare, funcție incomplet cunoscută.",
    d:"CMA tip 5 (varianta fondatoare p.S358L din Newfoundland): foarte aritmogenă, mai severă la bărbați, ECG cu progresie slabă a undei R.",
    fp:[
      "Varianta p.S358L dereglează legătura lamină-emerină și calea Wnt → moarte celulară, fibro-grăsos → CMA foarte aritmogenă, penetranță aproape completă la bărbați."
    ],
    tg:["cma"] },
  { c:"nucleu", k:"nuclear", g:"RBM20", p:"RBM20 (factor de splicing)",
    f:"Decide ce variantă se produce din titină, RyR2, CaMKII și alte gene cardiace.",
    d:"CMD agresivă, cu debut tânăr și aritmii disproporționate.",
    fp:[
      "RBM20 nu mai controlează splicing-ul → se produce titina gigantă, foarte complianta (N2BA) → sarcomerul pierde rigiditatea și forța → CMD; în același timp splicing-ul anormal al RyR2 și CaMKII → scurgere de Ca²⁺ → aritmii disproporționate față de FEVG. Unele variante fac proteina să se adune în citoplasmă → toxicitate suplimentară."
    ],
    tg:["cmd"] },
  { c:"nucleu", k:"nuclear", g:"DMPK, CNBP", p:"Kinaza distrofiei miotonice; CNBP",
    f:"Expansiuni repetate (CTG în DMPK, CCTG în CNBP) produc ARN toxic care sechestrează factori de splicing în nucleu.",
    d:"Distrofia miotonică tip 1 (Steinert) și tip 2: boală de conducere (PR lung, BAV), aritmii, moarte subită; cardiomiopatie mai rar.",
    fp:[
      "Expansiunea repetată produce un ARN toxic care rămâne în nucleu și sechestrează factori de splicing (MBNL1) → zeci de proteine sunt produse în forma fetală, inclusiv canalele de clor ale mușchiului (miotonie) și proteine ale sistemului de conducere → fibroză și degenerare grasă a sistemului His-Purkinje → PR, QRS lungi, BAV, TV prin reintrare de ramură.",
      "Numărul de repetiții crește din generație în generație (anticipație): copiii fac boala mai devreme și mai sever."
    ],
    tg:["cond","distrofii"] },
  { c:"nucleu", k:"nuclear", g:"NKX2-5", p:"Factor de transcripție NKX2-5",
    f:"Construiește septul atrial și sistemul de conducere în embrion.",
    d:"DSA cu BAV progresiv în familie, tetralogia Fallot; risc de moarte subită în unele familii.",
    fp:[
      "Doză insuficientă de factor de transcripție → septul atrial și nodul AV se formează incomplet → DSA ostium secundum, iar celulele sistemului de conducere sunt mai puține și degenerează cu vârsta → BAV progresiv. Un DSA familial cu PR lung te trimite spre NKX2-5."
    ],
    tg:["congenital","cond"] },
  { c:"nucleu", k:"nuclear", g:"TBX5", p:"Factor de transcripție TBX5",
    f:"Dezvoltarea septurilor, a membrului superior și a sistemului de conducere.",
    d:"Sindromul Holt-Oram: DSA sau DSV, anomalii ale membrului superior (police), tulburări de conducere, FA.",
    fp:[
      "TBX5 lucrează cu NKX2-5 și GATA4; septarea, sistemul de conducere și mugurele membrului superior folosesc aceeași genă → defect septal + anomalii ale policelui și radiusului + BAV, FA (Holt-Oram)."
    ],
    tg:["congenital","cond","fa"] },
  { c:"nucleu", k:"nuclear", g:"GATA4, TBX20", p:"Factori de transcripție",
    f:"Septarea cordului și dezvoltarea valvelor.",
    d:"DSA, DSV, canal AV; TBX20 și CMD.",
    fp:[
      "Factori din același complex de transcripție → doză insuficientă → septarea și pernițele endocardice (valve, canal AV) incomplete → DSA, DSV, canal AV; TBX20 menține și programul genetic al miocitului adult → CMD."
    ],
    tg:["congenital"] },
  { c:"nucleu", k:"nuclear", g:"TBX1", p:"Factor de transcripție TBX1",
    f:"Gena-cheie din regiunea deletată 22q11.2.",
    d:"Sindromul DiGeorge: truncus arteriosus, întreruperea arcului aortic tip B, tetralogia Fallot, arc aortic drept; hipocalcemie, deficit imun.",
    fp:[
      "Deleția 22q11.2 → o singură copie de TBX1 → arcurile faringiene și câmpul cardiac secundar (care formează tractul de ejecție) sunt insuficiente → defecte conotruncale (truncus, Fallot, întreruperea arcului tip B, arc drept) + timus și paratiroide hipoplazice → deficit de limfocite T, hipocalcemie."
    ],
    tg:["congenital"] },
  { c:"nucleu", k:"receptor", g:"NOTCH1", p:"Receptorul Notch-1",
    f:"Semnalizare celulă-celulă în dezvoltarea valvelor; inhibă calcificarea.",
    d:"Bicuspidie aortică cu calcificare precoce, hipoplazia cordului stâng, tetralogia Fallot.",
    fp:[
      "Semnalizarea Notch formează valvele în embrion și, la adult, frânează transformarea celulelor interstițiale valvulare în celule de tip osteoblast → haploinsuficiență → valvă bicuspidă și calcificare precoce, agresivă; în embrion → defecte ale cordului stâng și ale tractului de ejecție."
    ],
    tg:["congenital","aorta"] },
  { c:"nucleu", k:"receptor", g:"JAG1", p:"Jagged-1 (ligand Notch)",
    f:"Ligandul care activează receptorii Notch.",
    d:"Sindromul Alagille: stenoze pulmonare periferice, tetralogia Fallot, colestază, vertebre „în fluture”.",
    fp:[
      "Ligandul Notch insuficient → dezvoltarea arterelor pulmonare, a canalelor biliare și a vertebrelor alterată → stenoze ale ramurilor arterei pulmonare + colestază (Alagille)."
    ],
    tg:["congenital"] },
  { c:"nucleu", k:"receptor", g:"PTPN11, RAF1, SOS1, RIT1", p:"Calea RAS/MAPK",
    f:"Semnalizare de creștere; variante cu câștig de funcție.",
    d:"Sindromul Noonan și RASopatiile: stenoză pulmonară cu valvă displazică, CMH (severă cu RAF1, RIT1), DSA.",
    fp:[
      "Calea RAS/MAPK hiperactivă → valvă pulmonară îngroșată, displazică (nu fuzionată, de aceea dilatarea cu balon merge prost) și creștere dereglată a miocitelor → CMH cu debut în copilărie, adesea obstructivă (mai ales RAF1, RIT1). Inhibitorii MEK au fost folosiți în cazuri severe la sugar."
    ],
    tg:["congenital","cmh"] },

  // ---------- MITOCONDRIA, LIZOZOMUL ȘI METABOLISMUL (10) ----------
  { c:"mito", k:"metab", g:"GLA", p:"α-Galactozidaza A (lizozom)",
    f:"Degradează globotriaozilceramida (Gb3).",
    d:"Boala Fabry (legată de X): HVS care mimează CMH, PR scurt, T1 scăzut și fibroză inferolaterală bazală la IRM, insuficiență renală, angiokeratoame, durere neuropată, AVC la tânăr. Femeile pot fi afectate.",
    t:"Terapie de substituție enzimatică (agalsidază), migalastat (chaperon, doar pentru variante compatibile).",
    fp:[
      "Enzimă absentă sau scăzută → Gb3 se acumulează în lizozomi în toate celulele: miocite (hipertrofie concentrică, T1 scăzut pentru că lipidele scurtează T1), sistemul de conducere (PR scurt la început, apoi BAV), endoteliu (boală microvasculară → AVC, ischemie), rinichi, nervi. Inflamația cronică → fibroză inferolaterală bazală → aritmii.",
      "Femeile heterozigote: inactivarea aleatorie a cromozomului X → mozaic de celule sănătoase și bolnave → boală mai tardivă, dar reală."
    ],
    tg:["depozit","cmh"] },
  { c:"mito", k:"metab", g:"LAMP2", p:"Proteina membranară lizozomală 2",
    f:"Autofagie: transportă materialul spre degradare în lizozom.",
    d:"Boala Danon (legată de X): HVS masivă și preexcitație la băiat sau adult tânăr, retard, miopatie; evoluție rapidă spre IC, transplant.",
    fp:[
      "Fără LAMP2 autofagozomii nu mai fuzionează cu lizozomii → vacuole cu material nedegradat și glicogen umplu miocitul → hipertrofie masivă, preexcitație (inel AV anormal) → moarte celulară rapidă, fibroză → IC terminală la tânăr. La femei boala e mai tardivă și adesea dilatativă."
    ],
    tg:["depozit","cmh"] },
  { c:"mito", k:"metab", g:"PRKAG2", p:"Subunitatea γ2 a AMPK",
    f:"Senzorul energetic al celulei; variantele dau acumulare de glicogen.",
    d:"Glicogenoză cardiacă: HVS, preexcitație (WPW), boală de conducere progresivă, uneori stimulator la tânăr.",
    fp:[
      "AMPK e activată greșit chiar fără deficit energetic → celula captează și stochează glicogen → miocite îngroșate cu vacuole; glicogenul și dezvoltarea anormală a inelului fibros AV → căi accesorii (preexcitație), apoi degenerarea sistemului de conducere → BAV, bradicardie la tânăr."
    ],
    tg:["depozit","cmh","cond"] },
  { c:"mito", k:"metab", g:"GAA", p:"α-Glucozidaza acidă (lizozom)",
    f:"Degradează glicogenul în lizozom.",
    d:"Boala Pompe: CMH masivă la sugar, PR scurt, QRS foarte ample; forma adultă e mai ales musculară.",
    t:"Terapie de substituție enzimatică.",
    fp:[
      "Glicogenul nu mai e degradat în lizozomi → miocitele se umplu, cordul sugarului devine masiv hipertrofiat; conducerea rapidă prin celulele încărcate → PR scurt, QRS gigante; fără tratament, IC în primul an de viață."
    ],
    tg:["depozit","cmh"] },
  { c:"mito", k:"metab", g:"FXN", p:"Frataxina (mitocondrie)",
    f:"Asamblarea clusterelor fier-sulf în mitocondrie; o expansiune trinucleotidică din intron scade producția.",
    d:"Ataxia Friedreich: HVS concentrică, apoi CMD și aritmii; cauza principală de deces.",
    t:"Omaveloxolona (aprobată pentru boala neurologică).",
    fp:[
      "Expansiunea trinucleotidică din intron reduce producția de frataxină → clusterele fier-sulf ale lanțului respirator nu se mai formează → mai puțin ATP, fierul se acumulează în mitocondrii → stres oxidativ → hipertrofie concentrică, apoi moarte celulară, fibroză, CMD și aritmii. Aceeași problemă în neuroni → ataxie, în pancreas → diabet."
    ],
    tg:["cmh","cmd"] },
  { c:"mito", k:"metab", g:"TAZ (TAFAZZIN)", p:"Tafazina",
    f:"Remodelează cardiolipina din membrana mitocondrială internă.",
    d:"Sindromul Barth (băieți): CMD sau necompactare VG, neutropenie, miopatie.",
    fp:[
      "Cardiolipina rămâne imatură → cristele mitocondriale și lanțul respirator se asamblează prost → ATP insuficient → miocard slab, trabeculat (necompactare); neutrofilele și mușchiul scheletic sunt afectate la fel (neutropenie, miopatie)."
    ],
    tg:["cmd","lvnc"] },
  { c:"mito", k:"metab", g:"ADN mitocondrial (MT-TL1 și altele)", p:"Lanțul respirator",
    f:"Producția de ATP; moștenire maternă, heteroplasmie.",
    d:"MELAS, MERRF: HVS, CMD; sindromul Kearns-Sayre: BAV progresiv, oftalmoplegie, retinită pigmentară.",
    fp:[
      "Mutații în ARN-urile de transfer sau în proteinele lanțului respirator codificate de mitocondrie → ATP insuficient în țesuturile mari consumatoare (creier, cord, mușchi, retină) → hipertrofie sau CMD.",
      "În Kearns-Sayre deleția afectează sistemul de conducere → BAV progresiv, de aceea stimulatorul se pune precoce. Severitatea depinde de proporția de mitocondrii mutante (heteroplasmie)."
    ],
    tg:["cmh","cmd","cond","lvnc"] },
  { c:"mito", k:"metab", g:"HFE (și HJV, TFR2, SLC40A1)", p:"Reglarea absorbției fierului",
    f:"Controlează cât fier absoarbe intestinul (prin hepcidină).",
    d:"Hemocromatoza ereditară: cardiomiopatie prin fier, întâi restrictivă, apoi dilatativă; IRM T2* < 20 ms. Aceeași cardiomiopatie apare după transfuzii repetate (talasemie).",
    t:"Reversibilă cu flebotomii sau chelatori (deferoxamină, deferipronă, deferasirox).",
    fp:[
      "Hepcidina scade → intestinul absoarbe fier necontrolat → transferina se saturează → fierul liber intră în miocit prin canalele de Ca²⁺ de tip L → radicali liberi → disfuncție diastolică (restrictivă), apoi dilatare și aritmii. Fierul scurtează T2* la IRM; spre deosebire de amiloid, boala e reversibilă dacă fierul e scos la timp."
    ],
    tg:["depozit","cmr","cmd"] },
  { c:"mito", k:"metab", g:"SLC22A5", p:"OCTN2 (transportorul carnitinei)",
    f:"Aduce carnitina în celulă pentru oxidarea acizilor grași.",
    d:"Deficitul primar de carnitină: CMD la copil, reversibilă complet cu carnitină orală.",
    t:"L-carnitină.",
    fp:[
      "Carnitina nu intră în celulă → acizii grași cu lanț lung nu pot intra în mitocondrie → cordul, care arde mai ales acizi grași, rămâne fără energie, iar lipidele se acumulează → CMD (și hipoglicemie hipocetotică). Carnitina orală corectează complet."
    ],
    tg:["cmd","depozit"] },
  { c:"mito", k:"metab", g:"ACADVL, CPT2", p:"Enzimele β-oxidării acizilor grași",
    f:"Ard acizii grași, principalul combustibil al cordului.",
    d:"Deficite de β-oxidare: CMH sau CMD la copil, aritmii, decompensări la post sau efort.",
    fp:[
      "Oxidarea acizilor grași se blochează → deficit de ATP la post, efort sau febră + acumularea de acil-carnitine aritmogene → CMH sau CMD, aritmii, rabdomioliză."
    ],
    tg:["cmh","cmd","depozit"] },

  // ---------- RECEPTORI ȘI SEMNALIZARE (9) ----------
  { c:"receptori", k:"receptor", g:"ADRB1", p:"Receptorul β1-adrenergic",
    f:"Gs → AMPc → PKA: crește frecvența, forța, viteza de relaxare și de conducere.",
    d:"Stimularea cronică remodelează și ucide miocitele în IC; motorul aritmiilor catecolaminergice.",
    t:"Betablocante (bisoprolol, metoprolol, carvedilol, nebivolol); dobutamina îl stimulează.",
    fp:[
      "**Acut** → PKA fosforilează Cav1.2, RyR2, fosfolambanul, troponina I → mai multă forță, relaxare rapidă (fiziologic).",
      "**Cronic (IC)** → încărcare cu Ca²⁺, CaMKII activată, scurgere din RyR2, apoptoză, fibroză, receptori desensibilizați (GRK2, β-arrestina) → miocardul se degradează și devine aritmogen. Betablocantele întrerup acest cerc."
    ],
    tg:["ic"] },
  { c:"receptori", k:"receptor", g:"CHRM2", p:"Receptorul muscarinic M2",
    f:"Gi: scade AMPc și deschide canalul IKACh (GIRK): bradicardie, conducere AV lentă.",
    d:"Mecanismul bradicardiilor vagale și al FA vagale.",
    t:"Atropina îl blochează.",
    fp:[
      "Tonus vagal mare → IKACh deschis și AMPc scăzut în noduri → bradicardie sinusală, BAV de grad 1 sau Wenckebach (sportivi, somn); în atrii PA se scurtează neuniform → FA vagală."
    ],
    tg:["cond"] },
  { c:"receptori", k:"receptor", g:"ACE, AGTR1", p:"Enzima de conversie; receptorul AT1",
    f:"Angiotensina II prin AT1: vasoconstricție, hipertrofie, fibroză, secreție de aldosteron. ACE degradează și bradikinina.",
    d:"Axa centrală a remodelării în IC și HTA.",
    t:"IECA (și tusea prin bradikinină), sartani; sartanii au fost testați și în Marfan.",
    fp:[
      "În IC debitul scăzut activează SRAA → angiotensina II prin AT1 → vasoconstricție (postsarcină crescută), aldosteron (retenție), sete, ADH și, direct în miocit și fibroblast, hipertrofie și fibroză → remodelare progresivă.",
      "IECA și sartanii taie bucla; IECA cresc și bradikinina (beneficiu vasodilatator, dar tuse și angioedem)."
    ],
    tg:["ic"] },
  { c:"receptori", k:"receptor", g:"NR3C2", p:"Receptorul mineralocorticoid",
    f:"Aldosteronul: retenție de Na⁺, pierdere de K⁺, fibroză, inflamație.",
    d:"Fibroză miocardică și vasculară în IC, hiperaldosteronismul primar.",
    t:"Spironolactonă, eplerenonă, finerenonă.",
    fp:[
      "Aldosteronul în exces → retenție de Na⁺ și apă, pierdere de K⁺ și Mg²⁺ (aritmii), inflamație și fibroză în miocard și vase, disfuncție endotelială. Sub IECA aldosteronul revine în timp (scăparea aldosteronului) → de aceea se adaugă un antagonist al receptorului mineralocorticoid."
    ],
    tg:["ic"] },
  { c:"receptori", k:"receptor", g:"NPPA, NPPB", p:"ANP, BNP (și NT-proBNP)",
    f:"Eliberate la întinderea atriilor și ventriculilor; prin receptorul NPR-A cresc GMPc: natriureză, vasodilatație, antifibroză.",
    d:"Biomarkerii IC. NPPA: FA familială (rar).",
    fp:[
      "Contra-sistemul natural al IC: întinderea pereților → mai mult BNP → natriureză, vasodilatație, frână pe SRAA și simpatic. În IC avansată sistemul e depășit (rezistență la peptide).",
      "Obezitatea scade BNP (clearance mai mare, producție mai mică) → valori „normale” la obezi cu IC.",
      "NPPA mutant (rar) → peptid anormal în atrii → remodelare electrică atrială → FA familială."
    ],
    tg:["ic","fa"] },
  { c:"receptori", k:"receptor", g:"MME", p:"Neprilizina",
    f:"Degradează peptidele natriuretice, bradikinina și angiotensina II.",
    d:"Blocarea ei crește BNP (dar nu NT-proBNP): de aceea sub ARNI urmărești NT-proBNP.",
    t:"Sacubitril (în sacubitril/valsartan).",
    fp:[
      "Neprilizina degradează peptidele natriuretice → blocarea ei le prelungește efectul benefic. Dar degradează și angiotensina II, de aceea sacubitrilul se dă obligatoriu cu un sartan, nu cu IECA: bradikinina s-ar acumula → angioedem (pauză de 36 h între IECA și ARNI)."
    ],
    tg:["ic"] },
  { c:"receptori", k:"receptor", g:"SLC5A2", p:"SGLT2 (tubul proximal renal)",
    f:"Reabsorbția glucozei și a Na⁺ în rinichi.",
    d:"Blocarea lui scade mortalitatea și spitalizările în IC cu orice FEVG și protejează rinichiul; mecanismul cardiac nu e complet elucidat.",
    t:"Dapagliflozin, empagliflozin, sotagliflozin.",
    fp:[
      "Blocarea SGLT2 → glucoză și Na⁺ eliminate → natriureză fără activare simpatică marcată, presiune intraglomerulară mai mică (nefroprotecție), hematocrit crescut, utilizare de corpi cetonici; în miocard scad inflamația și fibroza. Mecanismul exact al beneficiului cardiac e încă dezbătut."
    ],
    tg:["ic"] },
  { c:"receptori", k:"receptor", g:"PDE3A", p:"Fosfodiesteraza 3",
    f:"Degradează AMPc în miocit și în vase.",
    d:"Blocarea crește inotropia și vasodilatația, cu cost aritmic.",
    t:"Milrinonă (inotrop în șocul cardiogen, IC avansată).",
    fp:[
      "Inhibarea PDE3 → AMPc crește ocolind receptorul β (funcționează și sub betablocant) → inotropie + vasodilatație. Dar AMPc crescut cronic are același cost ca stimularea β: aritmii și mortalitate mai mare pe termen lung."
    ],
    tg:["ic"] },
  { c:"receptori", k:"receptor", g:"GLP1R", p:"Receptorul GLP-1",
    f:"Insulinosecreție, sațietate; efecte vasculare și antiinflamatorii.",
    d:"Agoniștii reduc evenimentele cardiovasculare la obezi cu boală aterosclerotică (SELECT) și simptomele în IC cu FEVG păstrată la obezi.",
    t:"Semaglutid, tirzepatid (și agonist GIP).",
    fp:[
      "Agoniștii scad greutatea, glicemia, TA, inflamația sistemică și grăsimea epicardică → mai puține evenimente aterosclerotice și simptome mai bune în HFpEF a obezului; efectele directe pe cord și vase sunt încă studiate."
    ],
    tg:["ic","athero"] },

  // ---------- INTERSTIȚIUL (5) ----------
  { c:"interstitiu", k:"metab", g:"TTR", p:"Transtiretina",
    f:"Proteină hepatică (tetramer) care transportă tiroxina și retinolul; când tetramerul se desface, monomerii se depun ca amiloid.",
    d:"Amiloidoza ATTR: forma sălbatică (vârstnic, tunel carpian bilateral, stenoză aortică low-flow) și forma ereditară (V122I: cardiacă, frecventă la persoanele de origine vest-africană; V30M: neuropatică).",
    t:"Stabilizatori: tafamidis, acoramidis. Silențiatori ai producției hepatice: vutrisiran, patisiran, eplontersen.",
    fp:[
      "Tetramerul se desface în monomeri (cu vârsta, sau mai ușor dacă e mutant) → monomerii se pliază greșit → fibrile amiloide depuse între miocite → pereți groși fără miocite mai mari → voltaj QRS mic față de grosime, umplere restrictivă, strain longitudinal scăzut bazal cu cruțare apicală, BAV, atrii rigide (trombi chiar în ritm sinusal).",
      "Depunerea în ligamente și tendoane explică semnele care preced cordul cu ani: tunel carpian bilateral, canal lombar îngust, ruptura tendonului bicepsului.",
      "Stabilizatorii țin tetramerul unit; silențiatorii opresc producția hepatică."
    ],
    tg:["amiloid","cmr","cmh"] },
  { c:"interstitiu", k:"metab", g:"IGL, IGK", p:"Lanțurile ușoare ale imunoglobulinelor",
    f:"Produse în exces de o clonă plasmocitară, de obicei lambda.",
    d:"Amiloidoza AL: progresie rapidă, toxicitate directă pe miocit; urgență hematologică. Exclusă întotdeauna înaintea diagnosticului de ATTR.",
    t:"Daratumumab cu bortezomib, ciclofosfamidă și dexametazonă; autotransplant la pacienți selecționați.",
    fp:[
      "Clona plasmocitară produce lanțuri ușoare care se pliază greșit → depuneri amiloide + toxicitate directă a lanțurilor ușoare pe miocit (stres oxidativ) → disfuncție disproporționată față de cantitatea de amiloid, NT-proBNP foarte mare, progresie în luni. Când chimioterapia scade lanțul ușor, NT-proBNP scade înaintea regresiei amiloidului."
    ],
    tg:["amiloid","cmr"] },
  { c:"interstitiu", k:"metab", g:"APOA1, FGA, B2M", p:"Apolipoproteina A-I, fibrinogenul Aα, β2-microglobulina",
    f:"Precursori rari de amiloid.",
    d:"Amiloidoze ereditare rare (cord, rinichi); β2-microglobulina la dializații vechi.",
    fp:[
      "Variantele fac proteina amiloidogenă → depuneri în cord, rinichi, ficat; β2-microglobulina se acumulează când rinichiul nu o mai elimină (dializă îndelungată)."
    ],
    tg:["amiloid"] },
  { c:"interstitiu", k:"ecm", g:"COL1A1, COL3A1 (cardiac)", p:"Colagenul I și III",
    f:"Produs de fibroblaștii activați de TGF-β, angiotensina II și aldosteron.",
    d:"Fibroza de înlocuire (cicatrice) și fibroza interstițială difuză (HTA, stenoza aortică, diabet); T1 și volumul extracelular crescute la IRM.",
    t:"Indirect: IECA, sartani, antagoniști ai receptorului mineralocorticoid.",
    fp:[
      "Fibroblastul activat (angiotensină II, aldosteron, TGF-β, întindere) → colagen depus difuz între miocite → rigiditate diastolică, conducere neuniformă (aritmii), difuzia O₂ îngreunată.",
      "După necroză → fibroză de înlocuire (cicatrice) → captare tardivă la IRM și substrat de TV."
    ],
    tg:["ic","cmd"] },
  { c:"interstitiu", k:"receptor", g:"IL1RL1, LGALS3", p:"ST2 solubil, galectina-3",
    f:"Biomarkeri ai stresului miocardic și ai fibrozei.",
    d:"Prognostic în IC, alături de NT-proBNP.",
    fp:[
      "ST2 solubil e un receptor-capcană care neutralizează IL-33 (protectoare) → valori mari = stres miocardic și fibroză activă; galectina-3 semnalează activarea fibroblastelor și macrofagelor."
    ],
    tg:["ic"] }
);
