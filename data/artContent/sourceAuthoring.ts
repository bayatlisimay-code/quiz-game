import type { Concept, QualifierValue } from "../../src/quizEngine/conceptTypes";
import type { AssessmentContract, EntityType, SemanticEvidence, TemporalValue } from "../../src/quizEngine/assessmentTypes";
import { teachingRelation, type TeachingPart } from "../artCurriculum";

export type Source = Readonly<{ url: string; locator: string; label: string; learnerLabel?: string }>;
export type AuthoredSet = { concepts: Concept[]; evidence: SemanticEvidence[] };
export const architectureDesignReview = Object.freeze({ reviewStatus: "verified" as const,
  reviewedBy: "Codex — institutional-source comparison (not independent human editorial approval)", reviewedAt: "2026-10-16" });
export type SourceFact = Readonly<{
  subtopic: "architecture" | "design" | "literature" | "theatre" | "music"; level: string; part: TeachingPart; id: string;
  subject: string; subjectId: string; subjectType: EntityType;
  answer: string; answerId: string; answerType: EntityType; source: Source;
  qualifiers: Readonly<Record<string, QualifierValue>>; scope: string;
  priority: number; priorityReason: string; reviewedAt?: string;
  /** Only a source's demonstrably complete, precisely worded field, never an
   * open category or a list of examples. Completeness needs an authored reason. */
  completeField?: Readonly<{ valueIds: readonly string[]; valueTypes?: readonly EntityType[]; reason: string }>;
  contract?: Partial<AssessmentContract>; description?: string; temporal?: TemporalValue; aliases?: readonly string[];
}>;
export function sourceFact(input: SourceFact): AuthoredSet {
  const relation = teachingRelation(input.subtopic,input.level,input.part);
  if (!relation) throw new Error("No approved teaching relation");
  const id=`art_${input.subtopic}_${input.level}_${input.part}_${input.id}`;
  if(Object.keys(input.qualifiers).length && !input.scope.trim()) throw new Error(`Missing qualified scope: ${id}`);
  const evidenceId=`institution-check:${id}`;
  const review={...architectureDesignReview,...(input.reviewedAt?{reviewedAt:input.reviewedAt}:{})};
  if(input.completeField && (!input.completeField.reason.trim() || !input.completeField.valueIds.includes(input.answerId))) throw new Error(`Unjustified complete field: ${id}`);
  const evidence: SemanticEvidence = { ...review, id:evidenceId, predicateId:relation,
    subjectId:input.subjectId, qualifiers:input.qualifiers, sourceUrl:input.source.url,
    locator:`${input.source.locator}${input.completeField ? `. Complete assessed field: ${input.completeField.reason}` : ""}`,
    ...(input.completeField ? {kind:"complete-set" as const,valueIds:input.completeField.valueIds,valueType:input.answerType,...(input.completeField.valueTypes?{valueTypes:input.completeField.valueTypes}:{})}
      : {kind:"assertion" as const,valueId:input.answerId,verdict:"valid" as const}) };
  const concept:Concept={ id,topicId:"art",subtopicId:input.subtopic,levelId:input.level,partId:input.part,
    relation,subject:input.subject,object:input.answer,answerKind:input.answerType==="meaning"?"long":"short",difficulty:2,
    learning:{reinforcementPriority:input.priority,rationale:input.priorityReason},tags:["verified-art-content","institutional-source"],
    semantic:{subject:{id:input.subjectId,entityType:input.subjectType,caseSensitive:false},value:{id:input.answerId,entityType:input.answerType,caseSensitive:false,...(input.temporal?{temporal:input.temporal}:{}),...(input.aliases?{aliases:input.aliases}:{})},qualifiers:input.qualifiers},
    assessment:{...input.contract,...review,answerLeakageReviewed:true,evidenceIds:[evidenceId],subjectType:input.subjectType,valueType:input.answerType,
      factId:input.contract?.factId ?? `${input.subjectId}:${relation}`,...(input.scope.trim()?{scope:{text:input.scope,qualifierKeys:Object.keys(input.qualifiers)}}:{}),
      ...(input.description ? {identification:{description:{text:input.description,evidenceIds:[evidenceId],answerLeakageReviewed:true}}}:{}),
    },
  };
  return {concepts:[concept],evidence:[evidence]};
}
export function joinSets(sets:readonly AuthoredSet[]):AuthoredSet {
  return {concepts:sets.flatMap(s=>s.concepts),evidence:sets.flatMap(s=>s.evidence)};
}
