import { relationDefinitions } from "./relationCatalogue";
import { creatorVerbs } from "./relationDefinitions";
import type { Concept } from "./conceptTypes";
import { getRelationTemplate } from "./templates";
import type { RelationTemplate } from "./templates";

/** Definition scopes describe validation of meanings, not extra instructions
 * for learners. Other scopes stay visible conservatively: they can qualify a
 * source, event, version, role or historical interpretation. Never strip text
 * based on parentheses or its contents. */
export function getVisibleAssessmentScope(concept: Concept): string | undefined {
  if (concept.assessment?.scope?.visibility === "internal") return undefined;
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
  if (definition.family === "definition" && concept.semantic?.qualifiers?.definitionBasis === "required-features") details.push("Essential features");
  // This explicit semantic contract already names the assessed field. Render
  // its meaning compactly; unknown/custom scopes retain their authored text.
  const principalCredit = definition.family === "creator" && concept.assessment.attribution?.status === "certain" &&
    concept.semantic?.qualifiers?.assessmentScope === "principal-catalogue-credit";
  if (concept.assessment.direction !== "reverse") {
    if (concept.assessment.catalogueField) details.push(concept.assessment.catalogueField === "cultural attribution" ? "Culture" : "Date");
    else if (definition.family === "date") details.push(concept.assessment.event ? `${concept.assessment.event} date` : "Date or period");
    if (definition.family === "creator") {
      const credit = concept.assessment.attribution;
      details.push(credit?.status === "attributed" ? `Attributed ${credit.role}` : credit?.status === "disputed" ? `Disputed ${credit.role} credit` : `${principalCredit ? "Main " : ""}${credit?.verb === "created" ? "creator" : credit?.role ?? definition.creatorRole ?? "Creator"}`);
    }
    if (definition.family === "first-work" && concept.assessment.firstWork) details.push(concept.assessment.firstWork.criterion.replaceAll("-", " ").replace("reliably documented ", ""));
    if (definition.family === "association" && concept.assessment.association && !relationshipOf(concept)) details.push(concept.assessment.association.kind);
  }
  if (principalCredit && concept.assessment.direction === "reverse") details.push(`Principal ${concept.assessment.attribution!.role} credits`);
  if (definition.family === "country") details.push("Present-day country");
  if (scope) details.push(scope);
  return details.length ? `${concept.subject} — ${details.join("; ")}` : concept.subject;
}

/** The authored singular relationship (“Her brother”), when one is recorded. */
function relationshipOf(concept: Concept): string | undefined {
  const qualifiers = concept.semantic?.qualifiers as Readonly<Record<string, unknown>> | undefined;
  const value = qualifiers?.relationshipScope ?? qualifiers?.kinship;
  return typeof value === "string" && /^(?:Her|His) \S/.test(value) ? value : undefined;
}
// Natural date phrases for statements. Answers stay verbatim; only the
// preposition/article around them changes (“in the 1620s”, “in about 1750”, “around 1601”).
function inDate(answer: string): string {
  if (/^\d{3,4}s$/.test(answer) || /^\d+(?:st|nd|rd|th)\b/.test(answer)) return `in the ${answer}`;
  if (/^(?:around|approximately|roughly)\b/i.test(answer)) return answer[0].toLowerCase() + answer.slice(1);
  if (/^probably /i.test(answer)) return `probably in ${answer.slice("probably ".length)}`;
  return `in ${answer}`;
}
function fromDate(answer: string): string {
  if (/^\d+(?:st|nd|rd|th)\b|^beginning\b/.test(answer)) return `the ${answer}`;
  return answer.replace(/ years old$/, " years ago");
}
const eventVerbs: Readonly<Record<string, string>> = {
  creation: "created", completion: "completed", "first performance": "first performed", "first publication": "first published",
  writing: "written", introduction: "introduced", "historical period": "built",
};

