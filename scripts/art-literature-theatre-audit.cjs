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
const { validateContent } = require('../src/quizEngine/contentValidation.ts');
const selected = ['literature', 'theatre'];
const records = approvedArtContent.filter(c => selected.includes(c.subtopicId));
const hash = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
const rows = selected.flatMap(subtopic => Array.from({ length: 9 }, (_, i) => i + 1).flatMap(level => ['p1', 'p2', 'p4'].map(part => {
  const pool = records.filter(c => c.subtopicId === subtopic && c.levelId === `l${level}` && c.partId === part);
  const capabilities = pool.map(c => ({ c, caps: getExerciseCapabilities(c, pool, context) }));
  const ordinaryQualified = capabilities.filter(({ caps }) => caps.forms.mcq.available && caps.forms.true.available && caps.forms.false.available && (caps.forms.blank_options.available || caps.forms.blank_typed.available));
  return { subtopic, level: `l${level}`, title: artCurriculum[subtopic][`l${level}`].title, part,
    relation: artCurriculum[subtopic][`l${level}`].relations[part], authored: pool.length, authoredShortfall: Math.max(0, 11 - pool.length),
    ordinaryQualifiedWithWholeTeachingPool: ordinaryQualified.length,
    ordinaryQualificationShortfall: Math.max(0, 11 - ordinaryQualified.length),
    introductionStages: Object.fromEntries(['A', 'B', 'C'].map(stage => [stage, pool.filter(c => c.introducedIn === stage).length])),
    unqualified: capabilities.filter(({ c }) => !ordinaryQualified.some(q => q.c === c)).map(({ c, caps }) => ({ id: c.id,
      reasons: Object.fromEntries(Object.entries(caps.forms).filter(([, v]) => !v.available).map(([k, v]) => [k, v.reason])) })),
  };
})));
const validationErrors = validateContent(approvedArtContent, context.policies, undefined, { evidence: approvedArtEvidence }).filter(i => i.severity === 'error');
const baseline = { concepts: 1192, evidence: 4730,
  conceptHash: hash(approvedArtContent.filter(c => !selected.includes(c.subtopicId))), evidenceHash: hash(approvedArtEvidence.slice(0, 4730)) };
baseline.unchanged = baseline.conceptHash === '9f374e3ad376d1192f5a389b811a65a230f930b6982626cff765372e2593b429' && baseline.evidenceHash === '2b59f80127e40209018313cbd4e93292d2bcc60f079cf2fd46e62e76632943d2';
const report = { baselineCommit: '43f1859a4a825f10841a8dc29a343865a01053f0', baseline,
  reviewBasis: 'Codex source comparison; no independent human editorial certification', designAvailability: artAvailability.design,
  totals: selected.map(subtopic => ({ subtopic, authored: records.filter(c => c.subtopicId === subtopic).length,
    required: 297, ordinaryQualifiedWithWholeTeachingPools: rows.filter(r => r.subtopic === subtopic).reduce((n, r) => n + r.ordinaryQualifiedWithWholeTeachingPool, 0) })),
  newEvidence: approvedArtEvidence.length - 4730,
  sourceUrls: [...new Set(approvedArtEvidence.slice(4730).map(e => e.sourceUrl))].sort(), validationErrors, rows,
  caveat: 'Whole-pool per-fact capabilities do not certify A/B/C stage eligibility, joint composition, matching compatibility, or fresh-learner progression. Shortages must remain explicit.' };
console.log(JSON.stringify(report, null, 2));
if (!baseline.unchanged || validationErrors.length || (process.argv.includes('--require-ready') && rows.some(r => r.authoredShortfall || r.ordinaryQualificationShortfall))) process.exitCode = 1;
