import type { SemanticEvidence } from '../../src/quizEngine/assessmentTypes';
import { joinSets, sourceFact, architectureDesignReview, type Source, type AuthoredSet } from './sourceAuthoring';
import { teachingRelation, type TeachingPart } from '../artCurriculum';
export type ReviewedTerm = Readonly<{id:string;term:string;meaning:string;source:Source;priority:number;matchingMeaning?:string}>;
/** Explicit editorial meaning comparisons, not exclusivity of a work's features.
 * Hierarchical/overlapping senses are deliberately omitted from each cohort. */
export function reviewedDefinitions(subtopic:'architecture'|'design'|'literature'|'theatre',level:string,part:TeachingPart,terms:readonly ReviewedTerm[],contrasts:readonly (readonly [string,string,string])[]):AuthoredSet {
 const relation=teachingRelation(subtopic,level,part);
 if(!relation) throw new Error('Missing terminology placement');
 const sense=`${subtopic}:${relation}`;
 const review = {...architectureDesignReview, ...(['literature','theatre'].includes(subtopic) ? {reviewedAt:'2026-10-19'} : {})};
 const result=joinSets(terms.map(t=>sourceFact({subtopic,level,part,id:t.id,subject:t.term,subjectId:`term:${sense}:${t.id}`,subjectType:'term',answer:t.meaning,answerId:`meaning:${sense}:${t.id}`,answerType:'meaning',source:t.source,
  qualifiers:{sense},scope:'Defining terminology sense; not every property that may coexist in a work.',priority:t.priority,
  reviewedAt:review.reviewedAt,priorityReason:t.priority===5?'Foundational terminology for interpreting later works; reinforce its distinguishing meaning.':'Extends the vocabulary beyond the foundational terms.'})));
 for(const term of terms) if(term.matchingMeaning){
  const concept=result.concepts.find(c=>c.semantic?.subject?.id===`term:${sense}:${term.id}`)!;
  concept.assessment={...concept.assessment!,presentation:{answer:{
   text:term.meaning,matchingText:term.matchingMeaning,canonicalText:term.meaning,valueId:concept.semantic!.value!.id!,
   evidenceIds:concept.assessment!.evidenceIds,reviewStatus:'verified',reviewedBy:architectureDesignReview.reviewedBy,
   reviewedAt:review.reviewedAt,
   rationale:'Individually authored matching paraphrase retains the defining historical setting and distinguishing form; canonical evidence and ordinary answers remain intact.',
  }}};
 }
 for(const [leftId,rightId,rationale] of contrasts){
  const left=terms.find(t=>t.id===leftId),right=terms.find(t=>t.id===rightId);
  if(!left||!right||left===right||!rationale.trim()) throw new Error(`Invalid reviewed contrast ${sense}:${leftId}:${rightId}`);
  for(const [a,b] of [[left,right],[right,left]]){
   const concept=result.concepts.find(c=>c.semantic?.subject?.id===`term:${sense}:${a.id}`)!;
   const evidence:SemanticEvidence={...review,id:`meaning-contrast:${sense}:${a.id}:${b.id}`,kind:'assertion',predicateId:concept.relation,
    subjectId:`term:${sense}:${a.id}`,valueId:`meaning:${sense}:${b.id}`,qualifiers:{sense},verdict:'invalid',sourceUrl:a.source.url,
    locator:`${a.source.locator}. Compared with ${b.source.url} (${b.source.locator}). ${rationale} Comparison concerns the supplied defining meaning, not co-occurrence.`};
   result.evidence.push(evidence);
  }
 }
 return result;
}
/** Calling this requires an explicitly reviewed cohort, not merely two different IDs. */
export function reviewedCohort(ids:readonly string[],rationale:string,unknown:readonly string[]=[]):readonly (readonly [string,string,string])[]{
 return ids.flatMap((a,i)=>ids.slice(i+1).filter(b=>!unknown.includes([a,b].sort().join('|'))).map(b=>[a,b,rationale] as const));
}
