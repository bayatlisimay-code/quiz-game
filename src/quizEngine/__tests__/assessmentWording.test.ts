import { matchingCandidates } from '../exerciseFactory';
import { activeSemanticContext } from '../contentSnapshot';
import { approvedArtContent } from '../../../data/activeArtContent';
import { getAssessmentTemplate, reverseConcept } from '../assessmentTemplates';
import { familyDefinitions } from '../relationDefinitions';

const creator = approvedArtContent.find(c => c.subject === 'The Arnolfini Portrait' && c.partId === 'p2')!;
const sculpture = approvedArtContent.find(c => c.subject === 'David (Accademia marble)' && c.partId === 'p2')!;

test('certain creator questions use natural active and passive verbs, preserving visible principal-credit scope', () => {
  const t = getAssessmentTemplate(creator);
  expect(t.question(creator.subject)).toMatch(/^Who painted “The Arnolfini Portrait”\?/);
  expect(t.statement(creator.subject, creator.object)).toMatch(/^Jan van Eyck painted “The Arnolfini Portrait”\./);
  expect(t.blank(creator.subject)).toMatch(/^“The Arnolfini Portrait” was painted by _____\./);
  for (const text of [t.question(creator.subject),t.statement(creator.subject,creator.object),t.blank(creator.subject)]) {
    expect(text).toContain(creator.assessment!.scope!.text);
  }
  expect(getAssessmentTemplate(sculpture).statement(sculpture.subject,sculpture.object)).toMatch(/^Michelangelo Buonarroti sculpted “David \(Accademia marble\)”\./);
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
      if(c.assessment?.scope) expect(text).toContain(c.assessment.scope.text);
    }
    if(c.partId === 'p4') {
      expect(t.statement(c.subject,c.object)).toContain('collection entry lists');
      expect(t.statement(c.subject,c.object)).toContain(c.object);
      expect(t.question(c.subject)).toContain(c.assessment!.event);
    }
  }
  const definition=approvedArtContent.find(c=>c.relation==='definition_of_sculpture_technique')!;
  const t=getAssessmentTemplate(definition);
  expect(t.question(definition.subject)).toContain('What does');
  expect(t.statement(definition.subject,definition.object)).toContain('has this definition: Removing');
  expect(t.blank(definition.subject)).toContain('refers to _____');
});

test('real matching labels expose the same event and attribution scope as ordinary questions', () => {
  const dates=approvedArtContent.filter(c=>c.subtopicId==='painting' && c.partId==='p4');
  const groups=[...matchingCandidates(dates,'wording-regression',activeSemanticContext,{examined:0,limit:2000,exhausted:false})];
  expect(groups.length).toBeGreaterThan(0);
  const supper=groups.flatMap(g=>g.exercise.pairs).find(p=>p.id===dates.find(c=>c.subject==='The Last Supper')!.id)!;
  expect(supper.left).toContain('completion date or range');
  expect(supper.left).toContain('Dating given by Museo del Cenacolo Vinciano');
  for(const group of groups) for(const pair of group.exercise.pairs) {
    const c=dates.find(c=>c.id===pair.id)!;
    expect(pair.left).toBe(getAssessmentTemplate(c).question(c.subject));
  }
});
