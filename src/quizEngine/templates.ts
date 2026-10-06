// Centralized, deliberately assigned relation wording. Display formatting does
// not change concept values, options, seeds, or correctness decisions.
import type { Concept } from "./conceptTypes";

export interface RelationTemplate {
  question(subject: string, context?: string): string;
  statement(subject: string, shownAnswer: string, context?: string): string;
  blank(subject: string, context?: string): string;
}

export type RenderedPrompt = { prompt: string; answerText: string; sentence: string };

// Explicit names whose ordinary prose needs an article. Never infer grammar
// from relation IDs or prepend "the" to every proper name.
const subjectNames: Readonly<Record<string, string>> = {
  "Eames Lounge Chair": "the Eames Lounge Chair",
  "Wassily Chair": "the Wassily Chair",
  "Panton Chair": "the Panton Chair",
  "Braun SK 4": "the Braun SK 4",
  "IBM 8-bar Logo": "the IBM 8-bar Logo",
  "SAS Royal Hotel Interior": "the SAS Royal Hotel Interior",
  "SAS Royal Hotel Interiors": "the SAS Royal Hotel Interiors",
  "IBM Visual Identity": "the IBM Visual Identity",
  "Lufthansa Visual Identity": "the Lufthansa Visual Identity",
  "London Underground Map": "the London Underground Map",
  "London Underground Roundel": "the London Underground Roundel",
  "New York City Subway Map": "the New York City Subway Map",
  "New York City Subway Signage System": "the New York City Subway Signage System",
  "I Love New York Logo": "the I Love New York Logo",
  "Vertigo Film Poster": "the Vertigo Film Poster",
  "Arco Floor Lamp": "the Arco Floor Lamp",
  "Anglepoise Lamp": "the Anglepoise Lamp",
  "Coca-Cola Contour Bottle": "the Coca-Cola Contour Bottle",
  "Nike Swoosh": "the Nike Swoosh",
  "Original Macintosh Icons": "the Original Macintosh Icons",
  "9093 Kettle": "the 9093 Kettle",
  "Chemex Coffeemaker": "the Chemex Coffeemaker",
  "FedEx Logo": "the FedEx Logo",
  "NASA Worm Logotype": "the NASA Worm Logotype",
  "Revolver Album Cover": "the Revolver Album Cover",
  "Unknown Pleasures Album Cover": "the Unknown Pleasures Album Cover",
  "Munich 1972 Olympic Visual Identity": "the Munich 1972 Olympic Visual Identity",
  "1923 Bauhaus Exhibition Poster": "the 1923 Bauhaus Exhibition Poster",
  "Beethoven Poster": "the Beethoven Poster",
  "Normandie Poster": "the Normandie Poster",
  "Chase Manhattan Bank Visual Identity": "the Chase Manhattan Bank Visual Identity",
  "Maison de Verre Interior": "the Maison de Verre Interior",
  "MUJI Wall-Mounted CD Player": "the MUJI Wall-Mounted CD Player",
  "Miss Blanche Chair": "the Miss Blanche Chair",
  "Bust of Nefertiti": "the Bust of Nefertiti",
  "Terracotta Army": "the Terracotta Army",
  "Statue of Liberty": "the Statue of Liberty",
  "Pyramid of Djoser": "the Pyramid of Djoser",
  "Petronas Towers": "the Petronas Towers",
  "Palace of Westminster": "the Palace of Westminster",
  "Crystal Palace": "the Crystal Palace",
  "Glasgow School of Art": "the Glasgow School of Art",
  "Rietveld Schr\u00f6der House": "the Rietveld Schr\u00f6der House",
  "TWA Flight Center": "the TWA Flight Center",
  "Jatiya Sangsad Bhaban": "the Jatiya Sangsad Bhaban",
  "S\u00e3o Paulo Museum of Art": "the S\u00e3o Paulo Museum of Art",
  "Nakagin Capsule Tower": "the Nakagin Capsule Tower",
  "Portland Building": "the Portland Building",
  "Cathedral of Bras\u00edlia": "the Cathedral of Bras\u00edlia",
  "Sydney Opera House": "the Sydney Opera House",
  "Lotus Temple": "the Lotus Temple",
  "Hassan II Mosque": "the Hassan II Mosque",
  "Florence Cathedral Dome": "the Florence Cathedral Dome",
  "Votive Statues from Tell Asmar": "the Votive Statues from Tell Asmar",
  "Academy Awards": "the Academy Awards",
  "BAFTA Awards": "the BAFTA Awards",
  "Golden Globe Awards": "the Golden Globe Awards",
  "European Film Awards": "the European Film Awards",
  "Cesar Awards": "the Cesar Awards",
  "Goya Awards": "the Goya Awards",
  "Ariel Awards": "the Ariel Awards",
  "Asia Pacific Screen Awards": "the Asia Pacific Screen Awards",
  "Cannes Film Festival": "the Cannes Film Festival",
  "Venice Film Festival": "the Venice Film Festival",
  "Berlin International Film Festival": "the Berlin International Film Festival",
  "Toronto International Film Festival": "the Toronto International Film Festival",
  "Sundance Film Festival": "the Sundance Film Festival",
  "Busan International Film Festival": "the Busan International Film Festival",
  "Locarno Film Festival": "the Locarno Film Festival",
  "San Sebastian International Film Festival": "the San Sebastian International Film Festival",
  "BFI London Film Festival": "the BFI London Film Festival",
  "International Documentary Film Festival Amsterdam": "the International Documentary Film Festival Amsterdam",
};

const pluralSubjects = new Set([
  "Charles and Ray Eames", "Petronas Towers", "Original Macintosh Icons",
  "Votive Statues from Tell Asmar", "Academy Awards", "BAFTA Awards",
  "Golden Globe Awards", "European Film Awards", "Cesar Awards", "Goya Awards",
  "Ariel Awards", "Asia Pacific Screen Awards", "The Beatles", "Bee Gees",
  "Eagles", "Red Hot Chili Peppers", "Sex Pistols", "Drums", "Light and shadow",
]);

