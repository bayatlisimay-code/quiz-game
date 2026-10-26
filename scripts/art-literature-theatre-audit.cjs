// Read-only authoring inventory. Ordinary-form eligibility is not proof of a
// joint six-fact/eight-exercise quiz; run both production coverage sweeps too.
const fs = require('node:fs');
const ts = require('typescript');
const crypto = require('node:crypto');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText, filename);
const { approvedArtContent, approvedArtEvidence } = require('../data/activeArtContent.ts');
const { artCurriculum, artAvailability } = require('../data/artCurriculum.ts');
const { activeSemanticContext: context } = require('../src/quizEngine/contentSnapshot.ts');
const { getExerciseCapabilities } = require('../src/quizEngine/exerciseFactory.ts');
const { buildQuizResult, quizCompositionViolations } = require('../src/quizEngine/buildQuiz.ts');
const { exerciseValidityViolations } = require('../src/quizEngine/generationCoverage.ts');
const { validateContent } = require('../src/quizEngine/contentValidation.ts');
const selected = ['literature', 'theatre'];
const records = approvedArtContent.filter(c => selected.includes(c.subtopicId));
const hash = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
// These non-exclusive facts have one certified wrong label in their teaching
// pool. Both truth values are safe; three-option retrieval and unconstrained
// typed recall are not. Keep the strict format diagnostic, not invented options.
const judgmentOnlyLimitations = {
  art_literature_l1_p2_moonstone: 'Only Science fiction is a certified wrong target in this lesson; Adventure fiction is valid.',
  'art_theatre_l1_p2_dolls-house': 'Only Comedy is a certified wrong target in this lesson; Tragedy remains unverified.',
  art_theatre_l1_p2_tempest: 'Only Realist drama is a certified wrong target in this lesson; Tragedy remains unverified.',
};
const rows = selected.flatMap(subtopic => Array.from({ length: 9 }, (_, i) => i + 1).flatMap(level => ['p1', 'p2', 'p4'].map(part => {
  const pool = records.filter(c => c.subtopicId === subtopic && c.levelId === `l${level}` && c.partId === part);
  const capabilities = pool.map(c => ({ c, caps: getExerciseCapabilities(c, pool, context) }));
  const ordinaryQualified = capabilities.filter(({ caps }) => caps.forms.mcq.available && caps.forms.true.available && caps.forms.false.available && (caps.forms.blank_options.available || caps.forms.blank_typed.available));
  const limitations = capabilities.filter(({ c }) => !ordinaryQualified.some(q => q.c === c)).map(({ c, caps }) => ({
    id: c.id, explanation: judgmentOnlyLimitations[c.id],
    safeJudgmentOnly: !!judgmentOnlyLimitations[c.id] && caps.forms.true.available && caps.forms.false.available &&
      !caps.forms.mcq.available && !caps.forms.blank_options.available && !caps.forms.blank_typed.available,
  }));
  // Readiness is a joint, stage-aware contract, not every fact in every format.
  // Keep the expensive repeated-attempt/fresh-learner sweeps as separate checks.
  const jointQuizzes = ['A', 'B', 'C'].map(variant => {
    const result = buildQuizResult({ concepts: pool, context, variant, seed: 'authoring-readiness:2026-10-23' });
    const violations = result.status === 'ready' ? [
      ...quizCompositionViolations(result.exercises, variant),
      ...result.exercises.flatMap(ex => exerciseValidityViolations(ex, pool, context)),
    ] : [];
    return { variant, status: result.status, shortages: result.diagnostics.shortages, violations };
  });
  return { subtopic, level: `l${level}`, title: artCurriculum[subtopic][`l${level}`].title, part,
    relation: artCurriculum[subtopic][`l${level}`].relations[part], authored: pool.length, authoredShortfall: Math.max(0, 11 - pool.length),
    ordinaryQualifiedWithWholeTeachingPool: ordinaryQualified.length,
    ordinaryQualificationShortfall: Math.max(0, 11 - ordinaryQualified.length),
    documentedFormatLimitations: limitations,
    unexpectedCapabilityGaps: limitations.filter(l => !l.safeJudgmentOnly).length,
    jointQuizzes,
    introductionStages: Object.fromEntries(['A', 'B', 'C'].map(stage => [stage, pool.filter(c => c.introducedIn === stage).length])),
    unqualified: capabilities.filter(({ c }) => !ordinaryQualified.some(q => q.c === c)).map(({ c, caps }) => ({ id: c.id,
      reasons: Object.fromEntries(Object.entries(caps.forms).filter(([, v]) => !v.available).map(([k, v]) => [k, v.reason])) })),
  };
})));
const validationErrors = validateContent(approvedArtContent, context.policies, undefined, { evidence: approvedArtEvidence }).filter(i => i.severity === 'error');
const baseline = { concepts: 1192, evidence: 4730,
  // The four earlier completed subtopics; Music was registered later with its own audit.
  conceptHash: hash(approvedArtContent.filter(c => !selected.includes(c.subtopicId) && c.subtopicId !== 'music')), evidenceHash: hash(approvedArtEvidence.slice(0, 4730)) };
