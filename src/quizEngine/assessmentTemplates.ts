import { relationDefinitions } from "./relationCatalogue";
import type { Concept } from "./conceptTypes";
import { getRelationTemplate } from "./templates";
import type { RelationTemplate } from "./templates";

/** Definition scopes describe validation of meanings, not extra instructions
 * for learners. Other scopes stay visible conservatively: they can qualify a
 * source, event, version, role or historical interpretation. Never strip text
 * based on parentheses or its contents. */
export function getVisibleAssessmentScope(concept: Concept): string | undefined {
  if (relationDefinitions[concept.relation]?.family === "definition" && concept.assessment?.scope?.visibility !== "learner") return undefined;
  const wording = concept.assessment?.presentation?.scope;
  if (wording?.reviewStatus === "verified" && wording.canonicalText === concept.assessment?.scope?.text) return wording.text;
  return concept.assessment?.scope?.text.trim() || undefined;
}

/** Card labels are facts/entities, not interrogative question stems. Keep the
 * authored subject (including version qualifiers) and retain necessary scoped
 * distinctions. Recognition continues to use its independently authored stimulus. */
export function getMatchingLabel(concept: Concept): string {
  const definition = relationDefinitions[concept.relation];
  if (!definition || !concept.assessment) return getAssessmentTemplate(concept).question(concept.subject);
  const scope = getVisibleAssessmentScope(concept);
  const focus = concept.assessment.focus;
  if (focus) return `${concept.subject} — ${focus.kind === "project-credit" ? `${focus.action ?? "designed"} ` : ""}${focus.label}${scope ? ` — ${scope}` : ""}`;
  const details: string[] = [];
  // This explicit semantic contract already names the assessed field. Render
  // its meaning compactly; unknown/custom scopes retain their authored text.
  const principalCredit = definition.family === "creator" && concept.assessment.attribution?.status === "certain" &&
    concept.semantic?.qualifiers?.assessmentScope === "principal-catalogue-credit";
  if (concept.assessment.direction !== "reverse") {
    if (concept.assessment.catalogueField) details.push(`Catalogue ${concept.assessment.catalogueField}`);
    else if (definition.family === "date") details.push(concept.assessment.event ? `${concept.assessment.event} date` : "Date or period");
    if (definition.family === "creator") {
      const credit = concept.assessment.attribution;
      if (!(principalCredit && concept.assessment.presentation?.scope)) details.push(credit?.status === "attributed" ? `Attributed ${credit.role}` : credit?.status === "disputed" ? `Disputed ${credit.role} credit` : `${principalCredit ? "Principal " : ""}${credit?.role ?? definition.creatorRole ?? "Creator"} credit`);
    }
    if (definition.family === "first-work" && concept.assessment.firstWork) details.push(concept.assessment.firstWork.criterion.replaceAll("-", " "));
    if (definition.family === "association" && concept.assessment.association) details.push(concept.assessment.association.kind);
  }
  if (principalCredit && concept.assessment.direction === "reverse") details.push(`Principal ${concept.assessment.attribution!.role} credits`);
  if (definition.family === "country") details.push("Present-day country");
  if (principalCredit) details.push(concept.assessment.presentation?.scope ? scope! : "collection entry");
  else if (scope) details.push(scope);
  return details.length ? `${concept.subject} — ${details.join("; ")}` : concept.subject;
}

