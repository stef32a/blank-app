/* Pagina de start și temele cu pagină proprie: secțiunile, fundația, camerele clinice, coridoarele, uneltele.
   HC.DOC = documente externe deja construite (link-uri).
   Tipuri de legături: ["chap", id] · ["tab", id, eticheta] · ["tag", id] · ["gene", simbol] · ["doc", cheie] · ["med", id] */
var HC = window.HC = window.HC || {};

HC.DOC = {
  proteze: ["Proteze și intervenții percutanate", "https://claude.ai/artifact/2CocbnWid1ABzjcZYB1pKW"],
  protnorm: ["Valori normale proteze", "https://claude.ai/artifact/FNvX8LPWV27aNNELFeNrBf"],
  congen: ["Cardiopatii congenitale la adult", "https://claude.ai/artifact/K4x8CYk9g8uCL5PKNSMgPU"],
  reanim: ["Eco în reanimare", "https://claude.ai/artifact/AqV7V6UT99GjyMeJrwuhcE"],
  sistemice: ["Boli sistemice", "https://claude.ai/artifact/PmdJqjpi5RdC1KChNbe4xf"],
  eponime: ["Atlas eponime eco", "https://claude.ai/artifact/4c3CQt8EyiuWUNHhiZR9Dw"],
  modele: ["Modele CR eco", "https://claude.ai/artifact/W6vEVhHNM7RHHXASjDBz1i"],
  biologie: ["Biologie în cardiologie", "https://claude.ai/artifact/B2T6N4KWDxJ3fXFoVvtAwb"],
  gardamed: ["Medicamente în gardă", "https://claude.ai/artifact/XHKtD9ejpEkbNTLKwmXu8s"],
  idm: ["5e définition IDM", "https://claude.ai/artifact/G6G5oiupsbvaMwVP8Nf6fE"]
};
/* Secțiunile principale (cardurile de pe pagina de start). Numărul de elemente se calculează singur. */
HC.SECTIONS = [
  { tab:"miocit", name:"Miocitul", icon:"miocit", ess:"Cardiomiocitul pe compartimente: canale ionice, calciu, sarcomer, disc intercalar, nucleu, mitocondrie." },
  { tab:"vas", name:"Vasul", icon:"vas", ess:"Peretele arterial pe straturi: endoteliu, celula musculară netedă, matrice, lumenul cu lipide și hemostază." },
  { tab:"fz", name:"Fiziologie", icon:"fz", ess:"Cum funcționează normal: electricitatea, contracția, reglarea, energia, vasul și sângele." },
  { tab:"fp", name:"Fiziopatologie", icon:"fp", ess:"Ce se întâmplă când mecanismele se strică: aritmii, cardiomiopatii, insuficiență cardiacă, boli vasculare." },
  { tab:"boli", name:"Boli → gene", icon:"boli", ess:"De la diagnostic la gene: canalopatii, cardiomiopatii, aortopatii, dislipidemii, trombofilii." },
  { tab:"med", name:"Medicamente", icon:"med", ess:"Clasele, moleculele și ținta lor moleculară, legate de fișele genelor." }
];

/* Temele fiecărui grup au pagina lor: #/fundatie/<id>, #/clinica/<id>, #/transversal/<id>, #/unelte/<id>.
   Id-ul e partea din adresă: nu-l schimba după ce ai trimis linkul cuiva. */