// Common terms have deliberately authored prose forms. Artwork titles are
// formatted separately, so the sculpture "Guitar" never becomes "a guitar".
const commonTerms: Readonly<Record<string, string>> = {
  "Furniture design": "furniture design", "Industrial design": "industrial design",
  "Product design": "product design", "Logo design": "logo design",
  "Typeface design": "typeface design", "Information design": "information design",
  "Poster design": "poster design", "Lighting design": "lighting design",
  "Packaging design": "packaging design", "Book design": "book design",
  "Visual identity": "visual identity", "Corporate identity": "corporate identity",
  "Financial corporate identity": "financial corporate identity", "Airline visual identity": "airline visual identity",
  "Album-cover design": "album-cover design", "Interface design": "interface design",
  "Editorial design": "editorial design", "Wayfinding design": "wayfinding design",
  Jazz: "jazz", Rock: "rock", Pop: "pop", Reggae: "reggae", Soul: "soul",
  Country: "country", Disco: "disco", Folk: "folk", Electronic: "electronic",
  "Latin Pop": "Latin pop",
  Ornament: "ornament", Axis: "axis", Movement: "movement", Light: "light",
  Transparency: "transparency", Enclosure: "enclosure", "Integration with Nature": "integration with nature",
  "Scale": "scale",
  "Proportion": "proportion",
  "Balance": "balance",
  "Rhythm": "rhythm",
  "Texture": "texture",
  "Viewer movement": "viewer movement",
  "Light and shadow": "light and shadow",
  "Implied movement": "implied movement",
  "Viewpoint": "viewpoint",
  "Relationship to site": "relationship to site",
  "Monumentality": "monumentality",
  "Commemoration": "commemoration",
  "Religious devotion": "religious devotion",
  "Funerary purpose": "funerary purpose",
  "Political messaging": "political messaging",
  "Narrative": "narrative",
  "Portraiture": "portraiture",
  "Architectural decoration": "architectural decoration",
  "Symmetry": "symmetry",
  "Asymmetry": "asymmetry",
  "Contrast": "contrast",
  "Hierarchy": "hierarchy",
  "Emphasis": "emphasis",
  "Unity": "unity",
  "Alignment": "alignment",
  "Proximity": "proximity",
  "Repetition": "repetition",
  "White Space": "white space",
  "Consistency": "consistency",
  "Grid": "grid",
  "Visual Flow": "visual flow",
  "Simplicity": "simplicity",
  "Blocking": "blocking",
  "Projection": "projection",
  "Improvisation": "improvisation",
  "Cross": "cross",
  "Subtext": "subtext",
  "Dialogue": "dialogue",
  "Monologue": "monologue",
  "Soliloquy": "soliloquy",
  "Aside": "aside",
  "Tragedy": "tragedy",
  "Comedy": "comedy",
  "Tragicomedy": "tragicomedy",
  "Farce": "farce",
  "Marble carving": "marble carving",
  "Wood carving": "wood carving",
  "Bronze casting": "bronze casting",
  "Rock-cut sculpture": "rock-cut sculpture",
  "Relief carving": "relief carving",
  "Clay modeling": "clay modeling",
  "Wax modeling": "wax modeling",
  "Terracotta sculpture": "terracotta sculpture",
  "Lost-wax casting": "lost-wax casting",
  "Plaster casting": "plaster casting",
  "Repoussé": "repoussé",
  "Welding": "welding",
  "Wire sculpture": "wire sculpture",
  "Metal fabrication": "metal fabrication",
  "Assemblage": "assemblage",
  "Found-object sculpture": "found-object sculpture",
  "Soft sculpture": "soft sculpture",
  "Glassblowing": "glassblowing",
  "Industrial Design": "industrial design",
  "Product Design": "product design",
  "Furniture Design": "furniture design",
  "Graphic Design": "graphic design",
  "Typography": "typography",
  "Brand Identity Design": "brand identity design",
  "Interior Design": "interior design",
  "Packaging Design": "packaging design",
  "Lighting Design": "lighting design",
  "Information Design": "information design",
  "Wayfinding Design": "wayfinding design",
  "Editorial Design": "editorial design",
  "Poster Design": "poster design",
  "Exhibition Design": "exhibition design",
  "Title Sequence Design": "title sequence design",
  "Interface Design": "interface design",
  "Book Design": "book design",
  "Textile Design": "textile design",
  "Classical": "classical",
  "Action": "action",
  "Adventure": "adventure",
  "Drama": "drama",
  "Romance": "romance",
  "Horror": "horror",
  "Thriller": "thriller",
  "Science fiction": "science fiction",
  "Fantasy": "fantasy",
  "Animation": "animation",
  "Musical": "musical",
  "Documentary": "documentary",
  "Western": "western",
  "Crime": "crime",
  "Mystery": "mystery",
  "War": "war",
  "Historical": "historical",
  "Superhero": "superhero",
};

const instruments: Readonly<Record<string, string>> = {
  Guitar: "the guitar", Piano: "the piano", Violin: "the violin", Drums: "drums",
  Trumpet: "the trumpet", Saxophone: "the saxophone", Flute: "the flute",
  Cello: "the cello", "Bass Guitar": "the bass guitar", Clarinet: "the clarinet",
  Harp: "the harp", Synthesizer: "the synthesizer", Organ: "the organ",
  Ukulele: "the ukulele", Harmonica: "the harmonica", Accordion: "the accordion",
  Tambourine: "the tambourine", Voice: "the human voice",
};

