// ══════════════════════════════════════
// DATA
// ══════════════════════════════════════

const TRIP_DATA = {
  destinations: ['seoul','sg','bali'],
  timeline: [
    { dest:'seoul', day:'Giorno 1 — Mer 15 Aprile', items:[
      { id:'s01', time:'09:00', name:'Atterraggio Incheon (ICN)', dur:'—', status:'free', tag:'volo', note:'AREX Airport Express al centro: 43 min, €8/persona. Oppure aerobus: 60 min, più economico.', detail:'L\'aeroporto di Incheon è considerato il migliore al mondo. Dal terminal T1 prendi l\'AREX diretto fino a Seoul Station in 43 minuti. Acquista la T-Money card alle macchinette — costa 3.000 won e si usa per metro, bus e taxi per tutto il soggiorno.' },
      { id:'s02', time:'11:00', name:'Check-in Hotel Naru + riposo jet lag', dur:'3h', status:'free', tag:'relax', note:'Jet lag di 7 ore — giornata leggera. Piscina infinity al 20° piano sul Han River aperta stagionalmente.', detail:'Hotel Naru Seoul MGallery è sul fiume Han. La piscina infinity al 20° piano è il posto perfetto per recuperare dopo il volo. Ristorante francese Voisin al 22° piano con vista fiume.' },
      { id:'s03', time:'14:30', name:'Quartiere Insadong', dur:'2h', status:'free', tag:'cultura', note:'Gallerie d\'arte, tè tradizionale, street food. Primo contatto con Seoul a passo lento.', detail:'Insadong è il quartiere più autentico e artistico di Seoul. Passeggia lungo la via principale Ssamziegil, entra nelle gallerie e siediti in una teahouse tradizionale. Prova il bingsu (gelato shaved ice coreano).' },
      { id:'s04', time:'19:00', name:'Cena grigliata coreana — Hongdae', dur:'1.5h', status:'free', tag:'cibo', note:'Samgyeopsal: pancia di maiale alla griglia. €20-30/persona. Quartiere universitario vivace.', detail:'Hongdae è il quartiere universitario e creativo di Seoul. Ordina samgyeopsal (pancia di maiale) o galbi (costine). Si cuoce al tavolo. Il soju va bevuto piccoli sorsi. I ristoranti aperti fino a tardissimo.' }
    ]},
    { dest:'seoul', day:'Giorno 2 — Gio 16 Aprile', items:[
      { id:'s05', time:'09:00', name:'Palazzo Gyeongbokgung', dur:'2h', status:'ok', tag:'cultura', note:'Biglietto online consigliato. Con hanbok tradizionale: ingresso gratuito. Cambio della guardia ore 10:00 e 14:00.', detail:'Il palazzo reale più grande della dinastia Joseon (1395). Ad aprile è circondato dai ciliegi in fiore — uno spettacolo straordinario. Il cambio della guardia dura 20 minuti e vale la visita. Noleggio hanbok all\'ingresso: 15.000-20.000 won per 1-2 ore.' },
      { id:'s06', time:'11:30', name:'Villaggio Hanok Bukchon', dur:'1.5h', status:'free', tag:'cultura', note:'A piedi dal palazzo — 10 min. Case tradizionali coreane. Foto migliori nelle stradine laterali lontano dai gruppi.', detail:'Bukchon Hanok Village è un quartiere di 900+ case tradizionali hanok. Le stradine più fotogeniche sono verso est, lontano dall\'ingresso principale. Rispetta il silenzio — qui vivono persone vere. I cartelli "quiet please" sono seri.' },
      { id:'s07', time:'13:30', name:'Pranzo — ristorante locale', dur:'1h', status:'free', tag:'cibo', note:'Bibimbap o naengmyeon (spaghetti freddi). €8-12/persona.', detail:'Cerca un ristorante locale senza menu in inglese — quelli sono i migliori. Il bibimbap (riso misto con verdure e uovo) è il piatto più tipico coreano. Il naengmyeon (spaghetti freddi in brodo) è perfetto in primavera.' },
      { id:'s08', time:'15:00', name:'Olive Young Myeongdong + Hemeko', dur:'2h + 1h buffer', status:'warn', tag:'K-Beauty', note:'MI-KOH: osservare bestseller, layout, pricing. Buffer 1h se trovi contatti grossisti interessanti nel quartiere.', detail:'Olive Young Myeongdong Global Town è il più grande store K-beauty al mondo per turisti. Porta il passaporto per il tax-free. Chiedi sempre "service?" dopo ogni acquisto — ti danno campioni extra. Hemeko a 2 minuti a piedi ha brand indie pre-mainstream.' },
      { id:'s09', time:'19:00', name:'N Seoul Tower — tramonto e cena', dur:'2h', status:'ok', tag:'vista', note:'Biglietto online. Tramonto ~19:30 ad aprile. Cena al ristorante N Terrace — prenotare 2-3 giorni prima.', detail:'La N Seoul Tower è sulla cima del Monte Namsan. Prendi la telecabina (Namsan Cable Car, 9.000 won) oppure fai la passeggiata di 20 minuti. La vista sulla Seoul illuminata al tramonto è mozzafiato. Il ristorante N Terrace ha vetrate panoramiche 360°.' }
    ]},
    { dest:'seoul', day:'Giorno 3 — Ven 17 Aprile', items:[
      { id:'s10', time:'10:30', name:'AMORE Seongsu — fondazione AI robot', dur:'2h', status:'urgent', tag:'K-Beauty', note:'PRENOTA ORA su amoremall.com — slot aprile aprono il 15 marzo. Chiuso lunedì.', detail:'AMORE Seongsu è il flagship AmorePacific su 3 piani nel quartiere hipster Seongsu. La fondazione personalizzata con il robot AI costa 7.000 won e richiede prenotazione. Se i slot sono esauriti: visita libera ugualmente ottima con 1500+ prodotti testabili gratis, analisi pelle AI, e campioni.' },
      { id:'s11', time:'13:00', name:'Pranzo Seongsu', dur:'1h', status:'free', tag:'cibo', note:'Quartiere hipster con cafe di design. Controlla #SeongsuPopup su Instagram per pop-up beauty con campioni gratis.', detail:'Seongsu è la "Brooklyn di Seoul" — ex zona industriale trasformata in quartiere creativo. Piena di cafe esperienziali, atelier e pop-up. Ottima zona per osservare le tendenze K-beauty emergenti per MI-KOH.' },
      { id:'s12', time:'14:30', name:'Sulwhasoo Spa Flagship — Gangnam', dur:'2.5h', status:'urgent', tag:'K-Beauty', note:'PRENOTA ORA su sulwhasoo.com o Pelago.com. Conferma entro 4 giorni lavorativi. €80-120/persona.', detail:'Il flagship Sulwhasoo a Dosan Park è considerato uno dei negozi beauty più belli al mondo — architettura ispirata alle lanterne coreane. Lo spa è al piano B1 e al 4° piano. Il trattamento Ginseng Journey (140 min) inizia con un foot bath al ginseng rosso e finisce con maschere e massaggio. Prenota almeno 2-3 settimane prima.' },
      { id:'s13', time:'17:30', name:'Tamburins Haus Dosan', dur:'1h', status:'free', tag:'K-Beauty', note:'A 5 min dal Sulwhasoo. Installazioni arte cinetica + Gentle Monster nello stesso edificio.', detail:'Tamburins è il brand di fragranze e hand cream più iconico di Korea. Il flagship Haus Dosan ha installazioni d\'arte che cambiano mensilmente — spesso con cavalli iperrealisti o robot. Le shell perfume hand cream (32.000 won) sono il regalo perfetto da riportare.' },
      { id:'s14', time:'19:30', name:'Rooftop M29 Fairmont', dur:'2h', status:'warn', tag:'vista', note:'29° piano, vista Han River. Prenotare tavolo 3-4 giorni prima. ~30 euro/persona con cocktail.', detail:'Il Fairmont Ambassador Seoul a Yeouido ha il rooftop bar M29 al 29° piano con una delle migliori viste di Seoul sul fiume Han. I cocktail bespoke del maestro mixologist sono eccezionali. Alternativa più vicina: Bar Voisin al 22° piano dell\'Hotel Naru.' }
    ]},
    { dest:'seoul', day:'Giorno 4 — Sab 18 Aprile', items:[
      { id:'s15', time:'08:00', name:'Han River Park — bici e ciliegi', dur:'2h', status:'free', tag:'relax', note:'Bikesharing gratuito o €1-2/h. Mattina presto: silenzio totale, luce perfetta per foto.', detail:'Il Han River Park si estende per decine di km lungo il fiume. Il tratto di Yeouido è il più bello in primavera con i ciliegi. Il bikesharing pubblico Ttareungyi costa 1.000 won per 30 minuti. I coreani fanno picnic sul prato con le stuoie — unisciti a loro.' },
      { id:'s16', time:'10:30', name:'Aquafield Jjimjilbang', dur:'3h', status:'warn', tag:'relax', note:'Terme coreane di lusso. €25-30/persona. Sabato mattina meno affollato.', detail:'Il jjimjilbang è la sauna/terme tradizionale coreana. Aquafield è la versione premium moderna con piscine termali, saune di legno e pietra, vasche calde e fredde, e lo scrub coreano "Italy towel" (optional, ~15.000 won). Porta cambi di biancheria intima. Aperto 24h.' },
      { id:'s17', time:'14:00', name:'The Mask Shop + Dongdaemun wholesale', dur:'2h + 1h buffer', status:'warn', tag:'K-Beauty', note:'MI-KOH: prezzi wholesale, margini costo-retail. Arrivare entro le 14:00 — alcuni vendor chiudono.', detail:'The Mask Shop a Dongdaemun ha prezzi fino al 40% sotto il retail su prodotti K-beauty virali. Tax-free disponibile. Aperto fino alle 5 del mattino. Per il wholesale, i mercati Migliore e Doota hanno vendor che vendono in bulk — portati una lista di prodotti MI-KOH da valutare e negozia prezzi all\'ingrosso.' },
      { id:'s18', time:'18:00', name:'Preparazione e cena di addio Seoul', dur:'—', status:'free', tag:'cibo', note:'Volo per Singapore il giorno successivo mattina.', detail:'Ultima serata a Seoul. Cena nel quartiere Hongdae o Itaewon. Itaewon ha una grande comunità internazionale e ristoranti di ogni tipo. Hongdae rimane la scelta più autentica e vivace per l\'ultima notte.' }
    ]},
    { dest:'sg', day:'Giorno 5 — Dom 19 Aprile', items:[
      { id:'g01', time:'13:00', name:'Atterraggio Singapore Changi (SIN)', dur:'—', status:'free', tag:'volo', note:'Volo Seoul-Singapore: 5h40. MRT al centro: 30 min, €1.60. Taxi: €20-25.', detail:'Changi Airport è un\'esperienza a sé — ha un giardino con cascata di 40m, cinema, piscina sul tetto. Prendi la MRT East-West line fino a City Hall o Raffles Place. Il pass turistico Singapore Tourist Pass (€10 per 3 giorni) è conveniente se fai molto trasporto pubblico.' },
      { id:'g02', time:'15:00', name:'Check-in + Clarke Quay', dur:'2h', status:'free', tag:'relax', note:'Aperitivo sul lungofiume alle 17:00 — temperatura più gestibile.', detail:'Clarke Quay è un quartiere sul Singapore River con bar, ristoranti e atmosfera vivace. La passeggiata sul lungfiume al tramonto è bellissima. Grab (l\'Uber asiatico) è il modo più comodo per muoversi — scarica l\'app prima di partire.' },
      { id:'g03', time:'19:30', name:'Hawker Centre Lau Pa Sat', dur:'1.5h', status:'free', tag:'cibo', note:'Street food Michelin a €3-8 a piatto. Satay, laksa, chili crab.', detail:'Lau Pa Sat è uno storico hawker centre vittoriano nel cuore del CBD. La sera la strada esterna si riempie di stand di satay (bastoncini di carne alla griglia con salsa di arachidi). Il chili crab è il piatto simbolo di Singapore (€15-20 a porzione da dividere). Laksa e chicken rice sono i classici.' }
    ]},
    { dest:'sg', day:'Giorno 6 — Lun 20 Aprile', items:[
      { id:'g04', time:'09:30', name:'Singapore Botanic Garden', dur:'1.5h', status:'free', tag:'relax', note:'Patrimonio UNESCO. Ingresso gratuito. Mattina presto: meno umidità.', detail:'I Giardini Botanici di Singapore sono un Patrimonio UNESCO. La National Orchid Garden (€5 ingresso) ha oltre 1.000 specie di orchidee. Il Ginger Garden è un\'altra sezione meravigliosa. Porta una borraccia d\'acqua — Singapore è caldissima.' },
      { id:'g05', time:'11:30', name:'Gardens by the Bay — Cloud Forest', dur:'2.5h', status:'ok', tag:'vista', note:'Biglietto online 1-2 giorni prima (€20/persona). Supertrees gratis alle 19:45 e 20:45.', detail:'Gardens by the Bay è la quintessenza di Singapore futuristica. Il Cloud Forest è la cupola con la cascata interna di 35m — al fresco a 18°C. La Flower Dome è la più grande serra di vetro al mondo. I Supertrees illuminati di notte durante lo spettacolo sono magici. Prenotare il ticket online per saltare la coda.' },
      { id:'g06', time:'14:30', name:'Chinatown + Little India', dur:'2h', status:'free', tag:'cultura', note:'Due quartieri a 10 min di MRT. Spezie, templi, street food.', detail:'Chinatown: Buddha Tooth Relic Temple, mercato coperto Maxwell Food Centre, Pagoda Street. Little India: Sri Veeramakaliamman Temple, Mustafa Centre (aperto 24h, ottimo per acquisti). I due quartieri si percorrono benissimo a piedi e raccontano la Singapore multiculturale.' },
      { id:'g07', time:'18:00', name:'Marina Bay Sands SkyPark aperitivo', dur:'2h', status:'warn', tag:'vista', note:'Ticket online 2-3 giorni prima (€18 con consumazione). Tramonto ~19:10.', detail:'Il SkyPark al 57° piano del Marina Bay Sands è iconico. La piscina infinity è riservata agli ospiti dell\'hotel. Il bar e la terrazza di osservazione sono accessibili con il ticket (include una drink). La vista sulla skyline al tramonto è una delle più belle dell\'Asia. Poi a piedi fino ai Supertrees per lo show gratuito.' },
      { id:'g08', time:'20:45', name:'Supertrees light show + cena', dur:'2h', status:'free', tag:'vista', note:'Spettacolo gratuito. Cena al hawker centre nelle vicinanze.', detail:'Garden Rhapsody è lo spettacolo di luci e musica dei Supertrees — completamente gratuito alle 19:45 e 20:45. Dura 10 minuti e vale molto. Cena dopo al Satay by the Bay hawker centre a pochi minuti a piedi.' }
    ]},
    { dest:'sg', day:'Giorno 7 — Mar 21 Aprile', items:[
      { id:'g09', time:'09:00', name:'Sentosa Island — spiaggia mattutina', dur:'2h', status:'free', tag:'relax', note:'Palawan Beach o Siloso Beach. Ingresso Sentosa €1. Mattino quasi deserto.', detail:'Sentosa è l\'isola del divertimento collegata alla terraferma da monorel e cable car. Le spiagge (Palawan, Siloso, Tanjong) hanno sabbia bianca e mare azzurro. Al mattino presto sono quasi deserte. Universal Studios Singapore richiede prenotazione separata se interessa.' },
      { id:'g10', time:'12:00', name:'Check-out + pranzo + shopping', dur:'3h', status:'free', tag:'relax', note:'Ultimo giro Orchard Road per acquisti. Check-out entro le 12:00.', detail:'Orchard Road è la strada dello shopping di Singapore — negozi duty-free, centri commerciali enormi. ION Orchard e Paragon sono i più lussuosi. Per ricordi più economici: Bugis Street Market. Deposita i bagagli in hotel fino alla partenza.' },
      { id:'g11', time:'17:00', name:'Volo Singapore → Bali (DPS)', dur:'2h40', status:'free', tag:'volo', note:'Scoot, AirAsia o Singapore Airlines. Arrivo Bali ~19:40. Transfer hotel prenotato: 30-45 min.', detail:'L\'aeroporto di Bali si chiama Ngurah Rai (DPS). Il transfer verso Ubud richiede circa 90 minuti — 45 se vai verso Seminyak/Nusa Dua. Prenota il transfer dal resort in anticipo — è più sicuro del taxi all\'arrivo. All\'ingresso a Bali: Visa on Arrival ~€27/persona, pagabile con carta.' }
    ]},
    { dest:'bali', day:'Giorno 8 — Mer 22 Aprile · UBUD', items:[
      { id:'b01', time:'07:30', name:'Terrazze di riso Tegalalang', dur:'2h', status:'free', tag:'vista', note:'Partire alle 7:30 da hotel prima delle folle. Driver privato ~€10 A/R. Verde intenso ad aprile.', detail:'Le terrazze di riso di Tegalalang sono il simbolo di Bali. Ad aprile il riso è verde intenso dopo la stagione delle piogge. Arrivare prima delle 8:30 per foto senza folle. I cafe sul bordo della terrazza (KakiTiga, Sari Organik) hanno viste magnifiche e ottima colazione. Ingresso €2.' },
      { id:'b02', time:'10:00', name:'Resort Maya Ubud — piscina sulla giungla', dur:'4h', status:'free', tag:'relax', note:'Prima giornata piena: nessuna fretta. Piscina infinity sull\'Ayung River. Spa del resort.', detail:'Il Maya Ubud Resort è una delle strutture più belle di Bali — ville con piscina privata affacciate sulla giungla e il fiume Ayung. La piscina infinity principale è su una terrazza con vista foresta. Il trattamento Lulur (scrub tradizionale balinese) al Fivelements Spa è un\'esperienza indimenticabile.' },
      { id:'b03', time:'15:00', name:'Spa del resort + massaggio balinese', dur:'1.5h', status:'free', tag:'relax', note:'Massaggio tradizionale balinese con oli di frangipane. €12-20 nei saloni locali.', detail:'Il massaggio balinese usa tecniche di agopressione, stretching e oli aromatici locali (frangipane, cocco). Dura 60-90 minuti. Ubud è piena di spa eccellenti — le migliori non sono necessariamente le più costose. Taksu Spa e Zen Resort sono ottime scelte.' }
    ]},
    { dest:'bali', day:'Giorno 9 — Gio 23 Aprile · UBUD', items:[
      { id:'b04', time:'08:30', name:'Cooking class balinese', dur:'3h', status:'warn', tag:'cibo', note:'Prenotare la sera prima tramite hotel. €30/persona. Partenza dal mercato, cottura e pranzo incluso.', detail:'La cooking class inizia al mercato tradizionale di Ubud dove impari a riconoscere spezie e ingredienti locali. Poi si cucina in una residenza balinese: nasi goreng, rendang, sate lilit. Il pranzo con quello che hai cucinato vale tutto. Warung Sopa e Paon Bali sono tra le migliori.' },
      { id:'b05', time:'12:30', name:'Pranzo e giro centro Ubud', dur:'2h', status:'free', tag:'cultura', note:'Monkey Forest Road, mercato degli artigiani, gallerie d\'arte.', detail:'Il centro di Ubud è percorribile a piedi. Monkey Forest Road è piena di negozi di artigianato. Il Mercato Ubud (Pasar Ubud) vende spezie, tessuti batik e souvenir — contratta sempre il prezzo. Le gallerie d\'arte sono numerose e mostrano l\'incredibile tradizione pittorica balinese.' },
      { id:'b06', time:'15:00', name:'Massaggio balinese in Ubud', dur:'1.5h', status:'free', tag:'relax', note:'Walk-in o prenotazione tel. lo stesso giorno. €12-20 a 90 minuti. Taksu Spa consigliato.', detail:'Ubud è la capitale del wellness a Bali. Il massaggio balinese si differenzia dagli altri per la pressione sui punti energetici e i movimenti circolari. Dopo 4 giorni di viaggio intenso è esattamente quello di cui hai bisogno prima della fase mare.' }
    ]},
    { dest:'bali', day:'Giorno 10 — Ven 24 Aprile · UBUD → NUSA DUA', items:[
      { id:'b07', time:'09:00', name:'Monkey Forest Sanctuary', dur:'2h', status:'free', tag:'cultura', note:'Foresta sacra con centinaia di macachi liberi. €4 ingresso. Magica al mattino.', detail:'La Sacred Monkey Forest di Ubud ospita oltre 700 macachi in una foresta sacra con tre templi. I macachi sono liberi e curiosi — non mostrare cibo. Tieni le borse chiuse. Al mattino presto (prima delle 9) è quasi deserta e l\'atmosfera è magica.' },
      { id:'b08', time:'14:00', name:'Transfer Ubud → Nusa Dua (St. Regis)', dur:'1.5h viaggio', status:'free', tag:'relax', note:'Driver privato ~€25. Check-in St. Regis — inizia la fase Maldive. Prima nuotata nell\'oceano.', detail:'Il viaggio da Ubud a Nusa Dua richiede 1.5-2 ore per il traffico di Bali. Il tuo driver privato del resort è la scelta migliore. Nusa Dua è il quartiere resort più esclusivo di Bali — strade pulite, spiagge protette, nessun traffico. Il St. Regis Bali si affaccia direttamente sull\'oceano Indiano.' }
    ]},
    { dest:'bali', day:'Giorni 11-13 — 25-27 Apr · NUSA DUA', items:[
      { id:'b09', time:'Tutto il giorno', name:'St. Regis Lagoon Villa — vita da resort', dur:'3 giorni', status:'free', tag:'relax', note:'Villa 371 mq, piscina privata, butler 24h, laguna salata, spiaggia dorata. Floating breakfast in piscina.', detail:'La Lagoon Villa del St. Regis è di 371 mq con piscina privata che si affaccia direttamente sulla laguna di acqua salata — puoi fare il bagno uscendo dalla porta della camera. Il butler service 24h è incluso. Il floating breakfast viene portato in piscina. La spiaggia privata ha sabbia bianca finissima.' },
      { id:'b10', time:'17:30', name:'Tempio Uluwatu + danza Kecak', dur:'2.5h', status:'ok', tag:'cultura', note:'Biglietto online €8. Spettacolo alle 18:00 sulla scogliera al tramonto. Driver dal resort ~€30 A/R.', detail:'Il Pura Luhur Uluwatu è un tempio del VI secolo su una scogliera di 70m sull\'oceano. Lo spettacolo di danza Kecak (il "coro di scimmie") inizia alle 18:00 e si svolge al tramonto — è uno degli spettacoli più emozionanti di tutta l\'Asia. Porta una sciarpa per entrare nel tempio. Attenzione alle scimmie — rubano gli occhiali!' },
      { id:'b11', time:'16:00', name:'Tempio Tanah Lot', dur:'2h', status:'free', tag:'cultura', note:'Il tempio sull\'isolotto tra le onde. Tramonto ~18:30. Driver ~€20.', detail:'Tanah Lot è il tempio più fotografato di Bali — sorge su un isolotto di roccia in mezzo al mare. Durante la bassa marea si può avvicinare (ma non entrare se non sei indù). Il tramonto dietro al tempio è spettacolare. Arriva 1 ora prima per trovare il posto migliore.' },
      { id:'b12', time:'Tutto il giorno', name:'Spiaggia + spa di coppia al resort', dur:'giornata', status:'free', tag:'relax', note:'Trattamento spa di coppia €80-150. Cena romantica al Kayuputi con vista oceano.', detail:'Il ristorante Kayuputi del St. Regis è uno dei migliori di Bali per cucina pan-asiatica con vista oceano. Prenota il tramonto slot (19:00-20:00). Lo spa del resort offre trattamenti di coppia con vasca privata all\'aperto, oli balinesi e rituali tradizionali. Durata 90-120 minuti.' }
    ]},
    { dest:'bali', day:'Giorno 14 — Lun 28 Aprile', items:[
      { id:'b13', time:'Mattina', name:'Ultima mattina in spiaggia privata', dur:'3h', status:'free', tag:'relax', note:'Spiaggia dorata del St. Regis con ombrellone privato. Ultimo floating breakfast in piscina.', detail:'L\'ultima mattina a Nusa Dua — goditi la spiaggia privata del resort con lettini e servizio al tavolo. Il floating breakfast in piscina (colazione portata su un vassoio galleggiante) è un\'esperienza da fare almeno una volta. Coconut pancake e succhi freschi tropicali.' },
      { id:'b14', time:'19:00', name:'Beach Club Potato Head — ultimo tramonto', dur:'2h', status:'free', tag:'vista', note:'Il beach club più iconico di Bali. Grab dal resort: ~€10. Cocktail tropicali al tramonto.', detail:'Potato Head Beach Club a Seminyak è il beach club più famoso di Bali — lettini in prima fila, cocktail colorati, musica ambient. Il tramonto (ore ~18:30) con il cielo arancione sull\'oceano è leggendario. Prenota un daybed se vuoi stare seduti durante il tramonto. Budget: €25-40 a persona.' }
    ]},
    { dest:'bali', day:'Giorno 15 — Mar 29 Aprile · Rientro', items:[
      { id:'b15', time:'10:00', name:'Check-out + ultimo breakfast', dur:'—', status:'free', tag:'relax', note:'Deposita i bagagli e ultimo tuffo. Luggage storage fino alla partenza.', detail:'Il check-out è alle 12:00 ma puoi depositare i bagagli e usare le facilities del resort fino alla partenza. L\'ultimo tuffo nell\'oceano Indiano è d\'obbligo. Il resort organizza il transfer all\'aeroporto (30-40 min).' },
      { id:'b16', time:'15:00', name:'Volo Bali → Milano (via Singapore o Dubai)', dur:'~16h totali', status:'free', tag:'volo', note:'Arrivo MXP mattina 30 Aprile. Bagaglio stiva extra consigliato per i prodotti K-beauty.', detail:'Il volo di rientro da Bali a Milano dura circa 16-18 ore totali con scalo. Emirates via Dubai (bellissimo scalo), Singapore Airlines via Singapore, o Garuda Indonesia. I voli notturni con scalo sono spesso più economici. Arriverete a Malpensa carichi di ricordi e prodotti K-beauty!' }
    ]}
  ],

  poi: [
    { dest:'seoul', name:'Palazzo Gyeongbokgung', emoji:'🏯', type:'Cultura · Storia', book:'Biglietto online', price:'€3 / gratis con hanbok', time:'09:00–18:00 (chiuso mar)', desc:'Il più grande palazzo reale della dinastia Joseon, risalente al 1395. Ad aprile i ciliegi in fiore lo circondano. Il cambio della guardia alle 10:00 e 14:00 vale la visita. Con il noleggio dell\'hanbok tradizionale l\'ingresso è gratuito.' },
    { dest:'seoul', name:'N Seoul Tower', emoji:'🗼', type:'Vista · Icona', book:'Online o in loco', price:'€9 osservatorio', time:'10:30–22:30', desc:'Sulla cima del Monte Namsan, 479m slm. La vista panoramica sulla Seoul illuminata è spettacolare. Prendi la telecabina o sali a piedi (20 min). Il ristorante N Terrace offre cena con vista 360°.' },
    { dest:'seoul', name:'Olive Young Myeongdong Global Town', emoji:'🛍️', type:'K-Beauty · Shopping', book:'Nessuna', price:'—', time:'10:00–22:30', desc:'Il più grande store K-beauty per turisti internazionali. Porta il passaporto per il tax-free immediato. Chiedi sempre "service?" per campioni extra gratuiti. MI-KOH: osserva i bestseller e il merchandising.' },
    { dest:'seoul', name:'Sulwhasoo Spa Flagship', emoji:'💆', type:'Spa · K-Beauty Lusso', book:'URGENTE — prenota ora', price:'€80-120/persona', time:'Mar-Sab 10:00–19:00', desc:'Il flagship più bello al mondo per skincare di lusso. Architettura ispirata alle lanterne coreane. Trattamento Ginseng Journey (140 min) con foot bath, massaggio e maschere. Prenotare su sulwhasoo.com con settimane di anticipo.' },
    { dest:'seoul', name:'AMORE Seongsu', emoji:'🤖', type:'K-Beauty · Tech', book:'Prenota su amoremall.com', price:'Gratis (prodotti a pagamento)', time:'Mar-Dom 10:30–20:30', desc:'Il flagship AmorePacific su 3 piani. Robot AI che crea la tua fondazione su misura. Analisi pelle gratuita. 1500+ prodotti testabili free. Campioni gratis a fine visita. Chiuso il lunedì.' },
    { dest:'seoul', name:'Aquafield Jjimjilbang', emoji:'♨️', type:'Terme · Relax', book:'Online consigliato', price:'€25-30/persona', time:'Aperto 24h', desc:'Le terme coreane di lusso: piscine termali calde e fredde, sauna di legno, scrub con "Italy towel", sale di riposo riscaldate. Un\'esperienza autentica coreana. Portare cambio di biancheria intima.' },
    { dest:'seoul', name:'The Mask Shop Dongdaemun', emoji:'🎭', type:'K-Beauty · Wholesale', book:'Nessuna', price:'—', time:'14:00–05:00 (not)', desc:'Prezzi fino al 40% sotto il retail sui prodotti K-beauty virali. Tax-free disponibile. Aperto fino alle 5 del mattino. Per MI-KOH: ottima ricerca prezzi wholesale e margini. I vendor di Dongdaemun vendono anche in bulk.' },
    { dest:'seoul', name:'Han River Park — Yeouido', emoji:'🌸', type:'Natura · Ciliegi', book:'Nessuna', price:'Gratis', time:'Sempre aperto', desc:'Il tratto di Yeouido è il più bello durante la fioritura dei ciliegi (metà aprile). Il bikesharing Ttareungyi costa 1.000 won per 30 min. I coreani fanno picnic sul prato — un\'esperienza autentica da vivere.' },
    { dest:'sg', name:'Gardens by the Bay', emoji:'🌿', type:'Vista · Natura', book:'Online 1-2 giorni prima', price:'€20 (Cloud Forest + Flower Dome)', time:'09:00–21:00', desc:'Il simbolo della Singapore moderna. Cloud Forest con cascata di 35m (18°C — fresco!). Flower Dome con piante di ogni continente. Supertrees light show gratuito ogni sera alle 19:45 e 20:45.' },
    { dest:'sg', name:'Marina Bay Sands SkyPark', emoji:'🏙️', type:'Vista · Iconico', book:'Online 2-3 giorni prima', price:'€18 (include consumazione)', time:'11:00–21:00 (ven/sab fino 22)', desc:'Terrazza al 57° piano con vista mozzafiato sulla skyline di Singapore. La piscina infinity è riservata agli ospiti hotel. Il bar ha cocktail creativi. Tramonto da qui alle 19:10 è indimenticabile.' },
    { dest:'sg', name:'Hawker Centre Lau Pa Sat', emoji:'🍜', type:'Cibo · Cultura', book:'Nessuna', price:'€3-15 a piatto', time:'Tutto il giorno fino alle 22', desc:'Il più famoso hawker centre di Singapore in una struttura vittoriana del 1894. Satay (sera), chicken rice, laksa, char kway teow, chili crab. La sera la strada esterna diventa piena di stand. Nessuna prenotazione necessaria.' },
    { dest:'sg', name:'Singapore Botanic Garden', emoji:'🌺', type:'Natura · UNESCO', book:'Nessuna', price:'Gratis (Orchid Garden €5)', time:'05:00–00:00', desc:'Patrimonio UNESCO dal 2015. National Orchid Garden con 1000+ specie. Swan Lake. Heritage Trees centenari. Portare acqua — la passeggiata può durare 2-3 ore. Al mattino presto è fresco e quasi deserto.' },
    { dest:'sg', name:'Chinatown + Buddha Tooth Relic Temple', emoji:'🏮', type:'Cultura · Storia', book:'Nessuna', price:'Gratis', time:'Tempio: 07:00–19:00', desc:'Il quartiere cinese di Singapore ha i migliori dim sum, negozi di erboristeria cinese e il magnifico Buddha Tooth Relic Temple (gratis). Nella stessa area: Maxwell Food Centre per il chicken rice originale di Singapore.' },
    { dest:'bali', name:'Terrazze di riso Tegalalang', emoji:'🌾', type:'Vista · Natura', book:'Nessuna', price:'€2 ingresso', time:'07:00–18:00', desc:'Le risaie a terrazza più fotografate di Bali. Verde intenso ad aprile dopo le piogge. Arrivare prima delle 8:30 per foto senza folle. I cafe sul bordo hanno viste magnifiche. Alcune terrazze hanno swing e altalene su scogliera (€5-10 extra).' },
    { dest:'bali', name:'Maya Ubud Resort & Spa', emoji:'🏨', type:'Resort · Lusso', book:'Prenota subito su booking.com', price:'€80-150/notte villa doppia', time:'Check-in 15:00', desc:'Una delle strutture più belle di Ubud. Ville private con piscina sulla giungla. Infinity pool sull\'Ayung River. Fivelements Spa con trattamenti tradizionali balinesi. Ristorante con cucina locale e vista foresta.' },
    { dest:'bali', name:'Monkey Forest Sanctuary', emoji:'🐒', type:'Cultura · Natura', book:'Nessuna', price:'€4 ingresso', time:'08:30–18:00', desc:'Foresta sacra con 700+ macachi e 3 templi balinesi. Non mostrare cibo — rubano tutto. Tieni borse chiuse e non portare occhiali da sole visibili. Al mattino presto l\'atmosfera è quasi mistica. I macachi sono curiosi ma rispettosi se tu lo sei.' },
    { dest:'bali', name:'St. Regis Bali — Lagoon Villa', emoji:'🏖️', type:'Resort · Maldive Style', book:'PRENOTA ORA su marriott.com', price:'€400-600/notte villa', time:'Check-in 15:00', desc:'La Lagoon Villa del St. Regis è 371 mq con piscina privata + accesso diretto alla laguna di acqua salata. Butler service 24h. Floating breakfast in piscina. Swim-up bar Vista con vista oceano. Spiaggia dorata privata. Il più vicino alle Maldive che esiste a Bali.' },
    { dest:'bali', name:'Tempio Uluwatu + Kecak', emoji:'🌅', type:'Cultura · Spettacolo', book:'Online €8', price:'€8 (spettacolo incluso)', time:'Spettacolo alle 18:00', desc:'Tempio del VI secolo su una scogliera di 70m sull\'oceano. Lo spettacolo di danza Kecak al tramonto (coro di 100 uomini che recitano l\'epopea Ramayana) è uno dei momenti più emozionanti di tutta l\'Asia. Porta una sciarpa per il tempio. Driver A/R da Nusa Dua: ~€30.' },
    { dest:'bali', name:'Tempio Tanah Lot', emoji:'⛩️', type:'Cultura · Tramonto', book:'Nessuna', price:'€4 ingresso', time:'07:00–19:00', desc:'Il tempio più fotografato di Bali su un isolotto di roccia vulcanica in mezzo al mare. Durante la bassa marea ci si può avvicinare. Il tramonto dietro al tempio è spettacolare. Arrivare 1 ora prima per trovare il posto migliore. In alta stagione molto affollato.' },
    { dest:'bali', name:'Potato Head Beach Club', emoji:'🍹', type:'Vista · Svago', book:'Daybed consigliato', price:'€10-15 min consumi', time:'09:00–01:00', desc:'Il beach club più iconico di Bali a Seminyak. Lettini in prima fila sull\'oceano, cocktail creativi, musica ambient. Il tramonto da qui è leggendario — cielo arancione sull\'Oceano Indiano. Prenota un daybed per il tramonto. Grab dal resort: ~€10.' }
  ]
};

