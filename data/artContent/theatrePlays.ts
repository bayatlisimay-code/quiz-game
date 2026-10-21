import { addGenreCompatibility } from './genreCompatibility';
import { literaryFact, literarySource as s, pg, authorCredit, type LiteraryWork } from './literaryAuthoring';
import { joinSets, sourceFact, type Source } from './sourceAuthoring';
type Play=LiteraryWork & Readonly<{period:string;event:string;dateSource:Source;genre:NonNullable<LiteraryWork['genre']>;dateCertain?:boolean}>;
const concord=(id:number,slug:string,locator='Byline, form classification and History section')=>s(`https://www.concordtheatricals.com/p/${id}/${slug}`,locator,'Concord Theatricals');
const rsc=s('https://www.rsc.org.uk/shakespeares-plays/histories-timeline/timeline','Play chronology; estimated writing dates distinguished from documented performances','Royal Shakespeare Company');
const cf=s('https://www.comedie-francaise.fr/actualites/le-tartuffe-la-comedie-francaise','First performance of the five-act Tartuffe ou l’Imposteur: 5 February 1669, earlier versions distinct','Comédie-Française');
const cyrano=s('https://www.reseau-canope.fr/edutheque-theatre-en-acte/oeuvre/edmond-rostand/cyrano-de-bergerac.html','Opening: Edmond Rostand’s heroic comedy, written and first performed in 1897','Réseau Canopé');
const doll=s('https://ibsen.uio.no/DRINNL_Du%7Cintro_performance.html','First performance Copenhagen 21 December 1879; contemporary reception as realistic drama','University of Oslo, Henrik Ibsens skrifter');
type ClassicRow=readonly [id:string,title:string,author:string,writerId:string,n:number,genre:string,genreId:string,genreSource:Source,period:string,event:string,dateSource:Source,certain:boolean];
const classics:readonly ClassicRow[]=[
 ['hamlet','Hamlet','William Shakespeare','william-shakespeare',1524,'Revenge tragedy','revenge-tragedy',s('https://www.folger.edu/explore/shakespeares-works/hamlet/','Introduction: revenge-tragedy form','Folger Shakespeare Library'),'Around 1601','Approximate composition',s('https://cdn2.rsc.org.uk/sitefinity/education-pdfs/teacher-packs/rsc_edu_ham_2013.pdf?sfvrsn=a293b221_4','Teacher pack: Hamlet written about 1601','Royal Shakespeare Company'),false],
 ['antigone','Antigone','Sophocles','sophocles',31,'Tragedy','tragedy',pg(31),'441 BCE','Original performance context',s('https://shop.nationaltheatre.org.uk/products/antigone-student-edition-playtext-1','Commentary description dates original performance conditions to 441 BCE; not the translation edition date','National Theatre / Bloomsbury'),false],
 ['tartuffe','Tartuffe','Molière','moliere',28488,'Comedy','comedy',pg(28488),'1669','Premiere of the five-act version',cf,true],
 ['importance-earnest','The Importance of Being Earnest','Oscar Wilde','oscar-wilde',844,'Comedy','comedy',pg(844),'1895','First performance',s('https://www.univ.ox.ac.uk/news/oscar-wildes-1895/','Premiere at St James’s Theatre on St Valentine’s Day, 1895','University College Oxford'),true],
 ['dolls-house','A Doll’s House','Henrik Ibsen','henrik-ibsen',2542,'Realist drama','realist-drama',doll,'1879','First performance',doll,true],
 ['cyrano','Cyrano de Bergerac','Edmond Rostand','edmond-rostand',1254,'Heroic comedy','heroic-comedy',cyrano,'1897','First performance',cyrano,true],
 ['bacchae','The Bacchae','Euripides','euripides',35173,'Tragedy','tragedy',s('https://api.pageplace.de/preview/DT0400.9781108956437_A49239509/preview-9781108956437_A49239509.pdf','Cambridge Greek and Latin Classics introduction: tragic play; first performed in or shortly after 405 BC','Cambridge University Press'),'Around 405 BCE','Posthumous first performance',s('https://api.pageplace.de/preview/DT0400.9781108956437_A49239509/preview-9781108956437_A49239509.pdf','Introduction: in or shortly after 405 BC; do not turn this into a secure exact year','Cambridge University Press'),false],
 ['school-scandal','The School for Scandal','Richard Brinsley Sheridan','richard-brinsley-sheridan',1929,'Comedy of manners','comedy-manners',s('https://www.bloomsbury.com/UK/author/richard-brinsley-sheridan/','Biography explicitly calls The School for Scandal a comedy of manners, opened 1777','Bloomsbury'),'1777','Original production',s('https://www.bloomsbury.com/uk/school-for-scandal-9781408145036/','Description dates The School for Scandal to 1777','Bloomsbury / Methuen Drama'),true],
 ['she-stoops-conquer','She Stoops to Conquer','Oliver Goldsmith','oliver-goldsmith',383,'Comedy','comedy',s('https://www.bloomsbury.com/CA/author/oliver-goldsmith/','Author biography: comedy She Stoops to Conquer, 1773','Bloomsbury'),'1773','Original production',s('https://embta.english.ucsb.edu/items/show/15','Original 1773 title page','University of California, Santa Barbara'),true],
 ['doctor-faustus','Doctor Faustus','Christopher Marlowe','christopher-marlowe',779,'Tragedy','tragedy',pg(779),'1604','First surviving printed edition',pg(779,'Title field: From the Quarto of 1604; not a claim about first composition or earliest performance'),true],
 ['tempest','The Tempest','William Shakespeare','william-shakespeare',23042,'Romance','romance',s('https://www.folger.edu/explore/shakespeares-works/the-tempest/','Introduction: putting romance onstage','Folger Shakespeare Library'),'1611','Approximate composition',rsc,false],
];
// User-approved genre-only re-staging (Theatre l1): the mistaken-identity comedy joins A so a duplicate-target
// matching set exists there; Earnest moves to B. Author and date facts keep the row-order priority.
const genrePriorities:Readonly<Record<string,number>>={'she-stoops-conquer':5,'importance-earnest':4};
export const classicPlays:readonly Play[]=classics.map(([id,title,author,writerId,n,label,genreId,genreSource,period,event,dateSource,dateCertain],i)=>({id,title,author,authorId:`person:${writerId}`,source:pg(n),genre:{id:genreId,label,source:genreSource},period,event,dateSource,dateCertain,priority:i<6?5:i<9?4:3,...(genrePriorities[id]===undefined?{}:{genrePriority:genrePriorities[id]})}));
const godot=s('https://groveatlantic.com/book/waiting-for-godot/','Samuel Beckett; subtitle A Tragicomedy in Two Acts; Théâtre de Babylone beginning in 1953','Grove Atlantic');
const glass=s('https://americanrepertorytheater.org/media/from-tom-to-tennessee/','Tennessee Williams; premiere in Chicago December 1944, before Broadway 1945','American Repertory Theater');
const huchette=s('https://www.theatre-huchette.com/pdf/DOSSIER-PEDAGOGIQUE-2023.pdf','Pages 3, 5–6, 16–19: Ionesco, premiere 11 May 1950, theatre of the absurd','Théâtre de la Huchette');
type ModernRow=readonly [id:string,title:string,author:string,writerId:string,source:Source,genre:string,genreId:string,year:string,event:string,dateSource?:Source];
const modern:readonly ModernRow[]=[
 ['our-town','Our Town','Thornton Wilder','thornton-wilder',concord(646,'our-town'),'Drama','drama','1938','First Broadway production'],
 ['waiting-godot','Waiting for Godot','Samuel Beckett','samuel-beckett',godot,'Tragicomedy','tragicomedy','1953','First French-language performance'],
 ['glass-menagerie','The Glass Menagerie','Tennessee Williams','tennessee-williams',glass,'Memory play','memory-play','1944','First Chicago performance'],
 ['birthday-party','The Birthday Party','Harold Pinter','harold-pinter',concord(2878,'the-birthday-party'),'Comedy of menace','comedy-menace','1958','First performance in Cambridge'],
 ['raisin-sun','A Raisin in the Sun','Lorraine Hansberry','lorraine-hansberry',s('https://www.concordtheatricals.co.uk/p/2794/a-raisin-in-the-sun','Hansberry byline, Drama classification and Broadway history','Concord Theatricals'),'Drama','drama','1959','First Broadway production'],
 ['fences','Fences','August Wilson','august-wilson',s('https://fords.org/performance/august-wilsons-fences/','August Wilson’s drama; written 1983, premiered Yale Repertory Theatre 1985','Ford’s Theatre'),'Drama','drama','1985','First Yale Repertory production'],
 ['rosencrantz-guildenstern','Rosencrantz and Guildenstern Are Dead','Tom Stoppard','tom-stoppard',concord(2819,'rosencrantz-and-guildenstern-are-dead'),'Dramatic comedy','dramatic-comedy','1966','First Edinburgh Fringe production'],
 ['top-girls','Top Girls','Caryl Churchill','caryl-churchill',concord(1798,'top-girls'),'Dramatic comedy','dramatic-comedy','1982','First Royal Court production'],
 ['master-harold','“Master Harold”…and the Boys','Athol Fugard','athol-fugard',s('https://yalerep.org/productions/master-harold-and-the-boys/','Production archive: Athol Fugard, March 1982','Yale Repertory Theatre'),'Drama','drama','1982','Original Yale Repertory production'],
 ['bald-soprano','The Bald Soprano','Eugène Ionesco','eugene-ionesco',huchette,'Theatre of the Absurd','absurd','1950','First Paris performance'],
 ['crucible','The Crucible','Arthur Miller','arthur-miller',s('https://www.ibdb.com/broadway-production/the-crucible-2211','Original play by Arthur Miller; Drama; Broadway opened January 1953, Wilmington pre-Broadway January 1953','Broadway League, IBDB'),'Drama','drama','1953','Original production year'],
];
// Genre-only re-staging (Theatre l5): the genre-matching exercise needs four mutually uncontested plays in stage A.
// Top Girls (feminist drama) and The Crucible (historical drama) join Glass Menagerie and Birthday Party there;
// Raisin and Fences, whose realist/tragic readings overlap the others, move later. Author and date facts keep the
// row-order priority. Final repair: Bald Soprano moves B→A, and the Oklahoma! reserve takes the genre-only
// Our Town slot in B. Glass Menagerie + Bald Soprano (A), Rosencrantz + Oklahoma! (B) also fit C's 2A/2B pool.
const modernGenrePriorities:Readonly<Record<string,number>>={'top-girls':5,'crucible':5,'raisin-sun':3,'fences':3,'bald-soprano':5};
export const modernPlays:readonly Play[]=modern.map(([id,title,author,writerId,source,label,genreId,period,event,dateSource],i)=>({id,title,author,authorId:`person:${writerId}`,source,genre:{id:genreId,label,source:id==='glass-menagerie'?s('https://media.milwaukeerep.com/filer_public/50/cd/50cdabfd-ea29-4766-888d-b645228ee2f7/glass_menagerie_sg.pdf','Tom’s memory structures the play’s presentation of past events','Milwaukee Repertory Theater'):source},period,event,dateSource:dateSource??source,dateCertain:true,priority:i<6?5:i<9?4:3,...(modernGenrePriorities[id]===undefined?{}:{genrePriority:modernGenrePriorities[id]})}));
function playSet(level:string,plays:readonly Play[]){return joinSets(plays.flatMap(w=>{
 const event=w.event==='Approximate composition'?'writing':w.event==='First surviving printed edition'?'first publication':'first performance';
 return [
 authorCredit(w,'theatre',level,'p1','playwright'),
 literaryFact({subtopic:'theatre',level,part:'p2',id:w.id,subject:w.title,subjectId:`work:${w.id}`,subjectType:'work',answer:w.genre.label,answerId:`theatre-genre:${w.genre.id}`,answerType:'category',source:w.genre.source,qualifiers:{},scope:'',priority:w.genrePriority??w.priority,priorityReason:'Recognise a documented dramatic form while retaining overlapping classifications.'}),
 literaryFact({subtopic:'theatre',level,part:'p4',id:w.id,subject:w.title,subjectId:`work:${w.id}`,subjectType:'work',answer:w.period,answerId:`play-date:${w.period}`,answerType:'date',source:w.dateSource,qualifiers:{event,eventDetail:w.event},scope:`${w.event}.`,contract:{event},priority:w.priority,priorityReason:'Keep first performance, version, publication and approximate composition dates distinct.',...(w.dateCertain?{completeField:{valueIds:[`play-date:${w.period}`],reason:'The specified production or printed-edition event falls in this single documented year; other events are outside the visible scope.'}}:{})}),
]; }));}
const classicSet=playSet('l1',classicPlays);
// Reviewed comparisons concern these documented events, not equality of date
// labels. Approximate dates remain approximate and are never closed sets.
const approximateDateReviews={
 hamlet:{url:'https://folgerpedia.folger.edu/Hamlet',locator:'Composition and First Performance / Date of composition: unknown; estimated 1599–1601.',reason:'The estimated 1599–1601 composition interval excludes the other displayed event date.'},
 antigone:{url:'https://www.bloomsbury.com/uk/antigone-9781350510449/',locator:'Commentary description: original performance conditions in 441 BCE.',reason:'The fifth-century BCE original performance context excludes this displayed date; no exact writing year is asserted.'},
 bacchae:{url:classicPlays.find(w=>w.id==='bacchae')!.dateSource.url,locator:classicPlays.find(w=>w.id==='bacchae')!.dateSource.locator,reason:'A first performance in or shortly after 405 BCE is distinct from 441 BCE and from these much later CE events. The uncertain exact year remains open.'},
 tempest:{url:'https://www.rsc.org.uk/the-tempest/about-the-play/dates-and-sources',locator:'Date: late 1610 or early 1611 is the likeliest composition time.',reason:'The estimated 1610–1611 writing interval excludes this displayed event date.'},
} as const;
for(const [id,review] of Object.entries(approximateDateReviews)){
 const target=classicSet.concepts.find(c=>c.partId==='p4'&&c.id.endsWith(`_${id}`))!;
 for(const other of classicSet.concepts.filter(c=>c.partId==='p4'&&c!==target))classicSet.evidence.push({
  id:`play-event-date-contrast:${target.id}:${other.id}`,kind:'assertion',predicateId:target.relation,
  subjectId:target.semantic!.subject!.id!,valueId:other.semantic!.value!.id!,qualifiers:target.semantic!.qualifiers!,verdict:'invalid',
  sourceUrl:review.url,locator:`${review.locator} Compared with displayed alternative ${other.object}. ${review.reason}`,
  reviewStatus:'verified',reviewedBy:'Codex — source-event comparison (not independent human editorial approval)',reviewedAt:'2026-10-19',
 });
}
const modernSet=playSet('l5',modernPlays);
// Preserve the original Drama record and all its source evidence outside the active genre plan.
// Its author and original-production facts remain active. The approved musical reserve adds a
// useful dramatic form; with Bald Soprano in A it also bridges the B/C matching pools.
export const retainedOurTownGenreFact=modernSet.concepts.find(c=>c.id==='art_theatre_l5_p2_our-town')!;
const oklahomaGenre=sourceFact({reviewedAt:'2026-10-21',subtopic:'theatre',level:'l5',part:'p2',id:'oklahoma',subject:'Oklahoma!',subjectId:'work:oklahoma',subjectType:'work',
 answer:'Musical',answerId:'theatre-genre:musical',answerType:'category',
 source:s('https://rodgersandhammerstein.com/show/oklahoma/','Original stage work: music by Richard Rodgers, book and lyrics by Oscar Hammerstein II; integrated musical in which the creative elements support the story. Not Green Grow the Lilacs or the 1955 film.','Rodgers & Hammerstein'),
 qualifiers:{},scope:'',priority:4,priorityReason:'Recognise the integrated stage musical; bridge memory-play and absurdist classifications without excluding their legitimate overlaps.'});