const placeNames: Readonly<Record<string, string>> = {
  "United States": "the United States", "United Kingdom": "the United Kingdom",
  Netherlands: "the Netherlands", "united states": "the United States",
  "italy": "Italy", "europe": "Europe", "france": "France", "england": "England",
  "germany": "Germany", "latin america": "Latin America",
  "Louvre Museum": "the Louvre Museum", "Museum of Modern Art": "the Museum of Modern Art",
  "National Gallery": "the National Gallery", "Art Institute of Chicago": "the Art Institute of Chicago",
  "Musee d'Orsay": "the Musee d'Orsay",
  "Neues Museum, Berlin": "the Neues Museum, Berlin",
  "Louvre Museum, Paris": "the Louvre Museum, Paris",
  "Mausoleum of the First Qin Emperor, Xi'an": "the Mausoleum of the First Qin Emperor, Xi'an",
  "National Gallery of Art, Washington, D.C.": "the National Gallery of Art, Washington, D.C.",
  "Scottish National Gallery of Modern Art, Edinburgh": "the Scottish National Gallery of Modern Art, Edinburgh",
  "United Nations Headquarters, New York": "the United Nations Headquarters, New York",
  "Great Salt Lake, Utah": "the Great Salt Lake, Utah",
};

function lookup(map: Readonly<Record<string, string>>, value: string): string {
  return Object.prototype.hasOwnProperty.call(map, value) ? map[value] : value;
}
function name(value: string): string { return lookup(subjectNames, value); }
function term(value: string): string { return lookup(commonTerms, value); }
function place(value: string): string { return lookup(placeNames, value); }
function description(value: string): string { return value.replace(/\.$/, ""); }
function clause(value: string): string {
  // Only used for audited descriptive/functional phrases, never proper names.
  return description(value).replace(/^[A-Z]/, (letter) => letter.toLowerCase());
}
function finish(text: string, context?: string): string {
  const sentence = text.replace(/^[a-z]/, (letter) => letter.toUpperCase());
  return context ? `${sentence} (${context})` : sentence;
}

type Display = { subject?: (value: string) => string; answer?: (value: string) => string };
function wording(question: string, statement: string, blank = statement, display: Display = {}): RelationTemplate {
  const render = (pattern: string, subject: string, answer: string) =>
    pattern.replace(/\{(s|a|be|has|past|belong|share|exemplify|do)\}/g, (_, token: string) => {
      if (token === "s") return (display.subject ?? name)(subject);
      if (token === "a") return answer === "_____" ? answer : (display.answer ?? ((v) => v))(answer);
      if (token === "be") return pluralSubjects.has(subject) ? "are" : "is";
      if (token === "past") return pluralSubjects.has(subject) ? "were" : "was";
      if (token === "belong") return pluralSubjects.has(subject) ? "belong" : "belongs";
      if (token === "share") return pluralSubjects.has(subject) ? "share" : "shares";
      if (token === "exemplify") return pluralSubjects.has(subject) ? "exemplify" : "exemplifies";
      if (token === "do") return pluralSubjects.has(subject) ? "do" : "does";
      return pluralSubjects.has(subject) ? "have" : "has";
    });
  return {
    question: (subject, context) => finish(render(question, subject, ""), context),
    statement: (subject, answer, context) => finish(render(statement, subject, answer), context),
    blank: (subject, context) => finish(render(blank, subject, "_____"), context),
  };
}

function definition(domain?: string): RelationTemplate {
  const context = domain ? ` in ${domain}` : "";
  return wording(`What does “{s}” mean${context}?`, domain ? `In ${domain}, “{s}” means “{a}”.` : `“{s}” means “{a}”.`,
    domain ? `In ${domain}, “{s}” means _____.` : `“{s}” means _____.`, { subject: (s) => s, answer: description });
}
function feature(kind: string, suffix = ""): RelationTemplate {
  // Objects include both noun phrases and full clauses. Quotation preserves
  // their form without mechanically turning every description into a clause.
  return wording(`Which ${kind} characterizes {s}${suffix}?`,
    `One ${kind} of {s}${suffix} is described as “{a}”.`,
    `One ${kind} of {s}${suffix} is _____.`, { subject: (s) => name(term(s)), answer: description });
}
function example(kind: string): RelationTemplate {
  return wording(`Which ${kind} is an example of {s}?`,
    `An example of {s} is “{a}”.`, `An example of {s} is _____.`,
    { subject: term, answer: description });
}
function genre(kind: string): RelationTemplate {
  const label = kind === "music" ? "musical" : kind === "theatre" ? "theatrical" : kind;
  return wording(`What genre of ${kind} is {s}?`, `The ${label} genre of {s} is {a}.`,
    `The ${label} genre of {s} is _____.`, { answer: term });
}
function known(kind: string): RelationTemplate {
  return wording(`Which ${kind} {be} {s} known for?`, `{s} {be} known for {a}.`,
    `{s} {be} known for _____.`, { answer: (a) => name(term(a)) });
}
function representative(profession: string, suffix = ""): RelationTemplate {
  return wording(`Which ${profession} is known for work in {s}${suffix}?`,
    `A ${profession} known for work in {s}${suffix} is {a}.`,
    `A ${profession} known for work in {s}${suffix} is _____.`, { subject: (s) => suffix === " literature" ? lookup(movementNames, s).replace(/^the /, "") : term(s) });
}
function representativeWork(kind: string, suffix: string): RelationTemplate {
  return wording(`Which ${kind} represents {s}${suffix}?`,
    `A representative ${kind} of {s}${suffix} is “{a}”.`,
    `A representative ${kind} of {s}${suffix} is _____.`, { subject: (s) => suffix === " literature" ? lookup(movementNames, s).replace(/^the /, "") : name(s), answer: description });
}