export function getAssessmentTemplate(concept: Concept): RelationTemplate {
  const definition = relationDefinitions[concept.relation];
  if (!definition || !concept.assessment) return getRelationTemplate(concept.relation);
  const dateWording = definition.family === "definition" && concept.semantic?.qualifiers?.definitionBasis === "required-features" ? {
    question: "Which description gives the essential features of “{s}”?",
    statement: "The essential features of “{s}” are: {a}.",
    blank: "The essential features of “{s}” are: _____.",
  } : concept.assessment.catalogueField === "cultural attribution" ? {
    question: "Which culture does “{s}” come from?",
    statement: "The culture of “{s}” is {a}.",
    blank: "The culture of “{s}” is _____.",
  } : concept.assessment.catalogueField ? {
    question: "When was “{s}” made?",
    statement: "“{s}” dates from {from}.",
    blank: "“{s}” dates from _____.",
  } : definition.family === "date" && concept.assessment.event === "first publication" && concept.semantic?.value?.temporal?.start === concept.semantic?.value?.temporal?.end && concept.semantic?.value?.temporal ? {
    question: "In which year was “{s}” first published?",
    statement: "“{s}” was first published in {a}.",
    blank: "“{s}” was first published in _____.",
  } : definition.family === "date" && concept.semantic?.qualifiers?.datePrecision === "decade" && eventVerbs[concept.assessment.event ?? ""] ? {
    question: `In which decade was “{s}” ${eventVerbs[concept.assessment.event!]}?`,
    statement: `“{s}” was ${eventVerbs[concept.assessment.event!]} in the {a}.`,
    blank: `“{s}” was ${eventVerbs[concept.assessment.event!]} in the _____.`,
  } : definition.family === "date" && concept.assessment.event === "opening" ? {
    question: "When did “{s}” open?",
    statement: "“{s}” opened {in}.",
    blank: "“{s}” opened in _____.",
  } : definition.family === "date" && eventVerbs[concept.assessment.event ?? ""] ? {
    question: `When was “{s}” ${eventVerbs[concept.assessment.event!]}?`,
    statement: `“{s}” was ${eventVerbs[concept.assessment.event!]} {in}.`,
    blank: `“{s}” was ${eventVerbs[concept.assessment.event!]} in _____.`,
  } : definition.family === "date" && concept.assessment.event ? {
    question: `What date or period is documented for the ${concept.assessment.event} of “{s}”?`,
    statement: `The date or period documented for the ${concept.assessment.event} of “{s}” is {a}.`,
    blank: `The date or period documented for the ${concept.assessment.event} of “{s}” is _____.`,
  } : definition;
  const principalCredit = definition.family === "creator" && concept.assessment.attribution?.status === "certain" &&
    concept.semantic?.qualifiers?.assessmentScope === "principal-catalogue-credit";
  const principalRole = concept.assessment.attribution?.verb === "created" ? "creator" : concept.assessment.attribution?.role;
  // Certain credits read as plain questions (“Who painted…?”). Qualified and
  // disputed credits keep their explicit attribution wording below.
  const characterRole = !!principalRole?.startsWith("original ");
  const verb = concept.assessment.attribution?.verb === "created" || characterRole ? { active: "created", passive: "created" } : principalRole ? creatorVerbs[principalRole] : undefined;
  const noun = characterRole ? "the character " : "";
  const plainCredit = definition.family === "creator" && concept.assessment.attribution?.status === "certain" && verb ? {
    question: `Who ${verb.active} ${noun}“{s}”?`,
    statement: `{a} ${verb.active} ${noun}“{s}”.`,
    blank: `${characterRole ? "The character " : ""}“{s}” was ${verb.passive} by _____.`,
    inverse: { question: `Which of these works was ${verb.passive} by {s}?`, statement: `“{a}” was ${verb.passive} by {s}.`, blank: `One work ${verb.passive} by {s} is _____.` },
  } : undefined;
  const creatorWording = plainCredit ?? (principalCredit ? {
    question: `Who is credited as the main ${principalRole} of “{s}”?`,
    statement: `The main ${principalRole} credited for “{s}” is {a}.`,
    blank: `The main ${principalRole} credited for “{s}” is _____.`,
    inverse: concept.assessment.attribution?.verb === "created" ? {
      question: "Which work was created by {s}?", statement: "{s} created “{a}”.", blank: "One work created by {s} is _____.",
    } : concept.assessment.attribution?.verb === "credited" ? {
      question: "Which work is credited to {s} in this role?", statement: "“{a}” is credited to {s} in this role.", blank: "One work credited to {s} in this role is _____.",
    } : definition.certainAttribution?.inverse,
  } : definition.family === "creator" && concept.assessment.attribution?.status === "certain"
    ? concept.assessment.attribution.verb === "credited" ? {
      question: `Which ${concept.assessment.attribution.role} is credited for “{s}”?`,
      statement: `The ${concept.assessment.attribution.role} credited for “{s}” is {a}.`,
      blank: `The ${concept.assessment.attribution.role} credited for “{s}” is _____.`,
      inverse: { question: `Which work is credited to {s} in this role?`, statement: `“{a}” is credited to {s} in this role.`, blank: `One work credited to {s} in this role is _____.` },
    } : concept.assessment.attribution.verb === "created" ? {
      question: "Who created “{s}”?", statement: "{a} created “{s}”.", blank: "“{s}” was created by _____.",
      inverse: { question: "Which work was created by {s}?", statement: "{s} created “{a}”.", blank: "One work created by {s} is _____." },
    } : definition.certainAttribution : undefined);
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
  const action = focus?.action ?? "designed";
  const contributor = focus?.collectiveCredit ? "team" : action === "wrote" ? "writer" : action === "designed" ? "designer" : "figure";
  // “Product design” + designer reads as “Product designer”.
  const who = (subject: string) => contributor === "designer" && subject.endsWith(" design") ? `${subject}er` : `${subject} ${contributor}`;
  const focused = focus?.kind === "example-credit" ? {
    question: `Which work by ${focus.label} is an example of {s}?`,
    statement: `“{a}”, by ${focus.label}, is an example of {s}.`,
    blank: `An example of {s} by ${focus.label} is _____.`,
  } : focus?.kind === "project-credit" ? {
    question: `Which {who} ${action} “${focus.label}”?`,
    statement: `{a} is the {who} who ${action} “${focus.label}”.`,
    blank: `The {who} who ${action} “${focus.label}” was _____.`,
  } : focus?.kind === "project-field" ? {
    question: `Which field describes {s}’s work on “${focus.label}”?`,
    statement: `{s}’s work on “${focus.label}” is an example of {a}.`,
    blank: `{s}’s work on “${focus.label}” is an example of _____.`,
  } : focus?.kind === "project-period" ? {
    question: `When did {s} create “${focus.label}”?`,
    statement: `{s} created “${focus.label}” {in}.`,
    blank: `{s} created “${focus.label}” in _____.`,
  } : undefined;
  const relationship = definition.family === "association" ? relationshipOf(concept)?.replace(/^(?:Her|His) /, "") : undefined;
  const associated = relationship ? {
    question: `Who is the ${relationship} of “{s}”?`,
    statement: `“{a}” is the ${relationship} of “{s}”.`,
    blank: `The ${relationship} of “{s}” is _____.`,
  } : undefined;
  const wording = concept.assessment.direction === "reverse" ? attributionWording?.inverse ?? definition.inverse : focused ?? associated ?? attributionWording ?? dateWording;
  if (!wording) throw new Error(`Unsupported inverse wording: ${concept.relation}`);
  // The association wording already states its relationship.
  const scope = associated && concept.assessment.direction !== "reverse" ? undefined : getVisibleAssessmentScope(concept);
  const render = (text: string, subject: string, answer: string) => {
    const sentence = text.replaceAll("{s}", subject).replaceAll("{who}", who(subject))
      .replaceAll("{in}", inDate(answer)).replaceAll("{from}", fromDate(answer))
      .replaceAll("{a}", answer).replace(/\bwas ((?:first )?\w+) probably in\b/, "was probably $1 in").replace(/([.!?])\.$/, "$1");
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
