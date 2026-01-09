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
  id: string; // "1" | "2" | "3" (string for routing)
  title: string;
  parts: Part[];
};

export type Part = {
  id: string; // "1" | "2" | "3" | "4"
  title: string;
  questionSetId: string;
};

function makeParts(topicId: string, subtopicId: string, levelId: string): Part[] {
  return [
    { id: "1", title: "Part 1", questionSetId: `${topicId}_${subtopicId}_l${levelId}_p1` },
    { id: "2", title: "Part 2", questionSetId: `${topicId}_${subtopicId}_l${levelId}_p2` },
    { id: "3", title: "Part 3", questionSetId: `${topicId}_${subtopicId}_l${levelId}_p3` },
    { id: "4", title: "Part 4", questionSetId: `${topicId}_${subtopicId}_l${levelId}_p4` },
  ];
}

function makeLevels(topicId: string, subtopicId: string): Level[] {
  return [
    { id: "1", title: "Level 1", parts: makeParts(topicId, subtopicId, "1") },
    { id: "2", title: "Level 2", parts: makeParts(topicId, subtopicId, "2") },
    { id: "3", title: "Level 3", parts: makeParts(topicId, subtopicId, "3") },
  ];
}

export const TOPICS: Topic[] = [
  {
    id: "science",
    title: "Science",
    emoji: "🧪",
    color: "#3B82F6",
    subtopics: [
      { id: "physics", title: "Physics", levels: makeLevels("science", "physics") },
      { id: "chemistry", title: "Chemistry", levels: makeLevels("science", "chemistry") },
      { id: "biology", title: "Biology", levels: makeLevels("science", "biology") },
      { id: "astronomy", title: "Astronomy", levels: makeLevels("science", "astronomy") },
      { id: "geography", title: "Geography", levels: makeLevels("science", "geography") },
      { id: "psychology", title: "Psychology", levels: makeLevels("science", "psychology") },
      { id: "technology", title: "Technology", levels: makeLevels("science", "technology") },
      { id: "mathematics", title: "Mathematics", levels: makeLevels("science", "mathematics") },
    ],
  },
  {
    id: "art",
    title: "Art",
    emoji: "🎨",
    color: "#A855F7",
    subtopics: [
      { id: "painting", title: "Painting", levels: makeLevels("art", "painting") },
      { id: "music", title: "Music", levels: makeLevels("art", "music") },
      { id: "literature", title: "Literature", levels: makeLevels("art", "literature") },
      { id: "movies", title: "Movies", levels: makeLevels("art", "movies") },
      { id: "architecture", title: "Architecture", levels: makeLevels("art", "architecture") },
    ],
  },
  {
    id: "history",
    title: "History",
    emoji: "🏛️",
    color: "#F97316",
    subtopics: [
      // Period-based
      { id: "prehistory", title: "Prehistory", levels: makeLevels("history", "prehistory") },
      { id: "ancient", title: "Ancient", levels: makeLevels("history", "ancient") },
      { id: "classical_age", title: "Classical Age", levels: makeLevels("history", "classical_age") },
      { id: "medieval", title: "Medieval", levels: makeLevels("history", "medieval") },
      { id: "early_modern", title: "Early Modern", levels: makeLevels("history", "early_modern") },
      { id: "modern", title: "Modern", levels: makeLevels("history", "modern") },
      { id: "contemporary", title: "Contemporary", levels: makeLevels("history", "contemporary") },

      // Geography-based
      { id: "middle_east", title: "Middle East", levels: makeLevels("history", "middle_east") },
      { id: "europe", title: "Europe", levels: makeLevels("history", "europe") },
      { id: "asia", title: "Asia", levels: makeLevels("history", "asia") },
      { id: "americas", title: "Americas", levels: makeLevels("history", "americas") },
      { id: "africa", title: "Africa", levels: makeLevels("history", "africa") },
    ],
  },
  {
    id: "philosophy",
    title: "Philosophy",
    emoji: "🧠",
    color: "#22C55E",
    subtopics: [
      { id: "ethics", title: "Ethics", levels: makeLevels("philosophy", "ethics") },
      { id: "metaphysics", title: "Metaphysics", levels: makeLevels("philosophy", "metaphysics") },
      { id: "epistemology", title: "Epistemology", levels: makeLevels("philosophy", "epistemology") },
      { id: "logic", title: "Logic", levels: makeLevels("philosophy", "logic") },
      { id: "aesthetics", title: "Aesthetics", levels: makeLevels("philosophy", "aesthetics") },
      {
        id: "political_philosophy",
        title: "Political Philosophy",
        levels: makeLevels("philosophy", "political_philosophy"),
      },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    emoji: "🏅",
    color: "#EF4444",
    subtopics: [
      { id: "football", title: "Football", levels: makeLevels("sports", "football") },
      { id: "basketball", title: "Basketball", levels: makeLevels("sports", "basketball") },
      { id: "tennis", title: "Tennis", levels: makeLevels("sports", "tennis") },
      { id: "volleyball", title: "Volleyball", levels: makeLevels("sports", "volleyball") },
      { id: "swimming", title: "Swimming", levels: makeLevels("sports", "swimming") },
      { id: "formula_1", title: "Formula 1", levels: makeLevels("sports", "formula_1") },
      { id: "athletics", title: "Athletics", levels: makeLevels("sports", "athletics") },
      { id: "gymnastics", title: "Gymnastics", levels: makeLevels("sports", "gymnastics") },
      { id: "weightlifting", title: "Weightlifting", levels: makeLevels("sports", "weightlifting") },
    ],
  },
];

export const TOPIC_BY_ID: Record<string, Topic> = Object.fromEntries(
  TOPICS.map((t) => [t.id, t])
);

export const CATALOG: Topic[] = TOPICS;