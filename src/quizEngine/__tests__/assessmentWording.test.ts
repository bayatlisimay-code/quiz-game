import { matchingCandidates } from '../exerciseFactory';
import { activeSemanticContext } from '../contentSnapshot';
import { approvedArtContent } from '../../../data/activeArtContent';
import { getAssessmentTemplate, getMatchingLabel, getVisibleAssessmentScope, reverseConcept } from '../assessmentTemplates';
import { buildQuizResult, quizCompositionViolations } from '../buildQuiz';
import { exerciseValidityViolations } from '../generationCoverage';
import { isMatchingPairCorrect } from '../answerValidation';
import type { Concept } from '../conceptTypes';
import { getAnswerLabel } from '../learnerText';
import { familyDefinitions } from '../relationDefinitions';

const creator = approvedArtContent.find(c => c.subject === 'The Arnolfini Portrait' && c.partId === 'p2')!;
const sculpture = approvedArtContent.find(c => c.id === 'art_sculpture_l3_p2_accademia-1076' && c.partId === 'p2')!;

test('certain creator questions use natural active and passive verbs, preserving visible principal-credit scope', () => {
  const t = getAssessmentTemplate(creator);
  expect(t.question(creator.subject)).toBe('Who painted “The Arnolfini Portrait”?');
  expect(t.statement(creator.subject, creator.object)).toBe('Jan van Eyck painted “The Arnolfini Portrait”.');
  expect(t.blank(creator.subject)).toBe('“The Arnolfini Portrait” was painted by _____.');
  for (const text of [t.question(creator.subject),t.statement(creator.subject,creator.object),t.blank(creator.subject)]) {
    expect(text).toContain("painted");
    expect(creator.semantic!.qualifiers!.assessmentScope).toBe("principal-catalogue-credit");
  }
  expect(getAssessmentTemplate(sculpture).statement(sculpture.subject,sculpture.object)).toContain("sculpted");
});

test('every shared creator verb has independent forward and reverse grammar without a unique-work assertion', () => {
  for (const [role,active,passive] of [['painter','painted','painted'],['sculptor','sculpted','sculpted'],['author','wrote','written'],['poet','wrote','written'],['director','directed','directed'],['designer','designed','designed'],['architect','designed','designed']]) {
    const wording = familyDefinitions.creator(role,'work').certainAttribution!;
    expect(wording.question).toBe(`Who ${active} “{s}”?`);
    expect(wording.blank).toBe(`“{s}” was ${passive} by _____.`);
    expect(wording.inverse.question).toBe(`Which of these works was ${passive} by {s}?`);
    expect(wording.inverse.blank).toContain('One work');
  }
  expect(familyDefinitions.creator('performer','portrayal').certainAttribution).toBeUndefined();
  const reverse = reverseConcept(creator)!;
  expect(getAssessmentTemplate(reverse).question(reverse.subject)).toMatch(/^Which of these works was painted by Jan van Eyck\?/);
});

test('uncertain attribution stays explicitly qualified in every format and direction', () => {
  const c = { ...creator, assessment:{...creator.assessment!, attribution:{role:'painter',status:'attributed' as const}} };
  const t = getAssessmentTemplate(c);
  expect(t.question(c.subject)).toContain('attributed painter');
  expect(t.statement(c.subject,c.object)).toContain('is attributed to Jan van Eyck as painter');
  expect(t.blank(c.subject)).toContain('is attributed to _____ as painter');
  const inverse = reverseConcept(c)!;
  expect(getAssessmentTemplate(inverse).question(inverse.subject)).toContain('attributed to');
  expect(t.statement(c.subject,c.object)).not.toContain('Jan van Eyck painted');
});

test('all pilot prompts retain qualifier scope, uncertainty and clean punctuation', () => {
  for (const c of approvedArtContent) {
    const t=getAssessmentTemplate(c);
    for (const text of [t.question(c.subject),t.statement(c.subject,c.object),t.blank(c.subject)]) {
      expect(text).not.toMatch(/\{[sa]\}|\.\.|\?\./);
      const visibleScope = getVisibleAssessmentScope(c);
      // Character relationships are phrased into the question itself (“the elder sister of”).
      if(visibleScope && c.assessment?.association) expect(text).toContain(visibleScope.replace(/^(?:Her|His) /,'').replace(/\.$/,''));
      else if(visibleScope) expect(text).toContain(visibleScope);
      else if(c.assessment?.scope) expect(text).not.toContain(c.assessment.scope.text);
    }
    if(c.assessment?.dateInterpretation === 'catalogue-label') {
      expect(t.statement(c.subject,c.object)).toContain(c.object.replace(/^probably /,''));
      expect(t.question(c.subject)).toMatch(c.assessment!.event === 'completion' ? /^When was “.+” completed\?/ : /^When was “.+” created\?/);
    }
  }
  const definition=approvedArtContent.find(c=>c.relation==='definition_of_sculpture_technique')!;
  const t=getAssessmentTemplate(definition);
  expect(t.question(definition.subject)).toContain('What does');
  expect(t.statement(definition.subject,definition.object)).toContain('means: Removing');
  expect(t.blank(definition.subject)).toContain('refers to _____');
});

