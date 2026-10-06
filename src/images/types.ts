import type { Exercise, ExerciseType, MatchingExercise } from "../quizEngine/conceptTypes";

export type ImageReviewStatus = "pending" | "needs-review" | "approved" | "rejected";

export interface ImageAttribution {
  readonly creator: string;
  readonly title?: string;
  readonly source: string;
  readonly sourceUrl: string;
  readonly licenseLabel: string;
  readonly licenseUrl: string;
  readonly changes: string;
  readonly requiredNotices?: readonly string[];
}

export type ImageLicense =
  | { readonly status: "unknown"; readonly reason: string }
  | { readonly status: "public-domain"; readonly evidenceUrl: string }
  | { readonly status: "CC0"; readonly licenseUrl: string; readonly evidenceUrl: string }
  | { readonly status: "CC-BY"; readonly version: string; readonly licenseUrl: string;
      readonly evidenceUrl: string; readonly attribution: ImageAttribution };

export interface ImageProvenance {
  readonly candidateIdentity: string;
  readonly source: string;
  readonly sourceUrl: string;
  readonly originalImageUrl?: string;
  readonly creator: string | null; // Explicit null means unknown, not a fabricated credit.
  readonly artworkCreator?: string;
  readonly retrievedAt: string; // ISO 8601.
  readonly license: ImageLicense;
  readonly rightsNotes: string;
  readonly evidenceRefs: readonly string[];
}

export interface HostedImage {
  readonly hostedUrl: string;
  readonly storageKey: string;
  readonly width: number;
  readonly height: number;
  readonly sha256: string;
  readonly mimeType: "image/jpeg" | "image/png" | "image/webp";
}

type Review =
  | { readonly reviewStatus: "pending" | "needs-review" | "rejected";
      readonly reviewReason: string; readonly reviewedBy?: string; readonly reviewedAt?: string }
  | { readonly reviewStatus: "approved"; readonly reviewReason?: string;
      readonly reviewedBy: string; readonly reviewedAt: string };

export type ImageAssetRecord = {
  readonly imageId: string;
  readonly provenance: ImageProvenance;
} & (
  | (Extract<Review, { reviewStatus: "approved" }> & { readonly hosted: HostedImage })
  | (Exclude<Review, { reviewStatus: "approved" }> & { readonly hosted?: HostedImage })
);

export type ConceptImageBinding = {
  readonly conceptId: string;
  readonly imageId: string;
  readonly candidateIdentity: string;
  readonly altText: string;
  readonly allowedExerciseTypes: readonly ExerciseType[];
} & Review;

export interface ImageCurationDataset {
  readonly schemaVersion: 1;
  readonly assets: readonly ImageAssetRecord[];
  readonly bindings: readonly ConceptImageBinding[];
}

export interface QuizImage {
  readonly imageId: string;
  readonly uri: string;
  readonly width: number;
  readonly height: number;
  readonly altText: string;
  readonly attribution?: ImageAttribution;
}

export interface RuntimeImageBinding {
  readonly reviewStatus: "approved";
  readonly conceptId: string;
  readonly allowedExerciseTypes: readonly ExerciseType[];
  readonly image: QuizImage;
}

export interface RuntimeImageRegistry {
  readonly schemaVersion: 1;
  readonly ownedHosts: readonly string[];
  readonly bindings: Readonly<Record<string, RuntimeImageBinding>>;
}

export type PresentedExercise = MatchingExercise |
  (Exclude<Exercise, MatchingExercise> & { readonly image?: QuizImage });