// Explicit verb vocabulary from role records. Unknown shown answers use a
// grammatical quoted-description frame rather than guessed conjugation.
const roleVerbs: Readonly<Record<string, string>> = {
  Secures: "secure", Researches: "research", Moves: "move", Learns: "learn",
  Guides: "guide", Writes: "write", Manages: "manage", Performs: "perform",
  Responsible: "be responsible", Arranges: "arrange", Creates: "create",
  Designs: "design", Helps: "help", Plans: "plan", Operates: "operate",
  Supervises: "supervise", Finds: "find", Shapes: "shape", Coordinates: "coordinate",
  Makes: "make", Sings: "sing", Leads: "lead", Plays: "play", Adapts: "adapt",
};
const roleInfinitives: Readonly<Record<string, string>> = {
  "Coordinates rehearsals and manages backstage operations during performances": "coordinate rehearsals and manage backstage operations during performances",
  "Secures funding and manages the business side of a production": "secure funding and manage the business side of a production",
  "Researches and advises on the text and context of a production": "research and advise on the text and context of a production",
  "Creates and arranges dance or movement for performers": "create and arrange dance or movement for performers",
  "Finds, makes, and manages the objects used by performers on stage": "find, make, and manage the objects used by performers on stage",
  "Finds and manages filming places": "find and manage filming places",
  "Creates and shapes film sounds": "create and shape film sounds",
  "Plays and mixes recorded music for an audience.": "play and mix recorded music for an audience",
  "Leads and trains a group of singers.": "lead and train a group of singers",
};
function role(domain: string): RelationTemplate {
  const label = (subject: string) => {
    const roleName = subject.toLowerCase();
    const article = ["Actor", "Animator", "Art director", "Opera Singer", "Arranger", "Understudy", "Ensemble member"].includes(subject) ? "an" : "a";
    return `${article} ${subject === "DJ" ? "DJ" : roleName}`;
  };
  const template = wording(`What does {s} do in ${domain}?`, "", `In ${domain}, {s} _____.`, { subject: label });
  return {
    ...template,
    statement(subject, answer, context) {
      const match = /^([A-Za-z]+)(.*)$/.exec(description(answer));
      const verb = match ? lookup(roleVerbs, match[1]) : "";
      const infinitive = lookup(roleInfinitives, answer);
      const text = infinitive !== answer
        ? `The role of ${label(subject)} in ${domain} is to ${infinitive}.`
        : match && verb !== match[1]
        ? `The role of ${label(subject)} in ${domain} is to ${verb}${match[2]}.`
        : `The role of ${label(subject)} in ${domain} is described as “${description(answer)}”.`;
      return finish(text, context);
    },
  };
}

// Audited descriptive verb forms: shown answers are formatted before rendering,
// never replaced inside an already-built sentence. Unrecognized clauses retain
// a grammatical quotation frame, including answers from an unrelated pool.
const predicateVerbs: Readonly<Record<string, readonly [string, string]>> = {
  influences: ["influence", "influences"], creates: ["create", "creates"],
  distributes: ["distribute", "distributes"], guides: ["guide", "guides"],
  affects: ["affect", "affects"], allows: ["allow", "allows"],
  reveal: ["reveal", "reveals"], makes: ["make", "makes"],
  changes: ["change", "changes"], preserves: ["preserve", "preserves"],
  provides: ["provide", "provides"], marks: ["mark", "marks"],
  communicates: ["communicate", "communicates"], adds: ["add", "adds"],
  determines: ["determine", "determines"], shows: ["show", "shows"],
  pulls: ["pull", "pulls"], shapes: ["shape", "shapes"],
};
const pluralPredicates: Readonly<Record<string, string>> = {
  "preserves or communicates a person's likeness, identity, status, or memory": "preserve or communicate a person's likeness, identity, status, or memory",
  "preserves or celebrates the memory of a person, event, achievement, or idea": "preserve or celebrate the memory of a person, event, achievement, or idea",
  "marks burials, honors the dead, or expresses beliefs about death and the afterlife": "mark burials, honor the dead, or express beliefs about death and the afterlife",
  "Shapes mood, reveals texture, and changes the perception of space": "shape mood, reveal texture, and change the perception of space",
};
function effect(domain: string, question: string): RelationTemplate {
  const base = wording(question, "", `In ${domain}, {s} _____.`, { subject: term });
  return {
    ...base,
    statement(subject, answer, context) {
      const text = clause(answer);
      const match = /^([a-z]+)(.*)$/.exec(text);
      const forms = match && Object.prototype.hasOwnProperty.call(predicateVerbs, match[1])
        ? predicateVerbs[match[1]] : undefined;
      const pluralClause = lookup(pluralPredicates, answer);
      return finish(pluralSubjects.has(subject) && pluralClause !== answer
        ? `In ${domain}, ${term(subject)} ${pluralClause}.`
        : forms && match
        ? `In ${domain}, ${term(subject)} ${forms[pluralSubjects.has(subject) ? 0 : 1]}${match[2]}.`
        : `In ${domain}, the effect of ${term(subject)} is described as “${description(answer)}”.`, context);
    },
  };
}

const surfaceArticles: Readonly<Record<string, string>> = { "wood panel": "a wood panel" };
const paintingClasses: Readonly<Record<string, string>> = {
  portrait: "a portrait", "religious painting": "a religious painting",
  landscape: "a landscape", "mythological painting": "a mythological painting",
  "still life": "a still life", "history painting": "a history painting",
  "marine painting": "a marine painting",
};
const instrumentClasses: Readonly<Record<string, string>> = {
  "String instrument": "a string instrument", "Keyboard instrument": "a keyboard instrument",
  "Percussion instrument": "a percussion instrument", "Brass instrument": "a brass instrument",
  "Woodwind instrument": "a woodwind instrument", "Electronic instrument": "an electronic instrument",
  "Wind instrument": "a wind instrument", "Vocal instrument": "a vocal instrument",
};
const instrumentTemplate: RelationTemplate = {
  ...wording("What type of instrument {be} {s}?", "", "{s} {be} _____.", { subject: (s) => lookup(instruments, s) }),
  statement(subject, answer, context) {
    const formatted = lookup(instrumentClasses, answer);
    const classification = subject === "Drums" && formatted !== answer
      ? formatted.replace(/^(a|an) /, "") + "s" : formatted;
    const label = lookup(instruments, subject);
    const be = pluralSubjects.has(subject) ? "are" : "is";
    return finish(formatted === answer
      ? `${label} ${be} classified as “${description(answer)}”.`
      : `${label} ${be} ${classification}.`, context);
  },
};