export function getAssessmentTemplate(concept: Concept): RelationTemplate {
  const definition = relationDefinitions[concept.relation];
  if (!definition || !concept.assessment) return getRelationTemplate(concept.relation);
  const dateWording = concept.assessment.catalogueField === "cultural attribution" ? {
    question: "Which specific primary cultural-attribution label is given for “{s}”?",
    statement: "The account's specific primary cultural-attribution label for “{s}” is {a}.",
    blank: "The account's specific primary cultural-attribution label for “{s}” is _____.",
  } : concept.assessment.catalogueField ? {
    question: `Which ${concept.assessment.catalogueField} is listed for “{s}”?`,
    statement: `The collection account lists the ${concept.assessment.catalogueField} of “{s}” as {a}.`,
    blank: `The collection account lists the ${concept.assessment.catalogueField} of “{s}” as _____.`,
  } : definition.family === "date" && concept.assessment.event === "first publication" && concept.semantic?.value?.temporal?.start === concept.semantic?.value?.temporal?.end && concept.semantic?.value?.temporal ? {
    question: "In which year was “{s}” first published?",
    statement: "“{s}” was first published in {a}.",
    blank: "“{s}” was first published in _____.",
  } : definition.family === "date" && concept.semantic?.qualifiers?.datePrecision === "decade" ? {
    question: `In which decade did the ${concept.assessment.event} of “{s}” take place?`,
    statement: `The ${concept.assessment.event} of “{s}” took place in the {a}.`,
    blank: `The ${concept.assessment.event} of “{s}” took place in the _____.`,
  } : definition.family === "date" && concept.assessment.event ? concept.assessment.dateInterpretation === "catalogue-label" ? {
    question: `Which ${concept.assessment.event} date or range is listed for “{s}”?`,
    statement: `The collection entry lists the ${concept.assessment.event} date or range of “{s}” as {a}.`,
    blank: `The collection entry lists the ${concept.assessment.event} date or range of “{s}” as _____.`,
  } : {
    question: `What date or period is documented for the ${concept.assessment.event} of “{s}”?`,
    statement: `The date or period documented for the ${concept.assessment.event} of “{s}” is {a}.`,
    blank: `The date or period documented for the ${concept.assessment.event} of “{s}” is _____.`,
  } : definition;
  const creatorWording = definition.family === "creator" && concept.assessment.attribution?.status === "certain"
    ? concept.assessment.attribution.verb === "credited" ? {
      question: `Which ${concept.assessment.attribution.role} is credited for “{s}”?`,
      statement: `The ${concept.assessment.attribution.role} credited for “{s}” is {a}.`,
      blank: `The ${concept.assessment.attribution.role} credited for “{s}” is _____.`,
      inverse: { question: `Which work is credited to {s} in this role?`, statement: `“{a}” is credited to {s} in this role.`, blank: `One work credited to {s} in this role is _____.` },
    } : concept.assessment.attribution.verb === "created" ? {
      question: "Who created “{s}”?", statement: "{a} created “{s}”.", blank: "“{s}” was created by _____.",
      inverse: { question: "Which work was created by {s}?", statement: "{s} created “{a}”.", blank: "One work created by {s} is _____." },
    } : definition.certainAttribution : undefined;
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
  const focus = concept.assessment.focus;
  const creditAction = focus?.action === "founded" ? "founding" : focus?.action === "developed" ? "developing" : focus?.action === "wrote" ? "writing" : "designing";
  const contributor = focus?.collectiveCredit ? "team" : focus?.action === "wrote" ? "writer" : "contributor";
  const focused = focus?.kind === "example-credit" ? {
    question: `Which {s} example is credited to ${focus.label}?`,
    statement: `“{a}” exemplifies {s} and is credited to ${focus.label}.`,
    blank: `An example of {s} credited to ${focus.label} is _____.`,
  } : focus?.kind === "project-credit" ? {
    question: `Which {s} ${contributor} is credited with ${creditAction} “${focus.label}”?`,
    statement: `{a} is credited with ${creditAction} “${focus.label}”, contributing to {s}.`,
    blank: `The {s} ${contributor} credited with ${creditAction} “${focus.label}” was _____.`,
  } : focus?.kind === "project-field" ? {
    question: `Which field describes {s}’s work on “${focus.label}”?`,
    statement: `{s}’s work on “${focus.label}” demonstrates {a}.`,
    blank: `{s}’s work on “${focus.label}” demonstrates _____.`,
  } : focus?.kind === "project-period" ? {
    question: `Which period is documented for {s}’s “${focus.label}”?`,
    statement: `{s}’s “${focus.label}” has this documented dating: {a}.`,
    blank: `{s}’s “${focus.label}” has this documented dating: _____.`,
  } : undefined;
  const wording = concept.assessment.direction === "reverse" ? attributionWording?.inverse ?? definition.inverse : focused ?? attributionWording ?? dateWording;
  if (!wording) throw new Error(`Unsupported inverse wording: ${concept.relation}`);
  const scope = getVisibleAssessmentScope(concept);
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
      response: concept.assessment.inverse.response, presentation: undefined, factId: concept.assessment.factId ?? concept.id },
  };
}