HC.FOUNDATION = [
  { id:"anatomie", name:"Anatomie, embriologie, hemodinamică", ess:"Cordul ca structură și ca pompă: secțiuni, dezvoltare, presiuni, bucle presiune-volum.",
    topics:["Anatomie funcțională și secțională (corespondența eco, CT, IRM)","Embriologia cordului și a vaselor mari","Ciclul cardiac, bucle presiune-volum, cuplaj ventriculo-arterial","Fizica: Bernoulli, Laplace, Poiseuille, continuitate"],
    links:[] }
];
HC.ROOMS = [
  { id:"preventie", name:"Riscul cardiovascular și prevenția", ess:"Ce produce boala înainte să apară: factorii de risc și cum îi controlezi.",
    topics:["HTA","Dislipidemii și Lp(a)","Diabet, obezitate, sindrom metabolic","Fumat, sedentarism, nutriție","Scoruri de risc și prevenția primară vs secundară"],
    links:[["chap","ldl-fz"],["tag","lipide"],["tag","athero"],["med","lipide"],["med","hta"]] },
  { id:"coronarian", name:"Boala coronariană", ess:"De la placa stabilă la tromb: sindroamele coronariene cronice și acute.",
    topics:["Sindroame coronariene cronice","SCA: STEMI, NSTEMI, definiția universală","MINOCA, INOCA, vasospasm","Complicațiile infarctului","Revascularizare: PCI, CABG","Tratament antitrombotic"],
    links:[["chap","vas-mec"],["chap","hemo-fz"],["tag","hemo"],["med","antiagregante"],["med","angina"],["doc","idm"]] },
  { id:"insuficienta-cardiaca", name:"Insuficiența cardiacă", ess:"Pompa care nu mai face față: fenotipuri, tratament, dispozitive.",
    topics:["Clasificare după FEVG, etiologie","HFrEF: cei patru piloni","HFpEF și HFmrEF","IC acută, congestie, șoc cardiogen","IC avansată: LVAD, transplant","DAI, resincronizare"],
    links:[["chap","ic-mec"],["chap","beta"],["tag","ic"],["med","ic"],["med","diuretice"]] },
  { id:"cardiomiopatii", name:"Cardiomiopatii și miocardite", ess:"Boala mușchiului însuși: genetică, infiltrativă, inflamatorie, toxică.",
    topics:["CMH și fenocopii","CMD și CMVG nedilatată","Cardiomiopatia aritmogenă","CMR și infiltrative: amiloid, sarcoid, Fabry, fier","Miocardite, takotsubo, peripartum","Cardiotoxicitatea"],
    links:[["chap","cm-mec"],["chap","sarcomer-fz"],["tag","cmh"],["tag","cmd"],["tag","cma"],["tag","amiloid"],["med","cmspec"]] },
  { id:"valve", name:"Valvulopatii și endocardita", ess:"Valvele native și protezele, de la diagnostic la intervenție.",
    topics:["Stenoza și insuficiența aortică","Insuficiența mitrală primară și secundară, stenoza mitrală","Valvele drepte","Boli valvulare mixte și multiple","Proteze: funcție, disfuncție, mismatch","TAVI, TEER, TriClip","Endocardita infecțioasă"],
    links:[["doc","proteze"],["doc","protnorm"],["gene","NOTCH1"]] },
  { id:"ritm", name:"Ritmul", ess:"Electricul: bradi, tahi, canalopatii, moartea subită și dispozitivele.",
    topics:["Disfuncția sinusală și blocurile","TSV și preexcitația","FA și flutter","Aritmii ventriculare","Canalopatii","Sincopa și moartea subită","Stimulatoare, DAI, ablație"],
    links:[["chap","pa"],["chap","nodal"],["chap","aritmii"],["tag","lqt"],["tag","brugada"],["tag","cpvt"],["tag","fa"],["med","antiaritmice"],["med","anticoag"]] },
  { id:"pericard", name:"Pericardul", ess:"Învelișul: inflamație, lichid, constricție.",
    topics:["Pericardita acută și recidivantă","Sindromul inflamator miopericardic (ESC 2025)","Revărsat și tamponadă","Constricția vs restricția"],
    links:[["gene","IL1B"],["med","inflam"]] },
  { id:"aorta", name:"Aorta și arterele periferice", ess:"Peretele mare: dilatare, disecție, ateroscleroză periferică.",
    topics:["Aortopatii ereditare și bicuspidia","Sindroame aortice acute","Anevrismul aortei abdominale","Arteriopatia periferică","Carotide și boala renovasculară"],
    links:[["chap","matrice-fz"],["chap","vsmc"],["chap","vas-mec"],["tag","aorta"]] },
  { id:"pulmonar", name:"Circulația pulmonară și cordul drept", ess:"Mica circulație și VD: embolie, hipertensiune, cuplaj.",
    topics:["TEP acută: risc, tromboliză, anticoagulare","HTAP: grupele 1-5","CTEPH","VD: funcție, cuplaj VD-AP, insuficiență"],
    links:[["chap","endo-fz"],["tag","htap"],["med","htap"],["med","fibrinolitice"]] },
  { id:"congenital", name:"Cardiopatiile congenitale la adult", ess:"Cordul construit altfel: leziuni simple, operate, complexe.",
    topics:["Șunturi: DSA, DSV, canal arterial","Obstrucții: coarctație, stenoze","Fallot, transpoziții, Fontan","Sindroame genetice","Sarcina în cardiopatiile congenitale"],
    links:[["doc","congen"],["chap","nucleu-fz"],["tag","congenital"]] }
];
HC.CORRIDORS = [
  { id:"acut", name:"Acut și terapie intensivă", ess:"Coridorul care trece prin toate camerele: pacientul instabil.",
    topics:["Stopul cardiac și resuscitarea","Șocul: diagnostic și amine","Suport mecanic: ECMO, Impella","Eco în reanimare","Ventilația și interacțiunea cord-plămân"],
    links:[["doc","reanim"],["med","amine"],["med","antidot"]] },
  { id:"situatii-speciale", name:"Situații speciale", ess:"Același cord în contexte diferite.",
    topics:["Sarcina","Cardio-oncologia","Bolile sistemice","Sportivul","Vârstnicul și fragilitatea","Evaluarea perioperatorie"],
    links:[["doc","sistemice"],["med","metab"]] }
];
HC.TOOLS = [
  { id:"ecg", name:"ECG", ess:"Se învață prin repetiție zilnică, nu prin citit.", topics:["Ritm, conducere, ischemie, canalopatii, dispozitive"], links:[["chap","pa"]] },
  { id:"eco", name:"Ecocardiografia", ess:"Specializarea ta: ETT, ETO, 3D, strain, stres.", topics:["Cuantificare, valve, proteze, CR-uri"], links:[["doc","modele"],["doc","eponime"],["doc","protnorm"]] },
  { id:"imagistica", name:"Imagistică avansată", ess:"Când eco nu ajunge.", topics:["IRM cardiac, CT coronarian și structural, scintigrafie, PET"], links:[] },
  { id:"invaziv", name:"Invaziv", ess:"Coronarografie, cateterism drept, hemodinamică invazivă.", topics:["Presiuni, debite, rezistențe, vasoreactivitate"], links:[] },
  { id:"biologie", name:"Biologie și genetică", ess:"Biomarkeri, praguri, testare genetică.", topics:["Troponină, peptide natriuretice, rinichi, electroliți","Interpretarea unui test genetic"], links:[["doc","biologie"],["tab","boli","Boli → gene"]] }
];
