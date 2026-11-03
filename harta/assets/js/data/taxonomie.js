/* Taxonomia hărții: tipuri de molecule (culori), compartimente, etichete de boală,
   legăturile compartiment → capitole și ordinea secțiunilor de capitole. */
var HC = window.HC = window.HC || {};

HC.KINDS = {
  canal:    { label: "Canal ionic sau partener", color: "--k-canal" },
  calciu:   { label: "Manipularea Ca²⁺", color: "--k-calciu" },
  sarcomer: { label: "Sarcomer", color: "--k-sarcomer" },
  struct:   { label: "Structural", color: "--k-struct" },
  nuclear:  { label: "Nucleu și dezvoltare", color: "--k-nuclear" },
  metab:    { label: "Metabolism și depozit", color: "--k-metab" },
  receptor: { label: "Receptor, enzimă, semnalizare", color: "--k-receptor" },
  sange:    { label: "Lipide și hemostază", color: "--k-sange" },
  ecm:      { label: "Matrice extracelulară", color: "--k-ecm" }
};

HC.COMPS = {
  sarcolema: { tab: "miocit", name: "Sarcolema și canalele ionice",
    desc: "Aici se naște potențialul de acțiune. Faza 0: intrarea Na⁺ (INa). Faza 1: ieșirea rapidă de K⁺ (Ito). Faza 2, platoul: intrarea Ca²⁺ (ICa,L) echilibrată de K⁺. Faza 3: repolarizarea prin IKr și IKs. Faza 4: IK1 ține potențialul de repaus, iar în nodul sinusal If produce automatismul. Prea puțin K⁺ care iese sau prea mult Na⁺/Ca²⁺ care intră prelungește QT; opusul îl scurtează." },
  rs: { tab: "miocit", name: "Reticulul sarcoplasmic și calciul",
    desc: "Ca²⁺ intrat prin Cav1.2 în tubul T deschide RyR2 și eliberează mult mai mult Ca²⁺ din reticul (eliberare de Ca²⁺ indusă de Ca²⁺). Relaxarea cere repomparea lui de către SERCA2a, frânată de fosfolamban. Când Ca²⁺ scapă din reticul în diastolă, schimbătorul Na⁺/Ca²⁺ produce postdepolarizări tardive: mecanismul CPVT și al multor aritmii din IC." },
  sarcomer: { tab: "miocit", name: "Sarcomerul",
    desc: "Motorul celulei: miozina trage de actină consumând ATP; troponina și tropomiozina pornesc și opresc contracția după nivelul de Ca²⁺; titina e arcul care dă rigiditatea diastolică și mecanismul Frank-Starling. Regula de reținut: variantele care cresc forța și consumul de energie dau de obicei CMH, cele care o scad sau trunchiază titina dau CMD." },
  citoschelet: { tab: "miocit", name: "Citoscheletul și costamerul",
    desc: "Schela care transmite forța sarcomerului spre membrană și spre matricea extracelulară (costamerul) și protejează celula de stresul mecanic al fiecărei contracții. Defectele ei dau mai ales CMD, adesea cu miopatie scheletică asociată și uneori cu aritmii disproporționate." },
  disc: { tab: "miocit", name: "Discul intercalar",
    desc: "Legătura dintre două miocite: mecanică prin desmozomi și joncțiuni aderente, electrică prin joncțiunile gap (conexine). Când desmozomul cedează, celulele se desprind, mor și sunt înlocuite de țesut fibro-grăsos, iar cicatricea devine substrat de tahicardie ventriculară: cardiomiopatia aritmogenă." },
  nucleu: { tab: "miocit", name: "Nucleul",
    desc: "Anvelopa nucleară (lamina A/C, emerina) protejează ADN-ul de stresul mecanic și organizează cromatina; afectarea ei dă tipic boală de conducere înaintea disfuncției VG. Factorii de transcripție construiesc cordul în viața embrionară (cardiopatii congenitale), iar factorii de splicing decid ce variantă de proteină se produce." },
  mito: { tab: "miocit", name: "Mitocondria, lizozomul și metabolismul",
    desc: "Mitocondriile produc ATP-ul contracției, lizozomii degradează și reciclează. Când lipsește o enzimă, substratul se acumulează în celulă (grăsimi, glicogen, fier): pereții se îngroașă și mimează o CMH, adesea cu PR scurt, preexcitație sau boală de conducere. Multe au tratament specific, de aceea se caută activ." },
  receptori: { tab: "miocit", name: "Receptori și semnalizare",
    desc: "Sistemul nervos autonom și axele neuro-hormonale reglează forța, frecvența, relaxarea și remodelarea. Calea β-adrenergică: receptor β1 → AMPc → PKA, care fosforilează Cav1.2, fosfolambanul, RyR2 și troponina I. Aici sunt majoritatea țintelor tratamentului IC." },
  interstitiu: { tab: "miocit", name: "Interstițiul",
    desc: "Spațiul dintre miocite. Aici se depune amiloidul și aici se formează fibroza. Depunerea îngroașă peretele fără hipertrofie reală a miocitelor: de aici discordanța dintre pereții groși la eco și voltajul QRS mic în amiloidoză." },
  endoteliu: { tab: "vas", name: "Endoteliul",
    desc: "Un singur strat de celule care controlează tonusul vascular (NO și prostaciclină vasodilată, endotelina contractă), coagularea și inflamația. Disfuncția endotelială e primul pas al aterosclerozei, iar dezechilibrul căii BMP din endoteliul pulmonar stă la baza HTAP ereditare." },
  media: { tab: "vas", name: "Media: celula musculară netedă",
    desc: "Celulele musculare netede dau tonusul și rezistența peretelui. Contracția lor depinde de intrarea Ca²⁺ și de miozina musculară netedă; relaxarea, de calea NO → GMPc. Defectele aparatului contractil slăbesc media și duc la anevrisme și disecție la diametre mai mici decât de obicei." },
  matrice: { tab: "vas", name: "Matricea extracelulară și adventicea",
    desc: "Fibrele elastice (elastină pe schelet de fibrilină) dau elasticitatea aortei, colagenul îi dă rezistența, iar calea TGF-β le întreține. Defectele lor stau la baza aortopatiilor ereditare: Marfan, Loeys-Dietz, Ehlers-Danlos vascular." },
  sange: { tab: "vas", name: "Lumenul: lipide, plachete, coagulare",
    desc: "Lipoproteinele care conțin apoB pătrund în intimă și inițiază placa; inflamația o face instabilă; plachetele și cascada coagulării produc tromboza. Aici sunt țintele hipolipemiantelor, antiagregantelor și anticoagulantelor, plus genele care explică răspunsul diferit la ele." }
};

