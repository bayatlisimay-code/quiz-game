import { literarySource as s, pg, literaryFact, authorCredit, type LiteraryWork } from './literaryAuthoring';
import { joinSets } from './sourceAuthoring';
type Story=LiteraryWork & Readonly<{character:string;characterId:string;characterSource:ReturnType<typeof s>}>;
const original=(n:number,locator:string)=>s(`https://www.gutenberg.org/ebooks/${n}`,`${locator}; author field and full primary text`,'Original story text');
type Row=readonly [id:string,title:string,author:string,authorId:string,character:string,characterId:string,n:number,locator:string,year:number,dateSource:ReturnType<typeof s>,scope?:string];
const rows:readonly Row[]=[
 ['metamorphosis','The Metamorphosis','Franz Kafka','franz-kafka','Gregor Samsa','gregor-samsa',5200,'Opening sentence and Samsa household',1915,s('https://www.hachettebookgroup.com/titles/franz-kafka/the-metamorphosis-and-other-stories/9781435172302/','Description: Gregor Samsa; first published 1915, distinguished from the date of this edition','Hachette Book Group')],
 ['christmas-carol','A Christmas Carol','Charles Dickens','charles-dickens','Ebenezer Scrooge','ebenezer-scrooge',46,'Stave One introduces Scrooge as the central miser',1843,s('https://dickensmuseum.com/en-de/blogs/explore/first-edition-of-a-christmas-carol','First-edition account: first published 1843','Charles Dickens Museum')],
 ['jekyll-hyde','Strange Case of Dr Jekyll and Mr Hyde','Robert Louis Stevenson','robert-louis-stevenson','Dr Henry Jekyll','henry-jekyll',43,'Dr Jekyll Was Quite at Ease; Henry Jekyll’s Full Statement',1886,s('https://robert-louis-stevenson.org/works-chronology/','1886: Strange Case of Dr Jekyll and Mr Hyde; distinguish earlier composition','Robert Louis Stevenson scholarly website')],
 ['necklace','The Necklace','Guy de Maupassant','guy-de-maupassant','Mathilde Loisel','mathilde-loisel',3080,'The Necklace: opening identifies Madame Loisel; dialogue gives Mathilde',1884,s('https://frenchinstitute.org.za/education_site/MOSAIQUE-DE-RENCONTRES/NOUVELLES/LA-PARURE/0-LA-PARURE-OEUVRE.pdf','Heading: nouvelle parue dans Le Gaulois le 17 février 1884; primary French text','French Institute of South Africa')],
 ['gift-magi','The Gift of the Magi','O. Henry','o-henry','Della','della',7256,'The Gift of the Magi: opening follows Della’s Christmas preparations; Jim is also central',1905,s('https://americanwritersmuseum.org/gift-giving-guide/','The Gift of the Magi: first published 1905; Jim and Della','American Writers Museum')],
 ['yellow-wallpaper','The Yellow Wall-Paper','Charlotte Perkins Gilman','charlotte-perkins-gilman','The unnamed narrator','unnamed-narrator',1952,'First-person narrator and husband John; no secure personal name assigned to the narrator',1892,s('https://www.nlm.nih.gov/exhibition/theliteratureofprescription/exhibition0.html','Original magazine caption: The New England Magazine, January 1892','National Library of Medicine')],
 ['dead','The Dead','James Joyce','james-joyce','Gabriel Conroy','gabriel-conroy',2814,'Dubliners, The Dead: Gabriel and Gretta arrive at the Misses Morkan’s party',1914,s('https://jamesjoyce.ie/timeline/','Dubliners published by Grant Richards in 1914 after earlier publication difficulties','James Joyce Centre'),'First publication in Dubliners.'],
 ['daisy-miller','Daisy Miller','Henry James','henry-james','Daisy Miller','daisy-miller',208,'Opening Vevey meeting introduces Daisy Miller; subtitle A Study',1878,s('https://www.ibiblio.org/eldritch/hjj/dm/daisy0.html','Printing history: The Cornhill Magazine June and July 1878; later New York edition revised','ibiblio / UNC'),'First magazine publication; not the later book edition.'],
 ['garden-party','The Garden Party','Katherine Mansfield','katherine-mansfield','Laura Sheridan','laura-sheridan',1429,'Title story: Laura’s preparations and response to news of a local death',1922,s('https://asset-mel-2.airsquare.com/katherinemansfield/library/the-garden-party-teaching-resource-kmhg-2022.pdf?202204072144=','Publication note: Westminster Gazette instalments 4, 11 and 18 February 1922 before the collection','Katherine Mansfield House & Garden'),'First magazine publication.'],
 ['lottery','The Lottery','Shirley Jackson','shirley-jackson','Tessie Hutchinson','tessie-hutchinson',0,'Original New Yorker text: Tessie Hutchinson’s arrival and participation',1948,s('https://www.newyorker.com/magazine/1948/06/26/the-lottery/','Shirley Jackson byline, original 1948 text; print issue June 26, 1948','The New Yorker')],
 ['bartleby','Bartleby, the Scrivener','Herman Melville','herman-melville','Bartleby','bartleby',11231,'Narrator hires Bartleby as a scrivener; the lawyer is also a central character',1853,s('https://web.english.upenn.edu/~cavitch/pdf-library/Melville_Bartleby_Putnams.pdf','Facsimile of Putnam’s original 1853 printing, pages headed 1853; not the 1856 Piazza Tales collection','University of Pennsylvania'),'First magazine publication; later collected in The Piazza Tales.'],
];
export const shortFictionStudies:readonly Story[]=rows.map(([id,title,author,authorId,character,characterId,n,locator,year,dateSource,scope],i)=>({id,title,author,authorId:`person:${authorId}`,character,characterId,source:n?pg(n):dateSource,characterSource:n?original(n,locator):dateSource,publication:{year,source:dateSource,scope},priority:i<6?5:i<9?4:3}));
export const literatureShortFictionSet=joinSets(shortFictionStudies.flatMap(w=>[
 authorCredit(w,'literature','l7','p1','author'),
 literaryFact({subtopic:'literature',level:'l7',part:'p2',id:w.id,subject:w.title,subjectId:`work:${w.id}`,subjectType:'work',answer:w.character,answerId:`character:${w.id}:${w.characterId}`,answerType:'character',source:w.characterSource,qualifiers:{text:'original-story'},scope:'Original story text.',priority:w.priority,priorityReason:'Identify an important central character without treating the cast as a singleton.'}),
 literaryFact({subtopic:'literature',level:'l7',part:'p4',id:w.id,subject:w.title,subjectId:`work:${w.id}`,subjectType:'work',answer:String(w.publication!.year),answerId:`year:${w.publication!.year}`,answerType:'date',source:w.publication!.source,qualifiers:{event:'first publication'},scope:w.publication!.scope??'Original publication.',priority:w.priority,priorityReason:'Distinguish first publication from later collections, translations and digital releases.',contract:{event:'first publication'},temporal:{start:w.publication!.year,end:w.publication!.year,calendar:'gregorian-proleptic'},completeField:{valueIds:[`year:${w.publication!.year}`],reason:'The cited original-publication event occurs in this single calendar year.'}}),
]));
// Reviewed narrative contrasts for these specifically named protagonists. These
// concern central characters in each cited original story, not all adaptations
// or every character a writer ever created. In particular the unnamed narrator
// is NOT declared false for Bartleby: its unnamed lawyer is central too.
const rejectedCentralCharacters:Readonly<Record<string,readonly string[]>>={
 'metamorphosis':['christmas-carol','jekyll-hyde','necklace','gift-magi','dead','daisy-miller','garden-party','lottery','bartleby'],
 'christmas-carol':['metamorphosis','jekyll-hyde','necklace','gift-magi','dead','daisy-miller','garden-party','lottery','bartleby'],
 'jekyll-hyde':['metamorphosis','christmas-carol','necklace','gift-magi','dead','daisy-miller','garden-party','lottery','bartleby'],
 'necklace':['metamorphosis','christmas-carol','jekyll-hyde','gift-magi','dead','daisy-miller','garden-party','lottery','bartleby'],
 'gift-magi':['metamorphosis','christmas-carol','jekyll-hyde','necklace','dead','daisy-miller','garden-party','lottery','bartleby'],
 'yellow-wallpaper':['metamorphosis','christmas-carol','jekyll-hyde','necklace','gift-magi','dead','daisy-miller','garden-party','lottery','bartleby'],
 'dead':['metamorphosis','christmas-carol','jekyll-hyde','necklace','gift-magi','daisy-miller','garden-party','lottery','bartleby'],
 'daisy-miller':['metamorphosis','christmas-carol','jekyll-hyde','necklace','gift-magi','dead','garden-party','lottery','bartleby'],
 'garden-party':['metamorphosis','christmas-carol','jekyll-hyde','necklace','gift-magi','dead','daisy-miller','lottery','bartleby'],
 'lottery':['metamorphosis','christmas-carol','jekyll-hyde','necklace','gift-magi','dead','daisy-miller','garden-party','bartleby'],
 'bartleby':['metamorphosis','christmas-carol','jekyll-hyde','necklace','gift-magi','dead','daisy-miller','garden-party','lottery'],
};
for(const [storyId,rejected] of Object.entries(rejectedCentralCharacters)){
 const story=shortFictionStudies.find(w=>w.id===storyId)!;
 const target=literatureShortFictionSet.concepts.find(c=>c.id===`art_literature_l7_p2_${storyId}`)!;
 for(const candidateId of rejected){
  const candidate=shortFictionStudies.find(w=>w.id===candidateId)!;
  literatureShortFictionSet.evidence.push({id:`reviewed-story-protagonist:${storyId}:${candidateId}`,kind:'assertion',predicateId:target.relation,
   subjectId:target.semantic!.subject!.id!,valueId:`character:${candidate.id}:${candidate.characterId}`,qualifiers:target.semantic!.qualifiers!,verdict:'invalid',
   sourceUrl:story.characterSource.url,locator:`${story.characterSource.locator}. Review of the central narrative in ${story.title}: ${candidate.character} is not a central character in this original story. Compare ${candidate.characterSource.url}, ${candidate.characterSource.locator}, establishing that specifically named character’s different narrative identity. The source story, not a list of dataset entries, supplies the assessed cast context. No exhaustive central-character roster is asserted.`,
   reviewStatus:'verified',reviewedBy:'Codex — primary-story character comparison (not independent human editorial approval)',reviewedAt:'2026-10-19',
  });
 }
}
