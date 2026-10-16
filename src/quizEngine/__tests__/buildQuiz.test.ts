import { buildQuizResult, prepareQuizSession, quizCompositionViolations } from '../buildQuiz';
import { certifiedFixtureContext } from '../testSupport/certifiedFixtures';
import { exerciseValidityViolations } from '../generationCoverage';
import { factIdentity } from '../learningProgression';
import type { Concept } from '../conceptTypes';
const records: Concept[] = Array.from({ length: 11 }, (_, i) => ({ id: `fact-${i.toString().padStart(2, '0')}`, topicId: 'science', subtopicId: 'fixture', levelId: 'l1', partId: 'p1', relation: 'painted_by', subject: `Fixture subject ${i}`, object: `Fixture value ${i}`, introducedIn: i < 6 ? 'A' : i < 9 ? 'B' : 'C', answerKind: 'short', difficulty: 1, learning: { reinforcementPriority: i === 2 || i === 7 ? 5 : 3, rationale: 'Explicit synthetic reinforcement priority' } }));
const context = certifiedFixtureContext(records);
const ids = (r: ReturnType<typeof buildQuizResult>) => new Set(r.exercises.flatMap(e => e.type === 'matching' ? [] : [e.factId ?? e.conceptId]));
test('A/B/C introduce 6/3/2 facts, reinforce 3 A then 2 A + 2 B, and introduce eleven facts', () => {
    const results = (['A', 'B', 'C'] as const).map(variant => buildQuizResult({ concepts: records, context, variant, seed: `progression:${variant}` }));
    results.forEach((r, i) => { expect(r.status).toBe('ready'); expect(quizCompositionViolations(r.exercises, (['A', 'B', 'C'] as const)[i])).toEqual([]); expect(ids(r).size).toBe(6); expect(r.diagnostics.introducedFactIds).toHaveLength([6, 3, 2][i]); expect(r.exercises.flatMap(e => exerciseValidityViolations(e, records, context))).toEqual([]); });
    const [a, b, c] = results.map(ids), bNew = [...b].filter(id => !a.has(id));
    expect([...b].filter(id => a.has(id))).toHaveLength(3);
    expect(bNew).toHaveLength(3);
    expect([...c].filter(id => a.has(id))).toHaveLength(2);
    expect([...c].filter(id => bNew.includes(id))).toHaveLength(2);
    expect(new Set([...a, ...b, ...c]).size).toBe(11);
    expect(results[1].diagnostics.reinforcedFactIds).toContain(factIdentity(records[2], context));
});
test('exactly one fact repeats as retrieval plus a certified false judgment; matching stays inside the six', () => {
    for (const variant of ['A', 'B', 'C'] as const)
        for (let attempt = 1; attempt <= 20; attempt++) {
            const r = buildQuizResult({ concepts: records, context, variant, seed: `${variant}:${attempt}` });
            expect(r.status).toBe('ready');
            expect(quizCompositionViolations(r.exercises, variant)).toEqual([]);
            const ordinary = r.exercises.filter(e => e.type !== 'matching'), repeated = ordinary.filter(e => ordinary.filter(x => x.conceptId === e.conceptId).length === 2);
            expect(repeated).toHaveLength(2);
            expect(new Set(repeated.map(e => e.type)).size).toBe(2);
            expect(repeated.some(e => e.type === 'true_false' && !e.correctAnswer)).toBe(true);
            const matching = r.exercises.find(e => e.type === 'matching')!;
            expect(matching.pairs.every(p => ordinary.some(e => e.conceptId === p.id))).toBe(true);
            for (const ex of ordinary)
                if (ex.type === 'true_false' && !ex.correctAnswer)
                    expect(ex.correctStatement).toContain(ex.answerText);
        }
});
test('matching varies safely across attempts while A introductions and same-seed output stay fixed', () => {
    const groups = new Set<string>();
    for (let i = 0; i < 20; i++) {
        const request = { concepts: records, context, variant: 'A' as const, seed: `attempt:${i}` };
        const r = buildQuizResult(request);
        expect(r).toEqual(buildQuizResult(request));
        const match = r.exercises.find(e => e.type === 'matching')!;
        groups.add(match.pairs.map(p => p.id).sort().join());
        expect(r.diagnostics.introducedFactIds?.slice().sort()).toEqual(records.slice(0, 6).map(c => factIdentity(c, context)).sort());
    }
    expect(groups.size).toBeGreaterThan(1);
});
test('review priorities are independent of array order and stages cannot borrow untaught facts', () => {
    const a = buildQuizResult({ concepts: records, context, variant: 'B', seed: 'priority' }), b = buildQuizResult({ concepts: [...records].reverse(), context, variant: 'B', seed: 'priority' });
    expect(b.diagnostics.selectedFactIds).toEqual(a.diagnostics.selectedFactIds);
    const r = buildQuizResult({ concepts: records.filter(c => c.introducedIn !== 'B'), context, variant: 'C', seed: 'missing' });
    expect(r.status).toBe('insufficient-content');
    expect(r.diagnostics.shortages.some(s => s.code === 'introduction-stage' && s.message.includes('Quiz B'))).toBe(true);
});
test('review quizzes mix teaching sources, introduce nothing, and keep exact composition', () => {
    const pool = [...records, ...records.map(c => ({ ...c, id: `other-${c.id}`, partId: 'p2', subject: `Other ${c.subject}`, object: `Other ${c.object}` }))], snapshot = certifiedFixtureContext(pool);
    for (const variant of ['A', 'B', 'C'] as const) {
        const r = buildQuizResult({ concepts: pool, context: snapshot, variant, mode: 'review', seed: `review:${variant}` });
        expect(r.status).toBe('ready');
        expect(r.diagnostics.introducedFactIds).toEqual([]);
        expect(r.diagnostics.selectedFactIds).toHaveLength(6);
        expect(new Set(r.exercises.flatMap(e => e.type === 'matching' ? [] : [pool.find(c => c.id === e.conceptId)!.partId])).size).toBe(2);
        expect(quizCompositionViolations(r.exercises, variant)).toEqual([]);
    }
});
test('runtime receipts prevent old completion flags or partial learning from authorizing later quizzes', () => {
    const request = { concepts: records, context, variant: 'B' as const, seed: 'runtime' };
    for (const learnedFactIds of [[], records.slice(0, 3).map(c => factIdentity(c, context))])
        expect(buildQuizResult({ ...request, learnedFactIds }).diagnostics.shortages.some(s => s.code === 'prior-learning')).toBe(true);
    expect(buildQuizResult({ ...request, learnedFactIds: records.slice(0, 6).map(c => factIdentity(c, context)) }).status).toBe('ready');
});
test('thin pools and bounded searches fail explicitly without inventing repetitions', () => {
    for (const size of [4, 5]) {
        const r = buildQuizResult({ concepts: records.slice(0, size), context, variant: 'A', seed: 'thin' });
        expect(r.status).toBe('insufficient-content');
        expect(r.exercises).toEqual([]);
        expect(r.diagnostics.shortages.some(s => s.code === 'distinct-facts')).toBe(true);
    }
    expect(buildQuizResult({ concepts: records, context, variant: 'A', seed: 'limit', searchNodeLimit: 1 }).diagnostics.shortages.some(s => s.code === 'search-limit')).toBe(true);
});
test('unused future facts stay outside later quizzes and reviews, and missing priorities never become random selection', () => {
    const future: Concept = { ...records[10], id: 'future-overflow', subject: 'Future fixture', object: 'Future value', learning: { reinforcementPriority: 1, rationale: 'Lower-priority future candidate' } };
    const pool = [...records, future], snapshot = certifiedFixtureContext(pool);
    for (const variant of ['A', 'B', 'C'] as const) {
        const r = buildQuizResult({ concepts: pool, context: snapshot, variant, seed: 'overflow' });
        expect(r.status).toBe('ready');
        expect(r.exercises.flatMap(e => e.type === 'matching' ? e.pairs.map(p => p.id) : [e.conceptId])).not.toContain(future.id);
    }
    expect(prepareQuizSession({ concepts: pool, context: snapshot, variant: 'C', mode: 'review' }).eligible.map(c => c.id)).not.toContain(future.id);
    const bad = records.map(c => ({ ...c, learning: undefined }));
    expect(buildQuizResult({ concepts: bad, context, variant: 'A', seed: 'missing-priorities' }).diagnostics.shortages.some(s => s.code === 'learning-priority')).toBe(true);
});
test('changing options cannot disguise an identical question about the same stimulus', () => {
    const r = buildQuizResult({ concepts: records, context, variant: 'A', seed: 'duplicate-prompt' });
    const mcqs = r.exercises.filter(e => e.type === 'mcq');
    expect(mcqs).toHaveLength(3);
    const changed = r.exercises.map(e => e === mcqs[1] ? { ...e, prompt: mcqs[0].prompt, options: [...e.options].reverse() } : e);
    expect(quizCompositionViolations(changed, 'A')).toContain('Identical questions cannot be repeated by changing or shuffling options');
});