// ══════════════════════════════════════
// STATE
// ══════════════════════════════════════
let checked = JSON.parse(localStorage.getItem('checked') || '{}');
let apiKey  = localStorage.getItem('apiKey') || '';
let currentTlFilter = 'all';
let currentPoiFilter = 'all';
let currentModalItem = null;
let chatHistory = [];

// ══════════════════════════════════════
// INIT
// ══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderPoi();
  updateProgress();
  if (apiKey) {
    document.getElementById('api-key-input').value = '••••••••••••••••';
    document.getElementById('key-status').classList.add('visible');
    document.getElementById('key-status').textContent = 'Chiave API attiva';
  }
});

// ══════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const map = { 'page-home':'nav-home','page-timeline':'nav-timeline','page-poi':'nav-poi','page-ai':'nav-ai' };
  document.getElementById(map[id])?.classList.add('active');
}

// ══════════════════════════════════════
// TIMELINE
// ══════════════════════════════════════
const destConfig = {
  seoul: { label:'Seoul, Corea del Sud · 15–18 Aprile', color:'var(--seoul)', bg:'var(--seoul-bg)' },
  sg:    { label:'Singapore · 19–21 Aprile', color:'var(--sg)', bg:'var(--sg-bg)' },
  bali:  { label:'Bali, Indonesia · 22–30 Aprile', color:'var(--bali)', bg:'var(--bali-bg)' }
};

