const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();
const dataRoot = path.join(projectRoot, "data");
const conceptsRoot = path.join(dataRoot, "concepts");
const outputFile = path.join(dataRoot, "conceptSets.ts");

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push(fullPath);
    }
  }

  return results;
}

function toImportName(filePathFromDataRoot) {
  return filePathFromDataRoot
    .replace(/\.ts$/, "")
    .replace(/[\/\\]/g, "_")
    .replace(/[^a-zA-Z0-9_]/g, "_");
}

function toSetKey(filePathFromDataRoot) {
  const normalized = filePathFromDataRoot.replace(/\\/g, "/");
  const parts = normalized.replace(/\.ts$/, "").split("/");

  // concepts/art/painting/l1/p1/concepts
  const sliced = parts.slice(1, parts.length - 1);

  return sliced.join("_");
}

function buildFileContent(files) {
  const lines = [];

  lines.push('import type { Concept } from "../src/quizEngine/conceptTypes";');
  lines.push("");

  for (const file of files) {
    const relativeFromDataRoot = path.relative(dataRoot, file).replace(/\\/g, "/");
    const importName = toImportName(relativeFromDataRoot);
    const importPath = "./" + relativeFromDataRoot.replace(/\.ts$/, "");

    lines.push(`import ${importName} from "${importPath}";`);
  }

  lines.push("");
  lines.push("type RawConcept = {");
  lines.push("  id: string;");
  lines.push("  topicId: string;");
  lines.push("  subtopicId: string;");
  lines.push("  levelId: string;");
  lines.push("  partId: string;");
  lines.push("  relation: string;");
  lines.push("  subject: string;");
  lines.push("  object: string;");
  lines.push("  answerKind?: string;");
  lines.push("  difficulty?: number;");
  lines.push("  distractorGroup?: string;");
  lines.push("  tags?: string[];");
  lines.push("  context?: string;");
  lines.push("};");
  lines.push("");
  lines.push("type RawConceptSet = {");
  lines.push("  id: string;");
  lines.push("  concepts: RawConcept[];");
  lines.push("};");
  lines.push("");
  lines.push("function toConceptSet(raw: RawConceptSet): { id: string; concepts: Concept[] } {");
  lines.push("  const concepts: Concept[] = (raw.concepts ?? []).map((c) => ({");
  lines.push("    id: String(c.id),");
  lines.push("    topicId: String(c.topicId),");
  lines.push("    subtopicId: String(c.subtopicId),");
  lines.push("    levelId: String(c.levelId),");
  lines.push("    partId: String(c.partId),");
  lines.push("    relation: String(c.relation),");
  lines.push("    subject: String(c.subject),");
  lines.push("    object: String(c.object),");
  lines.push('    answerKind: c.answerKind === "long" ? "long" : "short",');
  lines.push("    difficulty: Number(c.difficulty ?? 1) as any,");
  lines.push("    distractorGroup: c.distractorGroup ? String(c.distractorGroup) : undefined,");
  lines.push("    tags: Array.isArray(c.tags) ? c.tags.map(String) : undefined,");
  lines.push("    context: c.context ? String(c.context) : undefined,");
  lines.push("  }));");
  lines.push("");
  lines.push("  return { id: String(raw.id), concepts };");
  lines.push("}");
  lines.push("");
  lines.push("export const CONCEPT_SETS: Record<string, { id: string; concepts: Concept[] }> = {");

  for (const file of files) {
    const relativeFromDataRoot = path.relative(dataRoot, file).replace(/\\/g, "/");
    const importName = toImportName(relativeFromDataRoot);
    const setKey = toSetKey(relativeFromDataRoot);

    lines.push(`  ${JSON.stringify(setKey)}: toConceptSet(${importName}),`);
  }

  lines.push("};");
  lines.push("");

  return lines.join("\n");
}

function main() {
  const allFiles = walk(conceptsRoot)
    .filter((file) => path.basename(file) === "concepts.ts")
    .sort();

  const fileContent = buildFileContent(allFiles);
  fs.writeFileSync(outputFile, fileContent, "utf8");

  console.log(`Generated data/conceptSets.ts with ${allFiles.length} entries.`);
}

main();