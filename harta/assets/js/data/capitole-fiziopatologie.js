/* Capitole. grp: fz = Fiziologie, fp = Fiziopatologie. sec = secțiunea (vezi HC.SEC_ORDER).
   blocks: { h: titlu, p: paragraf | list: [...] | steps: [...] | table: { head, rows, gcol } | dia: schemă }
   table.gcol = indexul coloanei cu simboluri de gene (devin cipuri clicabile).
   dia: "ap" | "cycle" | "nodal" | "ecc" | "eaddad" (vezi assets/js/diagrame/).
   mols = simbolurile genelor capitolului · see = capitole recomandate după. */
var HC = window.HC = window.HC || {};
HC.CHAPTERS = HC.CHAPTERS || [];
HC.CHAPTERS.push(
  { id:"aritmii", grp:"fp", sec:"Ritmul", short:"Mecanismele aritmiilor",
    title:"Mecanismele aritmiilor: automatism, EAD, DAD, reintrare",
    idea:"Orice aritmie are unul din trei mecanisme: automatism anormal, activitate declanșată (EAD, DAD) sau reintrare. Gena îți spune care mecanism e în joc, iar mecanismul îți spune ce o declanșează și ce o tratează.",
    blocks:[
      { dia:"eaddad" },
      { h:"1. Automatismul anormal", p:"Celule care nu ar trebui să fie pacemakeri capătă o fază 4 ascendentă: membrană depolarizată (ischemie, hipokaliemie), If crescut, stimulare β. Exemple: ritmul idioventricular accelerat de reperfuzie, tahicardia atrială focală." },
      { h:"2a. Postdepolarizările precoce (EAD)", list:[
        "**Când**: în fazele 2-3, la o celulă cu PA prea lung.",
        "**Cum**: platoul durează atât încât canalele Cav1.2 (sau Nav1.5 cu INa tardiv) apucă să iasă din inactivare și se redeschid → o nouă depolarizare înainte ca repolarizarea să se termine.",
        "**Favorizate de**: bradicardie și pauze (secvența scurt-lung-scurt), hipokaliemie, hipomagneziemie, medicamente anti-hERG, adrenalina bruscă la LQT1 și LQT2.",
        "**Rezultat**: torsada vârfurilor, întreținută de reintrarea funcțională pe fondul dispersiei repolarizării.",
        "**Tratament logic**: Mg²⁺, K⁺ spre 4,5-5 mmol/l, creșterea frecvenței (izoprenalină, stimulare temporară), oprirea medicamentului." ] },
      { h:"2b. Postdepolarizările tardive (DAD)", list:[
        "**Când**: după repolarizarea completă, în faza 4.",
        "**Cum**: reticulul supraîncărcat cu Ca²⁺ îl eliberează spontan prin RyR2 → valul de Ca²⁺ e scos de NCX → 3 Na⁺ intră pentru fiecare Ca²⁺ → curent de intrare → depolarizare → dacă atinge pragul, extrasistolă.",
        "**Favorizate de**: adrenalină, frecvență mare, digoxină, IC, hipercalcemie.",
        "**Rezultat**: CPVT (TV bidirecțională), tahicardiile din intoxicația digitalică, multe extrasistole din IC.",
        "**Tratament logic**: betablocant (oprește PKA și încărcarea reticulului), flecainidă (blochează RyR2 și INa), denervare simpatică stângă, oprirea digoxinei." ] },
      { h:"3. Reintrarea", list:[
        "**Condiții**: un bloc unidirecțional + o cale pe care impulsul circulă destul de încet încât țesutul din fața lui să fi ieșit din refractar.",
        "**Lungimea de undă** = viteza de conducere × perioada refractară. Reintrarea devine posibilă când lungimea de undă e mai mică decât circuitul. O favorizează deci **conducerea lentă** (INa scăzut, Cx43 scăzută, fibroză) și **refractarul scurt** (QT scurt, vagul în atrii).",
        "**Anatomică**: în jurul unei cicatrice (TV post-infarct, CMA) sau al inelului tricuspidian (flutterul tipic).",
        "**Funcțională**: rotori fără obstacol fix (FA, FV).",
        "**Reintrarea de fază 2** (Brugada, repolarizarea precoce): o zonă de epicard pierde domul, cea vecină îl păstrează → domul se propagă în zona deja repolarizată → extrasistolă cu cuplaj foarte scurt → FV." ] },
      { h:"Tabelul canalelor: prea puțin sau prea mult", table:{ head:["Curent","Genă","Prea puțin","Prea mult"], gcol:1, rows:[
        ["INa","SCN5A","Brugada, boală de conducere, boală de nod","LQT3 (curent tardiv)"],
        ["ICa,L","CACNA1C","Brugada cu QT scurt","LQT8 (Timothy)"],
        ["Ito","KCND3","—","Brugada, repolarizare precoce"],
        ["IKs","KCNQ1","LQT1, Jervell-Lange-Nielsen","QT scurt 2, FA"],
        ["IKr","KCNH2","LQT2, QT lung medicamentos","QT scurt 1"],
        ["IK1","KCNJ2","LQT7 (Andersen-Tawil)","QT scurt 3"],
        ["IKATP","KCNJ8","—","repolarizare precoce, FV idiopatică"],
        ["If","HCN4","bradicardie sinusală","—"],
        ["Eliberarea de Ca²⁺","RYR2","RyR2-CRDS","CPVT1"],
        ["IKACh","KCNJ5","—","FA vagală"] ] } }
    ],
    mols:["SCN5A","CACNA1C","KCND3","KCNQ1","KCNH2","KCNJ2","RYR2","CASQ2","CALM1","SLC8A1","GJA1","HCN4"], see:["pa","cec","nodal"] },

  { id:"cm-mec", grp:"fp", sec:"Miocardul", short:"Mecanismele cardiomiopatiilor",
    title:"Mecanismele cardiomiopatiilor: ce verigă se strică",
    idea:"Întrebarea-cheie pentru fiecare genă: ce verigă se strică? Motorul prea activ dă hipertrofie, motorul slab sau schela ruptă dau dilatare, lipiciul dintre celule dă cardiomiopatie aritmogenă, depozitul și infiltrarea dau perete gros și rigid.",
    blocks:[
      { h:"CMH de sarcomer", steps:[
        "Varianta destabilizează starea super-relaxată (MYH7 missense, MYBPC3 trunchiat) sau crește sensibilitatea la Ca²⁺ (troponine, tropomiozină).",
        "Prea multe punți active → contracție exagerată, relaxare incompletă, ATP consumat excesiv (fosfocreatina scade).",
        "Deficitul energetic și Ca²⁺ dereglat activează semnalele de hipertrofie → miocite mari, dezorganizate (disarray), fibroză.",
        "Boala microvasculară și hipertrofia → ischemie → și mai multă fibroză.",
        "Consecințe: hipertrofie asimetrică, obstrucție (SAM tras de flux, foițe mitrale lungi, mușchi papilari anteriorizați), disfuncție diastolică, FA (atriu mare), TV pe disarray și fibroză." ] },
      { h:"CMD", list:[
        "**Forța scade**: titina trunchiată (arc defect), sarcomer cu sensibilitate scăzută la Ca²⁺ (TNNT2, TPM1).",
        "**Forța nu mai e transmisă**: distrofina, sarcoglicanii, desmina, filamina C → membrana sau celula cedează → necroză → fibroză (adesea inferolaterală, subepicardică).",
        "**Nucleul cedează**: lamina → moarte celulară, fibroza sistemului de conducere → BAV înainte ca FEVG să scadă.",
        "**Calciul e dereglat**: PLN R14del, RBM20 → aritmii disproporționate.",
        "**Al doilea hit**: alcool, chimioterapie, sarcină, tahicardie, miocardită scot la iveală o variantă care altfel ar fi rămas tăcută.",
        "Apoi spirala comună: FEVG scade → simpatic și SRAA → remodelare → dilatare → IM funcțională → și mai multă dilatare." ] },
      { h:"Cardiomiopatia aritmogenă", steps:[
        "Desmozomul (PKP2, DSP, DSG2, DSC2, JUP) nu mai ține celulele lipite sub stres mecanic.",
        "Primul efect e electric: Nav1.5 și Cx43 pleacă de la disc → conducere lentă (undă epsilon, activare terminală QRS lungă) → aritmii înaintea leziunilor vizibile.",
        "Celulele se desprind și mor → inflamație (episoade „miocardită-like”, mai ales la DSP).",
        "Calea Wnt e suprimată → înlocuire fibro-grăsoasă dinspre epicard → substrat de reintrare.",
        "Sportul intens grăbește fiecare pas, de aceea oprirea lui face parte din tratament. VD (perete subțire) e primul pentru PKP2; VG pentru DSP, FLNC, DES." ] },
      { h:"Cardiomiopatia restrictivă", p:"Peretele devine rigid fără dilatare: troponina I mutantă (TNNI3) ține miofilamentele parțial active în diastolă; desmina formează agregate; amiloidul, fierul sau glicogenul umplu spațiul; fibroza (endomiocardică, post-iradiere) căptușește cavitatea. Rezultatul e același: presiune de umplere mare cu volum mic, atrii foarte mari, debit fix." },
      { h:"Fenocopiile CMH: de ce ECG-ul dă indicii", list:[
        "**PR scurt sau preexcitație** (Fabry precoce, Danon, PRKAG2, Pompe): depozitul modifică inelul fibros AV sau grăbește conducerea.",
        "**BAV, bradicardie** (PRKAG2, Fabry tardiv, amiloid, boli mitocondriale): infiltrarea și fibroza sistemului de conducere.",
        "**Voltaj mic cu pereți groși** (amiloid): depozit extracelular, nu miocite mai mari.",
        "**Voltaj enorm** (Danon, Pompe): miocite uriașe, încărcate.",
        "**Semne extracardiace**: rinichi și nervi (Fabry), mușchi și retard (Danon), tunel carpian (ATTR), surditate și diabet (mitocondrial), ataxie (Friedreich)." ] },
      { h:"Genă → mecanism → fenotip", table:{ head:["Mecanism","Gene","Fenotip tipic"], gcol:1, rows:[
        ["Sarcomer hipercontractil","MYH7, MYBPC3, TNNT2, TNNI3, MYL2","CMH, obstrucție, relaxare lentă"],
        ["Sarcomer hipocontractil sau arc defect","TTN, TNNT2, TPM1","CMD, adesea cu al doilea hit"],
        ["Transmisia forței, membrană fragilă","DMD, SGCD, DES, FLNC, BAG3","CMD, fibroză inferolaterală, miopatie"],
        ["Desmozom","PKP2, DSP, DSG2, DSC2, JUP","CMA, fibro-grăsos, TV"],
        ["Anvelopa nucleară","LMNA, EMD, TMEM43","BAV, aritmii maligne, apoi CMD"],
        ["Calciu și splicing","PLN, RBM20","CMD aritmogenă"],
        ["Depozit lizozomal sau de glicogen","GLA, LAMP2, PRKAG2, GAA","HVS + PR scurt, preexcitație, BAV"],
        ["Energia mitocondrială","FXN, TAZ, MT-TL1, SLC22A5","HVS sau CMD, boală sistemică"],
        ["Depozit extracelular","TTR, IGL","perete gros, voltaj mic, restrictiv"],
        ["Fier","HFE","restrictiv, apoi dilatativ"] ] } },
      { h:"Penetranță și expresivitate", p:"Aceeași variantă poate da boală severă la un membru al familiei și nimic la altul: contează genele modificatoare, sexul, vârsta, efortul, TA, alcoolul, sarcina. De aceea un purtător sănătos are nevoie de urmărire, nu de diagnostic, iar o variantă de semnificație incertă nu se folosește pentru testarea familiei." }
    ],
    mols:["MYH7","MYBPC3","TTN","LMNA","FLNC","DSP","PKP2","PLN","RBM20","GLA","TTR"], see:["sarcomer-fz","forta","energie","nucleu-fz","ic-mec"] },

  { id:"ic-mec", grp:"fp", sec:"Miocardul", short:"Spirala insuficienței cardiace",
    title:"Insuficiența cardiacă: spirala neuro-hormonală",
    idea:"Orice leziune care scade debitul pornește mecanisme compensatorii (simpatic, SRAA, ADH) care pe termen scurt susțin presiunea, iar pe termen lung distrug miocardul. Tratamentul IC înseamnă să tai aceste bucle.",
    blocks:[
      { h:"Spirala", steps:[
        "Leziunea inițială: infarct, genă, valvă, HTA, toxic, miocardită.",
        "Debitul scade → baroreceptorii și rinichiul semnalează „hipovolemie”.",
        "Simpaticul, SRAA și ADH se activează → tahicardie, vasoconstricție, retenție de Na⁺ și apă.",
        "Postsarcina și presarcina cresc → stres parietal mai mare (Laplace).",
        "Miocardul se remodelează: hipertrofie, apoptoză, fibroză, Ca²⁺ dereglat (SERCA2a scăzută, NCX crescut, RyR2 care scapă), Cx43 lateralizată.",
        "FEVG scade și mai mult → mai multă activare neuro-hormonală → cercul se închide; în paralel aritmiile (DAD, reintrare pe fibroză) duc la moarte subită." ] },
      { h:"Peptidele natriuretice, contra-sistemul", p:"BNP crește proporțional cu stresul parietal și încearcă să inverseze fiecare pas: natriureză, vasodilatație, frână pe SRAA și simpatic. Sacubitrilul îl ajută prelungindu-i durata de viață." },
      { h:"HFpEF", p:"Mecanismul dominant e sistemic: obezitate, diabet, HTA, BPOC → inflamație → disfuncție endotelială microvasculară → NO și GMPc scad în miocard → PKG scăzută → titina rigidă, hipertrofie, fibroză; plus rigiditate arterială și atrială, incompetență cronotropă, retenție de volum. De aceea tratamentul vizează comorbiditățile (SGLT2, agoniști GLP-1 la obezi, diuretic), nu un singur receptor." },
      { h:"Ce face fiecare clasă în spirală", table:{ head:["Clasă","Ce taie","Efect pe remodelare"], rows:[
        ["Betablocant","simpaticul (β1)","FEVG crește în luni, mai puține aritmii"],
        ["IECA, sartan, ARNI","angiotensina II (ARNI crește și peptidele natriuretice)","postsarcină și fibroză mai mici"],
        ["Antagonist mineralocorticoid","aldosteronul","fibroză mai mică, K⁺ păstrat"],
        ["SGLT2","congestia, rinichiul, metabolismul","mai puține spitalizări, nefroprotecție"],
        ["Diuretic de ansă","volumul","simptome; nu schimbă remodelarea"],
        ["Resincronizare","disincronia electrică","remodelare inversă în BRS"] ] } }
    ],
    mols:["ADRB1","ACE","NR3C2","NPPA","MME","SLC5A2","ATP2A2","CAMK2D","GJA1"], see:["beta","cm-mec"] },

  { id:"vas-mec", grp:"fp", sec:"Vasele", short:"Mecanismele bolilor vasculare",
    title:"Mecanismele bolilor vasculare",
    idea:"Aorta cedează când lanțul matrice-celulă musculară netedă nu mai simte și nu mai rezistă tensiunii; arterele pulmonare se închid când calea BMP pierde în fața proliferării; ateroscleroza e LDL reținut în intimă plus inflamație; tromboza e balanța coagulării înclinată.",
    blocks:[
      { h:"Aortopatiile ereditare", steps:[
        "Veriga lipsă: fibrilina (FBN1), calea TGF-β (TGFBR1/2, SMAD3, TGFB2/3), colagenul (COL3A1) sau aparatul contractil (ACTA2, MYH11, MYLK, PRKG1).",
        "Celulele musculare netede nu mai simt tensiunea și își pierd fenotipul contractil → apoptoză, fibre elastice fragmentate, proteoglicani acumulați (degenerare medială).",
        "Peretele cedează local → dilatare → tensiunea parietală crește (Laplace) → dilatare mai rapidă.",
        "Disecția: intima se rupe, sângele intră în medie și o desparte în două." ] },
      { h:"Când diametrul înșală", list:[
        "**Ehlers-Danlos vascular** (COL3A1): ruptură la diametre normale; decizia nu se ia după diametru.",
        "**Loeys-Dietz, ACTA2, MYLK, PRKG1**: disecție la diametre mai mici decât în Marfan → praguri chirurgicale mai mici, iar istoricul familial cântărește mult.",
        "**Turner**: aorta trebuie indexată (aortic size index), pentru că pacientele sunt mici.",
        "**Bicuspidia** (NOTCH1 și altele): aortopatie a aortei ascendente, mai ales la fenotipul de rădăcină." ] },
      { h:"HTAP", steps:[
        "BMPR2 (sau ACVRL1, SOX17 etc.) scade semnalul BMP antiproliferativ; calea activinei/TGF-β domină.",
        "Celulele endoteliale mor sau proliferează clonal; celulele musculare netede și fibroblastele invadează intima; se formează leziuni plexiforme.",
        "Dezechilibrul mediatorilor: NO și prostaciclina scad, endotelina crește → vasoconstricție + proliferare.",
        "Arteriolele se îngustează → RVP crește → VD se hipertrofiază (adaptare), apoi se dilată (decuplare VD-AP), IT funcțională, debit scăzut.",
        "Tratamentul țintește căile NO, prostaciclinei și endotelinei, iar sotatercept reechilibrează calea BMP/activină." ] },
      { h:"Ateroscleroza, pas cu pas", steps:[
        "Particulele cu apoB intră în intimă (proporțional cu concentrația, mai ales unde forfecarea e mică) și sunt reținute de proteoglicani.",
        "Se oxidează → endoteliul se activează (VCAM-1) → monocitele intră și devin macrofage.",
        "Macrofagele captează LDL oxidat prin receptori scavenger, fără frână → celule spumoase (stria lipidică).",
        "Cristalele de colesterol activează inflamazomul NLRP3 → IL-1β → IL-6 → CRP.",
        "Celulele musculare netede migrează în intimă și formează capișonul fibros; celulele moarte formează miezul necrotic.",
        "Placa vulnerabilă (capișon subțire roasă de MMP, miez mare, inflamație) → ruptură sau eroziune → factor tisular expus → tromb." ] },
      { h:"De ce placa alege un anumit pat vascular", p:"Placa apare acolo unde se întâlnesc trei lucruri. **Expunerea sistemică** (câte particule cu apoB circulă și câți ani, cât de inflamat e organismul) decide cât. **Peretele local** decide unde. **Genetica individuală** decide tiparul. Fiecare tipar clinic (o singură coronară, carotidele, peste tot, deloc) e o altă combinație a celor trei." },
      { h:"Peretele local: hemodinamica", list:[
        "**Flux laminar, forfecare mare** → endoteliul exprimă KLF2/KLF4 → eNOS, trombomodulină, program antiinflamator → endoteliu protejat.",
        "**Flux turbulent sau oscilant, forfecare mică** (bifurcații, curburi interne, ostii) → KLF2 se stinge, se aprind NF-κB, YAP/TAZ și AP-1 → VCAM-1, permeabilitate, proteoglicani care rețin apoB. Senzorii: complexul PECAM-1/VE-cadherină/VEGFR2, PIEZO1, glicocalixul, cilii primari.",
        "Fluxul turbulent cronic lasă o memorie epigenetică (metilare prin DNMT1): zona rămâne vulnerabilă.",
        "De aici locurile clasice: LAD proximală, bulbul carotidian, bifurcația iliacă.",
        "**Contraexemplele confirmă regula**: segmentul de sub o punte musculară e scutit (placa apare chiar înaintea lui), arterele pulmonare nu fac plăci decât când presiunea crește (HTAP)." ] },
      { h:"Peretele local: structura și originea embriologică", list:[
        "**Coronarele** au de la naștere o îngroșare difuză a intimei, bogată în proteoglicani: teren ideal de retenție, de aceea sunt printre primele afectate.",
        "**Artera mamară internă** e aproape imună: intimă subțire, limitantă elastică internă cu puține fenestrații, mult NO și prostaciclină. De aceea e cel mai durabil grefon. **Vena safenă** pusă în poziție arterială face ateroscleroză accelerată.",
        "**Originea embriologică a celulelor musculare netede** diferă: coronarele din proepicard, arcul aortic și carotidele din creasta neurală, aorta toracică descendentă din somite, aorta abdominală din mezodermul splanhnic. Fiecare are alt program genetic (gene HOX, răspuns la TGF-β, la lipide, la calcificare). Aorta toracică descendentă, relativ rezistentă, exprimă mai mult HOXA9, care frânează NF-κB.",
        "**Mecanica locală**: coronarele se îndoaie la fiecare bătaie, artera femuro-poplitee e torsionată la fiecare pas (canalul adductorilor), carotida are separare de flux în bulb." ] },
      { h:"Genetica: loci de perete, comuni sau specifici unui pat", p:"Aproximativ două treimi din locii pentru boala coronariană nu țin de lipide, ci de perete, mai ales de plasticitatea celulei musculare netede: TCF21 o transformă în fibromiocit (stabilizează placa), KLF4 o împinge spre macrofag sau spre fenotip osteocondrogenic (destabilizează, calcifică).", table:{ head:["Locus","Mecanism","Pat vascular"], gcol:0, rows:[
        ["CDKN2B-AS1","proliferarea și senescența celulei musculare netede (9p21)","coronare, AAA, anevrisme intracraniene, periferic"],
        ["HDAC9","inflamația în placă, fenotipul celulei musculare netede","carotide (AVC de arteră mare)"],
        ["RNF213","răspunsul endoteliului la hipoxie (p.R4810K)","stenoze intracraniene, moyamoya"],
        ["TCF21, KLF4","plasticitatea celulei musculare netede","coronare"],
        ["EDN1","locusul PHACTR1/EDN1: aceeași alelă crește riscul coronarian și scade riscul de disecție cervicală","coronare vs artere cervicale"],
        ["LPA","particulă aterogenă, antifibrinolitică, proinflamatorie","coronare, periferic, valva aortică"],
        ["F5","trombozabilitate (loc specific arteriopatiei periferice, alături de genele fumatului CHRNA3/5)","arteriopatie periferică"] ] } },
      { h:"Factorii de risc nu cântăresc la fel", table:{ head:["Pat","Factorul dominant"], rows:[
        ["Coronare","LDL/apoB, Lp(a)"],
        ["Carotide și creier","TA (mai ales pentru intracranian și lacune)"],
        ["Arterele membrelor","fumatul și diabetul; la diabetic plus calcificarea mediei sub genunchi (Mönckeberg, diferențiere osteogenică a celulei musculare netede, accentuată de BCR)"],
        ["Valva aortică","Lp(a), calcificare"] ] } },
      { h:"Difuz, țintit sau deloc", list:[
        "**Difuz (polivascular)**: motorul sistemic e atât de puternic încât depășește diferențele locale: hipercolesterolemie familială, diabet (boală coronariană difuză și distală), BCR, inflamație cronică (lupus, artrită reumatoidă, HIV), hematopoieză clonală (TET2, JAK2), vârstă. Pacienții polivasculari au cel mai mult beneficiu din tratamentele sistemice suplimentare (rivaroxaban 2,5 mg × 2 + aspirină în COMPASS, VOYAGER; LDL agresiv). Excepția opusă: iradierea, factor strict local, face plăci doar în câmpul iradiat.",
        "**Deloc**: apoB mic toată viața (pierdere de funcție în PCSK9, ANGPTL3, APOC3, ASGR1, hipobetalipoproteinemie) protejează mult mai mult decât același LDL obținut târziu cu medicamente, pentru că contează doza cumulată. Plus Lp(a) mic, scor poligenic favorabil, TA mică toată viața (populația tsimane are cele mai mici scoruri de calciu coronarian măsurate).",
        "**Țintit pe o singură coronară**: peste susceptibilitatea hemodinamică vine o componentă stocastică. Placa crește în trepte (rupturi sau eroziuni subclinice, vindecare, încă un strat), iar inflamația locală și compoziția plăcii decid care leziune devine culpabilă. Cele mai multe infarcte pornesc de la plăci care nu erau cele mai strâmte.",
        "**Concluzie**: expunerea e sistemică, localizarea e locală, tiparul e individual. Leziunea „țintită” arată unde a fost peretele cel mai vulnerabil, nu că boala e localizată, de aceea tratamentul rămâne sistemic." ] },
      { h:"Tromboza venoasă", p:"Triada Virchow: stază, leziune endotelială, hipercoagulabilitate. Trombofiliile ereditare înclină balanța: FV Leiden (FVa nu mai e tăiat de proteina C activată), protrombina G20210A (mai multă protrombină), deficitele de antitrombină, proteină C sau S (frânele lipsesc). Factorii dobândiți (estrogeni, sarcină, cancer, imobilizare, sindrom antifosfolipidic) se adună peste ele." },
      { h:"Genă → verigă → boală", table:{ head:["Verigă","Gene","Boală"], gcol:1, rows:[
        ["Microfibrile și elastină","FBN1, ELN, LOX","Marfan, Williams, aortopatie"],
        ["Calea TGF-β","TGFBR1, TGFBR2, SMAD3, TGFB2","Loeys-Dietz"],
        ["Colagen","COL3A1","Ehlers-Danlos vascular"],
        ["Aparatul contractil","ACTA2, MYH11, MYLK, PRKG1","aortopatie toracică ereditară"],
        ["Calea BMP endotelială","BMPR2, ACVRL1, ENG, SMAD4","HTAP, Rendu-Osler"],
        ["Captarea LDL","LDLR, APOB, PCSK9","hipercolesterolemie familială"],
        ["Lipoliza trigliceridelor","LPL, APOC3, ANGPTL3","chilomicronemie, hipertrigliceridemie"],
        ["Inflamația","NLRP3, IL1B, TET2","ateroscleroză inflamatorie, CHIP"],
        ["Frânele coagulării","SERPINC1, PROC, PROS1, F5, F2","trombofilie"] ] } }
    ],
    mols:["FBN1","TGFBR2","COL3A1","ACTA2","BMPR2","LDLR","PCSK9","LPA","NLRP3","F5","KLF2","PIEZO1","TCF21","KLF4","CDKN2B-AS1","HDAC9","RNF213"], see:["matrice-fz","endo-fz","ldl-fz","hemo-fz"] }
);
