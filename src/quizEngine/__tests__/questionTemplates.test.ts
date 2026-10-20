import { certifiedFixtureContext } from "../testSupport/certifiedFixtures";
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import ts from "typescript";
import { buildExercise, buildMatchingExercise } from "../exerciseFactory";
import type { Concept, Exercise } from "../conceptTypes";
import {
  deferredRelationSemantics, explicitRelationTemplates, getRelationTemplate, hasRelationTemplate,
  relationFamilies, renderPrompt,
} from "../templates";

// Read actual content with the TS parser, supporting both quoted and unquoted
// property names. Scan every concept file, including newly added/unregistered sets.
function contentRecords(directory: string): Concept[] {
  return readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return contentRecords(path);
      if (!entry.name.endsWith(".ts")) return [];
      const source = ts.createSourceFile(path, readFileSync(path, "utf8"), ts.ScriptTarget.Latest, true);
      const records: Concept[] = [];
      function visit(node: ts.Node): void {
        if (ts.isObjectLiteralExpression(node)) {
          const fields: Record<string, string> = {};
          for (const property of node.properties) {
            if (!ts.isPropertyAssignment(property)) continue;
            const key = property.name.getText(source).replace(/^['"]|['"]$/g, "");
            if (key === "relation") expect(ts.isStringLiteral(property.initializer)).toBe(true);
            if (ts.isStringLiteral(property.initializer)) fields[key] = property.initializer.text;
          }
          if (fields.relation) {
            expect(fields.subject).toBeDefined();
            expect(fields.object).toBeDefined();
            records.push(fields as unknown as Concept);
          }
        }
        ts.forEachChild(node, visit);
      }
      visit(source);
      return records;
    });
}

const records = contentRecords(resolve(__dirname, "../../../data/concepts"));
const relations = [...new Set(records.map((record) => record.relation))].sort();

function poolFor(concept: Concept): Concept[] {
  return [concept, ...[1, 2, 3, 4].map((i) => ({
    ...concept, id: `${concept.id}-d${i}`, subject: `Other subject ${i}`, object: `Other answer ${i}`,
  }))];
}

const cases =
[
  [
    "sculptor_of_sculpture",
    "Venus de Milo",
    "Unknown Greek sculptor",
    "Which creator or attribution is recorded for Venus de Milo?",
    "The creator or attribution recorded for Venus de Milo is “Unknown Greek sculptor”.",
    "The creator or attribution recorded for Venus de Milo is _____."
  ],
  [
    "architect_of_building",
    "Sagrada Família",
    "Antoni Gaudí",
    "Who designed Sagrada Família?",
    "Sagrada Família was designed by Antoni Gaudí.",
    "Sagrada Família was designed by _____."
  ],
  [
    "location_of_building",
    "Sagrada Família",
    "Barcelona, Spain",
    "Where is Sagrada Família located?",
    "Sagrada Família is located in Barcelona, Spain.",
    "Sagrada Família is located in _____."
  ],
  [
    "art_style",
    "Mona Lisa",
    "Renaissance",
    "Which of these styles does Mona Lisa exemplify?",
    "An artistic style of Mona Lisa is Renaissance.",
    "An artistic style of Mona Lisa is _____."
  ],
  [
    "definition_of_music_term",
    "Tempo",
    "The speed of the music.",
    "What does “Tempo” mean in music?",
    "In music, “Tempo” means “The speed of the music”.",
    "In music, “Tempo” means _____."
  ],
  [
    "example_of_theatre_genre",
    "Tragedy",
    "Oedipus Rex",
    "Which play is an example of tragedy?",
    "An example of tragedy is “Oedipus Rex”.",
    "An example of tragedy is _____."
  ],
  [
    "material_used_in_sculpture_technique",
    "Marble carving",
    "marble",
    "Which material is used in marble carving?",
    "Marble carving uses marble.",
    "Marble carving uses _____."
  ],
  [
    "nationality_of_architect",
    "Antoni Gaudí",
    "Spanish",
    "What national or cultural background is recorded for Antoni Gaudí?",
    "The national or cultural background recorded for Antoni Gaudí is Spanish.",
    "The national or cultural background recorded for Antoni Gaudí is _____."
  ],
  [
    "published_in_year",
    "1984",
    "1949",
    "In which year was 1984 published?",
    "1984 was published in 1949.",
    "1984 was published in _____."
  ],
  [
    "known_for_building",
    "Andrea Palladio",
    "Villa Rotonda",
    "Which building is Andrea Palladio known for?",
    "Andrea Palladio is known for Villa Rotonda.",
    "Andrea Palladio is known for _____."
  ]
];