// Stage 6 permits only these authored display edits; retain the original factual baseline.
baseline.nonWordingConceptHash = hash(approvedArtContent.filter(c => !selected.includes(c.subtopicId) && c.subtopicId !== 'music').map(concept => {
  const c = JSON.parse(JSON.stringify(concept));
  if (c.subtopicId === 'painting' && c.levelId === 'l1' && ['p2', 'p4'].includes(c.partId)) {
    delete c.assessment.presentation.scope.text; delete c.assessment.presentation.scope.reviewedAt;
  }
  if (['art_architecture_l6_p1_eiffel-tower', 'art_architecture_l6_p1_santiago-bellas-artes'].includes(c.id)) delete c.assessment.identification.description.text;
  return c;
}));
baseline.editorialBaselineCommit = '4c1fa8f';
baseline.unchanged = baseline.nonWordingConceptHash === '22ebe53c899f97ea18fc91b61a96a392afac96445c5a01274dca911e0b059f20' && baseline.conceptHash === '184e7a35b9b9d99382226205426cab4f4c1735aff36e98cb88fd94fa4472deda' && baseline.evidenceHash === '2b59f80127e40209018313cbd4e93292d2bcc60f079cf2fd46e62e76632943d2';
baseline.accessibilityRevision = '2026-10-22';
baseline.matchesAccessibilityRevision = baseline.conceptHash === 'ddedc9f8399b9e9e5a362d37191c176797257136ad08afdf13e656d53840aaf1' && baseline.nonWordingConceptHash === '75f93c18f6b9a1eae4ff7c283255395f105b8ae2d4943c81823499a642b35580' && baseline.evidenceHash === '18eea856b7b59d367b16a268cdd33cde1db2174f5a800652c77104126dd8c5ae';
const report = { baselineCommit: '43f1859a4a825f10841a8dc29a343865a01053f0', baseline,
  reviewBasis: 'Codex source comparison; no independent human editorial certification', designAvailability: artAvailability.design,
  totals: selected.map(subtopic => ({ subtopic, authored: records.filter(c => c.subtopicId === subtopic).length,
    required: 297, ordinaryQualifiedWithWholeTeachingPools: rows.filter(r => r.subtopic === subtopic).reduce((n, r) => n + r.ordinaryQualifiedWithWholeTeachingPool, 0) })),
  newEvidence: approvedArtEvidence.length - 4730,
  sourceUrls: [...new Set(approvedArtEvidence.slice(4730).map(e => e.sourceUrl))].sort(), validationErrors, rows,
  caveat: 'Strict all-format shortfalls remain diagnostic. Only the three documented safe judgment-only facts are permitted; every teaching A/B/C quiz must independently pass stage-aware joint generation and validation. Run repeated-attempt and fresh-learner sweeps separately. --require-all-forms additionally enforces the optional stricter per-fact metric.' };
console.log(JSON.stringify(report, null, 2));
if ((!baseline.unchanged && !baseline.matchesAccessibilityRevision) || validationErrors.length || (process.argv.includes('--require-ready') && rows.some(r => r.authoredShortfall || r.unexpectedCapabilityGaps || r.jointQuizzes.some(q => q.status !== 'ready' || q.violations.length)))) process.exitCode = 1;

if (process.argv.includes('--require-all-forms') && rows.some(r => r.ordinaryQualificationShortfall)) process.exitCode = 1;
