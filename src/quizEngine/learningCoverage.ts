import type { CoverageCase } from "./generationCoverage";
import { exerciseValidityViolations } from "./generationCoverage";
import { buildQuizResult, prepareQuizSession, quizCompositionViolations } from "./buildQuiz";
import { factIdentity } from "./learningProgression";
import type { SemanticContext } from "./semanticValidation";

/** Fresh learner, curriculum order, no assumed receipts. A shortage blocks all
 * subsequent lessons in that subtopic for the attempt instead of skipping it. */
export function measureLearningCoverage(cases: readonly CoverageCase[], context: SemanticContext, attempts: number) {
  const counts = { requests: 0, ready: 0, insufficient: 0, prerequisiteBlocked: 0, violations: 0 };
  const problems: string[] = [];
  const matching = new Map<string, Set<string>>();
  const introductions = new Map<string, Set<string>>();
  const examples: { quizId: string; introduced: string[]; reinforced: string[]; subjects: string[] }[] = [];
  const sessions = new Map(cases.map(entry => [entry, prepareQuizSession({ ...entry, context })]));
  const groups = new Map<string, CoverageCase[]>();
  for (const entry of cases) {
    const subtopic = entry.concepts[0]?.subtopicId ?? entry.id;
    const group = groups.get(subtopic) ?? [];
    group.push(entry); groups.set(subtopic, group);
  }
  for (let attempt = 1; attempt <= attempts; attempt++) for (const entries of groups.values()) {
    const learned = new Set<string>();
    let blocked = false;
    for (const entry of entries) {
      const key = `${entry.id}:${entry.variant}`;
      counts.requests++;
      if (blocked) { counts.prerequisiteBlocked++; continue; }
      const result = buildQuizResult({ ...entry, context, session: sessions.get(entry), learnedFactIds: [...learned], seed: `${key}:learning-attempt:${attempt}` });
      if (result.status !== "ready") {
        counts.insufficient++; blocked = true;
        problems.push(`${key}: ${result.diagnostics.shortages.map(s=>s.message).join("; ")}`);
        continue;
      }
      counts.ready++;
      const introduced = result.diagnostics.introducedFactIds ?? [];
      const selected = result.diagnostics.selectedFactIds ?? [];
      const errors = [...quizCompositionViolations(result.exercises, entry.variant),
        ...result.exercises.flatMap(e => exerciseValidityViolations(e, entry.concepts, context))];
      for (const id of selected) if (!introduced.includes(id) && !learned.has(id)) errors.push(`Previously untaught reinforcement: ${id}`);
      for (const id of introduced) if (learned.has(id)) errors.push(`Previously taught fact relabelled new: ${id}`);
      if (entry.mode === "review" && introduced.length) errors.push("Review introduced a fact");
      if (entry.mode !== "review") {
        if (introduced.length !== ({A:6,B:3,C:2}[entry.variant])) errors.push("Incorrect introduction count");
        const expected = entry.variant === "A" ? {A:6,B:0,C:0} : entry.variant === "B" ? {A:3,B:3,C:0} : {A:2,B:2,C:2};
        for (const stage of ["A","B","C"] as const) {
          const count = entry.concepts.filter(c => (c.introducedIn ?? "A") === stage && selected.includes(factIdentity(c,context))).length;
          if (count !== expected[stage]) errors.push(`Incorrect ${stage}-origin reinforcement count`);
        }
      }
      for (const error of errors) { counts.violations++; if (problems.length < 100) problems.push(`${key}: ${error}`); }
      if (entry.mode !== "review") {
        const pool = introductions.get(entry.id) ?? new Set<string>();
        introduced.forEach(id=>pool.add(id)); introductions.set(entry.id, pool);
      }
      for (const e of result.exercises) if (e.type === "matching") {
        const sets = matching.get(key) ?? new Set<string>();
        sets.add(e.pairs.map(p=>factIdentity(entry.concepts.find(c=>c.id===p.id)!,context)).sort().join("|")); matching.set(key,sets);
      }
      if (attempt === 1 && entry.mode !== "review") examples.push({ quizId:key, introduced:[...introduced], reinforced:[...(result.diagnostics.reinforcedFactIds ?? [])],
        subjects: entry.concepts.filter(c=>selected.includes(factIdentity(c,context))).map(c=>c.object && c.partId==="p1" && c.assessment?.identification ? c.object : c.subject) });
      introduced.forEach(id=>learned.add(id));
    }
  }
  return { counts, problems, introductions: [...introductions].map(([id,ids])=>({id,distinct:ids.size})),
    matching: [...matching].map(([id,sets])=>({id,combinations:sets.size})), examples };
}
