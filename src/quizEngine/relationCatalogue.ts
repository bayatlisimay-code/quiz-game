import { artRelationDefinitions } from "../../data/artRelations";
import type { RelationDefinition } from "./relationDefinitions";

// Add another topic's explicit definitions here; strategies and generation never
// inspect topic IDs, subject names, or relation-name fragments to infer semantics.
export const relationDefinitions: Readonly<Record<string, RelationDefinition>> = Object.freeze({ ...artRelationDefinitions });