modernSet.concepts=modernSet.concepts.map(c=>c===retainedOurTownGenreFact?oklahomaGenre.concepts[0]:c);
modernSet.evidence.push(...oklahomaGenre.evidence);
for(const [set,id,genre,url,locator] of [
 [classicSet,'tempest','comedy','https://www.folger.edu/blogs/collation/whats-in-a-genre/','Genre discussion: The Tempest is included among the First Folio comedies; later romance classification is additional, not exclusive.'],
 [classicSet,'tempest','tragicomedy','https://internetshakespeare.uvic.ca/doc/Tmp_GenIntro/complete/','Critical introduction, genre discussion: comedy designation and affinities with romance and tragicomedy.'],
 [modernSet,'waiting-godot','dramatic-comedy','https://www.concordtheatricals.com/p/98125/waiting-for-godot','Publisher/licensor form field: Full-Length Play, Dramatic Comedy; this does not replace Grove’s tragicomedy subtitle.'],
] as const){
 const target=set.concepts.find(c=>c.partId==='p2'&&c.id.endsWith(`_${id}`))!;
 set.evidence.push({id:`reviewed-play-genre-overlap:${id}:${genre}`,kind:'assertion',predicateId:target.relation,
  subjectId:target.semantic!.subject!.id!,valueId:`theatre-genre:${genre}`,qualifiers:{},verdict:'valid',sourceUrl:url,locator,
  reviewStatus:'verified',reviewedBy:'Codex — source-classification comparison (not independent human editorial approval)',reviewedAt:'2026-10-20',
 });
}
addGenreCompatibility(classicSet,'theatre');
// Keep the retained work's comparisons available as evidence, without putting its fact back in active lessons.
addGenreCompatibility({...modernSet,concepts:[...modernSet.concepts,retainedOurTownGenreFact]},'theatre');
export const theatrePlaySets=[classicSet,modernSet];
