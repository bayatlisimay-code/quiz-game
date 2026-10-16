import type { Concept } from "./conceptTypes";
import type { SemanticContext } from "./semanticValidation";
export const INTRODUCTION_COUNTS = { A: 6, B: 3, C: 2 } as const;
export function hasLearningPriority(c: Concept): boolean {
    return !!c.learning?.rationale?.trim() && Number.isInteger(c.learning.reinforcementPriority) && c.learning.reinforcementPriority >= 1 && c.learning.reinforcementPriority <= 5;
}
export function factIdentity(c: Concept, context: SemanticContext): string {
    const claim = context.claim(c);
    return c.assessment?.factId ?? `${claim.key}:${claim.answer.identity}`;
}
export function compareEducationalPriority(a: Concept, b: Concept): number {
    return (b.learning?.reinforcementPriority ?? 0) - (a.learning?.reinforcementPriority ?? 0) || lexical(a.id,b.id);
}
function lexical(a: string, b: string): number { return a < b ? -1 : a > b ? 1 : 0; }
export function teachingIntroductions(concepts: readonly Concept[]) {
    return Object.fromEntries((["A", "B", "C"] as const).map(stage => [stage,
        concepts.filter(c => (c.introducedIn ?? "A") === stage).sort(compareEducationalPriority).slice(0, INTRODUCTION_COUNTS[stage])])) as Record<"A" | "B" | "C", Concept[]>;
}
export function teachingGroup(c: Concept): string { return JSON.stringify([c.topicId, c.subtopicId, c.levelId, c.partId]); }
/** Only a complete teaching stage introduces facts. Later stages cannot repair
 * an incomplete earlier stage, and unused overflow facts never enter review. */
export function introducedReviewPool(concepts: readonly Concept[]): Concept[] {
    const groups = new Map<string, Concept[]>();
    for (const c of concepts) {
        const key = teachingGroup(c);
        const group = groups.get(key) ?? [];
        group.push(c);
        groups.set(key, group);
    }
    return [...groups.values()].flatMap(group => {
        const introductions = teachingIntroductions(group), result: Concept[] = [];
        for (const stage of ["A", "B", "C"] as const) {
            if (introductions[stage].length !== INTRODUCTION_COUNTS[stage])
                break;
            result.push(...introductions[stage]);
        }
        return result;
    });
}
function combinations<T>(values: readonly T[], count: number): T[][] {
    if (!count)
        return [[]];
    return values.flatMap((value, index) => combinations(values.slice(index + 1), count - 1).map(rest => [value, ...rest]));
}
/** At most 45 review combinations for C. Educational priority determines order;
 * matching feasibility can select the next best set without unsafe fallbacks. */
export function teachingFactPools(concepts: readonly Concept[], variant: "A" | "B" | "C"): Concept[][] {
    const stages = teachingIntroductions(concepts);
    if (variant === "A")
        return [stages.A];
    const pools = variant === "B" ? combinations(stages.A, 3).map(review => [...review, ...stages.B])
        : combinations(stages.A, 2).flatMap(a => combinations(stages.B, 2).map(b => [...a, ...b, ...stages.C]));
    return pools.sort((a, b) => b.reduce((sum, c) => sum + (c.learning?.reinforcementPriority ?? 0), 0) - a.reduce((sum, c) => sum + (c.learning?.reinforcementPriority ?? 0), 0) ||
        lexical(a.map(c => c.id).sort().join(), b.map(c => c.id).sort().join()));
}