function renderTimeline() {
  const container = document.getElementById('timeline-content');
  container.innerHTML = '';
  let lastDest = null;
  TRIP_DATA.timeline.forEach(dayBlock => {
    if (dayBlock.dest !== lastDest) {
      const cfg = destConfig[dayBlock.dest];
      const hdr = document.createElement('div');
      hdr.className = 'tl-dest-hdr';
      hdr.style.color = cfg.color;
      hdr.innerHTML = `<div class="tl-dest-dot" style="background:${cfg.color}"></div>${cfg.label}`;
      container.appendChild(hdr);
      lastDest = dayBlock.dest;
    }
    const dayDiv = document.createElement('div');
    dayDiv.className = 'tl-day';
    dayDiv.setAttribute('data-dest', dayBlock.dest);
    const lbl = document.createElement('div');
    lbl.className = 'tl-day-label';
    lbl.textContent = dayBlock.day;
    dayDiv.appendChild(lbl);
    dayBlock.items.forEach((item, idx) => {
      const row = buildTlRow(item, idx === dayBlock.items.length - 1);
      dayDiv.appendChild(row);
    });
    container.appendChild(dayDiv);
  });
}

function buildTlRow(item, isLast) {
  const isDone = checked[item.id];
  const statusClass = { urgent:'status-urgent', warn:'status-warn', ok:'status-ok', free:'', buffer:'' }[item.status] || '';
  const dotColor = { urgent:'var(--urgent)', warn:'var(--warn)', ok:'var(--ok)', free:'var(--text3)', buffer:'var(--text3)' }[item.status] || 'var(--text3)';
  const badgeMap = { urgent:`<span class="badge badge-urgent">PRENOTA ORA</span>`, warn:`<span class="badge badge-warn">prenota presto</span>`, ok:`<span class="badge badge-ok">online</span>` };
  const tagBadgeMap = { 'K-Beauty':'badge-beauty','cultura':'badge-cultura','cibo':'badge-cibo','relax':'badge-relax','vista':'badge-vista','volo':'badge-gray' };
  let badges = '';
  if (item.tag && tagBadgeMap[item.tag]) badges += `<span class="badge ${tagBadgeMap[item.tag]}">${item.tag}</span>`;
  if (badgeMap[item.status]) badges += badgeMap[item.status];
  const row = document.createElement('div');
  row.className = 'tl-item';
  row.innerHTML = `
    <div class="tl-left"><div class="tl-time">${item.time}</div></div>
    <div class="tl-mid">
      <div class="tl-dot-wrap"><div class="tl-dot-inner" style="background:${dotColor}"></div></div>
      ${!isLast ? '<div class="tl-line"></div>' : ''}
    </div>
    <div class="tl-card ${statusClass} ${isDone?'status-done':''}" onclick="openModal('${item.id}')">
      <div class="top-row">
        <div class="evt-name">${item.name}</div>
        <button class="check-btn ${isDone?'done':''}" onclick="toggleCheck(event,'${item.id}')" title="Segna completata">
          ${isDone?'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><polyline points="20 6 9 17 4 12" stroke="white" stroke-width="3" fill="none"/></svg>':''}
        </button>
      </div>
      ${badges?`<div class="badges">${badges}</div>`:''}
      <div class="evt-note">${item.note}</div>
    </div>`;
  return row;
}

