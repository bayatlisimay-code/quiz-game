const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();
const setsRoot = path.join(projectRoot, "data", "questionBank", "sets");
const conceptsRoot = path.join(projectRoot, "data", "concepts");

function walk(dir) {
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

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function isPartFolder(folderPath) {
  const base = path.basename(folderPath);
  return /^p\d+$/.test(base);
}

function buildSetId(relativePartPath) {
  const parts = relativePartPath.split(path.sep);
  const [topicId, subtopicId, levelId, partId] = parts;
  return `${topicId}_${subtopicId}_${levelId}_${partId}`;
}

function buildConceptFileContent(setId) {
  return `const conceptSet = {
  id: "${setId}",
  concepts: [],
};

export default conceptSet;
`;
}

function main() {
  const allFiles = walk(setsRoot);

  const quizFiles = allFiles.filter((filePath) => {
    const name = path.basename(filePath);
    return name === "quizA.json" || name === "quizB.json" || name === "quizC.json";
  });

  const partFolders = [...new Set(quizFiles.map((filePath) => path.dirname(filePath)))]
    .filter(isPartFolder)
    .sort();

  let createdCount = 0;
  let skippedCount = 0;

  for (const partFolder of partFolders) {
    const relativePartPath = path.relative(setsRoot, partFolder);
    const targetPartFolder = path.join(conceptsRoot, relativePartPath);
    const targetFile = path.join(targetPartFolder, "concepts.ts");
    const setId = buildSetId(relativePartPath);

    if (fs.existsSync(targetFile)) {
      skippedCount += 1;
      console.log(`SKIPPED: ${targetFile}`);
      continue;
    }

    ensureDir(targetPartFolder);
    fs.writeFileSync(targetFile, buildConceptFileContent(setId), "utf8");
    createdCount += 1;
    console.log(`CREATED: ${targetFile}`);
  }

  console.log("");
  console.log(`Done.`);
  console.log(`Created: ${createdCount}`);
  console.log(`Skipped: ${skippedCount}`);
}

main();