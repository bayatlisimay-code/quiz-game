import { joinSets } from './sourceAuthoring';
import { literaryFact, literarySource as s } from './literaryAuthoring';
type Epic=Readonly<{id:string;title:string;clue:string;tradition:string;traditionId:string;period:string;scope:string;url:string;locator:string;label:string}>;
const homer='https://shop.bl.uk/products/iliad-odyssey';
export const ancientLiteraryStudies:readonly Epic[]=[
 {id:'gilgamesh',title:'Epic of Gilgamesh',clue:'The king of Uruk and his companion Enkidu confront heroism and human mortality.',tradition:'Babylonian Mesopotamia',traditionId:'babylonian-mesopotamia',period:'Late 2nd millennium BCE',scope:'The standard Babylonian version; earlier Sumerian stories also exist.',url:'https://www.metmuseum.org/fr/essays/gilgamesh',locator:'Akkadian and Sumerian versions; Sin-leqi-unninni’s classic version in twelfth century BCE; king of Uruk and Enkidu',label:'Metropolitan Museum of Art'},
 {id:'iliad',title:'Iliad',clue:'The anger of Achilles unfolds during the war at Troy.',tradition:'Ancient Greek',traditionId:'ancient-greek',period:'Around the 8th century BCE',scope:'Traditional Homeric dating; oral formation and textual fixation remain debated.',url:homer,locator:'Homer’s ancient Greek oral epics, eighth century BCE; compare Harvard CHS Greek Literature introduction on disputed transcription dates',label:'British Library'},
 {id:'aeneid',title:'Aeneid',clue:'A Trojan survivor journeys to Italy in a Latin epic about Rome’s origins.',tradition:'Ancient Roman / Latin',traditionId:'roman-latin',period:'1st century BCE',scope:'Virgil’s composition, rather than the mythical setting.',url:'https://assets.cambridge.org/97805215/39807/excerpt/9780521539807_excerpt.pdf',locator:'Introduction to Virgil, The Aeneid: composition from around 29 BCE; Virgil’s final journey in 19 BCE; Trojan journey and Roman foundation narrative',label:'Cambridge University Press'},
 {id:'mahabharata',title:'Mahabharata',clue:'The Pandava and Kaurava families contest a kingdom in this vast Indian epic.',tradition:'Indian Sanskrit epic',traditionId:'indian-sanskrit',period:'About 2nd century BCE–4th century CE',scope:'The Smithsonian’s broad composition range; not a single authorial year.',url:'https://asia.si.edu/glossary/mahabharata/',locator:'Glossary: one of India’s two great epics; composed roughly between second century BCE and fourth century CE',label:'National Museum of Asian Art'},
 {id:'shahnama',title:'Shahnama (Book of Kings)',clue:'A Persian epic recounts Iran’s kings from mythical beginnings to the Arab conquest.',tradition:'Persian',traditionId:'persian',period:'Around 1010 CE',scope:'Firdausi’s completion; the kings and stories are much older.',url:'https://www.metmuseum.org/fr/essays/the-shahnama-of-shah-tahmasp',locator:'The Shahnama section: Book of Kings, ancient kings of Iran, completed around 1010 by Firdausi; distinguish sixteenth-century illustrated copy',label:'Metropolitan Museum of Art'},
 {id:'book-dead',title:'Book of the Dead',clue:'A collection of Egyptian spells and prayers guides the dead through the afterlife.',tradition:'Ancient Egyptian',traditionId:'ancient-egyptian',period:'New Kingdom onward',scope:'Emergence of this spell corpus; earlier funerary texts and later copies are distinct.',url:'https://resources.metmuseum.org/resources/metpublications/pdf/Egyptian_Art_The_Metropolitan_Museum_of_Art_Bulletin_v_41_no_3_Winter_1983_1984.pdf',locator:'Funerary texts: from New Kingdom onward spells on papyrus known collectively as Book of the Dead, derived partly from earlier Pyramid and Coffin Texts',label:'Metropolitan Museum of Art'},
 {id:'ramayana',title:'Ramayana',clue:'The story of Rama follows his exile and the rescue of Sita.',tradition:'Indian Sanskrit epic',traditionId:'indian-sanskrit',period:'Roughly present form by the 1st century BCE',scope:'The Sanskrit epic’s broad formation; later regional retellings remain distinct.',url:'https://www.metmuseum.org/exhibitions/listings/2010/epic-india?exhshow=art',locator:'Epic India: story of Rama; roughly present form since about first century BCE; extensive later South Asian tradition',label:'Metropolitan Museum of Art'},
 {id:'odyssey',title:'Odyssey',clue:'A Greek hero faces a long voyage home after the war at Troy.',tradition:'Ancient Greek',traditionId:'ancient-greek',period:'Around the 8th century BCE',scope:'Traditional Homeric dating; oral formation and textual fixation remain debated.',url:homer,locator:'Ancient Greek Homeric epics; eighth century BCE account, with uncertainty retained rather than claiming a securely dated manuscript',label:'British Library'},
 {id:'enuma-elish',title:'Enuma Elish',clue:'The Babylonian creation story celebrates Marduk’s victory over Tiamat.',tradition:'Babylonian Mesopotamia',traditionId:'babylonian-mesopotamia',period:'Late 2nd millennium BCE',scope:'The Babylonian creation-story tradition; surviving tablet copies may be later.',url:'https://www.metmuseum.org/de/essays/mesopotamian-deities',locator:'End of second millennium: Babylonian creation story; Marduk’s supremacy; compare Mesopotamian Creation Myths, Tiamat and Qingu episode',label:'Metropolitan Museum of Art'},
 {id:'popol-vuh',title:'Popol Vuh',clue:'A K’iche’ Maya creation account preserves origin stories and the history of a people.',tradition:'K’iche’ Maya',traditionId:'kiche-maya',period:'Probably 16th century CE (alphabetic version)',scope:'Proposed earlier alphabetic version; the surviving Ximénez copy is later.',url:'https://www.loc.gov/item/2021668226/',locator:'Summary: K’iche’ creation account; surviving copy transcribed c1700–1715; scholars propose sixteenth-century native-speaker alphabetic version; ancient oral origins not dated',label:'Library of Congress'},
 {id:'metamorphoses',title:'Metamorphoses',clue:'Fifteen books weave Greek and Roman myths around bodily transformations.',tradition:'Ancient Roman / Latin',traditionId:'roman-latin',period:'Early 1st century CE',scope:'Ovid’s poem before his exile; not the time of the myths.',url:'https://www.poetryfoundation.org/poetrymagazine/articles/145730/translator39s-note-the-rape-of-europa-by-ovid',locator:'Translator’s note: fifteen books, Greco-Roman myths; read to audiences before Ovid’s exile in 8 CE; use CE, not the BCE typo in a separate biography',label:'Poetry Foundation'},
];
export const literatureAncientSet=joinSets(ancientLiteraryStudies.flatMap((w,i)=>(['p1','p2','p4'] as const).map(part=>{
 const recognition=part==='p1',culture=part==='p2',valueId=recognition?`work:${w.id}`:culture?`tradition:${w.traditionId}`:`literary-period:${w.period}`;
 return literaryFact({subtopic:'literature',level:'l9',part,id:w.id,subject:recognition?`Description of ${w.id}`:w.title,subjectId:recognition?`description:epic:${w.id}`:`work:${w.id}`,subjectType:recognition?'stimulus':'work',answer:recognition?w.title:culture?w.tradition:w.period,answerId:valueId,answerType:recognition?'work':culture?'culture':'period',source:s(w.url,w.locator,w.label),qualifiers:recognition?{}:{textualScope:w.id==='gilgamesh'?'standard-Babylonian':w.id==='popol-vuh'?'proposed-alphabetic-version':'named-textual-tradition',...(culture?{traditionBasis:'original-language-text'}:{})},scope:recognition?'':culture?(w.id==='gilgamesh'?'Standard Babylonian text; original language tradition.':w.id==='popol-vuh'?'Early alphabetic text; original language tradition.':'Original language tradition.'):w.scope,description:recognition?w.clue:undefined,priority:i<6?5:i<9?4:3,priorityReason:'Distinguish a major epic or mythological corpus, its textual tradition and its qualified historical formation.',
  // Traditions overlap and dates describe uncertain formation, not exclusive
  // cultural ownership or a precise first-publication year.
  ...(recognition?{completeField:{valueIds:[valueId],reason:'The independently authored clue identifies this named work or corpus among the supplied titles.'}}:{}),
 });
})));
// Language-of-text comparisons do not deny transmission, influences, shared
// myths or later retellings. Greek sources in Virgil/Ovid are not Greek-language
// composition; earlier Sumerian Gilgamesh texts are not the specified Akkadian
// standard Babylonian recension. Each different language tradition below was
// checked in the cited work/version, rather than treated as cultural ownership.
const languageReviews:Readonly<Record<string,readonly string[]>>={
 gilgamesh:['ancient-greek','roman-latin','indian-sanskrit','persian','ancient-egyptian','kiche-maya'],
 iliad:['babylonian-mesopotamia','roman-latin','indian-sanskrit','persian','ancient-egyptian','kiche-maya'],
 aeneid:['babylonian-mesopotamia','ancient-greek','indian-sanskrit','persian','ancient-egyptian','kiche-maya'],
 mahabharata:['babylonian-mesopotamia','ancient-greek','roman-latin','persian','ancient-egyptian','kiche-maya'],
 shahnama:['babylonian-mesopotamia','ancient-greek','roman-latin','indian-sanskrit','ancient-egyptian','kiche-maya'],
 'book-dead':['babylonian-mesopotamia','ancient-greek','roman-latin','indian-sanskrit','persian','kiche-maya'],
 ramayana:['babylonian-mesopotamia','ancient-greek','roman-latin','persian','ancient-egyptian','kiche-maya'],
 odyssey:['babylonian-mesopotamia','roman-latin','indian-sanskrit','persian','ancient-egyptian','kiche-maya'],
 'enuma-elish':['ancient-greek','roman-latin','indian-sanskrit','persian','ancient-egyptian','kiche-maya'],
 'popol-vuh':['babylonian-mesopotamia','ancient-greek','roman-latin','indian-sanskrit','persian','ancient-egyptian'],
 metamorphoses:['babylonian-mesopotamia','ancient-greek','indian-sanskrit','persian','ancient-egyptian','kiche-maya'],
};
// Explicit, conservative event-period comparisons. Broad/overlapping periods
// remain unknown: e.g. the Mahabharata range includes the Aeneid's century;
// New Kingdom onward cannot be declared a false answer for a later text merely
// because its canonical label differs. No uncertain event gets a closed set.
const periodReviews:Readonly<Record<string,readonly string[]>>={
 gilgamesh:['iliad','aeneid','mahabharata','shahnama','ramayana','odyssey','popol-vuh','metamorphoses'],
 iliad:['gilgamesh','aeneid','mahabharata','shahnama','ramayana','enuma-elish','popol-vuh','metamorphoses'],
 aeneid:['gilgamesh','iliad','shahnama','odyssey','enuma-elish','popol-vuh','metamorphoses'],
 mahabharata:['gilgamesh','iliad','shahnama','odyssey','enuma-elish','popol-vuh'],
 shahnama:['gilgamesh','iliad','aeneid','mahabharata','ramayana','odyssey','enuma-elish','popol-vuh','metamorphoses'],
 'book-dead':['iliad','aeneid','mahabharata','shahnama','ramayana','odyssey','popol-vuh','metamorphoses'],
 ramayana:['gilgamesh','iliad','shahnama','odyssey','enuma-elish','popol-vuh'],
 odyssey:['gilgamesh','aeneid','mahabharata','shahnama','ramayana','enuma-elish','popol-vuh','metamorphoses'],
 'enuma-elish':['iliad','aeneid','mahabharata','shahnama','ramayana','odyssey','popol-vuh','metamorphoses'],
 'popol-vuh':['gilgamesh','iliad','aeneid','mahabharata','shahnama','ramayana','odyssey','enuma-elish','metamorphoses'],
 metamorphoses:['gilgamesh','iliad','aeneid','shahnama','odyssey','enuma-elish','popol-vuh'],
};
for(const [part,reviews] of [['p2',languageReviews],['p4',periodReviews]] as const)for(const [id,alternatives] of Object.entries(reviews)){
 const work=ancientLiteraryStudies.find(w=>w.id===id)!;
 const target=literatureAncientSet.concepts.find(c=>c.id===`art_literature_l9_${part}_${id}`)!;
 const seen=new Set<string>();
 for(const alternative of alternatives){
  const value=part==='p2'?`tradition:${alternative}`:`literary-period:${ancientLiteraryStudies.find(w=>w.id===alternative)!.period}`;
  if(seen.has(value))continue;seen.add(value);
  literatureAncientSet.evidence.push({id:`reviewed-epic-${part}:${id}:${alternative}`,kind:'assertion',predicateId:target.relation,
   subjectId:target.semantic!.subject!.id!,valueId:value,qualifiers:target.semantic!.qualifiers!,verdict:'invalid',sourceUrl:work.url,
   locator:`${work.locator}. ${part==='p2'?`Original language tradition of the specifically scoped text is ${work.tradition}, not ${alternative}. Cross-cultural influences and translations are outside this field.`:`The specifically scoped event is ${work.period} (${work.scope}), chronologically separate from ${ancientLiteraryStudies.find(w=>w.id===alternative)!.period}. This compares the named formation/completion event, not the mythical setting or later surviving copies. Overlapping ranges have not been rejected.`}`,
   reviewStatus:'verified',reviewedBy:'Codex — source-version comparison (not independent human editorial approval)',reviewedAt:'2026-10-19',
  });
 }
}
