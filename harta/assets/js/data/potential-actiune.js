/* Conținutul schemelor interactive: ciclul punților transversale, fazele și curenții PA.
   pts = puncte [timp ms, amplitudine 0-1] pentru desenul curentului. */
var HC = window.HC = window.HC || {};

HC.CYCLE = [
  ["Atașare", "Capul de miozină, încărcat cu ADP și fosfat, se leagă de actină, dar doar dacă Ca²⁺ a mutat troponina și tropomiozina de pe situs."],
  ["Pasul de forță", "Pleacă fosfatul, capul se rotește și trage actina spre centrul sarcomerului (~10 nm). Aici se produce forța."],
  ["Detașare", "Pleacă ADP-ul, se leagă un ATP nou și capul se desprinde de actină. Fără ATP capul rămâne lipit: rigor (contractura din ischemia severă)."],
  ["Reîncărcare", "ATP-ul e hidrolizat și capul se „armează” din nou, gata pentru ciclul următor. Câtă vreme Ca²⁺ ține situsurile libere, ciclul se repetă."]
];

HC.AP_PHASES = [
  { id:"f0", chip:"Faza 0", title:"Faza 0 · depolarizarea rapidă",
    what:"Curentul venit de la celula vecină prin joncțiunile gap aduce membrana la prag (~−70 mV). Canalele **Nav1.5** (SCN5A) se deschid în mai puțin de o milisecundă, Na⁺ intră masiv și membrana sare la +20…+30 mV. După 1-2 ms canalele se închid singure (inactivare) și rămân închise până când membrana revine sub ~−60 mV: aceasta e perioada refractară. Cât de abruptă e faza 0 decide cât de repede se propagă impulsul; suma fazelor 0 din tot ventriculul formează QRS-ul.",
    bad:"Prea puțin INa → conducere lentă (PR, QRS lungi), bloc; în epicardul VD Ito câștigă → Brugada. Canalele care nu se inactivează complet lasă un INa tardiv în platou → PA lung → LQT3. Blocantele de Na⁺ lărgesc QRS mai ales la frecvență mare." },
  { id:"f1", chip:"Faza 1", title:"Faza 1 · crestătura",
    what:"**Ito** (Kv4.3, KCND3) se deschide scurt și lasă K⁺ să iasă: potențialul coboară puțin și dă forma „spike and dome”. Ito e mare în epicard, mai ales al VD, și mic în endocard; diferența de voltaj dintre straturi în acest moment scrie unda J (punctul J) pe ECG.",
    bad:"Ito prea mare față de curenții de intrare → epicardul își pierde domul → gradient endo-epicardic → ST „coved” în V1-V2 (Brugada) sau undă J inferolaterală (repolarizare precoce). Vagul, febra și blocantele de Na⁺ înclină balanța în aceeași direcție." },
  { id:"f2", chip:"Faza 2", title:"Faza 2 · platoul (~0 mV, ~200 ms)",
    what:"Două forțe egale trag în sensuri opuse: Ca²⁺ intră prin **Cav1.2** (ICa,L), iar K⁺ iese prin **IKs** și **IKr**. Ca²⁺ intrat acum declanșează eliberarea din reticul și contracția. Platoul corespunde segmentului ST, iar durata lui face cea mai mare parte din QT. Platoul lung împiedică reexcitarea celulei până nu termină contracția.",
    bad:"Mai mult curent de intrare (ICa,L, INa tardiv) sau mai puțin de ieșire (IKs, IKr) → platou lung → QT lung; Cav1.2 se poate redeschide → EAD → torsadă. Ischemia deschide KATP → platou scurtat în zona ischemică → supradenivelare ST." },
  { id:"f3", chip:"Faza 3", title:"Faza 3 · repolarizarea",
    what:"Cav1.2 se inactivează, iar curenții de K⁺ cresc: întâi **IKs**, apoi **IKr**, iar **IK1** termină coborârea spre −85 mV. Faza 3 = unda T. IKs crește sub adrenalină și la frecvență mare ca să scurteze QT la efort; IKr e cel blocat de majoritatea medicamentelor care lungesc QT și scade în hipokaliemie.",
    bad:"IKs mic (LQT1) → QT nu se scurtează la efort → evenimente la efort, înot. IKr mic (LQT2, medicamente, hipokaliemie) → evenimente la zgomot brusc, undă T crestată. Curenți de K⁺ prea mari (QT scurt) → PA scurt, refractar scurt → reintrare ușoară, FA și FV." },
  { id:"f4", chip:"Faza 4", title:"Faza 4 · repausul (−85 mV)",
    what:"Membrana stă lipită de potențialul K⁺ pentru că în repaus e deschis practic doar **IK1** (Kir2.1, KCNJ2). Pompa Na⁺/K⁺ reface gradientele, iar NCX scoate Ca²⁺ intrat la bătaia anterioară. Celula așteaptă curentul de la vecina ei.",
    bad:"IK1 mic → repaus instabil, sfârșitul repolarizării lent (unde U), extrasistole (Andersen-Tawil). Ca²⁺ eliberat spontan din reticul în această fază → NCX → DAD (CPVT, digoxină). Hiperkaliemia face repausul mai puțin negativ → o parte din Nav1.5 rămân inactivate → QRS larg." }
];

