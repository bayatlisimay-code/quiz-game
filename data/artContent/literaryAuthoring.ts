import { addGenreCompatibility } from './genreCompatibility';
import { sourceFact, joinSets, type Source, type SourceFact, type AuthoredSet } from './sourceAuthoring';
import type { SemanticEvidence } from '../../src/quizEngine/assessmentTypes';

export const literarySource=(url:string,locator:string,label:string):Source=>({url,locator,label});
export const pg=(id:number,locator='About this eBook: Author, Title and Subject fields (not the automatically generated summary)')=>literarySource(`https://www.gutenberg.org/ebooks/${id}`,locator,'Project Gutenberg');
export const literaryFact=(input:SourceFact)=>sourceFact({...input,reviewedAt:'2026-10-19'});
export type LiteraryWork=Readonly<{
 id:string;title:string;author:string;authorId:string;source:Source;priority:number;
 /** Optional stage override for the genre lesson only; author and publication facts keep `priority`. */
 genrePriority?:number;
 genre?:Readonly<{label:string;id:string;source:Source}>;
 publication?:Readonly<{year:number;source:Source;scope?:string}>;
}>;
/** Original textual author credit excludes translators, illustrators, editors,
 * fictional narrators and screen/stage adaptations. Each caller must provide a
 * source explicitly crediting the original author, not an inferred attribution. */
export function authorCredit(work:LiteraryWork,subtopic:'literature'|'theatre',level:string,part:'p1'|'p2'|'p4',role:string):AuthoredSet{
 return literaryFact({subtopic,level,part,id:work.id,subject:work.title,subjectId:`work:${work.id}`,subjectType:'work',answer:work.author,answerId:work.authorId,answerType:'person',source:work.source,
 qualifiers:{role,attributionStatus:'certain',creditScope:'original-text'},scope:'Original text.',priority:work.priority,priorityReason:'Reinforce a named work and its documented original writer.',
 contract:{attribution:{role,status:'certain',verb:'credited'}},completeField:{valueIds:[work.authorId],reason:'The cited original-text author field names this writer; translators, editors and illustrators have separate roles.'}});
}
export function publicationFact(work:LiteraryWork,level:string):AuthoredSet{
 if(!work.publication)throw new Error(`Unverified publication: ${work.id}`);
 const {year,source,scope}=work.publication;
 return literaryFact({subtopic:'literature',level,part:'p4',id:work.id,subject:work.title,subjectId:`work:${work.id}`,subjectType:'work',answer:String(year),answerId:`year:${year}`,answerType:'date',source,
 qualifiers:{event:'first publication',publicationScope:scope??'original-language publication'},scope:scope??'Original publication.',priority:work.priority,priorityReason:'Distinguish original publication from later editions and translations.',contract:{event:'first publication'},
 temporal:{start:year,end:year,calendar:'gregorian-proleptic'},completeField:{valueIds:[`year:${year}`],reason:'The precisely scoped first-publication event falls in this single calendar year, not the digital release date.'}});
}
/** `genreWorks` optionally supplies the genre lesson's works, index-aligned with `works`; author credits and
 * first-publication facts always come from `works`. */
export function novelSet(level:string,works:readonly LiteraryWork[],genreWorks:readonly LiteraryWork[]=works):AuthoredSet{
 if(genreWorks.length!==works.length)throw new Error('Genre works must align with the level works');
 const set=joinSets(works.flatMap((w,i)=>{
  const g=genreWorks[i];
  if(!g.genre)throw new Error(`Missing sourced genre: ${g.id}`);
  return [authorCredit(w,'literature',level,'p1','author'),literaryFact({subtopic:'literature',level,part:'p2',id:g.id,subject:g.title,subjectId:`work:${g.id}`,subjectType:'work',answer:g.genre.label,answerId:`literary-genre:${g.genre.id}`,answerType:'category',source:g.genre.source,
   qualifiers:{},scope:'',priority:g.genrePriority??g.priority,priorityReason:g.genrePriority===undefined?'Recognise a documented genre without excluding other valid classifications.':'Recognise a documented genre without excluding other valid classifications; staged to keep overlapping Gothic classifications out of one matching group.'}),publicationFact(w,level)];
 }));
 addGenreCompatibility(set,'literature');
 return set;
}

export type Novelist=Readonly<{id:string;name:string;country:string;countryId:string;birth:Source;notable:Readonly<{id:string;title:string;source:Source}>;first:Readonly<{id:string;title:string;source:Source;scope?:string;aliases?:readonly string[]}>;priority:number}>;
export function novelistSet(level:string,writers:readonly Novelist[]):AuthoredSet{
 const examples=joinSets(writers.map(w=>literaryFact({subtopic:'literature',level,part:'p1',id:w.id,subject:w.name,subjectId:`person:${w.id}`,subjectType:'person',answer:w.notable.title,answerId:`work:${w.notable.id}`,answerType:'work',source:w.notable.source,qualifiers:{},scope:'',priority:w.priority,priorityReason:'Connect an influential novelist with a documented major novel.'})));
 // Each candidate has an explicitly sourced original writer. Contradiction of
 // that credit, never the absence of a title from the target writer’s dataset.
 for(const [i,target] of examples.concepts.entries())for(const [j,candidate] of examples.concepts.entries())if(i!==j){
  const w=writers[j];
  examples.evidence.push({id:`literary-byline:${target.id}:${candidate.id}`,kind:'assertion',predicateId:target.relation,subjectId:target.semantic!.subject!.id!,valueId:candidate.semantic!.value!.id!,qualifiers:{},verdict:'invalid',sourceUrl:w.notable.source.url,locator:`${w.notable.source.locator}. Original-text authorship: ${w.name}, not ${writers[i].name}; no coauthor, translator or adaptation credit is being assessed.`,reviewStatus:'verified',reviewedBy:'Codex — source-byline comparison (not independent human editorial approval)',reviewedAt:'2026-10-19'} satisfies SemanticEvidence);
 }
 return joinSets([examples,...writers.flatMap(w=>[
  literaryFact({subtopic:'literature',level,part:'p2',id:w.id,subject:w.name,subjectId:`person:${w.id}`,subjectType:'person',answer:w.first.title,answerId:`work:${w.first.id}`,answerType:'work',source:w.first.source,qualifiers:{firstWorkCriterion:'first-published-novel'},scope:w.first.scope??'First published novel.',priority:w.priority,priorityReason:'Distinguish publication order from manuscript order.',contract:{firstWork:{criterion:'first-published-novel',wellEstablished:true}},aliases:w.first.aliases,completeField:{valueIds:[`work:${w.first.id}`],reason:'The source explicitly identifies the first published novel; earlier unpublished manuscripts and short-fiction debuts are outside this criterion.'}}),
  literaryFact({subtopic:'literature',level,part:'p4',id:w.id,subject:w.name,subjectId:`person:${w.id}`,subjectType:'person',answer:w.country,answerId:`country:${w.countryId}`,answerType:'country',source:w.birth,qualifiers:{countryConvention:'present-day'},scope:'Present-day borders.',priority:w.priority,priorityReason:'Separate birthplace from nationality and later residence.',contract:{geography:'present-day'},completeField:{valueIds:[`country:${w.countryId}`],reason:'The documented birthplace lies in this present-day country; historical citizenship and nationality are not the assessed field.'}}),
 ])]);
}