function filterTimeline(dest) {
  currentTlFilter = dest;
  document.querySelectorAll('#timeline-content .tl-day').forEach(d => {
    d.style.display = (dest === 'all' || d.getAttribute('data-dest') === dest) ? '' : 'none';
  });
  document.querySelectorAll('#timeline-content .tl-dest-hdr').forEach(h => {
    h.style.display = '';
  });
}

function toggleCheck(e, id) {
  e.stopPropagation();
  checked[id] = !checked[id];
  localStorage.setItem('checked', JSON.stringify(checked));
  renderTimeline();
  filterTimeline(currentTlFilter);
  updateProgress();
}

function updateProgress() {
  const total = TRIP_DATA.timeline.reduce((a,d) => a + d.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;
  document.getElementById('prog-txt').textContent = `${done} / ${total}`;
  document.getElementById('prog-fill').style.width = `${(done/total)*100}%`;
}

// ══════════════════════════════════════
// POI
// ══════════════════════════════════════
function renderPoi(filter) {
  const f = filter || currentPoiFilter;
  const container = document.getElementById('poi-content');
  container.innerHTML = '';
  TRIP_DATA.poi.filter(p => f === 'all' || p.dest === f).forEach(poi => {
    const card = document.createElement('div');
    card.className = 'poi-card';
    const destC = {seoul:'var(--seoul)',sg:'var(--sg)',bali:'var(--bali)'}[poi.dest];
    card.innerHTML = `
      <div class="poi-top">
        <div class="poi-emoji">${poi.emoji}</div>
        <div>
          <div class="poi-name">${poi.name}</div>
          <div class="poi-type">${poi.type}</div>
        </div>
      </div>
      <div class="poi-desc">${poi.desc}</div>
      <div class="poi-meta">
        ${poi.price?`<div class="poi-meta-item">Prezzo <span>${poi.price}</span></div>`:''}
        ${poi.time?`<div class="poi-meta-item">Orari <span>${poi.time}</span></div>`:''}
        ${poi.book?`<div class="poi-meta-item">Prenotazione <span style="color:${poi.book.includes('URGENTE')||poi.book.includes('ORA')?'var(--urgent)':'inherit'}">${poi.book}</span></div>`:''}
      </div>`;
    card.onclick = () => {
      showAiWithContext(`Dimmi di più su ${poi.name} a ${poi.dest === 'seoul'?'Seoul':poi.dest === 'sg'?'Singapore':'Bali'}: consigli pratici, come arrivarci, cosa vedere, cosa evitare.`);
    };
    container.appendChild(card);
  });
}

function filterPoi(f, btn) {
  currentPoiFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.className = 'filter-btn';
  });
  if (btn) {
    btn.classList.add(f === 'all' ? 'active-all' : f === 'seoul' ? 'active-seoul' : f === 'sg' ? 'active-sg' : 'active-bali');
  }
  renderPoi(f);
}