const movementNames: Readonly<Record<string, string>> = {
  renaissance: "the Renaissance", Renaissance: "the Renaissance",
  romanticism: "Romanticism", realism: "Realism", naturalism: "Naturalism",
  symbolism: "Symbolism", modernism: "Modernism", postmodernism: "Postmodernism",
  existentialism: "Existentialism", surrealism: "Surrealism", "magical realism": "magical realism",
  gothic: "Gothic literature", "beat generation": "the Beat Generation",
  "harlem renaissance": "the Harlem Renaissance", neoclassicism: "Neoclassicism",
  transcendentalism: "Transcendentalism", absurdism: "Absurdism",
  "victorian realism": "Victorian realism", expressionism: "Expressionism",
};
function movementName(value: string): string { return lookup(movementNames, value); }
const instrumentMusician: RelationTemplate = {
  question: (subject, context) => finish(subject === "Voice"
    ? "Which singer is known for vocal performances?"
    : `Which musician is known for playing ${lookup(instruments, subject)}?`, context),
  statement: (subject, answer, context) => finish(subject === "Voice"
    ? `A singer known for vocal performances is ${answer}.`
    : `A musician known for playing ${lookup(instruments, subject)} is ${answer}.`, context),
  blank: (subject, context) => finish(subject === "Voice"
    ? "A singer known for vocal performances is _____."
    : `A musician known for playing ${lookup(instruments, subject)} is _____.`, context),
};

export const explicitRelationTemplates: Readonly<Record<string, RelationTemplate>> = {
  painted_by: wording("Who painted {s}?", "{s} was painted by {a}."),
  sculptor_of_sculpture: wording("Which creator or attribution is recorded for {s}?", "The creator or attribution recorded for {s} is “{a}”.", "The creator or attribution recorded for {s} is _____.", { answer: description }),
  architect_of_building: wording("Who designed {s}?", "{s} {past} designed by {a}."),
  artist_of_song: wording("Which artist is linked to {s}?", "The artist linked to {s} is {a}.", "The artist linked to {s} is _____."),
  actor_of_character: wording("Who played {s}?", "{s} was played by {a}."),
  author_of_character: wording("Which author created the character {s}?", "The author who created the character {s} is {a}."),
  author_of_quote: wording("Who is the author behind the excerpt or paraphrase “{s}”?", "The excerpt or paraphrase “{s}” comes from writing by {a}.", "The author behind the excerpt or paraphrase “{s}” is _____.", { subject: (s) => s }),
  book_of_character: wording("In which work does the character {s} appear?", "The character {s} appears in {a}."),
  character_of_book: wording("In which work does the character {s} appear?", "The character {s} appears in {a}."),
  book_of_quote: wording("Which work is the source of the excerpt or paraphrase “{s}”?", "The excerpt or paraphrase “{s}” comes from {a}.", "The excerpt or paraphrase “{s}” comes from _____.", { subject: (s) => s }),
  quote_of_book: wording("Which work is the source of the excerpt or paraphrase “{s}”?", "The excerpt or paraphrase “{s}” comes from {a}.", "The excerpt or paraphrase “{s}” comes from _____.", { subject: (s) => s }),
  character_of_movie: wording("Which character appears in {s}?", "{s} features the character {a}."),
  famous_quote_of_character: wording("Which line is associated with {s}?", "A line associated with {s} is “{a}”.", "A line associated with {s} is _____.", { answer: description }),
  city_of_museum: wording("In which city is {s} housed?", "{s} is housed in the city of {a}."),
  country_of_museum: wording("In which country {be} {s} housed?", "{s} {be} housed in {a}.", "{s} {be} housed in {a}.", { answer: place }),
  country_of_award_or_festival: wording("Which country or region is linked to {s}?", "{s} {be} linked to {a}.", "{s} {be} linked to {a}.", { answer: place }),
  characteristic_of_civilization_architecture: feature("architectural feature", " architecture"),
  characteristic_of_civilization_sculpture: wording("Which sculptural characteristic is exemplified by {s}?", "{s} {exemplify} the characteristic “{a}”.", "{s} {exemplify} the characteristic _____.", { answer: description }),
  example_of_sculpture_from_civilization: wording("Which other sculpture belongs to the cultural tradition represented by {s}?", "{s} and “{a}” belong to the same cultural tradition.", "{s} {share} a cultural tradition with _____.", { answer: description }),
  example_of_architecture_from_civilization: wording("Which landmark exemplifies {s} architecture?", "A landmark exemplifying {s} architecture is {a}."),
  example_of_architectural_element: wording("Which structure is an example of {s}?", "An example of {s} is “{a}”.", "An example of {s} is _____.", { subject: (s) => `the architectural element “${term(s)}”`, answer: description }),
  example_of_technique: wording("Which film provides an example of {s}?", "A film providing an example of {s} is “{a}”.", "A film providing an example of {s} is _____.", { subject: term, answer: description }),
  famous_musician_of_instrument: instrumentMusician,
  material_used_in_sculpture_technique: wording("Which material is used in {s}?", "{s} uses {a}.", "{s} uses {a}.", { subject: term }),
  medium_of: wording("Which medium was used to create {s}?", "The medium used to create {s} is {a}."),
  surface_of: wording("What surface was {s} painted on?", "{s} was painted on {a}.", "{s} was painted on {a}.", { answer: (a) => lookup(surfaceArticles, a) }),
  depicts: wording("What does {s} depict?", "{s} depicts {a}."),
  symbolizes: wording("What does {s} symbolize?", "{s} symbolizes {a}."),
  historical_context_of: wording("Which historical context is linked to {s}?", "A historical context linked to {s} is “{a}”.", "A historical context linked to {s} is _____.", { answer: description }),
  influenced_by_movement: wording("Which movement or tradition influenced {s}?", "{s} was influenced by {a}."),
  reaction_against: wording("What did {s} react against?", "{s} reacted against {a}.", "{s} reacted against {a}.", { answer: clause }),
  associated_with_artist: wording("Which artist is associated with {s}?", "{s} is associated with the artist {a}."),
  origin_of_movement: wording("Where did {s} originate?", "{s} originated in {a}.", "{s} originated in {a}.", { subject: movementName, answer: place }),
  created_in_year: wording("Which year is recorded for the creation of {s}?", "The year recorded for the creation of {s} is {a}.", "The year recorded for the creation of {s} is _____."),
  created_in_decade: wording("In which decade {past} {s} designed?", "{s} {past} designed in the {a}."),
  published_in_year: wording("In which year was {s} published?", "{s} was published in {a}."),
  release_year_of_movie: wording("In which year was {s} released?", "{s} was released in {a}."),
  year_of_song: wording("Which year is linked to {s}?", "The year linked to {s} is {a}.", "The year linked to {s} is _____."),
  founded_decade_of_award_or_festival: wording("In which decade did {s} begin?", "{s} began in the {a}."),
  period_or_year_of_building: wording("Which date or period describes the construction of {s}?", "The construction timeline of {s} is described as “{a}”.", "The construction timeline of {s} is described as _____.", { answer: description }),
  period_or_year_of_play: wording("Which date or period is linked to {s}?", "The date or period linked to {s} is {a}.", "The date or period linked to {s} is _____."),
  period_or_year_of_sculpture: wording("When was {s} created?", "The creation date or period of {s} is {a}.", "The creation date or period of {s} is _____."),
  period_of_movement: wording("Which period is linked to {s}?", "The period linked to {s} is {a}.", "The period linked to {s} is _____.", { subject: movementName }),
  function_or_feature_of_sculpture: effect("sculpture", "What role {do} {s} play in sculpture?"),
  function_of_product: wording("What {be} {s} used for?", "{s} {be} used for {a}.", "{s} {be} used for _____.", { answer: clause }),
  purpose_of_design_principle: wording("Why is {s} used in design?", "The purpose of {s} in design is {a}.", "The purpose of {s} in design is _____.", { subject: term, answer: clause }),
  visual_effect_of_design_principle: effect("architecture", "What visual effect does {s} create in architecture?"),
  role_in_filmmaking: role("filmmaking"),
  role_in_theatre: role("theatre"),
  role_of_music_person: role("music"),
};