test.each(cases)("renders all three forms for %s", (relation, subject, object, question, statement, blank) => {
  const concept = { id: "wording", relation, subject, object } as Concept;
  const template = getRelationTemplate(relation);
  expect(template.question(subject)).toBe(question);
  expect(template.blank(subject)).toBe(blank);
  expect(template.statement(subject, object)).toBe(statement);
  expect(renderPrompt(concept)).toEqual({ prompt: question, sentence: statement, answerText: object });
  // Rendering is tested independently of whether this fact is assessable.
  // Semantic generation and negative certification have dedicated tests.

});

test("every content relation has exactly one deliberate assignment; new relations fail coverage", () => {
  expect(records.length).toBeGreaterThan(1000);
  expect(relations.length).toBeGreaterThan(0);
  expect(relations.filter((relation) => !hasRelationTemplate(relation))).toEqual([]);
  for (const relation of relations) {
    const assignments = Number(Object.hasOwn(explicitRelationTemplates, relation)) +
      Number(Object.hasOwn(relationFamilies, relation));
    expect(assignments).toBe(1);
  }
  expect(hasRelationTemplate("new_unmapped_relation")).toBe(false);
});

test("all content uses authored wording without identifiers or mechanically converted grammar", () => {
  const rawIdentifiers = relations.filter((relation) => relation.includes("_"));
  for (const concept of records) {
    const template = getRelationTemplate(concept.relation);
    // Valid English such as “painted by”, “known for”, and “art style” may
    // occur in authored templates. Reject the old mechanical constructions.
    const converted = concept.relation.split("_").join(" ");
    for (const text of [template.question(concept.subject, concept.context), template.blank(concept.subject, concept.context), template.statement(concept.subject, concept.object, concept.context)]) {
      expect(renderPrompt(concept).answerText).toBe(concept.object);
      expect(text).not.toMatch(/\b(?:is|for|as):/);
      expect(rawIdentifiers.filter((identifier) => text.includes(identifier))).toEqual([]);
      expect(text).not.toContain(`Who ${converted} ${concept.subject}?`);
      if (concept.relation !== "painted_by") expect(text).not.toContain(`${concept.subject} was ${converted} by `);
    }
  }
});

test("misleading relation names follow the actual subject/object direction", () => {
  expect(getRelationTemplate("character_of_book").statement("Elizabeth Bennet", "Pride and Prejudice"))
    .toBe("The character Elizabeth Bennet appears in Pride and Prejudice.");
  expect(getRelationTemplate("quote_of_book").statement("to be or not to be", "Hamlet"))
    .toBe("The excerpt or paraphrase “to be or not to be” comes from Hamlet.");
  expect(getRelationTemplate("city_of_museum").question("Mona Lisa"))
    .toBe("In which city is Mona Lisa housed?");
  expect(getRelationTemplate("example_of_sculpture_from_civilization").statement("Bust of Nefertiti", "Seated Scribe"))
    .toBe("The Bust of Nefertiti and “Seated Scribe” belong to the same cultural tradition.");
  expect(getRelationTemplate("characteristic_of_civilization_sculpture").question("Bust of Nefertiti"))
    .toBe("Which sculptural characteristic is exemplified by the Bust of Nefertiti?");
  expect(getRelationTemplate("period_or_year_of_building").statement("Monticello", "Built 1769–1809"))
    .toBe("The construction timeline of Monticello is described as “Built 1769–1809”.");
});