// ══════════════════════════════════════
// MODAL
// ══════════════════════════════════════
function openModal(id) {
  let item = null;
  for (const day of TRIP_DATA.timeline) {
    const found = day.items.find(i => i.id === id);
    if (found) { item = found; break; }
  }
  if (!item) return;
  currentModalItem = item;
  document.getElementById('modal-title').textContent = item.name;
  const statusLabel = { urgent:'⚠️ Prenotazione urgente', warn:'Prenotazione consigliata', ok:'Biglietto online', free:'Nessuna prenotazione', buffer:'Buffer / tempo libero' }[item.status] || '';
  document.getElementById('modal-meta').innerHTML = `<span style="color:var(--text3)">${item.time}</span>${item.dur?' · '+item.dur:''} ${statusLabel?'<br><span style="color:'+(item.status==='urgent'?'var(--urgent)':item.status==='warn'?'var(--warn)':'var(--ok)')+'">'+statusLabel+'</span>':''}`;
  document.getElementById('modal-body').textContent = item.detail || item.note;
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal-overlay')) {
    document.getElementById('modal-overlay').classList.remove('open');
  }
}

function askAboutCurrent() {
  if (!currentModalItem) return;
  closeModal();
  showAiWithContext(`Sto per visitare "${currentModalItem.name}" durante il mio viaggio in Asia. Dammi consigli pratici, come arrivarci, orari aggiornati, cosa non perdere, cosa evitare e qualsiasi consiglio utile.`);
}