const semanticFamilies = {
  designer: wording("Who designed {s}?", "{s} {past} designed by {a}."),
  writer: wording("Who wrote {s}?", "{s} was written by {a}."),
  director: wording("Who directed {s}?", "{s} was directed by {a}."),
  location: wording("Where {be} {s} located?", "{s} {be} located in {a}.", "{s} {be} located in {a}.", { answer: place }),
  sculptureLocation: wording("Where {be} {s} located?", "The location of {s} is {a}.", "The location of {s} is _____.", { answer: place }),
  collection: wording("Where {be} {s} housed?", "{s} {be} housed in {a}.", "{s} {be} housed in {a}.", { answer: place }),
  residence: wording("Where did {s} live?", "{s} lived in {a}."),
  commission: wording("Who commissioned {s}?", "{s} was commissioned by {a}."),
  example: example("option"),
  sculptureTechniqueExample: wording("Which sculpture was created using {s}?", "A sculpture created using {s} is “{a}”.", "A sculpture created using {s} is _____.", { subject: term, answer: description }),
  characteristic: feature("characteristic"),
  culture: wording("Which civilization or cultural tradition produced {s}?", "{s} {belong} to the {a} tradition.", "{s} {belong} to the _____ tradition."),
  artStyle: wording("Which artistic style does {s} exemplify?", "The artistic style of {s} is {a}.", "The artistic style of {s} is _____."),
  genreOrStyle: known("literary genre or style"),
  movement: wording("Which artistic tradition is reflected in the work of {s}?", "The work of {s} reflects {a}.", "The work of {s} reflects _____.", { answer: movementName }),
  designMovement: wording("Which design movement does {s} exemplify?", "{s} exemplifies {a} design.", "{s} exemplifies _____ design."),
  nationality: wording("What is the nationality of {s}?", "{s} {be} {a}.", "The nationality of {s} is _____."),
  background: wording("What national or cultural background is recorded for {s}?", "The national or cultural background recorded for {s} is {a}.", "The national or cultural background recorded for {s} is _____."),
  knownWork: known("work"),
  knownStyle: known("style or approach"),
  representativePerson: representative("writer", " literature"),
  representativeWork: representativeWork("literary work", " literature"),
  designType: wording("Which design category best describes {s}?", "{s} is an example of {a}.", "{s} is an example of _____.", { answer: term }),
  designStyle: wording("Which style or design category best describes {s}?", "The style or design category of {s} is {a}.", "The style or design category of {s} is _____.", { answer: term }),
  instrumentType: instrumentTemplate,
  prize: wording("Which major prize or award category is linked to {s}?", "A major prize or award category linked to {s} is {a}.", "A major prize or award category linked to {s} is _____."),
  theme: wording("Which theme is associated with {s}?", "A theme associated with {s} is {a}."),
  artTechnique: wording("Which technique was used in {s}?", "A technique used in {s} is {a}."),
  definitionArchitecture: definition("architecture"),
  definitionDesign: definition("design"),
  definitionFilmmaking: definition("filmmaking"),
  definitionGenres: wording("Which description defines the genre “{s}”?", "The genre “{s}” is defined as “{a}”.", "The genre “{s}” is defined as _____.", { subject: term, answer: description }),
  definitionMusic: definition("music"),
  definitionTheatre: definition("theatre"),
  definitionSculpture: definition("sculpture"),
  definitionSinging: definition("singing"),
  filmGenre: genre("film"),
  paintingGenre: wording("What genre of painting {be} {s}?", "{s} {be} {a}.", "{s} {be} a _____.", { answer: (a) => lookup(paintingClasses, a) === a ? `classified in the genre “${description(a)}”` : lookup(paintingClasses, a) }),
  playGenre: genre("theatre"),
  musicGenre: genre("music"),
  bookClassification: wording("Which literary genre or classification describes {s}?", "A literary genre or classification of {s} is {a}.", "A literary genre or classification of {s} is _____.", { answer: term }),
  architecturalFeature: feature("architectural feature"),
  designFeature: feature("design feature"),
  sculpturalFeature: feature("sculptural feature"),
  fieldFocus: wording("What is the focus of {s}?", "The focus of {s} is described as “{a}”.", "The focus of {s} is _____.", { subject: term, answer: description }),
  genreFeature: feature("characteristic"),
  productFeature: feature("material or design feature"),
  artistStyle: wording("Which feature characterizes the artistic style of {s}?", "The artistic style of {s} is characterized by {a}.", "The artistic style of {s} is characterized by _____."),
  visualFeature: feature("visual feature"),
  elementAppearance: wording("What does {s} look like?", "The appearance of {s} is described as “{a}”.", "The appearance of {s} is _____.", { subject: (s) => `the architectural element “${term(s)}”`, answer: description }),
  architectureExample: example("building"),
  sculptureExample: example("sculpture"),
  playExample: example("play"),
  workExample: example("work"),
  scenarioExample: example("situation"),
  knownBuilding: known("building"),
  knownDesign: known("design"),
  knownMusic: known("musical work"),
  knownField: known("design field or style"),
  knownGenre: wording("Which musical genre {be} {s} known for?", "{s} {be} known for {a}.", "{s} {be} known for _____.", { answer: (a) => a === "Classical" ? "classical music" : term(a) }),
  knownTheatreStyle: known("theatrical style or genre"),
  knownSculptureStyle: known("sculptural style or period"),
  genreArtist: representative("musician or group", " music"),
  genreAuthor: representative("writer"),
  fieldDesigner: representative("designer"),
  genreDirector: representative("film director", " films"),
  genrePlaywright: representative("playwright"),
  movementMusician: wording("Which musician or group represents {s} in music?", "A musician or group representing {s} in music is {a}.", "A musician or group representing {s} in music is _____."),
  movementArtist: representative("artist", " art"),
  movementDesigners: wording("Which designers are notable figures in {s}?", "Notable designers in {s} include {a}.", "Notable designers in {s} include _____."),
  representativeFilm: representativeWork("film", ""),
  representativePlay: representativeWork("play", ""),
};

