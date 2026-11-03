/* Capitole. grp: fz = Fiziologie, fp = Fiziopatologie. sec = secțiunea (vezi HC.SEC_ORDER).
   blocks: { h: titlu, p: paragraf | list: [...] | steps: [...] | table: { head, rows, gcol } | dia: schemă }
   table.gcol = indexul coloanei cu simboluri de gene (devin cipuri clicabile).
   dia: "ap" | "cycle" | "nodal" | "ecc" | "eaddad" (vezi assets/js/diagrame/).
   mols = simbolurile genelor capitolului · see = capitole recomandate după. */
var HC = window.HC = window.HC || {};
HC.CHAPTERS = HC.CHAPTERS || [];
HC.CHAPTERS.push(
  { id:"ioni", grp:"fz", sec:"Electricitatea", short:"Ionii și gradientele",
    title:"Ionii și gradientele: de unde vine curentul",
    idea:"Membrana e o baterie: pompele încarcă gradientele, canalele le descarcă. Când se deschide canalul unui ion, potențialul membranei e tras spre potențialul de echilibru al acelui ion.",
    blocks:[
      { h:"Cei trei ioni", table:{ head:["Ion","Afară","Înăuntru","Potențial de echilibru","Când canalul se deschide"], rows:[
        ["Na⁺","~145 mM","~10 mM","≈ +60 mV","intră → membrana devine pozitivă (depolarizare)"],
        ["K⁺","~4-5 mM","~140 mM","≈ −90 mV","iese → membrana redevine negativă (repolarizare)"],
        ["Ca²⁺","~1-2 mM","~0,0001 mM în diastolă","≈ +120 mV","intră → depolarizează și, mai ales, dă semnalul contracției"] ] } },
      { h:"Trei reguli care explică toate canalopatiile", list:[
        "**Curent de intrare** (Na⁺ sau Ca²⁺ intră) = depolarizant; **curent de ieșire** (K⁺ iese) = repolarizant.",
        "În orice moment, potențialul membranei e rezultatul unei bătălii între curenții de intrare și cei de ieșire. Fiecare canalopatie e o bătălie dezechilibrată într-un moment precis al potențialului de acțiune.",
        "**Pierderea de funcție** a unui canal de K⁺ are același efect ca **câștigul de funcție** al unui canal de Na⁺ sau Ca²⁺: repolarizare întârziată. De aceea gene diferite dau aceeași boală (QT lung), iar aceeași genă poate da boli opuse (SCN5A: Brugada sau LQT3)." ] },
      { h:"Cine întreține gradientele", list:[
        "**Pompa Na⁺/K⁺** (ATP1A1) scoate 3 Na⁺ și bagă 2 K⁺ pentru fiecare ATP. Fără ea gradientele s-ar epuiza în câteva minute.",
        "**Schimbătorul Na⁺/Ca²⁺** (SLC8A1, NCX) folosește gradientul de Na⁺ ca să scoată Ca²⁺: 3 Na⁺ intră pentru 1 Ca²⁺ care iese → curent net de intrare (depolarizant). Aici se leagă electricul de calciu.",
        "**În repaus** e deschis practic doar IK1 (KCNJ2), de aceea potențialul de repaus (~−85 mV) e foarte aproape de cel al K⁺." ] },
      { h:"Aplicație: potasiul din sânge", list:[
        "**Hiperkaliemie**: gradientul de K⁺ scade → repausul devine mai puțin negativ → o parte din canalele de Na⁺ rămân inactivate → faza 0 mai lentă → QRS larg, PR lung, apoi undă sinusoidală. IKr crește când K⁺ extern e mare → repolarizare mai rapidă → unde T ascuțite.",
        "**Hipokaliemie**: IKr și IK1 scad (depind de K⁺ extern) → repolarizare lentă → QT(U) lung, unde U, risc de torsadă, mai ales cu medicamente care blochează hERG (KCNH2)." ] }
    ],
    mols:["ATP1A1","SLC8A1","KCNJ2","SCN5A","KCNH2"], see:["pa","nodal"] },

  { id:"pa", grp:"fz", sec:"Electricitatea", short:"Potențialul de acțiune",
    title:"Potențialul de acțiune ventricular, fază cu fază",
    idea:"Fiecare fază a potențialului de acțiune e dominată de alt canal. Atinge o fază sau un curent în schemă: vezi ce face, ce genă îl produce și ce se întâmplă când e prea mult sau prea puțin.",
    blocks:[
      { dia:"ap" },
      { h:"Cum citești ECG-ul prin potențialul de acțiune", list:[
        "**QRS** = faza 0 a tuturor celulelor ventriculare, una după alta; lățimea depinde de viteza fazei 0 (INa) și de cuplajul prin joncțiunile gap.",
        "**Punctul J și ST** = fazele 1 și 2. Când unele zone au alt platou decât altele (ischemie, Brugada), apare un gradient de voltaj → ST deviat.",
        "**Unda T** = faza 3. Epicardul se repolarizează primul (PA mai scurt), deși s-a depolarizat ultimul → unda T are același sens ca QRS.",
        "**QT** ≈ durata medie a potențialului de acțiune ventricular." ] },
      { h:"Perioada refractară, frâna naturală a reintrării", p:"Canalele de Na⁺ inactivate în faza 0 se recuperează doar când membrana coboară sub ~−60 mV. Până atunci celula nu poate fi reexcitată: perioada refractară efectivă ≈ durata PA. PA scurt (QT scurt, vag în atrii) → refractar scurt → reintrare ușoară. PA lung → risc de EAD. Antiaritmicele de clasa III (amiodaronă, sotalol) lungesc PA tocmai ca să lungească refractarul." },
      { h:"Rezerva de repolarizare", p:"Repolarizarea are mai mulți curenți redundanți (IKr, IKs, IK1). Un purtător al unei variante ușoare poate avea QT normal pentru că ceilalți compensează. Când se adaugă un al doilea factor (medicament anti-hERG, hipokaliemie, bradicardie, sex feminin, postpartum, hipertrofie), rezerva se epuizează și QT se lungește brusc. Așa se explică QT lung medicamentos la persoane cu ECG anterior normal." },
      { h:"Nu toate celulele au același potențial de acțiune", list:[
        "**Atriu**: PA mai scurt, platou mic, curent IKur propriu (KCNA5) și IKACh activat de vag (KCNJ5) → FA vagală, ținte atriale specifice (vernakalant).",
        "**Purkinje**: PA cel mai lung → locul preferat al EAD și al extrasistolelor care declanșează torsada și FV idiopatică.",
        "**Endocard, miocard mediu, epicard**: Ito mare în epicard (crestătura), IKs mai mic în celulele mid-miocardice (PA mai lung) → dispersia transmurală a repolarizării, crescută în QT lung." ] }
    ],
    mols:["SCN5A","KCND3","CACNA1C","KCNQ1","KCNE1","KCNH2","KCNJ2","KCNJ8","KCNA5","KCNJ5"], see:["ioni","nodal","aritmii"] },

  { id:"nodal", grp:"fz", sec:"Electricitatea", short:"Automatism și conducere",
    title:"Automatismul și conducerea: nodul sinusal, nodul AV, His-Purkinje",
    idea:"Celulele nodale nu au repaus stabil: un curent le depolarizează singure în diastolă. Panta acestei depolarizări decide frecvența, iar simpaticul și vagul o înclină.",
    blocks:[
      { dia:"nodal" },
      { h:"De ce celula nodală e diferită", list:[
        "Nu are IK1 → membrana nu e „lipită” de −85 mV; potențialul diastolic maxim e ~−60 mV.",
        "La −60 mV canalele de Na⁺ sunt în mare parte inactivate → faza 0 e făcută de Ca²⁺ (ICa,L), lentă → conducere lentă. În nodul AV lentoarea e utilă: atriile au timp să umple ventriculii (PR) și ventriculii sunt protejați de frecvențele atriale mari (FA).",
        "Faza 4 urcă singură: **If** (HCN4, canal „funny” deschis de hiperpolarizare, permeabil pentru Na⁺ și K⁺), **ceasul de calciu** (eliberări spontane din reticul → NCX → curent de intrare) și curentul de Ca²⁺ de tip T." ] },
      { h:"Cum schimbă sistemul nervos frecvența", list:[
        "**Simpatic**: AMPc se leagă direct de HCN4 → If mai mare; PKA crește ICa,L și ceasul de calciu → panta fazei 4 crește → pragul e atins mai repede → tahicardie; conducere AV mai rapidă.",
        "**Vag**: acetilcolina → receptorul M2 (CHRM2) → Gβγ deschide IKACh (KCNJ5) → hiperpolarizare (pornește de mai jos) + AMPc scăzut (pantă mai mică) → bradicardie, PR lung, Wenckebach.",
        "**Ivabradina** blochează If: scade frecvența sinusală fără să atingă contractilitatea sau conducerea AV (nu acționează în FA)." ] },
      { h:"Ierarhia pacemakerilor și vitezele de conducere", table:{ head:["Țesut","Frecvență intrinsecă","Viteză de conducere","Conexina principală"], rows:[
        ["Nod sinusal","60-100/min","lentă","Cx45"],
        ["Atrii","—","~1 m/s","Cx40, Cx43"],
        ["Nod AV","40-60/min (ritm joncțional)","foarte lentă (~0,05 m/s)","Cx45"],
        ["His-Purkinje","20-40/min","cea mai rapidă (2-4 m/s)","Cx40"],
        ["Miocard ventricular","—","~0,5 m/s","Cx43"] ] } },
      { h:"Când se strică", list:[
        "**Boală de nod sinusal**: HCN4 (If mic), SCN5A (curent insuficient pentru a excita atriul din jur), ANK2, fibroza (vârstă, amiloid).",
        "**BAV progresiv la tânăr**: lamina (LMNA), emerina (EMD), NKX2-5, distrofia miotonică (DMPK), desmina (DES), PRKAG2, iar dobândit sarcoidoza. BAV sub 60 de ani fără cauză evidentă → gândește-te la o genă sau la infiltrare.",
        "**Boala Lenègre** (SCN5A, TRPM4): fibroză și conducere lentă progresivă în His-Purkinje → BRD, HBAS, apoi BAV complet." ] }
    ],
    mols:["HCN4","KCNJ5","CHRM2","SCN5A","TRPM4","LMNA","NKX2-5","GJA5","DMPK"], see:["pa","beta"] },

  { id:"cec", grp:"fz", sec:"Contracția", short:"Cuplajul excitație-contracție",
    title:"Cuplajul excitație-contracție: de la potențial la forță",
    idea:"Ca²⁺ e mesagerul: puțin Ca²⁺ intrat prin membrană deschide depozitul mare din reticul, Ca²⁺ eliberat pornește sarcomerul, iar relaxarea înseamnă să-l pompezi înapoi. Forța fiecărei bătăi depinde de cât Ca²⁺ e în reticul.",
    blocks:[
      { dia:"ecc" },
      { h:"Pas cu pas", steps:[
        "Potențialul de acțiune coboară în **tubii T**, invaginații ale sarcolemei aflate la fiecare disc Z, ca să ajungă simultan în toată celula.",
        "În platou, **Cav1.2** (CACNA1C) din tubul T se deschide și intră o cantitate mică de Ca²⁺: declanșatorul.",
        "Ca²⁺ ajunge în spațiul îngust dintre tubul T și reticul (diada, ~15 nm) și deschide **RyR2** pe reticulul sarcoplasmic. Reticulul eliberează mult mai mult Ca²⁺ decât a intrat: eliberarea de Ca²⁺ indusă de Ca²⁺.",
        "Ca²⁺ din citosol crește de ~10 ori (de la ~0,1 la ~1 µM) și se leagă de **troponina C**.",
        "Troponina I eliberează actina, tropomiozina se rotește, situsurile de pe actină devin libere → miozina trage → **sistolă**.",
        "**Relaxare**: SERCA2a (frânată de fosfolamban) repompează majoritatea Ca²⁺ în reticul; NCX scoate afară cam cât a intrat prin Cav1.2; o mică parte pleacă prin pompa de Ca²⁺ a membranei și în mitocondrii.",
        "Ca²⁺ se desprinde de troponina C → tropomiozina acoperă din nou actina → **diastolă**. Viteza recaptării = lusitropia (relaxarea activă, care consumă ATP).",
        "La echilibru, Ca²⁺ intrat la fiecare bătaie = Ca²⁺ scos de NCX. Dacă iese mai puțin, reticulul se încarcă → bătaia următoare e mai puternică, dar și mai aritmogenă." ] },
      { h:"Consecințe clinice", list:[
        "**Efectul Bowditch (treppe)**: la frecvență mai mare intră mai mult Ca²⁺ pe minut → reticulul se încarcă → forța crește. În IC relația se aplatizează sau se inversează.",
        "**Potențarea postextrasistolică**: pauza de după o extrasistolă lasă reticulul să se umple → bătaia următoare e mai puternică (semnul Brockenbrough în CMH obstructivă: gradientul crește, presiunea pulsului aortic scade).",
        "**Digoxina** blochează pompa Na⁺/K⁺ → Na⁺ intracelular crește → NCX scoate mai puțin Ca²⁺ → reticul încărcat → inotropie; în exces → DAD.",
        "**IC**: SERCA2a scade, NCX crește, RyR2 scapă Ca²⁺ → reticulul se golește → contracție slabă, relaxare lentă și aritmii prin DAD, toate din același defect." ] }
    ],
    mols:["CACNA1C","RYR2","CASQ2","TRDN","CALM1","ATP2A2","PLN","SLC8A1","ATP1A1","CAMK2D"], see:["sarcomer-fz","beta","aritmii"] },

  { id:"sarcomer-fz", grp:"fz", sec:"Contracția", short:"Sarcomerul",
    title:"Sarcomerul: cum se produce forța",
    idea:"Miozina e un motor care consumă ATP ca să tragă de actină. Ca²⁺ decide câte situsuri sunt libere, iar starea super-relaxată decide câte motoare sunt disponibile. Majoritatea bolilor de sarcomer schimbă unul dintre aceste două butoane.",
    blocks:[
      { h:"Arhitectura", list:[
        "**Filamentul subțire**: actina (ACTC1) + tropomiozina (TPM1) + complexul troponinei: C leagă Ca²⁺ (TNNC1), I inhibă (TNNI3), T ancorează (TNNT2). Ancorat la discul Z.",
        "**Filamentul gros**: ~300 de molecule de β-miozină (MYH7) ale căror capete ies spre actină; lanțurile ușoare (MYL2, MYL3) stabilizează brațul; proteina C (MYBPC3) e o frână pe filament.",
        "**Titina** (TTN): arcul gigant care leagă discul Z de linia M, centrează filamentul gros și dă rigiditatea pasivă.",
        "Un sarcomer = de la un disc Z la următorul (~2 µm); un miocit are mii, în serie și în paralel." ] },
      { h:"Ciclul punții transversale", dia:"cycle" },
      { h:"Starea super-relaxată: rezerva de motoare", p:"În repaus o parte din capetele de miozină stau pliate pe filamentul gros, cu un consum de ATP de ~10 ori mai mic: starea super-relaxată. Ele sunt rezerva recrutată la nevoie (întindere, adrenalină). Proteina C și structura miozinei țin capetele în această stare. Variantele care dau CMH o destabilizează → prea multe motoare active permanent → hipercontractilitate, consum excesiv de ATP, relaxare incompletă. Mavacamten și aficamten readuc capetele în starea super-relaxată." },
      { h:"Ce reglează forța", list:[
        "**Cât Ca²⁺ ajunge la troponina C** (cuplajul excitație-contracție, adrenalina).",
        "**Sensibilitatea la Ca²⁺** a miofilamentelor: crescută de levosimendan și de multe variante CMH, scăzută de fosforilarea troponinei I (adrenalină) și de acidoză (ischemie).",
        "**Numărul de capete disponibile** (super-relaxate vs active).",
        "**Lungimea sarcomerului (Frank-Starling)**: întinderea apropie filamentele și tensionează titina → sensibilitate mai mare la Ca²⁺ → umplere mai mare = bătaie mai puternică." ] },
      { h:"Diastola nu e pasivă", p:"Relaxarea are o parte activă (recaptarea Ca²⁺ de către SERCA și desprinderea miozinei, ambele consumă ATP) și una pasivă (rigiditatea titinei și a colagenului). Titina are o izoformă rigidă (N2B) și una complianta (N2BA); raportul lor e reglat de RBM20, iar fosforilarea de către PKA și PKG o face mai complianta. În HFpEF calea NO-GMPc-PKG e deficitară → titina hipofosforilată → miocard rigid. Ischemia afectează întâi relaxarea activă, de aceea disfuncția diastolică apare înaintea celei sistolice." }
    ],
    mols:["MYH7","MYBPC3","MYL2","ACTC1","TNNT2","TNNI3","TNNC1","TPM1","TTN","RBM20"], see:["cec","energie","cm-mec"] },

  { id:"beta", grp:"fz", sec:"Reglarea", short:"Simpatic, vag, hormoni",
    title:"Reglarea: simpaticul, vagul și axele neuro-hormonale",
    idea:"Simpaticul face cordul să bată mai des, mai tare și să se relaxeze mai repede pe aceeași cale: AMPc → PKA. Pe termen lung, aceleași semnale (simpatic, angiotensină, aldosteron) remodelează cordul, iar tratamentul IC le blochează una câte una.",
    blocks:[
      { h:"Calea β1-adrenergică", steps:[
        "Noradrenalina se leagă de receptorul **β1** (ADRB1).",
        "Proteina Gs activează adenilat ciclaza → **AMPc** crește.",
        "AMPc activează **PKA** (și, direct, canalul HCN4).",
        "PKA fosforilează **Cav1.2** (intră mai mult Ca²⁺ → inotropie), **RyR2** (eliberare mai mare), **fosfolambanul** (frâna de pe SERCA2a se ridică → relaxare rapidă și reticul mai plin), **troponina I** (Ca²⁺ se desprinde mai repede → lusitropie), **proteina C** și **IKs** (QT se scurtează la efort).",
        "Fosfodiesterazele (PDE3, PDE4) degradează AMPc și opresc semnalul." ] },
      { h:"Acut util, cronic toxic", p:"La efort calea crește debitul de 4-5 ori. În IC stimularea e permanentă: receptorii β1 sunt desensibilizați (GRK2, β-arrestina), CaMKII rămâne activată, RyR2 scapă Ca²⁺, miocitele intră în apoptoză, fibroblastele produc colagen. Betablocantele refac sensibilitatea receptorilor și opresc toxicitatea; inotropele (dobutamină, milrinonă) cresc debitul azi, cu prețul aritmiilor și al mortalității pe termen lung." },
      { h:"Sistemul renină-angiotensină-aldosteron", steps:[
        "Debit sau presiune renală scăzută și simpaticul eliberează **renina**.",
        "Angiotensinogen → angiotensina I → (**ACE**) → **angiotensina II**.",
        "Angiotensina II prin **AT1** (AGTR1): vasoconstricție, aldosteron, sete, ADH, hipertrofie și fibroză în cord.",
        "**Aldosteronul** prin receptorul mineralocorticoid (NR3C2): rinichiul reține Na⁺ și apă, pierde K⁺; în cord și vase → inflamație, fibroză.",
        "ACE degradează și bradikinina: IECA o cresc (vasodilatație, dar tuse și angioedem)." ] },
      { h:"Contra-sistemul: peptidele natriuretice", p:"Întinderea atriilor (ANP) și a ventriculilor (BNP) → receptorul NPR-A → GMPc → natriureză, vasodilatație, frână pe SRAA și simpatic, antifibroză. Neprilizina (MME) le degradează, iar sacubitrilul o blochează. NT-proBNP e fragmentul inactiv și nu e substrat al neprilizinei → sub sacubitril/valsartan urmărești NT-proBNP, nu BNP." },
      { h:"Calea NO-GMPc-PKG în miocit", p:"NO din endoteliul microvascular și peptidele natriuretice cresc GMPc → PKG → relaxare, titină mai complianta, frână pe hipertrofie. Comorbiditățile (obezitate, diabet, HTA, BPOC) produc inflamație sistemică → endoteliul microvascular produce mai puțin NO → PKG scăzută → miocard rigid și hipertrofiat: modelul fiziopatologic al HFpEF." },
      { h:"Fiecare medicament de IC = o verigă tăiată", table:{ head:["Verigă","Medicament","Efect"], rows:[
        ["β1 (simpatic)","bisoprolol, metoprolol, carvedilol","frecvență mai mică, toxicitate catecolaminică mai mică, remodelare inversă"],
        ["ACE / AT1","IECA, sartani","postsarcină și fibroză mai mici"],
        ["Neprilizină","sacubitril (+ valsartan)","peptide natriuretice crescute"],
        ["Receptorul mineralocorticoid","spironolactonă, eplerenonă, finerenonă","fibroză mai mică, K⁺ păstrat"],
        ["SGLT2","dapagliflozin, empagliflozin","natriureză, nefroprotecție, efecte cardiace multiple"],
        ["If","ivabradină","frecvență mai mică (doar în ritm sinusal)"],
        ["Guanilat ciclaza solubilă","vericiguat","GMPc crescut"] ] } }
    ],
    mols:["ADRB1","CHRM2","ACE","NR3C2","NPPA","MME","SLC5A2","PDE3A","CAMK2D"], see:["cec","nodal","ic-mec"] },

  { id:"forta", grp:"fz", sec:"Structura și energia", short:"Schela și discul intercalar",
    title:"Schela și lipiciul: cum se transmite forța între celule",
    idea:"Forța produsă în sarcomer trebuie transmisă lateral, spre matricea extracelulară (costamerul), și longitudinal, spre celula vecină (discul intercalar). Bolile structurale apar când una din aceste legături cedează sub stresul mecanic al fiecărei bătăi.",
    blocks:[
      { h:"Lanțul lateral: sarcomer → disc Z → costamer → matrice", list:[
        "**Discul Z** (α-actinina, ACTN2) leagă filamentele subțiri și e un senzor al întinderii.",
        "**Desmina** (DES) formează o rețea care leagă discurile Z între ele, de membrană, de desmozomi, de nucleu și de mitocondrii.",
        "**Costamerul**, la nivelul fiecărui disc Z, leagă interiorul de matrice prin două sisteme: complexul **distrofină-glicoproteine** (distrofina leagă actina de β-distroglican, care leagă laminina) și **integrinele** (cu vinculină, talină, filamina C).",
        "Fără aceste legături membrana se rupe la fiecare contracție → Ca²⁺ intră → necroză (distrofiile)." ] },
      { h:"Lanțul longitudinal: discul intercalar", list:[
        "**Joncțiunea aderentă** (N-cadherina CDH2, catenine, vinculină) leagă actina celulelor vecine.",
        "**Desmozomul**, din exterior spre interior: cadherinele desmozomale (desmogleina-2 DSG2, desmocolina-2 DSC2) se prind de celula vecină → plakoglobina (JUP) și plakofilina-2 (PKP2) → desmoplakina (DSP) → desmina.",
        "**Joncțiunile gap**: 6 conexine formează un semicanal (conexon); 2 conexoni aliniați formează un canal prin care curentul trece la celula vecină. Cx43 (GJA1) în ventricul, Cx40 (GJA5) în atriu și His-Purkinje, Cx45 în noduri.",
        "În realitate cele trei se amestecă într-o zonă comună (area composita), unde plakofilina și ankirina-G țin și canalele Nav1.5." ] },
      { h:"De ce desmozomul contează și electric", p:"Conducerea are nevoie de trei lucruri: o sursă (INa), un cuplaj (joncțiunile gap) și un drum (miocard fără fibroză). Desmozomul defect le strică pe toate trei: Nav1.5 și Cx43 pleacă de la disc (sursă și cuplaj scăzute), apoi celulele mor și sunt înlocuite de fibroză și grăsime (drumul se întrerupe). De aceea în cardiomiopatia aritmogenă aritmiile pot apărea înaintea modificărilor vizibile la eco." },
      { h:"Semnalizarea desmozomului", p:"Plakoglobina poate migra în nucleu, unde concurează cu β-catenina și suprimă calea Wnt. Wnt ține progenitorii pe linia miocitară; când e suprimată, progenitorii devin adipocite → infiltrarea grăsoasă tipică cardiomiopatiei aritmogene." }
    ],
    mols:["ACTN2","DES","DMD","FLNC","VCL","PKP2","DSP","DSG2","DSC2","JUP","CDH2","GJA1","GJA5"], see:["cm-mec","aritmii"] },

  { id:"energie", grp:"fz", sec:"Structura și energia", short:"Energia și lizozomul",
    title:"Energia: mitocondria, ATP și lizozomul",
    idea:"Cordul are rezerve de ATP doar pentru câteva secunde și le reface continuu, aproape numai în mitocondrii, mai ales din acizi grași. Orice defect de producție, transport sau reciclare se vede întâi ca hipertrofie, relaxare proastă și aritmii.",
    blocks:[
      { h:"Cine produce și cine consumă", list:[
        "**Producția**: ~95 % din ATP vine din fosforilarea oxidativă; combustibil: acizii grași (60-90 %), restul glucoză, lactat, corpi cetonici. Mitocondriile ocupă ~30 % din volumul miocitului.",
        "**Transportul**: creatin kinaza duce energia pe fosfocreatină de la mitocondrie la miofibrile; raportul fosfocreatină/ATP scade în IC și CMH.",
        "**Consumul**: miozina (cea mai mare parte), SERCA2a și pompa Na⁺/K⁺. Relaxarea consumă energie → în ischemie sau în deficit energetic diastola suferă prima." ] },
      { h:"Senzorul și drumurile combustibilului", list:[
        "**AMPK** (subunitatea γ2 = PRKAG2): când ATP scade și AMP crește, pornește captarea de glucoză și oxidarea și oprește sinteza. Activată greșit → depozitare de glicogen.",
        "**Acizii grași** intră în mitocondrie doar legați de carnitină: transportorul OCTN2 (SLC22A5) aduce carnitina în celulă, CPT1/CPT2 fac transferul, apoi β-oxidarea (ACADVL).",
        "**Cardiolipina** (remodelată de tafazină, TAZ) e lipidul membranei mitocondriale interne care ține lanțul respirator asamblat.",
        "**Frataxina** (FXN) asamblează clusterele fier-sulf necesare lanțului respirator." ] },
      { h:"Lizozomul și autofagia", p:"Lizozomul e stația de reciclare: enzime acide degradează lipide (α-galactozidaza A → Gb3), glicogen (α-glucozidaza acidă) și proteine. Autofagia aduce aici organitele uzate și proteinele deteriorate, iar fuziunea autofagozom-lizozom are nevoie de LAMP2. Când lipsește o enzimă, substratul se acumulează → celulele se măresc → perete gros care seamănă cu CMH, dar e o boală de depozit." },
      { h:"Fierul", p:"Fierul e necesar lanțului respirator, dar liber e toxic. Absorbția e controlată de hepcidină, reglată de HFE, HJV și TFR2. Când transferina e saturată, fierul liber intră în miocit prin canalele de Ca²⁺ de tip L și produce radicali liberi." }
    ],
    mols:["PRKAG2","SLC22A5","ACADVL","TAZ","FXN","GLA","LAMP2","GAA","HFE","MT-TL1"], see:["cm-mec"] },

  { id:"nucleu-fz", grp:"fz", sec:"Structura și energia", short:"Nucleul",
    title:"Nucleul: anvelopa, factorii de transcripție, splicing-ul",
    idea:"Nucleul nu e doar depozitul de ADN: anvelopa lui simte stresul mecanic, factorii de transcripție construiesc cordul în embrion, iar splicing-ul decide ce variantă de proteină se produce.",
    blocks:[
      { h:"Anvelopa nucleară ca senzor mecanic", p:"Lamina A/C (LMNA) formează o plasă sub membrana nucleară internă. Complexul LINC (nesprinele pe membrana externă, proteinele SUN pe cea internă, cu emerina alături) leagă citoscheletul de lamină: forța fiecărei contracții ajunge până în nucleu. Lamina ține forma nucleului, organizează cromatina și oprește semnalele de stres. Celulele cu stres mecanic mare (miocite, mușchi scheletic, sistemul de conducere) sunt primele afectate când lamina e defectă." },
      { h:"Factorii de transcripție construiesc cordul", list:[
        "**NKX2-5, GATA4, TBX5, TBX20** lucrează în același complex: septarea atrială și ventriculară, pernițele endocardice (valve, canal AV), sistemul de conducere.",
        "**TBX1** formează tractul de ejecție și arcurile aortice din câmpul cardiac secundar.",
        "**Doza contează**: o singură copie funcțională (haploinsuficiență) ajunge pentru boală, de aceea majoritatea sunt dominante.",
        "**NOTCH1** și **JAG1** (semnalizare celulă-celulă) formează valvele și arterele pulmonare." ] },
      { h:"Splicing-ul: o genă, mai multe proteine", p:"Aceeași genă poate produce proteine diferite după cum sunt combinați exonii. RBM20 decide, de exemplu, raportul dintre titina rigidă (N2B) și cea complianta (N2BA), dar și formele RyR2, CaMKIIδ și LDB3. În distrofia miotonică (DMPK) ARN-ul toxic blochează factorii de splicing, iar proteinele adulte sunt înlocuite de forme fetale." },
      { h:"Programul de hipertrofie", p:"La suprasarcină (HTA, stenoză aortică) miocitul crește prin căile calcineurină-NFAT, CaMKII-HDAC și MAPK și reactivează gene fetale (ANP, BNP, β-miozina, α-actina scheletică). Hipertrofia fiziologică (efort, sarcină) folosește altă cale (IGF-1, PI3K-Akt) și nu duce la fibroză." }
    ],
    mols:["LMNA","EMD","TMEM43","NKX2-5","GATA4","TBX5","TBX1","RBM20","DMPK","NOTCH1"], see:["cm-mec"] },

  { id:"endo-fz", grp:"fz", sec:"Vasul și sângele", short:"Endoteliul",
    title:"Endoteliul: NO, prostaciclina și endotelina",
    idea:"Endoteliul sănătos produce substanțe care dilată, antiagregă și opresc proliferarea (NO, prostaciclină) și puțină endotelină. Toate bolile vasculare încep cu dezechilibrul acestei balanțe.",
    blocks:[
      { h:"Calea NO, pas cu pas", steps:[
        "Forfecarea fluxului laminar, acetilcolina sau bradikinina cresc Ca²⁺ în celula endotelială.",
        "**eNOS** (NOS3), cu cofactorul BH4, produce NO din L-arginină.",
        "NO difuzează în celula musculară netedă și activează **guanilat ciclaza solubilă** → GMPc.",
        "GMPc → **PKG** → scade Ca²⁺ și activează fosfataza miozinei → relaxare. PDE5 degradează GMPc.",
        "NO inhibă și agregarea plachetară, adeziunea leucocitelor și proliferarea celulelor musculare netede." ] },
      { h:"Celelalte două căi", list:[
        "**Prostaciclina** (PGI2): COX → prostaciclin-sintaza (PTGIS) → receptorul IP → AMPc → relaxare și antiagregare. Se opune tromboxanului plachetar.",
        "**Endotelina-1** (EDN1): prin ETA pe celula musculară netedă → vasoconstricție puternică și proliferare; prin ETB endotelial → eliminarea endotelinei și eliberare de NO.",
        "Aceste trei căi sunt cele trei clase clasice de tratament în HTAP." ] },
      { h:"Endoteliul și coagularea", p:"În repaus endoteliul e anticoagulant: trombomodulina (THBD) transformă trombina într-un activator al proteinei C, heparan sulfatul accelerează antitrombina, se eliberează t-PA, NO și prostaciclină. Activat (inflamație, leziune), devine protrombotic: expune factor tisular, eliberează vWF și PAI-1." },
      { h:"Calea BMP din endoteliu", p:"BMP9 și BMP10 din sânge se leagă de ALK1 (ACVRL1), endoglină (ENG) și BMPR2 → SMAD1/5/8 + SMAD4 → endoteliu liniștit, matur, care nu proliferează. Calea activinei/TGF-β (SMAD2/3) împinge în sens opus, spre proliferare. Boala apare când balanța se înclină spre activină: HTAP (BMPR2) sau vase imature (Rendu-Osler)." },
      { h:"Disfuncția endotelială", p:"Factorii de risc produc stres oxidativ: superoxidul distruge NO, iar fără BH4 eNOS se „decuplează” și produce ea însăși superoxid. Rezultatul: vasodilatație dependentă de flux scăzută, endoteliu adeziv (VCAM-1), protrombotic și permeabil pentru LDL. Zonele cu forfecare mică și oscilantă (bifurcații, curburi interne) au endoteliu mai vulnerabil, de aceea plăcile apar acolo." }
    ],
    mols:["NOS3","GUCY1A1","PDE5A","PTGIS","EDN1","BMPR2","ACVRL1","ENG","VWF","THBD","VCAM1","KDR"], see:["vsmc","vas-mec"] },

  { id:"vsmc", grp:"fz", sec:"Vasul și sângele", short:"Celula musculară netedă",
    title:"Celula musculară netedă: tonus, contracție, relaxare",
    idea:"Celula musculară netedă nu are troponină: Ca²⁺ pornește contracția prin calmodulină și kinaza lanțului ușor al miozinei, iar tonusul poate fi menținut fără Ca²⁺ crescut prin Rho-kinază. Relaxarea vine pe calea GMPc sau AMPc.",
    blocks:[
      { h:"Contracția", steps:[
        "Ca²⁺ intră prin **Cav1.2** (depolarizare) sau iese din reticul prin receptorul IP3 (receptori Gq: α1, AT1, ETA).",
        "Ca²⁺ se leagă de **calmodulină** → activează **MLCK** (MYLK).",
        "MLCK fosforilează lanțul ușor reglator al miozinei → **miozina musculară netedă** (MYH11) interacționează cu **actina musculară netedă** (ACTA2) → contracție lentă și susținută, cu consum mic de ATP (starea „latch”).",
        "**RhoA → ROCK** inhibă fosfataza lanțului ușor → contracția rămâne chiar când Ca²⁺ scade (sensibilizarea la Ca²⁺)." ] },
      { h:"Relaxarea", list:[
        "**Fosfataza lanțului ușor** (MLCP) defosforilează miozina.",
        "**GMPc → PKG-1** (PRKG1): activează MLCP, scade Ca²⁺, deschide canale de K⁺. Calea NO, a nitraților, riociguatului și sildenafilului.",
        "**AMPc → PKA**: calea prostaciclinei, a receptorilor β2 și a milrinonei.",
        "**Canalele de K⁺** (KATP, BKCa, Kv, TASK-1): hiperpolarizează → Cav1.2 se închid → relaxare. În artera pulmonară hipoxia închide canalele Kv → vasoconstricție pulmonară hipoxică." ] },
      { h:"În aortă: unitatea contractil-elastică", p:"În media aortei fiecare celulă musculară netedă e legată de lamelele elastice prin microfibrile de fibrilină și integrine, care se continuă în interior cu actina și miozina. Acest lanț e senzorul prin care celula simte tensiunea peretelui și își păstrează fenotipul contractil. Gene diferite din același lanț (FBN1, ACTA2, MYH11, MYLK, PRKG1) duc la aceeași boală: anevrism și disecție toracică." },
      { h:"Fenotipul celulei musculare netede", p:"Celula poate trece din fenotip contractil în fenotip sintetic: migrează, proliferează, produce matrice. E util în vindecare și în capișonul fibros al plăcii, dar dăunător în restenoză, HTAP și degenerarea medială." }
    ],
    mols:["CACNA1C","MYLK","MYH11","ACTA2","PRKG1","RHOA","GUCY1A1","PDE5A","KCNK3","ADRA1A"], see:["endo-fz","matrice-fz","vas-mec"] },

  { id:"matrice-fz", grp:"fz", sec:"Vasul și sângele", short:"Matricea și TGF-β",
    title:"Matricea aortei și calea TGF-β",
    idea:"Elastina dă aortei elasticitatea, colagenul îi dă rezistența, fibrilina le organizează și ține TGF-β în rezervă. Aorta toracică e un amortizor: se întinde în sistolă și restituie energia în diastolă.",
    blocks:[
      { h:"Componentele", list:[
        "**Lamelele elastice**: în aorta toracică ~50-60 de straturi concentrice, alternând cu celule musculare netede. Elastina (ELN) e produsă mai ales în copilărie și aproape nu se reînnoiește → se fragmentează prin oboseală cu vârsta.",
        "**Microfibrilele de fibrilină-1** (FBN1): scheletul pe care se depune elastina și legătura cu celulele musculare netede.",
        "**Lizil-oxidaza** (LOX) leagă încrucișat elastina și colagenul.",
        "**Colagenul I și III** (media și adventicea) limitează distensia la presiuni mari; colagenul III e esențial în arterele de calibru mediu.",
        "**Metaloproteinazele (MMP) și inhibitorii lor (TIMP)**: echilibrul lor decide remodelarea." ] },
      { h:"Funcția Windkessel", p:"În sistolă aorta înmagazinează o parte din volumul ejectat întinzându-și pereții, apoi îl împinge în diastolă → flux continuu și presiune pulsatilă mică. Când aorta se rigidizează (vârstă, HTA), presiunea sistolică și cea pulsatilă cresc, unda reflectată se întoarce devreme, în sistolă, iar presiunea diastolică (perfuzia coronariană) scade." },
      { h:"Calea TGF-β", steps:[
        "TGF-β e secretat legat de LAP și LTBP și ancorat în microfibrilele de fibrilină: o rezervă inactivă.",
        "Forța mecanică, integrinele sau proteazele îl eliberează.",
        "TGF-β liber se leagă de **TGFBR2**, care recrutează și fosforilează **TGFBR1**.",
        "TGFBR1 fosforilează **SMAD2/3**, care se leagă de SMAD4 și intră în nucleu → producție de matrice, diferențierea celulelor musculare netede. Există și căi non-SMAD (ERK, p38)." ] },
      { h:"Paradoxul TGF-β", p:"În Marfan fibrilina lipsă eliberează prea mult TGF-β. În Loeys-Dietz mutațiile reduc funcția receptorului sau a SMAD, și totuși peretele aortic arată semnal TGF-β crescut. Explicația acceptată acum: contează echilibrul fin al căii și mecanosensibilitatea celulelor musculare netede, nu nivelul absolut; atât prea mult, cât și prea puțin semnal dăunează peretelui." },
      { h:"Legea lui Laplace", p:"Tensiunea parietală ≈ presiune × rază / (2 × grosime). Pe măsură ce aorta se dilată, tensiunea pe perete crește chiar la aceeași TA → mai multă dilatare → cerc vicios. De aceea diametrul prezice riscul de disecție, iar controlul TA și al frecvenței (dP/dt) protejează." }
    ],
    mols:["FBN1","ELN","LOX","COL3A1","TGFBR1","TGFBR2","SMAD3","TGFB2","MMP2"], see:["vsmc","vas-mec"] },

  { id:"ldl-fz", grp:"fz", sec:"Vasul și sângele", short:"Lipoproteinele",
    title:"Lipoproteinele: drumul LDL și al trigliceridelor",
    idea:"Ficatul scoate LDL din sânge prin receptorul LDL, iar PCSK9 hotărăște cât trăiește receptorul. Aproape toate hipolipemiantele funcționează la fel: îl fac pe ficat să aibă mai mulți receptori.",
    blocks:[
      { h:"Calea exogenă (din intestin)", steps:[
        "Intestinul împachetează grăsimea din alimentație în **chilomicroni** (apoB-48).",
        "**Lipoprotein lipaza** (LPL), ancorată pe endoteliul capilarelor de GPIHBP1 și activată de apoC-II, hidrolizează trigliceridele → acizii grași intră în mușchi și în țesutul adipos.",
        "ApoC-III și ANGPTL3 frânează LPL.",
        "Resturile de chilomicroni sunt captate de ficat prin apoE." ] },
      { h:"Calea endogenă (din ficat)", steps:[
        "Ficatul secretă **VLDL** (o apoB-100 pe particulă).",
        "LPL îi scoate trigliceridele → IDL → **LDL**, bogat în colesterol.",
        "LDL se leagă prin apoB-100 de **receptorul LDL** (LDLR) → endocitoză → LDL e degradat în lizozom, iar receptorul revine la suprafață (de ~150 de ori).",
        "**PCSK9** se leagă de receptor și îl trimite la degradare împreună cu LDL → mai puțini receptori." ] },
      { h:"Cum acționează medicamentele", table:{ head:["Medicament","Țintă","Mecanism","Scăderea LDL"], rows:[
        ["Statine","HMGCR","colesterol intracelular mai mic → SREBP2 → mai mulți LDLR","30-50 %"],
        ["Ezetimib","NPC1L1","mai puțin colesterol din intestin → mai mulți LDLR","20-25 %"],
        ["Acid bempedoic","ACLY","sinteză mai mică, doar în ficat","15-20 %"],
        ["Anti-PCSK9, inclisiran","PCSK9","receptorii sunt reciclați în loc să fie distruși","50-60 %"],
        ["Evinacumab","ANGPTL3","independent de LDLR","~50 %"] ] } },
      { h:"HDL și Lp(a)", list:[
        "**HDL**: ABCA1 încarcă apoA-I cu colesterol din macrofage (transportul invers); CETP mută esterii de colesterol spre particulele cu apoB. Creșterea farmacologică a HDL nu a redus evenimentele: HDL-C e un marker, nu o țintă.",
        "**Lp(a)**: o particulă LDL legată de apo(a). Nivelul e stabilit genetic de numărul de repetiții din gena LPA (izoforme mici = nivel mare) și se dozează o dată în viață. E aterogenă, antifibrinolitică (apo(a) seamănă cu plasminogenul) și proinflamatorie." ] },
      { h:"Ideea cauzală", p:"Ateroscleroza depinde de expunerea cumulată la particulele cu apoB: concentrație × ani. Variantele genetice care scad LDL de la naștere (PCSK9, HMGCR, NPC1L1) protejează mai mult decât aceeași scădere obținută târziu cu medicamente; de aici ideea „mai jos, mai devreme, mai mult timp”." }
    ],
    mols:["LDLR","APOB","PCSK9","HMGCR","NPC1L1","ACLY","LPA","CETP","ANGPTL3","APOC3","LPL","APOE","ABCA1"], see:["vas-mec"] },

  { id:"hemo-fz", grp:"fz", sec:"Vasul și sângele", short:"Hemostaza",
    title:"Hemostaza: plachete, coagulare, fibrinoliză",
    idea:"Plachetele formează dopul inițial, coagularea îl armează cu fibrină, iar fibrinoliza îl desface. Trombul arterial e bogat în plachete (de aceea antiagregante), cel venos în fibrină și eritrocite (de aceea anticoagulante).",
    blocks:[
      { h:"Plachetele", steps:[
        "Leziunea expune colagen; la forfecare mare **vWF** se desfășoară și prinde plachetele prin GPIb.",
        "Colagenul activează plachetele prin GPVI.",
        "Plachetele activate eliberează **TXA2** (prin COX-1, blocată de aspirină) și **ADP** (receptorul P2Y12, blocat de clopidogrel, prasugrel, ticagrelor); trombina le activează prin PAR-1.",
        "**GPIIb/IIIa** își schimbă forma și leagă fibrinogenul între plachete → agregare." ] },
      { h:"Coagularea (modelul celular)", steps:[
        "**Inițiere**: factorul tisular (F3) expus se leagă de FVIIa → puțin FXa → puțină trombină.",
        "**Amplificare**: trombina activează plachetele, FV, FVIII și FXI.",
        "**Propagare**: pe suprafața plachetelor, complexele FIXa-FVIIIa (tenaza) și FXa-FVa (protrombinaza) produc o explozie de trombină.",
        "Trombina transformă fibrinogenul în fibrină; FXIIIa o stabilizează." ] },
      { h:"Frânele", list:[
        "**Antitrombina** inhibă trombina și FXa; heparina o accelerează de ~1000 de ori (HBPM și fondaparinux acționează mai ales pe FXa).",
        "**Proteina C activată + proteina S**: trombina legată de trombomodulină activează proteina C, care distruge FVa și FVIIIa.",
        "**TFPI** oprește complexul factor tisular-FVIIa.",
        "**Fibrinoliza**: t-PA transformă plasminogenul în plasmină, care degradează fibrina (D-dimeri); PAI-1 inhibă t-PA." ] },
      { h:"Vitamina K", p:"FII, FVII, FIX, FX și proteinele C și S au nevoie de γ-carboxilare dependentă de vitamina K. VKORC1 reciclează vitamina K, iar AVK o blochează. Proteina C și FVII au timp de înjumătățire scurt → în primele zile de AVK proteina C scade înaintea factorilor procoagulanți → stare procoagulantă tranzitorie (de aici suprapunerea cu heparină și necroza cutanată la deficitul de proteină C)." },
      { h:"De ce FXI e o țintă nouă", p:"FXI contribuie mult la creșterea trombului (amplificare), dar puțin la dopul hemostatic de la locul unei leziuni. Persoanele cu deficit congenital au mai puține tromboze și sângerări de obicei ușoare → inhibitorii de FXI promit anticoagulare cu mai puține sângerări." }
    ],
    mols:["VWF","PTGS1","P2RY12","ITGA2B","F3","F10","F2","F5","F11","SERPINC1","PROC","PLAT","VKORC1"], see:["vas-mec"] }
);
