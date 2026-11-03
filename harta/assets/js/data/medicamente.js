/* Medicamente pe clase. subs: [subclasă, molecule, ținte (simboluri de gene, separate prin virgulă), "studii" opțional]
   MED_FIELDS = rubricile pe care le va primi fiecare fișă de clasă. */
var HC = window.HC = window.HC || {};

HC.MED_FIELDS = ["Mecanism", "Indicații", "Doze", "Ajustări renal / hepatic", "Contraindicații", "Interacțiuni", "Monitorizare", "Trialuri-cheie"];
HC.DRUGS = [
  { id:"antiagregante", name:"Antiagregante", subs:[
    ["Aspirina","acid acetilsalicilic","PTGS1"],
    ["Inhibitori P2Y12","clopidogrel, prasugrel, ticagrelor, cangrelor","P2RY12, CYP2C19"],
    ["Inhibitori GP IIb/IIIa","tirofiban, eptifibatidă","ITGA2B"] ] },
  { id:"anticoag", name:"Anticoagulante", subs:[
    ["Heparine","HNF, HBPM (enoxaparină), fondaparinux","SERPINC1, F10, F2"],
    ["Antivitamine K","warfarină, acenocumarol, fluindionă","VKORC1, CYP2C9"],
    ["Anti-Xa directe","apixaban, rivaroxaban, edoxaban","F10"],
    ["Anti-IIa directe","dabigatran, bivalirudină, argatroban","F2"],
    ["Anti-XI","abelacimab, asundexian, milvexian","F11","studii"],
    ["Antidoturi","protamină, vitamina K, CCP, idarucizumab, andexanet",""] ] },
  { id:"fibrinolitice", name:"Fibrinolitice", subs:[
    ["Activatori ai plasminogenului","alteplază, tenecteplază, reteplază","PLAT"] ] },
  { id:"lipide", name:"Hipolipemiante", subs:[
    ["Statine","atorvastatină, rosuvastatină, simvastatină, pravastatină","HMGCR, SLCO1B1"],
    ["Ezetimib","ezetimib","NPC1L1"],
    ["Acid bempedoic","acid bempedoic","ACLY"],
    ["Calea PCSK9","evolocumab, alirocumab, inclisiran","PCSK9"],
    ["Anti-ANGPTL3","evinacumab","ANGPTL3"],
    ["Trigliceride","fibrați, icosapent etil, olezarsen, volanesorsen","APOC3, LPL"],
    ["Anti-Lp(a)","pelacarsen, olpasiran, lepodisiran","LPA","studii"],
    ["Inhibitori CETP","obicetrapib","CETP","studii"] ] },
  { id:"ic", name:"Insuficiența cardiacă", note:"Cei patru piloni plus terapiile adiționale.", subs:[
    ["Betablocante","bisoprolol, metoprolol succinat, carvedilol, nebivolol","ADRB1"],
    ["IECA, sartani, ARNI","ramipril, perindopril, valsartan, candesartan, sacubitril/valsartan","ACE, AGTR1, MME"],
    ["Antagoniști mineralocorticoizi","spironolactonă, eplerenonă, finerenonă","NR3C2"],
    ["Inhibitori SGLT2","dapagliflozin, empagliflozin, sotagliflozin","SLC5A2"],
    ["Ivabradină","ivabradină","HCN4"],
    ["Stimulator de guanilat ciclază","vericiguat","GUCY1A1"],
    ["Digitalice","digoxină","ATP1A1"],
    ["Alte terapii","hidralazină + dinitrat de izosorbid, fier carboximaltoză IV",""],
    ["Activator de miozină","omecamtiv mecarbil","MYH7","studii"] ] },
  { id:"diuretice", name:"Diuretice", subs:[
    ["De ansă","furosemid, bumetanidă, torasemid",""],
    ["Tiazidice și tiazid-like","hidroclorotiazidă, indapamidă, clortalidonă, metolazonă",""],
    ["Economizoare de K⁺","amilorid, triamteren (ARM: vezi IC)","NR3C2"],
    ["Altele","acetazolamidă, tolvaptan",""] ] },
  { id:"hta", name:"Antihipertensive", subs:[
    ["Blocante de calciu dihidropiridinice","amlodipină, lercanidipină, nifedipină","CACNA1C"],
    ["Blocarea SRAA","IECA, sartani (vezi IC)","ACE, AGTR1"],
    ["α-blocante","urapidil, prazosin, doxazosin","ADRA1A"],
    ["Centrale","clonidină, moxonidină, metildopa",""],
    ["Vasodilatatoare directe","hidralazină, minoxidil",""],
    ["Urgențe hipertensive","nicardipină, labetalol, clevidipină, nitroprusiat, urapidil",""],
    ["Antagonist de endotelină","aprocitentan","EDN1"],
    ["Noi ținte","zilebesiran (angiotensinogen), baxdrostat (aldosteron-sintază)","","studii"] ] },
  { id:"angina", name:"Antianginoase", subs:[
    ["Nitrați","nitroglicerină, dinitrat și mononitrat de izosorbid","GUCY1A1"],
    ["Blocante de calciu non-dihidropiridinice","verapamil, diltiazem","CACNA1C"],
    ["Inhibitor al INa tardiv","ranolazină","SCN5A"],
    ["Deschizător KATP","nicorandil","KCNJ8"],
    ["Metabolice","trimetazidină",""],
    ["Bradicardizante","betablocante, ivabradină","ADRB1, HCN4"] ] },
  { id:"antiaritmice", name:"Antiaritmice", note:"Clasificarea Vaughan Williams modernizată (Lei, 2018).", subs:[
    ["Clasa 0: blocante If","ivabradină","HCN4"],
    ["Clasa Ia","chinidină, disopiramidă, procainamidă","SCN5A, KCND3"],
    ["Clasa Ib","lidocaină, mexiletină","SCN5A"],
    ["Clasa Ic","flecainidă, propafenonă","SCN5A, RYR2"],
    ["Clasa II","betablocante, landiolol, esmolol","ADRB1"],
    ["Clasa III","amiodaronă, dronedaronă, sotalol, dofetilidă, ibutilidă","KCNH2"],
    ["Atrial-selective","vernakalant","KCNA5"],
    ["Clasa IV","verapamil, diltiazem","CACNA1C"],
    ["Alte","digoxină, adenozină, magneziu","ATP1A1"] ] },
  { id:"amine", name:"Inotrope și vasopresoare", subs:[
    ["Catecolamine","noradrenalină, adrenalină, dobutamină, dopamină, izoprenalină","ADRB1, ADRA1A"],
    ["Inhibitori PDE3","milrinonă, enoximonă","PDE3A"],
    ["Sensibilizator de calciu","levosimendan","TNNC1"],
    ["Non-catecolaminice","vasopresină, angiotensină II",""] ] },
  { id:"htap", name:"HTAP", subs:[
    ["Antagoniști ai receptorilor endotelinei","bosentan, ambrisentan, macitentan","EDN1"],
    ["Inhibitori PDE5","sildenafil, tadalafil","PDE5A"],
    ["Stimulator de guanilat ciclază","riociguat","GUCY1A1"],
    ["Calea prostaciclinei","epoprostenol, treprostinil, iloprost, selexipag","PTGIS"],
    ["Calea activinei","sotatercept","BMPR2"] ] },
  { id:"cmspec", name:"Terapii specifice în cardiomiopatii", subs:[
    ["Inhibitori de miozină","mavacamten, aficamten","MYH7"],
    ["Stabilizatori de TTR","tafamidis, acoramidis","TTR"],
    ["Silențiatori de TTR","vutrisiran, patisiran, eplontersen","TTR"],
    ["Boala Fabry","agalsidază alfa/beta, migalastat","GLA"],
    ["Amiloidoza AL","daratumumab, bortezomib, ciclofosfamidă, dexametazonă","IGL"],
    ["Supraîncărcarea cu fier","deferoxamină, deferipronă, deferasirox","HFE"] ] },
  { id:"inflam", name:"Antiinflamatoare în cardiologie", subs:[
    ["Colchicină","colchicină","NLRP3"],
    ["AINS și aspirina în doză mare","ibuprofen, aspirină",""],
    ["Corticoizi","prednison, metilprednisolon",""],
    ["Anti-IL-1","anakinra, rilonacept, canakinumab","IL1B"],
    ["Anti-IL-6","ziltivekimab","IL6","studii"] ] },
  { id:"metab", name:"Metabolice cu beneficiu cardiovascular", subs:[
    ["Agoniști GLP-1 și GIP","semaglutid, tirzepatid","GLP1R"],
    ["Inhibitori SGLT2","vezi IC","SLC5A2"],
    ["Metformin","metformin",""],
    ["ARM nesteroidian","finerenonă","NR3C2"] ] },
  { id:"antidot", name:"Antidoturi și toxicologie", subs:[
    ["Digoxină","fragmente Fab antidigoxină",""],
    ["Betablocante și blocante de calciu","glucagon, insulină euglicemică în doze mari, calciu",""],
    ["Antidepresive triciclice și blocante de Na⁺","bicarbonat de sodiu",""],
    ["Toxice liposolubile","emulsie lipidică",""],
    ["Anticoagulante","vezi Anticoagulante",""] ] }
];