// Each assignment reflects audited subject/object semantics.
export const relationFamilies: Readonly<Record<string, keyof typeof semanticFamilies>> = {
  designed_by: "designer",
  designer_of_interior_or_identity: "designer",
  designer_of_product: "designer",
  designer_of_visual_work: "designer",
  written_by: "writer",
  playwright_of_play: "writer",
  director_of_movie: "director",
  location_of_building: "location",
  location_of_sculpture: "sculptureLocation",
  housed_in: "collection",
  lived_in: "residence",
  commissioned_by: "commission",
  definition_of_architectural_element: "definitionArchitecture",
  definition_of_architectural_style: "definitionArchitecture",
  definition_of_design_principle: "definitionDesign",
  definition_of_film_term: "definitionFilmmaking",
  definition_of_genre: "definitionGenres",
  definition_of_instrument_type: "definitionMusic",
  definition_of_music_structure_term: "definitionMusic",
  definition_of_music_term: "definitionMusic",
  definition_of_performance_term: "definitionTheatre",
  definition_of_pitch_term: "definitionMusic",
  definition_of_rhythm_term: "definitionMusic",
  definition_of_sculpture_form: "definitionSculpture",
  definition_of_sculpture_style: "definitionSculpture",
  definition_of_sculpture_technique: "definitionSculpture",
  definition_of_sculpture_term: "definitionSculpture",
  definition_of_stagecraft_term: "definitionTheatre",
  definition_of_theatre_genre: "definitionTheatre",
  definition_of_theatre_term: "definitionTheatre",
  definition_of_vocal_term: "definitionSinging",
  example_of_architectural_style: "architectureExample",
  example_of_design_field: "example",
  example_of_design_principle: "example",
  example_of_genre: "workExample",
  example_of_sculpture_style: "sculptureExample",
  example_of_stage_or_performance_element: "scenarioExample",
  example_of_theatre_element: "scenarioExample",
  example_of_theatre_genre: "playExample",
  example_of_sculpture_technique: "sculptureTechniqueExample",
  characteristic_of_architectural_style: "architecturalFeature",
  characteristic_of_interior_or_identity: "designFeature",
  characteristic_of_movement: "characteristic",
  characteristic_of_sculpture_style: "sculpturalFeature",
  core_feature_of_design_field: "fieldFocus",
  core_feature_of_genre: "genreFeature",
  material_or_design_feature_of_product: "productFeature",
  signature_style: "artistStyle",
  visual_characteristic_of: "visualFeature",
  visual_feature_of_architectural_element: "elementAppearance",
  civilization_or_culture_of_landmark: "culture",
  civilization_or_culture_of_sculpture: "culture",
  genre_of_book: "bookClassification",
  genre_of_movie: "filmGenre",
  genre_of_painting: "paintingGenre",
  genre_of_play: "playGenre",
  genre_of_song: "musicGenre",
  art_style: "artStyle",
  genre_or_style_of_author: "genreOrStyle",
  movement_of: "movement",
  movement_of_artist: "movement",
  movement_of_design: "designMovement",
  nationality_of_architect: "background",
  nationality_of_artist: "nationality",
  nationality_of_author: "nationality",
  nationality_of_designer: "nationality",
  nationality_of_director: "nationality",
  nationality_of_musician: "background",
  nationality_of_playwright: "background",
  nationality_of_sculptor: "background",
  known_for: "knownWork",
  known_for_book: "knownWork",
  known_for_building: "knownBuilding",
  known_for_design: "knownDesign",
  known_for_movie: "knownWork",
  known_for_play: "knownWork",
  known_for_sculpture: "knownWork",
  known_for_song: "knownMusic",
  known_for_field_or_style: "knownField",
  known_for_genre: "knownGenre",
  known_for_style: "knownStyle",
  known_for_style_or_genre: "knownTheatreStyle",
  known_for_style_or_period: "knownSculptureStyle",
  famous_artist_of_genre: "genreArtist",
  famous_author_of_genre: "genreAuthor",
  famous_designer_of_field: "fieldDesigner",
  famous_director_of_genre: "genreDirector",
  famous_playwright_of_genre: "genrePlaywright",
  main_artist_of_movement: "movementMusician",
  main_artists_of_movement: "movementArtist",
  main_authors_of_movement: "representativePerson",
  main_designers_of_movement: "movementDesigners",
  famous_book_of_movement: "representativeWork",
  main_movie_of_movement: "representativeFilm",
  main_play_of_movement: "representativePlay",
  type_of_design: "designType",
  type_of_visual_design: "designType",
  style_or_type_of_design: "designStyle",
  type_of_instrument: "instrumentType",
  top_prize_of_award_or_festival: "prize",
  theme_of: "theme",
  technique_of: "artTechnique",
};

