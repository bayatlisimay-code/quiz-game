import type { Concept, Exercise } from "./conceptTypes";
import { buildExercise, buildMatchingExercise } from "./exerciseFactory";

const QUIZ_TYPE_ORDER = ["mcq", "true_false", "fill_blank"] as const;

function hashString(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededShuffle<T>(arr: T[], seedStr: string): T[] {
  let seed = hashString(seedStr) || 1;
  const a = [...arr];

  function next() {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    return (seed >>> 0) / 4294967296;
  }

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }

  return a;
}

function stageToNumber(stage: "A" | "B" | "C") {
  return stage === "A" ? 0 : stage === "B" ? 1 : 2;
}

function getExerciseTypeForConcept(
  concept: { id: string; introducedIn?: "A" | "B" | "C" },
  variant: "A" | "B" | "C",
  seed: string
): (typeof QUIZ_TYPE_ORDER)[number] {
  const intro = concept.introducedIn ?? "A";

  const orderedTypes = seededShuffle(
    [...QUIZ_TYPE_ORDER],
    `${seed}_${concept.introducedIn ?? "A"}_type_order`
  );

  const shift = Math.max(0, stageToNumber(variant) - stageToNumber(intro));

  return orderedTypes[Math.min(shift, orderedTypes.length - 1)];
}

function buildBalancedTypePlan(
  seed: string,
  count: number
): Array<"mcq" | "true_false" | "fill_blank"> {
  if (count === 7) {
    const plans: Array<Array<"mcq" | "true_false" | "fill_blank">> = [
      ["mcq", "mcq", "mcq", "true_false", "true_false", "fill_blank", "fill_blank"],
      ["mcq", "mcq", "true_false", "true_false", "true_false", "fill_blank", "fill_blank"],
      ["mcq", "mcq", "true_false", "true_false", "fill_blank", "fill_blank", "fill_blank"],
    ];

    return seededShuffle(plans[hashString(seed) % plans.length], `${seed}_type_plan`);
  }

  const fallback: Array<"mcq" | "true_false" | "fill_blank"> = [];
  const base = ["mcq", "true_false", "fill_blank"] as const;

  for (let i = 0; i < count; i++) {
    fallback.push(base[i % base.length]);
  }

  return seededShuffle(fallback, `${seed}_type_plan_fallback`);
}

function assignBalancedTypes(
  picked: Array<{ id: string; introducedIn?: "A" | "B" | "C" }>,
  variant: "A" | "B" | "C",
  seed: string
): Array<"mcq" | "true_false" | "fill_blank"> {
  const plan = buildBalancedTypePlan(seed, picked.length);
  const remaining = [...plan];
  const assigned: Array<"mcq" | "true_false" | "fill_blank"> = [];

  for (const concept of picked) {
    const preferred = getExerciseTypeForConcept(concept, variant, seed);
    const preferredIndex = remaining.indexOf(preferred);

    if (preferredIndex !== -1) {
      assigned.push(preferred);
      remaining.splice(preferredIndex, 1);
    } else {
      assigned.push(remaining.shift() ?? "mcq");
    }
  }

  return assigned;
}

export function buildQuiz({
  concepts,
  variant,
  seed,
}: {
  concepts: Concept[];
  variant: "A" | "B" | "C";
  seed: string;
}): Exercise[] {
  const aConcepts = concepts.filter((c) => (c.introducedIn ?? "A") === "A");
  const bConcepts = concepts.filter((c) => (c.introducedIn ?? "A") === "B");
  const cConcepts = concepts.filter((c) => (c.introducedIn ?? "A") === "C");

  const QUIZ_LEN = 7;

  const pickFrom = <T,>(items: T[], count: number, seedPart: string) =>
    seededShuffle(items, `${seed}_${seedPart}`).slice(0, Math.min(count, items.length));

  let picked =
    variant === "A"
      ? pickFrom(aConcepts, QUIZ_LEN, "A_only")
      : variant === "B"
      ? [
          ...pickFrom(bConcepts, 6, "B_main"),
          ...pickFrom(aConcepts, 2, "B_repeat_A"),
        ]
      : [
          ...pickFrom(cConcepts, 5, "C_main"),
          ...pickFrom([...aConcepts, ...bConcepts], 3, "C_repeat_AB"),
        ];

  if (picked.length < QUIZ_LEN) {
    const pickedIds = new Set(picked.map((c) => c.id));

    const allowedPool =
      variant === "A"
        ? aConcepts
        : variant === "B"
        ? [...bConcepts, ...aConcepts]
        : [...cConcepts, ...aConcepts, ...bConcepts];

    const filler = seededShuffle(
      allowedPool.filter((c) => !pickedIds.has(c.id)),
      `${seed}_filler`
    ).slice(0, QUIZ_LEN - picked.length);

    picked = [...picked, ...filler];
  }

  picked = seededShuffle(picked, `${seed}_final`);


  let baseNormal = seededShuffle(picked, `${seed}_normal_base`).slice(0, 5);

  if (baseNormal.length < 5) {
    const filler = seededShuffle(picked, `${seed}_base_fallback`).slice(
      0,
      5 - baseNormal.length
    );
    baseNormal = [...baseNormal, ...filler];
  }

  const repeatPool =
    variant === "B"
      ? baseNormal.filter((c) => (c.introducedIn ?? "A") === "B")
      : baseNormal;

  const sortedByDifficulty = [...repeatPool].sort((a, b) => b.difficulty - a.difficulty);

  let repeatedFacts = seededShuffle(
    sortedByDifficulty.slice(0, 3),
    `${seed}_repeat_facts`
  ).slice(0, 2);

  if (repeatedFacts.length < 2) {
    const fallback = seededShuffle(baseNormal, `${seed}_repeat_fallback`).slice(
      0,
      2 - repeatedFacts.length
    );
    repeatedFacts = [...repeatedFacts, ...fallback];
  }

  let normalQuestionConcepts = [...baseNormal, ...repeatedFacts];

  if (normalQuestionConcepts.length < 7) {
    const fallback = seededShuffle(picked, `${seed}_normal_fill`).slice(
      0,
      7 - normalQuestionConcepts.length
    );
    normalQuestionConcepts = [...normalQuestionConcepts, ...fallback];
  }
  const selectedConcepts = normalQuestionConcepts;
  const assignedTypes = assignBalancedTypes(normalQuestionConcepts, variant, seed);

  let built = normalQuestionConcepts
  .map((c, index) => {
    const type = assignedTypes[index];
    return buildExercise(c, concepts, 3, type);
  })
  .filter(Boolean) as Exercise[];
 

  const matching = buildMatchingExercise(selectedConcepts, seed);

  if (matching) {
    built = [...built.slice(0, 7), matching];
  }

  built = seededShuffle(built, `${seed}_exercise_order`);

  return built;
}