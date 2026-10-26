import type { QualifierValue } from "./conceptTypes";
import type { QuizImage } from "../images/types";

export type EntityType = "person" | "group" | "work" | "song" | "recording" | "composition" | "country" | "place" | "institution" | "character" | "term" | "meaning" | "category" | "culture" | "period" | "date" | "design" | "typeface" | "stimulus";
export type EvidenceScope = Readonly<Record<string, QualifierValue>>;
export type EvidenceReview = Readonly<{
  id: string;
  sourceUrl: string;
  locator: string;
  reviewStatus: "verified" | "pending" | "rejected";
  reviewedBy?: string;
  reviewedAt?: string;
}>;
type ScopedEvidence = EvidenceReview & { readonly predicateId: string; readonly qualifiers: EvidenceScope };
export type SemanticEvidence =
  | (ScopedEvidence & { readonly kind: "assertion"; readonly subjectId: string; readonly valueId: string; readonly verdict: "valid" | "invalid" })
  | (ScopedEvidence & { readonly kind: "complete-set"; readonly subjectId: string; readonly valueIds: readonly string[]; readonly valueType: EntityType; readonly valueTypes?: readonly EntityType[] })
  | (ScopedEvidence & { readonly kind: "disjoint-values"; readonly leftId: string; readonly rightId: string })
  | (ScopedEvidence & { readonly kind: "broader-value"; readonly childId: string; readonly parentId: string })
  | (ScopedEvidence & { readonly kind: "date-bound"; readonly subjectId: string; readonly start: number; readonly end: number; readonly calendar: "gregorian-proleptic" });

export type TemporalValue = Readonly<{ start: number; end: number; calendar: "gregorian-proleptic" }>;
export type ReviewedWording = Readonly<{
  text: string;
  canonicalText: string;
  evidenceIds: readonly string[];
  reviewStatus: "verified" | "pending";
  reviewedBy: string;
  reviewedAt: string;
  rationale: string;
}>;
export type AssessmentScope = Readonly<{
  text: string;
  qualifierKeys: readonly string[];
  // Definition scopes default to internal meaning-validation notes. Explicit
  // learner visibility preserves an essential qualified terminology sense.
  visibility?: "learner" | "internal";
}>;
export type AssessmentContract = Readonly<{
  reviewStatus: "verified" | "pending";
  answerLeakageReviewed: true;
  evidenceIds: readonly string[];
  subjectType: EntityType;
  valueType: EntityType;
  direction?: "forward" | "reverse";
  inverse?: Readonly<{ enabled: true; answerLeakageReviewed: true; scope?: AssessmentScope; response?: Readonly<{ complete: true; forms: readonly { text: string; caseSensitive: boolean }[] }> }>;
  // Stable learning fact identity; reverse views never create another learned fact.
  factId?: string;
  // Explicit source-field assessment; not an unqualified exclusive membership.
  catalogueField?: "cultural attribution" | "dating label";
  // A sourced project narrows an otherwise open association. This never grants
  // exclusivity: negatives still require evidence for the exact qualified claim.
  focus?: Readonly<{ kind: "example-credit" | "project-credit" | "project-field" | "project-period"; identity: string; label: string; action?: "designed" | "founded" | "developed" | "wrote" | "recorded"; collectiveCredit?: true }>;
  scope?: AssessmentScope;
  // Presentation never changes claim identity, negative evidence or typed forms.
  presentation?: Readonly<{
    answer?: ReviewedWording & Readonly<{ valueId: string; matchingText?: string }>;
    scope?: ReviewedWording;
  }>;
  response?: Readonly<{ complete: true; forms: readonly { text: string; caseSensitive: boolean }[] }>;
  attribution?: Readonly<{ role: string; status: "certain" | "attributed" | "disputed"; verb?: "created" | "credited" }>;
  event?: string;
  // Source-qualified dating labels are not claims that every other overlapping
  // interval is historically false. Wording must expose this assessment scope.
  dateInterpretation?: "catalogue-label";
  geography?: "present-day";
  firstWork?: Readonly<{ criterion: "first-published-novel" | "first-feature-directed" | "first-reliably-documented-play-written"; wellEstablished: true }>;
  association?: Readonly<{ kind: "friendship" | "family" | "romance" | "rivalry" | "companionship"; workId: string; spoilerFree: true }>;
  music?: Readonly<{ role: "performer" | "songwriter" | "composer"; versionId: string; isCover?: boolean; creditedEntityId: string }>;
  institutionType?: "award" | "festival";
  // Independently authored descriptions; never generated from subject/object names.
  identification?: Readonly<{
    description?: Readonly<{ text: string; evidenceIds: readonly string[]; answerLeakageReviewed: true }>;
  }>;
}>;
export type AssessmentStimulus =
  | Readonly<{ kind: "text"; text: string }>
  | Readonly<{ kind: "image"; image: QuizImage; fallbackText?: string }>;
