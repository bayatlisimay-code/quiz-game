import { relationDefinitions } from "./relationCatalogue";
import type { Concept } from "./conceptTypes";
import { getRelationTemplate } from "./templates";
import type { RelationTemplate } from "./templates";

export function getAssessmentTemplate(concept: Concept): RelationTemplate {
  const definition = relationDefinitions[concept.relation];
  if (!definition || !concept.assessment) return getRelationTemplate(concept.relation);
  const dateWording = definition.family === "date" && concept.assessment.event ? concept.assessment.dateInterpretation === "catalogue-label" ? {
    question: `Which ${concept.assessment.event} date or range is listed for “{s}”?`,
    statement: `The collection entry lists the ${concept.assessment.event} date or range of “{s}” as {a}.`,
    blank: `The collection entry lists the ${concept.assessment.event} date or range of “{s}” as _____.`,
  } : {
    question: `What date or period is documented for the ${concept.assessment.event} of “{s}”?`,
    statement: `The date or period documented for the ${concept.assessment.event} of “{s}” is {a}.`,
    blank: `The date or period documented for the ${concept.assessment.event} of “{s}” is _____.`,
  } : definition;
  const creatorWording = definition.family === "creator" && concept.assessment.attribution?.status === "certain"
    ? definition.certainAttribution : undefined;
  const qualified = definition.family === "creator" && concept.assessment.attribution?.status === "attributed" ? {
    question: `Who is listed as the attributed ${definition.creatorRole} of “{s}”?`,
    statement: `“{s}” is attributed to {a} as ${definition.creatorRole}.`,
    blank: `“{s}” is attributed to _____ as ${definition.creatorRole}.`,
    inverse: {
      question: `Which work is attributed to {s} as ${definition.creatorRole}?`,
      statement: `“{a}” is attributed to {s} as ${definition.creatorRole}.`,
      blank: `One work attributed to {s} as ${definition.creatorRole} is _____.`,
    },
  } : undefined;
  const attributionWording = qualified ?? creatorWording;
  const wording = concept.assessment.direction === "reverse" ? attributionWording?.inverse ?? definition.inverse : attributionWording ?? dateWording;
  if (!wording) throw new Error(`Unsupported inverse wording: ${concept.relation}`);
  const scope = concept.assessment.scope?.text.trim();
  const render = (text: string, subject: string, answer: string) => {
    const sentence = text.replaceAll("{s}", subject).replaceAll("{a}", answer).replace(/([.!?])\.$/, "$1");
    return scope ? `${sentence} (${scope})` : sentence;
  };
  return {
    question: subject => render(wording.question, subject, ""),
    statement: (subject, answer) => render(wording.statement, subject, answer),
    blank: subject => render(wording.blank, subject, "_____"),
  };
}

/** An assessment view, not a new concept or new factual assertion. */
export function reverseConcept(concept: Concept): Concept | undefined {
  if (!concept.assessment?.inverse?.enabled || !relationDefinitions[concept.relation]?.inverse || !concept.semantic?.subject?.id || !concept.semantic.value?.id) return undefined;
  return { ...concept, subject: concept.object, object: concept.subject,
    semantic: { ...concept.semantic, subject: concept.semantic.value, value: concept.semantic.subject,
      predicateId: `inverse:${concept.semantic.predicateId ?? concept.relation}`, acceptedAnswers: [] },
    assessment: { ...concept.assessment, direction: "reverse", answerLeakageReviewed: concept.assessment.inverse.answerLeakageReviewed, scope: concept.assessment.inverse.scope, subjectType: concept.assessment.valueType, valueType: concept.assessment.subjectType,
      response: concept.assessment.inverse.response, factId: concept.assessment.factId ?? concept.id },
  };
}
