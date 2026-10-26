import type { Concept } from '../../src/quizEngine/conceptTypes';
import type { SemanticEvidence } from '../../src/quizEngine/assessmentTypes';
import { sourceFact, joinSets, type SourceFact, type Source, type AuthoredSet } from './sourceAuthoring';
import { scheduleArtLearning } from './learningPriorities';

export type MusicTerm = readonly [id: string, term: string, meaning: string];
export type MusicReview = Readonly<{
  url: string; locator: string; checkedFields: readonly string[]; checkedAt: string;
  reviewBasis: string; secondSource?: string;
}>;
export type MusicReviews = Readonly<Record<string, MusicReview>>;
const reviewer = 'Codex — Music source comparison (not independent human editorial certification)';
export const musicPriority = (index: number) => index < 6 ? 5 : index < 9 ? 4 : index < 11 ? 3 : 1;
export const musicId = (name: string) => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const musicSource = (review: MusicReview | undefined): Source => review
  ? {url: review.url, locator: review.locator, label: 'Music source review'}
  : {url: '', locator: 'UNVERIFIED DRAFT: no supporting source located; not eligible for active quizzes.', label: 'Unverified Music draft'};

/** Draft records are kept outside the active registry until every required
 * source field and assessment comparison has been checked. Pending is never a
 * substitute for certification and must not be included in release evidence. */
export function musicFact(input: Omit<SourceFact, 'subtopic' | 'reviewedAt'>, checked: boolean): AuthoredSet {
  const set = sourceFact({...input, subtopic: 'music', reviewedAt: '2026-10-26'});
  set.concepts = set.concepts.map(c => ({...c, assessment: {...c.assessment!,
    reviewStatus: checked ? 'verified' : 'pending',
    scope: c.assessment?.scope ? {...c.assessment.scope, visibility: 'internal'} : undefined,
  }}));
  set.evidence = set.evidence.map(e => ({...e, reviewStatus: checked ? 'verified' : 'pending', reviewedBy: reviewer}));
  return set;
}
export function musicDefinitionSet(level: string, part: 'p1'|'p2'|'p4', terms: readonly MusicTerm[], reviews: MusicReviews): AuthoredSet {
  const result = joinSets(terms.map(([id, term, meaning], i) => {
    const review = reviews[`${level}:${part}:${id}`];
    return musicFact({level, part, id, subject: term, subjectId: level === 'l1' ? `music-genre:${id}` : level === 'l8' ? `instrument:${id}` : `music-term:${level}:${part}:${id}`,
      subjectType: ['l1','l8'].includes(level) ? 'category' : 'term',
      answer: meaning, answerId: `music-meaning:${level}:${part}:${id}`, answerType: 'meaning',
      source: musicSource(review), qualifiers: {sense: `music:${level}:${part}`}, scope: 'The defining musical meaning.',
      priority: musicPriority(i), priorityReason: i < 11 ? 'Core general-knowledge vocabulary; reinforce its distinguishing meaning.' : 'Reviewed reserve; never enters review without a teaching introduction.',
    }, !!review?.checkedFields.includes('definition'));
  }));
  // Reviewed defining-meaning contrasts, not claims that roles, techniques or
  // musical features cannot coexist. Hierarchical/broad meanings stay unknown.
  const overlaps: Readonly<Record<string, readonly string[]>> = {
    'l8:p1': ['guitar|sitar','guitar|oud','harp|kora','flute|pipe-organ'],
    'l1:p1': ['pop|rock','pop|soul','pop|reggae','pop|disco','jazz|blues','folk|country','soul|gospel','soul|funk','electronic|hip-hop','electronic|disco'],
    'l5:p1': ['conductor|choir-director','conductor|bandleader','instrumentalist|session-musician','instrumentalist|concertmaster','singer|session-musician','arranger|orchestrator','producer|mixing-engineer','producer|recording-engineer'],
    'l5:p2': ['melody|phrase','melody|motif','phrase|motif','texture|monophony','texture|polyphony'],
    'l5:p4': ['choir|duet','soprano|falsetto','tenor|falsetto'],
    'l9:p1': ['clef|treble-clef','clef|bass-clef','accidental|sharp','accidental|flat','accidental|natural','barline|double-barline','barline|repeat-sign','double-barline|repeat-sign'],
    'l9:p2': ['meter|simple-meter','meter|compound-meter','meter|duple-meter','meter|triple-meter','meter|quadruple-meter','beat|downbeat','beat|upbeat','syncopation|swing','triplet|compound-meter','polyrhythm|triplet'],
    'l9:p4': ['interval|octave','interval|semitone','interval|whole-tone','pitch|tonic','pitch|dominant','range|interval'],
  };
  const uncheckedPairs = new Set((overlaps[`${level}:${part}`] ?? []).map(p => p.split('|').sort().join('|')));
  const terminology = ['l1','l5','l8','l9'].includes(level);
  if (terminology) for (let i = 0; i < terms.length; i++) for (let j = i + 1; j < terms.length; j++) {
    const [aId, aName, aMeaning] = terms[i], [bId, bName, bMeaning] = terms[j];
    if (uncheckedPairs.has([aId,bId].sort().join('|'))) continue;
    const aReview = reviews[`${level}:${part}:${aId}`], bReview = reviews[`${level}:${part}:${bId}`];
    if (!aReview?.checkedFields.includes('definition') || !bReview?.checkedFields.includes('definition')) continue;
    const a = result.concepts[i], b = result.concepts[j];
    for (const [target,candidate,review] of [[a,b,aReview],[b,a,bReview]] as const) result.evidence.push(musicEvidence(target,candidate,'invalid',musicSource(review),
      `Defining-meaning comparison with ${bReview.url}: ${aName} — ${aMeaning}; ${bName} — ${bMeaning}. These are different defining meanings in this terminology lesson, not a denial that both features or roles may occur together.`));
  }
  return result;
}
export function scheduleMusic(set: AuthoredSet): AuthoredSet {
  return {...set, concepts: scheduleArtLearning(set.concepts)};
}
export function musicEvidence(target: Concept, candidate: Concept, verdict: 'valid'|'invalid', source: Source, rationale: string): SemanticEvidence {
  return {id: `music-comparison:${target.id}:${candidate.semantic!.value!.id}:${verdict}`,
    kind: 'assertion', predicateId: target.relation, subjectId: target.semantic!.subject!.id!,
    valueId: candidate.semantic!.value!.id!, qualifiers: target.semantic!.qualifiers ?? {}, verdict,
    sourceUrl: source.url, locator: `${source.locator}. ${rationale}`,
    reviewStatus: 'verified', reviewedBy: reviewer, reviewedAt: '2026-10-26'};
}