// Advisory only: generation/correctness mechanics intentionally do not consult
// this map. Wording cannot certify that a substituted answer is false. The same
// caution applies to other examples, interpretations, genres, and known-for facts.
export const deferredRelationSemantics: Readonly<Record<string, string>> = {
  artist_of_song: "Composer and performer associations require record-level roles.",
  year_of_song: "Composition, premiere, album release, and single release are not distinguished.",
  created_in_year: "Creation start and completion are not distinguished.",
  period_or_year_of_building: "Construction start, completion, and ranges coexist.",
  period_or_year_of_play: "Writing, publication, and first performance are not distinguished.",
  period_of_movement: "Domains and chronological scopes overlap.",
  associated_with_artist: "Collaboration, personal ties, and artistic associations are not distinguished.",
  origin_of_movement: "Country and region answers overlap geographically.",
  material_used_in_sculpture_technique: "Technique names reveal materials; some techniques support multiple materials.",
  sculptor_of_sculpture: "Attributions, unknown creators, teams, and answer-revealing titles coexist.",
  book_of_character: "Recurring characters can appear in multiple works; some titles reveal answers.",
  character_of_book: "Character-to-work direction is known, but work membership is not exclusive.",
  character_of_movie: "Films have multiple characters and some titles reveal the answer.",
  author_of_quote: "Stored text may be a normalized excerpt or paraphrase, not a verbatim quote.",
  book_of_quote: "Stored excerpts/paraphrases require source validation.",
  quote_of_book: "Excerpt-to-work direction is known; exact quotation is not guaranteed.",
  nationality_of_architect: "Modern nationality and ancient or imperial affiliation coexist.",
  nationality_of_playwright: "Modern nationality and ancient cultural affiliation coexist.",
  nationality_of_sculptor: "Modern nationality and ancient cultural affiliation coexist.",
  nationality_of_musician: "Individuals and groups have different nationality/origin semantics.",
  characteristic_of_movement: "Movement labels and features vary across disciplines and can overlap.",
  genre_of_book: "Genres, literary movements, and status labels overlap.",
  main_authors_of_movement: "Multiple authors are explicitly valid for the same movement.",
  example_of_design_principle: "Buildings and scenarios can illustrate multiple principles.",
  example_of_design_field: "Design fields overlap; examples are not exclusive.",
  example_of_architectural_element: "A structure can contain multiple architectural elements.",
  example_of_technique: "A film can use multiple techniques.",
  historical_context_of: "Creation settings, depicted events, periods, and institutional contexts coexist.",
  type_of_design: "Design categories have overlapping levels of specificity.",
  definition_of_design_principle: "Multiple compatible definitions and domains coexist.",
};

const fallback = wording("Which option correctly relates to {s}?", "{s} is associated with {a}.");
export function hasRelationTemplate(relation: string): boolean {
  return Object.prototype.hasOwnProperty.call(explicitRelationTemplates, relation) ||
    Object.prototype.hasOwnProperty.call(relationFamilies, relation);
}
export function getRelationTemplate(relation: string): RelationTemplate {
  if (Object.prototype.hasOwnProperty.call(explicitRelationTemplates, relation)) return explicitRelationTemplates[relation];
  if (Object.prototype.hasOwnProperty.call(relationFamilies, relation)) return semanticFamilies[relationFamilies[relation]];
  return fallback;
}
export function renderPrompt(concept: Concept): RenderedPrompt {
  const template = getRelationTemplate(concept.relation);
  return { prompt: template.question(concept.subject, concept.context), answerText: concept.object,
    sentence: template.statement(concept.subject, concept.object, concept.context) };
}
