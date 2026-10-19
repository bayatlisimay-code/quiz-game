import { joinSets, sourceFact, type AuthoredSet, type Source } from './sourceAuthoring';
import { originalTraditionContrasts } from './qualifiedContrasts';
// Named monuments/ensembles and source-qualified historical traditions. These
// are not modern nationalities or claims that every influence is exclusive.
type Site = readonly [id:string,title:string,culture:string,country:string,unesco:number,clue:string,locator:string,priority:number,culturalSubject?:string];
const ancient:readonly Site[]=[
 ['giza-pyramids','Pyramids of Giza','Ancient Egyptian','Egypt',86,'Three royal pyramids stand beside a monumental sphinx on a desert plateau west of the Nile.','Brief Synthesis: Giza pyramids and Sphinx; Old Kingdom royal necropolis; State Party Egypt',5],
 ['persepolis','Persepolis palace terrace','Achaemenid Persian','Iran',114,'A vast raised terrace carries ruined royal halls, monumental stairs and columns with paired animal capitals.','Brief Synthesis: Achaemenid palace terrace, Apadana and double-bull capitals; southwestern Iran',5],
 ['moenjodaro','Moenjodaro archaeological city','Indus civilization','Pakistan',138,'An excavated brick city has streets meeting at right angles and an elaborate drainage system beside the Indus.','Brief Synthesis: Indus metropolis, Pakistan Sindh, right-angle streets and drains; no claim all bricks were unbaked',5],
 ['tikal','Tikal temple city','Maya','Guatemala',64,'Tall temple pyramids rise above a rainforest city in Petén, linked by plazas and causeways.','Brief Synthesis: Petén, Maya ceremonial centre, temples and plazas; country panel Guatemala',5],
 ['hattusha','Hattusha fortified capital','Hittite','Türkiye',377,'A Bronze Age capital has monumental gates guarded by sculpted lions and a nearby rock sanctuary at Yazilikaya.','Description: Hittite capital, Lions Gate and Yazilikaya; State Party Türkiye',5],
 ['aksum','Aksum monumental stelae','Aksumite','Ethiopia',15,'Towering carved stone stelae mark an ancient royal centre in the northern Ethiopian highlands.','Description/Brief Synthesis: ancient Aksumite kingdom, royal tombs and stelae; Ethiopia',5,'Royal stelae at an ancient northern Ethiopian capital'],
 ['tiwanaku','Tiwanaku ceremonial centre','Tiwanaku','Bolivia',567,'Monumental stone remains stand at a former imperial ceremonial centre in the southern Andes near Lake Titicaca.','Description and Brief Synthesis: stone ceremonial centre and Tiwanaku culture; State Party Bolivia',4,'UNESCO-listed ceremonial centre near Lake Titicaca in Bolivia'],
 ['borobudur','Borobudur main temple','Javanese Buddhist (Syailendra)','Indonesia',592,'A huge stepped Buddhist monument in central Java rises through terraces to bell-shaped stupas.','Brief Synthesis: Syailendra dynasty, Buddhist monument, central Java; restored historic monument, not a new replica',4],
 ['tchogha-zanbil','Tchogha Zanbil ziggurat','Elamite','Iran',113,'A stepped brick sanctuary stands within three concentric enclosures of an unfinished sacred city.','Brief Synthesis: Elamite holy city, ziggurat, three enclosure walls, Khuzestan Iran',4],
 ['sanchi','Sanchi Buddhist monuments','Ancient Indian Buddhist','India',524,'A hilltop sanctuary groups stupas, temples and monasteries near Bhopal, preserving an early Buddhist architectural tradition.','Description and criterion ii: Buddhist sanctuary in India; multiple Mauryan and later dynasties, not a single exclusive dynasty',3],
 ['abu-simbel','Abu Simbel temples (relocated originals)','Ancient Egyptian','Egypt',88,'Two rock-cut royal temples associated with Ramses II were relocated above rising reservoir waters in Nubia.','Description: Ramses II temples; international rescue and relocation1960–1980; Egypt; relocated originals not original site',3],
];
const medieval:readonly Site[]=[
 ['athenian-acropolis','Acropolis of Athens','Ancient Greek','Greece',404,'A rocky citadel carries the Parthenon, Erechtheion and ceremonial gateway above a modern capital.','Brief Synthesis: fifth-century Athenian complex; named monuments; State Party Greece',5],
 ['colosseum','Colosseum (Rome amphitheatre)','Ancient Roman','Italy',91,'A vast ruined amphitheatre in Rome has tiered outer arcades around an arena and underground passages.','Criterion i: Colosseum among ancient Roman monuments; Italy; arena/arcades corroborated https://colosseo.it/en/southern-ambulatories/',5],
 ['hagia-sophia','Hagia Sophia (historic main structure)','Byzantine','Türkiye',356,'A monumental domed sanctuary in Istanbul survives from Justinian’s reign, with later Ottoman additions.','Criterion i: Hagia Sophia Byzantine masterpiece532–537; Ottoman phases distinct; country Türkiye',5],
 ['angkor-wat','Angkor Wat temple','Khmer','Cambodia',668,'A great temple within a vast archaeological landscape near Siem Reap exemplifies the monumental building of the Khmer Empire.','Description/Brief Synthesis: Angkor Wat among Khmer capitals and temple masterpieces; Cambodia',5],
 ['alhambra','Alhambra Nasrid palaces','Nasrid Islamic','Spain',314,'A fortified palace complex on a hill above Granada combines richly decorated courts with fountains and gardens.','Brief Synthesis: Nasrid palatine city, Granada, Spain; historic Islamic palaces distinguished from later Charles V palace',5],
 ['prambanan','Prambanan Hindu temple group','Javanese Hindu','Indonesia',642,'A towering central shrine to Shiva stands with shrines to Vishnu and Brahma, decorated with Ramayana reliefs.','Description: Shiva/Vishnu/Brahma temples and Ramayana; Java Indonesia; dates conflict across UNESCO sections so no dating fact authored',5],
 ['great-zimbabwe','Great Zimbabwe stone city','Shona','Zimbabwe',364,'Dry-stone walls form monumental enclosures at the ruins of a southern African royal city.','Brief Synthesis: Shona founders and stone architecture,11th–15th centuries; Zimbabwe; Queen of Sheba legend not taught',4],
 ['cordoba-mosque','Great Mosque of Córdoba (Islamic fabric)','Umayyad Andalusian','Spain',313,'An immense former mosque beside the Guadalquivir became a cathedral while retaining much of its Islamic architectural fabric.','Brief Synthesis: Umayyad capital, Great Mosque and later cathedral; historical phase named, not exclusive history; Spain',4],
 ['horyuji','Hōryū-ji historic temple precinct','Early Japanese Buddhist','Japan',660,'An early Buddhist temple precinct in Nara preserves exceptionally old timber halls and a pagoda.','Description: early Japanese Buddhist timber architecture; after sixth-century transmission via Korea; Japan',4],
 ['haghpat','Haghpat monastery','Armenian Christian','Armenia',777,'A fortified hillside monastery in Lori groups a domed church, learning spaces, a belfry and carved cross-stones.','Brief Synthesis: Haghpat in Lori Armenia; Armenian religious architecture with Byzantine/Caucasian influences; not the separate Sanahin component',3],
 ['chartres','Chartres Cathedral','French Gothic','France',81,'A great Gothic cathedral rebuilt after a 1194 fire retains exceptional stained glass and sculpted portals.','Description: French Gothic; reconstruction after1194 and stained glass; country France; cultural tradition, not modern nationality',3],
];
function authorSites(rows:readonly Site[],level:string):AuthoredSet {
 const sources=new Map<string,Source>();
 const result=joinSets(rows.flatMap(([id,title,culture,country,unesco,clue,locator,priority,culturalSubject])=>{
  const source={url:`https://whc.unesco.org/en/list/${unesco}/`,label:'UNESCO',locator:id==='cordoba-mosque'?'UNESCO Brief Synthesis: the historic mosque and subsequent cathedral. Umayyad patronage: https://www.metmuseum.org/essays/the-art-of-the-umayyad-period-in-spain-711-1031 (Department of Islamic Art, paragraphs on the original mosque under Abd al-Rahman I and the al-Hakam II expansion).':locator};
  const workId=`architecture:${id}`;
  return (['p1','p2','p4'] as const).map(part=>{
   const answer=part==='p1'?title:part==='p2'?culture:country;
   const answerId=part==='p1'?workId:part==='p2'?`culture:${culture}`:`country:${country}`;
   sources.set(`art_architecture_${level}_${part}_${id}`,source);
   return sourceFact({...(part==='p2'?{reviewedAt:'2026-10-18'}:{}),subtopic:'architecture',level,part,id,subject:part==='p1'?`Description of ${id}`:part==='p2'?culturalSubject??title:title,
    subjectId:part==='p1'?`description:${workId}:v1`:workId,subjectType:part==='p1'?'stimulus':'work',
    answer,answerId,answerType:part==='p1'?'work':part==='p2'?'culture':'country',source,priority,
    priorityReason:priority===5?'Foundational globally significant monument; reinforce cultural and geographical distinctions.':'Extends regional and historical breadth after the foundational monuments.',
    qualifiers:part==='p1'?{}:part==='p2'?{assessmentScope:'source-cultural-tradition'}:{countryConvention:'present-day'},
    scope:part==='p1'?'':part==='p2'?'Original building tradition; not later alterations or cultural influence.':'Present-day borders.',
    completeField:part==='p2'?undefined:{valueIds:[answerId],reason:part==='p1'?'The clue identifies this explicitly named monument or ensemble, not every similar building.':'The named, immovable monument lies in this one present-day country; this is not the territory of its ancient empire.'},
    contract:part==='p4'?{geography:'present-day'}:undefined,
    description:part==='p1'?clue:undefined,
   });
  });
 }));
 originalTraditionContrasts(result,sources,[
  'Achaemenid Persian|Elamite','Achaemenid Persian|Hittite','Hittite|Elamite',
  'Ancient Indian Buddhist|Indus civilization','Ancient Indian Buddhist|Javanese Buddhist (Syailendra)',
  'Ancient Greek|Ancient Roman','Ancient Greek|Byzantine','Ancient Roman|Byzantine',
  'Armenian Christian|Byzantine','Nasrid Islamic|Umayyad Andalusian',
  'Byzantine|Umayyad Andalusian','Ancient Roman|Umayyad Andalusian','Byzantine|Nasrid Islamic',
 ]);
 return result;
}
export const architectureWorldSets=[authorSites(ancient,'l2'),authorSites(medieval,'l3')];