HC.AP_CURS = [
  { id:"ina", lab:"INa", gene:"SCN5A", dir:"in", name:"INa · curentul rapid de sodiu (Nav1.5)", dirtxt:"intră (Na⁺), depolarizant", when:"faza 0; un rest mic, tardiv, în platou",
    what:"Aduce membrana de la −85 la +30 mV în ~1 ms; mărimea și viteza lui decid viteza de conducere.",
    less:"Conducere lentă, PR și QRS lungi, Brugada, boală de nod sinusal.", more:"Curent tardiv în platou → QT lung (LQT3), EAD; ținta mexiletinei și a ranolazinei.",
    pts:[[-40,0],[0,0],[1,1],[3,0.2],[6,0.05],[200,0.04],[215,0],[400,0]] },
  { id:"ito", lab:"Ito", gene:"KCND3", dir:"out", name:"Ito · curentul tranzitoriu de ieșire (Kv4.3)", dirtxt:"iese (K⁺), repolarizant", when:"faza 1",
    what:"Scoate K⁺ scurt după faza 0 și sapă crestătura; mare în epicardul VD, mic în endocard.",
    less:"Fără boală clară.", more:"Epicardul pierde domul → Brugada, repolarizare precoce; chinidina îl blochează.",
    pts:[[-40,0],[0,0],[3,0.9],[10,0.6],[25,0.08],[40,0],[400,0]] },
  { id:"ical", lab:"ICa,L", gene:"CACNA1C", dir:"in", name:"ICa,L · curentul de calciu de tip L (Cav1.2)", dirtxt:"intră (Ca²⁺), depolarizant", when:"faza 2, platoul",
    what:"Susține platoul și aduce Ca²⁺ care declanșează eliberarea din reticul și contracția; crescut de adrenalină.",
    less:"Platou scurt → QT scurt; Brugada; contracție mai slabă (efectul blocantelor de Ca²⁺).", more:"Platou foarte lung → QT extrem, EAD (sindromul Timothy).",
    pts:[[-40,0],[0,0],[4,0.45],[15,0.9],[60,0.65],[200,0.3],[255,0.05],[280,0],[400,0]] },
  { id:"iks", lab:"IKs", gene:"KCNQ1", dir:"out", name:"IKs · curentul lent de potasiu (Kv7.1 + minK)", dirtxt:"iese (K⁺), repolarizant", when:"fazele 2-3; crește la efort",
    what:"Se activează lent și se acumulează la frecvență mare; adrenalina îl crește → QT se scurtează la efort.",
    less:"LQT1: QT nu se scurtează la efort → evenimente la efort, înot; Jervell-Lange-Nielsen cu surditate.", more:"QT scurt tip 2, FA familială.",
    pts:[[-40,0],[10,0],[60,0.15],[160,0.4],[230,0.55],[268,0.2],[295,0],[400,0]] },
  { id:"ikr", lab:"IKr", gene:"KCNH2", dir:"out", name:"IKr · curentul rapid de potasiu (hERG)", dirtxt:"iese (K⁺), repolarizant", when:"faza 3",
    what:"Motorul principal al repolarizării; scade în hipokaliemie și e blocat de multe medicamente.",
    less:"LQT2 (zgomot brusc, postpartum), QT lung medicamentos.", more:"QT scurt tip 1 → FA, FV.",
    pts:[[-40,0],[20,0],[60,0.1],[160,0.3],[240,0.9],[272,0.5],[295,0.05],[305,0],[400,0]] },
  { id:"ik1", lab:"IK1", gene:"KCNJ2", dir:"out", name:"IK1 · curentul de potasiu de repaus (Kir2.1)", dirtxt:"iese (K⁺), stabilizează repausul", when:"sfârșitul fazei 3 și faza 4",
    what:"Ține potențialul de repaus la −85 mV și termină repolarizarea; aproape absent în celulele nodale (de aceea ele pot avea automatism).",
    less:"Repaus instabil, unde U mari, TV bidirecțională (Andersen-Tawil, LQT7).", more:"QT scurt tip 3.",
    pts:[[-40,0.5],[0,0.5],[2,0],[225,0],[255,0.35],[280,1],[298,0.6],[400,0.5]] }
];