function showAiWithContext(msg) {
  showPage('page-ai');
  setTimeout(() => {
    document.getElementById('chat-input').value = msg;
    autoResize(document.getElementById('chat-input'));
  }, 100);
}

// ══════════════════════════════════════
// AI CHAT
// ══════════════════════════════════════
function saveKey() {
  const val = document.getElementById('api-key-input').value.trim();
  if (!val || val.startsWith('•')) return;
  apiKey = val;
  localStorage.setItem('apiKey', apiKey);
  document.getElementById('api-key-input').value = '••••••••••••••••';
  document.getElementById('key-status').classList.add('visible');
  document.getElementById('key-status').textContent = 'Chiave salvata e attiva!';
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}

function sendChip(el) {
  document.getElementById('chat-input').value = el.textContent;
  sendMessage();
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;
  if (!apiKey) {
    addMsg('ai', 'Per usare l\'assistente AI inserisci prima la tua chiave API Anthropic nel campo in alto.');
    return;
  }
  input.value = '';
  input.style.height = 'auto';
  addMsg('user', msg);
  chatHistory.push({ role:'user', content: msg });
  const typingId = addTyping();
  document.getElementById('send-btn').disabled = true;

  const systemPrompt = `Sei un esperto assistente di viaggio per un viaggio in Asia (Seoul, Singapore, Bali) ad Aprile 2026. Il viaggio è di Alberto e sua figlia Micol, 15 giorni dal 15 al 30 aprile. 
Rispondi sempre in italiano, in modo conciso e pratico. 
Fornisci informazioni specifiche su: trasporti locali, prezzi aggiornati, ristoranti, cose da evitare, consigli di sicurezza, frasi utili nelle lingue locali, numeri di emergenza, meteo, vestiti adatti.
Seoul: Gyeongbokgung, N Seoul Tower, Myeongdong K-beauty, Sulwhasoo Spa, Amore Seongsu, Han River, Aquafield Jjimjilbang, Hongdae, Gangnam, Seongsu.
Singapore: Gardens by the Bay, Marina Bay Sands, hawker centres, Chinatown, Little India, Sentosa.  
Bali: Ubud (risaie Tegalalang, Monkey Forest), Nusa Dua (St. Regis), Uluwatu, Tanah Lot, Potato Head, massaggi, cooking class.
Hotel: Hotel Naru Seoul MGallery, Hotel G Singapore, Maya Ubud Resort, St. Regis Bali Lagoon Villa.
Numeri emergenza: Seoul 112 (polizia) 119 (ambulanza), Singapore 999 (polizia) 995 (ambulanza), Bali +62-361-224500 (ospedale BIMC), 110 (polizia).
Rispondi in 3-5 frasi massimo se possibile. Sii diretto e utile.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        system: systemPrompt,
        messages: chatHistory
      })
    });
    const data = await res.json();
    removeTyping(typingId);
    if (data.error) {
      addMsg('ai', `Errore API: ${data.error.message}. Controlla che la chiave API sia corretta.`);
      chatHistory.pop();
    } else {
      const reply = data.content[0].text;
      addMsg('ai', reply);
      chatHistory.push({ role:'assistant', content: reply });
    }
  } catch (err) {
    removeTyping(typingId);
    addMsg('ai', 'Errore di connessione. Controlla la connessione internet e riprova.');
    chatHistory.pop();
  }
  document.getElementById('send-btn').disabled = false;
}

function addMsg(role, text) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  div.innerHTML = `
    ${role === 'ai' ? '<div class="msg-avatar">✦</div>' : ''}
    <div class="msg-bubble">${text.replace(/\n/g,'<br>')}</div>
    ${role === 'user' ? '<div class="msg-avatar" style="background:var(--ai-bg);border-color:rgba(139,111,212,.3)">A</div>' : ''}`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function addTyping() {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.id = 'typing-indicator';
  div.innerHTML = `<div class="msg-avatar">✦</div><div class="msg-bubble"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return 'typing-indicator';
}

function removeTyping(id) {
  document.getElementById(id)?.remove();
}