test("certified substitutions preserve matching text within the subject", () => {
  const template = getRelationTemplate("painted_by");
  expect(template.statement("Portrait of Ada by Ada", "Different artist"))
    .toBe("Portrait of Ada by Ada was painted by Different artist.");
});

test("raw values, template-like text, and optional context are preserved", () => {
  const subject = "  A_{a} $&  ";
  const answer = "  B_{s} $&  ";
  const concept = { id: "raw", subject, object: answer, relation: "painted_by", context: "test context" } as Concept;
  expect(getRelationTemplate(concept.relation).statement(subject, answer, concept.context))
    .toBe(`  A_{a} $&   was painted by   B_{s} $&  . (test context)`);
  expect(renderPrompt(concept).answerText).toBe(answer);
  const ex = buildExercise(concept, poolFor(concept), 4, "mcq", certifiedFixtureContext(poolFor(concept)));
  if (ex.type !== "mcq") throw new Error("Expected MCQ");
  expect(ex.answerText).toBe(answer);
  expect(ex.options[ex.correctIndex]).toBe(answer);
});

test.each(["new_unmapped_relation", "toString", "__proto__"])("unknown %s has a grammatical fallback", (relation) => {
  expect(hasRelationTemplate(relation)).toBe(false);
  const template = getRelationTemplate(relation);
  expect(template.question("Subject")).toBe("Which option correctly relates to Subject?");
  expect(template.statement("Subject", "Answer")).toBe("Subject is associated with Answer.");
  expect(template.blank("Subject")).toBe("Subject is associated with _____.");
});

test("unassigned relations cannot escape through template fallback", () => {
  const concept = { id: "unknown", relation: "new_unmapped_relation", subject: "Subject", object: "Answer" } as Concept;
  for (const type of ["mcq", "fill_blank", "true_false"] as const) expect(buildExercise(concept, poolFor(concept), 4, type)).toBeNull();
});

// Reviewed post-refactor legacy corpus. Feasible options, policy fallback,
// deterministic selection and matching are fingerprinted intentionally; legacy
// uncertified False statements and automatic typed blanks are no longer emitted.
function behaviorCorpus(): unknown[] {
  const result: unknown[] = [];
  for (const relation of ["painted_by", "location_of_building", "art_style"]) {
    const base = Array.from({ length: 6 }, (_, i) => ({
      id: `c${i}`, subject: `Subject ${i}`, object: `Answer ${i}`,
      relation: i === 4 ? "other_relation" : relation,
      distractorGroup: i < 2 ? "first" : "second",
    })) as Concept[];
    for (const size of [2, 4, 6]) {
      const pool = base.slice(0, size);
      for (const concept of pool) {
        for (const optionCount of [2, 4, 5]) {
          for (const type of [undefined, "mcq", "true_false", "fill_blank"] as const) {
            const ex = buildExercise(concept, pool, optionCount, type);
            if (!ex) { result.push(null); continue; }
            const { prompt, statement, ...fields } = ex as Exercise & { prompt?: string; statement?: string };
            result.push(fields);
          }
        }
      }
    }
    result.push(buildMatchingExercise(base.slice(0, 4), "baseline-matching"));
  }
  return result;
}

test("uncertified legacy corpus is deterministic and cannot escape through fallback", () => {
  expect(behaviorCorpus().every((exercise) => exercise === null)).toBe(true);
  expect(behaviorCorpus()).toEqual(behaviorCorpus());
});

