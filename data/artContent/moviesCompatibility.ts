import type { Concept } from '../../src/quizEngine/conceptTypes';
import type { AuthoredSet } from './sourceAuthoring';
import { moviesComparison, type MoviesReview } from './moviesAuthoring';

/** Scope-specific comparisons use checked defining meanings or the named
 * film’s direction credit. Different genres alone never prove a negative. */
export function moviesCompatibility(set:AuthoredSet):AuthoredSet {
 const evidence=[...set.evidence];
 const anchors=new Map(evidence.map(e=>[e.id,e]));
 const source=(c:Concept):MoviesReview|undefined=>{
  if(c.assessment?.reviewStatus!=='verified')return;
  const e=anchors.get(c.assessment.evidenceIds[0]);
  return e?{url:e.sourceUrl,locator:e.locator,checkedFields:[],checkedAt:e.reviewedAt??'2026-10-26'}:undefined;
 };
 const ambiguous=new Set([
  'director|producer','cinematographer|gaffer','director|casting-director','sound-designer|foley-artist','sound-designer|production-sound-mixer',
  'shot|scene','shot|close-up','shot|wide-shot','scene|close-up','scene|wide-shot',
  'horror|thriller','action|adventure','comedy|romantic-comedy','romance|romantic-comedy',
 ].map(p=>p.split('|').sort().join('|')));
 const id=(c:Concept)=>c.id.split('_').at(-1)!;
 const definitions=set.concepts.filter(c=>c.semantic?.value?.entityType==='meaning'&&source(c));
 for(const a of definitions)for(const b of definitions){
  if(a===b||a.levelId!==b.levelId||a.partId!==b.partId||ambiguous.has([id(a),id(b)].sort().join('|')))continue;
  if(a.levelId==='l2'&&[id(a),id(b)].includes('drama')&&![id(a),id(b)].some(x=>['musical','science-fiction'].includes(x)))continue;
  evidence.push(moviesComparison(a,b,'invalid',source(a)!,
   `Defining-meaning comparison with ${source(b)!.url}: ${a.subject} — ${a.object}; ${b.subject} — ${b.object}. These are different defining meanings in this scoped terminology question, not mutually exclusive features of films or claims that jobs cannot be combined.`));
 }
 const credits=set.concepts.filter(c=>['example_of_notable_movie_by_director','example_of_movie_genre'].includes(c.relation)&&source(c));
 for(const a of credits)for(const b of credits){
  if(a===b||a.levelId!==b.levelId||a.relation!==b.relation||a.semantic?.value?.id===b.semantic?.value?.id)continue;
  const aDirector=a.assessment?.focus?.identity??a.semantic?.subject?.id;
  const bDirector=b.assessment?.focus?.identity??b.semantic?.subject?.id;
  if(aDirector===bDirector)continue;
  evidence.push(moviesComparison(a,b,'invalid',source(b)!,
   `Named-film director-credit comparison with ${source(a)!.url}: the specified candidate film ${b.object} is directed by ${b.assessment?.focus?.label??b.subject}, not ${a.assessment?.focus?.label??a.subject}. This concerns that film’s direction credit, not genre exclusivity, production, acting or an exhaustive filmography.`));
 }
 const portrayals=set.concepts.filter(c=>c.relation==='movie_of_character'&&source(c));
 const candidateFilms=[...new Map(portrayals.map(c=>[c.semantic!.value!.id,c])).values()];
 for(const a of portrayals)for(const b of candidateFilms){
  if(a===b||a.semantic?.value?.id===b.semantic?.value?.id)continue;
  // Only the independently reviewed, unrelated film portrayals in this cohort.
  // Franchise sequels/adaptations are not candidates in this comparison set.
  evidence.push(moviesComparison(a,b,'invalid',source(b)!,
   `Screen-portrayal comparison with ${source(a)!.url}: ${a.subject} is the specified character portrayed in ${a.object}, whereas the cited candidate film ${b.object} has the independently checked ${b.subject} portrayal and narrative. These named films have different screen characters; this is not a complete list of every film featuring either character.`));
 }
 // Separately checked screen-character contrasts for the names-only instruction.
 // This explicit roster is limited to these reviewed films and characters; it
 // is not a rule that arbitrary characters from different work IDs cannot meet.
 const unrelated:Readonly<Record<string,readonly string[]>> = {
  hermione:['dorothy','frodo','luke','katniss','marty','michael-corleone','indiana','jack-sparrow','neo','amalie'],
  dorothy:['hermione','frodo','luke','katniss','marty','michael-corleone','indiana','jack-sparrow','neo','amalie'],
  frodo:['hermione','dorothy','luke','katniss','marty','michael-corleone','indiana','jack-sparrow','neo','amalie'],
  luke:['hermione','dorothy','frodo','katniss','marty','michael-corleone','indiana','jack-sparrow','neo','amalie'],
  katniss:['hermione','dorothy','frodo','luke','marty','michael-corleone','indiana','jack-sparrow','neo','amalie'],
  marty:['hermione','dorothy','frodo','luke','katniss','michael-corleone','indiana','jack-sparrow','neo','amalie'],
  'michael-corleone':['hermione','dorothy','frodo','luke','katniss','marty','indiana','jack-sparrow','neo','amalie'],
  indiana:['hermione','dorothy','frodo','luke','katniss','marty','michael-corleone','jack-sparrow','neo','amalie'],
  'jack-sparrow':['hermione','dorothy','frodo','luke','katniss','marty','michael-corleone','indiana','neo','amalie'],
  neo:['hermione','dorothy','frodo','luke','katniss','marty','michael-corleone','indiana','jack-sparrow','amalie'],
  amalie:['hermione','dorothy','frodo','luke','katniss','marty','michael-corleone','indiana','jack-sparrow','neo'],
 };
 const relationships=set.concepts.filter(c=>c.relation==='associated_character_in_same_movie'&&source(c));
 for(const a of relationships)for(const b of relationships){
  const same=a===b||([id(a),id(b)].every(x=>['luke','leia'].includes(x)));
  if(!same&&!unrelated[id(a)]?.includes(id(b)))continue;
  const assertion=moviesComparison(a,b,same?'valid':'invalid',source(a)!,
   `Names-only same-movie review: ${a.subject} and ${b.object}. ${same?'Both characters appear in the specified film.':`The reviewed screen narratives and character credits distinguish this subject from ${b.object}, the character in ${b.subject}. These named characters do not co-appear in the specified film; the decision is specific to this checked roster, not inferred from missing database membership.`} Candidate character source: ${source(b)!.url}. Ordinary relationship evidence remains separate.`);
  evidence.push({...assertion,id:`movies-same-movie:${a.id}:${b.id}`,qualifiers:{...a.semantic?.qualifiers,matchingScope:'same-movie'},reviewedAt:'2026-10-27'});
 }
 return {...set,evidence};
}
