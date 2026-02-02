import fs from "fs";
import path from "path";

const projectRoot = process.cwd();
const setsRoot = path.join(projectRoot, "data", "questionBank", "sets");
const outFile = path.join(projectRoot, "data", "questionSets.ts");

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function normalizeSlashes(p) {
  return p.split(path.sep).join("/");
}

function makeIdFromRel(rel) {
  const parts = rel.replace(/\.json$/i, "").split("/");
  const topic = parts[0];

// everything between topic and lX is subtopic path
const levelIndex = parts.findIndex((x) => /^l\d+$/i.test(x));
const subtopicParts = parts.slice(1, levelIndex);
const subtopic = subtopicParts.join("-");
  const levelPart = parts.find((x) => /^l\d+$/i.test(x)) ?? "";
  const partPart  = parts.find((x) => /^p\d+$/i.test(x)) ?? "";
  const quizPart  = parts[parts.length - 1];
  return [topic, subtopic, levelPart.toLowerCase(), partPart.toLowerCase(), quizPart].join("_");
}

const allFiles = walk(setsRoot);
const jsonFiles = allFiles
  .filter((f) => f.toLowerCase().endsWith(".json"))
  .map((abs) => ({
    abs,
    relFromSets: normalizeSlashes(path.relative(setsRoot, abs)),
  }))
  .sort((a, b) => a.relFromSets.localeCompare(b.relFromSets));

const lines = [];
lines.push("/* AUTO-GENERATED FILE. DO NOT EDIT BY HAND. */");
lines.push("/* Run: node scripts/generate-questionSets.mjs */");
lines.push("");
lines.push("export type QuestionSet = any;");
lines.push("");
lines.push("export const QUESTION_SETS: Record<string, () => QuestionSet> = {");

for (const f of jsonFiles) {
  const id = makeIdFromRel(f.relFromSets);
  const requirePath = "./questionBank/sets/" + f.relFromSets;
  lines.push(`  "${id}": () => require("${requirePath}"),`);
}

lines.push("};");
lines.push("");
lines.push("export function getQuestionSet(id: string): QuestionSet {");
lines.push("  const loader = QUESTION_SETS[id];");
lines.push('  if (!loader) throw new Error(`Unknown questionSetId: ${id}`);');
lines.push("  const mod = loader();");
lines.push("  return mod?.default ?? mod;");
lines.push("}");

fs.writeFileSync(outFile, lines.join("\n"), "utf8");
console.log(`✅ Wrote ${path.relative(projectRoot, outFile)} with ${jsonFiles.length} JSON entries.`);