HC.TAGS = [
  ["brugada", "Brugada", "Prea puțin curent de intrare (Na⁺, Ca²⁺) sau prea mult Ito la începutul potențialului de acțiune, mai ales în calea de ejecție a VD."],
  ["lqt", "QT lung", "Prea puțin K⁺ iese (IKs, IKr, IK1) sau prea mult Na⁺/Ca²⁺ intră: repolarizarea întârzie. Tipul 1 la efort, tipul 2 la zgomot, tipul 3 în somn."],
  ["sqt", "QT scurt", "Prea mult K⁺ iese: repolarizare grăbită, perioadă refractară scurtă, FA și FV la tineri."],
  ["cpvt", "CPVT și bolile calciului", "Ca²⁺ scapă din reticul sub adrenalină: ECG de repaus normal, TV bidirecțională la efort."],
  ["erivf", "Repolarizare precoce și FV idiopatică", "Curenți de repolarizare dezechilibrați în epicard; diagnostic de excludere după un stop."],
  ["cond", "Boală de conducere și de nod sinusal", "Canal (SCN5A), anvelopă nucleară (LMNA, EMD) sau dezvoltare (NKX2-5): PR lung, BAV, bradicardie la un pacient tânăr."],
  ["fa", "FA familială", "FA la tânăr fără cardiopatie: canale de K⁺ și Na⁺, conexina 40, peptide natriuretice."],
  ["cmh", "CMH și fenocopiile ei", "Sarcomer hipercontractil (miozină, proteina C). Fenocopiile vin din depozite: Fabry, Danon, PRKAG2, amiloid, Friedreich, Noonan."],
  ["cmd", "CMD și CMVG nedilatată", "Arcul (titina), schela (filamina, distrofina), anvelopa nucleară (lamina), splicing-ul (RBM20): forța scade sau celula cedează."],
  ["cma", "Cardiomiopatie aritmogenă", "Lipiciul dintre celule cedează: fibroză și grăsime, aritmii ventriculare disproporționate."],
  ["cmr", "Cardiomiopatie restrictivă", "Peretele devine rigid prin depozite, fibroză sau troponina I mutantă."],
  ["lvnc", "Necompactare VG", "Trăsătură morfologică comună mai multor gene de sarcomer și de mitocondrie, nu o boală separată."],
  ["depozit", "Boli de depozit", "O enzimă lipsă: substratul se acumulează în celulă. Multe au tratament specific."],
  ["amiloid", "Amiloidoză", "O proteină se pliază greșit și se depune între celule: transtiretina (ATTR) sau lanțurile ușoare (AL)."],
  ["distrofii", "Distrofii musculare cu afectare cardiacă", "Mușchiul scheletic și cordul împart aceleași proteine: caută CK, slăbiciune, contracturi."],
  ["congenital", "Cardiopatii congenitale și sindroame", "Factorii de transcripție și căile de semnalizare care construiesc cordul embrionar."],
  ["aorta", "Aortopatii ereditare", "Matricea (fibrilina, colagenul), calea TGF-β sau aparatul contractil al celulei musculare netede."],
  ["htap", "HTAP ereditară și Rendu-Osler", "Calea BMP/TGF-β din endoteliu e dezechilibrată: proliferare vasculară sau malformații arterio-venoase."],
  ["lipide", "Dislipidemii genetice", "Particulele cu apoB nu mai sunt eliminate, trigliceridele nu sunt hidrolizate sau Lp(a) e moștenită mare."],
  ["athero", "Ateroscleroză și inflamație", "Lipide în intimă, endoteliu disfuncțional, inflamazom: placa se formează și se rupe."],
  ["hemo", "Tromboză, hemostază și farmacogenetică", "Plachete, cascada coagulării și genele care schimbă răspunsul la antitrombotice."],
  ["ic", "Ținte terapeutice în IC și HTA", "Blochezi axele neuro-hormonale, protejezi peptidele natriuretice, descarci rinichiul, modulezi sarcomerul."]
];

HC.COMP_CH = {
  sarcolema: ["ioni", "pa", "nodal", "aritmii"],
  rs: ["cec", "aritmii"],
  sarcomer: ["sarcomer-fz", "cm-mec"],
  citoschelet: ["forta", "cm-mec"],
  disc: ["forta", "aritmii", "cm-mec"],
  nucleu: ["nucleu-fz", "cm-mec"],
  mito: ["energie", "cm-mec"],
  receptori: ["beta", "ic-mec"],
  interstitiu: ["cm-mec", "ic-mec"],
  endoteliu: ["endo-fz", "vas-mec"],
  media: ["vsmc", "vas-mec"],
  matrice: ["matrice-fz", "vas-mec"],
  sange: ["ldl-fz", "hemo-fz", "vas-mec"]
};
HC.SEC_ORDER = {
  fz: ["Electricitatea", "Contracția", "Reglarea", "Structura și energia", "Vasul și sângele"],
  fp: ["Ritmul", "Miocardul", "Vasele"]
};
