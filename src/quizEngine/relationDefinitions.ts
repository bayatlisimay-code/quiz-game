/** Domain-independent assessment families. Catalogue entries are explicit data. */
export type RelationFamily = "definition" | "identification" | "creator" | "date" | "membership" | "example" | "representative" | "country" | "first-work" | "character" | "association" | "prize" | "period";
export type RelationDefinition = Readonly<{
  family: RelationFamily;
  creatorRole?: string;
  question: string;
  statement: string;
  blank: string;
  certainAttribution?: Readonly<{ question: string; statement: string; blank: string; inverse: { question: string; statement: string; blank: string } }>;
  inverse?: Readonly<{ question: string; statement: string; blank: string }>;
}>;
const spec = (family: RelationFamily, question: string, statement: string, blank: string, inverse?: RelationDefinition["inverse"]): RelationDefinition => Object.freeze({ family, question, statement, blank, inverse });
// Roles, rather than relation IDs, determine grammar. Unrecognised and qualified
// credits retain the conservative attribution wording.
export const creatorVerbs: Readonly<Record<string, { active: string; passive: string }>> = {
  painter: { active: "painted", passive: "painted" },
  sculptor: { active: "sculpted", passive: "sculpted" },
  author: { active: "wrote", passive: "written" },
  poet: { active: "wrote", passive: "written" },
  playwright: { active: "wrote", passive: "written" },
  director: { active: "directed", passive: "directed" },
  designer: { active: "designed", passive: "designed" },
  architect: { active: "designed", passive: "designed" },
};
export const familyDefinitions = {
  definition: (domain: string) => spec("definition", `What does “{s}” mean in ${domain}?`, `In ${domain}, “{s}” means: {a}.`, `In ${domain}, “{s}” refers to _____.`,
    { question: `Which term in ${domain} matches this definition: “{s}”?`, statement: `In ${domain}, “{a}” matches this definition: “{s}”.`, blank: `In ${domain}, the term matching “{s}” is _____.` }),
  identification: (noun: string) => spec("identification", `Which ${noun} is shown or described?`, `The ${noun} shown or described is “{a}”.`, `The ${noun} shown or described is _____.`),
  creator: (role: string, work: string): RelationDefinition => {
    const verb = creatorVerbs[role];
    return { ...spec("creator", `Who is credited as ${role} of “{s}”?`, `A credited ${role} of “{s}” is {a}.`, `A credited ${role} of “{s}” is _____.`,
      { question: `Which ${work} is credited to {s} in this role?`, statement: `“{a}” is credited to {s} in this role.`, blank: `A ${work} credited to {s} in this role is _____.` }), creatorRole: role,
      ...(verb ? { certainAttribution: {
        question: `Who ${verb.active} “{s}”?`, statement: `{a} ${verb.active} “{s}”.`, blank: `“{s}” was ${verb.passive} by _____.`,
        inverse: { question: `Which of these works was ${verb.passive} by {s}?`, statement: `“{a}” was ${verb.passive} by {s}.`, blank: `One work ${verb.passive} by {s} is _____.` },
      } } : {}),
    };
  },
  date: (event: string) => spec("date", `What is the ${event} of “{s}”?`, `The ${event} of “{s}” is {a}.`, `The ${event} of “{s}” is _____.`,
    { question: `Which work has the ${event} “{s}”?`, statement: `“{a}” has the ${event} “{s}”.`, blank: `A work with the ${event} “{s}” is _____.` }),
  membership: (label: string, choices = `${label} labels`) => spec("membership", `Which of these ${choices} describes “{s}”?`, `A ${label} describing “{s}” is {a}.`, `A ${label} describing “{s}” is _____.`),
  example: (noun: string, criterion: string) => spec("example", `Which ${noun} is ${criterion} “{s}”?`, `“{a}” is ${criterion} “{s}”.`, `One ${noun} that is ${criterion} “{s}” is _____.`),
  representative: (noun: string, criterion: string) => spec("representative", `Which ${noun} was ${criterion} “{s}”?`, `{a} was ${criterion} “{s}”.`, `One ${noun} who was ${criterion} “{s}” is _____.`),
  country: (event: "birth" | "formation" | "location" | "base") => {
    const questions = { birth: "was {s} born", formation: "was the band or group {s} formed", location: "is {s} located", base: "is the award institution or festival {s} based" };
    const statements = { birth: "{s} was born in", formation: "The band or group {s} was formed in", location: "{s} is located in", base: "The award institution or festival {s} is based in" };
    return spec("country", `In which present-day country ${questions[event]}?`,
      `${statements[event]} present-day {a}.`, `${statements[event]} present-day _____.`);
  },
  first: (criterion: string) => spec("first-work", `What was the first ${criterion} by {s}?`, `The first ${criterion} by {s} was “{a}”.`, `The first ${criterion} by {s} was _____.`),
  character: (work: string) => spec("character", `In which ${work} does the character “{s}” appear?`, `The character “{s}” appears in “{a}”.`, `The character “{s}” appears in _____.`),
  association: (work: string) => spec("association", `Which character has the specified relationship with “{s}” in this ${work}?`, `“{s}” has the specified relationship with “{a}” in this ${work}.`, `In this ${work}, “{s}” has the specified relationship with _____.`),
  prize: () => spec("prize", `Which award category or festival prize is associated with “{s}”?`, `An award category or festival prize associated with “{s}” is “{a}”.`, `An award category or festival prize associated with “{s}” is _____.`),
  period: (label: string) => spec("period", `Which period or date range is associated with ${label} “{s}”?`, `A period or date range associated with ${label} “{s}” is {a}.`, `A period or date range associated with ${label} “{s}” is _____.`),
};
