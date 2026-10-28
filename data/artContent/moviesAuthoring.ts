import type { SourceFact, AuthoredSet, Source } from './sourceAuthoring';
import { sourceFact } from './sourceAuthoring';
import type { SemanticEvidence } from '../../src/quizEngine/assessmentTypes';
import type { Concept } from '../../src/quizEngine/conceptTypes';
export type MoviesReview = Readonly<{url: string; locator: string; checkedFields: readonly string[]; checkedAt: string; qualification?: string}>;
export type MoviesReviews = Readonly<Record<string, MoviesReview>>;
export const moviesId = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const moviesPriority = (i: number) => i < 6 ? 5 : i < 9 ? 4 : i < 11 ? 3 : 1;
export const moviesSource = (review?: MoviesReview): Source => review ? {url: review.url, locator: review.locator, label: 'Movies source comparison'} : {url:'', locator:'Unverified draft — not eligible for active assessment.', label:'Pending Movies review'};
export function moviesFact(input: Omit<SourceFact,'subtopic'|'reviewedAt'>, checked: boolean): AuthoredSet {
 const set=sourceFact({...input,subtopic:'movies',reviewedAt:'2026-10-26'});
 const hasSource=!!input.source.url;
 return {concepts:set.concepts.map(c=>({...c,tags:['movies-content',checked?'source-checked':'pending-source-review'],assessment:{...c.assessment!,evidenceIds:hasSource?c.assessment!.evidenceIds:[],reviewStatus:checked?'verified':'pending',scope:c.assessment?.scope?{...c.assessment.scope,visibility:input.contract?.scope?.visibility??'internal'}:undefined}})),
 evidence:hasSource?set.evidence.map(e=>({...e,reviewStatus:checked?'verified':'pending',reviewedBy:'Codex — Movies source comparison (not independent human editorial certification)'})):[]};
}
export function moviesComparison(target: Concept, candidate: Concept, verdict: 'valid'|'invalid', review: MoviesReview, rationale: string): SemanticEvidence {
 return {id:`movies-comparison:${target.id}:${candidate.semantic!.value!.id}:${verdict}`,kind:'assertion',predicateId:target.relation,subjectId:target.semantic!.subject!.id!,valueId:candidate.semantic!.value!.id!,qualifiers:target.semantic?.qualifiers??{},verdict,sourceUrl:review.url,locator:`${review.locator}. ${rationale}`,reviewStatus:'verified',reviewedBy:'Codex — Movies source comparison (not independent human editorial certification)',reviewedAt:review.checkedAt};
}
