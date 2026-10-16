import { INTRODUCTION_COUNTS, teachingIntroductions, introducedReviewPool, teachingFactPools, teachingGroup, factIdentity, compareEducationalPriority, hasLearningPriority } from "./learningProgression";
import { isPermanentlyLockable, hasIndistinguishableAnswers } from "./matchingSafety";
import { isMatchingPairCorrect } from "./answerValidation";
import { reverseConcept } from "./assessmentTemplates";
import { hashString, seededShuffle } from "./deterministic";
import type { Concept, Exercise, ExerciseType } from "./conceptTypes";
import { assessableForms, generateExercise, getExerciseCapabilities, matchingCandidates, spendSearchNode } from "./exerciseFactory";
import type { AssessmentForm, ExerciseCapabilities, SearchBudget } from "./exerciseFactory";
import { createSemanticContext, immutableSnapshot } from "./semanticValidation";
import type { SemanticContext } from "./semanticValidation";
export type QuizVariant = "A" | "B" | "C";
const TYPES: readonly ExerciseType[] = ["mcq", "true_false", "fill_blank"];
export function quizComposition(variant: QuizVariant): Readonly<Record<ExerciseType, number>> {
    return Object.freeze({ mcq: variant === "A" ? 3 : 2, true_false: variant === "B" ? 3 : 2, fill_blank: variant === "C" ? 3 : 2 });
}
export type QuizRequest = {
    concepts: Concept[];
    direction?: "forward" | "reverse";
    mode?: "teaching" | "review";
    variant: QuizVariant;
    seed: string;
    context?: SemanticContext;
    session?: QuizSession;
    searchNodeLimit?: number;
    learnedFactIds?: readonly string[];
};
export type QuizShortage = {
    code: "missing-form" | "distinct-facts" | "matching" | "joint-composition" | "search-limit" | "generation-validation" | "introduction-stage" | "learning-priority" | "prior-learning";
    message: string;
    form?: ExerciseType;
    stage?: QuizVariant;
    needed?: number;
    available?: number;
};
export type QuizGenerationResult = {
    status: "ready" | "insufficient-content";
    exercises: Exercise[];
    diagnostics: {
        requestedOrdinary: number;
        generatedOrdinary: number;
        eligibleConcepts: number;
        assessableConcepts: number;
        unavailable: {
            conceptId: string;
            reasons: readonly string[];
        }[];
        matching: string;
        required: Readonly<Record<ExerciseType, number>>;
        available: Readonly<Record<ExerciseType, number>>;
        shortages: readonly QuizShortage[];
        searchNodes: number;
        selectedFactIds?: readonly string[];
        introducedFactIds?: readonly string[];
        reinforcedFactIds?: readonly string[];
    };
};
export type QuizSession = Readonly<{
    source: readonly Concept[];
    variant: QuizVariant;
    direction?: "forward" | "reverse";
    mode: "teaching" | "review";
    context: SemanticContext;
    eligible: readonly Concept[];
    assessable: readonly Concept[];
    unavailable: readonly {
        conceptId: string;
        reasons: readonly string[];
    }[];
    capabilities(concept: Concept): ExerciseCapabilities;
}>;
function supports(capabilities: ExerciseCapabilities, type: ExerciseType): boolean {
    const forms = assessableForms(capabilities);
    return type === "mcq" ? forms.includes("mcq") : type === "true_false" ? forms.includes("false") && forms.includes("true")
        : forms.includes("blank_options") || forms.includes("blank_typed");
}
export function prepareQuizSession({ concepts: supplied, variant, context: suppliedContext, direction, mode = "teaching" }: Omit<QuizRequest, "seed" | "session">): QuizSession {
    const stages = mode === "review" ? ["A", "B", "C"] : variant === "A" ? ["A"] : variant === "B" ? ["A", "B"] : ["A", "B", "C"];
    const oriented = direction === "reverse" ? supplied.flatMap(c => { const view = reverseConcept(c); return view ? [view] : []; }) : supplied;
    const context = suppliedContext ?? createSemanticContext(supplied);
    const seenFacts = new Set<string>();
    const unique = [...oriented].sort(compareEducationalPriority).filter(c => { const id = factIdentity(c, context); if (seenFacts.has(id))
        return false; seenFacts.add(id); return true; });
    const planned = mode === "review" ? introducedReviewPool(unique) : (() => { const intro = teachingIntroductions(unique); return stages.flatMap(stage => intro[stage as QuizVariant]); })();
    const stageEligible = immutableSnapshot([...new Map(planned.filter((c) => stages.includes(c.introducedIn ?? "A")).map((c) => [c.id, c])).values()]);
    const facts = new Set<string>();
    const eligible = stageEligible.filter(c => {
        const claim = context.claim(c);
        const key = c.assessment?.factId ?? `${claim.key}:${claim.answer.identity}`;
        if (facts.has(key))
            return false;
        facts.add(key);
        return true;
    });
    const capabilities = new Map(eligible.map((c) => [c.id, getExerciseCapabilities(c, eligible, context, 3)]));
    const assessable = eligible.filter((c) => assessableForms(capabilities.get(c.id)!).length > 0);
    const unavailable = eligible.filter((c) => !assessable.includes(c)).map((c) => ({ conceptId: c.id,
        reasons: [...new Set(Object.values(capabilities.get(c.id)!.forms).filter((f) => !f.available).map((f) => f.reason))] }));
    return Object.freeze({ source: supplied, variant, direction, mode, context, eligible: Object.freeze(eligible), assessable: Object.freeze(assessable),
        unavailable: Object.freeze(unavailable), capabilities: (c: Concept) => capabilities.get(c.id)! });
}
// Exactly six facts, one repeated as certified-false judgment plus retrieval.
type Assignment = {
    concept: Concept;
    type: ExerciseType;
};
function planOrdinary(session: QuizSession, matchingIds: ReadonlySet<string>, seed: string, budget: SearchBudget, targetDistinct: number, accept: (assignments: readonly Assignment[]) => boolean): Assignment[] | undefined {
    const required = quizComposition(session.variant);
    const ordered = seededShuffle(session.assessable, `${seed}:ordinary`).sort(compareEducationalPriority);
    const candidates = Object.fromEntries(TYPES.map(type => [type, ordered.filter(c => supports(session.capabilities(c), type))])) as Record<ExerciseType, Concept[]>;
    const sourceGroups = new Set(session.source.map(teachingGroup));
    const remaining = { ...required };
    const usage = new Map<string, Set<ExerciseType>>();
    const assignments: Assignment[] = [];
    const failed = new Set<string>();
    const search = (): boolean => {
        if (!spendSearchNode(budget))
            return false;
        if (assignments.length === 7)
            return usage.size === targetDistinct && [...matchingIds].every(id => usage.has(id)) &&
                (session.mode !== "review" || new Set(assignments.map(a => teachingGroup(a.concept))).size >= Math.min(2, sourceGroups.size)) && accept(assignments);
        const slots = 7 - assignments.length;
        const missingMatching = [...matchingIds].filter((id) => !usage.has(id));
        if (missingMatching.length > slots || usage.size + slots < targetDistinct)
            return false;
        const key = JSON.stringify([remaining, assignments.map(a => [a.concept.id, a.type])]);
        if (failed.has(key))
            return false;
        const eligible = (c: Concept, type: ExerciseType) => !usage.get(c.id)?.has(type) && (usage.get(c.id)?.size ?? 0) < 2 && (usage.has(c.id) || usage.size < targetDistinct) &&
            (!usage.has(c.id) || type === "true_false" || usage.get(c.id)!.has("true_false"));
        // Hall-style capacity check for mandatory matching facts. In particular,
        // four typed-only pairs cannot fit two blank slots: reject that group
        // before spending the shared search budget on ordinary permutations.
        for (let mask = 1; mask < 8; mask++) {
            const forms = TYPES.filter((_, index) => mask & (1 << index));
            const forced = missingMatching.filter(id => {
                const concept = ordered.find(c => c.id === id)!;
                const possible = TYPES.filter(type => remaining[type] > 0 && supports(session.capabilities(concept), type));
                return possible.every(type => forms.includes(type));
            }).length;
            if (forced > forms.reduce((sum, type) => sum + remaining[type], 0)) return false;
        }
        const type = TYPES.filter((t) => remaining[t] > 0).sort((a, b) => candidates[a].filter((c) => eligible(c, a)).length - candidates[b].filter((c) => eligible(c, b)).length)[0];
        const options = candidates[type].filter((c) => eligible(c, type)).sort((a, b) => Number(missingMatching.includes(b.id)) - Number(missingMatching.includes(a.id)) ||
            (session.mode === "review" ? Number(assignments.some(x => teachingGroup(x.concept) === teachingGroup(a))) - Number(assignments.some(x => teachingGroup(x.concept) === teachingGroup(b))) : 0));
        for (const concept of options) {
            const used = usage.get(concept.id) ?? new Set<ExerciseType>();
            used.add(type);
            usage.set(concept.id, used);
            remaining[type]--;
            assignments.push({ concept, type });
            if (search())
                return true;
            assignments.pop();
            remaining[type]++;
            used.delete(type);
            if (!used.size)
                usage.delete(concept.id);
            if (budget.exhausted)
                return false;
        }
        failed.add(key);
        return false;
    };
    return search() ? assignments : undefined;
}
export function quizCompositionViolations(exercises: readonly Exercise[], variant: QuizVariant): string[] {
    const issues: string[] = [];
    if (exercises.length !== 8)
        issues.push("Expected exactly eight exercises");
    const matching = exercises.filter((e) => e.type === "matching");
    if (matching.length !== 1 || matching.some((e) => e.pairs.length !== 4))
        issues.push("Expected one four-pair matching exercise");
    for (const exercise of matching) {
        if (hasIndistinguishableAnswers(exercise.pairs))
            issues.push("Matching answers must be visibly distinct");
        if (!isPermanentlyLockable(exercise.pairs.map(left => exercise.pairs.map(right => isMatchingPairCorrect(left, right)))))
            issues.push("Every accepted matching lock must remain completable");
    }
    for (const type of TYPES)
        if (exercises.filter((e) => e.type === type).length !== quizComposition(variant)[type])
            issues.push(`Incorrect ${type} quota`);
    const truths = exercises.filter((e) => e.type === "true_false").map((e) => e.correctAnswer);
    if (!truths.includes(true) || !truths.includes(false))
        issues.push("True/False must assess both truth values");
    const ordinary = exercises.filter((e) => e.type !== "matching");
    const questionKeys = ordinary.map(e => JSON.stringify([
        (e.type === "true_false" ? e.statement : e.prompt).normalize("NFC").trim().replace(/\s+/g, " "),
        e.stimulus?.kind === "image" ? e.stimulus.image.imageId ?? e.stimulus.image.uri : e.stimulus?.text,
    ]));
    if (new Set(questionKeys).size !== ordinary.length)
        issues.push("Identical questions cannot be repeated by changing or shuffling options");
    const facts = new Set(ordinary.map((e) => e.factId ?? e.conceptId));
    if (facts.size !== 6)
        issues.push("Exactly six distinct ordinary facts are required");
    const repeats = [...facts].filter(id => ordinary.filter(e => (e.factId ?? e.conceptId) === id).length === 2);
    if (repeats.length !== 1)
        issues.push("Exactly one ordinary fact must repeat");
    if (repeats.some(id => !ordinary.some(e => (e.factId ?? e.conceptId) === id && e.type === "true_false" && !e.correctAnswer)))
        issues.push("Repeated fact requires certified false judgment and another assessment format");
    if (new Set(ordinary.map((e) => `${e.factId ?? e.conceptId}:${e.type}`)).size !== ordinary.length)
        issues.push("Repeated fact in the same exercise family");
    if ([...facts].some((id) => ordinary.filter((e) => (e.factId ?? e.conceptId) === id).length > 2))
        issues.push("Fact repeated more than twice");
    if (matching.some((e) => e.pairs.some((p) => !p.id || !ordinary.some(e => e.conceptId === p.id))))
        issues.push("Matching escaped selected ordinary facts");
    return issues;
}
export function buildQuizResult(request: QuizRequest): QuizGenerationResult {
    const { variant, seed } = request;
    const session = request.session && request.session.source === request.concepts && request.session.variant === variant && request.session.direction === request.direction && request.session.mode === (request.mode ?? "teaching") &&
        (!request.context || request.context === request.session.context) ? request.session : prepareQuizSession(request);
    const required = quizComposition(variant);
    const available = Object.fromEntries(TYPES.map((type) => [type, session.assessable.filter((c) => supports(session.capabilities(c), type)).length])) as Record<ExerciseType, number>;
    const shortages: QuizShortage[] = [];
    const budget: SearchBudget = { examined: 0, limit: Math.min(50000, Math.max(1, Math.floor(request.searchNodeLimit ?? 50000) || 1)), exhausted: false };
    const diagnostics = { requestedOrdinary: 7, generatedOrdinary: 0, eligibleConcepts: session.eligible.length,
        assessableConcepts: session.assessable.length, unavailable: [...session.unavailable], matching: "Not planned", required, available, shortages, searchNodes: 0 };
    const failure = (): QuizGenerationResult => ({ status: "insufficient-content", exercises: [], diagnostics: { ...diagnostics, searchNodes: budget.examined } });
    if (session.mode === "teaching") {
        const intro = teachingIntroductions(session.eligible);
        for (const stage of (["A", "B", "C"] as const).slice(0, ["A", "B", "C"].indexOf(variant) + 1))
            if (intro[stage].length !== INTRODUCTION_COUNTS[stage])
                shortages.push({ code: "introduction-stage", stage, needed: INTRODUCTION_COUNTS[stage], available: intro[stage].length, message: `Quiz ${stage} requires ${INTRODUCTION_COUNTS[stage]} new facts; has ${intro[stage].length}` });
    }
    if (session.eligible.some(c => !hasLearningPriority(c)))
        shortages.push({ code: "learning-priority", message: "Facts need explicit 1–5 educational reinforcement priorities and rationales" });
    for (const type of TYPES)
        if (available[type] < required[type])
            shortages.push({ code: "missing-form", form: type,
                message: `${type}: needs ${required[type]} distinct eligible facts, has ${available[type]} (negative evidence and form policy required)` });
    if (session.assessable.length < 6)
        shortages.push({ code: "distinct-facts", message: `Six assessable facts required; has ${session.assessable.length}` });
    if (shortages.length)
        return failure();
    if (request.learnedFactIds !== undefined) {
        const prerequisites = session.eligible.filter(c => session.mode === "review" || (c.introducedIn ?? "A") !== variant);
        if (prerequisites.some(c => !request.learnedFactIds!.includes(factIdentity(c, session.context)))) {
            shortages.push({ code: "prior-learning", message: "Earlier facts have not been recorded as taught under the six-fact plan. Replay the preceding teaching quizzes; existing XP and completion history are retained." });
            return failure();
        }
    }
    let sawMatching = false;
    const scheduledPools = session.mode === "teaching" ? teachingFactPools(session.eligible, variant) : [[...session.assessable]];
    const pools = scheduledPools.map(pool => pool.filter(c => request.learnedFactIds === undefined ||
        (session.mode === "teaching" && (c.introducedIn ?? "A") === variant) || request.learnedFactIds.includes(factIdentity(c, session.context)))).filter(pool => pool.length >= 6);
    if (!pools.length && request.learnedFactIds !== undefined) {
        shortages.push({ code: "prior-learning", message: "Complete the preceding six-fact teaching quizzes first. Older completion flags do not establish which facts were taught; replay Quiz A if necessary." });
        return failure();
    }
    for (const pool of pools) {
        const selectedSession = { ...session, assessable: pool.filter(c => session.assessable.some(a => a.id === c.id)) };
        if (selectedSession.assessable.length < 6)
            continue;
        for (const matching of matchingCandidates(selectedSession.assessable, seed, session.context, budget)) {
            sawMatching = true;
            // Rendering is part of feasibility: reverse questions can share a
            // prompt even when their canonical facts differ. Backtrack rather
            // than accepting a duplicate or rejecting a feasible curriculum pool.
            let exercises: Exercise[] = [];
            const assignments = planOrdinary(selectedSession, new Set(matching.concepts.map(c => c.id)), seed, budget, 6, proposed => {
                const rendered: Exercise[] = [];
                const repeated = proposed.find(a => proposed.filter(b => a.concept.id === b.concept.id).length === 2)!.concept.id;
                let otherTruthIndex = 0;
                for (const [index, { concept, type }] of proposed.entries()) {
                    const caps = session.capabilities(concept);
                    const form: AssessmentForm = type === "mcq" ? "mcq" : type === "true_false" ? concept.id === repeated ? "false" : otherTruthIndex++ === 0 ? "true" : hashString(`${seed}:extra-truth`) % 2 ? "false" : "true"
                        : caps.forms.blank_options.available ? "blank_options" : "blank_typed";
                    const result = generateExercise(concept, caps, form, session.context, `${seed}:${index}:${concept.id}`, 3);
                    if (result.status === "unavailable") return false;
                    rendered.push(result.exercise);
                }
                rendered.push(matching.exercise);
                if (quizCompositionViolations(rendered, variant).length) return false;
                exercises = rendered;
                return true;
            });
            if (!assignments) {
                if (budget.exhausted) break;
                continue;
            }
            return { status: "ready", exercises: seededShuffle(exercises, `${seed}:exercise-order`),
                diagnostics: { ...diagnostics, generatedOrdinary: 7, matching: "Available", searchNodes: budget.examined,
                    selectedFactIds: [...new Set(assignments.map(a => factIdentity(a.concept, session.context)))],
                    introducedFactIds: session.mode === "review" ? [] : [...new Set(assignments.filter(a => (a.concept.introducedIn ?? "A") === variant).map(a => factIdentity(a.concept, session.context)))],
                    reinforcedFactIds: session.mode === "review" ? [...new Set(assignments.map(a => factIdentity(a.concept, session.context)))] : [...new Set(assignments.filter(a => (a.concept.introducedIn ?? "A") !== variant).map(a => factIdentity(a.concept, session.context)))] } };
        }
        if (budget.exhausted)
            break;
    }
    diagnostics.matching = sawMatching ? "Safe groups cannot satisfy joint quotas" : "No certified four-pair group";
    shortages.push({ code: budget.exhausted ? "search-limit" : sawMatching ? "joint-composition" : "matching",
        message: budget.exhausted ? "Bounded deterministic search exhausted; feasibility undetermined (not proof of a content shortage)" : diagnostics.matching });
    return failure();
}
export function buildQuiz(request: QuizRequest): Exercise[] { return buildQuizResult(request).exercises; }
