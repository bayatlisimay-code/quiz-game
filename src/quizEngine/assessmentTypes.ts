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
  | (ScopedEvidence & { readonly kind: "complete-set"; readonly subjectId: string; readonly valueIds: readonly string[]; readonly valueType: EntityType })
  | (ScopedEvidence & { readonly kind: "disjoint-values"; readonly leftId: string; readonly rightId: string })
  | (ScopedEvidence & { readonly kind: "broader-value"; readonly childId: string; readonly parentId: string })
  | (ScopedEvidence & { readonly kind: "date-bound"; readonly subjectId: string; readonly start: number; readonly end: number; readonly calendar: "gregorian-proleptic" });

export type TemporalValue = Readonly<{ start: number; end: number; calendar: "gregorian-proleptic" }>;
export type AssessmentContract = Readonly<{
  reviewStatus: "verified" | "pending";
  answerLeakageReviewed: true;
  evidenceIds: readonly string[];
  subjectType: EntityType;
  valueType: EntityType;
  direction?: "forward" | "reverse";
  inverse?: Readonly<{ enabled: true; answerLeakageReviewed: true; scope?: Readonly<{ text: string; qualifierKeys: readonly string[] }>; response?: Readonly<{ complete: true; forms: readonly { text: string; caseSensitive: boolean }[] }> }>;
  // Stable learning fact identity; reverse views never create another learned fact.
  factId?: string;
  scope?: Readonly<{ text: string; qualifierKeys: readonly string[] }>;
  response?: Readonly<{ complete: true; forms: readonly { text: string; caseSensitive: boolean }[] }>;
  attribution?: Readonly<{ role: string; status: "certain" | "attributed" | "disputed" }>;
  event?: string;
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
