import { readdirSync, readFileSync } from 'node:fs';
import { createRuntimeRegistry } from '../createRuntimeRegistry';
import type { ImageAssetRecord, ImageCurationDataset } from '../types';
import { activeSemanticContext, ACTIVE_CONCEPT_SETS } from '../../quizEngine/contentSnapshot';
import { getCurriculumPool } from '../../quizEngine/curriculumPool';
import { buildQuizResult, quizCompositionViolations } from '../../quizEngine/buildQuiz';
import { exerciseValidityViolations } from '../../quizEngine/generationCoverage';
import { planAssessmentStimulus, withoutFailedImages } from '../assessmentImages';
import { imageLicenseIssue, stagingApprovalIssue } from '../licensePolicy';

const datasets = readdirSync('data/imageCuration/art').filter(n => n.endsWith('.json')).sort()
  .map(n => JSON.parse(readFileSync(`data/imageCuration/art/${n}`, 'utf8')) as ImageCurationDataset);

// Delivery fixtures only: real checked staging records, reserved host, no uploads,
// no production approval changes and no replacement semantic evidence.
const host = 'pilot-delivery.example.test';
const fixtureDatasets: ImageCurationDataset[] = datasets.map(d => ({ ...d,
  assets: d.assets.map(a => ({ ...a, reviewStatus: 'approved' as const,
    reviewedBy: 'Test-only delivery fixture', reviewedAt: '2026-10-14T00:00:00Z',
    hosted: { hostedUrl: `https://${host}/${a.imageId}-${a.staged!.sha256}.jpg`, storageKey: `${a.imageId}.jpg`,
      width: a.staged!.width, height: a.staged!.height, sha256: a.staged!.sha256, mimeType: 'image/jpeg' as const },
  })),
  bindings: d.bindings.map(b => ({ ...b, reviewStatus: 'approved' as const,
    reviewedBy: 'Test-only delivery fixture', reviewedAt: '2026-10-14T00:00:00Z' })),
}));
const registry = createRuntimeRegistry(fixtureDatasets, [host]);
const context = activeSemanticContext.withImages(registry);

test('research covers every original pilot artwork without passing rejected candidates to ingestion', () => {
  const research = JSON.parse(readFileSync('data/imageCuration/research/art-pilot-candidates.json', 'utf8')) as {
    candidates: { candidateIdentity: string; decision: string }[];
  };
  expect(new Set(research.candidates.map(c => c.candidateIdentity)).size).toBe(18);
  const eligible = research.candidates.filter(c => c.decision === 'eligible-staging');
  expect(eligible).toHaveLength(datasets.flatMap(d => d.assets).length);
  for (const a of datasets.flatMap(d => d.assets)) {
    expect(imageLicenseIssue(a.provenance.license)).toBeUndefined();
    expect(stagingApprovalIssue(a)).toBeUndefined();
    expect(a.reviewStatus).toBe('needs-review');
    expect(a.hosted).toBeUndefined();
  }
  expect(datasets.flatMap(d => d.assets).some(a => a.imageId === 'pilot-002')).toBe(false);
});

test.each(['painting', 'sculpture'])('real %s recognition images preserve composition, certified negatives and immediate-lock matching', subtopicId => {
  const concepts = getCurriculumPool(ACTIVE_CONCEPT_SETS, {
    topicId: 'art', subtopicId, levelId: subtopicId === 'painting' ? 'l2' : 'l3', partId: 'p1',
  });
  let ordinaryImages = 0, matchingImages = 0;
  for (const variant of ['A', 'B', 'C'] as const) for (let attempt = 1; attempt <= 20; attempt++) {
    const request = { concepts, context, variant, mode: 'teaching' as const, seed: `licensed-pilot:${subtopicId}:${variant}:${attempt}` };
    const result = buildQuizResult(request);
    expect(result.status).toBe('ready');
    expect(quizCompositionViolations(result.exercises, variant)).toEqual([]);
    expect(buildQuizResult(request).exercises).toEqual(result.exercises);
    for (const e of result.exercises) {
      expect(exerciseValidityViolations(e, concepts, context)).toEqual([]);
      if (e.type === 'matching') matchingImages += e.pairs.filter(p => p.stimulus?.kind === 'image').length;
      else if (e.stimulus?.kind === 'image') ordinaryImages++;
    }
  }
  expect(ordinaryImages).toBeGreaterThan(0);
  expect(matchingImages).toBeGreaterThan(0);
});

test('every real image has a verified fallback for error/timeout; failed bindings disappear from ordinary and matching planning', () => {
  const failedIds = Object.values(registry.bindings).map(b => b.image.imageId);
  const failed = context.withImages(withoutFailedImages(registry, failedIds));
  for (const subtopicId of ['painting', 'sculpture']) {
    const concepts = getCurriculumPool(ACTIVE_CONCEPT_SETS, {
      topicId: 'art', subtopicId, levelId: subtopicId === 'painting' ? 'l2' : 'l3', partId: 'p1',
    });
    for (const c of concepts.filter(c => registry.bindings[c.id])) for (const type of ['mcq', 'true_false', 'fill_blank', 'matching'] as const) {
      expect(planAssessmentStimulus(c, context, type).stimulus?.kind).toBe('image');
      expect(planAssessmentStimulus(c, failed, type).stimulus?.kind).toBe('text');
    }
    for (const variant of ['A', 'B', 'C'] as const) {
      const result = buildQuizResult({ concepts, context: failed, variant, seed: 'all-images-failed', mode: 'teaching' });
      expect(result.status).toBe('ready');
      expect(quizCompositionViolations(result.exercises, variant)).toEqual([]);
    }
  }
});

test('a restricted or conflicting license cannot enter the release projection with a copied approval', () => {
  const d = fixtureDatasets.find(d => d.assets.length)!;
  const a = d.assets[0];
  for (const license of [
    { status: 'CC-BY', evidenceUrl: a.provenance.sourceUrl },
    { status: 'public-domain', evidenceUrl: a.provenance.sourceUrl, attributionRequired: true },
    { status: 'CC0', evidenceUrl: a.provenance.sourceUrl, licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' },
  ]) {
    const bad = { ...a, provenance: { ...a.provenance, license } } as unknown as ImageAssetRecord;
    expect(() => createRuntimeRegistry([{ ...d, assets: [bad, ...d.assets.slice(1)] }], [host])).toThrow('Ineligible image');
  }
});