test('real matching labels expose the same event and attribution scope as ordinary questions', () => {
  const dates=approvedArtContent.filter(c=>c.subtopicId==='painting' && c.partId==='p4');
  const groups=[...matchingCandidates(dates,'wording-regression',activeSemanticContext,{examined:0,limit:2000,exhausted:false})];
  expect(groups.length).toBeGreaterThan(0);
  const supper=groups.flatMap(g=>g.exercise.pairs).find(p=>p.id===dates.find(c=>c.subject==='The Last Supper')!.id)!;
  expect(supper.left).toBe('The Last Supper — completion date');
  for(const group of groups) for(const pair of group.exercise.pairs) {
    const c=dates.find(c=>c.id===pair.id)!;
    expect(pair.left).toBe(getMatchingLabel(c));
    expect(pair.left).not.toMatch(/^(What|Who|Which)/);
  }
});

test('actual Painting l1/p1 removes internal instructions in every ordinary format and matches names to definitions', () => {
  const concepts = approvedArtContent.filter(c => c.subtopicId === 'painting' && c.levelId === 'l1' && c.partId === 'p1');
  const pop = concepts.find(c => c.subject === 'Pop art')!;
  const originalScope = pop.assessment!.scope!;
  expect(getAssessmentTemplate(pop).blank(pop.subject)).toBe('In painting, “Pop art” refers to _____.');
  for (const c of concepts) {
    const t = getAssessmentTemplate(c);
    for (const text of [t.question(c.subject), t.statement(c.subject, c.object), t.blank(c.subject)]) expect(text).not.toContain(c.assessment!.scope!.text);
    expect(getMatchingLabel(c)).toBe(c.subject);
  }
  for (const variant of ['A', 'B', 'C'] as const) {
    const result = buildQuizResult({ concepts, context: activeSemanticContext, variant, mode: 'teaching', seed: `learner-text:${variant}` });
    expect(result.status).toBe('ready');
    expect(quizCompositionViolations(result.exercises, variant)).toEqual([]);
    for (const ex of result.exercises) expect(exerciseValidityViolations(ex, concepts, activeSemanticContext)).toEqual([]);
    const group = [...matchingCandidates(concepts, 'compact-labels', activeSemanticContext, {examined:0,limit:2000,exhausted:false})][0];
    expect(group).toBeDefined();
    for (const ex of [group!.exercise]) {
      expect(exerciseValidityViolations(ex, concepts, activeSemanticContext)).toEqual([]);
      if (ex.type === 'matching') for (const pair of ex.pairs) {
        const source = concepts.find(c => c.id === pair.id)!;
        expect(pair.left).toBe(source.subject);
        expect(pair.right).toBe(getAnswerLabel(source, 'matching'));
        expect(isMatchingPairCorrect(pair, pair)).toBe(true);
        const wrong = ex.pairs.find(p => p.id !== pair.id)!;
        expect(isMatchingPairCorrect(pair, wrong)).toBe(false);
      }

    }
  }
  expect(pop.assessment!.scope).toBe(originalScope);
  expect(originalScope.text).toContain('Compare the defining meaning');
  expect(originalScope.qualifierKeys).toEqual(['sense']);
});

test('compact labels retain artist role, uncertain attribution, version and source/event distinctions', () => {
  expect(getMatchingLabel(creator)).toBe('The Arnolfini Portrait — Main painter');
  expect(getMatchingLabel(sculpture)).toContain('David (marble, Florence)');
  const attributed: Concept = { ...creator, assessment: { ...creator.assessment!, attribution: { role: 'painter', status: 'attributed' } } };
  expect(getMatchingLabel(attributed)).toContain('Attributed painter');
  const cast = approvedArtContent.find(c => c.id === 'art_sculpture_l7_p4_moma-231-1948')!;
  expect(getMatchingLabel(cast)).toContain('Unique Forms of Continuity in Space (MoMA cast)');
  expect(getMatchingLabel(cast)).toContain('creation date');
  expect(getMatchingLabel(cast)).toContain(getVisibleAssessmentScope(cast)!);
  const character: Concept = { ...creator, relation: 'book_of_character', subject: 'Elizabeth Bennet', object: 'Pride and Prejudice', assessment: { ...creator.assessment!, subjectType: 'character', valueType: 'work', scope: undefined } };
  expect(getMatchingLabel(character)).toBe('Elizabeth Bennet');
  const reverse = reverseConcept(creator)!;
  expect(getMatchingLabel(reverse)).toMatch(/^Jan van Eyck — Principal painter credits/);
  const custom: Concept = { ...creator, assessment: { ...creator.assessment!, presentation: undefined, scope: { ...creator.assessment!.scope!, visibility: 'learner' } }, semantic: { ...creator.semantic!, qualifiers: { assessmentScope: 'version-specific-workshop-credit' } } };
  expect(getMatchingLabel(custom)).toContain(custom.assessment!.scope!.text);
  const first: Concept = { ...creator, relation: 'first_published_novel_of_author', assessment: { ...creator.assessment!, scope: undefined, firstWork: { criterion: 'first-published-novel', wellEstablished: true } } };
  expect(getMatchingLabel(first)).toContain('first published novel');
});

test('explicitly essential definition qualifiers remain visible; parentheses in artwork titles are preserved', () => {
  const definition = approvedArtContent.find(c => c.relation === 'definition_of_sculpture_material')!;
  const qualified: Concept = { ...definition, assessment: { ...definition.assessment!, scope: { ...definition.assessment!.scope!, text: 'Use the copper–tin sense.', visibility: 'learner' } } };
  expect(getAssessmentTemplate(qualified).question(qualified.subject)).toContain('Use the copper–tin sense.');
  expect(getMatchingLabel(qualified)).toContain('Use the copper–tin sense.');
  expect(getAssessmentTemplate(sculpture).question(sculpture.subject)).toContain('(marble, Florence)');
});