// Authored expected sentences, including real boundary records from the QA audit.
const naturalCases = [
  ["designed_by", "Eames Lounge Chair", "Charles and Ray Eames", "Who designed the Eames Lounge Chair?", "The Eames Lounge Chair was designed by Charles and Ray Eames.", "The Eames Lounge Chair was designed by _____."],
  ["designer_of_visual_work", "Original Macintosh Icons", "Susan Kare", "Who designed the Original Macintosh Icons?", "The Original Macintosh Icons were designed by Susan Kare.", "The Original Macintosh Icons were designed by _____."],
  ["architect_of_building", "Petronas Towers", "César Pelli", "Who designed the Petronas Towers?", "The Petronas Towers were designed by César Pelli.", "The Petronas Towers were designed by _____."],
  ["location_of_building", "Petronas Towers", "Kuala Lumpur, Malaysia", "Where are the Petronas Towers located?", "The Petronas Towers are located in Kuala Lumpur, Malaysia.", "The Petronas Towers are located in _____."],
  ["country_of_museum", "The Night Watch", "Netherlands", "In which country is The Night Watch housed?", "The Night Watch is housed in the Netherlands.", "The Night Watch is housed in _____."],
  ["housed_in", "Mona Lisa", "Louvre Museum", "Where is Mona Lisa housed?", "Mona Lisa is housed in the Louvre Museum.", "Mona Lisa is housed in _____."],
  ["location_of_sculpture", "Statue of Liberty", "Liberty Island, New York City", "Where is the Statue of Liberty located?", "The location of the Statue of Liberty is Liberty Island, New York City.", "The location of the Statue of Liberty is _____."],
  ["definition_of_music_term", "Melody", "The main tune of a piece of music.", "What does “Melody” mean in music?", "In music, “Melody” means “The main tune of a piece of music”.", "In music, “Melody” means _____."],
  ["genre_of_movie", "The Godfather", "Crime", "Which of these genres describes The Godfather?", "One genre describing The Godfather is crime.", "One genre describing The Godfather is _____."],
  ["genre_of_painting", "Mona Lisa", "portrait", "Which of these genres describes Mona Lisa?", "Mona Lisa is a portrait.", "Mona Lisa is a _____."],
  ["genre_of_song", "Symphony No. 5", "Classical", "Which of these genres describes Symphony No. 5?", "One genre describing Symphony No. 5 is classical.", "One genre describing Symphony No. 5 is _____."],
  ["type_of_instrument", "Guitar", "String instrument", "What type of instrument is the guitar?", "The guitar is a string instrument.", "The guitar is _____."],
  ["type_of_instrument", "Drums", "Percussion instrument", "What type of instrument are drums?", "Drums are percussion instruments.", "Drums are _____."],
  ["role_in_filmmaking", "Director", "Guides the creative vision of a film", "What does a director do in filmmaking?", "The role of a director in filmmaking is to guide the creative vision of a film.", "In filmmaking, a director _____."],
  ["role_in_filmmaking", "Cinematographer", "Responsible for lighting and camera work", "What does a cinematographer do in filmmaking?", "The role of a cinematographer in filmmaking is to be responsible for lighting and camera work.", "In filmmaking, a cinematographer _____."],
  ["role_in_theatre", "Understudy", "Learns another performer's role in case a replacement is needed", "What does an understudy do in theatre?", "The role of an understudy in theatre is to learn another performer's role in case a replacement is needed.", "In theatre, an understudy _____."],
  ["role_of_music_person", "DJ", "Plays and mixes recorded music for an audience.", "What does a DJ do in music?", "The role of a DJ in music is to play and mix recorded music for an audience.", "In music, a DJ _____."],
  ["function_of_product", "Eames Lounge Chair", "Seating", "What is the Eames Lounge Chair used for?", "The Eames Lounge Chair is used for seating.", "The Eames Lounge Chair is used for _____."],
  ["function_or_feature_of_sculpture", "Light and shadow", "reveal depth, modeling, and surface variation through changing highlights and shadows", "What role do light and shadow play in sculpture?", "In sculpture, light and shadow reveal depth, modeling, and surface variation through changing highlights and shadows.", "In sculpture, light and shadow _____."],
  ["visual_effect_of_design_principle", "Symmetry", "Creates a sense of order, stability, and formality", "What visual effect does symmetry create in architecture?", "In architecture, symmetry creates a sense of order, stability, and formality.", "In architecture, symmetry _____."],
  ["purpose_of_design_principle", "Contrast", "To make important differences and key elements easier to notice", "Why is contrast used in design?", "The purpose of contrast in design is to make important differences and key elements easier to notice.", "The purpose of contrast in design is _____."],
  ["known_for_design", "Charles and Ray Eames", "Eames Lounge Chair", "Which design are Charles and Ray Eames known for?", "Charles and Ray Eames are known for the Eames Lounge Chair.", "Charles and Ray Eames are known for _____."],
  ["known_for_song", "The Beatles", "Hey Jude", "Which musical work are The Beatles known for?", "The Beatles are known for Hey Jude.", "The Beatles are known for _____."],
  ["known_for_genre", "Ludwig van Beethoven", "Classical", "Which musical genre is Ludwig van Beethoven known for?", "Ludwig van Beethoven is known for classical music.", "Ludwig van Beethoven is known for _____."],
  ["nationality_of_designer", "Charles and Ray Eames", "American", "What is the nationality of Charles and Ray Eames?", "Charles and Ray Eames are American.", "The nationality of Charles and Ray Eames is _____."],
  ["visual_characteristic_of", "IBM 8-bar Logo", "Horizontal stripes forming bold block letters", "Which visual feature characterizes the IBM 8-bar Logo?", "One visual feature of the IBM 8-bar Logo is described as “Horizontal stripes forming bold block letters”.", "One visual feature of the IBM 8-bar Logo is _____."],
  ["example_of_stage_or_performance_element", "Blocking", "In rehearsal, the director sets where each actor stands and moves during a fight scene", "Which situation is an example of blocking?", "An example of blocking is “In rehearsal, the director sets where each actor stands and moves during a fight scene”.", "An example of blocking is _____."],
  ["type_of_visual_design", "IBM 8-bar Logo", "Logo design", "Which design category best describes the IBM 8-bar Logo?", "The IBM 8-bar Logo is an example of logo design.", "The IBM 8-bar Logo is an example of _____."],
  ["created_in_decade", "Eames Lounge Chair", "1950s", "In which decade was the Eames Lounge Chair designed?", "The Eames Lounge Chair was designed in the 1950s.", "The Eames Lounge Chair was designed in the _____."],
  ["founded_decade_of_award_or_festival", "Academy Awards", "1920s", "In which decade did the Academy Awards begin?", "The Academy Awards began in the 1920s.", "The Academy Awards began in the _____."],
  ["civilization_or_culture_of_sculpture", "Votive Statues from Tell Asmar", "Sumerian", "Which civilization or cultural tradition produced the Votive Statues from Tell Asmar?", "The Votive Statues from Tell Asmar belong to the Sumerian tradition.", "The Votive Statues from Tell Asmar belong to the _____ tradition."],
  ["reaction_against", "Arts and Crafts", "Industrial mass production", "What did Arts and Crafts react against?", "Arts and Crafts reacted against industrial mass production.", "Arts and Crafts reacted against _____."],
];

