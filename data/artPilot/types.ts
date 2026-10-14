import type { Concept } from "../../src/quizEngine/conceptTypes";

/** These are source-checked originals, not automatically imported legacy claims.
 * Review was performed by Codex against the linked primary sources. This does
 * not claim that a museum employee or an independent human editor approved it.
 */
export type PilotArtwork = Readonly<{
  id: string;
  title: string;
  titleAliases?: readonly string[];
  creatorId: string;
  creator: string;
  creatorAliases?: readonly string[];
  creatorVerb?: "created" | "credited";
  introducedIn: NonNullable<Concept["introducedIn"]>;
  period: string;
  periodUrl?: string;
  original: string;
  source: string;
  url: string;
  locator: string;
  date: string;
  dateId: string;
  dateAliases?: readonly string[];
  dateContext?: string;
  event: "creation" | "completion";
  precision: "year" | "month" | "range" | "approximate-year" | "approximate-range" | "uncertain-range";
  clue: string;
  clueUrl?: string;
  clueLocator?: string;
  dateUrl?: string;
  dateLocator?: string;
  notes?: string;
}>;
