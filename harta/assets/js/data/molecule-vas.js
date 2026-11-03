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
  // ---------- ENDOTELIUL (13) ----------
  { c:"endoteliu", k:"receptor", g:"NOS3", p:"NO-sintaza endotelială (eNOS)",
    f:"Produce NO din L-arginină: vasodilatație, antiagregare, antiinflamator, antiproliferativ.",
    d:"Disfuncția endotelială (biodisponibilitate scăzută a NO) e primul pas al aterosclerozei și apare în HTA, diabet, fumat.",
    t:"Nitrații furnizează NO din exterior.",
    fp:[
      "Factorii de risc (stres oxidativ, LDL oxidat, hiperglicemie, fumat) scad cofactorul BH4 → eNOS „decuplată” produce superoxid în loc de NO, iar superoxidul distruge restul de NO → vasodilatație dependentă de flux pierdută, endoteliu adeziv și protrombotic → aterogeneză; în coronare → ischemie microvasculară."
    ],
    tg:["athero"] },
  { c:"endoteliu", k:"receptor", g:"EDN1", p:"Endotelina-1",
    f:"Vasoconstrictor puternic și factor proliferativ, prin receptorii ETA și ETB.",
    d:"Crește în HTAP și în IC.",
    t:"Antagoniști ai receptorilor endotelinei: bosentan, ambrisentan, macitentan (HTAP; teratogeni).",
    fp:[
      "ET-1 crescută (HTAP, IC, hipoxie) → prin ETA: vasoconstricție intensă, proliferarea celulelor musculare netede și a fibroblastelor → remodelare vasculară pulmonară, RVP crescută."
    ],
    tg:["htap"] },
  { c:"endoteliu", k:"receptor", g:"PTGIS, PTGIR", p:"Prostaciclin-sintaza; receptorul IP",
    f:"Prostaciclina (PGI2): vasodilatație și antiagregare prin AMPc.",
    d:"Producție scăzută în HTAP.",
    t:"Epoprostenol, treprostinil, iloprost; selexipag (agonist al receptorului IP).",
    fp:[
      "Endoteliul pulmonar bolnav produce prea puțină prostaciclină și relativ mult tromboxan → vasoconstricție, proliferare, tromboză in situ → HTAP. Analogii de prostaciclină înlocuiesc ce lipsește."
    ],
    tg:["htap"] },
  { c:"endoteliu", k:"receptor", g:"BMPR2", p:"Receptorul BMP tip 2",
    f:"Calea BMP frânează proliferarea celulelor vasculare pulmonare și echilibrează calea activinei/TGF-β.",
    d:"Cea mai frecventă cauză de HTAP ereditară (~70-80 % din formele familiale, ~10-20 % din cele aparent idiopatice); penetranță incompletă, mai mare la femei.",
    t:"Sotatercept (capcană pentru liganzii activinei) reechilibrează calea.",
    fp:[
      "O singură copie funcțională → semnalul BMP (antiproliferativ, protector pentru endoteliu) e prea slab, iar calea activinei/TGF-β (proliferativă) domină → celulele endoteliale mor sau proliferează clonal, celulele musculare netede și fibroblastele invadează intima → leziuni plexiforme, obliterarea arteriolelor mici → RVP crește progresiv → VD se hipertrofiază, apoi se dilată și cedează.",
      "Penetranța e incompletă (mai mare la femei): e nevoie de un al doilea factor (inflamație, estrogeni, hipoxie, medicamente)."
    ],
    tg:["htap"] },
  { c:"endoteliu", k:"receptor", g:"ACVRL1, ENG, SMAD4, GDF2", p:"ALK1, endoglina, SMAD4, BMP9",
    f:"Aceeași cale BMP în endoteliu: maturarea vaselor.",
    d:"Telangiectazia hemoragică ereditară (Rendu-Osler): malformații arterio-venoase pulmonare (bule tardive la testul cu microbule, embolii paradoxale), hepatice (debit crescut), cerebrale; HTAP asociată (ACVRL1). SMAD4: și polipoză juvenilă.",
    fp:[
      "Calea BMP9 → ALK1/endoglină nu mai maturează vasele noi → capilarele nu se formează între arteriole și venule → comunicări arterio-venoase directe, fragile → telangiectazii care sângerează (epistaxis), MAV pulmonare (șunt dreapta-stânga: hipoxemie, embolii paradoxale, abcese cerebrale), hepatice (IC cu debit crescut).",
      "Pe aceeași cale BMP, ALK1 poate da și HTAP."
    ],
    tg:["htap"] },
  { c:"endoteliu", k:"nuclear", g:"SOX17, TBX4, EIF2AK4", p:"Factori de transcripție; kinaza GCN2",
    f:"Dezvoltarea vaselor și a plămânului.",
    d:"HTAP ereditară: SOX17 (asociată cardiopatiilor congenitale), TBX4 (copii, anomalii scheletice). EIF2AK4: boala veno-ocluzivă pulmonară, recesivă (vasodilatatoarele pot provoca edem pulmonar).",
    fp:[
      "SOX17 și TBX4 → dezvoltarea vaselor pulmonare și a plămânului e anormală → HTAP cu debut precoce.",
      "EIF2AK4: afectare predominant venoasă → sub vasodilatatoare arteriolele se dilată, venele nu → presiunea capilară crește → edem pulmonar (indiciu de boală veno-ocluzivă)."
    ],
    tg:["htap"] },
  { c:"endoteliu", k:"sange", g:"VWF", p:"Factorul von Willebrand",
    f:"Lipește plachetele de subendoteliu la forfecare mare.",
    d:"Boala von Willebrand dobândită tip 2A: multimerii mari sunt clivați la forfecare mare în stenoza aortică (sindromul Heyde) și sub LVAD sau ECMO.",
    fp:[
      "La forfecare foarte mare (stenoză aortică strânsă, LVAD, ECMO) multimerii mari de vWF se desfac și sunt tăiați de ADAMTS13 → se pierd cei mai activi multimeri → sângerări din angiodisplazii intestinale (sindromul Heyde). Se corectează după înlocuirea valvei."
    ],
    tg:["hemo"] },
  { c:"endoteliu", k:"receptor", g:"KDR", p:"VEGFR2",
    f:"Receptorul VEGF: angiogeneză, menține producția de NO.",
    d:"Inhibitorii căii VEGF (bevacizumab, sunitinib, pazopanib) dau HTA, proteinurie, disfuncție VG.",
    fp:[
      "Blocarea căii VEGF → eNOS mai puțin activă → mai puțin NO, rarefiere capilară, ET-1 crescută → HTA, proteinurie, microangiopatie trombotică; miocardul pierde suportul angiogenic → disfuncție VG."
    ],
    tg:["ic"] },
  { c:"endoteliu", k:"receptor", g:"VCAM1, ICAM1, SELE", p:"Molecule de adeziune, E-selectina",
    f:"Recrutează monocitele în intimă când endoteliul e activat.",
    d:"Pasul inițial al plăcii aterosclerotice.",
    fp:[
      "Endoteliul activat de LDL oxidat, citokine sau forfecare oscilantă exprimă VCAM-1 → monocitele se lipesc, intră în intimă și devin macrofage: primul pas celular al plăcii."
    ],
    tg:["athero"] },
  { c:"endoteliu", k:"sange", g:"PLAT, SERPINE1, THBD", p:"t-PA, PAI-1, trombomodulina",
    f:"Fibrinoliza endotelială și activarea proteinei C.",
    d:"PAI-1 crescut în sindromul metabolic (tromboză).",
    t:"t-PA recombinant (alteplază, tenecteplază): tromboliza.",
    fp:[
      "PAI-1 crescut (obezitate, diabet, inflamație) → t-PA inhibat → fibrinoliză lentă → trombii persistă → risc trombotic arterial și venos."
    ],
    tg:["hemo"] },
  { c:"endoteliu", k:"nuclear", g:"KLF2", p:"Factorul de transcripție activat de fluxul laminar",
    f:"Fluxul laminar cu forfecare mare îl activează; pornește eNOS, trombomodulina și programul antiinflamator și oprește NF-κB.",
    d:"Stins în zonele cu flux turbulent sau oscilant (bifurcații, curburi interne, ostii): acolo apar plăcile. Statinele cresc expresia KLF2 (efect pleiotrop).",
    fp:[
      "Flux turbulent sau oscilant → KLF2 scade → NF-κB, YAP/TAZ și AP-1 se aprind → VCAM-1, permeabilitate crescută, proteoglicani care rețin particulele cu apoB → placa pornește exact acolo.",
      "Fluxul turbulent cronic lasă și o memorie epigenetică (metilarea ADN-ului prin DNMT1): zona rămâne vulnerabilă."
    ],
    tg:["athero"] },
  { c:"endoteliu", k:"canal", g:"PIEZO1", p:"Canal ionic mecanosensibil",
    f:"Simte forfecarea fluxului pe membrana endotelială și pornește semnalele care reglează eNOS și inflamația.",
    d:"Pierdere de funcție: limfedem congenital generalizat. Câștig de funcție: xerocitoză ereditară (anemie hemolitică). În vase, unul dintre senzorii care decid unde se formează plăcile.",
    fp:[
      "În flux turbulent semnalul mecanic e tradus în activarea integrinelor și a NF-κB în loc de programul protector → endoteliu inflamat, permeabil."
    ],
    tg:["athero"] },
  { c:"endoteliu", k:"receptor", g:"RNF213", p:"Misterina (ubiquitin-ligază)",
    f:"Rol în angiogeneză și în răspunsul endoteliului la hipoxie și inflamație.",
    d:"Varianta p.R4810K, frecventă în Asia de Est: boala moyamoya și stenoze aterosclerotice intracraniene; asociată și cu HTAP.",
    fp:[
      "Varianta dereglează răspunsul endoteliului la hipoxie și inflamație → îngroșarea intimei în arterele intracraniene → stenoze progresive și colaterale fragile (moyamoya)."
    ],
    tg:["athero","htap"] },

  // ---------- MEDIA: CELULA MUSCULARĂ NETEDĂ (13) ----------
  { c:"media", k:"struct", g:"ACTA2", p:"Actina musculară netedă α",
    f:"Aparatul contractil al celulei musculare netede.",
    d:"Aortopatie toracică ereditară (disecție la diametre sub 50 mm), boală coronară și AVC precoce, boală moyamoya, livedo reticularis.",
    fp:[
      "Actina musculară netedă mutantă intră în filamente (dominant-negativ) → celulele musculare netede nu mai contractă și nu mai simt tensiunea peretelui → trec spre fenotip proliferativ sau mor → media aortei degenerează (disecție), iar în arterele mici celulele proliferează și le îngustează (boală coronară, moyamoya, AVC precoce)."
    ],
    tg:["aorta"] },
  { c:"media", k:"struct", g:"MYH11", p:"Miozina musculară netedă",
    f:"Motorul celulei musculare netede.",
    d:"Aortopatie toracică ereditară asociată cu canal arterial persistent.",
    fp:[
      "Miozina musculară netedă defectă → contracția și mecanosensibilitatea scad → degenerare medială aortică; ductul arterial, care se închide prin contracția celulelor musculare netede după naștere, rămâne deschis (PCA)."
    ],
    tg:["aorta","congenital"] },
  { c:"media", k:"receptor", g:"MYLK, PRKG1", p:"Kinaza lanțului ușor al miozinei; PKG-1",
    f:"MYLK pornește contracția; PKG-1 mediază relaxarea prin GMPc.",
    d:"Aortopatie toracică ereditară, disecție uneori la diametre mici.",
    fp:[
      "MYLK pierdut → lanțul ușor al miozinei nu mai e fosforilat → contracția scade → disecție chiar la diametre aproape normale.",
      "PRKG1 câștig de funcție → PKG activă permanent → celula mereu relaxată, fără tonus → perete slab → disecție la tineri."
    ],
    tg:["aorta"] },
  { c:"media", k:"canal", g:"CACNA1C (vascular)", p:"Cav1.2 din celula musculară netedă",
    f:"Intrarea Ca²⁺ care susține tonusul vascular.",
    d:"Ținta principală a tratamentului HTA cu blocante de calciu.",
    t:"Dihidropiridine: amlodipină, nifedipină.",
    fp:[
      "Blocarea Cav1.2 vascular → mai puțin Ca²⁺ în celula musculară netedă → vasodilatație arteriolară → TA scade; efecte asociate: tahicardie reflexă (dihidropiridine), edeme maleolare (dilatare precapilară fără dilatare venoasă)."
    ],
    tg:["ic"] },
  { c:"media", k:"canal", g:"KCNK3", p:"TASK-1 (canal de K⁺ de fond)",
    f:"Menține potențialul de repaus al celulelor musculare netede pulmonare.",
    d:"HTAP ereditară.",
    fp:[
      "TASK-1 pierdut → celula musculară netedă pulmonară se depolarizează → Cav1.2 deschise → Ca²⁺ crescut → vasoconstricție și proliferare → HTAP."
    ],
    tg:["htap"] },
  { c:"media", k:"receptor", g:"GUCY1A1, GUCY1B1", p:"Guanilat ciclaza solubilă",
    f:"Receptorul intracelular al NO: produce GMPc, care relaxează celula.",
    d:"Variante rare: boală moyamoya, ahalazie. Calea e deficitară în HTAP și IC.",
    t:"Riociguat (HTAP, CTEPH), vericiguat (IC cu FEVG redusă după decompensare).",
    fp:[
      "Guanilat ciclaza nu mai răspunde la NO (sau NO lipsește) → GMPc scăzut → vasoconstricție și proliferare. Riociguatul și vericiguatul o stimulează direct, chiar cu puțin NO."
    ],
    tg:["htap","ic"] },
  { c:"media", k:"receptor", g:"PDE5A", p:"Fosfodiesteraza 5",
    f:"Degradează GMPc, mai ales în vasele pulmonare și corpii cavernoși.",
    d:"Blocarea prelungește efectul NO.",
    t:"Sildenafil, tadalafil (HTAP); contraindicate cu nitrații (hipotensiune severă).",
    fp:[
      "Blocarea PDE5 → GMPc durează mai mult → vasodilatație pulmonară. Cu nitrații (care cresc GMPc pe altă cale) → vasodilatație sistemică masivă → hipotensiune severă."
    ],
    tg:["htap"] },
  { c:"media", k:"receptor", g:"ADRA1A, ADRA1B", p:"Receptorii α1-adrenergici",
    f:"Gq: vasoconstricție.",
    d:"Țintă în șoc și în HTA.",
    t:"Noradrenalina, fenilefrina îi stimulează; urapidilul, prazosinul îi blochează.",
    fp:[
      "Activarea α1 → Gq → IP3 → Ca²⁺ din reticul + sensibilizare (RhoA-ROCK) → vasoconstricție; în șoc susține TA, în exces (feocromocitom, cocaină) → HTA severă, vasospasm."
    ],
    tg:["ic"] },
  { c:"media", k:"receptor", g:"RHOA, ROCK1, ROCK2", p:"Calea RhoA / Rho-kinaza (ROCK)",
    f:"Rho-kinaza inhibă fosfataza lanțului ușor al miozinei: celula musculară netedă rămâne contractată fără să crească Ca²⁺ (sensibilizarea la Ca²⁺).",
    d:"Hiperactivă în angina vasospastică, HTAP, HTA și disfuncția microvasculară coronariană.",
    t:"Fasudil (aprobat în Japonia și China, nu în Europa).",
    fp:[
      "ROCK activată excesiv (inflamație, fumat) → fosfataza miozinei inhibată → celula musculară netedă rămâne contractată la un nivel normal de Ca²⁺ → spasm coronarian (angina Prinzmetal), RVP crescută; susține și proliferarea celulelor musculare netede."
    ],
    tg:["athero","htap"] },
  { c:"media", k:"nuclear", g:"TCF21", p:"Factor de transcripție al celulei musculare netede și al fibroblastului",
    f:"Transformă celula musculară netedă care migrează în placă în „fibromiocit”, care construiește capișonul fibros.",
    d:"Locus de risc coronarian în studiile genetice; expresia mai mare în placă e asociată cu risc mai mic.",
    fp:[
      "TCF21 scăzut → mai puține fibromiocite → capișon fibros subțire → placă instabilă."
    ],
    tg:["athero"] },
  { c:"media", k:"nuclear", g:"KLF4", p:"Factor de transcripție al plasticității celulei musculare netede",
    f:"Împinge celula musculară netedă din placă spre fenotip de macrofag sau spre fenotip osteocondrogenic.",
    d:"Contribuie la celulele spumoase, la miezul necrotic, la inflamația plăcii și la calcificarea intimei.",
    fp:[
      "KLF4 activat de LDL oxidat și de colesterol → celulele musculare netede devin celule spumoase sau osteogenice → placă mai inflamată, miez necrotic mai mare, calcificare."
    ],
    tg:["athero"] },
  { c:"media", k:"nuclear", g:"CDKN2B-AS1 (9p21)", p:"ARN-ul necodant ANRIL din locusul 9p21",
    f:"Reglează genele vecine CDKN2A/B, frâne ale ciclului celular, în celula musculară netedă.",
    d:"Cel mai puternic locus comun de risc coronarian; asociat și cu AAA, anevrisme intracraniene și arteriopatie periferică. Acționează independent de lipide.",
    fp:[
      "Alela de risc dereglează proliferarea și senescența celulei musculare netede → perete vulnerabil la mai multe boli vasculare deodată, indiferent de LDL."
    ],
    tg:["athero","aorta"] },
  { c:"media", k:"nuclear", g:"HDAC9", p:"Histon-deacetilaza 9",
    f:"Reglează epigenetic programul inflamator al macrofagelor și fenotipul celulei musculare netede.",
    d:"Asociată mai ales cu AVC-ul de arteră mare (carotidian) și, mai slab, cu boala coronariană.",
    fp:[
      "Expresie crescută → inflamație mai mare în placă (inclusiv activarea inflamazomului) → plăci carotidiene mai vulnerabile → AVC de arteră mare."
    ],
    tg:["athero"] },

  // ---------- MATRICEA EXTRACELULARĂ ȘI ADVENTICEA (11) ----------
  { c:"matrice", k:"ecm", g:"FBN1", p:"Fibrilina-1",
    f:"Microfibrilele pe care se construiesc fibrele elastice; sechestrează TGF-β în matrice.",
    d:"Sindromul Marfan: dilatarea rădăcinii aortice, disecție, prolaps mitral, ectopie de cristalin. Chirurgie la ~50 mm (~45 mm cu factori de risc).",
    t:"Betablocante, sartani (losartan); chirurgie profilactică a rădăcinii.",
    fp:[
      "Fibrilina-1 insuficientă sau anormală → microfibrilele care leagă fibrele elastice de celulele musculare netede se formează prost → fibrele elastice se fragmentează sub stresul pulsatil (maxim la rădăcina aortei) → celulele nu mai simt tensiunea → degenerare medială, dilatare → Laplace: diametrul mai mare crește tensiunea parietală → cerc vicios → disecție tip A.",
      "Fibrilina sechestrează normal TGF-β latent; fără ea TGF-β e eliberat în exces → contribuie la remodelare (raționamentul pentru losartan).",
      "Aceeași fibrilină în ligamentul cristalinului (ectopie), în valva mitrală (prolaps mixomatos) și în creșterea osoasă (statură înaltă, arahnodactilie)."
    ],
    tg:["aorta"] },
  { c:"matrice", k:"receptor", g:"TGFBR1, TGFBR2", p:"Receptorii TGF-β tip 1 și 2",
    f:"Calea TGF-β întreține matricea vasculară.",
    d:"Sindromul Loeys-Dietz tip 1 și 2: disecție la diametre mai mici decât în Marfan, tortuozitate arterială, uvulă bifidă, hipertelorism.",
    fp:[
      "Receptorul are activitate kinazică redusă, dar paradoxal peretele aortic arată semnal TGF-β crescut (celulele vecine compensează) → dezechilibru al căii → degenerare medială mai agresivă decât în Marfan → disecție la diametre mai mici (praguri chirurgicale mai mici). Arterele devin tortuoase și anevrismale în tot corpul → imagistică de la cap la pelvis."
    ],
    tg:["aorta"] },
  { c:"matrice", k:"receptor", g:"SMAD3, SMAD2", p:"Mediatori intracelulari ai TGF-β",
    f:"Transmit semnalul TGF-β spre nucleu.",
    d:"Loeys-Dietz tip 3 (SMAD3: sindromul anevrisme-osteoartrită); SMAD2: aortopatie.",
    fp:[
      "Mediatorul intracelular al TGF-β e deficitar → același dezechilibru ca la receptori → anevrisme aortice și arteriale + degenerarea cartilajului (osteoartrită precoce)."
    ],
    tg:["aorta"] },
  { c:"matrice", k:"receptor", g:"TGFB2, TGFB3", p:"Liganzii TGF-β2 și TGF-β3",
    f:"Moleculele semnal ale căii.",
    d:"Loeys-Dietz tip 4 și 5, de obicei mai puțin agresive.",
    fp:[
      "Ligandul în cantitate insuficientă → semnal dezechilibrat → aortopatie, de obicei mai puțin agresivă decât la TGFBR1/2."
    ],
    tg:["aorta"] },
  { c:"matrice", k:"ecm", g:"COL3A1", p:"Colagenul tip III",
    f:"Colagenul peretelui arterial și al organelor cavitare.",
    d:"Ehlers-Danlos vascular: rupturi arteriale, intestinale și uterine la diametre normale; decizia nu se ia după diametru.",
    t:"Celiprolol; evitarea procedurilor invazive.",
    fp:[
      "Colagenul III mutant se asamblează prost (o singură alelă strică majoritatea trimerilor) → peretele arterelor de calibru mediu, intestinul și uterul nu mai rezistă la tracțiune → ruptură spontană fără dilatare prealabilă → diametrul nu prezice riscul; procedurile invazive (puncții, cateterism) sunt periculoase."
    ],
    tg:["aorta"] },
  { c:"matrice", k:"ecm", g:"COL5A1, COL5A2, COL1A1, COL1A2", p:"Colagenul tip V și I",
    f:"Colagenul fibrilar al pielii, osului și vaselor.",
    d:"Ehlers-Danlos clasic, osteogeneză imperfectă: uneori dilatare aortică, valvulopatii.",
    fp:[
      "Colagenul V reglează diametrul fibrilelor de colagen I → fibrile anormale → piele hiperextensibilă, cicatrizare proastă, articulații laxe; aorta e rar afectată (dilatare ușoară a rădăcinii)."
    ],
    tg:["aorta"] },
  { c:"matrice", k:"ecm", g:"ELN", p:"Elastina",
    f:"Fibrele elastice concentrice ale mediei.",
    d:"Deleția 7q11.23: sindromul Williams-Beuren (stenoză aortică supravalvulară, stenoze pulmonare periferice, hipercalcemie). Variante: stenoză supravalvulară izolată, cutis laxa.",
    fp:[
      "O singură copie de elastină (deleția 7q11.23) → celulele musculare netede produc mai multă matrice și proliferează ca să compenseze → media se îngroașă și lumenul se îngustează → stenoză aortică supravalvulară, stenoze pulmonare periferice, HTA renovasculară. Celelalte gene deletate explică fenotipul neuro-comportamental și hipercalcemia."
    ],
    tg:["congenital","aorta"] },
  { c:"matrice", k:"ecm", g:"LOX", p:"Lizil-oxidaza",
    f:"Leagă încrucișat colagenul și elastina.",
    d:"Aortopatie toracică ereditară.",
    fp:[
      "Fără legături încrucișate, colagenul și elastina sunt instabile → media aortei slabă → anevrism toracic și disecție."
    ],
    tg:["aorta"] },
  { c:"matrice", k:"ecm", g:"FBN2", p:"Fibrilina-2",
    f:"Microfibrile, mai ales în dezvoltare.",
    d:"Sindromul Beals (arahnodactilie contracturală congenitală), uneori dilatare aortică.",
    fp:[
      "Microfibrilele din dezvoltare sunt anormale → contracturi articulare congenitale, urechi „mototolite”; aorta e rar afectată."
    ],
    tg:["aorta"] },
  { c:"matrice", k:"ecm", g:"MMP2, MMP9", p:"Metaloproteinazele matricei",
    f:"Degradează colagenul și elastina.",
    d:"Activitate crescută în anevrisme și în capișonul subțire al plăcii vulnerabile.",
    fp:[
      "MMP activate de macrofage și inflamație → degradarea elastinei și colagenului → dilatare (anevrisme, mai ales abdominale) și subțierea capișonului fibros al plăcii → ruptură."
    ],
    tg:["aorta","athero"] },
  { c:"matrice", k:"nuclear", g:"45,X (cromozomial)", p:"Sindromul Turner",
    f:"Monosomie X; nu e o genă unică.",
    d:"Bicuspidie, coarctație, dilatare aortică (se indexează: aortic size index), întoarcere venoasă pulmonară parțială stângă; risc de disecție în sarcină.",
    fp:[
      "Lipsa unui cromozom X (mecanism incomplet cunoscut) → dezvoltare anormală a valvei aortice și a arcului (bicuspidie, coarctație) + statură mică → aorta se indexează la suprafața corporală; sarcina crește riscul de disecție."
    ],
    tg:["aorta","congenital"] },

  // ---------- LUMENUL: LIPIDE, PLACHETE, COAGULARE (28) ----------
  { c:"sange", k:"sange", g:"LDLR", p:"Receptorul LDL (ficat)",
    f:"Captează LDL din sânge.",
    d:"Hipercolesterolemie familială: heterozigotă ~1/250, boală coronară precoce; homozigotă cu LDL foarte mare și ateroscleroză în copilărie.",
    t:"Statinele și inhibitorii PCSK9 cresc numărul de receptori.",
    fp:[
      "Mai puțini receptori LDL funcționali → LDL rămâne mai mult în sânge → expunere cumulativă mare de la naștere → ateroscleroză coronariană precoce, xantoame tendinoase, arc cornean.",
      "Homozigot: LDL de peste 500 mg/dl, xantoame în copilărie, stenoză aortică supravalvulară, infarct la copil; statinele și anti-PCSK9 funcționează slab dacă nu există deloc receptori."
    ],
    tg:["lipide","athero"] },
  { c:"sange", k:"sange", g:"APOB", p:"Apolipoproteina B-100",
    f:"Proteina structurală a LDL și ligandul pentru LDLR; o particulă aterogenă conține o singură apoB.",
    d:"Hipercolesterolemie familială (defect de legare); pierderea de funcție dă hipobetalipoproteinemie, protectoare.",
    fp:[
      "ApoB mutant (ex. R3527Q) nu se mai leagă de receptor → LDL nu e captat → același fenotip ca la LDLR, mai blând.",
      "Fiecare particulă aterogenă are o singură apoB → apoB măsoară numărul de particule (util când trigliceridele sunt mari)."
    ],
    tg:["lipide","athero"] },
  { c:"sange", k:"sange", g:"PCSK9", p:"PCSK9",
    f:"Trimite receptorul LDL la degradare.",
    d:"Câștig de funcție: hipercolesterolemie familială. Pierdere de funcție: LDL mic toată viața și protecție coronară (modelul care a dus la medicament).",
    t:"Evolocumab, alirocumab (anticorpi); inclisiran (ARN mic interferent, de 2 ori pe an).",
    fp:[
      "**Câștig de funcție** → receptorii LDL sunt distruși prea repede → LDL crește (hipercolesterolemie familială).",
      "**Pierdere de funcție** → receptorii sunt reciclați mai mult → LDL scăzut toată viața → cu ~88 % mai puține evenimente coronariene la purtătorii afro-americani din studiul ARIC: dovada că LDL scăzut pe termen lung e sigur și protector."
    ],
    tg:["lipide","athero"] },
  { c:"sange", k:"sange", g:"LDLRAP1", p:"ARH (proteina adaptoare a LDLR)",
    f:"Ajută internalizarea receptorului LDL.",
    d:"Hipercolesterolemie autozomal recesivă.",
    fp:[
      "Receptorul LDL ajunge la membrană, dar nu poate fi internalizat în ficat → fenotip apropiat de forma homozigotă, recesiv; răspunde mai bine la statine decât homozigotul LDLR."
    ],
    tg:["lipide"] },
  { c:"sange", k:"sange", g:"LPA", p:"Lipoproteina(a)",
    f:"O particulă de LDL legată de apo(a): proaterogenă, protrombotică, proinflamatoare.",
    d:"Risc coronarian și de stenoză aortică calcificată, determinat genetic; se dozează o dată în viață.",
    t:"Pelacarsen, olpasiran, lepodisiran (în studii de fază 3).",
    fp:[
      "Lp(a) mare (determinată genetic, nu de dietă) → ca LDL, intră în intimă; apo(a) seamănă cu plasminogenul → frânează fibrinoliza; transportă fosfolipide oxidate → inflamație și calcificarea valvei aortice → infarct precoce, stenoză aortică. Statinele nu o scad."
    ],
    tg:["lipide","athero"] },
  { c:"sange", k:"receptor", g:"HMGCR", p:"HMG-CoA reductaza",
    f:"Enzima limitantă a sintezei colesterolului.",
    d:"Ținta statinelor.",
    t:"Atorvastatină, rosuvastatină.",
    fp:[
      "Statina inhibă sinteza de colesterol în hepatocit → colesterolul intracelular scade → SREBP2 activat → mai mulți receptori LDL (și mai mult PCSK9) → LDL plasmatic scade.",
      "Variantele naturale cu activitate HMGCR scăzută (randomizare mendeliană) arată același beneficiu coronarian și ușor mai mult diabet, la fel ca statinele."
    ],
    tg:["lipide","athero"] },
  { c:"sange", k:"receptor", g:"NPC1L1", p:"Transportorul intestinal al colesterolului",
    f:"Absorbția colesterolului în intestin.",
    d:"Ținta ezetimibului.",
    t:"Ezetimib.",
    fp:[
      "Ezetimibul → mai puțin colesterol din intestin ajunge la ficat → ficatul crește receptorii LDL → efect aditiv cu statina (care crește compensator absorbția intestinală)."
    ],
    tg:["lipide"] },
  { c:"sange", k:"receptor", g:"ACLY", p:"ATP-citrat liaza",
    f:"Enzimă din amonte de HMG-CoA reductază.",
    d:"Ținta acidului bempedoic (activat doar în ficat, fără miopatie).",
    t:"Acid bempedoic.",
    fp:[
      "Inhibarea ACLY scade sinteza de colesterol în amonte de HMGCR; promedicamentul e activat doar în ficat (nu în mușchi) → fără miopatie; poate crește acidul uric și declanșa guta."
    ],
    tg:["lipide"] },
  { c:"sange", k:"sange", g:"CETP", p:"Proteina de transfer a esterilor de colesterol",
    f:"Mută colesterolul din HDL în particulele cu apoB.",
    d:"Ținta inhibitorilor CETP; beneficiul vine din scăderea apoB, nu din creșterea HDL.",
    t:"Obicetrapib (în studii).",
    fp:[
      "Inhibarea CETP crește HDL, dar beneficiul clinic apare doar dacă scade apoB/LDL; creșterea HDL singură nu protejează."
    ],
    tg:["lipide"] },
  { c:"sange", k:"sange", g:"ANGPTL3", p:"Proteina asemănătoare angiopoietinei 3",
    f:"Inhibă lipoprotein lipaza și lipaza endotelială.",
    d:"Pierderea de funcție scade LDL și trigliceridele.",
    t:"Evinacumab (hipercolesterolemie familială homozigotă).",
    fp:[
      "ANGPTL3 frânează LPL și lipaza endotelială; blocarea lui scade trigliceridele și LDL independent de receptorul LDL → merge și în forma homozigotă fără receptori."
    ],
    tg:["lipide"] },
  { c:"sange", k:"sange", g:"APOC3", p:"Apolipoproteina C-III",
    f:"Inhibă lipoprotein lipaza și captarea hepatică a resturilor.",
    d:"Trigliceride crescute; pierderea de funcție e protectoare.",
    t:"Olezarsen, volanesorsen (sindromul de chilomicronemie familială).",
    fp:[
      "ApoC-III frânează LPL și captarea resturilor; în exces → trigliceride crescute, resturi aterogene. Blocarea lui scade trigliceridele chiar când LPL e deficitară (funcționează în chilomicronemia familială)."
    ],
    tg:["lipide"] },
  { c:"sange", k:"sange", g:"LPL, APOC2, APOA5, GPIHBP1, LMF1", p:"Lipoprotein lipaza și cofactorii ei",
    f:"Hidrolizează trigliceridele din chilomicroni și VLDL.",
    d:"Sindromul de chilomicronemie familială (recesiv): trigliceride extreme, pancreatite acute.",
    fp:[
      "LPL absentă sau inactivă (ori fără cofactor sau ancoră) → chilomicronii nu sunt hidrolizați → trigliceride peste 10 mmol/l → plasmă lăptoasă, pancreatite acute recurente, xantoame eruptive. Risc aterosclerotic paradoxal mic: chilomicronii mari nu intră în intimă."
    ],
    tg:["lipide"] },
  { c:"sange", k:"sange", g:"APOE", p:"Apolipoproteina E",
    f:"Ligandul resturilor de lipoproteine pentru receptorii hepatici.",
    d:"ε2/ε2: disbetalipoproteinemie (tip III, xantoame palmare); ε4: risc coronarian și de boală Alzheimer.",
    fp:[
      "ε2 se leagă slab de receptori → resturile de chilomicroni și VLDL se acumulează (disbetalipoproteinemie, de obicei cu un al doilea factor: obezitate, diabet, hipotiroidie) → colesterol și trigliceride crescute aproape egal, xantoame palmare, ateroscleroză.",
      "ε4 → LDL puțin mai mare și risc coronarian."
    ],
    tg:["lipide","athero"] },
  { c:"sange", k:"sange", g:"ABCG5, ABCG8, ABCA1", p:"Transportori de steroli și colesterol",
    f:"ABCG5/8 elimină sterolii vegetali; ABCA1 încarcă HDL cu colesterol.",
    d:"Sitosterolemia (xantoame, ateroscleroză precoce); boala Tangier (HDL aproape absent, amigdale portocalii).",
    fp:[
      "Sitosterolemia: sterolii vegetali nu mai sunt eliminați în bilă → xantoame, ateroscleroză precoce, hemoliză; răspunde la ezetimib.",
      "Tangier: fără ABCA1 colesterolul nu mai iese din macrofage → HDL aproape zero, depozite în amigdale, splină, nervi."
    ],
    tg:["lipide","athero"] },
  { c:"sange", k:"receptor", g:"IL1B, IL6, NLRP3", p:"Interleukina-1β, interleukina-6, inflamazomul NLRP3",
    f:"Calea inflamatorie care face placa instabilă.",
    d:"Ateroscleroza ca boală inflamatorie; IL-1 și în pericardita recidivantă.",
    t:"Colchicina (inhibă microtubulii și inflamazomul; COLCOT, LoDoCo2), canakinumab (CANTOS), ziltivekimab (anti-IL-6, în studii); anakinra și rilonacept în pericardita recidivantă.",
    fp:[
      "Cristalele de colesterol și LDL oxidat activează inflamazomul NLRP3 în macrofage → IL-1β → IL-6 → CRP (ficat) → inflamația subțiază capișonul și face placa instabilă.",
      "Blocarea IL-1β (CANTOS) a redus evenimentele independent de LDL: dovada ipotezei inflamatorii; colchicina acționează parțial pe aceeași cale."
    ],
    tg:["athero"] },
  { c:"sange", k:"nuclear", g:"TET2, DNMT3A", p:"Hematopoieza clonală de potențial nedeterminat (CHIP)",
    f:"Mutații somatice dobândite cu vârsta în celulele stem sanguine.",
    d:"Cresc riscul de boală coronară și de IC independent de lipide, prin macrofage mai inflamatorii.",
    fp:[
      "Celulele stem cu mutația se extind clonal → macrofage care produc mai mult IL-1β și IL-6 (prin NLRP3) → placă mai inflamată și remodelare miocardică → riscul crește ca la un factor de risc clasic."
    ],
    tg:["athero","ic"] },
  { c:"sange", k:"receptor", g:"PTGS1", p:"COX-1 plachetară",
    f:"Produce tromboxanul A2 (agregare, vasoconstricție).",
    d:"Ținta aspirinei (inhibiție ireversibilă, pe toată viața plachetei).",
    t:"Aspirină.",
    fp:[
      "Aspirina acetilează ireversibil COX-1 → plachetele (fără nucleu, nu pot face enzimă nouă) nu mai produc TXA2 pe toată durata vieții lor (7-10 zile) → agregare scăzută; endoteliul își reface COX → producția de prostaciclină se reia."
    ],
    tg:["hemo","athero"] },
  { c:"sange", k:"receptor", g:"P2RY12", p:"Receptorul P2Y12 al ADP",
    f:"Amplifică activarea plachetară.",
    d:"Ținta antiagregantelor din a doua clasă.",
    t:"Clopidogrel, prasugrel, ticagrelor, cangrelor.",
    fp:[
      "Blocarea P2Y12 → ADP nu mai amplifică activarea plachetară → mai puțină agregare și tromboză de stent. Clopidogrelul și prasugrelul blochează ireversibil (promedicamente), ticagrelorul reversibil (activ direct; dispnee prin adenozină)."
    ],
    tg:["hemo"] },
  { c:"sange", k:"receptor", g:"ITGA2B, ITGB3", p:"Glicoproteina IIb/IIIa",
    f:"Leagă fibrinogenul între plachete: calea finală a agregării.",
    d:"Trombastenia Glanzmann (deficit ereditar, sângerare).",
    t:"Tirofiban, eptifibatidă.",
    fp:[
      "Absentă (Glanzmann) → plachetele nu se pot lega între ele prin fibrinogen → sângerări mucoase cu număr normal de plachete; blocată farmacologic → agregarea dispare (risc mare de sângerare)."
    ],
    tg:["hemo"] },
  { c:"sange", k:"sange", g:"F2", p:"Protrombina / trombina",
    f:"Trombina transformă fibrinogenul în fibrină și activează plachetele.",
    d:"Varianta G20210A: trombofilie venoasă.",
    t:"Dabigatran (inhibă trombina direct); heparina nefracționată prin antitrombină.",
    fp:[
      "Varianta G20210A (în regiunea 3' netradusă) → ARNm mai stabil → mai multă protrombină → mai multă trombină → risc venos de ~2-3 ori mai mare."
    ],
    tg:["hemo"] },
  { c:"sange", k:"sange", g:"F10", p:"Factorul X(a)",
    f:"Punctul de convergență al căilor coagulării.",
    d:"Ținta anticoagulantelor orale anti-Xa.",
    t:"Rivaroxaban, apixaban, edoxaban; HBPM și fondaparinux prin antitrombină.",
    fp:[
      "FXa e punctul unde se întâlnesc căile coagulării; o moleculă de FXa produce multe molecule de trombină → blocarea lui oprește amplificarea → anticoagulare eficientă."
    ],
    tg:["hemo"] },
  { c:"sange", k:"sange", g:"F11", p:"Factorul XI",
    f:"Amplifică formarea trombinei; contribuie puțin la hemostaza normală.",
    d:"Deficitul e asociat cu mai puține tromboze și sângerări mici: țintă pentru anticoagulante mai sigure.",
    t:"Abelacimab, asundexian, milvexian (în studii).",
    fp:[
      "FXI amplifică formarea trombinei în trombul care crește, dar contează puțin în dopul hemostatic de la o leziune → deficitul congenital dă mai puține tromboze și sângerări de obicei ușoare → țintă pentru anticoagulare cu mai puține sângerări."
    ],
    tg:["hemo"] },
  { c:"sange", k:"sange", g:"F5", p:"Factorul V",
    f:"Cofactor al factorului Xa; inactivat de proteina C activată.",
    d:"Factorul V Leiden: rezistență la proteina C activată, cea mai frecventă trombofilie ereditară.",
    fp:[
      "Leiden (R506Q) schimbă situsul unde proteina C activată taie FVa → FVa rămâne activ mai mult → trombina se formează în exces → TVP și EP (risc de câteva ori mai mare la heterozigoți), crescut mult cu estrogeni, sarcină, imobilizare."
    ],
    tg:["hemo"] },
  { c:"sange", k:"sange", g:"SERPINC1, PROC, PROS1", p:"Antitrombina, proteina C, proteina S",
    f:"Anticoagulantele naturale.",
    d:"Deficite: trombofilie severă. Deficitul de antitrombină dă rezistență la heparină; deficitul de proteină C, necroză cutanată la inițierea AVK.",
    fp:[
      "Antitrombina scăzută → trombina și FXa nu mai sunt neutralizate → tromboză venoasă severă și precoce; heparina are nevoie de antitrombină ca să acționeze → rezistență la heparină.",
      "Proteina C sau S scăzute → FVa și FVIIIa nu mai sunt oprite → tromboză; homozigot → purpura fulminans la nou-născut; la inițierea AVK → necroză cutanată."
    ],
    tg:["hemo"] },
  { c:"sange", k:"receptor", g:"VKORC1, CYP2C9", p:"Epoxid-reductaza vitaminei K; citocromul P450 2C9",
    f:"VKORC1 reciclează vitamina K (ținta AVK); CYP2C9 metabolizează warfarina.",
    d:"Variantele explică o parte mare din variația dozei de AVK între pacienți.",
    t:"Warfarină, acenocumarol.",
    fp:[
      "Variante în promotorul VKORC1 → mai puțină enzimă → ajunge o doză mică de AVK; CYP2C9*2 și *3 → warfarina eliminată lent → INR mare și sângerare la doze standard."
    ],
    tg:["hemo"] },
  { c:"sange", k:"receptor", g:"CYP2C19", p:"Citocromul P450 2C19",
    f:"Activează clopidogrelul (promedicament) în ficat.",
    d:"Alelele cu pierdere de funcție (*2, *3), mai frecvente la asiatici: răspuns slab la clopidogrel, risc de tromboză de stent.",
    t:"Ticagrelor sau prasugrel la purtătorii cunoscuți.",
    fp:[
      "Alelele *2 și *3 → clopidogrelul nu e transformat în metabolit activ → P2Y12 rămâne neblocat → tromboză de stent; ticagrelorul și prasugrelul nu depind de această enzimă."
    ],
    tg:["hemo"] },
  { c:"sange", k:"sange", g:"SLCO1B1", p:"OATP1B1 (transportor hepatic)",
    f:"Introduce statinele în hepatocit.",
    d:"Varianta c.521T>C crește concentrația sanguină a statinelor: miopatie, mai ales cu simvastatina în doză mare.",
    fp:[
      "Transportorul hepatic lent → statina rămâne în sânge și ajunge în mușchi → miopatie, rabdomioliză (mai ales simvastatină în doză mare)."
    ],
    tg:["lipide"] },
  { c:"sange", k:"sange", g:"F3", p:"Factorul tisular",
    f:"Proteină din peretele vascular (adventice, macrofage) care, expusă sângelui, leagă FVIIa și pornește coagularea.",
    d:"Miezul necrotic al plăcii e bogat în factor tisular: ruptura plăcii îl expune și produce trombul coronarian (SCA). Exprimat și de monocite în sepsis (CID) și de celulele tumorale (tromboza asociată cancerului).",
    fp:[
      "Placa se rupe → factorul tisular din miezul necrotic întâlnește FVII din sânge → FXa și trombină → plachetele activate amplifică → tromb ocluziv (STEMI) sau neocluziv (NSTEMI)."
    ],
    tg:["hemo","athero"] }
);