test.each(naturalCases)("natural forms for %s: %s", (relation, subject, answer, question, statement, blank) => {
  const template = getRelationTemplate(relation);
  expect(template.question(subject)).toBe(question);
  expect(template.statement(subject, answer)).toBe(statement);
  expect(template.blank(subject)).toBe(blank);
  const concept = { id: "natural", relation, subject, object: answer } as Concept;
  const pool = poolFor(concept);
  const context = certifiedFixtureContext(pool);
  const mcq = buildExercise(concept, pool, 4, "mcq", context);
  const fill = buildExercise(concept, pool, 4, "fill_blank", context);
  expect(mcq.type === "mcq" && mcq.prompt).toBe(question);
  expect(fill.type === "fill_blank" && fill.prompt).toBe(blank);
  expect(mcq.type !== "matching" && mcq.answerText).toBe(answer);
  expect(fill.type !== "matching" && fill.answerText).toBe(answer);
});

test("shown answers get their own grammatical display without changing raw answers", () => {
  expect(getRelationTemplate("surface_of").statement("Mona Lisa", "wood panel")).toBe("Mona Lisa was painted on a wood panel.");
  expect(getRelationTemplate("surface_of").statement("Mona Lisa", "canvas")).toBe("Mona Lisa was painted on canvas.");
  expect(getRelationTemplate("country_of_museum").statement("Mona Lisa", "United States")).toBe("Mona Lisa is housed in the United States.");
  expect(getRelationTemplate("function_or_feature_of_sculpture").statement("Scale", "reveal depth, modeling, and surface variation"))
    .toBe("In sculpture, scale reveals depth, modeling, and surface variation.");
  expect(getRelationTemplate("function_or_feature_of_sculpture").statement("Light and shadow", "influences visual impact"))
    .toBe("In sculpture, light and shadow influence visual impact.");
  expect(getRelationTemplate("role_in_theatre").statement("Actor", "Unrelated answer"))
    .toBe("The role of an actor in theatre is described as “Unrelated answer”.");
  // This describes neutral rendering, not certification that the answer is false.
  expect(getRelationTemplate("type_of_instrument").statement("Guitar", "Electronic instrument"))
    .toBe("The guitar is an electronic instrument.");
});

