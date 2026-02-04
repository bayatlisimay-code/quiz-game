// data/catalog.ts

export type Catalog = {
  topics: Topic[];
};

export type Topic = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  subtopics: Subtopic[];
};

export type Subtopic = {
  id: string;
  title: string;
  levels: Level[];
};

export type Level = {
  id: string; // "1"..."10"
  title: string;
  parts: Part[];
};

export type Part = {
  id: string; // "1"..."5"
  title: string;
  questionSetId: string;
};

/**
 * Mastery labels (used for grouping levels in the UI)
 */
export const masteryLevels = [
  { label: "Explorer", from: 1, to: 3 },
  { label: "Thinker", from: 4, to: 6 },
  { label: "Mastermind", from: 7, to: 9 },
  { label: "Oracle", from: 10, to: 10 },
];

export function getMasteryLabel(levelId: string) {
  const level = Number(levelId);
  return masteryLevels.find((m) => level >= m.from && level <= m.to)?.label;
}

/**
 * 5 parts per level
 * questionSetId format is stable and predictable
 */
function makeParts(topicId: string, subtopicId: string, levelId: string): Part[] {
  return [
    { id: "1", title: "Part 1", questionSetId: `${topicId}_${subtopicId}_l${levelId}_p1` },
    { id: "2", title: "Part 2", questionSetId: `${topicId}_${subtopicId}_l${levelId}_p2` },
    { id: "3", title: "Part 3", questionSetId: `${topicId}_${subtopicId}_l${levelId}_p3` },
    { id: "4", title: "Part 4", questionSetId: `${topicId}_${subtopicId}_l${levelId}_p4` },
    { id: "5", title: "Part 5", questionSetId: `${topicId}_${subtopicId}_l${levelId}_p5` },
  ];
}

/**
 * 10 levels per subtopic
 */
function makeLevels(topicId: string, subtopicId: string): Level[] {
  const ids = ["1","2","3","4","5","6","7","8","9","10"];
  return ids.map((id) => ({
    id,
    title: `Level ${id}`,
    parts: makeParts(topicId, subtopicId, id),
  }));
}

function slug(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[/]/g, " ")
    .replace(/[:]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function makeSubtopic(topicId: string, title: string): Subtopic {
  const id = slug(title);
  return {
    id,
    title,
    levels: makeLevels(topicId, id),
  };
}

/**
 * =========================
 * TOPICS (final list)
 * =========================
 * Note: We intentionally flatten any deeper nesting into single subtopic titles
 * because the app structure is Topic -> Subtopic -> Level -> Part.
 */
export const TOPICS: Topic[] = [
  {
    id: "science",
    title: "Science",
    emoji: "🔬",
    color: "#22C55E",
    subtopics: [
      "Geography",
      "Psychology",
      "Chemistry",
      "Physics",
      "Astronomy",
      "Biology",
      "Technology",
      "Economics",
      "Mathematics",
    ].map((t) => makeSubtopic("science", t)),
  },

  {
    id: "art",
    title: "Art",
    emoji: "🎨",
    color: "#A855F7",
    subtopics: [
      "Literature",
      "Painting",
      "Sculpture",
      "Architecture",
      "Music",
      "Theatre",
      "Design",
      "Movies",
    ].map((t) => makeSubtopic("art", t)),
  },

  {
    id: "history",
    title: "History",
    emoji: "🏛️",
    color: "#F59E0B",
    subtopics: [
      // Prehistory
      "Prehistory – Stone Age",
      "Prehistory – Bronze Age",
      "Prehistory – Iron Age",

      // Ancient History
      "Ancient History – Classical Age",
      "Ancient History – Hellenistic Period",

      // The Middle Ages
      "Middle Ages – Early",
      "Middle Ages – High",
      "Middle Ages – Late",

      // Early Modern Era
      "Early Modern Era – Renaissance",
      "Early Modern Era – Age of Discovery",

      // Modern Era
      "Modern Era – Industrial Revolution",
      "Modern Era – 20th Century to Present",
    ].map((t) => makeSubtopic("history", t)),
  },

  {
    id: "philosophy",
    title: "Philosophy",
    emoji: "💭",
    color: "#3B82F6",
    subtopics: [
      "Metaphysics",
      "Epistemology",
      "Logic",
      "Ethics",
      "Aesthetics",
      "Political Philosophy",
    ].map((t) => makeSubtopic("philosophy", t)),
  },

  {
    id: "sports",
    title: "Sports",
    emoji: "🏅",
    color: "#EF4444",
    subtopics: [
      // Team sports
      "Team Sports – Basketball",
      "Team Sports – Football",
      "Team Sports – Volleyball",
      "Team Sports – Cricket",
      "Team Sports – Baseball",
      "Team Sports – Rugby",
      "Team Sports – Hockey",
      "Team Sports – American Football",

      // Individual sports
      "Individual Sports – Golf",
      "Individual Sports – Figure Skating",
      "Individual Sports – Swimming",
      "Individual Sports – Cycling",
      "Individual Sports – Gymnastics",
      "Individual Sports – Athletics",
      "Individual Sports – Skiing & Snowboarding",

      // Dual sports
      "Dual Sports – Tennis",
      "Dual Sports – Boxing",
      "Dual Sports – Wrestling",

      // Motorsports
      "Motorsports – Formula 1",
      "Motorsports – MotoGP",
      "Motorsports – NASCAR",
      "Motorsports – Rally Raid",
    ].map((t) => makeSubtopic("sports", t)),
  },
];

export const TOPIC_BY_ID: Record<string, Topic> = Object.fromEntries(
  TOPICS.map((t) => [t.id, t])
);

export const CATALOG: Catalog = {
  topics: TOPICS,
};
