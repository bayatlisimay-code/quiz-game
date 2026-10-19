import type { Concept } from '../../src/quizEngine/conceptTypes';
import type { SemanticEvidence } from '../../src/quizEngine/assessmentTypes';
import { architectureDesignReview, type AuthoredSet, type Source } from './sourceAuthoring';

/** An explicitly reviewed comparison, never the complement of stored positives.
 * The caller must supply the source-backed reason for this exact assessment scope. */
export function negativeComparison(target:Concept,candidate:Concept,source:Source,reason:string):SemanticEvidence {
 if(!target.semantic?.subject?.id||!candidate.semantic?.value?.id||!reason.trim())throw new Error('Incomplete reviewed comparison');
 return {...architectureDesignReview,reviewedAt:'2026-10-18',id:`qualified-contrast:${target.id}:${candidate.id}`,
  kind:'assertion',predicateId:target.relation,subjectId:target.semantic.subject.id,valueId:candidate.semantic.value.id,
  qualifiers:target.semantic.qualifiers??{},verdict:'invalid',sourceUrl:source.url,locator:`${source.locator}. ${reason}`};
}

/** Qualified original-fabric comparisons. Excluded historical continuities and
 * religious/cultural overlaps stay unknown; this is not a universal culture taxonomy. */
export function originalTraditionContrasts(set:AuthoredSet,sources:ReadonlyMap<string,Source>,unknown:readonly string[]):void {
 const excluded=new Set(unknown.map(pair=>pair.split('|').sort().join('|')));
 const claims=set.concepts.filter(c=>c.partId==='p2');
 for(const left of claims)for(const right of claims){
  if(left===right||left.object===right.object||excluded.has([left.object,right.object].sort().join('|')))continue;
  const source=sources.get(left.id)!,other=sources.get(right.id)!;
  set.evidence.push(negativeComparison(left,right,source,
   `Reviewed original-producing-tradition comparison: ${left.object} for the named fabric of ${left.subject}, against ${right.object}. The latter source (${other.url}; ${other.locator}) documents a different producing society/tradition. The question excludes later alterations and general influence; shared beliefs, trade and successor traditions are not globally disjoint.`));
 }
}

export type ProjectCredit=Readonly<{id:string;label:string;creditId:string;creditLabel:string;acceptedIds:readonly string[];coverage:"named-creators"|"named-collective";completeNamedCredit:true;completenessReason:string;source:Source}>;
/** Contradiction of a named, complete source credit for a specific project,
 * not the absence of membership in an entire field or movement. */
export function creditConstrainedExamples(set:AuthoredSet,projects:readonly ProjectCredit[]):void {
 for(const project of projects)if(!project.completeNamedCredit||!project.completenessReason.trim()||!project.acceptedIds.includes(project.creditId))throw new Error('Reviewed complete project-credit scope required');
 if(set.concepts.length!==projects.length)throw new Error('Project/claim alignment required');
 for(const [i,left] of set.concepts.entries())for(const [j,right] of set.concepts.entries()){
  const target=projects[i],candidate=projects[j];
  if(i===j||candidate.coverage==='named-collective'||candidate.acceptedIds.includes(target.creditId))continue;
  set.evidence.push(negativeComparison(left,right,candidate.source,
   `Named project-credit comparison: ${candidate.label} has the explicitly assessed source credit ${candidate.creditLabel}, not ${target.creditLabel}. This contradicts the visible creator constraint, not membership in ${left.subject}. ${candidate.completenessReason} Includes the source's named co-designers; manufacturing, commissioning and later revisions are separate roles.`));
 }
}
