/* Cuprinsul (pagina de start): fundația, camerele, coridoarele, uneltele.
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
HC.FOUNDATION = [
  { name:"Harta moleculară", ess:"Genele, canalele și proteinele fiecărui compartiment din miocit și din vas, cu bolile lor.",
    topics:["Miocitul pe compartimente","Peretele vascular pe straturi","Boli → gene","Toate cele 150 de molecule"],
    links:[["tab","miocit","Miocitul"],["tab","vas","Vasul"],["tab","boli","Boli → gene"],["tab","toate","Toate moleculele"]] },
  { name:"Fiziologie", ess:"Cum funcționează normal: electric, contracție, reglare, energie, vas, sânge.",
    topics:["Ionii, potențialul de acțiune, automatismul","Cuplajul excitație-contracție, sarcomerul","Reglarea neuro-hormonală","Schela, energia, nucleul","Endoteliu, celula musculară netedă, matrice, lipide, hemostază"],
    links:[["tab","fz","Toate capitolele"],["chap","pa"],["chap","cec"],["chap","beta"]] },
  { name:"Fiziopatologie", ess:"Ce se întâmplă când mecanismele se strică.",
    topics:["Mecanismele aritmiilor","Mecanismele cardiomiopatiilor","Spirala insuficienței cardiace","Mecanismele bolilor vasculare"],
    links:[["tab","fp","Toate capitolele"],["chap","aritmii"],["chap","cm-mec"],["chap","ic-mec"],["chap","vas-mec"]] },
  { name:"Anatomie, embriologie, hemodinamică", ess:"Cordul ca structură și ca pompă: secțiuni, dezvoltare, presiuni, bucle presiune-volum.",
    topics:["Anatomie funcțională și secțională (corespondența eco, CT, IRM)","Embriologia cordului și a vaselor mari","Ciclul cardiac, bucle presiune-volum, cuplaj ventriculo-arterial","Fizica: Bernoulli, Laplace, Poiseuille, continuitate"],
    links:[] }
];
HC.ROOMS = [
  { name:"Riscul cardiovascular și prevenția", ess:"Ce produce boala înainte să apară: factorii de risc și cum îi controlezi.",
    topics:["HTA","Dislipidemii și Lp(a)","Diabet, obezitate, sindrom metabolic","Fumat, sedentarism, nutriție","Scoruri de risc și prevenția primară vs secundară"],
    links:[["chap","ldl-fz"],["tag","lipide"],["tag","athero"],["med","lipide"],["med","hta"]] },
  { name:"Boala coronariană", ess:"De la placa stabilă la tromb: sindroamele coronariene cronice și acute.",
    topics:["Sindroame coronariene cronice","SCA: STEMI, NSTEMI, definiția universală","MINOCA, INOCA, vasospasm","Complicațiile infarctului","Revascularizare: PCI, CABG","Tratament antitrombotic"],
    links:[["chap","vas-mec"],["chap","hemo-fz"],["tag","hemo"],["med","antiagregante"],["med","angina"],["doc","idm"]] },
  { name:"Insuficiența cardiacă", ess:"Pompa care nu mai face față: fenotipuri, tratament, dispozitive.",
    topics:["Clasificare după FEVG, etiologie","HFrEF: cei patru piloni","HFpEF și HFmrEF","IC acută, congestie, șoc cardiogen","IC avansată: LVAD, transplant","DAI, resincronizare"],
    links:[["chap","ic-mec"],["chap","beta"],["tag","ic"],["med","ic"],["med","diuretice"]] },
  { name:"Cardiomiopatii și miocardite", ess:"Boala mușchiului însuși: genetică, infiltrativă, inflamatorie, toxică.",
    topics:["CMH și fenocopii","CMD și CMVG nedilatată","Cardiomiopatia aritmogenă","CMR și infiltrative: amiloid, sarcoid, Fabry, fier","Miocardite, takotsubo, peripartum","Cardiotoxicitatea"],
    links:[["chap","cm-mec"],["chap","sarcomer-fz"],["tag","cmh"],["tag","cmd"],["tag","cma"],["tag","amiloid"],["med","cmspec"]] },
  { name:"Valvulopatii și endocardita", ess:"Valvele native și protezele, de la diagnostic la intervenție.",
    topics:["Stenoza și insuficiența aortică","Insuficiența mitrală primară și secundară, stenoza mitrală","Valvele drepte","Boli valvulare mixte și multiple","Proteze: funcție, disfuncție, mismatch","TAVI, TEER, TriClip","Endocardita infecțioasă"],
    links:[["doc","proteze"],["doc","protnorm"],["gene","NOTCH1"]] },
  { name:"Ritmul", ess:"Electricul: bradi, tahi, canalopatii, moartea subită și dispozitivele.",
    topics:["Disfuncția sinusală și blocurile","TSV și preexcitația","FA și flutter","Aritmii ventriculare","Canalopatii","Sincopa și moartea subită","Stimulatoare, DAI, ablație"],
    links:[["chap","pa"],["chap","nodal"],["chap","aritmii"],["tag","lqt"],["tag","brugada"],["tag","cpvt"],["tag","fa"],["med","antiaritmice"],["med","anticoag"]] },
  { name:"Pericardul", ess:"Învelișul: inflamație, lichid, constricție.",
    topics:["Pericardita acută și recidivantă","Sindromul inflamator miopericardic (ESC 2025)","Revărsat și tamponadă","Constricția vs restricția"],
    links:[["gene","IL1B"],["med","inflam"]] },
  { name:"Aorta și arterele periferice", ess:"Peretele mare: dilatare, disecție, ateroscleroză periferică.",
    topics:["Aortopatii ereditare și bicuspidia","Sindroame aortice acute","Anevrismul aortei abdominale","Arteriopatia periferică","Carotide și boala renovasculară"],
    links:[["chap","matrice-fz"],["chap","vsmc"],["chap","vas-mec"],["tag","aorta"]] },
  { name:"Circulația pulmonară și cordul drept", ess:"Mica circulație și VD: embolie, hipertensiune, cuplaj.",
    topics:["TEP acută: risc, tromboliză, anticoagulare","HTAP: grupele 1-5","CTEPH","VD: funcție, cuplaj VD-AP, insuficiență"],
    links:[["chap","endo-fz"],["tag","htap"],["med","htap"],["med","fibrinolitice"]] },
  { name:"Cardiopatiile congenitale la adult", ess:"Cordul construit altfel: leziuni simple, operate, complexe.",
    topics:["Șunturi: DSA, DSV, canal arterial","Obstrucții: coarctație, stenoze","Fallot, transpoziții, Fontan","Sindroame genetice","Sarcina în cardiopatiile congenitale"],
    links:[["doc","congen"],["chap","nucleu-fz"],["tag","congenital"]] }
];
HC.CORRIDORS = [
  { name:"Acut și terapie intensivă", ess:"Coridorul care trece prin toate camerele: pacientul instabil.",
    topics:["Stopul cardiac și resuscitarea","Șocul: diagnostic și amine","Suport mecanic: ECMO, Impella","Eco în reanimare","Ventilația și interacțiunea cord-plămân"],
    links:[["doc","reanim"],["med","amine"],["med","antidot"]] },
  { name:"Situații speciale", ess:"Același cord în contexte diferite.",
    topics:["Sarcina","Cardio-oncologia","Bolile sistemice","Sportivul","Vârstnicul și fragilitatea","Evaluarea perioperatorie"],
    links:[["doc","sistemice"],["med","metab"]] }
];
HC.TOOLS = [
  { name:"ECG", ess:"Se învață prin repetiție zilnică, nu prin citit.", topics:["Ritm, conducere, ischemie, canalopatii, dispozitive"], links:[["chap","pa"]] },
  { name:"Ecocardiografia", ess:"Specializarea ta: ETT, ETO, 3D, strain, stres.", topics:["Cuantificare, valve, proteze, CR-uri"], links:[["doc","modele"],["doc","eponime"],["doc","protnorm"]] },
  { name:"Imagistică avansată", ess:"Când eco nu ajunge.", topics:["IRM cardiac, CT coronarian și structural, scintigrafie, PET"], links:[] },
  { name:"Invaziv", ess:"Coronarografie, cateterism drept, hemodinamică invazivă.", topics:["Presiuni, debite, rezistențe, vasoreactivitate"], links:[] },
  { name:"Biologie și genetică", ess:"Biomarkeri, praguri, testare genetică.", topics:["Troponină, peptide natriuretice, rinichi, electroliți","Interpretarea unui test genetic"], links:[["doc","biologie"],["tab","boli","Boli → gene"]] }
];
