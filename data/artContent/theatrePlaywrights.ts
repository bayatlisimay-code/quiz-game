import { theatreCharacterStudies } from './theatreCharacters';
import { modernPlays } from './theatrePlays';
import { literaryFact, literarySource as s, pg } from './literaryAuthoring';
import { joinSets, type Source } from './sourceAuthoring';
import { additionalFirstPlaySets } from './theatreFirstPlays';
type Writer=Readonly<{id:string;name:string;country:string;countryId:string;birth:Source;work:Readonly<{id:string;title:string;source:Source}>;first?:Readonly<{id:string;title:string;source:Source}>}>;
const birth=(url:string,locator:string,label:string)=>s(url,locator,label);
const countries:readonly (readonly [string,string,Source])[]=[
 ['United Kingdom','united-kingdom',birth('https://www.shakespeare.org.uk/explore-shakespeare/shakespedia/william-shakespeare/when-was-shakespeare-born/','Birth in Stratford-upon-Avon, England; no exact day inferred from baptism','Shakespeare Birthplace Trust')],
 ['France','france',birth('https://www.comedie-francaise.fr/moliere','Né à Paris, 1622; Jean-Baptiste Poquelin','Comédie-Française')],
 ['Greece','greece',birth('https://api.pageplace.de/preview/DT0400.9780190669461_A35486697/preview-9780190669461_A35486697.pdf','Introduction: Sophocles born at Colonus, outside Athens; exact year approximate','Oxford University Press')],
 ['Greece','greece',birth('https://www.bloomsbury.com/UK/author/euripides/','Biography: born near Athens; disputed exact place/date do not change present-day country','Bloomsbury')],
 ['Norway','norway',birth('https://www.hf.uio.no/is/english/services/virtual-ibsen-centre/on-ibsen-s-life/survey/','1828 chronology: Ibsen born in Skien','University of Oslo')],
 ['Russia','russia',birth('https://www.bloomsbury.com/uk/author/anton-chekhov/','Biography: born in Taganrog near Black Sea','Bloomsbury')],
 ['Ireland','ireland',birth('https://www.tcd.ie/owc/history/oscar-wilde/','Wilde’s birthplace at Westland Row, Dublin','Trinity College Dublin')],
 ['Ireland','ireland',birth('https://www.askaboutireland.ie/reading-room/history-heritage/big-houses-of-ireland/the-shaws-of-dublin/george-bernard-shaw/','Shaw born Dublin, 1856','Irish public-library service')],
 ['Ireland','ireland',birth('https://www.bloomsbury.com/UK/author/richard-brinsley-sheridan/','Biography: Dublin-born playwright','Bloomsbury')],
 ['Ireland','ireland',birth('https://www.dib.ie/index.php/biography/goldsmith-oliver-a3516','Opening: Pallas, County Longford, with date/place variants explicitly noted; alternative locations still in Ireland','Royal Irish Academy, Dictionary of Irish Biography')],
 ['United Kingdom','united-kingdom',birth('https://www.marlowe-society.org/christopher-marlowe/life/marlowes-birth/','Canterbury birth and St George’s baptism record; no exact birth day inferred','Marlowe Society')],
];
const earlyFirst:Readonly<Record<string,NonNullable<Writer['first']>>>= {
 'henrik-ibsen':{id:'catiline',title:'Catiline',source:s('https://www.ibsen.uio.no/DRINNL_C1%7Cintro_background.pdf','Opening identifies Catilina as Ibsen’s first play; composition rather than first stage production','University of Oslo')},
 'oscar-wilde':{id:'vera',title:'Vera; or, The Nihilists',source:s('https://oscarwildesociety.co.uk/news/video-rob-marland-on-wildes-vera/','Rob Marland’s research introduction explicitly calls Vera Wilde’s first play; 1883 staging is distinct','Oscar Wilde Society')},
 'oliver-goldsmith':{id:'good-natured-man',title:'The Good-Natur’d Man',source:s('https://www.dib.ie/index.php/biography/goldsmith-oliver-a3516','Publishing career: first play The good-natur’d man, produced 1768','Royal Irish Academy, Dictionary of Irish Biography')},
};
export const classicPlaywrights:readonly Writer[]=theatreCharacterStudies.map((w,i)=>({id:w.writerId,name:w.writer,country:countries[i][0],countryId:countries[i][1],birth:countries[i][2],work:{id:w.playId,title:w.play,source:pg(w.pg)},first:earlyFirst[w.writerId]}));
const modernRows:readonly (readonly [string,string,string,Source])[]=[
 ['harold-pinter','United Kingdom','united-kingdom',birth('https://www.concordtheatricals.com/a/1956/harold-pinter','Biography: born London','Concord Theatricals')],
 ['samuel-beckett','Ireland','ireland',birth('https://www.tcd.ie/trinitywriters/writers/samuel-beckett/','Sam Slote biography opening: born Foxrock, Dublin','Trinity College Dublin')],
 ['athol-fugard','South Africa','south-africa',birth('https://www.thefugard.com/wp-content/uploads/2022/08/Master-Harold-and-the-Boys-Programme.pdf','Playwright biography: born Middelburg, Karoo, South Africa','The Fugard Theatre')],
 ['eugene-ionesco','Romania','romania',birth('https://www.theatre-huchette.com/pdf/DOSSIER-PEDAGOGIQUE-2023.pdf','Page 4: born Romania, Slatina (printed Saltina); do not substitute later French citizenship','Théâtre de la Huchette')],
 ['tom-stoppard','Czechia','czechia',birth('https://research.hrc.utexas.edu/fasearch/findingAid.cfm?eadid=00179','Biographical Sketch: born Zlin, Czechoslovakia, now Czechia; not British nationality','Harry Ransom Center')],
 ['arthur-miller','United States','united-states',birth('https://www.concordtheatricals.com/p/7462/death-of-a-salesman','Author biography: born New York City','Concord Theatricals')],
 ['caryl-churchill','United Kingdom','united-kingdom',birth('https://www.concordtheatricals.com/a/1394/caryl-churchill','Biography: born London, later childhood in Montreal','Concord Theatricals')],
 ['august-wilson','United States','united-states',birth('https://www.pbs.org/wnet/americanmasters/august-wilson-the-ground-on-which-i-stand-august-wilsonbiography-and-career-timeline/3683/','Biography: born Frederick August Kittel in Pittsburgh’s Hill District','PBS American Masters')],
 ['lorraine-hansberry','United States','united-states',birth('https://www.chipublib.org/lorraine-hansberry-biography/','Opening: born Provident Hospital, South Side of Chicago','Chicago Public Library')],
 ['thornton-wilder','United States','united-states',birth('https://thorntonwilder.com/biography','Biography: born Madison, Wisconsin','Thornton Wilder literary estate')],
 ['tennessee-williams','United States','united-states',birth('https://historicmissourians.shsmo.org/williams-tennessee/','Opening: born Columbus, Mississippi; moved to Missouri later','State Historical Society of Missouri')],
];
const modernFirst:Readonly<Record<string,NonNullable<Writer['first']>>>= {
 'harold-pinter':{id:'room',title:'The Room',source:s('https://www.theparisreview.org/interviews/4351/the-art-of-theater-no-3-harold-pinter','Interview: Pinter identifies The Room as his first play, written before The Birthday Party','Pinter interview, The Paris Review')},
 'arthur-miller':{id:'no-villain',title:'No Villain',source:s('https://arthurmillersociety.net/am-chronology/?src=1','1936 composition; 2015 entry identifies No Villain as his first ever play','Arthur Miller Society')},
 'tennessee-williams':{id:'beauty-word',title:'Beauty Is the Word',source:s('https://library.missouri.edu/wp-content/uploads/2014/08/LibraryConnections_Winter2011.pdf','Page 4 timeline footnote: as far as is known, earliest play written; 1930 student contest, not Battle of Angels or Glass Menagerie','University of Missouri Libraries')},
};
export const modernPlaywrights:readonly Writer[]=modernRows.map(([id,country,countryId,birth])=>{const w=modernPlays.find(w=>w.authorId===`person:${id}`)!;return {id,name:w.author,country,countryId,birth,work:{id:w.id,title:w.title,source:w.source},first:modernFirst[id]};});
function playwrightSet(level:string,writers:readonly Writer[]){
 const examples=joinSets(writers.map((w,i)=>literaryFact({subtopic:'theatre',level,part:'p2',id:w.id,subject:w.name,subjectId:`person:${w.id}`,subjectType:'person',answer:w.work.title,answerId:`work:${w.work.id}`,answerType:'work',source:w.work.source,qualifiers:{},scope:'',priority:i<6?5:i<9?4:3,priorityReason:'Associate the playwright with a documented original play.'})));
 for(const [i,target] of examples.concepts.entries())for(const [j,candidate] of examples.concepts.entries())if(i!==j)examples.evidence.push({id:`playwright-byline:${target.id}:${candidate.id}`,kind:'assertion',predicateId:target.relation,subjectId:target.semantic!.subject!.id!,valueId:candidate.semantic!.value!.id!,qualifiers:{},verdict:'invalid',sourceUrl:writers[j].work.source.url,locator:`${writers[j].work.source.locator}. Original-text writer ${writers[j].name}, not ${writers[i].name}; translators and later adaptations are distinct roles.`,reviewStatus:'verified',reviewedBy:'Codex — source-byline comparison (not independent human editorial approval)',reviewedAt:'2026-10-19'});
 return joinSets([examples,...writers.flatMap((w,i)=>[
  literaryFact({subtopic:'theatre',level,part:'p1',id:w.id,subject:w.name,subjectId:`person:${w.id}`,subjectType:'person',answer:w.country,answerId:`country:${w.countryId}`,answerType:'country',source:w.birth,qualifiers:{countryConvention:'present-day'},scope:'Present-day borders.',contract:{geography:'present-day'},completeField:{valueIds:[`country:${w.countryId}`],reason:'The documented birthplace lies within this present-day country; nationality and historical state names are separate fields.'},priority:i<6?5:i<9?4:3,priorityReason:'Distinguish place of birth from nationality and residence.'}),
  ...(w.first?[literaryFact({subtopic:'theatre',level,part:'p4',id:w.id,subject:w.name,subjectId:`person:${w.id}`,subjectType:'person',answer:w.first.title,answerId:`work:${w.first.id}`,answerType:'work',source:w.first.source,qualifiers:{firstWorkCriterion:'first-reliably-documented-play-written'},scope:'Earliest reliably documented play written.',contract:{firstWork:{criterion:'first-reliably-documented-play-written',wellEstablished:true}},completeField:{valueIds:[`work:${w.first.id}`],reason:'The cited source explicitly identifies the earliest documented play written, rather than only first professional staging, first surviving play or first successful production.'},priority:i<6?5:i<9?4:3,priorityReason:'Preserve the distinction between writing order and later performance history.'})]:[]),
 ])]);
}
export const theatrePlaywrightSets=[joinSets([playwrightSet('l3',classicPlaywrights),additionalFirstPlaySets.classic]),joinSets([playwrightSet('l6',modernPlaywrights),additionalFirstPlaySets.modern])];
// Deliberately absent: first-play claims without a secure writing-order source.
// Ancient lost plays, disputed Shakespeare/Marlowe chronologies, Beckett’s
// fragments and Stoppard’s authorial "first" distinction cannot be silently
// replaced by a first surviving/full-length/staged/successful play.