test("uncertain meanings remain neutral and all 30 validity deferrals are explicit", () => {
  expect(Object.keys(deferredRelationSemantics).length).toBeGreaterThan(0);
  expect(Object.keys(deferredRelationSemantics).every(hasRelationTemplate)).toBe(true);
  expect(getRelationTemplate("artist_of_song").statement("Symphony No. 5", "Ludwig van Beethoven"))
    .toBe("The artist linked to Symphony No. 5 is Ludwig van Beethoven.");
  expect(getRelationTemplate("year_of_song").statement("Symphony No. 5", "1808"))
    .toBe("The year linked to Symphony No. 5 is 1808.");
  expect(getRelationTemplate("created_in_year").question("Mona Lisa"))
    .toBe("Which year is recorded for the creation of Mona Lisa?");
  expect(getRelationTemplate("sculptor_of_sculpture").statement("Bust of Nefertiti", "Attributed to Thutmose"))
    .toBe("The creator or attribution recorded for the Bust of Nefertiti is “Attributed to Thutmose”.");
  expect(getRelationTemplate("author_of_quote").question("all animals are equal but some more equal"))
    .toBe("Who is the author behind the excerpt or paraphrase “all animals are equal but some more equal”?");
  expect(getRelationTemplate("country_of_award_or_festival").statement("European Film Awards", "Europe"))
    .toBe("The European Film Awards are linked to Europe.");
  expect(getRelationTemplate("nationality_of_architect").statement("Imhotep", "Ancient Egyptian"))
    .toBe("The national or cultural background recorded for Imhotep is Ancient Egyptian.");
});

test("genre definitions and representatives use a natural, explicit domain", () => {
  expect(getRelationTemplate("definition_of_genre").question("Action"))
    .toBe("Which description defines the genre “action”?");
  expect(getRelationTemplate("definition_of_genre").statement("Action", "Fast-paced films with fights, chases, or danger"))
    .toBe("The genre “action” is defined as “Fast-paced films with fights, chases, or danger”.");
  expect(getRelationTemplate("famous_director_of_genre").question("Action"))
    .toBe("Which film director is known for work in action films?");
  expect(getRelationTemplate("main_artist_of_movement").question("Baroque"))
    .toBe("Which musician or group represents Baroque in music?");
  expect(getRelationTemplate("main_authors_of_movement").question("renaissance"))
    .toBe("Which writer is known for work in Renaissance literature?");
  expect(getRelationTemplate("main_designers_of_movement").statement("Arts and Crafts", "William Morris, Philip Webb"))
    .toBe("Notable designers in Arts and Crafts include William Morris, Philip Webb.");
});

test("coordinated predicates remain grammatical after answer substitution", () => {
  expect(getRelationTemplate("role_in_theatre").statement("Actor", "Coordinates rehearsals and manages backstage operations during performances"))
    .toBe("The role of an actor in theatre is to coordinate rehearsals and manage backstage operations during performances.");
  expect(getRelationTemplate("visual_effect_of_design_principle").statement("Light and shadow", "Shapes mood, reveals texture, and changes the perception of space"))
    .toBe("In architecture, light and shadow shape mood, reveal texture, and change the perception of space.");
});
